<h1 id="co-win-certificate-api">Co-WIN Certificate API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API to get Co-WIN vaccination certificate.

Base URLs:

* <a href="https://cowin.gov.cin/cert/external">https://cowin.gov.cin/cert/external</a>

<a href="https://www.cowin.gov.in/terms-condition">Terms of service</a>
Web: <a href="https://www.cowin.gov.in">Co-WIN by Ministry of Health and Family Welfare</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **Authorization**, in: header.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://divoc.cowin.gov.in/realms/divoc/protocol/openid-connect/auth](https://divoc.cowin.gov.in/realms/divoc/protocol/openid-connect/auth)
    - Token URL = [https://divoc.xiv.in/auth/realms/divoc/protocol/openid-connect/token](https://divoc.xiv.in/auth/realms/divoc/protocol/openid-connect/token)

|Scope|Scope Description|
|---|---|
|read:cert|read or download certificates|

<h1 id="co-win-certificate-api-certificate">certificate</h1>

Certificate api

## Download the certificate in pdf format

<a id="opIdgetCertificatePdf"></a>

> Code samples

```bash
curl https://example.com/pdf/certificate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "beneficiaryId": "string",
    "mobile": "string"
  }'
```

`POST /pdf/certificate`

> Body parameter

```json
{
  "beneficiaryId": "string",
  "mobile": "string"
}
```

<h3 id="download-the-certificate-in-pdf-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CertificateRequest](#schemacertificaterequest)|true|none|
|» beneficiaryId|body|string|false|none|
|» mobile|body|string|false|none|

<h3 id="download-the-certificate-in-pdf-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cert_auth ( Scopes: read:cert )
</aside>

# Schemas

<h2 id="tocS_CertificateRequest">CertificateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacertificaterequest"></a>
<a id="schema_CertificateRequest"></a>
<a id="tocScertificaterequest"></a>
<a id="tocscertificaterequest"></a>

```json
{
  "beneficiaryId": "string",
  "mobile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiaryId|string|false|none|none|
|mobile|string|false|none|none|
