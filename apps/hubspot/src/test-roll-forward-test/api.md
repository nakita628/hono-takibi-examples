<h1 id="test-roll-forward-test">Test Roll Forward Test v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://private.hubapi.com">https://private.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="test-roll-forward-test-basic">Basic</h1>

## get-/public/api/versioning/test/2026-09/widgets

<a id="opIdget-/public/api/versioning/test/2026-09/widgets"></a>

> Code samples

```bash
curl https://api.hubapi.com/public/api/versioning/test/2026-09/widgets \
  -H 'Accept: application/json'
```

`GET /public/api/versioning/test/2026-09/widgets`

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-publicapiversioningtest2026-09widgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TestListWidgetResponse](#schematestlistwidgetresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post-/public/api/versioning/test/2026-09/widgets

<a id="opIdpost-/public/api/versioning/test/2026-09/widgets"></a>

> Code samples

```bash
curl https://api.hubapi.com/public/api/versioning/test/2026-09/widgets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /public/api/versioning/test/2026-09/widgets`

> Body parameter

```json
null
```

<h3 id="post-publicapiversioningtest2026-09widgets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="post-publicapiversioningtest2026-09widgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get-/public/api/versioning/test/2026-09/widgets/{widgetId}

<a id="opIdget-/public/api/versioning/test/2026-09/widgets/{widgetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/public/api/versioning/test/2026-09/widgets/{widgetId}' \
  -H 'Accept: application/json'
```

`GET /public/api/versioning/test/2026-09/widgets/{widgetId}`

<h3 id="get-publicapiversioningtest2026-09widgetswidgetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|widgetId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-publicapiversioningtest2026-09widgetswidgetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## put-/public/api/versioning/test/2026-09/widgets/{widgetId}

<a id="opIdput-/public/api/versioning/test/2026-09/widgets/{widgetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/public/api/versioning/test/2026-09/widgets/{widgetId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /public/api/versioning/test/2026-09/widgets/{widgetId}`

> Body parameter

```json
null
```

<h3 id="put-publicapiversioningtest2026-09widgetswidgetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|widgetId|path|string|true|none|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="put-publicapiversioningtest2026-09widgetswidgetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## delete-/public/api/versioning/test/2026-09/widgets/{widgetId}

<a id="opIddelete-/public/api/versioning/test/2026-09/widgets/{widgetId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/public/api/versioning/test/2026-09/widgets/{widgetId}' \
  -X DELETE
```

`DELETE /public/api/versioning/test/2026-09/widgets/{widgetId}`

<h3 id="delete-publicapiversioningtest2026-09widgetswidgetid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|widgetId|path|string|true|none|

> Example responses

> default Response

```json
null
```

<h3 id="delete-publicapiversioningtest2026-09widgetswidgetid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_TestListWidgetResponse">TestListWidgetResponse</h2>
<!-- backwards compatibility -->
<a id="schematestlistwidgetresponse"></a>
<a id="schema_TestListWidgetResponse"></a>
<a id="tocStestlistwidgetresponse"></a>
<a id="tocstestlistwidgetresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|widgets|[string]|true|none|none|
