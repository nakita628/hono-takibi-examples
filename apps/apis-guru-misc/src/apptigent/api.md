<h1 id="powertools-developer">PowerTools Developer v2021.1.01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Apptigent PowerTools Developer Edition is a powerful suite of API endpoints for custom applications running on any stack. Manipulate text, modify collections, format dates and times, convert currency, perform advanced mathematical calculations, shorten URL's, encode strings, convert text to speech, translate content into multiple languages, process images, and more. PowerTools is the ultimate developer toolkit.

Base URLs:

* <a href="https://connect.apptigent.com/api/utilities">https://connect.apptigent.com/api/utilities</a>

Email: <a href="mailto:support@apptigent.com">Customer Support</a> 
Web: <a href="https://www.apptigent.com/help/">Customer Support</a> 

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **X-IBM-Client-Id**, in: header.

<h1 id="powertools-developer-collections">Collections</h1>

Arrays of base values (strings and numbers).

## Collections - Add to collection

<a id="opIdAddToCollection"></a>

> Code samples

```bash
curl https://example.com/AddToCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "index": "0",
    "input": [
      "a",
      "b",
      "c"
    ],
    "item": "d",
    "items": ""
  }'
```

`POST /AddToCollection`

Add an item to a collection

> Body parameter

```json
{
  "index": "0",
  "input": [
    "a",
    "b",
    "c"
  ],
  "item": "d",
  "items": ""
}
```

<h3 id="collections---add-to-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionModify](#schemainputcollectionmodify)|false|Collection modification parameters|
|» index|body|string|false|Index position for operation (leave blank to specify end of collection)|
|» input|body|[string]|true|Collection of values or objects to modify|
|» item|body|string|false|Item (for multiple items, leave blank and use Items)|
|» items|body|[string]|false|Items (Collection, for a single item leave blank and use Item)|

> Example responses

> 200 Response

```json
{
  "result": [
    "a",
    "b",
    "c"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---add-to-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionResult](#schemaoutputcollectionresult)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Contains number

<a id="opIdCollectionContainsNumber"></a>

> Code samples

```bash
curl https://example.com/CollectionContainsNumber \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      1.25,
      10.5,
      20.75,
      51.25,
      119.6,
      301.25
    ],
    "match": "1.25,",
    "type": "Decimal"
  }'
```

`POST /CollectionContainsNumber`

Determine if a collection contains a specific number

> Body parameter

```json
{
  "input": [
    1.25,
    10.5,
    20.75,
    51.25,
    119.6,
    301.25
  ],
  "match": "1.25,",
  "type": "Decimal"
}
```

<h3 id="collections---contains-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionSearchNumeric](#schemainputcollectionsearchnumeric)|false|Collection search parameters|
|» input|body|[number]|true|Collection of strings to search|
|» match|body|number|true|Number to match|
|» type|body|string|false|Type of number - integer or decimal|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|Integer|
|» type|Decimal|

> Example responses

> 200 Response

```json
{
  "item": 1.25,
  "items": [
    1.25,
    2.5,
    3.75
  ],
  "status": false
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---contains-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionNumber](#schemaoutputcollectionnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Contains string

<a id="opIdCollectionContainsString"></a>

> Code samples

```bash
curl https://example.com/CollectionContainsString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "ignorecase": true,
    "input": [
      "the",
      "brown",
      "cow "
    ],
    "match": "cow",
    "trim": true
  }'
```

`POST /CollectionContainsString`

Determine if any items in a collection contain a specific string

> Body parameter

```json
{
  "ignorecase": true,
  "input": [
    "the",
    "brown",
    "cow "
  ],
  "match": "cow",
  "trim": true
}
```

<h3 id="collections---contains-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionSearch](#schemainputcollectionsearch)|false|Collection search parameters|
|» ignorecase|body|string|false|Ignore case when performing comparison|
|» input|body|[string]|true|Collection of strings to search|
|» match|body|string|true|Text to match|
|» trim|body|string|false|Trim white space from comparison string|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ignorecase|true|
|» ignorecase|false|
|» trim|true|
|» trim|false|

> Example responses

> 200 Response

```json
{
  "item": "string",
  "items": [
    "string"
  ],
  "status": false
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---contains-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionString](#schemaoutputcollectionstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Ends with string

<a id="opIdCollectionEndsWithString"></a>

> Code samples

```bash
curl https://example.com/CollectionEndsWithString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "ignorecase": true,
    "input": [
      "the",
      "brown",
      "cow "
    ],
    "match": "cow",
    "trim": true
  }'
```

`POST /CollectionEndsWithString`

Determine if any items in a collection end with a specific string

> Body parameter

```json
{
  "ignorecase": true,
  "input": [
    "the",
    "brown",
    "cow "
  ],
  "match": "cow",
  "trim": true
}
```

<h3 id="collections---ends-with-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionSearch](#schemainputcollectionsearch)|false|Collection search parameters|
|» ignorecase|body|string|false|Ignore case when performing comparison|
|» input|body|[string]|true|Collection of strings to search|
|» match|body|string|true|Text to match|
|» trim|body|string|false|Trim white space from comparison string|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ignorecase|true|
|» ignorecase|false|
|» trim|true|
|» trim|false|

> Example responses

> 200 Response

```json
{
  "item": "string",
  "items": [
    "string"
  ],
  "status": false
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---ends-with-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionString](#schemaoutputcollectionstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Starts with string

<a id="opIdCollectionStartsWithString"></a>

> Code samples

```bash
curl https://example.com/CollectionStartsWithString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "ignorecase": true,
    "input": [
      "the",
      "brown",
      "cow "
    ],
    "match": "cow",
    "trim": true
  }'
```

`POST /CollectionStartsWithString`

Determine if any items in a collection start with a specific string

> Body parameter

```json
{
  "ignorecase": true,
  "input": [
    "the",
    "brown",
    "cow "
  ],
  "match": "cow",
  "trim": true
}
```

<h3 id="collections---starts-with-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionSearch](#schemainputcollectionsearch)|false|Collection search parameters|
|» ignorecase|body|string|false|Ignore case when performing comparison|
|» input|body|[string]|true|Collection of strings to search|
|» match|body|string|true|Text to match|
|» trim|body|string|false|Trim white space from comparison string|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ignorecase|true|
|» ignorecase|false|
|» trim|true|
|» trim|false|

> Example responses

> 200 Response

```json
{
  "item": "string",
  "items": [
    "string"
  ],
  "status": false
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---starts-with-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionString](#schemaoutputcollectionstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Collection to JSON

<a id="opIdCollectionToJSON"></a>

> Code samples

```bash
curl https://example.com/CollectionToJSON \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "name": "Items"
  }'
```

`POST /CollectionToJSON`

Convert a collection to a named JSON object

> Body parameter

```json
{
  "input": [
    "a",
    "b",
    "c",
    "d",
    "e"
  ],
  "name": "Items"
}
```

<h3 id="collections---collection-to-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionConversion](#schemainputcollectionconversion)|false|none|
|» input|body|[string]|true|Collection containing strings to convert|
|» name|body|string|true|Collection name|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---collection-to-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Collection to XML

<a id="opIdCollectionToXml"></a>

> Code samples

```bash
curl https://example.com/CollectionToXML \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "child": "Item",
    "input": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "root": "Items"
  }'
```

`POST /CollectionToXML`

Convert a collection to an XML string

> Body parameter

```json
{
  "child": "Item",
  "input": [
    "a",
    "b",
    "c",
    "d",
    "e"
  ],
  "root": "Items"
}
```

<h3 id="collections---collection-to-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionConversionXML](#schemainputcollectionconversionxml)|false|none|
|» child|body|string|true|Name of child XML node(s)|
|» input|body|[string]|true|Collection containing strings to convert|
|» root|body|string|true|Name of root XML node|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---collection-to-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Count collection

<a id="opIdCountCollection"></a>

> Code samples

```bash
curl https://example.com/CountCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      "a",
      "d",
      "c",
      "b",
      "e"
    ]
  }'
```

`POST /CountCollection`

Count a collection of items

> Body parameter

```json
{
  "input": [
    "a",
    "d",
    "c",
    "b",
    "e"
  ]
}
```

<h3 id="collections---count-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionCount](#schemainputcollectioncount)|false|Count collection parameters|
|» input|body|[string]|true|Collection of items to count|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---count-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Filter collection

<a id="opIdFilterCollection"></a>

> Code samples

```bash
curl https://example.com/FilterCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      "the cow",
      "jumped over",
      "the moon"
    ],
    "keywords": "cow,moon",
    "match": "Any"
  }'
```

`POST /FilterCollection`

Filter a collection of strings by keyword

> Body parameter

```json
{
  "input": [
    "the cow",
    "jumped over",
    "the moon"
  ],
  "keywords": "cow,moon",
  "match": "Any"
}
```

<h3 id="collections---filter-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionFilter](#schemainputcollectionfilter)|false|Filter collection parameters|
|» input|body|[string]|true|Collection of strings to filter|
|» keywords|body|string|true|Keywords (separate multiple values with commas)|
|» match|body|string|true|Match type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» match|Any|
|» match|All|
|» match|None|

> Example responses

> 200 Response

```json
{
  "result": [
    "a",
    "b",
    "c"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---filter-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionResult](#schemaoutputcollectionresult)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Remove from collection

<a id="opIdRemoveFromCollection"></a>

> Code samples

```bash
curl https://example.com/RemoveFromCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "index": "0",
    "input": [
      "a",
      "b",
      "c"
    ],
    "item": "d",
    "items": ""
  }'
```

`POST /RemoveFromCollection`

Remove an item from a collection

> Body parameter

```json
{
  "index": "0",
  "input": [
    "a",
    "b",
    "c"
  ],
  "item": "d",
  "items": ""
}
```

<h3 id="collections---remove-from-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionModify](#schemainputcollectionmodify)|false|Collection modification parameters|
|» index|body|string|false|Index position for operation (leave blank to specify end of collection)|
|» input|body|[string]|true|Collection of values or objects to modify|
|» item|body|string|false|Item (for multiple items, leave blank and use Items)|
|» items|body|[string]|false|Items (Collection, for a single item leave blank and use Item)|

> Example responses

> 200 Response

```json
{
  "result": [
    "a",
    "b",
    "c"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---remove-from-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionResult](#schemaoutputcollectionresult)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Replace values in collection

<a id="opIdReplaceValuesInCollection"></a>

> Code samples

```bash
curl https://example.com/ReplaceValuesInCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "ignoreCase": true,
    "input": [
      "the brown cow",
      "jumped over",
      "the brown dog"
    ],
    "match": "Brown",
    "replacement": "spotted"
  }'
```

`POST /ReplaceValuesInCollection`

Replace whole or partial strings in a collection

> Body parameter

```json
{
  "ignoreCase": true,
  "input": [
    "the brown cow",
    "jumped over",
    "the brown dog"
  ],
  "match": "Brown",
  "replacement": "spotted"
}
```

<h3 id="collections---replace-values-in-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionReplace](#schemainputcollectionreplace)|false|Replace values in collection parameters|
|» ignoreCase|body|string|true|Ignore case|
|» input|body|[string]|true|Collection of strings|
|» match|body|string|true|Match value|
|» replacement|body|string|true|Replacement value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ignoreCase|true|
|» ignoreCase|false|

> Example responses

> 200 Response

```json
{
  "result": [
    "a",
    "b",
    "c"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---replace-values-in-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionResult](#schemaoutputcollectionresult)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Sort collection

<a id="opIdSortCollection"></a>

> Code samples

```bash
curl https://example.com/SortCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      "a",
      "d",
      "c",
      "b",
      "e"
    ],
    "order": "Ascending"
  }'
```

`POST /SortCollection`

Sort a collection of strings

> Body parameter

```json
{
  "input": [
    "a",
    "d",
    "c",
    "b",
    "e"
  ],
  "order": "Ascending"
}
```

<h3 id="collections---sort-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionSort](#schemainputcollectionsort)|false|Sort collection parameters|
|» input|body|[string]|true|Collection of strings to sort|
|» order|body|string|true|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order|Ascending|
|» order|Descending|

> Example responses

> 200 Response

```json
{
  "result": [
    "a",
    "b",
    "c"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---sort-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputCollectionResult](#schemaoutputcollectionresult)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Collections - Split collection

<a id="opIdSplitCollection"></a>

> Code samples

```bash
curl https://example.com/SplitCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "index": "",
    "input": [
      "the cow",
      "jumped over",
      "the moon"
    ],
    "match": "jumped over"
  }'
```

`POST /SplitCollection`

Split a collection of items by matching value or index

> Body parameter

```json
{
  "index": "",
  "input": [
    "the cow",
    "jumped over",
    "the moon"
  ],
  "match": "jumped over"
}
```

<h3 id="collections---split-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCollectionSplit](#schemainputcollectionsplit)|false|Split collection parameters|
|» index|body|string|false|Index location to split (leave empty to use Match value)|
|» input|body|[string]|true|Collection of items to split|
|» match|body|string|false|String to match (explicit, case-insensitive, leave empty to use Index)|

> Example responses

> 200 Response

```json
{
  "result1": [
    "a",
    "b",
    "c"
  ],
  "result2": [
    "d",
    "e",
    "f"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="collections---split-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputMultiCollection](#schemaoutputmulticollection)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

<h1 id="powertools-developer-data">Data</h1>

Data conversion operations.

## Data - CSV to JSON

<a id="opIdCsvToJson"></a>

> Code samples

```bash
curl https://example.com/CSVtoJSON \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "header": true,
    "input": "Property1,Property2,Property3\r\nvalue,value,value\r\nvalue,value,value"
  }'
```

`POST /CSVtoJSON`

Convert a CSV string to a JSON array

> Body parameter

```json
{
  "header": true,
  "input": "Property1,Property2,Property3\r\nvalue,value,value\r\nvalue,value,value"
}
```

<h3 id="data---csv-to-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCsvConversionJSON](#schemainputcsvconversionjson)|false|none|
|» header|body|boolean|true|Include header row|
|» input|body|string|true|CSV string|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---csv-to-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Data - JSON to CSV

<a id="opIdJsonToCsv"></a>

> Code samples

```bash
curl https://example.com/JSONtoCSV \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "header": true,
    "input": [
      {
        "property1": "value"
      },
      {
        "property2": "value"
      },
      {
        "property3": "value"
      }
    ],
    "omit": "property1",
    "order": "property3,property2"
  }'
```

`POST /JSONtoCSV`

Convert a JSON array to CSV string

> Body parameter

```json
{
  "header": true,
  "input": [
    {
      "property1": "value"
    },
    {
      "property2": "value"
    },
    {
      "property3": "value"
    }
  ],
  "omit": "property1",
  "order": "property3,property2"
}
```

<h3 id="data---json-to-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputJsonConversionCSV](#schemainputjsonconversioncsv)|false|none|
|» header|body|boolean|true|Include header row|
|» input|body|string|true|JSON array object|
|» omit|body|string|false|Columns to omit (comma separated)|
|» order|body|string|false|Column order (comma separated)|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---json-to-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Data - JSON to HTML Table

<a id="opIdJsonToHtml"></a>

> Code samples

```bash
curl https://example.com/JSONtoHTML \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "alternate": "<tr><th>Property 3</th><th>Property 2</th></tr>",
    "attributes": "style='\''width:100%;text-align:center;'\''",
    "header": false,
    "input": [
      {
        "property1": "value"
      },
      {
        "property2": "value"
      },
      {
        "property3": "value"
      }
    ],
    "omit": "property1",
    "order": "property3,property2"
  }'
```

`POST /JSONtoHTML`

Convert a JSON array to an HTML table

> Body parameter

```json
{
  "alternate": "<tr><th>Property 3</th><th>Property 2</th></tr>",
  "attributes": "style='width:100%;text-align:center;'",
  "header": false,
  "input": [
    {
      "property1": "value"
    },
    {
      "property2": "value"
    },
    {
      "property3": "value"
    }
  ],
  "omit": "property1",
  "order": "property3,property2"
}
```

<h3 id="data---json-to-html-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputJsonConversionHTML](#schemainputjsonconversionhtml)|false|none|
|» alternate|body|string|false|Alternate header row markup|
|» attributes|body|string|false|Optional table attributes (single quoted values)|
|» header|body|boolean|true|Include header row|
|» input|body|string|true|JSON array object|
|» omit|body|string|false|Columns to omit (comma separated)|
|» order|body|string|false|Column order (comma separated)|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---json-to-html-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Data - JSON to XML

<a id="opIdJsonToXml"></a>

> Code samples

```bash
curl https://example.com/JSONtoXML \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": "{\"property1\":\"value\",\"property2\":\"value\",\"property3\":\"value\"}",
    "root": "Properties"
  }'
```

`POST /JSONtoXML`

Convert a JSON object to an XML string

> Body parameter

```json
{
  "input": "{\"property1\":\"value\",\"property2\":\"value\",\"property3\":\"value\"}",
  "root": "Properties"
}
```

<h3 id="data---json-to-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputJsonConversionXML](#schemainputjsonconversionxml)|false|none|
|» input|body|string|true|JSON array object|
|» root|body|string|true|Name of root node|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---json-to-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Data - Query JSON

<a id="opIdQueryJson"></a>

> Code samples

```bash
curl https://example.com/QueryJSON \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": "{\"properties\": [{\"name\":\"ID\",\"value\":\"1234\"},{\"name\":\"Title\",\"value\":\"Some Title\"}]}",
    "query": "$.properties[?(@.name == \"ID\")].value"
  }'
```

`POST /QueryJSON`

Query a JSON object using a JSONPath expression

> Body parameter

```json
{
  "input": "{\"properties\": [{\"name\":\"ID\",\"value\":\"1234\"},{\"name\":\"Title\",\"value\":\"Some Title\"}]}",
  "query": "$.properties[?(@.name == \"ID\")].value"
}
```

<h3 id="data---query-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputDataQuery](#schemainputdataquery)|false|none|
|» input|body|string|true|XML or JSON string|
|» query|body|string|true|XPath or JSONPath query|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---query-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Data - Query XML

<a id="opIdQueryXml"></a>

> Code samples

```bash
curl https://example.com/QueryXML \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": "{\"properties\": [{\"name\":\"ID\",\"value\":\"1234\"},{\"name\":\"Title\",\"value\":\"Some Title\"}]}",
    "query": "$.properties[?(@.name == \"ID\")].value"
  }'
```

`POST /QueryXML`

Query an XML string using an XPath expression

> Body parameter

```json
{
  "input": "{\"properties\": [{\"name\":\"ID\",\"value\":\"1234\"},{\"name\":\"Title\",\"value\":\"Some Title\"}]}",
  "query": "$.properties[?(@.name == \"ID\")].value"
}
```

<h3 id="data---query-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputDataQuery](#schemainputdataquery)|false|none|
|» input|body|string|true|XML or JSON string|
|» query|body|string|true|XPath or JSONPath query|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---query-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Data - XML to JSON

<a id="opIdXmlToJson"></a>

> Code samples

```bash
curl https://example.com/XMLtoJSON \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": "<properties><property1>value</property1></properties>"
  }'
```

`POST /XMLtoJSON`

Convert an XML string to a JSON object

> Body parameter

```json
{
  "input": "<properties><property1>value</property1></properties>"
}
```

<h3 id="data---xml-to-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputXmlConversionJSON](#schemainputxmlconversionjson)|false|none|
|» input|body|string|true|XML string|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="data---xml-to-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

<h1 id="powertools-developer-datetime">DateTime</h1>

Date and time operations.

## DateTime - DateTime difference

<a id="opIdDateTimeDifference"></a>

> Code samples

```bash
curl https://example.com/DateTimeDifference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "dateTime1": "1/1/2010 12:37:19",
    "dateTime2": "3/15/2011 14:27:49"
  }'
```

`POST /DateTimeDifference`

Calculate the difference between two dates

> Body parameter

```json
{
  "dateTime1": "1/1/2010 12:37:19",
  "dateTime2": "3/15/2011 14:27:49"
}
```

<h3 id="datetime---datetime-difference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputDateTimeDifference](#schemainputdatetimedifference)|false|none|
|» dateTime1|body|string|true|First date/time value|
|» dateTime2|body|string|true|Second date/time value|

> Example responses

> 200 Response

```json
{
  "days": 14,
  "hours": 1,
  "milliseconds": 0,
  "minutes": 50,
  "months": 2,
  "seconds": 30,
  "ticks": 378498300000000,
  "totalDays": 438.08,
  "totalHours": 10513.84,
  "totalMilliseconds": 37849830000,
  "totalMinutes": 630830.5,
  "totalMonths": 14.39,
  "totalSeconds": 37849830,
  "totalYears": 1.2,
  "years": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="datetime---datetime-difference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputDateDifference](#schemaoutputdatedifference)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## DateTime - Get date and time information

<a id="opIdDateTimeInfo"></a>

> Code samples

```bash
curl https://example.com/DateTimeInfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "culture": "en-GB",
    "input": "03/10/2010 09:00:00"
  }'
```

`POST /DateTimeInfo`

Retrieve useful date and time information, such as day of year, total seconds and ticks

> Body parameter

```json
{
  "culture": "en-GB",
  "input": "03/10/2010 09:00:00"
}
```

<h3 id="datetime---get-date-and-time-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputDateTimeInfo](#schemainputdatetimeinfo)|false|none|
|» culture|body|string|true|Language culture|
|» input|body|string|true|Source date and time|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» culture|en-US|
|» culture|af-ZA|
|» culture|ar-AE|
|» culture|ar-BH|
|» culture|ar-DZ|
|» culture|ar-EG|
|» culture|ar-IQ|
|» culture|ar-JO|
|» culture|ar-KW|
|» culture|ar-LB|
|» culture|ar-LY|
|» culture|ar-MA|
|» culture|ar-OM|
|» culture|ar-QA|
|» culture|ar-SA|
|» culture|ar-SY|
|» culture|ar-TN|
|» culture|ar-YE|
|» culture|az-AZ|
|» culture|be-BY|
|» culture|bg-BG|
|» culture|bs-BA|
|» culture|ca-ES|
|» culture|cs-CZ|
|» culture|cy-GB|
|» culture|da-DK|
|» culture|de-AT|
|» culture|de-CH|
|» culture|de-DE|
|» culture|de-LI|
|» culture|de-LU|
|» culture|el-GR|
|» culture|en-AU|
|» culture|en-BZ|
|» culture|en-CA|
|» culture|en-CB|
|» culture|en-GB|
|» culture|en-IE|
|» culture|en-JM|
|» culture|en-NZ|
|» culture|en-PH|
|» culture|en-TT|
|» culture|en-ZA|
|» culture|en-ZW|
|» culture|es-AR|
|» culture|es-BO|
|» culture|es-CL|
|» culture|es-CO|
|» culture|es-CR|
|» culture|es-DO|
|» culture|es-EC|
|» culture|es-ES|
|» culture|es-GT|
|» culture|es-HN|
|» culture|es-MX|
|» culture|es-NI|
|» culture|es-PA|
|» culture|es-PE|
|» culture|es-PR|
|» culture|es-PY|
|» culture|es-SV|
|» culture|es-UY|
|» culture|es-VE|
|» culture|et-EE|
|» culture|eu-ES|
|» culture|fa-IR|
|» culture|fi-FI|
|» culture|fo-FO|
|» culture|fr-BE|
|» culture|fr-CA|
|» culture|fr-CH|
|» culture|fr-FR|
|» culture|fr-LU|
|» culture|fr-MC|
|» culture|gl-ES|
|» culture|gu-IN|
|» culture|he-IL|
|» culture|hi-IN|
|» culture|hr-BA|
|» culture|hr-HR|
|» culture|hu-HU|
|» culture|hy-AM|
|» culture|id-ID|
|» culture|is-IS|
|» culture|it-CH|
|» culture|it-IT|
|» culture|ja-JP|
|» culture|ka-GE|
|» culture|kk-KZ|
|» culture|kn-IN|
|» culture|ko-KR|
|» culture|ky-KG|
|» culture|lt-LT|
|» culture|lv-LV|
|» culture|mi-NZ|
|» culture|mn-MN|
|» culture|mr-IN|
|» culture|ms-BN|
|» culture|ms-MY|
|» culture|mt-MT|
|» culture|nl-BE|
|» culture|nl-NL|
|» culture|nn-NO|
|» culture|ns-ZA|
|» culture|pa-IN|
|» culture|pl-PL|
|» culture|ps-AR|
|» culture|pt-BR|
|» culture|pt-PT|
|» culture|ro-RO|
|» culture|ru-RU|
|» culture|sa-IN|
|» culture|sk-SK|
|» culture|sl-SI|
|» culture|sq-AL|
|» culture|sr-BA|
|» culture|sr-SP|
|» culture|sv-FI|
|» culture|sv-SE|
|» culture|sw-KE|
|» culture|ta-IN|
|» culture|te-IN|
|» culture|th-TH|
|» culture|tl-PH|
|» culture|tn-ZA|
|» culture|tr-TR|
|» culture|uk-UA|
|» culture|ur-PK|
|» culture|uz-UZ|
|» culture|vi-VN|
|» culture|zh-CN|
|» culture|zh-HK|
|» culture|zh-MO|
|» culture|zh-SG|
|» culture|zh-TW|
|» culture|zu-ZA|

> Example responses

> 200 Response

```json
{
  "DayOfWeek": 2,
  "DayOfYear": 25,
  "MinutesInDay": 359,
  "SecondsInDay": 1234,
  "Ticks": 1234567890,
  "WeekOfYear": 10
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="datetime---get-date-and-time-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputDateInfo](#schemaoutputdateinfo)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## DateTime - Format date and time

<a id="opIdFormatDateTime"></a>

> Code samples

```bash
curl https://example.com/FormatDateTime \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "culture": "en-GB",
    "format": "ddd",
    "input": "03/10/2010 00:00:00"
  }'
```

`POST /FormatDateTime`

Create a date/time string in a specific format

> Body parameter

```json
{
  "culture": "en-GB",
  "format": "ddd",
  "input": "03/10/2010 00:00:00"
}
```

<h3 id="datetime---format-date-and-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputDateTimeFormat](#schemainputdatetimeformat)|false|none|
|» culture|body|string|true|Language culture|
|» format|body|string|true|Output format|
|» input|body|string|true|Source date and time|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» culture|en-US|
|» culture|af-ZA|
|» culture|ar-AE|
|» culture|ar-BH|
|» culture|ar-DZ|
|» culture|ar-EG|
|» culture|ar-IQ|
|» culture|ar-JO|
|» culture|ar-KW|
|» culture|ar-LB|
|» culture|ar-LY|
|» culture|ar-MA|
|» culture|ar-OM|
|» culture|ar-QA|
|» culture|ar-SA|
|» culture|ar-SY|
|» culture|ar-TN|
|» culture|ar-YE|
|» culture|az-AZ|
|» culture|be-BY|
|» culture|bg-BG|
|» culture|bs-BA|
|» culture|ca-ES|
|» culture|cs-CZ|
|» culture|cy-GB|
|» culture|da-DK|
|» culture|de-AT|
|» culture|de-CH|
|» culture|de-DE|
|» culture|de-LI|
|» culture|de-LU|
|» culture|el-GR|
|» culture|en-AU|
|» culture|en-BZ|
|» culture|en-CA|
|» culture|en-CB|
|» culture|en-GB|
|» culture|en-IE|
|» culture|en-JM|
|» culture|en-NZ|
|» culture|en-PH|
|» culture|en-TT|
|» culture|en-ZA|
|» culture|en-ZW|
|» culture|es-AR|
|» culture|es-BO|
|» culture|es-CL|
|» culture|es-CO|
|» culture|es-CR|
|» culture|es-DO|
|» culture|es-EC|
|» culture|es-ES|
|» culture|es-GT|
|» culture|es-HN|
|» culture|es-MX|
|» culture|es-NI|
|» culture|es-PA|
|» culture|es-PE|
|» culture|es-PR|
|» culture|es-PY|
|» culture|es-SV|
|» culture|es-UY|
|» culture|es-VE|
|» culture|et-EE|
|» culture|eu-ES|
|» culture|fa-IR|
|» culture|fi-FI|
|» culture|fo-FO|
|» culture|fr-BE|
|» culture|fr-CA|
|» culture|fr-CH|
|» culture|fr-FR|
|» culture|fr-LU|
|» culture|fr-MC|
|» culture|gl-ES|
|» culture|gu-IN|
|» culture|he-IL|
|» culture|hi-IN|
|» culture|hr-BA|
|» culture|hr-HR|
|» culture|hu-HU|
|» culture|hy-AM|
|» culture|id-ID|
|» culture|is-IS|
|» culture|it-CH|
|» culture|it-IT|
|» culture|ja-JP|
|» culture|ka-GE|
|» culture|kk-KZ|
|» culture|kn-IN|
|» culture|ko-KR|
|» culture|ky-KG|
|» culture|lt-LT|
|» culture|lv-LV|
|» culture|mi-NZ|
|» culture|mn-MN|
|» culture|mr-IN|
|» culture|ms-BN|
|» culture|ms-MY|
|» culture|mt-MT|
|» culture|nl-BE|
|» culture|nl-NL|
|» culture|nn-NO|
|» culture|ns-ZA|
|» culture|pa-IN|
|» culture|pl-PL|
|» culture|ps-AR|
|» culture|pt-BR|
|» culture|pt-PT|
|» culture|ro-RO|
|» culture|ru-RU|
|» culture|sa-IN|
|» culture|sk-SK|
|» culture|sl-SI|
|» culture|sq-AL|
|» culture|sr-BA|
|» culture|sr-SP|
|» culture|sv-FI|
|» culture|sv-SE|
|» culture|sw-KE|
|» culture|ta-IN|
|» culture|te-IN|
|» culture|th-TH|
|» culture|tl-PH|
|» culture|tn-ZA|
|» culture|tr-TR|
|» culture|uk-UA|
|» culture|ur-PK|
|» culture|uz-UZ|
|» culture|vi-VN|
|» culture|zh-CN|
|» culture|zh-HK|
|» culture|zh-MO|
|» culture|zh-SG|
|» culture|zh-TW|
|» culture|zu-ZA|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="datetime---format-date-and-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## DateTime - Get world time

<a id="opIdWorldTime"></a>

> Code samples

```bash
curl https://example.com/WorldTime \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "format": "yyyy-MM-dd HH:mm:ss",
    "input": "03/10/2010 09:00:00",
    "source": "GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
    "target": "Central Standard Time - (GMT-06:00) Central Time (US & Canada)"
  }'
```

`POST /WorldTime`

Convert date and time from one time zone to another

> Body parameter

```json
{
  "format": "yyyy-MM-dd HH:mm:ss",
  "input": "03/10/2010 09:00:00",
  "source": "GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
  "target": "Central Standard Time - (GMT-06:00) Central Time (US & Canada)"
}
```

<h3 id="datetime---get-world-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputDateTimeConversion](#schemainputdatetimeconversion)|false|none|
|» format|body|string|false|Display format (defaults to 'yyyy-MM-dd HH:mm:ss')|
|» input|body|string|true|Source date and time|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London|
|» source|Greenwich Standard Time - (GMT) Monrovia, Reykjavik|
|» source|W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna|
|» source|Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague|
|» source|Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb|
|» source|W. Central Africa Standard Time - (GMT+01:00) West Central Africa|
|» source|GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul|
|» source|Middle East Standard Time - (GMT+02:00) Beirut|
|» source|Egypt Standard Time - (GMT+02:00) Cairo|
|» source|South Africa Standard Time - (GMT+02:00) Harare, Pretoria|
|» source|FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius|
|» source|Israel Standard Time - (GMT+02:00) Jerusalem|
|» source|E. Europe Standard Time - (GMT+02:00) Minsk|
|» source|Namibia Standard Time - (GMT+02:00) Windhoek|
|» source|Arabic Standard Time - (GMT+03:00) Baghdad|
|» source|Arab Standard Time - (GMT+03:00) Kuwait, Riyadh|
|» source|Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd|
|» source|E. Africa Standard Time - (GMT+03:00) Nairobi|
|» source|Georgian Standard Time - (GMT+03:00) Tbilisi|
|» source|Iran Standard Time - (GMT+03:30) Tehran|
|» source|Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat|
|» source|Azerbaijan Standard Time - (GMT+04:00) Baku|
|» source|Mauritius Standard Time - (GMT+04:00) Port Louis|
|» source|Caucasus Standard Time - (GMT+04:00) Yerevan|
|» source|Afghanistan Standard Time - (GMT+04:30) Kabul|
|» source|Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg|
|» source|Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi|
|» source|West Asia Standard Time - (GMT+05:00) Tashkent|
|» source|India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi|
|» source|Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura|
|» source|Nepal Standard Time - (GMT+05:45) Kathmandu|
|» source|N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk|
|» source|Central Asia Standard Time - (GMT+06:00) Astana, Dhaka|
|» source|Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)|
|» source|SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta|
|» source|North Asia Standard Time - (GMT+07:00) Krasnoyarsk|
|» source|China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi|
|» source|North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar|
|» source|Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore|
|» source|W. Australia Standard Time - (GMT+08:00) Perth|
|» source|Taipei Standard Time - (GMT+08:00) Taipei|
|» source|Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo|
|» source|Korea Standard Time - (GMT+09:00) Seoul|
|» source|Yakutsk Standard Time - (GMT+09:00) Yakutsk|
|» source|Cen. Australia Standard Time - (GMT+09:30) Adelaide|
|» source|AUS Central Standard Time - (GMT+09:30) Darwin|
|» source|E. Australia Standard Time - (GMT+10:00) Brisbane|
|» source|AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney|
|» source|West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby|
|» source|Tasmania Standard Time - (GMT+10:00) Hobart|
|» source|Vladivostok Standard Time - (GMT+10:00) Vladivostok|
|» source|Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia|
|» source|New Zealand Standard Time - (GMT+12:00) Auckland, Wellington|
|» source|Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.|
|» source|Tonga Standard Time - (GMT+13:00) Nuku'alofa|
|» source|Azores Standard Time - (GMT-01:00) Azores|
|» source|Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.|
|» source|Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic|
|» source|E. South America Standard Time - (GMT-03:00) Brasilia|
|» source|Argentina Standard Time - (GMT-03:00) Buenos Aires|
|» source|SA Eastern Standard Time - (GMT-03:00) Georgetown|
|» source|Greenland Standard Time - (GMT-03:00) Greenland|
|» source|Montevideo Standard Time - (GMT-03:00) Montevideo|
|» source|Newfoundland Standard Time - (GMT-03:30) Newfoundland|
|» source|Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)|
|» source|SA Western Standard Time - (GMT-04:00) La Paz|
|» source|Central Brazilian Standard Time - (GMT-04:00) Manaus|
|» source|Pacific SA Standard Time - (GMT-04:00) Santiago|
|» source|Venezuela Standard Time - (GMT-04:30) Caracas|
|» source|SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco|
|» source|Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)|
|» source|US Eastern Standard Time - (GMT-05:00) Indiana (East)|
|» source|Central America Standard Time - (GMT-06:00) Central America|
|» source|Central Standard Time - (GMT-06:00) Central Time (US & Canada)|
|» source|Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey|
|» source|Canada Central Standard Time - (GMT-06:00) Saskatchewan|
|» source|US Mountain Standard Time - (GMT-07:00) Arizona|
|» source|Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan|
|» source|Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)|
|» source|Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)|
|» source|Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California|
|» source|Alaskan Standard Time - (GMT-09:00) Alaska|
|» source|Hawaiian Standard Time - (GMT-10:00) Hawaii|
|» source|Samoa Standard Time - (GMT-11:00) Midway Island, Samoa|
|» source|Dateline Standard Time - (GMT-12:00) International Date Line West|
|» target|GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London|
|» target|Greenwich Standard Time - (GMT) Monrovia, Reykjavik|
|» target|W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna|
|» target|Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague|
|» target|Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb|
|» target|W. Central Africa Standard Time - (GMT+01:00) West Central Africa|
|» target|GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul|
|» target|Middle East Standard Time - (GMT+02:00) Beirut|
|» target|Egypt Standard Time - (GMT+02:00) Cairo|
|» target|South Africa Standard Time - (GMT+02:00) Harare, Pretoria|
|» target|FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius|
|» target|Israel Standard Time - (GMT+02:00) Jerusalem|
|» target|E. Europe Standard Time - (GMT+02:00) Minsk|
|» target|Namibia Standard Time - (GMT+02:00) Windhoek|
|» target|Arabic Standard Time - (GMT+03:00) Baghdad|
|» target|Arab Standard Time - (GMT+03:00) Kuwait, Riyadh|
|» target|Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd|
|» target|E. Africa Standard Time - (GMT+03:00) Nairobi|
|» target|Georgian Standard Time - (GMT+03:00) Tbilisi|
|» target|Iran Standard Time - (GMT+03:30) Tehran|
|» target|Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat|
|» target|Azerbaijan Standard Time - (GMT+04:00) Baku|
|» target|Mauritius Standard Time - (GMT+04:00) Port Louis|
|» target|Caucasus Standard Time - (GMT+04:00) Yerevan|
|» target|Afghanistan Standard Time - (GMT+04:30) Kabul|
|» target|Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg|
|» target|Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi|
|» target|West Asia Standard Time - (GMT+05:00) Tashkent|
|» target|India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi|
|» target|Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura|
|» target|Nepal Standard Time - (GMT+05:45) Kathmandu|
|» target|N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk|
|» target|Central Asia Standard Time - (GMT+06:00) Astana, Dhaka|
|» target|Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)|
|» target|SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta|
|» target|North Asia Standard Time - (GMT+07:00) Krasnoyarsk|
|» target|China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi|
|» target|North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar|
|» target|Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore|
|» target|W. Australia Standard Time - (GMT+08:00) Perth|
|» target|Taipei Standard Time - (GMT+08:00) Taipei|
|» target|Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo|
|» target|Korea Standard Time - (GMT+09:00) Seoul|
|» target|Yakutsk Standard Time - (GMT+09:00) Yakutsk|
|» target|Cen. Australia Standard Time - (GMT+09:30) Adelaide|
|» target|AUS Central Standard Time - (GMT+09:30) Darwin|
|» target|E. Australia Standard Time - (GMT+10:00) Brisbane|
|» target|AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney|
|» target|West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby|
|» target|Tasmania Standard Time - (GMT+10:00) Hobart|
|» target|Vladivostok Standard Time - (GMT+10:00) Vladivostok|
|» target|Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia|
|» target|New Zealand Standard Time - (GMT+12:00) Auckland, Wellington|
|» target|Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.|
|» target|Tonga Standard Time - (GMT+13:00) Nuku'alofa|
|» target|Azores Standard Time - (GMT-01:00) Azores|
|» target|Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.|
|» target|Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic|
|» target|E. South America Standard Time - (GMT-03:00) Brasilia|
|» target|Argentina Standard Time - (GMT-03:00) Buenos Aires|
|» target|SA Eastern Standard Time - (GMT-03:00) Georgetown|
|» target|Greenland Standard Time - (GMT-03:00) Greenland|
|» target|Montevideo Standard Time - (GMT-03:00) Montevideo|
|» target|Newfoundland Standard Time - (GMT-03:30) Newfoundland|
|» target|Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)|
|» target|SA Western Standard Time - (GMT-04:00) La Paz|
|» target|Central Brazilian Standard Time - (GMT-04:00) Manaus|
|» target|Pacific SA Standard Time - (GMT-04:00) Santiago|
|» target|Venezuela Standard Time - (GMT-04:30) Caracas|
|» target|SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco|
|» target|Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)|
|» target|US Eastern Standard Time - (GMT-05:00) Indiana (East)|
|» target|Central America Standard Time - (GMT-06:00) Central America|
|» target|Central Standard Time - (GMT-06:00) Central Time (US & Canada)|
|» target|Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey|
|» target|Canada Central Standard Time - (GMT-06:00) Saskatchewan|
|» target|US Mountain Standard Time - (GMT-07:00) Arizona|
|» target|Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan|
|» target|Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)|
|» target|Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)|
|» target|Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California|
|» target|Alaskan Standard Time - (GMT-09:00) Alaska|
|» target|Hawaiian Standard Time - (GMT-10:00) Hawaii|
|» target|Samoa Standard Time - (GMT-11:00) Midway Island, Samoa|
|» target|Dateline Standard Time - (GMT-12:00) International Date Line West|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="datetime---get-world-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

<h1 id="powertools-developer-finance">Finance</h1>

Financial calculations and conversions.

## Currency - Convert currency

<a id="opIdConvertCurrency"></a>

> Code samples

```bash
curl https://example.com/ConvertCurrency \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 100.25,
    "source": "USD",
    "target": "CAD"
  }'
```

`POST /ConvertCurrency`

Calculate monetary value in a different currency

> Body parameter

```json
{
  "input": 100.25,
  "source": "USD",
  "target": "CAD"
}
```

<h3 id="currency---convert-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCurrencyConversion](#schemainputcurrencyconversion)|false|none|
|» input|body|number|true|Amount to convert|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|USD|
|» source|AUD|
|» source|BGN|
|» source|BRL|
|» source|CAD|
|» source|CHF|
|» source|CNY|
|» source|CZK|
|» source|DKK|
|» source|EUR|
|» source|GBP|
|» source|HKD|
|» source|HRK|
|» source|HUF|
|» source|IDR|
|» source|ILS|
|» source|INR|
|» source|ISK|
|» source|JPY|
|» source|KRW|
|» source|MXN|
|» source|MYR|
|» source|NOK|
|» source|NZD|
|» source|PHP|
|» source|PLN|
|» source|RON|
|» source|RUB|
|» source|SGD|
|» source|SEK|
|» source|THB|
|» source|TRY|
|» source|ZAR|
|» target|USD|
|» target|AUD|
|» target|BGN|
|» target|BRL|
|» target|CAD|
|» target|CHF|
|» target|CNY|
|» target|CZK|
|» target|DKK|
|» target|EUR|
|» target|GBP|
|» target|HKD|
|» target|HRK|
|» target|HUF|
|» target|IDR|
|» target|ILS|
|» target|INR|
|» target|ISK|
|» target|JPY|
|» target|KRW|
|» target|MXN|
|» target|MYR|
|» target|NOK|
|» target|NZD|
|» target|PHP|
|» target|PLN|
|» target|RON|
|» target|RUB|
|» target|SGD|
|» target|SEK|
|» target|THB|
|» target|TRY|
|» target|ZAR|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="currency---convert-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Currency - Format currency

<a id="opIdFormatCurrency"></a>

> Code samples

```bash
curl https://example.com/FormatCurrency \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 10980.79,
    "target": "GBP"
  }'
```

`POST /FormatCurrency`

Apply currency symbol to a numeric value

> Body parameter

```json
{
  "input": 10980.79,
  "target": "GBP"
}
```

<h3 id="currency---format-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCurrencyFormat](#schemainputcurrencyformat)|false|none|
|» input|body|number|true|Amount to format|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target|USD|
|» target|AUD|
|» target|BGN|
|» target|BRL|
|» target|CAD|
|» target|CHF|
|» target|CNY|
|» target|CZK|
|» target|DKK|
|» target|EUR|
|» target|GBP|
|» target|HKD|
|» target|HRK|
|» target|HUF|
|» target|IDR|
|» target|ILS|
|» target|INR|
|» target|ISK|
|» target|JPY|
|» target|KRW|
|» target|MXN|
|» target|MYR|
|» target|NOK|
|» target|NZD|
|» target|PHP|
|» target|PLN|
|» target|RON|
|» target|RUB|
|» target|SGD|
|» target|SEK|
|» target|THB|
|» target|TRY|
|» target|ZAR|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="currency---format-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Finance - Market index

<a id="opIdMarketIndex"></a>

> Code samples

```bash
curl https://example.com/MarketIndex \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "date": "2020-10-07T00:00:00.000Z",
    "symbol": "DJI.INDX"
  }'
```

`POST /MarketIndex`

Get current and historical market index information

> Body parameter

```json
{
  "date": "2020-10-07T00:00:00.000Z",
  "symbol": "DJI.INDX"
}
```

<h3 id="finance---market-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputMarketIndex](#schemainputmarketindex)|false|none|
|» date|body|string|false|Date (yyyy-MM-dd, leave empty for last trading day)|
|» symbol|body|string|true|Market index|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» symbol|DJA.INDX (Dow Jones Composite Average)|
|» symbol|DJI.INDX (Dow Jones Industrial Average)|
|» symbol|DJT.INDX (Dow Jones Transportation)|
|» symbol|DJUS.INDX (Dow Jones US)|
|» symbol|DXY.INDX (US Dollar Index)|
|» symbol|GDOW.INDX (Global Dow USD)|
|» symbol|NY.INDX (NYSE US 100 Index)|
|» symbol|NYA.INDX (NYSE Composite)|
|» symbol|IXIC.INDX (NASDAQ Composite)|
|» symbol|NDX.INDX (NASDAQ 100)|
|» symbol|GSPC.INDX (S&P 500)|
|» symbol|ES.INDX (S&P 500 Futures)|
|» symbol|MID.INDX (S&P Midcap 400)|
|» symbol|GPTSE.INDX (S&P TSX Composite Index [Canada])|
|» symbol|FTSE.INDX (FTSE 100 Index [UK])|
|» symbol|CDAXX.INDX (DAX Composite Index [Germany])|
|» symbol|GDAXI.INDX (DAX Index [Germany])|
|» symbol|HSCE.INDX (Hang Seng China Enterprise (CEI))|
|» symbol|HSI.INDX (Hang Seng Index [Hong Kong])|
|» symbol|N100.INDX (EuroNext 100)|
|» symbol|N225.INDX (Nikkei 225 Index)|
|» symbol|RTSI.INDX (RTSI Index [Russia])|
|» symbol|SSEC.INDX (Shanghai Composite)|
|» symbol|SSMI.INDX (Swiss Market Index)|

> Example responses

> 200 Response

```json
{
  "adj_close": 72.7,
  "adj_high": 74.32,
  "adj_low": 72.245,
  "adj_open": 73.84,
  "adj_volume": 15151304,
  "close": 72.7,
  "date": "2020-10-07T00:00:00+0000",
  "exchange": "INDX",
  "high": 74.32,
  "low": 72.245,
  "open": 73.84,
  "symbol": "DJI.INDX",
  "volume": 15151304
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="finance---market-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputMarketIndex](#schemaoutputmarketindex)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Finance - Stock prices

<a id="opIdStockPrices"></a>

> Code samples

```bash
curl https://example.com/StockPrices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "date": "2020-10-07T00:00:00.000Z",
    "exchange": "XNYS (New York Stock Exchange)",
    "symbols": "MMM,CVX"
  }'
```

`POST /StockPrices`

Get current and historical stock price information

> Body parameter

```json
{
  "date": "2020-10-07T00:00:00.000Z",
  "exchange": "XNYS (New York Stock Exchange)",
  "symbols": "MMM,CVX"
}
```

<h3 id="finance---stock-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputStockPrices](#schemainputstockprices)|false|none|
|» date|body|string|false|Date (yyyy-MM-dd, leave empty for latest)|
|» exchange|body|string|false|Stock exchange|
|» symbols|body|string|true|Stock ticker symbols (comma-separated, max 20)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» exchange|XNYS (New York Stock Exchange)|
|» exchange|XNAS (NASDAQ Stock Exchange)|
|» exchange|XBRU (Euronext Brussels)|
|» exchange|XTSE (Toronto Stock Exchange)|
|» exchange|XCNQ (Candadian Securities Exchange)|
|» exchange|XSHG (Shanghai Stock Exchange)|
|» exchange|XCSE (Copenhagen Stock Exchange)|
|» exchange|XPAR (Euronext Paris)|
|» exchange|XFRA (Deutsche Borse)|
|» exchange|XHKG (Hong Kong Stock Exchange)|
|» exchange|XNSE (National Stock Exchange India)|
|» exchange|XTAE (Tel Aviv Stock Exchange)|
|» exchange|XNGO (Nagoya Stock Exchange)|
|» exchange|XFKA (Fukuoka Stock Exchange)|
|» exchange|XSAP (Sapporo Stock Exchange)|
|» exchange|XMEX (Mexican Stock Exchange)|
|» exchange|XNZE (New Zealand Stock Exchange)|
|» exchange|XLIS (Euronext Lisbon)|
|» exchange|MISX (Moscow Stock Exchange)|
|» exchange|XSES (Singapore Stock Exchange)|
|» exchange|XLON (London Stock Exchange)|
|» exchange|XASE (American Stock Exchange)|
|» exchange|XASX (Australia Stock Exchange)|
|» exchange|XDFM (Dubai Financial Market)|
|» exchange|XBKK (Stock Exchange of Thailand)|
|» exchange|XSWX (SIX Swiss Exchange)|
|» exchange|XSTO (Stockholm Stock Exchange)|
|» exchange|BMEX (Bolsas y Mercados Españoles)|
|» exchange|XJSE (Johannesburg Stock Exchange)|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "close": 72.7,
      "date": "2020-10-07T00:00:00+0000",
      "exchange": "XNYS",
      "high": 74.32,
      "last": 72.3,
      "low": 72.245,
      "open": 73.84,
      "symbol": "CVX",
      "volume": 15151304
    }
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="finance---stock-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputStockPrice](#schemaoutputstockprice)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

<h1 id="powertools-developer-math">Math</h1>

Mathematical calculations and conversions.

## Math - Calculate Absolute

<a id="opIdCalculateAbsolute"></a>

> Code samples

```bash
curl https://example.com/CalculateAbsolute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /CalculateAbsolute`

Calculate the absolute value of a number

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---calculate-absolute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-absolute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Addition

<a id="opIdCalculateAddition"></a>

> Code samples

```bash
curl https://example.com/CalculateAddition \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 4,
    "value": 2
  }'
```

`POST /CalculateAddition`

Calculate the sum of two numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

<h3 id="math---calculate-addition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumbers](#schemainputcalculatenumbers)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value|
|» value|body|number|true|Addend, subtrahend, factor, divisor or radicand|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-addition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate average

<a id="opIdCalculateAverage"></a>

> Code samples

```bash
curl https://example.com/CalculateAverage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": [
      1,
      2,
      3,
      4,
      5
    ]
  }'
```

`POST /CalculateAverage`

Calculate the average of two or more numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

<h3 id="math---calculate-average-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateSeries](#schemainputcalculateseries)|false|Series calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|[number]|true|Colllection of values to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-average-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Cosine

<a id="opIdCalculateCosine"></a>

> Code samples

```bash
curl https://example.com/CalculateCosine \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /CalculateCosine`

Calculate the cosine value of an angle

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---calculate-cosine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-cosine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Division

<a id="opIdCalculateDivision"></a>

> Code samples

```bash
curl https://example.com/CalculateDivision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 4,
    "value": 2
  }'
```

`POST /CalculateDivision`

Calculate the quotient of two numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

<h3 id="math---calculate-division-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumbers](#schemainputcalculatenumbers)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value|
|» value|body|number|true|Addend, subtrahend, factor, divisor or radicand|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-division-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Logarithm

<a id="opIdCalculateLogarithm"></a>

> Code samples

```bash
curl https://example.com/CalculateLogarithm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /CalculateLogarithm`

Calculate the logarithm of a number

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---calculate-logarithm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-logarithm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate median

<a id="opIdCalculateMedian"></a>

> Code samples

```bash
curl https://example.com/CalculateMedian \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": [
      1,
      2,
      3,
      4,
      5
    ]
  }'
```

`POST /CalculateMedian`

Calculate the median of two or more numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

<h3 id="math---calculate-median-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateSeries](#schemainputcalculateseries)|false|Series calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|[number]|true|Colllection of values to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-median-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate minimum or maximum

<a id="opIdCalculateMinMax"></a>

> Code samples

```bash
curl https://example.com/CalculateMinMax \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      1,
      2,
      3,
      4,
      5
    ],
    "type": "Minimum"
  }'
```

`POST /CalculateMinMax`

Calculate the minimum or maximum value in a sequence of numbers

> Body parameter

```json
{
  "input": [
    1,
    2,
    3,
    4,
    5
  ],
  "type": "Minimum"
}
```

<h3 id="math---calculate-minimum-or-maximum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateMinMax](#schemainputcalculateminmax)|false|Series calculation parameters|
|» input|body|[number]|true|Colllection of values to calculate|
|» type|body|string|true|Minimum or Maximum|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|Minimum|
|» type|Maximum|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-minimum-or-maximum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Modulo

<a id="opIdCalculateModulo"></a>

> Code samples

```bash
curl https://example.com/CalculateModulo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 4,
    "value": 2
  }'
```

`POST /CalculateModulo`

Calculate the remainder of dividing two numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

<h3 id="math---calculate-modulo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumbers](#schemainputcalculatenumbers)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value|
|» value|body|number|true|Addend, subtrahend, factor, divisor or radicand|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-modulo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Multiplication

<a id="opIdCalculateMultiplication"></a>

> Code samples

```bash
curl https://example.com/CalculateMultiplication \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 4,
    "value": 2
  }'
```

`POST /CalculateMultiplication`

Calculate the product of two numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

<h3 id="math---calculate-multiplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumbers](#schemainputcalculatenumbers)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value|
|» value|body|number|true|Addend, subtrahend, factor, divisor or radicand|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-multiplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Nth Root

<a id="opIdCalculateNthRoot"></a>

> Code samples

```bash
curl https://example.com/CalculateNthRoot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 4,
    "value": 2
  }'
```

`POST /CalculateNthRoot`

Calculate the n-th root of a number

> Body parameter

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

<h3 id="math---calculate-nth-root-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumbers](#schemainputcalculatenumbers)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value|
|» value|body|number|true|Addend, subtrahend, factor, divisor or radicand|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-nth-root-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate power

<a id="opIdCalculatePower"></a>

> Code samples

```bash
curl https://example.com/CalculatePower \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 5.53,
    "power": 4
  }'
```

`POST /CalculatePower`

Raise number to a specified power

> Body parameter

```json
{
  "decimals": 2,
  "input": 5.53,
  "power": 4
}
```

<h3 id="math---calculate-power-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculatePower](#schemainputcalculatepower)|false|Power calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Number to raise|
|» power|body|number|true|Power|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-power-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Sine

<a id="opIdCalculateSine"></a>

> Code samples

```bash
curl https://example.com/CalculateSine \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /CalculateSine`

Calculate the sine value of an angle

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---calculate-sine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-sine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Square Root

<a id="opIdCalculateSquareRoot"></a>

> Code samples

```bash
curl https://example.com/CalculateSquareRoot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /CalculateSquareRoot`

Calculate the square root of a number

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---calculate-square-root-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-square-root-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Subtraction

<a id="opIdCalculateSubtraction"></a>

> Code samples

```bash
curl https://example.com/CalculateSubtraction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 4,
    "value": 2
  }'
```

`POST /CalculateSubtraction`

Calculate the difference between two numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

<h3 id="math---calculate-subtraction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumbers](#schemainputcalculatenumbers)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value|
|» value|body|number|true|Addend, subtrahend, factor, divisor or radicand|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-subtraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate sum

<a id="opIdCalculateSum"></a>

> Code samples

```bash
curl https://example.com/CalculateSum \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": [
      1,
      2,
      3,
      4,
      5
    ]
  }'
```

`POST /CalculateSum`

Calculate the sum of two or more numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

<h3 id="math---calculate-sum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateSeries](#schemainputcalculateseries)|false|Series calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|[number]|true|Colllection of values to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-sum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate Tangent

<a id="opIdCalculateTangent"></a>

> Code samples

```bash
curl https://example.com/CalculateTangent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /CalculateTangent`

Calculate the tangent value of an angle

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---calculate-tangent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Number calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-tangent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate variance

<a id="opIdCalculateVariance"></a>

> Code samples

```bash
curl https://example.com/CalculateVariance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": [
      1,
      2,
      3,
      4,
      5
    ]
  }'
```

`POST /CalculateVariance`

Calculate the statistical variance of two or more numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

<h3 id="math---calculate-variance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateSeries](#schemainputcalculateseries)|false|Series calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|[number]|true|Colllection of values to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-variance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert angle

<a id="opIdConvertAngle"></a>

> Code samples

```bash
curl https://example.com/ConvertAngle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 16.036844,
    "source": "Arcminute",
    "target": "Arcsecond"
  }'
```

`POST /ConvertAngle`

Convert value from one angle measurement to another

> Body parameter

```json
{
  "input": 16.036844,
  "source": "Arcminute",
  "target": "Arcsecond"
}
```

<h3 id="math---convert-angle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertAngle](#schemainputconvertangle)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Arcminute|
|» source|Arcsecond|
|» source|Centiradian|
|» source|Deciradian|
|» source|Degree|
|» source|Gradian|
|» source|Microdegree|
|» source|Microradian|
|» source|Millidegree|
|» source|Milliradian|
|» source|Nanodegree|
|» source|Nanoradian|
|» source|Radian|
|» source|Revolution|
|» target|Arcminute|
|» target|Arcsecond|
|» target|Centiradian|
|» target|Deciradian|
|» target|Degree|
|» target|Gradian|
|» target|Microdegree|
|» target|Microradian|
|» target|Millidegree|
|» target|Milliradian|
|» target|Nanodegree|
|» target|Nanoradian|
|» target|Radian|
|» target|Revolution|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-angle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert area

<a id="opIdConvertArea"></a>

> Code samples

```bash
curl https://example.com/ConvertArea \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 0.416714,
    "source": "Acre",
    "target": "SquareFoot"
  }'
```

`POST /ConvertArea`

Convert value from one area measurement to another

> Body parameter

```json
{
  "input": 0.416714,
  "source": "Acre",
  "target": "SquareFoot"
}
```

<h3 id="math---convert-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertArea](#schemainputconvertarea)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Acre|
|» source|Hectare|
|» source|SquareCentimeter|
|» source|SquareDecimeter|
|» source|SquareFoot|
|» source|SquareInch|
|» source|SquareKilometer|
|» source|SquareMeter|
|» source|SquareMicrometer|
|» source|SquareMile|
|» source|SquareMillimeter|
|» source|SquareYard|
|» target|Acre|
|» target|Hectare|
|» target|SquareCentimeter|
|» target|SquareDecimeter|
|» target|SquareFoot|
|» target|SquareInch|
|» target|SquareKilometer|
|» target|SquareMeter|
|» target|SquareMicrometer|
|» target|SquareMile|
|» target|SquareMillimeter|
|» target|SquareYard|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert distance

<a id="opIdConvertDistance"></a>

> Code samples

```bash
curl https://example.com/ConvertDistance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 0.525505,
    "source": "Meter",
    "target": "Foot"
  }'
```

`POST /ConvertDistance`

Convert value from one distance measurement to another

> Body parameter

```json
{
  "input": 0.525505,
  "source": "Meter",
  "target": "Foot"
}
```

<h3 id="math---convert-distance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertDistance](#schemainputconvertdistance)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Centimeter|
|» source|Decimeter|
|» source|Fathom|
|» source|Foot|
|» source|Hectometer|
|» source|Inch|
|» source|Kilometer|
|» source|LightYear|
|» source|Meter|
|» source|Micrometer|
|» source|Mile|
|» source|Millimeter|
|» source|Nanometer|
|» source|NauticalMile|
|» source|Yard|
|» target|Centimeter|
|» target|Decimeter|
|» target|Fathom|
|» target|Foot|
|» target|Hectometer|
|» target|Inch|
|» target|Kilometer|
|» target|LightYear|
|» target|Meter|
|» target|Micrometer|
|» target|Mile|
|» target|Millimeter|
|» target|Nanometer|
|» target|NauticalMile|
|» target|Yard|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-distance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert duration

<a id="opIdConvertDuration"></a>

> Code samples

```bash
curl https://example.com/ConvertDuration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 0.66375,
    "source": "Day",
    "target": "Hour"
  }'
```

`POST /ConvertDuration`

Convert value from one duration measurement to another

> Body parameter

```json
{
  "input": 0.66375,
  "source": "Day",
  "target": "Hour"
}
```

<h3 id="math---convert-duration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertDuration](#schemainputconvertduration)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Day|
|» source|Hour|
|» source|Microsecond|
|» source|Millisecond|
|» source|Minute|
|» source|Month|
|» source|Nanosecond|
|» source|Second|
|» source|Week|
|» source|Year|
|» target|Day|
|» target|Hour|
|» target|Microsecond|
|» target|Millisecond|
|» target|Minute|
|» target|Month|
|» target|Nanosecond|
|» target|Second|
|» target|Week|
|» target|Year|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-duration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert energy

<a id="opIdConvertEnergy"></a>

> Code samples

```bash
curl https://example.com/ConvertEnergy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 0.397155,
    "source": "Calorie",
    "target": "Joule"
  }'
```

`POST /ConvertEnergy`

Convert value from one energy measurement to another

> Body parameter

```json
{
  "input": 0.397155,
  "source": "Calorie",
  "target": "Joule"
}
```

<h3 id="math---convert-energy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertEnergy](#schemainputconvertenergy)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|BritishThermalUnit|
|» source|Calorie|
|» source|ElectronVolt|
|» source|FootPound|
|» source|GigawattHour|
|» source|Joule|
|» source|Kilocalorie|
|» source|Kilojoule|
|» source|KilowattHour|
|» source|Megajoule|
|» source|MegawattHour|
|» source|TerawattHour|
|» source|Therm (EU)|
|» source|Therm (UK)|
|» source|Therm (US)|
|» source|WattHour|
|» target|BritishThermalUnit|
|» target|Calorie|
|» target|ElectronVolt|
|» target|FootPound|
|» target|GigawattHour|
|» target|Joule|
|» target|Kilocalorie|
|» target|Kilojoule|
|» target|KilowattHour|
|» target|Megajoule|
|» target|MegawattHour|
|» target|TerawattHour|
|» target|Therm (EU)|
|» target|Therm (UK)|
|» target|Therm (US)|
|» target|WattHour|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-energy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert power

<a id="opIdConvertPower"></a>

> Code samples

```bash
curl https://example.com/ConvertPower \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 0.866107,
    "source": "Gigawatt",
    "target": "Kilowatt"
  }'
```

`POST /ConvertPower`

Convert value from one power measurement to another

> Body parameter

```json
{
  "input": 0.866107,
  "source": "Gigawatt",
  "target": "Kilowatt"
}
```

<h3 id="math---convert-power-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertPower](#schemainputconvertpower)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|BritishThermalUnitPerHour|
|» source|Decawatt|
|» source|Deciwatt|
|» source|ElectricalHorsepower|
|» source|Femtowatt|
|» source|Gigawatt|
|» source|HydraulicHorsepower|
|» source|Kilowatt|
|» source|MechanicalHorsepower|
|» source|Megawatt|
|» source|Microwatt|
|» source|Milliwatt|
|» source|Nanowatt|
|» source|Petawatt|
|» source|Picowatt|
|» source|Terawatt|
|» source|Watt|
|» target|BritishThermalUnitPerHour|
|» target|Decawatt|
|» target|Deciwatt|
|» target|ElectricalHorsepower|
|» target|Femtowatt|
|» target|Gigawatt|
|» target|HydraulicHorsepower|
|» target|Kilowatt|
|» target|MechanicalHorsepower|
|» target|Megawatt|
|» target|Microwatt|
|» target|Milliwatt|
|» target|Nanowatt|
|» target|Petawatt|
|» target|Picowatt|
|» target|Terawatt|
|» target|Watt|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-power-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert speed

<a id="opIdConvertSpeed"></a>

> Code samples

```bash
curl https://example.com/ConvertSpeed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 0.278054,
    "source": "Knot",
    "target": "MilePerHour"
  }'
```

`POST /ConvertSpeed`

Convert value from one speed measurement to another

> Body parameter

```json
{
  "input": 0.278054,
  "source": "Knot",
  "target": "MilePerHour"
}
```

<h3 id="math---convert-speed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertSpeed](#schemainputconvertspeed)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|CentimeterPerHour|
|» source|CentimeterPerMinute|
|» source|CentimeterPerSecond|
|» source|DecimeterPerMinute|
|» source|DecimeterPerSecond|
|» source|FootPerHour|
|» source|FootPerMinute|
|» source|FootPerSecond|
|» source|InchPerHour|
|» source|InchPerMinute|
|» source|InchPerSecond|
|» source|KilometerPerHour|
|» source|KilometerPerMinute|
|» source|KilometerPerSecond|
|» source|Knot|
|» source|MeterPerHour|
|» source|MeterPerMinute|
|» source|MeterPerSecond|
|» source|MicrometerPerMinute|
|» source|MicrometerPerSecond|
|» source|MilePerHour|
|» source|MillimeterPerHour|
|» source|MillimeterPerMinute|
|» source|MillimeterPerSecond|
|» source|NanometerPerMinute|
|» source|NanometerPerSecond|
|» source|YardPerHour|
|» source|YardPerMinute|
|» source|YardPerSecond|
|» target|CentimeterPerHour|
|» target|CentimeterPerMinute|
|» target|CentimeterPerSecond|
|» target|DecimeterPerMinute|
|» target|DecimeterPerSecond|
|» target|FootPerHour|
|» target|FootPerMinute|
|» target|FootPerSecond|
|» target|InchPerHour|
|» target|InchPerMinute|
|» target|InchPerSecond|
|» target|KilometerPerHour|
|» target|KilometerPerMinute|
|» target|KilometerPerSecond|
|» target|Knot|
|» target|MeterPerHour|
|» target|MeterPerMinute|
|» target|MeterPerSecond|
|» target|MicrometerPerMinute|
|» target|MicrometerPerSecond|
|» target|MilePerHour|
|» target|MillimeterPerHour|
|» target|MillimeterPerMinute|
|» target|MillimeterPerSecond|
|» target|NanometerPerMinute|
|» target|NanometerPerSecond|
|» target|YardPerHour|
|» target|YardPerMinute|
|» target|YardPerSecond|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-speed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert temperature

<a id="opIdConvertTemperature"></a>

> Code samples

```bash
curl https://example.com/ConvertTemperature \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 10,
    "source": "Celsius",
    "target": "Fahrenheit"
  }'
```

`POST /ConvertTemperature`

Convert value from one temperature measurement to another

> Body parameter

```json
{
  "input": 10,
  "source": "Celsius",
  "target": "Fahrenheit"
}
```

<h3 id="math---convert-temperature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertTemperature](#schemainputconverttemperature)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Celsius|
|» source|Fahrenheit|
|» source|Newton|
|» source|Kelvin|
|» target|Celsius|
|» target|Fahrenheit|
|» target|Newton|
|» target|Kelvin|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-temperature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert volume

<a id="opIdConvertVolume"></a>

> Code samples

```bash
curl https://example.com/ConvertVolume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 1.5,
    "source": "CubicFoot",
    "target": "CubicMeter"
  }'
```

`POST /ConvertVolume`

Convert value from one volume measurement to another

> Body parameter

```json
{
  "input": 1.5,
  "source": "CubicFoot",
  "target": "CubicMeter"
}
```

<h3 id="math---convert-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertVolume](#schemainputconvertvolume)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Centiliter|
|» source|CubicCentimeter|
|» source|CubicDecimeter|
|» source|CubicFoot|
|» source|CubicHectometer|
|» source|CubicInch|
|» source|CubicKilometer|
|» source|CubicMeter|
|» source|CubicMillimeter|
|» source|CubicYard|
|» source|Deciliter|
|» source|ImperialBeerBarrel|
|» source|ImperialGallon|
|» source|ImperialOunce|
|» source|ImperialPint|
|» source|Kiloliter|
|» source|Liter|
|» source|Microliter|
|» source|Milliliter|
|» source|Gallon|
|» source|Cup|
|» source|Ounce|
|» source|Pint|
|» source|Quart|
|» source|Tablespoon|
|» source|Teaspoon|
|» target|Centiliter|
|» target|CubicCentimeter|
|» target|CubicDecimeter|
|» target|CubicFoot|
|» target|CubicHectometer|
|» target|CubicInch|
|» target|CubicKilometer|
|» target|CubicMeter|
|» target|CubicMillimeter|
|» target|CubicYard|
|» target|Deciliter|
|» target|ImperialBeerBarrel|
|» target|ImperialGallon|
|» target|ImperialOunce|
|» target|ImperialPint|
|» target|Kiloliter|
|» target|Liter|
|» target|Microliter|
|» target|Milliliter|
|» target|Gallon|
|» target|Cup|
|» target|Ounce|
|» target|Pint|
|» target|Quart|
|» target|Tablespoon|
|» target|Teaspoon|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Convert weight

<a id="opIdConvertWeight"></a>

> Code samples

```bash
curl https://example.com/ConvertWeight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": 5.7,
    "source": "Gram",
    "target": "Ounce"
  }'
```

`POST /ConvertWeight`

Convert value from one weight measurement to another

> Body parameter

```json
{
  "input": 5.7,
  "source": "Gram",
  "target": "Ounce"
}
```

<h3 id="math---convert-weight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputConvertWeight](#schemainputconvertweight)|false|none|
|» input|body|number|true|none|
|» source|body|string|true|none|
|» target|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|Centigram|
|» source|Decagram|
|» source|Decigram|
|» source|Grain|
|» source|Gram|
|» source|Hectogram|
|» source|Kilogram|
|» source|Microgram|
|» source|Milligram|
|» source|Nanogram|
|» source|Ounce|
|» source|Pound|
|» source|Stone|
|» source|Solar Mass|
|» source|Earth Mass|
|» source|Slug|
|» source|Short Ton|
|» source|Long Ton|
|» source|Ton|
|» source|Megaton|
|» source|Short Hundredweight|
|» source|Long Hundredweight|
|» target|Centigram|
|» target|Decagram|
|» target|Decigram|
|» target|Grain|
|» target|Gram|
|» target|Hectogram|
|» target|Kilogram|
|» target|Microgram|
|» target|Milligram|
|» target|Nanogram|
|» target|Ounce|
|» target|Pound|
|» target|Stone|
|» target|Ton|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---convert-weight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Random number

<a id="opIdRandomNumber"></a>

> Code samples

```bash
curl https://example.com/RandomNumber \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "end": 1000000,
    "start": 1
  }'
```

`POST /RandomNumber`

Generate a random number within a specified range

> Body parameter

```json
{
  "end": 1000000,
  "start": 1
}
```

<h3 id="math---random-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputNumberRange](#schemainputnumberrange)|false|none|
|» end|body|number|true|End of range|
|» start|body|number|true|Start of range|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---random-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Round number

<a id="opIdRoundNumber"></a>

> Code samples

```bash
curl https://example.com/RoundNumber \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": 0.195928
  }'
```

`POST /RoundNumber`

Round a numeric value up or down

> Body parameter

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

<h3 id="math---round-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateNumber](#schemainputcalculatenumber)|false|Numeric calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|number|true|Numeric value to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---round-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Math - Calculate standard deviation

<a id="opIdStandardDeviation"></a>

> Code samples

```bash
curl https://example.com/StandardDeviation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "decimals": 2,
    "input": [
      1,
      2,
      3,
      4,
      5
    ]
  }'
```

`POST /StandardDeviation`

Calculate the standard deviation of two or more numbers

> Body parameter

```json
{
  "decimals": 2,
  "input": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

<h3 id="math---calculate-standard-deviation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCalculateSeries](#schemainputcalculateseries)|false|Series calculation parameters|
|» decimals|body|number|true|Round to number of decimal places|
|» input|body|[number]|true|Colllection of values to calculate|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="math---calculate-standard-deviation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputNumber](#schemaoutputnumber)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

<h1 id="powertools-developer-text">Text</h1>

String manipulation, parsing, conversion and related operations.

## Text - Compare strings

<a id="opIdCompareStrings"></a>

> Code samples

```bash
curl https://example.com/CompareStrings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "compare": "dog",
    "input": "Cow",
    "lower": true,
    "trim": true
  }'
```

`POST /CompareStrings`

Perform a comparison of two strings

> Body parameter

```json
{
  "compare": "dog",
  "input": "Cow",
  "lower": true,
  "trim": true
}
```

<h3 id="text---compare-strings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputStringComparison](#schemainputstringcomparison)|false|none|
|» compare|body|string|true|Comparison string|
|» input|body|string|true|Original string|
|» lower|body|string|true|Convert strings to lowercase before comparison|
|» trim|body|string|true|Trim strings before comparison|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lower|true|
|» lower|false|
|» trim|true|
|» trim|false|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---compare-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Contains string

<a id="opIdContainsString"></a>

> Code samples

```bash
curl https://example.com/ContainsString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "find": "cow",
    "input": "The brown cow",
    "lower": true
  }'
```

`POST /ContainsString`

Determine if a string contains another string

> Body parameter

```json
{
  "find": "cow",
  "input": "The brown cow",
  "lower": true
}
```

<h3 id="text---contains-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputStringContains](#schemainputstringcontains)|false|none|
|» find|body|string|true|Text to match|
|» input|body|string|true|Text to search|
|» lower|body|string|true|Convert strings to lowercase|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lower|true|
|» lower|false|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---contains-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Convert case

<a id="opIdConvertCase"></a>

> Code samples

```bash
curl https://example.com/ConvertCase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "alphacase": "Upper",
    "input": "the brown cow"
  }'
```

`POST /ConvertCase`

Convert string to upper, lower or title case

> Body parameter

```json
{
  "alphacase": "Upper",
  "input": "the brown cow"
}
```

<h3 id="text---convert-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputCaseConversion](#schemainputcaseconversion)|false|none|
|» alphacase|body|string|true|Case of conversion result|
|» input|body|string|true|String containing the text to convert|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» alphacase|Upper|
|» alphacase|Lower|
|» alphacase|Title|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---convert-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Decode string

<a id="opIdDecodeString"></a>

> Code samples

```bash
curl https://example.com/DecodeString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "VGhlIGJyb3duIGNvdw=="
  }'
```

`POST /DecodeString`

Decode a string encoded with Base64 encoding

> Body parameter

```json
{
  "source": "VGhlIGJyb3duIGNvdw=="
}
```

<h3 id="text---decode-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» source|body|string|true|Encoded string variable or text value|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---decode-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Encode string

<a id="opIdEncodeString"></a>

> Code samples

```bash
curl https://example.com/EncodeString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "The brown cow"
  }'
```

`POST /EncodeString`

Encode a string using Base64 encoding

> Body parameter

```json
{
  "source": "The brown cow"
}
```

<h3 id="text---encode-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputString](#schemainputstring)|false|none|
|» source|body|string|true|String variable or text value|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---encode-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Generate GUID

<a id="opIdGenerateGuid"></a>

> Code samples

```bash
curl https://example.com/GenerateGuid \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "uppercase": true
  }'
```

`POST /GenerateGuid`

Generate a globally unique identifier

> Body parameter

```json
{
  "uppercase": true
}
```

<h3 id="text---generate-guid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputGenerateUniqueID](#schemainputgenerateuniqueid)|false|none|
|» uppercase|body|string|true|All uppercase alpha characters|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» uppercase|true|
|» uppercase|false|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---generate-guid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Generate hash

<a id="opIdGenerateHash"></a>

> Code samples

```bash
curl https://example.com/GenerateHash \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "algorithm": "SHA256",
    "source": "text to hash"
  }'
```

`POST /GenerateHash`

Generate a hash value from a string

> Body parameter

```json
{
  "algorithm": "SHA256",
  "source": "text to hash"
}
```

<h3 id="text---generate-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputGenerateHash](#schemainputgeneratehash)|false|none|
|» algorithm|body|string|true|Hash algorithm|
|» input|body|string|true|Hash source string|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|MD5|
|» algorithm|SHA1|
|» algorithm|SHA256|
|» algorithm|SHA384|
|» algorithm|SHA512|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---generate-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Join strings

<a id="opIdJoinStrings"></a>

> Code samples

```bash
curl https://example.com/JoinStrings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": [
      "The",
      "brown",
      "cow"
    ],
    "lower": true,
    "separator": ";",
    "trim": true
  }'
```

`POST /JoinStrings`

Join a collection of strings

> Body parameter

```json
{
  "input": [
    "The",
    "brown",
    "cow"
  ],
  "lower": true,
  "separator": ";",
  "trim": true
}
```

<h3 id="text---join-strings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputJoinStrings](#schemainputjoinstrings)|false|none|
|» input|body|[string]|true|Collection of strings to be joined|
|» lower|body|string|true|Convert strings in collection to lowercase|
|» separator|body|string|true|Separator character|
|» trim|body|string|true|Trim strings in collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lower|true|
|» lower|false|
|» trim|true|
|» trim|false|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---join-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Redact string

<a id="opIdRedactString"></a>

> Code samples

```bash
curl https://example.com/RedactString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "regex": "[A-Za-z]{5}",
    "source": "The brown cow",
    "value": "brown",
    "values": [
      "The",
      "brown",
      "cow"
    ]
  }'
```

`POST /RedactString`

Redact a strng containing sensitive content

> Body parameter

```json
{
  "regex": "[A-Za-z]{5}",
  "source": "The brown cow",
  "value": "brown",
  "values": [
    "The",
    "brown",
    "cow"
  ]
}
```

<h3 id="text---redact-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputRedactString](#schemainputredactstring)|false|none|
|» regex|body|string|false|Regular expression pattern for matching strings|
|» source|body|string|true|String containing the complete text|
|» value|body|string|false|Individual string to redact|
|» values|body|[string]|false|Collection of strings to redact|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---redact-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Replace string

<a id="opIdReplaceString"></a>

> Code samples

```bash
curl https://example.com/ReplaceString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "replacement": "dog",
    "source": "The brown cow",
    "value": "cow"
  }'
```

`POST /ReplaceString`

Replace one value with another in a string

> Body parameter

```json
{
  "replacement": "dog",
  "source": "The brown cow",
  "value": "cow"
}
```

<h3 id="text---replace-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputReplaceString](#schemainputreplacestring)|false|none|
|» replacement|body|string|true|Replacement text|
|» source|body|string|true|String containing the text to be replaced|
|» value|body|string|true|Text to replace|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---replace-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Shorten hyperlink

<a id="opIdShortenLink"></a>

> Code samples

```bash
curl https://example.com/ShortenLink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "http://www.somewebsite.com/path1/path2?query1=value&query2=value"
  }'
```

`POST /ShortenLink`

Generate a simple, short URL from a complex URL

> Body parameter

```json
{
  "source": "http://www.somewebsite.com/path1/path2?query1=value&query2=value"
}
```

<h3 id="text---shorten-hyperlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» source|body|string|true|String variable or text value|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---shorten-hyperlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Speech to Text

<a id="opIdSpeechToText"></a>

> Code samples

```bash
curl https://example.com/SpeechToText \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'language=English (United States)'
```

`POST /SpeechToText`

Convert audio file to text (10MB limit)

> Body parameter

```yaml
file: string
language: "English (United States)"
```

<h3 id="text---speech-to-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|Source audio file (WAV, MP3, AAC, M4A)|
|» language|body|string|true|Language of audio input|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|Arabic (Bahrain)|
|» language|Arabic (Egypt)|
|» language|Arabic (Iraq)|
|» language|Arabic (Jordan)|
|» language|Arabic (Kuwait)|
|» language|Arabic (Lebanon)|
|» language|Arabic (Oman)|
|» language|Arabic (Qatar)|
|» language|Arabic (Saudi Arabia)|
|» language|Arabic (Syria)|
|» language|Arabic (United Arab Emirates)|
|» language|Bulgarian (Bulgaria)|
|» language|Catalan (Spain)|
|» language|Chinese (Cantonese, Traditional)|
|» language|Chinese (Mandarin, Simplified)|
|» language|Chinese (Taiwanese Mandarin)|
|» language|Croatian (Croatia)|
|» language|Czech (Czech Republic)|
|» language|Danish (Denmark)|
|» language|Dutch (Netherlands)|
|» language|English (Australia)|
|» language|English (Canada)|
|» language|English (Hong Kong)|
|» language|English (India)|
|» language|English (Ireland)|
|» language|English (New Zealand)|
|» language|English (Philippines)|
|» language|English (Singapore)|
|» language|English (South Africa)|
|» language|English (United Kingdom)|
|» language|English (United States)|
|» language|Estonian(Estonia)|
|» language|Finnish (Finland)|
|» language|French (Canada)|
|» language|French (France)|
|» language|German (Germany)|
|» language|Greek (Greece)|
|» language|Gujarati (Indian)|
|» language|Hindi (India)|
|» language|Hungarian (Hungary)|
|» language|Irish(Ireland)|
|» language|Italian (Italy)|
|» language|Japanese (Japan)|
|» language|Korean (Korea)|
|» language|Latvian (Latvia)|
|» language|Lithuanian (Lithuania)|
|» language|Maltese(Malta)|
|» language|Marathi (India)|
|» language|Norwegian (Norway)|
|» language|Polish (Poland)|
|» language|Portuguese (Brazil)|
|» language|Portuguese (Portugal)|
|» language|Romanian (Romania)|
|» language|Russian (Russia)|
|» language|Slovak (Slovakia)|
|» language|Slovenian (Slovenia)|
|» language|Spanish (Argentina)|
|» language|Spanish (Bolivia)|
|» language|Spanish (Chile)|
|» language|Spanish (Colombia)|
|» language|Spanish (Costa Rica)|
|» language|Spanish (Cuba)|
|» language|Spanish (Dominican Republic)|
|» language|Spanish (Ecuador)|
|» language|Spanish (El Salvador)|
|» language|Spanish (Guatemala)|
|» language|Spanish (Honduras)|
|» language|Spanish (Mexico)|
|» language|Spanish (Nicaragua)|
|» language|Spanish (Panama)|
|» language|Spanish (Paraguay)|
|» language|Spanish (Peru)|
|» language|Spanish (Puerto Rico)|
|» language|Spanish (Spain)|
|» language|Spanish (Uruguay)|
|» language|Spanish (USA)|
|» language|Spanish (Venezuela)|
|» language|Swedish (Sweden)|
|» language|Tamil (India)|
|» language|Telugu (India)|
|» language|Thai (Thailand)|
|» language|Turkish (Turkey)|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---speech-to-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Split string

<a id="opIdSplitString"></a>

> Code samples

```bash
curl https://example.com/SplitString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "characters": ",",
    "input": "The,brown,cow"
  }'
```

`POST /SplitString`

Split a string based upon one or more characters

> Body parameter

```json
{
  "characters": ",",
  "input": "The,brown,cow"
}
```

<h3 id="text---split-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputSplitString](#schemainputsplitstring)|false|none|
|» characters|body|string|true|One or more characters that will be used to split the text|
|» input|body|string|true|Text to split|

> Example responses

> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---split-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputStringArray](#schemaoutputstringarray)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - String to File

<a id="opIdStringToFile"></a>

> Code samples

```bash
curl https://example.com/StringToFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "extension": "TXT",
    "filename": "Test",
    "input": "This is a test."
  }'
```

`POST /StringToFile`

Convert text string to file

> Body parameter

```json
{
  "extension": "TXT",
  "filename": "Test",
  "input": "This is a test."
}
```

<h3 id="text---string-to-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputStringToFile](#schemainputstringtofile)|false|none|
|» extension|body|string|true|File extension|
|» filename|body|string|true|Name of file (without extension)|
|» input|body|string|true|Text string (body of file)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» extension|TXT|
|» extension|CSV|
|» extension|HTML|
|» extension|XML|
|» extension|CSS|
|» extension|JSON|
|» extension|JS|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---string-to-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Text to Speech

<a id="opIdTextToSpeech"></a>

> Code samples

```bash
curl https://example.com/TextToSpeech \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "text": "This is sample text.",
    "type": "PlainText",
    "voice": "en-US, Aria (Female)"
  }'
```

`POST /TextToSpeech`

Convert text to an audio file using AI-driven speech synthesis.

> Body parameter

```json
{
  "text": "This is sample text.",
  "type": "PlainText",
  "voice": "en-US, Aria (Female)"
}
```

<h3 id="text---text-to-speech-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputTextToSpeech](#schemainputtexttospeech)|false|none|
|» text|body|string|true|Text to convert (10,000 characters max)|
|» type|body|string|true|Text or file type|
|» voice|body|string|true|Voice locale (must match language of input text)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|PlainText|
|» type|SSML|
|» voice|ar-EG, Hoda (Female)|
|» voice|ar-SA, Naayf (Male)|
|» voice|bg-BG, Ivan (Male)|
|» voice|ca-ES, Herena (Female)|
|» voice|cs-CZ, Jakub (Male)|
|» voice|da-DK, Helle (Female)|
|» voice|de-AT, Michael (Male)|
|» voice|de-CH, Karsten (Male)|
|» voice|de-DE, Hedda (Female)|
|» voice|de-DE, Stefan (Male)|
|» voice|el-GR, Stefanos (Male)|
|» voice|en-AU, Catherine (Female)|
|» voice|en-AU, Hayley (Female)|
|» voice|en-CA, Heather (Female)|
|» voice|en-CA, Linda (Female)|
|» voice|en-GB, George (Male)|
|» voice|en-GB, Hazel (Female)|
|» voice|en-GB, Susan (Female)|
|» voice|en-IE, Sean (Male)|
|» voice|en-IN, Heera (Female)|
|» voice|en-IN, Priya (Female)|
|» voice|en-IN, Ravi (Male)|
|» voice|en-US, Aria (Female)|
|» voice|en-US, Benjamin (Male)|
|» voice|en-US, Guy (Male)|
|» voice|en-US, Zira (Female)|
|» voice|es-ES, Helena (Female)|
|» voice|es-ES, Laura (Female)|
|» voice|es-ES, Pablo (Male)|
|» voice|es-MX, Hilda (Female)|
|» voice|es-MX, Raul (Male)|
|» voice|fi-FI, Heidi (Female)|
|» voice|fr-CA, Caroline (Female)|
|» voice|fr-CA, Harmonie (Female)|
|» voice|fr-CH, Guillaume (Male)|
|» voice|fr-FR, Hortense (Female)|
|» voice|fr-FR, Julie (Female)|
|» voice|fr-FR, Paul (Male)|
|» voice|he-IL, Asaf (Male)|
|» voice|hi-IN, Hemant (Male)|
|» voice|hi-IN, Kalpana (Female)|
|» voice|hr-HR, Matej (Male)|
|» voice|hu-HU, Szabolcs (Male)|
|» voice|id-ID, Andika (Male)|
|» voice|it-IT, Cosimo (Male)|
|» voice|it-IT, Lucia (Female)|
|» voice|ja-JP, Ayumi (Female)|
|» voice|ja-JP, Haruka (Female)|
|» voice|ja-JP, Ichiro (Male)|
|» voice|ko-KR, Heami (Female)|
|» voice|ms-MY, Rizwan (Male)|
|» voice|nb-NO, Hulda (Female)|
|» voice|nl-NL, Hanna (Female)|
|» voice|pl-PL, Paulina (Female)|
|» voice|pt-BR, Daniel (Male)|
|» voice|pt-BR, Heloisa (Female)|
|» voice|pt-PT, Helia (Female)|
|» voice|ro-RO, Andrei (Male)|
|» voice|ru-RU, Ekaterina (Female)|
|» voice|ru-RU, Irina (Female)|
|» voice|ru-RU, Pavel (Male)|
|» voice|sk-SK, Filip (Male)|
|» voice|sl-SI, Lado (Male)|
|» voice|sv-SE, Hedvig (Female)|
|» voice|ta-IN, Valluvar (Male)|
|» voice|te-IN, Chitra (Female)|
|» voice|th-TH, Pattara (Male)|
|» voice|tr-TR, Seda (Female)|
|» voice|vi-VN, An (Male)|
|» voice|zh-CN, Huihui (Female)|
|» voice|zh-CN, Kangkang (Male)|
|» voice|zh-CN, Yaoyao (Female)|
|» voice|zh-HK, Danny (Male)|
|» voice|zh-HK, Tracy (Female)|
|» voice|zh-TW, HanHan (Female)|
|» voice|zh-TW, Yating (Female)|
|» voice|zh-TW, Zhiwei (Male)|

<h3 id="text---text-to-speech-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Translate string

<a id="opIdTranslateString"></a>

> Code samples

```bash
curl https://example.com/TranslateString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": "The brown cow",
    "language": "German"
  }'
```

`POST /TranslateString`

Translate a string into a different language

> Body parameter

```json
{
  "input": "The brown cow",
  "language": "German"
}
```

<h3 id="text---translate-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputTranslateString](#schemainputtranslatestring)|false|none|
|» input|body|string|true|String containing the text to be translated|
|» language|body|string|true|Translation language|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|Arabic|
|» language|Chinese (Simplified)|
|» language|Czech|
|» language|Danish|
|» language|Dutch|
|» language|English|
|» language|Finnish|
|» language|French|
|» language|German|
|» language|Greek|
|» language|Hindi|
|» language|Hungarian|
|» language|Italian|
|» language|Japanese|
|» language|Klingon|
|» language|Korean|
|» language|Norweigan|
|» language|Polish|
|» language|Portuguese|
|» language|Russian|
|» language|Spanish|
|» language|Swedish|
|» language|Turkish|
|» language|Vietnamese|
|» language|Welsh|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---translate-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Trim string

<a id="opIdTrimString"></a>

> Code samples

```bash
curl https://example.com/TrimString \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "  The brown cow  ",
    "type": "Both"
  }'
```

`POST /TrimString`

Trim leading or trailing whitespace from a string

> Body parameter

```json
{
  "source": "  The brown cow  ",
  "type": "Both"
}
```

<h3 id="text---trim-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputTrimString](#schemainputtrimstring)|false|none|
|» source|body|string|true|String containing the text to be trimmed|
|» type|body|string|true|Type of white space to remove|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|Start|
|» type|End|
|» type|Both|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---trim-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Decode URL

<a id="opIdUrlDecode"></a>

> Code samples

```bash
curl https://example.com/URLDecode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "The%20brown%20cow"
  }'
```

`POST /URLDecode`

Decode an encoded URL

> Body parameter

```json
{
  "source": "The%20brown%20cow"
}
```

<h3 id="text---decode-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» source|body|string|true|Encoded string variable or text value|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---decode-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Encode URL

<a id="opIdUrlEncode"></a>

> Code samples

```bash
curl https://example.com/URLEncode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "The brown cow"
  }'
```

`POST /URLEncode`

Generate an encoded string from a complex hyperlink

> Body parameter

```json
{
  "source": "The brown cow"
}
```

<h3 id="text---encode-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputString](#schemainputstring)|false|none|
|» source|body|string|true|String variable or text value|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---encode-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Validate email

<a id="opIdValidateEmail"></a>

> Code samples

```bash
curl https://example.com/ValidateEmail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "source": "some user @ bademail-com"
  }'
```

`POST /ValidateEmail`

Determine if an email address is valid

> Body parameter

```json
{
  "source": "some user @ bademail-com"
}
```

<h3 id="text---validate-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» source|body|string|true|String variable or text value|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---validate-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Text - Verify hash

<a id="opIdVerifyHash"></a>

> Code samples

```bash
curl https://example.com/VerifyHash \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "algorithm": "SHA256",
    "hash": "a52b8248f023cebd33aeeddda695f60d2561c0c9",
    "source": "this is a really good test"
  }'
```

`POST /VerifyHash`

Verify a hashed value against the original source string

> Body parameter

```json
{
  "algorithm": "SHA256",
  "hash": "a52b8248f023cebd33aeeddda695f60d2561c0c9",
  "source": "this is a really good test"
}
```

<h3 id="text---verify-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputVerifyHash](#schemainputverifyhash)|false|none|
|» algorithm|body|string|true|Hash algorithm|
|» hash|body|string|true|Hashed result|
|» input|body|string|true|Original source string|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|MD5|
|» algorithm|SHA1|
|» algorithm|SHA256|
|» algorithm|SHA384|
|» algorithm|SHA512|

> Example responses

> 200 Response

```json
{
  "result": true
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="text---verify-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputBoolean](#schemaoutputboolean)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

<h1 id="powertools-developer-files">Files</h1>

File operations.

## Files - Convert Image

<a id="opIdConvertImage"></a>

> Code samples

```bash
curl https://example.com/ConvertImage \
  -X POST \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'format=PNG'
```

`POST /ConvertImage`

Convert an image from one format to another

> Body parameter

```yaml
file: string
format: PNG
```

<h3 id="files---convert-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|Source image file|
|» format|body|string|true|Output file format|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|PNG|
|» format|JPG|
|» format|GIF|
|» format|BMP|
|» format|TIF|

<h3 id="files---convert-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - Crop Image

<a id="opIdCropImage"></a>

> Code samples

```bash
curl https://example.com/CropImage \
  -X POST \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'Height=0' \
  -F 'Width=0' \
  -F 'file=@/path/to/file' \
  -F 'position=TopLeft'
```

`POST /CropImage`

Crop an image

> Body parameter

```yaml
Height: 0
Width: 0
file: string
position: TopLeft
```

<h3 id="files---crop-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» Height|body|number|true|Height (Y-axis down, negative to reverse)|
|» Width|body|number|true|Width (X-axis right, negative to reverse)|
|» file|body|string(binary)|true|Source image file|
|» position|body|string|true|Crop start position (use negative values to reverse crop area)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» position|TopLeft|
|» position|TopCenter|
|» position|TopRight|
|» position|MiddleLeft|
|» position|MiddleCenter|
|» position|MiddleRight|
|» position|BottomLeft|
|» position|BottomCenter|
|» position|BottomRight|

<h3 id="files---crop-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - File to string

<a id="opIdFileToString"></a>

> Code samples

```bash
curl https://example.com/FileToString \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /FileToString`

Convert a file to a Base64 string

> Body parameter

```yaml
file: string
```

<h3 id="files---file-to-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|Source file (10MB limit)|

> Example responses

> 200 Response

```json
{
  "result": "string"
}
```

> 400 Response

```json
{
  "result": "string"
}
```

<h3 id="files---file-to-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[outputString](#schemaoutputstring)|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - Flip Image

<a id="opIdFlipImage"></a>

> Code samples

```bash
curl https://example.com/FlipImage \
  -X POST \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'orientation=Horizontal'
```

`POST /FlipImage`

Flip an image (horizontal or vertical)

> Body parameter

```yaml
file: string
orientation: Horizontal
```

<h3 id="files---flip-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|Source image file|
|» orientation|body|string|true|Horizontal or Vertical|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» orientation|Horizontal|
|» orientation|Vertical|

<h3 id="files---flip-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - Generate QR code

<a id="opIdGenerateQRCode"></a>

> Code samples

```bash
curl https://example.com/GenerateQRCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -d '{
    "input": "someone@example.com|Test message|This is a test.",
    "payload": "Mail"
  }'
```

`POST /GenerateQRCode`

Generate a QR code image

> Body parameter

```json
{
  "input": "someone@example.com|Test message|This is a test.",
  "payload": "Mail"
}
```

<h3 id="files---generate-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[inputQRCode](#schemainputqrcode)|false|none|
|» input|body|string|true|Text value(s) (vertical bar delimited by type)|
|» payload|body|string|true|Payload type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payload|Plain Text (string)|
|» payload|Bitcoin Payment (address\|amount\|label\|message)|
|» payload|Bookmark (url\|title)|
|» payload|Calendar Event (subject\|description\|location\|start\|end\|allDayEvent['true' or 'false']\|format ['universal' or 'iCal'])|
|» payload|Geolocation (latitude\|longitude)|
|» payload|Mail (recipient\|subject\|message)|
|» payload|Phone Number (string)|
|» payload|SMS (number\|message)|
|» payload|URL (string)|
|» payload|WiFi (ssid\|password\|authenticationMode ['WEP', 'WPA' or 'WPA2'])|

<h3 id="files---generate-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - Resize Image

<a id="opIdResizeImage"></a>

> Code samples

```bash
curl https://example.com/ResizeImage \
  -X POST \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'algorithm=Bicubic (default)' \
  -F 'file=@/path/to/file' \
  -F 'height=0' \
  -F 'units=Pixels' \
  -F 'width=0'
```

`POST /ResizeImage`

Resize an image

> Body parameter

```yaml
algorithm: "Bicubic (default)"
file: string
height: 0
units: Pixels
width: 0
```

<h3 id="files---resize-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» algorithm|body|string|true|Optimize output quality of the target image|
|» file|body|string(binary)|true|Source image file|
|» height|body|number|false|Image height (pixels or percent)|
|» units|body|string|true|Image adjustment units|
|» width|body|number|false|Image width (pixels or percent)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|Bicubic (default)|
|» algorithm|Bilinear|
|» algorithm|Cubic (Box)|
|» algorithm|Cubic (Catmull-Rom)|
|» algorithm|Cubic (Hermite)|
|» algorithm|Cubic (Spline)|
|» algorithm|Nearest Neighbor|
|» algorithm|Sinc (Lanczos2)|
|» algorithm|Sinc (Lanczos3)|
|» algorithm|Sinc (Lanczos5)|
|» algorithm|Sinc (Lanczos8)|
|» algorithm|Robidoux|
|» algorithm|Robidoux Sharp|
|» units|Pixels|
|» units|Percent|

<h3 id="files---resize-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - Rotate Image

<a id="opIdRotateImage"></a>

> Code samples

```bash
curl https://example.com/RotateImage \
  -X POST \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'degrees=string' \
  -F 'file=@/path/to/file'
```

`POST /RotateImage`

Rotate an image by specified number of degrees

> Body parameter

```yaml
degrees: string
file: string
```

<h3 id="files---rotate-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» degrees|body|string|true|Number of degrees|
|» file|body|string(binary)|true|Source image file|

<h3 id="files---rotate-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

## Files - Watermark Image

<a id="opIdWatermarkImage"></a>

> Code samples

```bash
curl https://example.com/WatermarkImage \
  -X POST \
  -H "X-IBM-Client-Id: ${API_KEY}" \
  -F 'color=000000' \
  -F 'file=@/path/to/file' \
  -F 'font=Arial' \
  -F 'horizontal=Center' \
  -F 'size=0' \
  -F 'text=string' \
  -F 'vertical=Center'
```

`POST /WatermarkImage`

Add watermark text to an image

> Body parameter

```yaml
color: "000000"
file: string
font: Arial
horizontal: Center
size: 0
text: string
vertical: Center
```

<h3 id="files---watermark-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» color|body|string|true|Text color hex value|
|» file|body|string(binary)|true|Source image file|
|» font|body|string|true|Text font|
|» horizontal|body|string|true|Horizontal alignment|
|» size|body|number|true|Font size (points)|
|» text|body|string|true|Watermark text|
|» vertical|body|string|true|Vertical alignment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» font|Arial|
|» font|Arial Black|
|» font|Arial Narrow|
|» font|Book Antiqua|
|» font|Britannic Bold|
|» font|Brush Script MT|
|» font|Calisto MT|
|» font|Century Gothic|
|» font|Century Schoolbook|
|» font|Colonna MT|
|» font|Comic Sans MS|
|» font|Cooper Black|
|» font|Copperplate Gothic Bold|
|» font|Copperplate Gothic Light|
|» font|Courier New|
|» font|Edwardian Script ITC|
|» font|Engravers MT|
|» font|Franklin Gothic Demi|
|» font|Franklin Gothic Heavy|
|» font|Franklin Gothic Medium|
|» font|Garamond|
|» font|Georgia|
|» font|Gill Sans MT|
|» font|Gill Sans MT Condensed|
|» font|Gill Sans Ultra Bold|
|» font|Gill Sans Ultra Bold Condensed|
|» font|Goudy Old Style|
|» font|Haettenschweiler|
|» font|Holidays MT|
|» font|Impact|
|» font|Lucida Calligraphy|
|» font|Lucida Console|
|» font|Lucida Handwriting|
|» font|Lucida Sans Typewriter|
|» font|Lucida Sans Unicode|
|» font|Marlett|
|» font|Microsoft Sans Serif|
|» font|MS Outlook|
|» font|Palace Script MT|
|» font|Palatino Linotype|
|» font|Papyrus|
|» font|Playbill|
|» font|Rockwell|
|» font|Rockwell Condensed|
|» font|Rockwell Extra Bold|
|» font|Script MT Bold|
|» font|Stencil|
|» font|Symbol|
|» font|Tahoma|
|» font|Times New Roman|
|» font|Trebuchet MS|
|» font|Verdana|
|» font|Vivaldi|
|» font|Webdings|
|» font|Wingdings 1|
|» font|Wingdings 2|
|» font|Wingdings 3|
|» horizontal|Left|
|» horizontal|Center|
|» horizontal|Right|
|» vertical|Top|
|» vertical|Center|
|» vertical|Bottom|

<h3 id="files---watermark-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|ERROR|[outputString](#schemaoutputstring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader
</aside>

# Schemas

<h2 id="tocS_inputCalculateMinMax">inputCalculateMinMax</h2>
<!-- backwards compatibility -->
<a id="schemainputcalculateminmax"></a>
<a id="schema_inputCalculateMinMax"></a>
<a id="tocSinputcalculateminmax"></a>
<a id="tocsinputcalculateminmax"></a>

```json
{
  "input": [
    1,
    2,
    3,
    4,
    5
  ],
  "type": "Minimum"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[number]|true|none|Colllection of values to calculate|
|type|string|true|none|Minimum or Maximum|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Minimum|
|type|Maximum|

<h2 id="tocS_inputCalculateNumber">inputCalculateNumber</h2>
<!-- backwards compatibility -->
<a id="schemainputcalculatenumber"></a>
<a id="schema_inputCalculateNumber"></a>
<a id="tocSinputcalculatenumber"></a>
<a id="tocsinputcalculatenumber"></a>

```json
{
  "decimals": 2,
  "input": 0.195928
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decimals|number|true|none|Round to number of decimal places|
|input|number|true|none|Numeric value to calculate|

<h2 id="tocS_inputCalculateNumbers">inputCalculateNumbers</h2>
<!-- backwards compatibility -->
<a id="schemainputcalculatenumbers"></a>
<a id="schema_inputCalculateNumbers"></a>
<a id="tocSinputcalculatenumbers"></a>
<a id="tocsinputcalculatenumbers"></a>

```json
{
  "decimals": 2,
  "input": 4,
  "value": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decimals|number|true|none|Round to number of decimal places|
|input|number|true|none|Numeric value|
|value|number|true|none|Addend, subtrahend, factor, divisor or radicand|

<h2 id="tocS_inputCalculatePower">inputCalculatePower</h2>
<!-- backwards compatibility -->
<a id="schemainputcalculatepower"></a>
<a id="schema_inputCalculatePower"></a>
<a id="tocSinputcalculatepower"></a>
<a id="tocsinputcalculatepower"></a>

```json
{
  "decimals": 2,
  "input": 5.53,
  "power": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decimals|number|true|none|Round to number of decimal places|
|input|number|true|none|Number to raise|
|power|number|true|none|Power|

<h2 id="tocS_inputCalculateSeries">inputCalculateSeries</h2>
<!-- backwards compatibility -->
<a id="schemainputcalculateseries"></a>
<a id="schema_inputCalculateSeries"></a>
<a id="tocSinputcalculateseries"></a>
<a id="tocsinputcalculateseries"></a>

```json
{
  "decimals": 2,
  "input": [
    1,
    2,
    3,
    4,
    5
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decimals|number|true|none|Round to number of decimal places|
|input|[number]|true|none|Colllection of values to calculate|

<h2 id="tocS_inputCaseConversion">inputCaseConversion</h2>
<!-- backwards compatibility -->
<a id="schemainputcaseconversion"></a>
<a id="schema_inputCaseConversion"></a>
<a id="tocSinputcaseconversion"></a>
<a id="tocsinputcaseconversion"></a>

```json
{
  "alphacase": "Upper",
  "input": "the brown cow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alphacase|string|true|none|Case of conversion result|
|input|string|true|none|String containing the text to convert|

#### Enumerated Values

|Property|Value|
|---|---|
|alphacase|Upper|
|alphacase|Lower|
|alphacase|Title|

<h2 id="tocS_inputCollectionConversion">inputCollectionConversion</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionconversion"></a>
<a id="schema_inputCollectionConversion"></a>
<a id="tocSinputcollectionconversion"></a>
<a id="tocsinputcollectionconversion"></a>

```json
{
  "input": [
    "a",
    "b",
    "c",
    "d",
    "e"
  ],
  "name": "Items"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|Collection containing strings to convert|
|name|string|true|none|Collection name|

<h2 id="tocS_inputCollectionConversionXML">inputCollectionConversionXML</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionconversionxml"></a>
<a id="schema_inputCollectionConversionXML"></a>
<a id="tocSinputcollectionconversionxml"></a>
<a id="tocsinputcollectionconversionxml"></a>

```json
{
  "child": "Item",
  "input": [
    "a",
    "b",
    "c",
    "d",
    "e"
  ],
  "root": "Items"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|child|string|true|none|Name of child XML node(s)|
|input|[string]|true|none|Collection containing strings to convert|
|root|string|true|none|Name of root XML node|

<h2 id="tocS_inputCollectionCount">inputCollectionCount</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectioncount"></a>
<a id="schema_inputCollectionCount"></a>
<a id="tocSinputcollectioncount"></a>
<a id="tocsinputcollectioncount"></a>

```json
{
  "input": [
    "a",
    "d",
    "c",
    "b",
    "e"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|Collection of items to count|

<h2 id="tocS_inputCollectionFilter">inputCollectionFilter</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionfilter"></a>
<a id="schema_inputCollectionFilter"></a>
<a id="tocSinputcollectionfilter"></a>
<a id="tocsinputcollectionfilter"></a>

```json
{
  "input": [
    "the cow",
    "jumped over",
    "the moon"
  ],
  "keywords": "cow,moon",
  "match": "Any"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|Collection of strings to filter|
|keywords|string|true|none|Keywords (separate multiple values with commas)|
|match|string|true|none|Match type|

#### Enumerated Values

|Property|Value|
|---|---|
|match|Any|
|match|All|
|match|None|

<h2 id="tocS_inputCollectionModify">inputCollectionModify</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionmodify"></a>
<a id="schema_inputCollectionModify"></a>
<a id="tocSinputcollectionmodify"></a>
<a id="tocsinputcollectionmodify"></a>

```json
{
  "index": "0",
  "input": [
    "a",
    "b",
    "c"
  ],
  "item": "d",
  "items": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Index position for operation (leave blank to specify end of collection)|
|input|[string]|true|none|Collection of values or objects to modify|
|item|string|false|none|Item (for multiple items, leave blank and use Items)|
|items|[string]|false|none|Items (Collection, for a single item leave blank and use Item)|

<h2 id="tocS_inputCollectionReplace">inputCollectionReplace</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionreplace"></a>
<a id="schema_inputCollectionReplace"></a>
<a id="tocSinputcollectionreplace"></a>
<a id="tocsinputcollectionreplace"></a>

```json
{
  "ignoreCase": true,
  "input": [
    "the brown cow",
    "jumped over",
    "the brown dog"
  ],
  "match": "Brown",
  "replacement": "spotted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreCase|string|true|none|Ignore case|
|input|[string]|true|none|Collection of strings|
|match|string|true|none|Match value|
|replacement|string|true|none|Replacement value|

#### Enumerated Values

|Property|Value|
|---|---|
|ignoreCase|true|
|ignoreCase|false|

<h2 id="tocS_inputCollectionSearch">inputCollectionSearch</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionsearch"></a>
<a id="schema_inputCollectionSearch"></a>
<a id="tocSinputcollectionsearch"></a>
<a id="tocsinputcollectionsearch"></a>

```json
{
  "ignorecase": true,
  "input": [
    "the",
    "brown",
    "cow "
  ],
  "match": "cow",
  "trim": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignorecase|string|false|none|Ignore case when performing comparison|
|input|[string]|true|none|Collection of strings to search|
|match|string|true|none|Text to match|
|trim|string|false|none|Trim white space from comparison string|

#### Enumerated Values

|Property|Value|
|---|---|
|ignorecase|true|
|ignorecase|false|
|trim|true|
|trim|false|

<h2 id="tocS_inputCollectionSearchNumeric">inputCollectionSearchNumeric</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionsearchnumeric"></a>
<a id="schema_inputCollectionSearchNumeric"></a>
<a id="tocSinputcollectionsearchnumeric"></a>
<a id="tocsinputcollectionsearchnumeric"></a>

```json
{
  "input": [
    1.25,
    10.5,
    20.75,
    51.25,
    119.6,
    301.25
  ],
  "match": "1.25,",
  "type": "Decimal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[number]|true|none|Collection of strings to search|
|match|number|true|none|Number to match|
|type|string|false|none|Type of number - integer or decimal|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Integer|
|type|Decimal|

<h2 id="tocS_inputCollectionSort">inputCollectionSort</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionsort"></a>
<a id="schema_inputCollectionSort"></a>
<a id="tocSinputcollectionsort"></a>
<a id="tocsinputcollectionsort"></a>

```json
{
  "input": [
    "a",
    "d",
    "c",
    "b",
    "e"
  ],
  "order": "Ascending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|Collection of strings to sort|
|order|string|true|none|Sort order|

#### Enumerated Values

|Property|Value|
|---|---|
|order|Ascending|
|order|Descending|

<h2 id="tocS_inputCollectionSplit">inputCollectionSplit</h2>
<!-- backwards compatibility -->
<a id="schemainputcollectionsplit"></a>
<a id="schema_inputCollectionSplit"></a>
<a id="tocSinputcollectionsplit"></a>
<a id="tocsinputcollectionsplit"></a>

```json
{
  "index": "",
  "input": [
    "the cow",
    "jumped over",
    "the moon"
  ],
  "match": "jumped over"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|string|false|none|Index location to split (leave empty to use Match value)|
|input|[string]|true|none|Collection of items to split|
|match|string|false|none|String to match (explicit, case-insensitive, leave empty to use Index)|

<h2 id="tocS_inputConvertAngle">inputConvertAngle</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertangle"></a>
<a id="schema_inputConvertAngle"></a>
<a id="tocSinputconvertangle"></a>
<a id="tocsinputconvertangle"></a>

```json
{
  "input": 16.036844,
  "source": "Arcminute",
  "target": "Arcsecond"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Arcminute|
|source|Arcsecond|
|source|Centiradian|
|source|Deciradian|
|source|Degree|
|source|Gradian|
|source|Microdegree|
|source|Microradian|
|source|Millidegree|
|source|Milliradian|
|source|Nanodegree|
|source|Nanoradian|
|source|Radian|
|source|Revolution|
|target|Arcminute|
|target|Arcsecond|
|target|Centiradian|
|target|Deciradian|
|target|Degree|
|target|Gradian|
|target|Microdegree|
|target|Microradian|
|target|Millidegree|
|target|Milliradian|
|target|Nanodegree|
|target|Nanoradian|
|target|Radian|
|target|Revolution|

<h2 id="tocS_inputConvertArea">inputConvertArea</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertarea"></a>
<a id="schema_inputConvertArea"></a>
<a id="tocSinputconvertarea"></a>
<a id="tocsinputconvertarea"></a>

```json
{
  "input": 0.416714,
  "source": "Acre",
  "target": "SquareFoot"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Acre|
|source|Hectare|
|source|SquareCentimeter|
|source|SquareDecimeter|
|source|SquareFoot|
|source|SquareInch|
|source|SquareKilometer|
|source|SquareMeter|
|source|SquareMicrometer|
|source|SquareMile|
|source|SquareMillimeter|
|source|SquareYard|
|target|Acre|
|target|Hectare|
|target|SquareCentimeter|
|target|SquareDecimeter|
|target|SquareFoot|
|target|SquareInch|
|target|SquareKilometer|
|target|SquareMeter|
|target|SquareMicrometer|
|target|SquareMile|
|target|SquareMillimeter|
|target|SquareYard|

<h2 id="tocS_inputConvertDistance">inputConvertDistance</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertdistance"></a>
<a id="schema_inputConvertDistance"></a>
<a id="tocSinputconvertdistance"></a>
<a id="tocsinputconvertdistance"></a>

```json
{
  "input": 0.525505,
  "source": "Meter",
  "target": "Foot"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Centimeter|
|source|Decimeter|
|source|Fathom|
|source|Foot|
|source|Hectometer|
|source|Inch|
|source|Kilometer|
|source|LightYear|
|source|Meter|
|source|Micrometer|
|source|Mile|
|source|Millimeter|
|source|Nanometer|
|source|NauticalMile|
|source|Yard|
|target|Centimeter|
|target|Decimeter|
|target|Fathom|
|target|Foot|
|target|Hectometer|
|target|Inch|
|target|Kilometer|
|target|LightYear|
|target|Meter|
|target|Micrometer|
|target|Mile|
|target|Millimeter|
|target|Nanometer|
|target|NauticalMile|
|target|Yard|

<h2 id="tocS_inputConvertDuration">inputConvertDuration</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertduration"></a>
<a id="schema_inputConvertDuration"></a>
<a id="tocSinputconvertduration"></a>
<a id="tocsinputconvertduration"></a>

```json
{
  "input": 0.66375,
  "source": "Day",
  "target": "Hour"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Day|
|source|Hour|
|source|Microsecond|
|source|Millisecond|
|source|Minute|
|source|Month|
|source|Nanosecond|
|source|Second|
|source|Week|
|source|Year|
|target|Day|
|target|Hour|
|target|Microsecond|
|target|Millisecond|
|target|Minute|
|target|Month|
|target|Nanosecond|
|target|Second|
|target|Week|
|target|Year|

<h2 id="tocS_inputConvertEnergy">inputConvertEnergy</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertenergy"></a>
<a id="schema_inputConvertEnergy"></a>
<a id="tocSinputconvertenergy"></a>
<a id="tocsinputconvertenergy"></a>

```json
{
  "input": 0.397155,
  "source": "Calorie",
  "target": "Joule"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|BritishThermalUnit|
|source|Calorie|
|source|ElectronVolt|
|source|FootPound|
|source|GigawattHour|
|source|Joule|
|source|Kilocalorie|
|source|Kilojoule|
|source|KilowattHour|
|source|Megajoule|
|source|MegawattHour|
|source|TerawattHour|
|source|Therm (EU)|
|source|Therm (UK)|
|source|Therm (US)|
|source|WattHour|
|target|BritishThermalUnit|
|target|Calorie|
|target|ElectronVolt|
|target|FootPound|
|target|GigawattHour|
|target|Joule|
|target|Kilocalorie|
|target|Kilojoule|
|target|KilowattHour|
|target|Megajoule|
|target|MegawattHour|
|target|TerawattHour|
|target|Therm (EU)|
|target|Therm (UK)|
|target|Therm (US)|
|target|WattHour|

<h2 id="tocS_inputConvertPower">inputConvertPower</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertpower"></a>
<a id="schema_inputConvertPower"></a>
<a id="tocSinputconvertpower"></a>
<a id="tocsinputconvertpower"></a>

```json
{
  "input": 0.866107,
  "source": "Gigawatt",
  "target": "Kilowatt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|BritishThermalUnitPerHour|
|source|Decawatt|
|source|Deciwatt|
|source|ElectricalHorsepower|
|source|Femtowatt|
|source|Gigawatt|
|source|HydraulicHorsepower|
|source|Kilowatt|
|source|MechanicalHorsepower|
|source|Megawatt|
|source|Microwatt|
|source|Milliwatt|
|source|Nanowatt|
|source|Petawatt|
|source|Picowatt|
|source|Terawatt|
|source|Watt|
|target|BritishThermalUnitPerHour|
|target|Decawatt|
|target|Deciwatt|
|target|ElectricalHorsepower|
|target|Femtowatt|
|target|Gigawatt|
|target|HydraulicHorsepower|
|target|Kilowatt|
|target|MechanicalHorsepower|
|target|Megawatt|
|target|Microwatt|
|target|Milliwatt|
|target|Nanowatt|
|target|Petawatt|
|target|Picowatt|
|target|Terawatt|
|target|Watt|

<h2 id="tocS_inputConvertSpeed">inputConvertSpeed</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertspeed"></a>
<a id="schema_inputConvertSpeed"></a>
<a id="tocSinputconvertspeed"></a>
<a id="tocsinputconvertspeed"></a>

```json
{
  "input": 0.278054,
  "source": "Knot",
  "target": "MilePerHour"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|CentimeterPerHour|
|source|CentimeterPerMinute|
|source|CentimeterPerSecond|
|source|DecimeterPerMinute|
|source|DecimeterPerSecond|
|source|FootPerHour|
|source|FootPerMinute|
|source|FootPerSecond|
|source|InchPerHour|
|source|InchPerMinute|
|source|InchPerSecond|
|source|KilometerPerHour|
|source|KilometerPerMinute|
|source|KilometerPerSecond|
|source|Knot|
|source|MeterPerHour|
|source|MeterPerMinute|
|source|MeterPerSecond|
|source|MicrometerPerMinute|
|source|MicrometerPerSecond|
|source|MilePerHour|
|source|MillimeterPerHour|
|source|MillimeterPerMinute|
|source|MillimeterPerSecond|
|source|NanometerPerMinute|
|source|NanometerPerSecond|
|source|YardPerHour|
|source|YardPerMinute|
|source|YardPerSecond|
|target|CentimeterPerHour|
|target|CentimeterPerMinute|
|target|CentimeterPerSecond|
|target|DecimeterPerMinute|
|target|DecimeterPerSecond|
|target|FootPerHour|
|target|FootPerMinute|
|target|FootPerSecond|
|target|InchPerHour|
|target|InchPerMinute|
|target|InchPerSecond|
|target|KilometerPerHour|
|target|KilometerPerMinute|
|target|KilometerPerSecond|
|target|Knot|
|target|MeterPerHour|
|target|MeterPerMinute|
|target|MeterPerSecond|
|target|MicrometerPerMinute|
|target|MicrometerPerSecond|
|target|MilePerHour|
|target|MillimeterPerHour|
|target|MillimeterPerMinute|
|target|MillimeterPerSecond|
|target|NanometerPerMinute|
|target|NanometerPerSecond|
|target|YardPerHour|
|target|YardPerMinute|
|target|YardPerSecond|

<h2 id="tocS_inputConvertTemperature">inputConvertTemperature</h2>
<!-- backwards compatibility -->
<a id="schemainputconverttemperature"></a>
<a id="schema_inputConvertTemperature"></a>
<a id="tocSinputconverttemperature"></a>
<a id="tocsinputconverttemperature"></a>

```json
{
  "input": 10,
  "source": "Celsius",
  "target": "Fahrenheit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Celsius|
|source|Fahrenheit|
|source|Newton|
|source|Kelvin|
|target|Celsius|
|target|Fahrenheit|
|target|Newton|
|target|Kelvin|

<h2 id="tocS_inputConvertVolume">inputConvertVolume</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertvolume"></a>
<a id="schema_inputConvertVolume"></a>
<a id="tocSinputconvertvolume"></a>
<a id="tocsinputconvertvolume"></a>

```json
{
  "input": 1.5,
  "source": "CubicFoot",
  "target": "CubicMeter"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Centiliter|
|source|CubicCentimeter|
|source|CubicDecimeter|
|source|CubicFoot|
|source|CubicHectometer|
|source|CubicInch|
|source|CubicKilometer|
|source|CubicMeter|
|source|CubicMillimeter|
|source|CubicYard|
|source|Deciliter|
|source|ImperialBeerBarrel|
|source|ImperialGallon|
|source|ImperialOunce|
|source|ImperialPint|
|source|Kiloliter|
|source|Liter|
|source|Microliter|
|source|Milliliter|
|source|Gallon|
|source|Cup|
|source|Ounce|
|source|Pint|
|source|Quart|
|source|Tablespoon|
|source|Teaspoon|
|target|Centiliter|
|target|CubicCentimeter|
|target|CubicDecimeter|
|target|CubicFoot|
|target|CubicHectometer|
|target|CubicInch|
|target|CubicKilometer|
|target|CubicMeter|
|target|CubicMillimeter|
|target|CubicYard|
|target|Deciliter|
|target|ImperialBeerBarrel|
|target|ImperialGallon|
|target|ImperialOunce|
|target|ImperialPint|
|target|Kiloliter|
|target|Liter|
|target|Microliter|
|target|Milliliter|
|target|Gallon|
|target|Cup|
|target|Ounce|
|target|Pint|
|target|Quart|
|target|Tablespoon|
|target|Teaspoon|

<h2 id="tocS_inputConvertWeight">inputConvertWeight</h2>
<!-- backwards compatibility -->
<a id="schemainputconvertweight"></a>
<a id="schema_inputConvertWeight"></a>
<a id="tocSinputconvertweight"></a>
<a id="tocsinputconvertweight"></a>

```json
{
  "input": 5.7,
  "source": "Gram",
  "target": "Ounce"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|none|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|Centigram|
|source|Decagram|
|source|Decigram|
|source|Grain|
|source|Gram|
|source|Hectogram|
|source|Kilogram|
|source|Microgram|
|source|Milligram|
|source|Nanogram|
|source|Ounce|
|source|Pound|
|source|Stone|
|source|Solar Mass|
|source|Earth Mass|
|source|Slug|
|source|Short Ton|
|source|Long Ton|
|source|Ton|
|source|Megaton|
|source|Short Hundredweight|
|source|Long Hundredweight|
|target|Centigram|
|target|Decagram|
|target|Decigram|
|target|Grain|
|target|Gram|
|target|Hectogram|
|target|Kilogram|
|target|Microgram|
|target|Milligram|
|target|Nanogram|
|target|Ounce|
|target|Pound|
|target|Stone|
|target|Ton|

<h2 id="tocS_inputCsvConversionJSON">inputCsvConversionJSON</h2>
<!-- backwards compatibility -->
<a id="schemainputcsvconversionjson"></a>
<a id="schema_inputCsvConversionJSON"></a>
<a id="tocSinputcsvconversionjson"></a>
<a id="tocsinputcsvconversionjson"></a>

```json
{
  "header": true,
  "input": "Property1,Property2,Property3\r\nvalue,value,value\r\nvalue,value,value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|boolean|true|none|Include header row|
|input|string|true|none|CSV string|

<h2 id="tocS_inputCurrencyConversion">inputCurrencyConversion</h2>
<!-- backwards compatibility -->
<a id="schemainputcurrencyconversion"></a>
<a id="schema_inputCurrencyConversion"></a>
<a id="tocSinputcurrencyconversion"></a>
<a id="tocsinputcurrencyconversion"></a>

```json
{
  "input": 100.25,
  "source": "USD",
  "target": "CAD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|Amount to convert|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|USD|
|source|AUD|
|source|BGN|
|source|BRL|
|source|CAD|
|source|CHF|
|source|CNY|
|source|CZK|
|source|DKK|
|source|EUR|
|source|GBP|
|source|HKD|
|source|HRK|
|source|HUF|
|source|IDR|
|source|ILS|
|source|INR|
|source|ISK|
|source|JPY|
|source|KRW|
|source|MXN|
|source|MYR|
|source|NOK|
|source|NZD|
|source|PHP|
|source|PLN|
|source|RON|
|source|RUB|
|source|SGD|
|source|SEK|
|source|THB|
|source|TRY|
|source|ZAR|
|target|USD|
|target|AUD|
|target|BGN|
|target|BRL|
|target|CAD|
|target|CHF|
|target|CNY|
|target|CZK|
|target|DKK|
|target|EUR|
|target|GBP|
|target|HKD|
|target|HRK|
|target|HUF|
|target|IDR|
|target|ILS|
|target|INR|
|target|ISK|
|target|JPY|
|target|KRW|
|target|MXN|
|target|MYR|
|target|NOK|
|target|NZD|
|target|PHP|
|target|PLN|
|target|RON|
|target|RUB|
|target|SGD|
|target|SEK|
|target|THB|
|target|TRY|
|target|ZAR|

<h2 id="tocS_inputCurrencyFormat">inputCurrencyFormat</h2>
<!-- backwards compatibility -->
<a id="schemainputcurrencyformat"></a>
<a id="schema_inputCurrencyFormat"></a>
<a id="tocSinputcurrencyformat"></a>
<a id="tocsinputcurrencyformat"></a>

```json
{
  "input": 10980.79,
  "target": "GBP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|number|true|none|Amount to format|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|target|USD|
|target|AUD|
|target|BGN|
|target|BRL|
|target|CAD|
|target|CHF|
|target|CNY|
|target|CZK|
|target|DKK|
|target|EUR|
|target|GBP|
|target|HKD|
|target|HRK|
|target|HUF|
|target|IDR|
|target|ILS|
|target|INR|
|target|ISK|
|target|JPY|
|target|KRW|
|target|MXN|
|target|MYR|
|target|NOK|
|target|NZD|
|target|PHP|
|target|PLN|
|target|RON|
|target|RUB|
|target|SGD|
|target|SEK|
|target|THB|
|target|TRY|
|target|ZAR|

<h2 id="tocS_inputDataQuery">inputDataQuery</h2>
<!-- backwards compatibility -->
<a id="schemainputdataquery"></a>
<a id="schema_inputDataQuery"></a>
<a id="tocSinputdataquery"></a>
<a id="tocsinputdataquery"></a>

```json
{
  "input": "{\"properties\": [{\"name\":\"ID\",\"value\":\"1234\"},{\"name\":\"Title\",\"value\":\"Some Title\"}]}",
  "query": "$.properties[?(@.name == \"ID\")].value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|XML or JSON string|
|query|string|true|none|XPath or JSONPath query|

<h2 id="tocS_inputDateTimeConversion">inputDateTimeConversion</h2>
<!-- backwards compatibility -->
<a id="schemainputdatetimeconversion"></a>
<a id="schema_inputDateTimeConversion"></a>
<a id="tocSinputdatetimeconversion"></a>
<a id="tocsinputdatetimeconversion"></a>

```json
{
  "format": "yyyy-MM-dd HH:mm:ss",
  "input": "03/10/2010 09:00:00",
  "source": "GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
  "target": "Central Standard Time - (GMT-06:00) Central Time (US & Canada)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Display format (defaults to 'yyyy-MM-dd HH:mm:ss')|
|input|string|true|none|Source date and time|
|source|string|true|none|none|
|target|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London|
|source|Greenwich Standard Time - (GMT) Monrovia, Reykjavik|
|source|W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna|
|source|Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague|
|source|Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb|
|source|W. Central Africa Standard Time - (GMT+01:00) West Central Africa|
|source|GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul|
|source|Middle East Standard Time - (GMT+02:00) Beirut|
|source|Egypt Standard Time - (GMT+02:00) Cairo|
|source|South Africa Standard Time - (GMT+02:00) Harare, Pretoria|
|source|FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius|
|source|Israel Standard Time - (GMT+02:00) Jerusalem|
|source|E. Europe Standard Time - (GMT+02:00) Minsk|
|source|Namibia Standard Time - (GMT+02:00) Windhoek|
|source|Arabic Standard Time - (GMT+03:00) Baghdad|
|source|Arab Standard Time - (GMT+03:00) Kuwait, Riyadh|
|source|Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd|
|source|E. Africa Standard Time - (GMT+03:00) Nairobi|
|source|Georgian Standard Time - (GMT+03:00) Tbilisi|
|source|Iran Standard Time - (GMT+03:30) Tehran|
|source|Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat|
|source|Azerbaijan Standard Time - (GMT+04:00) Baku|
|source|Mauritius Standard Time - (GMT+04:00) Port Louis|
|source|Caucasus Standard Time - (GMT+04:00) Yerevan|
|source|Afghanistan Standard Time - (GMT+04:30) Kabul|
|source|Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg|
|source|Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi|
|source|West Asia Standard Time - (GMT+05:00) Tashkent|
|source|India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi|
|source|Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura|
|source|Nepal Standard Time - (GMT+05:45) Kathmandu|
|source|N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk|
|source|Central Asia Standard Time - (GMT+06:00) Astana, Dhaka|
|source|Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)|
|source|SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta|
|source|North Asia Standard Time - (GMT+07:00) Krasnoyarsk|
|source|China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi|
|source|North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar|
|source|Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore|
|source|W. Australia Standard Time - (GMT+08:00) Perth|
|source|Taipei Standard Time - (GMT+08:00) Taipei|
|source|Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo|
|source|Korea Standard Time - (GMT+09:00) Seoul|
|source|Yakutsk Standard Time - (GMT+09:00) Yakutsk|
|source|Cen. Australia Standard Time - (GMT+09:30) Adelaide|
|source|AUS Central Standard Time - (GMT+09:30) Darwin|
|source|E. Australia Standard Time - (GMT+10:00) Brisbane|
|source|AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney|
|source|West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby|
|source|Tasmania Standard Time - (GMT+10:00) Hobart|
|source|Vladivostok Standard Time - (GMT+10:00) Vladivostok|
|source|Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia|
|source|New Zealand Standard Time - (GMT+12:00) Auckland, Wellington|
|source|Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.|
|source|Tonga Standard Time - (GMT+13:00) Nuku'alofa|
|source|Azores Standard Time - (GMT-01:00) Azores|
|source|Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.|
|source|Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic|
|source|E. South America Standard Time - (GMT-03:00) Brasilia|
|source|Argentina Standard Time - (GMT-03:00) Buenos Aires|
|source|SA Eastern Standard Time - (GMT-03:00) Georgetown|
|source|Greenland Standard Time - (GMT-03:00) Greenland|
|source|Montevideo Standard Time - (GMT-03:00) Montevideo|
|source|Newfoundland Standard Time - (GMT-03:30) Newfoundland|
|source|Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)|
|source|SA Western Standard Time - (GMT-04:00) La Paz|
|source|Central Brazilian Standard Time - (GMT-04:00) Manaus|
|source|Pacific SA Standard Time - (GMT-04:00) Santiago|
|source|Venezuela Standard Time - (GMT-04:30) Caracas|
|source|SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco|
|source|Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)|
|source|US Eastern Standard Time - (GMT-05:00) Indiana (East)|
|source|Central America Standard Time - (GMT-06:00) Central America|
|source|Central Standard Time - (GMT-06:00) Central Time (US & Canada)|
|source|Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey|
|source|Canada Central Standard Time - (GMT-06:00) Saskatchewan|
|source|US Mountain Standard Time - (GMT-07:00) Arizona|
|source|Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan|
|source|Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)|
|source|Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)|
|source|Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California|
|source|Alaskan Standard Time - (GMT-09:00) Alaska|
|source|Hawaiian Standard Time - (GMT-10:00) Hawaii|
|source|Samoa Standard Time - (GMT-11:00) Midway Island, Samoa|
|source|Dateline Standard Time - (GMT-12:00) International Date Line West|
|target|GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London|
|target|Greenwich Standard Time - (GMT) Monrovia, Reykjavik|
|target|W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna|
|target|Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague|
|target|Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb|
|target|W. Central Africa Standard Time - (GMT+01:00) West Central Africa|
|target|GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul|
|target|Middle East Standard Time - (GMT+02:00) Beirut|
|target|Egypt Standard Time - (GMT+02:00) Cairo|
|target|South Africa Standard Time - (GMT+02:00) Harare, Pretoria|
|target|FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius|
|target|Israel Standard Time - (GMT+02:00) Jerusalem|
|target|E. Europe Standard Time - (GMT+02:00) Minsk|
|target|Namibia Standard Time - (GMT+02:00) Windhoek|
|target|Arabic Standard Time - (GMT+03:00) Baghdad|
|target|Arab Standard Time - (GMT+03:00) Kuwait, Riyadh|
|target|Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd|
|target|E. Africa Standard Time - (GMT+03:00) Nairobi|
|target|Georgian Standard Time - (GMT+03:00) Tbilisi|
|target|Iran Standard Time - (GMT+03:30) Tehran|
|target|Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat|
|target|Azerbaijan Standard Time - (GMT+04:00) Baku|
|target|Mauritius Standard Time - (GMT+04:00) Port Louis|
|target|Caucasus Standard Time - (GMT+04:00) Yerevan|
|target|Afghanistan Standard Time - (GMT+04:30) Kabul|
|target|Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg|
|target|Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi|
|target|West Asia Standard Time - (GMT+05:00) Tashkent|
|target|India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi|
|target|Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura|
|target|Nepal Standard Time - (GMT+05:45) Kathmandu|
|target|N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk|
|target|Central Asia Standard Time - (GMT+06:00) Astana, Dhaka|
|target|Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)|
|target|SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta|
|target|North Asia Standard Time - (GMT+07:00) Krasnoyarsk|
|target|China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi|
|target|North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar|
|target|Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore|
|target|W. Australia Standard Time - (GMT+08:00) Perth|
|target|Taipei Standard Time - (GMT+08:00) Taipei|
|target|Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo|
|target|Korea Standard Time - (GMT+09:00) Seoul|
|target|Yakutsk Standard Time - (GMT+09:00) Yakutsk|
|target|Cen. Australia Standard Time - (GMT+09:30) Adelaide|
|target|AUS Central Standard Time - (GMT+09:30) Darwin|
|target|E. Australia Standard Time - (GMT+10:00) Brisbane|
|target|AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney|
|target|West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby|
|target|Tasmania Standard Time - (GMT+10:00) Hobart|
|target|Vladivostok Standard Time - (GMT+10:00) Vladivostok|
|target|Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia|
|target|New Zealand Standard Time - (GMT+12:00) Auckland, Wellington|
|target|Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.|
|target|Tonga Standard Time - (GMT+13:00) Nuku'alofa|
|target|Azores Standard Time - (GMT-01:00) Azores|
|target|Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.|
|target|Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic|
|target|E. South America Standard Time - (GMT-03:00) Brasilia|
|target|Argentina Standard Time - (GMT-03:00) Buenos Aires|
|target|SA Eastern Standard Time - (GMT-03:00) Georgetown|
|target|Greenland Standard Time - (GMT-03:00) Greenland|
|target|Montevideo Standard Time - (GMT-03:00) Montevideo|
|target|Newfoundland Standard Time - (GMT-03:30) Newfoundland|
|target|Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)|
|target|SA Western Standard Time - (GMT-04:00) La Paz|
|target|Central Brazilian Standard Time - (GMT-04:00) Manaus|
|target|Pacific SA Standard Time - (GMT-04:00) Santiago|
|target|Venezuela Standard Time - (GMT-04:30) Caracas|
|target|SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco|
|target|Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)|
|target|US Eastern Standard Time - (GMT-05:00) Indiana (East)|
|target|Central America Standard Time - (GMT-06:00) Central America|
|target|Central Standard Time - (GMT-06:00) Central Time (US & Canada)|
|target|Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey|
|target|Canada Central Standard Time - (GMT-06:00) Saskatchewan|
|target|US Mountain Standard Time - (GMT-07:00) Arizona|
|target|Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan|
|target|Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)|
|target|Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)|
|target|Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California|
|target|Alaskan Standard Time - (GMT-09:00) Alaska|
|target|Hawaiian Standard Time - (GMT-10:00) Hawaii|
|target|Samoa Standard Time - (GMT-11:00) Midway Island, Samoa|
|target|Dateline Standard Time - (GMT-12:00) International Date Line West|

<h2 id="tocS_inputDateTimeDifference">inputDateTimeDifference</h2>
<!-- backwards compatibility -->
<a id="schemainputdatetimedifference"></a>
<a id="schema_inputDateTimeDifference"></a>
<a id="tocSinputdatetimedifference"></a>
<a id="tocsinputdatetimedifference"></a>

```json
{
  "dateTime1": "1/1/2010 12:37:19",
  "dateTime2": "3/15/2011 14:27:49"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime1|string|true|none|First date/time value|
|dateTime2|string|true|none|Second date/time value|

<h2 id="tocS_inputDateTimeFormat">inputDateTimeFormat</h2>
<!-- backwards compatibility -->
<a id="schemainputdatetimeformat"></a>
<a id="schema_inputDateTimeFormat"></a>
<a id="tocSinputdatetimeformat"></a>
<a id="tocsinputdatetimeformat"></a>

```json
{
  "culture": "en-GB",
  "format": "ddd",
  "input": "03/10/2010 00:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|culture|string|true|none|Language culture|
|format|string|true|none|Output format|
|input|string|true|none|Source date and time|

#### Enumerated Values

|Property|Value|
|---|---|
|culture|en-US|
|culture|af-ZA|
|culture|ar-AE|
|culture|ar-BH|
|culture|ar-DZ|
|culture|ar-EG|
|culture|ar-IQ|
|culture|ar-JO|
|culture|ar-KW|
|culture|ar-LB|
|culture|ar-LY|
|culture|ar-MA|
|culture|ar-OM|
|culture|ar-QA|
|culture|ar-SA|
|culture|ar-SY|
|culture|ar-TN|
|culture|ar-YE|
|culture|az-AZ|
|culture|be-BY|
|culture|bg-BG|
|culture|bs-BA|
|culture|ca-ES|
|culture|cs-CZ|
|culture|cy-GB|
|culture|da-DK|
|culture|de-AT|
|culture|de-CH|
|culture|de-DE|
|culture|de-LI|
|culture|de-LU|
|culture|el-GR|
|culture|en-AU|
|culture|en-BZ|
|culture|en-CA|
|culture|en-CB|
|culture|en-GB|
|culture|en-IE|
|culture|en-JM|
|culture|en-NZ|
|culture|en-PH|
|culture|en-TT|
|culture|en-ZA|
|culture|en-ZW|
|culture|es-AR|
|culture|es-BO|
|culture|es-CL|
|culture|es-CO|
|culture|es-CR|
|culture|es-DO|
|culture|es-EC|
|culture|es-ES|
|culture|es-GT|
|culture|es-HN|
|culture|es-MX|
|culture|es-NI|
|culture|es-PA|
|culture|es-PE|
|culture|es-PR|
|culture|es-PY|
|culture|es-SV|
|culture|es-UY|
|culture|es-VE|
|culture|et-EE|
|culture|eu-ES|
|culture|fa-IR|
|culture|fi-FI|
|culture|fo-FO|
|culture|fr-BE|
|culture|fr-CA|
|culture|fr-CH|
|culture|fr-FR|
|culture|fr-LU|
|culture|fr-MC|
|culture|gl-ES|
|culture|gu-IN|
|culture|he-IL|
|culture|hi-IN|
|culture|hr-BA|
|culture|hr-HR|
|culture|hu-HU|
|culture|hy-AM|
|culture|id-ID|
|culture|is-IS|
|culture|it-CH|
|culture|it-IT|
|culture|ja-JP|
|culture|ka-GE|
|culture|kk-KZ|
|culture|kn-IN|
|culture|ko-KR|
|culture|ky-KG|
|culture|lt-LT|
|culture|lv-LV|
|culture|mi-NZ|
|culture|mn-MN|
|culture|mr-IN|
|culture|ms-BN|
|culture|ms-MY|
|culture|mt-MT|
|culture|nl-BE|
|culture|nl-NL|
|culture|nn-NO|
|culture|ns-ZA|
|culture|pa-IN|
|culture|pl-PL|
|culture|ps-AR|
|culture|pt-BR|
|culture|pt-PT|
|culture|ro-RO|
|culture|ru-RU|
|culture|sa-IN|
|culture|sk-SK|
|culture|sl-SI|
|culture|sq-AL|
|culture|sr-BA|
|culture|sr-SP|
|culture|sv-FI|
|culture|sv-SE|
|culture|sw-KE|
|culture|ta-IN|
|culture|te-IN|
|culture|th-TH|
|culture|tl-PH|
|culture|tn-ZA|
|culture|tr-TR|
|culture|uk-UA|
|culture|ur-PK|
|culture|uz-UZ|
|culture|vi-VN|
|culture|zh-CN|
|culture|zh-HK|
|culture|zh-MO|
|culture|zh-SG|
|culture|zh-TW|
|culture|zu-ZA|

<h2 id="tocS_inputDateTimeInfo">inputDateTimeInfo</h2>
<!-- backwards compatibility -->
<a id="schemainputdatetimeinfo"></a>
<a id="schema_inputDateTimeInfo"></a>
<a id="tocSinputdatetimeinfo"></a>
<a id="tocsinputdatetimeinfo"></a>

```json
{
  "culture": "en-GB",
  "input": "03/10/2010 09:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|culture|string|true|none|Language culture|
|input|string|true|none|Source date and time|

#### Enumerated Values

|Property|Value|
|---|---|
|culture|en-US|
|culture|af-ZA|
|culture|ar-AE|
|culture|ar-BH|
|culture|ar-DZ|
|culture|ar-EG|
|culture|ar-IQ|
|culture|ar-JO|
|culture|ar-KW|
|culture|ar-LB|
|culture|ar-LY|
|culture|ar-MA|
|culture|ar-OM|
|culture|ar-QA|
|culture|ar-SA|
|culture|ar-SY|
|culture|ar-TN|
|culture|ar-YE|
|culture|az-AZ|
|culture|be-BY|
|culture|bg-BG|
|culture|bs-BA|
|culture|ca-ES|
|culture|cs-CZ|
|culture|cy-GB|
|culture|da-DK|
|culture|de-AT|
|culture|de-CH|
|culture|de-DE|
|culture|de-LI|
|culture|de-LU|
|culture|el-GR|
|culture|en-AU|
|culture|en-BZ|
|culture|en-CA|
|culture|en-CB|
|culture|en-GB|
|culture|en-IE|
|culture|en-JM|
|culture|en-NZ|
|culture|en-PH|
|culture|en-TT|
|culture|en-ZA|
|culture|en-ZW|
|culture|es-AR|
|culture|es-BO|
|culture|es-CL|
|culture|es-CO|
|culture|es-CR|
|culture|es-DO|
|culture|es-EC|
|culture|es-ES|
|culture|es-GT|
|culture|es-HN|
|culture|es-MX|
|culture|es-NI|
|culture|es-PA|
|culture|es-PE|
|culture|es-PR|
|culture|es-PY|
|culture|es-SV|
|culture|es-UY|
|culture|es-VE|
|culture|et-EE|
|culture|eu-ES|
|culture|fa-IR|
|culture|fi-FI|
|culture|fo-FO|
|culture|fr-BE|
|culture|fr-CA|
|culture|fr-CH|
|culture|fr-FR|
|culture|fr-LU|
|culture|fr-MC|
|culture|gl-ES|
|culture|gu-IN|
|culture|he-IL|
|culture|hi-IN|
|culture|hr-BA|
|culture|hr-HR|
|culture|hu-HU|
|culture|hy-AM|
|culture|id-ID|
|culture|is-IS|
|culture|it-CH|
|culture|it-IT|
|culture|ja-JP|
|culture|ka-GE|
|culture|kk-KZ|
|culture|kn-IN|
|culture|ko-KR|
|culture|ky-KG|
|culture|lt-LT|
|culture|lv-LV|
|culture|mi-NZ|
|culture|mn-MN|
|culture|mr-IN|
|culture|ms-BN|
|culture|ms-MY|
|culture|mt-MT|
|culture|nl-BE|
|culture|nl-NL|
|culture|nn-NO|
|culture|ns-ZA|
|culture|pa-IN|
|culture|pl-PL|
|culture|ps-AR|
|culture|pt-BR|
|culture|pt-PT|
|culture|ro-RO|
|culture|ru-RU|
|culture|sa-IN|
|culture|sk-SK|
|culture|sl-SI|
|culture|sq-AL|
|culture|sr-BA|
|culture|sr-SP|
|culture|sv-FI|
|culture|sv-SE|
|culture|sw-KE|
|culture|ta-IN|
|culture|te-IN|
|culture|th-TH|
|culture|tl-PH|
|culture|tn-ZA|
|culture|tr-TR|
|culture|uk-UA|
|culture|ur-PK|
|culture|uz-UZ|
|culture|vi-VN|
|culture|zh-CN|
|culture|zh-HK|
|culture|zh-MO|
|culture|zh-SG|
|culture|zh-TW|
|culture|zu-ZA|

<h2 id="tocS_inputGenerateHash">inputGenerateHash</h2>
<!-- backwards compatibility -->
<a id="schemainputgeneratehash"></a>
<a id="schema_inputGenerateHash"></a>
<a id="tocSinputgeneratehash"></a>
<a id="tocsinputgeneratehash"></a>

```json
{
  "algorithm": "SHA256",
  "source": "text to hash"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|true|none|Hash algorithm|
|input|string|true|none|Hash source string|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|MD5|
|algorithm|SHA1|
|algorithm|SHA256|
|algorithm|SHA384|
|algorithm|SHA512|

<h2 id="tocS_inputGenerateUniqueID">inputGenerateUniqueID</h2>
<!-- backwards compatibility -->
<a id="schemainputgenerateuniqueid"></a>
<a id="schema_inputGenerateUniqueID"></a>
<a id="tocSinputgenerateuniqueid"></a>
<a id="tocsinputgenerateuniqueid"></a>

```json
{
  "uppercase": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uppercase|string|true|none|All uppercase alpha characters|

#### Enumerated Values

|Property|Value|
|---|---|
|uppercase|true|
|uppercase|false|

<h2 id="tocS_inputJoinStrings">inputJoinStrings</h2>
<!-- backwards compatibility -->
<a id="schemainputjoinstrings"></a>
<a id="schema_inputJoinStrings"></a>
<a id="tocSinputjoinstrings"></a>
<a id="tocsinputjoinstrings"></a>

```json
{
  "input": [
    "The",
    "brown",
    "cow"
  ],
  "lower": true,
  "separator": ";",
  "trim": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[string]|true|none|Collection of strings to be joined|
|lower|string|true|none|Convert strings in collection to lowercase|
|separator|string|true|none|Separator character|
|trim|string|true|none|Trim strings in collection|

#### Enumerated Values

|Property|Value|
|---|---|
|lower|true|
|lower|false|
|trim|true|
|trim|false|

<h2 id="tocS_inputJsonConversionCSV">inputJsonConversionCSV</h2>
<!-- backwards compatibility -->
<a id="schemainputjsonconversioncsv"></a>
<a id="schema_inputJsonConversionCSV"></a>
<a id="tocSinputjsonconversioncsv"></a>
<a id="tocsinputjsonconversioncsv"></a>

```json
{
  "header": true,
  "input": [
    {
      "property1": "value"
    },
    {
      "property2": "value"
    },
    {
      "property3": "value"
    }
  ],
  "omit": "property1",
  "order": "property3,property2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|boolean|true|none|Include header row|
|input|string|true|none|JSON array object|
|omit|string|false|none|Columns to omit (comma separated)|
|order|string|false|none|Column order (comma separated)|

<h2 id="tocS_inputJsonConversionHTML">inputJsonConversionHTML</h2>
<!-- backwards compatibility -->
<a id="schemainputjsonconversionhtml"></a>
<a id="schema_inputJsonConversionHTML"></a>
<a id="tocSinputjsonconversionhtml"></a>
<a id="tocsinputjsonconversionhtml"></a>

```json
{
  "alternate": "<tr><th>Property 3</th><th>Property 2</th></tr>",
  "attributes": "style='width:100%;text-align:center;'",
  "header": false,
  "input": [
    {
      "property1": "value"
    },
    {
      "property2": "value"
    },
    {
      "property3": "value"
    }
  ],
  "omit": "property1",
  "order": "property3,property2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate|string|false|none|Alternate header row markup|
|attributes|string|false|none|Optional table attributes (single quoted values)|
|header|boolean|true|none|Include header row|
|input|string|true|none|JSON array object|
|omit|string|false|none|Columns to omit (comma separated)|
|order|string|false|none|Column order (comma separated)|

<h2 id="tocS_inputJsonConversionXML">inputJsonConversionXML</h2>
<!-- backwards compatibility -->
<a id="schemainputjsonconversionxml"></a>
<a id="schema_inputJsonConversionXML"></a>
<a id="tocSinputjsonconversionxml"></a>
<a id="tocsinputjsonconversionxml"></a>

```json
{
  "input": "{\"property1\":\"value\",\"property2\":\"value\",\"property3\":\"value\"}",
  "root": "Properties"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|JSON array object|
|root|string|true|none|Name of root node|

<h2 id="tocS_inputMarketIndex">inputMarketIndex</h2>
<!-- backwards compatibility -->
<a id="schemainputmarketindex"></a>
<a id="schema_inputMarketIndex"></a>
<a id="tocSinputmarketindex"></a>
<a id="tocsinputmarketindex"></a>

```json
{
  "date": "2020-10-07T00:00:00.000Z",
  "symbol": "DJI.INDX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Date (yyyy-MM-dd, leave empty for last trading day)|
|symbol|string|true|none|Market index|

#### Enumerated Values

|Property|Value|
|---|---|
|symbol|DJA.INDX (Dow Jones Composite Average)|
|symbol|DJI.INDX (Dow Jones Industrial Average)|
|symbol|DJT.INDX (Dow Jones Transportation)|
|symbol|DJUS.INDX (Dow Jones US)|
|symbol|DXY.INDX (US Dollar Index)|
|symbol|GDOW.INDX (Global Dow USD)|
|symbol|NY.INDX (NYSE US 100 Index)|
|symbol|NYA.INDX (NYSE Composite)|
|symbol|IXIC.INDX (NASDAQ Composite)|
|symbol|NDX.INDX (NASDAQ 100)|
|symbol|GSPC.INDX (S&P 500)|
|symbol|ES.INDX (S&P 500 Futures)|
|symbol|MID.INDX (S&P Midcap 400)|
|symbol|GPTSE.INDX (S&P TSX Composite Index [Canada])|
|symbol|FTSE.INDX (FTSE 100 Index [UK])|
|symbol|CDAXX.INDX (DAX Composite Index [Germany])|
|symbol|GDAXI.INDX (DAX Index [Germany])|
|symbol|HSCE.INDX (Hang Seng China Enterprise (CEI))|
|symbol|HSI.INDX (Hang Seng Index [Hong Kong])|
|symbol|N100.INDX (EuroNext 100)|
|symbol|N225.INDX (Nikkei 225 Index)|
|symbol|RTSI.INDX (RTSI Index [Russia])|
|symbol|SSEC.INDX (Shanghai Composite)|
|symbol|SSMI.INDX (Swiss Market Index)|

<h2 id="tocS_inputNumberRange">inputNumberRange</h2>
<!-- backwards compatibility -->
<a id="schemainputnumberrange"></a>
<a id="schema_inputNumberRange"></a>
<a id="tocSinputnumberrange"></a>
<a id="tocsinputnumberrange"></a>

```json
{
  "end": 1000000,
  "start": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|number|true|none|End of range|
|start|number|true|none|Start of range|

<h2 id="tocS_inputQRCode">inputQRCode</h2>
<!-- backwards compatibility -->
<a id="schemainputqrcode"></a>
<a id="schema_inputQRCode"></a>
<a id="tocSinputqrcode"></a>
<a id="tocsinputqrcode"></a>

```json
{
  "input": "someone@example.com|Test message|This is a test.",
  "payload": "Mail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|Text value(s) (vertical bar delimited by type)|
|payload|string|true|none|Payload type|

#### Enumerated Values

|Property|Value|
|---|---|
|payload|Plain Text (string)|
|payload|Bitcoin Payment (address\|amount\|label\|message)|
|payload|Bookmark (url\|title)|
|payload|Calendar Event (subject\|description\|location\|start\|end\|allDayEvent['true' or 'false']\|format ['universal' or 'iCal'])|
|payload|Geolocation (latitude\|longitude)|
|payload|Mail (recipient\|subject\|message)|
|payload|Phone Number (string)|
|payload|SMS (number\|message)|
|payload|URL (string)|
|payload|WiFi (ssid\|password\|authenticationMode ['WEP', 'WPA' or 'WPA2'])|

<h2 id="tocS_inputRedactString">inputRedactString</h2>
<!-- backwards compatibility -->
<a id="schemainputredactstring"></a>
<a id="schema_inputRedactString"></a>
<a id="tocSinputredactstring"></a>
<a id="tocsinputredactstring"></a>

```json
{
  "regex": "[A-Za-z]{5}",
  "source": "The brown cow",
  "value": "brown",
  "values": [
    "The",
    "brown",
    "cow"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regex|string|false|none|Regular expression pattern for matching strings|
|source|string|true|none|String containing the complete text|
|value|string|false|none|Individual string to redact|
|values|[string]|false|none|Collection of strings to redact|

<h2 id="tocS_inputReplaceString">inputReplaceString</h2>
<!-- backwards compatibility -->
<a id="schemainputreplacestring"></a>
<a id="schema_inputReplaceString"></a>
<a id="tocSinputreplacestring"></a>
<a id="tocsinputreplacestring"></a>

```json
{
  "replacement": "dog",
  "source": "The brown cow",
  "value": "cow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replacement|string|true|none|Replacement text|
|source|string|true|none|String containing the text to be replaced|
|value|string|true|none|Text to replace|

<h2 id="tocS_inputSplitString">inputSplitString</h2>
<!-- backwards compatibility -->
<a id="schemainputsplitstring"></a>
<a id="schema_inputSplitString"></a>
<a id="tocSinputsplitstring"></a>
<a id="tocsinputsplitstring"></a>

```json
{
  "characters": ",",
  "input": "The,brown,cow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|characters|string|true|none|One or more characters that will be used to split the text|
|input|string|true|none|Text to split|

<h2 id="tocS_inputStockPrices">inputStockPrices</h2>
<!-- backwards compatibility -->
<a id="schemainputstockprices"></a>
<a id="schema_inputStockPrices"></a>
<a id="tocSinputstockprices"></a>
<a id="tocsinputstockprices"></a>

```json
{
  "date": "2020-10-07T00:00:00.000Z",
  "exchange": "XNYS (New York Stock Exchange)",
  "symbols": "MMM,CVX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|Date (yyyy-MM-dd, leave empty for latest)|
|exchange|string|false|none|Stock exchange|
|symbols|string|true|none|Stock ticker symbols (comma-separated, max 20)|

#### Enumerated Values

|Property|Value|
|---|---|
|exchange|XNYS (New York Stock Exchange)|
|exchange|XNAS (NASDAQ Stock Exchange)|
|exchange|XBRU (Euronext Brussels)|
|exchange|XTSE (Toronto Stock Exchange)|
|exchange|XCNQ (Candadian Securities Exchange)|
|exchange|XSHG (Shanghai Stock Exchange)|
|exchange|XCSE (Copenhagen Stock Exchange)|
|exchange|XPAR (Euronext Paris)|
|exchange|XFRA (Deutsche Borse)|
|exchange|XHKG (Hong Kong Stock Exchange)|
|exchange|XNSE (National Stock Exchange India)|
|exchange|XTAE (Tel Aviv Stock Exchange)|
|exchange|XNGO (Nagoya Stock Exchange)|
|exchange|XFKA (Fukuoka Stock Exchange)|
|exchange|XSAP (Sapporo Stock Exchange)|
|exchange|XMEX (Mexican Stock Exchange)|
|exchange|XNZE (New Zealand Stock Exchange)|
|exchange|XLIS (Euronext Lisbon)|
|exchange|MISX (Moscow Stock Exchange)|
|exchange|XSES (Singapore Stock Exchange)|
|exchange|XLON (London Stock Exchange)|
|exchange|XASE (American Stock Exchange)|
|exchange|XASX (Australia Stock Exchange)|
|exchange|XDFM (Dubai Financial Market)|
|exchange|XBKK (Stock Exchange of Thailand)|
|exchange|XSWX (SIX Swiss Exchange)|
|exchange|XSTO (Stockholm Stock Exchange)|
|exchange|BMEX (Bolsas y Mercados Españoles)|
|exchange|XJSE (Johannesburg Stock Exchange)|

<h2 id="tocS_inputString">inputString</h2>
<!-- backwards compatibility -->
<a id="schemainputstring"></a>
<a id="schema_inputString"></a>
<a id="tocSinputstring"></a>
<a id="tocsinputstring"></a>

```json
{
  "source": "The brown cow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|String variable or text value|

<h2 id="tocS_inputStringComparison">inputStringComparison</h2>
<!-- backwards compatibility -->
<a id="schemainputstringcomparison"></a>
<a id="schema_inputStringComparison"></a>
<a id="tocSinputstringcomparison"></a>
<a id="tocsinputstringcomparison"></a>

```json
{
  "compare": "dog",
  "input": "Cow",
  "lower": true,
  "trim": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compare|string|true|none|Comparison string|
|input|string|true|none|Original string|
|lower|string|true|none|Convert strings to lowercase before comparison|
|trim|string|true|none|Trim strings before comparison|

#### Enumerated Values

|Property|Value|
|---|---|
|lower|true|
|lower|false|
|trim|true|
|trim|false|

<h2 id="tocS_inputStringContains">inputStringContains</h2>
<!-- backwards compatibility -->
<a id="schemainputstringcontains"></a>
<a id="schema_inputStringContains"></a>
<a id="tocSinputstringcontains"></a>
<a id="tocsinputstringcontains"></a>

```json
{
  "find": "cow",
  "input": "The brown cow",
  "lower": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|find|string|true|none|Text to match|
|input|string|true|none|Text to search|
|lower|string|true|none|Convert strings to lowercase|

#### Enumerated Values

|Property|Value|
|---|---|
|lower|true|
|lower|false|

<h2 id="tocS_inputStringToFile">inputStringToFile</h2>
<!-- backwards compatibility -->
<a id="schemainputstringtofile"></a>
<a id="schema_inputStringToFile"></a>
<a id="tocSinputstringtofile"></a>
<a id="tocsinputstringtofile"></a>

```json
{
  "extension": "TXT",
  "filename": "Test",
  "input": "This is a test."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension|string|true|none|File extension|
|filename|string|true|none|Name of file (without extension)|
|input|string|true|none|Text string (body of file)|

#### Enumerated Values

|Property|Value|
|---|---|
|extension|TXT|
|extension|CSV|
|extension|HTML|
|extension|XML|
|extension|CSS|
|extension|JSON|
|extension|JS|

<h2 id="tocS_inputTextToSpeech">inputTextToSpeech</h2>
<!-- backwards compatibility -->
<a id="schemainputtexttospeech"></a>
<a id="schema_inputTextToSpeech"></a>
<a id="tocSinputtexttospeech"></a>
<a id="tocsinputtexttospeech"></a>

```json
{
  "text": "This is sample text.",
  "type": "PlainText",
  "voice": "en-US, Aria (Female)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Text to convert (10,000 characters max)|
|type|string|true|none|Text or file type|
|voice|string|true|none|Voice locale (must match language of input text)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PlainText|
|type|SSML|
|voice|ar-EG, Hoda (Female)|
|voice|ar-SA, Naayf (Male)|
|voice|bg-BG, Ivan (Male)|
|voice|ca-ES, Herena (Female)|
|voice|cs-CZ, Jakub (Male)|
|voice|da-DK, Helle (Female)|
|voice|de-AT, Michael (Male)|
|voice|de-CH, Karsten (Male)|
|voice|de-DE, Hedda (Female)|
|voice|de-DE, Stefan (Male)|
|voice|el-GR, Stefanos (Male)|
|voice|en-AU, Catherine (Female)|
|voice|en-AU, Hayley (Female)|
|voice|en-CA, Heather (Female)|
|voice|en-CA, Linda (Female)|
|voice|en-GB, George (Male)|
|voice|en-GB, Hazel (Female)|
|voice|en-GB, Susan (Female)|
|voice|en-IE, Sean (Male)|
|voice|en-IN, Heera (Female)|
|voice|en-IN, Priya (Female)|
|voice|en-IN, Ravi (Male)|
|voice|en-US, Aria (Female)|
|voice|en-US, Benjamin (Male)|
|voice|en-US, Guy (Male)|
|voice|en-US, Zira (Female)|
|voice|es-ES, Helena (Female)|
|voice|es-ES, Laura (Female)|
|voice|es-ES, Pablo (Male)|
|voice|es-MX, Hilda (Female)|
|voice|es-MX, Raul (Male)|
|voice|fi-FI, Heidi (Female)|
|voice|fr-CA, Caroline (Female)|
|voice|fr-CA, Harmonie (Female)|
|voice|fr-CH, Guillaume (Male)|
|voice|fr-FR, Hortense (Female)|
|voice|fr-FR, Julie (Female)|
|voice|fr-FR, Paul (Male)|
|voice|he-IL, Asaf (Male)|
|voice|hi-IN, Hemant (Male)|
|voice|hi-IN, Kalpana (Female)|
|voice|hr-HR, Matej (Male)|
|voice|hu-HU, Szabolcs (Male)|
|voice|id-ID, Andika (Male)|
|voice|it-IT, Cosimo (Male)|
|voice|it-IT, Lucia (Female)|
|voice|ja-JP, Ayumi (Female)|
|voice|ja-JP, Haruka (Female)|
|voice|ja-JP, Ichiro (Male)|
|voice|ko-KR, Heami (Female)|
|voice|ms-MY, Rizwan (Male)|
|voice|nb-NO, Hulda (Female)|
|voice|nl-NL, Hanna (Female)|
|voice|pl-PL, Paulina (Female)|
|voice|pt-BR, Daniel (Male)|
|voice|pt-BR, Heloisa (Female)|
|voice|pt-PT, Helia (Female)|
|voice|ro-RO, Andrei (Male)|
|voice|ru-RU, Ekaterina (Female)|
|voice|ru-RU, Irina (Female)|
|voice|ru-RU, Pavel (Male)|
|voice|sk-SK, Filip (Male)|
|voice|sl-SI, Lado (Male)|
|voice|sv-SE, Hedvig (Female)|
|voice|ta-IN, Valluvar (Male)|
|voice|te-IN, Chitra (Female)|
|voice|th-TH, Pattara (Male)|
|voice|tr-TR, Seda (Female)|
|voice|vi-VN, An (Male)|
|voice|zh-CN, Huihui (Female)|
|voice|zh-CN, Kangkang (Male)|
|voice|zh-CN, Yaoyao (Female)|
|voice|zh-HK, Danny (Male)|
|voice|zh-HK, Tracy (Female)|
|voice|zh-TW, HanHan (Female)|
|voice|zh-TW, Yating (Female)|
|voice|zh-TW, Zhiwei (Male)|

<h2 id="tocS_inputTranslateString">inputTranslateString</h2>
<!-- backwards compatibility -->
<a id="schemainputtranslatestring"></a>
<a id="schema_inputTranslateString"></a>
<a id="tocSinputtranslatestring"></a>
<a id="tocsinputtranslatestring"></a>

```json
{
  "input": "The brown cow",
  "language": "German"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|String containing the text to be translated|
|language|string|true|none|Translation language|

#### Enumerated Values

|Property|Value|
|---|---|
|language|Arabic|
|language|Chinese (Simplified)|
|language|Czech|
|language|Danish|
|language|Dutch|
|language|English|
|language|Finnish|
|language|French|
|language|German|
|language|Greek|
|language|Hindi|
|language|Hungarian|
|language|Italian|
|language|Japanese|
|language|Klingon|
|language|Korean|
|language|Norweigan|
|language|Polish|
|language|Portuguese|
|language|Russian|
|language|Spanish|
|language|Swedish|
|language|Turkish|
|language|Vietnamese|
|language|Welsh|

<h2 id="tocS_inputTrimString">inputTrimString</h2>
<!-- backwards compatibility -->
<a id="schemainputtrimstring"></a>
<a id="schema_inputTrimString"></a>
<a id="tocSinputtrimstring"></a>
<a id="tocsinputtrimstring"></a>

```json
{
  "source": "  The brown cow  ",
  "type": "Both"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|String containing the text to be trimmed|
|type|string|true|none|Type of white space to remove|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Start|
|type|End|
|type|Both|

<h2 id="tocS_inputVerifyHash">inputVerifyHash</h2>
<!-- backwards compatibility -->
<a id="schemainputverifyhash"></a>
<a id="schema_inputVerifyHash"></a>
<a id="tocSinputverifyhash"></a>
<a id="tocsinputverifyhash"></a>

```json
{
  "algorithm": "SHA256",
  "hash": "a52b8248f023cebd33aeeddda695f60d2561c0c9",
  "source": "this is a really good test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|true|none|Hash algorithm|
|hash|string|true|none|Hashed result|
|input|string|true|none|Original source string|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|MD5|
|algorithm|SHA1|
|algorithm|SHA256|
|algorithm|SHA384|
|algorithm|SHA512|

<h2 id="tocS_inputXmlConversionJSON">inputXmlConversionJSON</h2>
<!-- backwards compatibility -->
<a id="schemainputxmlconversionjson"></a>
<a id="schema_inputXmlConversionJSON"></a>
<a id="tocSinputxmlconversionjson"></a>
<a id="tocsinputxmlconversionjson"></a>

```json
{
  "input": "<properties><property1>value</property1></properties>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|string|true|none|XML string|

<h2 id="tocS_outputBoolean">outputBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaoutputboolean"></a>
<a id="schema_outputBoolean"></a>
<a id="tocSoutputboolean"></a>
<a id="tocsoutputboolean"></a>

```json
{
  "result": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|false|none|Result|

<h2 id="tocS_outputCollectionNumber">outputCollectionNumber</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcollectionnumber"></a>
<a id="schema_outputCollectionNumber"></a>
<a id="tocSoutputcollectionnumber"></a>
<a id="tocsoutputcollectionnumber"></a>

```json
{
  "item": 1.25,
  "items": [
    1.25,
    2.5,
    3.75
  ],
  "status": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|number|false|none|First Value|
|items|[number]|false|none|All Values|
|status|boolean|false|none|Success|

<h2 id="tocS_outputCollectionResult">outputCollectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcollectionresult"></a>
<a id="schema_outputCollectionResult"></a>
<a id="tocSoutputcollectionresult"></a>
<a id="tocsoutputcollectionresult"></a>

```json
{
  "result": [
    "a",
    "b",
    "c"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[string]|false|none|Modified collection result|

<h2 id="tocS_outputCollectionString">outputCollectionString</h2>
<!-- backwards compatibility -->
<a id="schemaoutputcollectionstring"></a>
<a id="schema_outputCollectionString"></a>
<a id="tocSoutputcollectionstring"></a>
<a id="tocsoutputcollectionstring"></a>

```json
{
  "item": "string",
  "items": [
    "string"
  ],
  "status": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|string|false|none|First Value|
|items|[string]|false|none|All Values|
|status|boolean|false|none|Success|

<h2 id="tocS_outputDateDifference">outputDateDifference</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdatedifference"></a>
<a id="schema_outputDateDifference"></a>
<a id="tocSoutputdatedifference"></a>
<a id="tocsoutputdatedifference"></a>

```json
{
  "days": 14,
  "hours": 1,
  "milliseconds": 0,
  "minutes": 50,
  "months": 2,
  "seconds": 30,
  "ticks": 378498300000000,
  "totalDays": 438.08,
  "totalHours": 10513.84,
  "totalMilliseconds": 37849830000,
  "totalMinutes": 630830.5,
  "totalMonths": 14.39,
  "totalSeconds": 37849830,
  "totalYears": 1.2,
  "years": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|number|false|none|Days|
|hours|number|false|none|Hours|
|milliseconds|number|false|none|Milliseconds|
|minutes|number|false|none|Minutes|
|months|number|false|none|Months|
|ticks|number|false|none|Ticks|
|totalDays|number(double)|false|none|Total Days|
|totalHours|number(double)|false|none|Total Hours|
|totalMilliseconds|number(double)|false|none|Total Milliseconds|
|totalMinutes|number(double)|false|none|Total Minutes|
|totalMonths|number(double)|false|none|Total Months|
|totalSeconds|number(double)|false|none|Total Seconds|
|totalYears|number(double)|false|none|Total Years|
|years|number|false|none|Years|

<h2 id="tocS_outputDateInfo">outputDateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdateinfo"></a>
<a id="schema_outputDateInfo"></a>
<a id="tocSoutputdateinfo"></a>
<a id="tocsoutputdateinfo"></a>

```json
{
  "DayOfWeek": 2,
  "DayOfYear": 25,
  "MinutesInDay": 359,
  "SecondsInDay": 1234,
  "Ticks": 1234567890,
  "WeekOfYear": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfWeek|number|false|none|DayOfWeek|
|DayOfYear|number|false|none|DayOfYear|
|MinutesInDay|number|false|none|MinutesInDay|
|SecondsInDay|number|false|none|SecondsInDay|
|Ticks|number|false|none|Ticks|
|WeekOfYear|number|false|none|WeekOfYear|

<h2 id="tocS_outputFileByte">outputFileByte</h2>
<!-- backwards compatibility -->
<a id="schemaoutputfilebyte"></a>
<a id="schema_outputFileByte"></a>
<a id="tocSoutputfilebyte"></a>
<a id="tocsoutputfilebyte"></a>

```json
{
  "result": "Base64 encoded string (byte array)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string(byte)|false|none|Result|

<h2 id="tocS_outputMarketIndex">outputMarketIndex</h2>
<!-- backwards compatibility -->
<a id="schemaoutputmarketindex"></a>
<a id="schema_outputMarketIndex"></a>
<a id="tocSoutputmarketindex"></a>
<a id="tocsoutputmarketindex"></a>

```json
{
  "adj_close": 72.7,
  "adj_high": 74.32,
  "adj_low": 72.245,
  "adj_open": 73.84,
  "adj_volume": 15151304,
  "close": 72.7,
  "date": "2020-10-07T00:00:00+0000",
  "exchange": "INDX",
  "high": 74.32,
  "low": 72.245,
  "open": 73.84,
  "symbol": "DJI.INDX",
  "volume": 15151304
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adj_close|number|false|none|Adjusted close value|
|adj_high|number|false|none|Adjusted high value|
|adj_low|number|false|none|Adjusted low value|
|adj_open|number|false|none|Adjusted open value|
|adj_volume|number|false|none|Adjusted trading volume|
|close|number|false|none|Close value|
|date|string|false|none|Date|
|exchange|string|false|none|Market exchange|
|high|number|false|none|High value|
|low|number|false|none|Low value|
|open|number|false|none|Open value|
|symbol|string|false|none|Index symbol|
|volume|number|false|none|Trading volume|

<h2 id="tocS_outputMultiCollection">outputMultiCollection</h2>
<!-- backwards compatibility -->
<a id="schemaoutputmulticollection"></a>
<a id="schema_outputMultiCollection"></a>
<a id="tocSoutputmulticollection"></a>
<a id="tocsoutputmulticollection"></a>

```json
{
  "result1": [
    "a",
    "b",
    "c"
  ],
  "result2": [
    "d",
    "e",
    "f"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result1|[string]|false|none|First collection result|
|result2|[string]|false|none|Second collection result|

<h2 id="tocS_outputNumber">outputNumber</h2>
<!-- backwards compatibility -->
<a id="schemaoutputnumber"></a>
<a id="schema_outputNumber"></a>
<a id="tocSoutputnumber"></a>
<a id="tocsoutputnumber"></a>

```json
{
  "result": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|number|false|none|Result|

<h2 id="tocS_outputStockPrice">outputStockPrice</h2>
<!-- backwards compatibility -->
<a id="schemaoutputstockprice"></a>
<a id="schema_outputStockPrice"></a>
<a id="tocSoutputstockprice"></a>
<a id="tocsoutputstockprice"></a>

```json
{
  "result": [
    {
      "close": 72.7,
      "date": "2020-10-07T00:00:00+0000",
      "exchange": "XNYS",
      "high": 74.32,
      "last": 72.3,
      "low": 72.245,
      "open": 73.84,
      "symbol": "CVX",
      "volume": 15151304
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|Stock price information|

<h2 id="tocS_outputString">outputString</h2>
<!-- backwards compatibility -->
<a id="schemaoutputstring"></a>
<a id="schema_outputString"></a>
<a id="tocSoutputstring"></a>
<a id="tocsoutputstring"></a>

```json
{
  "result": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|Result|

<h2 id="tocS_outputStringArray">outputStringArray</h2>
<!-- backwards compatibility -->
<a id="schemaoutputstringarray"></a>
<a id="schema_outputStringArray"></a>
<a id="tocSoutputstringarray"></a>
<a id="tocsoutputstringarray"></a>

```json
{
  "data": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|data|
