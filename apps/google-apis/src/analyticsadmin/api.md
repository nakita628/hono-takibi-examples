<h1 id="google-analytics-admin-api">Google Analytics Admin API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://analyticsadmin.googleapis.com/">https://analyticsadmin.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="http://code.google.com/apis/analytics/docs/mgmt/home.html">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/analytics.edit|Edit Google Analytics management entities|
|https://www.googleapis.com/auth/analytics.readonly|See and download your Google Analytics data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/analytics.edit|Edit Google Analytics management entities|
|https://www.googleapis.com/auth/analytics.readonly|See and download your Google Analytics data|

<h1 id="google-analytics-admin-api-accounts">accounts</h1>

## analyticsadmin.accounts.list

<a id="opIdanalyticsadmin.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/accounts`

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.

<h3 id="analyticsadminaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)|
|pageToken|query|string|false|A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.|
|showDeleted|query|boolean|false|Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.|
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
  "accounts": [
    {
      "createTime": "string",
      "deleted": true,
      "displayName": "string",
      "name": "string",
      "regionCode": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListAccountsResponse](#schemagoogleanalyticsadminv1betalistaccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.accounts.provisionAccountTicket

<a id="opIdanalyticsadmin.accounts.provisionAccountTicket"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/accounts:provisionAccountTicket \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account": {
      "displayName": "string",
      "regionCode": "string"
    },
    "redirectUri": "string"
  }'
```

`POST /v1beta/accounts:provisionAccountTicket`

Requests a ticket for creating an account.

> Body parameter

```json
{
  "account": {
    "displayName": "string",
    "regionCode": "string"
  },
  "redirectUri": "string"
}
```

<h3 id="analyticsadminaccountsprovisionaccountticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest](#schemagoogleanalyticsadminv1betaprovisionaccountticketrequest)|false|none|
|» account|body|[GoogleAnalyticsAdminV1betaAccount](#schemagoogleanalyticsadminv1betaaccount)|false|The account to create.|
|» redirectUri|body|string|false|Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI.|

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
  "accountTicketId": "string"
}
```

<h3 id="analyticsadminaccountsprovisionaccountticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse](#schemagoogleanalyticsadminv1betaprovisionaccountticketresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.accounts.searchChangeHistoryEvents

<a id="opIdanalyticsadmin.accounts.searchChangeHistoryEvents"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:searchChangeHistoryEvents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": [
      "ACTION_TYPE_UNSPECIFIED"
    ],
    "actorEmail": [
      "string"
    ],
    "earliestChangeTime": "string",
    "latestChangeTime": "string",
    "pageSize": 0,
    "pageToken": "string",
    "property": "string",
    "resourceType": [
      "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
    ]
  }'
```

`POST /v1beta/{account}:searchChangeHistoryEvents`

Searches through all changes to an account or its children given the specified set of filters.

> Body parameter

```json
{
  "action": [
    "ACTION_TYPE_UNSPECIFIED"
  ],
  "actorEmail": [
    "string"
  ],
  "earliestChangeTime": "string",
  "latestChangeTime": "string",
  "pageSize": 0,
  "pageToken": "string",
  "property": "string",
  "resourceType": [
    "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
  ]
}
```

<h3 id="analyticsadminaccountssearchchangehistoryevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Required. The account resource for which to return change history resources.|
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
|body|body|[GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest](#schemagoogleanalyticsadminv1betasearchchangehistoryeventsrequest)|false|none|
|» action|body|[string]|false|Optional. If set, only return changes that match one or more of these types of actions.|
|» actorEmail|body|[string]|false|Optional. If set, only return changes if they are made by a user in this list.|
|» earliestChangeTime|body|string(google-datetime)|false|Optional. If set, only return changes made after this time (inclusive).|
|» latestChangeTime|body|string(google-datetime)|false|Optional. If set, only return changes made before this time (inclusive).|
|» pageSize|body|integer(int32)|false|Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).|
|» pageToken|body|string|false|Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.|
|» property|body|string|false|Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.|
|» resourceType|body|[string]|false|Optional. If set, only return changes if they are for a resource that matches at least one of these types.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» action|ACTION_TYPE_UNSPECIFIED|
|» action|CREATED|
|» action|UPDATED|
|» action|DELETED|
|» resourceType|CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED|
|» resourceType|ACCOUNT|
|» resourceType|PROPERTY|
|» resourceType|FIREBASE_LINK|
|» resourceType|GOOGLE_ADS_LINK|
|» resourceType|GOOGLE_SIGNALS_SETTINGS|
|» resourceType|CONVERSION_EVENT|
|» resourceType|MEASUREMENT_PROTOCOL_SECRET|
|» resourceType|DATA_RETENTION_SETTINGS|
|» resourceType|DISPLAY_VIDEO_360_ADVERTISER_LINK|
|» resourceType|DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL|
|» resourceType|DATA_STREAM|
|» resourceType|ATTRIBUTION_SETTINGS|

> Example responses

> 200 Response

```json
{
  "changeHistoryEvents": [
    {
      "actorType": "ACTOR_TYPE_UNSPECIFIED",
      "changeTime": "string",
      "changes": [
        {
          "action": "ACTION_TYPE_UNSPECIFIED",
          "resource": "string",
          "resourceAfterChange": {
            "account": {
              "createTime": "string",
              "deleted": true,
              "displayName": "string",
              "name": "string",
              "regionCode": "string",
              "updateTime": "string"
            },
            "conversionEvent": {
              "createTime": "string",
              "custom": true,
              "deletable": true,
              "eventName": "string",
              "name": "string"
            },
            "dataRetentionSettings": {
              "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
              "name": "string",
              "resetUserDataOnNewActivity": true
            },
            "dataStream": {
              "androidAppStreamData": {
                "firebaseAppId": "string",
                "packageName": "string"
              },
              "createTime": "string",
              "displayName": "string",
              "iosAppStreamData": {
                "bundleId": "string",
                "firebaseAppId": "string"
              },
              "name": "string",
              "type": "DATA_STREAM_TYPE_UNSPECIFIED",
              "updateTime": "string",
              "webStreamData": {
                "defaultUri": "string",
                "firebaseAppId": "string",
                "measurementId": "string"
              }
            },
            "firebaseLink": {
              "createTime": "string",
              "name": "string",
              "project": "string"
            },
            "googleAdsLink": {
              "adsPersonalizationEnabled": true,
              "canManageClients": true,
              "createTime": "string",
              "creatorEmailAddress": "string",
              "customerId": "string",
              "name": "string",
              "updateTime": "string"
            },
            "measurementProtocolSecret": {
              "displayName": "string",
              "name": "string",
              "secretValue": "string"
            },
            "property": {
              "account": "string",
              "createTime": "string",
              "currencyCode": "string",
              "deleteTime": "string",
              "displayName": "string",
              "expireTime": "string",
              "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
              "name": "string",
              "parent": "string",
              "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
              "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
              "timeZone": "string",
              "updateTime": "string"
            }
          },
          "resourceBeforeChange": {
            "account": {
              "createTime": "string",
              "deleted": true,
              "displayName": "string",
              "name": "string",
              "regionCode": "string",
              "updateTime": "string"
            },
            "conversionEvent": {
              "createTime": "string",
              "custom": true,
              "deletable": true,
              "eventName": "string",
              "name": "string"
            },
            "dataRetentionSettings": {
              "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
              "name": "string",
              "resetUserDataOnNewActivity": true
            },
            "dataStream": {
              "androidAppStreamData": {
                "firebaseAppId": "string",
                "packageName": "string"
              },
              "createTime": "string",
              "displayName": "string",
              "iosAppStreamData": {
                "bundleId": "string",
                "firebaseAppId": "string"
              },
              "name": "string",
              "type": "DATA_STREAM_TYPE_UNSPECIFIED",
              "updateTime": "string",
              "webStreamData": {
                "defaultUri": "string",
                "firebaseAppId": "string",
                "measurementId": "string"
              }
            },
            "firebaseLink": {
              "createTime": "string",
              "name": "string",
              "project": "string"
            },
            "googleAdsLink": {
              "adsPersonalizationEnabled": true,
              "canManageClients": true,
              "createTime": "string",
              "creatorEmailAddress": "string",
              "customerId": "string",
              "name": "string",
              "updateTime": "string"
            },
            "measurementProtocolSecret": {
              "displayName": "string",
              "name": "string",
              "secretValue": "string"
            },
            "property": {
              "account": "string",
              "createTime": "string",
              "currencyCode": "string",
              "deleteTime": "string",
              "displayName": "string",
              "expireTime": "string",
              "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
              "name": "string",
              "parent": "string",
              "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
              "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
              "timeZone": "string",
              "updateTime": "string"
            }
          }
        }
      ],
      "changesFiltered": true,
      "id": "string",
      "userActorEmail": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminaccountssearchchangehistoryevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse](#schemagoogleanalyticsadminv1betasearchchangehistoryeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

<h1 id="google-analytics-admin-api-accountsummaries">accountSummaries</h1>

## analyticsadmin.accountSummaries.list

<a id="opIdanalyticsadmin.accountSummaries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/accountSummaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/accountSummaries`

Returns summaries of all accounts accessible by the caller.

<h3 id="analyticsadminaccountsummarieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)|
|pageToken|query|string|false|A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.|
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
  "accountSummaries": [
    {
      "account": "string",
      "displayName": "string",
      "name": "string",
      "propertySummaries": [
        {
          "displayName": "string",
          "parent": "string",
          "property": "string",
          "propertyType": "PROPERTY_TYPE_UNSPECIFIED"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminaccountsummarieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListAccountSummariesResponse](#schemagoogleanalyticsadminv1betalistaccountsummariesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

<h1 id="google-analytics-admin-api-properties">properties</h1>

## analyticsadmin.properties.list

<a id="opIdanalyticsadmin.properties.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/properties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/properties`

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

<h3 id="analyticsadminpropertieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` \| Filter \| Description \| \|-----------------------------\|-------------------------------------------\| \| parent:accounts/123 \| The account with account id: 123. \| \| parent:properties/123 \| The property with property id: 123. \| \| ancestor:accounts/123 \| The account with account id: 123. \| \| firebase_project:project-id \| The firebase project with id: project-id. \| \| firebase_project:123 \| The firebase project with number: 123. \| ```|
|pageSize|query|integer|false|The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)|
|pageToken|query|string|false|A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.|
|showDeleted|query|boolean|false|Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.|
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
  "nextPageToken": "string",
  "properties": [
    {
      "account": "string",
      "createTime": "string",
      "currencyCode": "string",
      "deleteTime": "string",
      "displayName": "string",
      "expireTime": "string",
      "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
      "name": "string",
      "parent": "string",
      "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
      "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
      "timeZone": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="analyticsadminpropertieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListPropertiesResponse](#schemagoogleanalyticsadminv1betalistpropertiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.create

<a id="opIdanalyticsadmin.properties.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/properties \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account": "string",
    "currencyCode": "string",
    "displayName": "string",
    "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
    "parent": "string",
    "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
    "timeZone": "string"
  }'
```

`POST /v1beta/properties`

Creates an "GA4" property with the specified location and attributes.

> Body parameter

```json
{
  "account": "string",
  "currencyCode": "string",
  "displayName": "string",
  "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
  "parent": "string",
  "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
  "timeZone": "string"
}
```

<h3 id="analyticsadminpropertiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[GoogleAnalyticsAdminV1betaProperty](#schemagoogleanalyticsadminv1betaproperty)|false|none|
|» account|body|string|false|Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123"|
|» currencyCode|body|string|false|The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"|
|» displayName|body|string|false|Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.|
|» industryCategory|body|string|false|Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK|
|» parent|body|string|false|Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101"|
|» propertyType|body|string|false|Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.|
|» timeZone|body|string|false|Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» industryCategory|INDUSTRY_CATEGORY_UNSPECIFIED|
|» industryCategory|AUTOMOTIVE|
|» industryCategory|BUSINESS_AND_INDUSTRIAL_MARKETS|
|» industryCategory|FINANCE|
|» industryCategory|HEALTHCARE|
|» industryCategory|TECHNOLOGY|
|» industryCategory|TRAVEL|
|» industryCategory|OTHER|
|» industryCategory|ARTS_AND_ENTERTAINMENT|
|» industryCategory|BEAUTY_AND_FITNESS|
|» industryCategory|BOOKS_AND_LITERATURE|
|» industryCategory|FOOD_AND_DRINK|
|» industryCategory|GAMES|
|» industryCategory|HOBBIES_AND_LEISURE|
|» industryCategory|HOME_AND_GARDEN|
|» industryCategory|INTERNET_AND_TELECOM|
|» industryCategory|LAW_AND_GOVERNMENT|
|» industryCategory|NEWS|
|» industryCategory|ONLINE_COMMUNITIES|
|» industryCategory|PEOPLE_AND_SOCIETY|
|» industryCategory|PETS_AND_ANIMALS|
|» industryCategory|REAL_ESTATE|
|» industryCategory|REFERENCE|
|» industryCategory|SCIENCE|
|» industryCategory|SPORTS|
|» industryCategory|JOBS_AND_EDUCATION|
|» industryCategory|SHOPPING|
|» propertyType|PROPERTY_TYPE_UNSPECIFIED|
|» propertyType|PROPERTY_TYPE_ORDINARY|
|» propertyType|PROPERTY_TYPE_SUBPROPERTY|
|» propertyType|PROPERTY_TYPE_ROLLUP|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "createTime": "string",
  "currencyCode": "string",
  "deleteTime": "string",
  "displayName": "string",
  "expireTime": "string",
  "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
  "name": "string",
  "parent": "string",
  "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
  "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
  "timeZone": "string",
  "updateTime": "string"
}
```

<h3 id="analyticsadminpropertiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaProperty](#schemagoogleanalyticsadminv1betaproperty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.runAccessReport

<a id="opIdanalyticsadmin.properties.runAccessReport"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:runAccessReport \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dateRanges": [
      {
        "endDate": "string",
        "startDate": "string"
      }
    ],
    "dimensionFilter": {
      "accessFilter": {
        "betweenFilter": {
          "fromValue": {
            "doubleValue": 0,
            "int64Value": "string"
          },
          "toValue": {
            "doubleValue": 0,
            "int64Value": "string"
          }
        },
        "fieldName": "string",
        "inListFilter": {
          "caseSensitive": true,
          "values": [
            "string"
          ]
        },
        "numericFilter": {
          "operation": "OPERATION_UNSPECIFIED",
          "value": {
            "doubleValue": 0,
            "int64Value": "string"
          }
        },
        "stringFilter": {
          "caseSensitive": true,
          "matchType": "MATCH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      },
      "andGroup": {},
      "notExpression": {},
      "orGroup": {}
    },
    "dimensions": [
      {
        "dimensionName": "string"
      }
    ],
    "limit": "string",
    "metricFilter": {
      "accessFilter": {
        "betweenFilter": {
          "fromValue": {
            "doubleValue": 0,
            "int64Value": "string"
          },
          "toValue": {
            "doubleValue": 0,
            "int64Value": "string"
          }
        },
        "fieldName": "string",
        "inListFilter": {
          "caseSensitive": true,
          "values": [
            "string"
          ]
        },
        "numericFilter": {
          "operation": "OPERATION_UNSPECIFIED",
          "value": {
            "doubleValue": 0,
            "int64Value": "string"
          }
        },
        "stringFilter": {
          "caseSensitive": true,
          "matchType": "MATCH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      },
      "andGroup": {},
      "notExpression": {},
      "orGroup": {}
    },
    "metrics": [
      {
        "metricName": "string"
      }
    ],
    "offset": "string",
    "orderBys": [
      {
        "desc": true,
        "dimension": {
          "dimensionName": "string",
          "orderType": "ORDER_TYPE_UNSPECIFIED"
        },
        "metric": {
          "metricName": "string"
        }
      }
    ],
    "returnEntityQuota": true,
    "timeZone": "string"
  }'
```

`POST /v1beta/{entity}:runAccessReport`

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

> Body parameter

```json
{
  "dateRanges": [
    {
      "endDate": "string",
      "startDate": "string"
    }
  ],
  "dimensionFilter": {
    "accessFilter": {
      "betweenFilter": {
        "fromValue": {
          "doubleValue": 0,
          "int64Value": "string"
        },
        "toValue": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "fieldName": "string",
      "inListFilter": {
        "caseSensitive": true,
        "values": [
          "string"
        ]
      },
      "numericFilter": {
        "operation": "OPERATION_UNSPECIFIED",
        "value": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "stringFilter": {
        "caseSensitive": true,
        "matchType": "MATCH_TYPE_UNSPECIFIED",
        "value": "string"
      }
    },
    "andGroup": {},
    "notExpression": {},
    "orGroup": {}
  },
  "dimensions": [
    {
      "dimensionName": "string"
    }
  ],
  "limit": "string",
  "metricFilter": {
    "accessFilter": {
      "betweenFilter": {
        "fromValue": {
          "doubleValue": 0,
          "int64Value": "string"
        },
        "toValue": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "fieldName": "string",
      "inListFilter": {
        "caseSensitive": true,
        "values": [
          "string"
        ]
      },
      "numericFilter": {
        "operation": "OPERATION_UNSPECIFIED",
        "value": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "stringFilter": {
        "caseSensitive": true,
        "matchType": "MATCH_TYPE_UNSPECIFIED",
        "value": "string"
      }
    },
    "andGroup": {},
    "notExpression": {},
    "orGroup": {}
  },
  "metrics": [
    {
      "metricName": "string"
    }
  ],
  "offset": "string",
  "orderBys": [
    {
      "desc": true,
      "dimension": {
        "dimensionName": "string",
        "orderType": "ORDER_TYPE_UNSPECIFIED"
      },
      "metric": {
        "metricName": "string"
      }
    }
  ],
  "returnEntityQuota": true,
  "timeZone": "string"
}
```

<h3 id="analyticsadminpropertiesrunaccessreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity|path|string|true|The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your GA4 property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your GA4 Account ID.|
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
|body|body|[GoogleAnalyticsAdminV1betaRunAccessReportRequest](#schemagoogleanalyticsadminv1betarunaccessreportrequest)|false|none|
|» dateRanges|body|[[GoogleAnalyticsAdminV1betaAccessDateRange](#schemagoogleanalyticsadminv1betaaccessdaterange)]|false|Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges.|
|» dimensionFilter|body|[GoogleAnalyticsAdminV1betaAccessFilterExpression](#schemagoogleanalyticsadminv1betaaccessfilterexpression)|false|Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter.|
|» dimensions|body|[[GoogleAnalyticsAdminV1betaAccessDimension](#schemagoogleanalyticsadminv1betaaccessdimension)]|false|The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions.|
|» limit|body|string(int64)|false|The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).|
|» metricFilter|body|[GoogleAnalyticsAdminV1betaAccessFilterExpression](#schemagoogleanalyticsadminv1betaaccessfilterexpression)|false|Metric filters allow you to restrict report response to specific metric values which match the filter. Metric filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.|
|» metrics|body|[[GoogleAnalyticsAdminV1betaAccessMetric](#schemagoogleanalyticsadminv1betaaccessmetric)]|false|The metrics requested and displayed in the response. Requests are allowed up to 10 metrics.|
|» offset|body|string(int64)|false|The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).|
|» orderBys|body|[[GoogleAnalyticsAdminV1betaAccessOrderBy](#schemagoogleanalyticsadminv1betaaccessorderby)]|false|Specifies how rows are ordered in the response.|
|» returnEntityQuota|body|boolean|false|Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false.|
|» timeZone|body|string|false|This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".|

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
  "dimensionHeaders": [
    {
      "dimensionName": "string"
    }
  ],
  "metricHeaders": [
    {
      "metricName": "string"
    }
  ],
  "quota": {
    "concurrentRequests": {
      "consumed": 0,
      "remaining": 0
    },
    "serverErrorsPerProjectPerHour": {
      "consumed": 0,
      "remaining": 0
    },
    "tokensPerDay": {
      "consumed": 0,
      "remaining": 0
    },
    "tokensPerHour": {
      "consumed": 0,
      "remaining": 0
    },
    "tokensPerProjectPerHour": {
      "consumed": 0,
      "remaining": 0
    }
  },
  "rowCount": 0,
  "rows": [
    {
      "dimensionValues": [
        {
          "value": "string"
        }
      ],
      "metricValues": [
        {
          "value": "string"
        }
      ]
    }
  ]
}
```

<h3 id="analyticsadminpropertiesrunaccessreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaRunAccessReportResponse](#schemagoogleanalyticsadminv1betarunaccessreportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.dataStreams.measurementProtocolSecrets.get

<a id="opIdanalyticsadmin.properties.dataStreams.measurementProtocolSecrets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Lookup for a single "GA4" MeasurementProtocolSecret.

<h3 id="analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}|
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
  "displayName": "string",
  "name": "string",
  "secretValue": "string"
}
```

<h3 id="analyticsadminpropertiesdatastreamsmeasurementprotocolsecretsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaMeasurementProtocolSecret](#schemagoogleanalyticsadminv1betameasurementprotocolsecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.googleAdsLinks.delete

<a id="opIdanalyticsadmin.properties.googleAdsLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Deletes a GoogleAdsLink on a property

<h3 id="analyticsadminpropertiesgoogleadslinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Example format: properties/1234/googleAdsLinks/5678|
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
{}
```

<h3 id="analyticsadminpropertiesgoogleadslinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.googleAdsLinks.patch

<a id="opIdanalyticsadmin.properties.googleAdsLinks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adsPersonalizationEnabled": true,
    "customerId": "string"
  }'
```

`PATCH /v1beta/{name}`

Updates a GoogleAdsLink on a property

> Body parameter

```json
{
  "adsPersonalizationEnabled": true,
  "customerId": "string"
}
```

<h3 id="analyticsadminpropertiesgoogleadslinkspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.|
|updateMask|query|string|false|Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.|
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
|body|body|[GoogleAnalyticsAdminV1betaGoogleAdsLink](#schemagoogleanalyticsadminv1betagoogleadslink)|false|none|
|» adsPersonalizationEnabled|body|boolean|false|Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.|
|» customerId|body|string|false|Immutable. Google Ads customer ID.|

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
  "adsPersonalizationEnabled": true,
  "canManageClients": true,
  "createTime": "string",
  "creatorEmailAddress": "string",
  "customerId": "string",
  "name": "string",
  "updateTime": "string"
}
```

<h3 id="analyticsadminpropertiesgoogleadslinkspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaGoogleAdsLink](#schemagoogleanalyticsadminv1betagoogleadslink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.customMetrics.archive

<a id="opIdanalyticsadmin.properties.customMetrics.archive"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta/{name}:archive`

Archives a CustomMetric on a property.

> Body parameter

```json
{}
```

<h3 id="analyticsadminpropertiescustommetricsarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678|
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
|body|body|[GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest](#schemagoogleanalyticsadminv1betaarchivecustommetricrequest)|false|none|

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
{}
```

<h3 id="analyticsadminpropertiescustommetricsarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.conversionEvents.list

<a id="opIdanalyticsadmin.properties.conversionEvents.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/conversionEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/conversionEvents`

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

<h3 id="analyticsadminpropertiesconversioneventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent property. Example: 'properties/123'|
|pageSize|query|integer|false|The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)|
|pageToken|query|string|false|A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.|
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
  "conversionEvents": [
    {
      "createTime": "string",
      "custom": true,
      "deletable": true,
      "eventName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiesconversioneventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListConversionEventsResponse](#schemagoogleanalyticsadminv1betalistconversioneventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.conversionEvents.create

<a id="opIdanalyticsadmin.properties.conversionEvents.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/conversionEvents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "eventName": "string"
  }'
```

`POST /v1beta/{parent}/conversionEvents`

Creates a conversion event with the specified attributes.

> Body parameter

```json
{
  "eventName": "string"
}
```

<h3 id="analyticsadminpropertiesconversioneventscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent property where this conversion event will be created. Format: properties/123|
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
|body|body|[GoogleAnalyticsAdminV1betaConversionEvent](#schemagoogleanalyticsadminv1betaconversionevent)|false|none|
|» eventName|body|string|false|Immutable. The event name for this conversion event. Examples: 'click', 'purchase'|

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
  "createTime": "string",
  "custom": true,
  "deletable": true,
  "eventName": "string",
  "name": "string"
}
```

<h3 id="analyticsadminpropertiesconversioneventscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaConversionEvent](#schemagoogleanalyticsadminv1betaconversionevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.customDimensions.list

<a id="opIdanalyticsadmin.properties.customDimensions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/customDimensions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/customDimensions`

Lists CustomDimensions on a property.

<h3 id="analyticsadminpropertiescustomdimensionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
|pageSize|query|integer|false|The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).|
|pageToken|query|string|false|A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.|
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
  "customDimensions": [
    {
      "description": "string",
      "disallowAdsPersonalization": true,
      "displayName": "string",
      "name": "string",
      "parameterName": "string",
      "scope": "DIMENSION_SCOPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiescustomdimensionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListCustomDimensionsResponse](#schemagoogleanalyticsadminv1betalistcustomdimensionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.customDimensions.create

<a id="opIdanalyticsadmin.properties.customDimensions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/customDimensions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "disallowAdsPersonalization": true,
    "displayName": "string",
    "parameterName": "string",
    "scope": "DIMENSION_SCOPE_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/customDimensions`

Creates a CustomDimension.

> Body parameter

```json
{
  "description": "string",
  "disallowAdsPersonalization": true,
  "displayName": "string",
  "parameterName": "string",
  "scope": "DIMENSION_SCOPE_UNSPECIFIED"
}
```

<h3 id="analyticsadminpropertiescustomdimensionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
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
|body|body|[GoogleAnalyticsAdminV1betaCustomDimension](#schemagoogleanalyticsadminv1betacustomdimension)|false|none|
|» description|body|string|false|Optional. Description for this custom dimension. Max length of 150 characters.|
|» disallowAdsPersonalization|body|boolean|false|Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.|
|» displayName|body|string|false|Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.|
|» parameterName|body|string|false|Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.|
|» scope|body|string|false|Required. Immutable. The scope of this dimension.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» scope|DIMENSION_SCOPE_UNSPECIFIED|
|» scope|EVENT|
|» scope|USER|
|» scope|ITEM|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "disallowAdsPersonalization": true,
  "displayName": "string",
  "name": "string",
  "parameterName": "string",
  "scope": "DIMENSION_SCOPE_UNSPECIFIED"
}
```

<h3 id="analyticsadminpropertiescustomdimensionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaCustomDimension](#schemagoogleanalyticsadminv1betacustomdimension)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.customMetrics.list

<a id="opIdanalyticsadmin.properties.customMetrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/customMetrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/customMetrics`

Lists CustomMetrics on a property.

<h3 id="analyticsadminpropertiescustommetricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
|pageSize|query|integer|false|The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).|
|pageToken|query|string|false|A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.|
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
  "customMetrics": [
    {
      "description": "string",
      "displayName": "string",
      "measurementUnit": "MEASUREMENT_UNIT_UNSPECIFIED",
      "name": "string",
      "parameterName": "string",
      "restrictedMetricType": [
        "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
      ],
      "scope": "METRIC_SCOPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiescustommetricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListCustomMetricsResponse](#schemagoogleanalyticsadminv1betalistcustommetricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.customMetrics.create

<a id="opIdanalyticsadmin.properties.customMetrics.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/customMetrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "measurementUnit": "MEASUREMENT_UNIT_UNSPECIFIED",
    "parameterName": "string",
    "restrictedMetricType": [
      "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
    ],
    "scope": "METRIC_SCOPE_UNSPECIFIED"
  }'
```

`POST /v1beta/{parent}/customMetrics`

Creates a CustomMetric.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "measurementUnit": "MEASUREMENT_UNIT_UNSPECIFIED",
  "parameterName": "string",
  "restrictedMetricType": [
    "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
  ],
  "scope": "METRIC_SCOPE_UNSPECIFIED"
}
```

<h3 id="analyticsadminpropertiescustommetricscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
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
|body|body|[GoogleAnalyticsAdminV1betaCustomMetric](#schemagoogleanalyticsadminv1betacustommetric)|false|none|
|» description|body|string|false|Optional. Description for this custom dimension. Max length of 150 characters.|
|» displayName|body|string|false|Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.|
|» measurementUnit|body|string|false|Required. The type for the custom metric's value.|
|» parameterName|body|string|false|Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.|
|» restrictedMetricType|body|[string]|false|Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.|
|» scope|body|string|false|Required. Immutable. The scope of this custom metric.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» measurementUnit|MEASUREMENT_UNIT_UNSPECIFIED|
|» measurementUnit|STANDARD|
|» measurementUnit|CURRENCY|
|» measurementUnit|FEET|
|» measurementUnit|METERS|
|» measurementUnit|KILOMETERS|
|» measurementUnit|MILES|
|» measurementUnit|MILLISECONDS|
|» measurementUnit|SECONDS|
|» measurementUnit|MINUTES|
|» measurementUnit|HOURS|
|» restrictedMetricType|RESTRICTED_METRIC_TYPE_UNSPECIFIED|
|» restrictedMetricType|COST_DATA|
|» restrictedMetricType|REVENUE_DATA|
|» scope|METRIC_SCOPE_UNSPECIFIED|
|» scope|EVENT|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "displayName": "string",
  "measurementUnit": "MEASUREMENT_UNIT_UNSPECIFIED",
  "name": "string",
  "parameterName": "string",
  "restrictedMetricType": [
    "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
  ],
  "scope": "METRIC_SCOPE_UNSPECIFIED"
}
```

<h3 id="analyticsadminpropertiescustommetricscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaCustomMetric](#schemagoogleanalyticsadminv1betacustommetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.dataStreams.list

<a id="opIdanalyticsadmin.properties.dataStreams.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/dataStreams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/dataStreams`

Lists DataStreams on a property.

<h3 id="analyticsadminpropertiesdatastreamslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
|pageSize|query|integer|false|The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).|
|pageToken|query|string|false|A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.|
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
  "dataStreams": [
    {
      "androidAppStreamData": {
        "firebaseAppId": "string",
        "packageName": "string"
      },
      "createTime": "string",
      "displayName": "string",
      "iosAppStreamData": {
        "bundleId": "string",
        "firebaseAppId": "string"
      },
      "name": "string",
      "type": "DATA_STREAM_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "webStreamData": {
        "defaultUri": "string",
        "firebaseAppId": "string",
        "measurementId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiesdatastreamslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListDataStreamsResponse](#schemagoogleanalyticsadminv1betalistdatastreamsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.dataStreams.create

<a id="opIdanalyticsadmin.properties.dataStreams.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/dataStreams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "androidAppStreamData": {
      "packageName": "string"
    },
    "displayName": "string",
    "iosAppStreamData": {
      "bundleId": "string"
    },
    "type": "DATA_STREAM_TYPE_UNSPECIFIED",
    "webStreamData": {
      "defaultUri": "string"
    }
  }'
```

`POST /v1beta/{parent}/dataStreams`

Creates a DataStream.

> Body parameter

```json
{
  "androidAppStreamData": {
    "packageName": "string"
  },
  "displayName": "string",
  "iosAppStreamData": {
    "bundleId": "string"
  },
  "type": "DATA_STREAM_TYPE_UNSPECIFIED",
  "webStreamData": {
    "defaultUri": "string"
  }
}
```

<h3 id="analyticsadminpropertiesdatastreamscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
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
|body|body|[GoogleAnalyticsAdminV1betaDataStream](#schemagoogleanalyticsadminv1betadatastream)|false|none|
|» androidAppStreamData|body|[GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData](#schemagoogleanalyticsadminv1betadatastreamandroidappstreamdata)|false|Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM.|
|» displayName|body|string|false|Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.|
|» iosAppStreamData|body|[GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData](#schemagoogleanalyticsadminv1betadatastreamiosappstreamdata)|false|Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.|
|» type|body|string|false|Required. Immutable. The type of this DataStream resource.|
|» webStreamData|body|[GoogleAnalyticsAdminV1betaDataStreamWebStreamData](#schemagoogleanalyticsadminv1betadatastreamwebstreamdata)|false|Data specific to web streams. Must be populated if type is WEB_DATA_STREAM.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|DATA_STREAM_TYPE_UNSPECIFIED|
|» type|WEB_DATA_STREAM|
|» type|ANDROID_APP_DATA_STREAM|
|» type|IOS_APP_DATA_STREAM|

> Example responses

> 200 Response

```json
{
  "androidAppStreamData": {
    "firebaseAppId": "string",
    "packageName": "string"
  },
  "createTime": "string",
  "displayName": "string",
  "iosAppStreamData": {
    "bundleId": "string",
    "firebaseAppId": "string"
  },
  "name": "string",
  "type": "DATA_STREAM_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "webStreamData": {
    "defaultUri": "string",
    "firebaseAppId": "string",
    "measurementId": "string"
  }
}
```

<h3 id="analyticsadminpropertiesdatastreamscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaDataStream](#schemagoogleanalyticsadminv1betadatastream)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.firebaseLinks.list

<a id="opIdanalyticsadmin.properties.firebaseLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/firebaseLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/firebaseLinks`

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

<h3 id="analyticsadminpropertiesfirebaselinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Format: properties/{property_id} Example: properties/1234|
|pageSize|query|integer|false|The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)|
|pageToken|query|string|false|A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.|
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
  "firebaseLinks": [
    {
      "createTime": "string",
      "name": "string",
      "project": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiesfirebaselinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListFirebaseLinksResponse](#schemagoogleanalyticsadminv1betalistfirebaselinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.firebaseLinks.create

<a id="opIdanalyticsadmin.properties.firebaseLinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/firebaseLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "project": "string"
  }'
```

`POST /v1beta/{parent}/firebaseLinks`

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

> Body parameter

```json
{
  "project": "string"
}
```

<h3 id="analyticsadminpropertiesfirebaselinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Format: properties/{property_id} Example: properties/1234|
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
|body|body|[GoogleAnalyticsAdminV1betaFirebaseLink](#schemagoogleanalyticsadminv1betafirebaselink)|false|none|
|» project|body|string|false|Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'|

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
  "createTime": "string",
  "name": "string",
  "project": "string"
}
```

<h3 id="analyticsadminpropertiesfirebaselinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaFirebaseLink](#schemagoogleanalyticsadminv1betafirebaselink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.googleAdsLinks.list

<a id="opIdanalyticsadmin.properties.googleAdsLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/googleAdsLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/googleAdsLinks`

Lists GoogleAdsLinks on a property.

<h3 id="analyticsadminpropertiesgoogleadslinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
|pageSize|query|integer|false|The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).|
|pageToken|query|string|false|A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.|
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
  "googleAdsLinks": [
    {
      "adsPersonalizationEnabled": true,
      "canManageClients": true,
      "createTime": "string",
      "creatorEmailAddress": "string",
      "customerId": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiesgoogleadslinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse](#schemagoogleanalyticsadminv1betalistgoogleadslinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.googleAdsLinks.create

<a id="opIdanalyticsadmin.properties.googleAdsLinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/googleAdsLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adsPersonalizationEnabled": true,
    "customerId": "string"
  }'
```

`POST /v1beta/{parent}/googleAdsLinks`

Creates a GoogleAdsLink.

> Body parameter

```json
{
  "adsPersonalizationEnabled": true,
  "customerId": "string"
}
```

<h3 id="analyticsadminpropertiesgoogleadslinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example format: properties/1234|
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
|body|body|[GoogleAnalyticsAdminV1betaGoogleAdsLink](#schemagoogleanalyticsadminv1betagoogleadslink)|false|none|
|» adsPersonalizationEnabled|body|boolean|false|Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.|
|» customerId|body|string|false|Immutable. Google Ads customer ID.|

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
  "adsPersonalizationEnabled": true,
  "canManageClients": true,
  "createTime": "string",
  "creatorEmailAddress": "string",
  "customerId": "string",
  "name": "string",
  "updateTime": "string"
}
```

<h3 id="analyticsadminpropertiesgoogleadslinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaGoogleAdsLink](#schemagoogleanalyticsadminv1betagoogleadslink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.dataStreams.measurementProtocolSecrets.list

<a id="opIdanalyticsadmin.properties.dataStreams.measurementProtocolSecrets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/measurementProtocolSecrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/measurementProtocolSecrets`

Returns child MeasurementProtocolSecrets under the specified parent Property.

<h3 id="analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets|
|pageSize|query|integer|false|The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.|
|pageToken|query|string|false|A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.|
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
  "measurementProtocolSecrets": [
    {
      "displayName": "string",
      "name": "string",
      "secretValue": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse](#schemagoogleanalyticsadminv1betalistmeasurementprotocolsecretsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analyticsadmin.properties.dataStreams.measurementProtocolSecrets.create

<a id="opIdanalyticsadmin.properties.dataStreams.measurementProtocolSecrets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/measurementProtocolSecrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string"
  }'
```

`POST /v1beta/{parent}/measurementProtocolSecrets`

Creates a measurement protocol secret.

> Body parameter

```json
{
  "displayName": "string"
}
```

<h3 id="analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}|
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
|body|body|[GoogleAnalyticsAdminV1betaMeasurementProtocolSecret](#schemagoogleanalyticsadminv1betameasurementprotocolsecret)|false|none|
|» displayName|body|string|false|Required. Human-readable display name for this secret.|

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
  "displayName": "string",
  "name": "string",
  "secretValue": "string"
}
```

<h3 id="analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaMeasurementProtocolSecret](#schemagoogleanalyticsadminv1betameasurementprotocolsecret)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analyticsadmin.properties.acknowledgeUserDataCollection

<a id="opIdanalyticsadmin.properties.acknowledgeUserDataCollection"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string:acknowledgeUserDataCollection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acknowledgement": "string"
  }'
```

`POST /v1beta/{property}:acknowledgeUserDataCollection`

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

> Body parameter

```json
{
  "acknowledgement": "string"
}
```

<h3 id="analyticsadminpropertiesacknowledgeuserdatacollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|property|path|string|true|Required. The property for which to acknowledge user data collection.|
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
|body|body|[GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest](#schemagoogleanalyticsadminv1betaacknowledgeuserdatacollectionrequest)|false|none|
|» acknowledgement|body|string|false|Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property."|

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
{}
```

<h3 id="analyticsadminpropertiesacknowledgeuserdatacollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse](#schemagoogleanalyticsadminv1betaacknowledgeuserdatacollectionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

# Schemas

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessBetweenFilter">GoogleAnalyticsAdminV1betaAccessBetweenFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessbetweenfilter"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessBetweenFilter"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessbetweenfilter"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessbetweenfilter"></a>

```json
{
  "fromValue": {
    "doubleValue": 0,
    "int64Value": "string"
  },
  "toValue": {
    "doubleValue": 0,
    "int64Value": "string"
  }
}
```

To express that the result needs to be between two numbers (inclusive).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromValue|[GoogleAnalyticsAdminV1betaNumericValue](#schemagoogleanalyticsadminv1betanumericvalue)|false|none|Begins with this number.|
|toValue|[GoogleAnalyticsAdminV1betaNumericValue](#schemagoogleanalyticsadminv1betanumericvalue)|false|none|Ends with this number.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessDateRange">GoogleAnalyticsAdminV1betaAccessDateRange</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessdaterange"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessDateRange"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessdaterange"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessdaterange"></a>

```json
{
  "endDate": "string",
  "startDate": "string"
}
```

A contiguous range of days: startDate, startDate + 1, ..., endDate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string|false|none|The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.|
|startDate|string|false|none|The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessDimension">GoogleAnalyticsAdminV1betaAccessDimension</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessdimension"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessDimension"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessdimension"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessdimension"></a>

```json
{
  "dimensionName": "string"
}
```

Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionName|string|false|none|The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessDimensionHeader">GoogleAnalyticsAdminV1betaAccessDimensionHeader</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessdimensionheader"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessDimensionHeader"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessdimensionheader"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessdimensionheader"></a>

```json
{
  "dimensionName": "string"
}
```

Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionName|string|false|none|The dimension's name; for example 'userEmail'.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessDimensionValue">GoogleAnalyticsAdminV1betaAccessDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessdimensionvalue"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessDimensionValue"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessdimensionvalue"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessdimensionvalue"></a>

```json
{
  "value": "string"
}
```

The value of a dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The dimension value. For example, this value may be 'France' for the 'country' dimension.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessFilter">GoogleAnalyticsAdminV1betaAccessFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessfilter"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessFilter"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessfilter"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessfilter"></a>

```json
{
  "betweenFilter": {
    "fromValue": {
      "doubleValue": 0,
      "int64Value": "string"
    },
    "toValue": {
      "doubleValue": 0,
      "int64Value": "string"
    }
  },
  "fieldName": "string",
  "inListFilter": {
    "caseSensitive": true,
    "values": [
      "string"
    ]
  },
  "numericFilter": {
    "operation": "OPERATION_UNSPECIFIED",
    "value": {
      "doubleValue": 0,
      "int64Value": "string"
    }
  },
  "stringFilter": {
    "caseSensitive": true,
    "matchType": "MATCH_TYPE_UNSPECIFIED",
    "value": "string"
  }
}
```

An expression to filter dimension or metric values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|betweenFilter|[GoogleAnalyticsAdminV1betaAccessBetweenFilter](#schemagoogleanalyticsadminv1betaaccessbetweenfilter)|false|none|A filter for two values.|
|fieldName|string|false|none|The dimension name or metric name.|
|inListFilter|[GoogleAnalyticsAdminV1betaAccessInListFilter](#schemagoogleanalyticsadminv1betaaccessinlistfilter)|false|none|A filter for in list values.|
|numericFilter|[GoogleAnalyticsAdminV1betaAccessNumericFilter](#schemagoogleanalyticsadminv1betaaccessnumericfilter)|false|none|A filter for numeric or date values.|
|stringFilter|[GoogleAnalyticsAdminV1betaAccessStringFilter](#schemagoogleanalyticsadminv1betaaccessstringfilter)|false|none|Strings related filter.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessFilterExpression">GoogleAnalyticsAdminV1betaAccessFilterExpression</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessfilterexpression"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessFilterExpression"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessfilterexpression"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessfilterexpression"></a>

```json
{
  "accessFilter": {
    "betweenFilter": {
      "fromValue": {
        "doubleValue": 0,
        "int64Value": "string"
      },
      "toValue": {
        "doubleValue": 0,
        "int64Value": "string"
      }
    },
    "fieldName": "string",
    "inListFilter": {
      "caseSensitive": true,
      "values": [
        "string"
      ]
    },
    "numericFilter": {
      "operation": "OPERATION_UNSPECIFIED",
      "value": {
        "doubleValue": 0,
        "int64Value": "string"
      }
    },
    "stringFilter": {
      "caseSensitive": true,
      "matchType": "MATCH_TYPE_UNSPECIFIED",
      "value": "string"
    }
  },
  "andGroup": {
    "expressions": [
      {}
    ]
  },
  "notExpression": {
    "accessFilter": {
      "betweenFilter": {
        "fromValue": {
          "doubleValue": 0,
          "int64Value": "string"
        },
        "toValue": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "fieldName": "string",
      "inListFilter": {
        "caseSensitive": true,
        "values": [
          "string"
        ]
      },
      "numericFilter": {
        "operation": "OPERATION_UNSPECIFIED",
        "value": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "stringFilter": {
        "caseSensitive": true,
        "matchType": "MATCH_TYPE_UNSPECIFIED",
        "value": "string"
      }
    },
    "andGroup": {},
    "notExpression": {},
    "orGroup": {}
  },
  "orGroup": {
    "expressions": [
      {}
    ]
  }
}
```

Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessFilter|[GoogleAnalyticsAdminV1betaAccessFilter](#schemagoogleanalyticsadminv1betaaccessfilter)|false|none|A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.|
|andGroup|[GoogleAnalyticsAdminV1betaAccessFilterExpressionList](#schemagoogleanalyticsadminv1betaaccessfilterexpressionlist)|false|none|Each of the FilterExpressions in the and_group has an AND relationship.|
|notExpression|[GoogleAnalyticsAdminV1betaAccessFilterExpression](#schemagoogleanalyticsadminv1betaaccessfilterexpression)|false|none|The FilterExpression is NOT of not_expression.|
|orGroup|[GoogleAnalyticsAdminV1betaAccessFilterExpressionList](#schemagoogleanalyticsadminv1betaaccessfilterexpressionlist)|false|none|Each of the FilterExpressions in the or_group has an OR relationship.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessFilterExpressionList">GoogleAnalyticsAdminV1betaAccessFilterExpressionList</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessfilterexpressionlist"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessFilterExpressionList"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessfilterexpressionlist"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessfilterexpressionlist"></a>

```json
{
  "expressions": [
    {
      "accessFilter": {
        "betweenFilter": {
          "fromValue": {
            "doubleValue": 0,
            "int64Value": "string"
          },
          "toValue": {
            "doubleValue": 0,
            "int64Value": "string"
          }
        },
        "fieldName": "string",
        "inListFilter": {
          "caseSensitive": true,
          "values": [
            "string"
          ]
        },
        "numericFilter": {
          "operation": "OPERATION_UNSPECIFIED",
          "value": {
            "doubleValue": 0,
            "int64Value": "string"
          }
        },
        "stringFilter": {
          "caseSensitive": true,
          "matchType": "MATCH_TYPE_UNSPECIFIED",
          "value": "string"
        }
      },
      "andGroup": {},
      "notExpression": {},
      "orGroup": {}
    }
  ]
}
```

A list of filter expressions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expressions|[[GoogleAnalyticsAdminV1betaAccessFilterExpression](#schemagoogleanalyticsadminv1betaaccessfilterexpression)]|false|none|A list of filter expressions.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessInListFilter">GoogleAnalyticsAdminV1betaAccessInListFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessinlistfilter"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessInListFilter"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessinlistfilter"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessinlistfilter"></a>

```json
{
  "caseSensitive": true,
  "values": [
    "string"
  ]
}
```

The result needs to be in a list of string values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|If true, the string value is case sensitive.|
|values|[string]|false|none|The list of string values. Must be non-empty.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessMetric">GoogleAnalyticsAdminV1betaAccessMetric</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessmetric"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessMetric"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessmetric"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessmetric"></a>

```json
{
  "metricName": "string"
}
```

The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|string|false|none|The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessMetricHeader">GoogleAnalyticsAdminV1betaAccessMetricHeader</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessmetricheader"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessMetricHeader"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessmetricheader"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessmetricheader"></a>

```json
{
  "metricName": "string"
}
```

Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|string|false|none|The metric's name; for example 'accessCount'.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessMetricValue">GoogleAnalyticsAdminV1betaAccessMetricValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessmetricvalue"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessMetricValue"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessmetricvalue"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessmetricvalue"></a>

```json
{
  "value": "string"
}
```

The value of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The measurement value. For example, this value may be '13'.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessNumericFilter">GoogleAnalyticsAdminV1betaAccessNumericFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessnumericfilter"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessNumericFilter"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessnumericfilter"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessnumericfilter"></a>

```json
{
  "operation": "OPERATION_UNSPECIFIED",
  "value": {
    "doubleValue": 0,
    "int64Value": "string"
  }
}
```

Filters for numeric or date values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|false|none|The operation type for this filter.|
|value|[GoogleAnalyticsAdminV1betaNumericValue](#schemagoogleanalyticsadminv1betanumericvalue)|false|none|A numeric value or a date value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|OPERATION_UNSPECIFIED|
|operation|EQUAL|
|operation|LESS_THAN|
|operation|LESS_THAN_OR_EQUAL|
|operation|GREATER_THAN|
|operation|GREATER_THAN_OR_EQUAL|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessOrderBy">GoogleAnalyticsAdminV1betaAccessOrderBy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessorderby"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessOrderBy"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessorderby"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessorderby"></a>

```json
{
  "desc": true,
  "dimension": {
    "dimensionName": "string",
    "orderType": "ORDER_TYPE_UNSPECIFIED"
  },
  "metric": {
    "metricName": "string"
  }
}
```

Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|boolean|false|none|If true, sorts by descending order. If false or unspecified, sorts in ascending order.|
|dimension|[GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy](#schemagoogleanalyticsadminv1betaaccessorderbydimensionorderby)|false|none|Sorts results by a dimension's values.|
|metric|[GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy](#schemagoogleanalyticsadminv1betaaccessorderbymetricorderby)|false|none|Sorts results by a metric's values.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy">GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessorderbydimensionorderby"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessorderbydimensionorderby"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessorderbydimensionorderby"></a>

```json
{
  "dimensionName": "string",
  "orderType": "ORDER_TYPE_UNSPECIFIED"
}
```

Sorts by dimension values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionName|string|false|none|A dimension name in the request to order by.|
|orderType|string|false|none|Controls the rule for dimension value ordering.|

#### Enumerated Values

|Property|Value|
|---|---|
|orderType|ORDER_TYPE_UNSPECIFIED|
|orderType|ALPHANUMERIC|
|orderType|CASE_INSENSITIVE_ALPHANUMERIC|
|orderType|NUMERIC|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy">GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessorderbymetricorderby"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessorderbymetricorderby"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessorderbymetricorderby"></a>

```json
{
  "metricName": "string"
}
```

Sorts by metric values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|string|false|none|A metric name in the request to order by.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessQuota">GoogleAnalyticsAdminV1betaAccessQuota</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessquota"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessQuota"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessquota"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessquota"></a>

```json
{
  "concurrentRequests": {
    "consumed": 0,
    "remaining": 0
  },
  "serverErrorsPerProjectPerHour": {
    "consumed": 0,
    "remaining": 0
  },
  "tokensPerDay": {
    "consumed": 0,
    "remaining": 0
  },
  "tokensPerHour": {
    "consumed": 0,
    "remaining": 0
  },
  "tokensPerProjectPerHour": {
    "consumed": 0,
    "remaining": 0
  }
}
```

Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrentRequests|[GoogleAnalyticsAdminV1betaAccessQuotaStatus](#schemagoogleanalyticsadminv1betaaccessquotastatus)|false|none|Properties can use up to 50 concurrent requests.|
|serverErrorsPerProjectPerHour|[GoogleAnalyticsAdminV1betaAccessQuotaStatus](#schemagoogleanalyticsadminv1betaaccessquotastatus)|false|none|Properties and cloud project pairs can have up to 50 server errors per hour.|
|tokensPerDay|[GoogleAnalyticsAdminV1betaAccessQuotaStatus](#schemagoogleanalyticsadminv1betaaccessquotastatus)|false|none|Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens.|
|tokensPerHour|[GoogleAnalyticsAdminV1betaAccessQuotaStatus](#schemagoogleanalyticsadminv1betaaccessquotastatus)|false|none|Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.|
|tokensPerProjectPerHour|[GoogleAnalyticsAdminV1betaAccessQuotaStatus](#schemagoogleanalyticsadminv1betaaccessquotastatus)|false|none|Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessQuotaStatus">GoogleAnalyticsAdminV1betaAccessQuotaStatus</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessquotastatus"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessQuotaStatus"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessquotastatus"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessquotastatus"></a>

```json
{
  "consumed": 0,
  "remaining": 0
}
```

Current state for a particular quota group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumed|integer(int32)|false|none|Quota consumed by this request.|
|remaining|integer(int32)|false|none|Quota remaining after this request.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessRow">GoogleAnalyticsAdminV1betaAccessRow</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessrow"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessRow"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessrow"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessrow"></a>

```json
{
  "dimensionValues": [
    {
      "value": "string"
    }
  ],
  "metricValues": [
    {
      "value": "string"
    }
  ]
}
```

Access report data for each row.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionValues|[[GoogleAnalyticsAdminV1betaAccessDimensionValue](#schemagoogleanalyticsadminv1betaaccessdimensionvalue)]|false|none|List of dimension values. These values are in the same order as specified in the request.|
|metricValues|[[GoogleAnalyticsAdminV1betaAccessMetricValue](#schemagoogleanalyticsadminv1betaaccessmetricvalue)]|false|none|List of metric values. These values are in the same order as specified in the request.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccessStringFilter">GoogleAnalyticsAdminV1betaAccessStringFilter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccessstringfilter"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccessStringFilter"></a>
<a id="tocSgoogleanalyticsadminv1betaaccessstringfilter"></a>
<a id="tocsgoogleanalyticsadminv1betaaccessstringfilter"></a>

```json
{
  "caseSensitive": true,
  "matchType": "MATCH_TYPE_UNSPECIFIED",
  "value": "string"
}
```

The filter for strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|If true, the string value is case sensitive.|
|matchType|string|false|none|The match type for this filter.|
|value|string|false|none|The string value used for the matching.|

#### Enumerated Values

|Property|Value|
|---|---|
|matchType|MATCH_TYPE_UNSPECIFIED|
|matchType|EXACT|
|matchType|BEGINS_WITH|
|matchType|ENDS_WITH|
|matchType|CONTAINS|
|matchType|FULL_REGEXP|
|matchType|PARTIAL_REGEXP|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccount">GoogleAnalyticsAdminV1betaAccount</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccount"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccount"></a>
<a id="tocSgoogleanalyticsadminv1betaaccount"></a>
<a id="tocsgoogleanalyticsadminv1betaaccount"></a>

```json
{
  "createTime": "string",
  "deleted": true,
  "displayName": "string",
  "name": "string",
  "regionCode": "string",
  "updateTime": "string"
}
```

A resource message representing a Google Analytics account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this account was originally created.|
|deleted|boolean|false|read-only|Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.|
|displayName|string|false|none|Required. Human-readable display name for this account.|
|name|string|false|read-only|Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"|
|regionCode|string|false|none|Country of business. Must be a Unicode CLDR region code.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when account payload fields were last updated.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAccountSummary">GoogleAnalyticsAdminV1betaAccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaaccountsummary"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAccountSummary"></a>
<a id="tocSgoogleanalyticsadminv1betaaccountsummary"></a>
<a id="tocsgoogleanalyticsadminv1betaaccountsummary"></a>

```json
{
  "account": "string",
  "displayName": "string",
  "name": "string",
  "propertySummaries": [
    {
      "displayName": "string",
      "parent": "string",
      "property": "string",
      "propertyType": "PROPERTY_TYPE_UNSPECIFIED"
    }
  ]
}
```

A virtual resource representing an overview of an account and all its child GA4 properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000"|
|displayName|string|false|none|Display name for the account referred to in this account summary.|
|name|string|false|none|Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000"|
|propertySummaries|[[GoogleAnalyticsAdminV1betaPropertySummary](#schemagoogleanalyticsadminv1betapropertysummary)]|false|none|List of summaries for child accounts of this account.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest">GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaacknowledgeuserdatacollectionrequest"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest"></a>
<a id="tocSgoogleanalyticsadminv1betaacknowledgeuserdatacollectionrequest"></a>
<a id="tocsgoogleanalyticsadminv1betaacknowledgeuserdatacollectionrequest"></a>

```json
{
  "acknowledgement": "string"
}
```

Request message for AcknowledgeUserDataCollection RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|string|false|none|Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property."|

<h2 id="tocS_GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse">GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaacknowledgeuserdatacollectionresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse"></a>
<a id="tocSgoogleanalyticsadminv1betaacknowledgeuserdatacollectionresponse"></a>
<a id="tocsgoogleanalyticsadminv1betaacknowledgeuserdatacollectionresponse"></a>

```json
{}
```

Response message for AcknowledgeUserDataCollection RPC.

<h2 id="tocS_GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest">GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaarchivecustomdimensionrequest"></a>
<a id="schema_GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest"></a>
<a id="tocSgoogleanalyticsadminv1betaarchivecustomdimensionrequest"></a>
<a id="tocsgoogleanalyticsadminv1betaarchivecustomdimensionrequest"></a>

```json
{}
```

Request message for ArchiveCustomDimension RPC.

<h2 id="tocS_GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest">GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaarchivecustommetricrequest"></a>
<a id="schema_GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest"></a>
<a id="tocSgoogleanalyticsadminv1betaarchivecustommetricrequest"></a>
<a id="tocsgoogleanalyticsadminv1betaarchivecustommetricrequest"></a>

```json
{}
```

Request message for ArchiveCustomMetric RPC.

<h2 id="tocS_GoogleAnalyticsAdminV1betaChangeHistoryChange">GoogleAnalyticsAdminV1betaChangeHistoryChange</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betachangehistorychange"></a>
<a id="schema_GoogleAnalyticsAdminV1betaChangeHistoryChange"></a>
<a id="tocSgoogleanalyticsadminv1betachangehistorychange"></a>
<a id="tocsgoogleanalyticsadminv1betachangehistorychange"></a>

```json
{
  "action": "ACTION_TYPE_UNSPECIFIED",
  "resource": "string",
  "resourceAfterChange": {
    "account": {
      "createTime": "string",
      "deleted": true,
      "displayName": "string",
      "name": "string",
      "regionCode": "string",
      "updateTime": "string"
    },
    "conversionEvent": {
      "createTime": "string",
      "custom": true,
      "deletable": true,
      "eventName": "string",
      "name": "string"
    },
    "dataRetentionSettings": {
      "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
      "name": "string",
      "resetUserDataOnNewActivity": true
    },
    "dataStream": {
      "androidAppStreamData": {
        "firebaseAppId": "string",
        "packageName": "string"
      },
      "createTime": "string",
      "displayName": "string",
      "iosAppStreamData": {
        "bundleId": "string",
        "firebaseAppId": "string"
      },
      "name": "string",
      "type": "DATA_STREAM_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "webStreamData": {
        "defaultUri": "string",
        "firebaseAppId": "string",
        "measurementId": "string"
      }
    },
    "firebaseLink": {
      "createTime": "string",
      "name": "string",
      "project": "string"
    },
    "googleAdsLink": {
      "adsPersonalizationEnabled": true,
      "canManageClients": true,
      "createTime": "string",
      "creatorEmailAddress": "string",
      "customerId": "string",
      "name": "string",
      "updateTime": "string"
    },
    "measurementProtocolSecret": {
      "displayName": "string",
      "name": "string",
      "secretValue": "string"
    },
    "property": {
      "account": "string",
      "createTime": "string",
      "currencyCode": "string",
      "deleteTime": "string",
      "displayName": "string",
      "expireTime": "string",
      "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
      "name": "string",
      "parent": "string",
      "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
      "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
      "timeZone": "string",
      "updateTime": "string"
    }
  },
  "resourceBeforeChange": {
    "account": {
      "createTime": "string",
      "deleted": true,
      "displayName": "string",
      "name": "string",
      "regionCode": "string",
      "updateTime": "string"
    },
    "conversionEvent": {
      "createTime": "string",
      "custom": true,
      "deletable": true,
      "eventName": "string",
      "name": "string"
    },
    "dataRetentionSettings": {
      "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
      "name": "string",
      "resetUserDataOnNewActivity": true
    },
    "dataStream": {
      "androidAppStreamData": {
        "firebaseAppId": "string",
        "packageName": "string"
      },
      "createTime": "string",
      "displayName": "string",
      "iosAppStreamData": {
        "bundleId": "string",
        "firebaseAppId": "string"
      },
      "name": "string",
      "type": "DATA_STREAM_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "webStreamData": {
        "defaultUri": "string",
        "firebaseAppId": "string",
        "measurementId": "string"
      }
    },
    "firebaseLink": {
      "createTime": "string",
      "name": "string",
      "project": "string"
    },
    "googleAdsLink": {
      "adsPersonalizationEnabled": true,
      "canManageClients": true,
      "createTime": "string",
      "creatorEmailAddress": "string",
      "customerId": "string",
      "name": "string",
      "updateTime": "string"
    },
    "measurementProtocolSecret": {
      "displayName": "string",
      "name": "string",
      "secretValue": "string"
    },
    "property": {
      "account": "string",
      "createTime": "string",
      "currencyCode": "string",
      "deleteTime": "string",
      "displayName": "string",
      "expireTime": "string",
      "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
      "name": "string",
      "parent": "string",
      "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
      "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
      "timeZone": "string",
      "updateTime": "string"
    }
  }
}
```

A description of a change to a single Google Analytics resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The type of action that changed this resource.|
|resource|string|false|none|Resource name of the resource whose changes are described by this entry.|
|resourceAfterChange|[GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource](#schemagoogleanalyticsadminv1betachangehistorychangechangehistoryresource)|false|none|Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.|
|resourceBeforeChange|[GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource](#schemagoogleanalyticsadminv1betachangehistorychangechangehistoryresource)|false|none|Resource contents from before the change was made. If this resource was created in this change, this field will be missing.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_TYPE_UNSPECIFIED|
|action|CREATED|
|action|UPDATED|
|action|DELETED|

<h2 id="tocS_GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource">GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betachangehistorychangechangehistoryresource"></a>
<a id="schema_GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource"></a>
<a id="tocSgoogleanalyticsadminv1betachangehistorychangechangehistoryresource"></a>
<a id="tocsgoogleanalyticsadminv1betachangehistorychangechangehistoryresource"></a>

```json
{
  "account": {
    "createTime": "string",
    "deleted": true,
    "displayName": "string",
    "name": "string",
    "regionCode": "string",
    "updateTime": "string"
  },
  "conversionEvent": {
    "createTime": "string",
    "custom": true,
    "deletable": true,
    "eventName": "string",
    "name": "string"
  },
  "dataRetentionSettings": {
    "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
    "name": "string",
    "resetUserDataOnNewActivity": true
  },
  "dataStream": {
    "androidAppStreamData": {
      "firebaseAppId": "string",
      "packageName": "string"
    },
    "createTime": "string",
    "displayName": "string",
    "iosAppStreamData": {
      "bundleId": "string",
      "firebaseAppId": "string"
    },
    "name": "string",
    "type": "DATA_STREAM_TYPE_UNSPECIFIED",
    "updateTime": "string",
    "webStreamData": {
      "defaultUri": "string",
      "firebaseAppId": "string",
      "measurementId": "string"
    }
  },
  "firebaseLink": {
    "createTime": "string",
    "name": "string",
    "project": "string"
  },
  "googleAdsLink": {
    "adsPersonalizationEnabled": true,
    "canManageClients": true,
    "createTime": "string",
    "creatorEmailAddress": "string",
    "customerId": "string",
    "name": "string",
    "updateTime": "string"
  },
  "measurementProtocolSecret": {
    "displayName": "string",
    "name": "string",
    "secretValue": "string"
  },
  "property": {
    "account": "string",
    "createTime": "string",
    "currencyCode": "string",
    "deleteTime": "string",
    "displayName": "string",
    "expireTime": "string",
    "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
    "name": "string",
    "parent": "string",
    "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
    "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
    "timeZone": "string",
    "updateTime": "string"
  }
}
```

A snapshot of a resource as before or after the result of a change in change history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[GoogleAnalyticsAdminV1betaAccount](#schemagoogleanalyticsadminv1betaaccount)|false|none|A snapshot of an Account resource in change history.|
|conversionEvent|[GoogleAnalyticsAdminV1betaConversionEvent](#schemagoogleanalyticsadminv1betaconversionevent)|false|none|A snapshot of a ConversionEvent resource in change history.|
|dataRetentionSettings|[GoogleAnalyticsAdminV1betaDataRetentionSettings](#schemagoogleanalyticsadminv1betadataretentionsettings)|false|none|A snapshot of a data retention settings resource in change history.|
|dataStream|[GoogleAnalyticsAdminV1betaDataStream](#schemagoogleanalyticsadminv1betadatastream)|false|none|A snapshot of a DataStream resource in change history.|
|firebaseLink|[GoogleAnalyticsAdminV1betaFirebaseLink](#schemagoogleanalyticsadminv1betafirebaselink)|false|none|A snapshot of a FirebaseLink resource in change history.|
|googleAdsLink|[GoogleAnalyticsAdminV1betaGoogleAdsLink](#schemagoogleanalyticsadminv1betagoogleadslink)|false|none|A snapshot of a GoogleAdsLink resource in change history.|
|measurementProtocolSecret|[GoogleAnalyticsAdminV1betaMeasurementProtocolSecret](#schemagoogleanalyticsadminv1betameasurementprotocolsecret)|false|none|A snapshot of a MeasurementProtocolSecret resource in change history.|
|property|[GoogleAnalyticsAdminV1betaProperty](#schemagoogleanalyticsadminv1betaproperty)|false|none|A snapshot of a Property resource in change history.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaChangeHistoryEvent">GoogleAnalyticsAdminV1betaChangeHistoryEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betachangehistoryevent"></a>
<a id="schema_GoogleAnalyticsAdminV1betaChangeHistoryEvent"></a>
<a id="tocSgoogleanalyticsadminv1betachangehistoryevent"></a>
<a id="tocsgoogleanalyticsadminv1betachangehistoryevent"></a>

```json
{
  "actorType": "ACTOR_TYPE_UNSPECIFIED",
  "changeTime": "string",
  "changes": [
    {
      "action": "ACTION_TYPE_UNSPECIFIED",
      "resource": "string",
      "resourceAfterChange": {
        "account": {
          "createTime": "string",
          "deleted": true,
          "displayName": "string",
          "name": "string",
          "regionCode": "string",
          "updateTime": "string"
        },
        "conversionEvent": {
          "createTime": "string",
          "custom": true,
          "deletable": true,
          "eventName": "string",
          "name": "string"
        },
        "dataRetentionSettings": {
          "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
          "name": "string",
          "resetUserDataOnNewActivity": true
        },
        "dataStream": {
          "androidAppStreamData": {
            "firebaseAppId": "string",
            "packageName": "string"
          },
          "createTime": "string",
          "displayName": "string",
          "iosAppStreamData": {
            "bundleId": "string",
            "firebaseAppId": "string"
          },
          "name": "string",
          "type": "DATA_STREAM_TYPE_UNSPECIFIED",
          "updateTime": "string",
          "webStreamData": {
            "defaultUri": "string",
            "firebaseAppId": "string",
            "measurementId": "string"
          }
        },
        "firebaseLink": {
          "createTime": "string",
          "name": "string",
          "project": "string"
        },
        "googleAdsLink": {
          "adsPersonalizationEnabled": true,
          "canManageClients": true,
          "createTime": "string",
          "creatorEmailAddress": "string",
          "customerId": "string",
          "name": "string",
          "updateTime": "string"
        },
        "measurementProtocolSecret": {
          "displayName": "string",
          "name": "string",
          "secretValue": "string"
        },
        "property": {
          "account": "string",
          "createTime": "string",
          "currencyCode": "string",
          "deleteTime": "string",
          "displayName": "string",
          "expireTime": "string",
          "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
          "name": "string",
          "parent": "string",
          "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
          "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
          "timeZone": "string",
          "updateTime": "string"
        }
      },
      "resourceBeforeChange": {
        "account": {
          "createTime": "string",
          "deleted": true,
          "displayName": "string",
          "name": "string",
          "regionCode": "string",
          "updateTime": "string"
        },
        "conversionEvent": {
          "createTime": "string",
          "custom": true,
          "deletable": true,
          "eventName": "string",
          "name": "string"
        },
        "dataRetentionSettings": {
          "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
          "name": "string",
          "resetUserDataOnNewActivity": true
        },
        "dataStream": {
          "androidAppStreamData": {
            "firebaseAppId": "string",
            "packageName": "string"
          },
          "createTime": "string",
          "displayName": "string",
          "iosAppStreamData": {
            "bundleId": "string",
            "firebaseAppId": "string"
          },
          "name": "string",
          "type": "DATA_STREAM_TYPE_UNSPECIFIED",
          "updateTime": "string",
          "webStreamData": {
            "defaultUri": "string",
            "firebaseAppId": "string",
            "measurementId": "string"
          }
        },
        "firebaseLink": {
          "createTime": "string",
          "name": "string",
          "project": "string"
        },
        "googleAdsLink": {
          "adsPersonalizationEnabled": true,
          "canManageClients": true,
          "createTime": "string",
          "creatorEmailAddress": "string",
          "customerId": "string",
          "name": "string",
          "updateTime": "string"
        },
        "measurementProtocolSecret": {
          "displayName": "string",
          "name": "string",
          "secretValue": "string"
        },
        "property": {
          "account": "string",
          "createTime": "string",
          "currencyCode": "string",
          "deleteTime": "string",
          "displayName": "string",
          "expireTime": "string",
          "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
          "name": "string",
          "parent": "string",
          "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
          "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
          "timeZone": "string",
          "updateTime": "string"
        }
      }
    }
  ],
  "changesFiltered": true,
  "id": "string",
  "userActorEmail": "string"
}
```

A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorType|string|false|none|The type of actor that made this change.|
|changeTime|string(google-datetime)|false|none|Time when change was made.|
|changes|[[GoogleAnalyticsAdminV1betaChangeHistoryChange](#schemagoogleanalyticsadminv1betachangehistorychange)]|false|none|A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.|
|changesFiltered|boolean|false|none|If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.|
|id|string|false|none|ID of this change history event. This ID is unique across Google Analytics.|
|userActorEmail|string|false|none|Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.|

#### Enumerated Values

|Property|Value|
|---|---|
|actorType|ACTOR_TYPE_UNSPECIFIED|
|actorType|USER|
|actorType|SYSTEM|
|actorType|SUPPORT|

<h2 id="tocS_GoogleAnalyticsAdminV1betaConversionEvent">GoogleAnalyticsAdminV1betaConversionEvent</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaconversionevent"></a>
<a id="schema_GoogleAnalyticsAdminV1betaConversionEvent"></a>
<a id="tocSgoogleanalyticsadminv1betaconversionevent"></a>
<a id="tocsgoogleanalyticsadminv1betaconversionevent"></a>

```json
{
  "createTime": "string",
  "custom": true,
  "deletable": true,
  "eventName": "string",
  "name": "string"
}
```

A conversion event in a Google Analytics property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this conversion event was created in the property.|
|custom|boolean|false|read-only|Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.|
|deletable|boolean|false|read-only|Output only. If set, this event can currently be deleted with DeleteConversionEvent.|
|eventName|string|false|none|Immutable. The event name for this conversion event. Examples: 'click', 'purchase'|
|name|string|false|read-only|Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}|

<h2 id="tocS_GoogleAnalyticsAdminV1betaCustomDimension">GoogleAnalyticsAdminV1betaCustomDimension</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betacustomdimension"></a>
<a id="schema_GoogleAnalyticsAdminV1betaCustomDimension"></a>
<a id="tocSgoogleanalyticsadminv1betacustomdimension"></a>
<a id="tocsgoogleanalyticsadminv1betacustomdimension"></a>

```json
{
  "description": "string",
  "disallowAdsPersonalization": true,
  "displayName": "string",
  "name": "string",
  "parameterName": "string",
  "scope": "DIMENSION_SCOPE_UNSPECIFIED"
}
```

A definition for a CustomDimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description for this custom dimension. Max length of 150 characters.|
|disallowAdsPersonalization|boolean|false|none|Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.|
|displayName|string|false|none|Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.|
|name|string|false|read-only|Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension}|
|parameterName|string|false|none|Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.|
|scope|string|false|none|Required. Immutable. The scope of this dimension.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|DIMENSION_SCOPE_UNSPECIFIED|
|scope|EVENT|
|scope|USER|
|scope|ITEM|

<h2 id="tocS_GoogleAnalyticsAdminV1betaCustomMetric">GoogleAnalyticsAdminV1betaCustomMetric</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betacustommetric"></a>
<a id="schema_GoogleAnalyticsAdminV1betaCustomMetric"></a>
<a id="tocSgoogleanalyticsadminv1betacustommetric"></a>
<a id="tocsgoogleanalyticsadminv1betacustommetric"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "measurementUnit": "MEASUREMENT_UNIT_UNSPECIFIED",
  "name": "string",
  "parameterName": "string",
  "restrictedMetricType": [
    "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
  ],
  "scope": "METRIC_SCOPE_UNSPECIFIED"
}
```

A definition for a custom metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description for this custom dimension. Max length of 150 characters.|
|displayName|string|false|none|Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.|
|measurementUnit|string|false|none|Required. The type for the custom metric's value.|
|name|string|false|read-only|Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}|
|parameterName|string|false|none|Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.|
|restrictedMetricType|[string]|false|none|Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.|
|scope|string|false|none|Required. Immutable. The scope of this custom metric.|

#### Enumerated Values

|Property|Value|
|---|---|
|measurementUnit|MEASUREMENT_UNIT_UNSPECIFIED|
|measurementUnit|STANDARD|
|measurementUnit|CURRENCY|
|measurementUnit|FEET|
|measurementUnit|METERS|
|measurementUnit|KILOMETERS|
|measurementUnit|MILES|
|measurementUnit|MILLISECONDS|
|measurementUnit|SECONDS|
|measurementUnit|MINUTES|
|measurementUnit|HOURS|
|restrictedMetricType|RESTRICTED_METRIC_TYPE_UNSPECIFIED|
|restrictedMetricType|COST_DATA|
|restrictedMetricType|REVENUE_DATA|
|scope|METRIC_SCOPE_UNSPECIFIED|
|scope|EVENT|

<h2 id="tocS_GoogleAnalyticsAdminV1betaDataRetentionSettings">GoogleAnalyticsAdminV1betaDataRetentionSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betadataretentionsettings"></a>
<a id="schema_GoogleAnalyticsAdminV1betaDataRetentionSettings"></a>
<a id="tocSgoogleanalyticsadminv1betadataretentionsettings"></a>
<a id="tocsgoogleanalyticsadminv1betadataretentionsettings"></a>

```json
{
  "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
  "name": "string",
  "resetUserDataOnNewActivity": true
}
```

Settings values for data retention. This is a singleton resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventDataRetention|string|false|none|The length of time that event-level data is retained.|
|name|string|false|read-only|Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings|
|resetUserDataOnNewActivity|boolean|false|none|If true, reset the retention period for the user identifier with every event from that user.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventDataRetention|RETENTION_DURATION_UNSPECIFIED|
|eventDataRetention|TWO_MONTHS|
|eventDataRetention|FOURTEEN_MONTHS|
|eventDataRetention|TWENTY_SIX_MONTHS|
|eventDataRetention|THIRTY_EIGHT_MONTHS|
|eventDataRetention|FIFTY_MONTHS|

<h2 id="tocS_GoogleAnalyticsAdminV1betaDataSharingSettings">GoogleAnalyticsAdminV1betaDataSharingSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betadatasharingsettings"></a>
<a id="schema_GoogleAnalyticsAdminV1betaDataSharingSettings"></a>
<a id="tocSgoogleanalyticsadminv1betadatasharingsettings"></a>
<a id="tocsgoogleanalyticsadminv1betadatasharingsettings"></a>

```json
{
  "name": "string",
  "sharingWithGoogleAnySalesEnabled": true,
  "sharingWithGoogleAssignedSalesEnabled": true,
  "sharingWithGoogleProductsEnabled": true,
  "sharingWithGoogleSupportEnabled": true,
  "sharingWithOthersEnabled": true
}
```

A resource message representing data sharing settings of a Google Analytics account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"|
|sharingWithGoogleAnySalesEnabled|boolean|false|none|Allows any of Google sales to access the data in order to suggest configuration changes to improve results.|
|sharingWithGoogleAssignedSalesEnabled|boolean|false|none|Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled.|
|sharingWithGoogleProductsEnabled|boolean|false|none|Allows Google to use the data to improve other Google products or services.|
|sharingWithGoogleSupportEnabled|boolean|false|none|Allows Google support to access the data in order to help troubleshoot issues.|
|sharingWithOthersEnabled|boolean|false|none|Allows Google to share the data anonymously in aggregate form with others.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaDataStream">GoogleAnalyticsAdminV1betaDataStream</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betadatastream"></a>
<a id="schema_GoogleAnalyticsAdminV1betaDataStream"></a>
<a id="tocSgoogleanalyticsadminv1betadatastream"></a>
<a id="tocsgoogleanalyticsadminv1betadatastream"></a>

```json
{
  "androidAppStreamData": {
    "firebaseAppId": "string",
    "packageName": "string"
  },
  "createTime": "string",
  "displayName": "string",
  "iosAppStreamData": {
    "bundleId": "string",
    "firebaseAppId": "string"
  },
  "name": "string",
  "type": "DATA_STREAM_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "webStreamData": {
    "defaultUri": "string",
    "firebaseAppId": "string",
    "measurementId": "string"
  }
}
```

A resource message representing a data stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidAppStreamData|[GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData](#schemagoogleanalyticsadminv1betadatastreamandroidappstreamdata)|false|none|Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this stream was originally created.|
|displayName|string|false|none|Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.|
|iosAppStreamData|[GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData](#schemagoogleanalyticsadminv1betadatastreamiosappstreamdata)|false|none|Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.|
|name|string|false|read-only|Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"|
|type|string|false|none|Required. Immutable. The type of this DataStream resource.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when stream payload fields were last updated.|
|webStreamData|[GoogleAnalyticsAdminV1betaDataStreamWebStreamData](#schemagoogleanalyticsadminv1betadatastreamwebstreamdata)|false|none|Data specific to web streams. Must be populated if type is WEB_DATA_STREAM.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DATA_STREAM_TYPE_UNSPECIFIED|
|type|WEB_DATA_STREAM|
|type|ANDROID_APP_DATA_STREAM|
|type|IOS_APP_DATA_STREAM|

<h2 id="tocS_GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData">GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betadatastreamandroidappstreamdata"></a>
<a id="schema_GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData"></a>
<a id="tocSgoogleanalyticsadminv1betadatastreamandroidappstreamdata"></a>
<a id="tocsgoogleanalyticsadminv1betadatastreamandroidappstreamdata"></a>

```json
{
  "firebaseAppId": "string",
  "packageName": "string"
}
```

Data specific to Android app streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firebaseAppId|string|false|read-only|Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.|
|packageName|string|false|none|Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"|

<h2 id="tocS_GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData">GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betadatastreamiosappstreamdata"></a>
<a id="schema_GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData"></a>
<a id="tocSgoogleanalyticsadminv1betadatastreamiosappstreamdata"></a>
<a id="tocsgoogleanalyticsadminv1betadatastreamiosappstreamdata"></a>

```json
{
  "bundleId": "string",
  "firebaseAppId": "string"
}
```

Data specific to iOS app streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleId|string|false|none|Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"|
|firebaseAppId|string|false|read-only|Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaDataStreamWebStreamData">GoogleAnalyticsAdminV1betaDataStreamWebStreamData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betadatastreamwebstreamdata"></a>
<a id="schema_GoogleAnalyticsAdminV1betaDataStreamWebStreamData"></a>
<a id="tocSgoogleanalyticsadminv1betadatastreamwebstreamdata"></a>
<a id="tocsgoogleanalyticsadminv1betadatastreamwebstreamdata"></a>

```json
{
  "defaultUri": "string",
  "firebaseAppId": "string",
  "measurementId": "string"
}
```

Data specific to web streams.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultUri|string|false|none|Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"|
|firebaseAppId|string|false|read-only|Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.|
|measurementId|string|false|read-only|Output only. Analytics "Measurement ID", without the "G-" prefix. Example: "G-1A2BCD345E" would just be "1A2BCD345E"|

<h2 id="tocS_GoogleAnalyticsAdminV1betaFirebaseLink">GoogleAnalyticsAdminV1betaFirebaseLink</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betafirebaselink"></a>
<a id="schema_GoogleAnalyticsAdminV1betaFirebaseLink"></a>
<a id="tocSgoogleanalyticsadminv1betafirebaselink"></a>
<a id="tocsgoogleanalyticsadminv1betafirebaselink"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "project": "string"
}
```

A link between a GA4 property and a Firebase project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this FirebaseLink was originally created.|
|name|string|false|read-only|Output only. Example format: properties/1234/firebaseLinks/5678|
|project|string|false|none|Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'|

<h2 id="tocS_GoogleAnalyticsAdminV1betaGoogleAdsLink">GoogleAnalyticsAdminV1betaGoogleAdsLink</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betagoogleadslink"></a>
<a id="schema_GoogleAnalyticsAdminV1betaGoogleAdsLink"></a>
<a id="tocSgoogleanalyticsadminv1betagoogleadslink"></a>
<a id="tocsgoogleanalyticsadminv1betagoogleadslink"></a>

```json
{
  "adsPersonalizationEnabled": true,
  "canManageClients": true,
  "createTime": "string",
  "creatorEmailAddress": "string",
  "customerId": "string",
  "name": "string",
  "updateTime": "string"
}
```

A link between a GA4 property and a Google Ads account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adsPersonalizationEnabled|boolean|false|none|Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.|
|canManageClients|boolean|false|read-only|Output only. If true, this link is for a Google Ads manager account.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when this link was originally created.|
|creatorEmailAddress|string|false|read-only|Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.|
|customerId|string|false|none|Immutable. Google Ads customer ID.|
|name|string|false|read-only|Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when this link was last updated.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListAccountSummariesResponse">GoogleAnalyticsAdminV1betaListAccountSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistaccountsummariesresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListAccountSummariesResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistaccountsummariesresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistaccountsummariesresponse"></a>

```json
{
  "accountSummaries": [
    {
      "account": "string",
      "displayName": "string",
      "name": "string",
      "propertySummaries": [
        {
          "displayName": "string",
          "parent": "string",
          "property": "string",
          "propertyType": "PROPERTY_TYPE_UNSPECIFIED"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListAccountSummaries RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountSummaries|[[GoogleAnalyticsAdminV1betaAccountSummary](#schemagoogleanalyticsadminv1betaaccountsummary)]|false|none|Account summaries of all accounts the caller has access to.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListAccountsResponse">GoogleAnalyticsAdminV1betaListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistaccountsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListAccountsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistaccountsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistaccountsresponse"></a>

```json
{
  "accounts": [
    {
      "createTime": "string",
      "deleted": true,
      "displayName": "string",
      "name": "string",
      "regionCode": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Request message for ListAccounts RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[GoogleAnalyticsAdminV1betaAccount](#schemagoogleanalyticsadminv1betaaccount)]|false|none|Results that were accessible to the caller.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListConversionEventsResponse">GoogleAnalyticsAdminV1betaListConversionEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistconversioneventsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListConversionEventsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistconversioneventsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistconversioneventsresponse"></a>

```json
{
  "conversionEvents": [
    {
      "createTime": "string",
      "custom": true,
      "deletable": true,
      "eventName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListConversionEvents RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionEvents|[[GoogleAnalyticsAdminV1betaConversionEvent](#schemagoogleanalyticsadminv1betaconversionevent)]|false|none|The requested conversion events|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListCustomDimensionsResponse">GoogleAnalyticsAdminV1betaListCustomDimensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistcustomdimensionsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListCustomDimensionsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistcustomdimensionsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistcustomdimensionsresponse"></a>

```json
{
  "customDimensions": [
    {
      "description": "string",
      "disallowAdsPersonalization": true,
      "displayName": "string",
      "name": "string",
      "parameterName": "string",
      "scope": "DIMENSION_SCOPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListCustomDimensions RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDimensions|[[GoogleAnalyticsAdminV1betaCustomDimension](#schemagoogleanalyticsadminv1betacustomdimension)]|false|none|List of CustomDimensions.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListCustomMetricsResponse">GoogleAnalyticsAdminV1betaListCustomMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistcustommetricsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListCustomMetricsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistcustommetricsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistcustommetricsresponse"></a>

```json
{
  "customMetrics": [
    {
      "description": "string",
      "displayName": "string",
      "measurementUnit": "MEASUREMENT_UNIT_UNSPECIFIED",
      "name": "string",
      "parameterName": "string",
      "restrictedMetricType": [
        "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
      ],
      "scope": "METRIC_SCOPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListCustomMetrics RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customMetrics|[[GoogleAnalyticsAdminV1betaCustomMetric](#schemagoogleanalyticsadminv1betacustommetric)]|false|none|List of CustomMetrics.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListDataStreamsResponse">GoogleAnalyticsAdminV1betaListDataStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistdatastreamsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListDataStreamsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistdatastreamsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistdatastreamsresponse"></a>

```json
{
  "dataStreams": [
    {
      "androidAppStreamData": {
        "firebaseAppId": "string",
        "packageName": "string"
      },
      "createTime": "string",
      "displayName": "string",
      "iosAppStreamData": {
        "bundleId": "string",
        "firebaseAppId": "string"
      },
      "name": "string",
      "type": "DATA_STREAM_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "webStreamData": {
        "defaultUri": "string",
        "firebaseAppId": "string",
        "measurementId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListDataStreams RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataStreams|[[GoogleAnalyticsAdminV1betaDataStream](#schemagoogleanalyticsadminv1betadatastream)]|false|none|List of DataStreams.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListFirebaseLinksResponse">GoogleAnalyticsAdminV1betaListFirebaseLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistfirebaselinksresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListFirebaseLinksResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistfirebaselinksresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistfirebaselinksresponse"></a>

```json
{
  "firebaseLinks": [
    {
      "createTime": "string",
      "name": "string",
      "project": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListFirebaseLinks RPC

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firebaseLinks|[[GoogleAnalyticsAdminV1betaFirebaseLink](#schemagoogleanalyticsadminv1betafirebaselink)]|false|none|List of FirebaseLinks. This will have at most one value.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse">GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistgoogleadslinksresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistgoogleadslinksresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistgoogleadslinksresponse"></a>

```json
{
  "googleAdsLinks": [
    {
      "adsPersonalizationEnabled": true,
      "canManageClients": true,
      "createTime": "string",
      "creatorEmailAddress": "string",
      "customerId": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListGoogleAdsLinks RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleAdsLinks|[[GoogleAnalyticsAdminV1betaGoogleAdsLink](#schemagoogleanalyticsadminv1betagoogleadslink)]|false|none|List of GoogleAdsLinks.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse">GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistmeasurementprotocolsecretsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistmeasurementprotocolsecretsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistmeasurementprotocolsecretsresponse"></a>

```json
{
  "measurementProtocolSecrets": [
    {
      "displayName": "string",
      "name": "string",
      "secretValue": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListMeasurementProtocolSecret RPC

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measurementProtocolSecrets|[[GoogleAnalyticsAdminV1betaMeasurementProtocolSecret](#schemagoogleanalyticsadminv1betameasurementprotocolsecret)]|false|none|A list of secrets for the parent stream specified in the request.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaListPropertiesResponse">GoogleAnalyticsAdminV1betaListPropertiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betalistpropertiesresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaListPropertiesResponse"></a>
<a id="tocSgoogleanalyticsadminv1betalistpropertiesresponse"></a>
<a id="tocsgoogleanalyticsadminv1betalistpropertiesresponse"></a>

```json
{
  "nextPageToken": "string",
  "properties": [
    {
      "account": "string",
      "createTime": "string",
      "currencyCode": "string",
      "deleteTime": "string",
      "displayName": "string",
      "expireTime": "string",
      "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
      "name": "string",
      "parent": "string",
      "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
      "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
      "timeZone": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for ListProperties RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|properties|[[GoogleAnalyticsAdminV1betaProperty](#schemagoogleanalyticsadminv1betaproperty)]|false|none|Results that matched the filter criteria and were accessible to the caller.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaMeasurementProtocolSecret">GoogleAnalyticsAdminV1betaMeasurementProtocolSecret</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betameasurementprotocolsecret"></a>
<a id="schema_GoogleAnalyticsAdminV1betaMeasurementProtocolSecret"></a>
<a id="tocSgoogleanalyticsadminv1betameasurementprotocolsecret"></a>
<a id="tocsgoogleanalyticsadminv1betameasurementprotocolsecret"></a>

```json
{
  "displayName": "string",
  "name": "string",
  "secretValue": "string"
}
```

A secret value used for sending hits to Measurement Protocol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. Human-readable display name for this secret.|
|name|string|false|read-only|Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}|
|secretValue|string|false|read-only|Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaNumericValue">GoogleAnalyticsAdminV1betaNumericValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betanumericvalue"></a>
<a id="schema_GoogleAnalyticsAdminV1betaNumericValue"></a>
<a id="tocSgoogleanalyticsadminv1betanumericvalue"></a>
<a id="tocsgoogleanalyticsadminv1betanumericvalue"></a>

```json
{
  "doubleValue": 0,
  "int64Value": "string"
}
```

To represent a number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doubleValue|number(double)|false|none|Double value|
|int64Value|string(int64)|false|none|Integer value|

<h2 id="tocS_GoogleAnalyticsAdminV1betaProperty">GoogleAnalyticsAdminV1betaProperty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaproperty"></a>
<a id="schema_GoogleAnalyticsAdminV1betaProperty"></a>
<a id="tocSgoogleanalyticsadminv1betaproperty"></a>
<a id="tocsgoogleanalyticsadminv1betaproperty"></a>

```json
{
  "account": "string",
  "createTime": "string",
  "currencyCode": "string",
  "deleteTime": "string",
  "displayName": "string",
  "expireTime": "string",
  "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
  "name": "string",
  "parent": "string",
  "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
  "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
  "timeZone": "string",
  "updateTime": "string"
}
```

A resource message representing a Google Analytics GA4 property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123"|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the entity was originally created.|
|currencyCode|string|false|none|The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"|
|deleteTime|string(google-datetime)|false|read-only|Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.|
|displayName|string|false|none|Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.|
|expireTime|string(google-datetime)|false|read-only|Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.|
|industryCategory|string|false|none|Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK|
|name|string|false|read-only|Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"|
|parent|string|false|none|Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101"|
|propertyType|string|false|none|Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.|
|serviceLevel|string|false|read-only|Output only. The Google Analytics service level that applies to this property.|
|timeZone|string|false|none|Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when entity payload fields were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|industryCategory|INDUSTRY_CATEGORY_UNSPECIFIED|
|industryCategory|AUTOMOTIVE|
|industryCategory|BUSINESS_AND_INDUSTRIAL_MARKETS|
|industryCategory|FINANCE|
|industryCategory|HEALTHCARE|
|industryCategory|TECHNOLOGY|
|industryCategory|TRAVEL|
|industryCategory|OTHER|
|industryCategory|ARTS_AND_ENTERTAINMENT|
|industryCategory|BEAUTY_AND_FITNESS|
|industryCategory|BOOKS_AND_LITERATURE|
|industryCategory|FOOD_AND_DRINK|
|industryCategory|GAMES|
|industryCategory|HOBBIES_AND_LEISURE|
|industryCategory|HOME_AND_GARDEN|
|industryCategory|INTERNET_AND_TELECOM|
|industryCategory|LAW_AND_GOVERNMENT|
|industryCategory|NEWS|
|industryCategory|ONLINE_COMMUNITIES|
|industryCategory|PEOPLE_AND_SOCIETY|
|industryCategory|PETS_AND_ANIMALS|
|industryCategory|REAL_ESTATE|
|industryCategory|REFERENCE|
|industryCategory|SCIENCE|
|industryCategory|SPORTS|
|industryCategory|JOBS_AND_EDUCATION|
|industryCategory|SHOPPING|
|propertyType|PROPERTY_TYPE_UNSPECIFIED|
|propertyType|PROPERTY_TYPE_ORDINARY|
|propertyType|PROPERTY_TYPE_SUBPROPERTY|
|propertyType|PROPERTY_TYPE_ROLLUP|
|serviceLevel|SERVICE_LEVEL_UNSPECIFIED|
|serviceLevel|GOOGLE_ANALYTICS_STANDARD|
|serviceLevel|GOOGLE_ANALYTICS_360|

<h2 id="tocS_GoogleAnalyticsAdminV1betaPropertySummary">GoogleAnalyticsAdminV1betaPropertySummary</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betapropertysummary"></a>
<a id="schema_GoogleAnalyticsAdminV1betaPropertySummary"></a>
<a id="tocSgoogleanalyticsadminv1betapropertysummary"></a>
<a id="tocsgoogleanalyticsadminv1betapropertysummary"></a>

```json
{
  "displayName": "string",
  "parent": "string",
  "property": "string",
  "propertyType": "PROPERTY_TYPE_UNSPECIFIED"
}
```

A virtual resource representing metadata for a GA4 property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name for the property referred to in this property summary.|
|parent|string|false|none|Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200"|
|property|string|false|none|Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000"|
|propertyType|string|false|none|The property's property type.|

#### Enumerated Values

|Property|Value|
|---|---|
|propertyType|PROPERTY_TYPE_UNSPECIFIED|
|propertyType|PROPERTY_TYPE_ORDINARY|
|propertyType|PROPERTY_TYPE_SUBPROPERTY|
|propertyType|PROPERTY_TYPE_ROLLUP|

<h2 id="tocS_GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest">GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaprovisionaccountticketrequest"></a>
<a id="schema_GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest"></a>
<a id="tocSgoogleanalyticsadminv1betaprovisionaccountticketrequest"></a>
<a id="tocsgoogleanalyticsadminv1betaprovisionaccountticketrequest"></a>

```json
{
  "account": {
    "createTime": "string",
    "deleted": true,
    "displayName": "string",
    "name": "string",
    "regionCode": "string",
    "updateTime": "string"
  },
  "redirectUri": "string"
}
```

Request message for ProvisionAccountTicket RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[GoogleAnalyticsAdminV1betaAccount](#schemagoogleanalyticsadminv1betaaccount)|false|none|The account to create.|
|redirectUri|string|false|none|Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse">GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betaprovisionaccountticketresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse"></a>
<a id="tocSgoogleanalyticsadminv1betaprovisionaccountticketresponse"></a>
<a id="tocsgoogleanalyticsadminv1betaprovisionaccountticketresponse"></a>

```json
{
  "accountTicketId": "string"
}
```

Response message for ProvisionAccountTicket RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountTicketId|string|false|none|The param to be passed in the ToS link.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaRunAccessReportRequest">GoogleAnalyticsAdminV1betaRunAccessReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betarunaccessreportrequest"></a>
<a id="schema_GoogleAnalyticsAdminV1betaRunAccessReportRequest"></a>
<a id="tocSgoogleanalyticsadminv1betarunaccessreportrequest"></a>
<a id="tocsgoogleanalyticsadminv1betarunaccessreportrequest"></a>

```json
{
  "dateRanges": [
    {
      "endDate": "string",
      "startDate": "string"
    }
  ],
  "dimensionFilter": {
    "accessFilter": {
      "betweenFilter": {
        "fromValue": {
          "doubleValue": 0,
          "int64Value": "string"
        },
        "toValue": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "fieldName": "string",
      "inListFilter": {
        "caseSensitive": true,
        "values": [
          "string"
        ]
      },
      "numericFilter": {
        "operation": "OPERATION_UNSPECIFIED",
        "value": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "stringFilter": {
        "caseSensitive": true,
        "matchType": "MATCH_TYPE_UNSPECIFIED",
        "value": "string"
      }
    },
    "andGroup": {},
    "notExpression": {},
    "orGroup": {}
  },
  "dimensions": [
    {
      "dimensionName": "string"
    }
  ],
  "limit": "string",
  "metricFilter": {
    "accessFilter": {
      "betweenFilter": {
        "fromValue": {
          "doubleValue": 0,
          "int64Value": "string"
        },
        "toValue": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "fieldName": "string",
      "inListFilter": {
        "caseSensitive": true,
        "values": [
          "string"
        ]
      },
      "numericFilter": {
        "operation": "OPERATION_UNSPECIFIED",
        "value": {
          "doubleValue": 0,
          "int64Value": "string"
        }
      },
      "stringFilter": {
        "caseSensitive": true,
        "matchType": "MATCH_TYPE_UNSPECIFIED",
        "value": "string"
      }
    },
    "andGroup": {},
    "notExpression": {},
    "orGroup": {}
  },
  "metrics": [
    {
      "metricName": "string"
    }
  ],
  "offset": "string",
  "orderBys": [
    {
      "desc": true,
      "dimension": {
        "dimensionName": "string",
        "orderType": "ORDER_TYPE_UNSPECIFIED"
      },
      "metric": {
        "metricName": "string"
      }
    }
  ],
  "returnEntityQuota": true,
  "timeZone": "string"
}
```

The request for a Data Access Record Report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRanges|[[GoogleAnalyticsAdminV1betaAccessDateRange](#schemagoogleanalyticsadminv1betaaccessdaterange)]|false|none|Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges.|
|dimensionFilter|[GoogleAnalyticsAdminV1betaAccessFilterExpression](#schemagoogleanalyticsadminv1betaaccessfilterexpression)|false|none|Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter.|
|dimensions|[[GoogleAnalyticsAdminV1betaAccessDimension](#schemagoogleanalyticsadminv1betaaccessdimension)]|false|none|The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions.|
|limit|string(int64)|false|none|The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).|
|metricFilter|[GoogleAnalyticsAdminV1betaAccessFilterExpression](#schemagoogleanalyticsadminv1betaaccessfilterexpression)|false|none|Metric filters allow you to restrict report response to specific metric values which match the filter. Metric filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.|
|metrics|[[GoogleAnalyticsAdminV1betaAccessMetric](#schemagoogleanalyticsadminv1betaaccessmetric)]|false|none|The metrics requested and displayed in the response. Requests are allowed up to 10 metrics.|
|offset|string(int64)|false|none|The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).|
|orderBys|[[GoogleAnalyticsAdminV1betaAccessOrderBy](#schemagoogleanalyticsadminv1betaaccessorderby)]|false|none|Specifies how rows are ordered in the response.|
|returnEntityQuota|boolean|false|none|Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false.|
|timeZone|string|false|none|This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".|

<h2 id="tocS_GoogleAnalyticsAdminV1betaRunAccessReportResponse">GoogleAnalyticsAdminV1betaRunAccessReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betarunaccessreportresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaRunAccessReportResponse"></a>
<a id="tocSgoogleanalyticsadminv1betarunaccessreportresponse"></a>
<a id="tocsgoogleanalyticsadminv1betarunaccessreportresponse"></a>

```json
{
  "dimensionHeaders": [
    {
      "dimensionName": "string"
    }
  ],
  "metricHeaders": [
    {
      "metricName": "string"
    }
  ],
  "quota": {
    "concurrentRequests": {
      "consumed": 0,
      "remaining": 0
    },
    "serverErrorsPerProjectPerHour": {
      "consumed": 0,
      "remaining": 0
    },
    "tokensPerDay": {
      "consumed": 0,
      "remaining": 0
    },
    "tokensPerHour": {
      "consumed": 0,
      "remaining": 0
    },
    "tokensPerProjectPerHour": {
      "consumed": 0,
      "remaining": 0
    }
  },
  "rowCount": 0,
  "rows": [
    {
      "dimensionValues": [
        {
          "value": "string"
        }
      ],
      "metricValues": [
        {
          "value": "string"
        }
      ]
    }
  ]
}
```

The customized Data Access Record Report response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionHeaders|[[GoogleAnalyticsAdminV1betaAccessDimensionHeader](#schemagoogleanalyticsadminv1betaaccessdimensionheader)]|false|none|The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.|
|metricHeaders|[[GoogleAnalyticsAdminV1betaAccessMetricHeader](#schemagoogleanalyticsadminv1betaaccessmetricheader)]|false|none|The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.|
|quota|[GoogleAnalyticsAdminV1betaAccessQuota](#schemagoogleanalyticsadminv1betaaccessquota)|false|none|The quota state for this Analytics property including this request. This field doesn't work with account-level requests.|
|rowCount|integer(int32)|false|none|The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).|
|rows|[[GoogleAnalyticsAdminV1betaAccessRow](#schemagoogleanalyticsadminv1betaaccessrow)]|false|none|Rows of dimension value combinations and metric values in the report.|

<h2 id="tocS_GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest">GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betasearchchangehistoryeventsrequest"></a>
<a id="schema_GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest"></a>
<a id="tocSgoogleanalyticsadminv1betasearchchangehistoryeventsrequest"></a>
<a id="tocsgoogleanalyticsadminv1betasearchchangehistoryeventsrequest"></a>

```json
{
  "action": [
    "ACTION_TYPE_UNSPECIFIED"
  ],
  "actorEmail": [
    "string"
  ],
  "earliestChangeTime": "string",
  "latestChangeTime": "string",
  "pageSize": 0,
  "pageToken": "string",
  "property": "string",
  "resourceType": [
    "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
  ]
}
```

Request message for SearchChangeHistoryEvents RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[string]|false|none|Optional. If set, only return changes that match one or more of these types of actions.|
|actorEmail|[string]|false|none|Optional. If set, only return changes if they are made by a user in this list.|
|earliestChangeTime|string(google-datetime)|false|none|Optional. If set, only return changes made after this time (inclusive).|
|latestChangeTime|string(google-datetime)|false|none|Optional. If set, only return changes made before this time (inclusive).|
|pageSize|integer(int32)|false|none|Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).|
|pageToken|string|false|none|Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.|
|property|string|false|none|Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.|
|resourceType|[string]|false|none|Optional. If set, only return changes if they are for a resource that matches at least one of these types.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_TYPE_UNSPECIFIED|
|action|CREATED|
|action|UPDATED|
|action|DELETED|
|resourceType|CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED|
|resourceType|ACCOUNT|
|resourceType|PROPERTY|
|resourceType|FIREBASE_LINK|
|resourceType|GOOGLE_ADS_LINK|
|resourceType|GOOGLE_SIGNALS_SETTINGS|
|resourceType|CONVERSION_EVENT|
|resourceType|MEASUREMENT_PROTOCOL_SECRET|
|resourceType|DATA_RETENTION_SETTINGS|
|resourceType|DISPLAY_VIDEO_360_ADVERTISER_LINK|
|resourceType|DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL|
|resourceType|DATA_STREAM|
|resourceType|ATTRIBUTION_SETTINGS|

<h2 id="tocS_GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse">GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsadminv1betasearchchangehistoryeventsresponse"></a>
<a id="schema_GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse"></a>
<a id="tocSgoogleanalyticsadminv1betasearchchangehistoryeventsresponse"></a>
<a id="tocsgoogleanalyticsadminv1betasearchchangehistoryeventsresponse"></a>

```json
{
  "changeHistoryEvents": [
    {
      "actorType": "ACTOR_TYPE_UNSPECIFIED",
      "changeTime": "string",
      "changes": [
        {
          "action": "ACTION_TYPE_UNSPECIFIED",
          "resource": "string",
          "resourceAfterChange": {
            "account": {
              "createTime": "string",
              "deleted": true,
              "displayName": "string",
              "name": "string",
              "regionCode": "string",
              "updateTime": "string"
            },
            "conversionEvent": {
              "createTime": "string",
              "custom": true,
              "deletable": true,
              "eventName": "string",
              "name": "string"
            },
            "dataRetentionSettings": {
              "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
              "name": "string",
              "resetUserDataOnNewActivity": true
            },
            "dataStream": {
              "androidAppStreamData": {
                "firebaseAppId": "string",
                "packageName": "string"
              },
              "createTime": "string",
              "displayName": "string",
              "iosAppStreamData": {
                "bundleId": "string",
                "firebaseAppId": "string"
              },
              "name": "string",
              "type": "DATA_STREAM_TYPE_UNSPECIFIED",
              "updateTime": "string",
              "webStreamData": {
                "defaultUri": "string",
                "firebaseAppId": "string",
                "measurementId": "string"
              }
            },
            "firebaseLink": {
              "createTime": "string",
              "name": "string",
              "project": "string"
            },
            "googleAdsLink": {
              "adsPersonalizationEnabled": true,
              "canManageClients": true,
              "createTime": "string",
              "creatorEmailAddress": "string",
              "customerId": "string",
              "name": "string",
              "updateTime": "string"
            },
            "measurementProtocolSecret": {
              "displayName": "string",
              "name": "string",
              "secretValue": "string"
            },
            "property": {
              "account": "string",
              "createTime": "string",
              "currencyCode": "string",
              "deleteTime": "string",
              "displayName": "string",
              "expireTime": "string",
              "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
              "name": "string",
              "parent": "string",
              "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
              "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
              "timeZone": "string",
              "updateTime": "string"
            }
          },
          "resourceBeforeChange": {
            "account": {
              "createTime": "string",
              "deleted": true,
              "displayName": "string",
              "name": "string",
              "regionCode": "string",
              "updateTime": "string"
            },
            "conversionEvent": {
              "createTime": "string",
              "custom": true,
              "deletable": true,
              "eventName": "string",
              "name": "string"
            },
            "dataRetentionSettings": {
              "eventDataRetention": "RETENTION_DURATION_UNSPECIFIED",
              "name": "string",
              "resetUserDataOnNewActivity": true
            },
            "dataStream": {
              "androidAppStreamData": {
                "firebaseAppId": "string",
                "packageName": "string"
              },
              "createTime": "string",
              "displayName": "string",
              "iosAppStreamData": {
                "bundleId": "string",
                "firebaseAppId": "string"
              },
              "name": "string",
              "type": "DATA_STREAM_TYPE_UNSPECIFIED",
              "updateTime": "string",
              "webStreamData": {
                "defaultUri": "string",
                "firebaseAppId": "string",
                "measurementId": "string"
              }
            },
            "firebaseLink": {
              "createTime": "string",
              "name": "string",
              "project": "string"
            },
            "googleAdsLink": {
              "adsPersonalizationEnabled": true,
              "canManageClients": true,
              "createTime": "string",
              "creatorEmailAddress": "string",
              "customerId": "string",
              "name": "string",
              "updateTime": "string"
            },
            "measurementProtocolSecret": {
              "displayName": "string",
              "name": "string",
              "secretValue": "string"
            },
            "property": {
              "account": "string",
              "createTime": "string",
              "currencyCode": "string",
              "deleteTime": "string",
              "displayName": "string",
              "expireTime": "string",
              "industryCategory": "INDUSTRY_CATEGORY_UNSPECIFIED",
              "name": "string",
              "parent": "string",
              "propertyType": "PROPERTY_TYPE_UNSPECIFIED",
              "serviceLevel": "SERVICE_LEVEL_UNSPECIFIED",
              "timeZone": "string",
              "updateTime": "string"
            }
          }
        }
      ],
      "changesFiltered": true,
      "id": "string",
      "userActorEmail": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for SearchAccounts RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeHistoryEvents|[[GoogleAnalyticsAdminV1betaChangeHistoryEvent](#schemagoogleanalyticsadminv1betachangehistoryevent)]|false|none|Results that were accessible to the caller.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
