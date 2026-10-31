<h1 id="http-status-codes">HTTP Status Codes v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Demos how we handle various status codes. Documentation pulled from https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="http-status-codes-successful-responses">Successful responses</h1>

## Returns a &quot;200 OK&quot;

> Code samples

```bash
curl https://example.com/status/200
```

`GET /status/200`

The request has succeeded. The meaning of the success depends on the HTTP method:
* `GET`: The resource has been fetched and is transmitted in the message body.
* `HEAD`: The representation headers are included in the response without any message body.
* `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
* `TRACE`: The message body contains the request message as received by the server.

<h3 id="returns-a-200-ok-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;201 Created&quot;

> Code samples

```bash
curl https://example.com/status/201
```

`GET /status/201`

The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

<h3 id="returns-a-201-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;202 Accepted&quot;

> Code samples

```bash
curl https://example.com/status/202
```

`GET /status/202`

The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

<h3 id="returns-a-202-accepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;203 Non-Authoritative Information&quot;

> Code samples

```bash
curl https://example.com/status/203
```

`GET /status/203`

This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.

<h3 id="returns-a-203-non-authoritative-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|203|Non-Authoritative Information|Non-Authoritative Information|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;204 No Content&quot;

> Code samples

```bash
curl https://example.com/status/204
```

`GET /status/204`

There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

<h3 id="returns-a-204-no-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;205 Reset Content&quot;

> Code samples

```bash
curl https://example.com/status/205
```

`GET /status/205`

Tells the user-agent to reset the document which sent this request.

<h3 id="returns-a-205-reset-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;206 Partial Content&quot;

> Code samples

```bash
curl https://example.com/status/206
```

`GET /status/206`

This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.

<h3 id="returns-a-206-partial-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|206|Partial Content|Partial Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;200 Multi-Status&quot;

> Code samples

```bash
curl https://example.com/status/207
```

`GET /status/207`

Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

<h3 id="returns-a-200-multi-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|207|Multi-Status|Multi-Status|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;208 Already Reported&quot;

> Code samples

```bash
curl https://example.com/status/208
```

`GET /status/208`

Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

<h3 id="returns-a-208-already-reported-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|208|Already Reported|Already Reported|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;218 This is fine&quot;

> Code samples

```bash
curl https://example.com/status/218
```

`GET /status/218`

<h3 id="returns-a-218-this-is-fine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|218|218|This is fine|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;226 IM Used&quot;

> Code samples

```bash
curl https://example.com/status/226
```

`GET /status/226`

The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

<h3 id="returns-a-226-im-used-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|226|IM Used|IM Used|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-status-codes-redirection-messages">Redirection messages</h1>

## Returns a &quot;300 Multiple Choice&quot;

> Code samples

```bash
curl https://example.com/status/300
```

`GET /status/300`

The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

<h3 id="returns-a-300-multiple-choice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|300|Multiple Choices|Multiple Choice|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;301 Moved Permanently&quot;

> Code samples

```bash
curl https://example.com/status/301
```

`GET /status/301`

The URL of the requested resource has been changed permanently. The new URL is given in the response.

<h3 id="returns-a-301-moved-permanently-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|Moved Permanently|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;302 Found&quot;

> Code samples

```bash
curl https://example.com/status/302
```

`GET /status/302`

This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

<h3 id="returns-a-302-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;303 See Other&quot;

> Code samples

```bash
curl https://example.com/status/303
```

`GET /status/303`

The server sent this response to direct the client to get the requested resource at another URI with a GET request.

<h3 id="returns-a-303-see-other-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|303|See Other|See Other|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;304 Not Modified&quot;

> Code samples

```bash
curl https://example.com/status/304
```

`GET /status/304`

This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

<h3 id="returns-a-304-not-modified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|304|Not Modified|Not Modified|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;305 Use Proxy&quot;

> Code samples

```bash
curl https://example.com/status/305
```

`GET /status/305`

Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

<h3 id="returns-a-305-use-proxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|305|Use Proxy|Use Proxy|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;306 Switch Proxy&quot;

> Code samples

```bash
curl https://example.com/status/306
```

`GET /status/306`

This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

<h3 id="returns-a-306-switch-proxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|306|306|Switch Proxy|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;307 Temporary Redirect&quot;

> Code samples

```bash
curl https://example.com/status/307
```

`GET /status/307`

The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

<h3 id="returns-a-307-temporary-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|307|Temporary Redirect|Temporary Redirect|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;308 Permanent Redirect&quot;

> Code samples

```bash
curl https://example.com/status/308
```

`GET /status/308`

This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.

<h3 id="returns-a-308-permanent-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|308|Permanent Redirect|Permanent Redirect|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-status-codes-client-error-responses">Client error responses</h1>

## Returns a &quot;400 Bad Request&quot;

> Code samples

```bash
curl https://example.com/status/400
```

`GET /status/400`

The server could not understand the request due to invalid syntax.

<h3 id="returns-a-400-bad-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;401 Unauthorized&quot;

> Code samples

```bash
curl https://example.com/status/401
```

`GET /status/401`

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

<h3 id="returns-a-401-unauthorized-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;402 Payment Required&quot;

> Code samples

```bash
curl https://example.com/status/402
```

`GET /status/402`

This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

<h3 id="returns-a-402-payment-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|402|Payment Required|Payment Required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;403 Forbidden&quot;

> Code samples

```bash
curl https://example.com/status/403
```

`GET /status/403`

The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

<h3 id="returns-a-403-forbidden-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;404 Not Found&quot;

> Code samples

```bash
curl https://example.com/status/404
```

`GET /status/404`

The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

<h3 id="returns-a-404-not-found-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;405 Method Not Allowed&quot;

> Code samples

```bash
curl https://example.com/status/405
```

`GET /status/405`

The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.

<h3 id="returns-a-405-method-not-allowed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|405|Method Not Allowed|Method Not Allowed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;406 Not Acceptable&quot;

> Code samples

```bash
curl https://example.com/status/406
```

`GET /status/406`

This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.

<h3 id="returns-a-406-not-acceptable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|406|Not Acceptable|Not Acceptable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;407 Proxy Authentication Required&quot;

> Code samples

```bash
curl https://example.com/status/407
```

`GET /status/407`

This is similar to 401 but authentication is needed to be done by a proxy.

<h3 id="returns-a-407-proxy-authentication-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|407|Proxy Authentication Required|Proxy Authentication Required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;408 Request Timeout&quot;

> Code samples

```bash
curl https://example.com/status/408
```

`GET /status/408`

This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

<h3 id="returns-a-408-request-timeout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|408|Request Timeout|Request Timeout|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;409 Conflict&quot;

> Code samples

```bash
curl https://example.com/status/409
```

`GET /status/409`

This response is sent when a request conflicts with the current state of the server.

<h3 id="returns-a-409-conflict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|409|Conflict|Conflict|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;410 Gone&quot;

> Code samples

```bash
curl https://example.com/status/410
```

`GET /status/410`

This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

<h3 id="returns-a-410-gone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|410|Gone|Gone|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;411 Length Required&quot;

> Code samples

```bash
curl https://example.com/status/411
```

`GET /status/411`

Server rejected the request because the `Content-Length` header field is not defined and the server requires it.

<h3 id="returns-a-411-length-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|411|Length Required|Length Required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;412 Precondition Failed&quot;

> Code samples

```bash
curl https://example.com/status/412
```

`GET /status/412`

The client has indicated preconditions in its headers which the server does not meet.

<h3 id="returns-a-412-precondition-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|412|Precondition Failed|Precondition Failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;413 Payload Too Large&quot;

> Code samples

```bash
curl https://example.com/status/413
```

`GET /status/413`

Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.

<h3 id="returns-a-413-payload-too-large-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|413|Payload Too Large|Payload Too Large|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;414 URI Too Long&quot;

> Code samples

```bash
curl https://example.com/status/414
```

`GET /status/414`

The URI requested by the client is longer than the server is willing to interpret.

<h3 id="returns-a-414-uri-too-long-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|414|URI Too Long|URI Too Long|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;415 Unsupported Media Type&quot;

> Code samples

```bash
curl https://example.com/status/415
```

`GET /status/415`

The media format of the requested data is not supported by the server, so the server is rejecting the request.

<h3 id="returns-a-415-unsupported-media-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|415|Unsupported Media Type|Unsupported Media Type|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;416 Range Not Satisfiable&quot;

> Code samples

```bash
curl https://example.com/status/416
```

`GET /status/416`

The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

<h3 id="returns-a-416-range-not-satisfiable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|416|Range Not Satisfiable|Range Not Satisfiable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;417 Expectation Failed&quot;

> Code samples

```bash
curl https://example.com/status/417
```

`GET /status/417`

This response code means the expectation indicated by the `Expect` request header field can't be met by the server.

<h3 id="returns-a-417-expectation-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|417|Expectation Failed|Expectation Failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;418 I'm a teapot&quot;

> Code samples

```bash
curl https://example.com/status/418
```

`GET /status/418`

The server refuses the attempt to brew coffee with a teapot.

<h3 id="returns-a-418-im-a-teapot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|418|I'm a Teapot|I'm a teapot|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;419 Page Expired&quot;

> Code samples

```bash
curl https://example.com/status/419
```

`GET /status/419`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-419-page-expired-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|419|419|Page Expired|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;420 Enhance Your Calm&quot;

> Code samples

```bash
curl https://example.com/status/420
```

`GET /status/420`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-420-enhance-your-calm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|420|420|Enhance Your Calm|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;421 Misdirected Request&quot;

> Code samples

```bash
curl https://example.com/status/421
```

`GET /status/421`

The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

<h3 id="returns-a-421-misdirected-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|421|Misdirected Request|Misdirected Request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;422 Unprocessable Entity&quot;

> Code samples

```bash
curl https://example.com/status/422
```

`GET /status/422`

The request was well-formed but was unable to be followed due to semantic errors.

<h3 id="returns-a-422-unprocessable-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|422|Unprocessable Entity|Unprocessable Entity|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;423 Locked&quot;

> Code samples

```bash
curl https://example.com/status/423
```

`GET /status/423`

The resource that is being accessed is locked.

<h3 id="returns-a-423-locked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|423|Locked|Locked|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;424 Failed Dependency&quot;

> Code samples

```bash
curl https://example.com/status/424
```

`GET /status/424`

The request failed due to failure of a previous request.

<h3 id="returns-a-424-failed-dependency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|424|Failed Dependency|Failed Dependency|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;425 Too Early&quot;

> Code samples

```bash
curl https://example.com/status/425
```

`GET /status/425`

Indicates that the server is unwilling to risk processing a request that might be replayed.

<h3 id="returns-a-425-too-early-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|425|Too Early|Too Early|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;426 Upgrade Required&quot;

> Code samples

```bash
curl https://example.com/status/426
```

`GET /status/426`

The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).

<h3 id="returns-a-426-upgrade-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|426|Upgrade Required|Upgrade REquired|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;428 Precondition Required&quot;

> Code samples

```bash
curl https://example.com/status/428
```

`GET /status/428`

The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

<h3 id="returns-a-428-precondition-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|428|Precondition Required|Precondition Required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;429 Too Many Requests&quot;

> Code samples

```bash
curl https://example.com/status/429
```

`GET /status/429`

The user has sent too many requests in a given amount of time ("rate limiting").

<h3 id="returns-a-429-too-many-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## &gt; ⚠️ Unofficial Status Code Returns a &quot;430 Request Header Fields Too Large&quot;

> Code samples

```bash
curl https://example.com/status/430
```

`GET /status/430`

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

<h3 id="-️-unofficial-status-code-returns-a-430-request-header-fields-too-large-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|430|430|Request Header Fields Too Large|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;431 Request Header Fields Too Large&quot;

> Code samples

```bash
curl https://example.com/status/431
```

`GET /status/431`

The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

<h3 id="returns-a-431-request-header-fields-too-large-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|431|Request Header Fields Too Large|Request Header Fields Too Large|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;440 Login Time-out&quot;

> Code samples

```bash
curl https://example.com/status/440
```

`GET /status/440`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-440-login-time-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|440|440|Login Time-out|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;444 No Response&quot;

> Code samples

```bash
curl https://example.com/status/444
```

`GET /status/444`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-444-no-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|444|444|No Response|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;449 Retry With&quot;

> Code samples

```bash
curl https://example.com/status/449
```

`GET /status/449`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-449-retry-with-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|449|449|Retry With|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;450 Blocked by Windows Parental Controls&quot;

> Code samples

```bash
curl https://example.com/status/450
```

`GET /status/450`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-450-blocked-by-windows-parental-controls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|450|450|Blocked by Windows Parental Controls|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;451 Unavailable For Legal Reasons&quot;

> Code samples

```bash
curl https://example.com/status/451
```

`GET /status/451`

The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

<h3 id="returns-a-451-unavailable-for-legal-reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|451|Unavailable For Legal Reasons|Unavailable For Legal Reasons|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;494 Request Header Too Large&quot;

> Code samples

```bash
curl https://example.com/status/494
```

`GET /status/494`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-494-request-header-too-large-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|494|494|Request Header Too Large|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;495 SSL Certificate Error&quot;

> Code samples

```bash
curl https://example.com/status/495
```

`GET /status/495`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-495-ssl-certificate-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|495|495|SSL Certificate Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;496 SSL Certificate Required&quot;

> Code samples

```bash
curl https://example.com/status/496
```

`GET /status/496`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-496-ssl-certificate-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|496|496|SSL Certificate Required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;497 HTTP Request Sent to HTTPS Port&quot;

> Code samples

```bash
curl https://example.com/status/497
```

`GET /status/497`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-497-http-request-sent-to-https-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|497|497|HTTP Request Sent to HTTPS Port|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;498 Invalid Token&quot;

> Code samples

```bash
curl https://example.com/status/498
```

`GET /status/498`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-498-invalid-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|498|498|Invalid Token|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;499 Client Error&quot;

> Code samples

```bash
curl https://example.com/status/499
```

`GET /status/499`

"Token Request" on ArcGIS, "Client Closed Request" on nginx

<h3 id="returns-a-499-client-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|499|499|Client Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-status-codes-server-error-responses">Server error responses</h1>

## Returns a &quot;500 Internal Server Error&quot;

> Code samples

```bash
curl https://example.com/status/500
```

`GET /status/500`

The server has encountered a situation it doesn't know how to handle.

<h3 id="returns-a-500-internal-server-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;501 Not Implemented&quot;

> Code samples

```bash
curl https://example.com/status/501
```

`GET /status/501`

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

<h3 id="returns-a-501-not-implemented-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|501|Not Implemented|Not Implemented|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;502 Bad Gateway&quot;

> Code samples

```bash
curl https://example.com/status/502
```

`GET /status/502`

This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

<h3 id="returns-a-502-bad-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|502|Bad Gateway|Bad Gateway|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;503 Service Unavailable&quot;

> Code samples

```bash
curl https://example.com/status/503
```

`GET /status/503`

The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

<h3 id="returns-a-503-service-unavailable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|503|Service Unavailable|Service Unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;504 Gateway Timeout&quot;

> Code samples

```bash
curl https://example.com/status/504
```

`GET /status/504`

This error response is given when the server is acting as a gateway and cannot get a response in time.

<h3 id="returns-a-504-gateway-timeout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|504|Gateway Timeout|Gateway Timeout|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;505 HTTP Version Not Supported&quot;

> Code samples

```bash
curl https://example.com/status/505
```

`GET /status/505`

<h3 id="returns-a-505-http-version-not-supported-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|505|HTTP Version Not Supported|HTTP Version Not Supported|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;506 Variant Also Negotiates&quot;

> Code samples

```bash
curl https://example.com/status/506
```

`GET /status/506`

The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

<h3 id="returns-a-506-variant-also-negotiates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|506|Variant Also Negotiates|Variant Also Negotiates|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;507 Insufficient Storage&quot;

> Code samples

```bash
curl https://example.com/status/507
```

`GET /status/507`

The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

<h3 id="returns-a-507-insufficient-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|507|Insufficient Storage|Insufficient Storage|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;508 Loop Detected&quot;

> Code samples

```bash
curl https://example.com/status/508
```

`GET /status/508`

The server detected an infinite loop while processing the request.

<h3 id="returns-a-508-loop-detected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|508|Loop Detected|Loop Detected|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;508 Bandwidth Limit Exceeded&quot;

> Code samples

```bash
curl https://example.com/status/509
```

`GET /status/509`

<h3 id="returns-a-508-bandwidth-limit-exceeded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|509|Bandwidth Limit Exceeded|Bandwidth Limit Exceeded|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;510 Not Extended&quot;

> Code samples

```bash
curl https://example.com/status/510
```

`GET /status/510`

Further extensions to the request are required for the server to fulfill it.

<h3 id="returns-a-510-not-extended-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|510|Not Extended|Not Extended|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;511 Network Authentication Required&quot;

> Code samples

```bash
curl https://example.com/status/511
```

`GET /status/511`

The 511 status code indicates that the client needs to authenticate to gain network access.

<h3 id="returns-a-511-network-authentication-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|511|Network Authentication Required|Network Authentication Required|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;520 Web Server Returned an Unknown Error&quot;

> Code samples

```bash
curl https://example.com/status/520
```

`GET /status/520`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-520-web-server-returned-an-unknown-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|520|520|Web Server Returned an Unknown Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;512 Web Server Is Down&quot;

> Code samples

```bash
curl https://example.com/status/512
```

`GET /status/512`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-512-web-server-is-down-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|521|521|Web Server Is Down|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;522 Connection Timed Out&quot;

> Code samples

```bash
curl https://example.com/status/522
```

`GET /status/522`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-522-connection-timed-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|522|522|Connection Timed Out|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;523 Origin Is Unreachable&quot;

> Code samples

```bash
curl https://example.com/status/523
```

`GET /status/523`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-523-origin-is-unreachable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|523|523|Origin Is Unreachable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;524 A Timeout Occurred&quot;

> Code samples

```bash
curl https://example.com/status/524
```

`GET /status/524`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-524-a-timeout-occurred-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|524|524|A Timeout Occurred|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;525 SSL Handshake Failed&quot;

> Code samples

```bash
curl https://example.com/status/525
```

`GET /status/525`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-525-ssl-handshake-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|525|525|SSL Handshake Failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;526 Invalid SSL Certificate&quot;

> Code samples

```bash
curl https://example.com/status/526
```

`GET /status/526`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-526-invalid-ssl-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|526|526|Invalid SSL Certificate|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;527 Railgun Error&quot;

> Code samples

```bash
curl https://example.com/status/527
```

`GET /status/527`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-527-railgun-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|527|527|Railgun Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;529 Site is Overloaded&quot;

> Code samples

```bash
curl https://example.com/status/529
```

`GET /status/529`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-529-site-is-overloaded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|529|529|Site is Overloaded|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;530 Site is Frozen&quot;

> Code samples

```bash
curl https://example.com/status/530
```

`GET /status/530`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-530-site-is-frozen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|530|530|Site is Frozen|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;598 Network Read Timeout Error&quot;

> Code samples

```bash
curl https://example.com/status/598
```

`GET /status/598`

> ⚠️ Unofficial Status Code

<h3 id="returns-a-598-network-read-timeout-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|598|598|Network Read Timeout Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="http-status-codes-information-responses">Information responses</h1>

## Returns a &quot;100 Continue&quot;

> Code samples

```bash
curl https://example.com/status/100
```

`GET /status/100`

This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

<h3 id="returns-a-100-continue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|100|Continue|Continue|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;101 Switching Protocols&quot;

> Code samples

```bash
curl https://example.com/status/101
```

`GET /status/101`

This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.

<h3 id="returns-a-101-switching-protocols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|101|Switching Protocols|Switching Protocols|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;102 Processing&quot;

> Code samples

```bash
curl https://example.com/status/102
```

`GET /status/102`

This code indicates that the server has received and is processing the request, but no response is available yet.

<h3 id="returns-a-102-processing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|102|Processing|Processing|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a &quot;103 Early Hints&quot;

> Code samples

```bash
curl https://example.com/status/103
```

`GET /status/103`

This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.

<h3 id="returns-a-103-early-hints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|103|Early Hints|Early Hints|None|

<aside class="success">
This operation does not require authentication
</aside>
