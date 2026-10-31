<h1 id="uk-parliament-search-service">UK Parliament Search Service vLive</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Performs search on parliament.uk domain. Implements [OpenSearch specification](https://github.com/dewitt/opensearch). Throttled at 10 requests per second per IP address.

Base URLs:

* <a href="https://api.parliament.uk/search">https://api.parliament.uk/search</a>

Email: <a href="mailto:data@parliament.uk">Data &amp; Search team at UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">Data &amp; Search team at UK Parliament</a> 
License: <a href="https://www.parliament.uk/site-information/copyright-parliament/open-parliament-licence">Open Parliament Licence</a>

<a href="https://github.com/dewitt/opensearch">OpenSearch github repository</a>

<h1 id="uk-parliament-search-service-description">Description</h1>

## OpenSearch description document

> Code samples

```bash
curl https://example.com/description
```

`GET /description`

<a href="https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-description-document">OpenSearch github repository</a>

<h3 id="opensearch-description-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Open Search Description|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="uk-parliament-search-service-query">Query</h1>

## Search results

> Code samples

```bash
curl 'https://example.com/query?q=string' \
  -H 'Accept: application/json'
```

`GET /query`

<a href="https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements">OpenSearch github repository</a>

<h3 id="search-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|none|
|start|query|number|false|none|
|count|query|number|false|none|
|subdomains|query|string|false|none|
|inUrlPrefixes|query|string|false|none|

<h3 id="search-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search results

> Code samples

```bash
curl 'https://example.com/query.atom?q=string' \
  -H 'Accept: application/json'
```

`GET /query.{extension}`

<a href="https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements">OpenSearch github repository</a>

<h3 id="search-results-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension|path|string|true|extension|
|q|query|string|true|none|
|start|query|number|false|none|
|count|query|number|false|none|
|subdomains|query|string|false|none|
|inUrlPrefixes|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|extension|atom|
|extension|rss|
|extension|html|
|extension|json|

<h3 id="search-results-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|None|

<aside class="success">
This operation does not require authentication
</aside>
