<h1 id="knowledge-graph-search-api">Knowledge Graph Search API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Searches the Google Knowledge Graph for entities.

Base URLs:

* <a href="https://kgsearch.googleapis.com/">https://kgsearch.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/knowledge-graph/">External documentation</a>

<h1 id="knowledge-graph-search-api-entities">entities</h1>

## kgsearch.entities.search

<a id="opIdkgsearch.entities.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/entities:search \
  -H 'Accept: application/json'
```

`GET /v1/entities:search`

Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

<h3 id="kgsearchentitiessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[string]|false|The list of entity id to be used for search instead of query string. To specify multiple ids in the HTTP request, repeat the parameter in the URL as in ...?ids=A&ids=B|
|indent|query|boolean|false|Enables indenting of json results.|
|languages|query|[string]|false|The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'.|
|limit|query|integer|false|Limits the number of entities to be returned.|
|prefix|query|boolean|false|Enables prefix match against names and aliases of entities|
|query|query|string|false|The literal query string for search.|
|types|query|[string]|false|Restricts returned entities with these types, e.g. Person (as defined in http://schema.org/Person). If multiple types are specified, returned entities will contain one or more of these types.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "@context": null,
  "@type": null,
  "itemListElement": [
    null
  ]
}
```

<h3 id="kgsearchentitiessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchResponse](#schemasearchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "@context": null,
  "@type": null,
  "itemListElement": [
    null
  ]
}
```

Response message includes the context and a list of matching results which contain the detail of associated entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|object|false|none|The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions.|
|@type|object|false|none|The schema type of top-level JSON-LD object, e.g. ItemList.|
|itemListElement|[object]|false|none|The item list of search results.|
