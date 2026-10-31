<h1 id="ip2proxy-proxy-detection">IP2Proxy Proxy Detection v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

IP2Proxy allows instant detection of anonymous proxy, VPN, TOR exit nodes, search engine robots (SES), data center ranges (PX2-PX10), residential proxies (PX10) and VPN provider name (PX11) by IP address. It also returns the threat type of the proxy (PX9 or higher). Visit https://www.ip2location.com/web-service/ip2proxy for further information.

Base URLs:

* <a href="https://api.ip2proxy.com">https://api.ip2proxy.com</a>

<h1 id="ip2proxy-proxy-detection-default">Default</h1>

## get/

> Code samples

```bash
curl 'https://example.com/?ip=string&key=string'
```

`GET /`

Check if an IP address is proxy

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package|query|string|false|Package name from PX1 to PX11. If not present, the web service will assume the PX1 package query.|
|ip|query|string|true|IP address (IPv4) for lookup purpose. If not present, the server IP address will be used for the lookup.|
|format|query|string|false|If not present, json format will be returned as the search result.|
|key|query|string|true|API key. Please sign up free trial license key at ip2location.com|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```text
{"response": "","countryCode": "","countryName": "","regionName": "","cityName": "","isp": "","domain": "","usageType":"","asn":"","as": "","lastSeen": "","proxyType":"","isProxy": "","threat": "","provider": ""}
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get response from IP2Proxy|Inline|

<aside class="success">
This operation does not require authentication
</aside>
