<h1 id="examples-of-the-new-example-object">Examples of the new example object v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="examples-of-the-new-example-object-default">Default</h1>

## get/names

> Code samples

```bash
curl https://example.com/names \
  -H 'Accept: application/json'
```

`GET /names`

> Example responses

> 200 Response

```json
[
  "Bob",
  "Diane",
  "Mary",
  "Bill"
]
```

<h3 id="getnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getnames-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
