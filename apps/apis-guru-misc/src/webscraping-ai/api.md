<h1 id="webscrapingai">WebScraping.AI v2.0.7</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A client for https://webscraping.ai API. It provides a web scaping automation API with Chrome JS rendering, rotating proxies and builtin HTML parsing.

Base URLs:

* <a href="https://api.webscraping.ai">https://api.webscraping.ai</a>

Email: <a href="mailto:support@webscraping.ai">WebScraping.AI Support</a> 
Web: <a href="https://webscraping.ai">WebScraping.AI Support</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query.

<h1 id="webscrapingai-html">HTML</h1>

Get full HTML content of pages with proxies and Chrome JS rendering

## Page HTML by URL

<a id="opIdgetHTML"></a>

> Code samples

```bash
curl "https://example.com/html?url=https%3A%2F%2Fexample.com&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /html`

Returns just HTML on success, JSON on error

<h3 id="page-html-by-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|URL of the target page|
|headers|query|object|false|HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})|
|timeout|query|integer|false|Maximum processing time in ms. Increase it in case of timeout errors (10000 by default, maximum is 30000)|
|js|query|boolean|false|Execute on-page JavaScript using a headless browser (true by default)|
|js_timeout|query|integer|false|Maximum JavaScript rendering time in ms. Increase it in case if you see a loading indicator instead of data on the target page.|
|proxy|query|string|false|Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.|
|country|query|string|false|Country of the proxy to use (US by default). Only available on Startup and Custom plans.|
|device|query|string|false|Type of device emulation.|
|error_on_404|query|boolean|false|Return error on 404 HTTP status on the target page (false by default).|
|error_on_redirect|query|boolean|false|Return error on redirect on the target page (false by default).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|proxy|datacenter|
|proxy|residential|
|country|us|
|country|gb|
|country|de|
|country|it|
|country|fr|
|country|ca|
|country|es|
|country|ru|
|country|jp|
|country|kr|
|device|desktop|
|device|mobile|
|device|tablet|

> Example responses

> 200 Response

```text
<html><head>
    <title>Example Domain</title>
</head>

<body>
<div>
    <h1>Example Domain</h1>
</body></html>
```

> 400 Response

```json
{
  "message": "Invalid CSS selector"
}
```

> 402 Response

```json
{
  "message": "Some error"
}
```

> 403 Response

```json
{
  "message": "Some error"
}
```

> 429 Response

```json
{
  "message": "Some error"
}
```

> 500 Response

```json
{
  "message": "Some error"
}
```

> 502 Response

```json
{
  "status_code": 500,
  "status_message": "Some website error"
}
```

> 504 Response

```json
{
  "message": "Some error"
}
```

<h3 id="page-html-by-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Parameters validation error|[Error](#schemaerror)|
|402|Payment Required|Billing issue, probably you've ran out of credits|[Error](#schemaerror)|
|403|Forbidden|Wrong API key|[Error](#schemaerror)|
|429|Too Many Requests|Too many concurrent requests|[Error](#schemaerror)|
|500|Internal Server Error|Unexpected error, try again or contact support@webscraping.ai|[Error](#schemaerror)|
|502|Bad Gateway|Non-2xx and non-404 HTTP status code on the target page|[PageError](#schemapageerror)|
|504|Gateway Timeout|Timeout error, try increasing timeout parameter value|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="webscrapingai-selected-html">Selected HTML</h1>

Get HTML content of selected page areas (like price, search results, page title, etc.)

## HTML of a selected page area by URL and CSS selector

<a id="opIdgetSelected"></a>

> Code samples

```bash
curl "https://example.com/selected?url=https%3A%2F%2Fexample.com&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /selected`

Returns just HTML on success, JSON on error

<h3 id="html-of-a-selected-page-area-by-url-and-css-selector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|selector|query|string|false|CSS selector (null by default, returns whole page HTML)|
|url|query|string|true|URL of the target page|
|headers|query|object|false|HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})|
|timeout|query|integer|false|Maximum processing time in ms. Increase it in case of timeout errors (10000 by default, maximum is 30000)|
|js|query|boolean|false|Execute on-page JavaScript using a headless browser (true by default)|
|js_timeout|query|integer|false|Maximum JavaScript rendering time in ms. Increase it in case if you see a loading indicator instead of data on the target page.|
|proxy|query|string|false|Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.|
|country|query|string|false|Country of the proxy to use (US by default). Only available on Startup and Custom plans.|
|device|query|string|false|Type of device emulation.|
|error_on_404|query|boolean|false|Return error on 404 HTTP status on the target page (false by default).|
|error_on_redirect|query|boolean|false|Return error on redirect on the target page (false by default).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|proxy|datacenter|
|proxy|residential|
|country|us|
|country|gb|
|country|de|
|country|it|
|country|fr|
|country|ca|
|country|es|
|country|ru|
|country|jp|
|country|kr|
|device|desktop|
|device|mobile|
|device|tablet|

> Example responses

> 200 Response

```text
<a href="https://www.iana.org/domains/example">More information...</a>
```

> 400 Response

```json
{
  "message": "Invalid CSS selector"
}
```

> 402 Response

```json
{
  "message": "Some error"
}
```

> 403 Response

```json
{
  "message": "Some error"
}
```

> 429 Response

```json
{
  "message": "Some error"
}
```

> 500 Response

```json
{
  "message": "Some error"
}
```

> 502 Response

```json
{
  "status_code": 500,
  "status_message": "Some website error"
}
```

> 504 Response

```json
{
  "message": "Some error"
}
```

<h3 id="html-of-a-selected-page-area-by-url-and-css-selector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Parameters validation error|[Error](#schemaerror)|
|402|Payment Required|Billing issue, probably you've ran out of credits|[Error](#schemaerror)|
|403|Forbidden|Wrong API key|[Error](#schemaerror)|
|429|Too Many Requests|Too many concurrent requests|[Error](#schemaerror)|
|500|Internal Server Error|Unexpected error, try again or contact support@webscraping.ai|[Error](#schemaerror)|
|502|Bad Gateway|Non-2xx and non-404 HTTP status code on the target page|[PageError](#schemapageerror)|
|504|Gateway Timeout|Timeout error, try increasing timeout parameter value|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## HTML of multiple page areas by URL and CSS selectors

<a id="opIdgetSelectedMultiple"></a>

> Code samples

```bash
curl "https://example.com/selected-multiple?url=https%3A%2F%2Fexample.com&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /selected-multiple`

Always returns JSON

<h3 id="html-of-multiple-page-areas-by-url-and-css-selectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|selectors|query|[string]|false|Multiple CSS selectors (null by default, returns whole page HTML)|
|url|query|string|true|URL of the target page|
|headers|query|object|false|HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})|
|timeout|query|integer|false|Maximum processing time in ms. Increase it in case of timeout errors (10000 by default, maximum is 30000)|
|js|query|boolean|false|Execute on-page JavaScript using a headless browser (true by default)|
|js_timeout|query|integer|false|Maximum JavaScript rendering time in ms. Increase it in case if you see a loading indicator instead of data on the target page.|
|proxy|query|string|false|Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.|
|country|query|string|false|Country of the proxy to use (US by default). Only available on Startup and Custom plans.|
|device|query|string|false|Type of device emulation.|
|error_on_404|query|boolean|false|Return error on 404 HTTP status on the target page (false by default).|
|error_on_redirect|query|boolean|false|Return error on redirect on the target page (false by default).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|proxy|datacenter|
|proxy|residential|
|country|us|
|country|gb|
|country|de|
|country|it|
|country|fr|
|country|ca|
|country|es|
|country|ru|
|country|jp|
|country|kr|
|device|desktop|
|device|mobile|
|device|tablet|

> Example responses

> 200 Response

```json
[
  "<a href='/test'>some link</a>",
  "Hello"
]
```

> 400 Response

```json
{
  "message": "Invalid CSS selector"
}
```

> 402 Response

```json
{
  "message": "Some error"
}
```

> 403 Response

```json
{
  "message": "Some error"
}
```

> 429 Response

```json
{
  "message": "Some error"
}
```

> 500 Response

```json
{
  "message": "Some error"
}
```

> 502 Response

```json
{
  "status_code": 500,
  "status_message": "Some website error"
}
```

> 504 Response

```json
{
  "message": "Some error"
}
```

<h3 id="html-of-multiple-page-areas-by-url-and-css-selectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SelectedAreas](#schemaselectedareas)|
|400|Bad Request|Parameters validation error|[Error](#schemaerror)|
|402|Payment Required|Billing issue, probably you've ran out of credits|[Error](#schemaerror)|
|403|Forbidden|Wrong API key|[Error](#schemaerror)|
|429|Too Many Requests|Too many concurrent requests|[Error](#schemaerror)|
|500|Internal Server Error|Unexpected error, try again or contact support@webscraping.ai|[Error](#schemaerror)|
|502|Bad Gateway|Non-2xx and non-404 HTTP status code on the target page|[PageError](#schemapageerror)|
|504|Gateway Timeout|Timeout error, try increasing timeout parameter value|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="webscrapingai-account">Account</h1>

Information about your account calls quota

## Information about your account calls quota

<a id="opIdaccount"></a>

> Code samples

```bash
curl "https://example.com/account?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /account`

Always returns JSON

> Example responses

> 200 Response

```json
{
  "remaining_api_calls": 200000,
  "remaining_concurrency": 100,
  "resets_at": 1617073667
}
```

> 403 Response

```json
{
  "message": "Some error"
}
```

<h3 id="information-about-your-account-calls-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|403|Forbidden|Wrong API key|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "remaining_api_calls": 0,
  "remaining_concurrency": 0,
  "resets_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remaining_api_calls|integer|false|none|Remaining API calls quota|
|remaining_concurrency|integer|false|none|Remaining concurrent requests|
|resets_at|integer|false|none|Next billing cycle start time (UNIX timestamp)|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Error description|

<h2 id="tocS_PageError">PageError</h2>
<!-- backwards compatibility -->
<a id="schemapageerror"></a>
<a id="schema_PageError"></a>
<a id="tocSpageerror"></a>
<a id="tocspageerror"></a>

```json
{
  "status_code": 0,
  "status_message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|Response HTTP status code (403, 500, etc)|
|status_message|string|false|none|Response HTTP status message|

<h2 id="tocS_SelectedAreas">SelectedAreas</h2>
<!-- backwards compatibility -->
<a id="schemaselectedareas"></a>
<a id="schema_SelectedAreas"></a>
<a id="tocSselectedareas"></a>
<a id="tocsselectedareas"></a>

```json
[
  "string"
]
```

Array of elements matched by selectors
