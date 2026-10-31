<h1 id="google-play-custom-app-publishing-api">Google Play Custom App Publishing API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API to create and publish custom Android apps

Base URLs:

* <a href="https://playcustomapp.googleapis.com/">https://playcustomapp.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/android/work/play/custom-app-api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidpublisher|View and manage your Google Play Developer account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidpublisher|View and manage your Google Play Developer account|

<h1 id="google-play-custom-app-publishing-api-accounts">accounts</h1>

## playcustomapp.accounts.customApps.create

<a id="opIdplaycustomapp.accounts.customApps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/playcustomapp/v1/accounts/string/customApps \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"languageCode":"string","organizations":[{"organizationId":"string","organizationName":"string"}],"title":"string"}'
```

`POST /playcustomapp/v1/accounts/{account}/customApps`

Creates a new custom app.

> Body parameter

```json
{
  "languageCode": "string",
  "organizations": [
    {
      "organizationId": "string",
      "organizationName": "string"
    }
  ],
  "title": "string"
}
```

<h3 id="playcustomappaccountscustomappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Developer account ID.|
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
|body|body|[CustomApp](#schemacustomapp)|false|none|
|» languageCode|body|string|false|Default listing language in BCP 47 format.|
|» organizations|body|[[Organization](#schemaorganization)]|false|Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account.|
|» title|body|string|false|Title for the Android app.|

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
  "languageCode": "string",
  "organizations": [
    {
      "organizationId": "string",
      "organizationName": "string"
    }
  ],
  "packageName": "string",
  "title": "string"
}
```

<h3 id="playcustomappaccountscustomappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomApp](#schemacustomapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

# Schemas

<h2 id="tocS_CustomApp">CustomApp</h2>
<!-- backwards compatibility -->
<a id="schemacustomapp"></a>
<a id="schema_CustomApp"></a>
<a id="tocScustomapp"></a>
<a id="tocscustomapp"></a>

```json
{
  "languageCode": "string",
  "organizations": [
    {
      "organizationId": "string",
      "organizationName": "string"
    }
  ],
  "packageName": "string",
  "title": "string"
}
```

This resource represents a custom app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|Default listing language in BCP 47 format.|
|organizations|[[Organization](#schemaorganization)]|false|none|Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account.|
|packageName|string|false|read-only|Output only. Package name of the created Android app. Only present in the API response.|
|title|string|false|none|Title for the Android app.|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "organizationId": "string",
  "organizationName": "string"
}
```

Represents an organization that can access a custom app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|false|none|Required. ID of the organization.|
|organizationName|string|false|none|Optional. A human-readable name of the organization, to help recognize the organization.|
