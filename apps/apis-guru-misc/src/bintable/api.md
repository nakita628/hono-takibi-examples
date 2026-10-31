<h1 id="bin-lookup-api">BIN Lookup API v1.0.0-oas3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

BIN lookup API, the free api service from bintable.com to lookup card information using it's BIN. the service maintains updated database based on the comunity and other third party services to make sure all BINs in the database are accurate and up to date.

Base URLs:

* <a href="https://api.bintable.com/v1">https://api.bintable.com/v1</a>

Email: <a href="mailto:hello@bintable.com">hello@bintable.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="bin-lookup-api-lookup">Lookup</h1>

Authorized users with API Key can call this service

## Lookup for bin

<a id="opIdbinLookup"></a>

> Code samples

```bash
curl 'https://example.com/string?api_key=string' \
  -H 'Accept: application/json'
```

`GET /{bin}`

By passing in the appropriate BIN, you can lookup for
card meta data in bintable.com API


<h3 id="lookup-for-bin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bin|path|string|true|pass the required BIN code|
|api_key|query|string|true|The API key, which you can get from bintable.com website.|

> Example responses

> 200 Response

```json
[
  {
    "data": {},
    "message": "SUCCESS",
    "result": 200
  }
]
```

<h3 id="lookup-for-bin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|BIN data response|Inline|
|401|Unauthorized|Your balance is exhausted,or package expired|None|
|403|Forbidden|Invalid API Key|None|
|422|Unprocessable Entity|API key is missing|None|

<h3 id="lookup-for-bin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResponseItem](#schemaresponseitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bin-lookup-api-balance">Balance</h1>

Authorized users with API Key can call endpoints under this tag.

## Check Balance

<a id="opIdbalanceLookup"></a>

> Code samples

```bash
curl 'https://example.com/balance?api_key=string'
```

`GET /balance`

Get Account balance and expiry

<h3 id="check-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|The API key, which you can get from bintable.com website.|

<h3 id="check-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balance reponse|Inline|
|401|Unauthorized|Your balance is exhausted,or package expired|None|
|403|Forbidden|Invalid API Key|None|
|422|Unprocessable Entity|API key is missing|None|

<h3 id="check-balance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResponseItem](#schemaresponseitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ResponseItem">ResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaresponseitem"></a>
<a id="schema_ResponseItem"></a>
<a id="tocSresponseitem"></a>
<a id="tocsresponseitem"></a>

```json
{
  "data": {},
  "message": "SUCCESS",
  "result": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|message|string|true|none|none|
|result|integer|true|none|none|
