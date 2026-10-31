<h1 id="nicat-domainfinder-api-documentation">nic.at Domainfinder API Documentation v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="nicat-domainfinder-api-documentation-default">Default</h1>

## Get .at domain name suggestions

> Code samples

```bash
curl 'https://example.com/api/v1/suggest?term=mydomain' \
  -H 'Accept: application/json'
```

`GET /api/v1/suggest`

Provides a list of available .at domain names related to the given input term or domain

<h3 id="get-at-domain-name-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|true|Domainname/term to obtain suggestions for|

> Example responses

> 200 Response

```json
[
  "mynewdomain.at",
  "newdomain.at"
]
```

<h3 id="get-at-domain-name-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of domain suggestions|Inline|

<h3 id="get-at-domain-name-suggestions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
||[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
