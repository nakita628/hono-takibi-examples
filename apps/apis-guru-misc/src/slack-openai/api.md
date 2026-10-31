<h1 id="slack-ai-plugin">Slack AI Plugin v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A plugin that allows users to interact with Slack using ChatGPT

Base URLs:

* <a href="https://slack.com/api">https://slack.com/api</a>

<h1 id="slack-ai-plugin-default">Default</h1>

## ai_alpha_search_messages

<a id="opIdai_alpha_search_messages"></a>

> Code samples

```bash
curl https://example.com/ai.alpha.search.messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": "string"
  }'
```

`POST /ai.alpha.search.messages`

Search for messages matching a query

> Body parameter

```json
{
  "query": "string"
}
```

<h3 id="aialphasearchmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[searchRequest](#schemasearchrequest)|true|none|
|» query|body|string|true|Search query|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "results": [
    {
      "message": "string",
      "permalink": "string"
    }
  ]
}
```

<h3 id="aialphasearchmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|Inline|

<h3 id="aialphasearchmessages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|true|none|Boolean indicating whether or not the request was successful|
|results|[[Result](#schemaresult)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "message": "string",
  "permalink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|permalink|string|false|none|none|

<h2 id="tocS_searchRequest">searchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequest"></a>
<a id="schema_searchRequest"></a>
<a id="tocSsearchrequest"></a>
<a id="tocssearchrequest"></a>

```json
{
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|Search query|
