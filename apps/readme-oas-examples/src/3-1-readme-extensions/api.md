<h1 id="readme-custom-openapi-extensions-demo">ReadMe custom OpenAPI extensions demo v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://docs.readme.com/docs/openapi-extensions

Base URLs:

* <a href="https://httpbin.org/anything">https://httpbin.org/anything</a>

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [http://petstore.swagger.io/oauth/dialog](http://petstore.swagger.io/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:pets|modify pets in your account|
|read:pets|read your pets|

<h1 id="readme-custom-openapi-extensions-demo-custom-code-samples">Custom code samples</h1>

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

## Custom code samples with the &quot;x-code-samples&quot; extension

<a id="opIdx-code-samples"></a>

> Code samples

```bash
curl https://example.com/x-code-samples
```

`GET /x-code-samples`

This is a demonstration of our handling of our `x-code-samples` extension.

> If this is present alongside `x-readme.code-samples` then the `x-readme.code-samples` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

<aside class="success">
This operation does not require authentication
</aside>

## Custom code samples with the &quot;x-readme.code-samples&quot; extension

<a id="opIdx-readme_code-samples"></a>

> Code samples

```bash
curl https://example.com/x-code-samples \
  -X POST
```

`POST /x-code-samples`

This is a demonstration of our handling of our `x-readme.code-samples` extension.

https://docs.readme.com/docs/openapi-extensions#custom-code-samples

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="readme-custom-openapi-extensions-demo-statically-defined-headers">Statically defined headers</h1>

https://docs.readme.com/docs/openapi-extensions#static-headers

## Static headers with the &quot;x-readme.headers&quot; extension

<a id="opIdx-readme_headers"></a>

> Code samples

```bash
curl https://example.com/x-headers \
  -X POST
```

`POST /x-headers`

This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

https://docs.readme.com/docs/openapi-extensions#static-headers

<aside class="success">
This operation does not require authentication
</aside>

## Static headers with the &quot;x-headers&quot; extension

<a id="opIdx-headers"></a>

> Code samples

```bash
curl https://example.com/x-headers \
  -X PATCH
```

`PATCH /x-headers`

This is a demonstration of our handling of our `x-readme.headers` extension where when present, headers specified within it will be statically sent with API requests made in "Try It" and added into generated code snippets.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

> If this is present alongside `x-readme.headers` then the `x-readme.headers` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#static-headers

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="readme-custom-openapi-extensions-demo-toggling-interactivity">Toggling interactivity</h1>

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

## Disable interactivity with the &quot;x-readme.explorer-enabled&quot; extension

<a id="opIdx-readme_explorer-enabled"></a>

> Code samples

```bash
curl https://example.com/x-explorer-enabled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }'
```

`POST /x-explorer-enabled`

When `x-readme.explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

> Body parameter

```json
{
  "id": 0,
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

<h3 id="disable-interactivity-with-the-x-readmeexplorer-enabled-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|true|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|true|none|
|» photoUrls|body|[string]|true|none|
|» tags|body|[[Tag](#schematag)]|false|none|
|» status|body|string|false|pet status in the store|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|available|
|» status|pending|
|» status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## Disable interactivity with the &quot;x-explorer-enabled&quot; extension

<a id="opIdx-explorer-enabled"></a>

> Code samples

```bash
curl https://example.com/x-explorer-enabled \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }'
```

`PATCH /x-explorer-enabled`

When `x-explorer-enabled` is present on an operation and set to `false`, the reference guide will be non-interactive and though your users will still be able to fill out a form and receive an auto-generated code sample to use, they will not be able to make requests to your API with our "Try It" button.

In this case we have statically defined an `x-api-key` header with the value of `static-value`.

> If this is present alongside `x-readme.explorer-enabled` then the `x-readme.explorer-enabled` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#disable-the-api-explorer

> Body parameter

```json
{
  "id": 0,
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

<h3 id="disable-interactivity-with-the-x-explorer-enabled-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|true|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|true|none|
|» photoUrls|body|[string]|true|none|
|» tags|body|[[Tag](#schematag)]|false|none|
|» status|body|string|false|pet status in the store|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|available|
|» status|pending|
|» status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

<h1 id="readme-custom-openapi-extensions-demo-designate-code-sample-languages">Designate code sample languages</h1>

https://docs.readme.com/docs/openapi-extensions#code-sample-languages

## Control available code sample languages the &quot;x-readme.samples-languages&quot; extension

<a id="opIdx-readme_samples-languages"></a>

> Code samples

```bash
curl https://example.com/x-samples-languages
```

`GET /x-samples-languages`

With an array of languages present in `x-readme.samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.

https://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages

<aside class="success">
This operation does not require authentication
</aside>

## Control available code sample languages the &quot;x-samples-languages&quot; extension

<a id="opIdx-samples-languages"></a>

> Code samples

```bash
curl https://example.com/x-samples-languages \
  -X POST
```

`POST /x-samples-languages`

With an array of languages present in `x-samples-languages` code samples will be generated for only those languages. If not present, it will default to: `curl`, `node`, `ruby`, `javascript`, and `python`.

> If this is present alongside `x-readme.samples-languages` then the `x-readme.samples-languages` extension will take precedence over this extension.

https://docs.readme.com/guides/docs/openapi-extensions#code-sample-languages

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="readme-custom-openapi-extensions-demo-toggling-our-cors-proxy">Toggling our CORS proxy</h1>

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

## Disable funneling requests through our CORS proxy with the &quot;x-readme.proxy-enabled&quot; extension

<a id="opIdx-readme_proxy-enabled"></a>

> Code samples

```bash
curl https://example.com/x-proxy-enabled \
  -X POST
```

`POST /x-proxy-enabled`

When `x-readme.proxy-enabled` is set to `false` all requests from the interactive will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

<aside class="success">
This operation does not require authentication
</aside>

## Disable funneling requests through our CORS proxy with the &quot;x-proxy-enabled&quot; extension

<a id="opIdx-proxy-enabled"></a>

> Code samples

```bash
curl https://example.com/x-proxy-enabled \
  -X PATCH
```

`PATCH /x-proxy-enabled`

When `x-readme.proxy-enabled` is set to `false` all requests from the interactive will be funneled directly to the configured server URL, otherwise they will be piped through our proxy to allow [CORS-enabled](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests for you.

> If this is present alongside `x-readme.proxy-enabled` then the `x-readme.proxy-enabled` extension will take precedence over this extension.

https://docs.readme.com/docs/openapi-extensions#cors-proxy-enabled

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 0,
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|true|none|none|
|photoUrls|[string]|true|none|none|
|tags|[[Tag](#schematag)]|false|none|none|
|status|string|false|none|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|
