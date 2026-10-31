<h1 id="erskine-may-api">Erskine May API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API that allows querying of Erskine May data.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="erskine-may-api-chapter">Chapter</h1>

## Returns a single chapter overview by chapter number.

> Code samples

```bash
curl https://example.com/api/Chapter/0 \
  -H 'Accept: application/json'
```

`GET /api/Chapter/{chapterNumber}`

<h3 id="returns-a-single-chapter-overview-by-chapter-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chapterNumber|path|integer(int32)|true|Chapter overview with the chapter number specified|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "number": 0,
  "partNumber": 0,
  "sections": [
    {
      "id": 0,
      "subSections": [
        {}
      ],
      "title": "string",
      "titleChain": "string"
    }
  ],
  "title": "string"
}
```

<h3 id="returns-a-single-chapter-overview-by-chapter-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMayChapterOverview](#schemaerskinemaychapteroverview)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="erskine-may-api-indexterm">IndexTerm</h1>

## Returns a list of index terms by start letter.

> Code samples

```bash
curl https://example.com/api/IndexTerm/browse \
  -H 'Accept: application/json'
```

`GET /api/IndexTerm/browse`

<h3 id="returns-a-list-of-index-terms-by-start-letter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startLetter|query|string|false|Index terms by start letter|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|take|query|integer(int32)|false|The number of records to return, default is 20, maximum is 20.|

> Example responses

> 200 Response

```json
{
  "searchResults": [
    {
      "displayAs": "string",
      "id": 0,
      "seeValue": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-index-terms-by-start-letter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMayIndexTermSearchResultErskineMaySearch](#schemaerskinemayindextermsearchresulterskinemaysearch)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns an index term by id.

> Code samples

```bash
curl https://example.com/api/IndexTerm/0 \
  -H 'Accept: application/json'
```

`GET /api/IndexTerm/{indexTermId}`

<h3 id="returns-an-index-term-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexTermId|path|integer(int32)|true|Index term by if|

> Example responses

> 200 Response

```json
{
  "childTerms": [
    {}
  ],
  "displayAs": "string",
  "id": 0,
  "parentTerm": {},
  "references": [
    {
      "chapterNumber": 0,
      "chapterTitle": "string",
      "paragraphReference": "string",
      "partNumber": 0,
      "searchResultText": "string",
      "sectionId": 0,
      "sectionTitle": "string",
      "sectionTitleChain": "string"
    }
  ],
  "seeLinks": [
    {
      "indexTermId": 0,
      "seeType": "string",
      "seeValue": "string"
    }
  ],
  "term": "string"
}
```

<h3 id="returns-an-index-term-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMayIndexTerm](#schemaerskinemayindexterm)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="erskine-may-api-part">Part</h1>

## Returns a list of all parts.

> Code samples

```bash
curl https://example.com/api/Part \
  -H 'Accept: application/json'
```

`GET /api/Part`

> Example responses

> 200 Response

```json
[
  {
    "chapters": [
      {
        "description": "string",
        "number": 0,
        "partNumber": 0,
        "sections": [
          {
            "id": 0,
            "subSections": [
              {}
            ],
            "title": "string",
            "titleChain": "string"
          }
        ],
        "title": "string"
      }
    ],
    "description": "string",
    "number": 0,
    "title": "string"
  }
]
```

<h3 id="returns-a-list-of-all-parts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-a-list-of-all-parts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErskineMayPart](#schemaerskinemaypart)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a part by part number.

> Code samples

```bash
curl https://example.com/api/Part/0 \
  -H 'Accept: application/json'
```

`GET /api/Part/{partNumber}`

<h3 id="returns-a-part-by-part-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partNumber|path|integer(int32)|true|Part by part number|

> Example responses

> 200 Response

```json
{
  "chapters": [
    {
      "description": "string",
      "number": 0,
      "partNumber": 0,
      "sections": [
        {
          "id": 0,
          "subSections": [
            {}
          ],
          "title": "string",
          "titleChain": "string"
        }
      ],
      "title": "string"
    }
  ],
  "description": "string",
  "number": 0,
  "title": "string"
}
```

<h3 id="returns-a-part-by-part-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMayPart](#schemaerskinemaypart)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="erskine-may-api-search">Search</h1>

## Returns a list of index terms which contain the search term.

> Code samples

```bash
curl https://example.com/api/Search/IndexTermSearchResults/string \
  -H 'Accept: application/json'
```

`GET /api/Search/IndexTermSearchResults/{searchTerm}`

<h3 id="returns-a-list-of-index-terms-which-contain-the-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|path|string|true|Index terms which contain search term.|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|take|query|integer(int32)|false|The number of records to return, default is 20, maximum is 20.|

> Example responses

> 200 Response

```json
{
  "searchResults": [
    {
      "displayAs": "string",
      "id": 0,
      "seeValue": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-index-terms-which-contain-the-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMayIndexTermSearchResultErskineMaySearch](#schemaerskinemayindextermsearchresulterskinemaysearch)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a section overview by reference.

> Code samples

```bash
curl https://example.com/api/Search/Paragraph/string \
  -H 'Accept: application/json'
```

`GET /api/Search/Paragraph/{reference}`

<h3 id="returns-a-section-overview-by-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reference|path|string|true|Section overview by reference.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "subSections": [
    {}
  ],
  "title": "string",
  "titleChain": "string"
}
```

<h3 id="returns-a-section-overview-by-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMaySectionOverview](#schemaerskinemaysectionoverview)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of paragraphs which contain the search term.

> Code samples

```bash
curl https://example.com/api/Search/ParagraphSearchResults/string \
  -H 'Accept: application/json'
```

`GET /api/Search/ParagraphSearchResults/{searchTerm}`

<h3 id="returns-a-list-of-paragraphs-which-contain-the-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|path|string|true|Paragraphs which contain search term in their content.|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|take|query|integer(int32)|false|The number of records to return, default is 20, maximum is 20.|

> Example responses

> 200 Response

```json
{
  "searchResults": [
    {
      "chapterNumber": 0,
      "chapterTitle": "string",
      "paragraphReference": "string",
      "partNumber": 0,
      "searchResultText": "string",
      "sectionId": 0,
      "sectionTitle": "string",
      "sectionTitleChain": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-paragraphs-which-contain-the-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMayParagraphSearchResultErskineMaySearch](#schemaerskinemayparagraphsearchresulterskinemaysearch)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of sections which contain the search term.

> Code samples

```bash
curl https://example.com/api/Search/SectionSearchResults/string \
  -H 'Accept: application/json'
```

`GET /api/Search/SectionSearchResults/{searchTerm}`

<h3 id="returns-a-list-of-sections-which-contain-the-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|path|string|true|Sections which contain search term in their title.|
|skip|query|integer(int32)|false|The number of records to skip from the first, default is 0.|
|take|query|integer(int32)|false|The number of records to return, default is 20, maximum is 20.|

> Example responses

> 200 Response

```json
{
  "searchResults": [
    {
      "chapterNumber": 0,
      "chapterTitle": "string",
      "partNumber": 0,
      "sectionId": 0,
      "sectionTitle": "string",
      "sectionTitleChain": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

<h3 id="returns-a-list-of-sections-which-contain-the-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMaySectionSearchResultErskineMaySearch](#schemaerskinemaysectionsearchresulterskinemaysearch)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="erskine-may-api-section">Section</h1>

## Returns a section by section id.

> Code samples

```bash
curl https://example.com/api/Section/0 \
  -H 'Accept: application/json'
```

`GET /api/Section/{sectionId}`

<h3 id="returns-a-section-by-section-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sectionId|path|integer(int32)|true|Section by id.|

> Example responses

> 200 Response

```json
{
  "chapterNumber": 0,
  "chapterTitle": "string",
  "contentHtml": "string",
  "footnotes": [
    {
      "content": "string",
      "number": "string"
    }
  ],
  "id": 0,
  "isUpdated": true,
  "parentSectionId": 0,
  "parentSectionTitle": "string",
  "partNumber": 0,
  "partTitle": "string",
  "subSections": [
    {
      "id": 0,
      "subSections": [
        {}
      ],
      "title": "string",
      "titleChain": "string"
    }
  ],
  "title": "string",
  "titleChain": "string",
  "updatedDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="returns-a-section-by-section-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMaySectionDetail](#schemaerskinemaysectiondetail)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a section overview by section id and step.

> Code samples

```bash
curl https://example.com/api/Section/0,0 \
  -H 'Accept: application/json'
```

`GET /api/Section/{sectionId},{step}`

<h3 id="returns-a-section-overview-by-section-id-and-step-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sectionId|path|integer(int32)|true|Section by id.|
|step|path|integer(int32)|true|Number of sections to step over from given section.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "subSections": [
    {}
  ],
  "title": "string",
  "titleChain": "string"
}
```

<h3 id="returns-a-section-overview-by-section-id-and-step-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ErskineMaySectionOverview](#schemaerskinemaysectionoverview)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ErskineMayChapterOverview">ErskineMayChapterOverview</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemaychapteroverview"></a>
<a id="schema_ErskineMayChapterOverview"></a>
<a id="tocSerskinemaychapteroverview"></a>
<a id="tocserskinemaychapteroverview"></a>

```json
{
  "description": "string",
  "number": 0,
  "partNumber": 0,
  "sections": [
    {
      "id": 0,
      "subSections": [
        {}
      ],
      "title": "string",
      "titleChain": "string"
    }
  ],
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|number|integer(int32)|false|none|none|
|partNumber|integer(int32)|false|none|none|
|sections|[[ErskineMaySectionOverview](#schemaerskinemaysectionoverview)]|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_ErskineMayFootnote">ErskineMayFootnote</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayfootnote"></a>
<a id="schema_ErskineMayFootnote"></a>
<a id="tocSerskinemayfootnote"></a>
<a id="tocserskinemayfootnote"></a>

```json
{
  "content": "string",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|none|
|number|string \| null|false|none|none|

<h2 id="tocS_ErskineMayIndexTerm">ErskineMayIndexTerm</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayindexterm"></a>
<a id="schema_ErskineMayIndexTerm"></a>
<a id="tocSerskinemayindexterm"></a>
<a id="tocserskinemayindexterm"></a>

```json
{
  "childTerms": [
    {
      "childTerms": [
        {}
      ],
      "displayAs": "string",
      "id": 0,
      "parentTerm": {},
      "references": [
        {
          "chapterNumber": 0,
          "chapterTitle": "string",
          "paragraphReference": "string",
          "partNumber": 0,
          "searchResultText": "string",
          "sectionId": 0,
          "sectionTitle": "string",
          "sectionTitleChain": "string"
        }
      ],
      "seeLinks": [
        {
          "indexTermId": 0,
          "seeType": "string",
          "seeValue": "string"
        }
      ],
      "term": "string"
    }
  ],
  "displayAs": "string",
  "id": 0,
  "parentTerm": {
    "childTerms": [
      {}
    ],
    "displayAs": "string",
    "id": 0,
    "parentTerm": {},
    "references": [
      {
        "chapterNumber": 0,
        "chapterTitle": "string",
        "paragraphReference": "string",
        "partNumber": 0,
        "searchResultText": "string",
        "sectionId": 0,
        "sectionTitle": "string",
        "sectionTitleChain": "string"
      }
    ],
    "seeLinks": [
      {
        "indexTermId": 0,
        "seeType": "string",
        "seeValue": "string"
      }
    ],
    "term": "string"
  },
  "references": [
    {
      "chapterNumber": 0,
      "chapterTitle": "string",
      "paragraphReference": "string",
      "partNumber": 0,
      "searchResultText": "string",
      "sectionId": 0,
      "sectionTitle": "string",
      "sectionTitleChain": "string"
    }
  ],
  "seeLinks": [
    {
      "indexTermId": 0,
      "seeType": "string",
      "seeValue": "string"
    }
  ],
  "term": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childTerms|[[ErskineMayIndexTerm](#schemaerskinemayindexterm)]|false|none|none|
|displayAs|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|parentTerm|[ErskineMayIndexTerm](#schemaerskinemayindexterm)|false|none|none|
|references|[[ErskineMayParagraphSearchResult](#schemaerskinemayparagraphsearchresult)]|false|none|none|
|seeLinks|[[ErskineMayIndexTermSeeLink](#schemaerskinemayindextermseelink)]|false|none|none|
|term|string \| null|false|none|none|

<h2 id="tocS_ErskineMayIndexTermSearchResult">ErskineMayIndexTermSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayindextermsearchresult"></a>
<a id="schema_ErskineMayIndexTermSearchResult"></a>
<a id="tocSerskinemayindextermsearchresult"></a>
<a id="tocserskinemayindextermsearchresult"></a>

```json
{
  "displayAs": "string",
  "id": 0,
  "seeValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayAs|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|seeValue|string \| null|false|none|none|

<h2 id="tocS_ErskineMayIndexTermSearchResultErskineMaySearch">ErskineMayIndexTermSearchResultErskineMaySearch</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayindextermsearchresulterskinemaysearch"></a>
<a id="schema_ErskineMayIndexTermSearchResultErskineMaySearch"></a>
<a id="tocSerskinemayindextermsearchresulterskinemaysearch"></a>
<a id="tocserskinemayindextermsearchresulterskinemaysearch"></a>

```json
{
  "searchResults": [
    {
      "displayAs": "string",
      "id": 0,
      "seeValue": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchResults|[[ErskineMayIndexTermSearchResult](#schemaerskinemayindextermsearchresult)]|false|none|none|
|searchTerm|string \| null|false|none|none|
|searchTerms|[string]|false|none|none|
|skip|integer(int32)|false|none|none|
|suggestedSearch|string \| null|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_ErskineMayIndexTermSeeLink">ErskineMayIndexTermSeeLink</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayindextermseelink"></a>
<a id="schema_ErskineMayIndexTermSeeLink"></a>
<a id="tocSerskinemayindextermseelink"></a>
<a id="tocserskinemayindextermseelink"></a>

```json
{
  "indexTermId": 0,
  "seeType": "string",
  "seeValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexTermId|integer(int32)|false|none|none|
|seeType|string \| null|false|none|none|
|seeValue|string \| null|false|none|none|

<h2 id="tocS_ErskineMayParagraphSearchResult">ErskineMayParagraphSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayparagraphsearchresult"></a>
<a id="schema_ErskineMayParagraphSearchResult"></a>
<a id="tocSerskinemayparagraphsearchresult"></a>
<a id="tocserskinemayparagraphsearchresult"></a>

```json
{
  "chapterNumber": 0,
  "chapterTitle": "string",
  "paragraphReference": "string",
  "partNumber": 0,
  "searchResultText": "string",
  "sectionId": 0,
  "sectionTitle": "string",
  "sectionTitleChain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapterNumber|integer(int32)|false|none|none|
|chapterTitle|string \| null|false|none|none|
|paragraphReference|string \| null|false|none|none|
|partNumber|integer(int32)|false|none|none|
|searchResultText|string \| null|false|none|none|
|sectionId|integer(int32)|false|none|none|
|sectionTitle|string \| null|false|none|none|
|sectionTitleChain|string \| null|false|none|none|

<h2 id="tocS_ErskineMayParagraphSearchResultErskineMaySearch">ErskineMayParagraphSearchResultErskineMaySearch</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemayparagraphsearchresulterskinemaysearch"></a>
<a id="schema_ErskineMayParagraphSearchResultErskineMaySearch"></a>
<a id="tocSerskinemayparagraphsearchresulterskinemaysearch"></a>
<a id="tocserskinemayparagraphsearchresulterskinemaysearch"></a>

```json
{
  "searchResults": [
    {
      "chapterNumber": 0,
      "chapterTitle": "string",
      "paragraphReference": "string",
      "partNumber": 0,
      "searchResultText": "string",
      "sectionId": 0,
      "sectionTitle": "string",
      "sectionTitleChain": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchResults|[[ErskineMayParagraphSearchResult](#schemaerskinemayparagraphsearchresult)]|false|none|none|
|searchTerm|string \| null|false|none|none|
|searchTerms|[string]|false|none|none|
|skip|integer(int32)|false|none|none|
|suggestedSearch|string \| null|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|

<h2 id="tocS_ErskineMayPart">ErskineMayPart</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemaypart"></a>
<a id="schema_ErskineMayPart"></a>
<a id="tocSerskinemaypart"></a>
<a id="tocserskinemaypart"></a>

```json
{
  "chapters": [
    {
      "description": "string",
      "number": 0,
      "partNumber": 0,
      "sections": [
        {
          "id": 0,
          "subSections": [
            {}
          ],
          "title": "string",
          "titleChain": "string"
        }
      ],
      "title": "string"
    }
  ],
  "description": "string",
  "number": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapters|[[ErskineMayChapterOverview](#schemaerskinemaychapteroverview)]|false|none|none|
|description|string \| null|false|none|none|
|number|integer(int32)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_ErskineMaySectionDetail">ErskineMaySectionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemaysectiondetail"></a>
<a id="schema_ErskineMaySectionDetail"></a>
<a id="tocSerskinemaysectiondetail"></a>
<a id="tocserskinemaysectiondetail"></a>

```json
{
  "chapterNumber": 0,
  "chapterTitle": "string",
  "contentHtml": "string",
  "footnotes": [
    {
      "content": "string",
      "number": "string"
    }
  ],
  "id": 0,
  "isUpdated": true,
  "parentSectionId": 0,
  "parentSectionTitle": "string",
  "partNumber": 0,
  "partTitle": "string",
  "subSections": [
    {
      "id": 0,
      "subSections": [
        {}
      ],
      "title": "string",
      "titleChain": "string"
    }
  ],
  "title": "string",
  "titleChain": "string",
  "updatedDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapterNumber|integer(int32)|false|none|none|
|chapterTitle|string \| null|false|none|none|
|contentHtml|string \| null|false|none|none|
|footnotes|[[ErskineMayFootnote](#schemaerskinemayfootnote)]|false|none|none|
|id|integer(int32)|false|none|none|
|isUpdated|boolean|false|none|none|
|parentSectionId|integer(int32) \| null|false|none|none|
|parentSectionTitle|string \| null|false|none|none|
|partNumber|integer(int32)|false|none|none|
|partTitle|string \| null|false|none|none|
|subSections|[[ErskineMaySectionOverview](#schemaerskinemaysectionoverview)]|false|none|none|
|title|string \| null|false|none|none|
|titleChain|string \| null|false|none|none|
|updatedDate|string(date-time) \| null|false|none|none|

<h2 id="tocS_ErskineMaySectionOverview">ErskineMaySectionOverview</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemaysectionoverview"></a>
<a id="schema_ErskineMaySectionOverview"></a>
<a id="tocSerskinemaysectionoverview"></a>
<a id="tocserskinemaysectionoverview"></a>

```json
{
  "id": 0,
  "subSections": [
    {
      "id": 0,
      "subSections": [
        {}
      ],
      "title": "string",
      "titleChain": "string"
    }
  ],
  "title": "string",
  "titleChain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|subSections|[[ErskineMaySectionOverview](#schemaerskinemaysectionoverview)]|false|none|none|
|title|string \| null|false|none|none|
|titleChain|string \| null|false|none|none|

<h2 id="tocS_ErskineMaySectionSearchResult">ErskineMaySectionSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemaysectionsearchresult"></a>
<a id="schema_ErskineMaySectionSearchResult"></a>
<a id="tocSerskinemaysectionsearchresult"></a>
<a id="tocserskinemaysectionsearchresult"></a>

```json
{
  "chapterNumber": 0,
  "chapterTitle": "string",
  "partNumber": 0,
  "sectionId": 0,
  "sectionTitle": "string",
  "sectionTitleChain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapterNumber|integer(int32)|false|none|none|
|chapterTitle|string \| null|false|none|none|
|partNumber|integer(int32)|false|none|none|
|sectionId|integer(int32)|false|none|none|
|sectionTitle|string \| null|false|none|none|
|sectionTitleChain|string \| null|false|none|none|

<h2 id="tocS_ErskineMaySectionSearchResultErskineMaySearch">ErskineMaySectionSearchResultErskineMaySearch</h2>
<!-- backwards compatibility -->
<a id="schemaerskinemaysectionsearchresulterskinemaysearch"></a>
<a id="schema_ErskineMaySectionSearchResultErskineMaySearch"></a>
<a id="tocSerskinemaysectionsearchresulterskinemaysearch"></a>
<a id="tocserskinemaysectionsearchresulterskinemaysearch"></a>

```json
{
  "searchResults": [
    {
      "chapterNumber": 0,
      "chapterTitle": "string",
      "partNumber": 0,
      "sectionId": 0,
      "sectionTitle": "string",
      "sectionTitleChain": "string"
    }
  ],
  "searchTerm": "string",
  "searchTerms": [
    "string"
  ],
  "skip": 0,
  "suggestedSearch": "string",
  "take": 0,
  "totalResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchResults|[[ErskineMaySectionSearchResult](#schemaerskinemaysectionsearchresult)]|false|none|none|
|searchTerm|string \| null|false|none|none|
|searchTerms|[string]|false|none|none|
|skip|integer(int32)|false|none|none|
|suggestedSearch|string \| null|false|none|none|
|take|integer(int32)|false|none|none|
|totalResults|integer(int32)|false|none|none|
