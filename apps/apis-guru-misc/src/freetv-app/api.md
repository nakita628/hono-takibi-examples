<h1 id="news-plugin">News Plugin v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A plugin that allows the user to obtain and summary latest news using ChatGPT. If you do not know the user's username, ask them first before making queries to the plugin. Otherwise, use the username "global".

Base URLs:

* <a href="https://staging2.freetv-app.com">https://staging2.freetv-app.com</a>

<h1 id="news-plugin-default">Default</h1>

## Query the latest news

<a id="opIdgetLatestNews"></a>

> Code samples

```bash
curl 'https://example.com/services?mobile=1&funcs=getLatestNewsForChatGPT' \
  -H 'Accept: application/json'
```

`GET /services`

Get the current latest news to user

<h3 id="query-the-latest-news-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mobile|query|integer|true|none|
|funcs|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mobile|1|
|funcs|getLatestNewsForChatGPT|

> Example responses

> 200 Response

```json
{
  "getLatestNewsForChatGPT": [
    {
      "created": "string",
      "ref": "string",
      "thumbnail": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="query-the-latest-news-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "getLatestNewsForChatGPT": [
    {
      "created": "string",
      "ref": "string",
      "thumbnail": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|getLatestNewsForChatGPT|[[NewsItem](#schemanewsitem)]|true|none|The list of latest news.|

<h2 id="tocS_NewsItem">NewsItem</h2>
<!-- backwards compatibility -->
<a id="schemanewsitem"></a>
<a id="schema_NewsItem"></a>
<a id="tocSnewsitem"></a>
<a id="tocsnewsitem"></a>

```json
{
  "created": "string",
  "ref": "string",
  "thumbnail": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|none|
|ref|string|false|none|none|
|thumbnail|string|false|none|none|
|title|string|false|none|none|
