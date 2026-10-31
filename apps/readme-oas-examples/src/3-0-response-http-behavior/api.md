<h1 id="http-test">HTTP test v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a sample definition to test unique HTTP behavior.

Base URLs:

* <a href="http://httpbin.org">http://httpbin.org</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="http-test-default">Default</h1>

## Load a file with caching headers

<a id="opIdcached"></a>

> Code samples

```bash
curl https://example.com/cache
```

`GET /cache`

Making this request without these parameters should make an uncached request. When you provide `if-modified-since` or `if-none-match` you should return a `304 Not Modified`.

<h3 id="load-a-file-with-caching-headers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string(date-time)|false|An RFC 3339 formatted `date-time` string, preferably in UTC. If the resource was last updated before the provided `date-time`, the server should return a `304 Not Modified` response, otherwise a 200 with an accurate `last-modified` time.|
|If-None-Match|header|string|false|If you provide a value here, it will be checked against the generated ETAG of the target resource. If they match, you'll get a `304 Not Modified` response, otherwise a `200 OK` with a new ETAG.|

<h3 id="load-a-file-with-caching-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Redirect

<a id="opIdredirect"></a>

> Code samples

```bash
curl https://example.com/status/302
```

`GET /status/302`

Returns a `302 Found` status

<h3 id="redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## No content

<a id="opIdnocontent"></a>

> Code samples

```bash
curl https://example.com/status/204
```

`GET /status/204`

Returns a `204 No Content` with no body

<h3 id="no-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>
