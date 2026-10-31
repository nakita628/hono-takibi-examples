<h1 id="spellcheckpro">SpellCheckPro v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://spellcheckpro.p.rapidapi.com">https://spellcheckpro.p.rapidapi.com</a>

<h1 id="spellcheckpro-default">Default</h1>

## Check Spelling (Russian)

<a id="opIdcheckSpellingRussian"></a>

> Code samples

```bash
curl https://example.com/check_spelling \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "lang_code": "ru",
    "text": "Добрый вее!"
  }'
```

`POST /check_spelling`

Check Spelling (Russian)

> Body parameter

```json
{
  "lang_code": "ru",
  "text": "Добрый вее!"
}
```

<h3 id="check-spelling-russian-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-RapidAPI-Key|header|string|false|none|
|body|body|object|false|none|
|» lang_code|body|string|false|none|
|» text|body|string|false|none|

<h3 id="check-spelling-russian-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
