<h1 id="interzoid-global-page-load-performance-api">Interzoid Global Page Load Performance API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides a timed, browser-simulated page load function (or a measured API call) from the specified geography using a server from that geography.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/globalpageload">API home page and documentation</a>

<h1 id="interzoid-global-page-load-performance-api-page-load-performance-time">Page Load Performance Time</h1>

## Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.

<a id="opIdglobalpageload"></a>

> Code samples

```bash
curl 'https://example.com/globalpageload?license=string&origin=string&url=string' \
  -H 'Accept: application/json'
```

`GET /globalpageload`

Gets page load performance from a specified geography


<h3 id="gets-page-load-or-an-api-call-performance-from-a-specified-global-geography-such-as-paris-tokyo-virginia-mumbai-frankfurt-london-seoul-california-sao-paolo-and-many-more-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|origin|query|string|true|Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)|
|url|query|string|true|specific URL to perform load test time|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Contents": "string",
  "Credits": "string",
  "Origin": "string",
  "PageResponseStatus": "string",
  "Seconds": "string"
}
```

<h3 id="gets-page-load-or-an-api-call-performance-from-a-specified-global-geography-such-as-paris-tokyo-virginia-mumbai-frankfurt-london-seoul-california-sao-paolo-and-many-more-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Page load performance measurement response|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|origin or url note found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-page-load-or-an-api-call-performance-from-a-specified-global-geography-such-as-paris-tokyo-virginia-mumbai-frankfurt-london-seoul-california-sao-paolo-and-many-more-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Contents|string|false|none|none|
|Credits|string|false|none|none|
|Origin|string|false|none|none|
|PageResponseStatus|string|false|none|none|
|Seconds|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
