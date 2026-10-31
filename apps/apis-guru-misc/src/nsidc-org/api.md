<h1 id="nsidc-web-service-documentation-index">NSIDC Web Service Documentation Index v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API allows programmers to build National Snow and Ice Data Center data and metadata services into their applications.

Base URLs:

* <a href="http://nsidc.org/api/dataset/2">http://nsidc.org/api/dataset/2</a>

Email: <a href="mailto:support@aoncadis.org">support@aoncadis.org</a> 

<h1 id="nsidc-web-service-documentation-index-swaggerdocs">SwaggerDocs</h1>

Dataset search

## View the facet information corresponding to a search

<a id="opIdfacets"></a>

> Code samples

```bash
curl https://example.com/Facets
```

`GET /Facets`

In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.

<h3 id="view-the-facet-information-corresponding-to-a-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerms|query|string|false|URL-encoded keyword or keywords desired by the client; OpenSearch 1.1|
|count|query|integer|false|The number of search results per page desired by the client; OpenSearch 1.1|
|startIndex|query|integer|false|First search result desired by the search client; OpenSearch 1.1|
|spatial|query|string|false|4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter|
|sortKeys|query|string|false|Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0|
|startDate|query|string(date)|false|The start date in yyyy-mm-dd format|
|endDate|query|string(date)|false|The end date in yyyy-mm-dd format|
|facetFilters|query|string|false|Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values|
|source|query|string|false|Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortKeys|score,,desc|
|sortKeys|spatial_area,,asc|
|sortKeys|spatial_area,,desc|
|sortKeys|temporal_duration,,asc|
|sortKeys|temporal_duration,,desc|
|sortKeys|updated,,desc|
|source|NSIDC|
|source|ADE|

<h3 id="view-the-facet-information-corresponding-to-a-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search documents using the OpenSearch 1.1 Specification

<a id="opIdopen search"></a>

> Code samples

```bash
curl https://example.com/OpenSearch
```

`GET /OpenSearch`

This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.

<h3 id="search-documents-using-the-opensearch-11-specification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerms|query|string|false|URL-encoded keyword or keywords desired by the client; OpenSearch 1.1|
|count|query|integer|false|The number of search results per page desired by the client; OpenSearch 1.1|
|startIndex|query|integer|false|First search result desired by the search client; OpenSearch 1.1|
|spatial|query|string|false|4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter|
|sortKeys|query|string|false|Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0|
|startDate|query|string(date)|false|The start date in yyyy-mm-dd format|
|endDate|query|string(date)|false|The end date in yyyy-mm-dd format|
|facetFilters|query|string|false|Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values|
|source|query|string|false|Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortKeys|score,,desc|
|sortKeys|spatial_area,,asc|
|sortKeys|spatial_area,,desc|
|sortKeys|temporal_duration,,asc|
|sortKeys|temporal_duration,,desc|
|sortKeys|updated,,desc|
|source|NSIDC|
|source|ADE|

<h3 id="search-documents-using-the-opensearch-11-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Describes the web interface of NSIDC's data search engine

<a id="opIdopensearch description"></a>

> Code samples

```bash
curl https://example.com/OpenSearchDescription
```

`GET /OpenSearchDescription`

<h3 id="describes-the-web-interface-of-nsidcs-data-search-engine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Suggest search terms based on a partial query

<a id="opIdid"></a>

> Code samples

```bash
curl 'https://example.com/suggest?q=string&source=NSIDC' \
  -H 'Accept: application/x-suggestions+json'
```

`GET /suggest`

In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.

<h3 id="suggest-search-terms-based-on-a-partial-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Search terms typed into the interface (minimum two characters)|
|source|query|string|true|Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|NSIDC|
|source|ADE|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="suggest-search-terms-based-on-a-partial-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>
