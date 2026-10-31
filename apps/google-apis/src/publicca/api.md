<h1 id="public-certificate-authority-api">Public Certificate Authority API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Public Certificate Authority API may be used to create and manage ACME external account binding keys associated with Google Trust Services' publicly trusted certificate authority.

Base URLs:

* <a href="https://publicca.googleapis.com/">https://publicca.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/public-certificate-authority/docs">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="public-certificate-authority-api-projects">projects</h1>

## publicca.projects.locations.externalAccountKeys.create

<a id="opIdpublicca.projects.locations.externalAccountKeys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/externalAccountKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{parent}/externalAccountKeys`

Creates a new ExternalAccountKey bound to the project.

> Body parameter

```json
{}
```

<h3 id="publiccaprojectslocationsexternalaccountkeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this external_account_key will be created. Format: projects/[project_id]/locations/[location]. At present only the "global" location is supported.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ExternalAccountKey](#schemaexternalaccountkey)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "b64MacKey": "string",
  "keyId": "string",
  "name": "string"
}
```

<h3 id="publiccaprojectslocationsexternalaccountkeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExternalAccountKey](#schemaexternalaccountkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_ExternalAccountKey">ExternalAccountKey</h2>
<!-- backwards compatibility -->
<a id="schemaexternalaccountkey"></a>
<a id="schema_ExternalAccountKey"></a>
<a id="tocSexternalaccountkey"></a>
<a id="tocsexternalaccountkey"></a>

```json
{
  "b64MacKey": "string",
  "keyId": "string",
  "name": "string"
}
```

A representation of an ExternalAccountKey used for [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) within ACME.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|b64MacKey|string(byte)|false|read-only|Output only. Base64-URL-encoded HS256 key. It is generated by the PublicCertificateAuthorityService when the ExternalAccountKey is created|
|keyId|string|false|read-only|Output only. Key ID. It is generated by the PublicCertificateAuthorityService when the ExternalAccountKey is created|
|name|string|false|read-only|Output only. Resource name. projects/{project}/locations/{location}/externalAccountKeys/{key_id}|
