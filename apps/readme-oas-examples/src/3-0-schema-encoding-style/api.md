<h1 id="encoding-style-serialization-support">Encoding `style` serialization support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#encoding-object

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

Email: <a href="mailto:aaron@readme.io">aaron@readme.io</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="encoding-style-serialization-support-default">Default</h1>

## Form style serialization

<a id="opIdencoding_form"></a>

> Code samples

```bash
curl https://example.com/form/primitive \
  -X PUT \
  -F 'primitive=string' \
  -F 'array=["string"]' \
  -F 'object={"foo":"string","bar":"string"}'
```

`PUT /form/primitive`

Form style serialization

> Body parameter

```yaml
primitive: string
array:
  - string
object:
  foo: string
  bar: string
```

<h3 id="form-style-serialization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» primitive|body|string|false|none|
|» array|body|[string]|false|none|
|» object|body|object|false|none|
|» » foo|body|string|false|none|
|» » bar|body|string|false|none|

<h3 id="form-style-serialization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>
