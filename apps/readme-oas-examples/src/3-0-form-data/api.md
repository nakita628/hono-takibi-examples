<h1 id="x-www-form-urlencoded-support">x-www-form-urlencoded support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#support-for-x-www-form-urlencoded-request-bodies

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="x-www-form-urlencoded-support-default">Default</h1>

## Demo handling of formData

<a id="opIddemoFormData"></a>

> Code samples

```bash
curl https://example.com/anything \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=string&client_secret=string&scope=0'
```

`POST /anything`

> Body parameter

```yaml
client_id: string
client_secret: string
scope: 0
```

<h3 id="demo-handling-of-formdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|none|
|» client_secret|body|string|true|none|
|» scope|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": 0,
  "token_type": "string",
  "expires_in": 0
}
```

<h3 id="demo-handling-of-formdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Token|[Token](#schematoken)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "access_token": 0,
  "token_type": "string",
  "expires_in": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|integer(int32)|true|none|none|
|token_type|string|true|none|none|
|expires_in|integer(int32)|true|none|none|
