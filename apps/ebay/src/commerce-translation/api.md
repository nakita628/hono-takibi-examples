<h1 id="translation-api">Translation API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API allows 3rd party developers to translate item title, description, search query.

Base URLs:

* <a href="https://api.ebay.com/commerce/translation/v1">https://api.ebay.com/commerce/translation/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: clientCredentials
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope|View public data from eBay|

<h1 id="translation-api-language">language</h1>

## translate

<a id="opIdtranslate"></a>

> Code samples

```bash
curl https://api.ebay.com/translate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "from": "string",
    "text": [
      "string"
    ],
    "to": "string",
    "translationContext": "string"
  }'
```

`POST /translate`

Translates input text inot a given language.

> Body parameter

```json
{
  "from": "string",
  "text": [
    "string"
  ],
  "to": "string",
  "translationContext": "string"
}
```

<h3 id="translate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TranslateRequest](#schematranslaterequest)|true|none|
|» from|body|string|false|The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>|
|» text|body|[string]|false|The input text.|
|» to|body|string|false|The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>|
|» translationContext|body|string|false|The context of the translation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html'>eBay API documentation</a>|

> Example responses

> 200 Response

```json
{
  "translations": [
    {
      "from": "string",
      "originalText": "string",
      "to": "string",
      "translatedText": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "errors": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

<h3 id="translate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TranslateResponse](#schematranslateresponse)|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="translate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
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
  "category": "string",
  "domain": "string",
  "errorId": 0,
  "inputRefIds": [
    "string"
  ],
  "longMessage": "string",
  "message": "string",
  "outputRefIds": [
    "string"
  ],
  "parameters": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "subdomain": "string"
}
```

This type defines the fields that can be returned in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Identifies the type of erro.|
|domain|string|false|none|Name for the primary system where the error occurred. This is relevant for application errors.|
|errorId|integer(int32)|false|none|A unique number to identify the error.|
|inputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|longMessage|string|false|none|A more detailed explanation of the error.|
|message|string|false|none|Information on how to correct the problem, in the end user's terms and language where applicable.|
|outputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.|
|subdomain|string|false|none|Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.|

<h2 id="tocS_ErrorParameter">ErrorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaerrorparameter"></a>
<a id="schema_ErrorParameter"></a>
<a id="tocSerrorparameter"></a>
<a id="tocserrorparameter"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The object of the error.|
|value|string|false|none|The value of the object.|

<h2 id="tocS_TranslateRequest">TranslateRequest</h2>
<!-- backwards compatibility -->
<a id="schematranslaterequest"></a>
<a id="schema_TranslateRequest"></a>
<a id="tocStranslaterequest"></a>
<a id="tocstranslaterequest"></a>

```json
{
  "from": "string",
  "text": [
    "string"
  ],
  "to": "string",
  "translationContext": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>|
|text|[string]|false|none|The input text.|
|to|string|false|none|The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>|
|translationContext|string|false|none|The context of the translation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html'>eBay API documentation</a>|

<h2 id="tocS_TranslateResponse">TranslateResponse</h2>
<!-- backwards compatibility -->
<a id="schematranslateresponse"></a>
<a id="schema_TranslateResponse"></a>
<a id="tocStranslateresponse"></a>
<a id="tocstranslateresponse"></a>

```json
{
  "translations": [
    {
      "from": "string",
      "originalText": "string",
      "to": "string",
      "translatedText": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translations|[[Translation](#schematranslation)]|false|none|The list of translations.|

<h2 id="tocS_Translation">Translation</h2>
<!-- backwards compatibility -->
<a id="schematranslation"></a>
<a id="schema_Translation"></a>
<a id="tocStranslation"></a>
<a id="tocstranslation"></a>

```json
{
  "from": "string",
  "originalText": "string",
  "to": "string",
  "translatedText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>|
|originalText|string|false|none|Original text.|
|to|string|false|none|The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>|
|translatedText|string|false|none|Translated text.|
