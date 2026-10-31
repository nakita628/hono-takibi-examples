<h1 id="trapstreet-api">TrapStreet API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The TrapStreet API finds trap streets in Google Maps, Bing Maps and OpenStreetMap data.

Base URLs:

* <a href="https://api.trapstreet.com">https://api.trapstreet.com</a>

<h1 id="trapstreet-api-default">Default</h1>

## get/{address}

> Code samples

```bash
curl https://example.com/string \
  -H 'Accept: application/json'
```

`GET /{address}`

<h3 id="getaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "trap": true
}
```

<h3 id="getaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getaddress-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|trap|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
