<h1 id="debian-code-search">Debian Code Search v1.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenAPI for https://codesearch.debian.net/

Base URLs:

* <a href="https://codesearch.debian.net/api/v1">https://codesearch.debian.net/api/v1</a>

Email: <a href="mailto:stapelberg@debian.org">stapelberg@debian.org</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://codesearch.debian.net/apikeys/">Get a Debian Code Search API key</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **x-dcs-apikey**, in: header.

<h1 id="debian-code-search-search">search</h1>

Code Search

## Searches through source code

<a id="opIdsearch"></a>

> Code samples

```bash
curl 'https://example.com/search?query=string' \
  -H 'Accept: application/json' \
  -H "x-dcs-apikey: ${API_KEY}"
```

`GET /search`

Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).

Search results are ordered by their ranking (best results come first).

<h3 id="searches-through-source-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt|
|match_mode|query|string|false|Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|match_mode|literal|
|match_mode|regexp|

> Example responses

> 200 Response

```json
[
  {
    "context": "        i3Font cursor_font = load_font(\"cursor\", false);",
    "context_after": [
      "        xcb_create_glyph_cursor(",
      "            xcb_connection,"
    ],
    "context_before": [
      "    } else {",
      "        cursor = xcb_generate_id(xcb_connection);"
    ],
    "line": 1313,
    "package": "i3-wm_4.18-1",
    "path": "i3bar/src/xcb.c"
  }
]
```

<h3 id="searches-through-source-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All search results|Inline|
|403|Forbidden|The x-dcs-apikey header was either not set at all, or contained an invalid (no longer valid?) API key. Please see https://codesearch.debian.net/apikeys/ for obtaining a key.|None|

<h3 id="searches-through-source-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SearchResult](#schemasearchresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Like /search, but aggregates per package

<a id="opIdsearchperpackage"></a>

> Code samples

```bash
curl 'https://example.com/searchperpackage?query=string' \
  -H 'Accept: application/json' \
  -H "x-dcs-apikey: ${API_KEY}"
```

`GET /searchperpackage`

The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719

<h3 id="like-search-but-aggregates-per-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt|
|match_mode|query|string|false|Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|match_mode|literal|
|match_mode|regexp|

> Example responses

> 200 Response

```json
[
  {
    "package": "i3-wm_4.18-1",
    "results": [
      {
        "context": "        i3Font cursor_font = load_font(\"cursor\", false);",
        "context_after": [
          "        xcb_create_glyph_cursor(",
          "            xcb_connection,"
        ],
        "context_before": [
          "    } else {",
          "        cursor = xcb_generate_id(xcb_connection);"
        ],
        "line": 1313,
        "package": "i3-wm_4.18-1",
        "path": "i3bar/src/xcb.c"
      }
    ]
  }
]
```

<h3 id="like-search-but-aggregates-per-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All search results|Inline|
|403|Forbidden|The x-dcs-apikey header was either not set at all, or contained an invalid (no longer valid?) API key. Please see https://codesearch.debian.net/apikeys/ for obtaining a key.|None|

<h3 id="like-search-but-aggregates-per-package-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PackageSearchResult](#schemapackagesearchresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_PackageSearchResult">PackageSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapackagesearchresult"></a>
<a id="schema_PackageSearchResult"></a>
<a id="tocSpackagesearchresult"></a>
<a id="tocspackagesearchresult"></a>

```json
{
  "package": "i3-wm_4.18-1",
  "results": [
    {
      "context": "        i3Font cursor_font = load_font(\"cursor\", false);",
      "context_after": [
        "        xcb_create_glyph_cursor(",
        "            xcb_connection,"
      ],
      "context_before": [
        "    } else {",
        "        cursor = xcb_generate_id(xcb_connection);"
      ],
      "line": 1313,
      "package": "i3-wm_4.18-1",
      "path": "i3bar/src/xcb.c"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|string|true|none|The Debian source package for which up to 2 search results have been aggregated in `results`.|
|results|[[SearchResult](#schemasearchresult)]|true|none|none|

<h2 id="tocS_SearchResult">SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "context": "        i3Font cursor_font = load_font(\"cursor\", false);",
  "context_after": [
    "        xcb_create_glyph_cursor(",
    "            xcb_connection,"
  ],
  "context_before": [
    "    } else {",
    "        cursor = xcb_generate_id(xcb_connection);"
  ],
  "line": 1313,
  "package": "i3-wm_4.18-1",
  "path": "i3bar/src/xcb.c"
}
```

A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|true|none|The full line containing the search result.|
|context_after|[string]|false|none|Up to 2 full lines after the search result (see `context`).|
|context_before|[string]|false|none|Up to 2 full lines before the search result (see `context`).|
|line|integer(uint32)|true|none|Line number containing the search result.|
|package|string|true|none|The Debian source package containing this search result, including the full Debian version number.|
|path|string|true|none|Path to the file containing the this search result, starting with `package`.|
