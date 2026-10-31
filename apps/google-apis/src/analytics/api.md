<h1 id="google-analytics-api">Google Analytics API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Views and manages your Google Analytics data.

Base URLs:

* <a href="https://analytics.googleapis.com/analytics/v3">https://analytics.googleapis.com/analytics/v3</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/analytics/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/analytics|View and manage your Google Analytics data|
|https://www.googleapis.com/auth/analytics.edit|Edit Google Analytics management entities|
|https://www.googleapis.com/auth/analytics.manage.users|Manage Google Analytics Account users by email address|
|https://www.googleapis.com/auth/analytics.manage.users.readonly|View Google Analytics user permissions|
|https://www.googleapis.com/auth/analytics.provision|Create a new Google Analytics account along with its default property and view|
|https://www.googleapis.com/auth/analytics.readonly|View your Google Analytics data|
|https://www.googleapis.com/auth/analytics.user.deletion|Manage Google Analytics user deletion requests|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/analytics|View and manage your Google Analytics data|
|https://www.googleapis.com/auth/analytics.edit|Edit Google Analytics management entities|
|https://www.googleapis.com/auth/analytics.manage.users|Manage Google Analytics Account users by email address|
|https://www.googleapis.com/auth/analytics.manage.users.readonly|View Google Analytics user permissions|
|https://www.googleapis.com/auth/analytics.provision|Create a new Google Analytics account along with its default property and view|
|https://www.googleapis.com/auth/analytics.readonly|View your Google Analytics data|
|https://www.googleapis.com/auth/analytics.user.deletion|Manage Google Analytics user deletion requests|

<h1 id="google-analytics-api-data">data</h1>

## analytics.data.ga.get

<a id="opIdanalytics.data.ga.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/data/ga?ids=string&start-date=string&end-date=string&metrics=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /data/ga`

Returns Analytics data for a view (profile).

<h3 id="analyticsdatagaget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.|
|start-date|query|string|true|Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.|
|end-date|query|string|true|End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.|
|metrics|query|string|true|A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.|
|dimensions|query|string|false|A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.|
|filters|query|string|false|A comma-separated list of dimension or metric filters to be applied to Analytics data.|
|include-empty-rows|query|boolean|false|The response will include empty rows if this parameter is set to true, the default is true|
|max-results|query|integer|false|The maximum number of entries to include in this feed.|
|output|query|string|false|The selected format for the response. Default format is JSON.|
|samplingLevel|query|string|false|The desired sampling level.|
|segment|query|string|false|An Analytics segment to be applied to data.|
|sort|query|string|false|A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|output|dataTable|
|output|json|
|samplingLevel|DEFAULT|
|samplingLevel|FASTER|
|samplingLevel|HIGHER_PRECISION|
|alt|json|

> Example responses

> 200 Response

```json
{
  "columnHeaders": [
    {
      "columnType": "string",
      "dataType": "string",
      "name": "string"
    }
  ],
  "containsSampledData": true,
  "dataLastRefreshed": "string",
  "dataTable": {
    "cols": [
      {
        "id": "string",
        "label": "string",
        "type": "string"
      }
    ],
    "rows": [
      {
        "c": [
          {
            "v": "string"
          }
        ]
      }
    ]
  },
  "id": "string",
  "itemsPerPage": 0,
  "kind": "analytics#gaData",
  "nextLink": "string",
  "previousLink": "string",
  "profileInfo": {
    "accountId": "string",
    "internalWebPropertyId": "string",
    "profileId": "string",
    "profileName": "string",
    "tableId": "string",
    "webPropertyId": "string"
  },
  "query": {
    "dimensions": "string",
    "end-date": "string",
    "filters": "string",
    "ids": "string",
    "max-results": 0,
    "metrics": [
      "string"
    ],
    "samplingLevel": "string",
    "segment": "string",
    "sort": [
      "string"
    ],
    "start-date": "string",
    "start-index": 0
  },
  "rows": [
    [
      "string"
    ]
  ],
  "sampleSize": "string",
  "sampleSpace": "string",
  "selfLink": "string",
  "totalResults": 0,
  "totalsForAllResults": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="analyticsdatagaget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GaData](#schemagadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.data.mcf.get

<a id="opIdanalytics.data.mcf.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/data/mcf?ids=string&start-date=string&end-date=string&metrics=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /data/mcf`

Returns Analytics Multi-Channel Funnels data for a view (profile).

<h3 id="analyticsdatamcfget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.|
|start-date|query|string|true|Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.|
|end-date|query|string|true|End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.|
|metrics|query|string|true|A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.|
|dimensions|query|string|false|A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.|
|filters|query|string|false|A comma-separated list of dimension or metric filters to be applied to the Analytics data.|
|max-results|query|integer|false|The maximum number of entries to include in this feed.|
|samplingLevel|query|string|false|The desired sampling level.|
|sort|query|string|false|A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|samplingLevel|DEFAULT|
|samplingLevel|FASTER|
|samplingLevel|HIGHER_PRECISION|
|alt|json|

> Example responses

> 200 Response

```json
{
  "columnHeaders": [
    {
      "columnType": "string",
      "dataType": "string",
      "name": "string"
    }
  ],
  "containsSampledData": true,
  "id": "string",
  "itemsPerPage": 0,
  "kind": "analytics#mcfData",
  "nextLink": "string",
  "previousLink": "string",
  "profileInfo": {
    "accountId": "string",
    "internalWebPropertyId": "string",
    "profileId": "string",
    "profileName": "string",
    "tableId": "string",
    "webPropertyId": "string"
  },
  "query": {
    "dimensions": "string",
    "end-date": "string",
    "filters": "string",
    "ids": "string",
    "max-results": 0,
    "metrics": [
      "string"
    ],
    "samplingLevel": "string",
    "segment": "string",
    "sort": [
      "string"
    ],
    "start-date": "string",
    "start-index": 0
  },
  "rows": [
    [
      {
        "conversionPathValue": [
          {
            "interactionType": "string",
            "nodeValue": "string"
          }
        ],
        "primitiveValue": "string"
      }
    ]
  ],
  "sampleSize": "string",
  "sampleSpace": "string",
  "selfLink": "string",
  "totalResults": 0,
  "totalsForAllResults": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="analyticsdatamcfget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[McfData](#schemamcfdata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.data.realtime.get

<a id="opIdanalytics.data.realtime.get"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/data/realtime?ids=string&metrics=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /data/realtime`

Returns real time data for a view (profile).

<h3 id="analyticsdatarealtimeget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.|
|metrics|query|string|true|A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.|
|dimensions|query|string|false|A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.|
|filters|query|string|false|A comma-separated list of dimension or metric filters to be applied to real time data.|
|max-results|query|integer|false|The maximum number of entries to include in this feed.|
|sort|query|string|false|A comma-separated list of dimensions or metrics that determine the sort order for real time data.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "columnHeaders": [
    {
      "columnType": "string",
      "dataType": "string",
      "name": "string"
    }
  ],
  "id": "string",
  "kind": "analytics#realtimeData",
  "profileInfo": {
    "accountId": "string",
    "internalWebPropertyId": "string",
    "profileId": "string",
    "profileName": "string",
    "tableId": "string",
    "webPropertyId": "string"
  },
  "query": {
    "dimensions": "string",
    "filters": "string",
    "ids": "string",
    "max-results": 0,
    "metrics": [
      "string"
    ],
    "sort": [
      "string"
    ]
  },
  "rows": [
    [
      "string"
    ]
  ],
  "selfLink": "string",
  "totalResults": 0,
  "totalsForAllResults": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="analyticsdatarealtimeget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RealtimeData](#schemarealtimedata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

<h1 id="google-analytics-api-management">management</h1>

## analytics.management.accountSummaries.list

<a id="opIdanalytics.management.accountSummaries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accountSummaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accountSummaries`

Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.

<h3 id="analyticsmanagementaccountsummarieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-results|query|integer|false|The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "kind": "analytics#accountSummary",
      "name": "string",
      "starred": true,
      "webProperties": [
        {
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertySummary",
          "level": "string",
          "name": "string",
          "profiles": [
            {
              "id": "string",
              "kind": "analytics#profileSummary",
              "name": "string",
              "starred": true,
              "type": "string"
            }
          ],
          "starred": true,
          "websiteUrl": "string"
        }
      ]
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#accountSummaries",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementaccountsummarieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountSummaries](#schemaaccountsummaries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.accounts.list

<a id="opIdanalytics.management.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts`

Lists all accounts to which the user has access.

<h3 id="analyticsmanagementaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-results|query|integer|false|The maximum number of accounts to include in this response.|
|start-index|query|integer|false|An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "childLink": {
        "href": "string",
        "type": "analytics#webproperties"
      },
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "analytics#account",
      "name": "string",
      "permissions": {
        "effective": [
          "string"
        ]
      },
      "selfLink": "string",
      "starred": true,
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#accounts",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Accounts](#schemaaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.accountUserLinks.list

<a id="opIdanalytics.management.accountUserLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/entityUserLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/entityUserLinks`

Lists account-user links for a given account.

<h3 id="analyticsmanagementaccountuserlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve the user links for.|
|max-results|query|integer|false|The maximum number of account-user links to include in this response.|
|start-index|query|integer|false|An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "entity": {
        "accountRef": {
          "href": "string",
          "id": "string",
          "kind": "analytics#accountRef",
          "name": "string"
        },
        "profileRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#profileRef",
          "name": "string",
          "webPropertyId": "string"
        },
        "webPropertyRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertyRef",
          "name": "string"
        }
      },
      "id": "string",
      "kind": "analytics#entityUserLink",
      "permissions": {
        "effective": [
          "string"
        ],
        "local": [
          "string"
        ]
      },
      "selfLink": "string",
      "userRef": {
        "email": "string",
        "id": "string",
        "kind": "analytics#userRef"
      }
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#entityUserLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

<h3 id="analyticsmanagementaccountuserlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLinks](#schemaentityuserlinks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users.readonly )
</aside>

## analytics.management.accountUserLinks.insert

<a id="opIdanalytics.management.accountUserLinks.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/entityUserLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entity": {
      "accountRef": {
        "href": "string",
        "id": "string",
        "kind": "analytics#accountRef",
        "name": "string"
      },
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityUserLink",
    "permissions": {
      "local": [
        "string"
      ]
    },
    "selfLink": "string",
    "userRef": {
      "email": "string",
      "id": "string",
      "kind": "analytics#userRef"
    }
  }'
```

`POST /management/accounts/{accountId}/entityUserLinks`

Adds a new user to the given account.

> Body parameter

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementaccountuserlinksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the user link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityUserLink](#schemaentityuserlink)|false|none|
|» entity|body|object|false|Entity for this link. It can be an account, a web property, or a view (profile).|
|» » accountRef|body|[AccountRef](#schemaaccountref)|false|Account for this link.|
|» » profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|Web property for this link.|
|» id|body|string|false|Entity user link ID|
|» kind|body|string|false|Resource type for entity user link.|
|» permissions|body|object|false|Permissions the user has for this entity.|
|» » local|body|[string]|false|Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.|
|» selfLink|body|string|false|Self link for this resource.|
|» userRef|body|[UserRef](#schemauserref)|false|User reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementaccountuserlinksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLink](#schemaentityuserlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.accountUserLinks.update

<a id="opIdanalytics.management.accountUserLinks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/entityUserLinks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entity": {
      "accountRef": {
        "href": "string",
        "id": "string",
        "kind": "analytics#accountRef",
        "name": "string"
      },
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityUserLink",
    "permissions": {
      "local": [
        "string"
      ]
    },
    "selfLink": "string",
    "userRef": {
      "email": "string",
      "id": "string",
      "kind": "analytics#userRef"
    }
  }'
```

`PUT /management/accounts/{accountId}/entityUserLinks/{linkId}`

Updates permissions for an existing user on the given account.

> Body parameter

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementaccountuserlinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to update the account-user link for.|
|linkId|path|string|true|Link ID to update the account-user link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityUserLink](#schemaentityuserlink)|false|none|
|» entity|body|object|false|Entity for this link. It can be an account, a web property, or a view (profile).|
|» » accountRef|body|[AccountRef](#schemaaccountref)|false|Account for this link.|
|» » profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|Web property for this link.|
|» id|body|string|false|Entity user link ID|
|» kind|body|string|false|Resource type for entity user link.|
|» permissions|body|object|false|Permissions the user has for this entity.|
|» » local|body|[string]|false|Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.|
|» selfLink|body|string|false|Self link for this resource.|
|» userRef|body|[UserRef](#schemauserref)|false|User reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementaccountuserlinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLink](#schemaentityuserlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.accountUserLinks.delete

<a id="opIdanalytics.management.accountUserLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/entityUserLinks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/entityUserLinks/{linkId}`

Removes a user from the given account.

<h3 id="analyticsmanagementaccountuserlinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to delete the user link for.|
|linkId|path|string|true|Link ID to delete the user link for.|
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
|alt|json|

<h3 id="analyticsmanagementaccountuserlinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.filters.list

<a id="opIdanalytics.management.filters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/filters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/filters`

Lists all filters for an account

<h3 id="analyticsmanagementfilterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve filters for.|
|max-results|query|integer|false|The maximum number of filters to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "advancedDetails": {
        "caseSensitive": true,
        "extractA": "string",
        "extractB": "string",
        "fieldA": "string",
        "fieldAIndex": 0,
        "fieldARequired": true,
        "fieldB": "string",
        "fieldBIndex": 0,
        "fieldBRequired": true,
        "outputConstructor": "string",
        "outputToField": "string",
        "outputToFieldIndex": 0,
        "overrideOutputField": true
      },
      "created": "1970-01-01T00:00:00Z",
      "excludeDetails": {
        "caseSensitive": true,
        "expressionValue": "string",
        "field": "string",
        "fieldIndex": 0,
        "kind": "analytics#filterExpression",
        "matchType": "string"
      },
      "id": "string",
      "includeDetails": {
        "caseSensitive": true,
        "expressionValue": "string",
        "field": "string",
        "fieldIndex": 0,
        "kind": "analytics#filterExpression",
        "matchType": "string"
      },
      "kind": "analytics#filter",
      "lowercaseDetails": {
        "field": "string",
        "fieldIndex": 0
      },
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#account"
      },
      "searchAndReplaceDetails": {
        "caseSensitive": true,
        "field": "string",
        "fieldIndex": 0,
        "replaceString": "string",
        "searchString": "string"
      },
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "uppercaseDetails": {
        "field": "string",
        "fieldIndex": 0
      }
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#filters",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementfilterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filters](#schemafilters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.filters.insert

<a id="opIdanalytics.management.filters.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/filters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "advancedDetails": {
      "caseSensitive": true,
      "extractA": "string",
      "extractB": "string",
      "fieldA": "string",
      "fieldAIndex": 0,
      "fieldARequired": true,
      "fieldB": "string",
      "fieldBIndex": 0,
      "fieldBRequired": true,
      "outputConstructor": "string",
      "outputToField": "string",
      "outputToFieldIndex": 0,
      "overrideOutputField": true
    },
    "excludeDetails": {
      "caseSensitive": true,
      "expressionValue": "string",
      "field": "string",
      "fieldIndex": 0,
      "kind": "analytics#filterExpression",
      "matchType": "string"
    },
    "id": "string",
    "includeDetails": {
      "caseSensitive": true,
      "expressionValue": "string",
      "field": "string",
      "fieldIndex": 0,
      "kind": "analytics#filterExpression",
      "matchType": "string"
    },
    "lowercaseDetails": {
      "field": "string",
      "fieldIndex": 0
    },
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "searchAndReplaceDetails": {
      "caseSensitive": true,
      "field": "string",
      "fieldIndex": 0,
      "replaceString": "string",
      "searchString": "string"
    },
    "type": "string",
    "uppercaseDetails": {
      "field": "string",
      "fieldIndex": 0
    }
  }'
```

`POST /management/accounts/{accountId}/filters`

Create a new filter.

> Body parameter

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "type": "string",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfiltersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create filter for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Filter](#schemafilter)|false|none|
|» accountId|body|string|false|Account ID to which this filter belongs.|
|» advancedDetails|body|object|false|Details for the filter of the type ADVANCED.|
|» » caseSensitive|body|boolean|false|Indicates if the filter expressions are case sensitive.|
|» » extractA|body|string|false|Expression to extract from field A.|
|» » extractB|body|string|false|Expression to extract from field B.|
|» » fieldA|body|string|false|Field A.|
|» » fieldAIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » fieldARequired|body|boolean|false|Indicates if field A is required to match.|
|» » fieldB|body|string|false|Field B.|
|» » fieldBIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » fieldBRequired|body|boolean|false|Indicates if field B is required to match.|
|» » outputConstructor|body|string|false|Expression used to construct the output value.|
|» » outputToField|body|string|false|Output field.|
|» » outputToFieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » overrideOutputField|body|boolean|false|Indicates if the existing value of the output field, if any, should be overridden by the output expression.|
|» excludeDetails|body|[FilterExpression](#schemafilterexpression)|false|Details for the filter of the type EXCLUDE.|
|» id|body|string|false|Filter ID.|
|» includeDetails|body|[FilterExpression](#schemafilterexpression)|false|Details for the filter of the type INCLUDE.|
|» lowercaseDetails|body|object|false|Details for the filter of the type LOWER.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» name|body|string|false|Name of this filter.|
|» parentLink|body|object|false|Parent link for this filter. Points to the account to which this filter belongs.|
|» » href|body|string|false|Link to the account to which this filter belongs.|
|» » type|body|string|false|Value is "analytics#account".|
|» searchAndReplaceDetails|body|object|false|Details for the filter of the type SEARCH_AND_REPLACE.|
|» » caseSensitive|body|boolean|false|Determines if the filter is case sensitive.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » replaceString|body|string|false|Term to replace the search term with.|
|» » searchString|body|string|false|Term to search.|
|» type|body|string|false|Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.|
|» uppercaseDetails|body|object|false|Details for the filter of the type UPPER.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "created": "1970-01-01T00:00:00Z",
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "kind": "analytics#filter",
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfiltersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.filters.get

<a id="opIdanalytics.management.filters.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/filters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/filters/{filterId}`

Returns filters to which the user has access.

<h3 id="analyticsmanagementfiltersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve filters for.|
|filterId|path|string|true|Filter ID to retrieve filters for.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "created": "1970-01-01T00:00:00Z",
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "kind": "analytics#filter",
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfiltersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.filters.update

<a id="opIdanalytics.management.filters.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/filters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "advancedDetails": {
      "caseSensitive": true,
      "extractA": "string",
      "extractB": "string",
      "fieldA": "string",
      "fieldAIndex": 0,
      "fieldARequired": true,
      "fieldB": "string",
      "fieldBIndex": 0,
      "fieldBRequired": true,
      "outputConstructor": "string",
      "outputToField": "string",
      "outputToFieldIndex": 0,
      "overrideOutputField": true
    },
    "excludeDetails": {
      "caseSensitive": true,
      "expressionValue": "string",
      "field": "string",
      "fieldIndex": 0,
      "kind": "analytics#filterExpression",
      "matchType": "string"
    },
    "id": "string",
    "includeDetails": {
      "caseSensitive": true,
      "expressionValue": "string",
      "field": "string",
      "fieldIndex": 0,
      "kind": "analytics#filterExpression",
      "matchType": "string"
    },
    "lowercaseDetails": {
      "field": "string",
      "fieldIndex": 0
    },
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "searchAndReplaceDetails": {
      "caseSensitive": true,
      "field": "string",
      "fieldIndex": 0,
      "replaceString": "string",
      "searchString": "string"
    },
    "type": "string",
    "uppercaseDetails": {
      "field": "string",
      "fieldIndex": 0
    }
  }'
```

`PUT /management/accounts/{accountId}/filters/{filterId}`

Updates an existing filter.

> Body parameter

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "type": "string",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfiltersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the filter belongs.|
|filterId|path|string|true|ID of the filter to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Filter](#schemafilter)|false|none|
|» accountId|body|string|false|Account ID to which this filter belongs.|
|» advancedDetails|body|object|false|Details for the filter of the type ADVANCED.|
|» » caseSensitive|body|boolean|false|Indicates if the filter expressions are case sensitive.|
|» » extractA|body|string|false|Expression to extract from field A.|
|» » extractB|body|string|false|Expression to extract from field B.|
|» » fieldA|body|string|false|Field A.|
|» » fieldAIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » fieldARequired|body|boolean|false|Indicates if field A is required to match.|
|» » fieldB|body|string|false|Field B.|
|» » fieldBIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » fieldBRequired|body|boolean|false|Indicates if field B is required to match.|
|» » outputConstructor|body|string|false|Expression used to construct the output value.|
|» » outputToField|body|string|false|Output field.|
|» » outputToFieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » overrideOutputField|body|boolean|false|Indicates if the existing value of the output field, if any, should be overridden by the output expression.|
|» excludeDetails|body|[FilterExpression](#schemafilterexpression)|false|Details for the filter of the type EXCLUDE.|
|» id|body|string|false|Filter ID.|
|» includeDetails|body|[FilterExpression](#schemafilterexpression)|false|Details for the filter of the type INCLUDE.|
|» lowercaseDetails|body|object|false|Details for the filter of the type LOWER.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» name|body|string|false|Name of this filter.|
|» parentLink|body|object|false|Parent link for this filter. Points to the account to which this filter belongs.|
|» » href|body|string|false|Link to the account to which this filter belongs.|
|» » type|body|string|false|Value is "analytics#account".|
|» searchAndReplaceDetails|body|object|false|Details for the filter of the type SEARCH_AND_REPLACE.|
|» » caseSensitive|body|boolean|false|Determines if the filter is case sensitive.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » replaceString|body|string|false|Term to replace the search term with.|
|» » searchString|body|string|false|Term to search.|
|» type|body|string|false|Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.|
|» uppercaseDetails|body|object|false|Details for the filter of the type UPPER.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "created": "1970-01-01T00:00:00Z",
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "kind": "analytics#filter",
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfiltersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.filters.delete

<a id="opIdanalytics.management.filters.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/filters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/filters/{filterId}`

Delete a filter.

<h3 id="analyticsmanagementfiltersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to delete the filter for.|
|filterId|path|string|true|ID of the filter to be deleted.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "created": "1970-01-01T00:00:00Z",
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "kind": "analytics#filter",
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfiltersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.filters.patch

<a id="opIdanalytics.management.filters.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/filters/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "advancedDetails": {
      "caseSensitive": true,
      "extractA": "string",
      "extractB": "string",
      "fieldA": "string",
      "fieldAIndex": 0,
      "fieldARequired": true,
      "fieldB": "string",
      "fieldBIndex": 0,
      "fieldBRequired": true,
      "outputConstructor": "string",
      "outputToField": "string",
      "outputToFieldIndex": 0,
      "overrideOutputField": true
    },
    "excludeDetails": {
      "caseSensitive": true,
      "expressionValue": "string",
      "field": "string",
      "fieldIndex": 0,
      "kind": "analytics#filterExpression",
      "matchType": "string"
    },
    "id": "string",
    "includeDetails": {
      "caseSensitive": true,
      "expressionValue": "string",
      "field": "string",
      "fieldIndex": 0,
      "kind": "analytics#filterExpression",
      "matchType": "string"
    },
    "lowercaseDetails": {
      "field": "string",
      "fieldIndex": 0
    },
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "searchAndReplaceDetails": {
      "caseSensitive": true,
      "field": "string",
      "fieldIndex": 0,
      "replaceString": "string",
      "searchString": "string"
    },
    "type": "string",
    "uppercaseDetails": {
      "field": "string",
      "fieldIndex": 0
    }
  }'
```

`PATCH /management/accounts/{accountId}/filters/{filterId}`

Updates an existing filter. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "type": "string",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfilterspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the filter belongs.|
|filterId|path|string|true|ID of the filter to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Filter](#schemafilter)|false|none|
|» accountId|body|string|false|Account ID to which this filter belongs.|
|» advancedDetails|body|object|false|Details for the filter of the type ADVANCED.|
|» » caseSensitive|body|boolean|false|Indicates if the filter expressions are case sensitive.|
|» » extractA|body|string|false|Expression to extract from field A.|
|» » extractB|body|string|false|Expression to extract from field B.|
|» » fieldA|body|string|false|Field A.|
|» » fieldAIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » fieldARequired|body|boolean|false|Indicates if field A is required to match.|
|» » fieldB|body|string|false|Field B.|
|» » fieldBIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » fieldBRequired|body|boolean|false|Indicates if field B is required to match.|
|» » outputConstructor|body|string|false|Expression used to construct the output value.|
|» » outputToField|body|string|false|Output field.|
|» » outputToFieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » overrideOutputField|body|boolean|false|Indicates if the existing value of the output field, if any, should be overridden by the output expression.|
|» excludeDetails|body|[FilterExpression](#schemafilterexpression)|false|Details for the filter of the type EXCLUDE.|
|» id|body|string|false|Filter ID.|
|» includeDetails|body|[FilterExpression](#schemafilterexpression)|false|Details for the filter of the type INCLUDE.|
|» lowercaseDetails|body|object|false|Details for the filter of the type LOWER.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» name|body|string|false|Name of this filter.|
|» parentLink|body|object|false|Parent link for this filter. Points to the account to which this filter belongs.|
|» » href|body|string|false|Link to the account to which this filter belongs.|
|» » type|body|string|false|Value is "analytics#account".|
|» searchAndReplaceDetails|body|object|false|Details for the filter of the type SEARCH_AND_REPLACE.|
|» » caseSensitive|body|boolean|false|Determines if the filter is case sensitive.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|
|» » replaceString|body|string|false|Term to replace the search term with.|
|» » searchString|body|string|false|Term to search.|
|» type|body|string|false|Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.|
|» uppercaseDetails|body|object|false|Details for the filter of the type UPPER.|
|» » field|body|string|false|Field to use in the filter.|
|» » fieldIndex|body|integer(int32)|false|The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "created": "1970-01-01T00:00:00Z",
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "kind": "analytics#filter",
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

<h3 id="analyticsmanagementfilterspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Filter](#schemafilter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webproperties.list

<a id="opIdanalytics.management.webproperties.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties`

Lists web properties to which the user has access.

<h3 id="analyticsmanagementwebpropertieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.|
|max-results|query|integer|false|The maximum number of web properties to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "childLink": {
        "href": "string",
        "type": "analytics#profiles"
      },
      "created": "1970-01-01T00:00:00Z",
      "dataRetentionResetOnNewActivity": true,
      "dataRetentionTtl": "string",
      "defaultProfileId": "string",
      "id": "string",
      "industryVertical": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webproperty",
      "level": "string",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#account"
      },
      "permissions": {
        "effective": [
          "string"
        ]
      },
      "profileCount": 0,
      "selfLink": "string",
      "starred": true,
      "updated": "1970-01-01T00:00:00Z",
      "websiteUrl": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#webproperties",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementwebpropertieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Webproperties](#schemawebproperties)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.webproperties.insert

<a id="opIdanalytics.management.webproperties.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {},
    "starred": true,
    "websiteUrl": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties`

Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.

> Body parameter

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {},
  "starred": true,
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the web property for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Webproperty](#schemawebproperty)|false|none|
|» accountId|body|string|false|Account ID to which this web property belongs.|
|» childLink|body|object|false|Child link for this web property. Points to the list of views (profiles) for this web property.|
|» » href|body|string|false|Link to the list of views (profiles) for this web property.|
|» » type|body|string|false|Type of the parent link. Its value is "analytics#profiles".|
|» dataRetentionResetOnNewActivity|body|boolean|false|Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).<br>Set to false to delete data associated with the user identifier automatically after the rentention period.<br>This property cannot be set on insert.|
|» dataRetentionTtl|body|string|false|The length of time for which user and event data is retained.<br>This property cannot be set on insert.|
|» defaultProfileId|body|string(int64)|false|Default view (profile) ID.|
|» id|body|string|false|Web property ID of the form UA-XXXXX-YY.|
|» industryVertical|body|string|false|The industry vertical/category selected for this web property.|
|» name|body|string|false|Name of this web property.|
|» parentLink|body|object|false|Parent link for this web property. Points to the account to which this web property belongs.|
|» » href|body|string|false|Link to the account for this web property.|
|» » type|body|string|false|Type of the parent link. Its value is "analytics#account".|
|» permissions|body|object|false|Permissions the user has for this web property.|
|» starred|body|boolean|false|Indicates whether this web property is starred or not.|
|» websiteUrl|body|string|false|Website url for this web property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "created": "1970-01-01T00:00:00Z",
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webproperty",
  "level": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "profileCount": 0,
  "selfLink": "string",
  "starred": true,
  "updated": "1970-01-01T00:00:00Z",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Webproperty](#schemawebproperty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webproperties.get

<a id="opIdanalytics.management.webproperties.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}`

Gets a web property to which the user has access.

<h3 id="analyticsmanagementwebpropertiesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve the web property for.|
|webPropertyId|path|string|true|ID to retrieve the web property for.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "created": "1970-01-01T00:00:00Z",
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webproperty",
  "level": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "profileCount": 0,
  "selfLink": "string",
  "starred": true,
  "updated": "1970-01-01T00:00:00Z",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Webproperty](#schemawebproperty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.webproperties.update

<a id="opIdanalytics.management.webproperties.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {},
    "starred": true,
    "websiteUrl": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}`

Updates an existing web property.

> Body parameter

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {},
  "starred": true,
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the web property belongs|
|webPropertyId|path|string|true|Web property ID|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Webproperty](#schemawebproperty)|false|none|
|» accountId|body|string|false|Account ID to which this web property belongs.|
|» childLink|body|object|false|Child link for this web property. Points to the list of views (profiles) for this web property.|
|» » href|body|string|false|Link to the list of views (profiles) for this web property.|
|» » type|body|string|false|Type of the parent link. Its value is "analytics#profiles".|
|» dataRetentionResetOnNewActivity|body|boolean|false|Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).<br>Set to false to delete data associated with the user identifier automatically after the rentention period.<br>This property cannot be set on insert.|
|» dataRetentionTtl|body|string|false|The length of time for which user and event data is retained.<br>This property cannot be set on insert.|
|» defaultProfileId|body|string(int64)|false|Default view (profile) ID.|
|» id|body|string|false|Web property ID of the form UA-XXXXX-YY.|
|» industryVertical|body|string|false|The industry vertical/category selected for this web property.|
|» name|body|string|false|Name of this web property.|
|» parentLink|body|object|false|Parent link for this web property. Points to the account to which this web property belongs.|
|» » href|body|string|false|Link to the account for this web property.|
|» » type|body|string|false|Type of the parent link. Its value is "analytics#account".|
|» permissions|body|object|false|Permissions the user has for this web property.|
|» starred|body|boolean|false|Indicates whether this web property is starred or not.|
|» websiteUrl|body|string|false|Website url for this web property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "created": "1970-01-01T00:00:00Z",
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webproperty",
  "level": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "profileCount": 0,
  "selfLink": "string",
  "starred": true,
  "updated": "1970-01-01T00:00:00Z",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Webproperty](#schemawebproperty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webproperties.patch

<a id="opIdanalytics.management.webproperties.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {},
    "starred": true,
    "websiteUrl": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}`

Updates an existing web property. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {},
  "starred": true,
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the web property belongs|
|webPropertyId|path|string|true|Web property ID|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Webproperty](#schemawebproperty)|false|none|
|» accountId|body|string|false|Account ID to which this web property belongs.|
|» childLink|body|object|false|Child link for this web property. Points to the list of views (profiles) for this web property.|
|» » href|body|string|false|Link to the list of views (profiles) for this web property.|
|» » type|body|string|false|Type of the parent link. Its value is "analytics#profiles".|
|» dataRetentionResetOnNewActivity|body|boolean|false|Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).<br>Set to false to delete data associated with the user identifier automatically after the rentention period.<br>This property cannot be set on insert.|
|» dataRetentionTtl|body|string|false|The length of time for which user and event data is retained.<br>This property cannot be set on insert.|
|» defaultProfileId|body|string(int64)|false|Default view (profile) ID.|
|» id|body|string|false|Web property ID of the form UA-XXXXX-YY.|
|» industryVertical|body|string|false|The industry vertical/category selected for this web property.|
|» name|body|string|false|Name of this web property.|
|» parentLink|body|object|false|Parent link for this web property. Points to the account to which this web property belongs.|
|» » href|body|string|false|Link to the account for this web property.|
|» » type|body|string|false|Type of the parent link. Its value is "analytics#account".|
|» permissions|body|object|false|Permissions the user has for this web property.|
|» starred|body|boolean|false|Indicates whether this web property is starred or not.|
|» websiteUrl|body|string|false|Website url for this web property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "created": "1970-01-01T00:00:00Z",
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webproperty",
  "level": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "profileCount": 0,
  "selfLink": "string",
  "starred": true,
  "updated": "1970-01-01T00:00:00Z",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementwebpropertiespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Webproperty](#schemawebproperty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.customDataSources.list

<a id="opIdanalytics.management.customDataSources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDataSources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources`

List custom data sources to which the user has access.

<h3 id="analyticsmanagementcustomdatasourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account Id for the custom data sources to retrieve.|
|webPropertyId|path|string|true|Web property Id for the custom data sources to retrieve.|
|max-results|query|integer|false|The maximum number of custom data sources to include in this response.|
|start-index|query|integer|false|A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "childLink": {
        "href": "string",
        "type": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "importBehavior": "string",
      "kind": "analytics#customDataSource",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "profilesLinked": [
        "string"
      ],
      "schema": [
        "string"
      ],
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "uploadType": "string",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#customDataSources",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementcustomdatasourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomDataSources](#schemacustomdatasources)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.uploads.deleteUploadData

<a id="opIdanalytics.management.uploads.deleteUploadData"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDataSources/string/deleteUploadData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customDataImportUids": [
      "string"
    ]
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData`

Delete data associated with a previous upload.

> Body parameter

```json
{
  "customDataImportUids": [
    "string"
  ]
}
```

<h3 id="analyticsmanagementuploadsdeleteuploaddata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account Id for the uploads to be deleted.|
|webPropertyId|path|string|true|Web property Id for the uploads to be deleted.|
|customDataSourceId|path|string|true|Custom data source Id for the uploads to be deleted.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AnalyticsDataimportDeleteUploadDataRequest](#schemaanalyticsdataimportdeleteuploaddatarequest)|false|none|
|» customDataImportUids|body|[string]|false|A list of upload UIDs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="analyticsmanagementuploadsdeleteuploaddata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.uploads.list

<a id="opIdanalytics.management.uploads.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDataSources/string/uploads \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads`

List uploads to which the user has access.

<h3 id="analyticsmanagementuploadslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account Id for the uploads to retrieve.|
|webPropertyId|path|string|true|Web property Id for the uploads to retrieve.|
|customDataSourceId|path|string|true|Custom data source Id for uploads to retrieve.|
|max-results|query|integer|false|The maximum number of uploads to include in this response.|
|start-index|query|integer|false|A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "customDataSourceId": "string",
      "errors": [
        "string"
      ],
      "id": "string",
      "kind": "analytics#upload",
      "status": "string",
      "uploadTime": "1970-01-01T00:00:00Z"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#uploads",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

<h3 id="analyticsmanagementuploadslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Uploads](#schemauploads)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.uploads.uploadData

<a id="opIdanalytics.management.uploads.uploadData"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDataSources/string/uploads \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads`

Upload data for a custom data source.

<h3 id="analyticsmanagementuploadsuploaddata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account Id associated with the upload.|
|webPropertyId|path|string|true|Web property UA-string associated with the upload.|
|customDataSourceId|path|string|true|Custom data source Id to which the data being uploaded belongs.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "customDataSourceId": "string",
  "errors": [
    "string"
  ],
  "id": "string",
  "kind": "analytics#upload",
  "status": "string",
  "uploadTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="analyticsmanagementuploadsuploaddata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Upload](#schemaupload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.uploads.get

<a id="opIdanalytics.management.uploads.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDataSources/string/uploads/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}`

List uploads to which the user has access.

<h3 id="analyticsmanagementuploadsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account Id for the upload to retrieve.|
|webPropertyId|path|string|true|Web property Id for the upload to retrieve.|
|customDataSourceId|path|string|true|Custom data source Id for upload to retrieve.|
|uploadId|path|string|true|Upload Id to retrieve.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "customDataSourceId": "string",
  "errors": [
    "string"
  ],
  "id": "string",
  "kind": "analytics#upload",
  "status": "string",
  "uploadTime": "1970-01-01T00:00:00Z"
}
```

<h3 id="analyticsmanagementuploadsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Upload](#schemaupload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.customDimensions.list

<a id="opIdanalytics.management.customDimensions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDimensions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions`

Lists custom dimensions to which the user has access.

<h3 id="analyticsmanagementcustomdimensionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom dimensions to retrieve.|
|webPropertyId|path|string|true|Web property ID for the custom dimensions to retrieve.|
|max-results|query|integer|false|The maximum number of custom dimensions to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "active": true,
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "index": 0,
      "kind": "analytics#customDimension",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "scope": "string",
      "selfLink": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#customDimensions",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomDimensions](#schemacustomdimensions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.customDimensions.insert

<a id="opIdanalytics.management.customDimensions.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDimensions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "scope": "string",
    "webPropertyId": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions`

Create a new custom dimension.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "id": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom dimension to create.|
|webPropertyId|path|string|true|Web property ID for the custom dimension to create.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomDimension](#schemacustomdimension)|false|none|
|» accountId|body|string|false|Account ID.|
|» active|body|boolean|false|Boolean indicating whether the custom dimension is active.|
|» id|body|string|false|Custom dimension ID.|
|» name|body|string|false|Name of the custom dimension.|
|» parentLink|body|object|false|Parent link for the custom dimension. Points to the property to which the custom dimension belongs.|
|» » href|body|string|false|Link to the property to which the custom dimension belongs.|
|» » type|body|string|false|Type of the parent link. Set to "analytics#webproperty".|
|» scope|body|string|false|Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.|
|» webPropertyId|body|string|false|Property ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customDimension",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomDimension](#schemacustomdimension)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.customDimensions.get

<a id="opIdanalytics.management.customDimensions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDimensions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`

Get a custom dimension to which the user has access.

<h3 id="analyticsmanagementcustomdimensionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom dimension to retrieve.|
|webPropertyId|path|string|true|Web property ID for the custom dimension to retrieve.|
|customDimensionId|path|string|true|The ID of the custom dimension to retrieve.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customDimension",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomDimension](#schemacustomdimension)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.customDimensions.update

<a id="opIdanalytics.management.customDimensions.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDimensions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "scope": "string",
    "webPropertyId": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`

Updates an existing custom dimension.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "id": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom dimension to update.|
|webPropertyId|path|string|true|Web property ID for the custom dimension to update.|
|customDimensionId|path|string|true|Custom dimension ID for the custom dimension to update.|
|ignoreCustomDataSourceLinks|query|boolean|false|Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomDimension](#schemacustomdimension)|false|none|
|» accountId|body|string|false|Account ID.|
|» active|body|boolean|false|Boolean indicating whether the custom dimension is active.|
|» id|body|string|false|Custom dimension ID.|
|» name|body|string|false|Name of the custom dimension.|
|» parentLink|body|object|false|Parent link for the custom dimension. Points to the property to which the custom dimension belongs.|
|» » href|body|string|false|Link to the property to which the custom dimension belongs.|
|» » type|body|string|false|Type of the parent link. Set to "analytics#webproperty".|
|» scope|body|string|false|Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.|
|» webPropertyId|body|string|false|Property ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customDimension",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomDimension](#schemacustomdimension)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.customDimensions.patch

<a id="opIdanalytics.management.customDimensions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customDimensions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "scope": "string",
    "webPropertyId": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`

Updates an existing custom dimension. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "id": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom dimension to update.|
|webPropertyId|path|string|true|Web property ID for the custom dimension to update.|
|customDimensionId|path|string|true|Custom dimension ID for the custom dimension to update.|
|ignoreCustomDataSourceLinks|query|boolean|false|Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomDimension](#schemacustomdimension)|false|none|
|» accountId|body|string|false|Account ID.|
|» active|body|boolean|false|Boolean indicating whether the custom dimension is active.|
|» id|body|string|false|Custom dimension ID.|
|» name|body|string|false|Name of the custom dimension.|
|» parentLink|body|object|false|Parent link for the custom dimension. Points to the property to which the custom dimension belongs.|
|» » href|body|string|false|Link to the property to which the custom dimension belongs.|
|» » type|body|string|false|Type of the parent link. Set to "analytics#webproperty".|
|» scope|body|string|false|Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.|
|» webPropertyId|body|string|false|Property ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customDimension",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustomdimensionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomDimension](#schemacustomdimension)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.customMetrics.list

<a id="opIdanalytics.management.customMetrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customMetrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics`

Lists custom metrics to which the user has access.

<h3 id="analyticsmanagementcustommetricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom metrics to retrieve.|
|webPropertyId|path|string|true|Web property ID for the custom metrics to retrieve.|
|max-results|query|integer|false|The maximum number of custom metrics to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "active": true,
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "index": 0,
      "kind": "analytics#customMetric",
      "max_value": "string",
      "min_value": "string",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "scope": "string",
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#customMetrics",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementcustommetricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomMetrics](#schemacustommetrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.customMetrics.insert

<a id="opIdanalytics.management.customMetrics.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customMetrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "id": "string",
    "max_value": "string",
    "min_value": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "scope": "string",
    "type": "string",
    "webPropertyId": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics`

Create a new custom metric.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "id": "string",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "type": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom metric to create.|
|webPropertyId|path|string|true|Web property ID for the custom dimension to create.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomMetric](#schemacustommetric)|false|none|
|» accountId|body|string|false|Account ID.|
|» active|body|boolean|false|Boolean indicating whether the custom metric is active.|
|» id|body|string|false|Custom metric ID.|
|» max_value|body|string|false|Max value of custom metric.|
|» min_value|body|string|false|Min value of custom metric.|
|» name|body|string|false|Name of the custom metric.|
|» parentLink|body|object|false|Parent link for the custom metric. Points to the property to which the custom metric belongs.|
|» » href|body|string|false|Link to the property to which the custom metric belongs.|
|» » type|body|string|false|Type of the parent link. Set to "analytics#webproperty".|
|» scope|body|string|false|Scope of the custom metric: HIT or PRODUCT.|
|» type|body|string|false|Data type of custom metric.|
|» webPropertyId|body|string|false|Property ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customMetric",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomMetric](#schemacustommetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.customMetrics.get

<a id="opIdanalytics.management.customMetrics.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customMetrics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`

Get a custom metric to which the user has access.

<h3 id="analyticsmanagementcustommetricsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom metric to retrieve.|
|webPropertyId|path|string|true|Web property ID for the custom metric to retrieve.|
|customMetricId|path|string|true|The ID of the custom metric to retrieve.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customMetric",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomMetric](#schemacustommetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.customMetrics.update

<a id="opIdanalytics.management.customMetrics.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customMetrics/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "id": "string",
    "max_value": "string",
    "min_value": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "scope": "string",
    "type": "string",
    "webPropertyId": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`

Updates an existing custom metric.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "id": "string",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "type": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom metric to update.|
|webPropertyId|path|string|true|Web property ID for the custom metric to update.|
|customMetricId|path|string|true|Custom metric ID for the custom metric to update.|
|ignoreCustomDataSourceLinks|query|boolean|false|Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomMetric](#schemacustommetric)|false|none|
|» accountId|body|string|false|Account ID.|
|» active|body|boolean|false|Boolean indicating whether the custom metric is active.|
|» id|body|string|false|Custom metric ID.|
|» max_value|body|string|false|Max value of custom metric.|
|» min_value|body|string|false|Min value of custom metric.|
|» name|body|string|false|Name of the custom metric.|
|» parentLink|body|object|false|Parent link for the custom metric. Points to the property to which the custom metric belongs.|
|» » href|body|string|false|Link to the property to which the custom metric belongs.|
|» » type|body|string|false|Type of the parent link. Set to "analytics#webproperty".|
|» scope|body|string|false|Scope of the custom metric: HIT or PRODUCT.|
|» type|body|string|false|Data type of custom metric.|
|» webPropertyId|body|string|false|Property ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customMetric",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomMetric](#schemacustommetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.customMetrics.patch

<a id="opIdanalytics.management.customMetrics.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/customMetrics/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "id": "string",
    "max_value": "string",
    "min_value": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "scope": "string",
    "type": "string",
    "webPropertyId": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`

Updates an existing custom metric. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "id": "string",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "type": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the custom metric to update.|
|webPropertyId|path|string|true|Web property ID for the custom metric to update.|
|customMetricId|path|string|true|Custom metric ID for the custom metric to update.|
|ignoreCustomDataSourceLinks|query|boolean|false|Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CustomMetric](#schemacustommetric)|false|none|
|» accountId|body|string|false|Account ID.|
|» active|body|boolean|false|Boolean indicating whether the custom metric is active.|
|» id|body|string|false|Custom metric ID.|
|» max_value|body|string|false|Max value of custom metric.|
|» min_value|body|string|false|Min value of custom metric.|
|» name|body|string|false|Name of the custom metric.|
|» parentLink|body|object|false|Parent link for the custom metric. Points to the property to which the custom metric belongs.|
|» » href|body|string|false|Link to the property to which the custom metric belongs.|
|» » type|body|string|false|Type of the parent link. Set to "analytics#webproperty".|
|» scope|body|string|false|Scope of the custom metric: HIT or PRODUCT.|
|» type|body|string|false|Data type of custom metric.|
|» webPropertyId|body|string|false|Property ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customMetric",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementcustommetricspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomMetric](#schemacustommetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webPropertyAdWordsLinks.list

<a id="opIdanalytics.management.webPropertyAdWordsLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityAdWordsLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks`

Lists webProperty-Google Ads links for a given web property.

<h3 id="analyticsmanagementwebpropertyadwordslinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|ID of the account which the given web property belongs to.|
|webPropertyId|path|string|true|Web property ID to retrieve the Google Ads links for.|
|max-results|query|integer|false|The maximum number of webProperty-Google Ads links to include in this response.|
|start-index|query|integer|false|An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "adWordsAccounts": [
        {
          "autoTaggingEnabled": true,
          "customerId": "string",
          "kind": "analytics#adWordsAccount"
        }
      ],
      "entity": {
        "webPropertyRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertyRef",
          "name": "string"
        }
      },
      "id": "string",
      "kind": "analytics#entityAdWordsLink",
      "name": "string",
      "profileIds": [
        "string"
      ],
      "selfLink": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#entityAdWordsLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityAdWordsLinks](#schemaentityadwordslinks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.webPropertyAdWordsLinks.insert

<a id="opIdanalytics.management.webPropertyAdWordsLinks.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityAdWordsLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adWordsAccounts": [
      {
        "autoTaggingEnabled": true,
        "customerId": "string",
        "kind": "analytics#adWordsAccount"
      }
    ],
    "entity": {
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityAdWordsLink",
    "name": "string",
    "profileIds": [
      "string"
    ],
    "selfLink": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks`

Creates a webProperty-Google Ads link.

> Body parameter

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|ID of the Google Analytics account to create the link for.|
|webPropertyId|path|string|true|Web property ID to create the link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityAdWordsLink](#schemaentityadwordslink)|false|none|
|» adWordsAccounts|body|[[AdWordsAccount](#schemaadwordsaccount)]|false|A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.|
|» entity|body|object|false|Web property being linked.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|JSON template for a web property reference.|
|» id|body|string|false|Entity Google Ads link ID|
|» kind|body|string|false|Resource type for entity Google Ads link.|
|» name|body|string|false|Name of the link. This field is required when creating a Google Ads link.|
|» profileIds|body|[string]|false|IDs of linked Views (Profiles) represented as strings.|
|» selfLink|body|string|false|URL link for this Google Analytics - Google Ads link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityAdWordsLink](#schemaentityadwordslink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webPropertyAdWordsLinks.get

<a id="opIdanalytics.management.webPropertyAdWordsLinks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityAdWordsLinks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`

Returns a web property-Google Ads link to which the user has access.

<h3 id="analyticsmanagementwebpropertyadwordslinksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|ID of the account which the given web property belongs to.|
|webPropertyId|path|string|true|Web property ID to retrieve the Google Ads link for.|
|webPropertyAdWordsLinkId|path|string|true|Web property-Google Ads link ID.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityAdWordsLink](#schemaentityadwordslink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.webPropertyAdWordsLinks.update

<a id="opIdanalytics.management.webPropertyAdWordsLinks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityAdWordsLinks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adWordsAccounts": [
      {
        "autoTaggingEnabled": true,
        "customerId": "string",
        "kind": "analytics#adWordsAccount"
      }
    ],
    "entity": {
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityAdWordsLink",
    "name": "string",
    "profileIds": [
      "string"
    ],
    "selfLink": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`

Updates an existing webProperty-Google Ads link.

> Body parameter

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|ID of the account which the given web property belongs to.|
|webPropertyId|path|string|true|Web property ID to retrieve the Google Ads link for.|
|webPropertyAdWordsLinkId|path|string|true|Web property-Google Ads link ID.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityAdWordsLink](#schemaentityadwordslink)|false|none|
|» adWordsAccounts|body|[[AdWordsAccount](#schemaadwordsaccount)]|false|A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.|
|» entity|body|object|false|Web property being linked.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|JSON template for a web property reference.|
|» id|body|string|false|Entity Google Ads link ID|
|» kind|body|string|false|Resource type for entity Google Ads link.|
|» name|body|string|false|Name of the link. This field is required when creating a Google Ads link.|
|» profileIds|body|[string]|false|IDs of linked Views (Profiles) represented as strings.|
|» selfLink|body|string|false|URL link for this Google Analytics - Google Ads link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityAdWordsLink](#schemaentityadwordslink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webPropertyAdWordsLinks.delete

<a id="opIdanalytics.management.webPropertyAdWordsLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityAdWordsLinks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`

Deletes a web property-Google Ads link.

<h3 id="analyticsmanagementwebpropertyadwordslinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|ID of the account which the given web property belongs to.|
|webPropertyId|path|string|true|Web property ID to delete the Google Ads link for.|
|webPropertyAdWordsLinkId|path|string|true|Web property Google Ads link ID.|
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
|alt|json|

<h3 id="analyticsmanagementwebpropertyadwordslinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webPropertyAdWordsLinks.patch

<a id="opIdanalytics.management.webPropertyAdWordsLinks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityAdWordsLinks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adWordsAccounts": [
      {
        "autoTaggingEnabled": true,
        "customerId": "string",
        "kind": "analytics#adWordsAccount"
      }
    ],
    "entity": {
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityAdWordsLink",
    "name": "string",
    "profileIds": [
      "string"
    ],
    "selfLink": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`

Updates an existing webProperty-Google Ads link. This method supports patch semantics.

> Body parameter

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinkspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|ID of the account which the given web property belongs to.|
|webPropertyId|path|string|true|Web property ID to retrieve the Google Ads link for.|
|webPropertyAdWordsLinkId|path|string|true|Web property-Google Ads link ID.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityAdWordsLink](#schemaentityadwordslink)|false|none|
|» adWordsAccounts|body|[[AdWordsAccount](#schemaadwordsaccount)]|false|A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.|
|» entity|body|object|false|Web property being linked.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|JSON template for a web property reference.|
|» id|body|string|false|Entity Google Ads link ID|
|» kind|body|string|false|Resource type for entity Google Ads link.|
|» name|body|string|false|Name of the link. This field is required when creating a Google Ads link.|
|» profileIds|body|[string]|false|IDs of linked Views (Profiles) represented as strings.|
|» selfLink|body|string|false|URL link for this Google Analytics - Google Ads link.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementwebpropertyadwordslinkspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityAdWordsLink](#schemaentityadwordslink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.webpropertyUserLinks.list

<a id="opIdanalytics.management.webpropertyUserLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityUserLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks`

Lists webProperty-user links for a given web property.

<h3 id="analyticsmanagementwebpropertyuserlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID which the given web property belongs to.|
|webPropertyId|path|string|true|Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.|
|max-results|query|integer|false|The maximum number of webProperty-user Links to include in this response.|
|start-index|query|integer|false|An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "entity": {
        "accountRef": {
          "href": "string",
          "id": "string",
          "kind": "analytics#accountRef",
          "name": "string"
        },
        "profileRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#profileRef",
          "name": "string",
          "webPropertyId": "string"
        },
        "webPropertyRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertyRef",
          "name": "string"
        }
      },
      "id": "string",
      "kind": "analytics#entityUserLink",
      "permissions": {
        "effective": [
          "string"
        ],
        "local": [
          "string"
        ]
      },
      "selfLink": "string",
      "userRef": {
        "email": "string",
        "id": "string",
        "kind": "analytics#userRef"
      }
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#entityUserLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

<h3 id="analyticsmanagementwebpropertyuserlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLinks](#schemaentityuserlinks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users.readonly )
</aside>

## analytics.management.webpropertyUserLinks.insert

<a id="opIdanalytics.management.webpropertyUserLinks.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityUserLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entity": {
      "accountRef": {
        "href": "string",
        "id": "string",
        "kind": "analytics#accountRef",
        "name": "string"
      },
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityUserLink",
    "permissions": {
      "local": [
        "string"
      ]
    },
    "selfLink": "string",
    "userRef": {
      "email": "string",
      "id": "string",
      "kind": "analytics#userRef"
    }
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks`

Adds a new user to the given web property.

> Body parameter

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementwebpropertyuserlinksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the user link for.|
|webPropertyId|path|string|true|Web Property ID to create the user link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityUserLink](#schemaentityuserlink)|false|none|
|» entity|body|object|false|Entity for this link. It can be an account, a web property, or a view (profile).|
|» » accountRef|body|[AccountRef](#schemaaccountref)|false|Account for this link.|
|» » profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|Web property for this link.|
|» id|body|string|false|Entity user link ID|
|» kind|body|string|false|Resource type for entity user link.|
|» permissions|body|object|false|Permissions the user has for this entity.|
|» » local|body|[string]|false|Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.|
|» selfLink|body|string|false|Self link for this resource.|
|» userRef|body|[UserRef](#schemauserref)|false|User reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementwebpropertyuserlinksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLink](#schemaentityuserlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.webpropertyUserLinks.update

<a id="opIdanalytics.management.webpropertyUserLinks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityUserLinks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entity": {
      "accountRef": {
        "href": "string",
        "id": "string",
        "kind": "analytics#accountRef",
        "name": "string"
      },
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityUserLink",
    "permissions": {
      "local": [
        "string"
      ]
    },
    "selfLink": "string",
    "userRef": {
      "email": "string",
      "id": "string",
      "kind": "analytics#userRef"
    }
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}`

Updates permissions for an existing user on the given web property.

> Body parameter

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementwebpropertyuserlinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to update the account-user link for.|
|webPropertyId|path|string|true|Web property ID to update the account-user link for.|
|linkId|path|string|true|Link ID to update the account-user link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityUserLink](#schemaentityuserlink)|false|none|
|» entity|body|object|false|Entity for this link. It can be an account, a web property, or a view (profile).|
|» » accountRef|body|[AccountRef](#schemaaccountref)|false|Account for this link.|
|» » profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|Web property for this link.|
|» id|body|string|false|Entity user link ID|
|» kind|body|string|false|Resource type for entity user link.|
|» permissions|body|object|false|Permissions the user has for this entity.|
|» » local|body|[string]|false|Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.|
|» selfLink|body|string|false|Self link for this resource.|
|» userRef|body|[UserRef](#schemauserref)|false|User reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementwebpropertyuserlinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLink](#schemaentityuserlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.webpropertyUserLinks.delete

<a id="opIdanalytics.management.webpropertyUserLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/entityUserLinks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}`

Removes a user from the given web property.

<h3 id="analyticsmanagementwebpropertyuserlinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to delete the user link for.|
|webPropertyId|path|string|true|Web Property ID to delete the user link for.|
|linkId|path|string|true|Link ID to delete the user link for.|
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
|alt|json|

<h3 id="analyticsmanagementwebpropertyuserlinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.profiles.list

<a id="opIdanalytics.management.profiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles`

Lists views (profiles) to which the user has access.

<h3 id="analyticsmanagementprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.|
|webPropertyId|path|string|true|Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.|
|max-results|query|integer|false|The maximum number of views (profiles) to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "botFilteringEnabled": true,
      "childLink": {
        "href": "string",
        "type": "analytics#goals"
      },
      "created": "1970-01-01T00:00:00Z",
      "currency": "string",
      "defaultPage": "string",
      "eCommerceTracking": true,
      "enhancedECommerceTracking": true,
      "excludeQueryParameters": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profile",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "permissions": {
        "effective": [
          "string"
        ]
      },
      "selfLink": "string",
      "siteSearchCategoryParameters": "string",
      "siteSearchQueryParameters": "string",
      "starred": true,
      "stripSiteSearchCategoryParameters": true,
      "stripSiteSearchQueryParameters": true,
      "timezone": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string",
      "websiteUrl": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#profiles",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profiles](#schemaprofiles)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.profiles.insert

<a id="opIdanalytics.management.profiles.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {},
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "websiteUrl": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles`

Create a new view (profile).

> Body parameter

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {},
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the view (profile) for.|
|webPropertyId|path|string|true|Web property ID to create the view (profile) for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Profile](#schemaprofile)|false|none|
|» accountId|body|string|false|Account ID to which this view (profile) belongs.|
|» botFilteringEnabled|body|boolean|false|Indicates whether bot filtering is enabled for this view (profile).|
|» childLink|body|object|false|Child link for this view (profile). Points to the list of goals for this view (profile).|
|» » href|body|string|false|Link to the list of goals for this view (profile).|
|» » type|body|string|false|Value is "analytics#goals".|
|» currency|body|string|false|The currency type associated with this view (profile), defaults to USD. The supported values are:<br>USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL|
|» defaultPage|body|string|false|Default page for this view (profile).|
|» eCommerceTracking|body|boolean|false|Indicates whether ecommerce tracking is enabled for this view (profile).|
|» enhancedECommerceTracking|body|boolean|false|Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.|
|» excludeQueryParameters|body|string|false|The query parameters that are excluded from this view (profile).|
|» id|body|string|false|View (Profile) ID.|
|» name|body|string|false|Name of this view (profile).|
|» parentLink|body|object|false|Parent link for this view (profile). Points to the web property to which this view (profile) belongs.|
|» » href|body|string|false|Link to the web property to which this view (profile) belongs.|
|» » type|body|string|false|Value is "analytics#webproperty".|
|» permissions|body|object|false|Permissions the user has for this view (profile).|
|» siteSearchCategoryParameters|body|string|false|Site search category parameters for this view (profile).|
|» siteSearchQueryParameters|body|string|false|The site search query parameters for this view (profile).|
|» starred|body|boolean|false|Indicates whether this view (profile) is starred or not.|
|» stripSiteSearchCategoryParameters|body|boolean|false|Whether or not Analytics will strip search category parameters from the URLs in your reports.|
|» stripSiteSearchQueryParameters|body|boolean|false|Whether or not Analytics will strip search query parameters from the URLs in your reports.|
|» timezone|body|string|false|Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.|
|» type|body|string|false|View (Profile) type. Supported types: WEB or APP.|
|» websiteUrl|body|string|false|Website URL for this view (profile).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "created": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#profile",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "selfLink": "string",
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profiles.get

<a id="opIdanalytics.management.profiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`

Gets a view (profile) to which the user has access.

<h3 id="analyticsmanagementprofilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve the view (profile) for.|
|webPropertyId|path|string|true|Web property ID to retrieve the view (profile) for.|
|profileId|path|string|true|View (Profile) ID to retrieve the view (profile) for.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "created": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#profile",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "selfLink": "string",
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.profiles.update

<a id="opIdanalytics.management.profiles.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {},
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "websiteUrl": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`

Updates an existing view (profile).

> Body parameter

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {},
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the view (profile) belongs|
|webPropertyId|path|string|true|Web property ID to which the view (profile) belongs|
|profileId|path|string|true|ID of the view (profile) to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Profile](#schemaprofile)|false|none|
|» accountId|body|string|false|Account ID to which this view (profile) belongs.|
|» botFilteringEnabled|body|boolean|false|Indicates whether bot filtering is enabled for this view (profile).|
|» childLink|body|object|false|Child link for this view (profile). Points to the list of goals for this view (profile).|
|» » href|body|string|false|Link to the list of goals for this view (profile).|
|» » type|body|string|false|Value is "analytics#goals".|
|» currency|body|string|false|The currency type associated with this view (profile), defaults to USD. The supported values are:<br>USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL|
|» defaultPage|body|string|false|Default page for this view (profile).|
|» eCommerceTracking|body|boolean|false|Indicates whether ecommerce tracking is enabled for this view (profile).|
|» enhancedECommerceTracking|body|boolean|false|Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.|
|» excludeQueryParameters|body|string|false|The query parameters that are excluded from this view (profile).|
|» id|body|string|false|View (Profile) ID.|
|» name|body|string|false|Name of this view (profile).|
|» parentLink|body|object|false|Parent link for this view (profile). Points to the web property to which this view (profile) belongs.|
|» » href|body|string|false|Link to the web property to which this view (profile) belongs.|
|» » type|body|string|false|Value is "analytics#webproperty".|
|» permissions|body|object|false|Permissions the user has for this view (profile).|
|» siteSearchCategoryParameters|body|string|false|Site search category parameters for this view (profile).|
|» siteSearchQueryParameters|body|string|false|The site search query parameters for this view (profile).|
|» starred|body|boolean|false|Indicates whether this view (profile) is starred or not.|
|» stripSiteSearchCategoryParameters|body|boolean|false|Whether or not Analytics will strip search category parameters from the URLs in your reports.|
|» stripSiteSearchQueryParameters|body|boolean|false|Whether or not Analytics will strip search query parameters from the URLs in your reports.|
|» timezone|body|string|false|Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.|
|» type|body|string|false|View (Profile) type. Supported types: WEB or APP.|
|» websiteUrl|body|string|false|Website URL for this view (profile).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "created": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#profile",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "selfLink": "string",
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profiles.delete

<a id="opIdanalytics.management.profiles.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`

Deletes a view (profile).

<h3 id="analyticsmanagementprofilesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to delete the view (profile) for.|
|webPropertyId|path|string|true|Web property ID to delete the view (profile) for.|
|profileId|path|string|true|ID of the view (profile) to be deleted.|
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
|alt|json|

<h3 id="analyticsmanagementprofilesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profiles.patch

<a id="opIdanalytics.management.profiles.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {},
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "websiteUrl": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`

Updates an existing view (profile). This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {},
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the view (profile) belongs|
|webPropertyId|path|string|true|Web property ID to which the view (profile) belongs|
|profileId|path|string|true|ID of the view (profile) to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Profile](#schemaprofile)|false|none|
|» accountId|body|string|false|Account ID to which this view (profile) belongs.|
|» botFilteringEnabled|body|boolean|false|Indicates whether bot filtering is enabled for this view (profile).|
|» childLink|body|object|false|Child link for this view (profile). Points to the list of goals for this view (profile).|
|» » href|body|string|false|Link to the list of goals for this view (profile).|
|» » type|body|string|false|Value is "analytics#goals".|
|» currency|body|string|false|The currency type associated with this view (profile), defaults to USD. The supported values are:<br>USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL|
|» defaultPage|body|string|false|Default page for this view (profile).|
|» eCommerceTracking|body|boolean|false|Indicates whether ecommerce tracking is enabled for this view (profile).|
|» enhancedECommerceTracking|body|boolean|false|Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.|
|» excludeQueryParameters|body|string|false|The query parameters that are excluded from this view (profile).|
|» id|body|string|false|View (Profile) ID.|
|» name|body|string|false|Name of this view (profile).|
|» parentLink|body|object|false|Parent link for this view (profile). Points to the web property to which this view (profile) belongs.|
|» » href|body|string|false|Link to the web property to which this view (profile) belongs.|
|» » type|body|string|false|Value is "analytics#webproperty".|
|» permissions|body|object|false|Permissions the user has for this view (profile).|
|» siteSearchCategoryParameters|body|string|false|Site search category parameters for this view (profile).|
|» siteSearchQueryParameters|body|string|false|The site search query parameters for this view (profile).|
|» starred|body|boolean|false|Indicates whether this view (profile) is starred or not.|
|» stripSiteSearchCategoryParameters|body|boolean|false|Whether or not Analytics will strip search category parameters from the URLs in your reports.|
|» stripSiteSearchQueryParameters|body|boolean|false|Whether or not Analytics will strip search query parameters from the URLs in your reports.|
|» timezone|body|string|false|Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.|
|» type|body|string|false|View (Profile) type. Supported types: WEB or APP.|
|» websiteUrl|body|string|false|Website URL for this view (profile).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "created": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#profile",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "selfLink": "string",
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsmanagementprofilespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Profile](#schemaprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profileUserLinks.list

<a id="opIdanalytics.management.profileUserLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/entityUserLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks`

Lists profile-user links for a given view (profile).

<h3 id="analyticsmanagementprofileuserlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID which the given view (profile) belongs to.|
|webPropertyId|path|string|true|Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.|
|profileId|path|string|true|View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.|
|max-results|query|integer|false|The maximum number of profile-user links to include in this response.|
|start-index|query|integer|false|An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "entity": {
        "accountRef": {
          "href": "string",
          "id": "string",
          "kind": "analytics#accountRef",
          "name": "string"
        },
        "profileRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#profileRef",
          "name": "string",
          "webPropertyId": "string"
        },
        "webPropertyRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertyRef",
          "name": "string"
        }
      },
      "id": "string",
      "kind": "analytics#entityUserLink",
      "permissions": {
        "effective": [
          "string"
        ],
        "local": [
          "string"
        ]
      },
      "selfLink": "string",
      "userRef": {
        "email": "string",
        "id": "string",
        "kind": "analytics#userRef"
      }
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#entityUserLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

<h3 id="analyticsmanagementprofileuserlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLinks](#schemaentityuserlinks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users.readonly )
</aside>

## analytics.management.profileUserLinks.insert

<a id="opIdanalytics.management.profileUserLinks.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/entityUserLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entity": {
      "accountRef": {
        "href": "string",
        "id": "string",
        "kind": "analytics#accountRef",
        "name": "string"
      },
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityUserLink",
    "permissions": {
      "local": [
        "string"
      ]
    },
    "selfLink": "string",
    "userRef": {
      "email": "string",
      "id": "string",
      "kind": "analytics#userRef"
    }
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks`

Adds a new user to the given view (profile).

> Body parameter

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementprofileuserlinksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the user link for.|
|webPropertyId|path|string|true|Web Property ID to create the user link for.|
|profileId|path|string|true|View (Profile) ID to create the user link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityUserLink](#schemaentityuserlink)|false|none|
|» entity|body|object|false|Entity for this link. It can be an account, a web property, or a view (profile).|
|» » accountRef|body|[AccountRef](#schemaaccountref)|false|Account for this link.|
|» » profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|Web property for this link.|
|» id|body|string|false|Entity user link ID|
|» kind|body|string|false|Resource type for entity user link.|
|» permissions|body|object|false|Permissions the user has for this entity.|
|» » local|body|[string]|false|Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.|
|» selfLink|body|string|false|Self link for this resource.|
|» userRef|body|[UserRef](#schemauserref)|false|User reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementprofileuserlinksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLink](#schemaentityuserlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.profileUserLinks.update

<a id="opIdanalytics.management.profileUserLinks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/entityUserLinks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "entity": {
      "accountRef": {
        "href": "string",
        "id": "string",
        "kind": "analytics#accountRef",
        "name": "string"
      },
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "webPropertyRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#webPropertyRef",
        "name": "string"
      }
    },
    "id": "string",
    "kind": "analytics#entityUserLink",
    "permissions": {
      "local": [
        "string"
      ]
    },
    "selfLink": "string",
    "userRef": {
      "email": "string",
      "id": "string",
      "kind": "analytics#userRef"
    }
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}`

Updates permissions for an existing user on the given view (profile).

> Body parameter

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementprofileuserlinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to update the user link for.|
|webPropertyId|path|string|true|Web Property ID to update the user link for.|
|profileId|path|string|true|View (Profile ID) to update the user link for.|
|linkId|path|string|true|Link ID to update the user link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EntityUserLink](#schemaentityuserlink)|false|none|
|» entity|body|object|false|Entity for this link. It can be an account, a web property, or a view (profile).|
|» » accountRef|body|[AccountRef](#schemaaccountref)|false|Account for this link.|
|» » profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» » webPropertyRef|body|[WebPropertyRef](#schemawebpropertyref)|false|Web property for this link.|
|» id|body|string|false|Entity user link ID|
|» kind|body|string|false|Resource type for entity user link.|
|» permissions|body|object|false|Permissions the user has for this entity.|
|» » local|body|[string]|false|Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.|
|» selfLink|body|string|false|Self link for this resource.|
|» userRef|body|[UserRef](#schemauserref)|false|User reference.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

<h3 id="analyticsmanagementprofileuserlinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntityUserLink](#schemaentityuserlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.profileUserLinks.delete

<a id="opIdanalytics.management.profileUserLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/entityUserLinks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}`

Removes a user from the given view (profile).

<h3 id="analyticsmanagementprofileuserlinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to delete the user link for.|
|webPropertyId|path|string|true|Web Property ID to delete the user link for.|
|profileId|path|string|true|View (Profile) ID to delete the user link for.|
|linkId|path|string|true|Link ID to delete the user link for.|
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
|alt|json|

<h3 id="analyticsmanagementprofileuserlinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.manage.users )
</aside>

## analytics.management.experiments.list

<a id="opIdanalytics.management.experiments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/experiments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments`

Lists experiments to which the user has access.

<h3 id="analyticsmanagementexperimentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve experiments for.|
|webPropertyId|path|string|true|Web property ID to retrieve experiments for.|
|profileId|path|string|true|View (Profile) ID to retrieve experiments for.|
|max-results|query|integer|false|The maximum number of experiments to include in this response.|
|start-index|query|integer|false|An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "editableInGaUi": true,
      "endTime": "1970-01-01T00:00:00Z",
      "equalWeighting": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#experiment",
      "minimumExperimentLengthInDays": 0,
      "name": "string",
      "objectiveMetric": "string",
      "optimizationType": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#profile"
      },
      "profileId": "string",
      "reasonExperimentEnded": "string",
      "rewriteVariationUrlsAsOriginal": true,
      "selfLink": "string",
      "servingFramework": "string",
      "snippet": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "status": "string",
      "trafficCoverage": 0,
      "updated": "1970-01-01T00:00:00Z",
      "variations": [
        {
          "name": "string",
          "status": "string",
          "url": "string",
          "weight": 0,
          "won": true
        }
      ],
      "webPropertyId": "string",
      "winnerConfidenceLevel": 0,
      "winnerFound": true
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#experiments",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementexperimentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Experiments](#schemaexperiments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.experiments.insert

<a id="opIdanalytics.management.experiments.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/experiments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "editableInGaUi": true,
    "endTime": "1970-01-01T00:00:00Z",
    "equalWeighting": true,
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#experiment",
    "minimumExperimentLengthInDays": 0,
    "name": "string",
    "objectiveMetric": "string",
    "optimizationType": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#profile"
    },
    "profileId": "string",
    "reasonExperimentEnded": "string",
    "rewriteVariationUrlsAsOriginal": true,
    "selfLink": "string",
    "servingFramework": "string",
    "snippet": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "status": "string",
    "trafficCoverage": 0,
    "updated": "1970-01-01T00:00:00Z",
    "variations": [
      {
        "name": "string",
        "status": "string",
        "url": "string",
        "weight": 0,
        "won": true
      }
    ],
    "webPropertyId": "string",
    "winnerConfidenceLevel": 0,
    "winnerFound": true
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments`

Create a new experiment.

> Body parameter

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the experiment for.|
|webPropertyId|path|string|true|Web property ID to create the experiment for.|
|profileId|path|string|true|View (Profile) ID to create the experiment for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Experiment](#schemaexperiment)|false|none|
|» accountId|body|string|false|Account ID to which this experiment belongs. This field is read-only.|
|» created|body|string(date-time)|false|Time the experiment was created. This field is read-only.|
|» description|body|string|false|Notes about this experiment.|
|» editableInGaUi|body|boolean|false|If true, the end user will be able to edit the experiment via the Google Analytics user interface.|
|» endTime|body|string(date-time)|false|The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.|
|» equalWeighting|body|boolean|false|Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.|
|» id|body|string|false|Experiment ID. Required for patch and update. Disallowed for create.|
|» internalWebPropertyId|body|string|false|Internal ID for the web property to which this experiment belongs. This field is read-only.|
|» kind|body|string|false|Resource type for an Analytics experiment. This field is read-only.|
|» minimumExperimentLengthInDays|body|integer(int32)|false|An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|» name|body|string|false|Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.|
|» objectiveMetric|body|string|false|The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".|
|» optimizationType|body|string|false|Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".|
|» parentLink|body|object|false|Parent link for an experiment. Points to the view (profile) to which this experiment belongs.|
|» » href|body|string|false|Link to the view (profile) to which this experiment belongs. This field is read-only.|
|» » type|body|string|false|Value is "analytics#profile". This field is read-only.|
|» profileId|body|string|false|View (Profile) ID to which this experiment belongs. This field is read-only.|
|» reasonExperimentEnded|body|string|false|Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.|
|» rewriteVariationUrlsAsOriginal|body|boolean|false|Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.|
|» selfLink|body|string|false|Link for this experiment. This field is read-only.|
|» servingFramework|body|string|false|The framework used to serve the experiment variations and evaluate the results. One of:  <br>- REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.<br>- API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.<br>- EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.|
|» snippet|body|string|false|The snippet of code to include on the control page(s). This field is read-only.|
|» startTime|body|string(date-time)|false|The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.|
|» status|body|string|false|Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.|
|» trafficCoverage|body|number(double)|false|A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|» updated|body|string(date-time)|false|Time the experiment was last modified. This field is read-only.|
|» variations|body|[object]|false|Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.|
|» » name|body|string|false|The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.|
|» » status|body|string|false|Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.|
|» » url|body|string|false|The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.|
|» » weight|body|number(double)|false|Weight that this variation should receive. Only present if the experiment is running. This field is read-only.|
|» » won|body|boolean|false|True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.|
|» webPropertyId|body|string|false|Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.|
|» winnerConfidenceLevel|body|number(double)|false|A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.|
|» winnerFound|body|boolean|false|Boolean specifying whether a winner has been found for this experiment. This field is read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Experiment](#schemaexperiment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.experiments.get

<a id="opIdanalytics.management.experiments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/experiments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`

Returns an experiment to which the user has access.

<h3 id="analyticsmanagementexperimentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve the experiment for.|
|webPropertyId|path|string|true|Web property ID to retrieve the experiment for.|
|profileId|path|string|true|View (Profile) ID to retrieve the experiment for.|
|experimentId|path|string|true|Experiment ID to retrieve the experiment for.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Experiment](#schemaexperiment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.experiments.update

<a id="opIdanalytics.management.experiments.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/experiments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "editableInGaUi": true,
    "endTime": "1970-01-01T00:00:00Z",
    "equalWeighting": true,
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#experiment",
    "minimumExperimentLengthInDays": 0,
    "name": "string",
    "objectiveMetric": "string",
    "optimizationType": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#profile"
    },
    "profileId": "string",
    "reasonExperimentEnded": "string",
    "rewriteVariationUrlsAsOriginal": true,
    "selfLink": "string",
    "servingFramework": "string",
    "snippet": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "status": "string",
    "trafficCoverage": 0,
    "updated": "1970-01-01T00:00:00Z",
    "variations": [
      {
        "name": "string",
        "status": "string",
        "url": "string",
        "weight": 0,
        "won": true
      }
    ],
    "webPropertyId": "string",
    "winnerConfidenceLevel": 0,
    "winnerFound": true
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`

Update an existing experiment.

> Body parameter

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the experiment to update.|
|webPropertyId|path|string|true|Web property ID of the experiment to update.|
|profileId|path|string|true|View (Profile) ID of the experiment to update.|
|experimentId|path|string|true|Experiment ID of the experiment to update.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Experiment](#schemaexperiment)|false|none|
|» accountId|body|string|false|Account ID to which this experiment belongs. This field is read-only.|
|» created|body|string(date-time)|false|Time the experiment was created. This field is read-only.|
|» description|body|string|false|Notes about this experiment.|
|» editableInGaUi|body|boolean|false|If true, the end user will be able to edit the experiment via the Google Analytics user interface.|
|» endTime|body|string(date-time)|false|The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.|
|» equalWeighting|body|boolean|false|Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.|
|» id|body|string|false|Experiment ID. Required for patch and update. Disallowed for create.|
|» internalWebPropertyId|body|string|false|Internal ID for the web property to which this experiment belongs. This field is read-only.|
|» kind|body|string|false|Resource type for an Analytics experiment. This field is read-only.|
|» minimumExperimentLengthInDays|body|integer(int32)|false|An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|» name|body|string|false|Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.|
|» objectiveMetric|body|string|false|The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".|
|» optimizationType|body|string|false|Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".|
|» parentLink|body|object|false|Parent link for an experiment. Points to the view (profile) to which this experiment belongs.|
|» » href|body|string|false|Link to the view (profile) to which this experiment belongs. This field is read-only.|
|» » type|body|string|false|Value is "analytics#profile". This field is read-only.|
|» profileId|body|string|false|View (Profile) ID to which this experiment belongs. This field is read-only.|
|» reasonExperimentEnded|body|string|false|Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.|
|» rewriteVariationUrlsAsOriginal|body|boolean|false|Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.|
|» selfLink|body|string|false|Link for this experiment. This field is read-only.|
|» servingFramework|body|string|false|The framework used to serve the experiment variations and evaluate the results. One of:  <br>- REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.<br>- API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.<br>- EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.|
|» snippet|body|string|false|The snippet of code to include on the control page(s). This field is read-only.|
|» startTime|body|string(date-time)|false|The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.|
|» status|body|string|false|Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.|
|» trafficCoverage|body|number(double)|false|A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|» updated|body|string(date-time)|false|Time the experiment was last modified. This field is read-only.|
|» variations|body|[object]|false|Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.|
|» » name|body|string|false|The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.|
|» » status|body|string|false|Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.|
|» » url|body|string|false|The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.|
|» » weight|body|number(double)|false|Weight that this variation should receive. Only present if the experiment is running. This field is read-only.|
|» » won|body|boolean|false|True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.|
|» webPropertyId|body|string|false|Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.|
|» winnerConfidenceLevel|body|number(double)|false|A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.|
|» winnerFound|body|boolean|false|Boolean specifying whether a winner has been found for this experiment. This field is read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Experiment](#schemaexperiment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.experiments.delete

<a id="opIdanalytics.management.experiments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/experiments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`

Delete an experiment.

<h3 id="analyticsmanagementexperimentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the experiment belongs|
|webPropertyId|path|string|true|Web property ID to which the experiment belongs|
|profileId|path|string|true|View (Profile) ID to which the experiment belongs|
|experimentId|path|string|true|ID of the experiment to delete|
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
|alt|json|

<h3 id="analyticsmanagementexperimentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.experiments.patch

<a id="opIdanalytics.management.experiments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/experiments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "created": "1970-01-01T00:00:00Z",
    "description": "string",
    "editableInGaUi": true,
    "endTime": "1970-01-01T00:00:00Z",
    "equalWeighting": true,
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#experiment",
    "minimumExperimentLengthInDays": 0,
    "name": "string",
    "objectiveMetric": "string",
    "optimizationType": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#profile"
    },
    "profileId": "string",
    "reasonExperimentEnded": "string",
    "rewriteVariationUrlsAsOriginal": true,
    "selfLink": "string",
    "servingFramework": "string",
    "snippet": "string",
    "startTime": "1970-01-01T00:00:00Z",
    "status": "string",
    "trafficCoverage": 0,
    "updated": "1970-01-01T00:00:00Z",
    "variations": [
      {
        "name": "string",
        "status": "string",
        "url": "string",
        "weight": 0,
        "won": true
      }
    ],
    "webPropertyId": "string",
    "winnerConfidenceLevel": 0,
    "winnerFound": true
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`

Update an existing experiment. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the experiment to update.|
|webPropertyId|path|string|true|Web property ID of the experiment to update.|
|profileId|path|string|true|View (Profile) ID of the experiment to update.|
|experimentId|path|string|true|Experiment ID of the experiment to update.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Experiment](#schemaexperiment)|false|none|
|» accountId|body|string|false|Account ID to which this experiment belongs. This field is read-only.|
|» created|body|string(date-time)|false|Time the experiment was created. This field is read-only.|
|» description|body|string|false|Notes about this experiment.|
|» editableInGaUi|body|boolean|false|If true, the end user will be able to edit the experiment via the Google Analytics user interface.|
|» endTime|body|string(date-time)|false|The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.|
|» equalWeighting|body|boolean|false|Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.|
|» id|body|string|false|Experiment ID. Required for patch and update. Disallowed for create.|
|» internalWebPropertyId|body|string|false|Internal ID for the web property to which this experiment belongs. This field is read-only.|
|» kind|body|string|false|Resource type for an Analytics experiment. This field is read-only.|
|» minimumExperimentLengthInDays|body|integer(int32)|false|An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|» name|body|string|false|Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.|
|» objectiveMetric|body|string|false|The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".|
|» optimizationType|body|string|false|Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".|
|» parentLink|body|object|false|Parent link for an experiment. Points to the view (profile) to which this experiment belongs.|
|» » href|body|string|false|Link to the view (profile) to which this experiment belongs. This field is read-only.|
|» » type|body|string|false|Value is "analytics#profile". This field is read-only.|
|» profileId|body|string|false|View (Profile) ID to which this experiment belongs. This field is read-only.|
|» reasonExperimentEnded|body|string|false|Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.|
|» rewriteVariationUrlsAsOriginal|body|boolean|false|Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.|
|» selfLink|body|string|false|Link for this experiment. This field is read-only.|
|» servingFramework|body|string|false|The framework used to serve the experiment variations and evaluate the results. One of:  <br>- REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.<br>- API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.<br>- EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.|
|» snippet|body|string|false|The snippet of code to include on the control page(s). This field is read-only.|
|» startTime|body|string(date-time)|false|The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.|
|» status|body|string|false|Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.|
|» trafficCoverage|body|number(double)|false|A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|» updated|body|string(date-time)|false|Time the experiment was last modified. This field is read-only.|
|» variations|body|[object]|false|Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.|
|» » name|body|string|false|The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.|
|» » status|body|string|false|Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.|
|» » url|body|string|false|The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.|
|» » weight|body|number(double)|false|Weight that this variation should receive. Only present if the experiment is running. This field is read-only.|
|» » won|body|boolean|false|True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.|
|» webPropertyId|body|string|false|Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.|
|» winnerConfidenceLevel|body|number(double)|false|A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.|
|» winnerFound|body|boolean|false|Boolean specifying whether a winner has been found for this experiment. This field is read-only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

<h3 id="analyticsmanagementexperimentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Experiment](#schemaexperiment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.goals.list

<a id="opIdanalytics.management.goals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/goals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals`

Lists goals to which the user has access.

<h3 id="analyticsmanagementgoalslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.|
|webPropertyId|path|string|true|Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.|
|profileId|path|string|true|View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.|
|max-results|query|integer|false|The maximum number of goals to include in this response.|
|start-index|query|integer|false|An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "active": true,
      "created": "1970-01-01T00:00:00Z",
      "eventDetails": {
        "eventConditions": [
          {
            "comparisonType": "string",
            "comparisonValue": "string",
            "expression": "string",
            "matchType": "string",
            "type": "string"
          }
        ],
        "useEventValue": true
      },
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#goal",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#profile"
      },
      "profileId": "string",
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "urlDestinationDetails": {
        "caseSensitive": true,
        "firstStepRequired": true,
        "matchType": "string",
        "steps": [
          {
            "name": "string",
            "number": 0,
            "url": "string"
          }
        ],
        "url": "string"
      },
      "value": 0,
      "visitNumPagesDetails": {
        "comparisonType": "string",
        "comparisonValue": "string"
      },
      "visitTimeOnSiteDetails": {
        "comparisonType": "string",
        "comparisonValue": "string"
      },
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#goals",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementgoalslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Goals](#schemagoals)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.goals.insert

<a id="opIdanalytics.management.goals.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/goals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "created": "1970-01-01T00:00:00Z",
    "eventDetails": {
      "eventConditions": [
        {
          "comparisonType": "string",
          "comparisonValue": "string",
          "expression": "string",
          "matchType": "string",
          "type": "string"
        }
      ],
      "useEventValue": true
    },
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#goal",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#profile"
    },
    "profileId": "string",
    "selfLink": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "urlDestinationDetails": {
      "caseSensitive": true,
      "firstStepRequired": true,
      "matchType": "string",
      "steps": [
        {
          "name": "string",
          "number": 0,
          "url": "string"
        }
      ],
      "url": "string"
    },
    "value": 0,
    "visitNumPagesDetails": {
      "comparisonType": "string",
      "comparisonValue": "string"
    },
    "visitTimeOnSiteDetails": {
      "comparisonType": "string",
      "comparisonValue": "string"
    },
    "webPropertyId": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals`

Create a new goal.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the goal for.|
|webPropertyId|path|string|true|Web property ID to create the goal for.|
|profileId|path|string|true|View (Profile) ID to create the goal for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Goal](#schemagoal)|false|none|
|» accountId|body|string|false|Account ID to which this goal belongs.|
|» active|body|boolean|false|Determines whether this goal is active.|
|» created|body|string(date-time)|false|Time this goal was created.|
|» eventDetails|body|object|false|Details for the goal of the type EVENT.|
|» » eventConditions|body|[object]|false|List of event conditions.|
|» » » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.|
|» » » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» » » expression|body|string|false|Expression used for this match.|
|» » » matchType|body|string|false|Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.|
|» » » type|body|string|false|Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.|
|» » useEventValue|body|boolean|false|Determines if the event value should be used as the value for this goal.|
|» id|body|string|false|Goal ID.|
|» internalWebPropertyId|body|string|false|Internal ID for the web property to which this goal belongs.|
|» kind|body|string|false|Resource type for an Analytics goal.|
|» name|body|string|false|Goal name.|
|» parentLink|body|object|false|Parent link for a goal. Points to the view (profile) to which this goal belongs.|
|» » href|body|string|false|Link to the view (profile) to which this goal belongs.|
|» » type|body|string|false|Value is "analytics#profile".|
|» profileId|body|string|false|View (Profile) ID to which this goal belongs.|
|» selfLink|body|string|false|Link for this goal.|
|» type|body|string|false|Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.|
|» updated|body|string(date-time)|false|Time this goal was last modified.|
|» urlDestinationDetails|body|object|false|Details for the goal of the type URL_DESTINATION.|
|» » caseSensitive|body|boolean|false|Determines if the goal URL must exactly match the capitalization of visited URLs.|
|» » firstStepRequired|body|boolean|false|Determines if the first step in this goal is required.|
|» » matchType|body|string|false|Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.|
|» » steps|body|[object]|false|List of steps configured for this goal funnel.|
|» » » name|body|string|false|Step name.|
|» » » number|body|integer(int32)|false|Step number.|
|» » » url|body|string|false|URL for this step.|
|» » url|body|string|false|URL for this goal.|
|» value|body|number(float)|false|Goal value.|
|» visitNumPagesDetails|body|object|false|Details for the goal of the type VISIT_NUM_PAGES.|
|» » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.|
|» » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» visitTimeOnSiteDetails|body|object|false|Details for the goal of the type VISIT_TIME_ON_SITE.|
|» » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN or GREATER_THAN.|
|» » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» webPropertyId|body|string|false|Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Goal](#schemagoal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.goals.get

<a id="opIdanalytics.management.goals.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/goals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`

Gets a goal to which the user has access.

<h3 id="analyticsmanagementgoalsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve the goal for.|
|webPropertyId|path|string|true|Web property ID to retrieve the goal for.|
|profileId|path|string|true|View (Profile) ID to retrieve the goal for.|
|goalId|path|string|true|Goal ID to retrieve the goal for.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Goal](#schemagoal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.goals.update

<a id="opIdanalytics.management.goals.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/goals/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "created": "1970-01-01T00:00:00Z",
    "eventDetails": {
      "eventConditions": [
        {
          "comparisonType": "string",
          "comparisonValue": "string",
          "expression": "string",
          "matchType": "string",
          "type": "string"
        }
      ],
      "useEventValue": true
    },
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#goal",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#profile"
    },
    "profileId": "string",
    "selfLink": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "urlDestinationDetails": {
      "caseSensitive": true,
      "firstStepRequired": true,
      "matchType": "string",
      "steps": [
        {
          "name": "string",
          "number": 0,
          "url": "string"
        }
      ],
      "url": "string"
    },
    "value": 0,
    "visitNumPagesDetails": {
      "comparisonType": "string",
      "comparisonValue": "string"
    },
    "visitTimeOnSiteDetails": {
      "comparisonType": "string",
      "comparisonValue": "string"
    },
    "webPropertyId": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`

Updates an existing goal.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to update the goal.|
|webPropertyId|path|string|true|Web property ID to update the goal.|
|profileId|path|string|true|View (Profile) ID to update the goal.|
|goalId|path|string|true|Index of the goal to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Goal](#schemagoal)|false|none|
|» accountId|body|string|false|Account ID to which this goal belongs.|
|» active|body|boolean|false|Determines whether this goal is active.|
|» created|body|string(date-time)|false|Time this goal was created.|
|» eventDetails|body|object|false|Details for the goal of the type EVENT.|
|» » eventConditions|body|[object]|false|List of event conditions.|
|» » » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.|
|» » » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» » » expression|body|string|false|Expression used for this match.|
|» » » matchType|body|string|false|Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.|
|» » » type|body|string|false|Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.|
|» » useEventValue|body|boolean|false|Determines if the event value should be used as the value for this goal.|
|» id|body|string|false|Goal ID.|
|» internalWebPropertyId|body|string|false|Internal ID for the web property to which this goal belongs.|
|» kind|body|string|false|Resource type for an Analytics goal.|
|» name|body|string|false|Goal name.|
|» parentLink|body|object|false|Parent link for a goal. Points to the view (profile) to which this goal belongs.|
|» » href|body|string|false|Link to the view (profile) to which this goal belongs.|
|» » type|body|string|false|Value is "analytics#profile".|
|» profileId|body|string|false|View (Profile) ID to which this goal belongs.|
|» selfLink|body|string|false|Link for this goal.|
|» type|body|string|false|Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.|
|» updated|body|string(date-time)|false|Time this goal was last modified.|
|» urlDestinationDetails|body|object|false|Details for the goal of the type URL_DESTINATION.|
|» » caseSensitive|body|boolean|false|Determines if the goal URL must exactly match the capitalization of visited URLs.|
|» » firstStepRequired|body|boolean|false|Determines if the first step in this goal is required.|
|» » matchType|body|string|false|Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.|
|» » steps|body|[object]|false|List of steps configured for this goal funnel.|
|» » » name|body|string|false|Step name.|
|» » » number|body|integer(int32)|false|Step number.|
|» » » url|body|string|false|URL for this step.|
|» » url|body|string|false|URL for this goal.|
|» value|body|number(float)|false|Goal value.|
|» visitNumPagesDetails|body|object|false|Details for the goal of the type VISIT_NUM_PAGES.|
|» » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.|
|» » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» visitTimeOnSiteDetails|body|object|false|Details for the goal of the type VISIT_TIME_ON_SITE.|
|» » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN or GREATER_THAN.|
|» » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» webPropertyId|body|string|false|Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Goal](#schemagoal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.goals.patch

<a id="opIdanalytics.management.goals.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/goals/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "active": true,
    "created": "1970-01-01T00:00:00Z",
    "eventDetails": {
      "eventConditions": [
        {
          "comparisonType": "string",
          "comparisonValue": "string",
          "expression": "string",
          "matchType": "string",
          "type": "string"
        }
      ],
      "useEventValue": true
    },
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#goal",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#profile"
    },
    "profileId": "string",
    "selfLink": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "urlDestinationDetails": {
      "caseSensitive": true,
      "firstStepRequired": true,
      "matchType": "string",
      "steps": [
        {
          "name": "string",
          "number": 0,
          "url": "string"
        }
      ],
      "url": "string"
    },
    "value": 0,
    "visitNumPagesDetails": {
      "comparisonType": "string",
      "comparisonValue": "string"
    },
    "visitTimeOnSiteDetails": {
      "comparisonType": "string",
      "comparisonValue": "string"
    },
    "webPropertyId": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`

Updates an existing goal. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to update the goal.|
|webPropertyId|path|string|true|Web property ID to update the goal.|
|profileId|path|string|true|View (Profile) ID to update the goal.|
|goalId|path|string|true|Index of the goal to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Goal](#schemagoal)|false|none|
|» accountId|body|string|false|Account ID to which this goal belongs.|
|» active|body|boolean|false|Determines whether this goal is active.|
|» created|body|string(date-time)|false|Time this goal was created.|
|» eventDetails|body|object|false|Details for the goal of the type EVENT.|
|» » eventConditions|body|[object]|false|List of event conditions.|
|» » » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.|
|» » » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» » » expression|body|string|false|Expression used for this match.|
|» » » matchType|body|string|false|Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.|
|» » » type|body|string|false|Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.|
|» » useEventValue|body|boolean|false|Determines if the event value should be used as the value for this goal.|
|» id|body|string|false|Goal ID.|
|» internalWebPropertyId|body|string|false|Internal ID for the web property to which this goal belongs.|
|» kind|body|string|false|Resource type for an Analytics goal.|
|» name|body|string|false|Goal name.|
|» parentLink|body|object|false|Parent link for a goal. Points to the view (profile) to which this goal belongs.|
|» » href|body|string|false|Link to the view (profile) to which this goal belongs.|
|» » type|body|string|false|Value is "analytics#profile".|
|» profileId|body|string|false|View (Profile) ID to which this goal belongs.|
|» selfLink|body|string|false|Link for this goal.|
|» type|body|string|false|Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.|
|» updated|body|string(date-time)|false|Time this goal was last modified.|
|» urlDestinationDetails|body|object|false|Details for the goal of the type URL_DESTINATION.|
|» » caseSensitive|body|boolean|false|Determines if the goal URL must exactly match the capitalization of visited URLs.|
|» » firstStepRequired|body|boolean|false|Determines if the first step in this goal is required.|
|» » matchType|body|string|false|Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.|
|» » steps|body|[object]|false|List of steps configured for this goal funnel.|
|» » » name|body|string|false|Step name.|
|» » » number|body|integer(int32)|false|Step number.|
|» » » url|body|string|false|URL for this step.|
|» » url|body|string|false|URL for this goal.|
|» value|body|number(float)|false|Goal value.|
|» visitNumPagesDetails|body|object|false|Details for the goal of the type VISIT_NUM_PAGES.|
|» » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.|
|» » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» visitTimeOnSiteDetails|body|object|false|Details for the goal of the type VISIT_TIME_ON_SITE.|
|» » comparisonType|body|string|false|Type of comparison. Possible values are LESS_THAN or GREATER_THAN.|
|» » comparisonValue|body|string(int64)|false|Value used for this comparison.|
|» webPropertyId|body|string|false|Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementgoalspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Goal](#schemagoal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profileFilterLinks.list

<a id="opIdanalytics.management.profileFilterLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/profileFilterLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks`

Lists all profile filter links for a profile.

<h3 id="analyticsmanagementprofilefilterlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve profile filter links for.|
|webPropertyId|path|string|true|Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.|
|profileId|path|string|true|Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.|
|max-results|query|integer|false|The maximum number of profile filter links to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "filterRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "kind": "analytics#filterRef",
        "name": "string"
      },
      "id": "string",
      "kind": "analytics#profileFilterLink",
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "rank": 0,
      "selfLink": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#profileFilterLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementprofilefilterlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProfileFilterLinks](#schemaprofilefilterlinks)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.profileFilterLinks.insert

<a id="opIdanalytics.management.profileFilterLinks.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/profileFilterLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filterRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#filterRef"
    },
    "id": "string",
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "rank": 0
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks`

Create a new profile filter link.

> Body parameter

```json
{
  "filterRef": {
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef"
  },
  "id": "string",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0
}
```

<h3 id="analyticsmanagementprofilefilterlinksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create profile filter link for.|
|webPropertyId|path|string|true|Web property Id to create profile filter link for.|
|profileId|path|string|true|Profile ID to create filter link for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ProfileFilterLink](#schemaprofilefilterlink)|false|none|
|» filterRef|body|[FilterRef](#schemafilterref)|false|Filter for this link.|
|» id|body|string|false|Profile filter link ID.|
|» profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» rank|body|integer(int32)|false|The rank of this profile filter link relative to the other filters linked to the same profile.<br>For readonly (i.e., list and get) operations, the rank always starts at 1.<br>For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "filterRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef",
    "name": "string"
  },
  "id": "string",
  "kind": "analytics#profileFilterLink",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0,
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementprofilefilterlinksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProfileFilterLink](#schemaprofilefilterlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profileFilterLinks.get

<a id="opIdanalytics.management.profileFilterLinks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/profileFilterLinks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`

Returns a single profile filter link.

<h3 id="analyticsmanagementprofilefilterlinksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve profile filter link for.|
|webPropertyId|path|string|true|Web property Id to retrieve profile filter link for.|
|profileId|path|string|true|Profile ID to retrieve filter link for.|
|linkId|path|string|true|ID of the profile filter link.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "filterRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef",
    "name": "string"
  },
  "id": "string",
  "kind": "analytics#profileFilterLink",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0,
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementprofilefilterlinksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProfileFilterLink](#schemaprofilefilterlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.profileFilterLinks.update

<a id="opIdanalytics.management.profileFilterLinks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/profileFilterLinks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filterRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#filterRef"
    },
    "id": "string",
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "rank": 0
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`

Update an existing profile filter link.

> Body parameter

```json
{
  "filterRef": {
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef"
  },
  "id": "string",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0
}
```

<h3 id="analyticsmanagementprofilefilterlinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which profile filter link belongs.|
|webPropertyId|path|string|true|Web property Id to which profile filter link belongs|
|profileId|path|string|true|Profile ID to which filter link belongs|
|linkId|path|string|true|ID of the profile filter link to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ProfileFilterLink](#schemaprofilefilterlink)|false|none|
|» filterRef|body|[FilterRef](#schemafilterref)|false|Filter for this link.|
|» id|body|string|false|Profile filter link ID.|
|» profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» rank|body|integer(int32)|false|The rank of this profile filter link relative to the other filters linked to the same profile.<br>For readonly (i.e., list and get) operations, the rank always starts at 1.<br>For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "filterRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef",
    "name": "string"
  },
  "id": "string",
  "kind": "analytics#profileFilterLink",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0,
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementprofilefilterlinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProfileFilterLink](#schemaprofilefilterlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profileFilterLinks.delete

<a id="opIdanalytics.management.profileFilterLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/profileFilterLinks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`

Delete a profile filter link.

<h3 id="analyticsmanagementprofilefilterlinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the profile filter link belongs.|
|webPropertyId|path|string|true|Web property Id to which the profile filter link belongs.|
|profileId|path|string|true|Profile ID to which the filter link belongs.|
|linkId|path|string|true|ID of the profile filter link to delete.|
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
|alt|json|

<h3 id="analyticsmanagementprofilefilterlinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.profileFilterLinks.patch

<a id="opIdanalytics.management.profileFilterLinks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/profileFilterLinks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filterRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#filterRef"
    },
    "id": "string",
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "rank": 0
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`

Update an existing profile filter link. This method supports patch semantics.

> Body parameter

```json
{
  "filterRef": {
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef"
  },
  "id": "string",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0
}
```

<h3 id="analyticsmanagementprofilefilterlinkspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which profile filter link belongs.|
|webPropertyId|path|string|true|Web property Id to which profile filter link belongs|
|profileId|path|string|true|Profile ID to which filter link belongs|
|linkId|path|string|true|ID of the profile filter link to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[ProfileFilterLink](#schemaprofilefilterlink)|false|none|
|» filterRef|body|[FilterRef](#schemafilterref)|false|Filter for this link.|
|» id|body|string|false|Profile filter link ID.|
|» profileRef|body|[ProfileRef](#schemaprofileref)|false|View (Profile) for this link.|
|» rank|body|integer(int32)|false|The rank of this profile filter link relative to the other filters linked to the same profile.<br>For readonly (i.e., list and get) operations, the rank always starts at 1.<br>For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "filterRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef",
    "name": "string"
  },
  "id": "string",
  "kind": "analytics#profileFilterLink",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0,
  "selfLink": "string"
}
```

<h3 id="analyticsmanagementprofilefilterlinkspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProfileFilterLink](#schemaprofilefilterlink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.unsampledReports.list

<a id="opIdanalytics.management.unsampledReports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/unsampledReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports`

Lists unsampled reports to which the user has access.

<h3 id="analyticsmanagementunsampledreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.|
|webPropertyId|path|string|true|Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.|
|profileId|path|string|true|View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.|
|max-results|query|integer|false|The maximum number of unsampled reports to include in this response.|
|start-index|query|integer|false|An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "cloudStorageDownloadDetails": {
        "bucketId": "string",
        "objectId": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "dimensions": "string",
      "downloadType": "string",
      "driveDownloadDetails": {
        "documentId": "string"
      },
      "end-date": "string",
      "filters": "string",
      "id": "string",
      "kind": "analytics#unsampledReport",
      "metrics": "string",
      "profileId": "string",
      "segment": "string",
      "selfLink": "string",
      "start-date": "string",
      "status": "string",
      "title": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#unsampledReports",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementunsampledreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UnsampledReports](#schemaunsampledreports)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.unsampledReports.insert

<a id="opIdanalytics.management.unsampledReports.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/unsampledReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "dimensions": "string",
    "end-date": "string",
    "filters": "string",
    "id": "string",
    "metrics": "string",
    "profileId": "string",
    "segment": "string",
    "start-date": "string",
    "title": "string",
    "webPropertyId": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports`

Create a new unsampled report.

> Body parameter

```json
{
  "accountId": "string",
  "dimensions": "string",
  "end-date": "string",
  "filters": "string",
  "id": "string",
  "metrics": "string",
  "profileId": "string",
  "segment": "string",
  "start-date": "string",
  "title": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementunsampledreportsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to create the unsampled report for.|
|webPropertyId|path|string|true|Web property ID to create the unsampled report for.|
|profileId|path|string|true|View (Profile) ID to create the unsampled report for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[UnsampledReport](#schemaunsampledreport)|false|none|
|» accountId|body|string|false|Account ID to which this unsampled report belongs.|
|» dimensions|body|string|false|The dimensions for the unsampled report.|
|» end-date|body|string|false|The end date for the unsampled report.|
|» filters|body|string|false|The filters for the unsampled report.|
|» id|body|string|false|Unsampled report ID.|
|» metrics|body|string|false|The metrics for the unsampled report.|
|» profileId|body|string|false|View (Profile) ID to which this unsampled report belongs.|
|» segment|body|string|false|The segment for the unsampled report.|
|» start-date|body|string|false|The start date for the unsampled report.|
|» title|body|string|false|Title of the unsampled report.|
|» webPropertyId|body|string|false|Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "cloudStorageDownloadDetails": {
    "bucketId": "string",
    "objectId": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "dimensions": "string",
  "downloadType": "string",
  "driveDownloadDetails": {
    "documentId": "string"
  },
  "end-date": "string",
  "filters": "string",
  "id": "string",
  "kind": "analytics#unsampledReport",
  "metrics": "string",
  "profileId": "string",
  "segment": "string",
  "selfLink": "string",
  "start-date": "string",
  "status": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementunsampledreportsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UnsampledReport](#schemaunsampledreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.unsampledReports.get

<a id="opIdanalytics.management.unsampledReports.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/unsampledReports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}`

Returns a single unsampled report.

<h3 id="analyticsmanagementunsampledreportsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to retrieve unsampled report for.|
|webPropertyId|path|string|true|Web property ID to retrieve unsampled reports for.|
|profileId|path|string|true|View (Profile) ID to retrieve unsampled report for.|
|unsampledReportId|path|string|true|ID of the unsampled report to retrieve.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "cloudStorageDownloadDetails": {
    "bucketId": "string",
    "objectId": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "dimensions": "string",
  "downloadType": "string",
  "driveDownloadDetails": {
    "documentId": "string"
  },
  "end-date": "string",
  "filters": "string",
  "id": "string",
  "kind": "analytics#unsampledReport",
  "metrics": "string",
  "profileId": "string",
  "segment": "string",
  "selfLink": "string",
  "start-date": "string",
  "status": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementunsampledreportsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UnsampledReport](#schemaunsampledreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.unsampledReports.delete

<a id="opIdanalytics.management.unsampledReports.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/profiles/string/unsampledReports/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}`

Deletes an unsampled report.

<h3 id="analyticsmanagementunsampledreportsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to delete the unsampled report for.|
|webPropertyId|path|string|true|Web property ID to delete the unsampled reports for.|
|profileId|path|string|true|View (Profile) ID to delete the unsampled report for.|
|unsampledReportId|path|string|true|ID of the unsampled report to be deleted.|
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
|alt|json|

<h3 id="analyticsmanagementunsampledreportsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.remarketingAudience.list

<a id="opIdanalytics.management.remarketingAudience.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/remarketingAudiences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences`

Lists remarketing audiences to which the user has access.

<h3 id="analyticsmanagementremarketingaudiencelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account ID of the remarketing audiences to retrieve.|
|webPropertyId|path|string|true|The web property ID of the remarketing audiences to retrieve.|
|max-results|query|integer|false|The maximum number of remarketing audiences to include in this response.|
|start-index|query|integer|false|An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
|type|query|string|false|none|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": "string",
      "audienceDefinition": {
        "includeConditions": {
          "daysToLookBack": 0,
          "isSmartList": true,
          "kind": "analytics#includeConditions",
          "membershipDurationDays": 0,
          "segment": "string"
        }
      },
      "audienceType": "string",
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#remarketingAudience",
      "linkedAdAccounts": [
        {
          "accountId": "string",
          "eligibleForSearch": true,
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#linkedForeignAccount",
          "linkedAccountId": "string",
          "remarketingAudienceId": "string",
          "status": "string",
          "type": "string",
          "webPropertyId": "string"
        }
      ],
      "linkedViews": [
        "string"
      ],
      "name": "string",
      "stateBasedAudienceDefinition": {
        "excludeConditions": {
          "exclusionDuration": "string",
          "segment": "string"
        },
        "includeConditions": {
          "daysToLookBack": 0,
          "isSmartList": true,
          "kind": "analytics#includeConditions",
          "membershipDurationDays": 0,
          "segment": "string"
        }
      },
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#remarketingAudiences",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementremarketingaudiencelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemarketingAudiences](#schemaremarketingaudiences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.remarketingAudience.insert

<a id="opIdanalytics.management.remarketingAudience.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/remarketingAudiences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "audienceDefinition": {
      "includeConditions": {
        "daysToLookBack": 0,
        "isSmartList": true,
        "kind": "analytics#includeConditions",
        "membershipDurationDays": 0,
        "segment": "string"
      }
    },
    "audienceType": "string",
    "id": "string",
    "kind": "analytics#remarketingAudience",
    "linkedAdAccounts": [
      {
        "accountId": "string",
        "id": "string",
        "kind": "analytics#linkedForeignAccount",
        "linkedAccountId": "string",
        "remarketingAudienceId": "string",
        "status": "string",
        "type": "string",
        "webPropertyId": "string"
      }
    ],
    "linkedViews": [
      "string"
    ],
    "name": "string",
    "stateBasedAudienceDefinition": {
      "excludeConditions": {
        "exclusionDuration": "string",
        "segment": "string"
      },
      "includeConditions": {
        "daysToLookBack": 0,
        "isSmartList": true,
        "kind": "analytics#includeConditions",
        "membershipDurationDays": 0,
        "segment": "string"
      }
    },
    "webPropertyId": "string"
  }'
```

`POST /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences`

Creates a new remarketing audience.

> Body parameter

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "id": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "id": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudienceinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account ID for which to create the remarketing audience.|
|webPropertyId|path|string|true|Web property ID for which to create the remarketing audience.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[RemarketingAudience](#schemaremarketingaudience)|false|none|
|» accountId|body|string|false|Account ID to which this remarketing audience belongs.|
|» audienceDefinition|body|object|false|The simple audience definition that will cause a user to be added to an audience.|
|» » includeConditions|body|[IncludeConditions](#schemaincludeconditions)|false|Defines the conditions to include users to the audience.|
|» audienceType|body|string|false|The type of audience, either SIMPLE or STATE_BASED.|
|» id|body|string|false|Remarketing Audience ID.|
|» kind|body|string|false|Collection type.|
|» linkedAdAccounts|body|[[LinkedForeignAccount](#schemalinkedforeignaccount)]|false|The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.|
|» linkedViews|body|[string]|false|The views (profiles) that this remarketing audience is linked to.|
|» name|body|string|false|The name of this remarketing audience.|
|» stateBasedAudienceDefinition|body|object|false|A state based audience definition that will cause a user to be added or removed from an audience.|
|» » excludeConditions|body|object|false|Defines the conditions to exclude users from the audience.|
|» » » exclusionDuration|body|string|false|Whether to make the exclusion TEMPORARY or PERMANENT.|
|» » » segment|body|string|false|The segment condition that will cause a user to be removed from an audience.|
|» » includeConditions|body|[IncludeConditions](#schemaincludeconditions)|false|Defines the conditions to include users to the audience.|
|» webPropertyId|body|string|false|Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "eligibleForSearch": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudienceinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemarketingAudience](#schemaremarketingaudience)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.remarketingAudience.get

<a id="opIdanalytics.management.remarketingAudience.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/remarketingAudiences/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`

Gets a remarketing audience to which the user has access.

<h3 id="analyticsmanagementremarketingaudienceget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account ID of the remarketing audience to retrieve.|
|webPropertyId|path|string|true|The web property ID of the remarketing audience to retrieve.|
|remarketingAudienceId|path|string|true|The ID of the remarketing audience to retrieve.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "eligibleForSearch": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudienceget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemarketingAudience](#schemaremarketingaudience)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.remarketingAudience.update

<a id="opIdanalytics.management.remarketingAudience.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/remarketingAudiences/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "audienceDefinition": {
      "includeConditions": {
        "daysToLookBack": 0,
        "isSmartList": true,
        "kind": "analytics#includeConditions",
        "membershipDurationDays": 0,
        "segment": "string"
      }
    },
    "audienceType": "string",
    "id": "string",
    "kind": "analytics#remarketingAudience",
    "linkedAdAccounts": [
      {
        "accountId": "string",
        "id": "string",
        "kind": "analytics#linkedForeignAccount",
        "linkedAccountId": "string",
        "remarketingAudienceId": "string",
        "status": "string",
        "type": "string",
        "webPropertyId": "string"
      }
    ],
    "linkedViews": [
      "string"
    ],
    "name": "string",
    "stateBasedAudienceDefinition": {
      "excludeConditions": {
        "exclusionDuration": "string",
        "segment": "string"
      },
      "includeConditions": {
        "daysToLookBack": 0,
        "isSmartList": true,
        "kind": "analytics#includeConditions",
        "membershipDurationDays": 0,
        "segment": "string"
      }
    },
    "webPropertyId": "string"
  }'
```

`PUT /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`

Updates an existing remarketing audience.

> Body parameter

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "id": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "id": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudienceupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account ID of the remarketing audience to update.|
|webPropertyId|path|string|true|The web property ID of the remarketing audience to update.|
|remarketingAudienceId|path|string|true|The ID of the remarketing audience to update.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[RemarketingAudience](#schemaremarketingaudience)|false|none|
|» accountId|body|string|false|Account ID to which this remarketing audience belongs.|
|» audienceDefinition|body|object|false|The simple audience definition that will cause a user to be added to an audience.|
|» » includeConditions|body|[IncludeConditions](#schemaincludeconditions)|false|Defines the conditions to include users to the audience.|
|» audienceType|body|string|false|The type of audience, either SIMPLE or STATE_BASED.|
|» id|body|string|false|Remarketing Audience ID.|
|» kind|body|string|false|Collection type.|
|» linkedAdAccounts|body|[[LinkedForeignAccount](#schemalinkedforeignaccount)]|false|The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.|
|» linkedViews|body|[string]|false|The views (profiles) that this remarketing audience is linked to.|
|» name|body|string|false|The name of this remarketing audience.|
|» stateBasedAudienceDefinition|body|object|false|A state based audience definition that will cause a user to be added or removed from an audience.|
|» » excludeConditions|body|object|false|Defines the conditions to exclude users from the audience.|
|» » » exclusionDuration|body|string|false|Whether to make the exclusion TEMPORARY or PERMANENT.|
|» » » segment|body|string|false|The segment condition that will cause a user to be removed from an audience.|
|» » includeConditions|body|[IncludeConditions](#schemaincludeconditions)|false|Defines the conditions to include users to the audience.|
|» webPropertyId|body|string|false|Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "eligibleForSearch": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudienceupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemarketingAudience](#schemaremarketingaudience)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.remarketingAudience.delete

<a id="opIdanalytics.management.remarketingAudience.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/remarketingAudiences/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`

Delete a remarketing audience.

<h3 id="analyticsmanagementremarketingaudiencedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID to which the remarketing audience belongs.|
|webPropertyId|path|string|true|Web property ID to which the remarketing audience belongs.|
|remarketingAudienceId|path|string|true|The ID of the remarketing audience to delete.|
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
|alt|json|

<h3 id="analyticsmanagementremarketingaudiencedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.remarketingAudience.patch

<a id="opIdanalytics.management.remarketingAudience.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/accounts/string/webproperties/string/remarketingAudiences/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "audienceDefinition": {
      "includeConditions": {
        "daysToLookBack": 0,
        "isSmartList": true,
        "kind": "analytics#includeConditions",
        "membershipDurationDays": 0,
        "segment": "string"
      }
    },
    "audienceType": "string",
    "id": "string",
    "kind": "analytics#remarketingAudience",
    "linkedAdAccounts": [
      {
        "accountId": "string",
        "id": "string",
        "kind": "analytics#linkedForeignAccount",
        "linkedAccountId": "string",
        "remarketingAudienceId": "string",
        "status": "string",
        "type": "string",
        "webPropertyId": "string"
      }
    ],
    "linkedViews": [
      "string"
    ],
    "name": "string",
    "stateBasedAudienceDefinition": {
      "excludeConditions": {
        "exclusionDuration": "string",
        "segment": "string"
      },
      "includeConditions": {
        "daysToLookBack": 0,
        "isSmartList": true,
        "kind": "analytics#includeConditions",
        "membershipDurationDays": 0,
        "segment": "string"
      }
    },
    "webPropertyId": "string"
  }'
```

`PATCH /management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`

Updates an existing remarketing audience. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "id": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "id": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudiencepatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account ID of the remarketing audience to update.|
|webPropertyId|path|string|true|The web property ID of the remarketing audience to update.|
|remarketingAudienceId|path|string|true|The ID of the remarketing audience to update.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[RemarketingAudience](#schemaremarketingaudience)|false|none|
|» accountId|body|string|false|Account ID to which this remarketing audience belongs.|
|» audienceDefinition|body|object|false|The simple audience definition that will cause a user to be added to an audience.|
|» » includeConditions|body|[IncludeConditions](#schemaincludeconditions)|false|Defines the conditions to include users to the audience.|
|» audienceType|body|string|false|The type of audience, either SIMPLE or STATE_BASED.|
|» id|body|string|false|Remarketing Audience ID.|
|» kind|body|string|false|Collection type.|
|» linkedAdAccounts|body|[[LinkedForeignAccount](#schemalinkedforeignaccount)]|false|The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.|
|» linkedViews|body|[string]|false|The views (profiles) that this remarketing audience is linked to.|
|» name|body|string|false|The name of this remarketing audience.|
|» stateBasedAudienceDefinition|body|object|false|A state based audience definition that will cause a user to be added or removed from an audience.|
|» » excludeConditions|body|object|false|Defines the conditions to exclude users from the audience.|
|» » » exclusionDuration|body|string|false|Whether to make the exclusion TEMPORARY or PERMANENT.|
|» » » segment|body|string|false|The segment condition that will cause a user to be removed from an audience.|
|» » includeConditions|body|[IncludeConditions](#schemaincludeconditions)|false|Defines the conditions to include users to the audience.|
|» webPropertyId|body|string|false|Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "eligibleForSearch": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementremarketingaudiencepatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemarketingAudience](#schemaremarketingaudience)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit )
</aside>

## analytics.management.clientId.hashClientId

<a id="opIdanalytics.management.clientId.hashClientId"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/clientId:hashClientId \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientId": "string",
    "kind": "analytics#hashClientIdRequest",
    "webPropertyId": "string"
  }'
```

`POST /management/clientId:hashClientId`

Hashes the given Client ID.

> Body parameter

```json
{
  "clientId": "string",
  "kind": "analytics#hashClientIdRequest",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementclientidhashclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[HashClientIdRequest](#schemahashclientidrequest)|false|none|
|» clientId|body|string|false|none|
|» kind|body|string|false|none|
|» webPropertyId|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "clientId": "string",
  "hashedClientId": "string",
  "kind": "analytics#hashClientIdResponse",
  "webPropertyId": "string"
}
```

<h3 id="analyticsmanagementclientidhashclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HashClientIdResponse](#schemahashclientidresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

## analytics.management.segments.list

<a id="opIdanalytics.management.segments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/management/segments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /management/segments`

Lists segments to which the user has access.

<h3 id="analyticsmanagementsegmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max-results|query|integer|false|The maximum number of segments to include in this response.|
|start-index|query|integer|false|An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "created": "1970-01-01T00:00:00Z",
      "definition": "string",
      "id": "string",
      "kind": "analytics#segment",
      "name": "string",
      "segmentId": "string",
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#segments",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

<h3 id="analyticsmanagementsegmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Segments](#schemasegments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

<h1 id="google-analytics-api-metadata">metadata</h1>

## analytics.metadata.columns.list

<a id="opIdanalytics.metadata.columns.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/metadata/string/columns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metadata/{reportType}/columns`

Lists all columns for a report type

<h3 id="analyticsmetadatacolumnslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportType|path|string|true|Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API|
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
|alt|json|

> Example responses

> 200 Response

```json
{
  "attributeNames": [
    "string"
  ],
  "etag": "string",
  "items": [
    {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "id": "string",
      "kind": "analytics#column"
    }
  ],
  "kind": "analytics#columns",
  "totalResults": 0
}
```

<h3 id="analyticsmetadatacolumnslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Columns](#schemacolumns)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.edit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.edit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

<h1 id="google-analytics-api-provisioning">provisioning</h1>

## analytics.provisioning.createAccountTicket

<a id="opIdanalytics.provisioning.createAccountTicket"></a>

> Code samples

```bash
curl https://www.googleapis.com/provisioning/createAccountTicket \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account": {
      "childLink": {
        "href": "string",
        "type": "analytics#webproperties"
      },
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "analytics#account",
      "name": "string",
      "permissions": {},
      "selfLink": "string",
      "starred": true,
      "updated": "1970-01-01T00:00:00Z"
    },
    "id": "string",
    "kind": "analytics#accountTicket",
    "profile": {
      "accountId": "string",
      "botFilteringEnabled": true,
      "childLink": {
        "href": "string",
        "type": "analytics#goals"
      },
      "currency": "string",
      "defaultPage": "string",
      "eCommerceTracking": true,
      "enhancedECommerceTracking": true,
      "excludeQueryParameters": "string",
      "id": "string",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "permissions": {},
      "siteSearchCategoryParameters": "string",
      "siteSearchQueryParameters": "string",
      "starred": true,
      "stripSiteSearchCategoryParameters": true,
      "stripSiteSearchQueryParameters": true,
      "timezone": "string",
      "type": "string",
      "websiteUrl": "string"
    },
    "redirectUri": "string",
    "webproperty": {
      "accountId": "string",
      "childLink": {
        "href": "string",
        "type": "analytics#profiles"
      },
      "dataRetentionResetOnNewActivity": true,
      "dataRetentionTtl": "string",
      "defaultProfileId": "string",
      "id": "string",
      "industryVertical": "string",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#account"
      },
      "permissions": {},
      "starred": true,
      "websiteUrl": "string"
    }
  }'
```

`POST /provisioning/createAccountTicket`

Creates an account ticket.

> Body parameter

```json
{
  "account": {
    "childLink": {
      "href": "string",
      "type": "analytics#webproperties"
    },
    "created": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "analytics#account",
    "name": "string",
    "permissions": {},
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z"
  },
  "id": "string",
  "kind": "analytics#accountTicket",
  "profile": {
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {},
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "websiteUrl": "string"
  },
  "redirectUri": "string",
  "webproperty": {
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {},
    "starred": true,
    "websiteUrl": "string"
  }
}
```

<h3 id="analyticsprovisioningcreateaccountticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AccountTicket](#schemaaccountticket)|false|none|
|» account|body|[Account](#schemaaccount)|false|Account for this ticket.|
|» id|body|string|false|Account ticket ID used to access the account ticket.|
|» kind|body|string|false|Resource type for account ticket.|
|» profile|body|[Profile](#schemaprofile)|false|View (Profile) for the account.|
|» redirectUri|body|string|false|Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.|
|» webproperty|body|[Webproperty](#schemawebproperty)|false|Web property for the account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "account": {
    "childLink": {
      "href": "string",
      "type": "analytics#webproperties"
    },
    "created": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "analytics#account",
    "name": "string",
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z"
  },
  "id": "string",
  "kind": "analytics#accountTicket",
  "profile": {
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "created": "1970-01-01T00:00:00Z",
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profile",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "webPropertyId": "string",
    "websiteUrl": "string"
  },
  "redirectUri": "string",
  "webproperty": {
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "created": "1970-01-01T00:00:00Z",
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#webproperty",
    "level": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "profileCount": 0,
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z",
    "websiteUrl": "string"
  }
}
```

<h3 id="analyticsprovisioningcreateaccountticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountTicket](#schemaaccountticket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.provision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.provision )
</aside>

## analytics.provisioning.createAccountTree

<a id="opIdanalytics.provisioning.createAccountTree"></a>

> Code samples

```bash
curl https://www.googleapis.com/provisioning/createAccountTree \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountName": "string",
    "kind": "analytics#accountTreeRequest",
    "profileName": "string",
    "timezone": "string",
    "webpropertyName": "string",
    "websiteUrl": "string"
  }'
```

`POST /provisioning/createAccountTree`

Provision account.

> Body parameter

```json
{
  "accountName": "string",
  "kind": "analytics#accountTreeRequest",
  "profileName": "string",
  "timezone": "string",
  "webpropertyName": "string",
  "websiteUrl": "string"
}
```

<h3 id="analyticsprovisioningcreateaccounttree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AccountTreeRequest](#schemaaccounttreerequest)|false|none|
|» accountName|body|string|false|none|
|» kind|body|string|false|Resource type for account ticket.|
|» profileName|body|string|false|none|
|» timezone|body|string|false|none|
|» webpropertyName|body|string|false|none|
|» websiteUrl|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "account": {
    "childLink": {
      "href": "string",
      "type": "analytics#webproperties"
    },
    "created": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "analytics#account",
    "name": "string",
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z"
  },
  "kind": "analytics#accountTreeResponse",
  "profile": {
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "created": "1970-01-01T00:00:00Z",
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profile",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "webPropertyId": "string",
    "websiteUrl": "string"
  },
  "webproperty": {
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "created": "1970-01-01T00:00:00Z",
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#webproperty",
    "level": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "profileCount": 0,
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z",
    "websiteUrl": "string"
  }
}
```

<h3 id="analyticsprovisioningcreateaccounttree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountTreeResponse](#schemaaccounttreeresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.provision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.provision )
</aside>

<h1 id="google-analytics-api-userdeletion">userDeletion</h1>

## analytics.userDeletion.userDeletionRequest.upsert

<a id="opIdanalytics.userDeletion.userDeletionRequest.upsert"></a>

> Code samples

```bash
curl https://www.googleapis.com/userDeletion/userDeletionRequests:upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "firebaseProjectId": "string",
    "id": {
      "type": "string",
      "userId": "string"
    },
    "kind": "analytics#userDeletionRequest",
    "propertyId": "string",
    "webPropertyId": "string"
  }'
```

`POST /userDeletion/userDeletionRequests:upsert`

Insert or update a user deletion requests.

> Body parameter

```json
{
  "firebaseProjectId": "string",
  "id": {
    "type": "string",
    "userId": "string"
  },
  "kind": "analytics#userDeletionRequest",
  "propertyId": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsuserdeletionuserdeletionrequestupsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[UserDeletionRequest](#schemauserdeletionrequest)|false|none|
|» firebaseProjectId|body|string|false|Firebase Project Id|
|» id|body|object|false|User ID.|
|» » type|body|string|false|Type of user|
|» » userId|body|string|false|The User's id|
|» kind|body|string|false|Value is "analytics#userDeletionRequest".|
|» propertyId|body|string|false|Property ID|
|» webPropertyId|body|string|false|Web property ID of the form UA-XXXXX-YY.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "deletionRequestTime": "1970-01-01T00:00:00Z",
  "firebaseProjectId": "string",
  "id": {
    "type": "string",
    "userId": "string"
  },
  "kind": "analytics#userDeletionRequest",
  "propertyId": "string",
  "webPropertyId": "string"
}
```

<h3 id="analyticsuserdeletionuserdeletionrequestupsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserDeletionRequest](#schemauserdeletionrequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.user.deletion ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.user.deletion )
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
  "childLink": {
    "href": "string",
    "type": "analytics#webproperties"
  },
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "kind": "analytics#account",
  "name": "string",
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "selfLink": "string",
  "starred": true,
  "updated": "1970-01-01T00:00:00Z"
}
```

JSON template for Analytics account entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childLink|object|false|none|Child link for an account entry. Points to the list of web properties for this account.|
|created|string(date-time)|false|none|Time the account was created.|
|id|string|false|none|Account ID.|
|kind|string|false|none|Resource type for Analytics account.|
|name|string|false|none|Account name.|
|permissions|object|false|none|Permissions the user has for this account.|
|selfLink|string|false|none|Link for this account.|
|starred|boolean|false|none|Indicates whether this account is starred or not.|
|updated|string(date-time)|false|none|Time the account was last modified.|

<h2 id="tocS_AccountRef">AccountRef</h2>
<!-- backwards compatibility -->
<a id="schemaaccountref"></a>
<a id="schema_AccountRef"></a>
<a id="tocSaccountref"></a>
<a id="tocsaccountref"></a>

```json
{
  "href": "string",
  "id": "string",
  "kind": "analytics#accountRef",
  "name": "string"
}
```

JSON template for a linked account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|Link for this account.|
|id|string|false|none|Account ID.|
|kind|string|false|none|Analytics account reference.|
|name|string|false|none|Account name.|

<h2 id="tocS_AccountSummaries">AccountSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsummaries"></a>
<a id="schema_AccountSummaries"></a>
<a id="tocSaccountsummaries"></a>
<a id="tocsaccountsummaries"></a>

```json
{
  "items": [
    {
      "id": "string",
      "kind": "analytics#accountSummary",
      "name": "string",
      "starred": true,
      "webProperties": [
        {
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertySummary",
          "level": "string",
          "name": "string",
          "profiles": [
            {
              "id": "string",
              "kind": "analytics#profileSummary",
              "name": "string",
              "starred": true,
              "type": "string"
            }
          ],
          "starred": true,
          "websiteUrl": "string"
        }
      ]
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#accountSummaries",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AccountSummary](#schemaaccountsummary)]|false|none|A list of AccountSummaries.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this AccountSummary collection.|
|previousLink|string|false|none|Link to previous page for this AccountSummary collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_AccountSummary">AccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsummary"></a>
<a id="schema_AccountSummary"></a>
<a id="tocSaccountsummary"></a>
<a id="tocsaccountsummary"></a>

```json
{
  "id": "string",
  "kind": "analytics#accountSummary",
  "name": "string",
  "starred": true,
  "webProperties": [
    {
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertySummary",
      "level": "string",
      "name": "string",
      "profiles": [
        {
          "id": "string",
          "kind": "analytics#profileSummary",
          "name": "string",
          "starred": true,
          "type": "string"
        }
      ],
      "starred": true,
      "websiteUrl": "string"
    }
  ]
}
```

JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Account ID.|
|kind|string|false|none|Resource type for Analytics AccountSummary.|
|name|string|false|none|Account name.|
|starred|boolean|false|none|Indicates whether this account is starred or not.|
|webProperties|[[WebPropertySummary](#schemawebpropertysummary)]|false|none|List of web properties under this account.|

<h2 id="tocS_AccountTicket">AccountTicket</h2>
<!-- backwards compatibility -->
<a id="schemaaccountticket"></a>
<a id="schema_AccountTicket"></a>
<a id="tocSaccountticket"></a>
<a id="tocsaccountticket"></a>

```json
{
  "account": {
    "childLink": {
      "href": "string",
      "type": "analytics#webproperties"
    },
    "created": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "analytics#account",
    "name": "string",
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z"
  },
  "id": "string",
  "kind": "analytics#accountTicket",
  "profile": {
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "created": "1970-01-01T00:00:00Z",
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profile",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "webPropertyId": "string",
    "websiteUrl": "string"
  },
  "redirectUri": "string",
  "webproperty": {
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "created": "1970-01-01T00:00:00Z",
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#webproperty",
    "level": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "profileCount": 0,
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z",
    "websiteUrl": "string"
  }
}
```

JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|Account for this ticket.|
|id|string|false|none|Account ticket ID used to access the account ticket.|
|kind|string|false|none|Resource type for account ticket.|
|profile|[Profile](#schemaprofile)|false|none|View (Profile) for the account.|
|redirectUri|string|false|none|Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.|
|webproperty|[Webproperty](#schemawebproperty)|false|none|Web property for the account.|

<h2 id="tocS_AccountTreeRequest">AccountTreeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttreerequest"></a>
<a id="schema_AccountTreeRequest"></a>
<a id="tocSaccounttreerequest"></a>
<a id="tocsaccounttreerequest"></a>

```json
{
  "accountName": "string",
  "kind": "analytics#accountTreeRequest",
  "profileName": "string",
  "timezone": "string",
  "webpropertyName": "string",
  "websiteUrl": "string"
}
```

JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|kind|string|false|none|Resource type for account ticket.|
|profileName|string|false|none|none|
|timezone|string|false|none|none|
|webpropertyName|string|false|none|none|
|websiteUrl|string|false|none|none|

<h2 id="tocS_AccountTreeResponse">AccountTreeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttreeresponse"></a>
<a id="schema_AccountTreeResponse"></a>
<a id="tocSaccounttreeresponse"></a>
<a id="tocsaccounttreeresponse"></a>

```json
{
  "account": {
    "childLink": {
      "href": "string",
      "type": "analytics#webproperties"
    },
    "created": "1970-01-01T00:00:00Z",
    "id": "string",
    "kind": "analytics#account",
    "name": "string",
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z"
  },
  "kind": "analytics#accountTreeResponse",
  "profile": {
    "accountId": "string",
    "botFilteringEnabled": true,
    "childLink": {
      "href": "string",
      "type": "analytics#goals"
    },
    "created": "1970-01-01T00:00:00Z",
    "currency": "string",
    "defaultPage": "string",
    "eCommerceTracking": true,
    "enhancedECommerceTracking": true,
    "excludeQueryParameters": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profile",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#webproperty"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "selfLink": "string",
    "siteSearchCategoryParameters": "string",
    "siteSearchQueryParameters": "string",
    "starred": true,
    "stripSiteSearchCategoryParameters": true,
    "stripSiteSearchQueryParameters": true,
    "timezone": "string",
    "type": "string",
    "updated": "1970-01-01T00:00:00Z",
    "webPropertyId": "string",
    "websiteUrl": "string"
  },
  "webproperty": {
    "accountId": "string",
    "childLink": {
      "href": "string",
      "type": "analytics#profiles"
    },
    "created": "1970-01-01T00:00:00Z",
    "dataRetentionResetOnNewActivity": true,
    "dataRetentionTtl": "string",
    "defaultProfileId": "string",
    "id": "string",
    "industryVertical": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#webproperty",
    "level": "string",
    "name": "string",
    "parentLink": {
      "href": "string",
      "type": "analytics#account"
    },
    "permissions": {
      "effective": [
        "string"
      ]
    },
    "profileCount": 0,
    "selfLink": "string",
    "starred": true,
    "updated": "1970-01-01T00:00:00Z",
    "websiteUrl": "string"
  }
}
```

JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|The account created.|
|kind|string|false|none|Resource type for account ticket.|
|profile|[Profile](#schemaprofile)|false|none|View (Profile) for the account.|
|webproperty|[Webproperty](#schemawebproperty)|false|none|Web property for the account.|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
{
  "items": [
    {
      "childLink": {
        "href": "string",
        "type": "analytics#webproperties"
      },
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "kind": "analytics#account",
      "name": "string",
      "permissions": {
        "effective": [
          "string"
        ]
      },
      "selfLink": "string",
      "starred": true,
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#accounts",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Account](#schemaaccount)]|false|none|A list of accounts.|
|itemsPerPage|integer(int32)|false|none|The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Next link for this account collection.|
|previousLink|string|false|none|Previous link for this account collection.|
|startIndex|integer(int32)|false|none|The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_AdWordsAccount">AdWordsAccount</h2>
<!-- backwards compatibility -->
<a id="schemaadwordsaccount"></a>
<a id="schema_AdWordsAccount"></a>
<a id="tocSadwordsaccount"></a>
<a id="tocsadwordsaccount"></a>

```json
{
  "autoTaggingEnabled": true,
  "customerId": "string",
  "kind": "analytics#adWordsAccount"
}
```

JSON template for an Google Ads account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoTaggingEnabled|boolean|false|none|True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation.|
|customerId|string|false|none|Customer ID. This field is required when creating a Google Ads link.|
|kind|string|false|none|Resource type for Google Ads account.|

<h2 id="tocS_AnalyticsDataimportDeleteUploadDataRequest">AnalyticsDataimportDeleteUploadDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticsdataimportdeleteuploaddatarequest"></a>
<a id="schema_AnalyticsDataimportDeleteUploadDataRequest"></a>
<a id="tocSanalyticsdataimportdeleteuploaddatarequest"></a>
<a id="tocsanalyticsdataimportdeleteuploaddatarequest"></a>

```json
{
  "customDataImportUids": [
    "string"
  ]
}
```

Request template for the delete upload data request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customDataImportUids|[string]|false|none|A list of upload UIDs.|

<h2 id="tocS_Column">Column</h2>
<!-- backwards compatibility -->
<a id="schemacolumn"></a>
<a id="schema_Column"></a>
<a id="tocScolumn"></a>
<a id="tocscolumn"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "id": "string",
  "kind": "analytics#column"
}
```

JSON template for a metadata column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Map of attribute name and value for this column.|
|id|string|false|none|Column id.|
|kind|string|false|none|Resource type for Analytics column.|

<h2 id="tocS_Columns">Columns</h2>
<!-- backwards compatibility -->
<a id="schemacolumns"></a>
<a id="schema_Columns"></a>
<a id="tocScolumns"></a>
<a id="tocscolumns"></a>

```json
{
  "attributeNames": [
    "string"
  ],
  "etag": "string",
  "items": [
    {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "id": "string",
      "kind": "analytics#column"
    }
  ],
  "kind": "analytics#columns",
  "totalResults": 0
}
```

Lists columns (dimensions and metrics) for a particular report type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeNames|[string]|false|none|List of attributes names returned by columns.|
|etag|string|false|none|Etag of collection. This etag can be compared with the last response etag to check if response has changed.|
|items|[[Column](#schemacolumn)]|false|none|List of columns for a report type.|
|kind|string|false|none|Collection type.|
|totalResults|integer(int32)|false|none|Total number of columns returned in the response.|

<h2 id="tocS_CustomDataSource">CustomDataSource</h2>
<!-- backwards compatibility -->
<a id="schemacustomdatasource"></a>
<a id="schema_CustomDataSource"></a>
<a id="tocScustomdatasource"></a>
<a id="tocscustomdatasource"></a>

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "importBehavior": "string",
  "kind": "analytics#customDataSource",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "profilesLinked": [
    "string"
  ],
  "schema": [
    "string"
  ],
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uploadType": "string",
  "webPropertyId": "string"
}
```

JSON template for an Analytics custom data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this custom data source belongs.|
|childLink|object|false|none|none|
|created|string(date-time)|false|none|Time this custom data source was created.|
|description|string|false|none|Description of custom data source.|
|id|string|false|none|Custom data source ID.|
|importBehavior|string|false|none|none|
|kind|string|false|none|Resource type for Analytics custom data source.|
|name|string|false|none|Name of this custom data source.|
|parentLink|object|false|none|Parent link for this custom data source. Points to the web property to which this custom data source belongs.|
|profilesLinked|[string]|false|none|IDs of views (profiles) linked to the custom data source.|
|schema|[string]|false|none|Collection of schema headers of the custom data source.|
|selfLink|string|false|none|Link for this Analytics custom data source.|
|type|string|false|none|Type of the custom data source.|
|updated|string(date-time)|false|none|Time this custom data source was last modified.|
|uploadType|string|false|none|Upload type of the custom data source.|
|webPropertyId|string|false|none|Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.|

<h2 id="tocS_CustomDataSources">CustomDataSources</h2>
<!-- backwards compatibility -->
<a id="schemacustomdatasources"></a>
<a id="schema_CustomDataSources"></a>
<a id="tocScustomdatasources"></a>
<a id="tocscustomdatasources"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "childLink": {
        "href": "string",
        "type": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "importBehavior": "string",
      "kind": "analytics#customDataSource",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "profilesLinked": [
        "string"
      ],
      "schema": [
        "string"
      ],
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "uploadType": "string",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#customDataSources",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CustomDataSource](#schemacustomdatasource)]|false|none|Collection of custom data sources.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this custom data source collection.|
|previousLink|string|false|none|Link to previous page for this custom data source collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_CustomDimension">CustomDimension</h2>
<!-- backwards compatibility -->
<a id="schemacustomdimension"></a>
<a id="schema_CustomDimension"></a>
<a id="tocScustomdimension"></a>
<a id="tocscustomdimension"></a>

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customDimension",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

JSON template for Analytics Custom Dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID.|
|active|boolean|false|none|Boolean indicating whether the custom dimension is active.|
|created|string(date-time)|false|read-only|Time the custom dimension was created.|
|id|string|false|none|Custom dimension ID.|
|index|integer(int32)|false|read-only|Index of the custom dimension.|
|kind|string|false|read-only|Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.|
|name|string|false|none|Name of the custom dimension.|
|parentLink|object|false|none|Parent link for the custom dimension. Points to the property to which the custom dimension belongs.|
|scope|string|false|none|Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.|
|selfLink|string|false|read-only|Link for the custom dimension|
|updated|string(date-time)|false|read-only|Time the custom dimension was last modified.|
|webPropertyId|string|false|none|Property ID.|

<h2 id="tocS_CustomDimensions">CustomDimensions</h2>
<!-- backwards compatibility -->
<a id="schemacustomdimensions"></a>
<a id="schema_CustomDimensions"></a>
<a id="tocScustomdimensions"></a>
<a id="tocscustomdimensions"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "active": true,
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "index": 0,
      "kind": "analytics#customDimension",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "scope": "string",
      "selfLink": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#customDimensions",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CustomDimension](#schemacustomdimension)]|false|none|Collection of custom dimensions.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this custom dimension collection.|
|previousLink|string|false|none|Link to previous page for this custom dimension collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_CustomMetric">CustomMetric</h2>
<!-- backwards compatibility -->
<a id="schemacustommetric"></a>
<a id="schema_CustomMetric"></a>
<a id="tocScustommetric"></a>
<a id="tocscustommetric"></a>

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "id": "string",
  "index": 0,
  "kind": "analytics#customMetric",
  "max_value": "string",
  "min_value": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "scope": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

JSON template for Analytics Custom Metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID.|
|active|boolean|false|none|Boolean indicating whether the custom metric is active.|
|created|string(date-time)|false|read-only|Time the custom metric was created.|
|id|string|false|none|Custom metric ID.|
|index|integer(int32)|false|read-only|Index of the custom metric.|
|kind|string|false|read-only|Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.|
|max_value|string|false|none|Max value of custom metric.|
|min_value|string|false|none|Min value of custom metric.|
|name|string|false|none|Name of the custom metric.|
|parentLink|object|false|none|Parent link for the custom metric. Points to the property to which the custom metric belongs.|
|scope|string|false|none|Scope of the custom metric: HIT or PRODUCT.|
|selfLink|string|false|read-only|Link for the custom metric|
|type|string|false|none|Data type of custom metric.|
|updated|string(date-time)|false|read-only|Time the custom metric was last modified.|
|webPropertyId|string|false|none|Property ID.|

<h2 id="tocS_CustomMetrics">CustomMetrics</h2>
<!-- backwards compatibility -->
<a id="schemacustommetrics"></a>
<a id="schema_CustomMetrics"></a>
<a id="tocScustommetrics"></a>
<a id="tocscustommetrics"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "active": true,
      "created": "1970-01-01T00:00:00Z",
      "id": "string",
      "index": 0,
      "kind": "analytics#customMetric",
      "max_value": "string",
      "min_value": "string",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "scope": "string",
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#customMetrics",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CustomMetric](#schemacustommetric)]|false|none|Collection of custom metrics.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this custom metric collection.|
|previousLink|string|false|none|Link to previous page for this custom metric collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_EntityAdWordsLink">EntityAdWordsLink</h2>
<!-- backwards compatibility -->
<a id="schemaentityadwordslink"></a>
<a id="schema_EntityAdWordsLink"></a>
<a id="tocSentityadwordslink"></a>
<a id="tocsentityadwordslink"></a>

```json
{
  "adWordsAccounts": [
    {
      "autoTaggingEnabled": true,
      "customerId": "string",
      "kind": "analytics#adWordsAccount"
    }
  ],
  "entity": {
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityAdWordsLink",
  "name": "string",
  "profileIds": [
    "string"
  ],
  "selfLink": "string"
}
```

JSON template for Analytics Entity Google Ads Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adWordsAccounts|[[AdWordsAccount](#schemaadwordsaccount)]|false|none|A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.|
|entity|object|false|none|Web property being linked.|
|id|string|false|none|Entity Google Ads link ID|
|kind|string|false|none|Resource type for entity Google Ads link.|
|name|string|false|none|Name of the link. This field is required when creating a Google Ads link.|
|profileIds|[string]|false|none|IDs of linked Views (Profiles) represented as strings.|
|selfLink|string|false|none|URL link for this Google Analytics - Google Ads link.|

<h2 id="tocS_EntityAdWordsLinks">EntityAdWordsLinks</h2>
<!-- backwards compatibility -->
<a id="schemaentityadwordslinks"></a>
<a id="schema_EntityAdWordsLinks"></a>
<a id="tocSentityadwordslinks"></a>
<a id="tocsentityadwordslinks"></a>

```json
{
  "items": [
    {
      "adWordsAccounts": [
        {
          "autoTaggingEnabled": true,
          "customerId": "string",
          "kind": "analytics#adWordsAccount"
        }
      ],
      "entity": {
        "webPropertyRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertyRef",
          "name": "string"
        }
      },
      "id": "string",
      "kind": "analytics#entityAdWordsLink",
      "name": "string",
      "profileIds": [
        "string"
      ],
      "selfLink": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#entityAdWordsLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[EntityAdWordsLink](#schemaentityadwordslink)]|false|none|A list of entity Google Ads links.|
|itemsPerPage|integer(int32)|false|none|The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Next link for this Google Ads link collection.|
|previousLink|string|false|none|Previous link for this Google Ads link collection.|
|startIndex|integer(int32)|false|none|The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|

<h2 id="tocS_EntityUserLink">EntityUserLink</h2>
<!-- backwards compatibility -->
<a id="schemaentityuserlink"></a>
<a id="schema_EntityUserLink"></a>
<a id="tocSentityuserlink"></a>
<a id="tocsentityuserlink"></a>

```json
{
  "entity": {
    "accountRef": {
      "href": "string",
      "id": "string",
      "kind": "analytics#accountRef",
      "name": "string"
    },
    "profileRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profileRef",
      "name": "string",
      "webPropertyId": "string"
    },
    "webPropertyRef": {
      "accountId": "string",
      "href": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webPropertyRef",
      "name": "string"
    }
  },
  "id": "string",
  "kind": "analytics#entityUserLink",
  "permissions": {
    "effective": [
      "string"
    ],
    "local": [
      "string"
    ]
  },
  "selfLink": "string",
  "userRef": {
    "email": "string",
    "id": "string",
    "kind": "analytics#userRef"
  }
}
```

JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|object|false|none|Entity for this link. It can be an account, a web property, or a view (profile).|
|id|string|false|none|Entity user link ID|
|kind|string|false|none|Resource type for entity user link.|
|permissions|object|false|none|Permissions the user has for this entity.|
|selfLink|string|false|none|Self link for this resource.|
|userRef|[UserRef](#schemauserref)|false|none|User reference.|

<h2 id="tocS_EntityUserLinks">EntityUserLinks</h2>
<!-- backwards compatibility -->
<a id="schemaentityuserlinks"></a>
<a id="schema_EntityUserLinks"></a>
<a id="tocSentityuserlinks"></a>
<a id="tocsentityuserlinks"></a>

```json
{
  "items": [
    {
      "entity": {
        "accountRef": {
          "href": "string",
          "id": "string",
          "kind": "analytics#accountRef",
          "name": "string"
        },
        "profileRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#profileRef",
          "name": "string",
          "webPropertyId": "string"
        },
        "webPropertyRef": {
          "accountId": "string",
          "href": "string",
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#webPropertyRef",
          "name": "string"
        }
      },
      "id": "string",
      "kind": "analytics#entityUserLink",
      "permissions": {
        "effective": [
          "string"
        ],
        "local": [
          "string"
        ]
      },
      "selfLink": "string",
      "userRef": {
        "email": "string",
        "id": "string",
        "kind": "analytics#userRef"
      }
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#entityUserLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[EntityUserLink](#schemaentityuserlink)]|false|none|A list of entity user links.|
|itemsPerPage|integer(int32)|false|none|The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Next link for this account collection.|
|previousLink|string|false|none|Previous link for this account collection.|
|startIndex|integer(int32)|false|none|The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|

<h2 id="tocS_Experiment">Experiment</h2>
<!-- backwards compatibility -->
<a id="schemaexperiment"></a>
<a id="schema_Experiment"></a>
<a id="tocSexperiment"></a>
<a id="tocsexperiment"></a>

```json
{
  "accountId": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "editableInGaUi": true,
  "endTime": "1970-01-01T00:00:00Z",
  "equalWeighting": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#experiment",
  "minimumExperimentLengthInDays": 0,
  "name": "string",
  "objectiveMetric": "string",
  "optimizationType": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "reasonExperimentEnded": "string",
  "rewriteVariationUrlsAsOriginal": true,
  "selfLink": "string",
  "servingFramework": "string",
  "snippet": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "string",
  "trafficCoverage": 0,
  "updated": "1970-01-01T00:00:00Z",
  "variations": [
    {
      "name": "string",
      "status": "string",
      "url": "string",
      "weight": 0,
      "won": true
    }
  ],
  "webPropertyId": "string",
  "winnerConfidenceLevel": 0,
  "winnerFound": true
}
```

JSON template for Analytics experiment resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this experiment belongs. This field is read-only.|
|created|string(date-time)|false|none|Time the experiment was created. This field is read-only.|
|description|string|false|none|Notes about this experiment.|
|editableInGaUi|boolean|false|none|If true, the end user will be able to edit the experiment via the Google Analytics user interface.|
|endTime|string(date-time)|false|none|The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.|
|equalWeighting|boolean|false|none|Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.|
|id|string|false|none|Experiment ID. Required for patch and update. Disallowed for create.|
|internalWebPropertyId|string|false|none|Internal ID for the web property to which this experiment belongs. This field is read-only.|
|kind|string|false|none|Resource type for an Analytics experiment. This field is read-only.|
|minimumExperimentLengthInDays|integer(int32)|false|none|An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|name|string|false|none|Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.|
|objectiveMetric|string|false|none|The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".|
|optimizationType|string|false|none|Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".|
|parentLink|object|false|none|Parent link for an experiment. Points to the view (profile) to which this experiment belongs.|
|profileId|string|false|none|View (Profile) ID to which this experiment belongs. This field is read-only.|
|reasonExperimentEnded|string|false|none|Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.|
|rewriteVariationUrlsAsOriginal|boolean|false|none|Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.|
|selfLink|string|false|none|Link for this experiment. This field is read-only.|
|servingFramework|string|false|none|The framework used to serve the experiment variations and evaluate the results. One of:  <br>- REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.<br>- API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.<br>- EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.|
|snippet|string|false|none|The snippet of code to include on the control page(s). This field is read-only.|
|startTime|string(date-time)|false|none|The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.|
|status|string|false|none|Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.|
|trafficCoverage|number(double)|false|none|A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.|
|updated|string(date-time)|false|none|Time the experiment was last modified. This field is read-only.|
|variations|[object]|false|none|Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.|
|webPropertyId|string|false|none|Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.|
|winnerConfidenceLevel|number(double)|false|none|A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.|
|winnerFound|boolean|false|none|Boolean specifying whether a winner has been found for this experiment. This field is read-only.|

<h2 id="tocS_Experiments">Experiments</h2>
<!-- backwards compatibility -->
<a id="schemaexperiments"></a>
<a id="schema_Experiments"></a>
<a id="tocSexperiments"></a>
<a id="tocsexperiments"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "editableInGaUi": true,
      "endTime": "1970-01-01T00:00:00Z",
      "equalWeighting": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#experiment",
      "minimumExperimentLengthInDays": 0,
      "name": "string",
      "objectiveMetric": "string",
      "optimizationType": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#profile"
      },
      "profileId": "string",
      "reasonExperimentEnded": "string",
      "rewriteVariationUrlsAsOriginal": true,
      "selfLink": "string",
      "servingFramework": "string",
      "snippet": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "status": "string",
      "trafficCoverage": 0,
      "updated": "1970-01-01T00:00:00Z",
      "variations": [
        {
          "name": "string",
          "status": "string",
          "url": "string",
          "weight": 0,
          "won": true
        }
      ],
      "webPropertyId": "string",
      "winnerConfidenceLevel": 0,
      "winnerFound": true
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#experiments",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Experiment](#schemaexperiment)]|false|none|A list of experiments.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this experiment collection.|
|previousLink|string|false|none|Link to previous page for this experiment collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of resources in the result.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "accountId": "string",
  "advancedDetails": {
    "caseSensitive": true,
    "extractA": "string",
    "extractB": "string",
    "fieldA": "string",
    "fieldAIndex": 0,
    "fieldARequired": true,
    "fieldB": "string",
    "fieldBIndex": 0,
    "fieldBRequired": true,
    "outputConstructor": "string",
    "outputToField": "string",
    "outputToFieldIndex": 0,
    "overrideOutputField": true
  },
  "created": "1970-01-01T00:00:00Z",
  "excludeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "id": "string",
  "includeDetails": {
    "caseSensitive": true,
    "expressionValue": "string",
    "field": "string",
    "fieldIndex": 0,
    "kind": "analytics#filterExpression",
    "matchType": "string"
  },
  "kind": "analytics#filter",
  "lowercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  },
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "searchAndReplaceDetails": {
    "caseSensitive": true,
    "field": "string",
    "fieldIndex": 0,
    "replaceString": "string",
    "searchString": "string"
  },
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "uppercaseDetails": {
    "field": "string",
    "fieldIndex": 0
  }
}
```

JSON template for an Analytics account filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this filter belongs.|
|advancedDetails|object|false|none|Details for the filter of the type ADVANCED.|
|created|string(date-time)|false|read-only|Time this filter was created.|
|excludeDetails|[FilterExpression](#schemafilterexpression)|false|none|Details for the filter of the type EXCLUDE.|
|id|string|false|none|Filter ID.|
|includeDetails|[FilterExpression](#schemafilterexpression)|false|none|Details for the filter of the type INCLUDE.|
|kind|string|false|read-only|Resource type for Analytics filter.|
|lowercaseDetails|object|false|none|Details for the filter of the type LOWER.|
|name|string|false|none|Name of this filter.|
|parentLink|object|false|none|Parent link for this filter. Points to the account to which this filter belongs.|
|searchAndReplaceDetails|object|false|none|Details for the filter of the type SEARCH_AND_REPLACE.|
|selfLink|string|false|read-only|Link for this filter.|
|type|string|false|none|Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.|
|updated|string(date-time)|false|read-only|Time this filter was last modified.|
|uppercaseDetails|object|false|none|Details for the filter of the type UPPER.|

<h2 id="tocS_FilterExpression">FilterExpression</h2>
<!-- backwards compatibility -->
<a id="schemafilterexpression"></a>
<a id="schema_FilterExpression"></a>
<a id="tocSfilterexpression"></a>
<a id="tocsfilterexpression"></a>

```json
{
  "caseSensitive": true,
  "expressionValue": "string",
  "field": "string",
  "fieldIndex": 0,
  "kind": "analytics#filterExpression",
  "matchType": "string"
}
```

JSON template for an Analytics filter expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|Determines if the filter is case sensitive.|
|expressionValue|string|false|none|Filter expression value|
|field|string|false|none|Field to filter. Possible values:  <br>- Content and Traffic  <br>- PAGE_REQUEST_URI, <br>- PAGE_HOSTNAME, <br>- PAGE_TITLE, <br>- REFERRAL, <br>- COST_DATA_URI (Campaign target URL), <br>- HIT_TYPE, <br>- INTERNAL_SEARCH_TERM, <br>- INTERNAL_SEARCH_TYPE, <br>- SOURCE_PROPERTY_TRACKING_ID,   <br>- Campaign or AdGroup  <br>- CAMPAIGN_SOURCE, <br>- CAMPAIGN_MEDIUM, <br>- CAMPAIGN_NAME, <br>- CAMPAIGN_AD_GROUP, <br>- CAMPAIGN_TERM, <br>- CAMPAIGN_CONTENT, <br>- CAMPAIGN_CODE, <br>- CAMPAIGN_REFERRAL_PATH,   <br>- E-Commerce  <br>- TRANSACTION_COUNTRY, <br>- TRANSACTION_REGION, <br>- TRANSACTION_CITY, <br>- TRANSACTION_AFFILIATION (Store or order location), <br>- ITEM_NAME, <br>- ITEM_CODE, <br>- ITEM_VARIATION, <br>- TRANSACTION_ID, <br>- TRANSACTION_CURRENCY_CODE, <br>- PRODUCT_ACTION_TYPE,   <br>- Audience/Users  <br>- BROWSER, <br>- BROWSER_VERSION, <br>- BROWSER_SIZE, <br>- PLATFORM, <br>- PLATFORM_VERSION, <br>- LANGUAGE, <br>- SCREEN_RESOLUTION, <br>- SCREEN_COLORS, <br>- JAVA_ENABLED (Boolean Field), <br>- FLASH_VERSION, <br>- GEO_SPEED (Connection speed), <br>- VISITOR_TYPE, <br>- GEO_ORGANIZATION (ISP organization), <br>- GEO_DOMAIN, <br>- GEO_IP_ADDRESS, <br>- GEO_IP_VERSION,   <br>- Location  <br>- GEO_COUNTRY, <br>- GEO_REGION, <br>- GEO_CITY,   <br>- Event  <br>- EVENT_CATEGORY, <br>- EVENT_ACTION, <br>- EVENT_LABEL,   <br>- Other  <br>- CUSTOM_FIELD_1, <br>- CUSTOM_FIELD_2, <br>- USER_DEFINED_VALUE,   <br>- Application  <br>- APP_ID, <br>- APP_INSTALLER_ID, <br>- APP_NAME, <br>- APP_VERSION, <br>- SCREEN, <br>- IS_APP (Boolean Field), <br>- IS_FATAL_EXCEPTION (Boolean Field), <br>- EXCEPTION_DESCRIPTION,   <br>- Mobile device  <br>- IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile), <br>- IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet), <br>- DEVICE_CATEGORY, <br>- MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field), <br>- MOBILE_HAS_NFC_SUPPORT (Boolean Field), <br>- MOBILE_HAS_CELLULAR_RADIO (Boolean Field), <br>- MOBILE_HAS_WIFI_SUPPORT (Boolean Field), <br>- MOBILE_BRAND_NAME, <br>- MOBILE_MODEL_NAME, <br>- MOBILE_MARKETING_NAME, <br>- MOBILE_POINTING_METHOD,   <br>- Social  <br>- SOCIAL_NETWORK, <br>- SOCIAL_ACTION, <br>- SOCIAL_ACTION_TARGET,   <br>- Custom dimension  <br>- CUSTOM_DIMENSION (See accompanying field index),|
|fieldIndex|integer(int32)|false|none|The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.|
|kind|string|false|none|Kind value for filter expression|
|matchType|string|false|none|Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.|

<h2 id="tocS_FilterRef">FilterRef</h2>
<!-- backwards compatibility -->
<a id="schemafilterref"></a>
<a id="schema_FilterRef"></a>
<a id="tocSfilterref"></a>
<a id="tocsfilterref"></a>

```json
{
  "accountId": "string",
  "href": "string",
  "id": "string",
  "kind": "analytics#filterRef",
  "name": "string"
}
```

JSON template for a profile filter link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|read-only|Account ID to which this filter belongs.|
|href|string|false|none|Link for this filter.|
|id|string|false|none|Filter ID.|
|kind|string|false|none|Kind value for filter reference.|
|name|string|false|read-only|Name of this filter.|

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "advancedDetails": {
        "caseSensitive": true,
        "extractA": "string",
        "extractB": "string",
        "fieldA": "string",
        "fieldAIndex": 0,
        "fieldARequired": true,
        "fieldB": "string",
        "fieldBIndex": 0,
        "fieldBRequired": true,
        "outputConstructor": "string",
        "outputToField": "string",
        "outputToFieldIndex": 0,
        "overrideOutputField": true
      },
      "created": "1970-01-01T00:00:00Z",
      "excludeDetails": {
        "caseSensitive": true,
        "expressionValue": "string",
        "field": "string",
        "fieldIndex": 0,
        "kind": "analytics#filterExpression",
        "matchType": "string"
      },
      "id": "string",
      "includeDetails": {
        "caseSensitive": true,
        "expressionValue": "string",
        "field": "string",
        "fieldIndex": 0,
        "kind": "analytics#filterExpression",
        "matchType": "string"
      },
      "kind": "analytics#filter",
      "lowercaseDetails": {
        "field": "string",
        "fieldIndex": 0
      },
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#account"
      },
      "searchAndReplaceDetails": {
        "caseSensitive": true,
        "field": "string",
        "fieldIndex": 0,
        "replaceString": "string",
        "searchString": "string"
      },
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "uppercaseDetails": {
        "field": "string",
        "fieldIndex": 0
      }
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#filters",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Filter](#schemafilter)]|false|none|A list of filters.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this filter collection.|
|previousLink|string|false|none|Link to previous page for this filter collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_GaData">GaData</h2>
<!-- backwards compatibility -->
<a id="schemagadata"></a>
<a id="schema_GaData"></a>
<a id="tocSgadata"></a>
<a id="tocsgadata"></a>

```json
{
  "columnHeaders": [
    {
      "columnType": "string",
      "dataType": "string",
      "name": "string"
    }
  ],
  "containsSampledData": true,
  "dataLastRefreshed": "string",
  "dataTable": {
    "cols": [
      {
        "id": "string",
        "label": "string",
        "type": "string"
      }
    ],
    "rows": [
      {
        "c": [
          {
            "v": "string"
          }
        ]
      }
    ]
  },
  "id": "string",
  "itemsPerPage": 0,
  "kind": "analytics#gaData",
  "nextLink": "string",
  "previousLink": "string",
  "profileInfo": {
    "accountId": "string",
    "internalWebPropertyId": "string",
    "profileId": "string",
    "profileName": "string",
    "tableId": "string",
    "webPropertyId": "string"
  },
  "query": {
    "dimensions": "string",
    "end-date": "string",
    "filters": "string",
    "ids": "string",
    "max-results": 0,
    "metrics": [
      "string"
    ],
    "samplingLevel": "string",
    "segment": "string",
    "sort": [
      "string"
    ],
    "start-date": "string",
    "start-index": 0
  },
  "rows": [
    [
      "string"
    ]
  ],
  "sampleSize": "string",
  "sampleSpace": "string",
  "selfLink": "string",
  "totalResults": 0,
  "totalsForAllResults": {
    "property1": "string",
    "property2": "string"
  }
}
```

Analytics data for a given view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnHeaders|[object]|false|none|Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.|
|containsSampledData|boolean|false|none|Determines if Analytics data contains samples.|
|dataLastRefreshed|string(int64)|false|none|The last refreshed time in seconds for Analytics data.|
|dataTable|object|false|none|none|
|id|string|false|none|Unique ID for this data response.|
|itemsPerPage|integer(int32)|false|none|The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Resource type.|
|nextLink|string|false|none|Link to next page for this Analytics data query.|
|previousLink|string|false|none|Link to previous page for this Analytics data query.|
|profileInfo|object|false|none|Information for the view (profile), for which the Analytics data was requested.|
|query|object|false|none|Analytics data request query parameters.|
|rows|[[string]]|false|none|Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.|
|sampleSize|string(int64)|false|none|The number of samples used to calculate the result.|
|sampleSpace|string(int64)|false|none|Total size of the sample space from which the samples were selected.|
|selfLink|string|false|none|Link to this page.|
|totalResults|integer(int32)|false|none|The total number of rows for the query, regardless of the number of rows in the response.|
|totalsForAllResults|object|false|none|Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.|

<h2 id="tocS_Goal">Goal</h2>
<!-- backwards compatibility -->
<a id="schemagoal"></a>
<a id="schema_Goal"></a>
<a id="tocSgoal"></a>
<a id="tocsgoal"></a>

```json
{
  "accountId": "string",
  "active": true,
  "created": "1970-01-01T00:00:00Z",
  "eventDetails": {
    "eventConditions": [
      {
        "comparisonType": "string",
        "comparisonValue": "string",
        "expression": "string",
        "matchType": "string",
        "type": "string"
      }
    ],
    "useEventValue": true
  },
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#goal",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#profile"
  },
  "profileId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "urlDestinationDetails": {
    "caseSensitive": true,
    "firstStepRequired": true,
    "matchType": "string",
    "steps": [
      {
        "name": "string",
        "number": 0,
        "url": "string"
      }
    ],
    "url": "string"
  },
  "value": 0,
  "visitNumPagesDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "visitTimeOnSiteDetails": {
    "comparisonType": "string",
    "comparisonValue": "string"
  },
  "webPropertyId": "string"
}
```

JSON template for Analytics goal resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this goal belongs.|
|active|boolean|false|none|Determines whether this goal is active.|
|created|string(date-time)|false|none|Time this goal was created.|
|eventDetails|object|false|none|Details for the goal of the type EVENT.|
|id|string|false|none|Goal ID.|
|internalWebPropertyId|string|false|none|Internal ID for the web property to which this goal belongs.|
|kind|string|false|none|Resource type for an Analytics goal.|
|name|string|false|none|Goal name.|
|parentLink|object|false|none|Parent link for a goal. Points to the view (profile) to which this goal belongs.|
|profileId|string|false|none|View (Profile) ID to which this goal belongs.|
|selfLink|string|false|none|Link for this goal.|
|type|string|false|none|Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.|
|updated|string(date-time)|false|none|Time this goal was last modified.|
|urlDestinationDetails|object|false|none|Details for the goal of the type URL_DESTINATION.|
|value|number(float)|false|none|Goal value.|
|visitNumPagesDetails|object|false|none|Details for the goal of the type VISIT_NUM_PAGES.|
|visitTimeOnSiteDetails|object|false|none|Details for the goal of the type VISIT_TIME_ON_SITE.|
|webPropertyId|string|false|none|Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.|

<h2 id="tocS_Goals">Goals</h2>
<!-- backwards compatibility -->
<a id="schemagoals"></a>
<a id="schema_Goals"></a>
<a id="tocSgoals"></a>
<a id="tocsgoals"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "active": true,
      "created": "1970-01-01T00:00:00Z",
      "eventDetails": {
        "eventConditions": [
          {
            "comparisonType": "string",
            "comparisonValue": "string",
            "expression": "string",
            "matchType": "string",
            "type": "string"
          }
        ],
        "useEventValue": true
      },
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#goal",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#profile"
      },
      "profileId": "string",
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "urlDestinationDetails": {
        "caseSensitive": true,
        "firstStepRequired": true,
        "matchType": "string",
        "steps": [
          {
            "name": "string",
            "number": 0,
            "url": "string"
          }
        ],
        "url": "string"
      },
      "value": 0,
      "visitNumPagesDetails": {
        "comparisonType": "string",
        "comparisonValue": "string"
      },
      "visitTimeOnSiteDetails": {
        "comparisonType": "string",
        "comparisonValue": "string"
      },
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#goals",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Goal](#schemagoal)]|false|none|A list of goals.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this goal collection.|
|previousLink|string|false|none|Link to previous page for this goal collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of resources in the result.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_HashClientIdRequest">HashClientIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemahashclientidrequest"></a>
<a id="schema_HashClientIdRequest"></a>
<a id="tocShashclientidrequest"></a>
<a id="tocshashclientidrequest"></a>

```json
{
  "clientId": "string",
  "kind": "analytics#hashClientIdRequest",
  "webPropertyId": "string"
}
```

JSON template for a hash Client Id request resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|kind|string|false|none|none|
|webPropertyId|string|false|none|none|

<h2 id="tocS_HashClientIdResponse">HashClientIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemahashclientidresponse"></a>
<a id="schema_HashClientIdResponse"></a>
<a id="tocShashclientidresponse"></a>
<a id="tocshashclientidresponse"></a>

```json
{
  "clientId": "string",
  "hashedClientId": "string",
  "kind": "analytics#hashClientIdResponse",
  "webPropertyId": "string"
}
```

JSON template for a hash Client Id response resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|hashedClientId|string|false|none|none|
|kind|string|false|none|none|
|webPropertyId|string|false|none|none|

<h2 id="tocS_IncludeConditions">IncludeConditions</h2>
<!-- backwards compatibility -->
<a id="schemaincludeconditions"></a>
<a id="schema_IncludeConditions"></a>
<a id="tocSincludeconditions"></a>
<a id="tocsincludeconditions"></a>

```json
{
  "daysToLookBack": 0,
  "isSmartList": true,
  "kind": "analytics#includeConditions",
  "membershipDurationDays": 0,
  "segment": "string"
}
```

JSON template for an Analytics Remarketing Include Conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|daysToLookBack|integer(int32)|false|none|The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.|
|isSmartList|boolean|false|none|Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577|
|kind|string|false|none|Resource type for include conditions.|
|membershipDurationDays|integer(int32)|false|none|Number of days (in the range 1 to 540) a user remains in the audience.|
|segment|string|false|none|The segment condition that will cause a user to be added to an audience.|

<h2 id="tocS_LinkedForeignAccount">LinkedForeignAccount</h2>
<!-- backwards compatibility -->
<a id="schemalinkedforeignaccount"></a>
<a id="schema_LinkedForeignAccount"></a>
<a id="tocSlinkedforeignaccount"></a>
<a id="tocslinkedforeignaccount"></a>

```json
{
  "accountId": "string",
  "eligibleForSearch": true,
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#linkedForeignAccount",
  "linkedAccountId": "string",
  "remarketingAudienceId": "string",
  "status": "string",
  "type": "string",
  "webPropertyId": "string"
}
```

JSON template for an Analytics Remarketing Audience Foreign Link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this linked foreign account belongs.|
|eligibleForSearch|boolean|false|read-only|Boolean indicating whether this is eligible for search.|
|id|string|false|none|Entity ad account link ID.|
|internalWebPropertyId|string|false|read-only|Internal ID for the web property to which this linked foreign account belongs.|
|kind|string|false|none|Resource type for linked foreign account.|
|linkedAccountId|string|false|none|The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.|
|remarketingAudienceId|string|false|none|Remarketing audience ID to which this linked foreign account belongs.|
|status|string|false|none|The status of this foreign account link.|
|type|string|false|none|The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.|
|webPropertyId|string|false|none|Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.|

<h2 id="tocS_McfData">McfData</h2>
<!-- backwards compatibility -->
<a id="schemamcfdata"></a>
<a id="schema_McfData"></a>
<a id="tocSmcfdata"></a>
<a id="tocsmcfdata"></a>

```json
{
  "columnHeaders": [
    {
      "columnType": "string",
      "dataType": "string",
      "name": "string"
    }
  ],
  "containsSampledData": true,
  "id": "string",
  "itemsPerPage": 0,
  "kind": "analytics#mcfData",
  "nextLink": "string",
  "previousLink": "string",
  "profileInfo": {
    "accountId": "string",
    "internalWebPropertyId": "string",
    "profileId": "string",
    "profileName": "string",
    "tableId": "string",
    "webPropertyId": "string"
  },
  "query": {
    "dimensions": "string",
    "end-date": "string",
    "filters": "string",
    "ids": "string",
    "max-results": 0,
    "metrics": [
      "string"
    ],
    "samplingLevel": "string",
    "segment": "string",
    "sort": [
      "string"
    ],
    "start-date": "string",
    "start-index": 0
  },
  "rows": [
    [
      {
        "conversionPathValue": [
          {
            "interactionType": "string",
            "nodeValue": "string"
          }
        ],
        "primitiveValue": "string"
      }
    ]
  ],
  "sampleSize": "string",
  "sampleSpace": "string",
  "selfLink": "string",
  "totalResults": 0,
  "totalsForAllResults": {
    "property1": "string",
    "property2": "string"
  }
}
```

Multi-Channel Funnels data for a given view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnHeaders|[object]|false|none|Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.|
|containsSampledData|boolean|false|none|Determines if the Analytics data contains sampled data.|
|id|string|false|none|Unique ID for this data response.|
|itemsPerPage|integer(int32)|false|none|The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Resource type.|
|nextLink|string|false|none|Link to next page for this Analytics data query.|
|previousLink|string|false|none|Link to previous page for this Analytics data query.|
|profileInfo|object|false|none|Information for the view (profile), for which the Analytics data was requested.|
|query|object|false|none|Analytics data request query parameters.|
|rows|[[object]]|false|none|Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.|
|sampleSize|string(int64)|false|none|The number of samples used to calculate the result.|
|sampleSpace|string(int64)|false|none|Total size of the sample space from which the samples were selected.|
|selfLink|string|false|none|Link to this page.|
|totalResults|integer(int32)|false|none|The total number of rows for the query, regardless of the number of rows in the response.|
|totalsForAllResults|object|false|none|Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "accountId": "string",
  "botFilteringEnabled": true,
  "childLink": {
    "href": "string",
    "type": "analytics#goals"
  },
  "created": "1970-01-01T00:00:00Z",
  "currency": "string",
  "defaultPage": "string",
  "eCommerceTracking": true,
  "enhancedECommerceTracking": true,
  "excludeQueryParameters": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#profile",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#webproperty"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "selfLink": "string",
  "siteSearchCategoryParameters": "string",
  "siteSearchQueryParameters": "string",
  "starred": true,
  "stripSiteSearchCategoryParameters": true,
  "stripSiteSearchQueryParameters": true,
  "timezone": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string",
  "websiteUrl": "string"
}
```

JSON template for an Analytics view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this view (profile) belongs.|
|botFilteringEnabled|boolean|false|none|Indicates whether bot filtering is enabled for this view (profile).|
|childLink|object|false|none|Child link for this view (profile). Points to the list of goals for this view (profile).|
|created|string(date-time)|false|read-only|Time this view (profile) was created.|
|currency|string|false|none|The currency type associated with this view (profile), defaults to USD. The supported values are:<br>USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL|
|defaultPage|string|false|none|Default page for this view (profile).|
|eCommerceTracking|boolean|false|none|Indicates whether ecommerce tracking is enabled for this view (profile).|
|enhancedECommerceTracking|boolean|false|none|Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.|
|excludeQueryParameters|string|false|none|The query parameters that are excluded from this view (profile).|
|id|string|false|none|View (Profile) ID.|
|internalWebPropertyId|string|false|read-only|Internal ID for the web property to which this view (profile) belongs.|
|kind|string|false|read-only|Resource type for Analytics view (profile).|
|name|string|false|none|Name of this view (profile).|
|parentLink|object|false|none|Parent link for this view (profile). Points to the web property to which this view (profile) belongs.|
|permissions|object|false|none|Permissions the user has for this view (profile).|
|selfLink|string|false|read-only|Link for this view (profile).|
|siteSearchCategoryParameters|string|false|none|Site search category parameters for this view (profile).|
|siteSearchQueryParameters|string|false|none|The site search query parameters for this view (profile).|
|starred|boolean|false|none|Indicates whether this view (profile) is starred or not.|
|stripSiteSearchCategoryParameters|boolean|false|none|Whether or not Analytics will strip search category parameters from the URLs in your reports.|
|stripSiteSearchQueryParameters|boolean|false|none|Whether or not Analytics will strip search query parameters from the URLs in your reports.|
|timezone|string|false|none|Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.|
|type|string|false|none|View (Profile) type. Supported types: WEB or APP.|
|updated|string(date-time)|false|read-only|Time this view (profile) was last modified.|
|webPropertyId|string|false|read-only|Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.|
|websiteUrl|string|false|none|Website URL for this view (profile).|

<h2 id="tocS_ProfileFilterLink">ProfileFilterLink</h2>
<!-- backwards compatibility -->
<a id="schemaprofilefilterlink"></a>
<a id="schema_ProfileFilterLink"></a>
<a id="tocSprofilefilterlink"></a>
<a id="tocsprofilefilterlink"></a>

```json
{
  "filterRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "kind": "analytics#filterRef",
    "name": "string"
  },
  "id": "string",
  "kind": "analytics#profileFilterLink",
  "profileRef": {
    "accountId": "string",
    "href": "string",
    "id": "string",
    "internalWebPropertyId": "string",
    "kind": "analytics#profileRef",
    "name": "string",
    "webPropertyId": "string"
  },
  "rank": 0,
  "selfLink": "string"
}
```

JSON template for an Analytics profile filter link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterRef|[FilterRef](#schemafilterref)|false|none|Filter for this link.|
|id|string|false|none|Profile filter link ID.|
|kind|string|false|read-only|Resource type for Analytics filter.|
|profileRef|[ProfileRef](#schemaprofileref)|false|none|View (Profile) for this link.|
|rank|integer(int32)|false|none|The rank of this profile filter link relative to the other filters linked to the same profile.<br>For readonly (i.e., list and get) operations, the rank always starts at 1.<br>For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.|
|selfLink|string|false|read-only|Link for this profile filter link.|

<h2 id="tocS_ProfileFilterLinks">ProfileFilterLinks</h2>
<!-- backwards compatibility -->
<a id="schemaprofilefilterlinks"></a>
<a id="schema_ProfileFilterLinks"></a>
<a id="tocSprofilefilterlinks"></a>
<a id="tocsprofilefilterlinks"></a>

```json
{
  "items": [
    {
      "filterRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "kind": "analytics#filterRef",
        "name": "string"
      },
      "id": "string",
      "kind": "analytics#profileFilterLink",
      "profileRef": {
        "accountId": "string",
        "href": "string",
        "id": "string",
        "internalWebPropertyId": "string",
        "kind": "analytics#profileRef",
        "name": "string",
        "webPropertyId": "string"
      },
      "rank": 0,
      "selfLink": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#profileFilterLinks",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ProfileFilterLink](#schemaprofilefilterlink)]|false|none|A list of profile filter links.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this profile filter link collection.|
|previousLink|string|false|none|Link to previous page for this profile filter link collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_ProfileRef">ProfileRef</h2>
<!-- backwards compatibility -->
<a id="schemaprofileref"></a>
<a id="schema_ProfileRef"></a>
<a id="tocSprofileref"></a>
<a id="tocsprofileref"></a>

```json
{
  "accountId": "string",
  "href": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#profileRef",
  "name": "string",
  "webPropertyId": "string"
}
```

JSON template for a linked view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this view (profile) belongs.|
|href|string|false|none|Link for this view (profile).|
|id|string|false|none|View (Profile) ID.|
|internalWebPropertyId|string|false|none|Internal ID for the web property to which this view (profile) belongs.|
|kind|string|false|none|Analytics view (profile) reference.|
|name|string|false|none|Name of this view (profile).|
|webPropertyId|string|false|none|Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.|

<h2 id="tocS_ProfileSummary">ProfileSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprofilesummary"></a>
<a id="schema_ProfileSummary"></a>
<a id="tocSprofilesummary"></a>
<a id="tocsprofilesummary"></a>

```json
{
  "id": "string",
  "kind": "analytics#profileSummary",
  "name": "string",
  "starred": true,
  "type": "string"
}
```

JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|View (profile) ID.|
|kind|string|false|none|Resource type for Analytics ProfileSummary.|
|name|string|false|none|View (profile) name.|
|starred|boolean|false|none|Indicates whether this view (profile) is starred or not.|
|type|string|false|none|View (Profile) type. Supported types: WEB or APP.|

<h2 id="tocS_Profiles">Profiles</h2>
<!-- backwards compatibility -->
<a id="schemaprofiles"></a>
<a id="schema_Profiles"></a>
<a id="tocSprofiles"></a>
<a id="tocsprofiles"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "botFilteringEnabled": true,
      "childLink": {
        "href": "string",
        "type": "analytics#goals"
      },
      "created": "1970-01-01T00:00:00Z",
      "currency": "string",
      "defaultPage": "string",
      "eCommerceTracking": true,
      "enhancedECommerceTracking": true,
      "excludeQueryParameters": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#profile",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#webproperty"
      },
      "permissions": {
        "effective": [
          "string"
        ]
      },
      "selfLink": "string",
      "siteSearchCategoryParameters": "string",
      "siteSearchQueryParameters": "string",
      "starred": true,
      "stripSiteSearchCategoryParameters": true,
      "stripSiteSearchQueryParameters": true,
      "timezone": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string",
      "websiteUrl": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#profiles",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Profile](#schemaprofile)]|false|none|A list of views (profiles).|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this view (profile) collection.|
|previousLink|string|false|none|Link to previous page for this view (profile) collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_RealtimeData">RealtimeData</h2>
<!-- backwards compatibility -->
<a id="schemarealtimedata"></a>
<a id="schema_RealtimeData"></a>
<a id="tocSrealtimedata"></a>
<a id="tocsrealtimedata"></a>

```json
{
  "columnHeaders": [
    {
      "columnType": "string",
      "dataType": "string",
      "name": "string"
    }
  ],
  "id": "string",
  "kind": "analytics#realtimeData",
  "profileInfo": {
    "accountId": "string",
    "internalWebPropertyId": "string",
    "profileId": "string",
    "profileName": "string",
    "tableId": "string",
    "webPropertyId": "string"
  },
  "query": {
    "dimensions": "string",
    "filters": "string",
    "ids": "string",
    "max-results": 0,
    "metrics": [
      "string"
    ],
    "sort": [
      "string"
    ]
  },
  "rows": [
    [
      "string"
    ]
  ],
  "selfLink": "string",
  "totalResults": 0,
  "totalsForAllResults": {
    "property1": "string",
    "property2": "string"
  }
}
```

Real time data for a given view (profile).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnHeaders|[object]|false|none|Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.|
|id|string|false|none|Unique ID for this data response.|
|kind|string|false|none|Resource type.|
|profileInfo|object|false|none|Information for the view (profile), for which the real time data was requested.|
|query|object|false|none|Real time data request query parameters.|
|rows|[[string]]|false|none|Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.|
|selfLink|string|false|none|Link to this page.|
|totalResults|integer(int32)|false|none|The total number of rows for the query, regardless of the number of rows in the response.|
|totalsForAllResults|object|false|none|Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.|

<h2 id="tocS_RemarketingAudience">RemarketingAudience</h2>
<!-- backwards compatibility -->
<a id="schemaremarketingaudience"></a>
<a id="schema_RemarketingAudience"></a>
<a id="tocSremarketingaudience"></a>
<a id="tocsremarketingaudience"></a>

```json
{
  "accountId": "string",
  "audienceDefinition": {
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "audienceType": "string",
  "created": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#remarketingAudience",
  "linkedAdAccounts": [
    {
      "accountId": "string",
      "eligibleForSearch": true,
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#linkedForeignAccount",
      "linkedAccountId": "string",
      "remarketingAudienceId": "string",
      "status": "string",
      "type": "string",
      "webPropertyId": "string"
    }
  ],
  "linkedViews": [
    "string"
  ],
  "name": "string",
  "stateBasedAudienceDefinition": {
    "excludeConditions": {
      "exclusionDuration": "string",
      "segment": "string"
    },
    "includeConditions": {
      "daysToLookBack": 0,
      "isSmartList": true,
      "kind": "analytics#includeConditions",
      "membershipDurationDays": 0,
      "segment": "string"
    }
  },
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

JSON template for an Analytics remarketing audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this remarketing audience belongs.|
|audienceDefinition|object|false|none|The simple audience definition that will cause a user to be added to an audience.|
|audienceType|string|false|none|The type of audience, either SIMPLE or STATE_BASED.|
|created|string(date-time)|false|read-only|Time this remarketing audience was created.|
|description|string|false|read-only|The description of this remarketing audience.|
|id|string|false|none|Remarketing Audience ID.|
|internalWebPropertyId|string|false|read-only|Internal ID for the web property to which this remarketing audience belongs.|
|kind|string|false|none|Collection type.|
|linkedAdAccounts|[[LinkedForeignAccount](#schemalinkedforeignaccount)]|false|none|The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.|
|linkedViews|[string]|false|none|The views (profiles) that this remarketing audience is linked to.|
|name|string|false|none|The name of this remarketing audience.|
|stateBasedAudienceDefinition|object|false|none|A state based audience definition that will cause a user to be added or removed from an audience.|
|updated|string(date-time)|false|read-only|Time this remarketing audience was last modified.|
|webPropertyId|string|false|none|Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.|

<h2 id="tocS_RemarketingAudiences">RemarketingAudiences</h2>
<!-- backwards compatibility -->
<a id="schemaremarketingaudiences"></a>
<a id="schema_RemarketingAudiences"></a>
<a id="tocSremarketingaudiences"></a>
<a id="tocsremarketingaudiences"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "audienceDefinition": {
        "includeConditions": {
          "daysToLookBack": 0,
          "isSmartList": true,
          "kind": "analytics#includeConditions",
          "membershipDurationDays": 0,
          "segment": "string"
        }
      },
      "audienceType": "string",
      "created": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#remarketingAudience",
      "linkedAdAccounts": [
        {
          "accountId": "string",
          "eligibleForSearch": true,
          "id": "string",
          "internalWebPropertyId": "string",
          "kind": "analytics#linkedForeignAccount",
          "linkedAccountId": "string",
          "remarketingAudienceId": "string",
          "status": "string",
          "type": "string",
          "webPropertyId": "string"
        }
      ],
      "linkedViews": [
        "string"
      ],
      "name": "string",
      "stateBasedAudienceDefinition": {
        "excludeConditions": {
          "exclusionDuration": "string",
          "segment": "string"
        },
        "includeConditions": {
          "daysToLookBack": 0,
          "isSmartList": true,
          "kind": "analytics#includeConditions",
          "membershipDurationDays": 0,
          "segment": "string"
        }
      },
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#remarketingAudiences",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[RemarketingAudience](#schemaremarketingaudience)]|false|none|A list of remarketing audiences.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this remarketing audience collection.|
|previousLink|string|false|none|Link to previous page for this view (profile) collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "definition": "string",
  "id": "string",
  "kind": "analytics#segment",
  "name": "string",
  "segmentId": "string",
  "selfLink": "string",
  "type": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

JSON template for an Analytics segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|Time the segment was created.|
|definition|string|false|none|Segment definition.|
|id|string|false|none|Segment ID.|
|kind|string|false|none|Resource type for Analytics segment.|
|name|string|false|none|Segment name.|
|segmentId|string|false|none|Segment ID. Can be used with the 'segment' parameter in Core Reporting API.|
|selfLink|string|false|none|Link for this segment.|
|type|string|false|none|Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".|
|updated|string(date-time)|false|none|Time the segment was last modified.|

<h2 id="tocS_Segments">Segments</h2>
<!-- backwards compatibility -->
<a id="schemasegments"></a>
<a id="schema_Segments"></a>
<a id="tocSsegments"></a>
<a id="tocssegments"></a>

```json
{
  "items": [
    {
      "created": "1970-01-01T00:00:00Z",
      "definition": "string",
      "id": "string",
      "kind": "analytics#segment",
      "name": "string",
      "segmentId": "string",
      "selfLink": "string",
      "type": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#segments",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Segment](#schemasegment)]|false|none|A list of segments.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type for segments.|
|nextLink|string|false|none|Link to next page for this segment collection.|
|previousLink|string|false|none|Link to previous page for this segment collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_UnsampledReport">UnsampledReport</h2>
<!-- backwards compatibility -->
<a id="schemaunsampledreport"></a>
<a id="schema_UnsampledReport"></a>
<a id="tocSunsampledreport"></a>
<a id="tocsunsampledreport"></a>

```json
{
  "accountId": "string",
  "cloudStorageDownloadDetails": {
    "bucketId": "string",
    "objectId": "string"
  },
  "created": "1970-01-01T00:00:00Z",
  "dimensions": "string",
  "downloadType": "string",
  "driveDownloadDetails": {
    "documentId": "string"
  },
  "end-date": "string",
  "filters": "string",
  "id": "string",
  "kind": "analytics#unsampledReport",
  "metrics": "string",
  "profileId": "string",
  "segment": "string",
  "selfLink": "string",
  "start-date": "string",
  "status": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "webPropertyId": "string"
}
```

JSON template for Analytics unsampled report resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this unsampled report belongs.|
|cloudStorageDownloadDetails|object|false|read-only|Download details for a file stored in Google Cloud Storage.|
|created|string(date-time)|false|read-only|Time this unsampled report was created.|
|dimensions|string|false|none|The dimensions for the unsampled report.|
|downloadType|string|false|read-only|The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.|
|driveDownloadDetails|object|false|read-only|Download details for a file stored in Google Drive.|
|end-date|string|false|none|The end date for the unsampled report.|
|filters|string|false|none|The filters for the unsampled report.|
|id|string|false|none|Unsampled report ID.|
|kind|string|false|read-only|Resource type for an Analytics unsampled report.|
|metrics|string|false|none|The metrics for the unsampled report.|
|profileId|string|false|none|View (Profile) ID to which this unsampled report belongs.|
|segment|string|false|none|The segment for the unsampled report.|
|selfLink|string|false|read-only|Link for this unsampled report.|
|start-date|string|false|none|The start date for the unsampled report.|
|status|string|false|read-only|Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.|
|title|string|false|none|Title of the unsampled report.|
|updated|string(date-time)|false|read-only|Time this unsampled report was last modified.|
|webPropertyId|string|false|none|Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.|

<h2 id="tocS_UnsampledReports">UnsampledReports</h2>
<!-- backwards compatibility -->
<a id="schemaunsampledreports"></a>
<a id="schema_UnsampledReports"></a>
<a id="tocSunsampledreports"></a>
<a id="tocsunsampledreports"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "cloudStorageDownloadDetails": {
        "bucketId": "string",
        "objectId": "string"
      },
      "created": "1970-01-01T00:00:00Z",
      "dimensions": "string",
      "downloadType": "string",
      "driveDownloadDetails": {
        "documentId": "string"
      },
      "end-date": "string",
      "filters": "string",
      "id": "string",
      "kind": "analytics#unsampledReport",
      "metrics": "string",
      "profileId": "string",
      "segment": "string",
      "selfLink": "string",
      "start-date": "string",
      "status": "string",
      "title": "string",
      "updated": "1970-01-01T00:00:00Z",
      "webPropertyId": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#unsampledReports",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[UnsampledReport](#schemaunsampledreport)]|false|none|A list of unsampled reports.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this unsampled report collection.|
|previousLink|string|false|none|Link to previous page for this unsampled report collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of resources in the result.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_Upload">Upload</h2>
<!-- backwards compatibility -->
<a id="schemaupload"></a>
<a id="schema_Upload"></a>
<a id="tocSupload"></a>
<a id="tocsupload"></a>

```json
{
  "accountId": "string",
  "customDataSourceId": "string",
  "errors": [
    "string"
  ],
  "id": "string",
  "kind": "analytics#upload",
  "status": "string",
  "uploadTime": "1970-01-01T00:00:00Z"
}
```

Metadata returned for an upload operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(int64)|false|none|Account Id to which this upload belongs.|
|customDataSourceId|string|false|none|Custom data source Id to which this data import belongs.|
|errors|[string]|false|none|Data import errors collection.|
|id|string|false|none|A unique ID for this upload.|
|kind|string|false|none|Resource type for Analytics upload.|
|status|string|false|none|Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.|
|uploadTime|string(date-time)|false|none|Time this file is uploaded.|

<h2 id="tocS_Uploads">Uploads</h2>
<!-- backwards compatibility -->
<a id="schemauploads"></a>
<a id="schema_Uploads"></a>
<a id="tocSuploads"></a>
<a id="tocsuploads"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "customDataSourceId": "string",
      "errors": [
        "string"
      ],
      "id": "string",
      "kind": "analytics#upload",
      "status": "string",
      "uploadTime": "1970-01-01T00:00:00Z"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#uploads",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0
}
```

Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Upload](#schemaupload)]|false|none|A list of uploads.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this upload collection.|
|previousLink|string|false|none|Link to previous page for this upload collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of resources in the result.|

<h2 id="tocS_UserDeletionRequest">UserDeletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserdeletionrequest"></a>
<a id="schema_UserDeletionRequest"></a>
<a id="tocSuserdeletionrequest"></a>
<a id="tocsuserdeletionrequest"></a>

```json
{
  "deletionRequestTime": "1970-01-01T00:00:00Z",
  "firebaseProjectId": "string",
  "id": {
    "type": "string",
    "userId": "string"
  },
  "kind": "analytics#userDeletionRequest",
  "propertyId": "string",
  "webPropertyId": "string"
}
```

JSON template for a user deletion request resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletionRequestTime|string(date-time)|false|read-only|This marks the point in time for which all user data before should be deleted|
|firebaseProjectId|string|false|none|Firebase Project Id|
|id|object|false|none|User ID.|
|kind|string|false|none|Value is "analytics#userDeletionRequest".|
|propertyId|string|false|none|Property ID|
|webPropertyId|string|false|none|Web property ID of the form UA-XXXXX-YY.|

<h2 id="tocS_UserRef">UserRef</h2>
<!-- backwards compatibility -->
<a id="schemauserref"></a>
<a id="schema_UserRef"></a>
<a id="tocSuserref"></a>
<a id="tocsuserref"></a>

```json
{
  "email": "string",
  "id": "string",
  "kind": "analytics#userRef"
}
```

JSON template for a user reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email ID of this user.|
|id|string|false|none|User ID.|
|kind|string|false|none|none|

<h2 id="tocS_WebPropertyRef">WebPropertyRef</h2>
<!-- backwards compatibility -->
<a id="schemawebpropertyref"></a>
<a id="schema_WebPropertyRef"></a>
<a id="tocSwebpropertyref"></a>
<a id="tocswebpropertyref"></a>

```json
{
  "accountId": "string",
  "href": "string",
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webPropertyRef",
  "name": "string"
}
```

JSON template for a web property reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this web property belongs.|
|href|string|false|none|Link for this web property.|
|id|string|false|none|Web property ID of the form UA-XXXXX-YY.|
|internalWebPropertyId|string|false|none|Internal ID for this web property.|
|kind|string|false|none|Analytics web property reference.|
|name|string|false|none|Name of this web property.|

<h2 id="tocS_WebPropertySummary">WebPropertySummary</h2>
<!-- backwards compatibility -->
<a id="schemawebpropertysummary"></a>
<a id="schema_WebPropertySummary"></a>
<a id="tocSwebpropertysummary"></a>
<a id="tocswebpropertysummary"></a>

```json
{
  "id": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webPropertySummary",
  "level": "string",
  "name": "string",
  "profiles": [
    {
      "id": "string",
      "kind": "analytics#profileSummary",
      "name": "string",
      "starred": true,
      "type": "string"
    }
  ],
  "starred": true,
  "websiteUrl": "string"
}
```

JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Web property ID of the form UA-XXXXX-YY.|
|internalWebPropertyId|string|false|none|Internal ID for this web property.|
|kind|string|false|none|Resource type for Analytics WebPropertySummary.|
|level|string|false|none|Level for this web property. Possible values are STANDARD or PREMIUM.|
|name|string|false|none|Web property name.|
|profiles|[[ProfileSummary](#schemaprofilesummary)]|false|none|List of profiles under this web property.|
|starred|boolean|false|none|Indicates whether this web property is starred or not.|
|websiteUrl|string|false|none|Website url for this web property.|

<h2 id="tocS_Webproperties">Webproperties</h2>
<!-- backwards compatibility -->
<a id="schemawebproperties"></a>
<a id="schema_Webproperties"></a>
<a id="tocSwebproperties"></a>
<a id="tocswebproperties"></a>

```json
{
  "items": [
    {
      "accountId": "string",
      "childLink": {
        "href": "string",
        "type": "analytics#profiles"
      },
      "created": "1970-01-01T00:00:00Z",
      "dataRetentionResetOnNewActivity": true,
      "dataRetentionTtl": "string",
      "defaultProfileId": "string",
      "id": "string",
      "industryVertical": "string",
      "internalWebPropertyId": "string",
      "kind": "analytics#webproperty",
      "level": "string",
      "name": "string",
      "parentLink": {
        "href": "string",
        "type": "analytics#account"
      },
      "permissions": {
        "effective": [
          "string"
        ]
      },
      "profileCount": 0,
      "selfLink": "string",
      "starred": true,
      "updated": "1970-01-01T00:00:00Z",
      "websiteUrl": "string"
    }
  ],
  "itemsPerPage": 0,
  "kind": "analytics#webproperties",
  "nextLink": "string",
  "previousLink": "string",
  "startIndex": 0,
  "totalResults": 0,
  "username": "string"
}
```

A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Webproperty](#schemawebproperty)]|false|none|A list of web properties.|
|itemsPerPage|integer(int32)|false|none|The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.|
|kind|string|false|none|Collection type.|
|nextLink|string|false|none|Link to next page for this web property collection.|
|previousLink|string|false|none|Link to previous page for this web property collection.|
|startIndex|integer(int32)|false|none|The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.|
|totalResults|integer(int32)|false|none|The total number of results for the query, regardless of the number of results in the response.|
|username|string|false|none|Email ID of the authenticated user|

<h2 id="tocS_Webproperty">Webproperty</h2>
<!-- backwards compatibility -->
<a id="schemawebproperty"></a>
<a id="schema_Webproperty"></a>
<a id="tocSwebproperty"></a>
<a id="tocswebproperty"></a>

```json
{
  "accountId": "string",
  "childLink": {
    "href": "string",
    "type": "analytics#profiles"
  },
  "created": "1970-01-01T00:00:00Z",
  "dataRetentionResetOnNewActivity": true,
  "dataRetentionTtl": "string",
  "defaultProfileId": "string",
  "id": "string",
  "industryVertical": "string",
  "internalWebPropertyId": "string",
  "kind": "analytics#webproperty",
  "level": "string",
  "name": "string",
  "parentLink": {
    "href": "string",
    "type": "analytics#account"
  },
  "permissions": {
    "effective": [
      "string"
    ]
  },
  "profileCount": 0,
  "selfLink": "string",
  "starred": true,
  "updated": "1970-01-01T00:00:00Z",
  "websiteUrl": "string"
}
```

JSON template for an Analytics web property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Account ID to which this web property belongs.|
|childLink|object|false|none|Child link for this web property. Points to the list of views (profiles) for this web property.|
|created|string(date-time)|false|read-only|Time this web property was created.|
|dataRetentionResetOnNewActivity|boolean|false|none|Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).<br>Set to false to delete data associated with the user identifier automatically after the rentention period.<br>This property cannot be set on insert.|
|dataRetentionTtl|string|false|none|The length of time for which user and event data is retained.<br>This property cannot be set on insert.|
|defaultProfileId|string(int64)|false|none|Default view (profile) ID.|
|id|string|false|none|Web property ID of the form UA-XXXXX-YY.|
|industryVertical|string|false|none|The industry vertical/category selected for this web property.|
|internalWebPropertyId|string|false|read-only|Internal ID for this web property.|
|kind|string|false|read-only|Resource type for Analytics WebProperty.|
|level|string|false|read-only|Level for this web property. Possible values are STANDARD or PREMIUM.|
|name|string|false|none|Name of this web property.|
|parentLink|object|false|none|Parent link for this web property. Points to the account to which this web property belongs.|
|permissions|object|false|none|Permissions the user has for this web property.|
|profileCount|integer(int32)|false|read-only|View (Profile) count for this web property.|
|selfLink|string|false|read-only|Link for this web property.|
|starred|boolean|false|none|Indicates whether this web property is starred or not.|
|updated|string(date-time)|false|read-only|Time this web property was last modified.|
|websiteUrl|string|false|none|Website url for this web property.|
