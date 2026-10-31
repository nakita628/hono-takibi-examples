<h1 id="doubleclick-bid-manager-api">DoubleClick Bid Manager API v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

DoubleClick Bid Manager API allows users to manage and create campaigns and reports.

Base URLs:

* <a href="https://doubleclickbidmanager.googleapis.com/doubleclickbidmanager/v1.1">https://doubleclickbidmanager.googleapis.com/doubleclickbidmanager/v1.1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/bid-manager/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/doubleclickbidmanager|View and manage your reports in DoubleClick Bid Manager|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/doubleclickbidmanager|View and manage your reports in DoubleClick Bid Manager|

<h1 id="doubleclick-bid-manager-api-queries">queries</h1>

## doubleclickbidmanager.queries.listqueries

<a id="opIddoubleclickbidmanager.queries.listqueries"></a>

> Code samples

```bash
curl https://www.googleapis.com/queries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /queries`

Retrieves stored queries.

<h3 id="doubleclickbidmanagerquerieslistqueries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.|
|pageToken|query|string|false|Optional pagination token.|
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
  "kind": "string",
  "nextPageToken": "string",
  "queries": [
    {
      "kind": "string",
      "metadata": {
        "dataRange": "CUSTOM_DATES",
        "format": "CSV",
        "googleCloudStoragePathForLatestReport": "string",
        "googleDrivePathForLatestReport": "string",
        "latestReportRunTimeMs": "string",
        "locale": "string",
        "reportCount": 0,
        "running": true,
        "sendNotification": true,
        "shareEmailAddress": [
          "string"
        ],
        "title": "string"
      },
      "params": {
        "filters": [
          {
            "type": "FILTER_UNKNOWN",
            "value": "string"
          }
        ],
        "groupBys": [
          "FILTER_UNKNOWN"
        ],
        "includeInviteData": true,
        "metrics": [
          "METRIC_UNKNOWN"
        ],
        "options": {
          "includeOnlyTargetedUserLists": true,
          "pathQueryOptions": {
            "channelGrouping": {
              "fallbackName": "string",
              "name": "string",
              "rules": [
                {
                  "disjunctiveMatchStatements": [
                    {
                      "eventFilters": [
                        {
                          "dimensionFilter": {
                            "filter": "FILTER_UNKNOWN",
                            "match": "UNKNOWN",
                            "values": [
                              "string"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "name": "string"
                }
              ]
            },
            "pathFilters": [
              {
                "eventFilters": [
                  {
                    "dimensionFilter": {
                      "filter": "FILTER_UNKNOWN",
                      "match": "UNKNOWN",
                      "values": [
                        "string"
                      ]
                    }
                  }
                ],
                "pathMatchPosition": "ANY"
              }
            ]
          }
        },
        "type": "TYPE_GENERAL"
      },
      "queryId": "string",
      "reportDataEndTimeMs": "string",
      "reportDataStartTimeMs": "string",
      "schedule": {
        "endTimeMs": "string",
        "frequency": "ONE_TIME",
        "nextRunMinuteOfDay": 0,
        "nextRunTimezoneCode": "string",
        "startTimeMs": "string"
      },
      "timezoneCode": "string"
    }
  ]
}
```

<h3 id="doubleclickbidmanagerquerieslistqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListQueriesResponse](#schemalistqueriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager )
</aside>

## doubleclickbidmanager.queries.createquery

<a id="opIddoubleclickbidmanager.queries.createquery"></a>

> Code samples

```bash
curl https://www.googleapis.com/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "string",
    "metadata": {
      "dataRange": "CUSTOM_DATES",
      "format": "CSV",
      "googleCloudStoragePathForLatestReport": "string",
      "googleDrivePathForLatestReport": "string",
      "latestReportRunTimeMs": "string",
      "locale": "string",
      "reportCount": 0,
      "running": true,
      "sendNotification": true,
      "shareEmailAddress": [
        "string"
      ],
      "title": "string"
    },
    "params": {
      "filters": [
        {
          "type": "FILTER_UNKNOWN",
          "value": "string"
        }
      ],
      "groupBys": [
        "FILTER_UNKNOWN"
      ],
      "includeInviteData": true,
      "metrics": [
        "METRIC_UNKNOWN"
      ],
      "options": {
        "includeOnlyTargetedUserLists": true,
        "pathQueryOptions": {
          "channelGrouping": {
            "fallbackName": "string",
            "name": "string",
            "rules": [
              {
                "disjunctiveMatchStatements": [
                  {
                    "eventFilters": [
                      {
                        "dimensionFilter": {
                          "filter": "FILTER_UNKNOWN",
                          "match": "UNKNOWN",
                          "values": [
                            "string"
                          ]
                        }
                      }
                    ]
                  }
                ],
                "name": "string"
              }
            ]
          },
          "pathFilters": [
            {
              "eventFilters": [
                {
                  "dimensionFilter": {
                    "filter": "FILTER_UNKNOWN",
                    "match": "UNKNOWN",
                    "values": [
                      "string"
                    ]
                  }
                }
              ],
              "pathMatchPosition": "ANY"
            }
          ]
        }
      },
      "type": "TYPE_GENERAL"
    },
    "queryId": "string",
    "reportDataEndTimeMs": "string",
    "reportDataStartTimeMs": "string",
    "schedule": {
      "endTimeMs": "string",
      "frequency": "ONE_TIME",
      "nextRunMinuteOfDay": 0,
      "nextRunTimezoneCode": "string",
      "startTimeMs": "string"
    },
    "timezoneCode": "string"
  }'
```

`POST /query`

Creates a query.

> Body parameter

```json
{
  "kind": "string",
  "metadata": {
    "dataRange": "CUSTOM_DATES",
    "format": "CSV",
    "googleCloudStoragePathForLatestReport": "string",
    "googleDrivePathForLatestReport": "string",
    "latestReportRunTimeMs": "string",
    "locale": "string",
    "reportCount": 0,
    "running": true,
    "sendNotification": true,
    "shareEmailAddress": [
      "string"
    ],
    "title": "string"
  },
  "params": {
    "filters": [
      {
        "type": "FILTER_UNKNOWN",
        "value": "string"
      }
    ],
    "groupBys": [
      "FILTER_UNKNOWN"
    ],
    "includeInviteData": true,
    "metrics": [
      "METRIC_UNKNOWN"
    ],
    "options": {
      "includeOnlyTargetedUserLists": true,
      "pathQueryOptions": {
        "channelGrouping": {
          "fallbackName": "string",
          "name": "string",
          "rules": [
            {
              "disjunctiveMatchStatements": [
                {
                  "eventFilters": [
                    {
                      "dimensionFilter": {
                        "filter": "FILTER_UNKNOWN",
                        "match": "UNKNOWN",
                        "values": [
                          "string"
                        ]
                      }
                    }
                  ]
                }
              ],
              "name": "string"
            }
          ]
        },
        "pathFilters": [
          {
            "eventFilters": [
              {
                "dimensionFilter": {
                  "filter": "FILTER_UNKNOWN",
                  "match": "UNKNOWN",
                  "values": [
                    "string"
                  ]
                }
              }
            ],
            "pathMatchPosition": "ANY"
          }
        ]
      }
    },
    "type": "TYPE_GENERAL"
  },
  "queryId": "string",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "schedule": {
    "endTimeMs": "string",
    "frequency": "ONE_TIME",
    "nextRunMinuteOfDay": 0,
    "nextRunTimezoneCode": "string",
    "startTimeMs": "string"
  },
  "timezoneCode": "string"
}
```

<h3 id="doubleclickbidmanagerqueriescreatequery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asynchronous|query|boolean|false|If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME.|
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
|body|body|[Query](#schemaquery)|false|none|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".|
|» metadata|body|[QueryMetadata](#schemaquerymetadata)|false|Query metadata.|
|» params|body|[Parameters](#schemaparameters)|false|Query parameters.|
|» queryId|body|string(int64)|false|Query ID.|
|» reportDataEndTimeMs|body|string(int64)|false|The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.|
|» reportDataStartTimeMs|body|string(int64)|false|The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.|
|» schedule|body|[QuerySchedule](#schemaqueryschedule)|false|Information on how often and when to run a query.|
|» timezoneCode|body|string|false|Canonical timezone code for report data time. Defaults to America/New_York.|

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
  "kind": "string",
  "metadata": {
    "dataRange": "CUSTOM_DATES",
    "format": "CSV",
    "googleCloudStoragePathForLatestReport": "string",
    "googleDrivePathForLatestReport": "string",
    "latestReportRunTimeMs": "string",
    "locale": "string",
    "reportCount": 0,
    "running": true,
    "sendNotification": true,
    "shareEmailAddress": [
      "string"
    ],
    "title": "string"
  },
  "params": {
    "filters": [
      {
        "type": "FILTER_UNKNOWN",
        "value": "string"
      }
    ],
    "groupBys": [
      "FILTER_UNKNOWN"
    ],
    "includeInviteData": true,
    "metrics": [
      "METRIC_UNKNOWN"
    ],
    "options": {
      "includeOnlyTargetedUserLists": true,
      "pathQueryOptions": {
        "channelGrouping": {
          "fallbackName": "string",
          "name": "string",
          "rules": [
            {
              "disjunctiveMatchStatements": [
                {
                  "eventFilters": [
                    {
                      "dimensionFilter": {
                        "filter": "FILTER_UNKNOWN",
                        "match": "UNKNOWN",
                        "values": [
                          "string"
                        ]
                      }
                    }
                  ]
                }
              ],
              "name": "string"
            }
          ]
        },
        "pathFilters": [
          {
            "eventFilters": [
              {
                "dimensionFilter": {
                  "filter": "FILTER_UNKNOWN",
                  "match": "UNKNOWN",
                  "values": [
                    "string"
                  ]
                }
              }
            ],
            "pathMatchPosition": "ANY"
          }
        ]
      }
    },
    "type": "TYPE_GENERAL"
  },
  "queryId": "string",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "schedule": {
    "endTimeMs": "string",
    "frequency": "ONE_TIME",
    "nextRunMinuteOfDay": 0,
    "nextRunTimezoneCode": "string",
    "startTimeMs": "string"
  },
  "timezoneCode": "string"
}
```

<h3 id="doubleclickbidmanagerqueriescreatequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Query](#schemaquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager )
</aside>

## doubleclickbidmanager.queries.getquery

<a id="opIddoubleclickbidmanager.queries.getquery"></a>

> Code samples

```bash
curl https://www.googleapis.com/query/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /query/{queryId}`

Retrieves a stored query.

<h3 id="doubleclickbidmanagerqueriesgetquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryId|path|string|true|Query ID to retrieve.|
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
  "kind": "string",
  "metadata": {
    "dataRange": "CUSTOM_DATES",
    "format": "CSV",
    "googleCloudStoragePathForLatestReport": "string",
    "googleDrivePathForLatestReport": "string",
    "latestReportRunTimeMs": "string",
    "locale": "string",
    "reportCount": 0,
    "running": true,
    "sendNotification": true,
    "shareEmailAddress": [
      "string"
    ],
    "title": "string"
  },
  "params": {
    "filters": [
      {
        "type": "FILTER_UNKNOWN",
        "value": "string"
      }
    ],
    "groupBys": [
      "FILTER_UNKNOWN"
    ],
    "includeInviteData": true,
    "metrics": [
      "METRIC_UNKNOWN"
    ],
    "options": {
      "includeOnlyTargetedUserLists": true,
      "pathQueryOptions": {
        "channelGrouping": {
          "fallbackName": "string",
          "name": "string",
          "rules": [
            {
              "disjunctiveMatchStatements": [
                {
                  "eventFilters": [
                    {
                      "dimensionFilter": {
                        "filter": "FILTER_UNKNOWN",
                        "match": "UNKNOWN",
                        "values": [
                          "string"
                        ]
                      }
                    }
                  ]
                }
              ],
              "name": "string"
            }
          ]
        },
        "pathFilters": [
          {
            "eventFilters": [
              {
                "dimensionFilter": {
                  "filter": "FILTER_UNKNOWN",
                  "match": "UNKNOWN",
                  "values": [
                    "string"
                  ]
                }
              }
            ],
            "pathMatchPosition": "ANY"
          }
        ]
      }
    },
    "type": "TYPE_GENERAL"
  },
  "queryId": "string",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "schedule": {
    "endTimeMs": "string",
    "frequency": "ONE_TIME",
    "nextRunMinuteOfDay": 0,
    "nextRunTimezoneCode": "string",
    "startTimeMs": "string"
  },
  "timezoneCode": "string"
}
```

<h3 id="doubleclickbidmanagerqueriesgetquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Query](#schemaquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager )
</aside>

## doubleclickbidmanager.queries.runquery

<a id="opIddoubleclickbidmanager.queries.runquery"></a>

> Code samples

```bash
curl https://www.googleapis.com/query/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataRange": "CUSTOM_DATES",
    "reportDataEndTimeMs": "string",
    "reportDataStartTimeMs": "string",
    "timezoneCode": "string"
  }'
```

`POST /query/{queryId}`

Runs a stored query to generate a report.

> Body parameter

```json
{
  "dataRange": "CUSTOM_DATES",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "timezoneCode": "string"
}
```

<h3 id="doubleclickbidmanagerqueriesrunquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryId|path|string|true|Query ID to run.|
|asynchronous|query|boolean|false|If true, tries to run the query asynchronously.|
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
|body|body|[RunQueryRequest](#schemarunqueryrequest)|false|none|
|» dataRange|body|string|false|Report data range used to generate the report.|
|» reportDataEndTimeMs|body|string(int64)|false|The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.|
|» reportDataStartTimeMs|body|string(int64)|false|The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.|
|» timezoneCode|body|string|false|Canonical timezone code for report data time. Defaults to America/New_York.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dataRange|CUSTOM_DATES|
|» dataRange|CURRENT_DAY|
|» dataRange|PREVIOUS_DAY|
|» dataRange|WEEK_TO_DATE|
|» dataRange|MONTH_TO_DATE|
|» dataRange|QUARTER_TO_DATE|
|» dataRange|YEAR_TO_DATE|
|» dataRange|PREVIOUS_WEEK|
|» dataRange|PREVIOUS_HALF_MONTH|
|» dataRange|PREVIOUS_MONTH|
|» dataRange|PREVIOUS_QUARTER|
|» dataRange|PREVIOUS_YEAR|
|» dataRange|LAST_7_DAYS|
|» dataRange|LAST_30_DAYS|
|» dataRange|LAST_90_DAYS|
|» dataRange|LAST_365_DAYS|
|» dataRange|ALL_TIME|
|» dataRange|LAST_14_DAYS|
|» dataRange|TYPE_NOT_SUPPORTED|
|» dataRange|LAST_60_DAYS|

<h3 id="doubleclickbidmanagerqueriesrunquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager )
</aside>

## doubleclickbidmanager.queries.deletequery

<a id="opIddoubleclickbidmanager.queries.deletequery"></a>

> Code samples

```bash
curl https://www.googleapis.com/query/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /query/{queryId}`

Deletes a stored query as well as the associated stored reports.

<h3 id="doubleclickbidmanagerqueriesdeletequery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryId|path|string|true|Query ID to delete.|
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

<h3 id="doubleclickbidmanagerqueriesdeletequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager )
</aside>

<h1 id="doubleclick-bid-manager-api-reports">reports</h1>

## doubleclickbidmanager.reports.listreports

<a id="opIddoubleclickbidmanager.reports.listreports"></a>

> Code samples

```bash
curl https://www.googleapis.com/queries/string/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /queries/{queryId}/reports`

Retrieves stored reports.

<h3 id="doubleclickbidmanagerreportslistreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryId|path|string|true|Query ID with which the reports are associated.|
|pageSize|query|integer|false|Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.|
|pageToken|query|string|false|Optional pagination token.|
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
  "kind": "string",
  "nextPageToken": "string",
  "reports": [
    {
      "key": {
        "queryId": "string",
        "reportId": "string"
      },
      "metadata": {
        "googleCloudStoragePath": "string",
        "reportDataEndTimeMs": "string",
        "reportDataStartTimeMs": "string",
        "status": {
          "failure": {
            "errorCode": "AUTHENTICATION_ERROR"
          },
          "finishTimeMs": "string",
          "format": "CSV",
          "state": "RUNNING"
        }
      },
      "params": {
        "filters": [
          {
            "type": "FILTER_UNKNOWN",
            "value": "string"
          }
        ],
        "groupBys": [
          "FILTER_UNKNOWN"
        ],
        "includeInviteData": true,
        "metrics": [
          "METRIC_UNKNOWN"
        ],
        "options": {
          "includeOnlyTargetedUserLists": true,
          "pathQueryOptions": {
            "channelGrouping": {
              "fallbackName": "string",
              "name": "string",
              "rules": [
                {
                  "disjunctiveMatchStatements": [
                    {
                      "eventFilters": [
                        {
                          "dimensionFilter": {
                            "filter": "FILTER_UNKNOWN",
                            "match": "UNKNOWN",
                            "values": [
                              "string"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "name": "string"
                }
              ]
            },
            "pathFilters": [
              {
                "eventFilters": [
                  {
                    "dimensionFilter": {
                      "filter": "FILTER_UNKNOWN",
                      "match": "UNKNOWN",
                      "values": [
                        "string"
                      ]
                    }
                  }
                ],
                "pathMatchPosition": "ANY"
              }
            ]
          }
        },
        "type": "TYPE_GENERAL"
      }
    }
  ]
}
```

<h3 id="doubleclickbidmanagerreportslistreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReportsResponse](#schemalistreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/doubleclickbidmanager )
</aside>

# Schemas

<h2 id="tocS_ChannelGrouping">ChannelGrouping</h2>
<!-- backwards compatibility -->
<a id="schemachannelgrouping"></a>
<a id="schema_ChannelGrouping"></a>
<a id="tocSchannelgrouping"></a>
<a id="tocschannelgrouping"></a>

```json
{
  "fallbackName": "string",
  "name": "string",
  "rules": [
    {
      "disjunctiveMatchStatements": [
        {
          "eventFilters": [
            {
              "dimensionFilter": {
                "filter": "FILTER_UNKNOWN",
                "match": "UNKNOWN",
                "values": [
                  "string"
                ]
              }
            }
          ]
        }
      ],
      "name": "string"
    }
  ]
}
```

A channel grouping defines a set of rules that can be used to categorize events in a path report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fallbackName|string|false|none|The name to apply to an event that does not match any of the rules in the channel grouping.|
|name|string|false|none|Channel Grouping name.|
|rules|[[Rule](#schemarule)]|false|none|Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping.|

<h2 id="tocS_DisjunctiveMatchStatement">DisjunctiveMatchStatement</h2>
<!-- backwards compatibility -->
<a id="schemadisjunctivematchstatement"></a>
<a id="schema_DisjunctiveMatchStatement"></a>
<a id="tocSdisjunctivematchstatement"></a>
<a id="tocsdisjunctivematchstatement"></a>

```json
{
  "eventFilters": [
    {
      "dimensionFilter": {
        "filter": "FILTER_UNKNOWN",
        "match": "UNKNOWN",
        "values": [
          "string"
        ]
      }
    }
  ]
}
```

DisjunctiveMatchStatement that OR's all contained filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventFilters|[[EventFilter](#schemaeventfilter)]|false|none|Filters. There is a limit of 100 filters that can be set per disjunctive match statement.|

<h2 id="tocS_EventFilter">EventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventfilter"></a>
<a id="schema_EventFilter"></a>
<a id="tocSeventfilter"></a>
<a id="tocseventfilter"></a>

```json
{
  "dimensionFilter": {
    "filter": "FILTER_UNKNOWN",
    "match": "UNKNOWN",
    "values": [
      "string"
    ]
  }
}
```

Defines the type of filter to be applied to the path, a DV360 event dimension filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionFilter|[PathQueryOptionsFilter](#schemapathqueryoptionsfilter)|false|none|Filter on a dimension.|

<h2 id="tocS_FilterPair">FilterPair</h2>
<!-- backwards compatibility -->
<a id="schemafilterpair"></a>
<a id="schema_FilterPair"></a>
<a id="tocSfilterpair"></a>
<a id="tocsfilterpair"></a>

```json
{
  "type": "FILTER_UNKNOWN",
  "value": "string"
}
```

Filter used to match traffic data in your report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Filter type.|
|value|string|false|none|Filter value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FILTER_UNKNOWN|
|type|FILTER_DATE|
|type|FILTER_DAY_OF_WEEK|
|type|FILTER_WEEK|
|type|FILTER_MONTH|
|type|FILTER_YEAR|
|type|FILTER_TIME_OF_DAY|
|type|FILTER_CONVERSION_DELAY|
|type|FILTER_CREATIVE_ID|
|type|FILTER_CREATIVE_SIZE|
|type|FILTER_CREATIVE_TYPE|
|type|FILTER_EXCHANGE_ID|
|type|FILTER_AD_POSITION|
|type|FILTER_PUBLIC_INVENTORY|
|type|FILTER_INVENTORY_SOURCE|
|type|FILTER_CITY|
|type|FILTER_REGION|
|type|FILTER_DMA|
|type|FILTER_COUNTRY|
|type|FILTER_SITE_ID|
|type|FILTER_CHANNEL_ID|
|type|FILTER_PARTNER|
|type|FILTER_ADVERTISER|
|type|FILTER_INSERTION_ORDER|
|type|FILTER_LINE_ITEM|
|type|FILTER_PARTNER_CURRENCY|
|type|FILTER_ADVERTISER_CURRENCY|
|type|FILTER_ADVERTISER_TIMEZONE|
|type|FILTER_LINE_ITEM_TYPE|
|type|FILTER_USER_LIST|
|type|FILTER_USER_LIST_FIRST_PARTY|
|type|FILTER_USER_LIST_THIRD_PARTY|
|type|FILTER_TARGETED_USER_LIST|
|type|FILTER_DATA_PROVIDER|
|type|FILTER_ORDER_ID|
|type|FILTER_VIDEO_PLAYER_SIZE|
|type|FILTER_VIDEO_DURATION_SECONDS|
|type|FILTER_KEYWORD|
|type|FILTER_PAGE_CATEGORY|
|type|FILTER_CAMPAIGN_DAILY_FREQUENCY|
|type|FILTER_LINE_ITEM_DAILY_FREQUENCY|
|type|FILTER_LINE_ITEM_LIFETIME_FREQUENCY|
|type|FILTER_OS|
|type|FILTER_BROWSER|
|type|FILTER_CARRIER|
|type|FILTER_SITE_LANGUAGE|
|type|FILTER_INVENTORY_FORMAT|
|type|FILTER_ZIP_CODE|
|type|FILTER_VIDEO_RATING_TIER|
|type|FILTER_VIDEO_FORMAT_SUPPORT|
|type|FILTER_VIDEO_SKIPPABLE_SUPPORT|
|type|FILTER_VIDEO_CREATIVE_DURATION|
|type|FILTER_PAGE_LAYOUT|
|type|FILTER_VIDEO_AD_POSITION_IN_STREAM|
|type|FILTER_AGE|
|type|FILTER_GENDER|
|type|FILTER_QUARTER|
|type|FILTER_TRUEVIEW_CONVERSION_TYPE|
|type|FILTER_MOBILE_GEO|
|type|FILTER_MRAID_SUPPORT|
|type|FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY|
|type|FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE|
|type|FILTER_NIELSEN_COUNTRY_CODE|
|type|FILTER_NIELSEN_DEVICE_ID|
|type|FILTER_NIELSEN_GENDER|
|type|FILTER_NIELSEN_AGE|
|type|FILTER_INVENTORY_SOURCE_TYPE|
|type|FILTER_CREATIVE_WIDTH|
|type|FILTER_CREATIVE_HEIGHT|
|type|FILTER_DFP_ORDER_ID|
|type|FILTER_TRUEVIEW_AGE|
|type|FILTER_TRUEVIEW_GENDER|
|type|FILTER_TRUEVIEW_PARENTAL_STATUS|
|type|FILTER_TRUEVIEW_REMARKETING_LIST|
|type|FILTER_TRUEVIEW_INTEREST|
|type|FILTER_TRUEVIEW_AD_GROUP_ID|
|type|FILTER_TRUEVIEW_AD_GROUP_AD_ID|
|type|FILTER_TRUEVIEW_IAR_LANGUAGE|
|type|FILTER_TRUEVIEW_IAR_GENDER|
|type|FILTER_TRUEVIEW_IAR_AGE|
|type|FILTER_TRUEVIEW_IAR_CATEGORY|
|type|FILTER_TRUEVIEW_IAR_COUNTRY|
|type|FILTER_TRUEVIEW_IAR_CITY|
|type|FILTER_TRUEVIEW_IAR_REGION|
|type|FILTER_TRUEVIEW_IAR_ZIPCODE|
|type|FILTER_TRUEVIEW_IAR_REMARKETING_LIST|
|type|FILTER_TRUEVIEW_IAR_INTEREST|
|type|FILTER_TRUEVIEW_IAR_PARENTAL_STATUS|
|type|FILTER_TRUEVIEW_IAR_TIME_OF_DAY|
|type|FILTER_TRUEVIEW_CUSTOM_AFFINITY|
|type|FILTER_TRUEVIEW_CATEGORY|
|type|FILTER_TRUEVIEW_KEYWORD|
|type|FILTER_TRUEVIEW_PLACEMENT|
|type|FILTER_TRUEVIEW_URL|
|type|FILTER_TRUEVIEW_COUNTRY|
|type|FILTER_TRUEVIEW_REGION|
|type|FILTER_TRUEVIEW_CITY|
|type|FILTER_TRUEVIEW_DMA|
|type|FILTER_TRUEVIEW_ZIPCODE|
|type|FILTER_NOT_SUPPORTED|
|type|FILTER_MEDIA_PLAN|
|type|FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL|
|type|FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO|
|type|FILTER_SKIPPABLE_SUPPORT|
|type|FILTER_COMPANION_CREATIVE_ID|
|type|FILTER_BUDGET_SEGMENT_DESCRIPTION|
|type|FILTER_FLOODLIGHT_ACTIVITY_ID|
|type|FILTER_DEVICE_MODEL|
|type|FILTER_DEVICE_MAKE|
|type|FILTER_DEVICE_TYPE|
|type|FILTER_CREATIVE_ATTRIBUTE|
|type|FILTER_INVENTORY_COMMITMENT_TYPE|
|type|FILTER_INVENTORY_RATE_TYPE|
|type|FILTER_INVENTORY_DELIVERY_METHOD|
|type|FILTER_INVENTORY_SOURCE_EXTERNAL_ID|
|type|FILTER_AUTHORIZED_SELLER_STATE|
|type|FILTER_VIDEO_DURATION_SECONDS_RANGE|
|type|FILTER_PARTNER_NAME|
|type|FILTER_PARTNER_STATUS|
|type|FILTER_ADVERTISER_NAME|
|type|FILTER_ADVERTISER_INTEGRATION_CODE|
|type|FILTER_ADVERTISER_INTEGRATION_STATUS|
|type|FILTER_CARRIER_NAME|
|type|FILTER_CHANNEL_NAME|
|type|FILTER_CITY_NAME|
|type|FILTER_COMPANION_CREATIVE_NAME|
|type|FILTER_USER_LIST_FIRST_PARTY_NAME|
|type|FILTER_USER_LIST_THIRD_PARTY_NAME|
|type|FILTER_NIELSEN_RESTATEMENT_DATE|
|type|FILTER_NIELSEN_DATE_RANGE|
|type|FILTER_INSERTION_ORDER_NAME|
|type|FILTER_REGION_NAME|
|type|FILTER_DMA_NAME|
|type|FILTER_TRUEVIEW_IAR_REGION_NAME|
|type|FILTER_TRUEVIEW_DMA_NAME|
|type|FILTER_TRUEVIEW_REGION_NAME|
|type|FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID|
|type|FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME|
|type|FILTER_AD_TYPE|
|type|FILTER_ALGORITHM|
|type|FILTER_ALGORITHM_ID|
|type|FILTER_AMP_PAGE_REQUEST|
|type|FILTER_ANONYMOUS_INVENTORY_MODELING|
|type|FILTER_APP_URL|
|type|FILTER_APP_URL_EXCLUDED|
|type|FILTER_ATTRIBUTED_USERLIST|
|type|FILTER_ATTRIBUTED_USERLIST_COST|
|type|FILTER_ATTRIBUTED_USERLIST_TYPE|
|type|FILTER_ATTRIBUTION_MODEL|
|type|FILTER_AUDIENCE_LIST|
|type|FILTER_AUDIENCE_LIST_COST|
|type|FILTER_AUDIENCE_LIST_TYPE|
|type|FILTER_AUDIENCE_NAME|
|type|FILTER_AUDIENCE_TYPE|
|type|FILTER_BILLABLE_OUTCOME|
|type|FILTER_BRAND_LIFT_TYPE|
|type|FILTER_CHANNEL_TYPE|
|type|FILTER_CM_PLACEMENT_ID|
|type|FILTER_CONVERSION_SOURCE|
|type|FILTER_CONVERSION_SOURCE_ID|
|type|FILTER_COUNTRY_ID|
|type|FILTER_CREATIVE|
|type|FILTER_CREATIVE_ASSET|
|type|FILTER_CREATIVE_INTEGRATION_CODE|
|type|FILTER_CREATIVE_RENDERED_IN_AMP|
|type|FILTER_CREATIVE_SOURCE|
|type|FILTER_CREATIVE_STATUS|
|type|FILTER_DATA_PROVIDER_NAME|
|type|FILTER_DETAILED_DEMOGRAPHICS|
|type|FILTER_DETAILED_DEMOGRAPHICS_ID|
|type|FILTER_DEVICE|
|type|FILTER_GAM_INSERTION_ORDER|
|type|FILTER_GAM_LINE_ITEM|
|type|FILTER_GAM_LINE_ITEM_ID|
|type|FILTER_DIGITAL_CONTENT_LABEL|
|type|FILTER_DOMAIN|
|type|FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST|
|type|FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST|
|type|FILTER_EXCHANGE|
|type|FILTER_EXCHANGE_CODE|
|type|FILTER_EXTENSION|
|type|FILTER_EXTENSION_STATUS|
|type|FILTER_EXTENSION_TYPE|
|type|FILTER_FIRST_PARTY_AUDIENCE_LIST_COST|
|type|FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE|
|type|FILTER_FLOODLIGHT_ACTIVITY|
|type|FILTER_FORMAT|
|type|FILTER_GMAIL_AGE|
|type|FILTER_GMAIL_CITY|
|type|FILTER_GMAIL_COUNTRY|
|type|FILTER_GMAIL_COUNTRY_NAME|
|type|FILTER_GMAIL_DEVICE_TYPE|
|type|FILTER_GMAIL_DEVICE_TYPE_NAME|
|type|FILTER_GMAIL_GENDER|
|type|FILTER_GMAIL_REGION|
|type|FILTER_GMAIL_REMARKETING_LIST|
|type|FILTER_HOUSEHOLD_INCOME|
|type|FILTER_IMPRESSION_COUNTING_METHOD|
|type|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER|
|type|FILTER_INSERTION_ORDER_INTEGRATION_CODE|
|type|FILTER_INSERTION_ORDER_STATUS|
|type|FILTER_INTEREST|
|type|FILTER_INVENTORY_SOURCE_GROUP|
|type|FILTER_INVENTORY_SOURCE_GROUP_ID|
|type|FILTER_INVENTORY_SOURCE_ID|
|type|FILTER_INVENTORY_SOURCE_NAME|
|type|FILTER_LIFE_EVENT|
|type|FILTER_LIFE_EVENTS|
|type|FILTER_LINE_ITEM_INTEGRATION_CODE|
|type|FILTER_LINE_ITEM_NAME|
|type|FILTER_LINE_ITEM_STATUS|
|type|FILTER_MATCH_RATIO|
|type|FILTER_MEASUREMENT_SOURCE|
|type|FILTER_MEDIA_PLAN_NAME|
|type|FILTER_PARENTAL_STATUS|
|type|FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS|
|type|FILTER_PLATFORM|
|type|FILTER_PLAYBACK_METHOD|
|type|FILTER_POSITION_IN_CONTENT|
|type|FILTER_PUBLISHER_PROPERTY|
|type|FILTER_PUBLISHER_PROPERTY_ID|
|type|FILTER_PUBLISHER_PROPERTY_SECTION|
|type|FILTER_PUBLISHER_PROPERTY_SECTION_ID|
|type|FILTER_REFUND_REASON|
|type|FILTER_REMARKETING_LIST|
|type|FILTER_REWARDED|
|type|FILTER_SENSITIVE_CATEGORY|
|type|FILTER_SERVED_PIXEL_DENSITY|
|type|FILTER_TARGETED_DATA_PROVIDERS|
|type|FILTER_THIRD_PARTY_AUDIENCE_LIST_COST|
|type|FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE|
|type|FILTER_TRUEVIEW_AD|
|type|FILTER_TRUEVIEW_AD_GROUP|
|type|FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS|
|type|FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID|
|type|FILTER_TRUEVIEW_HOUSEHOLD_INCOME|
|type|FILTER_TRUEVIEW_IAR_COUNTRY_NAME|
|type|FILTER_TRUEVIEW_REMARKETING_LIST_NAME|
|type|FILTER_VARIANT_ID|
|type|FILTER_VARIANT_NAME|
|type|FILTER_VARIANT_VERSION|
|type|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE|
|type|FILTER_VERIFICATION_VIDEO_POSITION|
|type|FILTER_VIDEO_COMPANION_CREATIVE_SIZE|
|type|FILTER_VIDEO_CONTINUOUS_PLAY|
|type|FILTER_VIDEO_DURATION|
|type|FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST|
|type|FILTER_YOUTUBE_AD_VIDEO|
|type|FILTER_YOUTUBE_AD_VIDEO_ID|
|type|FILTER_YOUTUBE_CHANNEL|
|type|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER|
|type|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER|
|type|FILTER_YOUTUBE_VIDEO|
|type|FILTER_ZIP_POSTAL_CODE|
|type|FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS|
|type|FILTER_TRUEVIEW_PLACEMENT_ID|
|type|FILTER_PATH_PATTERN_ID|
|type|FILTER_PATH_EVENT_INDEX|
|type|FILTER_EVENT_TYPE|
|type|FILTER_CHANNEL_GROUPING|
|type|FILTER_OM_SDK_AVAILABLE|
|type|FILTER_DATA_SOURCE|
|type|FILTER_CM360_PLACEMENT_ID|
|type|FILTER_TRUEVIEW_CLICK_TYPE_NAME|
|type|FILTER_TRUEVIEW_AD_TYPE_NAME|
|type|FILTER_VIDEO_CONTENT_DURATION|
|type|FILTER_MATCHED_GENRE_TARGET|
|type|FILTER_VIDEO_CONTENT_LIVE_STREAM|
|type|FILTER_BUDGET_SEGMENT_TYPE|
|type|FILTER_BUDGET_SEGMENT_BUDGET|
|type|FILTER_BUDGET_SEGMENT_START_DATE|
|type|FILTER_BUDGET_SEGMENT_END_DATE|
|type|FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE|
|type|FILTER_LINE_ITEM_BUDGET|
|type|FILTER_LINE_ITEM_START_DATE|
|type|FILTER_LINE_ITEM_END_DATE|
|type|FILTER_INSERTION_ORDER_GOAL_TYPE|
|type|FILTER_LINE_ITEM_PACING_PERCENTAGE|
|type|FILTER_INSERTION_ORDER_GOAL_VALUE|
|type|FILTER_OMID_CAPABLE|
|type|FILTER_VENDOR_MEASUREMENT_MODE|
|type|FILTER_IMPRESSION_LOSS_REJECTION_REASON|
|type|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START|
|type|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE|
|type|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT|
|type|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE|
|type|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE|
|type|FILTER_VERIFICATION_VIDEO_RESIZED|
|type|FILTER_VERIFICATION_AUDIBILITY_START|
|type|FILTER_VERIFICATION_AUDIBILITY_COMPLETE|
|type|FILTER_MEDIA_TYPE|
|type|FILTER_AUDIO_FEED_TYPE_NAME|
|type|FILTER_TRUEVIEW_TARGETING_EXPANSION|
|type|FILTER_PUBLISHER_TRAFFIC_SOURCE|

<h2 id="tocS_ListQueriesResponse">ListQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueriesresponse"></a>
<a id="schema_ListQueriesResponse"></a>
<a id="tocSlistqueriesresponse"></a>
<a id="tocslistqueriesresponse"></a>

```json
{
  "kind": "string",
  "nextPageToken": "string",
  "queries": [
    {
      "kind": "string",
      "metadata": {
        "dataRange": "CUSTOM_DATES",
        "format": "CSV",
        "googleCloudStoragePathForLatestReport": "string",
        "googleDrivePathForLatestReport": "string",
        "latestReportRunTimeMs": "string",
        "locale": "string",
        "reportCount": 0,
        "running": true,
        "sendNotification": true,
        "shareEmailAddress": [
          "string"
        ],
        "title": "string"
      },
      "params": {
        "filters": [
          {
            "type": "FILTER_UNKNOWN",
            "value": "string"
          }
        ],
        "groupBys": [
          "FILTER_UNKNOWN"
        ],
        "includeInviteData": true,
        "metrics": [
          "METRIC_UNKNOWN"
        ],
        "options": {
          "includeOnlyTargetedUserLists": true,
          "pathQueryOptions": {
            "channelGrouping": {
              "fallbackName": "string",
              "name": "string",
              "rules": [
                {
                  "disjunctiveMatchStatements": [
                    {
                      "eventFilters": [
                        {
                          "dimensionFilter": {
                            "filter": "FILTER_UNKNOWN",
                            "match": "UNKNOWN",
                            "values": [
                              "string"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "name": "string"
                }
              ]
            },
            "pathFilters": [
              {
                "eventFilters": [
                  {
                    "dimensionFilter": {
                      "filter": "FILTER_UNKNOWN",
                      "match": "UNKNOWN",
                      "values": [
                        "string"
                      ]
                    }
                  }
                ],
                "pathMatchPosition": "ANY"
              }
            ]
          }
        },
        "type": "TYPE_GENERAL"
      },
      "queryId": "string",
      "reportDataEndTimeMs": "string",
      "reportDataStartTimeMs": "string",
      "schedule": {
        "endTimeMs": "string",
        "frequency": "ONE_TIME",
        "nextRunMinuteOfDay": 0,
        "nextRunTimezoneCode": "string",
        "startTimeMs": "string"
      },
      "timezoneCode": "string"
    }
  ]
}
```

List queries response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".|
|nextPageToken|string|false|none|Next page's pagination token if one exists.|
|queries|[[Query](#schemaquery)]|false|none|Retrieved queries.|

<h2 id="tocS_ListReportsResponse">ListReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsresponse"></a>
<a id="schema_ListReportsResponse"></a>
<a id="tocSlistreportsresponse"></a>
<a id="tocslistreportsresponse"></a>

```json
{
  "kind": "string",
  "nextPageToken": "string",
  "reports": [
    {
      "key": {
        "queryId": "string",
        "reportId": "string"
      },
      "metadata": {
        "googleCloudStoragePath": "string",
        "reportDataEndTimeMs": "string",
        "reportDataStartTimeMs": "string",
        "status": {
          "failure": {
            "errorCode": "AUTHENTICATION_ERROR"
          },
          "finishTimeMs": "string",
          "format": "CSV",
          "state": "RUNNING"
        }
      },
      "params": {
        "filters": [
          {
            "type": "FILTER_UNKNOWN",
            "value": "string"
          }
        ],
        "groupBys": [
          "FILTER_UNKNOWN"
        ],
        "includeInviteData": true,
        "metrics": [
          "METRIC_UNKNOWN"
        ],
        "options": {
          "includeOnlyTargetedUserLists": true,
          "pathQueryOptions": {
            "channelGrouping": {
              "fallbackName": "string",
              "name": "string",
              "rules": [
                {
                  "disjunctiveMatchStatements": [
                    {
                      "eventFilters": [
                        {
                          "dimensionFilter": {
                            "filter": "FILTER_UNKNOWN",
                            "match": "UNKNOWN",
                            "values": [
                              "string"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "name": "string"
                }
              ]
            },
            "pathFilters": [
              {
                "eventFilters": [
                  {
                    "dimensionFilter": {
                      "filter": "FILTER_UNKNOWN",
                      "match": "UNKNOWN",
                      "values": [
                        "string"
                      ]
                    }
                  }
                ],
                "pathMatchPosition": "ANY"
              }
            ]
          }
        },
        "type": "TYPE_GENERAL"
      }
    }
  ]
}
```

List reports response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".|
|nextPageToken|string|false|none|Next page's pagination token if one exists.|
|reports|[[Report](#schemareport)]|false|none|Retrieved reports.|

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "includeOnlyTargetedUserLists": true,
  "pathQueryOptions": {
    "channelGrouping": {
      "fallbackName": "string",
      "name": "string",
      "rules": [
        {
          "disjunctiveMatchStatements": [
            {
              "eventFilters": [
                {
                  "dimensionFilter": {
                    "filter": "FILTER_UNKNOWN",
                    "match": "UNKNOWN",
                    "values": [
                      "string"
                    ]
                  }
                }
              ]
            }
          ],
          "name": "string"
        }
      ]
    },
    "pathFilters": [
      {
        "eventFilters": [
          {
            "dimensionFilter": {
              "filter": "FILTER_UNKNOWN",
              "match": "UNKNOWN",
              "values": [
                "string"
              ]
            }
          }
        ],
        "pathMatchPosition": "ANY"
      }
    ]
  }
}
```

Additional query options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeOnlyTargetedUserLists|boolean|false|none|Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items.|
|pathQueryOptions|[PathQueryOptions](#schemapathqueryoptions)|false|none|Options that contain Path Filters and Custom Channel Groupings.|

<h2 id="tocS_Parameters">Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaparameters"></a>
<a id="schema_Parameters"></a>
<a id="tocSparameters"></a>
<a id="tocsparameters"></a>

```json
{
  "filters": [
    {
      "type": "FILTER_UNKNOWN",
      "value": "string"
    }
  ],
  "groupBys": [
    "FILTER_UNKNOWN"
  ],
  "includeInviteData": true,
  "metrics": [
    "METRIC_UNKNOWN"
  ],
  "options": {
    "includeOnlyTargetedUserLists": true,
    "pathQueryOptions": {
      "channelGrouping": {
        "fallbackName": "string",
        "name": "string",
        "rules": [
          {
            "disjunctiveMatchStatements": [
              {
                "eventFilters": [
                  {
                    "dimensionFilter": {
                      "filter": "FILTER_UNKNOWN",
                      "match": "UNKNOWN",
                      "values": [
                        "string"
                      ]
                    }
                  }
                ]
              }
            ],
            "name": "string"
          }
        ]
      },
      "pathFilters": [
        {
          "eventFilters": [
            {
              "dimensionFilter": {
                "filter": "FILTER_UNKNOWN",
                "match": "UNKNOWN",
                "values": [
                  "string"
                ]
              }
            }
          ],
          "pathMatchPosition": "ANY"
        }
      ]
    }
  },
  "type": "TYPE_GENERAL"
}
```

Parameters of a query or report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[FilterPair](#schemafilterpair)]|false|none|Filters used to match traffic data in your report.|
|groupBys|[string]|false|none|Data is grouped by the filters listed in this field.|
|includeInviteData|boolean|false|none|Deprecated. This field is no longer in use.|
|metrics|[string]|false|none|Metrics to include as columns in your report.|
|options|[Options](#schemaoptions)|false|none|Additional query options.|
|type|string|false|none|Report type.|

#### Enumerated Values

|Property|Value|
|---|---|
|groupBys|FILTER_UNKNOWN|
|groupBys|FILTER_DATE|
|groupBys|FILTER_DAY_OF_WEEK|
|groupBys|FILTER_WEEK|
|groupBys|FILTER_MONTH|
|groupBys|FILTER_YEAR|
|groupBys|FILTER_TIME_OF_DAY|
|groupBys|FILTER_CONVERSION_DELAY|
|groupBys|FILTER_CREATIVE_ID|
|groupBys|FILTER_CREATIVE_SIZE|
|groupBys|FILTER_CREATIVE_TYPE|
|groupBys|FILTER_EXCHANGE_ID|
|groupBys|FILTER_AD_POSITION|
|groupBys|FILTER_PUBLIC_INVENTORY|
|groupBys|FILTER_INVENTORY_SOURCE|
|groupBys|FILTER_CITY|
|groupBys|FILTER_REGION|
|groupBys|FILTER_DMA|
|groupBys|FILTER_COUNTRY|
|groupBys|FILTER_SITE_ID|
|groupBys|FILTER_CHANNEL_ID|
|groupBys|FILTER_PARTNER|
|groupBys|FILTER_ADVERTISER|
|groupBys|FILTER_INSERTION_ORDER|
|groupBys|FILTER_LINE_ITEM|
|groupBys|FILTER_PARTNER_CURRENCY|
|groupBys|FILTER_ADVERTISER_CURRENCY|
|groupBys|FILTER_ADVERTISER_TIMEZONE|
|groupBys|FILTER_LINE_ITEM_TYPE|
|groupBys|FILTER_USER_LIST|
|groupBys|FILTER_USER_LIST_FIRST_PARTY|
|groupBys|FILTER_USER_LIST_THIRD_PARTY|
|groupBys|FILTER_TARGETED_USER_LIST|
|groupBys|FILTER_DATA_PROVIDER|
|groupBys|FILTER_ORDER_ID|
|groupBys|FILTER_VIDEO_PLAYER_SIZE|
|groupBys|FILTER_VIDEO_DURATION_SECONDS|
|groupBys|FILTER_KEYWORD|
|groupBys|FILTER_PAGE_CATEGORY|
|groupBys|FILTER_CAMPAIGN_DAILY_FREQUENCY|
|groupBys|FILTER_LINE_ITEM_DAILY_FREQUENCY|
|groupBys|FILTER_LINE_ITEM_LIFETIME_FREQUENCY|
|groupBys|FILTER_OS|
|groupBys|FILTER_BROWSER|
|groupBys|FILTER_CARRIER|
|groupBys|FILTER_SITE_LANGUAGE|
|groupBys|FILTER_INVENTORY_FORMAT|
|groupBys|FILTER_ZIP_CODE|
|groupBys|FILTER_VIDEO_RATING_TIER|
|groupBys|FILTER_VIDEO_FORMAT_SUPPORT|
|groupBys|FILTER_VIDEO_SKIPPABLE_SUPPORT|
|groupBys|FILTER_VIDEO_CREATIVE_DURATION|
|groupBys|FILTER_PAGE_LAYOUT|
|groupBys|FILTER_VIDEO_AD_POSITION_IN_STREAM|
|groupBys|FILTER_AGE|
|groupBys|FILTER_GENDER|
|groupBys|FILTER_QUARTER|
|groupBys|FILTER_TRUEVIEW_CONVERSION_TYPE|
|groupBys|FILTER_MOBILE_GEO|
|groupBys|FILTER_MRAID_SUPPORT|
|groupBys|FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY|
|groupBys|FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE|
|groupBys|FILTER_NIELSEN_COUNTRY_CODE|
|groupBys|FILTER_NIELSEN_DEVICE_ID|
|groupBys|FILTER_NIELSEN_GENDER|
|groupBys|FILTER_NIELSEN_AGE|
|groupBys|FILTER_INVENTORY_SOURCE_TYPE|
|groupBys|FILTER_CREATIVE_WIDTH|
|groupBys|FILTER_CREATIVE_HEIGHT|
|groupBys|FILTER_DFP_ORDER_ID|
|groupBys|FILTER_TRUEVIEW_AGE|
|groupBys|FILTER_TRUEVIEW_GENDER|
|groupBys|FILTER_TRUEVIEW_PARENTAL_STATUS|
|groupBys|FILTER_TRUEVIEW_REMARKETING_LIST|
|groupBys|FILTER_TRUEVIEW_INTEREST|
|groupBys|FILTER_TRUEVIEW_AD_GROUP_ID|
|groupBys|FILTER_TRUEVIEW_AD_GROUP_AD_ID|
|groupBys|FILTER_TRUEVIEW_IAR_LANGUAGE|
|groupBys|FILTER_TRUEVIEW_IAR_GENDER|
|groupBys|FILTER_TRUEVIEW_IAR_AGE|
|groupBys|FILTER_TRUEVIEW_IAR_CATEGORY|
|groupBys|FILTER_TRUEVIEW_IAR_COUNTRY|
|groupBys|FILTER_TRUEVIEW_IAR_CITY|
|groupBys|FILTER_TRUEVIEW_IAR_REGION|
|groupBys|FILTER_TRUEVIEW_IAR_ZIPCODE|
|groupBys|FILTER_TRUEVIEW_IAR_REMARKETING_LIST|
|groupBys|FILTER_TRUEVIEW_IAR_INTEREST|
|groupBys|FILTER_TRUEVIEW_IAR_PARENTAL_STATUS|
|groupBys|FILTER_TRUEVIEW_IAR_TIME_OF_DAY|
|groupBys|FILTER_TRUEVIEW_CUSTOM_AFFINITY|
|groupBys|FILTER_TRUEVIEW_CATEGORY|
|groupBys|FILTER_TRUEVIEW_KEYWORD|
|groupBys|FILTER_TRUEVIEW_PLACEMENT|
|groupBys|FILTER_TRUEVIEW_URL|
|groupBys|FILTER_TRUEVIEW_COUNTRY|
|groupBys|FILTER_TRUEVIEW_REGION|
|groupBys|FILTER_TRUEVIEW_CITY|
|groupBys|FILTER_TRUEVIEW_DMA|
|groupBys|FILTER_TRUEVIEW_ZIPCODE|
|groupBys|FILTER_NOT_SUPPORTED|
|groupBys|FILTER_MEDIA_PLAN|
|groupBys|FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL|
|groupBys|FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO|
|groupBys|FILTER_SKIPPABLE_SUPPORT|
|groupBys|FILTER_COMPANION_CREATIVE_ID|
|groupBys|FILTER_BUDGET_SEGMENT_DESCRIPTION|
|groupBys|FILTER_FLOODLIGHT_ACTIVITY_ID|
|groupBys|FILTER_DEVICE_MODEL|
|groupBys|FILTER_DEVICE_MAKE|
|groupBys|FILTER_DEVICE_TYPE|
|groupBys|FILTER_CREATIVE_ATTRIBUTE|
|groupBys|FILTER_INVENTORY_COMMITMENT_TYPE|
|groupBys|FILTER_INVENTORY_RATE_TYPE|
|groupBys|FILTER_INVENTORY_DELIVERY_METHOD|
|groupBys|FILTER_INVENTORY_SOURCE_EXTERNAL_ID|
|groupBys|FILTER_AUTHORIZED_SELLER_STATE|
|groupBys|FILTER_VIDEO_DURATION_SECONDS_RANGE|
|groupBys|FILTER_PARTNER_NAME|
|groupBys|FILTER_PARTNER_STATUS|
|groupBys|FILTER_ADVERTISER_NAME|
|groupBys|FILTER_ADVERTISER_INTEGRATION_CODE|
|groupBys|FILTER_ADVERTISER_INTEGRATION_STATUS|
|groupBys|FILTER_CARRIER_NAME|
|groupBys|FILTER_CHANNEL_NAME|
|groupBys|FILTER_CITY_NAME|
|groupBys|FILTER_COMPANION_CREATIVE_NAME|
|groupBys|FILTER_USER_LIST_FIRST_PARTY_NAME|
|groupBys|FILTER_USER_LIST_THIRD_PARTY_NAME|
|groupBys|FILTER_NIELSEN_RESTATEMENT_DATE|
|groupBys|FILTER_NIELSEN_DATE_RANGE|
|groupBys|FILTER_INSERTION_ORDER_NAME|
|groupBys|FILTER_REGION_NAME|
|groupBys|FILTER_DMA_NAME|
|groupBys|FILTER_TRUEVIEW_IAR_REGION_NAME|
|groupBys|FILTER_TRUEVIEW_DMA_NAME|
|groupBys|FILTER_TRUEVIEW_REGION_NAME|
|groupBys|FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID|
|groupBys|FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME|
|groupBys|FILTER_AD_TYPE|
|groupBys|FILTER_ALGORITHM|
|groupBys|FILTER_ALGORITHM_ID|
|groupBys|FILTER_AMP_PAGE_REQUEST|
|groupBys|FILTER_ANONYMOUS_INVENTORY_MODELING|
|groupBys|FILTER_APP_URL|
|groupBys|FILTER_APP_URL_EXCLUDED|
|groupBys|FILTER_ATTRIBUTED_USERLIST|
|groupBys|FILTER_ATTRIBUTED_USERLIST_COST|
|groupBys|FILTER_ATTRIBUTED_USERLIST_TYPE|
|groupBys|FILTER_ATTRIBUTION_MODEL|
|groupBys|FILTER_AUDIENCE_LIST|
|groupBys|FILTER_AUDIENCE_LIST_COST|
|groupBys|FILTER_AUDIENCE_LIST_TYPE|
|groupBys|FILTER_AUDIENCE_NAME|
|groupBys|FILTER_AUDIENCE_TYPE|
|groupBys|FILTER_BILLABLE_OUTCOME|
|groupBys|FILTER_BRAND_LIFT_TYPE|
|groupBys|FILTER_CHANNEL_TYPE|
|groupBys|FILTER_CM_PLACEMENT_ID|
|groupBys|FILTER_CONVERSION_SOURCE|
|groupBys|FILTER_CONVERSION_SOURCE_ID|
|groupBys|FILTER_COUNTRY_ID|
|groupBys|FILTER_CREATIVE|
|groupBys|FILTER_CREATIVE_ASSET|
|groupBys|FILTER_CREATIVE_INTEGRATION_CODE|
|groupBys|FILTER_CREATIVE_RENDERED_IN_AMP|
|groupBys|FILTER_CREATIVE_SOURCE|
|groupBys|FILTER_CREATIVE_STATUS|
|groupBys|FILTER_DATA_PROVIDER_NAME|
|groupBys|FILTER_DETAILED_DEMOGRAPHICS|
|groupBys|FILTER_DETAILED_DEMOGRAPHICS_ID|
|groupBys|FILTER_DEVICE|
|groupBys|FILTER_GAM_INSERTION_ORDER|
|groupBys|FILTER_GAM_LINE_ITEM|
|groupBys|FILTER_GAM_LINE_ITEM_ID|
|groupBys|FILTER_DIGITAL_CONTENT_LABEL|
|groupBys|FILTER_DOMAIN|
|groupBys|FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST|
|groupBys|FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST|
|groupBys|FILTER_EXCHANGE|
|groupBys|FILTER_EXCHANGE_CODE|
|groupBys|FILTER_EXTENSION|
|groupBys|FILTER_EXTENSION_STATUS|
|groupBys|FILTER_EXTENSION_TYPE|
|groupBys|FILTER_FIRST_PARTY_AUDIENCE_LIST_COST|
|groupBys|FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE|
|groupBys|FILTER_FLOODLIGHT_ACTIVITY|
|groupBys|FILTER_FORMAT|
|groupBys|FILTER_GMAIL_AGE|
|groupBys|FILTER_GMAIL_CITY|
|groupBys|FILTER_GMAIL_COUNTRY|
|groupBys|FILTER_GMAIL_COUNTRY_NAME|
|groupBys|FILTER_GMAIL_DEVICE_TYPE|
|groupBys|FILTER_GMAIL_DEVICE_TYPE_NAME|
|groupBys|FILTER_GMAIL_GENDER|
|groupBys|FILTER_GMAIL_REGION|
|groupBys|FILTER_GMAIL_REMARKETING_LIST|
|groupBys|FILTER_HOUSEHOLD_INCOME|
|groupBys|FILTER_IMPRESSION_COUNTING_METHOD|
|groupBys|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER|
|groupBys|FILTER_INSERTION_ORDER_INTEGRATION_CODE|
|groupBys|FILTER_INSERTION_ORDER_STATUS|
|groupBys|FILTER_INTEREST|
|groupBys|FILTER_INVENTORY_SOURCE_GROUP|
|groupBys|FILTER_INVENTORY_SOURCE_GROUP_ID|
|groupBys|FILTER_INVENTORY_SOURCE_ID|
|groupBys|FILTER_INVENTORY_SOURCE_NAME|
|groupBys|FILTER_LIFE_EVENT|
|groupBys|FILTER_LIFE_EVENTS|
|groupBys|FILTER_LINE_ITEM_INTEGRATION_CODE|
|groupBys|FILTER_LINE_ITEM_NAME|
|groupBys|FILTER_LINE_ITEM_STATUS|
|groupBys|FILTER_MATCH_RATIO|
|groupBys|FILTER_MEASUREMENT_SOURCE|
|groupBys|FILTER_MEDIA_PLAN_NAME|
|groupBys|FILTER_PARENTAL_STATUS|
|groupBys|FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS|
|groupBys|FILTER_PLATFORM|
|groupBys|FILTER_PLAYBACK_METHOD|
|groupBys|FILTER_POSITION_IN_CONTENT|
|groupBys|FILTER_PUBLISHER_PROPERTY|
|groupBys|FILTER_PUBLISHER_PROPERTY_ID|
|groupBys|FILTER_PUBLISHER_PROPERTY_SECTION|
|groupBys|FILTER_PUBLISHER_PROPERTY_SECTION_ID|
|groupBys|FILTER_REFUND_REASON|
|groupBys|FILTER_REMARKETING_LIST|
|groupBys|FILTER_REWARDED|
|groupBys|FILTER_SENSITIVE_CATEGORY|
|groupBys|FILTER_SERVED_PIXEL_DENSITY|
|groupBys|FILTER_TARGETED_DATA_PROVIDERS|
|groupBys|FILTER_THIRD_PARTY_AUDIENCE_LIST_COST|
|groupBys|FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE|
|groupBys|FILTER_TRUEVIEW_AD|
|groupBys|FILTER_TRUEVIEW_AD_GROUP|
|groupBys|FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS|
|groupBys|FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID|
|groupBys|FILTER_TRUEVIEW_HOUSEHOLD_INCOME|
|groupBys|FILTER_TRUEVIEW_IAR_COUNTRY_NAME|
|groupBys|FILTER_TRUEVIEW_REMARKETING_LIST_NAME|
|groupBys|FILTER_VARIANT_ID|
|groupBys|FILTER_VARIANT_NAME|
|groupBys|FILTER_VARIANT_VERSION|
|groupBys|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE|
|groupBys|FILTER_VERIFICATION_VIDEO_POSITION|
|groupBys|FILTER_VIDEO_COMPANION_CREATIVE_SIZE|
|groupBys|FILTER_VIDEO_CONTINUOUS_PLAY|
|groupBys|FILTER_VIDEO_DURATION|
|groupBys|FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST|
|groupBys|FILTER_YOUTUBE_AD_VIDEO|
|groupBys|FILTER_YOUTUBE_AD_VIDEO_ID|
|groupBys|FILTER_YOUTUBE_CHANNEL|
|groupBys|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER|
|groupBys|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER|
|groupBys|FILTER_YOUTUBE_VIDEO|
|groupBys|FILTER_ZIP_POSTAL_CODE|
|groupBys|FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS|
|groupBys|FILTER_TRUEVIEW_PLACEMENT_ID|
|groupBys|FILTER_PATH_PATTERN_ID|
|groupBys|FILTER_PATH_EVENT_INDEX|
|groupBys|FILTER_EVENT_TYPE|
|groupBys|FILTER_CHANNEL_GROUPING|
|groupBys|FILTER_OM_SDK_AVAILABLE|
|groupBys|FILTER_DATA_SOURCE|
|groupBys|FILTER_CM360_PLACEMENT_ID|
|groupBys|FILTER_TRUEVIEW_CLICK_TYPE_NAME|
|groupBys|FILTER_TRUEVIEW_AD_TYPE_NAME|
|groupBys|FILTER_VIDEO_CONTENT_DURATION|
|groupBys|FILTER_MATCHED_GENRE_TARGET|
|groupBys|FILTER_VIDEO_CONTENT_LIVE_STREAM|
|groupBys|FILTER_BUDGET_SEGMENT_TYPE|
|groupBys|FILTER_BUDGET_SEGMENT_BUDGET|
|groupBys|FILTER_BUDGET_SEGMENT_START_DATE|
|groupBys|FILTER_BUDGET_SEGMENT_END_DATE|
|groupBys|FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE|
|groupBys|FILTER_LINE_ITEM_BUDGET|
|groupBys|FILTER_LINE_ITEM_START_DATE|
|groupBys|FILTER_LINE_ITEM_END_DATE|
|groupBys|FILTER_INSERTION_ORDER_GOAL_TYPE|
|groupBys|FILTER_LINE_ITEM_PACING_PERCENTAGE|
|groupBys|FILTER_INSERTION_ORDER_GOAL_VALUE|
|groupBys|FILTER_OMID_CAPABLE|
|groupBys|FILTER_VENDOR_MEASUREMENT_MODE|
|groupBys|FILTER_IMPRESSION_LOSS_REJECTION_REASON|
|groupBys|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START|
|groupBys|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE|
|groupBys|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT|
|groupBys|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE|
|groupBys|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE|
|groupBys|FILTER_VERIFICATION_VIDEO_RESIZED|
|groupBys|FILTER_VERIFICATION_AUDIBILITY_START|
|groupBys|FILTER_VERIFICATION_AUDIBILITY_COMPLETE|
|groupBys|FILTER_MEDIA_TYPE|
|groupBys|FILTER_AUDIO_FEED_TYPE_NAME|
|groupBys|FILTER_TRUEVIEW_TARGETING_EXPANSION|
|groupBys|FILTER_PUBLISHER_TRAFFIC_SOURCE|
|metrics|METRIC_UNKNOWN|
|metrics|METRIC_IMPRESSIONS|
|metrics|METRIC_CLICKS|
|metrics|METRIC_LAST_IMPRESSIONS|
|metrics|METRIC_LAST_CLICKS|
|metrics|METRIC_TOTAL_CONVERSIONS|
|metrics|METRIC_MEDIA_COST_ADVERTISER|
|metrics|METRIC_MEDIA_COST_USD|
|metrics|METRIC_MEDIA_COST_PARTNER|
|metrics|METRIC_DATA_COST_ADVERTISER|
|metrics|METRIC_DATA_COST_USD|
|metrics|METRIC_DATA_COST_PARTNER|
|metrics|METRIC_CPM_FEE1_ADVERTISER|
|metrics|METRIC_CPM_FEE1_USD|
|metrics|METRIC_CPM_FEE1_PARTNER|
|metrics|METRIC_CPM_FEE2_ADVERTISER|
|metrics|METRIC_CPM_FEE2_USD|
|metrics|METRIC_CPM_FEE2_PARTNER|
|metrics|METRIC_MEDIA_FEE1_ADVERTISER|
|metrics|METRIC_MEDIA_FEE1_USD|
|metrics|METRIC_MEDIA_FEE1_PARTNER|
|metrics|METRIC_MEDIA_FEE2_ADVERTISER|
|metrics|METRIC_MEDIA_FEE2_USD|
|metrics|METRIC_MEDIA_FEE2_PARTNER|
|metrics|METRIC_REVENUE_ADVERTISER|
|metrics|METRIC_REVENUE_USD|
|metrics|METRIC_REVENUE_PARTNER|
|metrics|METRIC_PROFIT_ADVERTISER|
|metrics|METRIC_PROFIT_USD|
|metrics|METRIC_PROFIT_PARTNER|
|metrics|METRIC_PROFIT_MARGIN|
|metrics|METRIC_TOTAL_MEDIA_COST_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ADVERTISER|
|metrics|METRIC_BILLABLE_COST_USD|
|metrics|METRIC_BILLABLE_COST_PARTNER|
|metrics|METRIC_BILLABLE_COST_ADVERTISER|
|metrics|METRIC_PLATFORM_FEE_USD|
|metrics|METRIC_PLATFORM_FEE_PARTNER|
|metrics|METRIC_PLATFORM_FEE_ADVERTISER|
|metrics|METRIC_VIDEO_COMPLETION_RATE|
|metrics|METRIC_PROFIT_ECPM_ADVERTISER|
|metrics|METRIC_PROFIT_ECPM_USD|
|metrics|METRIC_PROFIT_ECPM_PARTNER|
|metrics|METRIC_REVENUE_ECPM_ADVERTISER|
|metrics|METRIC_REVENUE_ECPM_USD|
|metrics|METRIC_REVENUE_ECPM_PARTNER|
|metrics|METRIC_REVENUE_ECPC_ADVERTISER|
|metrics|METRIC_REVENUE_ECPC_USD|
|metrics|METRIC_REVENUE_ECPC_PARTNER|
|metrics|METRIC_REVENUE_ECPA_ADVERTISER|
|metrics|METRIC_REVENUE_ECPA_USD|
|metrics|METRIC_REVENUE_ECPA_PARTNER|
|metrics|METRIC_REVENUE_ECPAPV_ADVERTISER|
|metrics|METRIC_REVENUE_ECPAPV_USD|
|metrics|METRIC_REVENUE_ECPAPV_PARTNER|
|metrics|METRIC_REVENUE_ECPAPC_ADVERTISER|
|metrics|METRIC_REVENUE_ECPAPC_USD|
|metrics|METRIC_REVENUE_ECPAPC_PARTNER|
|metrics|METRIC_MEDIA_COST_ECPM_ADVERTISER|
|metrics|METRIC_MEDIA_COST_ECPM_USD|
|metrics|METRIC_MEDIA_COST_ECPM_PARTNER|
|metrics|METRIC_MEDIA_COST_ECPC_ADVERTISER|
|metrics|METRIC_MEDIA_COST_ECPC_USD|
|metrics|METRIC_MEDIA_COST_ECPC_PARTNER|
|metrics|METRIC_MEDIA_COST_ECPA_ADVERTISER|
|metrics|METRIC_MEDIA_COST_ECPA_USD|
|metrics|METRIC_MEDIA_COST_ECPA_PARTNER|
|metrics|METRIC_MEDIA_COST_ECPAPV_ADVERTISER|
|metrics|METRIC_MEDIA_COST_ECPAPV_USD|
|metrics|METRIC_MEDIA_COST_ECPAPV_PARTNER|
|metrics|METRIC_MEDIA_COST_ECPAPC_ADVERTISER|
|metrics|METRIC_MEDIA_COST_ECPAPC_USD|
|metrics|METRIC_MEDIA_COST_ECPAPC_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPM_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPM_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPM_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPC_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPC_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPC_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPA_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPA_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPA_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPAPV_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPAPV_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPAPV_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPAPC_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPAPC_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPAPC_PARTNER|
|metrics|METRIC_RICH_MEDIA_VIDEO_PLAYS|
|metrics|METRIC_RICH_MEDIA_VIDEO_COMPLETIONS|
|metrics|METRIC_RICH_MEDIA_VIDEO_PAUSES|
|metrics|METRIC_RICH_MEDIA_VIDEO_MUTES|
|metrics|METRIC_RICH_MEDIA_VIDEO_MIDPOINTS|
|metrics|METRIC_RICH_MEDIA_VIDEO_FULL_SCREENS|
|metrics|METRIC_RICH_MEDIA_VIDEO_FIRST_QUARTILE_COMPLETES|
|metrics|METRIC_RICH_MEDIA_VIDEO_THIRD_QUARTILE_COMPLETES|
|metrics|METRIC_CLICK_TO_POST_CLICK_CONVERSION_RATE|
|metrics|METRIC_IMPRESSIONS_TO_CONVERSION_RATE|
|metrics|METRIC_CONVERSIONS_PER_MILLE|
|metrics|METRIC_CTR|
|metrics|METRIC_BID_REQUESTS|
|metrics|METRIC_UNIQUE_VISITORS_COOKIES|
|metrics|METRIC_REVENUE_ECPCV_ADVERTISER|
|metrics|METRIC_REVENUE_ECPCV_USD|
|metrics|METRIC_REVENUE_ECPCV_PARTNER|
|metrics|METRIC_MEDIA_COST_ECPCV_ADVERTISER|
|metrics|METRIC_MEDIA_COST_ECPCV_USD|
|metrics|METRIC_MEDIA_COST_ECPCV_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPCV_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPCV_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_ECPCV_PARTNER|
|metrics|METRIC_RICH_MEDIA_VIDEO_SKIPS|
|metrics|METRIC_FEE2_ADVERTISER|
|metrics|METRIC_FEE2_USD|
|metrics|METRIC_FEE2_PARTNER|
|metrics|METRIC_FEE3_ADVERTISER|
|metrics|METRIC_FEE3_USD|
|metrics|METRIC_FEE3_PARTNER|
|metrics|METRIC_FEE4_ADVERTISER|
|metrics|METRIC_FEE4_USD|
|metrics|METRIC_FEE4_PARTNER|
|metrics|METRIC_FEE5_ADVERTISER|
|metrics|METRIC_FEE5_USD|
|metrics|METRIC_FEE5_PARTNER|
|metrics|METRIC_FEE6_ADVERTISER|
|metrics|METRIC_FEE6_USD|
|metrics|METRIC_FEE6_PARTNER|
|metrics|METRIC_FEE7_ADVERTISER|
|metrics|METRIC_FEE7_USD|
|metrics|METRIC_FEE7_PARTNER|
|metrics|METRIC_FEE8_ADVERTISER|
|metrics|METRIC_FEE8_USD|
|metrics|METRIC_FEE8_PARTNER|
|metrics|METRIC_FEE9_ADVERTISER|
|metrics|METRIC_FEE9_USD|
|metrics|METRIC_FEE9_PARTNER|
|metrics|METRIC_FEE10_ADVERTISER|
|metrics|METRIC_FEE10_USD|
|metrics|METRIC_FEE10_PARTNER|
|metrics|METRIC_FEE11_ADVERTISER|
|metrics|METRIC_FEE11_USD|
|metrics|METRIC_FEE11_PARTNER|
|metrics|METRIC_FEE12_ADVERTISER|
|metrics|METRIC_FEE12_USD|
|metrics|METRIC_FEE12_PARTNER|
|metrics|METRIC_FEE13_ADVERTISER|
|metrics|METRIC_FEE13_USD|
|metrics|METRIC_FEE13_PARTNER|
|metrics|METRIC_FEE14_ADVERTISER|
|metrics|METRIC_FEE14_USD|
|metrics|METRIC_FEE14_PARTNER|
|metrics|METRIC_FEE15_ADVERTISER|
|metrics|METRIC_FEE15_USD|
|metrics|METRIC_FEE15_PARTNER|
|metrics|METRIC_CPM_FEE3_ADVERTISER|
|metrics|METRIC_CPM_FEE3_USD|
|metrics|METRIC_CPM_FEE3_PARTNER|
|metrics|METRIC_CPM_FEE4_ADVERTISER|
|metrics|METRIC_CPM_FEE4_USD|
|metrics|METRIC_CPM_FEE4_PARTNER|
|metrics|METRIC_CPM_FEE5_ADVERTISER|
|metrics|METRIC_CPM_FEE5_USD|
|metrics|METRIC_CPM_FEE5_PARTNER|
|metrics|METRIC_MEDIA_FEE3_ADVERTISER|
|metrics|METRIC_MEDIA_FEE3_USD|
|metrics|METRIC_MEDIA_FEE3_PARTNER|
|metrics|METRIC_MEDIA_FEE4_ADVERTISER|
|metrics|METRIC_MEDIA_FEE4_USD|
|metrics|METRIC_MEDIA_FEE4_PARTNER|
|metrics|METRIC_MEDIA_FEE5_ADVERTISER|
|metrics|METRIC_MEDIA_FEE5_USD|
|metrics|METRIC_MEDIA_FEE5_PARTNER|
|metrics|METRIC_VIDEO_COMPANION_IMPRESSIONS|
|metrics|METRIC_VIDEO_COMPANION_CLICKS|
|metrics|METRIC_FEE16_ADVERTISER|
|metrics|METRIC_FEE16_USD|
|metrics|METRIC_FEE16_PARTNER|
|metrics|METRIC_FEE17_ADVERTISER|
|metrics|METRIC_FEE17_USD|
|metrics|METRIC_FEE17_PARTNER|
|metrics|METRIC_FEE18_ADVERTISER|
|metrics|METRIC_FEE18_USD|
|metrics|METRIC_FEE18_PARTNER|
|metrics|METRIC_TRUEVIEW_VIEWS|
|metrics|METRIC_TRUEVIEW_UNIQUE_VIEWERS|
|metrics|METRIC_TRUEVIEW_EARNED_VIEWS|
|metrics|METRIC_TRUEVIEW_EARNED_SUBSCRIBERS|
|metrics|METRIC_TRUEVIEW_EARNED_PLAYLIST_ADDITIONS|
|metrics|METRIC_TRUEVIEW_EARNED_LIKES|
|metrics|METRIC_TRUEVIEW_EARNED_SHARES|
|metrics|METRIC_TRUEVIEW_IMPRESSION_SHARE|
|metrics|METRIC_TRUEVIEW_LOST_IS_BUDGET|
|metrics|METRIC_TRUEVIEW_LOST_IS_RANK|
|metrics|METRIC_TRUEVIEW_VIEW_THROUGH_CONVERSION|
|metrics|METRIC_TRUEVIEW_CONVERSION_MANY_PER_VIEW|
|metrics|METRIC_TRUEVIEW_VIEW_RATE|
|metrics|METRIC_TRUEVIEW_CONVERSION_RATE_ONE_PER_VIEW|
|metrics|METRIC_TRUEVIEW_CPV_ADVERTISER|
|metrics|METRIC_TRUEVIEW_CPV_USD|
|metrics|METRIC_TRUEVIEW_CPV_PARTNER|
|metrics|METRIC_FEE19_ADVERTISER|
|metrics|METRIC_FEE19_USD|
|metrics|METRIC_FEE19_PARTNER|
|metrics|METRIC_TEA_TRUEVIEW_IMPRESSIONS|
|metrics|METRIC_TEA_TRUEVIEW_UNIQUE_COOKIES|
|metrics|METRIC_FEE20_ADVERTISER|
|metrics|METRIC_FEE20_USD|
|metrics|METRIC_FEE20_PARTNER|
|metrics|METRIC_FEE21_ADVERTISER|
|metrics|METRIC_FEE21_USD|
|metrics|METRIC_FEE21_PARTNER|
|metrics|METRIC_FEE22_ADVERTISER|
|metrics|METRIC_FEE22_USD|
|metrics|METRIC_FEE22_PARTNER|
|metrics|METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_ADVERTISER|
|metrics|METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_USD|
|metrics|METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_PARTNER|
|metrics|METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_ADVERTISER|
|metrics|METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_USD|
|metrics|METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_PARTNER|
|metrics|METRIC_PROFIT_VIEWABLE_ECPM_ADVERTISER|
|metrics|METRIC_PROFIT_VIEWABLE_ECPM_USD|
|metrics|METRIC_PROFIT_VIEWABLE_ECPM_PARTNER|
|metrics|METRIC_REVENUE_VIEWABLE_ECPM_ADVERTISER|
|metrics|METRIC_REVENUE_VIEWABLE_ECPM_USD|
|metrics|METRIC_REVENUE_VIEWABLE_ECPM_PARTNER|
|metrics|METRIC_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER|
|metrics|METRIC_MEDIA_COST_VIEWABLE_ECPM_USD|
|metrics|METRIC_MEDIA_COST_VIEWABLE_ECPM_PARTNER|
|metrics|METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER|
|metrics|METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_USD|
|metrics|METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_PARTNER|
|metrics|METRIC_TRUEVIEW_ENGAGEMENTS|
|metrics|METRIC_TRUEVIEW_ENGAGEMENT_RATE|
|metrics|METRIC_TRUEVIEW_AVERAGE_CPE_ADVERTISER|
|metrics|METRIC_TRUEVIEW_AVERAGE_CPE_USD|
|metrics|METRIC_TRUEVIEW_AVERAGE_CPE_PARTNER|
|metrics|METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_PCT_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_PCT_VIEWABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME|
|metrics|METRIC_ACTIVE_VIEW_UNMEASURABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_UNVIEWABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_DISTRIBUTION_UNMEASURABLE|
|metrics|METRIC_ACTIVE_VIEW_DISTRIBUTION_UNVIEWABLE|
|metrics|METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_VIEWABLE_FOR_TIME_THRESHOLD|
|metrics|METRIC_ACTIVE_VIEW_VIEWABLE_FOR_TIME_THRESHOLD|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_AT_START|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_FIRST_QUAR|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_THIRD_QUAR|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_ON_COMPLETE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_AT_START|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_FIRST_QUAR|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_SECOND_QUAR|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_THIRD_QUAR|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_ON_COMPLETE|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_VISIBLE_ON_COMPLETE_IMPRESSIONS|
|metrics|METRIC_VIEWABLE_BID_REQUESTS|
|metrics|METRIC_COOKIE_REACH_IMPRESSION_REACH|
|metrics|METRIC_COOKIE_REACH_AVERAGE_IMPRESSION_FREQUENCY|
|metrics|METRIC_DBM_ENGAGEMENT_RATE|
|metrics|METRIC_RICH_MEDIA_SCROLLS|
|metrics|METRIC_CM_POST_VIEW_REVENUE|
|metrics|METRIC_CM_POST_CLICK_REVENUE|
|metrics|METRIC_FLOODLIGHT_IMPRESSIONS|
|metrics|METRIC_BILLABLE_IMPRESSIONS|
|metrics|METRIC_NIELSEN_AVERAGE_FREQUENCY|
|metrics|METRIC_NIELSEN_IMPRESSIONS|
|metrics|METRIC_NIELSEN_UNIQUE_AUDIENCE|
|metrics|METRIC_NIELSEN_GRP|
|metrics|METRIC_NIELSEN_IMPRESSION_INDEX|
|metrics|METRIC_NIELSEN_IMPRESSIONS_SHARE|
|metrics|METRIC_NIELSEN_POPULATION|
|metrics|METRIC_NIELSEN_POPULATION_REACH|
|metrics|METRIC_NIELSEN_POPULATION_SHARE|
|metrics|METRIC_NIELSEN_REACH_INDEX|
|metrics|METRIC_NIELSEN_REACH_SHARE|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_RATE|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_RATE|
|metrics|METRIC_ACTIVE_VIEW_CUSTOM_METRIC_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_CUSTOM_METRIC_VIEWABLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_CUSTOM_METRIC_VIEWABLE_RATE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_IMPRESSIONS|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_FULLY_ON_SCREEN_2_SEC|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_FULL_SCREEN|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_IN_BACKGROUND|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_AD_PLAYED|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_COMPLETED_IMPRESSIONS_AUDIBLE_AND_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_COMPLETED_IMPRESSIONS_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_FIRST_QUARTILE_IMPRESSIONS_AUDIBLE_AND_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_FIRST_QUARTILE_IMPRESSIONS_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_MIDPOINT_IMPRESSIONS_AUDIBLE_AND_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_MIDPOINT_IMPRESSIONS_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_THIRD_QUARTILE_IMPRESSIONS_AUDIBLE_AND_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_OF_THIRD_QUARTILE_IMPRESSIONS_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_AUDIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_AUDIBLE_AND_VISIBLE|
|metrics|METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_VISIBLE|
|metrics|METRIC_ADAPTED_AUDIENCE_FREQUENCY|
|metrics|METRIC_ADLINGO_FEE_ADVERTISER_CURRENCY|
|metrics|METRIC_AUDIO_CLIENT_COST_ECPCL_ADVERTISER_CURRENCY|
|metrics|METRIC_AUDIO_MEDIA_COST_ECPCL_ADVERTISER_CURRENCY|
|metrics|METRIC_AUDIO_MUTES_AUDIO|
|metrics|METRIC_AUDIO_REVENUE_ECPCL_ADVERTISER_CURRENCY|
|metrics|METRIC_AUDIO_UNMUTES_AUDIO|
|metrics|METRIC_AUDIO_UNMUTES_VIDEO|
|metrics|METRIC_AVERAGE_DISPLAY_TIME|
|metrics|METRIC_AVERAGE_IMPRESSION_FREQUENCY_PER_USER|
|metrics|METRIC_AVERAGE_INTERACTION_TIME|
|metrics|METRIC_AVERAGE_WATCH_TIME_PER_IMPRESSION|
|metrics|METRIC_BEGIN_TO_RENDER_ELIGIBLE_IMPRESSIONS|
|metrics|METRIC_BEGIN_TO_RENDER_IMPRESSIONS|
|metrics|METRIC_BENCHMARK_FREQUENCY|
|metrics|METRIC_BRAND_LIFT_ABSOLUTE_BRAND_LIFT|
|metrics|METRIC_BRAND_LIFT_ALL_SURVEY_RESPONSES|
|metrics|METRIC_BRAND_LIFT_BASELINE_POSITIVE_RESPONSE_RATE|
|metrics|METRIC_BRAND_LIFT_BASELINE_SURVEY_RESPONSES|
|metrics|METRIC_BRAND_LIFT_COST_PER_LIFTED_USER|
|metrics|METRIC_BRAND_LIFT_EXPOSED_SURVEY_RESPONSES|
|metrics|METRIC_BRAND_LIFT_HEADROOM_BRAND_LIFT|
|metrics|METRIC_BRAND_LIFT_RELATIVE_BRAND_LIFT|
|metrics|METRIC_BRAND_LIFT_USERS|
|metrics|METRIC_CARD_CLICKS|
|metrics|METRIC_CLIENT_COST_ADVERTISER_CURRENCY|
|metrics|METRIC_CLIENT_COST_ECPA_ADVERTISER_CURRENCY|
|metrics|METRIC_CLIENT_COST_ECPA_PC_ADVERTISER_CURRENCY|
|metrics|METRIC_CLIENT_COST_ECPA_PV_ADVERTISER_CURRENCY|
|metrics|METRIC_CLIENT_COST_ECPC_ADVERTISER_CURRENCY|
|metrics|METRIC_CLIENT_COST_ECPM_ADVERTISER_CURRENCY|
|metrics|METRIC_CLIENT_COST_VIEWABLE_ECPM_ADVERTISER_CURRENCY|
|metrics|METRIC_CM_POST_CLICK_REVENUE_CROSS_ENVIRONMENT|
|metrics|METRIC_CM_POST_VIEW_REVENUE_CROSS_ENVIRONMENT|
|metrics|METRIC_COMPANION_CLICKS_AUDIO|
|metrics|METRIC_COMPANION_IMPRESSIONS_AUDIO|
|metrics|METRIC_COMPLETE_LISTENS_AUDIO|
|metrics|METRIC_COMPLETION_RATE_AUDIO|
|metrics|METRIC_COUNTERS|
|metrics|METRIC_CUSTOM_FEE_1_ADVERTISER_CURRENCY|
|metrics|METRIC_CUSTOM_FEE_2_ADVERTISER_CURRENCY|
|metrics|METRIC_CUSTOM_FEE_3_ADVERTISER_CURRENCY|
|metrics|METRIC_CUSTOM_FEE_4_ADVERTISER_CURRENCY|
|metrics|METRIC_CUSTOM_FEE_5_ADVERTISER_CURRENCY|
|metrics|METRIC_CUSTOM_VALUE_PER_1000_IMPRESSIONS|
|metrics|METRIC_ENGAGEMENTS|
|metrics|METRIC_ESTIMATED_CPM_FOR_IMPRESSIONS_WITH_CUSTOM_VALUE_ADVERTISER_CURRENCY|
|metrics|METRIC_ESTIMATED_TOTAL_COST_FOR_IMPRESSIONS_WITH_CUSTOM_VALUE_ADVERTISER_CURRENCY|
|metrics|METRIC_EXITS|
|metrics|METRIC_EXPANSIONS|
|metrics|METRIC_FIRST_QUARTILE_AUDIO|
|metrics|METRIC_GENERAL_INVALID_TRAFFIC_GIVT_IMPRESSIONS|
|metrics|METRIC_GENERAL_INVALID_TRAFFIC_GIVT_TRACKED_ADS|
|metrics|METRIC_GIVT_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS|
|metrics|METRIC_GIVT_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_GIVT_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS|
|metrics|METRIC_GIVT_BEGIN_TO_RENDER_IMPRESSIONS|
|metrics|METRIC_GIVT_CLICKS|
|metrics|METRIC_GMAIL_CONVERSIONS|
|metrics|METRIC_GMAIL_POST_CLICK_CONVERSIONS|
|metrics|METRIC_GMAIL_POST_VIEW_CONVERSIONS|
|metrics|METRIC_GMAIL_POTENTIAL_VIEWS|
|metrics|METRIC_IMPRESSIONS_WITH_CUSTOM_VALUE|
|metrics|METRIC_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE|
|metrics|METRIC_IMPRESSION_CUSTOM_VALUE_COST|
|metrics|METRIC_INTERACTIVE_IMPRESSIONS|
|metrics|METRIC_INVALID_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS|
|metrics|METRIC_INVALID_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_INVALID_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS|
|metrics|METRIC_INVALID_BEGIN_TO_RENDER_IMPRESSIONS|
|metrics|METRIC_INVALID_CLICKS|
|metrics|METRIC_INVALID_IMPRESSIONS|
|metrics|METRIC_INVALID_TRACKED_ADS|
|metrics|METRIC_MIDPOINT_AUDIO|
|metrics|METRIC_ORIGINAL_AUDIENCE_FREQUENCY|
|metrics|METRIC_PAUSES_AUDIO|
|metrics|METRIC_PERCENT_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE|
|metrics|METRIC_PLATFORM_FEE_RATE|
|metrics|METRIC_POST_CLICK_CONVERSIONS_CROSS_ENVIRONMENT|
|metrics|METRIC_POST_VIEW_CONVERSIONS_CROSS_ENVIRONMENT|
|metrics|METRIC_POTENTIAL_IMPRESSIONS|
|metrics|METRIC_POTENTIAL_VIEWS|
|metrics|METRIC_PREMIUM_FEE_ADVERTISER_CURRENCY|
|metrics|METRIC_PROGRAMMATIC_GUARANTEED_IMPRESSIONS_PASSED_DUE_TO_FREQUENCY|
|metrics|METRIC_PROGRAMMATIC_GUARANTEED_SAVINGS_RE_INVESTED_DUE_TO_FREQUENCY_ADVERTISER_CURRENCY|
|metrics|METRIC_REFUND_BILLABLE_COST_ADVERTISER_CURRENCY|
|metrics|METRIC_REFUND_MEDIA_COST_ADVERTISER_CURRENCY|
|metrics|METRIC_REFUND_PLATFORM_FEE_ADVERTISER_CURRENCY|
|metrics|METRIC_RICH_MEDIA_ENGAGEMENTS|
|metrics|METRIC_STARTS_AUDIO|
|metrics|METRIC_STOPS_AUDIO|
|metrics|METRIC_STORE_VISIT_CONVERSIONS|
|metrics|METRIC_THIRD_QUARTILE_AUDIO|
|metrics|METRIC_TIMERS|
|metrics|METRIC_TOTAL_AUDIO_MEDIA_COST_ECPCL_ADVERTISER_CURRENCY|
|metrics|METRIC_TOTAL_CONVERSIONS_CROSS_ENVIRONMENT|
|metrics|METRIC_TOTAL_DISPLAY_TIME|
|metrics|METRIC_TOTAL_IMPRESSION_CUSTOM_VALUE|
|metrics|METRIC_TOTAL_INTERACTION_TIME|
|metrics|METRIC_TOTAL_USERS|
|metrics|METRIC_TRACKED_ADS|
|metrics|METRIC_TRUEVIEW_GENERAL_INVALID_TRAFFIC_GIVT_VIEWS|
|metrics|METRIC_TRUEVIEW_INVALID_VIEWS|
|metrics|METRIC_UNIQUE_COOKIES_WITH_IMPRESSIONS|
|metrics|METRIC_UNIQUE_REACH_AVERAGE_IMPRESSION_FREQUENCY|
|metrics|METRIC_UNIQUE_REACH_CLICK_REACH|
|metrics|METRIC_UNIQUE_REACH_IMPRESSION_REACH|
|metrics|METRIC_UNIQUE_REACH_TOTAL_REACH|
|metrics|METRIC_VERIFIABLE_IMPRESSIONS|
|metrics|METRIC_VIDEO_CLIENT_COST_ECPCV_ADVERTISER_CURRENCY|
|metrics|METRIC_WATCH_TIME|
|metrics|METRIC_LAST_TOUCH_TOTAL_CONVERSIONS|
|metrics|METRIC_LAST_TOUCH_CLICK_THROUGH_CONVERSIONS|
|metrics|METRIC_LAST_TOUCH_VIEW_THROUGH_CONVERSIONS|
|metrics|METRIC_TOTAL_PATHS|
|metrics|METRIC_TOTAL_EXPOSURES|
|metrics|METRIC_PATH_CONVERSION_RATE|
|metrics|METRIC_CONVERTING_PATHS|
|metrics|METRIC_ACTIVITY_REVENUE|
|metrics|METRIC_PERCENT_INVALID_IMPRESSIONS_PREBID|
|metrics|METRIC_GRP_CORRECTED_IMPRESSIONS|
|metrics|METRIC_DEMO_CORRECTED_CLICKS|
|metrics|METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_BY_DEMO|
|metrics|METRIC_VIRTUAL_PEOPLE_CLICK_REACH_BY_DEMO|
|metrics|METRIC_VIRTUAL_PEOPLE_AVERAGE_IMPRESSION_FREQUENCY_BY_DEMO|
|metrics|METRIC_DEMO_COMPOSITION_IMPRESSION|
|metrics|METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_SHARE_PERCENT|
|metrics|METRIC_DEMO_POPULATION|
|metrics|METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_PERCENT|
|metrics|METRIC_TARGET_RATING_POINTS|
|metrics|METRIC_PROVISIONAL_IMPRESSIONS|
|metrics|METRIC_VENDOR_BLOCKED_ADS|
|metrics|METRIC_GRP_CORRECTED_VIEWABLE_IMPRESSIONS|
|metrics|METRIC_GRP_CORRECTED_VIEWABLE_IMPRESSIONS_SHARE_PERCENT|
|metrics|METRIC_VIEWABLE_GROSS_RATING_POINTS|
|metrics|METRIC_VIRTUAL_PEOPLE_AVERAGE_VIEWABLE_IMPRESSION_FREQUENCY_BY_DEMO|
|metrics|METRIC_VIRTUAL_PEOPLE_VIEWABLE_IMPRESSION_REACH_BY_DEMO|
|metrics|METRIC_VIRTUAL_PEOPLE_VIEWABLE_IMPRESSION_REACH_PERCENT|
|metrics|METRIC_VIRTUAL_PEOPLE_VIEWABLE_IMPRESSION_REACH_SHARE_PERCENT|
|metrics|METRIC_ENGAGEMENT_RATE|
|metrics|METRIC_CM360_POST_VIEW_REVENUE|
|metrics|METRIC_CM360_POST_CLICK_REVENUE|
|metrics|METRIC_CM360_POST_CLICK_REVENUE_CROSS_ENVIRONMENT|
|metrics|METRIC_CM360_POST_VIEW_REVENUE_CROSS_ENVIRONMENT|
|metrics|METRIC_PERCENTAGE_FROM_CURRENT_IO_GOAL|
|metrics|METRIC_DUPLICATE_FLOODLIGHT_IMPRESSIONS|
|metrics|METRIC_COOKIE_CONSENTED_FLOODLIGHT_IMPRESSIONS|
|metrics|METRIC_COOKIE_UNCONSENTED_FLOODLIGHT_IMPRESSIONS|
|metrics|METRIC_TRACKING_UNCONSENTED_CLICKS|
|metrics|METRIC_IMPRESSION_LOSS_TARGETED_IMPRESSIONS|
|metrics|METRIC_LINEITEM_BID_RESPONSE_COUNT|
|metrics|METRIC_WIN_LOSS_RATE|
|metrics|METRIC_WIN_LOSS_DEAL_AVAILABLE_REQUESTS|
|metrics|METRIC_WIN_LOSS_LINEITEM_AVAILABLE_REQUESTS|
|metrics|METRIC_WIN_LOSS_DEAL_TARGETED_IMPRESSIONS|
|metrics|METRIC_WIN_LOSS_LINEITEM_TARGETED_IMPRESSIONS|
|metrics|METRIC_VERIFICATION_VIDEO_PLAYER_SIZE_MEASURABLE_IMPRESSIONS|
|metrics|METRIC_TRUEVIEW_ALL_AD_SEQUENCE_IMPRESSIONS|
|metrics|METRIC_IMPRESSIONS_COVIEWED|
|metrics|METRIC_UNIQUE_REACH_IMPRESSION_REACH_COVIEWED|
|metrics|METRIC_UNIQUE_REACH_TOTAL_REACH_COVIEWED|
|metrics|METRIC_UNIQUE_REACH_AVERAGE_IMPRESSION_FREQUENCY_COVIEWED|
|metrics|METRIC_GRP_CORRECTED_IMPRESSIONS_COVIEWED|
|metrics|METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_BY_DEMO_COVIEWED|
|metrics|METRIC_VIRTUAL_PEOPLE_AVERAGE_IMPRESSION_FREQUENCY_BY_DEMO_COVIEWED|
|metrics|METRIC_TARGET_RATING_POINTS_COVIEWED|
|metrics|METRIC_DEMO_COMPOSITION_IMPRESSION_COVIEWED|
|metrics|METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_SHARE_PERCENT_COVIEWED|
|metrics|METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_PERCENT_COVIEWED|
|type|TYPE_GENERAL|
|type|TYPE_AUDIENCE_PERFORMANCE|
|type|TYPE_INVENTORY_AVAILABILITY|
|type|TYPE_KEYWORD|
|type|TYPE_PIXEL_LOAD|
|type|TYPE_AUDIENCE_COMPOSITION|
|type|TYPE_CROSS_PARTNER|
|type|TYPE_PAGE_CATEGORY|
|type|TYPE_THIRD_PARTY_DATA_PROVIDER|
|type|TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER|
|type|TYPE_CLIENT_SAFE|
|type|TYPE_ORDER_ID|
|type|TYPE_FEE|
|type|TYPE_CROSS_FEE|
|type|TYPE_ACTIVE_GRP|
|type|TYPE_YOUTUBE_VERTICAL|
|type|TYPE_COMSCORE_VCE|
|type|TYPE_TRUEVIEW|
|type|TYPE_NIELSEN_AUDIENCE_PROFILE|
|type|TYPE_NIELSEN_DAILY_REACH_BUILD|
|type|TYPE_NIELSEN_SITE|
|type|TYPE_REACH_AND_FREQUENCY|
|type|TYPE_ESTIMATED_CONVERSION|
|type|TYPE_VERIFICATION|
|type|TYPE_TRUEVIEW_IAR|
|type|TYPE_NIELSEN_ONLINE_GLOBAL_MARKET|
|type|TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE|
|type|TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD|
|type|TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET|
|type|TYPE_NOT_SUPPORTED|
|type|TYPE_REACH_AUDIENCE|
|type|TYPE_LINEAR_TV_SEARCH_LIFT|
|type|TYPE_PATH|
|type|TYPE_PATH_ATTRIBUTION|

<h2 id="tocS_PathFilter">PathFilter</h2>
<!-- backwards compatibility -->
<a id="schemapathfilter"></a>
<a id="schema_PathFilter"></a>
<a id="tocSpathfilter"></a>
<a id="tocspathfilter"></a>

```json
{
  "eventFilters": [
    {
      "dimensionFilter": {
        "filter": "FILTER_UNKNOWN",
        "match": "UNKNOWN",
        "values": [
          "string"
        ]
      }
    }
  ],
  "pathMatchPosition": "ANY"
}
```

Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventFilters|[[EventFilter](#schemaeventfilter)]|false|none|Filter on an event to be applied to some part of the path.|
|pathMatchPosition|string|false|none|Indicates the position of the path the filter should match to (first, last, or any event in path).|

#### Enumerated Values

|Property|Value|
|---|---|
|pathMatchPosition|ANY|
|pathMatchPosition|FIRST|
|pathMatchPosition|LAST|

<h2 id="tocS_PathQueryOptions">PathQueryOptions</h2>
<!-- backwards compatibility -->
<a id="schemapathqueryoptions"></a>
<a id="schema_PathQueryOptions"></a>
<a id="tocSpathqueryoptions"></a>
<a id="tocspathqueryoptions"></a>

```json
{
  "channelGrouping": {
    "fallbackName": "string",
    "name": "string",
    "rules": [
      {
        "disjunctiveMatchStatements": [
          {
            "eventFilters": [
              {
                "dimensionFilter": {
                  "filter": "FILTER_UNKNOWN",
                  "match": "UNKNOWN",
                  "values": [
                    "string"
                  ]
                }
              }
            ]
          }
        ],
        "name": "string"
      }
    ]
  },
  "pathFilters": [
    {
      "eventFilters": [
        {
          "dimensionFilter": {
            "filter": "FILTER_UNKNOWN",
            "match": "UNKNOWN",
            "values": [
              "string"
            ]
          }
        }
      ],
      "pathMatchPosition": "ANY"
    }
  ]
}
```

Path Query Options for Report Options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelGrouping|[ChannelGrouping](#schemachannelgrouping)|false|none|Custom Channel Groupings.|
|pathFilters|[[PathFilter](#schemapathfilter)]|false|none|Path Filters. There is a limit of 100 path filters that can be set per report.|

<h2 id="tocS_PathQueryOptionsFilter">PathQueryOptionsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapathqueryoptionsfilter"></a>
<a id="schema_PathQueryOptionsFilter"></a>
<a id="tocSpathqueryoptionsfilter"></a>
<a id="tocspathqueryoptionsfilter"></a>

```json
{
  "filter": "FILTER_UNKNOWN",
  "match": "UNKNOWN",
  "values": [
    "string"
  ]
}
```

Dimension Filter on path events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Dimension the filter is applied to.|
|match|string|false|none|Indicates how the filter should be matched to the value.|
|values|[string]|false|none|Value to filter on.|

#### Enumerated Values

|Property|Value|
|---|---|
|filter|FILTER_UNKNOWN|
|filter|FILTER_DATE|
|filter|FILTER_DAY_OF_WEEK|
|filter|FILTER_WEEK|
|filter|FILTER_MONTH|
|filter|FILTER_YEAR|
|filter|FILTER_TIME_OF_DAY|
|filter|FILTER_CONVERSION_DELAY|
|filter|FILTER_CREATIVE_ID|
|filter|FILTER_CREATIVE_SIZE|
|filter|FILTER_CREATIVE_TYPE|
|filter|FILTER_EXCHANGE_ID|
|filter|FILTER_AD_POSITION|
|filter|FILTER_PUBLIC_INVENTORY|
|filter|FILTER_INVENTORY_SOURCE|
|filter|FILTER_CITY|
|filter|FILTER_REGION|
|filter|FILTER_DMA|
|filter|FILTER_COUNTRY|
|filter|FILTER_SITE_ID|
|filter|FILTER_CHANNEL_ID|
|filter|FILTER_PARTNER|
|filter|FILTER_ADVERTISER|
|filter|FILTER_INSERTION_ORDER|
|filter|FILTER_LINE_ITEM|
|filter|FILTER_PARTNER_CURRENCY|
|filter|FILTER_ADVERTISER_CURRENCY|
|filter|FILTER_ADVERTISER_TIMEZONE|
|filter|FILTER_LINE_ITEM_TYPE|
|filter|FILTER_USER_LIST|
|filter|FILTER_USER_LIST_FIRST_PARTY|
|filter|FILTER_USER_LIST_THIRD_PARTY|
|filter|FILTER_TARGETED_USER_LIST|
|filter|FILTER_DATA_PROVIDER|
|filter|FILTER_ORDER_ID|
|filter|FILTER_VIDEO_PLAYER_SIZE|
|filter|FILTER_VIDEO_DURATION_SECONDS|
|filter|FILTER_KEYWORD|
|filter|FILTER_PAGE_CATEGORY|
|filter|FILTER_CAMPAIGN_DAILY_FREQUENCY|
|filter|FILTER_LINE_ITEM_DAILY_FREQUENCY|
|filter|FILTER_LINE_ITEM_LIFETIME_FREQUENCY|
|filter|FILTER_OS|
|filter|FILTER_BROWSER|
|filter|FILTER_CARRIER|
|filter|FILTER_SITE_LANGUAGE|
|filter|FILTER_INVENTORY_FORMAT|
|filter|FILTER_ZIP_CODE|
|filter|FILTER_VIDEO_RATING_TIER|
|filter|FILTER_VIDEO_FORMAT_SUPPORT|
|filter|FILTER_VIDEO_SKIPPABLE_SUPPORT|
|filter|FILTER_VIDEO_CREATIVE_DURATION|
|filter|FILTER_PAGE_LAYOUT|
|filter|FILTER_VIDEO_AD_POSITION_IN_STREAM|
|filter|FILTER_AGE|
|filter|FILTER_GENDER|
|filter|FILTER_QUARTER|
|filter|FILTER_TRUEVIEW_CONVERSION_TYPE|
|filter|FILTER_MOBILE_GEO|
|filter|FILTER_MRAID_SUPPORT|
|filter|FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY|
|filter|FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE|
|filter|FILTER_NIELSEN_COUNTRY_CODE|
|filter|FILTER_NIELSEN_DEVICE_ID|
|filter|FILTER_NIELSEN_GENDER|
|filter|FILTER_NIELSEN_AGE|
|filter|FILTER_INVENTORY_SOURCE_TYPE|
|filter|FILTER_CREATIVE_WIDTH|
|filter|FILTER_CREATIVE_HEIGHT|
|filter|FILTER_DFP_ORDER_ID|
|filter|FILTER_TRUEVIEW_AGE|
|filter|FILTER_TRUEVIEW_GENDER|
|filter|FILTER_TRUEVIEW_PARENTAL_STATUS|
|filter|FILTER_TRUEVIEW_REMARKETING_LIST|
|filter|FILTER_TRUEVIEW_INTEREST|
|filter|FILTER_TRUEVIEW_AD_GROUP_ID|
|filter|FILTER_TRUEVIEW_AD_GROUP_AD_ID|
|filter|FILTER_TRUEVIEW_IAR_LANGUAGE|
|filter|FILTER_TRUEVIEW_IAR_GENDER|
|filter|FILTER_TRUEVIEW_IAR_AGE|
|filter|FILTER_TRUEVIEW_IAR_CATEGORY|
|filter|FILTER_TRUEVIEW_IAR_COUNTRY|
|filter|FILTER_TRUEVIEW_IAR_CITY|
|filter|FILTER_TRUEVIEW_IAR_REGION|
|filter|FILTER_TRUEVIEW_IAR_ZIPCODE|
|filter|FILTER_TRUEVIEW_IAR_REMARKETING_LIST|
|filter|FILTER_TRUEVIEW_IAR_INTEREST|
|filter|FILTER_TRUEVIEW_IAR_PARENTAL_STATUS|
|filter|FILTER_TRUEVIEW_IAR_TIME_OF_DAY|
|filter|FILTER_TRUEVIEW_CUSTOM_AFFINITY|
|filter|FILTER_TRUEVIEW_CATEGORY|
|filter|FILTER_TRUEVIEW_KEYWORD|
|filter|FILTER_TRUEVIEW_PLACEMENT|
|filter|FILTER_TRUEVIEW_URL|
|filter|FILTER_TRUEVIEW_COUNTRY|
|filter|FILTER_TRUEVIEW_REGION|
|filter|FILTER_TRUEVIEW_CITY|
|filter|FILTER_TRUEVIEW_DMA|
|filter|FILTER_TRUEVIEW_ZIPCODE|
|filter|FILTER_NOT_SUPPORTED|
|filter|FILTER_MEDIA_PLAN|
|filter|FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL|
|filter|FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO|
|filter|FILTER_SKIPPABLE_SUPPORT|
|filter|FILTER_COMPANION_CREATIVE_ID|
|filter|FILTER_BUDGET_SEGMENT_DESCRIPTION|
|filter|FILTER_FLOODLIGHT_ACTIVITY_ID|
|filter|FILTER_DEVICE_MODEL|
|filter|FILTER_DEVICE_MAKE|
|filter|FILTER_DEVICE_TYPE|
|filter|FILTER_CREATIVE_ATTRIBUTE|
|filter|FILTER_INVENTORY_COMMITMENT_TYPE|
|filter|FILTER_INVENTORY_RATE_TYPE|
|filter|FILTER_INVENTORY_DELIVERY_METHOD|
|filter|FILTER_INVENTORY_SOURCE_EXTERNAL_ID|
|filter|FILTER_AUTHORIZED_SELLER_STATE|
|filter|FILTER_VIDEO_DURATION_SECONDS_RANGE|
|filter|FILTER_PARTNER_NAME|
|filter|FILTER_PARTNER_STATUS|
|filter|FILTER_ADVERTISER_NAME|
|filter|FILTER_ADVERTISER_INTEGRATION_CODE|
|filter|FILTER_ADVERTISER_INTEGRATION_STATUS|
|filter|FILTER_CARRIER_NAME|
|filter|FILTER_CHANNEL_NAME|
|filter|FILTER_CITY_NAME|
|filter|FILTER_COMPANION_CREATIVE_NAME|
|filter|FILTER_USER_LIST_FIRST_PARTY_NAME|
|filter|FILTER_USER_LIST_THIRD_PARTY_NAME|
|filter|FILTER_NIELSEN_RESTATEMENT_DATE|
|filter|FILTER_NIELSEN_DATE_RANGE|
|filter|FILTER_INSERTION_ORDER_NAME|
|filter|FILTER_REGION_NAME|
|filter|FILTER_DMA_NAME|
|filter|FILTER_TRUEVIEW_IAR_REGION_NAME|
|filter|FILTER_TRUEVIEW_DMA_NAME|
|filter|FILTER_TRUEVIEW_REGION_NAME|
|filter|FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID|
|filter|FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME|
|filter|FILTER_AD_TYPE|
|filter|FILTER_ALGORITHM|
|filter|FILTER_ALGORITHM_ID|
|filter|FILTER_AMP_PAGE_REQUEST|
|filter|FILTER_ANONYMOUS_INVENTORY_MODELING|
|filter|FILTER_APP_URL|
|filter|FILTER_APP_URL_EXCLUDED|
|filter|FILTER_ATTRIBUTED_USERLIST|
|filter|FILTER_ATTRIBUTED_USERLIST_COST|
|filter|FILTER_ATTRIBUTED_USERLIST_TYPE|
|filter|FILTER_ATTRIBUTION_MODEL|
|filter|FILTER_AUDIENCE_LIST|
|filter|FILTER_AUDIENCE_LIST_COST|
|filter|FILTER_AUDIENCE_LIST_TYPE|
|filter|FILTER_AUDIENCE_NAME|
|filter|FILTER_AUDIENCE_TYPE|
|filter|FILTER_BILLABLE_OUTCOME|
|filter|FILTER_BRAND_LIFT_TYPE|
|filter|FILTER_CHANNEL_TYPE|
|filter|FILTER_CM_PLACEMENT_ID|
|filter|FILTER_CONVERSION_SOURCE|
|filter|FILTER_CONVERSION_SOURCE_ID|
|filter|FILTER_COUNTRY_ID|
|filter|FILTER_CREATIVE|
|filter|FILTER_CREATIVE_ASSET|
|filter|FILTER_CREATIVE_INTEGRATION_CODE|
|filter|FILTER_CREATIVE_RENDERED_IN_AMP|
|filter|FILTER_CREATIVE_SOURCE|
|filter|FILTER_CREATIVE_STATUS|
|filter|FILTER_DATA_PROVIDER_NAME|
|filter|FILTER_DETAILED_DEMOGRAPHICS|
|filter|FILTER_DETAILED_DEMOGRAPHICS_ID|
|filter|FILTER_DEVICE|
|filter|FILTER_GAM_INSERTION_ORDER|
|filter|FILTER_GAM_LINE_ITEM|
|filter|FILTER_GAM_LINE_ITEM_ID|
|filter|FILTER_DIGITAL_CONTENT_LABEL|
|filter|FILTER_DOMAIN|
|filter|FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST|
|filter|FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST|
|filter|FILTER_EXCHANGE|
|filter|FILTER_EXCHANGE_CODE|
|filter|FILTER_EXTENSION|
|filter|FILTER_EXTENSION_STATUS|
|filter|FILTER_EXTENSION_TYPE|
|filter|FILTER_FIRST_PARTY_AUDIENCE_LIST_COST|
|filter|FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE|
|filter|FILTER_FLOODLIGHT_ACTIVITY|
|filter|FILTER_FORMAT|
|filter|FILTER_GMAIL_AGE|
|filter|FILTER_GMAIL_CITY|
|filter|FILTER_GMAIL_COUNTRY|
|filter|FILTER_GMAIL_COUNTRY_NAME|
|filter|FILTER_GMAIL_DEVICE_TYPE|
|filter|FILTER_GMAIL_DEVICE_TYPE_NAME|
|filter|FILTER_GMAIL_GENDER|
|filter|FILTER_GMAIL_REGION|
|filter|FILTER_GMAIL_REMARKETING_LIST|
|filter|FILTER_HOUSEHOLD_INCOME|
|filter|FILTER_IMPRESSION_COUNTING_METHOD|
|filter|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER|
|filter|FILTER_INSERTION_ORDER_INTEGRATION_CODE|
|filter|FILTER_INSERTION_ORDER_STATUS|
|filter|FILTER_INTEREST|
|filter|FILTER_INVENTORY_SOURCE_GROUP|
|filter|FILTER_INVENTORY_SOURCE_GROUP_ID|
|filter|FILTER_INVENTORY_SOURCE_ID|
|filter|FILTER_INVENTORY_SOURCE_NAME|
|filter|FILTER_LIFE_EVENT|
|filter|FILTER_LIFE_EVENTS|
|filter|FILTER_LINE_ITEM_INTEGRATION_CODE|
|filter|FILTER_LINE_ITEM_NAME|
|filter|FILTER_LINE_ITEM_STATUS|
|filter|FILTER_MATCH_RATIO|
|filter|FILTER_MEASUREMENT_SOURCE|
|filter|FILTER_MEDIA_PLAN_NAME|
|filter|FILTER_PARENTAL_STATUS|
|filter|FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS|
|filter|FILTER_PLATFORM|
|filter|FILTER_PLAYBACK_METHOD|
|filter|FILTER_POSITION_IN_CONTENT|
|filter|FILTER_PUBLISHER_PROPERTY|
|filter|FILTER_PUBLISHER_PROPERTY_ID|
|filter|FILTER_PUBLISHER_PROPERTY_SECTION|
|filter|FILTER_PUBLISHER_PROPERTY_SECTION_ID|
|filter|FILTER_REFUND_REASON|
|filter|FILTER_REMARKETING_LIST|
|filter|FILTER_REWARDED|
|filter|FILTER_SENSITIVE_CATEGORY|
|filter|FILTER_SERVED_PIXEL_DENSITY|
|filter|FILTER_TARGETED_DATA_PROVIDERS|
|filter|FILTER_THIRD_PARTY_AUDIENCE_LIST_COST|
|filter|FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE|
|filter|FILTER_TRUEVIEW_AD|
|filter|FILTER_TRUEVIEW_AD_GROUP|
|filter|FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS|
|filter|FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID|
|filter|FILTER_TRUEVIEW_HOUSEHOLD_INCOME|
|filter|FILTER_TRUEVIEW_IAR_COUNTRY_NAME|
|filter|FILTER_TRUEVIEW_REMARKETING_LIST_NAME|
|filter|FILTER_VARIANT_ID|
|filter|FILTER_VARIANT_NAME|
|filter|FILTER_VARIANT_VERSION|
|filter|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE|
|filter|FILTER_VERIFICATION_VIDEO_POSITION|
|filter|FILTER_VIDEO_COMPANION_CREATIVE_SIZE|
|filter|FILTER_VIDEO_CONTINUOUS_PLAY|
|filter|FILTER_VIDEO_DURATION|
|filter|FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST|
|filter|FILTER_YOUTUBE_AD_VIDEO|
|filter|FILTER_YOUTUBE_AD_VIDEO_ID|
|filter|FILTER_YOUTUBE_CHANNEL|
|filter|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER|
|filter|FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER|
|filter|FILTER_YOUTUBE_VIDEO|
|filter|FILTER_ZIP_POSTAL_CODE|
|filter|FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS|
|filter|FILTER_TRUEVIEW_PLACEMENT_ID|
|filter|FILTER_PATH_PATTERN_ID|
|filter|FILTER_PATH_EVENT_INDEX|
|filter|FILTER_EVENT_TYPE|
|filter|FILTER_CHANNEL_GROUPING|
|filter|FILTER_OM_SDK_AVAILABLE|
|filter|FILTER_DATA_SOURCE|
|filter|FILTER_CM360_PLACEMENT_ID|
|filter|FILTER_TRUEVIEW_CLICK_TYPE_NAME|
|filter|FILTER_TRUEVIEW_AD_TYPE_NAME|
|filter|FILTER_VIDEO_CONTENT_DURATION|
|filter|FILTER_MATCHED_GENRE_TARGET|
|filter|FILTER_VIDEO_CONTENT_LIVE_STREAM|
|filter|FILTER_BUDGET_SEGMENT_TYPE|
|filter|FILTER_BUDGET_SEGMENT_BUDGET|
|filter|FILTER_BUDGET_SEGMENT_START_DATE|
|filter|FILTER_BUDGET_SEGMENT_END_DATE|
|filter|FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE|
|filter|FILTER_LINE_ITEM_BUDGET|
|filter|FILTER_LINE_ITEM_START_DATE|
|filter|FILTER_LINE_ITEM_END_DATE|
|filter|FILTER_INSERTION_ORDER_GOAL_TYPE|
|filter|FILTER_LINE_ITEM_PACING_PERCENTAGE|
|filter|FILTER_INSERTION_ORDER_GOAL_VALUE|
|filter|FILTER_OMID_CAPABLE|
|filter|FILTER_VENDOR_MEASUREMENT_MODE|
|filter|FILTER_IMPRESSION_LOSS_REJECTION_REASON|
|filter|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START|
|filter|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE|
|filter|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT|
|filter|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE|
|filter|FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE|
|filter|FILTER_VERIFICATION_VIDEO_RESIZED|
|filter|FILTER_VERIFICATION_AUDIBILITY_START|
|filter|FILTER_VERIFICATION_AUDIBILITY_COMPLETE|
|filter|FILTER_MEDIA_TYPE|
|filter|FILTER_AUDIO_FEED_TYPE_NAME|
|filter|FILTER_TRUEVIEW_TARGETING_EXPANSION|
|filter|FILTER_PUBLISHER_TRAFFIC_SOURCE|
|match|UNKNOWN|
|match|EXACT|
|match|PARTIAL|
|match|BEGINS_WITH|
|match|WILDCARD_EXPRESSION|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "kind": "string",
  "metadata": {
    "dataRange": "CUSTOM_DATES",
    "format": "CSV",
    "googleCloudStoragePathForLatestReport": "string",
    "googleDrivePathForLatestReport": "string",
    "latestReportRunTimeMs": "string",
    "locale": "string",
    "reportCount": 0,
    "running": true,
    "sendNotification": true,
    "shareEmailAddress": [
      "string"
    ],
    "title": "string"
  },
  "params": {
    "filters": [
      {
        "type": "FILTER_UNKNOWN",
        "value": "string"
      }
    ],
    "groupBys": [
      "FILTER_UNKNOWN"
    ],
    "includeInviteData": true,
    "metrics": [
      "METRIC_UNKNOWN"
    ],
    "options": {
      "includeOnlyTargetedUserLists": true,
      "pathQueryOptions": {
        "channelGrouping": {
          "fallbackName": "string",
          "name": "string",
          "rules": [
            {
              "disjunctiveMatchStatements": [
                {
                  "eventFilters": [
                    {
                      "dimensionFilter": {
                        "filter": "FILTER_UNKNOWN",
                        "match": "UNKNOWN",
                        "values": [
                          "string"
                        ]
                      }
                    }
                  ]
                }
              ],
              "name": "string"
            }
          ]
        },
        "pathFilters": [
          {
            "eventFilters": [
              {
                "dimensionFilter": {
                  "filter": "FILTER_UNKNOWN",
                  "match": "UNKNOWN",
                  "values": [
                    "string"
                  ]
                }
              }
            ],
            "pathMatchPosition": "ANY"
          }
        ]
      }
    },
    "type": "TYPE_GENERAL"
  },
  "queryId": "string",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "schedule": {
    "endTimeMs": "string",
    "frequency": "ONE_TIME",
    "nextRunMinuteOfDay": 0,
    "nextRunTimezoneCode": "string",
    "startTimeMs": "string"
  },
  "timezoneCode": "string"
}
```

Represents a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".|
|metadata|[QueryMetadata](#schemaquerymetadata)|false|none|Query metadata.|
|params|[Parameters](#schemaparameters)|false|none|Query parameters.|
|queryId|string(int64)|false|none|Query ID.|
|reportDataEndTimeMs|string(int64)|false|none|The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.|
|reportDataStartTimeMs|string(int64)|false|none|The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.|
|schedule|[QuerySchedule](#schemaqueryschedule)|false|none|Information on how often and when to run a query.|
|timezoneCode|string|false|none|Canonical timezone code for report data time. Defaults to America/New_York.|

<h2 id="tocS_QueryMetadata">QueryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaquerymetadata"></a>
<a id="schema_QueryMetadata"></a>
<a id="tocSquerymetadata"></a>
<a id="tocsquerymetadata"></a>

```json
{
  "dataRange": "CUSTOM_DATES",
  "format": "CSV",
  "googleCloudStoragePathForLatestReport": "string",
  "googleDrivePathForLatestReport": "string",
  "latestReportRunTimeMs": "string",
  "locale": "string",
  "reportCount": 0,
  "running": true,
  "sendNotification": true,
  "shareEmailAddress": [
    "string"
  ],
  "title": "string"
}
```

Query metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRange|string|false|none|Range of report data.|
|format|string|false|none|Format of the generated report.|
|googleCloudStoragePathForLatestReport|string|false|none|The path to the location in Google Cloud Storage where the latest report is stored.|
|googleDrivePathForLatestReport|string|false|none|The path in Google Drive for the latest report.|
|latestReportRunTimeMs|string(int64)|false|none|The time when the latest report started to run.|
|locale|string|false|none|Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English.|
|reportCount|integer(int32)|false|none|Number of reports that have been generated for the query.|
|running|boolean|false|none|Whether the latest report is currently running.|
|sendNotification|boolean|false|none|Whether to send an email notification when a report is ready. Default to false.|
|shareEmailAddress|[string]|false|none|List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.|
|title|string|false|none|Query title. It is used to name the reports generated from this query.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataRange|CUSTOM_DATES|
|dataRange|CURRENT_DAY|
|dataRange|PREVIOUS_DAY|
|dataRange|WEEK_TO_DATE|
|dataRange|MONTH_TO_DATE|
|dataRange|QUARTER_TO_DATE|
|dataRange|YEAR_TO_DATE|
|dataRange|PREVIOUS_WEEK|
|dataRange|PREVIOUS_HALF_MONTH|
|dataRange|PREVIOUS_MONTH|
|dataRange|PREVIOUS_QUARTER|
|dataRange|PREVIOUS_YEAR|
|dataRange|LAST_7_DAYS|
|dataRange|LAST_30_DAYS|
|dataRange|LAST_90_DAYS|
|dataRange|LAST_365_DAYS|
|dataRange|ALL_TIME|
|dataRange|LAST_14_DAYS|
|dataRange|TYPE_NOT_SUPPORTED|
|dataRange|LAST_60_DAYS|
|format|CSV|
|format|EXCEL_CSV|
|format|XLSX|

<h2 id="tocS_QuerySchedule">QuerySchedule</h2>
<!-- backwards compatibility -->
<a id="schemaqueryschedule"></a>
<a id="schema_QuerySchedule"></a>
<a id="tocSqueryschedule"></a>
<a id="tocsqueryschedule"></a>

```json
{
  "endTimeMs": "string",
  "frequency": "ONE_TIME",
  "nextRunMinuteOfDay": 0,
  "nextRunTimezoneCode": "string",
  "startTimeMs": "string"
}
```

Information on how frequently and when to run a query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeMs|string(int64)|false|none|Datetime to periodically run the query until.|
|frequency|string|false|none|How often the query is run.|
|nextRunMinuteOfDay|integer(int32)|false|none|Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.|
|nextRunTimezoneCode|string|false|none|Canonical timezone code for report generation time. Defaults to America/New_York.|
|startTimeMs|string(int64)|false|none|When to start running the query. Not applicable to `ONE_TIME` frequency.|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|ONE_TIME|
|frequency|DAILY|
|frequency|WEEKLY|
|frequency|SEMI_MONTHLY|
|frequency|MONTHLY|
|frequency|QUARTERLY|
|frequency|YEARLY|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "key": {
    "queryId": "string",
    "reportId": "string"
  },
  "metadata": {
    "googleCloudStoragePath": "string",
    "reportDataEndTimeMs": "string",
    "reportDataStartTimeMs": "string",
    "status": {
      "failure": {
        "errorCode": "AUTHENTICATION_ERROR"
      },
      "finishTimeMs": "string",
      "format": "CSV",
      "state": "RUNNING"
    }
  },
  "params": {
    "filters": [
      {
        "type": "FILTER_UNKNOWN",
        "value": "string"
      }
    ],
    "groupBys": [
      "FILTER_UNKNOWN"
    ],
    "includeInviteData": true,
    "metrics": [
      "METRIC_UNKNOWN"
    ],
    "options": {
      "includeOnlyTargetedUserLists": true,
      "pathQueryOptions": {
        "channelGrouping": {
          "fallbackName": "string",
          "name": "string",
          "rules": [
            {
              "disjunctiveMatchStatements": [
                {
                  "eventFilters": [
                    {
                      "dimensionFilter": {
                        "filter": "FILTER_UNKNOWN",
                        "match": "UNKNOWN",
                        "values": [
                          "string"
                        ]
                      }
                    }
                  ]
                }
              ],
              "name": "string"
            }
          ]
        },
        "pathFilters": [
          {
            "eventFilters": [
              {
                "dimensionFilter": {
                  "filter": "FILTER_UNKNOWN",
                  "match": "UNKNOWN",
                  "values": [
                    "string"
                  ]
                }
              }
            ],
            "pathMatchPosition": "ANY"
          }
        ]
      }
    },
    "type": "TYPE_GENERAL"
  }
}
```

Represents a report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[ReportKey](#schemareportkey)|false|none|Key used to identify a report.|
|metadata|[ReportMetadata](#schemareportmetadata)|false|none|Report metadata.|
|params|[Parameters](#schemaparameters)|false|none|Report parameters.|

<h2 id="tocS_ReportFailure">ReportFailure</h2>
<!-- backwards compatibility -->
<a id="schemareportfailure"></a>
<a id="schema_ReportFailure"></a>
<a id="tocSreportfailure"></a>
<a id="tocsreportfailure"></a>

```json
{
  "errorCode": "AUTHENTICATION_ERROR"
}
```

An explanation of a report failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|Error code that shows why the report was not created.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|AUTHENTICATION_ERROR|
|errorCode|UNAUTHORIZED_API_ACCESS|
|errorCode|SERVER_ERROR|
|errorCode|VALIDATION_ERROR|
|errorCode|REPORTING_FATAL_ERROR|
|errorCode|REPORTING_TRANSIENT_ERROR|
|errorCode|REPORTING_IMCOMPATIBLE_METRICS|
|errorCode|REPORTING_ILLEGAL_FILENAME|
|errorCode|REPORTING_QUERY_NOT_FOUND|
|errorCode|REPORTING_BUCKET_NOT_FOUND|
|errorCode|REPORTING_CREATE_BUCKET_FAILED|
|errorCode|REPORTING_DELETE_BUCKET_FAILED|
|errorCode|REPORTING_UPDATE_BUCKET_PERMISSION_FAILED|
|errorCode|REPORTING_WRITE_BUCKET_OBJECT_FAILED|
|errorCode|DEPRECATED_REPORTING_INVALID_QUERY|
|errorCode|REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS|
|errorCode|REPORTING_INVALID_QUERY_TITLE_MISSING|
|errorCode|REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS|

<h2 id="tocS_ReportKey">ReportKey</h2>
<!-- backwards compatibility -->
<a id="schemareportkey"></a>
<a id="schema_ReportKey"></a>
<a id="tocSreportkey"></a>
<a id="tocsreportkey"></a>

```json
{
  "queryId": "string",
  "reportId": "string"
}
```

Key used to identify a report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryId|string(int64)|false|none|Query ID.|
|reportId|string(int64)|false|none|Report ID.|

<h2 id="tocS_ReportMetadata">ReportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareportmetadata"></a>
<a id="schema_ReportMetadata"></a>
<a id="tocSreportmetadata"></a>
<a id="tocsreportmetadata"></a>

```json
{
  "googleCloudStoragePath": "string",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "status": {
    "failure": {
      "errorCode": "AUTHENTICATION_ERROR"
    },
    "finishTimeMs": "string",
    "format": "CSV",
    "state": "RUNNING"
  }
}
```

Report metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleCloudStoragePath|string|false|none|The path to the location in Google Cloud Storage where the report is stored.|
|reportDataEndTimeMs|string(int64)|false|none|The ending time for the data that is shown in the report.|
|reportDataStartTimeMs|string(int64)|false|none|The starting time for the data that is shown in the report.|
|status|[ReportStatus](#schemareportstatus)|false|none|Report status.|

<h2 id="tocS_ReportStatus">ReportStatus</h2>
<!-- backwards compatibility -->
<a id="schemareportstatus"></a>
<a id="schema_ReportStatus"></a>
<a id="tocSreportstatus"></a>
<a id="tocsreportstatus"></a>

```json
{
  "failure": {
    "errorCode": "AUTHENTICATION_ERROR"
  },
  "finishTimeMs": "string",
  "format": "CSV",
  "state": "RUNNING"
}
```

Report status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failure|[ReportFailure](#schemareportfailure)|false|none|If the report failed, this records the cause.|
|finishTimeMs|string(int64)|false|none|The time when this report either completed successfully or failed.|
|format|string|false|none|The file type of the report.|
|state|string|false|none|The state of the report.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|CSV|
|format|EXCEL_CSV|
|format|XLSX|
|state|RUNNING|
|state|DONE|
|state|FAILED|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "disjunctiveMatchStatements": [
    {
      "eventFilters": [
        {
          "dimensionFilter": {
            "filter": "FILTER_UNKNOWN",
            "match": "UNKNOWN",
            "values": [
              "string"
            ]
          }
        }
      ]
    }
  ],
  "name": "string"
}
```

A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disjunctiveMatchStatements|[[DisjunctiveMatchStatement](#schemadisjunctivematchstatement)]|false|none|none|
|name|string|false|none|Rule name.|

<h2 id="tocS_RunQueryRequest">RunQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunqueryrequest"></a>
<a id="schema_RunQueryRequest"></a>
<a id="tocSrunqueryrequest"></a>
<a id="tocsrunqueryrequest"></a>

```json
{
  "dataRange": "CUSTOM_DATES",
  "reportDataEndTimeMs": "string",
  "reportDataStartTimeMs": "string",
  "timezoneCode": "string"
}
```

Request to run a stored query to generate a report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRange|string|false|none|Report data range used to generate the report.|
|reportDataEndTimeMs|string(int64)|false|none|The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.|
|reportDataStartTimeMs|string(int64)|false|none|The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.|
|timezoneCode|string|false|none|Canonical timezone code for report data time. Defaults to America/New_York.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataRange|CUSTOM_DATES|
|dataRange|CURRENT_DAY|
|dataRange|PREVIOUS_DAY|
|dataRange|WEEK_TO_DATE|
|dataRange|MONTH_TO_DATE|
|dataRange|QUARTER_TO_DATE|
|dataRange|YEAR_TO_DATE|
|dataRange|PREVIOUS_WEEK|
|dataRange|PREVIOUS_HALF_MONTH|
|dataRange|PREVIOUS_MONTH|
|dataRange|PREVIOUS_QUARTER|
|dataRange|PREVIOUS_YEAR|
|dataRange|LAST_7_DAYS|
|dataRange|LAST_30_DAYS|
|dataRange|LAST_90_DAYS|
|dataRange|LAST_365_DAYS|
|dataRange|ALL_TIME|
|dataRange|LAST_14_DAYS|
|dataRange|TYPE_NOT_SUPPORTED|
|dataRange|LAST_60_DAYS|
