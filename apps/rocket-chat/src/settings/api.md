<h1 id="settings">Settings v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="settings-settings">Settings</h1>

## Get Public Settings

<a id="opIdget-api-v1-settings.public"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings.public \
  -H 'Accept: application/json'
```

`GET /api/v1/settings.public`

List all public settings. Learn how this can be used in configuring your workspace in this <a href="https://docs.rocket.chat/docs/manage-settings-using-environmental-variables" target="_blank">guide</a>.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Removed the `fields` and `query` parameters.       |
|7.0.0            | Added the `_id` query parameter for filtering.|

<h3 id="get-public-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|_id|query|string|false|Filter by the `_id` of the settings.|
|sort|query|string|false|Sort the settings in ascending or descending order. By default, settings are sorted by setting ID in ascending order. The sort options are:<br> * `createdAt`: Sort by creation date. `sort={"createdAt": 1}` or `sort={"createdAt": -1}`<br> * `_id`: Sort by setting ID. `sort={"_id": 1}` or `sort={"_id": -1}`|

> Example responses

> 200 Response

```json
{
  "settings": [
    {
      "_id": "API_Embed",
      "value": true
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

<h3 id="get-public-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-public-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[object]|false|none|none|
|» _id|string|false|none|none|
|» value|boolean \| string|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» » *oneOf*|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth Settings

<a id="opIdget-api-v1-settings.oauth"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings.oauth \
  -H 'Accept: application/json'
```

`GET /api/v1/settings.oauth`

Lists the <a href="https://docs.rocket.chat/docs/oauth" target="_blank">login service</a> configurations available to login clients. This public endpoint does not require authentication.

For SAML, the response contains the stored service configuration but excludes the `secret` object. `hideButtonOnMobile` is `true` for SAML: mobile and desktop apps can open SAML authentication in the system browser and receive the credential through the `rocketchat://auth` link.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Updated `hideButtonOnMobile` for the SAML system-browser login flow. |
|0.64.0            | Renamed field `appId` to `clientId` and added flag `custom` to indicate whether the OAuth service is customized and fix `id` inconsistence (set all cases to `_id`)       |
|0.63.0            | Added       |

> Example responses

> 200 Response

```json
{
  "services": [
    {
      "_id": "iJeY7x4wxnh2p3pLr",
      "name": "github",
      "clientId": "test",
      "buttonLabelText": "",
      "buttonColor": "",
      "buttonLabelColor": "",
      "custom": false
    },
    {
      "_id": "5RQ4SBL3NuZKsqxaF",
      "service": "test",
      "clientId": "test",
      "custom": true,
      "serverURL": "/test/test",
      "tokenPath": "/oauth/token",
      "identityPath": "/me",
      "authorizePath": "/oauth/authorize",
      "scope": "openid",
      "buttonLabelText": "test",
      "buttonLabelColor": "#FFFFFF",
      "loginStyle": "popup",
      "buttonColor": "#13679A",
      "tokenSentVia": "payload",
      "identityTokenSentVia": "default",
      "usernameField": "dfsgdfgdfgdfgsd",
      "mergeUsers": true
    },
    {
      "_id": "8kEcbW7Yz3zJnHgqL",
      "service": "saml",
      "buttonLabelText": "Sign in with SAML",
      "buttonColor": "#13679A",
      "buttonLabelColor": "#FFFFFF",
      "clientConfig": {
        "provider": "my-saml-provider"
      },
      "entryPoint": "https://idp.example.com/sso/saml",
      "idpSLORedirectURL": "https://idp.example.com/slo/saml",
      "issuer": "https://chat.example.com/_saml/metadata/my-saml-provider",
      "userDataFieldMap": "{\"username\":\"username\",\"email\":\"email\",\"name\":\"cn\"}",
      "hideButtonOnMobile": true
    }
  ],
  "success": true
}
```

<h3 id="get-oauth-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-oauth-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|services|[object]|true|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» clientId|string|false|none|none|
|» buttonLabelText|string|false|none|none|
|» buttonColor|string|false|none|none|
|» buttonLabelColor|string|false|none|none|
|» custom|boolean|false|none|none|
|» service|string|false|none|none|
|» serverURL|string|false|none|none|
|» tokenPath|string|false|none|none|
|» identityPath|string|false|none|none|
|» authorizePath|string|false|none|none|
|» scope|string|false|none|none|
|» loginStyle|string|false|none|none|
|» tokenSentVia|string|false|none|none|
|» identityTokenSentVia|string|false|none|none|
|» usernameField|string|false|none|none|
|» mergeUsers|boolean|false|none|none|
|» hideButtonOnMobile|boolean|false|none|Whether mobile clients should hide the service's login button. For SAML, this is always `true`.|
|» clientConfig|object|false|none|Client configuration for the login service.|
|» » provider|string|false|none|The configured SAML provider name.|
|» entryPoint|string|false|none|The URL where Rocket.Chat sends SAML authentication requests.|
|» idpSLORedirectURL|string|false|none|The identity provider URL where Rocket.Chat sends SAML logout requests.|
|» usernameNormalize|string|false|none|none|
|» immutableProperty|string|false|none|none|
|» generateUsername|boolean|false|none|none|
|» debug|boolean|false|none|none|
|» nameOverwrite|boolean|false|none|none|
|» mailOverwrite|boolean|false|none|none|
|» issuer|string|false|none|The SAML service provider issuer.|
|» logoutBehaviour|string|false|none|none|
|» defaultUserRole|string|false|none|none|
|» signatureValidationType|string|false|none|none|
|» validateLogoutRequestSignature|boolean|false|none|none|
|» validateLogoutResponseSignature|boolean|false|none|none|
|» userDataFieldMap|string|false|none|A JSON string that maps SAML user fields to Rocket.Chat user fields.|
|» allowedClockDrift|number|false|none|none|
|» channelsAttributeUpdate|boolean|false|none|none|
|» includePrivateChannelsInUpdate|boolean|false|none|none|
|» customAuthnContext|string|false|none|none|
|» authnContextComparison|string|false|none|none|
|» identifierFormat|string|false|none|none|
|» nameIDPolicyTemplate|string|false|none|none|
|» authnContextTemplate|string|false|none|none|
|» authRequestTemplate|string|false|none|none|
|» logoutResponseTemplate|string|false|none|none|
|» logoutRequestTemplate|string|false|none|none|
|» metadataCertificateTemplate|string|false|none|none|
|» metadataTemplate|string|false|none|none|
|success|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» usernameNormalize|None|
|» usernameNormalize|Lowercase|
|» immutableProperty|Username|
|» immutableProperty|EMail|
|» logoutBehaviour|SAML|
|» logoutBehaviour|Local|
|» signatureValidationType|All|
|» signatureValidationType|Response|
|» signatureValidationType|Assertion|
|» signatureValidationType|Either|
|» signatureValidationType|None|
|» authnContextComparison|better|
|» authnContextComparison|exact|
|» authnContextComparison|maximum|
|» authnContextComparison|minimum|
|success|true|

<aside class="success">
This operation does not require authentication
</aside>

## Get Private Settings

<a id="opIdget-api-v1-settings"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/settings`

List all private settings. Learn how this can be used in configuring your server in this <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">guide</a>.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Removed the `fields` and `query` parameters.       |

<h3 id="get-private-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|includeDefaults|query|boolean|false|When set to true, it fetches both the current value and the default value (packageValue) of the settings|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "settings": [
    {
      "_id": "API_Allow_Infinite_Count",
      "value": true
    },
    {
      "_id": "API_CORS_Origin",
      "value": "*"
    }
  ],
  "count": 50,
  "offset": 0,
  "total": 299,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-private-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-private-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[object]|false|none|none|
|» _id|string|false|none|none|
|» value|boolean \| string|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» » *oneOf*|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Settings in Bulk

<a id="opIdpost-api-v1-settings"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "settings": [
      {
        "_id": "API_Allow_Infinite_Count",
        "value": false
      },
      {
        "_id": "API_CORS_Origin",
        "value": "https://example.com"
      }
    ]
  }'
```

`POST /api/v1/settings`

Updates multiple private workspace settings in a single request. 

Permission required: `edit-privileged-setting`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.6.0            | Added       |

> Body parameter

```json
{
  "settings": [
    {
      "_id": "API_Allow_Infinite_Count",
      "value": false
    },
    {
      "_id": "API_CORS_Origin",
      "value": "https://example.com"
    }
  ]
}
```

<h3 id="update-settings-in-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» settings|body|[object]|true|The list of settings to update.|
|» » _id|body|string|true|The unique ID of the setting.|
|» » value|body|object|true|The value to set for the setting. The accepted type depends on the setting.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'settings' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Editing settings is not allowed [error-action-not-allowed]",
  "errorType": "error-action-not-allowed",
  "details": {
    "method": "saveSettings",
    "settingIds": [
      "API_Allow_Infinite_Count",
      "API_CORS_Origin"
    ]
  }
}
```

<h3 id="update-settings-in-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-settings-in-bulk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» settingIds|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add Custom OAuth

<a id="opIdpost-api-v1-settings.addCustomOAuth"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings.addCustomOAuth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "name": "MyCustomOAuth"
  }'
```

`POST /api/v1/settings.addCustomOAuth`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Add a <a href="https://docs.rocket.chat/docs/oauth#add-custom-oauth" target="_blank">custom OAuth integration</a> to your workspace. Two-factor authentication is required.

From Rocket.Chat 9.0.0, Custom OAuth is available on Starter workspaces and on all premium plans (Commercial, Government, and Defense). It is not available on Community workspaces, where this endpoint returns `error-action-not-allowed`. See <a href="https://docs.rocket.chat/docs/our-plans" target="_blank">Our Plans</a> for details.

**Permission required**:
- `add-oauth-service`

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0            | Added premium plan availability details.       |

> Body parameter

```json
{
  "name": "MyCustomOAuth"
}
```

<h3 id="add-custom-oauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» name|body|string|true|The name of the custom OAuth method that you want to add.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"name\" is required [error-name-param-not-provided]",
  "errorType": "error-name-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="add-custom-oauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="add-custom-oauth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Custom OAuth

<a id="opIdpost-api-v1-settings.removeCustomOAuth"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings.removeCustomOAuth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "name": "myProvider"
  }'
```

`POST /api/v1/settings.removeCustomOAuth`

Remove a <a href=" https://docs.rocket.chat/docs/oauth#add-custom-oauth" target="_blank">custom OAuth integration</a> from your workspace. All the `Accounts_OAuth_Custom-<Name>-*` settings of the named service are deleted. This endpoint requires 2FA.

It replaces the `removeOAuthService` real-time method, which was removed in 9.0.0.

**Permission required**:
- `add-oauth-service`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added       |

> Body parameter

```json
{
  "name": "myProvider"
}
```

<h3 id="remove-custom-oauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|true|none|
|» name|body|string|true|The name of the custom OAuth service that you want to remove.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The parameter \"name\" is required [error-name-param-not-provided]",
  "errorType": "error-name-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="remove-custom-oauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-custom-oauth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Refresh OAuth Services

<a id="opIdpost-api-v1-settings.refreshOAuthServices"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings.refreshOAuthServices \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/settings.refreshOAuthServices`

Reload the workspace <a href=" https://docs.rocket.chat/docs/oauth" target="_blank">OAuth service</a> configurations from the current settings. Use it after adding or removing a custom OAuth service so that the login services are rebuilt. This endpoint takes no body and requires 2FA.

It replaces the `refreshOAuthService` real-time method, which was removed in 9.0.0.

**Permission required**:
- `add-oauth-service`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added       |

<h3 id="refresh-oauth-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="refresh-oauth-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="refresh-oauth-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Setting

<a id="opIdget-api-v1-settings-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings/string \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/settings/{_id}`

Get details of a setting by ID.
Permission required: `view-privileged-setting`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.42.0            | Added       |

<h3 id="get-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|_id|path|string|true|The unique ID of the setting that you want to update or fetch.|

> Example responses

> 200 Response

```json
{
  "_id": "Livechat_enabled",
  "value": false,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-setting-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|value|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Setting

<a id="opIdpost-api-v1-settings-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/settings/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "value": "My Workspace",
    "color": "#04436A",
    "editor": "color",
    "execute": true
  }'
```

`POST /api/v1/settings/{_id}`

Permission required: `edit-privileged-setting`

The `_id` of a setting is the first argument of the `RocketChat.settings.add` method used in `Rocket.Chat/packages/rocketchat-lib/server/startup/settings.js` (among other files).

For example, the following code in `settings.js` file:
  ```json
  this.add('Accounts_AllowAnonymousRead', false, {
    type: 'boolean',
    public: true  });
  ```
  This means that the setting labeled `Allow anonymous read` in the section `Accounts` has `_id` equal to `Accounts_AllowAnonymousRead`. The second argument is the default value (false). The third argument specifies the variable's type and whether it is public, hidden, and so on.

  To set a color, you can send:
  ```json
  { value: '<color-code>',
    editor: 'color' }
  ```

  And also to trigger a action-button, use:
  ```json
  { execute: true }
  ```
  ### Changelog
  | Version      | Description |
  | ---------------- | ------------|
  |0.65.0            | Added option to set a color and trigger an action       |
  |0.42.0            | Added       |

> Body parameter

```json
{
  "value": "My Workspace",
  "color": "#04436A",
  "editor": "color",
  "execute": true
}
```

<h3 id="update-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|_id|path|string|true|The unique ID of the setting that you want to update or fetch.|
|body|body|object|false|none|
|» value|body|string|true|The value to update the setting.|
|» color|body|string|false|The color code to update the setting.|
|» editor|body|string|false|The editor key, with color value. Required, if color was set.|
|» execute|body|boolean|false|To trigger a action-button.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-setting-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Setup Wizard Parameters

<a id="opIdget-api-v1-setupWizard.parameters"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/setupWizard.parameters \
  -H 'Accept: application/json'
```

`GET /api/v1/setupWizard.parameters`

Returns the settings used by the setup wizard and whether the workspace is already registered with Rocket.Chat Cloud.

This endpoint does not require authentication, because the setup wizard runs before the first administrator account exists. 
If the setup wizard is completed, the endpoint returns a `403` response. 

This endpoint replaces the `getSetupWizardParameters` Realtime API method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Example responses

> 200 Response

```json
{
  "settings": [
    {
      "_id": "Organization_Name",
      "type": "string",
      "value": "",
      "wizard": {
        "step": 2,
        "order": 1
      }
    },
    {
      "_id": "Organization_Type",
      "type": "select",
      "value": "",
      "values": [
        {
          "key": "community",
          "i18nLabel": "Community"
        },
        {
          "key": "government",
          "i18nLabel": "Government"
        },
        {
          "key": "nonprofit",
          "i18nLabel": "Nonprofit"
        }
      ],
      "wizard": {
        "step": 2,
        "order": 0
      }
    }
  ],
  "serverAlreadyRegistered": false,
  "success": true
}
```

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="get-setup-wizard-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden. The setup wizard is already completed.|Inline|

<h3 id="get-setup-wizard-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[object]|false|none|The settings shown in the setup wizard.|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» value|object|false|none|none|
|» values|[object]|false|none|none|
|» » key|string|false|none|none|
|» » i18nLabel|string|false|none|none|
|» wizard|object|false|none|none|
|» » step|integer|false|none|none|
|» » order|integer|false|none|none|
|serverAlreadyRegistered|boolean|false|none|Whether the workspace is already registered with Rocket.Chat Cloud.|
|success|boolean|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth Service Configuration

<a id="opIdget-api-v1-service.configurations"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/service.configurations \
  -H 'Accept: application/json'
```

`GET /api/v1/service.configurations`

List out all the active OAuth services configured with details.

> Example responses

> 200 Response

```json
{
  "configurations": [
    {
      "_id": "Hq5ahzz9MWWCdeDJ8",
      "service": "google",
      "clientId": "xxxxx"
    },
    {
      "_id": "57kavS22achLH33PE",
      "service": "apple",
      "clientId": "xxxxxx"
    }
  ],
  "success": true
}
```

<h3 id="get-oauth-service-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-oauth-service-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|[object]|false|none|none|
|» _id|string|false|none|none|
|» service|string|false|none|none|
|» clientId|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-audit">Audit</h1>

## List Auditions

<a id="opIdget-api-v1-audit.auditions"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/audit.auditions?startDate=2026-08-01T00%3A00%3A00.000Z&endDate=2026-08-20T23%3A59%3A59.999Z' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/audit.auditions`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Lists the audit searches performed during a specified period. This endpoint requires a license that includes the `auditing` module. Dates use ISO 8601 format. Requests are limited to ten per minute.

This endpoint replaces the `auditGetAuditions` real-time method, which was removed in 9.0.0.

**Permission required**:
- `can-audit-log`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added       |

<h3 id="list-auditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|startDate|query|string(date-time)|true|The beginning of the period to list, as an ISO date string.|
|endDate|query|string(date-time)|true|The end of the period to list, as an ISO date string.|

> Example responses

> 200 Response

```json
{
  "auditions": [],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="list-auditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-auditions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditions|[object]|true|none|The audit log entries recorded in the requested period.|
|» _id|string|true|none|none|
|» _updatedAt|string(date-time)|false|none|none|
|» ts|string(date-time)|true|none|none|
|» results|number|true|none|none|
|» u|object|true|none|none|
|» » _id|string|true|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» » avatarETag|string|false|none|none|
|» fields|object|true|none|none|
|» » type|string|true|none|none|
|» » msg|string \| null|false|none|none|
|» » startDate|string(date-time) \| null|false|none|none|
|» » endDate|string(date-time) \| null|false|none|none|
|» » rids|[string]|false|none|none|
|» » room|string \| null|false|none|none|
|» » users|[string]|false|none|none|
|» » visitor|string \| null|false|none|none|
|» » agent|string \| null|false|none|none|
|» » filters|string \| null|false|none|none|
|success|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Audit Messages

<a id="opIdpost-api-v1-audit.messages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/audit.messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "rid": "GENERAL",
    "startDate": "2026-08-01T00:00:00.000Z",
    "endDate": "2026-08-20T23:59:59.999Z",
    "users": [
      "dana.reyes"
    ],
    "msg": "incident report",
    "type": "u"
  }'
```

`POST /api/v1/audit.messages`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Searches messages for an audit and records the search in the audit log. This endpoint requires a license that includes the `auditing` module. Dates use ISO 8601 format. Requests are limited to ten per minute.

This endpoint replaces the `auditGetMessages` real-time method, which was removed in 9.0.0.

**Permission required**:
- `can-audit`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added       |

> Body parameter

```json
{
  "rid": "GENERAL",
  "startDate": "2026-08-01T00:00:00.000Z",
  "endDate": "2026-08-20T23:59:59.999Z",
  "users": [
    "dana.reyes"
  ],
  "msg": "incident report",
  "type": "u"
}
```

<h3 id="audit-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» rid|body|string|false|The ID of the room to search in. Optional.|
|» startDate|body|string(date-time)|true|The beginning of the period to search, as an ISO date string.|
|» endDate|body|string(date-time)|true|The end of the period to search, as an ISO date string.|
|» users|body|[string]|true|The usernames whose messages are audited.|
|» msg|body|string \| null|true|The text to search for in the messages.|
|» type|body|string|true|The audit target. Use `u` for users, `d` for a direct message, or `l` for Omnichannel rooms. When `rid` is provided, the room ID determines the target.|
|» visitor|body|string \| null|false|The ID of the Omnichannel visitor to audit.|
|» agent|body|string \| null|false|The ID of the Omnichannel agent to audit.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "7aDSXtjMA3KPLxLjt",
      "rid": "GENERAL",
      "msg": "Please share the incident report",
      "ts": "2026-08-12T09:14:03.412Z",
      "u": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "dana.reyes",
        "name": "Dana Reyes"
      }
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": true,
  "error": "string",
  "errorType": "string"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="audit-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="audit-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|true|none|The messages matching the audit search.|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Audit Omnichannel Messages

<a id="opIdpost-api-v1-audit.omnichannelMessages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/audit.omnichannelMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "startDate": "2026-08-01T00:00:00.000Z",
    "endDate": "2026-08-20T23:59:59.999Z",
    "users": [
      "dana.reyes"
    ],
    "msg": "refund",
    "type": "u",
    "visitor": "8f4c2d1e9a7b6c5d3e2f1a0b"
  }'
```

`POST /api/v1/audit.omnichannelMessages`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Searches <a href="https://docs.rocket.chat/docs/omnichannel" target="_blank">Omnichannel</a> messages for an audit and records the search in the audit log. This endpoint requires a license that includes the `auditing` module. Dates use ISO 8601 format. Requests are limited to ten per minute.

This endpoint replaces the `auditGetOmnichannelMessages` real-time method, which was removed in 9.0.0.

**Permission required**:
- `can-audit`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added       |

> Body parameter

```json
{
  "startDate": "2026-08-01T00:00:00.000Z",
  "endDate": "2026-08-20T23:59:59.999Z",
  "users": [
    "dana.reyes"
  ],
  "msg": "refund",
  "type": "u",
  "visitor": "8f4c2d1e9a7b6c5d3e2f1a0b"
}
```

<h3 id="audit-omnichannel-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» startDate|body|string(date-time)|true|The beginning of the period to search, as an ISO date string.|
|» endDate|body|string(date-time)|true|The end of the period to search, as an ISO date string.|
|» users|body|[string]|true|The usernames associated with the audit search.|
|» msg|body|string \| null|true|The text to search for in the messages.|
|» type|body|string|true|The audit type recorded in the audit log.|
|» visitor|body|string \| null|false|The ID of the Omnichannel visitor to audit.|
|» agent|body|string \| null|false|The ID of the Omnichannel agent to audit.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "5RQ4SBL3NuZKsqxaF",
      "rid": "pMtJcZDsvKLnGKQ2C",
      "msg": "I would like to request a refund",
      "ts": "2026-08-14T16:02:51.006Z",
      "u": {
        "_id": "8f4c2d1e9a7b6c5d3e2f1a0b",
        "username": "guest-482",
        "name": "Alex Doe"
      }
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": true,
  "error": "string",
  "errorType": "string"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="audit-omnichannel-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="audit-omnichannel-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|true|none|The Omnichannel messages matching the audit search.|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-cloud">Cloud</h1>

## Connect Workspace to Cloud

<a id="opIdpost-api-v1-cloud.connectWorkspace"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/cloud.connectWorkspace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "token": "5f03461b-9073-41e5-986d-e70f4d6ecbd1"
  }'
```

`POST /api/v1/cloud.connectWorkspace`

Connect the workspace to <a href="https://docs.rocket.chat/docs/rocketchat-cloud" target="_blank">Rocket.Chat Cloud</a> using a registration token. To get a registration token, refer to [Registration via Token](https://docs.rocket.chat/docs/register-your-workspace#how-to-get-a-token).

Permission required: `manage-cloud`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.7.0            | Added       |

> Body parameter

```json
{
  "token": "5f03461b-9073-41e5-986d-e70f4d6ecbd1"
}
```

<h3 id="connect-workspace-to-cloud-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» token|body|string|true|The registration token from your Rocket.Chat Cloud account.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'token' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="connect-workspace-to-cloud-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="connect-workspace-to-cloud-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Manual Cloud Register

<a id="opIdpost-api-v1-cloud.manualRegister"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/cloud.manualRegister \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "cloudBlob": "jfiscsm38urc3ujd"
  }'
```

`POST /api/v1/cloud.manualRegister`

Manually register a workspace on <a href="https://docs.rocket.chat/docs/rocketchat-cloud" target="_blank">Rocket.Chat Cloud</a>.
Permission required: `register-on-cloud`.

> Body parameter

```json
{
  "cloudBlob": "jfiscsm38urc3ujd"
}
```

<h3 id="manual-cloud-register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» cloudBlob|body|string|true|Enter the workspace deployment ID.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Workspace is already registered"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="manual-cloud-register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="manual-cloud-register-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Workspace Registration Status

<a id="opIdget-api-v1-cloud.registrationStatus"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/cloud.registrationStatus \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/cloud.registrationStatus`

Returns the workspace's current Rocket.Chat Cloud registration status. 

Permission required: `manage-cloud`.

<h3 id="get-workspace-registration-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "registrationStatus": {
    "workspaceRegistered": true,
    "workspaceId": "abc123-workspace-id",
    "uniqueId": "xyz789-unique-id",
    "token": "",
    "email": "admin@example.com"
  },
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-workspace-registration-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-workspace-registration-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registrationStatus|object|false|none|none|
|» workspaceRegistered|boolean|false|none|Whether the workspace has an active Cloud Client ID and Secret configured.|
|» workspaceId|string|false|none|The workspace's Rocket.Chat Cloud ID.|
|» uniqueId|string|false|none|The workspace's unique installation ID.|
|» token|string|false|none|none|
|» email|string|false|none|The registered organization email on Rocket.Chat Cloud.|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Workspace Registration Data

<a id="opIdget-api-v1-cloud.workspaceRegisterData"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/cloud.workspaceRegisterData \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/cloud.workspaceRegisterData`

Returns the workspace registration payload used to register the workspace with Rocket.Chat Cloud offline. The `registerData` value is a base64-encoded JSON string.

Permission required: `manage-cloud`.

This endpoint replaces the `cloud:getWorkspaceRegisterData` Realtime API method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

<h3 id="get-workspace-registration-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "registerData": "eyJ1bmlxdWVJZCI6Ilp4N3FXbTNLcDlSdlQ0eUxiIiwid29ya3NwYWNlSWQiOiIiLCJhZGRyZXNzIjoiaHR0cHM6Ly9jaGF0LmV4YW1wbGUuY29tIn0=",
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-workspace-registration-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-workspace-registration-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registerData|string|false|none|The base64-encoded workspace registration payload.|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-dns">DNS</h1>

## Resolve DNS Text Records

<a id="opIdpost-api-v1-dns.resolve.txt"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/dns.resolve.txt?url=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/dns.resolve.txt`

Resolves DNS text records (TXT records) for a hostname.

<h3 id="resolve-dns-text-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|url|query|string|true|The hostname.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "querySrv ENOTFOUND .rocket.chat/"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="resolve-dns-text-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="resolve-dns-text-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Resolve DNS URL Records

<a id="opIdpost-api-v1-dns.resolve.srv"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/dns.resolve.srv?url=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/dns.resolve.srv`

Resolves DNS URL records for a hostname.

<h3 id="resolve-dns-url-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|url|query|string|true|The hostname.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "querySrv ENOTFOUND .rocket.chat/"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="resolve-dns-url-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="resolve-dns-url-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-e2e">E2E</h1>

## Get E2E Keys

<a id="opIdget-api-v1-e2e.fetchMyKeys"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.fetchMyKeys \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/e2e.fetchMyKeys`

Retrieves E2E keys of logged in user.

<h3 id="get-e2e-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "public_key": "{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"oP23XEagSGIdo18Yc7TUwsM1qoRDa-pMg64lEctMQ6Dx-Q\"}",
  "private_key": "{\"$binary\":\"2j5AaYO39PcQNK7lT3h5Zv7j7y3rVKsqlERVgty+Z2pjzuG5pCMnx63WFJCrt8Sx2KDwWvYycGs0V5TzXJhKFEpE3l5hpoP51wO1Xztnfl9TdVtCZ5ERSDhXp+t3ays0QLdD2EtZu9M+Ffgiy2gqTasB0UFXAZyDA==\"}",
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-e2e-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-e2e-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|false|none|none|
|private_key|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Users of Room Without E2E key

<a id="opIdget-api-v1-e2e.getUsersOfRoomWithoutKey"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/e2e.getUsersOfRoomWithoutKey?rid=string' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/e2e.getUsersOfRoomWithoutKey`

Retrieves user IDs Of room without E2E key.

<h3 id="get-users-of-room-without-e2e-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|rid|query|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "XycfA5CetCPuEjqxw",
      "e2e": {
        "public_key": "{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"oMO9ydjRxD3JzcAgMvyBZAc_pIOBIxOLVUChZ8mB3JNtLREC751hHT-WPZVZquWA6X4CihHejFfpIyAD_w-0MIToudTGO-f1aeE4Wc9-SBKjSQPphCuZMTwZ7iRtfUwHeGy5yM94uQPp07sEi9BmJSZqHscHc-6G520MyBhNU6uznQf-Sp85Q4etl4Ifs09khM-VMnBqKwh2QJx8w0880Vc3Zufve6udg0aSQ\"}"
      }
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'rid' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-users-of-room-without-e2e-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-of-room-without-e2e-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» e2e|object|false|none|none|
|» » public_key|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Room E2E Key

<a id="opIdpost-api-v1-e2e.setRoomKeyID"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.setRoomKeyID \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "rid": "wCiXndNp5NqNY3uCc",
    "keyID": "my-UniQu3_ke4_Id"
  }'
```

`POST /api/v1/e2e.setRoomKeyID`

> Body parameter

```json
{
  "rid": "wCiXndNp5NqNY3uCc",
  "keyID": "my-UniQu3_ke4_Id"
}
```

<h3 id="set-room-e2e-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» keyID|body|string|true|The key that you want to set for the room. Enter a unique string.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'rid' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-room-e2e-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-room-e2e-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set User Key

<a id="opIdpost-api-v1-e2e.setUserPublicAndPrivateKeys"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.setUserPublicAndPrivateKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "public_key": "My-9UbLiK-k34",
    "private_key": "9R1V4t3_k3Y"
  }'
```

`POST /api/v1/e2e.setUserPublicAndPrivateKeys`

> Body parameter

```json
{
  "public_key": "My-9UbLiK-k34",
  "private_key": "9R1V4t3_k3Y"
}
```

<h3 id="set-user-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» public_key|body|string|true|Enter a unique string as your public key.|
|» private_key|body|string|true|Enter a unique string as your private key.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'public_key' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-user-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-user-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update User E2E Key in Room

<a id="opIdpost-api-v1-e2e.updateGroupKey"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.updateGroupKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "uid": "d26x6zSkaPSe5gCyy",
    "rid": "9R1V4t3_k3Y",
    "key": "M4-Ubd4T3d-k39"
  }'
```

`POST /api/v1/e2e.updateGroupKey`

> Body parameter

```json
{
  "uid": "d26x6zSkaPSe5gCyy",
  "rid": "9R1V4t3_k3Y",
  "key": "M4-Ubd4T3d-k39"
}
```

<h3 id="update-user-e2e-key-in-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» uid|body|string|true|The user ID whose key you want to update.|
|» rid|body|string|true|The room ID.|
|» key|body|string|true|The updated key.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'rid' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-user-e2e-key-in-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-user-e2e-key-in-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Request Subscription Keys

<a id="opIdpost-api-v1-e2e.requestSubscriptionKeys"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.requestSubscriptionKeys \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/e2e.requestSubscriptionKeys`

Requests the E2E encryption keys for the rooms the authenticated user is subscribed to. Other room members are notified to share their keys with the requesting user. This endpoint replaces the `e2e.requestSubscriptionKeys` DDP method, which was removed in 9.0.0. 

### Changelog
| Version | Description |
| ------- | ------------|
| 8.6.0   | Added       |

<h3 id="request-subscription-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="request-subscription-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="request-subscription-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Accept Suggested Group Key

<a id="opIdpost-api-v1-e2e.acceptSuggestedGroupKey"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.acceptSuggestedGroupKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "rid": "wCiXndNp5NqNY3uCc"
  }'
```

`POST /api/v1/e2e.acceptSuggestedGroupKey`

Accepts the E2E group key that another room member suggested for the authenticated user in an encrypted room. The suggested key becomes the user's room key, and the user is removed from the room's queue of users waiting for a key. If the user has no previous room keys, the suggested previous room keys are also saved.

### Changelog
| Version | Description |
| ------- | ------------|
| 6.0.0   | Added       |

> Body parameter

```json
{
  "rid": "wCiXndNp5NqNY3uCc"
}
```

<h3 id="accept-suggested-group-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'rid'",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="accept-suggested-group-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="accept-suggested-group-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reject Suggested Group Key

<a id="opIdpost-api-v1-e2e.rejectSuggestedGroupKey"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.rejectSuggestedGroupKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "rid": "wCiXndNp5NqNY3uCc"
  }'
```

`POST /api/v1/e2e.rejectSuggestedGroupKey`

Rejects the E2E group key that another room member suggested for the authenticated user in an encrypted room. The suggested key and suggested previous room keys are discarded, and the user is added back to the room's queue of users waiting for a key.

### Changelog
| Version | Description |
| ------- | ------------|
| 6.0.0   | Added       |

> Body parameter

```json
{
  "rid": "wCiXndNp5NqNY3uCc"
}
```

<h3 id="reject-suggested-group-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'rid'",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="reject-suggested-group-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="reject-suggested-group-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Users Waiting for Group Key

<a id="opIdget-api-v1-e2e.fetchUsersWaitingForGroupKey"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/e2e.fetchUsersWaitingForGroupKey?roomIds=wCiXndNp5NqNY3uCc' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/e2e.fetchUsersWaitingForGroupKey`

Retrieves, for each of the specified encrypted rooms, the members who are waiting for the room's E2E key and have an E2E public key. Members who already have a room key or a suggested key are not returned, and the authenticated user is excluded. Up to 50 users are returned per room, and rooms with no waiting users are left out of the response.

If E2E encryption is disabled in the workspace, `usersWaitingForE2EKeys` is an empty object.

### Changelog
| Version | Description |
| ------- | ------------|
| 6.10.0  | Added       |

<h3 id="get-users-waiting-for-group-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|roomIds|query|[string]|true|The IDs of the rooms to check. To check several rooms, repeat the parameter, for example `roomIds=wCiXndNp5NqNY3uCc&roomIds=GENERAL`.|

> Example responses

> 200 Response

```json
{
  "usersWaitingForE2EKeys": {
    "wCiXndNp5NqNY3uCc": [
      {
        "_id": "XycfA5CetCPuEjqxw",
        "public_key": "{\"alg\":\"RSA-OAEP-256\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"encrypt\"],\"kty\":\"RSA\",\"n\":\"oMO9ydjRxD3JzcAgMvyBZAc_pIOBIxOLVUChZ8mB3JNtLREC751hHT\"}"
      }
    ]
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomIds'",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-users-waiting-for-group-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-waiting-for-group-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usersWaitingForE2EKeys|object|false|none|An object keyed by room ID. Each value lists the users waiting for that room's key.|
|» **additionalProperties**|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » public_key|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Provide Suggested Group Keys to Users

<a id="opIdpost-api-v1-e2e.provideUsersSuggestedGroupKeys"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.provideUsersSuggestedGroupKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "usersSuggestedGroupKeys": {
      "wCiXndNp5NqNY3uCc": [
        {
          "_id": "XycfA5CetCPuEjqxw",
          "key": "8ee4c64e1012bm9lbmNyeXB0ZWQta2V5",
          "oldKeys": [
            {
              "e2eKeyId": "3f2a9c1b7d4e",
              "ts": "2026-01-15T10:30:00.000Z",
              "E2EKey": "3f2a9c1b7d4eb2xkLWVuY3J5cHRlZC1rZXk"
            }
          ]
        }
      ]
    }
  }'
```

`POST /api/v1/e2e.provideUsersSuggestedGroupKeys`

Suggests E2E group keys to members of encrypted rooms who are waiting for a key. For each room, list the users and the room key encrypted with each user's public key. Each user then accepts or rejects the suggested key. The users are removed from the room's queue of users waiting for a key.

Rooms that the authenticated user can't access are skipped, and users who aren't members of a room are ignored. If E2E encryption is disabled in the workspace, the request succeeds without making any changes.

### Changelog
| Version | Description |
| ------- | ------------|
| 6.10.0  | Added       |

> Body parameter

```json
{
  "usersSuggestedGroupKeys": {
    "wCiXndNp5NqNY3uCc": [
      {
        "_id": "XycfA5CetCPuEjqxw",
        "key": "8ee4c64e1012bm9lbmNyeXB0ZWQta2V5",
        "oldKeys": [
          {
            "e2eKeyId": "3f2a9c1b7d4e",
            "ts": "2026-01-15T10:30:00.000Z",
            "E2EKey": "3f2a9c1b7d4eb2xkLWVuY3J5cHRlZC1rZXk"
          }
        ]
      }
    ]
  }
}
```

<h3 id="provide-suggested-group-keys-to-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» usersSuggestedGroupKeys|body|object|true|An object keyed by room ID. Each value is an array of the users to suggest a key to in that room.|
|» » **additionalProperties**|body|[object]|false|none|
|» » » _id|body|string|true|The ID of the user to suggest the key to.|
|» » » key|body|string|true|The room key, encrypted with the user's E2E public key.|
|» » » oldKeys|body|[object]|false|Optional. The room's previous keys, encrypted for the user, so the user can read older messages.|
|» » » » e2eKeyId|body|string|false|The ID of the previous room key.|
|» » » » ts|body|string|false|The date and time the key was replaced, as an ISO 8601 string.|
|» » » » E2EKey|body|string|false|The previous room key, encrypted with the user's E2E public key.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'usersSuggestedGroupKeys'",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="provide-suggested-group-keys-to-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="provide-suggested-group-keys-to-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Room E2E Key

<a id="opIdpost-api-v1-e2e.resetRoomKey"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/e2e.resetRoomKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "rid": "wCiXndNp5NqNY3uCc",
    "e2eKey": "9b7c2e4f1a6dbmV3LWVuY3J5cHRlZC1rZXk",
    "e2eKeyId": "9b7c2e4f1a6d"
  }'
```

`POST /api/v1/e2e.resetRoomKey`

Resets the E2E key of an encrypted room. For every member who has a key for the room, the current key is moved to their previous room keys, and the latest 10 previous keys are kept. Members other than the authenticated user are added to the room's queue of users waiting for the new key, up to 50 members. The new key is set for the authenticated user.

The authenticated user must have E2E keys, and the room must already be encrypted. Only one reset can run for a room at a time.

Permission required: `toggle-room-e2e-encryption`

### Changelog
| Version | Description |
| ------- | ------------|
|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
| 8.3.0   | The `403` response returns `error-not-allowed` instead of `unauthorized` |
| 7.0.0   | Added       |

> Body parameter

```json
{
  "rid": "wCiXndNp5NqNY3uCc",
  "e2eKey": "9b7c2e4f1a6dbmV3LWVuY3J5cHRlZC1rZXk",
  "e2eKeyId": "9b7c2e4f1a6d"
}
```

<h3 id="reset-room-e2e-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» e2eKey|body|string|true|The new room key, encrypted with the authenticated user's E2E public key.|
|» e2eKeyId|body|string|true|The ID of the new room key.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'e2eKeyId'",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "error-not-allowed",
  "errorType": "error-forbidden"
}
```

<h3 id="reset-room-e2e-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="reset-room-e2e-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-import">Import</h1>

## Upload Import File

<a id="opIdpost-api-v1-uploadImportFile"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/uploadImportFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "binaryContent": "/testfile.csv",
    "importerKey": "csv",
    "fileName": "Testfile",
    "contentType": "text/csv"
  }'
```

`POST /api/v1/uploadImportFile`

This endpoint takes in the binary content of the imported file, along with additional information about its content, and stores it in a buffer. Permission required: `run-import`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

> Body parameter

```json
{
  "binaryContent": "/testfile.csv",
  "importerKey": "csv",
  "fileName": "Testfile",
  "contentType": "text/csv"
}
```

<h3 id="upload-import-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» binaryContent|body|string|true|The uploaded file.|
|» importerKey|body|string|true|It indicates how Rocket.Chat should handle the uploaded file. The accepted importer keys are:<br>  * `csv`<br>  * `hipchatenterprise`<br>  * `pending-avatars`<br>  * `pending-files`<br>  * `slack`<br>  * `slack-users`|
|» fileName|body|string|true|The name of the file to be imported.|
|» contentType|body|string|true|The imported file [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The importer (png) has no import class defined. [error-importer-not-defined]",
  "errorType": "error-importer-not-defined",
  "details": "uploadImportFile"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="upload-import-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="upload-import-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Download Public Import File

<a id="opIdpost-api-v1-downloadPublicImportFile"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/downloadPublicImportFile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "fileUrl": "https://www.freepik.com/photos/dog",
    "importerKey": "pending-avatars"
  }'
```

`POST /api/v1/downloadPublicImportFile`

Download the public import file.
Permission required: `run-import`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

> Body parameter

```json
{
  "fileUrl": "https://www.freepik.com/photos/dog",
  "importerKey": "pending-avatars"
}
```

<h3 id="download-public-import-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» fileUrl|body|string|true|The url of the file. It must start with `http` or `https`.|
|» importerKey|body|string|true|It indicates how Rocket.Chat should handle the uploaded file. The accepted importer keys are:<br>  * `csv`<br>  * `hipchatenterprise`<br>  * `pending-avatars`<br>  * `pending-files`<br>  * `slack`<br>  * `slack-users`|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The importer (png) has no import class defined. [error-importer-not-defined]",
  "errorType": "error-importer-not-defined",
  "details": "uploadImportFile"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="download-public-import-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="download-public-import-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Start Import

<a id="opIdpost-api-v1-startImport"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/startImport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "input": {
      "users": {
        "all": true,
        "list": [
          "testbh"
        ]
      },
      "channels": {
        "all": false,
        "list": [
          "WDuJLFkjwk6L7LdFC"
        ]
      }
    }
  }'
```

`POST /api/v1/startImport`

Triggers the process of importing users, rooms and messages to the workspace.
Permission required: `run-import`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.0.0            | Remove required extra data from `users` and `channels` parameters. Use only record ID of the users or channels.   |
|3.0.0            | Added       |

> Body parameter

```json
{
  "input": {
    "users": {
      "all": true,
      "list": [
        "testbh"
      ]
    },
    "channels": {
      "all": false,
      "list": [
        "WDuJLFkjwk6L7LdFC"
      ]
    }
  }
}
```

<h3 id="start-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» input|body|object|true|The input object contains two arrays: `users` and `channels`.|
|» » users|body|object|true|An object of the users to be imported. If `all` is true, `list` is ignored.|
|» » » all|body|boolean|false|Set to `true` to import all users.|
|» » » list|body|[string]|false|When `all` is false, list the record IDs of users to be imported.|
|» » channels|body|object|true|An object of the channels to import. If `all` is true, `list` is ignored.|
|» » » all|body|boolean|false|Set to `true` to import all channels.|
|» » » list|body|[string]|false|When `all` is false, list the record IDs of channels to be imported.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="start-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="start-import-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Import File Data

<a id="opIdget-api-v1-getImportFileData"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/getImportFileData \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/getImportFileData`

Get the import file data.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

<h3 id="get-import-file-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "users": [],
  "channels": [],
  "message_count": 0,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-import-file-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-import-file-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|channels|[object]|false|none|none|
|message_count|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Import Progress

<a id="opIdget-api-v1-getImportProgress"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/getImportProgress \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/getImportProgress`

Get the progress of the import.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

<h3 id="get-import-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "key": "pending-avatars",
  "name": "Pending Avatars",
  "step": "importer_user_selection",
  "count": {
    "completed": 0,
    "total": 0
  },
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-import-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-import-progress-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|name|string|false|none|none|
|step|string|false|none|none|
|count|object|false|none|none|
|» completed|integer|false|none|none|
|» total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Latest Import Operations

<a id="opIdget-api-v1-getLatestImportOperations"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/getLatestImportOperations \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/getLatestImportOperations`

Get latests import operations.
Permission required: `view-import-operations`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

<h3 id="get-latest-import-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
[
  {
    "_id": "MJxTRZsYdho8Ww2qq",
    "type": "Pending Avatars",
    "importerKey": "pending-avatars",
    "ts": 1635280600083,
    "status": "importer_user_selection",
    "valid": false,
    "user": "d26x6zSkaPSe5gCyy",
    "_updatedAt": "2021-10-27T11:26:24.430Z"
  },
  {
    "_id": "YzSCu9WgqJ3wutF4T",
    "type": "Pending Files",
    "importerKey": "pending-files",
    "ts": 1635280596592,
    "status": "importer_done",
    "valid": false,
    "user": "d26x6zSkaPSe5gCyy",
    "_updatedAt": "2021-10-27T08:32:42.609Z"
  },
  {
    "_id": "96WJDaxXpwXC3fTD5",
    "type": "Pending Files",
    "importerKey": "pending-files",
    "ts": 1635277590992,
    "status": "importer_user_selection",
    "valid": false,
    "user": "d26x6zSkaPSe5gCyy",
    "_updatedAt": "2021-10-27T08:32:42.609Z"
  },
  {
    "_id": "zYc5kuFRaszfqCegB",
    "type": "Pending Avatars",
    "importerKey": "pending-avatars",
    "ts": 1635277492185,
    "status": "importer_done",
    "valid": false,
    "user": "d26x6zSkaPSe5gCyy",
    "_updatedAt": "2021-10-27T08:32:42.609Z"
  },
  {
    "_id": "XckCNn9ZsdywHso4f",
    "type": "Pending Avatars",
    "importerKey": "pending-avatars",
    "ts": 1635277452755,
    "status": "importer_done",
    "valid": false,
    "user": "d26x6zSkaPSe5gCyy",
    "_updatedAt": "2021-10-27T08:32:42.609Z"
  }
]
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-latest-import-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-latest-import-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» importerKey|string|false|none|none|
|» ts|integer|false|none|none|
|» status|string|false|none|none|
|» valid|boolean|false|none|none|
|» user|string|false|none|none|
|» _updatedAt|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Download Pending Files

<a id="opIdpost-api-v1-downloadPendingFiles"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/downloadPendingFiles \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/downloadPendingFiles`

Dowbload pending files.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

<h3 id="download-pending-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "count": 0
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="download-pending-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="download-pending-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|count|integer|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Download Pending Avatars

<a id="opIdpost-api-v1-downloadPendingAvatars"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/downloadPendingAvatars \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/downloadPendingAvatars`

Download pending avatars from the import.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

<h3 id="download-pending-avatars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "count": 0
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="download-pending-avatars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="download-pending-avatars-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|count|integer|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Current Import Operations

<a id="opIdget-api-v1-getCurrentImportOperation"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/getCurrentImportOperation \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/getCurrentImportOperation`

Get the current import operation.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.0.0            | Added       |

<h3 id="get-current-import-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "operation": {
    "_id": "7PbvsnKJD9ZAqw38C",
    "type": "Pending Avatars",
    "importerKey": "pending-avatars",
    "ts": 1635337234169,
    "status": "importer_done",
    "valid": true,
    "user": "d26x6zSkaPSe5gCyy",
    "_updatedAt": "2021-10-27T12:20:34.184Z"
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-current-import-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-current-import-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|operation|object|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» importerKey|string|false|none|none|
|» ts|integer|false|none|none|
|» status|string|false|none|none|
|» valid|boolean|false|none|none|
|» user|string|false|none|none|
|» _updatedAt|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Imports

<a id="opIdget-api-v1-importers.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/importers.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC'
```

`GET /api/v1/importers.list`

Use this endpoint to view the list of imports in the workspace. Permission required: `run-import`

<h3 id="get-list-of-imports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authentication token.|
|X-User-Id|header|string|true|The user ID.|

> Example responses

> 200 Response

```json
[
  {
    "key": "csv",
    "name": "CSV"
  },
  {
    "key": "slack",
    "name": "Slack"
  },
  {
    "key": "slack-users",
    "name": "Slack_Users"
  },
  {
    "key": "omnichannel_contact",
    "name": "omnichannel_contacts_importer"
  }
]
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-list-of-imports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-imports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» key|string|false|none|none|
|» name|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-bulk-user-import">Bulk User Import</h1>

## Create New Import Operation

<a id="opIdpost-api-v1-import.new"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/import.new \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/import.new`

Creates a new import operation; if an operation was already running, it will be aborted. Any data from previous imports will be cleared automatically.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.3.0            | Added       |

<h3 id="create-new-import-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "operation": {
    "_id": "64d69545ee8ae821983005f5",
    "type": "api",
    "importerKey": "api",
    "ts": "2023-08-11T20:08:37.655Z",
    "status": "importer_new",
    "valid": true,
    "user": "rbAXPnMktTFbNpwtJ",
    "_updatedAt": "2023-08-11T20:08:37.655Z"
  },
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="create-new-import-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-new-import-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|object|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» importerKey|string|false|none|none|
|» ts|string|false|none|none|
|» status|string|false|none|none|
|» valid|boolean|false|none|none|
|» user|string|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add Users

<a id="opIdpost-api-v1-import.addUsers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/import.addUsers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "users": [
      {
        "username": "john.doe",
        "emails": [
          "john.doe@example.com"
        ],
        "importIds": [
          "1523"
        ],
        "name": "John Doe",
        "password": "P@ssw0rd"
      },
      {
        "username": "jane.doe",
        "emails": [
          "jane.doe@example.com"
        ],
        "importIds": [
          "1524"
        ],
        "name": "Jane Doe"
      }
    ]
  }'
```

`POST /api/v1/import.addUsers`

Adds user data to the import staging area. It requires the current import operation status to be either `new` or `ready`. If successful, it changes the operation state to `ready`.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.3.0            | Added       |

> Body parameter

```json
{
  "users": [
    {
      "username": "john.doe",
      "emails": [
        "john.doe@example.com"
      ],
      "importIds": [
        "1523"
      ],
      "name": "John Doe",
      "password": "P@ssw0rd"
    },
    {
      "username": "jane.doe",
      "emails": [
        "jane.doe@example.com"
      ],
      "importIds": [
        "1524"
      ],
      "name": "Jane Doe"
    }
  ]
}
```

<h3 id="add-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|Note:<br>  1. A minimum of one email address and one import ID is required. If any user is missing those, the endpoint will fail and no user will be added to the operation.<br>  2. Emails and usernames will not be validated, but they must be unique or the user creation will fail.<br>  3. If roles are added, they must be valid Rocket.Chat roles, or the endpoint will fail and no user will be added to the operation.<br>  4. The default roles will be added to all users automatically.<br>  5. If no password is added, a temporary random password will be generated automatically.<br>  6. Users flagged as `deleted` will be created as `Deactivated` on Rocket.Chat.<br>  7. Avatar URLs will not be fetched automatically. The workspace administrator needs to use the **Download Pending Avatars** button in **Manage** > **Workspace** > **Import** on the workspace after the import is completed.<br>  8. Import IDs will not be used as IDs by Rocket.Chat, but you can query users by their import ID with the  <a href="https://developer.rocket.chat/apidocs/get-users-info" target="_blank">users.info</a>.|
|» users|body|[object]|false|none|
|» » username|body|string|false|The user name.|
|» » emails|body|[string]|true|The user email addresses.|
|» » importIds|body|[string]|true|A list of IDs that can identify the user.|
|» » name|body|string|false|The user's display name.|
|» » password|body|string|false|A password to assign to this user.|
|» » utcOffset|body|number|false|The user's timezone, in number of hours relative to UTC.|
|» » roles|body|[string]|false|A list of roles to assign to the user|
|» » type|body|string|false|The user type, must be either "user" or "bot".|
|» » bio|body|string|false|The user's profile bio.|
|» » deleted|body|boolean|false|Was the user deleted from the previous system?|
|» » avatarUrl|body|string|false|A URL pointing to the user's avatar picture.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="add-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="add-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Run Import Operation

<a id="opIdpost-api-v1-import.run"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/import.run \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/import.run`

Process the data from the current import operation, creating the users on Rocket.Chat. It requires the current import operation state to be `ready` and it changes the operation state to `importing`. It will return success if the conditions to start the process are met, without waiting for the import to finish.
Permission required: `run-import`

1. If a user can not be imported successfully it'll be flagged but the operation will not stop.
2. If a user's email or username is already in use, it will not be created.
3. Only the users that were imported successfully will be removed from the staging area.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.3.0            | Added       |

<h3 id="run-import-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="run-import-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="run-import-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Import Operation Status

<a id="opIdget-api-v1-import.status"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/import.status \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/import.status`

Get the status of the current import operation.Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.3.0            | Added       |

<h3 id="get-import-operation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "state": "ready",
  "operation": {
    "_id": "64d51ea91558939980aab371",
    "type": "api",
    "importerKey": "api",
    "ts": "2023-08-10T17:30:17.519Z",
    "status": "importer_user_selection",
    "valid": true,
    "user": "7TY57bBj3xQXvf2i2",
    "_updatedAt": "2023-08-10T17:41:20.052Z",
    "count": {
      "total": 2,
      "users": 2
    }
  },
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-import-operation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The following operation statuses are possible for the operation:<br>  * `none`: No import operation was ever created.<br>  * `new`: An operation was created but no data was added to it.<br>  * `loading`: A traditional importer is currently loading data from a file to the import operation.<br>  * `ready`: An operation was created and has data ready to import.<br>  * `importing`: The import operation is running and the users are being created.<br>  * `error`: An error caused the operation to stop running.<br>  * `canceled`: The operation was interrupted by an administrator.<br>  * `done`: The operation was completed successfully.<br><br>  Note the following points:<br>    1. The operation is considered successful if it processes every user in the staging area, even if no user is imported.<br>    2. You can check how many users have been imported or failed to import with the `operation.count.completed` and `operation.count.error` attributes.<br>    3. The data from users that failed to import will remain in the staging area after the operation is complete.<br>    4. While the operation is running, the values on `operation.count` are only updated once after every 50 users are processed.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-import-operation-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|none|
|operation|object|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» importerKey|string|false|none|none|
|» ts|string|false|none|none|
|» status|string|false|none|none|
|» valid|boolean|false|none|none|
|» user|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» count|object|false|none|none|
|» » total|integer|false|none|none|
|» » users|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Abort Import Operation

<a id="opIdpost-api-v1-import.clear"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/import.clear \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`POST /api/v1/import.clear`

Abort any import operation currently in progress. Clear any remaining data that may have been left by any previous operation.
Permission required: `run-import`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.3.0            | Added       |

<h3 id="abort-import-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="abort-import-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="abort-import-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-instances">Instances</h1>

## Get Instances

<a id="opIdget-api-v1-instances.get"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/instances.get \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/instances.get`

Get the instances running for the workspace. Permission required: `view-statistics`

<h3 id="get-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "instances": [
    {
      "address": "localhost",
      "currentStatus": {
        "connected": true,
        "lastHeartbeatTime": 16,
        "local": true
      },
      "instanceRecord": {
        "_id": "871f8be4-5fdb-45a8-868f-8d3e28a39148",
        "_createdAt": "2024-05-22T11:14:11.845Z",
        "_updatedAt": "2024-07-05T02:55:40.526Z",
        "extraInformation": {
          "host": "localhost",
          "port": "3000",
          "tcpPort": 46443,
          "os": {
            "type": "Linux",
            "platform": "linux",
            "arch": "x64",
            "release": "5.10.165-143.735.amzn2.x86_64",
            "uptime": 8455403.28,
            "loadavg": [
              0.41,
              0.17,
              0.15
            ],
            "totalmem": 4110323712,
            "freemem": 198479872,
            "cpus": 2
          },
          "nodeVersion": "v14.21.3",
          "conns": 1
        },
        "name": "rocket.chat",
        "pid": 1
      },
      "broadcastAuth": true
    }
  ],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-instances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[object]|false|none|none|
|» address|string|false|none|none|
|» currentStatus|object|false|none|none|
|» » connected|boolean|false|none|none|
|» » lastHeartbeatTime|integer|false|none|none|
|» » local|boolean|false|none|none|
|» instanceRecord|object|false|none|none|
|» » _id|string|false|none|none|
|» » _createdAt|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » extraInformation|object|false|none|none|
|» » » host|string|false|none|none|
|» » » port|string|false|none|none|
|» » » tcpPort|integer|false|none|none|
|» » » os|object|false|none|none|
|» » » » type|string|false|none|none|
|» » » » platform|string|false|none|none|
|» » » » arch|string|false|none|none|
|» » » » release|string|false|none|none|
|» » » » uptime|number|false|none|none|
|» » » » loadavg|[number]|false|none|none|
|» » » » totalmem|integer|false|none|none|
|» » » » freemem|integer|false|none|none|
|» » » » cpus|integer|false|none|none|
|» » » nodeVersion|string|false|none|none|
|» » » conns|integer|false|none|none|
|» » name|string|false|none|none|
|» » pid|integer|false|none|none|
|» broadcastAuth|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-moderation">Moderation</h1>

## Get Reported Messages

<a id="opIdget-api-v1-moderation.reportsByUsers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/moderation.reportsByUsers \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/moderation.reportsByUsers`

Retrieves all the reported messages grouped by users.
Permission required: `view-moderation-console`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.2.0            | Added       |

<h3 id="get-reported-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|oldest|query|string|false|It represents the oldest point in time for which you want to retrieve moderation reports.|
|latest|query|string|false|It represents the oldest point in time for which you want to retrieve moderation reports.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "reports": [
    {
      "rooms": [
        {
          "_id": "6423ce62c29657e5b3ba2675rbAXPnMktTFbNpwtJ",
          "t": "d",
          "federated": true
        }
      ],
      "count": 1,
      "message": "hi",
      "msgId": "tDNLALSFk2LET2JZH",
      "ts": "2023-08-30T09:38:38.792Z",
      "username": "test.test",
      "name": "test test",
      "userId": "rbAXPnMktTFbNpwtJ",
      "isUserDeleted": false
    },
    {
      "rooms": [
        {
          "_id": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
          "t": "d"
        }
      ],
      "count": 2,
      "message": "himm",
      "msgId": "xY8cN7yuPQfBgJ9xz",
      "ts": "2023-08-30T09:33:15.621Z",
      "username": "test.test",
      "name": "Testtest",
      "userId": "5fRTXMt7DMJbpPJfh",
      "isUserDeleted": false
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-reported-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-reported-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|[object]|false|none|none|
|» rooms|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» » federated|boolean|false|none|none|
|» count|integer|false|none|none|
|» message|string|false|none|none|
|» msgId|string|false|none|none|
|» ts|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» userId|string|false|none|none|
|» isUserDeleted|boolean|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Reported Messages

<a id="opIdget-api-v1-moderation.user.reportedMessages"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/moderation.user.reportedMessages?userId=string' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/moderation.user.reportedMessages`

Retrieve all reported messages of a user.
Permission required: `view-moderation-console`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.2.0            | Added       |

<h3 id="get-users-reported-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|userId|query|string|true|The id of the user whose reported messages should be retrieved.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "5fRTXMt7DMJbpPJfh",
    "username": "test.test",
    "name": "Testtest"
  },
  "messages": [
    {
      "_id": "64ef0f992c26843a68c1f785",
      "message": {
        "_id": "EbhcT4vjrCDyZuHKq",
        "rid": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "msg": "hola",
        "ts": "2023-08-30T09:44:30.805Z",
        "u": {
          "_id": "5fRTXMt7DMJbpPJfh",
          "username": "test.test",
          "name": "Testtest"
        },
        "_updatedAt": "2023-08-30T09:44:30.968Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "hola"
              }
            ]
          }
        ]
      },
      "room": {
        "_id": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "t": "d"
      },
      "ts": "2023-08-30T09:44:57.912Z"
    },
    {
      "_id": "64ef0cdb2c26843a68c1f780",
      "message": {
        "_id": "xY8cN7yuPQfBgJ9xz",
        "rid": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "msg": "himm",
        "ts": "2023-07-11T01:37:07.951Z",
        "u": {
          "_id": "5fRTXMt7DMJbpPJfh",
          "username": "test.test",
          "name": "Testtest"
        },
        "_updatedAt": "2023-07-11T01:37:08.024Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "himm"
              }
            ]
          }
        ]
      },
      "room": {
        "_id": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "t": "d"
      },
      "ts": "2023-08-30T09:33:15.621Z"
    }
  ],
  "count": 2,
  "total": 2,
  "offset": 0,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-users-reported-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-users-reported-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» message|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» room|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» ts|string|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Reports of a Message

<a id="opIdget-api-v1-moderation.reports"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/moderation.reports?msgId=string' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/moderation.reports`

Retrieve all the reports of a single message. A message can have many reports.
Permission required: `view-moderation-console`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.2.0            | Added       |

<h3 id="get-reports-of-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|msgId|query|string|true|The ID of the message to fetch reports for.|

> Example responses

> 200 Response

```json
{
  "reports": [
    {
      "_id": "64ef0f992c26843a68c1f785",
      "description": "test report\n",
      "reportedBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "test.test",
        "name": "test test",
        "createdAt": "2023-02-20T13:42:07.119Z"
      },
      "room": {
        "_id": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "t": "d"
      },
      "ts": "2023-08-30T09:44:57.912Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-reports-of-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-reports-of-a-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|[object]|false|none|none|
|» _id|string|false|none|none|
|» description|string|false|none|none|
|» reportedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» » createdAt|string|false|none|none|
|» room|object|false|none|none|
|» » _id|string|false|none|none|
|» » t|string|false|none|none|
|» ts|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Report Information

<a id="opIdget-api-v1-moderation.reportInfo"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/moderation.reportInfo?reportId=string' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/moderation.reportInfo`

Get more details of a single report.
Permission required: `view-moderation-console`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.2.0            | Added       |

<h3 id="get-report-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|reportId|query|string|true|The ID of the report to fetch details for.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-report-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-report-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Dismiss Reports

<a id="opIdpost-api-v1-moderation.dismissReports"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/moderation.dismissReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "userId": "BsNr28znDkG8aeo7W",
    "msgId": "7aDSXtjMA3KPWxdt2"
  }'
```

`POST /api/v1/moderation.dismissReports`

You can dismiss all the reports of a particular user by the `userId`. You can also dismiss the report of a message by the `msgId`.
Permission required: `manage-moderation-actions`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.2.0            | Added       |

> Body parameter

```json
{
  "userId": "BsNr28znDkG8aeo7W",
  "msgId": "7aDSXtjMA3KPWxdt2"
}
```

<h3 id="dismiss-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» userId|body|string|false|The ID of the user whose reports to dismiss. This parameter is required if `msgId` is not provided.|
|» msgId|body|string|false|The ID of the message which reports to dismiss. This parameter is required if `userId` is not provided.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="dismiss-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="dismiss-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Reported Messages of a User

<a id="opIdpost-api-v1-moderation.user.deleteReportedMessages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/moderation.user.deleteReportedMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "userId": "BsNr28znDkG8aeo7W"
  }'
```

`POST /api/v1/moderation.user.deleteReportedMessages`

Delete all the reports of messages that belongs to user. Permission required: `manage-moderation-actions`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.2.0            | Added       |

> Body parameter

```json
{
  "userId": "BsNr28znDkG8aeo7W"
}
```

<h3 id="delete-reported-messages-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» userId|body|string|true|The ID of the user whose reports to dismiss.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-reported-messages-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-reported-messages-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Dismiss User Reports

<a id="opIdpost-api-v1-moderation.dismissUserReports"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/moderation.dismissUserReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "userId": "qHWhoJwwgk4bwcoNq",
    "reason": "Description"
  }'
```

`POST /api/v1/moderation.dismissUserReports`

Dismiss a specific reported user from the list of reported users. Permission required: `manage-moderation-actions`

> Body parameter

```json
{
  "userId": "qHWhoJwwgk4bwcoNq",
  "reason": "Description"
}
```

<h3 id="dismiss-user-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» userId|body|string|true|Enter the user ID of the reported user that you want to dismiss. Make sure that the ID belongs to the reported user.|
|» reason|body|string|false|Enter a reason for dismissing the reported user.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'msgId'\n must have required property 'userId'\n must match exactly one schema in oneOf [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="dismiss-user-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="dismiss-user-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Reports by User ID

<a id="opIdget-api-v1-moderation.user.reportsByUserId"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/moderation.user.reportsByUserId?userId=Ahgf5k9Ca4YEdMjwX' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/moderation.user.reportsByUserId`

Get the details of a specific user's reports. Permission required: `view-moderation-console`

<h3 id="get-user-reports-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|userId|query|string|true|Enter the user ID for which you want to retrieve the reports. Make sure that the user ID belongs to the user whose reports you want to retrieve. Entering a user ID with no reports returns the user details, and an incorrect ID returns null results.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "J6Q87AnWP5aNc9xhx",
    "createdAt": "2025-02-04T13:02:39.356Z",
    "username": "cat.kate",
    "emails": [
      {
        "address": "testaz@example.com",
        "verified": false
      }
    ],
    "roles": [
      "user",
      "livechat-agent",
      "livechat-monitor"
    ],
    "active": true,
    "name": "cat kate",
    "avatarETag": "pwJbBtoz47Zkf9myK"
  },
  "reports": [
    {
      "_id": "6969ea608de1f4fa0e7f62fa",
      "description": "issue",
      "reportedBy": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "name": "test cat",
        "username": "test.cat",
        "createdAt": null
      },
      "reportedUser": {
        "_id": "J6Q87AnWP5aNc9xhx",
        "createdAt": "2025-02-04T13:02:39.356Z",
        "username": "cat.kate",
        "emails": [
          {
            "address": "testaz@example.com",
            "verified": false
          }
        ],
        "name": "cat kate"
      },
      "ts": "2026-01-16T07:36:00.020Z"
    }
  ],
  "count": 1,
  "total": 1,
  "offset": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'userId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-user-reports-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-user-reports-by-user-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» active|boolean|false|none|none|
|» name|string|false|none|none|
|» avatarETag|string|false|none|none|
|reports|[object]|false|none|none|
|» _id|string|false|none|none|
|» description|string|false|none|none|
|» reportedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » username|string|false|none|none|
|» » createdAt|string|false|none|none|
|» reportedUser|object|false|none|none|
|» » _id|string|false|none|none|
|» » createdAt|string|false|none|none|
|» » username|string|false|none|none|
|» » emails|[object]|false|none|none|
|» » » address|string|false|none|none|
|» » » verified|boolean|false|none|none|
|» » name|string|false|none|none|
|» ts|string|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Reported Users

<a id="opIdget-api-v1-moderation.userReports"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/moderation.userReports \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/moderation.userReports`

Get the list of reported users. Permission required: `view-moderation-console`

<h3 id="get-reported-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "reports": [
    {
      "count": 1,
      "reportedUser": {
        "_id": "J6Q87AnWP5aNc9xhx",
        "createdAt": "2025-02-04T13:02:39.356Z",
        "username": "cat.kate",
        "emails": [
          {
            "address": "testaz@example.com",
            "verified": false
          }
        ],
        "name": "cat kate"
      },
      "ts": "2026-01-16T07:36:00.020Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-reported-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-reported-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reports|[object]|false|none|none|
|» count|integer|false|none|none|
|» reportedUser|object|false|none|none|
|» » _id|string|false|none|none|
|» » createdAt|string|false|none|none|
|» » username|string|false|none|none|
|» » emails|[object]|false|none|none|
|» » » address|string|false|none|none|
|» » » verified|boolean|false|none|none|
|» » name|string|false|none|none|
|» ts|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-device-management">Device Management</h1>

## Get Current User Sessions

<a id="opIdget-api-v1-sessions-list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/sessions/list \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/sessions/list`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieves all sessions of the authenticated user making the request.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|5.0.0            | Added       |

<h3 id="get-current-user-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|filter|query|string|false|Filter sessions list using regex.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "sessions": [
    {
      "sessionId": "QoYYFw2t9oKks2niG",
      "userId": "rbAXPnMktTFbNpwtJ",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-23T16:33:45.202Z",
      "_id": "QoYYFw2t9oKks2niG",
      "current": false
    },
    {
      "sessionId": "WJ2giBwm4B9mcojFi",
      "userId": "rbAXPnMktTFbNpwtJ",
      "device": {
        "type": "mobile",
        "name": "Chrome",
        "longVersion": "112.0.0.0",
        "os": {
          "name": "Android",
          "version": "10"
        },
        "version": "112.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-23T12:43:52.023Z",
      "_id": "WJ2giBwm4B9mcojFi",
      "current": false
    }
  ],
  "total": 2,
  "count": 50,
  "offset": 0,
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-current-user-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-current-user-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessions|[object]|false|none|none|
|» sessionId|string|false|none|none|
|» userId|string|false|none|none|
|» device|object|false|none|none|
|» » type|string|false|none|none|
|» » name|string|false|none|none|
|» » longVersion|string|false|none|none|
|» » os|object|false|none|none|
|» » » name|string|false|none|none|
|» » » version|string|false|none|none|
|» » version|string|false|none|none|
|» host|string|false|none|none|
|» ip|string|false|none|none|
|» loginAt|string|false|none|none|
|» _id|string|false|none|none|
|» current|boolean|false|none|Whether the session belongs to the device making the request.|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get All User Sessions

<a id="opIdget-api-v1-sessions-list.all"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/sessions/list.all \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/sessions/list.all`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve the sessions of all users on the workspace. This endpoint requires 2FA.
Permission required: `view-device-management`

### Changelog
| Version      | Description |
| ------------ | ------------|
|5.0.0         | Added       |

<h3 id="get-all-user-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|filter|query|string|false|Filter sessions list using regex.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|

> Example responses

> 200 Response

```json
{
  "sessions": [
    {
      "sessionId": "o94SveQp6fyPsoiNC",
      "userId": "2tTEqR7ZNMJ4HGGNa",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-24T00:25:54.234Z",
      "_user": {
        "username": "testroxie",
        "name": "Test"
      },
      "_id": "o94SveQp6fyPsoiNC"
    },
    {
      "sessionId": "BdSrCZXNKCbRi8Eqn",
      "userId": "rbAXPnMktTFbNpwtJ",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-24T00:25:52.246Z",
      "_user": {
        "username": "test.test",
        "name": "test test"
      },
      "_id": "BdSrCZXNKCbRi8Eqn"
    },
    {
      "sessionId": "tTouumJMrHMjnedWf",
      "userId": "GonjPyg3gB3Z9ur9s",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-23T19:14:29.865Z",
      "_user": {
        "name": "test",
        "username": "test.test"
      },
      "_id": "tTouumJMrHMjnedWf"
    },
    {
      "sessionId": "7ykYEK3KWnk4EeA7s",
      "userId": "2tTEqR7ZNMJ4HGGNa",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-23T19:14:28.717Z",
      "_user": {
        "username": "testroxie",
        "name": "Test"
      },
      "_id": "7ykYEK3KWnk4EeA7s"
    },
    {
      "sessionId": "jfD6mnHnrEJdPq9MF",
      "userId": "stjxrXYBWy3EcDugH",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-23T15:21:57.188Z",
      "_user": {
        "username": "rocket.agent",
        "name": "Rocket Agent"
      },
      "_id": "jfD6mnHnrEJdPq9MF"
    },
    {
      "sessionId": "2jQnfG74X3EZYL9tj",
      "userId": "rYhzFRd2QZjNwAAXX",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.20.0.2",
      "loginAt": "2023-05-23T15:19:48.723Z",
      "_user": {
        "name": "Rodriq",
        "username": "rodriq"
      },
      "_id": "2jQnfG74X3EZYL9tj"
    },
    {
      "sessionId": "fsfE772s78AmPxGKk",
      "userId": "uZ5JvvioeHK8Coyqe",
      "device": {
        "type": "browser",
        "name": "Firefox",
        "longVersion": "112.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "112.0"
      },
      "host": "localhost:3000",
      "ip": "172.18.0.4",
      "loginAt": "2023-05-16T20:50:33.608Z",
      "_user": {
        "username": "user-0"
      },
      "_id": "fsfE772s78AmPxGKk"
    },
    {
      "sessionId": "W4y9xkjyqFvbjENco",
      "userId": "b66oZ8i9pkeSko33v",
      "device": {
        "type": "browser",
        "name": "Chrome",
        "longVersion": "113.0.0.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "113.0.0"
      },
      "host": "localhost:3000",
      "ip": "172.18.0.4",
      "loginAt": "2023-05-16T12:46:09.469Z",
      "_user": {
        "username": "guester",
        "name": "Guester"
      },
      "_id": "W4y9xkjyqFvbjENco"
    },
    {
      "sessionId": "94yTWFkADGBvE9t7P",
      "userId": "aspKK7FHe7iQgzexX",
      "device": {
        "type": "browser",
        "name": "Firefox",
        "longVersion": "112.0",
        "os": {
          "name": "Windows",
          "version": "10"
        },
        "version": "112.0"
      },
      "host": "localhost:3000",
      "ip": "172.18.0.4",
      "loginAt": "2023-05-11T18:47:13.865Z",
      "_user": {
        "username": "user-00",
        "name": "User 00"
      },
      "_id": "94yTWFkADGBvE9t7P"
    }
  ],
  "total": 13,
  "count": 50,
  "offset": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "TOTP Required [totp-required]",
  "errorType": "totp-required",
  "details": {
    "method": "password",
    "codeGenerated": false,
    "availableMethods": []
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-all-user-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-all-user-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessions|[object]|false|none|none|
|» sessionId|string|false|none|none|
|» userId|string|false|none|none|
|» device|object|false|none|none|
|» » type|string|false|none|none|
|» » name|string|false|none|none|
|» » longVersion|string|false|none|none|
|» » os|object|false|none|none|
|» » » name|string|false|none|none|
|» » » version|string|false|none|none|
|» » version|string|false|none|none|
|» host|string|false|none|none|
|» ip|string|false|none|none|
|» loginAt|string|false|none|none|
|» _user|object|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _id|string|false|none|none|
|total|integer|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» codeGenerated|boolean|false|none|none|
|» availableMethods|[object]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Current User Session Information

<a id="opIdget-api-v1-sessions-info"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/sessions/info?sessionId=windows' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/sessions/info`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve session information for sessions owned by the authenticated user. This endpoint provides detailed information about the user's sessions on the workspace. It does not grant access to the session information of other users on the workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|5.0.0            | Added       |

<h3 id="get-current-user-session-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|sessionId|query|string|true|The session ID.|

> Example responses

> 200 Response

```json
{
  "_id": "646ceae9a8c3a3ba32d0e897",
  "type": "session",
  "sessionId": "QoYYFw2t9oKks2niG",
  "instanceId": "f0313fa9-ebe6-4a84-8580-3104f6a09988",
  "loginToken": "orklPYtfnjnG6mG7OMuLbOBDzs8I9myfcLl2yzv7WoU=",
  "ip": "172.20.0.2",
  "host": "localhost:3000",
  "device": {
    "type": "browser",
    "name": "Chrome",
    "longVersion": "113.0.0.0",
    "os": {
      "name": "Windows",
      "version": "10"
    },
    "version": "113.0.0"
  },
  "userId": "rbAXPnMktTFbNpwtJ",
  "roles": [
    "user",
    "admin",
    "livechat-agent",
    "livechat-manager"
  ],
  "mostImportantRole": "admin",
  "loginAt": "2023-05-23T16:33:45.202Z",
  "day": 23,
  "month": 5,
  "year": 2023,
  "searchTerm": "ChromebrowserWindowsQoYYFw2t9oKks2niGrbAXPnMktTFbNpwtJ",
  "createdAt": "2023-05-23T16:33:45.203Z",
  "_updatedAt": "2023-05-23T17:56:31.599Z",
  "closedAt": "2023-05-23T17:56:31.599Z",
  "lastActivityAt": "2023-05-23T17:56:31.599Z",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'sessionId'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-current-user-session-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-current-user-session-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|type|string|false|none|none|
|sessionId|string|false|none|none|
|instanceId|string|false|none|none|
|loginToken|string|false|none|none|
|ip|string|false|none|none|
|host|string|false|none|none|
|device|object|false|none|none|
|» type|string|false|none|none|
|» name|string|false|none|none|
|» longVersion|string|false|none|none|
|» os|object|false|none|none|
|» » name|string|false|none|none|
|» » version|string|false|none|none|
|» version|string|false|none|none|
|userId|string|false|none|none|
|roles|[string]|false|none|none|
|mostImportantRole|string|false|none|none|
|loginAt|string|false|none|none|
|day|integer|false|none|none|
|month|integer|false|none|none|
|year|integer|false|none|none|
|searchTerm|string|false|none|none|
|createdAt|string|false|none|none|
|_updatedAt|string|false|none|none|
|closedAt|string|false|none|none|
|lastActivityAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Session Information

<a id="opIdget-api-v1-sessions-info.admin"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/sessions/info.admin?sessionId=windows' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/sessions/info.admin`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve session information for any session on the workspace, regardless of the session owner. This endpoint allows authorized users to access session details across the workspace and requires 2FA.
Permission required: `view-device-management`

### Changelog
| Version      | Description |
| ------------ | ------------|
|5.0.0         | Added       |

<h3 id="get-session-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|sessionId|query|string|true|The session ID.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|

> Example responses

> 200 Response

```json
{
  "sessionId": "uBNL9dTjJ4s6Pjp4K",
  "userId": "rYhzFRd2QZjNwAAXX",
  "device": {
    "type": "browser",
    "name": "Chrome",
    "longVersion": "113.0.0.0",
    "os": {
      "name": "Windows",
      "version": "10"
    },
    "version": "113.0.0"
  },
  "host": "localhost:3000",
  "ip": "172.20.0.2",
  "loginAt": "2023-05-24T05:08:42.806Z",
  "_user": {
    "name": "Rod",
    "username": "Rod"
  },
  "_id": "uBNL9dTjJ4s6Pjp4K",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'sessionId'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-session-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-session-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|false|none|none|
|userId|string|false|none|none|
|device|object|false|none|none|
|» type|string|false|none|none|
|» name|string|false|none|none|
|» longVersion|string|false|none|none|
|» os|object|false|none|none|
|» » name|string|false|none|none|
|» » version|string|false|none|none|
|» version|string|false|none|none|
|host|string|false|none|none|
|ip|string|false|none|none|
|loginAt|string|false|none|none|
|_user|object|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|_id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Logout Current User Session

<a id="opIdpost-api-v1-sessions-logout.me"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/sessions/logout.me \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "sessionId": "WJ2giBwm4B9mcojFi"
  }'
```

`POST /api/v1/sessions/logout.me`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

This endpoint allows an authenticated user to log out of any of their sessions on the workspace. It is designed specifically for the user to terminate their sessions and cannot be used to log out sessions belonging to other users on the workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|5.0.0            | Added       |

> Body parameter

```json
{
  "sessionId": "WJ2giBwm4B9mcojFi"
}
```

<h3 id="logout-current-user-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» sessionId|body|string|true|The session ID.|

> Example responses

> 200 Response

```json
{
  "sessionId": "WJ2giBwm4B9mcojFi",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Session not found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="logout-current-user-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="logout-current-user-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Logout Session

<a id="opIdpost-api-v1-sessions-logout"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/sessions/logout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "sessionId": "tTouumJMrHMjnedWf"
  }'
```

`POST /api/v1/sessions/logout`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

This endpoint allows an authorized user to log out other user's session on the workspace and requires 2FA. It provides the capability to terminate sessions of other users, ensuring workspace security and management.

Permission required: `logout-device-management`

### Changelog
| Version      | Description |
| ------------ | ------------|
|5.0.0         | Added       |

> Body parameter

```json
{
  "sessionId": "tTouumJMrHMjnedWf"
}
```

<h3 id="logout-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|x-2fa-code|header|string|false|The 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» sessionId|body|string|true|The session ID.|

> Example responses

> 200 Response

```json
{
  "sessionId": "tTouumJMrHMjnedWf",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "TOTP Required [totp-required]",
  "errorType": "totp-required",
  "details": {
    "method": "password",
    "codeGenerated": false,
    "availableMethods": []
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="logout-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="logout-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» codeGenerated|boolean|false|none|none|
|» availableMethods|[object]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-password-policy">Password policy</h1>

## Get Password Policy

<a id="opIdget-pw.getPolicy"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/pw.getPolicy \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/pw.getPolicy`

Get the current [password policy](https://docs.rocket.chat/v1/docs/accounts#password-policy) for users in your workspace.
The `pw.getPolicyReset` endpoint has been removed from 7.0. Use this endpoint instead.

<h3 id="get-password-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "policy": [
    [
      "get-password-policy-minLength",
      {
        "minLength": 7
      }
    ],
    [
      "get-password-policy-forbidRepeatingCharacters"
    ],
    [
      "get-password-policy-forbidRepeatingCharactersCount",
      {
        "forbidRepeatingCharactersCount": 3
      }
    ],
    [
      "get-password-policy-mustContainAtLeastOneLowercase"
    ],
    [
      "get-password-policy-mustContainAtLeastOneUppercase"
    ],
    [
      "get-password-policy-mustContainAtLeastOneNumber"
    ],
    [
      "get-password-policy-mustContainAtLeastOneSpecialCharacter"
    ]
  ],
  "success": true
}
```

<h3 id="get-password-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-video-conference">Video Conference</h1>

## Get Video Conference Capabilities

<a id="opIdget-api-v1-video-conference.capabilities"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.capabilities \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/video-conference.capabilities`

Get details on the video call capabilities, such as the name of the provider, and whether Rocket.Chat can control the microphone and camera state. This endpoint is used for the video conference system to dynamically adapt the UI based on provider capabilities, ensuring users only see controls that are actually supported by the configured video conference provider.

Rate limiting: 3 requests per 1000ms

<h3 id="get-video-conference-capabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "providerName": "googlemeet",
  "capabilities": {
    "mic": false,
    "cam": false,
    "title": false
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "no-active-video-conf-provider"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-video-conference-capabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-video-conference-capabilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerName|string|false|none|none|
|capabilities|object|false|none|none|
|» mic|boolean|false|none|none|
|» cam|boolean|false|none|none|
|» title|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Video Conferences

<a id="opIdget-api-v1-video-conference.list"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/video-conference.list?roomId=674eca3e43725ce31dd9a2e8' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/video-conference.list`

Use this endpoint to get the list of video calls for a specific room. Rate limiting: 3 requests per 1000ms.

<h3 id="get-list-of-video-conferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|roomId|query|string|true|Enter the room ID for which you want to view the list of video conferences. Make sure that you have access to the room.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_id": "69786d0ac8b05330207814bd",
      "type": "videoconference",
      "users": [
        {
          "_id": "fRv4qm8ycWHXSA7af",
          "username": "jane.doe",
          "name": "jane",
          "avatarETag": null,
          "ts": "2026-01-27T07:45:14.977Z"
        }
      ],
      "messages": {
        "started": "8AqsmsMXDePKfDbHv"
      },
      "status": 1,
      "anonymousUsers": 0,
      "createdAt": "2026-01-27T07:45:14.533Z",
      "providerName": "googlemeet",
      "ringing": true,
      "title": "ui-test",
      "rid": "674eca3e43725ce31dd9a2e8",
      "createdBy": {
        "_id": "fRv4qm8ycWHXSA7af",
        "name": "jane",
        "username": "jane.doe"
      },
      "_updatedAt": "2026-01-27T07:45:14.977Z",
      "url": "http://g.co/meet/RocketChat_69786d0ac8b05330207814bd"
    },
    {
      "_id": "6772586c8dd061cca4edc998",
      "type": "videoconference",
      "users": [
        {
          "_id": "fRv4qm8ycWHXSA7af",
          "username": "jane.doe",
          "name": "jane",
          "ts": "2024-12-30T08:23:11.130Z"
        }
      ],
      "messages": {
        "started": "sTDmP2WSH6Rwt89iw"
      },
      "status": 2,
      "anonymousUsers": 0,
      "createdAt": "2024-12-30T08:23:08.655Z",
      "providerName": "jitsi",
      "rid": "674eca3e43725ce31dd9a2e8",
      "title": "ui-test",
      "createdBy": {
        "_id": "fRv4qm8ycWHXSA7af",
        "name": "jane",
        "username": "jane.doe"
      },
      "_updatedAt": "2024-12-31T09:00:00.025Z",
      "url": "https://meet.jit.si/RocketChat6772586c8dd061cca4edc998",
      "endedAt": "2024-12-31T09:00:00.025Z"
    }
  ],
  "offset": 0,
  "count": 2,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-list-of-video-conferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-video-conferences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» users|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» » avatarETag|string|false|none|none|
|» » ts|string|false|none|none|
|» messages|object|false|none|none|
|» » started|string|false|none|none|
|» status|integer|false|none|none|
|» anonymousUsers|integer|false|none|none|
|» createdAt|string|false|none|none|
|» providerName|string|false|none|none|
|» ringing|boolean|false|none|none|
|» title|string|false|none|none|
|» rid|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» url|string|false|none|none|
|» endedAt|string|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Video Conference Details

<a id="opIdget-api-v1-video-conference.info"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/video-conference.info?callId=697866d5c8b053302078137a' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/video-conference.info`

Get details about a specific video conference. Rate limiting: 15 requests per 3000ms.

You must be a member of the conference or have access to the conference's room or discussion. The `chatAccess` object lists the members who cannot read the call chat; use `video-conference.share-chat` to give them access.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added `chatAccess` and member status fields in `users`. |

<h3 id="get-video-conference-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|callId|query|string|true|Enter the call ID.|

> Example responses

> 200 Response

```json
{
  "_id": "697866d5c8b053302078137a",
  "type": "videoconference",
  "users": [
    {
      "_id": "fRv4qm8ycWHXSA7af",
      "username": "jane.doe",
      "name": "jane",
      "avatarETag": null,
      "ts": "2026-01-27T07:18:46.491Z"
    }
  ],
  "messages": {
    "started": "RdiQLFktbFxtK2XTZ"
  },
  "status": 1,
  "anonymousUsers": 0,
  "createdAt": "2026-01-27T07:18:45.956Z",
  "providerName": "googlemeet",
  "ringing": true,
  "title": "testdiscussion",
  "rid": "68c8071650223764573dd2dc",
  "createdBy": {
    "_id": "fRv4qm8ycWHXSA7af",
    "name": "jane",
    "username": "jane.doe"
  },
  "_updatedAt": "2026-01-27T07:18:46.491Z",
  "url": "http://g.co/meet/RocketChat_697866d5c8b053302078137a",
  "capabilities": {
    "mic": false,
    "cam": false,
    "title": false
  },
  "chatAccess": {
    "rid": "68c8071650223764573dd2dc",
    "name": "testdiscussion",
    "type": "c",
    "membersWithoutAccess": [],
    "canInvite": true
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-video-conference-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-video-conference-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|type|string|false|none|none|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» avatarETag|string|false|none|none|
|» ts|string|false|none|When the user became a member of the conference.|
|» joined|boolean|false|none|Whether the member joined the call.|
|» joinedAt|string|false|none|none|
|» declined|boolean|false|none|Whether the member declined the call. A member can decline and join later.|
|» declinedAt|string|false|none|none|
|» leftAt|string|false|none|When the member last left the call. Cleared if the member rejoins.|
|» leftReason|string|false|none|How the departure was recorded. `reported` means the member's client reported it; `timeout` means the member's presence heartbeat stopped.|
|» lastSeenAt|string|false|none|none|
|» ringingAt|string|false|none|When the member was last rung.|
|messages|object|false|none|none|
|» started|string|false|none|none|
|status|integer|false|none|none|
|anonymousUsers|integer|false|none|none|
|createdAt|string|false|none|none|
|providerName|string|false|none|none|
|ringing|boolean|false|none|none|
|title|string|false|none|none|
|rid|string|false|none|none|
|createdBy|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|_updatedAt|string|false|none|none|
|url|string|false|none|none|
|capabilities|object|false|none|none|
|» mic|boolean|false|none|none|
|» cam|boolean|false|none|none|
|» title|boolean|false|none|none|
|» persistentChat|boolean|false|none|none|
|» embedded|boolean|false|none|Whether the provider renders the call embedded in Rocket.Chat instead of opening an external URL.|
|chatAccess|object|false|none|Where the call chat is and which conference members cannot read it.|
|» rid|string|false|none|The ID of the room that holds the call chat, either the conference's room or its discussion.|
|» name|string|false|none|The display name of that room.|
|» type|string|false|none|The room type.|
|» membersWithoutAccess|[string]|false|none|The user IDs of conference members who cannot read the call chat.|
|» canInvite|boolean|false|none|Whether the room can take new members. When `false`, use the `discussion` mode of `video-conference.share-chat`.|
|success|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» leftReason|reported|
|» leftReason|timeout|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Video Conference Providers

<a id="opIdget-api-v1-video-conference.providers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.providers \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/video-conference.providers`

Get the list of available video conference providers in your workspace, regardless of their active status. Rate limiting: 3 requests per 1000ms.

<h3 id="get-video-conference-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "key": "pexip",
      "label": "Pexip"
    },
    {
      "key": "googlemeet",
      "label": "GoogleMeet"
    }
  ],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-video-conference-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-video-conference-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» key|string|false|none|none|
|» label|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Start Video Conference

<a id="opIdpost-api-v1-video-conference.start"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "roomId": "674eca3e43725ce31dd9a2e8",
    "title": "Test Call",
    "allowRinging": true
  }'
```

`POST /api/v1/video-conference.start`

Use this endpoint to begin a video call in a specific room. Rate limiting: 3 requests per 60000ms. Permission required: `call-management`.

> Body parameter

```json
{
  "roomId": "674eca3e43725ce31dd9a2e8",
  "title": "Test Call",
  "allowRinging": true
}
```

<h3 id="start-video-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the room ID where you want to start the video call.|
|» title|body|string|false|Enter a title for the video call.|
|» allowRinging|body|boolean|false|Whether to enable ringing for direct calls (requires `videoconf-ring-users` permission; by default admin, users, moderators, and owners have this permission).|

> Example responses

> 200 Response

```json
{
  "data": {
    "type": "videoconference",
    "callId": "697887e3c8b0533020781a4a",
    "rid": "674eca3e43725ce31dd9a2e8",
    "providerName": "googlemeet"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="start-video-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="start-video-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» type|string|false|none|none|
|» callId|string|false|none|none|
|» rid|string|false|none|none|
|» providerName|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Join a Video Conference

<a id="opIdpost-api-v1-video-conference.join"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.join \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a",
    "state": {
      "mic": true,
      "cam": true
    }
  }'
```

`POST /api/v1/video-conference.join`

Join a specific video conference. Rate limiting: 2 requests per 5000ms. This endpoint also allows anonymous access for guest users.

Members of the conference can join it even without access to the conference's room. For providers that render the call embedded in Rocket.Chat, `url` is returned empty.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added `callId` and `rid`, and an empty `url` for embedded providers. |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a",
  "state": {
    "mic": true,
    "cam": true
  }
}
```

<h3 id="join-a-video-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» callId|body|string|true|Enter the video conference call ID that you want to join.|
|» state|body|object|false|Object containing initial device states.|
|» » mic|body|boolean|false|Whether the microphone starts muted or unmuted.|
|» » cam|body|boolean|false|Whether the camera starts enabled or disabled.|

> Example responses

> 200 Response

```json
{
  "url": "http://g.co/meet/RocketChat_697887e3c8b0533020781a4a",
  "providerName": "googlemeet",
  "callId": "697887e3c8b0533020781a4a",
  "rid": "68c8071650223764573dd2dc",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="join-a-video-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="join-a-video-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL to open the call. Empty for providers that render the call embedded in Rocket.Chat.|
|providerName|string|false|none|none|
|callId|string|false|none|The video conference call ID.|
|rid|string|false|none|The ID of the room the call belongs to.|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel Video Conference

<a id="opIdpost-api-v1-video-conference.cancel"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a"
  }'
```

`POST /api/v1/video-conference.cancel`

Cancel a specific video conference call. You can only cancel a call that is in the calling state. Rate limiting: 3 requests per 60 seconds.

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a"
}
```

<h3 id="cancel-video-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|false|none|
|» callId|body|string|true|Enter the call ID that you want to cancel.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="cancel-video-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="cancel-video-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Decline a Video Conference

<a id="opIdpost-api-v1-video-conference.decline"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a"
  }'
```

`POST /api/v1/video-conference.decline`

Records that you declined the call. Only your own membership is updated; the call keeps running for everyone else, and you can still join it later.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 10 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a"
}
```

<h3 id="decline-a-video-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="decline-a-video-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="decline-a-video-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Leave a Video Conference

<a id="opIdpost-api-v1-video-conference.leave"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.leave \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a"
  }'
```

`POST /api/v1/video-conference.leave`

Records that you left the call. The conference ends when no participant is left in it.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 20 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a"
}
```

<h3 id="leave-a-video-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="leave-a-video-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="leave-a-video-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Renew Video Conference Presence

<a id="opIdpost-api-v1-video-conference.heartbeat"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.heartbeat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a"
  }'
```

`POST /api/v1/video-conference.heartbeat`

Confirms that you are still in the call. The call window sends this request periodically. When these requests stop, for example because the client closed unexpectedly, the server records you as having left the call.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 20 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a"
}
```

<h3 id="renew-video-conference-presence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="renew-video-conference-presence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="renew-video-conference-presence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Ring a Video Conference Member

<a id="opIdpost-api-v1-video-conference.ring"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.ring \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a",
    "userId": "kP3wQz8LmNvT5rXyB"
  }'
```

`POST /api/v1/video-conference.ring`

Rings a conference member who is not in the call. The response field `rang` is `false` when no ring was sent, for example because the member is already in the call, is already being rung, or the call has ended.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 5 per minute per client IP address.

Permission required: `videoconf-ring-users`

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a",
  "userId": "kP3wQz8LmNvT5rXyB"
}
```

<h3 id="ring-a-video-conference-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|
|» userId|body|string|true|The user ID (not the username) of the conference member to ring.|

> Example responses

> 200 Response

```json
{
  "rang": true,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="ring-a-video-conference-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="ring-a-video-conference-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rang|boolean|false|none|Whether the member was rung.|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add Video Conference Participants

<a id="opIdpost-api-v1-video-conference.add-participants"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.add-participants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a",
    "users": [
      "sam.okafor",
      "lee.chen"
    ],
    "ring": true
  }'
```

`POST /api/v1/video-conference.add-participants`

Adds users as members of the conference. Membership allows a user to join the call, but does not add them to the conference's room, so they might not be able to read the call chat. Use `video-conference.info` to check `chatAccess`, and `video-conference.share-chat` to give members access to the chat.

The response lists the user IDs of the members that were added. Users who are already members, usernames that do not exist, and calls that have ended result in no additions.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 5 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a",
  "users": [
    "sam.okafor",
    "lee.chen"
  ],
  "ring": true
}
```

<h3 id="add-video-conference-participants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|
|» users|body|[string]|true|The usernames (not user IDs) of the people to add. Enter between 1 and 10 usernames.|
|» ring|body|boolean|false|Whether to ring the people being added. Defaults to `false`. Ringing also requires the `videoconf-ring-users` permission; without it, the users are added without being rung.|

> Example responses

> 200 Response

```json
{
  "added": [
    "kP3wQz8LmNvT5rXyB",
    "Hn4tYw9QeVb2LsJxR"
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="add-video-conference-participants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="add-video-conference-participants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|[string]|false|none|The user IDs of the members that were added.|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Rename a Video Conference

<a id="opIdpost-api-v1-video-conference.rename"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a",
    "title": "Sprint planning"
  }'
```

`POST /api/v1/video-conference.rename`

Changes the title of an ongoing group video conference. Only the user who started the call can rename it. Otherwise, the request fails with `error-not-allowed`. Calls that have ended and direct calls cannot be renamed and return `error-invalid-video-conf`.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 10 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a",
  "title": "Sprint planning"
}
```

<h3 id="rename-a-video-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|
|» title|body|string|true|The new conference title. Leading and trailing spaces are removed.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="rename-a-video-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="rename-a-video-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Share Video Conference Chat

<a id="opIdpost-api-v1-video-conference.share-chat"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.share-chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE' \
  -d '{
    "callId": "697887e3c8b0533020781a4a",
    "mode": "discussion"
  }'
```

`POST /api/v1/video-conference.share-chat`

Gives the conference members who cannot read the call chat access to it, and returns the ID of the room that holds the chat afterwards. If every member already has access, the current chat room ID is returned and nothing changes. When the selected `mode` is not allowed, the request fails with `error-not-allowed`.

You must be a member of the conference or have access to the conference's room or discussion. Requests are limited to 5 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

> Body parameter

```json
{
  "callId": "697887e3c8b0533020781a4a",
  "mode": "discussion"
}
```

<h3 id="share-video-conference-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|body|body|object|true|none|
|» callId|body|string|true|The video conference call ID.|
|» mode|body|string|true|How to give members access to the call chat:<br>* `invite`: Add the members without access to the room that holds the chat. Not available for rooms that cannot take new members, such as direct messages.<br>* `discussion`: Move the chat to a new discussion that includes the conference members. Requires discussions to be enabled and the `start-discussion` or `start-discussion-other-user` permission.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|invite|
|» mode|discussion|

> Example responses

> 200 Response

```json
{
  "rid": "7Tb3XkPq9WmRzL2cN",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="share-video-conference-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are neither a member of the conference nor able to access its room.|Inline|

<h3 id="share-video-conference-chat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rid|string|false|none|The ID of the room that holds the call chat.|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Joinable Video Conferences

<a id="opIdget-api-v1-video-conference.joinable"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/video-conference.joinable \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/video-conference.joinable`

Lists the video conferences running now that you can join, including calls you are already in and calls that are ringing for you. Empty calls are not listed. Requests are limited to 30 per minute per client IP address.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

<h3 id="get-joinable-video-conferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "calls": [
    {
      "callId": "697887e3c8b0533020781a4a",
      "name": "Sprint planning",
      "createdAt": "2026-09-23T10:00:00.000Z",
      "usersCount": 2,
      "participants": [
        {
          "_id": "rbAXPnMktTFbNpwtJ",
          "username": "dana.reyes",
          "name": "Dana Reyes"
        },
        {
          "_id": "kP3wQz8LmNvT5rXyB",
          "username": "sam.okafor",
          "name": "Sam Okafor"
        }
      ],
      "joined": false,
      "declined": false,
      "ringingAt": "2026-09-23T10:00:02.000Z"
    }
  ],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-joinable-video-conferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-joinable-video-conferences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|[object]|false|none|none|
|» callId|string|false|none|none|
|» name|string|false|none|The conference title, or the room name if the conference has no title.|
|» createdAt|string|false|none|none|
|» usersCount|integer|false|none|The number of people in the call now.|
|» participants|[object]|false|none|Some of the people in the call. The list is capped by the server; use `usersCount` for the total.|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» joined|boolean|false|none|Whether you are in the call.|
|» declined|boolean|false|none|Whether you declined the call.|
|» ringingAt|string|false|none|When you were last rung for this call.|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="settings-media-calls">Media Calls</h1>

## Get Current Media Call State

<a id="opIdpost-api-v1-get-media-calls.state"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/media-calls.state \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/media-calls.state`

Returns ongoing media calls the authenticated user is part of. It shows call's latest server-side state — `ringing`, `active`, etc.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.4.0   | Added       |


<h3 id="get-current-media-call-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|

> Example responses

> 200 Response

```json
{
  "calls": [
    {
      "_id": "9f44ec94-2046-4fac-976b-fa8b0e022b08",
      "service": "webrtc",
      "kind": "direct",
      "state": "ringing",
      "createdBy": {
        "type": "user",
        "id": "aEGCdnFoBFCFNdiyX",
        "contractId": "7b96e74d-1e01-412a-8bcb-145db1bc9ac4"
      },
      "createdAt": "2026-04-30T13:30:53.165Z",
      "caller": {
        "type": "user",
        "id": "aEGCdnFoBFCFNdiyX",
        "contractId": "7b96e74d-1e01-412a-8bcb-145db1bc9ac4",
        "displayName": "Funke Olasupo",
        "username": "funke.olasupo"
      },
      "callee": {
        "type": "user",
        "id": "iaZWAXecuCuBx4FnX",
        "displayName": "Agent1",
        "username": "agent1"
      },
      "expiresAt": "2026-04-30T13:33:02.878Z",
      "uids": [
        "aEGCdnFoBFCFNdiyX",
        "iaZWAXecuCuBx4FnX"
      ],
      "ended": false,
      "callerRequestedId": "7b96e74d-1e01-412a-8bcb-145db1bc9ac4-38b61a15-8c41-4ee4-be75-977c48cd94ea",
      "features": [
        "audio",
        "screen-share",
        "transfer",
        "hold"
      ],
      "_updatedAt": "2026-04-30T13:31:02.878Z"
    }
  ],
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-current-media-call-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of in-flight calls for the authenticated user.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-current-media-call-state-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls|[object]|false|none|All in-flight calls the authenticated user participates in.|
|» _id|string(uuid)|false|none|Unique identifier of the call.|
|» service|string|false|none|Underlying media service powering the call.|
|» kind|string|false|none|Call topology.|
|» state|string|false|none|Current lifecycle state of the call.<br>- `ringing` : invitation sent, callee has not yet answered.<br>- `active` : call accepted and media is flowing.<br>|
|» createdBy|object|false|none|The actor who created the call.|
|» » type|string|false|none|none|
|» » id|string|false|none|Rocket.Chat user id.|
|» » contractId|string(uuid)|false|none|Device/session contract id registered with the media-call service.|
|» createdAt|string(date-time)|false|none|When the call record was created on the server.|
|» caller|object|false|none|The party initiating the call. Always carries `contractId`.|
|» » type|string|false|none|none|
|» » id|string|false|none|none|
|» » contractId|string|false|none|none|
|» » displayName|string|false|none|none|
|» » username|string|false|none|none|
|» callee|object|false|none|The party being called. `contractId` is omitted while<br>the call is `ringing` (no device has answered yet)<br>and populated once accepted.<br>|
|» » type|string|false|none|none|
|» » id|string|false|none|none|
|» » contractId|string|false|none|Set once the call is accepted.|
|» » displayName|string|false|none|none|
|» » username|string|false|none|none|
|» expiresAt|string|false|none|When the current state will expire if no further activity occurs.|
|» uids|[string]|false|none|User IDs of every participant in the call.|
|» ended|boolean|false|none|Always `false` for entries returned by this endpoint.|
|» callerRequestedId|string|false|none|Client-supplied correlation id for the call request.|
|» features|[string]|false|none|Feature flags negotiated for this call.|
|» _updatedAt|string|false|none|When the call record was last updated.|
|» acceptedAt|string|false|none|Set once the callee accepts. Absent while ringing.|
|» activatedAt|string|false|none|Set once media becomes active. Absent while ringing.|
|success|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» service|webrtc|
|» kind|direct|
|» state|ringing|
|» state|active|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Media Call Details

<a id="opIdget-api-v1-media-calls.info"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/media-calls.info?callId=9f44ec94-2046-4fac-976b-fa8b0e022b08' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: CkCPNctrgCDfmWLqC' \
  -H 'X-Auth-Token: 1Dd4iN_ClKn5jl-xPC36snQ4s9Zd5GZnXCQuCNSKcVE'
```

`GET /api/v1/media-calls.info`

Returns the stored record for a media call, including ended calls. The record includes the sipCallId for external (SIP) calls. Only participants of the call can access the record.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Added       |

<h3 id="get-media-call-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID.|
|X-Auth-Token|header|string|true|The authentication token.|
|callId|query|string|true|The media call ID.|

> Example responses

> 200 Response

```json
{
  "call": {
    "_id": "9f44ec94-2046-4fac-976b-fa8b0e022b08",
    "service": "webrtc",
    "kind": "direct",
    "state": "hangup",
    "createdBy": {
      "type": "user",
      "id": "aEGCdnFoBFCFNdiyX",
      "contractId": "7b96e74d-1e01-412a-8bcb-145db1bc9ac4"
    },
    "createdAt": "2026-09-23T13:30:53.165Z",
    "caller": {
      "type": "user",
      "id": "aEGCdnFoBFCFNdiyX",
      "contractId": "7b96e74d-1e01-412a-8bcb-145db1bc9ac4",
      "displayName": "Dana Reyes",
      "username": "dana.reyes"
    },
    "callee": {
      "type": "sip",
      "id": "+15550100123",
      "displayName": "Acme Support"
    },
    "ended": true,
    "endedBy": {
      "type": "user",
      "id": "aEGCdnFoBFCFNdiyX"
    },
    "endedAt": "2026-09-23T13:35:10.402Z",
    "expiresAt": "2026-09-23T13:36:10.402Z",
    "acceptedAt": "2026-09-23T13:31:02.118Z",
    "activatedAt": "2026-09-23T13:31:03.540Z",
    "uids": [
      "aEGCdnFoBFCFNdiyX"
    ],
    "features": [
      "audio"
    ],
    "sipCallId": "3c4f8a1e-92b7-4d6e@sip.example.com",
    "_updatedAt": "2026-09-23T13:35:10.402Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'callId' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 404 Response

```json
{
  "success": false,
  "error": "Resource not found"
}
```

<h3 id="get-media-call-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found. The call does not exist, or you are not a participant.|Inline|

<h3 id="get-media-call-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|call|object|false|none|none|
|» _id|string|false|none|The media call ID.|
|» service|string|false|none|none|
|» kind|string|false|none|none|
|» state|string|false|none|none|
|» createdBy|object|false|none|The actor who created the call.|
|» createdAt|string(date-time)|false|none|none|
|» caller|object|false|none|The party that started the call. `type` is `user` or `sip`.|
|» » type|string|false|none|none|
|» » id|string|false|none|none|
|» » contractId|string|false|none|none|
|» » displayName|string|false|none|none|
|» » username|string|false|none|none|
|» » sipExtension|string|false|none|none|
|» callee|object|false|none|The party being called. `type` is `user` or `sip`.|
|» » type|string|false|none|none|
|» » id|string|false|none|none|
|» » contractId|string|false|none|none|
|» » displayName|string|false|none|none|
|» » username|string|false|none|none|
|» » sipExtension|string|false|none|none|
|» ended|boolean|false|none|none|
|» endedBy|object|false|none|none|
|» endedAt|string(date-time)|false|none|none|
|» hangupReason|string|false|none|none|
|» expiresAt|string(date-time)|false|none|none|
|» acceptedAt|string(date-time)|false|none|none|
|» activatedAt|string(date-time)|false|none|none|
|» uids|[string]|false|none|The user IDs of the call participants.|
|» features|[string]|false|none|none|
|» sipCallId|string|false|none|The SIP Call-ID of an external call. Present only for calls that went through SIP.|
|» _updatedAt|string(date-time)|false|none|none|
|success|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» service|webrtc|
|» kind|direct|
|» state|none|
|» state|ringing|
|» state|accepted|
|» state|active|
|» state|hangup|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
