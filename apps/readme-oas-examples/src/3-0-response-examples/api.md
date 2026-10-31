<h1 id="response-example-support">Response example support v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#mediaTypeObject

Base URLs:

* <a href="https://httpbin.org/">https://httpbin.org/</a>

<h1 id="response-example-support-default">Default</h1>

## get/example

> Code samples

```bash
curl https://example.com/example \
  -H 'Accept: application/json'
```

`GET /example`

Showcase of responses with an `example` property present.

> Example responses

> 200 Response

```json
{
  "id": 12345,
  "email": "test@example.com",
  "name": "Test user name"
}
```

> 204 Response

```json
[
  {
    "id": 12345,
    "email": "test@example.com",
    "name": "Test user name"
  }
]
```

<h3 id="getexample-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|204|No Content|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|TestHeader|string||A test example header|

<aside class="success">
This operation does not require authentication
</aside>

## get/examples

> Code samples

```bash
curl https://example.com/examples \
  -H 'Accept: application/json'
```

`GET /examples`

Showcase of responses with an `examples` property present.

> Example responses

> 201 Response

```json
{
  "user": {
    "email": "test@example.com",
    "name": "Test user name"
  }
}
```

> 202 Response

```json
{
  "name": "Fluffy",
  "petType": "Cat",
  "color": "White",
  "gender": "male",
  "breed": "Persian"
}
```

> 400 Response

```text
<?xml version="1.0" encoding="UTF-8"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>
```

> default Response

```json
{
  "$ref": "#/components/schemas/UserResponse/example"
}
```

<h3 id="getexamples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|
|202|Accepted|OK|None|
|400|Bad Request|Validation failed|None|
|default|Default|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "user": {
    "email": "test@example.com",
    "name": "Test user name"
  }
}
```
