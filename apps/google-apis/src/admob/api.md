<h1 id="admob-api">AdMob API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The AdMob API allows publishers to programmatically get information about their AdMob account.

Base URLs:

* <a href="https://admob.googleapis.com/">https://admob.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/admob/api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/admob.readonly|See your AdMob data|
|https://www.googleapis.com/auth/admob.report|See your AdMob data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/admob.readonly|See your AdMob data|
|https://www.googleapis.com/auth/admob.report|See your AdMob data|

<h1 id="admob-api-accounts">accounts</h1>

## admob.accounts.list

<a id="opIdadmob.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/accounts`

Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.

<h3 id="admobaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Maximum number of accounts to return.|
|pageToken|query|string|false|The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.|
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
  "account": [
    {
      "currencyCode": "string",
      "name": "string",
      "publisherId": "string",
      "reportingTimeZone": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="admobaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPublisherAccountsResponse](#schemalistpublisheraccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.report ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.report )
</aside>

## admob.accounts.get

<a id="opIdadmob.accounts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets information about the specified AdMob publisher account.

<h3 id="admobaccountsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654|
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
  "currencyCode": "string",
  "name": "string",
  "publisherId": "string",
  "reportingTimeZone": "string"
}
```

<h3 id="admobaccountsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PublisherAccount](#schemapublisheraccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.report ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.report )
</aside>

## admob.accounts.adSources.list

<a id="opIdadmob.accounts.adSources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/adSources \
  -H 'Accept: application/json'
```

`GET /v1beta/{parent}/adSources`

List the ad sources.

<h3 id="admobaccountsadsourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id}|
|pageSize|query|integer|false|The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.|
|pageToken|query|string|false|A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.|
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
  "adSources": [
    {
      "adSourceId": "string",
      "name": "string",
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="admobaccountsadsourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAdSourcesResponse](#schemalistadsourcesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## admob.accounts.adUnits.list

<a id="opIdadmob.accounts.adUnits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/adUnits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/adUnits`

List the ad units under the specified AdMob account.

<h3 id="admobaccountsadunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654|
|pageSize|query|integer|false|The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.|
|pageToken|query|string|false|The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.|
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
  "adUnits": [
    {
      "adFormat": "string",
      "adTypes": [
        "string"
      ],
      "adUnitId": "string",
      "appId": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="admobaccountsadunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAdUnitsResponse](#schemalistadunitsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.readonly )
</aside>

## admob.accounts.apps.list

<a id="opIdadmob.accounts.apps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/apps`

List the apps under the specified AdMob account.

<h3 id="admobaccountsappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654|
|pageSize|query|integer|false|The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.|
|pageToken|query|string|false|The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.|
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
  "apps": [
    {
      "appApprovalState": "APP_APPROVAL_STATE_UNSPECIFIED",
      "appId": "string",
      "linkedAppInfo": {
        "appStoreId": "string",
        "displayName": "string"
      },
      "manualAppInfo": {
        "displayName": "string"
      },
      "name": "string",
      "platform": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="admobaccountsappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAppsResponse](#schemalistappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.readonly )
</aside>

## admob.accounts.mediationReport.generate

<a id="opIdadmob.accounts.mediationReport.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/mediationReport:generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reportSpec": {
      "dateRange": {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "dimensionFilters": [
        {
          "dimension": "DIMENSION_UNSPECIFIED",
          "matchesAny": {
            "values": [
              "string"
            ]
          }
        }
      ],
      "dimensions": [
        "DIMENSION_UNSPECIFIED"
      ],
      "localizationSettings": {
        "currencyCode": "string",
        "languageCode": "string"
      },
      "maxReportRows": 0,
      "metrics": [
        "METRIC_UNSPECIFIED"
      ],
      "sortConditions": [
        {
          "dimension": "DIMENSION_UNSPECIFIED",
          "metric": "METRIC_UNSPECIFIED",
          "order": "SORT_ORDER_UNSPECIFIED"
        }
      ],
      "timeZone": "string"
    }
  }'
```

`POST /v1beta/{parent}/mediationReport:generate`

Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

> Body parameter

```json
{
  "reportSpec": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "dimensionFilters": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "matchesAny": {
          "values": [
            "string"
          ]
        }
      }
    ],
    "dimensions": [
      "DIMENSION_UNSPECIFIED"
    ],
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "maxReportRows": 0,
    "metrics": [
      "METRIC_UNSPECIFIED"
    ],
    "sortConditions": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "metric": "METRIC_UNSPECIFIED",
        "order": "SORT_ORDER_UNSPECIFIED"
      }
    ],
    "timeZone": "string"
  }
}
```

<h3 id="admobaccountsmediationreportgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654|
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
|body|body|[GenerateMediationReportRequest](#schemageneratemediationreportrequest)|false|none|
|» reportSpec|body|[MediationReportSpec](#schemamediationreportspec)|false|Network report specification.|

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
  "footer": {
    "matchingRowCount": "string",
    "warnings": [
      {
        "description": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ]
  },
  "header": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "reportingTimeZone": "string"
  },
  "row": {
    "dimensionValues": {
      "property1": {
        "displayLabel": "string",
        "value": "string"
      },
      "property2": {
        "displayLabel": "string",
        "value": "string"
      }
    },
    "metricValues": {
      "property1": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      },
      "property2": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      }
    }
  }
}
```

<h3 id="admobaccountsmediationreportgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateMediationReportResponse](#schemageneratemediationreportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.report ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.report )
</aside>

## admob.accounts.networkReport.generate

<a id="opIdadmob.accounts.networkReport.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/networkReport:generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reportSpec": {
      "dateRange": {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "dimensionFilters": [
        {
          "dimension": "DIMENSION_UNSPECIFIED",
          "matchesAny": {
            "values": [
              "string"
            ]
          }
        }
      ],
      "dimensions": [
        "DIMENSION_UNSPECIFIED"
      ],
      "localizationSettings": {
        "currencyCode": "string",
        "languageCode": "string"
      },
      "maxReportRows": 0,
      "metrics": [
        "METRIC_UNSPECIFIED"
      ],
      "sortConditions": [
        {
          "dimension": "DIMENSION_UNSPECIFIED",
          "metric": "METRIC_UNSPECIFIED",
          "order": "SORT_ORDER_UNSPECIFIED"
        }
      ],
      "timeZone": "string"
    }
  }'
```

`POST /v1beta/{parent}/networkReport:generate`

Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.

> Body parameter

```json
{
  "reportSpec": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "dimensionFilters": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "matchesAny": {
          "values": [
            "string"
          ]
        }
      }
    ],
    "dimensions": [
      "DIMENSION_UNSPECIFIED"
    ],
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "maxReportRows": 0,
    "metrics": [
      "METRIC_UNSPECIFIED"
    ],
    "sortConditions": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "metric": "METRIC_UNSPECIFIED",
        "order": "SORT_ORDER_UNSPECIFIED"
      }
    ],
    "timeZone": "string"
  }
}
```

<h3 id="admobaccountsnetworkreportgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654|
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
|body|body|[GenerateNetworkReportRequest](#schemageneratenetworkreportrequest)|false|none|
|» reportSpec|body|[NetworkReportSpec](#schemanetworkreportspec)|false|Network report specification.|

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
  "footer": {
    "matchingRowCount": "string",
    "warnings": [
      {
        "description": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ]
  },
  "header": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "reportingTimeZone": "string"
  },
  "row": {
    "dimensionValues": {
      "property1": {
        "displayLabel": "string",
        "value": "string"
      },
      "property2": {
        "displayLabel": "string",
        "value": "string"
      }
    },
    "metricValues": {
      "property1": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      },
      "property2": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      }
    }
  }
}
```

<h3 id="admobaccountsnetworkreportgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateNetworkReportResponse](#schemageneratenetworkreportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admob.report ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admob.report )
</aside>

# Schemas

<h2 id="tocS_AdSource">AdSource</h2>
<!-- backwards compatibility -->
<a id="schemaadsource"></a>
<a id="schema_AdSource"></a>
<a id="tocSadsource"></a>
<a id="tocsadsource"></a>

```json
{
  "adSourceId": "string",
  "name": "string",
  "title": "string"
}
```

Definition of a mediation ad source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adSourceId|string|false|none|ID of this ad source.|
|name|string|false|none|Resource name of this ad source. Format is: accounts/{publisher_id}/adSources/{ad_source_id}|
|title|string|false|none|Display name of this ad source.|

<h2 id="tocS_AdUnit">AdUnit</h2>
<!-- backwards compatibility -->
<a id="schemaadunit"></a>
<a id="schema_AdUnit"></a>
<a id="tocSadunit"></a>
<a id="tocsadunit"></a>

```json
{
  "adFormat": "string",
  "adTypes": [
    "string"
  ],
  "adUnitId": "string",
  "appId": "string",
  "displayName": "string",
  "name": "string"
}
```

Describes an AdMob ad unit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adFormat|string|false|none|AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467.|
|adTypes|[string]|false|none|Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media.|
|adUnitId|string|false|none|The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789|
|appId|string|false|none|The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789|
|displayName|string|false|none|The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.|
|name|string|false|none|Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789|

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "appApprovalState": "APP_APPROVAL_STATE_UNSPECIFIED",
  "appId": "string",
  "linkedAppInfo": {
    "appStoreId": "string",
    "displayName": "string"
  },
  "manualAppInfo": {
    "displayName": "string"
  },
  "name": "string",
  "platform": "string"
}
```

Describes an AdMob app for a specific platform (For example: Android or iOS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appApprovalState|string|false|read-only|Output only. The approval state for the app.|
|appId|string|false|none|The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789|
|linkedAppInfo|[AppLinkedAppInfo](#schemaapplinkedappinfo)|false|none|Immutable. The information for an app that is linked to an app store. This field is present if and only if the app is linked to an app store.|
|manualAppInfo|[AppManualAppInfo](#schemaappmanualappinfo)|false|none|The information for an app that is not linked to any app store. After an app is linked, this information is still retrivable. If no name is provided for the app upon creation, a placeholder name will be used.|
|name|string|false|none|Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789|
|platform|string|false|none|Describes the platform of the app. Limited to "IOS" and "ANDROID".|

#### Enumerated Values

|Property|Value|
|---|---|
|appApprovalState|APP_APPROVAL_STATE_UNSPECIFIED|
|appApprovalState|ACTION_REQUIRED|
|appApprovalState|IN_REVIEW|
|appApprovalState|APPROVED|

<h2 id="tocS_AppLinkedAppInfo">AppLinkedAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapplinkedappinfo"></a>
<a id="schema_AppLinkedAppInfo"></a>
<a id="tocSapplinkedappinfo"></a>
<a id="tocsapplinkedappinfo"></a>

```json
{
  "appStoreId": "string",
  "displayName": "string"
}
```

Information from the app store if the app is linked to an app store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appStoreId|string|false|none|The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked.|
|displayName|string|false|read-only|Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store.|

<h2 id="tocS_AppManualAppInfo">AppManualAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemaappmanualappinfo"></a>
<a id="schema_AppManualAppInfo"></a>
<a id="tocSappmanualappinfo"></a>
<a id="tocsappmanualappinfo"></a>

```json
{
  "displayName": "string"
}
```

Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DateRange">DateRange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Specification of a single date range. Both dates are inclusive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|End date of the date range, inclusive. Must be greater than or equal to the start date.|
|startDate|[Date](#schemadate)|false|none|Start date of the date range, inclusive. Must be less than or equal to the end date.|

<h2 id="tocS_GenerateMediationReportRequest">GenerateMediationReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratemediationreportrequest"></a>
<a id="schema_GenerateMediationReportRequest"></a>
<a id="tocSgeneratemediationreportrequest"></a>
<a id="tocsgeneratemediationreportrequest"></a>

```json
{
  "reportSpec": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "dimensionFilters": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "matchesAny": {
          "values": [
            "string"
          ]
        }
      }
    ],
    "dimensions": [
      "DIMENSION_UNSPECIFIED"
    ],
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "maxReportRows": 0,
    "metrics": [
      "METRIC_UNSPECIFIED"
    ],
    "sortConditions": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "metric": "METRIC_UNSPECIFIED",
        "order": "SORT_ORDER_UNSPECIFIED"
      }
    ],
    "timeZone": "string"
  }
}
```

Request to generate an AdMob mediation report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportSpec|[MediationReportSpec](#schemamediationreportspec)|false|none|Network report specification.|

<h2 id="tocS_GenerateMediationReportResponse">GenerateMediationReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratemediationreportresponse"></a>
<a id="schema_GenerateMediationReportResponse"></a>
<a id="tocSgeneratemediationreportresponse"></a>
<a id="tocsgeneratemediationreportresponse"></a>

```json
{
  "footer": {
    "matchingRowCount": "string",
    "warnings": [
      {
        "description": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ]
  },
  "header": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "reportingTimeZone": "string"
  },
  "row": {
    "dimensionValues": {
      "property1": {
        "displayLabel": "string",
        "value": "string"
      },
      "property2": {
        "displayLabel": "string",
        "value": "string"
      }
    },
    "metricValues": {
      "property1": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      },
      "property2": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      }
    }
  }
}
```

The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|footer|[ReportFooter](#schemareportfooter)|false|none|Additional information about the generated report, such as warnings about the data.|
|header|[ReportHeader](#schemareportheader)|false|none|Report generation settings that describes the report contents, such as the report date range and localization settings.|
|row|[ReportRow](#schemareportrow)|false|none|Actual report data.|

<h2 id="tocS_GenerateNetworkReportRequest">GenerateNetworkReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratenetworkreportrequest"></a>
<a id="schema_GenerateNetworkReportRequest"></a>
<a id="tocSgeneratenetworkreportrequest"></a>
<a id="tocsgeneratenetworkreportrequest"></a>

```json
{
  "reportSpec": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "dimensionFilters": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "matchesAny": {
          "values": [
            "string"
          ]
        }
      }
    ],
    "dimensions": [
      "DIMENSION_UNSPECIFIED"
    ],
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "maxReportRows": 0,
    "metrics": [
      "METRIC_UNSPECIFIED"
    ],
    "sortConditions": [
      {
        "dimension": "DIMENSION_UNSPECIFIED",
        "metric": "METRIC_UNSPECIFIED",
        "order": "SORT_ORDER_UNSPECIFIED"
      }
    ],
    "timeZone": "string"
  }
}
```

Request to generate an AdMob Network report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportSpec|[NetworkReportSpec](#schemanetworkreportspec)|false|none|Network report specification.|

<h2 id="tocS_GenerateNetworkReportResponse">GenerateNetworkReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratenetworkreportresponse"></a>
<a id="schema_GenerateNetworkReportResponse"></a>
<a id="tocSgeneratenetworkreportresponse"></a>
<a id="tocsgeneratenetworkreportresponse"></a>

```json
{
  "footer": {
    "matchingRowCount": "string",
    "warnings": [
      {
        "description": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ]
  },
  "header": {
    "dateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "localizationSettings": {
      "currencyCode": "string",
      "languageCode": "string"
    },
    "reportingTimeZone": "string"
  },
  "row": {
    "dimensionValues": {
      "property1": {
        "displayLabel": "string",
        "value": "string"
      },
      "property2": {
        "displayLabel": "string",
        "value": "string"
      }
    },
    "metricValues": {
      "property1": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      },
      "property2": {
        "doubleValue": 0,
        "integerValue": "string",
        "microsValue": "string"
      }
    }
  }
}
```

The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|footer|[ReportFooter](#schemareportfooter)|false|none|Additional information about the generated report, such as warnings about the data.|
|header|[ReportHeader](#schemareportheader)|false|none|Report generation settings that describes the report contents, such as the report date range and localization settings.|
|row|[ReportRow](#schemareportrow)|false|none|Actual report data.|

<h2 id="tocS_ListAdSourcesResponse">ListAdSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistadsourcesresponse"></a>
<a id="schema_ListAdSourcesResponse"></a>
<a id="tocSlistadsourcesresponse"></a>
<a id="tocslistadsourcesresponse"></a>

```json
{
  "adSources": [
    {
      "adSourceId": "string",
      "name": "string",
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for the ListAdSourcesRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adSources|[[AdSource](#schemaadsource)]|false|none|The ad sources.|
|nextPageToken|string|false|none|Used to set the `page_token` in the `ListAdSourcesRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListAdUnitsResponse">ListAdUnitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistadunitsresponse"></a>
<a id="schema_ListAdUnitsResponse"></a>
<a id="tocSlistadunitsresponse"></a>
<a id="tocslistadunitsresponse"></a>

```json
{
  "adUnits": [
    {
      "adFormat": "string",
      "adTypes": [
        "string"
      ],
      "adUnitId": "string",
      "appId": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for the ad units list request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adUnits|[[AdUnit](#schemaadunit)]|false|none|The resulting ad units for the requested account.|
|nextPageToken|string|false|none|If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`.|

<h2 id="tocS_ListAppsResponse">ListAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappsresponse"></a>
<a id="schema_ListAppsResponse"></a>
<a id="tocSlistappsresponse"></a>
<a id="tocslistappsresponse"></a>

```json
{
  "apps": [
    {
      "appApprovalState": "APP_APPROVAL_STATE_UNSPECIFIED",
      "appId": "string",
      "linkedAppInfo": {
        "appStoreId": "string",
        "displayName": "string"
      },
      "manualAppInfo": {
        "displayName": "string"
      },
      "name": "string",
      "platform": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for the apps list request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[App](#schemaapp)]|false|none|The resulting apps for the requested account.|
|nextPageToken|string|false|none|If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`.|

<h2 id="tocS_ListPublisherAccountsResponse">ListPublisherAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpublisheraccountsresponse"></a>
<a id="schema_ListPublisherAccountsResponse"></a>
<a id="tocSlistpublisheraccountsresponse"></a>
<a id="tocslistpublisheraccountsresponse"></a>

```json
{
  "account": [
    {
      "currencyCode": "string",
      "name": "string",
      "publisherId": "string",
      "reportingTimeZone": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for the publisher account list request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[PublisherAccount](#schemapublisheraccount)]|false|none|Publisher that the client credentials can access.|
|nextPageToken|string|false|none|If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`.|

<h2 id="tocS_LocalizationSettings">LocalizationSettings</h2>
<!-- backwards compatibility -->
<a id="schemalocalizationsettings"></a>
<a id="schema_LocalizationSettings"></a>
<a id="tocSlocalizationsettings"></a>
<a id="tocslocalizationsettings"></a>

```json
{
  "currencyCode": "string",
  "languageCode": "string"
}
```

Localization settings for reports, such as currency and language. It affects how metrics are calculated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified.|
|languageCode|string|false|none|Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified.|

<h2 id="tocS_MediationReportSpec">MediationReportSpec</h2>
<!-- backwards compatibility -->
<a id="schemamediationreportspec"></a>
<a id="schema_MediationReportSpec"></a>
<a id="tocSmediationreportspec"></a>
<a id="tocsmediationreportspec"></a>

```json
{
  "dateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "dimensionFilters": [
    {
      "dimension": "DIMENSION_UNSPECIFIED",
      "matchesAny": {
        "values": [
          "string"
        ]
      }
    }
  ],
  "dimensions": [
    "DIMENSION_UNSPECIFIED"
  ],
  "localizationSettings": {
    "currencyCode": "string",
    "languageCode": "string"
  },
  "maxReportRows": 0,
  "metrics": [
    "METRIC_UNSPECIFIED"
  ],
  "sortConditions": [
    {
      "dimension": "DIMENSION_UNSPECIFIED",
      "metric": "METRIC_UNSPECIFIED",
      "order": "SORT_ORDER_UNSPECIFIED"
    }
  ],
  "timeZone": "string"
}
```

The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[DateRange](#schemadaterange)|false|none|The date range for which the report is generated.|
|dimensionFilters|[[MediationReportSpecDimensionFilter](#schemamediationreportspecdimensionfilter)]|false|none|Describes which report rows to match based on their dimension values.|
|dimensions|[string]|false|none|List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.|
|localizationSettings|[LocalizationSettings](#schemalocalizationsettings)|false|none|Localization settings of the report.|
|maxReportRows|integer(int32)|false|none|Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.|
|metrics|[string]|false|none|List of metrics of the report. A report must specify at least one metric.|
|sortConditions|[[MediationReportSpecSortCondition](#schemamediationreportspecsortcondition)]|false|none|Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.|
|timeZone|string|false|none|A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimensions|DIMENSION_UNSPECIFIED|
|dimensions|DATE|
|dimensions|MONTH|
|dimensions|WEEK|
|dimensions|AD_SOURCE|
|dimensions|AD_SOURCE_INSTANCE|
|dimensions|AD_UNIT|
|dimensions|APP|
|dimensions|MEDIATION_GROUP|
|dimensions|COUNTRY|
|dimensions|FORMAT|
|dimensions|PLATFORM|
|dimensions|MOBILE_OS_VERSION|
|dimensions|GMA_SDK_VERSION|
|dimensions|APP_VERSION_NAME|
|dimensions|SERVING_RESTRICTION|
|metrics|METRIC_UNSPECIFIED|
|metrics|AD_REQUESTS|
|metrics|CLICKS|
|metrics|ESTIMATED_EARNINGS|
|metrics|IMPRESSIONS|
|metrics|IMPRESSION_CTR|
|metrics|MATCHED_REQUESTS|
|metrics|MATCH_RATE|
|metrics|OBSERVED_ECPM|

<h2 id="tocS_MediationReportSpecDimensionFilter">MediationReportSpecDimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemamediationreportspecdimensionfilter"></a>
<a id="schema_MediationReportSpecDimensionFilter"></a>
<a id="tocSmediationreportspecdimensionfilter"></a>
<a id="tocsmediationreportspecdimensionfilter"></a>

```json
{
  "dimension": "DIMENSION_UNSPECIFIED",
  "matchesAny": {
    "values": [
      "string"
    ]
  }
}
```

Describes which report rows to match based on their dimension values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|string|false|none|Applies the filter criterion to the specified dimension.|
|matchesAny|[StringList](#schemastringlist)|false|none|Matches a row if its value for the specified dimension is in one of the values specified in this condition.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimension|DIMENSION_UNSPECIFIED|
|dimension|DATE|
|dimension|MONTH|
|dimension|WEEK|
|dimension|AD_SOURCE|
|dimension|AD_SOURCE_INSTANCE|
|dimension|AD_UNIT|
|dimension|APP|
|dimension|MEDIATION_GROUP|
|dimension|COUNTRY|
|dimension|FORMAT|
|dimension|PLATFORM|
|dimension|MOBILE_OS_VERSION|
|dimension|GMA_SDK_VERSION|
|dimension|APP_VERSION_NAME|
|dimension|SERVING_RESTRICTION|

<h2 id="tocS_MediationReportSpecSortCondition">MediationReportSpecSortCondition</h2>
<!-- backwards compatibility -->
<a id="schemamediationreportspecsortcondition"></a>
<a id="schema_MediationReportSpecSortCondition"></a>
<a id="tocSmediationreportspecsortcondition"></a>
<a id="tocsmediationreportspecsortcondition"></a>

```json
{
  "dimension": "DIMENSION_UNSPECIFIED",
  "metric": "METRIC_UNSPECIFIED",
  "order": "SORT_ORDER_UNSPECIFIED"
}
```

Sorting direction to be applied on a dimension or a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|string|false|none|Sort by the specified dimension.|
|metric|string|false|none|Sort by the specified metric.|
|order|string|false|none|Sorting order of the dimension or metric.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimension|DIMENSION_UNSPECIFIED|
|dimension|DATE|
|dimension|MONTH|
|dimension|WEEK|
|dimension|AD_SOURCE|
|dimension|AD_SOURCE_INSTANCE|
|dimension|AD_UNIT|
|dimension|APP|
|dimension|MEDIATION_GROUP|
|dimension|COUNTRY|
|dimension|FORMAT|
|dimension|PLATFORM|
|dimension|MOBILE_OS_VERSION|
|dimension|GMA_SDK_VERSION|
|dimension|APP_VERSION_NAME|
|dimension|SERVING_RESTRICTION|
|metric|METRIC_UNSPECIFIED|
|metric|AD_REQUESTS|
|metric|CLICKS|
|metric|ESTIMATED_EARNINGS|
|metric|IMPRESSIONS|
|metric|IMPRESSION_CTR|
|metric|MATCHED_REQUESTS|
|metric|MATCH_RATE|
|metric|OBSERVED_ECPM|
|order|SORT_ORDER_UNSPECIFIED|
|order|ASCENDING|
|order|DESCENDING|

<h2 id="tocS_NetworkReportSpec">NetworkReportSpec</h2>
<!-- backwards compatibility -->
<a id="schemanetworkreportspec"></a>
<a id="schema_NetworkReportSpec"></a>
<a id="tocSnetworkreportspec"></a>
<a id="tocsnetworkreportspec"></a>

```json
{
  "dateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "dimensionFilters": [
    {
      "dimension": "DIMENSION_UNSPECIFIED",
      "matchesAny": {
        "values": [
          "string"
        ]
      }
    }
  ],
  "dimensions": [
    "DIMENSION_UNSPECIFIED"
  ],
  "localizationSettings": {
    "currencyCode": "string",
    "languageCode": "string"
  },
  "maxReportRows": 0,
  "metrics": [
    "METRIC_UNSPECIFIED"
  ],
  "sortConditions": [
    {
      "dimension": "DIMENSION_UNSPECIFIED",
      "metric": "METRIC_UNSPECIFIED",
      "order": "SORT_ORDER_UNSPECIFIED"
    }
  ],
  "timeZone": "string"
}
```

The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[DateRange](#schemadaterange)|false|none|The date range for which the report is generated.|
|dimensionFilters|[[NetworkReportSpecDimensionFilter](#schemanetworkreportspecdimensionfilter)]|false|none|Describes which report rows to match based on their dimension values.|
|dimensions|[string]|false|none|List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.|
|localizationSettings|[LocalizationSettings](#schemalocalizationsettings)|false|none|Localization settings of the report.|
|maxReportRows|integer(int32)|false|none|Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.|
|metrics|[string]|false|none|List of metrics of the report. A report must specify at least one metric.|
|sortConditions|[[NetworkReportSpecSortCondition](#schemanetworkreportspecsortcondition)]|false|none|Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.|
|timeZone|string|false|none|A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimensions|DIMENSION_UNSPECIFIED|
|dimensions|DATE|
|dimensions|MONTH|
|dimensions|WEEK|
|dimensions|AD_UNIT|
|dimensions|APP|
|dimensions|AD_TYPE|
|dimensions|COUNTRY|
|dimensions|FORMAT|
|dimensions|PLATFORM|
|dimensions|MOBILE_OS_VERSION|
|dimensions|GMA_SDK_VERSION|
|dimensions|APP_VERSION_NAME|
|dimensions|SERVING_RESTRICTION|
|metrics|METRIC_UNSPECIFIED|
|metrics|AD_REQUESTS|
|metrics|CLICKS|
|metrics|ESTIMATED_EARNINGS|
|metrics|IMPRESSIONS|
|metrics|IMPRESSION_CTR|
|metrics|IMPRESSION_RPM|
|metrics|MATCHED_REQUESTS|
|metrics|MATCH_RATE|
|metrics|SHOW_RATE|

<h2 id="tocS_NetworkReportSpecDimensionFilter">NetworkReportSpecDimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemanetworkreportspecdimensionfilter"></a>
<a id="schema_NetworkReportSpecDimensionFilter"></a>
<a id="tocSnetworkreportspecdimensionfilter"></a>
<a id="tocsnetworkreportspecdimensionfilter"></a>

```json
{
  "dimension": "DIMENSION_UNSPECIFIED",
  "matchesAny": {
    "values": [
      "string"
    ]
  }
}
```

Describes which report rows to match based on their dimension values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|string|false|none|Applies the filter criterion to the specified dimension.|
|matchesAny|[StringList](#schemastringlist)|false|none|Matches a row if its value for the specified dimension is in one of the values specified in this condition.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimension|DIMENSION_UNSPECIFIED|
|dimension|DATE|
|dimension|MONTH|
|dimension|WEEK|
|dimension|AD_UNIT|
|dimension|APP|
|dimension|AD_TYPE|
|dimension|COUNTRY|
|dimension|FORMAT|
|dimension|PLATFORM|
|dimension|MOBILE_OS_VERSION|
|dimension|GMA_SDK_VERSION|
|dimension|APP_VERSION_NAME|
|dimension|SERVING_RESTRICTION|

<h2 id="tocS_NetworkReportSpecSortCondition">NetworkReportSpecSortCondition</h2>
<!-- backwards compatibility -->
<a id="schemanetworkreportspecsortcondition"></a>
<a id="schema_NetworkReportSpecSortCondition"></a>
<a id="tocSnetworkreportspecsortcondition"></a>
<a id="tocsnetworkreportspecsortcondition"></a>

```json
{
  "dimension": "DIMENSION_UNSPECIFIED",
  "metric": "METRIC_UNSPECIFIED",
  "order": "SORT_ORDER_UNSPECIFIED"
}
```

Sorting direction to be applied on a dimension or a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|string|false|none|Sort by the specified dimension.|
|metric|string|false|none|Sort by the specified metric.|
|order|string|false|none|Sorting order of the dimension or metric.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimension|DIMENSION_UNSPECIFIED|
|dimension|DATE|
|dimension|MONTH|
|dimension|WEEK|
|dimension|AD_UNIT|
|dimension|APP|
|dimension|AD_TYPE|
|dimension|COUNTRY|
|dimension|FORMAT|
|dimension|PLATFORM|
|dimension|MOBILE_OS_VERSION|
|dimension|GMA_SDK_VERSION|
|dimension|APP_VERSION_NAME|
|dimension|SERVING_RESTRICTION|
|metric|METRIC_UNSPECIFIED|
|metric|AD_REQUESTS|
|metric|CLICKS|
|metric|ESTIMATED_EARNINGS|
|metric|IMPRESSIONS|
|metric|IMPRESSION_CTR|
|metric|IMPRESSION_RPM|
|metric|MATCHED_REQUESTS|
|metric|MATCH_RATE|
|metric|SHOW_RATE|
|order|SORT_ORDER_UNSPECIFIED|
|order|ASCENDING|
|order|DESCENDING|

<h2 id="tocS_PublisherAccount">PublisherAccount</h2>
<!-- backwards compatibility -->
<a id="schemapublisheraccount"></a>
<a id="schema_PublisherAccount"></a>
<a id="tocSpublisheraccount"></a>
<a id="tocspublisheraccount"></a>

```json
{
  "currencyCode": "string",
  "name": "string",
  "publisherId": "string",
  "reportingTimeZone": "string"
}
```

A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion.|
|name|string|false|none|Resource name of this account. Format is accounts/{publisher_id}.|
|publisherId|string|false|none|The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890).|
|reportingTimeZone|string|false|none|The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".|

<h2 id="tocS_ReportFooter">ReportFooter</h2>
<!-- backwards compatibility -->
<a id="schemareportfooter"></a>
<a id="schema_ReportFooter"></a>
<a id="tocSreportfooter"></a>
<a id="tocsreportfooter"></a>

```json
{
  "matchingRowCount": "string",
  "warnings": [
    {
      "description": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchingRowCount|string(int64)|false|none|Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response.|
|warnings|[[ReportWarning](#schemareportwarning)]|false|none|Warnings associated with generation of the report.|

<h2 id="tocS_ReportHeader">ReportHeader</h2>
<!-- backwards compatibility -->
<a id="schemareportheader"></a>
<a id="schema_ReportHeader"></a>
<a id="tocSreportheader"></a>
<a id="tocsreportheader"></a>

```json
{
  "dateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "localizationSettings": {
    "currencyCode": "string",
    "languageCode": "string"
  },
  "reportingTimeZone": "string"
}
```

Groups data helps to treat the generated report. Always sent as a first message in the stream response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[DateRange](#schemadaterange)|false|none|The date range for which the report is generated. This is identical to the range specified in the report request.|
|localizationSettings|[LocalizationSettings](#schemalocalizationsettings)|false|none|Localization settings of the report. This is identical to the settings in the report request.|
|reportingTimeZone|string|false|none|The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".|

<h2 id="tocS_ReportRow">ReportRow</h2>
<!-- backwards compatibility -->
<a id="schemareportrow"></a>
<a id="schema_ReportRow"></a>
<a id="tocSreportrow"></a>
<a id="tocsreportrow"></a>

```json
{
  "dimensionValues": {
    "property1": {
      "displayLabel": "string",
      "value": "string"
    },
    "property2": {
      "displayLabel": "string",
      "value": "string"
    }
  },
  "metricValues": {
    "property1": {
      "doubleValue": 0,
      "integerValue": "string",
      "microsValue": "string"
    },
    "property2": {
      "doubleValue": 0,
      "integerValue": "string",
      "microsValue": "string"
    }
  }
}
```

A row of the returning report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionValues|object|false|none|Map of dimension values in a row, with keys as enum name of the dimensions.|
|metricValues|object|false|none|Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it.|

<h2 id="tocS_ReportRowDimensionValue">ReportRowDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemareportrowdimensionvalue"></a>
<a id="schema_ReportRowDimensionValue"></a>
<a id="tocSreportrowdimensionvalue"></a>
<a id="tocsreportrowdimensionvalue"></a>

```json
{
  "displayLabel": "string",
  "value": "string"
}
```

Representation of a dimension value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayLabel|string|false|none|The localized string representation of the value. If unspecified, the display label should be derived from the value.|
|value|string|false|none|Dimension value in the format specified in the report's spec Dimension enum.|

<h2 id="tocS_ReportRowMetricValue">ReportRowMetricValue</h2>
<!-- backwards compatibility -->
<a id="schemareportrowmetricvalue"></a>
<a id="schema_ReportRowMetricValue"></a>
<a id="tocSreportrowmetricvalue"></a>
<a id="tocsreportrowmetricvalue"></a>

```json
{
  "doubleValue": 0,
  "integerValue": "string",
  "microsValue": "string"
}
```

Representation of a metric value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doubleValue|number(double)|false|none|Double precision (approximate) decimal values. Rates are from 0 to 1.|
|integerValue|string(int64)|false|none|Metric integer value.|
|microsValue|string(int64)|false|none|Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros.|

<h2 id="tocS_ReportWarning">ReportWarning</h2>
<!-- backwards compatibility -->
<a id="schemareportwarning"></a>
<a id="schema_ReportWarning"></a>
<a id="tocSreportwarning"></a>
<a id="tocsreportwarning"></a>

```json
{
  "description": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Warnings associated with generation of the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Describes the details of the warning message, in English.|
|type|string|false|none|Type of the warning.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE|
|type|DATA_DELAYED|
|type|OTHER|
|type|REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY|

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
{
  "values": [
    "string"
  ]
}
```

List of string values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|The string values.|
