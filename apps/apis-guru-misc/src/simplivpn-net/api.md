<h1 id="simplivpnapi">SimpliVPNAPI v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. JWT Authorization header using the bearer scheme

<h1 id="simplivpnapi-simplivpnapi">SimpliVPNAPI</h1>

## DisableUser

<a id="opIdDisableUser"></a>

> Code samples

```bash
curl https://example.com/disable-user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "string"
  }'
```

`POST /disable-user`

This route allows you to disable a user's vpn access.

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="disableuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisableUser](#schemadisableuser)|true|none|
|» username|body|string|true|none|

<h3 id="disableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## EnableUser

<a id="opIdEnableUser"></a>

> Code samples

```bash
curl https://example.com/enable-user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "string"
  }'
```

`POST /enable-user`

This route allows you to enable a user's vpn access. This route can only be called using your user's Bearer Auth token.

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="enableuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EnableUser](#schemaenableuser)|true|none|
|» username|body|string|true|none|

<h3 id="enableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Login

<a id="opIdLogin"></a>

> Code samples

```bash
curl https://example.com/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "password": "string",
    "username": "string"
  }'
```

`POST /login`

This route allows you to login a user. The response will give you a Bearer auth token to use with all rquests pertaining to the user. This token expires in 7 days, so for every request you should check if you get an unauthorized responsve and re-validate the login if needed.

> Body parameter

```json
{
  "password": "string",
  "username": "string"
}
```

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserLogin](#schemauserlogin)|true|none|
|» password|body|string|true|none|
|» username|body|string|true|none|

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Register

<a id="opIdRegister"></a>

> Code samples

```bash
curl https://example.com/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "await": true,
    "password": "string",
    "username": "string"
  }'
```

`POST /register`

This route allows VPN Admin user's with an api key to register a vpn user account. This route can only be called using your api key supplied to you from SimpliVPN. Before calling this you should use your api key to call the /UsernameAvailable route to make sure the username you want is available first. All subsequent user requests following can be done using the user's api token, their token's expire every 7 days, so you should occasionally check them and if you get unauthorized, refresh their token by calling /login route. This route will also auto-enable a new user.

> Body parameter

```json
{
  "await": true,
  "password": "string",
  "username": "string"
}
```

<h3 id="register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Register](#schemaregister)|true|none|
|» await|body|boolean|false|none|
|» password|body|string|true|none|
|» username|body|string|true|none|

<h3 id="register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GetServerSummaries

<a id="opIdGetServerSummaries"></a>

> Code samples

```bash
curl https://example.com/server-summaries \
  -H "Authorization: ${API_KEY}"
```

`GET /server-summaries`

<h3 id="getserversummaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## GetServers

<a id="opIdGetServers"></a>

> Code samples

```bash
curl https://example.com/servers \
  -H "Authorization: ${API_KEY}"
```

`GET /servers`

<h3 id="getservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## UsernameAvailable

<a id="opIdUsernameAvailable"></a>

> Code samples

```bash
curl https://example.com/username-available \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "string"
  }'
```

`POST /username-available`

This route allows VPN Admin user's to check if a specific username is available before registering an account username. This route can only be called using your api key supplied to you from SimpliVPN.

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="usernameavailable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EnableUser](#schemaenableuser)|true|none|
|» username|body|string|true|none|

<h3 id="usernameavailable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_DisableUser">DisableUser</h2>
<!-- backwards compatibility -->
<a id="schemadisableuser"></a>
<a id="schema_DisableUser"></a>
<a id="tocSdisableuser"></a>
<a id="tocsdisableuser"></a>

```json
{
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|

<h2 id="tocS_EnableUser">EnableUser</h2>
<!-- backwards compatibility -->
<a id="schemaenableuser"></a>
<a id="schema_EnableUser"></a>
<a id="tocSenableuser"></a>
<a id="tocsenableuser"></a>

```json
{
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|

<h2 id="tocS_Register">Register</h2>
<!-- backwards compatibility -->
<a id="schemaregister"></a>
<a id="schema_Register"></a>
<a id="tocSregister"></a>
<a id="tocsregister"></a>

```json
{
  "await": true,
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|await|boolean|false|none|none|
|password|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_UserLogin">UserLogin</h2>
<!-- backwards compatibility -->
<a id="schemauserlogin"></a>
<a id="schema_UserLogin"></a>
<a id="tocSuserlogin"></a>
<a id="tocsuserlogin"></a>

```json
{
  "password": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|username|string|true|none|none|
