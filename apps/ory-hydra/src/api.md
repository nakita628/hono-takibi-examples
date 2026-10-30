<h1 id="ory-hydra-api">Ory Hydra API</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Documentation for all of Ory Hydra's APIs.

Email: <a href="mailto:hi@ory.sh">hi@ory.sh</a> 
License: Apache 2.0

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://hydra.demo.ory.sh/oauth2/auth](https://hydra.demo.ory.sh/oauth2/auth)
    - Token URL = [https://hydra.demo.ory.sh/oauth2/token](https://hydra.demo.ory.sh/oauth2/token)

|Scope|Scope Description|
|---|---|
|offline|A scope required when requesting refresh tokens (alias for `offline_access`)|
|offline_access|A scope required when requesting refresh tokens|
|openid|Request an OpenID Connect ID Token|

<h1 id="ory-hydra-api-oauth2">oAuth2</h1>

OAuth 2.0

## List OAuth 2.0 Clients

<a id="opIdlistOAuth2Clients"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients \
  -H 'Accept: application/json'
```

`GET /admin/clients`

This endpoint lists all clients in the database, and never returns client secrets.
As a default it lists the first 100 clients.

<h3 id="list-oauth-20-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int64)|false|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|client_name|query|string|false|The name of the clients to filter by.|
|owner|query|string|false|The owner of the clients to filter by.|

> Example responses

> 200 Response

```json
[
  {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  }
]
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="list-oauth-20-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated OAuth2 Client List Response|Inline|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<h3 id="list-oauth-20-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[oAuth2Client](#schemaoauth2client)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create OAuth 2.0 Client

<a id="opIdcreateOAuth2Client"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  }'
```

`POST /admin/clients`

Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret
is generated. The secret is echoed in the response. It is not possible to retrieve it later on.

> Body parameter

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

<h3 id="create-oauth-20-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[oAuth2Client](#schemaoauth2client)|true|OAuth 2.0 Client Request Body|
|» access_token_strategy|body|string|false|OAuth 2.0 Access Token Strategy<br><br>AccessTokenStrategy is the strategy used to generate access tokens.<br>Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.com/docs/oauth2-oidc/jwt-access-token<br>Setting the strategy here overrides the global setting in `strategies.access_token`.|
|» allowed_cors_origins|body|[string]|false|OAuth 2.0 Client Allowed CORS Origins<br><br>One or more URLs (scheme://host[:port]) which are allowed to make CORS requests<br>to the /oauth/token endpoint. If this array is empty, the server's CORS origin configuration (`CORS_ALLOWED_ORIGINS`)<br>will be used instead. If this array is set, the allowed origins are appended to the server's CORS origin configuration.<br>Be aware that environment variable `CORS_ENABLED` MUST be set to `true` for this to work.|
|» audience|body|[string]|false|OAuth 2.0 Client Audience<br><br>An allow-list defining the audiences this client is allowed to request tokens for. An audience limits<br>the applicability of an OAuth 2.0 Access Token to, for example, certain API endpoints. The value is a list<br>of URLs. URLs MUST NOT contain whitespaces.|
|» authorization_code_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» backchannel_logout_session_required|body|boolean|false|OpenID Connect Back-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout<br>Token to identify the RP session with the OP when the backchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» backchannel_logout_uri|body|string|false|OpenID Connect Back-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.|
|» client_credentials_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» client_id|body|string|false|OAuth 2.0 Client ID<br><br>The ID is immutable. If no ID is provided, a UUID4 will be generated.|
|» client_name|body|string|false|OAuth 2.0 Client Name<br><br>The human-readable name of the client to be presented to the<br>end-user during authorization.|
|» client_secret|body|string|false|OAuth 2.0 Client Secret<br><br>The secret will be included in the create request as cleartext, and then<br>never again. The secret is kept in hashed format and is not recoverable once lost.|
|» client_secret_expires_at|body|integer(int64)|false|OAuth 2.0 Client Secret Expires At<br><br>The field is currently not supported and its value is always 0.|
|» client_uri|body|string|false|OAuth 2.0 Client URI<br><br>ClientURI is a URL string of a web page providing information about the client.<br>If present, the server SHOULD display this URL to the end-user in<br>a clickable fashion.|
|» contacts|body|[string]|false|OAuth 2.0 Client Contact<br><br>An array of strings representing ways to contact people responsible<br>for this client, typically email addresses.|
|» created_at|body|string(date-time)|false|OAuth 2.0 Client Creation Date<br><br>CreatedAt returns the timestamp of the client's creation.|
|» device_authorization_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» frontchannel_logout_session_required|body|boolean|false|OpenID Connect Front-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be<br>included to identify the RP session with the OP when the frontchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» frontchannel_logout_uri|body|string|false|OpenID Connect Front-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query<br>parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the<br>request and to determine which of the potentially multiple sessions is to be logged out; if either is<br>included, both MUST be.|
|» grant_types|body|[string]|false|OAuth 2.0 Client Grant Types<br><br>An array of OAuth 2.0 grant types the client is allowed to use. Can be one<br>of:<br><br>Client Credentials Grant: `client_credentials`<br>Authorization Code Grant: `authorization_code`<br>OpenID Connect Implicit Grant (deprecated!): `implicit`<br>Refresh Token Grant: `refresh_token`<br>OAuth 2.0 Token Exchange: `urn:ietf:params:oauth:grant-type:jwt-bearer`<br>OAuth 2.0 Device Code Grant: `urn:ietf:params:oauth:grant-type:device_code`|
|» implicit_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» implicit_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» jwks|body|[jsonWebKeySet](#schemajsonwebkeyset)|false|JSON Web Key Set|
|» jwks_uri|body|string|false|OAuth 2.0 Client JSON Web Key Set URL<br><br>URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains<br>the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the<br>Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing<br>and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced<br>JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both<br>signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used<br>to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST<br>match those in the certificate.|
|» jwt_bearer_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» logo_uri|body|string|false|OAuth 2.0 Client Logo URI<br><br>A URL string referencing the client's logo.|
|» metadata|body|[JSONRawMessage](#schemajsonrawmessage)|false|none|
|» owner|body|string|false|OAuth 2.0 Client Owner<br><br>Owner is a string identifying the owner of the OAuth 2.0 Client.|
|» policy_uri|body|string|false|OAuth 2.0 Client Policy URI<br><br>PolicyURI is a URL string that points to a human-readable privacy policy document<br>that describes how the deployment organization collects, uses,<br>retains, and discloses personal data.|
|» post_logout_redirect_uris|body|[string]|false|Allowed Post-Redirect Logout URIs<br><br>Array of URLs supplied by the RP to which it MAY request that the End-User's User Agent be redirected using the<br>post_logout_redirect_uri parameter after a logout has been performed.|
|» redirect_uris|body|[string]|false|OAuth 2.0 Client Redirect URIs<br><br>RedirectURIs is an array of allowed redirect urls for the client.|
|» refresh_token_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» registration_access_token|body|string|false|OpenID Connect Dynamic Client Registration Access Token<br><br>RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client<br>using Dynamic Client Registration.|
|» registration_client_uri|body|string|false|OpenID Connect Dynamic Client Registration URL<br><br>RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.|
|» request_object_signing_alg|body|string|false|OpenID Connect Request Object Signing Algorithm<br><br>JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects<br>from this Client MUST be rejected, if not signed with this algorithm.|
|» request_uris|body|[string]|false|OpenID Connect Request URIs<br><br>Array of request_uri values that are pre-registered by the RP for use at the OP. Servers MAY cache the<br>contents of the files referenced by these URIs and not retrieve them at the time they are used in a request.<br>OPs can require that request_uri values used be pre-registered with the require_request_uri_registration<br>discovery parameter.|
|» response_types|body|[string]|false|OAuth 2.0 Client Response Types<br><br>An array of the OAuth 2.0 response type strings that the client can<br>use at the authorization endpoint. Possible values are:<br><br>`code` for Authorization Code Grant.<br>`token` or `id_token` or `token id_token` for OpenID Connect Implicit Grant (not recommended).<br>`code token` or `code id_token` or `code token id_token` for OpenID Connect Hybrid Flow (not recommended).|
|» scope|body|string|false|OAuth 2.0 Client Scope<br><br>Scope is a string containing a space-separated list of scope values (as<br>described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client<br>can use when requesting access tokens.|
|» sector_identifier_uri|body|string|false|OpenID Connect Sector Identifier URI<br><br>URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a<br>file with a single JSON array of redirect_uri values.|
|» skip_consent|body|boolean|false|SkipConsent skips the consent screen for this client. This field can only<br>be set from the admin API.|
|» skip_logout_consent|body|boolean|false|SkipLogoutConsent skips the logout consent screen for this client. This field can only<br>be set from the admin API.|
|» subject_type|body|string|false|OpenID Connect Subject Type<br><br>The `subject_types_supported` Discovery parameter contains a<br>list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.|
|» token_endpoint_auth_method|body|string|false|OAuth 2.0 Token Endpoint Authentication Method<br><br>Requested Client Authentication method for the Token Endpoint. The options are:<br><br>`client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header.<br>`client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body.<br>`private_key_jwt`: Use JSON Web Tokens to authenticate the client.<br>`none`: Used for public clients (native apps, mobile apps) which can not have secrets.|
|» token_endpoint_auth_signing_alg|body|string|false|OAuth 2.0 Token Endpoint Signing Algorithm<br><br>Requested Client Authentication signing algorithm for the Token Endpoint.|
|» tos_uri|body|string|false|OAuth 2.0 Client Terms of Service URI<br><br>A URL string pointing to a human-readable terms of service<br>document for the client that describes a contractual relationship<br>between the end-user and the client that the end-user accepts when<br>authorizing the client.|
|» updated_at|body|string(date-time)|false|OAuth 2.0 Client Last Update Date<br><br>UpdatedAt returns the timestamp of the last update.|
|» userinfo_signed_response_alg|body|string|false|OpenID Connect Request Userinfo Signed Response Algorithm<br><br>JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT<br>[JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims<br>as a UTF-8 encoded JSON object using the application/json content-type.|

> Example responses

> 201 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="create-oauth-20-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|400|Bad Request|Bad Request Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an OAuth 2.0 Client

<a id="opIdgetOAuth2Client"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string \
  -H 'Accept: application/json'
```

`GET /admin/clients/{id}`

Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.

OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

<h3 id="get-an-oauth-20-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the OAuth 2.0 Client.|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="get-an-oauth-20-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Set OAuth 2.0 Client

<a id="opIdsetOAuth2Client"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  }'
```

`PUT /admin/clients/{id}`

Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used,
otherwise the existing secret is used. Rotated secrets will be cleared if you pass a new `client_secret`.

If set, the secret is echoed in the response. It is not possible to retrieve it later on.

To perform a seamless client secret rotation, use the `rotateOAuth2ClientSecret` endpoint instead.

OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

> Body parameter

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

<h3 id="set-oauth-20-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|OAuth 2.0 Client ID|
|body|body|[oAuth2Client](#schemaoauth2client)|true|OAuth 2.0 Client Request Body|
|» access_token_strategy|body|string|false|OAuth 2.0 Access Token Strategy<br><br>AccessTokenStrategy is the strategy used to generate access tokens.<br>Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.com/docs/oauth2-oidc/jwt-access-token<br>Setting the strategy here overrides the global setting in `strategies.access_token`.|
|» allowed_cors_origins|body|[string]|false|OAuth 2.0 Client Allowed CORS Origins<br><br>One or more URLs (scheme://host[:port]) which are allowed to make CORS requests<br>to the /oauth/token endpoint. If this array is empty, the server's CORS origin configuration (`CORS_ALLOWED_ORIGINS`)<br>will be used instead. If this array is set, the allowed origins are appended to the server's CORS origin configuration.<br>Be aware that environment variable `CORS_ENABLED` MUST be set to `true` for this to work.|
|» audience|body|[string]|false|OAuth 2.0 Client Audience<br><br>An allow-list defining the audiences this client is allowed to request tokens for. An audience limits<br>the applicability of an OAuth 2.0 Access Token to, for example, certain API endpoints. The value is a list<br>of URLs. URLs MUST NOT contain whitespaces.|
|» authorization_code_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» backchannel_logout_session_required|body|boolean|false|OpenID Connect Back-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout<br>Token to identify the RP session with the OP when the backchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» backchannel_logout_uri|body|string|false|OpenID Connect Back-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.|
|» client_credentials_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» client_id|body|string|false|OAuth 2.0 Client ID<br><br>The ID is immutable. If no ID is provided, a UUID4 will be generated.|
|» client_name|body|string|false|OAuth 2.0 Client Name<br><br>The human-readable name of the client to be presented to the<br>end-user during authorization.|
|» client_secret|body|string|false|OAuth 2.0 Client Secret<br><br>The secret will be included in the create request as cleartext, and then<br>never again. The secret is kept in hashed format and is not recoverable once lost.|
|» client_secret_expires_at|body|integer(int64)|false|OAuth 2.0 Client Secret Expires At<br><br>The field is currently not supported and its value is always 0.|
|» client_uri|body|string|false|OAuth 2.0 Client URI<br><br>ClientURI is a URL string of a web page providing information about the client.<br>If present, the server SHOULD display this URL to the end-user in<br>a clickable fashion.|
|» contacts|body|[string]|false|OAuth 2.0 Client Contact<br><br>An array of strings representing ways to contact people responsible<br>for this client, typically email addresses.|
|» created_at|body|string(date-time)|false|OAuth 2.0 Client Creation Date<br><br>CreatedAt returns the timestamp of the client's creation.|
|» device_authorization_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» frontchannel_logout_session_required|body|boolean|false|OpenID Connect Front-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be<br>included to identify the RP session with the OP when the frontchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» frontchannel_logout_uri|body|string|false|OpenID Connect Front-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query<br>parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the<br>request and to determine which of the potentially multiple sessions is to be logged out; if either is<br>included, both MUST be.|
|» grant_types|body|[string]|false|OAuth 2.0 Client Grant Types<br><br>An array of OAuth 2.0 grant types the client is allowed to use. Can be one<br>of:<br><br>Client Credentials Grant: `client_credentials`<br>Authorization Code Grant: `authorization_code`<br>OpenID Connect Implicit Grant (deprecated!): `implicit`<br>Refresh Token Grant: `refresh_token`<br>OAuth 2.0 Token Exchange: `urn:ietf:params:oauth:grant-type:jwt-bearer`<br>OAuth 2.0 Device Code Grant: `urn:ietf:params:oauth:grant-type:device_code`|
|» implicit_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» implicit_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» jwks|body|[jsonWebKeySet](#schemajsonwebkeyset)|false|JSON Web Key Set|
|» jwks_uri|body|string|false|OAuth 2.0 Client JSON Web Key Set URL<br><br>URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains<br>the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the<br>Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing<br>and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced<br>JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both<br>signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used<br>to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST<br>match those in the certificate.|
|» jwt_bearer_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» logo_uri|body|string|false|OAuth 2.0 Client Logo URI<br><br>A URL string referencing the client's logo.|
|» metadata|body|[JSONRawMessage](#schemajsonrawmessage)|false|none|
|» owner|body|string|false|OAuth 2.0 Client Owner<br><br>Owner is a string identifying the owner of the OAuth 2.0 Client.|
|» policy_uri|body|string|false|OAuth 2.0 Client Policy URI<br><br>PolicyURI is a URL string that points to a human-readable privacy policy document<br>that describes how the deployment organization collects, uses,<br>retains, and discloses personal data.|
|» post_logout_redirect_uris|body|[string]|false|Allowed Post-Redirect Logout URIs<br><br>Array of URLs supplied by the RP to which it MAY request that the End-User's User Agent be redirected using the<br>post_logout_redirect_uri parameter after a logout has been performed.|
|» redirect_uris|body|[string]|false|OAuth 2.0 Client Redirect URIs<br><br>RedirectURIs is an array of allowed redirect urls for the client.|
|» refresh_token_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» registration_access_token|body|string|false|OpenID Connect Dynamic Client Registration Access Token<br><br>RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client<br>using Dynamic Client Registration.|
|» registration_client_uri|body|string|false|OpenID Connect Dynamic Client Registration URL<br><br>RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.|
|» request_object_signing_alg|body|string|false|OpenID Connect Request Object Signing Algorithm<br><br>JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects<br>from this Client MUST be rejected, if not signed with this algorithm.|
|» request_uris|body|[string]|false|OpenID Connect Request URIs<br><br>Array of request_uri values that are pre-registered by the RP for use at the OP. Servers MAY cache the<br>contents of the files referenced by these URIs and not retrieve them at the time they are used in a request.<br>OPs can require that request_uri values used be pre-registered with the require_request_uri_registration<br>discovery parameter.|
|» response_types|body|[string]|false|OAuth 2.0 Client Response Types<br><br>An array of the OAuth 2.0 response type strings that the client can<br>use at the authorization endpoint. Possible values are:<br><br>`code` for Authorization Code Grant.<br>`token` or `id_token` or `token id_token` for OpenID Connect Implicit Grant (not recommended).<br>`code token` or `code id_token` or `code token id_token` for OpenID Connect Hybrid Flow (not recommended).|
|» scope|body|string|false|OAuth 2.0 Client Scope<br><br>Scope is a string containing a space-separated list of scope values (as<br>described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client<br>can use when requesting access tokens.|
|» sector_identifier_uri|body|string|false|OpenID Connect Sector Identifier URI<br><br>URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a<br>file with a single JSON array of redirect_uri values.|
|» skip_consent|body|boolean|false|SkipConsent skips the consent screen for this client. This field can only<br>be set from the admin API.|
|» skip_logout_consent|body|boolean|false|SkipLogoutConsent skips the logout consent screen for this client. This field can only<br>be set from the admin API.|
|» subject_type|body|string|false|OpenID Connect Subject Type<br><br>The `subject_types_supported` Discovery parameter contains a<br>list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.|
|» token_endpoint_auth_method|body|string|false|OAuth 2.0 Token Endpoint Authentication Method<br><br>Requested Client Authentication method for the Token Endpoint. The options are:<br><br>`client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header.<br>`client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body.<br>`private_key_jwt`: Use JSON Web Tokens to authenticate the client.<br>`none`: Used for public clients (native apps, mobile apps) which can not have secrets.|
|» token_endpoint_auth_signing_alg|body|string|false|OAuth 2.0 Token Endpoint Signing Algorithm<br><br>Requested Client Authentication signing algorithm for the Token Endpoint.|
|» tos_uri|body|string|false|OAuth 2.0 Client Terms of Service URI<br><br>A URL string pointing to a human-readable terms of service<br>document for the client that describes a contractual relationship<br>between the end-user and the client that the end-user accepts when<br>authorizing the client.|
|» updated_at|body|string(date-time)|false|OAuth 2.0 Client Last Update Date<br><br>UpdatedAt returns the timestamp of the last update.|
|» userinfo_signed_response_alg|body|string|false|OpenID Connect Request Userinfo Signed Response Algorithm<br><br>JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT<br>[JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims<br>as a UTF-8 encoded JSON object using the application/json content-type.|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> 404 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="set-oauth-20-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|400|Bad Request|Bad Request Error Response|[errorOAuth2](#schemaerroroauth2)|
|404|Not Found|Not Found Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete OAuth 2.0 Client

<a id="opIddeleteOAuth2Client"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/clients/{id}`

Delete an existing OAuth 2.0 Client by its ID.

OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

Make sure that this endpoint is well protected and only callable by first-party components.

<h3 id="delete-oauth-20-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the OAuth 2.0 Client.|

> Example responses

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="delete-oauth-20-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch OAuth 2.0 Client

<a id="opIdpatchOAuth2Client"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "from": "/name",
      "op": "replace",
      "path": "/name",
      "value": "foobar"
    }
  ]'
```

`PATCH /admin/clients/{id}`

Patch an existing OAuth 2.0 Client using JSON Patch. If you update
`client_secret`, the secret will be updated and returned via the API. This is
the only time you will be able to retrieve the client secret. Passing a new
`client_secret` will clear all rotated secrets.

To perform a seamless client secret rotation, use the `rotateOAuth2ClientSecret` endpoint instead.

OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

> Body parameter

```json
[
  {
    "from": "/name",
    "op": "replace",
    "path": "/name",
    "value": "foobar"
  }
]
```

<h3 id="patch-oauth-20-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the OAuth 2.0 Client.|
|body|body|[jsonPatchDocument](#schemajsonpatchdocument)|true|OAuth 2.0 Client JSON Patch Body|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="patch-oauth-20-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|404|Not Found|Not Found Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Set OAuth2 Client Token Lifespans

<a id="opIdsetOAuth2ClientLifespans"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string/lifespans \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string"
  }'
```

`PUT /admin/clients/{id}/lifespans`

Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.

> Body parameter

```json
{
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string"
}
```

<h3 id="set-oauth2-client-token-lifespans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|OAuth 2.0 Client ID|
|body|body|[oAuth2ClientTokenLifespans](#schemaoauth2clienttokenlifespans)|false|none|
|» authorization_code_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» client_credentials_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» implicit_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» implicit_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» jwt_bearer_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="set-oauth2-client-token-lifespans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Rotate OAuth 2.0 Client Secret

<a id="opIdrotateOAuth2ClientSecret"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string/secrets/rotate \
  -X POST \
  -H 'Accept: application/json'
```

`POST /admin/clients/{id}/secrets/rotate`

Rotates an OAuth 2.0 client's secrets. The old secret will remain valid for
authentication, allowing for zero-downtime secret rotations. A new secret
will be generated and returned in the response.

Up to five rotated secrets are retained. Use the
`deleteRotatedOAuth2ClientSecrets` endpoint to remove old rotated secrets
when they are no longer needed.

<h3 id="rotate-oauth-20-client-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|OAuth 2.0 Client ID|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="rotate-oauth-20-client-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|404|Not Found|Not Found Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Rotated OAuth 2.0 Client Secrets

<a id="opIddeleteRotatedOAuth2ClientSecrets"></a>

> Code samples

```bash
curl http://localhost:4445/admin/clients/string/secrets/rotate \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/clients/{id}/secrets/rotate`

Removes all rotated secrets from an OAuth 2.0 client. This should be called after all services
have been updated to use the new secret and the old secrets are no longer needed.

<h3 id="delete-rotated-oauth-20-client-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|OAuth 2.0 Client ID|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="delete-rotated-oauth-20-client-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|404|Not Found|Not Found Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth 2.0 Consent Request

<a id="opIdgetOAuth2ConsentRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/consent?consent_challenge=string' \
  -H 'Accept: application/json'
```

`GET /admin/oauth2/auth/requests/consent`

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider
to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if
the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject's behalf.

The consent challenge is appended to the consent provider's URL to which the subject's user-agent (browser) is redirected to. The consent
provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted
or rejected the request.

The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please
head over to the OAuth 2.0 documentation.

<h3 id="get-oauth-20-consent-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consent_challenge|query|string|true|OAuth 2.0 Consent Request Challenge|

> Example responses

> 200 Response

```json
{
  "acr": "string",
  "amr": [
    "string"
  ],
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "consent_request_id": "string",
  "context": null,
  "login_challenge": "string",
  "login_session_id": "string",
  "oidc_context": {
    "acr_values": [
      "string"
    ],
    "display": "string",
    "id_token_hint_claims": {
      "property1": null,
      "property2": null
    },
    "login_hint": "string",
    "ui_locales": [
      "string"
    ]
  },
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ],
  "skip": true,
  "subject": "string"
}
```

> 410 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="get-oauth-20-consent-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2ConsentRequest|[oAuth2ConsentRequest](#schemaoauth2consentrequest)|
|410|Gone|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Accept OAuth 2.0 Consent Request

<a id="opIdacceptOAuth2ConsentRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/consent/accept?consent_challenge=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": null,
    "grant_access_token_audience": [
      "string"
    ],
    "grant_scope": [
      "string"
    ],
    "remember": true,
    "remember_for": 0,
    "session": {
      "access_token": null,
      "id_token": null
    }
  }'
```

`PUT /admin/oauth2/auth/requests/consent/accept`

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider
to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if
the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject's behalf.

The consent challenge is appended to the consent provider's URL to which the subject's user-agent (browser) is redirected to. The consent
provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted
or rejected the request.

This endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf.
The consent provider includes additional information, such as session data for access and ID tokens, and if the
consent request should be used as basis for future requests.

The response contains a redirect URL which the consent provider should redirect the user-agent to.

The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please
head over to the OAuth 2.0 documentation.

> Body parameter

```json
{
  "context": null,
  "grant_access_token_audience": [
    "string"
  ],
  "grant_scope": [
    "string"
  ],
  "remember": true,
  "remember_for": 0,
  "session": {
    "access_token": null,
    "id_token": null
  }
}
```

<h3 id="accept-oauth-20-consent-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consent_challenge|query|string|true|OAuth 2.0 Consent Request Challenge|
|body|body|[acceptOAuth2ConsentRequest](#schemaacceptoauth2consentrequest)|false|none|
|» context|body|[JSONRawMessage](#schemajsonrawmessage)|false|none|
|» grant_access_token_audience|body|[string]|false|GrantedAudience sets the audience the user authorized the client to use. Should be a subset of `requested_access_token_audience`.|
|» grant_scope|body|[string]|false|GrantScope sets the scope the user authorized the client to use. Should be a subset of `requested_scope`.|
|» remember|body|boolean|false|Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same<br>client asks the same user for the same, or a subset of, scope.|
|» remember_for|body|integer(int64)|false|RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the<br>authorization will be remembered indefinitely.|
|» session|body|[acceptOAuth2ConsentRequestSession](#schemaacceptoauth2consentrequestsession)|false|none|

> Example responses

> 200 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="accept-oauth-20-consent-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Reject OAuth 2.0 Consent Request

<a id="opIdrejectOAuth2ConsentRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/consent/reject?consent_challenge=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": "string",
    "error_debug": "string",
    "error_description": "string",
    "error_hint": "string",
    "status_code": 0
  }'
```

`PUT /admin/oauth2/auth/requests/consent/reject`

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider
to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if
the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject's behalf.

The consent challenge is appended to the consent provider's URL to which the subject's user-agent (browser) is redirected to. The consent
provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted
or rejected the request.

This endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf.
The consent provider must include a reason why the consent was not granted.

The response contains a redirect URL which the consent provider should redirect the user-agent to.

The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please
head over to the OAuth 2.0 documentation.

> Body parameter

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "string",
  "status_code": 0
}
```

<h3 id="reject-oauth-20-consent-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consent_challenge|query|string|true|OAuth 2.0 Consent Request Challenge|
|body|body|[rejectOAuth2Request](#schemarejectoauth2request)|false|none|
|» error|body|string|false|The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).<br><br>Defaults to `request_denied`.|
|» error_debug|body|string|false|Debug contains information to help resolve the problem as a developer. Usually not exposed<br>to the public but only in the server logs.|
|» error_description|body|string|false|Description of the error in a human readable format.|
|» error_hint|body|string|false|Hint to help resolve the error.|
|» status_code|body|integer(int64)|false|Represents the HTTP status code of the error (e.g. 401 or 403)<br><br>Defaults to 400|

> Example responses

> 200 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="reject-oauth-20-consent-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Accepts a device grant user_code request

<a id="opIdacceptUserCodeRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/device/accept?device_challenge=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user_code": "string"
  }'
```

`PUT /admin/oauth2/auth/requests/device/accept`

Accepts a device grant user_code request

> Body parameter

```json
{
  "user_code": "string"
}
```

<h3 id="accepts-a-device-grant-usercode-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_challenge|query|string|true|none|
|body|body|[acceptDeviceUserCodeRequest](#schemaacceptdeviceusercoderequest)|false|none|
|» user_code|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="accepts-a-device-grant-usercode-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth 2.0 Login Request

<a id="opIdgetOAuth2LoginRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/login?login_challenge=string' \
  -H 'Accept: application/json'
```

`GET /admin/oauth2/auth/requests/login`

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider
to authenticate the subject and then tell the Ory OAuth2 Service about it.

Per default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app
you write and host, and it must be able to authenticate ("show the subject a login screen")
a subject (in OAuth2 the proper name for subject is "resource owner").

The authentication challenge is appended to the login provider URL to which the subject's user-agent (browser) is redirected to. The login
provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.

<h3 id="get-oauth-20-login-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login_challenge|query|string|true|OAuth 2.0 Login Request Challenge|

> Example responses

> 200 Response

```json
{
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "oidc_context": {
    "acr_values": [
      "string"
    ],
    "display": "string",
    "id_token_hint_claims": {
      "property1": null,
      "property2": null
    },
    "login_hint": "string",
    "ui_locales": [
      "string"
    ]
  },
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ],
  "session_id": "string",
  "skip": true,
  "subject": "string"
}
```

> 410 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="get-oauth-20-login-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2LoginRequest|[oAuth2LoginRequest](#schemaoauth2loginrequest)|
|410|Gone|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Accept OAuth 2.0 Login Request

<a id="opIdacceptOAuth2LoginRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/login/accept?login_challenge=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acr": "string",
    "amr": [
      "string"
    ],
    "context": null,
    "extend_session_lifespan": true,
    "force_subject_identifier": "string",
    "identity_provider_session_id": "string",
    "remember": true,
    "remember_for": 0,
    "subject": "string"
  }'
```

`PUT /admin/oauth2/auth/requests/login/accept`

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider
to authenticate the subject and then tell the Ory OAuth2 Service about it.

The authentication challenge is appended to the login provider URL to which the subject's user-agent (browser) is redirected to. The login
provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.

This endpoint tells Ory that the subject has successfully authenticated and includes additional information such as
the subject's ID and if Ory should remember the subject's subject agent for future authentication attempts by setting
a cookie.

The response contains a redirect URL which the login provider should redirect the user-agent to.

> Body parameter

```json
{
  "acr": "string",
  "amr": [
    "string"
  ],
  "context": null,
  "extend_session_lifespan": true,
  "force_subject_identifier": "string",
  "identity_provider_session_id": "string",
  "remember": true,
  "remember_for": 0,
  "subject": "string"
}
```

<h3 id="accept-oauth-20-login-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login_challenge|query|string|true|OAuth 2.0 Login Request Challenge|
|body|body|[acceptOAuth2LoginRequest](#schemaacceptoauth2loginrequest)|false|none|
|» acr|body|string|false|ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it<br>to express that, for example, a user authenticated using two-factor authentication.|
|» amr|body|[string]|false|AMR sets the Authentication Methods References value for this<br>authentication session. You can use it to specify the method a user used to<br>authenticate. For example, if the acr indicates a user used two-factor<br>authentication, the amr can express they used a software-secured key.|
|» context|body|[JSONRawMessage](#schemajsonrawmessage)|false|none|
|» extend_session_lifespan|body|boolean|false|Extend OAuth2 authentication session lifespan<br><br>If set to `true`, the OAuth2 authentication cookie lifespan is extended. This is for example useful if you want the user to be able to use `prompt=none` continuously.<br><br>This value can only be set to `true` if the user has an authentication, which is the case if the `skip` value is `true`.|
|» force_subject_identifier|body|string|false|ForceSubjectIdentifier forces the "pairwise" user ID of the end-user that authenticated. The "pairwise" user ID refers to the<br>(Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg] of the OpenID<br>Connect specification. It allows you to set an obfuscated subject ("user") identifier that is unique to the client.<br><br>Please note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token. It does not change the<br>sub claim in the OAuth 2.0 Introspection.<br><br>Per default, ORY Hydra handles this value with its own algorithm. In case you want to set this yourself<br>you can use this field. Please note that setting this field has no effect if `pairwise` is not configured in<br>ORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via `subject_type` key in the client's<br>configuration).<br><br>Please also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies<br>that you have to compute this value on every authentication process (probably depending on the client ID or some<br>other unique value).<br><br>If you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.|
|» identity_provider_session_id|body|string|false|IdentityProviderSessionID is the session ID of the end-user that authenticated.<br>If specified, we will use this value to propagate the logout.|
|» remember|body|boolean|false|Remember, if set to true, tells Ory Hydra to remember this user by telling the user agent (browser) to store<br>a cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, they<br>will not be asked to log in again.|
|» remember_for|body|integer(int64)|false|RememberFor sets how long the authentication should be remembered for in seconds. If set to `0`, the<br>authorization will be remembered for the duration of the browser session (using a session cookie).|
|» subject|body|string|true|Subject is the user ID of the end-user that authenticated.|

> Example responses

> 200 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="accept-oauth-20-login-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Reject OAuth 2.0 Login Request

<a id="opIdrejectOAuth2LoginRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/login/reject?login_challenge=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": "string",
    "error_debug": "string",
    "error_description": "string",
    "error_hint": "string",
    "status_code": 0
  }'
```

`PUT /admin/oauth2/auth/requests/login/reject`

When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider
to authenticate the subject and then tell the Ory OAuth2 Service about it.

The authentication challenge is appended to the login provider URL to which the subject's user-agent (browser) is redirected to. The login
provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.

This endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication
was denied.

The response contains a redirect URL which the login provider should redirect the user-agent to.

> Body parameter

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "string",
  "status_code": 0
}
```

<h3 id="reject-oauth-20-login-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|login_challenge|query|string|true|OAuth 2.0 Login Request Challenge|
|body|body|[rejectOAuth2Request](#schemarejectoauth2request)|false|none|
|» error|body|string|false|The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).<br><br>Defaults to `request_denied`.|
|» error_debug|body|string|false|Debug contains information to help resolve the problem as a developer. Usually not exposed<br>to the public but only in the server logs.|
|» error_description|body|string|false|Description of the error in a human readable format.|
|» error_hint|body|string|false|Hint to help resolve the error.|
|» status_code|body|integer(int64)|false|Represents the HTTP status code of the error (e.g. 401 or 403)<br><br>Defaults to 400|

> Example responses

> 200 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="reject-oauth-20-login-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth 2.0 Session Logout Request

<a id="opIdgetOAuth2LogoutRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/logout?logout_challenge=string' \
  -H 'Accept: application/json'
```

`GET /admin/oauth2/auth/requests/logout`

Use this endpoint to fetch an Ory OAuth 2.0 logout request.

<h3 id="get-oauth-20-session-logout-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logout_challenge|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "expires_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "requested_at": "1970-01-01T00:00:00Z",
  "rp_initiated": true,
  "sid": "string",
  "subject": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="get-oauth-20-session-logout-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2LogoutRequest|[oAuth2LogoutRequest](#schemaoauth2logoutrequest)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Accept OAuth 2.0 Session Logout Request

<a id="opIdacceptOAuth2LogoutRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/logout/accept?logout_challenge=string' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/oauth2/auth/requests/logout/accept`

When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.

The response contains a redirect URL which the consent provider should redirect the user-agent to.

<h3 id="accept-oauth-20-session-logout-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logout_challenge|query|string|true|OAuth 2.0 Logout Request Challenge|

> Example responses

> 200 Response

```json
{
  "redirect_to": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="accept-oauth-20-session-logout-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2RedirectTo|[oAuth2RedirectTo](#schemaoauth2redirectto)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Reject OAuth 2.0 Session Logout Request

<a id="opIdrejectOAuth2LogoutRequest"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/requests/logout/reject?logout_challenge=string' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /admin/oauth2/auth/requests/logout/reject`

When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request.
No HTTP request body is required.

The response is empty as the logout provider has to chose what action to perform next.

<h3 id="reject-oauth-20-session-logout-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logout_challenge|query|string|true|none|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="reject-oauth-20-session-logout-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## List OAuth 2.0 Consent Sessions of a Subject

<a id="opIdlistOAuth2ConsentSessions"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/auth/sessions/consent?subject=string' \
  -H 'Accept: application/json'
```

`GET /admin/oauth2/auth/sessions/consent`

This endpoint lists all subject's granted consent sessions, including client and granted scope.
If the subject is unknown or has not granted any consent sessions yet, the endpoint returns an
empty JSON array with status code 200 OK.

<h3 id="list-oauth-20-consent-sessions-of-a-subject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int64)|false|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|subject|query|string|true|The subject to list the consent sessions for.|
|login_session_id|query|string|false|The login session id to list the consent sessions for.|

> Example responses

> 200 Response

```json
[
  {
    "consent_request": {
      "acr": "string",
      "amr": [
        "string"
      ],
      "challenge": "string",
      "client": {
        "access_token_strategy": "string",
        "allowed_cors_origins": [
          "string"
        ],
        "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
        "authorization_code_grant_access_token_lifespan": "string",
        "authorization_code_grant_id_token_lifespan": "string",
        "authorization_code_grant_refresh_token_lifespan": "string",
        "backchannel_logout_session_required": true,
        "backchannel_logout_uri": "string",
        "client_credentials_grant_access_token_lifespan": "string",
        "client_id": "string",
        "client_name": "string",
        "client_secret": "string",
        "client_secret_expires_at": 0,
        "client_uri": "string",
        "contacts": "help@example.org",
        "created_at": "1970-01-01T00:00:00Z",
        "device_authorization_grant_access_token_lifespan": "string",
        "device_authorization_grant_id_token_lifespan": "string",
        "device_authorization_grant_refresh_token_lifespan": "string",
        "frontchannel_logout_session_required": true,
        "frontchannel_logout_uri": "string",
        "grant_types": [
          "string"
        ],
        "implicit_grant_access_token_lifespan": "string",
        "implicit_grant_id_token_lifespan": "string",
        "jwks": {
          "keys": [
            {
              "alg": "RS256",
              "crv": "P-256",
              "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
              "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
              "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
              "e": "AQAB",
              "k": "GawgguFyGrWKav7AX4VKUg",
              "kid": "1603dfe0af8f4596",
              "kty": "RSA",
              "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
              "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
              "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
              "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
              "use": "sig",
              "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
              "x5c": [
                "string"
              ],
              "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
            }
          ]
        },
        "jwks_uri": "string",
        "jwt_bearer_grant_access_token_lifespan": "string",
        "logo_uri": "string",
        "metadata": null,
        "owner": "string",
        "policy_uri": "string",
        "post_logout_redirect_uris": [
          "string"
        ],
        "redirect_uris": "http://mydomain/oauth/callback",
        "refresh_token_grant_access_token_lifespan": "string",
        "refresh_token_grant_id_token_lifespan": "string",
        "refresh_token_grant_refresh_token_lifespan": "string",
        "registration_access_token": "string",
        "registration_client_uri": "string",
        "request_object_signing_alg": "string",
        "request_uris": [
          "string"
        ],
        "response_types": [
          "string"
        ],
        "scope": "scope1 scope-2 scope.3 scope:4",
        "sector_identifier_uri": "string",
        "skip_consent": true,
        "skip_logout_consent": true,
        "subject_type": "string",
        "token_endpoint_auth_method": "client_secret_basic",
        "token_endpoint_auth_signing_alg": "string",
        "tos_uri": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "userinfo_signed_response_alg": "string"
      },
      "consent_request_id": "string",
      "context": null,
      "login_challenge": "string",
      "login_session_id": "string",
      "oidc_context": {
        "acr_values": [
          "string"
        ],
        "display": "string",
        "id_token_hint_claims": {
          "property1": null,
          "property2": null
        },
        "login_hint": "string",
        "ui_locales": [
          "string"
        ]
      },
      "request_url": "string",
      "requested_access_token_audience": [
        "string"
      ],
      "requested_scope": [
        "string"
      ],
      "skip": true,
      "subject": "string"
    },
    "consent_request_id": "string",
    "context": null,
    "grant_access_token_audience": [
      "string"
    ],
    "grant_scope": [
      "string"
    ],
    "handled_at": "1970-01-01T00:00:00Z",
    "remember": true,
    "remember_for": 0,
    "session": {
      "access_token": null,
      "id_token": null
    }
  }
]
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="list-oauth-20-consent-sessions-of-a-subject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2ConsentSessions|[oAuth2ConsentSessions](#schemaoauth2consentsessions)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke OAuth 2.0 Consent Sessions of a Subject

<a id="opIdrevokeOAuth2ConsentSessions"></a>

> Code samples

```bash
curl http://localhost:4445/admin/oauth2/auth/sessions/consent \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/oauth2/auth/sessions/consent`

This endpoint revokes a subject's granted consent sessions and invalidates all
associated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.

<h3 id="revoke-oauth-20-consent-sessions-of-a-subject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|string|false|OAuth 2.0 Consent Subject<br><br>The subject whose consent sessions should be deleted.|
|client|query|string|false|OAuth 2.0 Client ID<br><br>If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID.|
|consent_request_id|query|string|false|Consent Request ID<br><br>If set, revoke all token chains derived from this particular consent request ID.|
|all|query|boolean|false|Revoke All Consent Sessions<br><br>If set to `true` deletes all consent sessions by the Subject that have been granted.|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="revoke-oauth-20-consent-sessions-of-a-subject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID

<a id="opIdrevokeOAuth2LoginSessions"></a>

> Code samples

```bash
curl http://localhost:4445/admin/oauth2/auth/sessions/login \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/oauth2/auth/sessions/login`

This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject
has to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.

If you send the subject in a query param, all authentication sessions that belong to that subject are revoked.
No OpenID Connect Front- or Back-channel logout is performed in this case.

Alternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected
to that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.

When using Ory for the identity provider, the login provider will also invalidate the session cookie.

<h3 id="revokes-oauth-20-login-sessions-by-either-a-subject-or-a-sessionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|string|false|OAuth 2.0 Subject<br><br>The subject to revoke authentication sessions for.|
|sid|query|string|false|Login Session ID<br><br>The login session to revoke.|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="revokes-oauth-20-login-sessions-by-either-a-subject-or-a-sessionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Introspect OAuth2 Access and Refresh Tokens

<a id="opIdintrospectOAuth2Token"></a>

> Code samples

```bash
curl http://localhost:4445/admin/oauth2/introspect \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'scope=string&token=string'
```

`POST /admin/oauth2/introspect`

The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token
is neither expired nor revoked. If a token is active, additional information on the token will be included. You can
set additional data for a token by setting `session.access_token` during the consent flow.

> Body parameter

```yaml
scope: string
token: string
```

<h3 id="introspect-oauth2-access-and-refresh-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» scope|body|string|false|An optional, space separated list of required scopes. If the access token was not granted one of the<br>scopes, the result of active will be false.|
|» token|body|string|true|The string value of the token. For access tokens, this<br>is the "access_token" value returned from the token endpoint<br>defined in OAuth 2.0. For refresh tokens, this is the "refresh_token"<br>value returned.|

> Example responses

> 200 Response

```json
{
  "active": true,
  "aud": [
    "string"
  ],
  "client_id": "string",
  "exp": 0,
  "ext": {
    "property1": null,
    "property2": null
  },
  "iat": 0,
  "iss": "string",
  "nbf": 0,
  "obfuscated_subject": "string",
  "scope": "string",
  "sub": "string",
  "token_type": "string",
  "token_use": "string",
  "username": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="introspect-oauth2-access-and-refresh-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|introspectedOAuth2Token|[introspectedOAuth2Token](#schemaintrospectedoauth2token)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client

<a id="opIddeleteOAuth2Token"></a>

> Code samples

```bash
curl 'http://localhost:4445/admin/oauth2/tokens?client_id=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/oauth2/tokens`

This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.

<h3 id="delete-oauth-20-access-tokens-from-specific-oauth-20-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|OAuth 2.0 Client ID|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="delete-oauth-20-access-tokens-from-specific-oauth-20-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## List Trusted OAuth2 JWT Bearer Grant Type Issuers

<a id="opIdlistTrustedOAuth2JwtGrantIssuers"></a>

> Code samples

```bash
curl http://localhost:4445/admin/trust/grants/jwt-bearer/issuers \
  -H 'Accept: application/json'
```

`GET /admin/trust/grants/jwt-bearer/issuers`

Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.

<h3 id="list-trusted-oauth2-jwt-bearer-grant-type-issuers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int64)|false|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|query|string|false|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|issuer|query|string|false|If optional "issuer" is supplied, only jwt-bearer grants with this issuer will be returned.|

> Example responses

> 200 Response

```json
[
  {
    "allow_any_subject": true,
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "9edc811f-4e28-453c-9b46-4de65f00217f",
    "issuer": "https://jwt-idp.example.com",
    "public_key": {
      "kid": "123e4567-e89b-12d3-a456-426655440000",
      "set": "https://jwt-idp.example.com"
    },
    "scope": [
      "openid",
      "offline"
    ],
    "subject": "mike@example.com"
  }
]
```

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="list-trusted-oauth2-jwt-bearer-grant-type-issuers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|trustedOAuth2JwtGrantIssuers|[trustedOAuth2JwtGrantIssuers](#schematrustedoauth2jwtgrantissuers)|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Trust OAuth2 JWT Bearer Grant Type Issuer

<a id="opIdtrustOAuth2JwtGrantIssuer"></a>

> Code samples

```bash
curl http://localhost:4445/admin/trust/grants/jwt-bearer/issuers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_any_subject": true,
    "expires_at": "1970-01-01T00:00:00Z",
    "issuer": "https://jwt-idp.example.com",
    "jwk": {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    },
    "scope": [
      "openid",
      "offline"
    ],
    "subject": "mike@example.com"
  }'
```

`POST /admin/trust/grants/jwt-bearer/issuers`

Use this endpoint to establish a trust relationship for a JWT issuer
to perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication
and Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).

> Body parameter

```json
{
  "allow_any_subject": true,
  "expires_at": "1970-01-01T00:00:00Z",
  "issuer": "https://jwt-idp.example.com",
  "jwk": {
    "alg": "RS256",
    "crv": "P-256",
    "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
    "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
    "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
    "e": "AQAB",
    "k": "GawgguFyGrWKav7AX4VKUg",
    "kid": "1603dfe0af8f4596",
    "kty": "RSA",
    "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
    "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
    "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
    "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
    "use": "sig",
    "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "x5c": [
      "string"
    ],
    "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
  },
  "scope": [
    "openid",
    "offline"
  ],
  "subject": "mike@example.com"
}
```

<h3 id="trust-oauth2-jwt-bearer-grant-type-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[trustOAuth2JwtGrantIssuer](#schematrustoauth2jwtgrantissuer)|false|none|
|» allow_any_subject|body|boolean|false|The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.|
|» expires_at|body|string(date-time)|true|The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".|
|» issuer|body|string|true|The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).|
|» jwk|body|[jsonWebKey](#schemajsonwebkey)|true|none|
|» scope|body|[string]|true|The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])|
|» subject|body|string|false|The "subject" identifies the principal that is the subject of the JWT.|

> Example responses

> 201 Response

```json
{
  "allow_any_subject": true,
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "9edc811f-4e28-453c-9b46-4de65f00217f",
  "issuer": "https://jwt-idp.example.com",
  "public_key": {
    "kid": "123e4567-e89b-12d3-a456-426655440000",
    "set": "https://jwt-idp.example.com"
  },
  "scope": [
    "openid",
    "offline"
  ],
  "subject": "mike@example.com"
}
```

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="trust-oauth2-jwt-bearer-grant-type-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|trustedOAuth2JwtGrantIssuer|[trustedOAuth2JwtGrantIssuer](#schematrustedoauth2jwtgrantissuer)|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Trusted OAuth2 JWT Bearer Grant Type Issuer

<a id="opIdgetTrustedOAuth2JwtGrantIssuer"></a>

> Code samples

```bash
curl http://localhost:4445/admin/trust/grants/jwt-bearer/issuers/string \
  -H 'Accept: application/json'
```

`GET /admin/trust/grants/jwt-bearer/issuers/{id}`

Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you
created the trust relationship.

<h3 id="get-trusted-oauth2-jwt-bearer-grant-type-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the desired grant|

> Example responses

> 200 Response

```json
{
  "allow_any_subject": true,
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "9edc811f-4e28-453c-9b46-4de65f00217f",
  "issuer": "https://jwt-idp.example.com",
  "public_key": {
    "kid": "123e4567-e89b-12d3-a456-426655440000",
    "set": "https://jwt-idp.example.com"
  },
  "scope": [
    "openid",
    "offline"
  ],
  "subject": "mike@example.com"
}
```

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="get-trusted-oauth2-jwt-bearer-grant-type-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|trustedOAuth2JwtGrantIssuer|[trustedOAuth2JwtGrantIssuer](#schematrustedoauth2jwtgrantissuer)|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Trusted OAuth2 JWT Bearer Grant Type Issuer

<a id="opIddeleteTrustedOAuth2JwtGrantIssuer"></a>

> Code samples

```bash
curl http://localhost:4445/admin/trust/grants/jwt-bearer/issuers/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/trust/grants/jwt-bearer/issuers/{id}`

Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you
created the trust relationship.

Once deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile
for OAuth 2.0 Client Authentication and Authorization Grant.

<h3 id="delete-trusted-oauth2-jwt-bearer-grant-type-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the desired grant|

> Example responses

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="delete-trusted-oauth2-jwt-bearer-grant-type-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth 2.0 Authorize Endpoint

<a id="opIdoAuth2Authorize"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/auth \
  -H 'Accept: application/json'
```

`GET /oauth2/auth`

Use open source libraries to perform OAuth 2.0 and OpenID Connect
available for any programming language. You can find a list of libraries at https://oauth.net/code/

This endpoint should not be used via the Ory SDK and is only included for technical reasons.
Instead, use one of the libraries linked above.

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="oauth-20-authorize-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## The OAuth 2.0 Device Authorize Endpoint

<a id="opIdoAuth2DeviceFlow"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/device/auth \
  -X POST \
  -H 'Accept: application/json'
```

`POST /oauth2/device/auth`

This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows.
OAuth2 is a very popular protocol and a library for your programming language will exist.

To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc8628

> Example responses

> 200 Response

```json
{
  "device_code": "ory_dc_smldfksmdfkl.mslkmlkmlk",
  "expires_in": 16830,
  "interval": 5,
  "user_code": "AAAAAA",
  "verification_uri": "https://auth.ory.sh/tv",
  "verification_uri_complete": "https://auth.ory.sh/tv?user_code=AAAAAA"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="the-oauth-20-device-authorize-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deviceAuthorization|[deviceAuthorization](#schemadeviceauthorization)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth 2.0 Device Verification Endpoint

<a id="opIdperformOAuth2DeviceVerificationFlow"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/device/verify \
  -H 'Accept: application/json'
```

`GET /oauth2/device/verify`

This is the device user verification endpoint. The user is redirected here when trying to log in using the device flow.

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="oauth-20-device-verification-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke OAuth 2.0 Access or Refresh Token

<a id="opIdrevokeOAuth2Token"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/revoke \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'client_id=string&client_secret=string&token=string'
```

`POST /oauth2/revoke`

Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no
longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token.
Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by
the client the token was generated for.

> Body parameter

```yaml
client_id: string
client_secret: string
token: string
```

<h3 id="revoke-oauth-20-access-or-refresh-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» token|body|string|true|none|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="revoke-oauth-20-access-or-refresh-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, oauth2
</aside>

## The OAuth 2.0 Token Endpoint

<a id="opIdoauth2TokenExchange"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'client_id=string&code=string&grant_type=string&redirect_uri=string&refresh_token=string'
```

`POST /oauth2/token`

Use open source libraries to perform OAuth 2.0 and OpenID Connect
available for any programming language. You can find a list of libraries here https://oauth.net/code/

This endpoint should not be used via the Ory SDK and is only included for technical reasons.
Instead, use one of the libraries linked above.

> Body parameter

```yaml
client_id: string
code: string
grant_type: string
redirect_uri: string
refresh_token: string
```

<h3 id="the-oauth-20-token-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» code|body|string|false|none|
|» grant_type|body|string|true|none|
|» redirect_uri|body|string|false|none|
|» refresh_token|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "expires_in": 0,
  "id_token": "string",
  "refresh_token": "string",
  "scope": "string",
  "token_type": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="the-oauth-20-token-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2TokenExchange|[oAuth2TokenExchange](#schemaoauth2tokenexchange)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, oauth2
</aside>

<h1 id="ory-hydra-api-oidc">oidc</h1>

OpenID Connect

## OpenID Connect Discovery

<a id="opIddiscoverOidcConfiguration"></a>

> Code samples

```bash
curl http://localhost:4445/.well-known/openid-configuration \
  -H 'Accept: application/json'
```

`GET /.well-known/openid-configuration`

A mechanism for an OpenID Connect Relying Party to discover the End-User's OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.

Popular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others.
For a full list of clients go here: https://openid.net/developers/certified/

> Example responses

> 200 Response

```json
{
  "authorization_endpoint": "https://playground.ory.sh/ory-hydra/public/oauth2/auth",
  "backchannel_logout_session_supported": true,
  "backchannel_logout_supported": true,
  "claims_parameter_supported": true,
  "claims_supported": [
    "string"
  ],
  "code_challenge_methods_supported": [
    "string"
  ],
  "credentials_endpoint_draft_00": "string",
  "credentials_supported_draft_00": [
    {
      "cryptographic_binding_methods_supported": [
        "string"
      ],
      "cryptographic_suites_supported": [
        "string"
      ],
      "format": "string",
      "types": [
        "string"
      ]
    }
  ],
  "device_authorization_endpoint": "https://playground.ory.sh/ory-hydra/public/oauth2/device/oauth",
  "end_session_endpoint": "string",
  "frontchannel_logout_session_supported": true,
  "frontchannel_logout_supported": true,
  "grant_types_supported": [
    "string"
  ],
  "id_token_signed_response_alg": [
    "string"
  ],
  "id_token_signing_alg_values_supported": [
    "string"
  ],
  "issuer": "https://playground.ory.sh/ory-hydra/public/",
  "jwks_uri": "https://{slug}.projects.oryapis.com/.well-known/jwks.json",
  "registration_endpoint": "https://playground.ory.sh/ory-hydra/admin/client",
  "request_object_signing_alg_values_supported": [
    "string"
  ],
  "request_parameter_supported": true,
  "request_uri_parameter_supported": true,
  "require_request_uri_registration": true,
  "response_modes_supported": [
    "string"
  ],
  "response_types_supported": [
    "string"
  ],
  "revocation_endpoint": "string",
  "scopes_supported": [
    "string"
  ],
  "subject_types_supported": [
    "string"
  ],
  "token_endpoint": "https://playground.ory.sh/ory-hydra/public/oauth2/token",
  "token_endpoint_auth_methods_supported": [
    "string"
  ],
  "userinfo_endpoint": "string",
  "userinfo_signed_response_alg": [
    "string"
  ],
  "userinfo_signing_alg_values_supported": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="openid-connect-discovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oidcConfiguration|[oidcConfiguration](#schemaoidcconfiguration)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Issues a Verifiable Credential

<a id="opIdcreateVerifiableCredential"></a>

> Code samples

```bash
curl http://localhost:4445/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "format": "string",
    "proof": {
      "jwt": "string",
      "proof_type": "string"
    },
    "types": [
      "string"
    ]
  }'
```

`POST /credentials`

This endpoint creates a verifiable credential that attests that the user
authenticated with the provided access token owns a certain public/private key
pair.

More information can be found at
https://openid.net/specs/openid-connect-userinfo-vc-1_0.html.

> Body parameter

```json
{
  "format": "string",
  "proof": {
    "jwt": "string",
    "proof_type": "string"
  },
  "types": [
    "string"
  ]
}
```

<h3 id="issues-a-verifiable-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateVerifiableCredentialRequestBody](#schemacreateverifiablecredentialrequestbody)|false|none|
|» format|body|string|false|none|
|» proof|body|[VerifiableCredentialProof](#schemaverifiablecredentialproof)|false|none|
|» types|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "credential_draft_00": "string",
  "format": "string"
}
```

> 400 Response

```json
{
  "c_nonce": "string",
  "c_nonce_expires_in": 0,
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "string",
  "format": "string",
  "status_code": 0
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="issues-a-verifiable-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|verifiableCredentialResponse|[verifiableCredentialResponse](#schemaverifiablecredentialresponse)|
|400|Bad Request|verifiableCredentialPrimingResponse|[verifiableCredentialPrimingResponse](#schemaverifiablecredentialprimingresponse)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Register OAuth2 Client using OpenID Dynamic Client Registration

<a id="opIdcreateOidcDynamicClient"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  }'
```

`POST /oauth2/register`

This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the
public internet directly and can be used in self-service. It implements the OpenID Connect
Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint
is disabled by default. It can be enabled by an administrator.

Please note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those
values will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or
`client_secret_post`.

The `client_secret` will be returned in the response and you will not be able to retrieve it later on.
Write the secret down and keep it somewhere safe.

> Body parameter

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

<h3 id="register-oauth2-client-using-openid-dynamic-client-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[oAuth2Client](#schemaoauth2client)|true|Dynamic Client Registration Request Body|
|» access_token_strategy|body|string|false|OAuth 2.0 Access Token Strategy<br><br>AccessTokenStrategy is the strategy used to generate access tokens.<br>Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.com/docs/oauth2-oidc/jwt-access-token<br>Setting the strategy here overrides the global setting in `strategies.access_token`.|
|» allowed_cors_origins|body|[string]|false|OAuth 2.0 Client Allowed CORS Origins<br><br>One or more URLs (scheme://host[:port]) which are allowed to make CORS requests<br>to the /oauth/token endpoint. If this array is empty, the server's CORS origin configuration (`CORS_ALLOWED_ORIGINS`)<br>will be used instead. If this array is set, the allowed origins are appended to the server's CORS origin configuration.<br>Be aware that environment variable `CORS_ENABLED` MUST be set to `true` for this to work.|
|» audience|body|[string]|false|OAuth 2.0 Client Audience<br><br>An allow-list defining the audiences this client is allowed to request tokens for. An audience limits<br>the applicability of an OAuth 2.0 Access Token to, for example, certain API endpoints. The value is a list<br>of URLs. URLs MUST NOT contain whitespaces.|
|» authorization_code_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» backchannel_logout_session_required|body|boolean|false|OpenID Connect Back-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout<br>Token to identify the RP session with the OP when the backchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» backchannel_logout_uri|body|string|false|OpenID Connect Back-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.|
|» client_credentials_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» client_id|body|string|false|OAuth 2.0 Client ID<br><br>The ID is immutable. If no ID is provided, a UUID4 will be generated.|
|» client_name|body|string|false|OAuth 2.0 Client Name<br><br>The human-readable name of the client to be presented to the<br>end-user during authorization.|
|» client_secret|body|string|false|OAuth 2.0 Client Secret<br><br>The secret will be included in the create request as cleartext, and then<br>never again. The secret is kept in hashed format and is not recoverable once lost.|
|» client_secret_expires_at|body|integer(int64)|false|OAuth 2.0 Client Secret Expires At<br><br>The field is currently not supported and its value is always 0.|
|» client_uri|body|string|false|OAuth 2.0 Client URI<br><br>ClientURI is a URL string of a web page providing information about the client.<br>If present, the server SHOULD display this URL to the end-user in<br>a clickable fashion.|
|» contacts|body|[string]|false|OAuth 2.0 Client Contact<br><br>An array of strings representing ways to contact people responsible<br>for this client, typically email addresses.|
|» created_at|body|string(date-time)|false|OAuth 2.0 Client Creation Date<br><br>CreatedAt returns the timestamp of the client's creation.|
|» device_authorization_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» frontchannel_logout_session_required|body|boolean|false|OpenID Connect Front-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be<br>included to identify the RP session with the OP when the frontchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» frontchannel_logout_uri|body|string|false|OpenID Connect Front-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query<br>parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the<br>request and to determine which of the potentially multiple sessions is to be logged out; if either is<br>included, both MUST be.|
|» grant_types|body|[string]|false|OAuth 2.0 Client Grant Types<br><br>An array of OAuth 2.0 grant types the client is allowed to use. Can be one<br>of:<br><br>Client Credentials Grant: `client_credentials`<br>Authorization Code Grant: `authorization_code`<br>OpenID Connect Implicit Grant (deprecated!): `implicit`<br>Refresh Token Grant: `refresh_token`<br>OAuth 2.0 Token Exchange: `urn:ietf:params:oauth:grant-type:jwt-bearer`<br>OAuth 2.0 Device Code Grant: `urn:ietf:params:oauth:grant-type:device_code`|
|» implicit_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» implicit_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» jwks|body|[jsonWebKeySet](#schemajsonwebkeyset)|false|JSON Web Key Set|
|» jwks_uri|body|string|false|OAuth 2.0 Client JSON Web Key Set URL<br><br>URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains<br>the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the<br>Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing<br>and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced<br>JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both<br>signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used<br>to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST<br>match those in the certificate.|
|» jwt_bearer_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» logo_uri|body|string|false|OAuth 2.0 Client Logo URI<br><br>A URL string referencing the client's logo.|
|» metadata|body|[JSONRawMessage](#schemajsonrawmessage)|false|none|
|» owner|body|string|false|OAuth 2.0 Client Owner<br><br>Owner is a string identifying the owner of the OAuth 2.0 Client.|
|» policy_uri|body|string|false|OAuth 2.0 Client Policy URI<br><br>PolicyURI is a URL string that points to a human-readable privacy policy document<br>that describes how the deployment organization collects, uses,<br>retains, and discloses personal data.|
|» post_logout_redirect_uris|body|[string]|false|Allowed Post-Redirect Logout URIs<br><br>Array of URLs supplied by the RP to which it MAY request that the End-User's User Agent be redirected using the<br>post_logout_redirect_uri parameter after a logout has been performed.|
|» redirect_uris|body|[string]|false|OAuth 2.0 Client Redirect URIs<br><br>RedirectURIs is an array of allowed redirect urls for the client.|
|» refresh_token_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» registration_access_token|body|string|false|OpenID Connect Dynamic Client Registration Access Token<br><br>RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client<br>using Dynamic Client Registration.|
|» registration_client_uri|body|string|false|OpenID Connect Dynamic Client Registration URL<br><br>RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.|
|» request_object_signing_alg|body|string|false|OpenID Connect Request Object Signing Algorithm<br><br>JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects<br>from this Client MUST be rejected, if not signed with this algorithm.|
|» request_uris|body|[string]|false|OpenID Connect Request URIs<br><br>Array of request_uri values that are pre-registered by the RP for use at the OP. Servers MAY cache the<br>contents of the files referenced by these URIs and not retrieve them at the time they are used in a request.<br>OPs can require that request_uri values used be pre-registered with the require_request_uri_registration<br>discovery parameter.|
|» response_types|body|[string]|false|OAuth 2.0 Client Response Types<br><br>An array of the OAuth 2.0 response type strings that the client can<br>use at the authorization endpoint. Possible values are:<br><br>`code` for Authorization Code Grant.<br>`token` or `id_token` or `token id_token` for OpenID Connect Implicit Grant (not recommended).<br>`code token` or `code id_token` or `code token id_token` for OpenID Connect Hybrid Flow (not recommended).|
|» scope|body|string|false|OAuth 2.0 Client Scope<br><br>Scope is a string containing a space-separated list of scope values (as<br>described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client<br>can use when requesting access tokens.|
|» sector_identifier_uri|body|string|false|OpenID Connect Sector Identifier URI<br><br>URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a<br>file with a single JSON array of redirect_uri values.|
|» skip_consent|body|boolean|false|SkipConsent skips the consent screen for this client. This field can only<br>be set from the admin API.|
|» skip_logout_consent|body|boolean|false|SkipLogoutConsent skips the logout consent screen for this client. This field can only<br>be set from the admin API.|
|» subject_type|body|string|false|OpenID Connect Subject Type<br><br>The `subject_types_supported` Discovery parameter contains a<br>list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.|
|» token_endpoint_auth_method|body|string|false|OAuth 2.0 Token Endpoint Authentication Method<br><br>Requested Client Authentication method for the Token Endpoint. The options are:<br><br>`client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header.<br>`client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body.<br>`private_key_jwt`: Use JSON Web Tokens to authenticate the client.<br>`none`: Used for public clients (native apps, mobile apps) which can not have secrets.|
|» token_endpoint_auth_signing_alg|body|string|false|OAuth 2.0 Token Endpoint Signing Algorithm<br><br>Requested Client Authentication signing algorithm for the Token Endpoint.|
|» tos_uri|body|string|false|OAuth 2.0 Client Terms of Service URI<br><br>A URL string pointing to a human-readable terms of service<br>document for the client that describes a contractual relationship<br>between the end-user and the client that the end-user accepts when<br>authorizing the client.|
|» updated_at|body|string(date-time)|false|OAuth 2.0 Client Last Update Date<br><br>UpdatedAt returns the timestamp of the last update.|
|» userinfo_signed_response_alg|body|string|false|OpenID Connect Request Userinfo Signed Response Algorithm<br><br>JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT<br>[JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims<br>as a UTF-8 encoded JSON object using the application/json content-type.|

> Example responses

> 201 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="register-oauth2-client-using-openid-dynamic-client-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|400|Bad Request|Bad Request Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth2 Client using OpenID Dynamic Client Registration

<a id="opIdgetOidcDynamicClient"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/register/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/register/{id}`

This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the
public internet directly and can be used in self-service. It implements the OpenID Connect
Dynamic Client Registration Protocol.

To use this endpoint, you will need to present the client's authentication credentials. If the OAuth2 Client
uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query.
If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.

<h3 id="get-oauth2-client-using-openid-dynamic-client-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the OAuth 2.0 Client.|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="get-oauth2-client-using-openid-dynamic-client-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Set OAuth2 Client using OpenID Dynamic Client Registration

<a id="opIdsetOidcDynamicClient"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/register/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  }'
```

`PUT /oauth2/register/{id}`

This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the
public internet directly to be used by third parties. It implements the OpenID Connect
Dynamic Client Registration Protocol.

This feature is disabled per default. It can be enabled by a system administrator.

If you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response.
It is not possible to retrieve it later on.

To use this endpoint, you will need to present the client's authentication credentials. If the OAuth2 Client
uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query.
If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.

OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

> Body parameter

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

<h3 id="set-oauth2-client-using-openid-dynamic-client-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|OAuth 2.0 Client ID|
|body|body|[oAuth2Client](#schemaoauth2client)|true|OAuth 2.0 Client Request Body|
|» access_token_strategy|body|string|false|OAuth 2.0 Access Token Strategy<br><br>AccessTokenStrategy is the strategy used to generate access tokens.<br>Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.com/docs/oauth2-oidc/jwt-access-token<br>Setting the strategy here overrides the global setting in `strategies.access_token`.|
|» allowed_cors_origins|body|[string]|false|OAuth 2.0 Client Allowed CORS Origins<br><br>One or more URLs (scheme://host[:port]) which are allowed to make CORS requests<br>to the /oauth/token endpoint. If this array is empty, the server's CORS origin configuration (`CORS_ALLOWED_ORIGINS`)<br>will be used instead. If this array is set, the allowed origins are appended to the server's CORS origin configuration.<br>Be aware that environment variable `CORS_ENABLED` MUST be set to `true` for this to work.|
|» audience|body|[string]|false|OAuth 2.0 Client Audience<br><br>An allow-list defining the audiences this client is allowed to request tokens for. An audience limits<br>the applicability of an OAuth 2.0 Access Token to, for example, certain API endpoints. The value is a list<br>of URLs. URLs MUST NOT contain whitespaces.|
|» authorization_code_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» authorization_code_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» backchannel_logout_session_required|body|boolean|false|OpenID Connect Back-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout<br>Token to identify the RP session with the OP when the backchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» backchannel_logout_uri|body|string|false|OpenID Connect Back-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.|
|» client_credentials_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» client_id|body|string|false|OAuth 2.0 Client ID<br><br>The ID is immutable. If no ID is provided, a UUID4 will be generated.|
|» client_name|body|string|false|OAuth 2.0 Client Name<br><br>The human-readable name of the client to be presented to the<br>end-user during authorization.|
|» client_secret|body|string|false|OAuth 2.0 Client Secret<br><br>The secret will be included in the create request as cleartext, and then<br>never again. The secret is kept in hashed format and is not recoverable once lost.|
|» client_secret_expires_at|body|integer(int64)|false|OAuth 2.0 Client Secret Expires At<br><br>The field is currently not supported and its value is always 0.|
|» client_uri|body|string|false|OAuth 2.0 Client URI<br><br>ClientURI is a URL string of a web page providing information about the client.<br>If present, the server SHOULD display this URL to the end-user in<br>a clickable fashion.|
|» contacts|body|[string]|false|OAuth 2.0 Client Contact<br><br>An array of strings representing ways to contact people responsible<br>for this client, typically email addresses.|
|» created_at|body|string(date-time)|false|OAuth 2.0 Client Creation Date<br><br>CreatedAt returns the timestamp of the client's creation.|
|» device_authorization_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» device_authorization_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» frontchannel_logout_session_required|body|boolean|false|OpenID Connect Front-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be<br>included to identify the RP session with the OP when the frontchannel_logout_uri is used.<br>If omitted, the default value is false.|
|» frontchannel_logout_uri|body|string|false|OpenID Connect Front-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query<br>parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the<br>request and to determine which of the potentially multiple sessions is to be logged out; if either is<br>included, both MUST be.|
|» grant_types|body|[string]|false|OAuth 2.0 Client Grant Types<br><br>An array of OAuth 2.0 grant types the client is allowed to use. Can be one<br>of:<br><br>Client Credentials Grant: `client_credentials`<br>Authorization Code Grant: `authorization_code`<br>OpenID Connect Implicit Grant (deprecated!): `implicit`<br>Refresh Token Grant: `refresh_token`<br>OAuth 2.0 Token Exchange: `urn:ietf:params:oauth:grant-type:jwt-bearer`<br>OAuth 2.0 Device Code Grant: `urn:ietf:params:oauth:grant-type:device_code`|
|» implicit_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» implicit_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» jwks|body|[jsonWebKeySet](#schemajsonwebkeyset)|false|JSON Web Key Set|
|» jwks_uri|body|string|false|OAuth 2.0 Client JSON Web Key Set URL<br><br>URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains<br>the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the<br>Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing<br>and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced<br>JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both<br>signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used<br>to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST<br>match those in the certificate.|
|» jwt_bearer_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» logo_uri|body|string|false|OAuth 2.0 Client Logo URI<br><br>A URL string referencing the client's logo.|
|» metadata|body|[JSONRawMessage](#schemajsonrawmessage)|false|none|
|» owner|body|string|false|OAuth 2.0 Client Owner<br><br>Owner is a string identifying the owner of the OAuth 2.0 Client.|
|» policy_uri|body|string|false|OAuth 2.0 Client Policy URI<br><br>PolicyURI is a URL string that points to a human-readable privacy policy document<br>that describes how the deployment organization collects, uses,<br>retains, and discloses personal data.|
|» post_logout_redirect_uris|body|[string]|false|Allowed Post-Redirect Logout URIs<br><br>Array of URLs supplied by the RP to which it MAY request that the End-User's User Agent be redirected using the<br>post_logout_redirect_uri parameter after a logout has been performed.|
|» redirect_uris|body|[string]|false|OAuth 2.0 Client Redirect URIs<br><br>RedirectURIs is an array of allowed redirect urls for the client.|
|» refresh_token_grant_access_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_id_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» refresh_token_grant_refresh_token_lifespan|body|[NullDuration](#schemanullduration)|false|Specify a time duration in milliseconds, seconds, minutes, hours.|
|» registration_access_token|body|string|false|OpenID Connect Dynamic Client Registration Access Token<br><br>RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client<br>using Dynamic Client Registration.|
|» registration_client_uri|body|string|false|OpenID Connect Dynamic Client Registration URL<br><br>RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.|
|» request_object_signing_alg|body|string|false|OpenID Connect Request Object Signing Algorithm<br><br>JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects<br>from this Client MUST be rejected, if not signed with this algorithm.|
|» request_uris|body|[string]|false|OpenID Connect Request URIs<br><br>Array of request_uri values that are pre-registered by the RP for use at the OP. Servers MAY cache the<br>contents of the files referenced by these URIs and not retrieve them at the time they are used in a request.<br>OPs can require that request_uri values used be pre-registered with the require_request_uri_registration<br>discovery parameter.|
|» response_types|body|[string]|false|OAuth 2.0 Client Response Types<br><br>An array of the OAuth 2.0 response type strings that the client can<br>use at the authorization endpoint. Possible values are:<br><br>`code` for Authorization Code Grant.<br>`token` or `id_token` or `token id_token` for OpenID Connect Implicit Grant (not recommended).<br>`code token` or `code id_token` or `code token id_token` for OpenID Connect Hybrid Flow (not recommended).|
|» scope|body|string|false|OAuth 2.0 Client Scope<br><br>Scope is a string containing a space-separated list of scope values (as<br>described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client<br>can use when requesting access tokens.|
|» sector_identifier_uri|body|string|false|OpenID Connect Sector Identifier URI<br><br>URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a<br>file with a single JSON array of redirect_uri values.|
|» skip_consent|body|boolean|false|SkipConsent skips the consent screen for this client. This field can only<br>be set from the admin API.|
|» skip_logout_consent|body|boolean|false|SkipLogoutConsent skips the logout consent screen for this client. This field can only<br>be set from the admin API.|
|» subject_type|body|string|false|OpenID Connect Subject Type<br><br>The `subject_types_supported` Discovery parameter contains a<br>list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.|
|» token_endpoint_auth_method|body|string|false|OAuth 2.0 Token Endpoint Authentication Method<br><br>Requested Client Authentication method for the Token Endpoint. The options are:<br><br>`client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header.<br>`client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body.<br>`private_key_jwt`: Use JSON Web Tokens to authenticate the client.<br>`none`: Used for public clients (native apps, mobile apps) which can not have secrets.|
|» token_endpoint_auth_signing_alg|body|string|false|OAuth 2.0 Token Endpoint Signing Algorithm<br><br>Requested Client Authentication signing algorithm for the Token Endpoint.|
|» tos_uri|body|string|false|OAuth 2.0 Client Terms of Service URI<br><br>A URL string pointing to a human-readable terms of service<br>document for the client that describes a contractual relationship<br>between the end-user and the client that the end-user accepts when<br>authorizing the client.|
|» updated_at|body|string(date-time)|false|OAuth 2.0 Client Last Update Date<br><br>UpdatedAt returns the timestamp of the last update.|
|» userinfo_signed_response_alg|body|string|false|OpenID Connect Request Userinfo Signed Response Algorithm<br><br>JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT<br>[JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims<br>as a UTF-8 encoded JSON object using the application/json content-type.|

> Example responses

> 200 Response

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="set-oauth2-client-using-openid-dynamic-client-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oAuth2Client|[oAuth2Client](#schemaoauth2client)|
|404|Not Found|Not Found Error Response|[errorOAuth2](#schemaerroroauth2)|
|default|Default|Default Error Response|[errorOAuth2](#schemaerroroauth2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol

<a id="opIddeleteOidcDynamicClient"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/register/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /oauth2/register/{id}`

This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the
public internet directly and can be used in self-service. It implements the OpenID Connect
Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint
is disabled by default. It can be enabled by an administrator.

To use this endpoint, you will need to present the client's authentication credentials. If the OAuth2 Client
uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query.
If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.

OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

<h3 id="delete-oauth-20-client-using-the-openid-dynamic-client-registration-management-protocol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the OAuth 2.0 Client.|

> Example responses

> default Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="delete-oauth-20-client-using-the-openid-dynamic-client-registration-management-protocol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|genericError|[genericError](#schemagenericerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## OpenID Connect Front- and Back-channel Enabled Logout

<a id="opIdrevokeOidcSession"></a>

> Code samples

```bash
curl http://localhost:4445/oauth2/sessions/logout
```

`GET /oauth2/sessions/logout`

This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:

https://openid.net/specs/openid-connect-frontchannel-1_0.html
https://openid.net/specs/openid-connect-backchannel-1_0.html

Back-channel logout is performed asynchronously and does not affect logout flow.

<h3 id="openid-connect-front--and-back-channel-enabled-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|

<aside class="success">
This operation does not require authentication
</aside>

## OpenID Connect Userinfo

<a id="opIdgetOidcUserInfo"></a>

> Code samples

```bash
curl http://localhost:4445/userinfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /userinfo`

This endpoint returns the payload of the ID Token, including `session.id_token` values, of
the provided OAuth 2.0 Access Token's consent request.

In the case of authentication error, a WWW-Authenticate header might be set in the response
with more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3)
for more details about header format.

> Example responses

> 200 Response

```json
{
  "birthdate": "string",
  "email": "string",
  "email_verified": true,
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "locale": "string",
  "middle_name": "string",
  "name": "string",
  "nickname": "string",
  "phone_number": "string",
  "phone_number_verified": true,
  "picture": "string",
  "preferred_username": "string",
  "profile": "string",
  "sub": "string",
  "updated_at": 0,
  "website": "string",
  "zoneinfo": "string"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="openid-connect-userinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|oidcUserInfo|[oidcUserInfo](#schemaoidcuserinfo)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="ory-hydra-api-jwk">jwk</h1>

JSON Web Keys

## Retrieve a JSON Web Key Set

<a id="opIdgetJsonWebKeySet"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string \
  -H 'Accept: application/json'
```

`GET /admin/keys/{set}`

This endpoint can be used to retrieve JWK Sets stored in ORY Hydra.

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.

<h3 id="retrieve-a-json-web-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|JSON Web Key Set ID|

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="retrieve-a-json-web-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|jsonWebKeySet|[jsonWebKeySet](#schemajsonwebkeyset)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a JSON Web Key Set

<a id="opIdsetJsonWebKeySet"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  }'
```

`PUT /admin/keys/{set}`

Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.

This operation replaces the entire JSON Web Key Set: keys that exist in the set but are not part of the request body are deleted. To add a newly generated key to the set while keeping the existing keys, use the `createJsonWebKeySet` operation (`POST /admin/keys/{set}`).

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.

> Body parameter

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

<h3 id="update-a-json-web-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|The JSON Web Key Set ID|
|body|body|[jsonWebKeySet](#schemajsonwebkeyset)|false|none|
|» keys|body|[[jsonWebKey](#schemajsonwebkey)]|false|List of JSON Web Keys<br><br>The value of the "keys" parameter is an array of JSON Web Key (JWK)<br>values. By default, the order of the JWK values within the array does<br>not imply an order of preference among them, although applications<br>of JWK Sets can choose to assign a meaning to the order for their<br>purposes, if desired.|

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="update-a-json-web-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|jsonWebKeySet|[jsonWebKeySet](#schemajsonwebkeyset)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Create JSON Web Key

<a id="opIdcreateJsonWebKeySet"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "alg": "string",
    "kid": "string",
    "use": "string"
  }'
```

`POST /admin/keys/{set}`

This endpoint is capable of generating JSON Web Key Sets for you. There are different strategies available, such as symmetric cryptographic keys (HS256, HS512) and asymmetric cryptographic keys (RS256, ECDSA). If the specified JSON Web Key Set does not exist, it will be created.

If the set already exists, the newly generated key is added to it and all existing keys are kept. This allows you to rotate keys: tokens signed with an older key in the set remain verifiable. Exception: when Ory Hydra is configured to use a Hardware Security Module (HSM), generating a key replaces the set, which then contains only the new key. To replace a set and all of its keys instead, use the `setJsonWebKeySet` operation (`PUT /admin/keys/{set}`).

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.

> Body parameter

```json
{
  "alg": "string",
  "kid": "string",
  "use": "string"
}
```

<h3 id="create-json-web-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|The JSON Web Key Set ID|
|body|body|[createJsonWebKeySet](#schemacreatejsonwebkeyset)|true|none|
|» alg|body|string|true|JSON Web Key Algorithm<br><br>The algorithm to be used for creating the key. Supports `RS256`, `ES256`, `ES512`, `HS512`, and `HS256`.|
|» kid|body|string|true|JSON Web Key ID<br><br>The Key ID of the key to be created.|
|» use|body|string|true|JSON Web Key Use<br><br>The "use" (public key use) parameter identifies the intended use of<br>the public key. The "use" parameter is employed to indicate whether<br>a public key is used for encrypting data or verifying the signature<br>on data. Valid values are "enc" and "sig".|

> Example responses

> 201 Response

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="create-json-web-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|jsonWebKeySet|[jsonWebKeySet](#schemajsonwebkeyset)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete JSON Web Key Set

<a id="opIddeleteJsonWebKeySet"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/keys/{set}`

Use this endpoint to delete a complete JSON Web Key Set and all the keys in that set.

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.

<h3 id="delete-json-web-key-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|The JSON Web Key Set|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="delete-json-web-key-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Get JSON Web Key

<a id="opIdgetJsonWebKey"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string/string \
  -H 'Accept: application/json'
```

`GET /admin/keys/{set}/{kid}`

This endpoint returns a singular JSON Web Key contained in a set. It is identified by the set and the specific key ID (kid).

<h3 id="get-json-web-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|JSON Web Key Set ID|
|kid|path|string|true|JSON Web Key ID|

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="get-json-web-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|jsonWebKeySet|[jsonWebKeySet](#schemajsonwebkeyset)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Set JSON Web Key

<a id="opIdsetJsonWebKey"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "alg": "RS256",
    "crv": "P-256",
    "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
    "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
    "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
    "e": "AQAB",
    "k": "GawgguFyGrWKav7AX4VKUg",
    "kid": "1603dfe0af8f4596",
    "kty": "RSA",
    "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
    "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
    "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
    "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
    "use": "sig",
    "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "x5c": [
      "string"
    ],
    "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
  }'
```

`PUT /admin/keys/{set}/{kid}`

Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.

Warning: the key is created or updated under the `kid` given in the request body. The `{kid}` path parameter exists for historical reasons only: it is ignored and not validated against the body.

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.

> Body parameter

```json
{
  "alg": "RS256",
  "crv": "P-256",
  "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
  "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
  "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
  "e": "AQAB",
  "k": "GawgguFyGrWKav7AX4VKUg",
  "kid": "1603dfe0af8f4596",
  "kty": "RSA",
  "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
  "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
  "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
  "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
  "use": "sig",
  "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
  "x5c": [
    "string"
  ],
  "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
}
```

<h3 id="set-json-web-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|The JSON Web Key Set ID|
|kid|path|string|true|JSON Web Key ID|
|body|body|[jsonWebKey](#schemajsonwebkey)|false|none|
|» alg|body|string|true|The "alg" (algorithm) parameter identifies the algorithm intended for<br>use with the key.  The values used should either be registered in the<br>IANA "JSON Web Signature and Encryption Algorithms" registry<br>established by [JWA] or be a value that contains a Collision-<br>Resistant Name.|
|» crv|body|string|false|none|
|» d|body|string|false|none|
|» dp|body|string|false|none|
|» dq|body|string|false|none|
|» e|body|string|false|none|
|» k|body|string|false|none|
|» kid|body|string|true|The "kid" (key ID) parameter is used to match a specific key.  This<br>is used, for instance, to choose among a set of keys within a JWK Set<br>during key rollover.  The structure of the "kid" value is<br>unspecified.  When "kid" values are used within a JWK Set, different<br>keys within the JWK Set SHOULD use distinct "kid" values.  (One<br>example in which different keys might use the same "kid" value is if<br>they have different "kty" (key type) values but are considered to be<br>equivalent alternatives by the application using them.)  The "kid"<br>value is a case-sensitive string.|
|» kty|body|string|true|The "kty" (key type) parameter identifies the cryptographic algorithm<br>family used with the key, such as "RSA" or "EC". "kty" values should<br>either be registered in the IANA "JSON Web Key Types" registry<br>established by [JWA] or be a value that contains a Collision-<br>Resistant Name.  The "kty" value is a case-sensitive string.|
|» n|body|string|false|none|
|» p|body|string|false|none|
|» q|body|string|false|none|
|» qi|body|string|false|none|
|» use|body|string|true|Use ("public key use") identifies the intended use of<br>the public key. The "use" parameter is employed to indicate whether<br>a public key is used for encrypting data or verifying the signature<br>on data. Values are commonly "sig" (signature) or "enc" (encryption).|
|» x|body|string|false|none|
|» x5c|body|[string]|false|The "x5c" (X.509 certificate chain) parameter contains a chain of one<br>or more PKIX certificates [RFC5280].  The certificate chain is<br>represented as a JSON array of certificate value strings.  Each<br>string in the array is a base64-encoded (Section 4 of [RFC4648] --<br>not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.<br>The PKIX certificate containing the key value MUST be the first<br>certificate.|
|» y|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "alg": "RS256",
  "crv": "P-256",
  "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
  "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
  "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
  "e": "AQAB",
  "k": "GawgguFyGrWKav7AX4VKUg",
  "kid": "1603dfe0af8f4596",
  "kty": "RSA",
  "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
  "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
  "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
  "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
  "use": "sig",
  "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
  "x5c": [
    "string"
  ],
  "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="set-json-web-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|jsonWebKey|[jsonWebKey](#schemajsonwebkey)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete JSON Web Key

<a id="opIddeleteJsonWebKey"></a>

> Code samples

```bash
curl http://localhost:4445/admin/keys/string/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /admin/keys/{set}/{kid}`

Use this endpoint to delete a single JSON Web Key.

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A
JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses
this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens),
and allows storing user-defined keys as well.

<h3 id="delete-json-web-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|set|path|string|true|The JSON Web Key Set|
|kid|path|string|true|The JSON Web Key ID (kid)|

> Example responses

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="delete-json-web-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is<br>typically 204.|None|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-hydra-api-wellknown">wellknown</h1>

Well-Known Endpoints

## Discover Well-Known JSON Web Keys

<a id="opIddiscoverJsonWebKeys"></a>

> Code samples

```bash
curl http://localhost:4445/.well-known/jwks.json \
  -H 'Accept: application/json'
```

`GET /.well-known/jwks.json`

This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and,
if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like
[node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.

Adding custom keys requires first creating a keyset via the createJsonWebKeySet operation,
and then configuring the webfinger.jwks.broadcast_keys configuration value to include the keyset name.

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

> default Response

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

<h3 id="discover-well-known-json-web-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|jsonWebKeySet|[jsonWebKeySet](#schemajsonwebkeyset)|
|default|Default|errorOAuth2|[errorOAuth2](#schemaerroroauth2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-hydra-api-metadata">metadata</h1>

Service Metadata

## Check HTTP Server Status

<a id="opIdisAlive"></a>

> Code samples

```bash
curl http://localhost:4445/health/alive \
  -H 'Accept: application/json'
```

`GET /health/alive`

This endpoint returns a HTTP 200 status code when Ory Hydra is accepting incoming
HTTP requests. This status does currently not include checks whether the database connection is working.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of this service, the health status will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 500 Response

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

<h3 id="check-http-server-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ory Hydra is ready to accept connections.|[healthStatus](#schemahealthstatus)|
|500|Internal Server Error|genericError|[genericError](#schemagenericerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Check HTTP Server and Database Status

<a id="opIdisReady"></a>

> Code samples

```bash
curl http://localhost:4445/health/ready \
  -H 'Accept: application/json'
```

`GET /health/ready`

This endpoint returns a HTTP 200 status code when Ory Hydra is up running and the environment dependencies (e.g.
the database) are responsive as well.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of Ory Hydra, the health status will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 503 Response

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="check-http-server-and-database-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ory Hydra is ready to accept requests.|Inline|
|503|Service Unavailable|Ory Kratos is not yet ready to accept requests.|Inline|

<h3 id="check-http-server-and-database-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Always "ok".|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|Errors contains a list of errors that caused the not ready status.|
|» **additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return Running Software Version.

<a id="opIdgetVersion"></a>

> Code samples

```bash
curl http://localhost:4445/version \
  -H 'Accept: application/json'
```

`GET /version`

This endpoint returns the version of Ory Hydra.

If the service supports TLS Edge Termination, this endpoint does not require the
`X-Forwarded-Proto` header to be set.

Be aware that if you are running multiple nodes of this service, the version will never
refer to the cluster state, only to a single instance.

> Example responses

> 200 Response

```json
{
  "version": "string"
}
```

<h3 id="return-running-software-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Ory Hydra version.|Inline|

<h3 id="return-running-software-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|The version of Ory Hydra.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateVerifiableCredentialRequestBody">CreateVerifiableCredentialRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateverifiablecredentialrequestbody"></a>
<a id="schema_CreateVerifiableCredentialRequestBody"></a>
<a id="tocScreateverifiablecredentialrequestbody"></a>
<a id="tocscreateverifiablecredentialrequestbody"></a>

```json
{
  "format": "string",
  "proof": {
    "jwt": "string",
    "proof_type": "string"
  },
  "types": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|proof|[VerifiableCredentialProof](#schemaverifiablecredentialproof)|false|none|none|
|types|[string]|false|none|none|

<h2 id="tocS_DefaultError">DefaultError</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterror"></a>
<a id="schema_DefaultError"></a>
<a id="tocSdefaulterror"></a>
<a id="tocsdefaulterror"></a>

```json
null
```

From https://go.dev/wiki/CodeReviewComments#receiver-type:
> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.
> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,
> prefer a pointer receiver, as it will make the intention clearer to the reader.
> Don’t mix receiver types. Choose either pointers or struct types for all available methods.

<h2 id="tocS_DeviceUserAuthRequest">DeviceUserAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeviceuserauthrequest"></a>
<a id="schema_DeviceUserAuthRequest"></a>
<a id="tocSdeviceuserauthrequest"></a>
<a id="tocsdeviceuserauthrequest"></a>

```json
{
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "handled_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string|true|none|ID is the identifier ("device challenge") of the device grant request. It is used to<br>identify the session.|
|client|[oAuth2Client](#schemaoauth2client)|false|none|OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are<br>generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.|
|handled_at|[nullTime](#schemanulltime-1)|false|none|none|
|request_url|string|false|none|RequestURL is the original Device Authorization URL requested.|
|requested_access_token_audience|[string]|false|none|RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.|
|requested_scope|[string]|false|none|RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.|

<h2 id="tocS_JSONRawMessage">JSONRawMessage</h2>
<!-- backwards compatibility -->
<a id="schemajsonrawmessage"></a>
<a id="schema_JSONRawMessage"></a>
<a id="tocSjsonrawmessage"></a>
<a id="tocsjsonrawmessage"></a>

```json
null
```

<h2 id="tocS_NullBool">NullBool</h2>
<!-- backwards compatibility -->
<a id="schemanullbool"></a>
<a id="schema_NullBool"></a>
<a id="tocSnullbool"></a>
<a id="tocsnullbool"></a>

```json
true
```

<h2 id="tocS_NullDuration">NullDuration</h2>
<!-- backwards compatibility -->
<a id="schemanullduration"></a>
<a id="schema_NullDuration"></a>
<a id="tocSnullduration"></a>
<a id="tocsnullduration"></a>

```json
"string"
```

Specify a time duration in milliseconds, seconds, minutes, hours.

<h2 id="tocS_NullInt">NullInt</h2>
<!-- backwards compatibility -->
<a id="schemanullint"></a>
<a id="schema_NullInt"></a>
<a id="tocSnullint"></a>
<a id="tocsnullint"></a>

```json
0
```

<h2 id="tocS_NullString">NullString</h2>
<!-- backwards compatibility -->
<a id="schemanullstring"></a>
<a id="schema_NullString"></a>
<a id="tocSnullstring"></a>
<a id="tocsnullstring"></a>

```json
"string"
```

<h2 id="tocS_NullTime">NullTime</h2>
<!-- backwards compatibility -->
<a id="schemanulltime"></a>
<a id="schema_NullTime"></a>
<a id="tocSnulltime"></a>
<a id="tocsnulltime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_NullUUID">NullUUID</h2>
<!-- backwards compatibility -->
<a id="schemanulluuid"></a>
<a id="schema_NullUUID"></a>
<a id="tocSnulluuid"></a>
<a id="tocsnulluuid"></a>

```json
"string"
```

<h2 id="tocS_RFC6749ErrorJson">RFC6749ErrorJson</h2>
<!-- backwards compatibility -->
<a id="schemarfc6749errorjson"></a>
<a id="schema_RFC6749ErrorJson"></a>
<a id="tocSrfc6749errorjson"></a>
<a id="tocsrfc6749errorjson"></a>

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "string",
  "status_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_debug|string|false|none|none|
|error_description|string|false|none|none|
|error_hint|string|false|none|none|
|status_code|integer(int64)|false|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_VerifiableCredentialProof">VerifiableCredentialProof</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablecredentialproof"></a>
<a id="schema_VerifiableCredentialProof"></a>
<a id="tocSverifiablecredentialproof"></a>
<a id="tocsverifiablecredentialproof"></a>

```json
{
  "jwt": "string",
  "proof_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwt|string|false|none|none|
|proof_type|string|false|none|none|

<h2 id="tocS_acceptDeviceUserCodeRequest">acceptDeviceUserCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdeviceusercoderequest"></a>
<a id="schema_acceptDeviceUserCodeRequest"></a>
<a id="tocSacceptdeviceusercoderequest"></a>
<a id="tocsacceptdeviceusercoderequest"></a>

```json
{
  "user_code": "string"
}
```

Contains information on an device verification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_code|string|false|none|none|

<h2 id="tocS_acceptOAuth2ConsentRequest">acceptOAuth2ConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptoauth2consentrequest"></a>
<a id="schema_acceptOAuth2ConsentRequest"></a>
<a id="tocSacceptoauth2consentrequest"></a>
<a id="tocsacceptoauth2consentrequest"></a>

```json
{
  "context": null,
  "grant_access_token_audience": [
    "string"
  ],
  "grant_scope": [
    "string"
  ],
  "remember": true,
  "remember_for": 0,
  "session": {
    "access_token": null,
    "id_token": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|grant_access_token_audience|[string]|false|none|GrantedAudience sets the audience the user authorized the client to use. Should be a subset of `requested_access_token_audience`.|
|grant_scope|[string]|false|none|GrantScope sets the scope the user authorized the client to use. Should be a subset of `requested_scope`.|
|remember|boolean|false|none|Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same<br>client asks the same user for the same, or a subset of, scope.|
|remember_for|integer(int64)|false|none|RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the<br>authorization will be remembered indefinitely.|
|session|[acceptOAuth2ConsentRequestSession](#schemaacceptoauth2consentrequestsession)|false|none|none|

<h2 id="tocS_acceptOAuth2ConsentRequestSession">acceptOAuth2ConsentRequestSession</h2>
<!-- backwards compatibility -->
<a id="schemaacceptoauth2consentrequestsession"></a>
<a id="schema_acceptOAuth2ConsentRequestSession"></a>
<a id="tocSacceptoauth2consentrequestsession"></a>
<a id="tocsacceptoauth2consentrequestsession"></a>

```json
{
  "access_token": null,
  "id_token": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|object|false|none|AccessToken sets session data for the access and refresh token, as well as any future tokens issued by the<br>refresh grant. Keep in mind that this data will be available to anyone performing OAuth 2.0 Challenge Introspection.<br>If only your services can perform OAuth 2.0 Challenge Introspection, this is usually fine. But if third parties<br>can access that endpoint as well, sensitive data from the session might be exposed to them. Use with care!|
|id_token|object|false|none|IDToken sets session data for the OpenID Connect ID token. Keep in mind that the session'id payloads are readable<br>by anyone that has access to the ID Challenge. Use with care!|

<h2 id="tocS_acceptOAuth2LoginRequest">acceptOAuth2LoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptoauth2loginrequest"></a>
<a id="schema_acceptOAuth2LoginRequest"></a>
<a id="tocSacceptoauth2loginrequest"></a>
<a id="tocsacceptoauth2loginrequest"></a>

```json
{
  "acr": "string",
  "amr": [
    "string"
  ],
  "context": null,
  "extend_session_lifespan": true,
  "force_subject_identifier": "string",
  "identity_provider_session_id": "string",
  "remember": true,
  "remember_for": 0,
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acr|string|false|none|ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it<br>to express that, for example, a user authenticated using two-factor authentication.|
|amr|[string]|false|none|AMR sets the Authentication Methods References value for this<br>authentication session. You can use it to specify the method a user used to<br>authenticate. For example, if the acr indicates a user used two-factor<br>authentication, the amr can express they used a software-secured key.|
|context|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|extend_session_lifespan|boolean|false|none|Extend OAuth2 authentication session lifespan<br><br>If set to `true`, the OAuth2 authentication cookie lifespan is extended. This is for example useful if you want the user to be able to use `prompt=none` continuously.<br><br>This value can only be set to `true` if the user has an authentication, which is the case if the `skip` value is `true`.|
|force_subject_identifier|string|false|none|ForceSubjectIdentifier forces the "pairwise" user ID of the end-user that authenticated. The "pairwise" user ID refers to the<br>(Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg] of the OpenID<br>Connect specification. It allows you to set an obfuscated subject ("user") identifier that is unique to the client.<br><br>Please note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token. It does not change the<br>sub claim in the OAuth 2.0 Introspection.<br><br>Per default, ORY Hydra handles this value with its own algorithm. In case you want to set this yourself<br>you can use this field. Please note that setting this field has no effect if `pairwise` is not configured in<br>ORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via `subject_type` key in the client's<br>configuration).<br><br>Please also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies<br>that you have to compute this value on every authentication process (probably depending on the client ID or some<br>other unique value).<br><br>If you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.|
|identity_provider_session_id|string|false|none|IdentityProviderSessionID is the session ID of the end-user that authenticated.<br>If specified, we will use this value to propagate the logout.|
|remember|boolean|false|none|Remember, if set to true, tells Ory Hydra to remember this user by telling the user agent (browser) to store<br>a cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, they<br>will not be asked to log in again.|
|remember_for|integer(int64)|false|none|RememberFor sets how long the authentication should be remembered for in seconds. If set to `0`, the<br>authorization will be remembered for the duration of the browser session (using a session cookie).|
|subject|string|true|none|Subject is the user ID of the end-user that authenticated.|

<h2 id="tocS_createJsonWebKeySet">createJsonWebKeySet</h2>
<!-- backwards compatibility -->
<a id="schemacreatejsonwebkeyset"></a>
<a id="schema_createJsonWebKeySet"></a>
<a id="tocScreatejsonwebkeyset"></a>
<a id="tocscreatejsonwebkeyset"></a>

```json
{
  "alg": "string",
  "kid": "string",
  "use": "string"
}
```

Create JSON Web Key Set Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|true|none|JSON Web Key Algorithm<br><br>The algorithm to be used for creating the key. Supports `RS256`, `ES256`, `ES512`, `HS512`, and `HS256`.|
|kid|string|true|none|JSON Web Key ID<br><br>The Key ID of the key to be created.|
|use|string|true|none|JSON Web Key Use<br><br>The "use" (public key use) parameter identifies the intended use of<br>the public key. The "use" parameter is employed to indicate whether<br>a public key is used for encrypting data or verifying the signature<br>on data. Valid values are "enc" and "sig".|

<h2 id="tocS_credentialSupportedDraft00">credentialSupportedDraft00</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsupporteddraft00"></a>
<a id="schema_credentialSupportedDraft00"></a>
<a id="tocScredentialsupporteddraft00"></a>
<a id="tocscredentialsupporteddraft00"></a>

```json
{
  "cryptographic_binding_methods_supported": [
    "string"
  ],
  "cryptographic_suites_supported": [
    "string"
  ],
  "format": "string",
  "types": [
    "string"
  ]
}
```

Includes information about the supported verifiable credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptographic_binding_methods_supported|[string]|false|none|OpenID Connect Verifiable Credentials Cryptographic Binding Methods Supported<br><br>Contains a list of cryptographic binding methods supported for signing the proof.|
|cryptographic_suites_supported|[string]|false|none|OpenID Connect Verifiable Credentials Cryptographic Suites Supported<br><br>Contains a list of cryptographic suites methods supported for signing the proof.|
|format|string|false|none|OpenID Connect Verifiable Credentials Format<br><br>Contains the format that is supported by this authorization server.|
|types|[string]|false|none|OpenID Connect Verifiable Credentials Types<br><br>Contains the types of verifiable credentials supported.|

<h2 id="tocS_deviceAuthorization">deviceAuthorization</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthorization"></a>
<a id="schema_deviceAuthorization"></a>
<a id="tocSdeviceauthorization"></a>
<a id="tocsdeviceauthorization"></a>

```json
{
  "device_code": "ory_dc_smldfksmdfkl.mslkmlkmlk",
  "expires_in": 16830,
  "interval": 5,
  "user_code": "AAAAAA",
  "verification_uri": "https://auth.ory.sh/tv",
  "verification_uri_complete": "https://auth.ory.sh/tv?user_code=AAAAAA"
}
```

# Ory's OAuth 2.0 Device Authorization API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_code|string|false|none|The device verification code.|
|expires_in|integer(int64)|false|none|The lifetime in seconds of the "device_code" and "user_code".|
|interval|integer(int64)|false|none|The minimum amount of time in seconds that the client<br>SHOULD wait between polling requests to the token endpoint.  If no<br>value is provided, clients MUST use 5 as the default.|
|user_code|string|false|none|The end-user verification code.|
|verification_uri|string|false|none|The end-user verification URI on the authorization<br>server.  The URI should be short and easy to remember as end users<br>will be asked to manually type it into their user agent.|
|verification_uri_complete|string|false|none|A verification URI that includes the "user_code" (or<br>other information with the same function as the "user_code"),<br>which is designed for non-textual transmission.|

<h2 id="tocS_errorOAuth2">errorOAuth2</h2>
<!-- backwards compatibility -->
<a id="schemaerroroauth2"></a>
<a id="schema_errorOAuth2"></a>
<a id="tocSerroroauth2"></a>
<a id="tocserroroauth2"></a>

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "The redirect URL is not allowed.",
  "status_code": 401
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error|
|error_debug|string|false|none|Error Debug Information<br><br>Only available in dev mode.|
|error_description|string|false|none|Error Description|
|error_hint|string|false|none|Error Hint<br><br>Helps the user identify the error cause.|
|status_code|integer(int64)|false|none|HTTP Status Code|

<h2 id="tocS_genericError">genericError</h2>
<!-- backwards compatibility -->
<a id="schemagenericerror"></a>
<a id="schema_genericError"></a>
<a id="tocSgenericerror"></a>
<a id="tocsgenericerror"></a>

```json
{
  "code": 404,
  "debug": "SQL field \"foo\" is not a bool.",
  "details": null,
  "id": "string",
  "message": "The resource could not be found",
  "reason": "User with ID 1234 does not exist.",
  "request": "d7ef54b1-ec15-46e6-bccb-524b82c035e6",
  "status": "Not Found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|The status code|
|debug|string|false|none|Debug information<br><br>This field is often not exposed to protect against leaking<br>sensitive information.|
|details|object|false|none|Further error details|
|id|string|false|none|The error ID<br><br>Useful when trying to identify various errors in application logic.|
|message|string|true|none|Error message<br><br>The error's message.|
|reason|string|false|none|A human-readable reason for the error|
|request|string|false|none|The request ID<br><br>The request ID is often exposed internally in order to trace<br>errors across service architectures. This is often a UUID.|
|status|string|false|none|The status description|

<h2 id="tocS_healthNotReadyStatus">healthNotReadyStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthnotreadystatus"></a>
<a id="schema_healthNotReadyStatus"></a>
<a id="tocShealthnotreadystatus"></a>
<a id="tocshealthnotreadystatus"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|Errors contains a list of errors that caused the not ready status.|

<h2 id="tocS_healthStatus">healthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_healthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Status always contains "ok".|

<h2 id="tocS_introspectedOAuth2Token">introspectedOAuth2Token</h2>
<!-- backwards compatibility -->
<a id="schemaintrospectedoauth2token"></a>
<a id="schema_introspectedOAuth2Token"></a>
<a id="tocSintrospectedoauth2token"></a>
<a id="tocsintrospectedoauth2token"></a>

```json
{
  "active": true,
  "aud": [
    "string"
  ],
  "client_id": "string",
  "exp": 0,
  "ext": {
    "property1": null,
    "property2": null
  },
  "iat": 0,
  "iss": "string",
  "nbf": 0,
  "obfuscated_subject": "string",
  "scope": "string",
  "sub": "string",
  "token_type": "string",
  "token_use": "string",
  "username": "string"
}
```

Introspection contains an access token's session data as specified by
[IETF RFC 7662](https://tools.ietf.org/html/rfc7662)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Active is a boolean indicator of whether or not the presented token<br>is currently active.  The specifics of a token's "active" state<br>will vary depending on the implementation of the authorization<br>server and the information it keeps about its tokens, but a "true"<br>value return for the "active" property will generally indicate<br>that a given token has been issued by this authorization server,<br>has not been revoked by the resource owner, and is within its<br>given time window of validity (e.g., after its issuance time and<br>before its expiration time).|
|aud|[string]|false|none|Audience contains a list of the token's intended audiences.|
|client_id|string|false|none|ID is a client identifier for the OAuth 2.0 client that<br>requested this token.|
|exp|integer(int64)|false|none|Expires at is an integer timestamp, measured in the number of seconds<br>since January 1 1970 UTC, indicating when this token will expire.|
|ext|object|false|none|Extra is arbitrary data set by the session.|
|iat|integer(int64)|false|none|Issued at is an integer timestamp, measured in the number of seconds<br>since January 1 1970 UTC, indicating when this token was<br>originally issued.|
|iss|string|false|none|IssuerURL is a string representing the issuer of this token|
|nbf|integer(int64)|false|none|NotBefore is an integer timestamp, measured in the number of seconds<br>since January 1 1970 UTC, indicating when this token is not to be<br>used before.|
|obfuscated_subject|string|false|none|ObfuscatedSubject is set when the subject identifier algorithm was set to "pairwise" during authorization.<br>It is the `sub` value of the ID Token that was issued.|
|scope|string|false|none|Scope is a JSON string containing a space-separated list of<br>scopes associated with this token.|
|sub|string|false|none|Subject of the token, as defined in JWT [RFC7519].<br>Usually a machine-readable identifier of the resource owner who<br>authorized this token.|
|token_type|string|false|none|TokenType is the introspected token's type, typically `Bearer`.|
|token_use|string|false|none|TokenUse is the introspected token's use, for example `access_token` or `refresh_token`.|
|username|string|false|none|Username is a human-readable identifier for the resource owner who<br>authorized this token.|

<h2 id="tocS_jsonPatch">jsonPatch</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatch"></a>
<a id="schema_jsonPatch"></a>
<a id="tocSjsonpatch"></a>
<a id="tocsjsonpatch"></a>

```json
{
  "from": "/name",
  "op": "replace",
  "path": "/name",
  "value": "foobar"
}
```

A JSONPatch document as defined by RFC 6902

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|This field is used together with operation "move" and uses JSON Pointer notation.<br><br>Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).|
|op|string|true|none|The operation to be performed. One of "add", "remove", "replace", "move", "copy", or "test".|
|path|string|true|none|The path to the target path. Uses JSON pointer notation.<br><br>Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).|
|value|object|false|none|The value to be used within the operations.<br><br>Learn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).|

<h2 id="tocS_jsonPatchDocument">jsonPatchDocument</h2>
<!-- backwards compatibility -->
<a id="schemajsonpatchdocument"></a>
<a id="schema_jsonPatchDocument"></a>
<a id="tocSjsonpatchdocument"></a>
<a id="tocsjsonpatchdocument"></a>

```json
[
  {
    "from": "/name",
    "op": "replace",
    "path": "/name",
    "value": "foobar"
  }
]
```

A JSONPatchDocument request

<h2 id="tocS_jsonWebKey">jsonWebKey</h2>
<!-- backwards compatibility -->
<a id="schemajsonwebkey"></a>
<a id="schema_jsonWebKey"></a>
<a id="tocSjsonwebkey"></a>
<a id="tocsjsonwebkey"></a>

```json
{
  "alg": "RS256",
  "crv": "P-256",
  "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
  "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
  "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
  "e": "AQAB",
  "k": "GawgguFyGrWKav7AX4VKUg",
  "kid": "1603dfe0af8f4596",
  "kty": "RSA",
  "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
  "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
  "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
  "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
  "use": "sig",
  "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
  "x5c": [
    "string"
  ],
  "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|true|none|The "alg" (algorithm) parameter identifies the algorithm intended for<br>use with the key.  The values used should either be registered in the<br>IANA "JSON Web Signature and Encryption Algorithms" registry<br>established by [JWA] or be a value that contains a Collision-<br>Resistant Name.|
|crv|string|false|none|none|
|d|string|false|none|none|
|dp|string|false|none|none|
|dq|string|false|none|none|
|e|string|false|none|none|
|k|string|false|none|none|
|kid|string|true|none|The "kid" (key ID) parameter is used to match a specific key.  This<br>is used, for instance, to choose among a set of keys within a JWK Set<br>during key rollover.  The structure of the "kid" value is<br>unspecified.  When "kid" values are used within a JWK Set, different<br>keys within the JWK Set SHOULD use distinct "kid" values.  (One<br>example in which different keys might use the same "kid" value is if<br>they have different "kty" (key type) values but are considered to be<br>equivalent alternatives by the application using them.)  The "kid"<br>value is a case-sensitive string.|
|kty|string|true|none|The "kty" (key type) parameter identifies the cryptographic algorithm<br>family used with the key, such as "RSA" or "EC". "kty" values should<br>either be registered in the IANA "JSON Web Key Types" registry<br>established by [JWA] or be a value that contains a Collision-<br>Resistant Name.  The "kty" value is a case-sensitive string.|
|n|string|false|none|none|
|p|string|false|none|none|
|q|string|false|none|none|
|qi|string|false|none|none|
|use|string|true|none|Use ("public key use") identifies the intended use of<br>the public key. The "use" parameter is employed to indicate whether<br>a public key is used for encrypting data or verifying the signature<br>on data. Values are commonly "sig" (signature) or "enc" (encryption).|
|x|string|false|none|none|
|x5c|[string]|false|none|The "x5c" (X.509 certificate chain) parameter contains a chain of one<br>or more PKIX certificates [RFC5280].  The certificate chain is<br>represented as a JSON array of certificate value strings.  Each<br>string in the array is a base64-encoded (Section 4 of [RFC4648] --<br>not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.<br>The PKIX certificate containing the key value MUST be the first<br>certificate.|
|y|string|false|none|none|

<h2 id="tocS_jsonWebKeySet">jsonWebKeySet</h2>
<!-- backwards compatibility -->
<a id="schemajsonwebkeyset"></a>
<a id="schema_jsonWebKeySet"></a>
<a id="tocSjsonwebkeyset"></a>
<a id="tocsjsonwebkeyset"></a>

```json
{
  "keys": [
    {
      "alg": "RS256",
      "crv": "P-256",
      "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
      "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
      "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
      "e": "AQAB",
      "k": "GawgguFyGrWKav7AX4VKUg",
      "kid": "1603dfe0af8f4596",
      "kty": "RSA",
      "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
      "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
      "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
      "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
      "use": "sig",
      "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
      "x5c": [
        "string"
      ],
      "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
    }
  ]
}
```

JSON Web Key Set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[jsonWebKey](#schemajsonwebkey)]|false|none|List of JSON Web Keys<br><br>The value of the "keys" parameter is an array of JSON Web Key (JWK)<br>values. By default, the order of the JWK values within the array does<br>not imply an order of preference among them, although applications<br>of JWK Sets can choose to assign a meaning to the order for their<br>purposes, if desired.|

<h2 id="tocS_keysetPaginationRequestParameters">keysetPaginationRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemakeysetpaginationrequestparameters"></a>
<a id="schema_keysetPaginationRequestParameters"></a>
<a id="tocSkeysetpaginationrequestparameters"></a>
<a id="tocskeysetpaginationrequestparameters"></a>

```json
{
  "page_size": 250,
  "page_token": "string"
}
```

For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_size|integer(int64)|false|none|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|string|false|none|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|

<h2 id="tocS_keysetPaginationResponseHeaders">keysetPaginationResponseHeaders</h2>
<!-- backwards compatibility -->
<a id="schemakeysetpaginationresponseheaders"></a>
<a id="schema_keysetPaginationResponseHeaders"></a>
<a id="tocSkeysetpaginationresponseheaders"></a>
<a id="tocskeysetpaginationresponseheaders"></a>

```json
{
  "link": "string"
}
```

The `Link` HTTP header contains multiple links (`first`, `next`) formatted as:
`<https://{project-slug}.projects.oryapis.com/admin/sessions?page_size=250&page_token=>; rel="first"`

For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|The Link HTTP Header<br><br>The `Link` header contains a comma-delimited list of links to the following pages:<br><br>first: The first page of results.<br>next: The next page of results.<br><br>Pages are omitted if they do not exist. For example, if there is no next page, the `next` link is omitted. Examples:<br><br></admin/sessions?page_size=250&page_token={last_item_uuid}; rel="first",/admin/sessions?page_size=250&page_token=>; rel="next"|

<h2 id="tocS_nullInt64">nullInt64</h2>
<!-- backwards compatibility -->
<a id="schemanullint64"></a>
<a id="schema_nullInt64"></a>
<a id="tocSnullint64"></a>
<a id="tocsnullint64"></a>

```json
0
```

<h2 id="tocS_nullTime">nullTime</h2>
<!-- backwards compatibility -->
<a id="schemanulltime-1"></a>
<a id="schema_nullTime"></a>
<a id="tocSnulltime-1"></a>
<a id="tocsnulltime-1"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_oAuth2Client">oAuth2Client</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2client"></a>
<a id="schema_oAuth2Client"></a>
<a id="tocSoauth2client"></a>
<a id="tocsoauth2client"></a>

```json
{
  "access_token_strategy": "string",
  "allowed_cors_origins": [
    "string"
  ],
  "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "backchannel_logout_session_required": true,
  "backchannel_logout_uri": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_secret_expires_at": 0,
  "client_uri": "string",
  "contacts": "help@example.org",
  "created_at": "1970-01-01T00:00:00Z",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "frontchannel_logout_session_required": true,
  "frontchannel_logout_uri": "string",
  "grant_types": [
    "string"
  ],
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwks": {
    "keys": [
      {
        "alg": "RS256",
        "crv": "P-256",
        "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
        "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
        "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
        "e": "AQAB",
        "k": "GawgguFyGrWKav7AX4VKUg",
        "kid": "1603dfe0af8f4596",
        "kty": "RSA",
        "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
        "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
        "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
        "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
        "use": "sig",
        "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
        "x5c": [
          "string"
        ],
        "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
      }
    ]
  },
  "jwks_uri": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "logo_uri": "string",
  "metadata": null,
  "owner": "string",
  "policy_uri": "string",
  "post_logout_redirect_uris": [
    "string"
  ],
  "redirect_uris": "http://mydomain/oauth/callback",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string",
  "registration_access_token": "string",
  "registration_client_uri": "string",
  "request_object_signing_alg": "string",
  "request_uris": [
    "string"
  ],
  "response_types": [
    "string"
  ],
  "scope": "scope1 scope-2 scope.3 scope:4",
  "sector_identifier_uri": "string",
  "skip_consent": true,
  "skip_logout_consent": true,
  "subject_type": "string",
  "token_endpoint_auth_method": "client_secret_basic",
  "token_endpoint_auth_signing_alg": "string",
  "tos_uri": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "userinfo_signed_response_alg": "string"
}
```

OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are
generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token_strategy|string|false|none|OAuth 2.0 Access Token Strategy<br><br>AccessTokenStrategy is the strategy used to generate access tokens.<br>Valid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.com/docs/oauth2-oidc/jwt-access-token<br>Setting the strategy here overrides the global setting in `strategies.access_token`.|
|allowed_cors_origins|[string]|false|none|OAuth 2.0 Client Allowed CORS Origins<br><br>One or more URLs (scheme://host[:port]) which are allowed to make CORS requests<br>to the /oauth/token endpoint. If this array is empty, the server's CORS origin configuration (`CORS_ALLOWED_ORIGINS`)<br>will be used instead. If this array is set, the allowed origins are appended to the server's CORS origin configuration.<br>Be aware that environment variable `CORS_ENABLED` MUST be set to `true` for this to work.|
|audience|[string]|false|none|OAuth 2.0 Client Audience<br><br>An allow-list defining the audiences this client is allowed to request tokens for. An audience limits<br>the applicability of an OAuth 2.0 Access Token to, for example, certain API endpoints. The value is a list<br>of URLs. URLs MUST NOT contain whitespaces.|
|authorization_code_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|authorization_code_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|authorization_code_grant_refresh_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|backchannel_logout_session_required|boolean|false|none|OpenID Connect Back-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout<br>Token to identify the RP session with the OP when the backchannel_logout_uri is used.<br>If omitted, the default value is false.|
|backchannel_logout_uri|string|false|none|OpenID Connect Back-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when sent a Logout Token by the OP.|
|client_credentials_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|client_id|string|false|none|OAuth 2.0 Client ID<br><br>The ID is immutable. If no ID is provided, a UUID4 will be generated.|
|client_name|string|false|none|OAuth 2.0 Client Name<br><br>The human-readable name of the client to be presented to the<br>end-user during authorization.|
|client_secret|string|false|none|OAuth 2.0 Client Secret<br><br>The secret will be included in the create request as cleartext, and then<br>never again. The secret is kept in hashed format and is not recoverable once lost.|
|client_secret_expires_at|integer(int64)|false|none|OAuth 2.0 Client Secret Expires At<br><br>The field is currently not supported and its value is always 0.|
|client_uri|string|false|none|OAuth 2.0 Client URI<br><br>ClientURI is a URL string of a web page providing information about the client.<br>If present, the server SHOULD display this URL to the end-user in<br>a clickable fashion.|
|contacts|[string]|false|none|OAuth 2.0 Client Contact<br><br>An array of strings representing ways to contact people responsible<br>for this client, typically email addresses.|
|created_at|string(date-time)|false|none|OAuth 2.0 Client Creation Date<br><br>CreatedAt returns the timestamp of the client's creation.|
|device_authorization_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|device_authorization_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|device_authorization_grant_refresh_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|frontchannel_logout_session_required|boolean|false|none|OpenID Connect Front-Channel Logout Session Required<br><br>Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be<br>included to identify the RP session with the OP when the frontchannel_logout_uri is used.<br>If omitted, the default value is false.|
|frontchannel_logout_uri|string|false|none|OpenID Connect Front-Channel Logout URI<br><br>RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query<br>parameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the<br>request and to determine which of the potentially multiple sessions is to be logged out; if either is<br>included, both MUST be.|
|grant_types|[string]|false|none|OAuth 2.0 Client Grant Types<br><br>An array of OAuth 2.0 grant types the client is allowed to use. Can be one<br>of:<br><br>Client Credentials Grant: `client_credentials`<br>Authorization Code Grant: `authorization_code`<br>OpenID Connect Implicit Grant (deprecated!): `implicit`<br>Refresh Token Grant: `refresh_token`<br>OAuth 2.0 Token Exchange: `urn:ietf:params:oauth:grant-type:jwt-bearer`<br>OAuth 2.0 Device Code Grant: `urn:ietf:params:oauth:grant-type:device_code`|
|implicit_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|implicit_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|jwks|[jsonWebKeySet](#schemajsonwebkeyset)|false|none|JSON Web Key Set|
|jwks_uri|string|false|none|OAuth 2.0 Client JSON Web Key Set URL<br><br>URL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains<br>the signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the<br>Client's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing<br>and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced<br>JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both<br>signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used<br>to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST<br>match those in the certificate.|
|jwt_bearer_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|logo_uri|string|false|none|OAuth 2.0 Client Logo URI<br><br>A URL string referencing the client's logo.|
|metadata|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|owner|string|false|none|OAuth 2.0 Client Owner<br><br>Owner is a string identifying the owner of the OAuth 2.0 Client.|
|policy_uri|string|false|none|OAuth 2.0 Client Policy URI<br><br>PolicyURI is a URL string that points to a human-readable privacy policy document<br>that describes how the deployment organization collects, uses,<br>retains, and discloses personal data.|
|post_logout_redirect_uris|[string]|false|none|Allowed Post-Redirect Logout URIs<br><br>Array of URLs supplied by the RP to which it MAY request that the End-User's User Agent be redirected using the<br>post_logout_redirect_uri parameter after a logout has been performed.|
|redirect_uris|[string]|false|none|OAuth 2.0 Client Redirect URIs<br><br>RedirectURIs is an array of allowed redirect urls for the client.|
|refresh_token_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_refresh_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|registration_access_token|string|false|none|OpenID Connect Dynamic Client Registration Access Token<br><br>RegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client<br>using Dynamic Client Registration.|
|registration_client_uri|string|false|none|OpenID Connect Dynamic Client Registration URL<br><br>RegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.|
|request_object_signing_alg|string|false|none|OpenID Connect Request Object Signing Algorithm<br><br>JWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects<br>from this Client MUST be rejected, if not signed with this algorithm.|
|request_uris|[string]|false|none|OpenID Connect Request URIs<br><br>Array of request_uri values that are pre-registered by the RP for use at the OP. Servers MAY cache the<br>contents of the files referenced by these URIs and not retrieve them at the time they are used in a request.<br>OPs can require that request_uri values used be pre-registered with the require_request_uri_registration<br>discovery parameter.|
|response_types|[string]|false|none|OAuth 2.0 Client Response Types<br><br>An array of the OAuth 2.0 response type strings that the client can<br>use at the authorization endpoint. Possible values are:<br><br>`code` for Authorization Code Grant.<br>`token` or `id_token` or `token id_token` for OpenID Connect Implicit Grant (not recommended).<br>`code token` or `code id_token` or `code token id_token` for OpenID Connect Hybrid Flow (not recommended).|
|scope|string|false|none|OAuth 2.0 Client Scope<br><br>Scope is a string containing a space-separated list of scope values (as<br>described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client<br>can use when requesting access tokens.|
|sector_identifier_uri|string|false|none|OpenID Connect Sector Identifier URI<br><br>URL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a<br>file with a single JSON array of redirect_uri values.|
|skip_consent|boolean|false|none|SkipConsent skips the consent screen for this client. This field can only<br>be set from the admin API.|
|skip_logout_consent|boolean|false|none|SkipLogoutConsent skips the logout consent screen for this client. This field can only<br>be set from the admin API.|
|subject_type|string|false|none|OpenID Connect Subject Type<br><br>The `subject_types_supported` Discovery parameter contains a<br>list of the supported subject_type values for this server. Valid types include `pairwise` and `public`.|
|token_endpoint_auth_method|string|false|none|OAuth 2.0 Token Endpoint Authentication Method<br><br>Requested Client Authentication method for the Token Endpoint. The options are:<br><br>`client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header.<br>`client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body.<br>`private_key_jwt`: Use JSON Web Tokens to authenticate the client.<br>`none`: Used for public clients (native apps, mobile apps) which can not have secrets.|
|token_endpoint_auth_signing_alg|string|false|none|OAuth 2.0 Token Endpoint Signing Algorithm<br><br>Requested Client Authentication signing algorithm for the Token Endpoint.|
|tos_uri|string|false|none|OAuth 2.0 Client Terms of Service URI<br><br>A URL string pointing to a human-readable terms of service<br>document for the client that describes a contractual relationship<br>between the end-user and the client that the end-user accepts when<br>authorizing the client.|
|updated_at|string(date-time)|false|none|OAuth 2.0 Client Last Update Date<br><br>UpdatedAt returns the timestamp of the last update.|
|userinfo_signed_response_alg|string|false|none|OpenID Connect Request Userinfo Signed Response Algorithm<br><br>JWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT<br>[JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims<br>as a UTF-8 encoded JSON object using the application/json content-type.|

<h2 id="tocS_oAuth2ClientTokenLifespans">oAuth2ClientTokenLifespans</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2clienttokenlifespans"></a>
<a id="schema_oAuth2ClientTokenLifespans"></a>
<a id="tocSoauth2clienttokenlifespans"></a>
<a id="tocsoauth2clienttokenlifespans"></a>

```json
{
  "authorization_code_grant_access_token_lifespan": "string",
  "authorization_code_grant_id_token_lifespan": "string",
  "authorization_code_grant_refresh_token_lifespan": "string",
  "client_credentials_grant_access_token_lifespan": "string",
  "device_authorization_grant_access_token_lifespan": "string",
  "device_authorization_grant_id_token_lifespan": "string",
  "device_authorization_grant_refresh_token_lifespan": "string",
  "implicit_grant_access_token_lifespan": "string",
  "implicit_grant_id_token_lifespan": "string",
  "jwt_bearer_grant_access_token_lifespan": "string",
  "refresh_token_grant_access_token_lifespan": "string",
  "refresh_token_grant_id_token_lifespan": "string",
  "refresh_token_grant_refresh_token_lifespan": "string"
}
```

Lifespans of different token types issued for this OAuth 2.0 Client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization_code_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|authorization_code_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|authorization_code_grant_refresh_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|client_credentials_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|device_authorization_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|device_authorization_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|device_authorization_grant_refresh_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|implicit_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|implicit_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|jwt_bearer_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_access_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_id_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|
|refresh_token_grant_refresh_token_lifespan|[NullDuration](#schemanullduration)|false|none|Specify a time duration in milliseconds, seconds, minutes, hours.|

<h2 id="tocS_oAuth2ConsentRequest">oAuth2ConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2consentrequest"></a>
<a id="schema_oAuth2ConsentRequest"></a>
<a id="tocSoauth2consentrequest"></a>
<a id="tocsoauth2consentrequest"></a>

```json
{
  "acr": "string",
  "amr": [
    "string"
  ],
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "consent_request_id": "string",
  "context": null,
  "login_challenge": "string",
  "login_session_id": "string",
  "oidc_context": {
    "acr_values": [
      "string"
    ],
    "display": "string",
    "id_token_hint_claims": {
      "property1": null,
      "property2": null
    },
    "login_hint": "string",
    "ui_locales": [
      "string"
    ]
  },
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ],
  "skip": true,
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acr|string|false|none|ACR represents the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it<br>to express that, for example, a user authenticated using two factor authentication.|
|amr|[string]|false|none|AMR is the Authentication Methods References value for this<br>authentication session. You can use it to specify the method a user used to<br>authenticate. For example, if the acr indicates a user used two factor<br>authentication, the amr can express they used a software-secured key.|
|challenge|string|true|none|Challenge is used to retrieve/accept/deny the consent request.|
|client|[oAuth2Client](#schemaoauth2client)|false|none|OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are<br>generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.|
|consent_request_id|string|false|none|ConsentRequestID is the ID of the consent request.|
|context|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|login_challenge|string|false|none|LoginChallenge is the login challenge this consent challenge belongs to. It can be used to associate<br>a login and consent request in the login & consent app.|
|login_session_id|string|false|none|LoginSessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag)<br>this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false)<br>this will be a new random value. This value is used as the "sid" parameter in the ID Token and in OIDC Front-/Back-<br>channel logout. It's value can generally be used to associate consecutive login requests by a certain user.|
|oidc_context|[oAuth2ConsentRequestOpenIDConnectContext](#schemaoauth2consentrequestopenidconnectcontext)|false|none|none|
|request_url|string|false|none|RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which<br>initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but<br>might come in handy if you want to deal with additional request parameters.|
|requested_access_token_audience|[string]|false|none|RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.|
|requested_scope|[string]|false|none|RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.|
|skip|boolean|false|none|Skip, if true, implies that the client has requested the same scopes from the same user previously.<br>If true, you must not ask the user to grant the requested scopes. You must however either allow or deny the<br>consent request using the usual API call.|
|subject|string|false|none|Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope<br>requested by the OAuth 2.0 client.|

<h2 id="tocS_oAuth2ConsentRequestOpenIDConnectContext">oAuth2ConsentRequestOpenIDConnectContext</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2consentrequestopenidconnectcontext"></a>
<a id="schema_oAuth2ConsentRequestOpenIDConnectContext"></a>
<a id="tocSoauth2consentrequestopenidconnectcontext"></a>
<a id="tocsoauth2consentrequestopenidconnectcontext"></a>

```json
{
  "acr_values": [
    "string"
  ],
  "display": "string",
  "id_token_hint_claims": {
    "property1": null,
    "property2": null
  },
  "login_hint": "string",
  "ui_locales": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acr_values|[string]|false|none|ACRValues is the Authentication AuthorizationContext Class Reference requested in the OAuth 2.0 Authorization request.<br>It is a parameter defined by OpenID Connect and expresses which level of authentication (e.g. 2FA) is required.<br><br>OpenID Connect defines it as follows:<br>> Requested Authentication AuthorizationContext Class Reference values. Space-separated string that specifies the acr values<br>that the Authorization Server is being requested to use for processing this Authentication Request, with the<br>values appearing in order of preference. The Authentication AuthorizationContext Class satisfied by the authentication<br>performed is returned as the acr Claim Value, as specified in Section 2. The acr Claim is requested as a<br>Voluntary Claim by this parameter.|
|display|string|false|none|Display is a string value that specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User.<br>The defined values are:<br>page: The Authorization Server SHOULD display the authentication and consent UI consistent with a full User Agent page view. If the display parameter is not specified, this is the default display mode.<br>popup: The Authorization Server SHOULD display the authentication and consent UI consistent with a popup User Agent window. The popup User Agent window should be of an appropriate size for a login-focused dialog and should not obscure the entire window that it is popping up over.<br>touch: The Authorization Server SHOULD display the authentication and consent UI consistent with a device that leverages a touch interface.<br>wap: The Authorization Server SHOULD display the authentication and consent UI consistent with a "feature phone" type display.<br><br>The Authorization Server MAY also attempt to detect the capabilities of the User Agent and present an appropriate display.|
|id_token_hint_claims|object|false|none|IDTokenHintClaims are the claims of the ID Token previously issued by the Authorization Server being passed as a hint about the<br>End-User's current or past authenticated session with the Client.|
|login_hint|string|false|none|LoginHint hints about the login identifier the End-User might use to log in (if necessary).<br>This hint can be used by an RP if it first asks the End-User for their e-mail address (or other identifier)<br>and then wants to pass that value as a hint to the discovered authorization service. This value MAY also be a<br>phone number in the format specified for the phone_number Claim. The use of this parameter is optional.|
|ui_locales|[string]|false|none|UILocales is the End-User'id preferred languages and scripts for the user interface, represented as a<br>space-separated list of BCP47 [RFC5646] language tag values, ordered by preference. For instance, the value<br>"fr-CA fr en" represents a preference for French as spoken in Canada, then French (without a region designation),<br>followed by English (without a region designation). An error SHOULD NOT result if some or all of the requested<br>locales are not supported by the OpenID Provider.|

<h2 id="tocS_oAuth2ConsentSession">oAuth2ConsentSession</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2consentsession"></a>
<a id="schema_oAuth2ConsentSession"></a>
<a id="tocSoauth2consentsession"></a>
<a id="tocsoauth2consentsession"></a>

```json
{
  "consent_request": {
    "acr": "string",
    "amr": [
      "string"
    ],
    "challenge": "string",
    "client": {
      "access_token_strategy": "string",
      "allowed_cors_origins": [
        "string"
      ],
      "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
      "authorization_code_grant_access_token_lifespan": "string",
      "authorization_code_grant_id_token_lifespan": "string",
      "authorization_code_grant_refresh_token_lifespan": "string",
      "backchannel_logout_session_required": true,
      "backchannel_logout_uri": "string",
      "client_credentials_grant_access_token_lifespan": "string",
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_secret_expires_at": 0,
      "client_uri": "string",
      "contacts": "help@example.org",
      "created_at": "1970-01-01T00:00:00Z",
      "device_authorization_grant_access_token_lifespan": "string",
      "device_authorization_grant_id_token_lifespan": "string",
      "device_authorization_grant_refresh_token_lifespan": "string",
      "frontchannel_logout_session_required": true,
      "frontchannel_logout_uri": "string",
      "grant_types": [
        "string"
      ],
      "implicit_grant_access_token_lifespan": "string",
      "implicit_grant_id_token_lifespan": "string",
      "jwks": {
        "keys": [
          {
            "alg": "RS256",
            "crv": "P-256",
            "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
            "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
            "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
            "e": "AQAB",
            "k": "GawgguFyGrWKav7AX4VKUg",
            "kid": "1603dfe0af8f4596",
            "kty": "RSA",
            "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
            "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
            "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
            "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
            "use": "sig",
            "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
            "x5c": [
              "string"
            ],
            "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
          }
        ]
      },
      "jwks_uri": "string",
      "jwt_bearer_grant_access_token_lifespan": "string",
      "logo_uri": "string",
      "metadata": null,
      "owner": "string",
      "policy_uri": "string",
      "post_logout_redirect_uris": [
        "string"
      ],
      "redirect_uris": "http://mydomain/oauth/callback",
      "refresh_token_grant_access_token_lifespan": "string",
      "refresh_token_grant_id_token_lifespan": "string",
      "refresh_token_grant_refresh_token_lifespan": "string",
      "registration_access_token": "string",
      "registration_client_uri": "string",
      "request_object_signing_alg": "string",
      "request_uris": [
        "string"
      ],
      "response_types": [
        "string"
      ],
      "scope": "scope1 scope-2 scope.3 scope:4",
      "sector_identifier_uri": "string",
      "skip_consent": true,
      "skip_logout_consent": true,
      "subject_type": "string",
      "token_endpoint_auth_method": "client_secret_basic",
      "token_endpoint_auth_signing_alg": "string",
      "tos_uri": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "userinfo_signed_response_alg": "string"
    },
    "consent_request_id": "string",
    "context": null,
    "login_challenge": "string",
    "login_session_id": "string",
    "oidc_context": {
      "acr_values": [
        "string"
      ],
      "display": "string",
      "id_token_hint_claims": {
        "property1": null,
        "property2": null
      },
      "login_hint": "string",
      "ui_locales": [
        "string"
      ]
    },
    "request_url": "string",
    "requested_access_token_audience": [
      "string"
    ],
    "requested_scope": [
      "string"
    ],
    "skip": true,
    "subject": "string"
  },
  "consent_request_id": "string",
  "context": null,
  "grant_access_token_audience": [
    "string"
  ],
  "grant_scope": [
    "string"
  ],
  "handled_at": "1970-01-01T00:00:00Z",
  "remember": true,
  "remember_for": 0,
  "session": {
    "access_token": null,
    "id_token": null
  }
}
```

A completed OAuth 2.0 Consent Session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent_request|[oAuth2ConsentRequest](#schemaoauth2consentrequest)|false|none|none|
|consent_request_id|string|false|none|ConsentRequestID is the identifier of the consent request that initiated this consent session.|
|context|[JSONRawMessage](#schemajsonrawmessage)|false|none|none|
|grant_access_token_audience|[string]|false|none|Audience Granted<br><br>GrantedAudience sets the audience the user authorized the client to use. Should be a subset of `requested_access_token_audience`.|
|grant_scope|[string]|false|none|Scope Granted<br><br>GrantScope sets the scope the user authorized the client to use. Should be a subset of `requested_scope`.|
|handled_at|[nullTime](#schemanulltime-1)|false|none|none|
|remember|boolean|false|none|Remember Consent<br><br>Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same<br>client asks the same user for the same, or a subset of, scope.|
|remember_for|integer(int64)|false|none|Remember Consent For<br><br>RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the<br>authorization will be remembered indefinitely.|
|session|[acceptOAuth2ConsentRequestSession](#schemaacceptoauth2consentrequestsession)|false|none|none|

<h2 id="tocS_oAuth2ConsentSessions">oAuth2ConsentSessions</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2consentsessions"></a>
<a id="schema_oAuth2ConsentSessions"></a>
<a id="tocSoauth2consentsessions"></a>
<a id="tocsoauth2consentsessions"></a>

```json
[
  {
    "consent_request": {
      "acr": "string",
      "amr": [
        "string"
      ],
      "challenge": "string",
      "client": {
        "access_token_strategy": "string",
        "allowed_cors_origins": [
          "string"
        ],
        "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
        "authorization_code_grant_access_token_lifespan": "string",
        "authorization_code_grant_id_token_lifespan": "string",
        "authorization_code_grant_refresh_token_lifespan": "string",
        "backchannel_logout_session_required": true,
        "backchannel_logout_uri": "string",
        "client_credentials_grant_access_token_lifespan": "string",
        "client_id": "string",
        "client_name": "string",
        "client_secret": "string",
        "client_secret_expires_at": 0,
        "client_uri": "string",
        "contacts": "help@example.org",
        "created_at": "1970-01-01T00:00:00Z",
        "device_authorization_grant_access_token_lifespan": "string",
        "device_authorization_grant_id_token_lifespan": "string",
        "device_authorization_grant_refresh_token_lifespan": "string",
        "frontchannel_logout_session_required": true,
        "frontchannel_logout_uri": "string",
        "grant_types": [
          "string"
        ],
        "implicit_grant_access_token_lifespan": "string",
        "implicit_grant_id_token_lifespan": "string",
        "jwks": {
          "keys": [
            {
              "alg": "RS256",
              "crv": "P-256",
              "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
              "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
              "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
              "e": "AQAB",
              "k": "GawgguFyGrWKav7AX4VKUg",
              "kid": "1603dfe0af8f4596",
              "kty": "RSA",
              "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
              "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
              "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
              "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
              "use": "sig",
              "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
              "x5c": [
                "string"
              ],
              "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
            }
          ]
        },
        "jwks_uri": "string",
        "jwt_bearer_grant_access_token_lifespan": "string",
        "logo_uri": "string",
        "metadata": null,
        "owner": "string",
        "policy_uri": "string",
        "post_logout_redirect_uris": [
          "string"
        ],
        "redirect_uris": "http://mydomain/oauth/callback",
        "refresh_token_grant_access_token_lifespan": "string",
        "refresh_token_grant_id_token_lifespan": "string",
        "refresh_token_grant_refresh_token_lifespan": "string",
        "registration_access_token": "string",
        "registration_client_uri": "string",
        "request_object_signing_alg": "string",
        "request_uris": [
          "string"
        ],
        "response_types": [
          "string"
        ],
        "scope": "scope1 scope-2 scope.3 scope:4",
        "sector_identifier_uri": "string",
        "skip_consent": true,
        "skip_logout_consent": true,
        "subject_type": "string",
        "token_endpoint_auth_method": "client_secret_basic",
        "token_endpoint_auth_signing_alg": "string",
        "tos_uri": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "userinfo_signed_response_alg": "string"
      },
      "consent_request_id": "string",
      "context": null,
      "login_challenge": "string",
      "login_session_id": "string",
      "oidc_context": {
        "acr_values": [
          "string"
        ],
        "display": "string",
        "id_token_hint_claims": {
          "property1": null,
          "property2": null
        },
        "login_hint": "string",
        "ui_locales": [
          "string"
        ]
      },
      "request_url": "string",
      "requested_access_token_audience": [
        "string"
      ],
      "requested_scope": [
        "string"
      ],
      "skip": true,
      "subject": "string"
    },
    "consent_request_id": "string",
    "context": null,
    "grant_access_token_audience": [
      "string"
    ],
    "grant_scope": [
      "string"
    ],
    "handled_at": "1970-01-01T00:00:00Z",
    "remember": true,
    "remember_for": 0,
    "session": {
      "access_token": null,
      "id_token": null
    }
  }
]
```

List of OAuth 2.0 Consent Sessions

<h2 id="tocS_oAuth2LoginRequest">oAuth2LoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2loginrequest"></a>
<a id="schema_oAuth2LoginRequest"></a>
<a id="tocSoauth2loginrequest"></a>
<a id="tocsoauth2loginrequest"></a>

```json
{
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "oidc_context": {
    "acr_values": [
      "string"
    ],
    "display": "string",
    "id_token_hint_claims": {
      "property1": null,
      "property2": null
    },
    "login_hint": "string",
    "ui_locales": [
      "string"
    ]
  },
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ],
  "session_id": "string",
  "skip": true,
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string|true|none|ID is the identifier of the login request.|
|client|[oAuth2Client](#schemaoauth2client)|true|none|OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are<br>generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.|
|oidc_context|[oAuth2ConsentRequestOpenIDConnectContext](#schemaoauth2consentrequestopenidconnectcontext)|false|none|none|
|request_url|string|true|none|RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which<br>initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but<br>might come in handy if you want to deal with additional request parameters.|
|requested_access_token_audience|[string]|false|none|RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.|
|requested_scope|[string]|false|none|RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.|
|session_id|string|false|none|SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag)<br>this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false)<br>this will be a new random value. This value is used as the "sid" parameter in the ID Token and in OIDC Front-/Back-<br>channel logout. It's value can generally be used to associate consecutive login requests by a certain user.|
|skip|boolean|true|none|Skip, if true, implies that the client has requested the same scopes from the same user previously.<br>If true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.<br><br>This feature allows you to update / set session information.|
|subject|string|true|none|Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope<br>requested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type<br>when accepting the login request, or the request will fail.|

<h2 id="tocS_oAuth2LogoutRequest">oAuth2LogoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2logoutrequest"></a>
<a id="schema_oAuth2LogoutRequest"></a>
<a id="tocSoauth2logoutrequest"></a>
<a id="tocsoauth2logoutrequest"></a>

```json
{
  "challenge": "string",
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "expires_at": "1970-01-01T00:00:00Z",
  "request_url": "string",
  "requested_at": "1970-01-01T00:00:00Z",
  "rp_initiated": true,
  "sid": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string|false|none|Challenge is used to retrieve/accept/deny the logout request.|
|client|[oAuth2Client](#schemaoauth2client)|false|none|OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are<br>generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.|
|expires_at|string(date-time)|false|none|none|
|request_url|string|false|none|RequestURL is the original Logout URL requested.|
|requested_at|string(date-time)|false|none|none|
|rp_initiated|boolean|false|none|RPInitiated is set to true if the request was initiated by a Relying Party (RP), also known as an OAuth 2.0 Client.|
|sid|string|false|none|SessionID is the login session ID that was requested to log out.|
|subject|string|false|none|Subject is the user for whom the logout was requested.|

<h2 id="tocS_oAuth2RedirectTo">oAuth2RedirectTo</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2redirectto"></a>
<a id="schema_oAuth2RedirectTo"></a>
<a id="tocSoauth2redirectto"></a>
<a id="tocsoauth2redirectto"></a>

```json
{
  "redirect_to": "string"
}
```

Contains a redirect URL used to complete a login, consent, or logout request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirect_to|string|true|none|RedirectURL is the URL which you should redirect the user's browser to once the authentication process is completed.|

<h2 id="tocS_oAuth2TokenExchange">oAuth2TokenExchange</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2tokenexchange"></a>
<a id="schema_oAuth2TokenExchange"></a>
<a id="tocSoauth2tokenexchange"></a>
<a id="tocsoauth2tokenexchange"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "id_token": "string",
  "refresh_token": "string",
  "scope": "string",
  "token_type": "string"
}
```

OAuth2 Token Exchange Result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|The access token issued by the authorization server.|
|expires_in|integer(int64)|false|none|The lifetime in seconds of the access token. For<br>example, the value "3600" denotes that the access token will<br>expire in one hour from the time the response was generated.|
|id_token|string|false|none|To retrieve a refresh token request the id_token scope.|
|refresh_token|string|false|none|The refresh token, which can be used to obtain new<br>access tokens. To retrieve it add the scope "offline" to your access token request.|
|scope|string|false|none|The scope of the access token|
|token_type|string|false|none|The type of the token issued|

<h2 id="tocS_oidcConfiguration">oidcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaoidcconfiguration"></a>
<a id="schema_oidcConfiguration"></a>
<a id="tocSoidcconfiguration"></a>
<a id="tocsoidcconfiguration"></a>

```json
{
  "authorization_endpoint": "https://playground.ory.sh/ory-hydra/public/oauth2/auth",
  "backchannel_logout_session_supported": true,
  "backchannel_logout_supported": true,
  "claims_parameter_supported": true,
  "claims_supported": [
    "string"
  ],
  "code_challenge_methods_supported": [
    "string"
  ],
  "credentials_endpoint_draft_00": "string",
  "credentials_supported_draft_00": [
    {
      "cryptographic_binding_methods_supported": [
        "string"
      ],
      "cryptographic_suites_supported": [
        "string"
      ],
      "format": "string",
      "types": [
        "string"
      ]
    }
  ],
  "device_authorization_endpoint": "https://playground.ory.sh/ory-hydra/public/oauth2/device/oauth",
  "end_session_endpoint": "string",
  "frontchannel_logout_session_supported": true,
  "frontchannel_logout_supported": true,
  "grant_types_supported": [
    "string"
  ],
  "id_token_signed_response_alg": [
    "string"
  ],
  "id_token_signing_alg_values_supported": [
    "string"
  ],
  "issuer": "https://playground.ory.sh/ory-hydra/public/",
  "jwks_uri": "https://{slug}.projects.oryapis.com/.well-known/jwks.json",
  "registration_endpoint": "https://playground.ory.sh/ory-hydra/admin/client",
  "request_object_signing_alg_values_supported": [
    "string"
  ],
  "request_parameter_supported": true,
  "request_uri_parameter_supported": true,
  "require_request_uri_registration": true,
  "response_modes_supported": [
    "string"
  ],
  "response_types_supported": [
    "string"
  ],
  "revocation_endpoint": "string",
  "scopes_supported": [
    "string"
  ],
  "subject_types_supported": [
    "string"
  ],
  "token_endpoint": "https://playground.ory.sh/ory-hydra/public/oauth2/token",
  "token_endpoint_auth_methods_supported": [
    "string"
  ],
  "userinfo_endpoint": "string",
  "userinfo_signed_response_alg": [
    "string"
  ],
  "userinfo_signing_alg_values_supported": [
    "string"
  ]
}
```

Includes links to several endpoints (for example `/oauth2/token`) and exposes information on supported signature algorithms
among others.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization_endpoint|string|true|none|OAuth 2.0 Authorization Endpoint URL|
|backchannel_logout_session_supported|boolean|false|none|OpenID Connect Back-Channel Logout Session Required<br><br>Boolean value specifying whether the OP can pass a sid (session ID) Claim in the Logout Token to identify the RP<br>session with the OP. If supported, the sid Claim is also included in ID Tokens issued by the OP|
|backchannel_logout_supported|boolean|false|none|OpenID Connect Back-Channel Logout Supported<br><br>Boolean value specifying whether the OP supports back-channel logout, with true indicating support.|
|claims_parameter_supported|boolean|false|none|OpenID Connect Claims Parameter Parameter Supported<br><br>Boolean value specifying whether the OP supports use of the claims parameter, with true indicating support.|
|claims_supported|[string]|false|none|OpenID Connect Supported Claims<br><br>JSON array containing a list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply<br>values for. Note that for privacy or other reasons, this might not be an exhaustive list.|
|code_challenge_methods_supported|[string]|false|none|OAuth 2.0 PKCE Supported Code Challenge Methods<br><br>JSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported<br>by this authorization server.|
|credentials_endpoint_draft_00|string|false|none|OpenID Connect Verifiable Credentials Endpoint<br><br>Contains the URL of the Verifiable Credentials Endpoint.|
|credentials_supported_draft_00|[[credentialSupportedDraft00](#schemacredentialsupporteddraft00)]|false|none|OpenID Connect Verifiable Credentials Supported<br><br>JSON array containing a list of the Verifiable Credentials supported by this authorization server.|
|device_authorization_endpoint|string|true|none|OAuth 2.0 Device Authorization Endpoint URL|
|end_session_endpoint|string|false|none|OpenID Connect End-Session Endpoint<br><br>URL at the OP to which an RP can perform a redirect to request that the End-User be logged out at the OP.|
|frontchannel_logout_session_supported|boolean|false|none|OpenID Connect Front-Channel Logout Session Required<br><br>Boolean value specifying whether the OP can pass iss (issuer) and sid (session ID) query parameters to identify<br>the RP session with the OP when the frontchannel_logout_uri is used. If supported, the sid Claim is also<br>included in ID Tokens issued by the OP.|
|frontchannel_logout_supported|boolean|false|none|OpenID Connect Front-Channel Logout Supported<br><br>Boolean value specifying whether the OP supports HTTP-based logout, with true indicating support.|
|grant_types_supported|[string]|false|none|OAuth 2.0 Supported Grant Types<br><br>JSON array containing a list of the OAuth 2.0 Grant Type values that this OP supports.|
|id_token_signed_response_alg|[string]|true|none|OpenID Connect Default ID Token Signing Algorithms<br><br>Algorithm used to sign OpenID Connect ID Tokens.|
|id_token_signing_alg_values_supported|[string]|true|none|OpenID Connect Supported ID Token Signing Algorithms<br><br>JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token<br>to encode the Claims in a JWT.|
|issuer|string|true|none|OpenID Connect Issuer URL<br><br>An URL using the https scheme with no query or fragment component that the OP asserts as its IssuerURL Identifier.<br>If IssuerURL discovery is supported , this value MUST be identical to the issuer value returned<br>by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this IssuerURL.|
|jwks_uri|string|true|none|OpenID Connect Well-Known JSON Web Keys URL<br><br>URL of the OP's JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate<br>signatures from the OP. The JWK Set MAY also contain the Server's encryption key(s), which are used by RPs<br>to encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use)<br>parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage.<br>Although some algorithms allow the same key to be used for both signatures and encryption, doing so is<br>NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of<br>keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.|
|registration_endpoint|string|false|none|OpenID Connect Dynamic Client Registration Endpoint URL|
|request_object_signing_alg_values_supported|[string]|false|none|OpenID Connect Supported Request Object Signing Algorithms<br><br>JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for Request Objects,<br>which are described in Section 6.1 of OpenID Connect Core 1.0 [OpenID.Core]. These algorithms are used both when<br>the Request Object is passed by value (using the request parameter) and when it is passed by reference<br>(using the request_uri parameter).|
|request_parameter_supported|boolean|false|none|OpenID Connect Request Parameter Supported<br><br>Boolean value specifying whether the OP supports use of the request parameter, with true indicating support.|
|request_uri_parameter_supported|boolean|false|none|OpenID Connect Request URI Parameter Supported<br><br>Boolean value specifying whether the OP supports use of the request_uri parameter, with true indicating support.|
|require_request_uri_registration|boolean|false|none|OpenID Connect Requires Request URI Registration<br><br>Boolean value specifying whether the OP requires any request_uri values used to be pre-registered<br>using the request_uris registration parameter.|
|response_modes_supported|[string]|false|none|OAuth 2.0 Supported Response Modes<br><br>JSON array containing a list of the OAuth 2.0 response_mode values that this OP supports.|
|response_types_supported|[string]|true|none|OAuth 2.0 Supported Response Types<br><br>JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID<br>Providers MUST support the code, id_token, and the token id_token Response Type values.|
|revocation_endpoint|string|false|none|OAuth 2.0 Token Revocation URL<br><br>URL of the authorization server's OAuth 2.0 revocation endpoint.|
|scopes_supported|[string]|false|none|OAuth 2.0 Supported Scope Values<br><br>JSON array containing a list of the OAuth 2.0 [RFC6749] scope values that this server supports. The server MUST<br>support the openid scope value. Servers MAY choose not to advertise some supported scope values even when this parameter is used|
|subject_types_supported|[string]|true|none|OpenID Connect Supported Subject Types<br><br>JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include<br>pairwise and public.|
|token_endpoint|string|true|none|OAuth 2.0 Token Endpoint URL|
|token_endpoint_auth_methods_supported|[string]|false|none|OAuth 2.0 Supported Client Authentication Methods<br><br>JSON array containing a list of Client Authentication methods supported by this Token Endpoint. The options are<br>client_secret_post, client_secret_basic, client_secret_jwt, and private_key_jwt, as described in Section 9 of OpenID Connect Core 1.0|
|userinfo_endpoint|string|false|none|OpenID Connect Userinfo URL<br><br>URL of the OP's UserInfo Endpoint.|
|userinfo_signed_response_alg|[string]|true|none|OpenID Connect User Userinfo Signing Algorithm<br><br>Algorithm used to sign OpenID Connect Userinfo Responses.|
|userinfo_signing_alg_values_supported|[string]|false|none|OpenID Connect Supported Userinfo Signing Algorithm<br><br>JSON array containing a list of the JWS [JWS] signing algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].|

<h2 id="tocS_oidcUserInfo">oidcUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemaoidcuserinfo"></a>
<a id="schema_oidcUserInfo"></a>
<a id="tocSoidcuserinfo"></a>
<a id="tocsoidcuserinfo"></a>

```json
{
  "birthdate": "string",
  "email": "string",
  "email_verified": true,
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "locale": "string",
  "middle_name": "string",
  "name": "string",
  "nickname": "string",
  "phone_number": "string",
  "phone_number_verified": true,
  "picture": "string",
  "preferred_username": "string",
  "profile": "string",
  "sub": "string",
  "updated_at": 0,
  "website": "string",
  "zoneinfo": "string"
}
```

OpenID Connect Userinfo

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birthdate|string|false|none|End-User's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. The year MAY be 0000, indicating that it is omitted. To represent only the year, YYYY format is allowed. Note that depending on the underlying platform's date related function, providing just year can result in varying month and day, so the implementers need to take this factor into account to correctly process the dates.|
|email|string|false|none|End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322] addr-spec syntax. The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.|
|email_verified|boolean|false|none|True if the End-User's e-mail address has been verified; otherwise false. When this Claim Value is true, this means that the OP took affirmative steps to ensure that this e-mail address was controlled by the End-User at the time the verification was performed. The means by which an e-mail address is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating.|
|family_name|string|false|none|Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.|
|gender|string|false|none|End-User's gender. Values defined by this specification are female and male. Other values MAY be used when neither of the defined values are applicable.|
|given_name|string|false|none|Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.|
|locale|string|false|none|End-User's locale, represented as a BCP47 [RFC5646] language tag. This is typically an ISO 639-1 Alpha-2 [ISO639‑1] language code in lowercase and an ISO 3166-1 Alpha-2 [ISO3166‑1] country code in uppercase, separated by a dash. For example, en-US or fr-CA. As a compatibility note, some implementations have used an underscore as the separator rather than a dash, for example, en_US; Relying Parties MAY choose to accept this locale syntax as well.|
|middle_name|string|false|none|Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.|
|name|string|false|none|End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.|
|nickname|string|false|none|Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.|
|phone_number|string|false|none|End-User's preferred telephone number. E.164 [E.164] is RECOMMENDED as the format of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400. If the phone number contains an extension, it is RECOMMENDED that the extension be represented using the RFC 3966 [RFC3966] extension syntax, for example, +1 (604) 555-1234;ext=5678.|
|phone_number_verified|boolean|false|none|True if the End-User's phone number has been verified; otherwise false. When this Claim Value is true, this means that the OP took affirmative steps to ensure that this phone number was controlled by the End-User at the time the verification was performed. The means by which a phone number is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating. When true, the phone_number Claim MUST be in E.164 format and any extensions MUST be represented in RFC 3966 format.|
|picture|string|false|none|URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User.|
|preferred_username|string|false|none|Non-unique shorthand name by which the End-User wishes to be referred to at the RP, such as janedoe or j.doe. This value MAY be any valid JSON string including special characters such as @, /, or whitespace.|
|profile|string|false|none|URL of the End-User's profile page. The contents of this Web page SHOULD be about the End-User.|
|sub|string|false|none|Subject - Identifier for the End-User at the IssuerURL.|
|updated_at|integer(int64)|false|none|Time the End-User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.|
|website|string|false|none|URL of the End-User's Web page or blog. This Web page SHOULD contain information published by the End-User or an organization that the End-User is affiliated with.|
|zoneinfo|string|false|none|String from zoneinfo [zoneinfo] time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.|

<h2 id="tocS_rejectOAuth2Request">rejectOAuth2Request</h2>
<!-- backwards compatibility -->
<a id="schemarejectoauth2request"></a>
<a id="schema_rejectOAuth2Request"></a>
<a id="tocSrejectoauth2request"></a>
<a id="tocsrejectoauth2request"></a>

```json
{
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "string",
  "status_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).<br><br>Defaults to `request_denied`.|
|error_debug|string|false|none|Debug contains information to help resolve the problem as a developer. Usually not exposed<br>to the public but only in the server logs.|
|error_description|string|false|none|Description of the error in a human readable format.|
|error_hint|string|false|none|Hint to help resolve the error.|
|status_code|integer(int64)|false|none|Represents the HTTP status code of the error (e.g. 401 or 403)<br><br>Defaults to 400|

<h2 id="tocS_tokenPagination">tokenPagination</h2>
<!-- backwards compatibility -->
<a id="schematokenpagination"></a>
<a id="schema_tokenPagination"></a>
<a id="tocStokenpagination"></a>
<a id="tocstokenpagination"></a>

```json
{
  "page_size": 250,
  "page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_size|integer(int64)|false|none|Items per page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|string|false|none|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|

<h2 id="tocS_tokenPaginationHeaders">tokenPaginationHeaders</h2>
<!-- backwards compatibility -->
<a id="schematokenpaginationheaders"></a>
<a id="schema_tokenPaginationHeaders"></a>
<a id="tocStokenpaginationheaders"></a>
<a id="tocstokenpaginationheaders"></a>

```json
{
  "link": "string",
  "x-total-count": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|The link header contains pagination links.<br><br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).<br><br>in: header|
|x-total-count|string|false|none|The total number of clients.<br><br>in: header|

<h2 id="tocS_tokenPaginationRequestParameters">tokenPaginationRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schematokenpaginationrequestparameters"></a>
<a id="schema_tokenPaginationRequestParameters"></a>
<a id="tocStokenpaginationrequestparameters"></a>
<a id="tocstokenpaginationrequestparameters"></a>

```json
{
  "page_size": 250,
  "page_token": "string"
}
```

The `Link` HTTP header contains multiple links (`first`, `next`, `last`, `previous`) formatted as:
`<https://{project-slug}.projects.oryapis.com/admin/clients?page_size={limit}&page_token={offset}>; rel="{page}"`

For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_size|integer(int64)|false|none|Items per Page<br><br>This is the number of items per page to return.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|
|page_token|string|false|none|Next Page Token<br><br>The next page token.<br>For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).|

<h2 id="tocS_tokenPaginationResponseHeaders">tokenPaginationResponseHeaders</h2>
<!-- backwards compatibility -->
<a id="schematokenpaginationresponseheaders"></a>
<a id="schema_tokenPaginationResponseHeaders"></a>
<a id="tocStokenpaginationresponseheaders"></a>
<a id="tocstokenpaginationresponseheaders"></a>

```json
{
  "link": "string",
  "x-total-count": 0
}
```

The `Link` HTTP header contains multiple links (`first`, `next`, `last`, `previous`) formatted as:
`<https://{project-slug}.projects.oryapis.com/admin/clients?page_size={limit}&page_token={offset}>; rel="{page}"`

For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|The Link HTTP Header<br><br>The `Link` header contains a comma-delimited list of links to the following pages:<br><br>first: The first page of results.<br>next: The next page of results.<br>prev: The previous page of results.<br>last: The last page of results.<br><br>Pages are omitted if they do not exist. For example, if there is no next page, the `next` link is omitted. Examples:<br><br></clients?page_size=5&page_token=0>; rel="first",</clients?page_size=5&page_token=15>; rel="next",</clients?page_size=5&page_token=5>; rel="prev",</clients?page_size=5&page_token=20>; rel="last"|
|x-total-count|integer(int64)|false|none|The X-Total-Count HTTP Header<br><br>The `X-Total-Count` header contains the total number of items in the collection.|

<h2 id="tocS_trustOAuth2JwtGrantIssuer">trustOAuth2JwtGrantIssuer</h2>
<!-- backwards compatibility -->
<a id="schematrustoauth2jwtgrantissuer"></a>
<a id="schema_trustOAuth2JwtGrantIssuer"></a>
<a id="tocStrustoauth2jwtgrantissuer"></a>
<a id="tocstrustoauth2jwtgrantissuer"></a>

```json
{
  "allow_any_subject": true,
  "expires_at": "1970-01-01T00:00:00Z",
  "issuer": "https://jwt-idp.example.com",
  "jwk": {
    "alg": "RS256",
    "crv": "P-256",
    "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
    "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
    "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
    "e": "AQAB",
    "k": "GawgguFyGrWKav7AX4VKUg",
    "kid": "1603dfe0af8f4596",
    "kty": "RSA",
    "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
    "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
    "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
    "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
    "use": "sig",
    "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "x5c": [
      "string"
    ],
    "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
  },
  "scope": [
    "openid",
    "offline"
  ],
  "subject": "mike@example.com"
}
```

Trust OAuth2 JWT Bearer Grant Type Issuer Request Body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_any_subject|boolean|false|none|The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.|
|expires_at|string(date-time)|true|none|The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".|
|issuer|string|true|none|The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).|
|jwk|[jsonWebKey](#schemajsonwebkey)|true|none|none|
|scope|[string]|true|none|The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])|
|subject|string|false|none|The "subject" identifies the principal that is the subject of the JWT.|

<h2 id="tocS_trustedOAuth2JwtGrantIssuer">trustedOAuth2JwtGrantIssuer</h2>
<!-- backwards compatibility -->
<a id="schematrustedoauth2jwtgrantissuer"></a>
<a id="schema_trustedOAuth2JwtGrantIssuer"></a>
<a id="tocStrustedoauth2jwtgrantissuer"></a>
<a id="tocstrustedoauth2jwtgrantissuer"></a>

```json
{
  "allow_any_subject": true,
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "id": "9edc811f-4e28-453c-9b46-4de65f00217f",
  "issuer": "https://jwt-idp.example.com",
  "public_key": {
    "kid": "123e4567-e89b-12d3-a456-426655440000",
    "set": "https://jwt-idp.example.com"
  },
  "scope": [
    "openid",
    "offline"
  ],
  "subject": "mike@example.com"
}
```

OAuth2 JWT Bearer Grant Type Issuer Trust Relationship

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_any_subject|boolean|false|none|The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.|
|created_at|string(date-time)|false|none|The "created_at" indicates, when grant was created.|
|expires_at|string(date-time)|false|none|The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".|
|id|string|false|none|none|
|issuer|string|false|none|The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).|
|public_key|[trustedOAuth2JwtGrantJsonWebKey](#schematrustedoauth2jwtgrantjsonwebkey)|false|none|OAuth2 JWT Bearer Grant Type Issuer Trusted JSON Web Key|
|scope|[string]|false|none|The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])|
|subject|string|false|none|The "subject" identifies the principal that is the subject of the JWT.|

<h2 id="tocS_trustedOAuth2JwtGrantIssuers">trustedOAuth2JwtGrantIssuers</h2>
<!-- backwards compatibility -->
<a id="schematrustedoauth2jwtgrantissuers"></a>
<a id="schema_trustedOAuth2JwtGrantIssuers"></a>
<a id="tocStrustedoauth2jwtgrantissuers"></a>
<a id="tocstrustedoauth2jwtgrantissuers"></a>

```json
[
  {
    "allow_any_subject": true,
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "id": "9edc811f-4e28-453c-9b46-4de65f00217f",
    "issuer": "https://jwt-idp.example.com",
    "public_key": {
      "kid": "123e4567-e89b-12d3-a456-426655440000",
      "set": "https://jwt-idp.example.com"
    },
    "scope": [
      "openid",
      "offline"
    ],
    "subject": "mike@example.com"
  }
]
```

OAuth2 JWT Bearer Grant Type Issuer Trust Relationships

<h2 id="tocS_trustedOAuth2JwtGrantJsonWebKey">trustedOAuth2JwtGrantJsonWebKey</h2>
<!-- backwards compatibility -->
<a id="schematrustedoauth2jwtgrantjsonwebkey"></a>
<a id="schema_trustedOAuth2JwtGrantJsonWebKey"></a>
<a id="tocStrustedoauth2jwtgrantjsonwebkey"></a>
<a id="tocstrustedoauth2jwtgrantjsonwebkey"></a>

```json
{
  "kid": "123e4567-e89b-12d3-a456-426655440000",
  "set": "https://jwt-idp.example.com"
}
```

OAuth2 JWT Bearer Grant Type Issuer Trusted JSON Web Key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kid|string|false|none|The "key_id" is key unique identifier (same as kid header in jws/jwt).|
|set|string|false|none|The "set" is basically a name for a group(set) of keys. Will be the same as "issuer" in grant.|

<h2 id="tocS_unexpectedError">unexpectedError</h2>
<!-- backwards compatibility -->
<a id="schemaunexpectederror"></a>
<a id="schema_unexpectedError"></a>
<a id="tocSunexpectederror"></a>
<a id="tocsunexpectederror"></a>

```json
"string"
```

<h2 id="tocS_verifiableCredentialPrimingResponse">verifiableCredentialPrimingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablecredentialprimingresponse"></a>
<a id="schema_verifiableCredentialPrimingResponse"></a>
<a id="tocSverifiablecredentialprimingresponse"></a>
<a id="tocsverifiablecredentialprimingresponse"></a>

```json
{
  "c_nonce": "string",
  "c_nonce_expires_in": 0,
  "error": "string",
  "error_debug": "string",
  "error_description": "string",
  "error_hint": "string",
  "format": "string",
  "status_code": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c_nonce|string|false|none|none|
|c_nonce_expires_in|integer(int64)|false|none|none|
|error|string|false|none|none|
|error_debug|string|false|none|none|
|error_description|string|false|none|none|
|error_hint|string|false|none|none|
|format|string|false|none|none|
|status_code|integer(int64)|false|none|none|

<h2 id="tocS_verifiableCredentialResponse">verifiableCredentialResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablecredentialresponse"></a>
<a id="schema_verifiableCredentialResponse"></a>
<a id="tocSverifiablecredentialresponse"></a>
<a id="tocsverifiablecredentialresponse"></a>

```json
{
  "credential_draft_00": "string",
  "format": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential_draft_00|string|false|none|none|
|format|string|false|none|none|

<h2 id="tocS_verifyUserCodeRequest">verifyUserCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyusercoderequest"></a>
<a id="schema_verifyUserCodeRequest"></a>
<a id="tocSverifyusercoderequest"></a>
<a id="tocsverifyusercoderequest"></a>

```json
{
  "client": {
    "access_token_strategy": "string",
    "allowed_cors_origins": [
      "string"
    ],
    "audience": "https://mydomain.com/api/users, https://mydomain.com/api/posts",
    "authorization_code_grant_access_token_lifespan": "string",
    "authorization_code_grant_id_token_lifespan": "string",
    "authorization_code_grant_refresh_token_lifespan": "string",
    "backchannel_logout_session_required": true,
    "backchannel_logout_uri": "string",
    "client_credentials_grant_access_token_lifespan": "string",
    "client_id": "string",
    "client_name": "string",
    "client_secret": "string",
    "client_secret_expires_at": 0,
    "client_uri": "string",
    "contacts": "help@example.org",
    "created_at": "1970-01-01T00:00:00Z",
    "device_authorization_grant_access_token_lifespan": "string",
    "device_authorization_grant_id_token_lifespan": "string",
    "device_authorization_grant_refresh_token_lifespan": "string",
    "frontchannel_logout_session_required": true,
    "frontchannel_logout_uri": "string",
    "grant_types": [
      "string"
    ],
    "implicit_grant_access_token_lifespan": "string",
    "implicit_grant_id_token_lifespan": "string",
    "jwks": {
      "keys": [
        {
          "alg": "RS256",
          "crv": "P-256",
          "d": "T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE",
          "dp": "G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0",
          "dq": "s9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk",
          "e": "AQAB",
          "k": "GawgguFyGrWKav7AX4VKUg",
          "kid": "1603dfe0af8f4596",
          "kty": "RSA",
          "n": "vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0",
          "p": "6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ",
          "q": "0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ",
          "qi": "GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU",
          "use": "sig",
          "x": "f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
          "x5c": [
            "string"
          ],
          "y": "x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0"
        }
      ]
    },
    "jwks_uri": "string",
    "jwt_bearer_grant_access_token_lifespan": "string",
    "logo_uri": "string",
    "metadata": null,
    "owner": "string",
    "policy_uri": "string",
    "post_logout_redirect_uris": [
      "string"
    ],
    "redirect_uris": "http://mydomain/oauth/callback",
    "refresh_token_grant_access_token_lifespan": "string",
    "refresh_token_grant_id_token_lifespan": "string",
    "refresh_token_grant_refresh_token_lifespan": "string",
    "registration_access_token": "string",
    "registration_client_uri": "string",
    "request_object_signing_alg": "string",
    "request_uris": [
      "string"
    ],
    "response_types": [
      "string"
    ],
    "scope": "scope1 scope-2 scope.3 scope:4",
    "sector_identifier_uri": "string",
    "skip_consent": true,
    "skip_logout_consent": true,
    "subject_type": "string",
    "token_endpoint_auth_method": "client_secret_basic",
    "token_endpoint_auth_signing_alg": "string",
    "tos_uri": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "userinfo_signed_response_alg": "string"
  },
  "device_code_request_id": "string",
  "request_url": "string",
  "requested_access_token_audience": [
    "string"
  ],
  "requested_scope": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[oAuth2Client](#schemaoauth2client)|false|none|OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are<br>generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.|
|device_code_request_id|string|false|none|none|
|request_url|string|false|none|RequestURL is the original Device Authorization URL requested.|
|requested_access_token_audience|[string]|false|none|RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.|
|requested_scope|[string]|false|none|RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.|

<h2 id="tocS_version">version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Version is the service's version.|
