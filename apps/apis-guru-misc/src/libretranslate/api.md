<h1 id="libretranslate">LibreTranslate v1.3.9</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://libretranslate.local">http://libretranslate.local</a>

<h1 id="libretranslate-translate">translate</h1>

## Detect the language of a single text

> Code samples

```bash
curl https://example.com/detect \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded'
```

`POST /detect`

> Body parameter

```yaml
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

<h3 id="detect-the-language-of-a-single-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="detect-the-language-of-a-single-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Detections|[detections](#schemadetections)|
|400|Bad Request|Invalid request|[error-response](#schemaerror-response)|
|403|Forbidden|Banned|[error-response](#schemaerror-response)|
|429|Too Many Requests|Slow down|[error-slow-down](#schemaerror-slow-down)|
|500|Internal Server Error|Detection error|[error-response](#schemaerror-response)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve list of supported languages

> Code samples

```bash
curl https://example.com/languages
```

`GET /languages`

<h3 id="retrieve-list-of-supported-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of languages|[languages](#schemalanguages)|

<aside class="success">
This operation does not require authentication
</aside>

## Translate text from a language to another

> Code samples

```bash
curl https://example.com/translate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded'
```

`POST /translate`

> Body parameter

```yaml
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

<h3 id="translate-text-from-a-language-to-another-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="translate-text-from-a-language-to-another-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translated text|[translate](#schematranslate)|
|400|Bad Request|Invalid request|[error-response](#schemaerror-response)|
|403|Forbidden|Banned|[error-response](#schemaerror-response)|
|429|Too Many Requests|Slow down|[error-slow-down](#schemaerror-slow-down)|
|500|Internal Server Error|Translation error|[error-response](#schemaerror-response)|

<aside class="success">
This operation does not require authentication
</aside>

## Translate file from a language to another

> Code samples

```bash
curl https://example.com/translate_file \
  -X POST
```

`POST /translate_file`

> Body parameter

```yaml
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

<h3 id="translate-file-from-a-language-to-another-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|none|

<h3 id="translate-file-from-a-language-to-another-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translated file|[translate-file](#schematranslate-file)|
|400|Bad Request|Invalid request|[error-response](#schemaerror-response)|
|403|Forbidden|Banned|[error-response](#schemaerror-response)|
|429|Too Many Requests|Slow down|[error-slow-down](#schemaerror-slow-down)|
|500|Internal Server Error|Translation error|[error-response](#schemaerror-response)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="libretranslate-frontend">frontend</h1>

## Retrieve frontend specific settings

> Code samples

```bash
curl https://example.com/frontend/settings
```

`GET /frontend/settings`

<h3 id="retrieve-frontend-specific-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|frontend settings|[frontend-settings](#schemafrontend-settings)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="libretranslate-feedback">feedback</h1>

## Submit a suggestion to improve a translation

> Code samples

```bash
curl https://example.com/suggest \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded'
```

`POST /suggest`

> Body parameter

```yaml
es
```

<h3 id="submit-a-suggestion-to-improve-a-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="submit-a-suggestion-to-improve-a-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[suggest-response](#schemasuggest-response)|
|403|Forbidden|Not authorized|[error-response](#schemaerror-response)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_detections">detections</h2>
<!-- backwards compatibility -->
<a id="schemadetections"></a>
<a id="schema_detections"></a>
<a id="tocSdetections"></a>
<a id="tocsdetections"></a>

```json
[
  {
    "confidence": 0.6,
    "language": "en"
  }
]
```

<h2 id="tocS_error-response">error-response</h2>
<!-- backwards compatibility -->
<a id="schemaerror-response"></a>
<a id="schema_error-response"></a>
<a id="tocSerror-response"></a>
<a id="tocserror-response"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|

<h2 id="tocS_error-slow-down">error-slow-down</h2>
<!-- backwards compatibility -->
<a id="schemaerror-slow-down"></a>
<a id="schema_error-slow-down"></a>
<a id="tocSerror-slow-down"></a>
<a id="tocserror-slow-down"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Reason for slow down|

<h2 id="tocS_frontend-settings">frontend-settings</h2>
<!-- backwards compatibility -->
<a id="schemafrontend-settings"></a>
<a id="schema_frontend-settings"></a>
<a id="tocSfrontend-settings"></a>
<a id="tocsfrontend-settings"></a>

```json
{
  "apiKeys": true,
  "charLimit": 0,
  "frontendTimeout": 0,
  "keyRequired": true,
  "language": {
    "source": {
      "code": "string",
      "name": "string"
    },
    "target": {
      "code": "string",
      "name": "string"
    }
  },
  "suggestions": true,
  "supportedFilesFormat": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeys|boolean|false|none|Whether the API key database is enabled.|
|charLimit|integer|false|none|Character input limit for this language (-1 indicates no limit)|
|frontendTimeout|integer|false|none|Frontend translation timeout|
|keyRequired|boolean|false|none|Whether an API key is required.|
|language|object|false|none|none|
|suggestions|boolean|false|none|Whether submitting suggestions is enabled.|
|supportedFilesFormat|[string]|false|none|Supported files format|

<h2 id="tocS_languages">languages</h2>
<!-- backwards compatibility -->
<a id="schemalanguages"></a>
<a id="schema_languages"></a>
<a id="tocSlanguages"></a>
<a id="tocslanguages"></a>

```json
[
  {
    "code": "string",
    "name": "string",
    "targets": [
      "string"
    ]
  }
]
```

<h2 id="tocS_suggest-response">suggest-response</h2>
<!-- backwards compatibility -->
<a id="schemasuggest-response"></a>
<a id="schema_suggest-response"></a>
<a id="tocSsuggest-response"></a>
<a id="tocssuggest-response"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Whether submission was successful|

<h2 id="tocS_translate">translate</h2>
<!-- backwards compatibility -->
<a id="schematranslate"></a>
<a id="schema_translate"></a>
<a id="tocStranslate"></a>
<a id="tocstranslate"></a>

```json
{
  "translatedText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translatedText|string \| [object]|false|none|Translated text(s)|

<h2 id="tocS_translate-file">translate-file</h2>
<!-- backwards compatibility -->
<a id="schematranslate-file"></a>
<a id="schema_translate-file"></a>
<a id="tocStranslate-file"></a>
<a id="tocstranslate-file"></a>

```json
{
  "translatedFileUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translatedFileUrl|string|false|none|Translated file url|
