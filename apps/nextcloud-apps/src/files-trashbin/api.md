<h1 id="filestrashbin">files_trashbin v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This application enables people to restore files that were deleted from the system.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="filestrashbin-preview">preview</h1>

## Get the preview for a file

<a id="opIdpreview-get-preview"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/files_trashbin/preview \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /index.php/apps/files_trashbin/preview`

<h3 id="get-the-preview-for-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|query|integer(int64)|false|ID of the file|
|x|query|integer(int64)|false|Width of the preview|
|y|query|integer(int64)|false|Height of the preview|
|a|query|boolean|false|Whether to not crop the preview|

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

<h3 id="get-the-preview-for-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview returned|Inline|
|400|Bad Request|Getting preview is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Preview not found|Inline|

<h3 id="get-the-preview-for-a-file-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

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
    "undelete": true,
    "delete_from_trash": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|true|none|none|
