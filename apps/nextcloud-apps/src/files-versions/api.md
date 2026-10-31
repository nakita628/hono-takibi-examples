<h1 id="filesversions">files_versions v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This application automatically maintains older versions of files that are changed.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="filesversions-preview">preview</h1>

## Get the preview for a file version

<a id="opIdpreview-get-preview"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/files_versions/preview \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /index.php/apps/files_versions/preview`

<h3 id="get-the-preview-for-a-file-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|false|Path of the file|
|x|query|integer(int64)|false|Width of the preview|
|y|query|integer(int64)|false|Height of the preview|
|version|query|string|false|Version of the file to get the preview for|
|mimeFallback|query|boolean|false|Whether to fallback to the mime icon if no preview is available|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
{
  "message": "string"
}
```

> 404 Response

```json
null
```

<h3 id="get-the-preview-for-a-file-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|303|See Other|Redirect to the mime icon url if mimeFallback is true|None|
|400|Bad Request|Getting preview is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Preview not found|Inline|

<h3 id="get-the-preview-for-a-file-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "files": {
    "versioning": true,
    "version_labeling": true,
    "version_deletion": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|true|none|none|
