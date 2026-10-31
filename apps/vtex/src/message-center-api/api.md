<h1 id="message-center-api">Message Center API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

License: MIT

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="message-center-api-dkim-configuration">DKIM Configuration</h1>

## Generate DKIM keys

<a id="opIdcreateDKIM"></a>

> Code samples

```bash
curl https://example.com/api/mail-service/pvt/providers/help%40valdie.co/dkim \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`POST /api/mail-service/pvt/providers/{EmailProvider}/dkim`

Create DKIM keys for sender that was setup in VTEX mail servers

<h3 id="generate-dkim-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailProvider|path|string|true|E-mail address for sender that was setup in VTEX mail servers|

> Example responses

> 200 Response

```json
{
  "dkimKeys": [
    "'n3zbltwizctxpgcmqrars4bmfdd3zlyo._domainkey.valdie.co','CNAME','n3zbltwizctxpgcmqrars4bmfdd3zlyo.dkim.amazonses.com'",
    "'sq4iae4be52fhqq3wm44btttvndeecfv._domainkey.valdie.co','CNAME','sq4iae4be52fhqq3wm44btttvndeecfv.dkim.amazonses.com'",
    "'n4z6g2g7yfy4pnhjklfesxrrkt4o2ha4._domainkey.valdie.co','CNAME','n4z6g2g7yfy4pnhjklfesxrrkt4o2ha4.dkim.amazonses.com'"
  ],
  "status": "created"
}
```

> 401 Response

```json
{
  "status": 401,
  "title": "Unauthorized",
  "traceId": "00-f8949e0e2a80ff4481b4375908349701-a6a7ecf8b50a2043-00",
  "type": "https://tools.ietf.org/html/rfc7235#section-3.1"
}
```

<h3 id="generate-dkim-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[200_OK](#schema200_ok)|
|401|Unauthorized|Unauthorized|[401_Unauthorized](#schema401_unauthorized)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_200_OK">200_OK</h2>
<!-- backwards compatibility -->
<a id="schema200_ok"></a>
<a id="schema_200_OK"></a>
<a id="tocS200_ok"></a>
<a id="tocs200_ok"></a>

```json
{
  "dkimKeys": [
    null
  ],
  "status": "emailNotFound"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dkimKeys|[object]|false|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|emailNotFound|
|status|emailNotVerified|
|status|created|

<h2 id="tocS_401_Unauthorized">401_Unauthorized</h2>
<!-- backwards compatibility -->
<a id="schema401_unauthorized"></a>
<a id="schema_401_Unauthorized"></a>
<a id="tocS401_unauthorized"></a>
<a id="tocs401_unauthorized"></a>

```json
{
  "status": 401,
  "title": "Unauthorized",
  "traceId": "string",
  "type": "https://tools.ietf.org/html/rfc7235#section-3.1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|true|none|none|
|title|string|true|none|none|
|traceId|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|401|
|title|Unauthorized|
|type|https://tools.ietf.org/html/rfc7235#section-3.1|
