<h1 id="greip-api">Greip API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This documentation shows how to use Greip API, By highlighting the API methods, options and some other features that allow you to get the most of this API.

Base URLs:

* <a href="https://gregeoip.com">https://gregeoip.com</a> - Production server

* <a href="https://dev.gregeoip.com">https://dev.gregeoip.com</a> - Development server

<a href="https://greip.io/terms">Terms of service</a>
Email: <a href="mailto:info@greip.io">Greip Support</a> 
Web: <a href="https://greip.io/contact">Greip Support</a> 

<a href="https://docs.greip.io">Find more info here</a>

<h1 id="greip-api-default">Default</h1>

## get/BulkLookup

> Code samples

```bash
curl 'https://example.com/BulkLookup?key=2517bc4fc3f790e8f09bc808bb63b899&ips=1.1.1.1'
```

`GET /BulkLookup`

BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.

<a href="https://docs.greip.io/methods/bulk-lookup">Greip API - Bulk Lookup</a>

<h3 id="getbulklookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.|
|ips|query|string|true|The IP Addresses you want to lookup. It's a CSV (Comma Separated Values)|
|params|query|string|false|The modules you want to use of the request. It's a CSV (Comma Separated Values)|
|lang|query|string|false|Used to inform the API to retrieve the response in your native language.|
|format|query|string|false|Sets the format of the API response. JSON is the default format.|

<h3 id="getbulklookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/Country

> Code samples

```bash
curl 'https://example.com/Country?key=2517bc4fc3f790e8f09bc808bb63b899&CountryCode=PS'
```

`GET /Country`

Country endpoint: Returns the information of a specific country by passing the `countrCode`.

<a href="https://docs.greip.io/methods/country-data-api">Greip API - Country Data API</a>

<h3 id="getcountry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.|
|CountryCode|query|string|true|The Country Code of the country you want to fetch it's data.|
|params|query|string|false|The modules you want to use of the request. It's a CSV (Comma Separated Values)|
|lang|query|string|false|Used to inform the API to retrieve the response in your native language.|
|format|query|string|false|Sets the format of the API response. JSON is the default format.|

<h3 id="getcountry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/GeoIP

> Code samples

```bash
curl 'https://example.com/GeoIP?key=2517bc4fc3f790e8f09bc808bb63b899'
```

`GET /GeoIP`

GeoIP endpoint: Returns the geolocation data of the visitor.

<a href="https://docs.greip.io/methods/retrieve-visitor-info">Greip API - Retrieve Visitor Info</a>

<h3 id="getgeoip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.|
|params|query|string|false|The modules you want to use of the request. It's a CSV (Comma Separated Values)|
|lang|query|string|false|Used to inform the API to retrieve the response in your native language.|
|format|query|string|false|Sets the format of the API response. JSON is the default format.|

<h3 id="getgeoip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/IPLookup

> Code samples

```bash
curl 'https://example.com/IPLookup?key=2517bc4fc3f790e8f09bc808bb63b899&ip=1.1.1.1'
```

`GET /IPLookup`

IPLookup endpoint: Returns the geolocation data of a specific IP Address.

<a href="https://docs.greip.io/methods/lookup-ip-address">Greip API - Lookup IP Address</a>

<h3 id="getiplookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.|
|ip|query|string|true|The IP Address you want to lookup.|
|params|query|string|false|The modules you want to use of the request. It's a CSV (Comma Separated Values)|
|lang|query|string|false|Used to inform the API to retrieve the response in your native language.|
|format|query|string|false|Sets the format of the API response. JSON is the default format.|

<h3 id="getiplookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badWords

> Code samples

```bash
curl 'https://example.com/badWords?key=2517bc4fc3f790e8f09bc808bb63b899&text=This%20is%20a%20sample%20text%20without%20profanity!'
```

`GET /badWords`

badWords endpoint: Detects whether user inputs contain profanity or not.

<a href="https://docs.greip.io/methods/profanity-detection">Greip API - Profanity Detection</a>

<h3 id="getbadwords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.|
|text|query|string|true|The text you want to check.|
|listBadWords|query|string|false|Set to `yes` to list the bad-words as an Array.|
|scoreOnly|query|string|false|Set to `yes` to return only the score of the text and whether it's safe or not.|
|format|query|string|false|Sets the format of the API response. JSON is the default format.|

<h3 id="getbadwords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>
