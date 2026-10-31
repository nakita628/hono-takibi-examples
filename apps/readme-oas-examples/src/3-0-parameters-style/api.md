<h1 id="support-for-parameter-serialization">Support for parameter serialization v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#style-values

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="support-for-parameter-serialization-cookie">Cookie</h1>

Showcasing handling of `style` on cookie parameters.

## Standard (no style)

<a id="opIdcookies_standard"></a>

> Code samples

```bash
curl https://example.com/cookies
```

`GET /cookies`

Support and handling of cookie parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

<h3 id="standard-no-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|cookie|string|false|A standard primitive.|
|array|cookie|[string]|false|A standard array.|
|object|cookie|object|false|A standard object.|

<h3 id="standard-no-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Form (non-exploded)

<a id="opIdcookies_form_nonExploded"></a>

> Code samples

```bash
curl 'https://example.com/cookies#formNonExploded'
```

`GET /cookies#formNonExploded`

Support and handling of cookie parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

<h3 id="form-non-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|cookie|string|false|A `form` style, non-exploded primitive.|
|array|cookie|[string]|false|A `form` style, non-exploded array.<br><br>> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.|
|object|cookie|object|false|A `form` style, non-exploded object<br><br>> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.|

<h3 id="form-non-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Form (exploded)

<a id="opIdcookies_form_exploded"></a>

> Code samples

```bash
curl 'https://example.com/cookies#formExploded'
```

`GET /cookies#formExploded`

Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

> Please note that due to browser security restrictions surrounding cookies, cookies only will be sent if the API server URL is the same as where this guide is being served from.

<h3 id="form-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|cookie|string|false|A `form` style, exploded primitive.|
|array|cookie|[string]|false|A `form` style, exploded array.<br><br>> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.|
|object|cookie|object|false|A `form` style, exploded object.<br><br>> On ReadMe we encode this kind of parameter within [@readme/httpsnippet](https://npm.im/@readme/httpsnippet) but it's unclear whether this encoding is the correct behavior because the `Cookie` header deviates from all other headers.|

<h3 id="form-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-parameter-serialization-header">Header</h1>

Showcasing handling of `style` on header parameters.

## Standard (no style)

<a id="opIdheaders_standard"></a>

> Code samples

```bash
curl https://example.com/anything/headers
```

`GET /anything/headers`

Support and handling of header parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

<h3 id="standard-no-style-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|header|string|false|A standard primitive.|
|array|header|[string]|false|A standard array.<br><br>> Because headers cannot be duplicated, for an array'd header parameter to be sent it **must** have a `style` property present.|
|object|header|object|false|A standard object.|

<h3 id="standard-no-style-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Simple (non-exploded)

<a id="opIdheaders_simple_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/headers/simple
```

`GET /anything/headers/simple`

Support and handling of header parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="simple-non-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|header|string|false|A `simple` style, non-exploded primitive.|
|array|header|[string]|false|A `simple` style, non-exploded array.|
|object|header|object|false|A `simple` style, non-exploded object.|

<h3 id="simple-non-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Simple (exploded)

<a id="opIdheaders_simple_exploded"></a>

> Code samples

```bash
curl https://example.com/anything/headers/simple \
  -X POST
```

`POST /anything/headers/simple`

Support and handling of header parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="simple-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|header|string|false|A `simple` style, exploded primitive.|
|array|header|[string]|false|A `simple` style, exploded array.|
|object|header|object|false|A `simple` style, exploded object.|

<h3 id="simple-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-parameter-serialization-path">Path</h1>

Showcasing handling of `style` on path parameters.

## Standard (no style)

<a id="opIdpaths_standard"></a>

> Code samples

```bash
curl https://example.com/anything/path/string/string/name,string,description,string
```

`GET /anything/path/{primitive}/{array}/{object}`

Support and handling of path parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

<h3 id="standard-no-style-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A standard primitive.|
|array|path|[string]|true|A standard array.|
|object|path|object|true|A standard object.|

<h3 id="standard-no-style-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Matrix (non-exploded)

<a id="opIdpaths_matrix_nonExploded"></a>

> Code samples

```bash
curl 'https://example.com/anything/path/matrix/;primitive=string/;array=string/;object=name,string,description,string'
```

`GET /anything/path/matrix/{primitive}/{array}/{object}`

Support and handling of path parameters with `style: matrix` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="matrix-non-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A `matrix` style, non-exploded primitive.|
|array|path|[string]|true|A `matrix` style, non-exploded array.|
|object|path|object|true|A `matrix` style, non-exploded object.|

<h3 id="matrix-non-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Matrix (exploded)

<a id="opIdpaths_matrix_exploded"></a>

> Code samples

```bash
curl 'https://example.com/anything/path/matrix/;primitive=string/;array=string/;name=string;description=string' \
  -X POST
```

`POST /anything/path/matrix/{primitive}/{array}/{object}`

Support and handling of path parameters with `style: matrix` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="matrix-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A `matrix` style, exploded primitive.|
|array|path|[string]|true|A `matrix` style, exploded array.|
|object|path|object|true|A `matrix` style, exploded object.|

<h3 id="matrix-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Label (non-exploded)

<a id="opIdpaths_label_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/path/label/.string/.string/.name,string,description,string
```

`GET /anything/path/label/{primitive}/{array}/{object}`

Support and handling of path parameters with `style: label` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="label-non-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A `label` style, non-exploded primitive.|
|array|path|[string]|true|A `label` style, non-exploded array.|
|object|path|object|true|A `label` style, non-exploded object.|

<h3 id="label-non-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Label (exploded)

<a id="opIdpaths_label_exploded"></a>

> Code samples

```bash
curl https://example.com/anything/path/label/.string/.string/.name=string.description=string \
  -X POST
```

`POST /anything/path/label/{primitive}/{array}/{object}`

Support and handling of cookie parameters with `style: label` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="label-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A `label` style, exploded primitive.|
|array|path|[string]|true|A `label` style, exploded array.|
|object|path|object|true|A `label` style, exploded object.|

<h3 id="label-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Simple (non-exploded)

<a id="opIdpaths_simple_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/path/simple/string/string/name,string,description,string
```

`GET /anything/path/simple/{primitive}/{array}/{object}`

Support and handling of path parameters with `style: simple` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="simple-non-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A `simple` style, non-exploded primitive.|
|array|path|[string]|true|A `simple` style, non-exploded array.|
|object|path|object|true|A `simple` style, non-exploded object.|

<h3 id="simple-non-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Simple (exploded)

<a id="opIdpaths_simple_exploded"></a>

> Code samples

```bash
curl https://example.com/anything/path/simple/string/string/name=string,description=string \
  -X POST
```

`POST /anything/path/simple/{primitive}/{array}/{object}`

Support and handling of path parameters with `style: simple` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="simple-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|path|string|true|A `simple` style, exploded primitive.|
|array|path|[string]|true|A `simple` style, exploded array.|
|object|path|object|true|A `simple` style, exploded object.|

<h3 id="simple-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-parameter-serialization-query">Query</h1>

Showcasing handling of `style` on query parameters.

## Standard (no style)

<a id="opIdquery_standard"></a>

> Code samples

```bash
curl https://example.com/anything/query
```

`GET /anything/query`

Support and handling of query parameters without `style` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#parameter-object)

<h3 id="standard-no-style-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|query|string|false|A standard primitive.|
|array|query|[string]|false|A standard array.|
|object|query|object|false|A standard object.|

<h3 id="standard-no-style-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Form (non-exploded)

<a id="opIdquery_form_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/query/form
```

`GET /anything/query/form`

Support and handling of query parameters with `style: form` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="form-non-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|query|string|false|A `form` style, non-exploded primitive.|
|array|query|[string]|false|A `form` style, non-exploded array.|
|object|query|object|false|A `form` style, non-exploded object.|

<h3 id="form-non-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Form (exploded)

<a id="opIdquery_form_exploded"></a>

> Code samples

```bash
curl https://example.com/anything/query/form \
  -X POST
```

`POST /anything/query/form`

Support and handling of cookie parameters with `style: form` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="form-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|primitive|query|string|false|A `form` style, exploded primitive.|
|array|query|[string]|false|A `form` style, exploded array.|
|object|query|object|false|A `form` style, exploded object.|

<h3 id="form-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## spaceDelimited (non-exploded)

<a id="opIdquery_spaceDelimited_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/query/spaceDelimited
```

`GET /anything/query/spaceDelimited`

Support and handling of cookie parameters with `style: spaceDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="spacedelimited-non-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|array|query|[string]|false|A `spaceDelimited` style, non-exploded primitive.|
|object|query|object|false|A `spaceDelimited` style, non-exploded array.<br><br>>⚠️ This is currently unsupported.|

<h3 id="spacedelimited-non-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## pipeDelimited (non-exploded)

<a id="opIdquery_pipeDelimited_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/query/pipeDelimited
```

`GET /anything/query/pipeDelimited`

Support and handling of cookie parameters with `style: pipeDelimited` and `explode: false` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="pipedelimited-non-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|array|query|[string]|false|A `pipeDelimited` style, non-exploded primitive.|
|object|query|object|false|A `pipeDelimited` style, non-exploded object.<br><br>>⚠️ This is currently unsupported.|

<h3 id="pipedelimited-non-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## deepObject (exploded)

<a id="opIdquery_deepObject_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/query/deepObject
```

`GET /anything/query/deepObject`

Support and handling of cookie parameters with `style: deepObject` and `explode: true` serialization.

📚 OpenAPI specification references:

* [3.0.3 Parameter Serialization](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#style-values)

<h3 id="deepobject-exploded-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object|query|object|false|A `deepObject` style, exploded object.|

<h3 id="deepobject-exploded-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="support-for-parameter-serialization-multipartform-data-encoding">multipart/form-data Encoding</h1>

Showcasing handling of `encoding` and `style` on `multipart/form-data` requests.

## Standard (no encoding)

<a id="opIdformData_standard"></a>

> Code samples

```bash
curl https://example.com/anything/form-data \
  -X POST \
  -F 'primitive=string' \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`POST /anything/form-data`

Support and handling of a `multipart/form-data` request body without `encoding` serialization.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

> Body parameter

```yaml
primitive: string
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="standard-no-encoding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primitive|body|string|false|A standard primitive.|
|» array|body|[string]|false|A standard array.|
|» object|body|object|false|A standard object.|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="standard-no-encoding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Form (exploded)

<a id="opIdform_data_form_exploded"></a>

> Code samples

```bash
curl https://example.com/anything/form-data/form \
  -X PUT \
  -F 'primitive=string' \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`PUT /anything/form-data/form`

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: true`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

> Body parameter

```yaml
primitive: string
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="form-exploded-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primitive|body|string|false|A `form` style, exploded primitive.|
|» array|body|[string]|false|A `form` style, exploded array.|
|» object|body|object|false|A `form` style, exploded object.|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="form-exploded-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Form (non-exploded)

<a id="opIdformData_form_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/form-data/form \
  -X POST \
  -F 'primitive=string' \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`POST /anything/form-data/form`

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: form` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

> Body parameter

```yaml
primitive: string
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="form-non-exploded-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primitive|body|string|false|A `form` style, non-exploded primitive.|
|» array|body|[string]|false|A `form` style, non-exploded array.|
|» object|body|object|false|A `form` style, non-exploded object.|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="form-non-exploded-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## spaceDelimited (non-exploded)

<a id="opIdformData_spaceDelimited_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/form-data/spaceDelimited \
  -X POST \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`POST /anything/form-data/spaceDelimited`

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: spaceDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

> Body parameter

```yaml
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="spacedelimited-non-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» array|body|[string]|false|A `spaceDelimited` style, non-exploded array.|
|» object|body|object|false|A `spaceDelimited` style, non-exploded object.<br><br>>⚠️ This is currently unsupported.|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="spacedelimited-non-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## pipeDelimited (non-exploded)

<a id="opIdform_data_pipeDelimited_nonExploded"></a>

> Code samples

```bash
curl https://example.com/anything/form-data/pipeDelimited \
  -X POST \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`POST /anything/form-data/pipeDelimited`

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: pipeDelimited` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

> Body parameter

```yaml
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="pipedelimited-non-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» array|body|[string]|false|A `pipeDelimited` style, non-exploded array.|
|» object|body|object|false|A `pipeDelimited` style, non-exploded object.<br><br>>⚠️ This is currently unsupported.|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="pipedelimited-non-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## deepObject (exploded)

<a id="opIdform_data_deepObject_exploded"></a>

> Code samples

```bash
curl https://example.com/anything/form-data/deepObject \
  -X POST \
  -F 'primitive=string' \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`POST /anything/form-data/deepObject`

Support and handling of a `multipart/form-data` request body with `encoding` serialization of `style: deepObject` and `explode: false`.

📚 OpenAPI specification references:

* [3.0.3 Encoding Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encodingObject)

> Body parameter

```yaml
primitive: string
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="deepobject-exploded-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primitive|body|string|false|A `deepObject` style, non-exploded primitive.|
|» array|body|[string]|false|A `deepObject` style, non-exploded array.|
|» object|body|object|false|A `deepObject` style, non-exploded object.|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="deepobject-exploded-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
