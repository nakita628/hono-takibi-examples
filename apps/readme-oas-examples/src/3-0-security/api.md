<h1 id="support-for-different-security-types">Support for different security types v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#securitySchemeObject

Base URLs:

* <a href="https://httpbin.org">https://httpbin.org</a>

# Authentication

* API Key (apiKey_cookie)
    - Parameter Name: **api_key**, in: cookie. An API key that will be supplied in a named cookie. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-object

* API Key (apiKey_header)
    - Parameter Name: **X-API-KEY**, in: header. An API key that will be supplied in a named header. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-object

* API Key (apiKey_query)
    - Parameter Name: **apiKey**, in: query. An API key that will be supplied in a named query parameter. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-object

- HTTP Authentication, scheme: basic Basic auth that takes a base64'd combination of `user:password`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

- HTTP Authentication, scheme: bearer A bearer token that will be supplied within an `Authentication` header as `bearer <token>`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

- HTTP Authentication, scheme: bearer A bearer token that will be supplied within an `Authentication` header as `bearer <token>`. In this case, the format of the token is specified as JWT. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#jwt-bearer-sample

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

- oAuth2 authentication. An OAuth 2 security flow that only supports the `authorizationCode` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#oauth-flows-object

    - Flow: authorizationCode
    - Authorization URL = [http://alt.example.com/oauth/dialog](http://alt.example.com/oauth/dialog)
    - Token URL = [http://alt.example.com/oauth/token](http://alt.example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

- oAuth2 authentication. An OAuth 2 security flow that only supports the `clientCredentials` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#oauth-flows-object

    - Flow: clientCredentials
    - Token URL = [http://alt.example.com/oauth/token](http://alt.example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

- oAuth2 authentication. An OAuth 2 security flow that only supports the `implicit` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#oauth-flows-object

    - Flow: implicit
    - Authorization URL = [http://alt.example.com/oauth/dialog](http://alt.example.com/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

- oAuth2 authentication. An OAuth 2 security flow that only supports the `password` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#oauth-flows-object

    - Flow: password
    - Token URL = [http://alt.example.com/oauth/token](http://alt.example.com/oauth/token)

|Scope|Scope Description|
|---|---|
|write:things|Add things to your account|

- OpenID Connect authentication. OpenAPI authentication. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

    - OpenID Connect URL = [https://example.com/.well-known/openid-configuration](https://example.com/.well-known/openid-configuration)

<h1 id="support-for-different-security-types-api-key">API Key</h1>

## Query parameter

> Code samples

```bash
curl "https://example.com/anything/apiKey?apiKey=${API_KEY}"
```

`GET /anything/apiKey`

`apiKey` auth will be supplied within an `apiKey` query parameter.

<h3 id="query-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey_query
</aside>

## Header

> Code samples

```bash
curl https://example.com/anything/apiKey \
  -X PUT \
  -H "X-API-KEY: ${API_KEY}"
```

`PUT /anything/apiKey`

`apiKey` auth will be supplied within an `X-API-KEY` header.

<h3 id="header-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey_header
</aside>

## Cookie

> Code samples

```bash
curl https://example.com/anything/apiKey \
  -X POST \
  -H "Cookie: api_key=${API_KEY}"
```

`POST /anything/apiKey`

`apiKey` auth will be supplied within an `api_key` cookie.

<h3 id="cookie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey_cookie
</aside>

<h1 id="support-for-different-security-types-http">HTTP</h1>

## Basic

> Code samples

```bash
curl https://example.com/anything/basic \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /anything/basic`

Authentication credentials will be supplied within a `Basic` `Authorization` header.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

<h3 id="basic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Bearer (`jwt` format)

> Code samples

```bash
curl https://example.com/anything/bearer \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /anything/bearer`

Authentication credentials will be supplied within a `Bearer` `Authorization` header, but its data should be controlled as a JWT.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

> ℹ️
> We currently do not support any special handling for this so they're handled as a standard `Bearer` authentication token.

<h3 id="bearer-jwt-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_jwt
</aside>

## Bearer

> Code samples

```bash
curl https://example.com/anything/bearer \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /anything/bearer`

Authentication credentials will be supplied within a `Bearer` `Authorization` header.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample

<h3 id="bearer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="support-for-different-security-types-oauth-2">OAuth 2</h1>

## General support (authorizationCode flow type)

> Code samples

```bash
curl https://example.com/anything/oauth2 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /anything/oauth2`

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

<h3 id="general-support-authorizationcode-flow-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_authorizationCode ( Scopes: write:things )
</aside>

## General support (clientCredentials flow type)

> Code samples

```bash
curl https://example.com/anything/oauth2 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /anything/oauth2`

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

<h3 id="general-support-clientcredentials-flow-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_clientCredentials ( Scopes: write:things )
</aside>

## General support (all flow types)

> Code samples

```bash
curl https://example.com/anything/oauth2 \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /anything/oauth2`

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

<h3 id="general-support-all-flow-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:things )
</aside>

## General support (password flow type)

> Code samples

```bash
curl https://example.com/anything/oauth2 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /anything/oauth2`

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

<h3 id="general-support-password-flow-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_password ( Scopes: write:things )
</aside>

## General support (implicit flow type)

> Code samples

```bash
curl https://example.com/anything/oauth2 \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /anything/oauth2`

> ℹ️
> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23

<h3 id="general-support-implicit-flow-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: write:things )
</aside>

<h1 id="support-for-different-security-types-openid-connect">OpenID Connect</h1>

## General support

> Code samples

```bash
curl https://example.com/anything/openIdConnect \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /anything/openIdConnect`

🚧 This is not supported.

<h3 id="general-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
openIdConnect
</aside>

<h1 id="support-for-different-security-types-other">Other</h1>

## No auth requirements

> Code samples

```bash
curl https://example.com/anything/no-auth \
  -X POST
```

`POST /anything/no-auth`

This operation does not have any authentication requirements.

<h3 id="no-auth-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Optional auth

> Code samples

```bash
curl "https://example.com/anything/optional-auth?apiKey=${API_KEY}"
```

`GET /anything/optional-auth`

The `apiKey` query parameter auth on this operation is optional.

https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-requirement-object

<h3 id="optional-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
apiKey_query
</aside>

## Forced invalid authentication

> Code samples

```bash
curl https://example.com/status/401 \
  -X POST \
  -H "X-API-KEY: ${API_KEY}"
```

`POST /status/401`

This endpoint requires an authentication header but making any request to it will forcefully return a 401 status code for invalid auth.

<h3 id="forced-invalid-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey_header
</aside>
