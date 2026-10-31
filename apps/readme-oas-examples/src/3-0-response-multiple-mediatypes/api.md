<h1 id="responses-with-multiple-media-types">Responses with multiple media types v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#responseObject

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="responses-with-multiple-media-types-default">Default</h1>

## Multiple response types with multiple examples

> Code samples

```bash
curl https://example.com/multiple-types-multiple-examples \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "string (format: date)": "1970-01-01",
    "string (format: date-time)": "1970-01-01T00:00:00Z",
    "string (format: string)": "string"
  }'
```

`POST /multiple-types-multiple-examples`

> Body parameter

```json
{
  "string (format: date)": "1970-01-01",
  "string (format: date-time)": "1970-01-01T00:00:00Z",
  "string (format: string)": "string"
}
```

<h3 id="multiple-response-types-with-multiple-examples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» string (format: date)|body|string(date)|false|none|
|» string (format: date-time)|body|string(date-time)|false|none|
|» string (format: string)|body|string(string)|false|none|

> Example responses

> 200 Response

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

<h3 id="multiple-response-types-with-multiple-examples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Validation failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Multiple response types with a single example

> Code samples

```bash
curl https://example.com/multiple-types-single-example \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "string (format: date)": "1970-01-01",
    "string (format: date-time)": "1970-01-01T00:00:00Z",
    "string (format: string)": "string"
  }'
```

`POST /multiple-types-single-example`

> Body parameter

```json
{
  "string (format: date)": "1970-01-01",
  "string (format: date-time)": "1970-01-01T00:00:00Z",
  "string (format: string)": "string"
}
```

<h3 id="multiple-response-types-with-a-single-example-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» string (format: date)|body|string(date)|false|none|
|» string (format: date-time)|body|string(date-time)|false|none|
|» string (format: string)|body|string(string)|false|none|

> Example responses

> 200 Response

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

<h3 id="multiple-response-types-with-a-single-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Validation failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Single media type with multiple examples

> Code samples

```bash
curl https://example.com/single-type-multiple-examples \
  -H 'Accept: application/json'
```

`GET /single-type-multiple-examples`

> Example responses

> 200 Response

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

<h3 id="single-media-type-with-multiple-examples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Validation failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## Single media type with a single example

> Code samples

```bash
curl https://example.com/single-type-single-example \
  -H 'Accept: application/json'
```

`GET /single-type-single-example`

> Example responses

> 200 Response

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

<h3 id="single-media-type-with-a-single-example-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Validation failed|None|

<aside class="success">
This operation does not require authentication
</aside>
