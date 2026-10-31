<h1 id="adsense-host-api">AdSense Host API v4.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.

Base URLs:

* <a href="https://www.googleapis.com/adsensehost/v4.1">https://www.googleapis.com/adsensehost/v4.1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/adsense/host/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adsensehost|View and manage your AdSense host data and associated accounts|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adsensehost|View and manage your AdSense host data and associated accounts|

<h1 id="adsense-host-api-accounts">accounts</h1>

## adsensehost.accounts.list

<a id="opIdadsensehost.accounts.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/accounts?filterAdClientId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

List hosted accounts associated with this AdSense account by ad client id.

<h3 id="adsensehostaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterAdClientId|query|[string]|true|Ad clients to list accounts for.|
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
      "kind": "adsensehost#account",
      "name": "string",
      "status": "string"
    }
  ],
  "kind": "adsensehost#accounts"
}
```

<h3 id="adsensehostaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Accounts](#schemaaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.get

<a id="opIdadsensehost.accounts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}`

Get information about the selected associated AdSense account.

<h3 id="adsensehostaccountsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account to get information about.|
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
  "id": "string",
  "kind": "adsensehost#account",
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adclients.list

<a id="opIdadsensehost.accounts.adclients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients`

List all hosted ad clients in the specified hosted account.

<h3 id="adsensehostaccountsadclientslist-parameters">Parameters</h3>

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
      "kind": "adsensehost#adClient",
      "productCode": "string",
      "supportsReporting": true
    }
  ],
  "kind": "adsensehost#adClients",
  "nextPageToken": "string"
}
```

<h3 id="adsensehostaccountsadclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdClients](#schemaadclients)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adclients.get

<a id="opIdadsensehost.accounts.adclients.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}`

Get information about one of the ad clients in the specified publisher's AdSense account.

<h3 id="adsensehostaccountsadclientsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
|adClientId|path|string|true|Ad client to get.|
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
  "arcOptIn": true,
  "id": "string",
  "kind": "adsensehost#adClient",
  "productCode": "string",
  "supportsReporting": true
}
```

<h3 id="adsensehostaccountsadclientsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdClient](#schemaadclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.list

<a id="opIdadsensehost.accounts.adunits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits`

List all ad units in the specified publisher's AdSense account.

<h3 id="adsensehostaccountsadunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
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
        "kind": "adsensehost#adStyle"
      },
      "id": "string",
      "kind": "adsensehost#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "status": "string"
    }
  ],
  "kind": "adsensehost#adUnits",
  "nextPageToken": "string"
}
```

<h3 id="adsensehostaccountsadunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnits](#schemaadunits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.update

<a id="opIdadsensehost.accounts.adunits.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
      "kind": "adsensehost#adStyle"
    },
    "id": "string",
    "kind": "adsensehost#adUnit",
    "mobileContentAdsSettings": {
      "markupLanguage": "string",
      "scriptingLanguage": "string",
      "size": "string",
      "type": "string"
    },
    "name": "string",
    "status": "string"
  }'
```

`PUT /accounts/{accountId}/adclients/{adClientId}/adunits`

Update the supplied ad unit in the specified publisher AdSense account.

> Body parameter

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
|adClientId|path|string|true|Ad client which contains the ad unit.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AdUnit](#schemaadunit)|false|none|
|» code|body|string|false|Identity code of this ad unit, not necessarily unique across ad clients.|
|» contentAdsSettings|body|object|false|Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).|
|» » backupOption|body|object|false|The backup option to be used in instances where no ad is available.|
|» » » color|body|string|false|Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.|
|» » » type|body|string|false|Type of the backup option. Possible values are BLANK, COLOR and URL.|
|» » » url|body|string|false|URL to use when type is set to URL.|
|» » size|body|string|false|Size of this ad unit. Size values are in the form SIZE_{width}_{height}.|
|» » type|body|string|false|Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK.|
|» customStyle|body|[AdStyle](#schemaadstyle)|false|Custom style information specific to this ad unit.|
|» id|body|string|false|Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#adUnit.|
|» mobileContentAdsSettings|body|object|false|Settings specific to WAP mobile content ads (AFMC - deprecated).|
|» » markupLanguage|body|string|false|The markup language to use for this ad unit.|
|» » scriptingLanguage|body|string|false|The scripting language to use for this ad unit.|
|» » size|body|string|false|Size of this ad unit.|
|» » type|body|string|false|Type of this ad unit.|
|» name|body|string|false|Name of this ad unit.|
|» status|body|string|false|Status of this ad unit. Possible values are:<br>NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.<br><br>ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.<br><br>INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.|

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.insert

<a id="opIdadsensehost.accounts.adunits.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
      "kind": "adsensehost#adStyle"
    },
    "id": "string",
    "kind": "adsensehost#adUnit",
    "mobileContentAdsSettings": {
      "markupLanguage": "string",
      "scriptingLanguage": "string",
      "size": "string",
      "type": "string"
    },
    "name": "string",
    "status": "string"
  }'
```

`POST /accounts/{accountId}/adclients/{adClientId}/adunits`

Insert the supplied ad unit into the specified publisher AdSense account.

> Body parameter

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which will contain the ad unit.|
|adClientId|path|string|true|Ad client into which to insert the ad unit.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AdUnit](#schemaadunit)|false|none|
|» code|body|string|false|Identity code of this ad unit, not necessarily unique across ad clients.|
|» contentAdsSettings|body|object|false|Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).|
|» » backupOption|body|object|false|The backup option to be used in instances where no ad is available.|
|» » » color|body|string|false|Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.|
|» » » type|body|string|false|Type of the backup option. Possible values are BLANK, COLOR and URL.|
|» » » url|body|string|false|URL to use when type is set to URL.|
|» » size|body|string|false|Size of this ad unit. Size values are in the form SIZE_{width}_{height}.|
|» » type|body|string|false|Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK.|
|» customStyle|body|[AdStyle](#schemaadstyle)|false|Custom style information specific to this ad unit.|
|» id|body|string|false|Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#adUnit.|
|» mobileContentAdsSettings|body|object|false|Settings specific to WAP mobile content ads (AFMC - deprecated).|
|» » markupLanguage|body|string|false|The markup language to use for this ad unit.|
|» » scriptingLanguage|body|string|false|The scripting language to use for this ad unit.|
|» » size|body|string|false|Size of this ad unit.|
|» » type|body|string|false|Type of this ad unit.|
|» name|body|string|false|Name of this ad unit.|
|» status|body|string|false|Status of this ad unit. Possible values are:<br>NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.<br><br>ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.<br><br>INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.|

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.patch

<a id="opIdadsensehost.accounts.adunits.patch"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/accounts/string/adclients/string/adunits?adUnitId=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
      "kind": "adsensehost#adStyle"
    },
    "id": "string",
    "kind": "adsensehost#adUnit",
    "mobileContentAdsSettings": {
      "markupLanguage": "string",
      "scriptingLanguage": "string",
      "size": "string",
      "type": "string"
    },
    "name": "string",
    "status": "string"
  }'
```

`PATCH /accounts/{accountId}/adclients/{adClientId}/adunits`

Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.

> Body parameter

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
|adClientId|path|string|true|Ad client which contains the ad unit.|
|adUnitId|query|string|true|Ad unit to get.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AdUnit](#schemaadunit)|false|none|
|» code|body|string|false|Identity code of this ad unit, not necessarily unique across ad clients.|
|» contentAdsSettings|body|object|false|Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).|
|» » backupOption|body|object|false|The backup option to be used in instances where no ad is available.|
|» » » color|body|string|false|Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.|
|» » » type|body|string|false|Type of the backup option. Possible values are BLANK, COLOR and URL.|
|» » » url|body|string|false|URL to use when type is set to URL.|
|» » size|body|string|false|Size of this ad unit. Size values are in the form SIZE_{width}_{height}.|
|» » type|body|string|false|Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK.|
|» customStyle|body|[AdStyle](#schemaadstyle)|false|Custom style information specific to this ad unit.|
|» id|body|string|false|Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#adUnit.|
|» mobileContentAdsSettings|body|object|false|Settings specific to WAP mobile content ads (AFMC - deprecated).|
|» » markupLanguage|body|string|false|The markup language to use for this ad unit.|
|» » scriptingLanguage|body|string|false|The scripting language to use for this ad unit.|
|» » size|body|string|false|Size of this ad unit.|
|» » type|body|string|false|Type of this ad unit.|
|» name|body|string|false|Name of this ad unit.|
|» status|body|string|false|Status of this ad unit. Possible values are:<br>NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.<br><br>ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.<br><br>INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.|

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.get

<a id="opIdadsensehost.accounts.adunits.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}`

Get the specified host ad unit in this AdSense account.

<h3 id="adsensehostaccountsadunitsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad unit.|
|adClientId|path|string|true|Ad client for which to get ad unit.|
|adUnitId|path|string|true|Ad unit to get.|
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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.delete

<a id="opIdadsensehost.accounts.adunits.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}`

Delete the specified ad unit from the specified publisher AdSense account.

<h3 id="adsensehostaccountsadunitsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad unit.|
|adClientId|path|string|true|Ad client for which to get ad unit.|
|adUnitId|path|string|true|Ad unit to delete.|
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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

<h3 id="adsensehostaccountsadunitsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdUnit](#schemaadunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.adunits.getAdCode

<a id="opIdadsensehost.accounts.adunits.getAdCode"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/string/adclients/string/adunits/string/adcode \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode`

Get ad code for the specified ad unit, attaching the specified host custom channels.

<h3 id="adsensehostaccountsadunitsgetadcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account which contains the ad client.|
|adClientId|path|string|true|Ad client with contains the ad unit.|
|adUnitId|path|string|true|Ad unit to get the code for.|
|hostCustomChannelId|query|[string]|false|Host custom channel to attach to the ad code.|
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
  "kind": "adsensehost#adCode"
}
```

<h3 id="adsensehostaccountsadunitsgetadcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdCode](#schemaadcode)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.accounts.reports.generate

<a id="opIdadsensehost.accounts.reports.generate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/accounts/string/reports?startDate=string&endDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{accountId}/reports`

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

<h3 id="adsensehostaccountsreportsgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Hosted account upon which to report.|
|startDate|query|string|true|Start of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|endDate|query|string|true|End of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|dimension|query|[string]|false|Dimensions to base the report on.|
|filter|query|[string]|false|Filters to be run on the report.|
|locale|query|string|false|Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.|
|maxResults|query|integer|false|The maximum number of rows of report data to return.|
|metric|query|[string]|false|Numeric columns to include in the report.|
|sort|query|[string]|false|The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.|
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
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsensehost#report",
  "rows": [
    [
      "string"
    ]
  ],
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

<h3 id="adsensehostaccountsreportsgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

<h1 id="adsense-host-api-adclients">adclients</h1>

## adsensehost.adclients.list

<a id="opIdadsensehost.adclients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients`

List all host ad clients in this AdSense account.

<h3 id="adsensehostadclientslist-parameters">Parameters</h3>

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
      "kind": "adsensehost#adClient",
      "productCode": "string",
      "supportsReporting": true
    }
  ],
  "kind": "adsensehost#adClients",
  "nextPageToken": "string"
}
```

<h3 id="adsensehostadclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdClients](#schemaadclients)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.adclients.get

<a id="opIdadsensehost.adclients.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}`

Get information about one of the ad clients in the Host AdSense account.

<h3 id="adsensehostadclientsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client to get.|
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
  "arcOptIn": true,
  "id": "string",
  "kind": "adsensehost#adClient",
  "productCode": "string",
  "supportsReporting": true
}
```

<h3 id="adsensehostadclientsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdClient](#schemaadclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

<h1 id="adsense-host-api-associationsessions">associationsessions</h1>

## adsensehost.associationsessions.start

<a id="opIdadsensehost.associationsessions.start"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/associationsessions/start?productCode=AFC&websiteUrl=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /associationsessions/start`

Create an association session for initiating an association with an AdSense user.

<h3 id="adsensehostassociationsessionsstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productCode|query|[string]|true|Products to associate with the user.|
|websiteUrl|query|string|true|The URL of the user's hosted website.|
|callbackUrl|query|string|false|The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.|
|userLocale|query|string|false|The preferred locale of the user.|
|websiteLocale|query|string|false|The locale of the user's hosted website.|
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
|productCode|AFC|
|productCode|AFG|
|productCode|AFMC|
|productCode|AFS|
|productCode|AFV|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "id": "string",
  "kind": "adsensehost#associationSession",
  "productCodes": [
    "string"
  ],
  "redirectUrl": "string",
  "status": "string",
  "userLocale": "string",
  "websiteLocale": "string",
  "websiteUrl": "string"
}
```

<h3 id="adsensehostassociationsessionsstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AssociationSession](#schemaassociationsession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.associationsessions.verify

<a id="opIdadsensehost.associationsessions.verify"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/associationsessions/verify?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /associationsessions/verify`

Verify an association session after the association callback returns from AdSense signup.

<h3 id="adsensehostassociationsessionsverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The token returned to the association callback URL.|
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
  "accountId": "string",
  "id": "string",
  "kind": "adsensehost#associationSession",
  "productCodes": [
    "string"
  ],
  "redirectUrl": "string",
  "status": "string",
  "userLocale": "string",
  "websiteLocale": "string",
  "websiteUrl": "string"
}
```

<h3 id="adsensehostassociationsessionsverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AssociationSession](#schemaassociationsession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

<h1 id="adsense-host-api-customchannels">customchannels</h1>

## adsensehost.customchannels.list

<a id="opIdadsensehost.customchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/customchannels`

List all host custom channels in this AdSense account.

<h3 id="adsensehostcustomchannelslist-parameters">Parameters</h3>

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
      "kind": "adsensehost#customChannel",
      "name": "string"
    }
  ],
  "kind": "adsensehost#customChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsensehostcustomchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannels](#schemacustomchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.customchannels.update

<a id="opIdadsensehost.customchannels.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string",
    "id": "string",
    "kind": "adsensehost#customChannel",
    "name": "string"
  }'
```

`PUT /adclients/{adClientId}/customchannels`

Update a custom channel in the host AdSense account.

> Body parameter

```json
{
  "code": "string",
  "id": "string",
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client in which the custom channel will be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomChannel](#schemacustomchannel)|false|none|
|» code|body|string|false|Code of this custom channel, not necessarily unique across ad clients.|
|» id|body|string|false|Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#customChannel.|
|» name|body|string|false|Name of this custom channel.|

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
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.customchannels.insert

<a id="opIdadsensehost.customchannels.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string",
    "id": "string",
    "kind": "adsensehost#customChannel",
    "name": "string"
  }'
```

`POST /adclients/{adClientId}/customchannels`

Add a new custom channel to the host AdSense account.

> Body parameter

```json
{
  "code": "string",
  "id": "string",
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client to which the new custom channel will be added.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomChannel](#schemacustomchannel)|false|none|
|» code|body|string|false|Code of this custom channel, not necessarily unique across ad clients.|
|» id|body|string|false|Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#customChannel.|
|» name|body|string|false|Name of this custom channel.|

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
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.customchannels.patch

<a id="opIdadsensehost.customchannels.patch"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/adclients/string/customchannels?customChannelId=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string",
    "id": "string",
    "kind": "adsensehost#customChannel",
    "name": "string"
  }'
```

`PATCH /adclients/{adClientId}/customchannels`

Update a custom channel in the host AdSense account. This method supports patch semantics.

> Body parameter

```json
{
  "code": "string",
  "id": "string",
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client in which the custom channel will be updated.|
|customChannelId|query|string|true|Custom channel to get.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomChannel](#schemacustomchannel)|false|none|
|» code|body|string|false|Code of this custom channel, not necessarily unique across ad clients.|
|» id|body|string|false|Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#customChannel.|
|» name|body|string|false|Name of this custom channel.|

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
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.customchannels.get

<a id="opIdadsensehost.customchannels.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/customchannels/{customChannelId}`

Get a specific custom channel from the host AdSense account.

<h3 id="adsensehostcustomchannelsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client from which to get the custom channel.|
|customChannelId|path|string|true|Custom channel to get.|
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
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.customchannels.delete

<a id="opIdadsensehost.customchannels.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/customchannels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /adclients/{adClientId}/customchannels/{customChannelId}`

Delete a specific custom channel from the host AdSense account.

<h3 id="adsensehostcustomchannelsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client from which to delete the custom channel.|
|customChannelId|path|string|true|Custom channel to delete.|
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
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

<h3 id="adsensehostcustomchannelsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomChannel](#schemacustomchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

<h1 id="adsense-host-api-reports">reports</h1>

## adsensehost.reports.generate

<a id="opIdadsensehost.reports.generate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/reports?startDate=string&endDate=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /reports`

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

<h3 id="adsensehostreportsgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string|true|Start of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|endDate|query|string|true|End of the date range to report on in "YYYY-MM-DD" format, inclusive.|
|dimension|query|[string]|false|Dimensions to base the report on.|
|filter|query|[string]|false|Filters to be run on the report.|
|locale|query|string|false|Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.|
|maxResults|query|integer|false|The maximum number of rows of report data to return.|
|metric|query|[string]|false|Numeric columns to include in the report.|
|sort|query|[string]|false|The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.|
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
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsensehost#report",
  "rows": [
    [
      "string"
    ]
  ],
  "totalMatchedRows": "string",
  "totals": [
    "string"
  ],
  "warnings": [
    "string"
  ]
}
```

<h3 id="adsensehostreportsgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

<h1 id="adsense-host-api-urlchannels">urlchannels</h1>

## adsensehost.urlchannels.list

<a id="opIdadsensehost.urlchannels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/urlchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /adclients/{adClientId}/urlchannels`

List all host URL channels in the host AdSense account.

<h3 id="adsensehosturlchannelslist-parameters">Parameters</h3>

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
      "kind": "adsensehost#urlChannel",
      "urlPattern": "string"
    }
  ],
  "kind": "adsensehost#urlChannels",
  "nextPageToken": "string"
}
```

<h3 id="adsensehosturlchannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlChannels](#schemaurlchannels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.urlchannels.insert

<a id="opIdadsensehost.urlchannels.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/urlchannels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "kind": "adsensehost#urlChannel",
    "urlPattern": "string"
  }'
```

`POST /adclients/{adClientId}/urlchannels`

Add a new URL channel to the host AdSense account.

> Body parameter

```json
{
  "id": "string",
  "kind": "adsensehost#urlChannel",
  "urlPattern": "string"
}
```

<h3 id="adsensehosturlchannelsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client to which the new URL channel will be added.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[UrlChannel](#schemaurlchannel)|false|none|
|» id|body|string|false|Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|» kind|body|string|false|Kind of resource this is, in this case adsensehost#urlChannel.|
|» urlPattern|body|string|false|URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|csv|
|alt|json|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "kind": "adsensehost#urlChannel",
  "urlPattern": "string"
}
```

<h3 id="adsensehosturlchannelsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlChannel](#schemaurlchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
</aside>

## adsensehost.urlchannels.delete

<a id="opIdadsensehost.urlchannels.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/adclients/string/urlchannels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /adclients/{adClientId}/urlchannels/{urlChannelId}`

Delete a URL channel from the host AdSense account.

<h3 id="adsensehosturlchannelsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|adClientId|path|string|true|Ad client from which to delete the URL channel.|
|urlChannelId|path|string|true|URL channel to delete.|
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
  "id": "string",
  "kind": "adsensehost#urlChannel",
  "urlPattern": "string"
}
```

<h3 id="adsensehosturlchannelsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlChannel](#schemaurlchannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adsensehost ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adsensehost )
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
  "id": "string",
  "kind": "adsensehost#account",
  "name": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier of this account.|
|kind|string|false|none|Kind of resource this is, in this case adsensehost#account.|
|name|string|false|none|Name of this account.|
|status|string|false|none|Approval status of this account. One of: PENDING, APPROVED, DISABLED.|

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
      "id": "string",
      "kind": "adsensehost#account",
      "name": "string",
      "status": "string"
    }
  ],
  "kind": "adsensehost#accounts"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[Account](#schemaaccount)]|false|none|The accounts returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsensehost#accounts.|

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
  "kind": "adsensehost#adClient",
  "productCode": "string",
  "supportsReporting": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arcOptIn|boolean|false|none|Whether this ad client is opted in to ARC.|
|id|string|false|none|Unique identifier of this ad client.|
|kind|string|false|none|Kind of resource this is, in this case adsensehost#adClient.|
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
      "kind": "adsensehost#adClient",
      "productCode": "string",
      "supportsReporting": true
    }
  ],
  "kind": "adsensehost#adClients",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[AdClient](#schemaadclient)]|false|none|The ad clients returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsensehost#adClients.|
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
  "kind": "adsensehost#adCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adCode|string|false|none|The ad code snippet.|
|kind|string|false|none|Kind this is, in this case adsensehost#adCode.|

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
  "kind": "adsensehost#adStyle"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|object|false|none|The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.|
|corners|string|false|none|The style of the corners in the ad (deprecated: never populated, ignored).|
|font|object|false|none|The font which is included in the style.|
|kind|string|false|none|Kind this is, in this case adsensehost#adStyle.|

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
    "kind": "adsensehost#adStyle"
  },
  "id": "string",
  "kind": "adsensehost#adUnit",
  "mobileContentAdsSettings": {
    "markupLanguage": "string",
    "scriptingLanguage": "string",
    "size": "string",
    "type": "string"
  },
  "name": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Identity code of this ad unit, not necessarily unique across ad clients.|
|contentAdsSettings|object|false|none|Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).|
|customStyle|[AdStyle](#schemaadstyle)|false|none|Custom style information specific to this ad unit.|
|id|string|false|none|Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsensehost#adUnit.|
|mobileContentAdsSettings|object|false|none|Settings specific to WAP mobile content ads (AFMC - deprecated).|
|name|string|false|none|Name of this ad unit.|
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
        "kind": "adsensehost#adStyle"
      },
      "id": "string",
      "kind": "adsensehost#adUnit",
      "mobileContentAdsSettings": {
        "markupLanguage": "string",
        "scriptingLanguage": "string",
        "size": "string",
        "type": "string"
      },
      "name": "string",
      "status": "string"
    }
  ],
  "kind": "adsensehost#adUnits",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[AdUnit](#schemaadunit)]|false|none|The ad units returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsensehost#adUnits.|
|nextPageToken|string|false|none|Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_AssociationSession">AssociationSession</h2>
<!-- backwards compatibility -->
<a id="schemaassociationsession"></a>
<a id="schema_AssociationSession"></a>
<a id="tocSassociationsession"></a>
<a id="tocsassociationsession"></a>

```json
{
  "accountId": "string",
  "id": "string",
  "kind": "adsensehost#associationSession",
  "productCodes": [
    "string"
  ],
  "redirectUrl": "string",
  "status": "string",
  "userLocale": "string",
  "websiteLocale": "string",
  "websiteUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Hosted account id of the associated publisher after association. Present if status is ACCEPTED.|
|id|string|false|none|Unique identifier of this association session.|
|kind|string|false|none|Kind of resource this is, in this case adsensehost#associationSession.|
|productCodes|[string]|false|none|The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)|
|redirectUrl|string|false|none|Redirect URL of this association session. Used to redirect users into the AdSense association flow.|
|status|string|false|none|Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.|
|userLocale|string|false|none|The preferred locale of the user themselves when going through the AdSense association flow.|
|websiteLocale|string|false|none|The locale of the user's hosted website.|
|websiteUrl|string|false|none|The URL of the user's hosted website.|

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
  "kind": "adsensehost#customChannel",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Code of this custom channel, not necessarily unique across ad clients.|
|id|string|false|none|Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsensehost#customChannel.|
|name|string|false|none|Name of this custom channel.|

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
      "kind": "adsensehost#customChannel",
      "name": "string"
    }
  ],
  "kind": "adsensehost#customChannels",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[CustomChannel](#schemacustomchannel)]|false|none|The custom channels returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsensehost#customChannels.|
|nextPageToken|string|false|none|Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "averages": [
    "string"
  ],
  "headers": [
    {
      "currency": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "kind": "adsensehost#report",
  "rows": [
    [
      "string"
    ]
  ],
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
|headers|[object]|false|none|The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.|
|kind|string|false|none|Kind this is, in this case adsensehost#report.|
|rows|[[string]]|false|none|The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.|
|totalMatchedRows|string(int64)|false|none|The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.|
|totals|[string]|false|none|The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.|
|warnings|[string]|false|none|Any warnings associated with generation of the report.|

<h2 id="tocS_UrlChannel">UrlChannel</h2>
<!-- backwards compatibility -->
<a id="schemaurlchannel"></a>
<a id="schema_UrlChannel"></a>
<a id="tocSurlchannel"></a>
<a id="tocsurlchannel"></a>

```json
{
  "id": "string",
  "kind": "adsensehost#urlChannel",
  "urlPattern": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.|
|kind|string|false|none|Kind of resource this is, in this case adsensehost#urlChannel.|
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
      "kind": "adsensehost#urlChannel",
      "urlPattern": "string"
    }
  ],
  "kind": "adsensehost#urlChannels",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[UrlChannel](#schemaurlchannel)]|false|none|The URL channels returned in this list response.|
|kind|string|false|none|Kind of list this is, in this case adsensehost#urlChannels.|
|nextPageToken|string|false|none|Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.|
