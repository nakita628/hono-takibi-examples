<h1 id="api-definition-with-a-circular-ref">API definition with a circular $ref v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

<h1 id="api-definition-with-a-circular-ref-default">Default</h1>

## get/anything

> Code samples

```bash
curl https://example.com/anything \
  -H 'Accept: application/json'
```

`GET /anything`

> Example responses

> 404 Response

```json
{
  "statusCode": 0,
  "error": "string",
  "inner": {},
  "canBeRetried": "Unknown",
  "detailedErrorCode": 0
}
```

<h3 id="getanything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Not found|[ErrorMessage](#schemaerrormessage)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "statusCode": 0,
  "error": "string",
  "inner": {
    "statusCode": 0,
    "error": "string",
    "inner": {},
    "canBeRetried": "Unknown",
    "detailedErrorCode": 0
  },
  "canBeRetried": "Unknown",
  "detailedErrorCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|integer(int32)|false|none|none|
|error|string \| null|false|none|none|
|inner|[ErrorMessage](#schemaerrormessage)|false|none|none|
|canBeRetried|string|false|none|none|
|detailedErrorCode|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|canBeRetried|Unknown|
|canBeRetried|Yes|
|canBeRetried|No|
