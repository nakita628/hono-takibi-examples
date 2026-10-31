<h1 id="adsense-management-api">AdSense Management API v1.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Accesses AdSense publishers' inventory and generates performance reports.

Base URLs:

* <a href="https://www.googleapis.com/adsense/v1.4">https://www.googleapis.com/adsense/v1.4</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/adsense/management/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adsense|View and manage your AdSense data|
|https://www.googleapis.com/auth/adsense.readonly|View your AdSense data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adsense|View and manage your AdSense data|
|https://www.googleapis.com/auth/adsense.readonly|View your AdSense data|

<h1 id="adsense-management-api-accounts">accounts</h1>

## adsense.accounts.list

<a id="opIdadsense.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

List all accounts available to this AdSense account.

<h3 id="adsenseaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of accounts to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "creation_time": "string",
      "id": "string",
      "kind": "adsense#account",
      "name": "string",
      "premium": true,
      "subAccounts": [
        {}
      ],
      "timezone": "string"
    }
  ],
  "kind": "adsense#accounts",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Accounts](#schemaaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.get

<a id="opIdadsense.accounts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}`

Get information about the selected AdSense account.

<h3 id="adsenseaccountsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to get information about.|
|tree|query|boolean|false|Whether the tree of sub accounts should be returned.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "creation_time": "string",
  "id": "string",
  "kind": "adsense#account",
  "name": "string",
  "premium": true,
  "subAccounts": [
    {}
  ],
  "timezone": "string"
}
```

<h3 id="adsenseaccountsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.adclients.list

<a id="opIdadsense.accounts.adclients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients`

List all ad clients in the specified account.

<h3 id="adsenseaccountsadclientslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account for which to list ad clients.|
|maxResults|query|integer|false|The maximum number of ad clients to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "arcOptIn": true,
      "id": "string",
      "kind": "adsense#adClient",
      "productCode": "string",
      "supportsReporting": true
    }
  ],
  "kind": "adsense#adClients",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountsadclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdClients](#schemaadclients)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.adclients.getAdCode

<a id="opIdadsense.accounts.adclients.getAdCode"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adcode \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adcode`

Get Auto ad code for a given ad client.

<h3 id="adsenseaccountsadclientsgetadcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
|adClientId|path|string|true|Ad client to get the code for.|
|tagPartner|query|string|false|Tag partner to include in the ad code snippet.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adCode": "string",
  "ampBody": "string",
  "ampHead": "string",
  "kind": "adsense#adCode"
}
```

<h3 id="adsenseaccountsadclientsgetadcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdCode](#schemaadcode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.adunits.list

<a id="opIdadsense.accounts.adunits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits`

List all ad units in the specified ad client for the specified account.

<h3 id="adsenseaccountsadunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client for which to list ad units.|
|includeInactive|query|boolean|false|Whether to include inactive ad units. Default: true.|
|maxResults|query|integer|false|The maximum number of ad units to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "contentAdsSettings": {
        "backupOption": {
          "color": "string",
          "type": "string",
          "url": "string"
        },
        "size": "string",
        "type": "string"
      },
      "customStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "feedAdsSettings": {
        "adPosition": "string",
        "frequency": 0,
        "minimumWordCount": 0,
        "type": "string"
      },
      "id": "string",
      "kind": "adsense#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "savedStyleId": "string",
      "status": "string"
    }
  ],
  "kind": "adsense#adUnits",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountsadunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnits](#schemaadunits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.adunits.get

<a id="opIdadsense.accounts.adunits.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}`

Gets the specified ad unit in the specified ad client for the specified account.

<h3 id="adsenseaccountsadunitsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client for which to get the ad unit.|
|adUnitId|path|string|true|Ad unit to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "contentAdsSettings": {
    "backupOption": {
      "color": "string",
      "type": "string",
      "url": "string"
    },
    "size": "string",
    "type": "string"
  },
  "customStyle": {
    "colors": {
      "background": "string",
      "border": "string",
      "text": "string",
      "title": "string",
      "url": "string"
    },
    "corners": "string",
    "font": {
      "family": "string",
      "size": "string"
    },
    "kind": "adsense#adStyle"
  },
  "feedAdsSettings": {
    "adPosition": "string",
    "frequency": 0,
    "minimumWordCount": 0,
    "type": "string"
  },
  "id": "string",
  "kind": "adsense#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "savedStyleId": "string",
  "status": "string"
}
```

<h3 id="adsenseaccountsadunitsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.adunits.getAdCode

<a id="opIdadsense.accounts.adunits.getAdCode"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits/string/adcode \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode`

Get ad code for the specified ad unit.

<h3 id="adsenseaccountsadunitsgetadcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
|adClientId|path|string|true|Ad client with contains the ad unit.|
|adUnitId|path|string|true|Ad unit to get the code for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adCode": "string",
  "ampBody": "string",
  "ampHead": "string",
  "kind": "adsense#adCode"
}
```

<h3 id="adsenseaccountsadunitsgetadcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdCode](#schemaadcode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.adunits.customchannels.list

<a id="opIdadsense.accounts.adunits.customchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits/string/customchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/customchannels`

List all custom channels which the specified ad unit belongs to.

<h3 id="adsenseaccountsadunitscustomchannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client which contains the ad unit.|
|adUnitId|path|string|true|Ad unit for which to list custom channels.|
|maxResults|query|integer|false|The maximum number of custom channels to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "id": "string",
      "kind": "adsense#customChannel",
      "name": "string",
      "targetingInfo": {
        "adsAppearOn": "string",
        "description": "string",
        "location": "string",
        "siteLanguage": "string"
      }
    }
  ],
  "kind": "adsense#customChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountsadunitscustomchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannels](#schemacustomchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.customchannels.list

<a id="opIdadsense.accounts.customchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/customchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/customchannels`

List all custom channels in the specified ad client for the specified account.

<h3 id="adsenseaccountscustomchannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client for which to list custom channels.|
|maxResults|query|integer|false|The maximum number of custom channels to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "id": "string",
      "kind": "adsense#customChannel",
      "name": "string",
      "targetingInfo": {
        "adsAppearOn": "string",
        "description": "string",
        "location": "string",
        "siteLanguage": "string"
      }
    }
  ],
  "kind": "adsense#customChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountscustomchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannels](#schemacustomchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.customchannels.get

<a id="opIdadsense.accounts.customchannels.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/customchannels/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}`

Get the specified custom channel from the specified ad client for the specified account.

<h3 id="adsenseaccountscustomchannelsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client which contains the custom channel.|
|customChannelId|path|string|true|Custom channel to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "id": "string",
  "kind": "adsense#customChannel",
  "name": "string",
  "targetingInfo": {
    "adsAppearOn": "string",
    "description": "string",
    "location": "string",
    "siteLanguage": "string"
  }
}
```

<h3 id="adsenseaccountscustomchannelsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.customchannels.adunits.list

<a id="opIdadsense.accounts.customchannels.adunits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/customchannels/string/adunits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}/adunits`

List all ad units in the specified custom channel.

<h3 id="adsenseaccountscustomchannelsadunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client which contains the custom channel.|
|customChannelId|path|string|true|Custom channel for which to list ad units.|
|includeInactive|query|boolean|false|Whether to include inactive ad units. Default: true.|
|maxResults|query|integer|false|The maximum number of ad units to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "contentAdsSettings": {
        "backupOption": {
          "color": "string",
          "type": "string",
          "url": "string"
        },
        "size": "string",
        "type": "string"
      },
      "customStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "feedAdsSettings": {
        "adPosition": "string",
        "frequency": 0,
        "minimumWordCount": 0,
        "type": "string"
      },
      "id": "string",
      "kind": "adsense#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "savedStyleId": "string",
      "status": "string"
    }
  ],
  "kind": "adsense#adUnits",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountscustomchannelsadunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnits](#schemaadunits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.urlchannels.list

<a id="opIdadsense.accounts.urlchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/urlchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/urlchannels`

List all URL channels in the specified ad client for the specified account.

<h3 id="adsenseaccountsurlchannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the ad client belongs.|
|adClientId|path|string|true|Ad client for which to list URL channels.|
|maxResults|query|integer|false|The maximum number of URL channels to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "id": "string",
      "kind": "adsense#urlChannel",
      "urlPattern": "string"
    }
  ],
  "kind": "adsense#urlChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountsurlchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlChannels](#schemaurlchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.alerts.list

<a id="opIdadsense.accounts.alerts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/alerts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/alerts`

List the alerts for the specified AdSense account.

<h3 id="adsenseaccountsalertslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account for which to retrieve the alerts.|
|locale|query|string|false|The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "isDismissible": true,
      "kind": "adsense#alert",
      "message": "string",
      "severity": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#alerts"
}
```

<h3 id="adsenseaccountsalertslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Alerts](#schemaalerts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.alerts.delete

<a id="opIdadsense.accounts.alerts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/alerts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounts/{accountId}/alerts/{alertId}`

Dismiss (delete) the specified alert from the specified publisher AdSense account.

<h3 id="adsenseaccountsalertsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad unit.|
|alertId|path|string|true|Alert to delete.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

<h3 id="adsenseaccountsalertsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense )
</aside>

## adsense.accounts.payments.list

<a id="opIdadsense.accounts.payments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/payments`

List the payments for the specified AdSense account.

<h3 id="adsenseaccountspaymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account for which to retrieve the payments.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "kind": "adsense#payment",
      "paymentAmount": "string",
      "paymentAmountCurrencyCode": "string",
      "paymentDate": "string"
    }
  ],
  "kind": "adsense#payments"
}
```

<h3 id="adsenseaccountspaymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Payments](#schemapayments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.reports.generate

<a id="opIdadsense.accounts.reports.generate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/accounts/string/reports?startDate=string&endDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/reports`

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

<h3 id="adsenseaccountsreportsgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account upon which to report.|
|startDate|query|string|true|Start of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|endDate|query|string|true|End of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|currency|query|string|false|Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.|
|dimension|query|[string]|false|Dimensions to base the report on.|
|filter|query|[string]|false|Filters to be run on the report.|
|locale|query|string|false|Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.|
|maxResults|query|integer|false|The maximum number of rows of report data to return.|
|metric|query|[string]|false|Numeric columns to include in the report.|
|sort|query|[string]|false|The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.|
|startIndex|query|integer|false|Index of the first row of report data to return.|
|useTimezoneReporting|query|boolean|false|Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "averages": [
    "string"
  ],
  "endDate": "string",
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#report",
  "rows": [
    [
      "string"
    ]
  ],
  "startDate": "string",
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

<h3 id="adsenseaccountsreportsgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdsenseReportsGenerateResponse](#schemaadsensereportsgenerateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.reports.saved.list

<a id="opIdadsense.accounts.reports.saved.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/reports/saved \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/reports/saved`

List all saved reports in the specified AdSense account.

<h3 id="adsenseaccountsreportssavedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the saved reports belong.|
|maxResults|query|integer|false|The maximum number of saved reports to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "id": "string",
      "kind": "adsense#savedReport",
      "name": "string"
    }
  ],
  "kind": "adsense#savedReports",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountsreportssavedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedReports](#schemasavedreports)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.reports.saved.generate

<a id="opIdadsense.accounts.reports.saved.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/reports/{savedReportId}`

Generate an AdSense report based on the saved report ID sent in the query parameters.

<h3 id="adsenseaccountsreportssavedgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to which the saved reports belong.|
|savedReportId|path|string|true|The saved report to retrieve.|
|locale|query|string|false|Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.|
|maxResults|query|integer|false|The maximum number of rows of report data to return.|
|startIndex|query|integer|false|Index of the first row of report data to return.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "averages": [
    "string"
  ],
  "endDate": "string",
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#report",
  "rows": [
    [
      "string"
    ]
  ],
  "startDate": "string",
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

<h3 id="adsenseaccountsreportssavedgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdsenseReportsGenerateResponse](#schemaadsensereportsgenerateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.savedadstyles.list

<a id="opIdadsense.accounts.savedadstyles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/savedadstyles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/savedadstyles`

List all saved ad styles in the specified account.

<h3 id="adsenseaccountssavedadstyleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account for which to list saved ad styles.|
|maxResults|query|integer|false|The maximum number of saved ad styles to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "adStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "id": "string",
      "kind": "adsense#savedAdStyle",
      "name": "string"
    }
  ],
  "kind": "adsense#savedAdStyles",
  "nextPageToken": "string"
}
```

<h3 id="adsenseaccountssavedadstyleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedAdStyles](#schemasavedadstyles)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.accounts.savedadstyles.get

<a id="opIdadsense.accounts.savedadstyles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/savedadstyles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/savedadstyles/{savedAdStyleId}`

List a specific saved ad style for the specified account.

<h3 id="adsenseaccountssavedadstylesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account for which to get the saved ad style.|
|savedAdStyleId|path|string|true|Saved ad style to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adStyle": {
    "colors": {
      "background": "string",
      "border": "string",
      "text": "string",
      "title": "string",
      "url": "string"
    },
    "corners": "string",
    "font": {
      "family": "string",
      "size": "string"
    },
    "kind": "adsense#adStyle"
  },
  "id": "string",
  "kind": "adsense#savedAdStyle",
  "name": "string"
}
```

<h3 id="adsenseaccountssavedadstylesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedAdStyle](#schemasavedadstyle)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-adclients">adclients</h1>

## adsense.adclients.list

<a id="opIdadsense.adclients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients`

List all ad clients in this AdSense account.

<h3 id="adsenseadclientslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of ad clients to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "arcOptIn": true,
      "id": "string",
      "kind": "adsense#adClient",
      "productCode": "string",
      "supportsReporting": true
    }
  ],
  "kind": "adsense#adClients",
  "nextPageToken": "string"
}
```

<h3 id="adsenseadclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdClients](#schemaadclients)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-adunits">adunits</h1>

## adsense.adunits.list

<a id="opIdadsense.adunits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/adunits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/adunits`

List all ad units in the specified ad client for this AdSense account.

<h3 id="adsenseadunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client for which to list ad units.|
|includeInactive|query|boolean|false|Whether to include inactive ad units. Default: true.|
|maxResults|query|integer|false|The maximum number of ad units to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "contentAdsSettings": {
        "backupOption": {
          "color": "string",
          "type": "string",
          "url": "string"
        },
        "size": "string",
        "type": "string"
      },
      "customStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "feedAdsSettings": {
        "adPosition": "string",
        "frequency": 0,
        "minimumWordCount": 0,
        "type": "string"
      },
      "id": "string",
      "kind": "adsense#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "savedStyleId": "string",
      "status": "string"
    }
  ],
  "kind": "adsense#adUnits",
  "nextPageToken": "string"
}
```

<h3 id="adsenseadunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnits](#schemaadunits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.adunits.get

<a id="opIdadsense.adunits.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/adunits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/adunits/{adUnitId}`

Gets the specified ad unit in the specified ad client.

<h3 id="adsenseadunitsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client for which to get the ad unit.|
|adUnitId|path|string|true|Ad unit to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "contentAdsSettings": {
    "backupOption": {
      "color": "string",
      "type": "string",
      "url": "string"
    },
    "size": "string",
    "type": "string"
  },
  "customStyle": {
    "colors": {
      "background": "string",
      "border": "string",
      "text": "string",
      "title": "string",
      "url": "string"
    },
    "corners": "string",
    "font": {
      "family": "string",
      "size": "string"
    },
    "kind": "adsense#adStyle"
  },
  "feedAdsSettings": {
    "adPosition": "string",
    "frequency": 0,
    "minimumWordCount": 0,
    "type": "string"
  },
  "id": "string",
  "kind": "adsense#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "savedStyleId": "string",
  "status": "string"
}
```

<h3 id="adsenseadunitsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.adunits.getAdCode

<a id="opIdadsense.adunits.getAdCode"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/adunits/string/adcode \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/adunits/{adUnitId}/adcode`

Get ad code for the specified ad unit.

<h3 id="adsenseadunitsgetadcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client with contains the ad unit.|
|adUnitId|path|string|true|Ad unit to get the code for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adCode": "string",
  "ampBody": "string",
  "ampHead": "string",
  "kind": "adsense#adCode"
}
```

<h3 id="adsenseadunitsgetadcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdCode](#schemaadcode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.adunits.customchannels.list

<a id="opIdadsense.adunits.customchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/adunits/string/customchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/adunits/{adUnitId}/customchannels`

List all custom channels which the specified ad unit belongs to.

<h3 id="adsenseadunitscustomchannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client which contains the ad unit.|
|adUnitId|path|string|true|Ad unit for which to list custom channels.|
|maxResults|query|integer|false|The maximum number of custom channels to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "id": "string",
      "kind": "adsense#customChannel",
      "name": "string",
      "targetingInfo": {
        "adsAppearOn": "string",
        "description": "string",
        "location": "string",
        "siteLanguage": "string"
      }
    }
  ],
  "kind": "adsense#customChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsenseadunitscustomchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannels](#schemacustomchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-alerts">alerts</h1>

## adsense.alerts.list

<a id="opIdadsense.alerts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/alerts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /alerts`

List the alerts for this AdSense account.

<h3 id="adsensealertslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "isDismissible": true,
      "kind": "adsense#alert",
      "message": "string",
      "severity": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#alerts"
}
```

<h3 id="adsensealertslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Alerts](#schemaalerts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.alerts.delete

<a id="opIdadsense.alerts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/alerts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /alerts/{alertId}`

Dismiss (delete) the specified alert from the publisher's AdSense account.

<h3 id="adsensealertsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Alert to delete.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

<h3 id="adsensealertsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense )
</aside>

<h1 id="adsense-management-api-customchannels">customchannels</h1>

## adsense.customchannels.list

<a id="opIdadsense.customchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/customchannels`

List all custom channels in the specified ad client for this AdSense account.

<h3 id="adsensecustomchannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client for which to list custom channels.|
|maxResults|query|integer|false|The maximum number of custom channels to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "id": "string",
      "kind": "adsense#customChannel",
      "name": "string",
      "targetingInfo": {
        "adsAppearOn": "string",
        "description": "string",
        "location": "string",
        "siteLanguage": "string"
      }
    }
  ],
  "kind": "adsense#customChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsensecustomchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannels](#schemacustomchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.customchannels.get

<a id="opIdadsense.customchannels.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/customchannels/{customChannelId}`

Get the specified custom channel from the specified ad client.

<h3 id="adsensecustomchannelsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client which contains the custom channel.|
|customChannelId|path|string|true|Custom channel to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "id": "string",
  "kind": "adsense#customChannel",
  "name": "string",
  "targetingInfo": {
    "adsAppearOn": "string",
    "description": "string",
    "location": "string",
    "siteLanguage": "string"
  }
}
```

<h3 id="adsensecustomchannelsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.customchannels.adunits.list

<a id="opIdadsense.customchannels.adunits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels/string/adunits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/customchannels/{customChannelId}/adunits`

List all ad units in the specified custom channel.

<h3 id="adsensecustomchannelsadunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client which contains the custom channel.|
|customChannelId|path|string|true|Custom channel for which to list ad units.|
|includeInactive|query|boolean|false|Whether to include inactive ad units. Default: true.|
|maxResults|query|integer|false|The maximum number of ad units to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "contentAdsSettings": {
        "backupOption": {
          "color": "string",
          "type": "string",
          "url": "string"
        },
        "size": "string",
        "type": "string"
      },
      "customStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "feedAdsSettings": {
        "adPosition": "string",
        "frequency": 0,
        "minimumWordCount": 0,
        "type": "string"
      },
      "id": "string",
      "kind": "adsense#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "savedStyleId": "string",
      "status": "string"
    }
  ],
  "kind": "adsense#adUnits",
  "nextPageToken": "string"
}
```

<h3 id="adsensecustomchannelsadunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnits](#schemaadunits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-metadata">metadata</h1>

## adsense.metadata.dimensions.list

<a id="opIdadsense.metadata.dimensions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/metadata/dimensions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metadata/dimensions`

List the metadata for the dimensions available to this AdSense account.

<h3 id="adsensemetadatadimensionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "compatibleDimensions": [
        "string"
      ],
      "compatibleMetrics": [
        "string"
      ],
      "id": "string",
      "kind": "adsense#reportingMetadataEntry",
      "requiredDimensions": [
        "string"
      ],
      "requiredMetrics": [
        "string"
      ],
      "supportedProducts": [
        "string"
      ]
    }
  ],
  "kind": "adsense#metadata"
}
```

<h3 id="adsensemetadatadimensionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Metadata](#schemametadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.metadata.metrics.list

<a id="opIdadsense.metadata.metrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/metadata/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metadata/metrics`

List the metadata for the metrics available to this AdSense account.

<h3 id="adsensemetadatametricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "compatibleDimensions": [
        "string"
      ],
      "compatibleMetrics": [
        "string"
      ],
      "id": "string",
      "kind": "adsense#reportingMetadataEntry",
      "requiredDimensions": [
        "string"
      ],
      "requiredMetrics": [
        "string"
      ],
      "supportedProducts": [
        "string"
      ]
    }
  ],
  "kind": "adsense#metadata"
}
```

<h3 id="adsensemetadatametricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Metadata](#schemametadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-payments">payments</h1>

## adsense.payments.list

<a id="opIdadsense.payments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payments`

List the payments for this AdSense account.

<h3 id="adsensepaymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "kind": "adsense#payment",
      "paymentAmount": "string",
      "paymentAmountCurrencyCode": "string",
      "paymentDate": "string"
    }
  ],
  "kind": "adsense#payments"
}
```

<h3 id="adsensepaymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Payments](#schemapayments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-reports">reports</h1>

## adsense.reports.generate

<a id="opIdadsense.reports.generate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/reports?startDate=string&endDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reports`

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

<h3 id="adsensereportsgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string|true|Start of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|endDate|query|string|true|End of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|accountId|query|[string]|false|Accounts upon which to report.|
|currency|query|string|false|Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.|
|dimension|query|[string]|false|Dimensions to base the report on.|
|filter|query|[string]|false|Filters to be run on the report.|
|locale|query|string|false|Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.|
|maxResults|query|integer|false|The maximum number of rows of report data to return.|
|metric|query|[string]|false|Numeric columns to include in the report.|
|sort|query|[string]|false|The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.|
|startIndex|query|integer|false|Index of the first row of report data to return.|
|useTimezoneReporting|query|boolean|false|Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "averages": [
    "string"
  ],
  "endDate": "string",
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#report",
  "rows": [
    [
      "string"
    ]
  ],
  "startDate": "string",
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

<h3 id="adsensereportsgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdsenseReportsGenerateResponse](#schemaadsensereportsgenerateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.reports.saved.list

<a id="opIdadsense.reports.saved.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/reports/saved \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reports/saved`

List all saved reports in this AdSense account.

<h3 id="adsensereportssavedlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of saved reports to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "id": "string",
      "kind": "adsense#savedReport",
      "name": "string"
    }
  ],
  "kind": "adsense#savedReports",
  "nextPageToken": "string"
}
```

<h3 id="adsensereportssavedlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedReports](#schemasavedreports)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.reports.saved.generate

<a id="opIdadsense.reports.saved.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reports/{savedReportId}`

Generate an AdSense report based on the saved report ID sent in the query parameters.

<h3 id="adsensereportssavedgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|savedReportId|path|string|true|The saved report to retrieve.|
|locale|query|string|false|Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.|
|maxResults|query|integer|false|The maximum number of rows of report data to return.|
|startIndex|query|integer|false|Index of the first row of report data to return.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "averages": [
    "string"
  ],
  "endDate": "string",
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#report",
  "rows": [
    [
      "string"
    ]
  ],
  "startDate": "string",
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

<h3 id="adsensereportssavedgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdsenseReportsGenerateResponse](#schemaadsensereportsgenerateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-savedadstyles">savedadstyles</h1>

## adsense.savedadstyles.list

<a id="opIdadsense.savedadstyles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/savedadstyles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /savedadstyles`

List all saved ad styles in the user's account.

<h3 id="adsensesavedadstyleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|The maximum number of saved ad styles to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "adStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "id": "string",
      "kind": "adsense#savedAdStyle",
      "name": "string"
    }
  ],
  "kind": "adsense#savedAdStyles",
  "nextPageToken": "string"
}
```

<h3 id="adsensesavedadstyleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedAdStyles](#schemasavedadstyles)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

## adsense.savedadstyles.get

<a id="opIdadsense.savedadstyles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/savedadstyles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /savedadstyles/{savedAdStyleId}`

Get a specific saved ad style from the user's account.

<h3 id="adsensesavedadstylesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|savedAdStyleId|path|string|true|Saved ad style to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adStyle": {
    "colors": {
      "background": "string",
      "border": "string",
      "text": "string",
      "title": "string",
      "url": "string"
    },
    "corners": "string",
    "font": {
      "family": "string",
      "size": "string"
    },
    "kind": "adsense#adStyle"
  },
  "id": "string",
  "kind": "adsense#savedAdStyle",
  "name": "string"
}
```

<h3 id="adsensesavedadstylesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedAdStyle](#schemasavedadstyle)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

<h1 id="adsense-management-api-urlchannels">urlchannels</h1>

## adsense.urlchannels.list

<a id="opIdadsense.urlchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/urlchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/urlchannels`

List all URL channels in the specified ad client for this AdSense account.

<h3 id="adsenseurlchannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client for which to list URL channels.|
|maxResults|query|integer|false|The maximum number of URL channels to include in the response, used for paging.|
|pageToken|query|string|false|A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "id": "string",
      "kind": "adsense#urlChannel",
      "urlPattern": "string"
    }
  ],
  "kind": "adsense#urlChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsenseurlchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlChannels](#schemaurlchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense ), Oauth2 ( Scopes: https://www.googleapis.com/auth/adsense.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsense.readonly )
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "creation_time": "string",
  "id": "string",
  "kind": "adsense#account",
  "name": "string",
  "premium": true,
  "subAccounts": [
    {
      "creation_time": "string",
      "id": "string",
      "kind": "adsense#account",
      "name": "string",
      "premium": true,
      "subAccounts": [
        {}
      ],
      "timezone": "string"
    }
  ],
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creation_time|string(int64)|false|none|none|
|id|string|false|none|Unique identifier of this account.|
|kind|string|false|none|Kind of resource this is, in this case adsense#account.|
|name|string|false|none|Name of this account.|
|premium|boolean|false|none|Whether this account is premium.|
|subAccounts|[[Account](#schemaaccount)]|false|none|Sub accounts of the this account.|
|timezone|string|false|none|AdSense timezone of this account.|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "creation_time": "string",
      "id": "string",
      "kind": "adsense#account",
      "name": "string",
      "premium": true,
      "subAccounts": [
        {}
      ],
      "timezone": "string"
    }
  ],
  "kind": "adsense#accounts",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[Account](#schemaaccount)]|false|none|The accounts returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#accounts.|
|nextPageToken|string|false|none|Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_AdClient">AdClient</h2>
<!-- backwards compatibility -->
<a id="schemaadclient"></a>
<a id="schema_AdClient"></a>
<a id="tocSadclient"></a>
<a id="tocsadclient"></a>

```json
{
  "arcOptIn": true,
  "id": "string",
  "kind": "adsense#adClient",
  "productCode": "string",
  "supportsReporting": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arcOptIn|boolean|false|none|Whether this ad client is opted in to ARC.|
|id|string|false|none|Unique identifier of this ad client.|
|kind|string|false|none|Kind of resource this is, in this case adsense#adClient.|
|productCode|string|false|none|This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.|
|supportsReporting|boolean|false|none|Whether this ad client supports being reported on.|

<h2 id="tocS_AdClients">AdClients</h2>
<!-- backwards compatibility -->
<a id="schemaadclients"></a>
<a id="schema_AdClients"></a>
<a id="tocSadclients"></a>
<a id="tocsadclients"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "arcOptIn": true,
      "id": "string",
      "kind": "adsense#adClient",
      "productCode": "string",
      "supportsReporting": true
    }
  ],
  "kind": "adsense#adClients",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[AdClient](#schemaadclient)]|false|none|The ad clients returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#adClients.|
|nextPageToken|string|false|none|Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_AdCode">AdCode</h2>
<!-- backwards compatibility -->
<a id="schemaadcode"></a>
<a id="schema_AdCode"></a>
<a id="tocSadcode"></a>
<a id="tocsadcode"></a>

```json
{
  "adCode": "string",
  "ampBody": "string",
  "ampHead": "string",
  "kind": "adsense#adCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adCode|string|false|none|The Auto ad code snippet. The ad code snippet.|
|ampBody|string|false|none|The AMP Auto ad code snippet that goes in the body of an AMP page.|
|ampHead|string|false|none|The AMP Auto ad code snippet that goes in the head of an AMP page.|
|kind|string|false|none|Kind this is, in this case adsense#adCode.|

<h2 id="tocS_AdStyle">AdStyle</h2>
<!-- backwards compatibility -->
<a id="schemaadstyle"></a>
<a id="schema_AdStyle"></a>
<a id="tocSadstyle"></a>
<a id="tocsadstyle"></a>

```json
{
  "colors": {
    "background": "string",
    "border": "string",
    "text": "string",
    "title": "string",
    "url": "string"
  },
  "corners": "string",
  "font": {
    "family": "string",
    "size": "string"
  },
  "kind": "adsense#adStyle"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|object|false|none|The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.|
|corners|string|false|none|The style of the corners in the ad (deprecated: never populated, ignored).|
|font|object|false|none|The font which is included in the style.|
|kind|string|false|none|Kind this is, in this case adsense#adStyle.|

<h2 id="tocS_AdUnit">AdUnit</h2>
<!-- backwards compatibility -->
<a id="schemaadunit"></a>
<a id="schema_AdUnit"></a>
<a id="tocSadunit"></a>
<a id="tocsadunit"></a>

```json
{
  "code": "string",
  "contentAdsSettings": {
    "backupOption": {
      "color": "string",
      "type": "string",
      "url": "string"
    },
    "size": "string",
    "type": "string"
  },
  "customStyle": {
    "colors": {
      "background": "string",
      "border": "string",
      "text": "string",
      "title": "string",
      "url": "string"
    },
    "corners": "string",
    "font": {
      "family": "string",
      "size": "string"
    },
    "kind": "adsense#adStyle"
  },
  "feedAdsSettings": {
    "adPosition": "string",
    "frequency": 0,
    "minimumWordCount": 0,
    "type": "string"
  },
  "id": "string",
  "kind": "adsense#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "savedStyleId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Identity code of this ad unit, not necessarily unique across ad clients.|
|contentAdsSettings|object|false|none|Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).|
|customStyle|[AdStyle](#schemaadstyle)|false|none|Custom style information specific to this ad unit.|
|feedAdsSettings|object|false|none|Settings specific to feed ads (AFF) - deprecated.|
|id|string|false|none|Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsense#adUnit.|
|mobileContentAdsSettings|object|false|none|Settings specific to WAP mobile content ads (AFMC) - deprecated.|
|name|string|false|none|Name of this ad unit.|
|savedStyleId|string|false|none|ID of the saved ad style which holds this ad unit's style information.|
|status|string|false|none|Status of this ad unit. Possible values are:<br>NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.<br><br>ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.<br><br>INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.|

<h2 id="tocS_AdUnits">AdUnits</h2>
<!-- backwards compatibility -->
<a id="schemaadunits"></a>
<a id="schema_AdUnits"></a>
<a id="tocSadunits"></a>
<a id="tocsadunits"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "contentAdsSettings": {
        "backupOption": {
          "color": "string",
          "type": "string",
          "url": "string"
        },
        "size": "string",
        "type": "string"
      },
      "customStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "feedAdsSettings": {
        "adPosition": "string",
        "frequency": 0,
        "minimumWordCount": 0,
        "type": "string"
      },
      "id": "string",
      "kind": "adsense#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "savedStyleId": "string",
      "status": "string"
    }
  ],
  "kind": "adsense#adUnits",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[AdUnit](#schemaadunit)]|false|none|The ad units returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#adUnits.|
|nextPageToken|string|false|none|Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_AdsenseReportsGenerateResponse">AdsenseReportsGenerateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadsensereportsgenerateresponse"></a>
<a id="schema_AdsenseReportsGenerateResponse"></a>
<a id="tocSadsensereportsgenerateresponse"></a>
<a id="tocsadsensereportsgenerateresponse"></a>

```json
{
  "averages": [
    "string"
  ],
  "endDate": "string",
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#report",
  "rows": [
    [
      "string"
    ]
  ],
  "startDate": "string",
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averages|[string]|false|none|The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.|
|endDate|string|false|none|The requested end date in yyyy-mm-dd format.|
|headers|[object]|false|none|The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.|
|kind|string|false|none|Kind this is, in this case adsense#report.|
|rows|[[string]]|false|none|The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.|
|startDate|string|false|none|The requested start date in yyyy-mm-dd format.|
|totalMatchedRows|string(int64)|false|none|The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.|
|totals|[string]|false|none|The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.|
|warnings|[string]|false|none|Any warnings associated with generation of the report.|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "id": "string",
  "isDismissible": true,
  "kind": "adsense#alert",
  "message": "string",
  "severity": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|isDismissible|boolean|false|none|Whether this alert can be dismissed.|
|kind|string|false|none|Kind of resource this is, in this case adsense#alert.|
|message|string|false|none|The localized alert message.|
|severity|string|false|none|Severity of this alert. Possible values: INFO, WARNING, SEVERE.|
|type|string|false|none|Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.|

<h2 id="tocS_Alerts">Alerts</h2>
<!-- backwards compatibility -->
<a id="schemaalerts"></a>
<a id="schema_Alerts"></a>
<a id="tocSalerts"></a>
<a id="tocsalerts"></a>

```json
{
  "items": [
    {
      "id": "string",
      "isDismissible": true,
      "kind": "adsense#alert",
      "message": "string",
      "severity": "string",
      "type": "string"
    }
  ],
  "kind": "adsense#alerts"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Alert](#schemaalert)]|false|none|The alerts returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#alerts.|

<h2 id="tocS_CustomChannel">CustomChannel</h2>
<!-- backwards compatibility -->
<a id="schemacustomchannel"></a>
<a id="schema_CustomChannel"></a>
<a id="tocScustomchannel"></a>
<a id="tocscustomchannel"></a>

```json
{
  "code": "string",
  "id": "string",
  "kind": "adsense#customChannel",
  "name": "string",
  "targetingInfo": {
    "adsAppearOn": "string",
    "description": "string",
    "location": "string",
    "siteLanguage": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code of this custom channel, not necessarily unique across ad clients.|
|id|string|false|none|Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsense#customChannel.|
|name|string|false|none|Name of this custom channel.|
|targetingInfo|object|false|none|The targeting information of this custom channel, if activated.|

<h2 id="tocS_CustomChannels">CustomChannels</h2>
<!-- backwards compatibility -->
<a id="schemacustomchannels"></a>
<a id="schema_CustomChannels"></a>
<a id="tocScustomchannels"></a>
<a id="tocscustomchannels"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "code": "string",
      "id": "string",
      "kind": "adsense#customChannel",
      "name": "string",
      "targetingInfo": {
        "adsAppearOn": "string",
        "description": "string",
        "location": "string",
        "siteLanguage": "string"
      }
    }
  ],
  "kind": "adsense#customChannels",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[CustomChannel](#schemacustomchannel)]|false|none|The custom channels returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#customChannels.|
|nextPageToken|string|false|none|Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "items": [
    {
      "compatibleDimensions": [
        "string"
      ],
      "compatibleMetrics": [
        "string"
      ],
      "id": "string",
      "kind": "adsense#reportingMetadataEntry",
      "requiredDimensions": [
        "string"
      ],
      "requiredMetrics": [
        "string"
      ],
      "supportedProducts": [
        "string"
      ]
    }
  ],
  "kind": "adsense#metadata"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ReportingMetadataEntry](#schemareportingmetadataentry)]|false|none|none|
|kind|string|false|none|Kind of list this is, in this case adsense#metadata.|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "id": "string",
  "kind": "adsense#payment",
  "paymentAmount": "string",
  "paymentAmountCurrencyCode": "string",
  "paymentDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier of this Payment.|
|kind|string|false|none|Kind of resource this is, in this case adsense#payment.|
|paymentAmount|string|false|none|The amount to be paid.|
|paymentAmountCurrencyCode|string|false|none|The currency code for the amount to be paid.|
|paymentDate|string|false|none|The date this payment was/will be credited to the user, or none if the payment threshold has not been met.|

<h2 id="tocS_Payments">Payments</h2>
<!-- backwards compatibility -->
<a id="schemapayments"></a>
<a id="schema_Payments"></a>
<a id="tocSpayments"></a>
<a id="tocspayments"></a>

```json
{
  "items": [
    {
      "id": "string",
      "kind": "adsense#payment",
      "paymentAmount": "string",
      "paymentAmountCurrencyCode": "string",
      "paymentDate": "string"
    }
  ],
  "kind": "adsense#payments"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Payment](#schemapayment)]|false|none|The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment.|
|kind|string|false|none|Kind of list this is, in this case adsense#payments.|

<h2 id="tocS_ReportingMetadataEntry">ReportingMetadataEntry</h2>
<!-- backwards compatibility -->
<a id="schemareportingmetadataentry"></a>
<a id="schema_ReportingMetadataEntry"></a>
<a id="tocSreportingmetadataentry"></a>
<a id="tocsreportingmetadataentry"></a>

```json
{
  "compatibleDimensions": [
    "string"
  ],
  "compatibleMetrics": [
    "string"
  ],
  "id": "string",
  "kind": "adsense#reportingMetadataEntry",
  "requiredDimensions": [
    "string"
  ],
  "requiredMetrics": [
    "string"
  ],
  "supportedProducts": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compatibleDimensions|[string]|false|none|For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to.|
|compatibleMetrics|[string]|false|none|The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.|
|id|string|false|none|Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.|
|kind|string|false|none|Kind of resource this is, in this case adsense#reportingMetadataEntry.|
|requiredDimensions|[string]|false|none|The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.|
|requiredMetrics|[string]|false|none|The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.|
|supportedProducts|[string]|false|none|The codes of the projects supported by the dimension or metric this reporting metadata entry describes.|

<h2 id="tocS_SavedAdStyle">SavedAdStyle</h2>
<!-- backwards compatibility -->
<a id="schemasavedadstyle"></a>
<a id="schema_SavedAdStyle"></a>
<a id="tocSsavedadstyle"></a>
<a id="tocssavedadstyle"></a>

```json
{
  "adStyle": {
    "colors": {
      "background": "string",
      "border": "string",
      "text": "string",
      "title": "string",
      "url": "string"
    },
    "corners": "string",
    "font": {
      "family": "string",
      "size": "string"
    },
    "kind": "adsense#adStyle"
  },
  "id": "string",
  "kind": "adsense#savedAdStyle",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adStyle|[AdStyle](#schemaadstyle)|false|none|The AdStyle itself.|
|id|string|false|none|Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsense#savedAdStyle.|
|name|string|false|none|The user selected name of this SavedAdStyle.|

<h2 id="tocS_SavedAdStyles">SavedAdStyles</h2>
<!-- backwards compatibility -->
<a id="schemasavedadstyles"></a>
<a id="schema_SavedAdStyles"></a>
<a id="tocSsavedadstyles"></a>
<a id="tocssavedadstyles"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "adStyle": {
        "colors": {
          "background": "string",
          "border": "string",
          "text": "string",
          "title": "string",
          "url": "string"
        },
        "corners": "string",
        "font": {
          "family": "string",
          "size": "string"
        },
        "kind": "adsense#adStyle"
      },
      "id": "string",
      "kind": "adsense#savedAdStyle",
      "name": "string"
    }
  ],
  "kind": "adsense#savedAdStyles",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[SavedAdStyle](#schemasavedadstyle)]|false|none|The saved ad styles returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#savedAdStyles.|
|nextPageToken|string|false|none|Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_SavedReport">SavedReport</h2>
<!-- backwards compatibility -->
<a id="schemasavedreport"></a>
<a id="schema_SavedReport"></a>
<a id="tocSsavedreport"></a>
<a id="tocssavedreport"></a>

```json
{
  "id": "string",
  "kind": "adsense#savedReport",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier of this saved report.|
|kind|string|false|none|Kind of resource this is, in this case adsense#savedReport.|
|name|string|false|none|This saved report's name.|

<h2 id="tocS_SavedReports">SavedReports</h2>
<!-- backwards compatibility -->
<a id="schemasavedreports"></a>
<a id="schema_SavedReports"></a>
<a id="tocSsavedreports"></a>
<a id="tocssavedreports"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "id": "string",
      "kind": "adsense#savedReport",
      "name": "string"
    }
  ],
  "kind": "adsense#savedReports",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[SavedReport](#schemasavedreport)]|false|none|The saved reports returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#savedReports.|
|nextPageToken|string|false|none|Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_UrlChannel">UrlChannel</h2>
<!-- backwards compatibility -->
<a id="schemaurlchannel"></a>
<a id="schema_UrlChannel"></a>
<a id="tocSurlchannel"></a>
<a id="tocsurlchannel"></a>

```json
{
  "id": "string",
  "kind": "adsense#urlChannel",
  "urlPattern": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsense#urlChannel.|
|urlPattern|string|false|none|URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home|

<h2 id="tocS_UrlChannels">UrlChannels</h2>
<!-- backwards compatibility -->
<a id="schemaurlchannels"></a>
<a id="schema_UrlChannels"></a>
<a id="tocSurlchannels"></a>
<a id="tocsurlchannels"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "id": "string",
      "kind": "adsense#urlChannel",
      "urlPattern": "string"
    }
  ],
  "kind": "adsense#urlChannels",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[UrlChannel](#schemaurlchannel)]|false|none|The URL channels returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsense#urlChannels.|
|nextPageToken|string|false|none|Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.|
