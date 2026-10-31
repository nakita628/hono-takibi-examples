<h1 id="common-parameters">Common parameters v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#path-item-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="common-parameters-default">Default</h1>

## [get] Summary

> Code samples

```bash
curl https://example.com/anything/0
```

`GET /anything/{id}`

[get] Description

<h3 id="get-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|ID parameter|
|x-extra-id|header|string|false|none|

<h3 id="get-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## [post] Summary

> Code samples

```bash
curl https://example.com/anything/0 \
  -X POST
```

`POST /anything/{id}`

[post] Description

<h3 id="post-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|The numbers of items to return.|
|id|path|number|true|ID parameter|
|x-extra-id|header|string|false|none|

<h3 id="post-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## [get] Summary

> Code samples

```bash
curl https://example.com/anything/0/lists
```

`GET /anything/{id}/{action}`

[get] Description

<h3 id="get-summary-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|ID parameter|
|action|path|string|true|Action parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|lists|
|action|statistics|

<h3 id="get-summary-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## [get] Summary

> Code samples

```bash
curl https://example.com/anything/0/lists/0
```

`GET /anything/{id}/{action}/{id}`

[get] Description

<h3 id="get-summary-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|action|path|string|true|Action parameter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|lists|
|action|statistics|

<h3 id="get-summary-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/anything/{id}/override

> Code samples

```bash
curl https://example.com/anything/string/override
```

`GET /anything/{id}/override`

<h3 id="getanythingidoverride-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A comma-separated list of IDs|

<h3 id="getanythingidoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
