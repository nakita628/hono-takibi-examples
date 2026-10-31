<h1 id="oauth2-with-multiple-flows">OAuth2 with multiple flows v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://example.com/api/oauth/dialog](https://example.com/api/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:pets|modify pets in your account|
|read:pets|read your pets|

    - Flow: authorizationCode
    - Authorization URL = [https://example.com/api/oauth/dialog](https://example.com/api/oauth/dialog)
    - Token URL = [https://example.com/api/oauth/token](https://example.com/api/oauth/token)
    - Refresh URL = [https://example.com/api/oauth/refresh](https://example.com/api/oauth/refresh)

|Scope|Scope Description|
|---|---|
|write:pets|modify pets in your account|
|read:pets|read your pets|

- OpenID Connect authentication.

    - OpenID Connect URL = [https://example.com/.well-known/openid-connect](https://example.com/.well-known/openid-connect)
