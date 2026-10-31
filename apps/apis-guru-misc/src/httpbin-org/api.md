<h1 id="httpbinorg">httpbin.org v0.9.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A simple HTTP Request & Response Service.<br/> <br/> <b>Run locally: </b> <code>$ docker run -p 80:80 kennethreitz/httpbin</code>

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

Email: <a href="mailto:me@kennethreitz.org">me@kennethreitz.org</a> 
Web: <a href="https://kennethreitz.org">https://kennethreitz.org</a> 

<h1 id="httpbinorg-http-methods">HTTP Methods</h1>

Testing different HTTP verbs

## The request's DELETE parameters.

> Code samples

```bash
curl https://example.com/delete \
  -X DELETE
```

`DELETE /delete`

<h3 id="the-requests-delete-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's DELETE parameters.|None|

<aside class="success">
This operation does not require authentication
</aside>

## The request's query parameters.

> Code samples

```bash
curl https://example.com/get
```

`GET /get`

<h3 id="the-requests-query-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's query parameters.|None|

<aside class="success">
This operation does not require authentication
</aside>

## The request's PATCH parameters.

> Code samples

```bash
curl https://example.com/patch \
  -X PATCH
```

`PATCH /patch`

<h3 id="the-requests-patch-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's PATCH parameters.|None|

<aside class="success">
This operation does not require authentication
</aside>

## The request's POST parameters.

> Code samples

```bash
curl https://example.com/post \
  -X POST
```

`POST /post`

<h3 id="the-requests-post-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's POST parameters.|None|

<aside class="success">
This operation does not require authentication
</aside>

## The request's PUT parameters.

> Code samples

```bash
curl https://example.com/put \
  -X PUT
```

`PUT /put`

<h3 id="the-requests-put-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's PUT parameters.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-auth">Auth</h1>

Auth methods

## Prompts the user for authorization using HTTP Basic Auth.

> Code samples

```bash
curl https://example.com/basic-auth/string/string
```

`GET /basic-auth/{user}/{passwd}`

<h3 id="prompts-the-user-for-authorization-using-http-basic-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|none|
|passwd|path|string|true|none|

<h3 id="prompts-the-user-for-authorization-using-http-basic-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful authentication.|None|
|401|Unauthorized|Unsuccessful authentication.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Prompts the user for authorization using bearer authentication.

> Code samples

```bash
curl https://example.com/bearer
```

`GET /bearer`

<h3 id="prompts-the-user-for-authorization-using-bearer-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|

<h3 id="prompts-the-user-for-authorization-using-bearer-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful authentication.|None|
|401|Unauthorized|Unsuccessful authentication.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Prompts the user for authorization using Digest Auth.

> Code samples

```bash
curl https://example.com/digest-auth/string/string/string
```

`GET /digest-auth/{qop}/{user}/{passwd}`

<h3 id="prompts-the-user-for-authorization-using-digest-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|qop|path|string|true|auth or auth-int|
|user|path|string|true|none|
|passwd|path|string|true|none|

<h3 id="prompts-the-user-for-authorization-using-digest-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful authentication.|None|
|401|Unauthorized|Unsuccessful authentication.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Prompts the user for authorization using Digest Auth + Algorithm.

> Code samples

```bash
curl https://example.com/digest-auth/string/string/string/MD5
```

`GET /digest-auth/{qop}/{user}/{passwd}/{algorithm}`

<h3 id="prompts-the-user-for-authorization-using-digest-auth-algorithm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|qop|path|string|true|auth or auth-int|
|user|path|string|true|none|
|passwd|path|string|true|none|
|algorithm|path|string|true|MD5, SHA-256, SHA-512|

<h3 id="prompts-the-user-for-authorization-using-digest-auth-algorithm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful authentication.|None|
|401|Unauthorized|Unsuccessful authentication.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Prompts the user for authorization using Digest Auth + Algorithm.

> Code samples

```bash
curl https://example.com/digest-auth/string/string/string/MD5/never
```

`GET /digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}`

allow settings the stale_after argument.


<h3 id="prompts-the-user-for-authorization-using-digest-auth-algorithm-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|qop|path|string|true|auth or auth-int|
|user|path|string|true|none|
|passwd|path|string|true|none|
|algorithm|path|string|true|MD5, SHA-256, SHA-512|
|stale_after|path|string|true|none|

<h3 id="prompts-the-user-for-authorization-using-digest-auth-algorithm-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful authentication.|None|
|401|Unauthorized|Unsuccessful authentication.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Prompts the user for authorization using HTTP Basic Auth.

> Code samples

```bash
curl https://example.com/hidden-basic-auth/string/string
```

`GET /hidden-basic-auth/{user}/{passwd}`

<h3 id="prompts-the-user-for-authorization-using-http-basic-auth-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|none|
|passwd|path|string|true|none|

<h3 id="prompts-the-user-for-authorization-using-http-basic-auth-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sucessful authentication.|None|
|404|Not Found|Unsuccessful authentication.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-status-codes">Status codes</h1>

Generates responses with given status code

## Return status code or random status code if more than one are given

> Code samples

```bash
curl https://example.com/status/string
```

`GET /status/{codes}`

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codes|path|string|true|none|

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Informational responses|None|
|200|OK|Success|None|
|300|Multiple Choices|Redirection|None|
|400|Bad Request|Client Errors|None|
|500|Internal Server Error|Server Errors|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return status code or random status code if more than one are given

> Code samples

```bash
curl https://example.com/status/string \
  -X PUT
```

`PUT /status/{codes}`

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codes|path|string|true|none|

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Informational responses|None|
|200|OK|Success|None|
|300|Multiple Choices|Redirection|None|
|400|Bad Request|Client Errors|None|
|500|Internal Server Error|Server Errors|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return status code or random status code if more than one are given

> Code samples

```bash
curl https://example.com/status/string \
  -X POST
```

`POST /status/{codes}`

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codes|path|string|true|none|

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Informational responses|None|
|200|OK|Success|None|
|300|Multiple Choices|Redirection|None|
|400|Bad Request|Client Errors|None|
|500|Internal Server Error|Server Errors|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return status code or random status code if more than one are given

> Code samples

```bash
curl https://example.com/status/string \
  -X DELETE
```

`DELETE /status/{codes}`

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codes|path|string|true|none|

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Informational responses|None|
|200|OK|Success|None|
|300|Multiple Choices|Redirection|None|
|400|Bad Request|Client Errors|None|
|500|Internal Server Error|Server Errors|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return status code or random status code if more than one are given

> Code samples

```bash
curl https://example.com/status/string \
  -X PATCH
```

`PATCH /status/{codes}`

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codes|path|string|true|none|

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Informational responses|None|
|200|OK|Success|None|
|300|Multiple Choices|Redirection|None|
|400|Bad Request|Client Errors|None|
|500|Internal Server Error|Server Errors|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return status code or random status code if more than one are given

> Code samples

```bash
curl https://example.com/status/string \
  -X TRACE
```

`TRACE /status/{codes}`

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|codes|path|string|true|none|

<h3 id="return-status-code-or-random-status-code-if-more-than-one-are-given-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Informational responses|None|
|200|OK|Success|None|
|300|Multiple Choices|Redirection|None|
|400|Bad Request|Client Errors|None|
|500|Internal Server Error|Server Errors|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-request-inspection">Request inspection</h1>

Inspect the request data

## Return the incoming request's HTTP headers.

> Code samples

```bash
curl https://example.com/headers
```

`GET /headers`

<h3 id="return-the-incoming-requests-http-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's headers.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the requester's IP Address.

> Code samples

```bash
curl https://example.com/ip
```

`GET /ip`

<h3 id="returns-the-requesters-ip-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Requester's IP Address.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return the incoming requests's User-Agent header.

> Code samples

```bash
curl https://example.com/user-agent
```

`GET /user-agent`

<h3 id="return-the-incoming-requestss-user-agent-header-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request's User-Agent header.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-response-inspection">Response inspection</h1>

Inspect the response data like caching and headers

## Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.

> Code samples

```bash
curl https://example.com/cache
```

`GET /cache`

<h3 id="returns-a-304-if-an-if-modified-since-header-or-if-none-match-is-present-returns-the-same-as-a-get-otherwise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|none|
|If-None-Match|header|string|false|none|

<h3 id="returns-a-304-if-an-if-modified-since-header-or-if-none-match-is-present-returns-the-same-as-a-get-otherwise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cached response|None|
|304|Not Modified|Modified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Sets a Cache-Control header for n seconds.

> Code samples

```bash
curl https://example.com/cache/0
```

`GET /cache/{value}`

<h3 id="sets-a-cache-control-header-for-n-seconds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|integer|true|none|

<h3 id="sets-a-cache-control-header-for-n-seconds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cache control set|None|

<aside class="success">
This operation does not require authentication
</aside>

## Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.

> Code samples

```bash
curl https://example.com/etag/string
```

`GET /etag/{etag}`

<h3 id="assumes-the-resource-has-the-given-etag-and-responds-to-if-none-match-and-if-match-headers-appropriately-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|none|
|If-Match|header|string|false|none|
|etag|path|string|true|Automatically added|

<h3 id="assumes-the-resource-has-the-given-etag-and-responds-to-if-none-match-and-if-match-headers-appropriately-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Normal response|None|
|412|Precondition Failed|match|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a set of response headers from the query string.

> Code samples

```bash
curl https://example.com/response-headers
```

`GET /response-headers`

<h3 id="returns-a-set-of-response-headers-from-the-query-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|freeform|query|string|false|none|

<h3 id="returns-a-set-of-response-headers-from-the-query-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response headers|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a set of response headers from the query string.

> Code samples

```bash
curl https://example.com/response-headers \
  -X POST
```

`POST /response-headers`

<h3 id="returns-a-set-of-response-headers-from-the-query-string-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|freeform|query|string|false|none|

<h3 id="returns-a-set-of-response-headers-from-the-query-string-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response headers|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-response-formats">Response formats</h1>

Returns responses in different data formats

## Returns Brotli-encoded data.

> Code samples

```bash
curl https://example.com/brotli
```

`GET /brotli`

<h3 id="returns-brotli-encoded-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Brotli-encoded data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns Deflate-encoded data.

> Code samples

```bash
curl https://example.com/deflate
```

`GET /deflate`

<h3 id="returns-deflate-encoded-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Defalte-encoded data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns page denied by robots.txt rules.

> Code samples

```bash
curl https://example.com/deny
```

`GET /deny`

<h3 id="returns-page-denied-by-robotstxt-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Denied message|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a UTF-8 encoded body.

> Code samples

```bash
curl https://example.com/encoding/utf8
```

`GET /encoding/utf8`

<h3 id="returns-a-utf-8-encoded-body-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Encoded UTF-8 content.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns GZip-encoded data.

> Code samples

```bash
curl https://example.com/gzip
```

`GET /gzip`

<h3 id="returns-gzip-encoded-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|GZip-encoded data.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple HTML document.

> Code samples

```bash
curl https://example.com/html
```

`GET /html`

<h3 id="returns-a-simple-html-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An HTML page.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple JSON document.

> Code samples

```bash
curl https://example.com/json
```

`GET /json`

<h3 id="returns-a-simple-json-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An JSON document.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns some robots.txt rules.

> Code samples

```bash
curl https://example.com/robots.txt
```

`GET /robots.txt`

<h3 id="returns-some-robotstxt-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Robots file|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple XML document.

> Code samples

```bash
curl https://example.com/xml
```

`GET /xml`

<h3 id="returns-a-simple-xml-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An XML document.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-dynamic-data">Dynamic data</h1>

Generates random and dynamic data

## Decodes base64url-encoded string.

> Code samples

```bash
curl https://example.com/base64/SFRUUEJJTiBpcyBhd2Vzb21l
```

`GET /base64/{value}`

<h3 id="decodes-base64url-encoded-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|string|true|none|

<h3 id="decodes-base64url-encoded-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decoded base64 content.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns n random bytes generated with given seed

> Code samples

```bash
curl https://example.com/bytes/0
```

`GET /bytes/{n}`

<h3 id="returns-n-random-bytes-generated-with-given-seed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|

<h3 id="returns-n-random-bytes-generated-with-given-seed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bytes.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a delayed response (max of 10 seconds).

> Code samples

```bash
curl https://example.com/delay/0
```

`GET /delay/{delay}`

<h3 id="returns-a-delayed-response-max-of-10-seconds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|integer|true|none|

<h3 id="returns-a-delayed-response-max-of-10-seconds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A delayed response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a delayed response (max of 10 seconds).

> Code samples

```bash
curl https://example.com/delay/0 \
  -X PUT
```

`PUT /delay/{delay}`

<h3 id="returns-a-delayed-response-max-of-10-seconds-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|integer|true|none|

<h3 id="returns-a-delayed-response-max-of-10-seconds-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A delayed response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a delayed response (max of 10 seconds).

> Code samples

```bash
curl https://example.com/delay/0 \
  -X POST
```

`POST /delay/{delay}`

<h3 id="returns-a-delayed-response-max-of-10-seconds-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|integer|true|none|

<h3 id="returns-a-delayed-response-max-of-10-seconds-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A delayed response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a delayed response (max of 10 seconds).

> Code samples

```bash
curl https://example.com/delay/0 \
  -X DELETE
```

`DELETE /delay/{delay}`

<h3 id="returns-a-delayed-response-max-of-10-seconds-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|integer|true|none|

<h3 id="returns-a-delayed-response-max-of-10-seconds-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A delayed response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a delayed response (max of 10 seconds).

> Code samples

```bash
curl https://example.com/delay/0 \
  -X PATCH
```

`PATCH /delay/{delay}`

<h3 id="returns-a-delayed-response-max-of-10-seconds-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|integer|true|none|

<h3 id="returns-a-delayed-response-max-of-10-seconds-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A delayed response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a delayed response (max of 10 seconds).

> Code samples

```bash
curl https://example.com/delay/0 \
  -X TRACE
```

`TRACE /delay/{delay}`

<h3 id="returns-a-delayed-response-max-of-10-seconds-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delay|path|integer|true|none|

<h3 id="returns-a-delayed-response-max-of-10-seconds-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A delayed response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Drips data over a duration after an optional initial delay.

> Code samples

```bash
curl https://example.com/drip
```

`GET /drip`

<h3 id="drips-data-over-a-duration-after-an-optional-initial-delay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|duration|query|number|false|The amount of time (in seconds) over which to drip each byte|
|numbytes|query|integer|false|The number of bytes to respond with|
|code|query|integer|false|The response code that will be returned|
|delay|query|number|false|The amount of time (in seconds) to delay before responding|

<h3 id="drips-data-over-a-duration-after-an-optional-initial-delay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A dripped response.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a page containing n links to other pages which do the same.

> Code samples

```bash
curl https://example.com/links/0/0
```

`GET /links/{n}/{offset}`

<h3 id="generate-a-page-containing-n-links-to-other-pages-which-do-the-same-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|
|offset|path|integer|true|none|

<h3 id="generate-a-page-containing-n-links-to-other-pages-which-do-the-same-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTML links.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Streams n random bytes generated with given seed, at given chunk size per packet.

> Code samples

```bash
curl https://example.com/range/0
```

`GET /range/{numbytes}`

<h3 id="streams-n-random-bytes-generated-with-given-seed-at-given-chunk-size-per-packet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|numbytes|path|integer|true|none|

<h3 id="streams-n-random-bytes-generated-with-given-seed-at-given-chunk-size-per-packet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bytes.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Streams n random bytes generated with given seed, at given chunk size per packet.

> Code samples

```bash
curl https://example.com/stream-bytes/0
```

`GET /stream-bytes/{n}`

<h3 id="streams-n-random-bytes-generated-with-given-seed-at-given-chunk-size-per-packet-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|

<h3 id="streams-n-random-bytes-generated-with-given-seed-at-given-chunk-size-per-packet-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bytes.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Stream n JSON responses

> Code samples

```bash
curl https://example.com/stream/0
```

`GET /stream/{n}`

<h3 id="stream-n-json-responses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|

<h3 id="stream-n-json-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Streamed JSON responses.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a UUID4.

> Code samples

```bash
curl https://example.com/uuid
```

`GET /uuid`

<h3 id="return-a-uuid4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A UUID4.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-cookies">Cookies</h1>

Creates, reads and deletes Cookies

## Returns cookie data.

> Code samples

```bash
curl https://example.com/cookies
```

`GET /cookies`

<h3 id="returns-cookie-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Set cookies.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes cookie(s) as provided by the query string and redirects to cookie list.

> Code samples

```bash
curl https://example.com/cookies/delete
```

`GET /cookies/delete`

<h3 id="deletes-cookies-as-provided-by-the-query-string-and-redirects-to-cookie-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|freeform|query|string|false|none|

<h3 id="deletes-cookies-as-provided-by-the-query-string-and-redirects-to-cookie-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redirect to cookie list|None|

<aside class="success">
This operation does not require authentication
</aside>

## Sets cookie(s) as provided by the query string and redirects to cookie list.

> Code samples

```bash
curl https://example.com/cookies/set
```

`GET /cookies/set`

<h3 id="sets-cookies-as-provided-by-the-query-string-and-redirects-to-cookie-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|freeform|query|string|false|none|

<h3 id="sets-cookies-as-provided-by-the-query-string-and-redirects-to-cookie-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redirect to cookie list|None|

<aside class="success">
This operation does not require authentication
</aside>

## Sets a cookie and redirects to cookie list.

> Code samples

```bash
curl https://example.com/cookies/set/string/string
```

`GET /cookies/set/{name}/{value}`

<h3 id="sets-a-cookie-and-redirects-to-cookie-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|value|path|string|true|none|

<h3 id="sets-a-cookie-and-redirects-to-cookie-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Set cookies and redirects to cookie list.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-images">Images</h1>

Returns different image formats

## Returns a simple image of the type suggest by the Accept header.

> Code samples

```bash
curl https://example.com/image
```

`GET /image`

<h3 id="returns-a-simple-image-of-the-type-suggest-by-the-accept-header-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An image.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple JPEG image.

> Code samples

```bash
curl https://example.com/image/jpeg
```

`GET /image/jpeg`

<h3 id="returns-a-simple-jpeg-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JPEG image.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple PNG image.

> Code samples

```bash
curl https://example.com/image/png
```

`GET /image/png`

<h3 id="returns-a-simple-png-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A PNG image.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple SVG image.

> Code samples

```bash
curl https://example.com/image/svg
```

`GET /image/svg`

<h3 id="returns-a-simple-svg-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An SVG image.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a simple WEBP image.

> Code samples

```bash
curl https://example.com/image/webp
```

`GET /image/webp`

<h3 id="returns-a-simple-webp-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A WEBP image.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-redirects">Redirects</h1>

Returns different redirect responses

## Absolutely 302 Redirects n times.

> Code samples

```bash
curl https://example.com/absolute-redirect/0
```

`GET /absolute-redirect/{n}`

<h3 id="absolutely-302-redirects-n-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|

<h3 id="absolutely-302-redirects-n-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302/3XX Redirects to the given URL.

> Code samples

```bash
curl 'https://example.com/redirect-to?url=string'
```

`GET /redirect-to`

<h3 id="3023xx-redirects-to-the-given-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|none|
|status_code|query|integer|false|none|

<h3 id="3023xx-redirects-to-the-given-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302/3XX Redirects to the given URL.

> Code samples

```bash
curl https://example.com/redirect-to \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'status_code=0&url=string'
```

`PUT /redirect-to`

> Body parameter

```yaml
status_code: 0
url: string
```

<h3 id="3023xx-redirects-to-the-given-url-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» status_code|body|integer|false|none|
|» url|body|string|true|none|

<h3 id="3023xx-redirects-to-the-given-url-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302/3XX Redirects to the given URL.

> Code samples

```bash
curl https://example.com/redirect-to \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'status_code=0&url=string'
```

`POST /redirect-to`

> Body parameter

```yaml
status_code: 0
url: string
```

<h3 id="3023xx-redirects-to-the-given-url-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» status_code|body|integer|false|none|
|» url|body|string|true|none|

<h3 id="3023xx-redirects-to-the-given-url-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302/3XX Redirects to the given URL.

> Code samples

```bash
curl https://example.com/redirect-to \
  -X DELETE
```

`DELETE /redirect-to`

<h3 id="3023xx-redirects-to-the-given-url-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302/3XX Redirects to the given URL.

> Code samples

```bash
curl https://example.com/redirect-to \
  -X PATCH
```

`PATCH /redirect-to`

<h3 id="3023xx-redirects-to-the-given-url-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302/3XX Redirects to the given URL.

> Code samples

```bash
curl https://example.com/redirect-to \
  -X TRACE
```

`TRACE /redirect-to`

<h3 id="3023xx-redirects-to-the-given-url-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## 302 Redirects n times.

> Code samples

```bash
curl https://example.com/redirect/0
```

`GET /redirect/{n}`

<h3 id="302-redirects-n-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|

<h3 id="302-redirects-n-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Relatively 302 Redirects n times.

> Code samples

```bash
curl https://example.com/relative-redirect/0
```

`GET /relative-redirect/{n}`

<h3 id="relatively-302-redirects-n-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|none|

<h3 id="relatively-302-redirects-n-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|A redirection.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="httpbinorg-anything">Anything</h1>

Returns anything that is passed to request

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything
```

`GET /anything`

<h3 id="returns-anything-passed-in-request-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything \
  -X PUT
```

`PUT /anything`

<h3 id="returns-anything-passed-in-request-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything \
  -X POST
```

`POST /anything`

<h3 id="returns-anything-passed-in-request-data-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything \
  -X DELETE
```

`DELETE /anything`

<h3 id="returns-anything-passed-in-request-data-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything \
  -X PATCH
```

`PATCH /anything`

<h3 id="returns-anything-passed-in-request-data-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything \
  -X TRACE
```

`TRACE /anything`

<h3 id="returns-anything-passed-in-request-data-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything/string
```

`GET /anything/{anything}`

<h3 id="returns-anything-passed-in-request-data-6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anything|path|string|true|Automatically added|

<h3 id="returns-anything-passed-in-request-data-6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything/string \
  -X PUT
```

`PUT /anything/{anything}`

<h3 id="returns-anything-passed-in-request-data-7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anything|path|string|true|Automatically added|

<h3 id="returns-anything-passed-in-request-data-7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything/string \
  -X POST
```

`POST /anything/{anything}`

<h3 id="returns-anything-passed-in-request-data-8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anything|path|string|true|Automatically added|

<h3 id="returns-anything-passed-in-request-data-8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything/string \
  -X DELETE
```

`DELETE /anything/{anything}`

<h3 id="returns-anything-passed-in-request-data-9-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anything|path|string|true|Automatically added|

<h3 id="returns-anything-passed-in-request-data-9-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything/string \
  -X PATCH
```

`PATCH /anything/{anything}`

<h3 id="returns-anything-passed-in-request-data-10-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anything|path|string|true|Automatically added|

<h3 id="returns-anything-passed-in-request-data-10-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anything passed in request data.

> Code samples

```bash
curl https://example.com/anything/string \
  -X TRACE
```

`TRACE /anything/{anything}`

<h3 id="returns-anything-passed-in-request-data-11-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anything|path|string|true|Automatically added|

<h3 id="returns-anything-passed-in-request-data-11-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Anything passed in request|None|

<aside class="success">
This operation does not require authentication
</aside>
