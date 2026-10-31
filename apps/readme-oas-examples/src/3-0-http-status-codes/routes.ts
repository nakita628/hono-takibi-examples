import { createRoute, z } from '@hono/zod-openapi'

export const getStatus200Route = createRoute({
  method: 'get',
  path: '/status/200',
  tags: ['Successful responses'],
  summary: 'Returns a "200 OK"',
  description:
    'The request has succeeded. The meaning of the success depends on the HTTP method:\n* `GET`: The resource has been fetched and is transmitted in the message body.\n* `HEAD`: The representation headers are included in the response without any message body.\n* `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.\n* `TRACE`: The message body contains the request message as received by the server.',
  responses: { 200: { description: 'OK' } },
})

export const getStatus201Route = createRoute({
  method: 'get',
  path: '/status/201',
  tags: ['Successful responses'],
  summary: 'Returns a "201 Created"',
  description:
    'The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.',
  responses: { 201: { description: 'Created' } },
})

export const getStatus202Route = createRoute({
  method: 'get',
  path: '/status/202',
  tags: ['Successful responses'],
  summary: 'Returns a "202 Accepted"',
  description:
    'The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.',
  responses: { 202: { description: 'Accepted' } },
})

export const getStatus203Route = createRoute({
  method: 'get',
  path: '/status/203',
  tags: ['Successful responses'],
  summary: 'Returns a "203 Non-Authoritative Information"',
  description:
    'This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.',
  responses: { 203: { description: 'Non-Authoritative Information' } },
})

export const getStatus204Route = createRoute({
  method: 'get',
  path: '/status/204',
  tags: ['Successful responses'],
  summary: 'Returns a "204 No Content"',
  description:
    'There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.',
  responses: { 204: { description: 'No Content' } },
})

export const getStatus205Route = createRoute({
  method: 'get',
  path: '/status/205',
  tags: ['Successful responses'],
  summary: 'Returns a "205 Reset Content"',
  description: 'Tells the user-agent to reset the document which sent this request.',
  responses: { 205: { description: 'Reset Content' } },
})

export const getStatus206Route = createRoute({
  method: 'get',
  path: '/status/206',
  tags: ['Successful responses'],
  summary: 'Returns a "206 Partial Content"',
  description:
    'This response code is used when the [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) header is sent from the client to request only part of a resource.',
  responses: { 206: { description: 'Partial Content' } },
})

export const getStatus207Route = createRoute({
  method: 'get',
  path: '/status/207',
  tags: ['Successful responses'],
  summary: 'Returns a "200 Multi-Status"',
  description:
    'Conveys information about multiple resources, for situations where multiple status codes might be appropriate.',
  responses: { 207: { description: 'Multi-Status' } },
})

export const getStatus208Route = createRoute({
  method: 'get',
  path: '/status/208',
  tags: ['Successful responses'],
  summary: 'Returns a "208 Already Reported"',
  description:
    'Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.',
  responses: { 208: { description: 'Already Reported' } },
})

export const getStatus218Route = createRoute({
  method: 'get',
  path: '/status/218',
  tags: ['Successful responses'],
  summary: 'Returns a "218 This is fine"',
  responses: { 218: { description: 'This is fine' } },
})

export const getStatus226Route = createRoute({
  method: 'get',
  path: '/status/226',
  tags: ['Successful responses'],
  summary: 'Returns a "226 IM Used"',
  description:
    'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  responses: { 226: { description: 'IM Used' } },
})

export const getStatus300Route = createRoute({
  method: 'get',
  path: '/status/300',
  tags: ['Redirection messages'],
  summary: 'Returns a "300 Multiple Choice"',
  description:
    'The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)',
  responses: { 300: { description: 'Multiple Choice' } },
})

export const getStatus301Route = createRoute({
  method: 'get',
  path: '/status/301',
  tags: ['Redirection messages'],
  summary: 'Returns a "301 Moved Permanently"',
  description:
    'The URL of the requested resource has been changed permanently. The new URL is given in the response.',
  responses: { 301: { description: 'Moved Permanently' } },
})

export const getStatus302Route = createRoute({
  method: 'get',
  path: '/status/302',
  tags: ['Redirection messages'],
  summary: 'Returns a "302 Found"',
  description:
    'This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.',
  responses: { 302: { description: 'Found' } },
})

export const getStatus303Route = createRoute({
  method: 'get',
  path: '/status/303',
  tags: ['Redirection messages'],
  summary: 'Returns a "303 See Other"',
  description:
    'The server sent this response to direct the client to get the requested resource at another URI with a GET request.',
  responses: { 303: { description: 'See Other' } },
})

export const getStatus304Route = createRoute({
  method: 'get',
  path: '/status/304',
  tags: ['Redirection messages'],
  summary: 'Returns a "304 Not Modified"',
  description:
    'This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.',
  responses: { 304: { description: 'Not Modified' } },
})

export const getStatus305Route = createRoute({
  method: 'get',
  path: '/status/305',
  tags: ['Redirection messages'],
  summary: 'Returns a "305 Use Proxy"',
  description:
    'Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.',
  responses: { 305: { description: 'Use Proxy' } },
})

export const getStatus306Route = createRoute({
  method: 'get',
  path: '/status/306',
  tags: ['Redirection messages'],
  summary: 'Returns a "306 Switch Proxy"',
  description:
    'This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.',
  responses: { 306: { description: 'Switch Proxy' } },
})

export const getStatus307Route = createRoute({
  method: 'get',
  path: '/status/307',
  tags: ['Redirection messages'],
  summary: 'Returns a "307 Temporary Redirect"',
  description:
    'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302 Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.',
  responses: { 307: { description: 'Temporary Redirect' } },
})

export const getStatus308Route = createRoute({
  method: 'get',
  path: '/status/308',
  tags: ['Redirection messages'],
  summary: 'Returns a "308 Permanent Redirect"',
  description:
    'This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: If a `POST` was used in the first request, a `POST` must be used in the second request.',
  responses: { 308: { description: 'Permanent Redirect' } },
})

export const getStatus400Route = createRoute({
  method: 'get',
  path: '/status/400',
  tags: ['Client error responses'],
  summary: 'Returns a "400 Bad Request"',
  description: 'The server could not understand the request due to invalid syntax.',
  responses: { 400: { description: 'Bad Request' } },
})

export const getStatus401Route = createRoute({
  method: 'get',
  path: '/status/401',
  tags: ['Client error responses'],
  summary: 'Returns a "401 Unauthorized"',
  description:
    'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.',
  responses: { 401: { description: 'Unauthorized' } },
})

export const getStatus402Route = createRoute({
  method: 'get',
  path: '/status/402',
  tags: ['Client error responses'],
  summary: 'Returns a "402 Payment Required"',
  description:
    'This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.',
  responses: { 402: { description: 'Payment Required' } },
})

export const getStatus403Route = createRoute({
  method: 'get',
  path: '/status/403',
  tags: ['Client error responses'],
  summary: 'Returns a "403 Forbidden"',
  description:
    "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.",
  responses: { 403: { description: 'Forbidden' } },
})

export const getStatus404Route = createRoute({
  method: 'get',
  path: '/status/404',
  tags: ['Client error responses'],
  summary: 'Returns a "404 Not Found"',
  description:
    'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.',
  responses: { 404: { description: 'Not Found' } },
})

export const getStatus405Route = createRoute({
  method: 'get',
  path: '/status/405',
  tags: ['Client error responses'],
  summary: 'Returns a "405 Method Not Allowed"',
  description:
    'The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.',
  responses: { 405: { description: 'Method Not Allowed' } },
})

export const getStatus406Route = createRoute({
  method: 'get',
  path: '/status/406',
  tags: ['Client error responses'],
  summary: 'Returns a "406 Not Acceptable"',
  description:
    "This response is sent when the web server, after performing [server-driven content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation), doesn't find any content that conforms to the criteria given by the user agent.",
  responses: { 406: { description: 'Not Acceptable' } },
})

export const getStatus407Route = createRoute({
  method: 'get',
  path: '/status/407',
  tags: ['Client error responses'],
  summary: 'Returns a "407 Proxy Authentication Required"',
  description: 'This is similar to 401 but authentication is needed to be done by a proxy.',
  responses: { 407: { description: 'Proxy Authentication Required' } },
})

export const getStatus408Route = createRoute({
  method: 'get',
  path: '/status/408',
  tags: ['Client error responses'],
  summary: 'Returns a "408 Request Timeout"',
  description:
    'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.',
  responses: { 408: { description: 'Request Timeout' } },
})

export const getStatus409Route = createRoute({
  method: 'get',
  path: '/status/409',
  tags: ['Client error responses'],
  summary: 'Returns a "409 Conflict"',
  description:
    'This response is sent when a request conflicts with the current state of the server.',
  responses: { 409: { description: 'Conflict' } },
})

export const getStatus410Route = createRoute({
  method: 'get',
  path: '/status/410',
  tags: ['Client error responses'],
  summary: 'Returns a "410 Gone"',
  description:
    'This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.',
  responses: { 410: { description: 'Gone' } },
})

export const getStatus411Route = createRoute({
  method: 'get',
  path: '/status/411',
  tags: ['Client error responses'],
  summary: 'Returns a "411 Length Required"',
  description:
    'Server rejected the request because the `Content-Length` header field is not defined and the server requires it.',
  responses: { 411: { description: 'Length Required' } },
})

export const getStatus412Route = createRoute({
  method: 'get',
  path: '/status/412',
  tags: ['Client error responses'],
  summary: 'Returns a "412 Precondition Failed"',
  description:
    'The client has indicated preconditions in its headers which the server does not meet.',
  responses: { 412: { description: 'Precondition Failed' } },
})

export const getStatus413Route = createRoute({
  method: 'get',
  path: '/status/413',
  tags: ['Client error responses'],
  summary: 'Returns a "413 Payload Too Large"',
  description:
    'Request entity is larger than limits defined by server; the server might close the connection or return an `Retry-After` header field.',
  responses: { 413: { description: 'Payload Too Large' } },
})

export const getStatus414Route = createRoute({
  method: 'get',
  path: '/status/414',
  tags: ['Client error responses'],
  summary: 'Returns a "414 URI Too Long"',
  description: 'The URI requested by the client is longer than the server is willing to interpret.',
  responses: { 414: { description: 'URI Too Long' } },
})

export const getStatus415Route = createRoute({
  method: 'get',
  path: '/status/415',
  tags: ['Client error responses'],
  summary: 'Returns a "415 Unsupported Media Type"',
  description:
    'The media format of the requested data is not supported by the server, so the server is rejecting the request.',
  responses: { 415: { description: 'Unsupported Media Type' } },
})

export const getStatus416Route = createRoute({
  method: 'get',
  path: '/status/416',
  tags: ['Client error responses'],
  summary: 'Returns a "416 Range Not Satisfiable"',
  description:
    "The range specified by the `Range` header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.",
  responses: { 416: { description: 'Range Not Satisfiable' } },
})

export const getStatus417Route = createRoute({
  method: 'get',
  path: '/status/417',
  tags: ['Client error responses'],
  summary: 'Returns a "417 Expectation Failed"',
  description:
    "This response code means the expectation indicated by the `Expect` request header field can't be met by the server.",
  responses: { 417: { description: 'Expectation Failed' } },
})

export const getStatus418Route = createRoute({
  method: 'get',
  path: '/status/418',
  tags: ['Client error responses'],
  summary: 'Returns a "418 I\'m a teapot"',
  description: 'The server refuses the attempt to brew coffee with a teapot.',
  responses: { 418: { description: "I'm a teapot" } },
})

export const getStatus419Route = createRoute({
  method: 'get',
  path: '/status/419',
  tags: ['Client error responses'],
  summary: 'Returns a "419 Page Expired"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 419: { description: 'Page Expired' } },
})

export const getStatus420Route = createRoute({
  method: 'get',
  path: '/status/420',
  tags: ['Client error responses'],
  summary: 'Returns a "420 Enhance Your Calm"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 420: { description: 'Enhance Your Calm' } },
})

export const getStatus421Route = createRoute({
  method: 'get',
  path: '/status/421',
  tags: ['Client error responses'],
  summary: 'Returns a "421 Misdirected Request"',
  description:
    'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.',
  responses: { 421: { description: 'Misdirected Request' } },
})

export const getStatus422Route = createRoute({
  method: 'get',
  path: '/status/422',
  tags: ['Client error responses'],
  summary: 'Returns a "422 Unprocessable Entity"',
  description: 'The request was well-formed but was unable to be followed due to semantic errors.',
  responses: { 422: { description: 'Unprocessable Entity' } },
})

export const getStatus423Route = createRoute({
  method: 'get',
  path: '/status/423',
  tags: ['Client error responses'],
  summary: 'Returns a "423 Locked"',
  description: 'The resource that is being accessed is locked.',
  responses: { 423: { description: 'Locked' } },
})

export const getStatus424Route = createRoute({
  method: 'get',
  path: '/status/424',
  tags: ['Client error responses'],
  summary: 'Returns a "424 Failed Dependency"',
  description: 'The request failed due to failure of a previous request.',
  responses: { 424: { description: 'Failed Dependency' } },
})

export const getStatus425Route = createRoute({
  method: 'get',
  path: '/status/425',
  tags: ['Client error responses'],
  summary: 'Returns a "425 Too Early"',
  description:
    'Indicates that the server is unwilling to risk processing a request that might be replayed.',
  responses: { 425: { description: 'Too Early' } },
})

export const getStatus426Route = createRoute({
  method: 'get',
  path: '/status/426',
  tags: ['Client error responses'],
  summary: 'Returns a "426 Upgrade Required"',
  description:
    'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) header in a 426 response to indicate the required protocol(s).',
  responses: { 426: { description: 'Upgrade REquired' } },
})

export const getStatus428Route = createRoute({
  method: 'get',
  path: '/status/428',
  tags: ['Client error responses'],
  summary: 'Returns a "428 Precondition Required"',
  description:
    "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.",
  responses: { 428: { description: 'Precondition Required' } },
})

export const getStatus429Route = createRoute({
  method: 'get',
  path: '/status/429',
  tags: ['Client error responses'],
  summary: 'Returns a "429 Too Many Requests"',
  description: 'The user has sent too many requests in a given amount of time ("rate limiting").',
  responses: { 429: { description: 'Too Many Requests' } },
})

export const getStatus430Route = createRoute({
  method: 'get',
  path: '/status/430',
  tags: ['Client error responses'],
  summary: '> ⚠️ Unofficial Status Code\nReturns a "430 Request Header Fields Too Large"',
  description:
    'The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.',
  responses: { 430: { description: 'Request Header Fields Too Large' } },
})

export const getStatus431Route = createRoute({
  method: 'get',
  path: '/status/431',
  tags: ['Client error responses'],
  summary: 'Returns a "431 Request Header Fields Too Large"',
  description:
    'The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.',
  responses: { 431: { description: 'Request Header Fields Too Large' } },
})

export const getStatus440Route = createRoute({
  method: 'get',
  path: '/status/440',
  tags: ['Client error responses'],
  summary: 'Returns a "440 Login Time-out"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 440: { description: 'Login Time-out' } },
})

export const getStatus444Route = createRoute({
  method: 'get',
  path: '/status/444',
  tags: ['Client error responses'],
  summary: 'Returns a "444 No Response"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 444: { description: 'No Response' } },
})

export const getStatus449Route = createRoute({
  method: 'get',
  path: '/status/449',
  tags: ['Client error responses'],
  summary: 'Returns a "449 Retry With"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 449: { description: 'Retry With' } },
})

export const getStatus450Route = createRoute({
  method: 'get',
  path: '/status/450',
  tags: ['Client error responses'],
  summary: 'Returns a "450 Blocked by Windows Parental Controls"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 450: { description: 'Blocked by Windows Parental Controls' } },
})

export const getStatus451Route = createRoute({
  method: 'get',
  path: '/status/451',
  tags: ['Client error responses'],
  summary: 'Returns a "451 Unavailable For Legal Reasons"',
  description:
    'The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.',
  responses: { 451: { description: 'Unavailable For Legal Reasons' } },
})

export const getStatus494Route = createRoute({
  method: 'get',
  path: '/status/494',
  tags: ['Client error responses'],
  summary: 'Returns a "494 Request Header Too Large"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 494: { description: 'Request Header Too Large' } },
})

export const getStatus495Route = createRoute({
  method: 'get',
  path: '/status/495',
  tags: ['Client error responses'],
  summary: 'Returns a "495 SSL Certificate Error"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 495: { description: 'SSL Certificate Error' } },
})

export const getStatus496Route = createRoute({
  method: 'get',
  path: '/status/496',
  tags: ['Client error responses'],
  summary: 'Returns a "496 SSL Certificate Required"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 496: { description: 'SSL Certificate Required' } },
})

export const getStatus497Route = createRoute({
  method: 'get',
  path: '/status/497',
  tags: ['Client error responses'],
  summary: 'Returns a "497 HTTP Request Sent to HTTPS Port"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 497: { description: 'HTTP Request Sent to HTTPS Port' } },
})

export const getStatus498Route = createRoute({
  method: 'get',
  path: '/status/498',
  tags: ['Client error responses'],
  summary: 'Returns a "498 Invalid Token"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 498: { description: 'Invalid Token' } },
})

export const getStatus499Route = createRoute({
  method: 'get',
  path: '/status/499',
  tags: ['Client error responses'],
  summary: 'Returns a "499 Client Error"',
  description: '"Token Request" on ArcGIS, "Client Closed Request" on nginx',
  responses: { 499: { description: 'Client Error' } },
})

export const getStatus500Route = createRoute({
  method: 'get',
  path: '/status/500',
  tags: ['Server error responses'],
  summary: 'Returns a "500 Internal Server Error"',
  description: "The server has encountered a situation it doesn't know how to handle.",
  responses: { 500: { description: 'Internal Server Error' } },
})

export const getStatus501Route = createRoute({
  method: 'get',
  path: '/status/501',
  tags: ['Server error responses'],
  summary: 'Returns a "501 Not Implemented"',
  description:
    'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.',
  responses: { 501: { description: 'Not Implemented' } },
})

export const getStatus502Route = createRoute({
  method: 'get',
  path: '/status/502',
  tags: ['Server error responses'],
  summary: 'Returns a "502 Bad Gateway"',
  description:
    'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
  responses: { 502: { description: 'Bad Gateway' } },
})

export const getStatus503Route = createRoute({
  method: 'get',
  path: '/status/503',
  tags: ['Server error responses'],
  summary: 'Returns a "503 Service Unavailable"',
  description:
    'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After`: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.',
  responses: { 503: { description: 'Service Unavailable' } },
})

export const getStatus504Route = createRoute({
  method: 'get',
  path: '/status/504',
  tags: ['Server error responses'],
  summary: 'Returns a "504 Gateway Timeout"',
  description:
    'This error response is given when the server is acting as a gateway and cannot get a response in time.',
  responses: { 504: { description: 'Gateway Timeout' } },
})

export const getStatus505Route = createRoute({
  method: 'get',
  path: '/status/505',
  tags: ['Server error responses'],
  summary: 'Returns a "505 HTTP Version Not Supported"',
  responses: { 505: { description: 'HTTP Version Not Supported' } },
})

export const getStatus506Route = createRoute({
  method: 'get',
  path: '/status/506',
  tags: ['Server error responses'],
  summary: 'Returns a "506 Variant Also Negotiates"',
  description:
    'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
  responses: { 506: { description: 'Variant Also Negotiates' } },
})

export const getStatus507Route = createRoute({
  method: 'get',
  path: '/status/507',
  tags: ['Server error responses'],
  summary: 'Returns a "507 Insufficient Storage"',
  description:
    'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
  responses: { 507: { description: 'Insufficient Storage' } },
})

export const getStatus508Route = createRoute({
  method: 'get',
  path: '/status/508',
  tags: ['Server error responses'],
  summary: 'Returns a "508 Loop Detected"',
  description: 'The server detected an infinite loop while processing the request.',
  responses: { 508: { description: 'Loop Detected' } },
})

export const getStatus509Route = createRoute({
  method: 'get',
  path: '/status/509',
  tags: ['Server error responses'],
  summary: 'Returns a "508 Bandwidth Limit Exceeded"',
  responses: { 509: { description: 'Bandwidth Limit Exceeded' } },
})

export const getStatus510Route = createRoute({
  method: 'get',
  path: '/status/510',
  tags: ['Server error responses'],
  summary: 'Returns a "510 Not Extended"',
  description: 'Further extensions to the request are required for the server to fulfill it.',
  responses: { 510: { description: 'Not Extended' } },
})

export const getStatus511Route = createRoute({
  method: 'get',
  path: '/status/511',
  tags: ['Server error responses'],
  summary: 'Returns a "511 Network Authentication Required"',
  description:
    'The 511 status code indicates that the client needs to authenticate to gain network access.',
  responses: { 511: { description: 'Network Authentication Required' } },
})

export const getStatus520Route = createRoute({
  method: 'get',
  path: '/status/520',
  tags: ['Server error responses'],
  summary: 'Returns a "520 Web Server Returned an Unknown Error"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 520: { description: 'Web Server Returned an Unknown Error' } },
})

export const getStatus512Route = createRoute({
  method: 'get',
  path: '/status/512',
  tags: ['Server error responses'],
  summary: 'Returns a "512 Web Server Is Down"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 521: { description: 'Web Server Is Down' } },
})

export const getStatus522Route = createRoute({
  method: 'get',
  path: '/status/522',
  tags: ['Server error responses'],
  summary: 'Returns a "522 Connection Timed Out"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 522: { description: 'Connection Timed Out' } },
})

export const getStatus523Route = createRoute({
  method: 'get',
  path: '/status/523',
  tags: ['Server error responses'],
  summary: 'Returns a "523 Origin Is Unreachable"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 523: { description: 'Origin Is Unreachable' } },
})

export const getStatus524Route = createRoute({
  method: 'get',
  path: '/status/524',
  tags: ['Server error responses'],
  summary: 'Returns a "524 A Timeout Occurred"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 524: { description: 'A Timeout Occurred' } },
})

export const getStatus525Route = createRoute({
  method: 'get',
  path: '/status/525',
  tags: ['Server error responses'],
  summary: 'Returns a "525 SSL Handshake Failed"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 525: { description: 'SSL Handshake Failed' } },
})

export const getStatus526Route = createRoute({
  method: 'get',
  path: '/status/526',
  tags: ['Server error responses'],
  summary: 'Returns a "526 Invalid SSL Certificate"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 526: { description: 'Invalid SSL Certificate' } },
})

export const getStatus527Route = createRoute({
  method: 'get',
  path: '/status/527',
  tags: ['Server error responses'],
  summary: 'Returns a "527 Railgun Error"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 527: { description: 'Railgun Error' } },
})

export const getStatus529Route = createRoute({
  method: 'get',
  path: '/status/529',
  tags: ['Server error responses'],
  summary: 'Returns a "529 Site is Overloaded"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 529: { description: 'Site is Overloaded' } },
})

export const getStatus530Route = createRoute({
  method: 'get',
  path: '/status/530',
  tags: ['Server error responses'],
  summary: 'Returns a "530 Site is Frozen"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 530: { description: 'Site is Frozen' } },
})

export const getStatus598Route = createRoute({
  method: 'get',
  path: '/status/598',
  tags: ['Server error responses'],
  summary: 'Returns a "598 Network Read Timeout Error"',
  description: '> ⚠️ Unofficial Status Code',
  responses: { 598: { description: 'Network Read Timeout Error' } },
})

export const getStatus100Route = createRoute({
  method: 'get',
  path: '/status/100',
  tags: ['Information responses'],
  summary: 'Returns a "100 Continue"',
  description:
    'This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.',
  responses: { 100: { description: 'Continue' } },
})

export const getStatus101Route = createRoute({
  method: 'get',
  path: '/status/101',
  tags: ['Information responses'],
  summary: 'Returns a "101 Switching Protocols"',
  description:
    'This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.',
  responses: { 101: { description: 'Switching Protocols' } },
})

export const getStatus102Route = createRoute({
  method: 'get',
  path: '/status/102',
  tags: ['Information responses'],
  summary: 'Returns a "102 Processing"',
  description:
    'This code indicates that the server has received and is processing the request, but no response is available yet.',
  responses: { 102: { description: 'Processing' } },
})

export const getStatus103Route = createRoute({
  method: 'get',
  path: '/status/103',
  tags: ['Information responses'],
  summary: 'Returns a "103 Early Hints"',
  description:
    'This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.',
  responses: { 103: { description: 'Early Hints' } },
})
