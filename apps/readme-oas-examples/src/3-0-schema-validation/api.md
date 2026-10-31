<h1 id="request-schema-validation">Request Schema Validation v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#path-item-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="request-schema-validation-default">Default</h1>

## Number validation

> Code samples

```bash
curl 'https://example.com/anything/numbers?id-required=14&id-exclusive-required=14'
```

`GET /anything/numbers`

<h3 id="number-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id-required|query|number|true|none|
|id-optional|query|number|false|none|
|id-exclusive-required|query|number|true|none|
|id-exclusive-optional|query|number|false|none|

<h3 id="number-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## String validation

> Code samples

```bash
curl 'https://example.com/anything/strings?name-length-required=this%20is%20an%20example&name-pattern-required=aEXAMPLEb&complex-pattern-required=string'
```

`GET /anything/strings`

<h3 id="string-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name-length-required|query|string|true|none|
|name-length-optional|query|string|false|none|
|name-pattern-required|query|string|true|none|
|complex-pattern-required|query|string|true|OpenAPI 3.0.3, which defaults to JSON Schema v4, does not provide the unicode flag to the input tooltip regex validation. This means that the following regex should work. It won't work if unicode is enabled because it has unescaped brace literals |
|name-pattern-optional|query|string|false|none|

<h3 id="string-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Formats defined by JSON Schema

> Code samples

```bash
curl 'https://example.com/anything/jsonschema-formats?date-time=1996-12-19T16%3A39%3A57-08%3A00'
```

`GET /anything/jsonschema-formats`

<h3 id="formats-defined-by-json-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date-time|query|string(date-time)|true|none|
|date|query|string(date)|false|none|
|time|query|string(time)|false|none|
|duration|query|string(duration)|false|none|
|email|query|string(email)|false|none|
|idn-email|query|string(idn-email)|false|none|
|hostname|query|string(hostname)|false|none|
|idn-hostname|query|string(idn-hostname)|false|none|
|ipv4|query|string(ipv4)|false|none|
|ipv6|query|string(ipv6)|false|none|
|uri|query|string(uri)|false|none|
|uri-reference|query|string(uri-reference)|false|none|
|iri|query|string(iri)|false|none|
|iri-reference|query|string(iri-reference)|false|none|
|uuid|query|string(uuid)|false|none|
|uri-template|query|string(uri-template)|false|none|
|json-pointer|query|string(json-pointer)|false|none|
|relative-json-pointer|query|string(relative-json-pointer)|false|none|
|regex|query|string(regex)|false|none|

<h3 id="formats-defined-by-json-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Formats defined by OpenAPI

> Code samples

```bash
curl 'https://example.com/anything/oas-formats?int32=23456'
```

`GET /anything/oas-formats`

<h3 id="formats-defined-by-openapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|int32|query|integer(int32)|true|none|
|int64|query|integer(int64)|false|none|
|float|query|number(float)|false|none|
|double|query|number(double)|false|none|
|byte|query|string(byte)|false|none|
|binary|query|string(binary)|false|none|
|password|query|string(password)|false|none|

<h3 id="formats-defined-by-openapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Booleans

> Code samples

```bash
curl 'https://example.com/anything/booleans?tf-required=false'
```

`GET /anything/booleans`

<h3 id="booleans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tf-required|query|boolean|true|none|
|tf-optional|query|boolean|false|none|

<h3 id="booleans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
