<h1 id="support-for-cases-where-multiple-alternate-security-types-and-or-and-or-are-listed">Support for cases where multiple alternate security types (AND, OR, AND OR) are listed v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#securitySchemeObject

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

# Authentication

* API Key (apiKey_cookie)
    - Parameter Name: **api_key**, in: cookie. An API key that will be supplied in a named cookie. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-object

* API Key (apiKey_header)
    - Parameter Name: **X-API-KEY**, in: header. An API key that will be supplied in a named header. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-objec

* API Key (apiKey_query)
    - Parameter Name: **apiKey**, in: query. An API key that will be supplied in a named query parameter. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-objec

- HTTP Authentication, scheme: basic Basic auth that takes a base64'd combination of `user:password`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

- HTTP Authentication, scheme: bearer A bearer token that will be supplied within an `Authentication` header as `bearer <token>`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

- HTTP Authentication, scheme: bearer A special kind of bearer token that will be supplied within an `Authentication` header as `<bearerFormat> <token>` (and in this case `jwt <token>`). https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#jwt-bearer-sample

- oAuth2 authentication. An OAuth 2 security flow. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

    - Flow: authorizationCode
    - Authorization URL = [http://example.com/oauth/dialog](http://example.com/oauth/dialog)
    - Token URL = [http://example.com/oauth/token](http://example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

    - Flow: clientCredentials
    - Token URL = [http://example.com/oauth/token](http://example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

    - Flow: implicit
    - Authorization URL = [http://example.com/oauth/dialog](http://example.com/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

    - Flow: password
    - Token URL = [http://example.com/oauth/token](http://example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

- oAuth2 authentication. An alternate OAuth 2 security flow. Functions identially to the other `oauth2` scheme, just with alternate URLs to authenticate against. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

    - Flow: implicit
    - Authorization URL = [http://alt.example.com/oauth/dialog](http://alt.example.com/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

<h1 id="support-for-cases-where-multiple-alternate-security-types-and-or-and-or-are-listed-default">Default</h1>

## Multiple forms of auth are required (&amp;&amp;)

> Code samples

```bash
curl https://example.com/anything/and \
  -X POST \
  -H "X-API-KEY: ${API_KEY}" \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /anything/and`

<h3 id="multiple-forms-of-auth-are-required--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey_header & basic & oauth2 ( Scopes: write:things )
</aside>

## Two forms of auth can be used, only one is required (||)

> Code samples

```bash
curl https://example.com/anything/or \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /anything/or`

<h3 id="two-forms-of-auth-can-be-used-only-one-is-required--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:things ), apiKey_header
</aside>

## Two security flows are present, one of which has multiple forms of required auth (&amp;&amp; ||)

> Code samples

```bash
curl https://example.com/anything/and-or \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-API-KEY: ${API_KEY}"
```

`POST /anything/and-or`

<h3 id="two-security-flows-are-present-one-of-which-has-multiple-forms-of-required-auth--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:things ) & apiKey_header, oauth2_alternate ( Scopes: write:things )
</aside>

## Many security flows are present, each with multiple forms of required auth (&amp;&amp; ||)

> Code samples

```bash
curl https://example.com/anything/many-and-or \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /anything/many-and-or`

<h3 id="many-security-flows-are-present-each-with-multiple-forms-of-required-auth--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 & basic, bearer & bearer_jwt, bearer_jwt, basic, basic & bearer, apiKey_cookie & apiKey_header & apiKey_query
</aside>
