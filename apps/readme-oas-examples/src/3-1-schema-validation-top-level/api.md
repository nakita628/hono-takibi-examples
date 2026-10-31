<h1 id="support-for-a-top-level-jsonschemadialect-declaration">Support for a top-level `jsonSchemaDialect` declaration v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#user-content-oasjsonschemadialect

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="support-for-a-top-level-jsonschemadialect-declaration-default">Default</h1>

## Number validation

> Code samples

```bash
curl 'https://example.com/anything/numbers?id-exclusive-required=14&id-exclusive-required-schema-v4=14'
```

`GET /anything/numbers`

This operation has a top-level `jsonSchemaDialect` set to abide by [JSON Schema Draft 04](https://json-schema.org/specification-links.html#draft-4).

<h3 id="number-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id-exclusive-required|query|number|true|none|
|id-exclusive-required-schema-v4|query|number|true|none|

<h3 id="number-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
