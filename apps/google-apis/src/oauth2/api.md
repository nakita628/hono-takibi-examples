<h1 id="google-oauth2-api">Google OAuth2 API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Obtains end-user authorization grants for use with other Google APIs.

Base URLs:

* <a href="https://www.googleapis.com/">https://www.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/identity/protocols/oauth2/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|
|https://www.googleapis.com/auth/userinfo.profile|See your personal info, including any personal info you've made publicly available|
|openid|Associate you with your personal info on Google|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|
|https://www.googleapis.com/auth/userinfo.profile|See your personal info, including any personal info you've made publicly available|
|openid|Associate you with your personal info on Google|

<h1 id="google-oauth2-api-userinfo">userinfo</h1>

## oauth2.userinfo.get

<a id="opIdoauth2.userinfo.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/oauth2/v2/userinfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/v2/userinfo`

<h3 id="oauth2userinfoget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "hd": "string",
  "id": "string",
  "link": "string",
  "locale": "string",
  "name": "string",
  "picture": "string",
  "verified_email": true
}
```

<h3 id="oauth2userinfoget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Userinfo](#schemauserinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: openid ) & Oauth2c ( Scopes: openid ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.profile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.profile )
</aside>

## oauth2.userinfo.v2.me.get

<a id="opIdoauth2.userinfo.v2.me.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/userinfo/v2/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /userinfo/v2/me`

<h3 id="oauth2userinfov2meget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "hd": "string",
  "id": "string",
  "link": "string",
  "locale": "string",
  "name": "string",
  "picture": "string",
  "verified_email": true
}
```

<h3 id="oauth2userinfov2meget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Userinfo](#schemauserinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: openid ) & Oauth2c ( Scopes: openid ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.profile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.profile )
</aside>

<h1 id="google-oauth2-api-default">Default</h1>

## oauth2.tokeninfo

<a id="opIdoauth2.tokeninfo"></a>

> Code samples

```bash
curl https://www.googleapis.com/oauth2/v2/tokeninfo \
  -X POST \
  -H 'Accept: application/json'
```

`POST /oauth2/v2/tokeninfo`

<h3 id="oauth2tokeninfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access_token|query|string|false|none|
|id_token|query|string|false|none|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "audience": "string",
  "email": "string",
  "expires_in": 0,
  "issued_to": "string",
  "scope": "string",
  "user_id": "string",
  "verified_email": true
}
```

<h3 id="oauth2tokeninfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Tokeninfo](#schematokeninfo)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Tokeninfo">Tokeninfo</h2>
<!-- backwards compatibility -->
<a id="schematokeninfo"></a>
<a id="schema_Tokeninfo"></a>
<a id="tocStokeninfo"></a>
<a id="tocstokeninfo"></a>

```json
{
  "audience": "string",
  "email": "string",
  "expires_in": 0,
  "issued_to": "string",
  "scope": "string",
  "user_id": "string",
  "verified_email": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|Who is the intended audience for this token. In general the same as issued_to.|
|email|string|false|none|The email address of the user. Present only if the email scope is present in the request.|
|expires_in|integer(int32)|false|none|The expiry time of the token, as number of seconds left until expiry.|
|issued_to|string|false|none|To whom was the token issued to. In general the same as audience.|
|scope|string|false|none|The space separated list of scopes granted to this token.|
|user_id|string|false|none|The obfuscated user id.|
|verified_email|boolean|false|none|Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.|

<h2 id="tocS_Userinfo">Userinfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_Userinfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "email": "string",
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "hd": "string",
  "id": "string",
  "link": "string",
  "locale": "string",
  "name": "string",
  "picture": "string",
  "verified_email": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The user's email address.|
|family_name|string|false|none|The user's last name.|
|gender|string|false|none|The user's gender.|
|given_name|string|false|none|The user's first name.|
|hd|string|false|none|The hosted domain e.g. example.com if the user is Google apps user.|
|id|string|false|none|The obfuscated ID of the user.|
|link|string|false|none|URL of the profile page.|
|locale|string|false|none|The user's preferred locale.|
|name|string|false|none|The user's full name.|
|picture|string|false|none|URL of the user's picture image.|
|verified_email|boolean|false|none|Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.|
