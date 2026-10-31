<h1 id="webhook-example">Webhook Example v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="webhook-example-webhooks">Webhooks</h1>

## postnewPet

`POST newPet`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}
```

<h3 id="postnewpet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|false|Information about a new pet in the system|
|» id|body|integer(int64)|true|none|
|» name|body|string|true|none|
|» tag|body|string|false|none|

<h3 id="postnewpet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the data was received successfully|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|tag|string|false|none|none|
