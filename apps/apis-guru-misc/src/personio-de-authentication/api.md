<h1 id="authentication">Authentication v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Personio Authentication API

Base URLs:

* <a href="https://api.personio.de/v1">https://api.personio.de/v1</a>

<h1 id="authentication-default">Default</h1>

## post/auth

> Code samples

```bash
curl 'https://example.com/auth?client_id=string&client_secret=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth`

Request Authentication Token

<h3 id="postauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|Client id of the downloaded credentials file|
|client_secret|query|string|true|Client secret of the downloaded credentials file|

> Example responses

> 200 Response

```json
{
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmRldi5wZXJzb25pby5kZTozMDAwMS92MS9hdXRoIiwiaWF0IjoxNDg5MDkxMzA2LCJleHAiOjE0ODkxNzc3MDYsIm5iZiI6MTQ4OTA5MTMwNiwianRpIjoiZmU1ZjkxOGY2MDZjOWI4OGMwMzM0ZmJkZjkyYzkwMzgiLCJzdWIiOiJPR014TVdRd1kySmxZbVF6Tm1RNVpqQmxOell6WmpsaSJ9.QZZCdlDjmL-LYdoDx2XLUfhwTdcjDgm9h4t-6JoACiM"
  },
  "success": true
}
```

<h3 id="postauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AuthenticationTokenResponse](#schemaauthenticationtokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AuthenticationTokenResponse">AuthenticationTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtokenresponse"></a>
<a id="schema_AuthenticationTokenResponse"></a>
<a id="tocSauthenticationtokenresponse"></a>
<a id="tocsauthenticationtokenresponse"></a>

```json
{
  "data": {
    "token": "string"
  },
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "data": {},
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|success|boolean|true|none|none|
