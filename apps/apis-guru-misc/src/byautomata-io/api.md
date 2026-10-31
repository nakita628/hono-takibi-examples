<h1 id="automata-market-intelligence-api">Automata Market Intelligence API v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document provides the documentation for the Market Intelligence API by Automata. Get your API Key at https://apis.byautomata.io and check out our <a href='https://www.getpostman.com/collections/d182a1c78d4491d55e19'>Postman Collection</a>.<br><br>The root API endpoint is https://api.byautomata.io. Please refer to the code samples for examples of how to call the Market Intelligence API. The ContentPro endpoints (/contentpro-search and /contentpro-similar-text) are not included in the standard Market Intelligence API plans. Please contact support@byautomata.io for access.

Base URLs:

* <a href="https://api.byautomata.io">https://api.byautomata.io</a>

<a href="https://byautomata.io/terms/">Terms of service</a>
Email: <a href="mailto:support@byautomata.io">support@byautomata.io</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="http://byautomata.io">Find out more about Automata and other Market Intelligence products.</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **x-api-key**, in: header. All Automata API endpoints require an API key distributed by Automata. Retrieve an API key at https://apis.byautomata.io for the /similar and /search endpoints. The ContentPro API endpoints are not included in the standard Market Intelligence API plans. Contact support@byautomata.io for access.

<h1 id="automata-market-intelligence-api-contentpro-search">contentpro-search</h1>

## Send search terms to receive the most relevant articles and companies.

> Code samples

```bash
curl 'https://example.com/contentpro-search?terms=string' \
  -H 'Accept: application/json'
```

`GET /contentpro-search`

<h3 id="send-search-terms-to-receive-the-most-relevant-articles-and-companies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|terms|query|string|true|We provide information about related companies and articles based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/contentpro-search?terms=cloud+computing,enterprise,security|

> Example responses

> 200 Response

```json
{
  "calls_per_month": "string",
  "count_remaining": "string",
  "data": [
    {
      "article": {
        "link": "string",
        "pubdate": "string",
        "title": "string"
      },
      "company": {
        "companyName": "string",
        "description": "string",
        "employee": "string",
        "industry": "string",
        "linkedin": "string",
        "twitter": "string",
        "website": "string"
      },
      "snippets": {
        "description": [
          "string"
        ],
        "text": [
          "string"
        ],
        "title": [
          "string"
        ]
      }
    }
  ],
  "renewal_date": "string"
}
```

<h3 id="send-search-terms-to-receive-the-most-relevant-articles-and-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful operation|Inline|
|400|Bad Request|Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|403|Forbidden|Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|501|Not Implemented|There was a server error. Please try again later or contact support@byautomata.io|None|

<h3 id="send-search-terms-to-receive-the-most-relevant-articles-and-companies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls_per_month|string|false|none|none|
|count_remaining|string|false|none|none|
|data|[object]|false|none|none|
|» article|[Article](#schemaarticle)|false|none|none|
|» company|[ContentProCompany](#schemacontentprocompany)|false|none|none|
|» snippets|[ContentProSnippets](#schemacontentprosnippets)|false|none|none|
|renewal_date|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="automata-market-intelligence-api-contentpro-similar-text">contentpro-similar-text</h1>

## The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

> Code samples

```bash
curl https://example.com/contentpro-similar-text \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "text": "string"
  }'
```

`POST /contentpro-similar-text`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="the-contentpro-similar-text-endpoint-accepts-and-arbitrary-piece-of-text-and-returns-similar-articles-and-blogs-written-by-companies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|We'll provide information about related companies and articles based on the text you provide.|
|» text|body|string|true|Any piece of text|

> Example responses

> 200 Response

```json
{
  "calls_per_month": "string",
  "count_remaining": "string",
  "data": [
    {
      "article": {
        "link": "string",
        "pubdate": "string",
        "title": "string"
      },
      "company": {
        "companyName": "string",
        "description": "string",
        "employee": "string",
        "industry": "string",
        "linkedin": "string",
        "twitter": "string",
        "website": "string"
      },
      "snippets": {
        "description": [
          "string"
        ],
        "text": [
          "string"
        ],
        "title": [
          "string"
        ]
      }
    }
  ],
  "renewal_date": "string"
}
```

<h3 id="the-contentpro-similar-text-endpoint-accepts-and-arbitrary-piece-of-text-and-returns-similar-articles-and-blogs-written-by-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful operation|Inline|
|400|Bad Request|Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|403|Forbidden|Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|501|Not Implemented|There was a server error. Please try again later or contact support@byautomata.io|None|

<h3 id="the-contentpro-similar-text-endpoint-accepts-and-arbitrary-piece-of-text-and-returns-similar-articles-and-blogs-written-by-companies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls_per_month|string|false|none|none|
|count_remaining|string|false|none|none|
|data|[object]|false|none|none|
|» article|[Article](#schemaarticle)|false|none|none|
|» company|[ContentProCompany](#schemacontentprocompany)|false|none|none|
|» snippets|[ContentProSnippets](#schemacontentprosnippets)|false|none|none|
|renewal_date|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="automata-market-intelligence-api-search">search</h1>

## Send search terms to receive the most relevant companies along with text snippets.

> Code samples

```bash
curl 'https://example.com/search?terms=string' \
  -H 'Accept: application/json'
```

`GET /search`

<h3 id="send-search-terms-to-receive-the-most-relevant-companies-along-with-text-snippets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|terms|query|string|true|We provide information about related companies based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/search?link=cloud+computing,enterprise,security|
|page|query|string|false|Page number of search results. Ex. https://api.byautomata.io/search?page=0&link=cloud+computing,enterprise,security|

> Example responses

> 200 Response

```json
{
  "calls_per_month": "string",
  "companies": [
    {
      "companyName": "string",
      "description": "string",
      "employee": "string",
      "industry": "string",
      "linkedin": "string",
      "snippets": [
        {
          "description": [
            "string"
          ],
          "text": [
            "string"
          ],
          "title": [
            "string"
          ]
        }
      ],
      "title": "string",
      "twitter": "string",
      "website": "string"
    }
  ],
  "count_remaining": "string",
  "renewal_date": "string"
}
```

<h3 id="send-search-terms-to-receive-the-most-relevant-companies-along-with-text-snippets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful operation|Inline|
|400|Bad Request|Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|403|Forbidden|Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|501|Not Implemented|There was a server error. Please try again later or contact support@byautomata.io|None|

<h3 id="send-search-terms-to-receive-the-most-relevant-companies-along-with-text-snippets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls_per_month|string|false|none|none|
|companies|[[SimilarCompanySearch](#schemasimilarcompanysearch)]|false|none|none|
|count_remaining|string|false|none|none|
|renewal_date|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="automata-market-intelligence-api-similar">similar</h1>

## Send a company website to receive a list of companies related to them.

> Code samples

```bash
curl 'https://example.com/similar?link=string' \
  -H 'Accept: application/json'
```

`GET /similar`

<h3 id="send-a-company-website-to-receive-a-list-of-companies-related-to-them-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|link|query|string|true|We'll provide information about related companies based on the site you provide. If a LinkedIn page is sent, we will try to identify the company related to the page. Ex. https://api.byautomata.io/similar?link=ibm.com|
|page|query|string|false|Page number of search results. Ex. https://api.byautomata.io/similar?link=ibm.com&page=1|

> Example responses

> 200 Response

```json
{
  "calls_per_month": "string",
  "companies": [
    {
      "companyName": "string",
      "description": "string",
      "employee": "string",
      "industry": "string",
      "linkedin": "string",
      "title": "string",
      "twitter": "string",
      "website": "string"
    }
  ],
  "count_remaining": "string",
  "input_company": {
    "companyName": "string",
    "country": "string",
    "employee": "string",
    "industry": "string",
    "linkedin": "string",
    "twitter": "string",
    "website": "string"
  },
  "renewal_date": "string"
}
```

<h3 id="send-a-company-website-to-receive-a-list-of-companies-related-to-them-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful operation|Inline|
|400|Bad Request|Your request was not valid. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|403|Forbidden|Invalid API Key. Please refer to the API documentation https://api-specs.byautomata.io.|None|
|501|Not Implemented|There was a server error. Please try again later or contact support@byautomata.io|None|

<h3 id="send-a-company-website-to-receive-a-list-of-companies-related-to-them-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls_per_month|string|false|none|none|
|companies|[[SimilarCompany](#schemasimilarcompany)]|false|none|none|
|count_remaining|string|false|none|none|
|input_company|[InputCompany](#schemainputcompany)|false|none|none|
|renewal_date|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Article">Article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_Article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "link": "string",
  "pubdate": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|none|
|pubdate|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_ContentProCompany">ContentProCompany</h2>
<!-- backwards compatibility -->
<a id="schemacontentprocompany"></a>
<a id="schema_ContentProCompany"></a>
<a id="tocScontentprocompany"></a>
<a id="tocscontentprocompany"></a>

```json
{
  "companyName": "string",
  "description": "string",
  "employee": "string",
  "industry": "string",
  "linkedin": "string",
  "twitter": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|none|
|description|string|false|none|none|
|employee|string|false|none|none|
|industry|string|false|none|none|
|linkedin|string|false|none|none|
|twitter|string|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_ContentProSnippets">ContentProSnippets</h2>
<!-- backwards compatibility -->
<a id="schemacontentprosnippets"></a>
<a id="schema_ContentProSnippets"></a>
<a id="tocScontentprosnippets"></a>
<a id="tocscontentprosnippets"></a>

```json
{
  "description": [
    "string"
  ],
  "text": [
    "string"
  ],
  "title": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[string]|false|none|none|
|text|[string]|false|none|none|
|title|[string]|false|none|none|

<h2 id="tocS_InputCompany">InputCompany</h2>
<!-- backwards compatibility -->
<a id="schemainputcompany"></a>
<a id="schema_InputCompany"></a>
<a id="tocSinputcompany"></a>
<a id="tocsinputcompany"></a>

```json
{
  "companyName": "string",
  "country": "string",
  "employee": "string",
  "industry": "string",
  "linkedin": "string",
  "twitter": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|none|
|country|string|false|none|none|
|employee|string|false|none|none|
|industry|string|false|none|none|
|linkedin|string|false|none|none|
|twitter|string|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_SimilarCompany">SimilarCompany</h2>
<!-- backwards compatibility -->
<a id="schemasimilarcompany"></a>
<a id="schema_SimilarCompany"></a>
<a id="tocSsimilarcompany"></a>
<a id="tocssimilarcompany"></a>

```json
{
  "companyName": "string",
  "description": "string",
  "employee": "string",
  "industry": "string",
  "linkedin": "string",
  "title": "string",
  "twitter": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|none|
|description|string|false|none|none|
|employee|string|false|none|none|
|industry|string|false|none|none|
|linkedin|string|false|none|none|
|title|string|false|none|none|
|twitter|string|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_SimilarCompanySearch">SimilarCompanySearch</h2>
<!-- backwards compatibility -->
<a id="schemasimilarcompanysearch"></a>
<a id="schema_SimilarCompanySearch"></a>
<a id="tocSsimilarcompanysearch"></a>
<a id="tocssimilarcompanysearch"></a>

```json
{
  "companyName": "string",
  "description": "string",
  "employee": "string",
  "industry": "string",
  "linkedin": "string",
  "snippets": [
    {
      "description": [
        "string"
      ],
      "text": [
        "string"
      ],
      "title": [
        "string"
      ]
    }
  ],
  "title": "string",
  "twitter": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|none|
|description|string|false|none|none|
|employee|string|false|none|none|
|industry|string|false|none|none|
|linkedin|string|false|none|none|
|snippets|[[Snippet](#schemasnippet)]|false|none|none|
|title|string|false|none|none|
|twitter|string|false|none|none|
|website|string|false|none|none|

<h2 id="tocS_Snippet">Snippet</h2>
<!-- backwards compatibility -->
<a id="schemasnippet"></a>
<a id="schema_Snippet"></a>
<a id="tocSsnippet"></a>
<a id="tocssnippet"></a>

```json
{
  "description": [
    "string"
  ],
  "text": [
    "string"
  ],
  "title": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[string]|false|none|none|
|text|[string]|false|none|none|
|title|[string]|false|none|none|
