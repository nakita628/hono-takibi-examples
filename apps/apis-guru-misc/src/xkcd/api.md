<h1 id="xkcd">XKCD v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Webcomic of romance, sarcasm, math, and language.

Base URLs:

* <a href="http://xkcd.com/">http://xkcd.com/</a>

<a href="https://xkcd.com/json.html">External documentation</a>

<h1 id="xkcd-default">Default</h1>

## get/info.0.json

> Code samples

```bash
curl https://example.com/info.0.json
```

`GET /info.0.json`

Fetch current comic and metadata.


<h3 id="getinfo0json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comic](#schemacomic)|

<aside class="success">
This operation does not require authentication
</aside>

## get/{comicId}/info.0.json

> Code samples

```bash
curl https://example.com/0/info.0.json
```

`GET /{comicId}/info.0.json`

Fetch comics and metadata  by comic id.


<h3 id="getcomicidinfo0json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comicId|path|number|true|none|

<h3 id="getcomicidinfo0json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comic](#schemacomic)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_comic">comic</h2>
<!-- backwards compatibility -->
<a id="schemacomic"></a>
<a id="schema_comic"></a>
<a id="tocScomic"></a>
<a id="tocscomic"></a>

```json
{
  "alt": "string",
  "day": "string",
  "img": "string",
  "link": "string",
  "month": "string",
  "news": "string",
  "num": 0,
  "safe_title": "string",
  "title": "string",
  "transcript": "string",
  "year": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alt|string|false|none|none|
|day|string|false|none|none|
|img|string|false|none|none|
|link|string|false|none|none|
|month|string|false|none|none|
|news|string|false|none|none|
|num|number|false|none|none|
|safe_title|string|false|none|none|
|title|string|false|none|none|
|transcript|string|false|none|none|
|year|string|false|none|none|
