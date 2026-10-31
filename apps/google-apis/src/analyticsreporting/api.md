<h1 id="analytics-reporting-api">Analytics Reporting API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Accesses Analytics report data.

Base URLs:

* <a href="https://analyticsreporting.googleapis.com/">https://analyticsreporting.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/analytics/devguides/reporting/core/v4/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/analytics|View and manage your Google Analytics data|
|https://www.googleapis.com/auth/analytics.readonly|See and download your Google Analytics data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/analytics|View and manage your Google Analytics data|
|https://www.googleapis.com/auth/analytics.readonly|See and download your Google Analytics data|

<h1 id="analytics-reporting-api-reports">reports</h1>

## analyticsreporting.reports.batchGet

<a id="opIdanalyticsreporting.reports.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/reports:batchGet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reportRequests": [
      {
        "cohortGroup": {
          "cohorts": [
            {
              "dateRange": {
                "endDate": "string",
                "startDate": "string"
              },
              "name": "string",
              "type": "UNSPECIFIED_COHORT_TYPE"
            }
          ],
          "lifetimeValue": true
        },
        "dateRanges": [
          {
            "endDate": "string",
            "startDate": "string"
          }
        ],
        "dimensionFilterClauses": [
          {
            "filters": [
              {
                "caseSensitive": true,
                "dimensionName": "string",
                "expressions": [
                  "string"
                ],
                "not": true,
                "operator": "OPERATOR_UNSPECIFIED"
              }
            ],
            "operator": "OPERATOR_UNSPECIFIED"
          }
        ],
        "dimensions": [
          {
            "histogramBuckets": [
              "string"
            ],
            "name": "string"
          }
        ],
        "filtersExpression": "string",
        "hideTotals": true,
        "hideValueRanges": true,
        "includeEmptyRows": true,
        "metricFilterClauses": [
          {
            "filters": [
              {
                "comparisonValue": "string",
                "metricName": "string",
                "not": true,
                "operator": "OPERATOR_UNSPECIFIED"
              }
            ],
            "operator": "OPERATOR_UNSPECIFIED"
          }
        ],
        "metrics": [
          {
            "alias": "string",
            "expression": "string",
            "formattingType": "METRIC_TYPE_UNSPECIFIED"
          }
        ],
        "orderBys": [
          {
            "fieldName": "string",
            "orderType": "ORDER_TYPE_UNSPECIFIED",
            "sortOrder": "SORT_ORDER_UNSPECIFIED"
          }
        ],
        "pageSize": 0,
        "pageToken": "string",
        "pivots": [
          {
            "dimensionFilterClauses": [
              {
                "filters": [
                  {
                    "caseSensitive": true,
                    "dimensionName": "string",
                    "expressions": [
                      "string"
                    ],
                    "not": true,
                    "operator": "OPERATOR_UNSPECIFIED"
                  }
                ],
                "operator": "OPERATOR_UNSPECIFIED"
              }
            ],
            "dimensions": [
              {
                "histogramBuckets": [
                  "string"
                ],
                "name": "string"
              }
            ],
            "maxGroupCount": 0,
            "metrics": [
              {
                "alias": "string",
                "expression": "string",
                "formattingType": "METRIC_TYPE_UNSPECIFIED"
              }
            ],
            "startGroup": 0
          }
        ],
        "samplingLevel": "SAMPLING_UNSPECIFIED",
        "segments": [
          {
            "dynamicSegment": {
              "name": "string",
              "sessionSegment": {
                "segmentFilters": [
                  {
                    "not": true,
                    "sequenceSegment": {
                      "firstStepShouldMatchFirstHit": true,
                      "segmentSequenceSteps": [
                        {
                          "matchType": "UNSPECIFIED_MATCH_TYPE",
                          "orFiltersForSegment": [
                            {
                              "segmentFilterClauses": [
                                {
                                  "dimensionFilter": {
                                    "caseSensitive": true,
                                    "dimensionName": "string",
                                    "expressions": [
                                      "string"
                                    ],
                                    "maxComparisonValue": "string",
                                    "minComparisonValue": "string",
                                    "operator": "OPERATOR_UNSPECIFIED"
                                  },
                                  "metricFilter": {
                                    "comparisonValue": "string",
                                    "maxComparisonValue": "string",
                                    "metricName": "string",
                                    "operator": "UNSPECIFIED_OPERATOR",
                                    "scope": "UNSPECIFIED_SCOPE"
                                  },
                                  "not": true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "simpleSegment": {
                      "orFiltersForSegment": [
                        {
                          "segmentFilterClauses": [
                            {
                              "dimensionFilter": {
                                "caseSensitive": true,
                                "dimensionName": "string",
                                "expressions": [
                                  "string"
                                ],
                                "maxComparisonValue": "string",
                                "minComparisonValue": "string",
                                "operator": "OPERATOR_UNSPECIFIED"
                              },
                              "metricFilter": {
                                "comparisonValue": "string",
                                "maxComparisonValue": "string",
                                "metricName": "string",
                                "operator": "UNSPECIFIED_OPERATOR",
                                "scope": "UNSPECIFIED_SCOPE"
                              },
                              "not": true
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              },
              "userSegment": {
                "segmentFilters": [
                  {
                    "not": true,
                    "sequenceSegment": {
                      "firstStepShouldMatchFirstHit": true,
                      "segmentSequenceSteps": [
                        {
                          "matchType": "UNSPECIFIED_MATCH_TYPE",
                          "orFiltersForSegment": [
                            {
                              "segmentFilterClauses": [
                                {
                                  "dimensionFilter": {
                                    "caseSensitive": true,
                                    "dimensionName": "string",
                                    "expressions": [
                                      "string"
                                    ],
                                    "maxComparisonValue": "string",
                                    "minComparisonValue": "string",
                                    "operator": "OPERATOR_UNSPECIFIED"
                                  },
                                  "metricFilter": {
                                    "comparisonValue": "string",
                                    "maxComparisonValue": "string",
                                    "metricName": "string",
                                    "operator": "UNSPECIFIED_OPERATOR",
                                    "scope": "UNSPECIFIED_SCOPE"
                                  },
                                  "not": true
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "simpleSegment": {
                      "orFiltersForSegment": [
                        {
                          "segmentFilterClauses": [
                            {
                              "dimensionFilter": {
                                "caseSensitive": true,
                                "dimensionName": "string",
                                "expressions": [
                                  "string"
                                ],
                                "maxComparisonValue": "string",
                                "minComparisonValue": "string",
                                "operator": "OPERATOR_UNSPECIFIED"
                              },
                              "metricFilter": {
                                "comparisonValue": "string",
                                "maxComparisonValue": "string",
                                "metricName": "string",
                                "operator": "UNSPECIFIED_OPERATOR",
                                "scope": "UNSPECIFIED_SCOPE"
                              },
                              "not": true
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "segmentId": "string"
          }
        ],
        "viewId": "string"
      }
    ],
    "useResourceQuotas": true
  }'
```

`POST /v4/reports:batchGet`

Returns the Analytics data.

> Body parameter

```json
{
  "reportRequests": [
    {
      "cohortGroup": {
        "cohorts": [
          {
            "dateRange": {
              "endDate": "string",
              "startDate": "string"
            },
            "name": "string",
            "type": "UNSPECIFIED_COHORT_TYPE"
          }
        ],
        "lifetimeValue": true
      },
      "dateRanges": [
        {
          "endDate": "string",
          "startDate": "string"
        }
      ],
      "dimensionFilterClauses": [
        {
          "filters": [
            {
              "caseSensitive": true,
              "dimensionName": "string",
              "expressions": [
                "string"
              ],
              "not": true,
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "dimensions": [
        {
          "histogramBuckets": [
            "string"
          ],
          "name": "string"
        }
      ],
      "filtersExpression": "string",
      "hideTotals": true,
      "hideValueRanges": true,
      "includeEmptyRows": true,
      "metricFilterClauses": [
        {
          "filters": [
            {
              "comparisonValue": "string",
              "metricName": "string",
              "not": true,
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "metrics": [
        {
          "alias": "string",
          "expression": "string",
          "formattingType": "METRIC_TYPE_UNSPECIFIED"
        }
      ],
      "orderBys": [
        {
          "fieldName": "string",
          "orderType": "ORDER_TYPE_UNSPECIFIED",
          "sortOrder": "SORT_ORDER_UNSPECIFIED"
        }
      ],
      "pageSize": 0,
      "pageToken": "string",
      "pivots": [
        {
          "dimensionFilterClauses": [
            {
              "filters": [
                {
                  "caseSensitive": true,
                  "dimensionName": "string",
                  "expressions": [
                    "string"
                  ],
                  "not": true,
                  "operator": "OPERATOR_UNSPECIFIED"
                }
              ],
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "dimensions": [
            {
              "histogramBuckets": [
                "string"
              ],
              "name": "string"
            }
          ],
          "maxGroupCount": 0,
          "metrics": [
            {
              "alias": "string",
              "expression": "string",
              "formattingType": "METRIC_TYPE_UNSPECIFIED"
            }
          ],
          "startGroup": 0
        }
      ],
      "samplingLevel": "SAMPLING_UNSPECIFIED",
      "segments": [
        {
          "dynamicSegment": {
            "name": "string",
            "sessionSegment": {
              "segmentFilters": [
                {
                  "not": true,
                  "sequenceSegment": {
                    "firstStepShouldMatchFirstHit": true,
                    "segmentSequenceSteps": [
                      {
                        "matchType": "UNSPECIFIED_MATCH_TYPE",
                        "orFiltersForSegment": [
                          {
                            "segmentFilterClauses": [
                              {
                                "dimensionFilter": {
                                  "caseSensitive": true,
                                  "dimensionName": "string",
                                  "expressions": [
                                    "string"
                                  ],
                                  "maxComparisonValue": "string",
                                  "minComparisonValue": "string",
                                  "operator": "OPERATOR_UNSPECIFIED"
                                },
                                "metricFilter": {
                                  "comparisonValue": "string",
                                  "maxComparisonValue": "string",
                                  "metricName": "string",
                                  "operator": "UNSPECIFIED_OPERATOR",
                                  "scope": "UNSPECIFIED_SCOPE"
                                },
                                "not": true
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "simpleSegment": {
                    "orFiltersForSegment": [
                      {
                        "segmentFilterClauses": [
                          {
                            "dimensionFilter": {
                              "caseSensitive": true,
                              "dimensionName": "string",
                              "expressions": [
                                "string"
                              ],
                              "maxComparisonValue": "string",
                              "minComparisonValue": "string",
                              "operator": "OPERATOR_UNSPECIFIED"
                            },
                            "metricFilter": {
                              "comparisonValue": "string",
                              "maxComparisonValue": "string",
                              "metricName": "string",
                              "operator": "UNSPECIFIED_OPERATOR",
                              "scope": "UNSPECIFIED_SCOPE"
                            },
                            "not": true
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "userSegment": {
              "segmentFilters": [
                {
                  "not": true,
                  "sequenceSegment": {
                    "firstStepShouldMatchFirstHit": true,
                    "segmentSequenceSteps": [
                      {
                        "matchType": "UNSPECIFIED_MATCH_TYPE",
                        "orFiltersForSegment": [
                          {
                            "segmentFilterClauses": [
                              {
                                "dimensionFilter": {
                                  "caseSensitive": true,
                                  "dimensionName": "string",
                                  "expressions": [
                                    "string"
                                  ],
                                  "maxComparisonValue": "string",
                                  "minComparisonValue": "string",
                                  "operator": "OPERATOR_UNSPECIFIED"
                                },
                                "metricFilter": {
                                  "comparisonValue": "string",
                                  "maxComparisonValue": "string",
                                  "metricName": "string",
                                  "operator": "UNSPECIFIED_OPERATOR",
                                  "scope": "UNSPECIFIED_SCOPE"
                                },
                                "not": true
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "simpleSegment": {
                    "orFiltersForSegment": [
                      {
                        "segmentFilterClauses": [
                          {
                            "dimensionFilter": {
                              "caseSensitive": true,
                              "dimensionName": "string",
                              "expressions": [
                                "string"
                              ],
                              "maxComparisonValue": "string",
                              "minComparisonValue": "string",
                              "operator": "OPERATOR_UNSPECIFIED"
                            },
                            "metricFilter": {
                              "comparisonValue": "string",
                              "maxComparisonValue": "string",
                              "metricName": "string",
                              "operator": "UNSPECIFIED_OPERATOR",
                              "scope": "UNSPECIFIED_SCOPE"
                            },
                            "not": true
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          },
          "segmentId": "string"
        }
      ],
      "viewId": "string"
    }
  ],
  "useResourceQuotas": true
}
```

<h3 id="analyticsreportingreportsbatchget-parameters">Parameters</h3>

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
|body|body|[GetReportsRequest](#schemagetreportsrequest)|false|none|
|» reportRequests|body|[[ReportRequest](#schemareportrequest)]|false|Requests, each request will have a separate response. There can be a maximum of 5 requests. All requests should have the same `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.|
|» useResourceQuotas|body|boolean|false|Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to `False`). If this field is set to `True` the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details.|

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
  "queryCost": 0,
  "reports": [
    {
      "columnHeader": {
        "dimensions": [
          "string"
        ],
        "metricHeader": {
          "metricHeaderEntries": [
            {
              "name": "string",
              "type": "METRIC_TYPE_UNSPECIFIED"
            }
          ],
          "pivotHeaders": [
            {
              "pivotHeaderEntries": [
                {
                  "dimensionNames": [
                    "string"
                  ],
                  "dimensionValues": [
                    "string"
                  ],
                  "metric": {
                    "name": "string",
                    "type": "METRIC_TYPE_UNSPECIFIED"
                  }
                }
              ],
              "totalPivotGroupsCount": 0
            }
          ]
        }
      },
      "data": {
        "dataLastRefreshed": "string",
        "emptyReason": "string",
        "isDataGolden": true,
        "maximums": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ],
        "minimums": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ],
        "rowCount": 0,
        "rows": [
          {
            "dimensions": [
              "string"
            ],
            "metrics": [
              {
                "pivotValueRegions": [
                  {
                    "values": [
                      "string"
                    ]
                  }
                ],
                "values": [
                  "string"
                ]
              }
            ]
          }
        ],
        "samplesReadCounts": [
          "string"
        ],
        "samplingSpaceSizes": [
          "string"
        ],
        "totals": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ]
      },
      "nextPageToken": "string"
    }
  ],
  "resourceQuotasRemaining": {
    "dailyQuotaTokensRemaining": 0,
    "hourlyQuotaTokensRemaining": 0
  }
}
```

<h3 id="analyticsreportingreportsbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetReportsResponse](#schemagetreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

<h1 id="analytics-reporting-api-useractivity">userActivity</h1>

## analyticsreporting.userActivity.search

<a id="opIdanalyticsreporting.userActivity.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/userActivity:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activityTypes": [
      "ACTIVITY_TYPE_UNSPECIFIED"
    ],
    "dateRange": {
      "endDate": "string",
      "startDate": "string"
    },
    "pageSize": 0,
    "pageToken": "string",
    "user": {
      "type": "USER_ID_TYPE_UNSPECIFIED",
      "userId": "string"
    },
    "viewId": "string"
  }'
```

`POST /v4/userActivity:search`

Returns User Activity data.

> Body parameter

```json
{
  "activityTypes": [
    "ACTIVITY_TYPE_UNSPECIFIED"
  ],
  "dateRange": {
    "endDate": "string",
    "startDate": "string"
  },
  "pageSize": 0,
  "pageToken": "string",
  "user": {
    "type": "USER_ID_TYPE_UNSPECIFIED",
    "userId": "string"
  },
  "viewId": "string"
}
```

<h3 id="analyticsreportinguseractivitysearch-parameters">Parameters</h3>

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
|body|body|[SearchUserActivityRequest](#schemasearchuseractivityrequest)|false|none|
|» activityTypes|body|[string]|false|Set of all activity types being requested. Only acvities matching these types will be returned in the response. If empty, all activies will be returned.|
|» dateRange|body|[DateRange](#schemadaterange)|false|Date range for which to retrieve the user activity. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day).|
|» pageSize|body|integer(int32)|false|Page size is for paging and specifies the maximum number of returned rows. Page size should be > 0. If the value is 0 or if the field isn't specified, the request returns the default of 1000 rows per page.|
|» pageToken|body|string|false|A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request.|
|» user|body|[User](#schemauser)|false|Required. Unique user Id to query for. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain this field.|
|» viewId|body|string|false|Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the `viewId`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» activityTypes|ACTIVITY_TYPE_UNSPECIFIED|
|» activityTypes|PAGEVIEW|
|» activityTypes|SCREENVIEW|
|» activityTypes|GOAL|
|» activityTypes|ECOMMERCE|
|» activityTypes|EVENT|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "sampleRate": 0,
  "sessions": [
    {
      "activities": [
        {
          "activityTime": "string",
          "activityType": "ACTIVITY_TYPE_UNSPECIFIED",
          "appview": {
            "appName": "string",
            "mobileDeviceBranding": "string",
            "mobileDeviceModel": "string",
            "screenName": "string"
          },
          "campaign": "string",
          "channelGrouping": "string",
          "customDimension": [
            {
              "index": 0,
              "value": "string"
            }
          ],
          "ecommerce": {
            "actionType": "UNKNOWN",
            "ecommerceType": "ECOMMERCE_TYPE_UNSPECIFIED",
            "products": [
              {
                "itemRevenue": 0,
                "productName": "string",
                "productQuantity": "string",
                "productSku": "string"
              }
            ],
            "transaction": {
              "transactionId": "string",
              "transactionRevenue": 0,
              "transactionShipping": 0,
              "transactionTax": 0
            }
          },
          "event": {
            "eventAction": "string",
            "eventCategory": "string",
            "eventCount": "string",
            "eventLabel": "string",
            "eventValue": "string"
          },
          "goals": {
            "goals": [
              {
                "goalCompletionLocation": "string",
                "goalCompletions": "string",
                "goalIndex": 0,
                "goalName": "string",
                "goalPreviousStep1": "string",
                "goalPreviousStep2": "string",
                "goalPreviousStep3": "string",
                "goalValue": 0
              }
            ]
          },
          "hostname": "string",
          "keyword": "string",
          "landingPagePath": "string",
          "medium": "string",
          "pageview": {
            "pagePath": "string",
            "pageTitle": "string"
          },
          "source": "string"
        }
      ],
      "dataSource": "string",
      "deviceCategory": "string",
      "platform": "string",
      "sessionDate": "string",
      "sessionId": "string"
    }
  ],
  "totalRows": 0
}
```

<h3 id="analyticsreportinguseractivitysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchUserActivityResponse](#schemasearchuseractivityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics ), Oauth2 ( Scopes: https://www.googleapis.com/auth/analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/analytics.readonly )
</aside>

# Schemas

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "activityTime": "string",
  "activityType": "ACTIVITY_TYPE_UNSPECIFIED",
  "appview": {
    "appName": "string",
    "mobileDeviceBranding": "string",
    "mobileDeviceModel": "string",
    "screenName": "string"
  },
  "campaign": "string",
  "channelGrouping": "string",
  "customDimension": [
    {
      "index": 0,
      "value": "string"
    }
  ],
  "ecommerce": {
    "actionType": "UNKNOWN",
    "ecommerceType": "ECOMMERCE_TYPE_UNSPECIFIED",
    "products": [
      {
        "itemRevenue": 0,
        "productName": "string",
        "productQuantity": "string",
        "productSku": "string"
      }
    ],
    "transaction": {
      "transactionId": "string",
      "transactionRevenue": 0,
      "transactionShipping": 0,
      "transactionTax": 0
    }
  },
  "event": {
    "eventAction": "string",
    "eventCategory": "string",
    "eventCount": "string",
    "eventLabel": "string",
    "eventValue": "string"
  },
  "goals": {
    "goals": [
      {
        "goalCompletionLocation": "string",
        "goalCompletions": "string",
        "goalIndex": 0,
        "goalName": "string",
        "goalPreviousStep1": "string",
        "goalPreviousStep2": "string",
        "goalPreviousStep3": "string",
        "goalValue": 0
      }
    ]
  },
  "hostname": "string",
  "keyword": "string",
  "landingPagePath": "string",
  "medium": "string",
  "pageview": {
    "pagePath": "string",
    "pageTitle": "string"
  },
  "source": "string"
}
```

An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityTime|string(google-datetime)|false|none|Timestamp of the activity. If activities for a visit cross midnight and occur in two separate dates, then two sessions (one per date) share the session identifier. For example, say session ID 113472 has activity within 2019-08-20, and session ID 243742 has activity within 2019-08-25 and 2019-08-26. Session ID 113472 is one session, and session ID 243742 is two sessions.|
|activityType|string|false|none|Type of this activity.|
|appview|[ScreenviewData](#schemascreenviewdata)|false|none|This will be set if `activity_type` equals `SCREEN_VIEW`.|
|campaign|string|false|none|For manual campaign tracking, it is the value of the utm_campaign campaign tracking parameter. For AdWords autotagging, it is the name(s) of the online ad campaign(s) you use for the property. If you use neither, its value is (not set).|
|channelGrouping|string|false|none|The Channel Group associated with an end user's session for this View (defined by the View's Channel Groupings).|
|customDimension|[[CustomDimension](#schemacustomdimension)]|false|none|A list of all custom dimensions associated with this activity.|
|ecommerce|[EcommerceData](#schemaecommercedata)|false|none|This will be set if `activity_type` equals `ECOMMERCE`.|
|event|[EventData](#schemaeventdata)|false|none|This field contains all the details pertaining to an event and will be set if `activity_type` equals `EVENT`.|
|goals|[GoalSetData](#schemagoalsetdata)|false|none|This field contains a list of all the goals that were reached in this activity when `activity_type` equals `GOAL`.|
|hostname|string|false|none|The hostname from which the tracking request was made.|
|keyword|string|false|none|For manual campaign tracking, it is the value of the utm_term campaign tracking parameter. For AdWords traffic, it contains the best matching targeting criteria. For the display network, where multiple targeting criteria could have caused the ad to show up, it returns the best matching targeting criteria as selected by Ads. This could be display_keyword, site placement, boomuserlist, user_interest, age, or gender. Otherwise its value is (not set).|
|landingPagePath|string|false|none|The first page in users' sessions, or the landing page.|
|medium|string|false|none|The type of referrals. For manual campaign tracking, it is the value of the utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc. If users came from a search engine detected by Google Analytics, it is organic. If the referrer is not a search engine, it is referral. If users came directly to the property and document.referrer is empty, its value is (none).|
|pageview|[PageviewData](#schemapageviewdata)|false|none|This will be set if `activity_type` equals `PAGEVIEW`. This field contains all the details about the visitor and the page that was visited.|
|source|string|false|none|The source of referrals. For manual campaign tracking, it is the value of the utm_source campaign tracking parameter. For AdWords autotagging, it is google. If you use neither, it is the domain of the source (e.g., document.referrer) referring the users. It may also contain a port address. If users arrived without a referrer, its value is (direct).|

#### Enumerated Values

|Property|Value|
|---|---|
|activityType|ACTIVITY_TYPE_UNSPECIFIED|
|activityType|PAGEVIEW|
|activityType|SCREENVIEW|
|activityType|GOAL|
|activityType|ECOMMERCE|
|activityType|EVENT|

<h2 id="tocS_Cohort">Cohort</h2>
<!-- backwards compatibility -->
<a id="schemacohort"></a>
<a id="schema_Cohort"></a>
<a id="tocScohort"></a>
<a id="tocscohort"></a>

```json
{
  "dateRange": {
    "endDate": "string",
    "startDate": "string"
  },
  "name": "string",
  "type": "UNSPECIFIED_COHORT_TYPE"
}
```

Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateRange|[DateRange](#schemadaterange)|false|none|This is used for `FIRST_VISIT_DATE` cohort, the cohort selects users whose first visit date is between start date and end date defined in the DateRange. The date ranges should be aligned for cohort requests. If the request contains `ga:cohortNthDay` it should be exactly one day long, if `ga:cohortNthWeek` it should be aligned to the week boundary (starting at Sunday and ending Saturday), and for `ga:cohortNthMonth` the date range should be aligned to the month (starting at the first and ending on the last day of the month). For LTV requests there are no such restrictions. You do not need to supply a date range for the `reportsRequest.dateRanges` field.|
|name|string|false|none|A unique name for the cohort. If not defined name will be auto-generated with values cohort_[1234...].|
|type|string|false|none|Type of the cohort. The only supported type as of now is `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as `FIRST_VISIT_DATE` type cohort.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNSPECIFIED_COHORT_TYPE|
|type|FIRST_VISIT_DATE|

<h2 id="tocS_CohortGroup">CohortGroup</h2>
<!-- backwards compatibility -->
<a id="schemacohortgroup"></a>
<a id="schema_CohortGroup"></a>
<a id="tocScohortgroup"></a>
<a id="tocscohortgroup"></a>

```json
{
  "cohorts": [
    {
      "dateRange": {
        "endDate": "string",
        "startDate": "string"
      },
      "name": "string",
      "type": "UNSPECIFIED_COHORT_TYPE"
    }
  ],
  "lifetimeValue": true
}
```

Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cohorts|[[Cohort](#schemacohort)]|false|none|The definition for the cohort.|
|lifetimeValue|boolean|false|none|Enable Life Time Value (LTV). LTV measures lifetime value for users acquired through different channels. Please see: [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and [Lifetime Value](https://support.google.com/analytics/answer/6182550) If the value of lifetimeValue is false: - The metric values are similar to the values in the web interface cohort report. - The cohort definition date ranges must be aligned to the calendar week and month. i.e. while requesting `ga:cohortNthWeek` the `startDate` in the cohort definition should be a Sunday and the `endDate` should be the following Saturday, and for `ga:cohortNthMonth`, the `startDate` should be the 1st of the month and `endDate` should be the last day of the month. When the lifetimeValue is true: - The metric values will correspond to the values in the web interface LifeTime value report. - The Lifetime Value report shows you how user value (Revenue) and engagement (Appviews, Goal Completions, Sessions, and Session Duration) grow during the 90 days after a user is acquired. - The metrics are calculated as a cumulative average per user per the time increment. - The cohort definition date ranges need not be aligned to the calendar week and month boundaries. - The `viewId` must be an [app view ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews)|

<h2 id="tocS_ColumnHeader">ColumnHeader</h2>
<!-- backwards compatibility -->
<a id="schemacolumnheader"></a>
<a id="schema_ColumnHeader"></a>
<a id="tocScolumnheader"></a>
<a id="tocscolumnheader"></a>

```json
{
  "dimensions": [
    "string"
  ],
  "metricHeader": {
    "metricHeaderEntries": [
      {
        "name": "string",
        "type": "METRIC_TYPE_UNSPECIFIED"
      }
    ],
    "pivotHeaders": [
      {
        "pivotHeaderEntries": [
          {
            "dimensionNames": [
              "string"
            ],
            "dimensionValues": [
              "string"
            ],
            "metric": {
              "name": "string",
              "type": "METRIC_TYPE_UNSPECIFIED"
            }
          }
        ],
        "totalPivotGroupsCount": 0
      }
    ]
  }
}
```

Column headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[string]|false|none|The dimension names in the response.|
|metricHeader|[MetricHeader](#schemametricheader)|false|none|Metric headers for the metrics in the response.|

<h2 id="tocS_CustomDimension">CustomDimension</h2>
<!-- backwards compatibility -->
<a id="schemacustomdimension"></a>
<a id="schema_CustomDimension"></a>
<a id="tocScustomdimension"></a>
<a id="tocscustomdimension"></a>

```json
{
  "index": 0,
  "value": "string"
}
```

Custom dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|Slot number of custom dimension.|
|value|string|false|none|Value of the custom dimension. Default value (i.e. empty string) indicates clearing sesion/visitor scope custom dimension value.|

<h2 id="tocS_DateRange">DateRange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "endDate": "string",
  "startDate": "string"
}
```

A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string|false|none|The end date for the query in the format `YYYY-MM-DD`.|
|startDate|string|false|none|The start date for the query in the format `YYYY-MM-DD`.|

<h2 id="tocS_DateRangeValues">DateRangeValues</h2>
<!-- backwards compatibility -->
<a id="schemadaterangevalues"></a>
<a id="schema_DateRangeValues"></a>
<a id="tocSdaterangevalues"></a>
<a id="tocsdaterangevalues"></a>

```json
{
  "pivotValueRegions": [
    {
      "values": [
        "string"
      ]
    }
  ],
  "values": [
    "string"
  ]
}
```

Used to return a list of metrics for a single DateRange / dimension combination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pivotValueRegions|[[PivotValueRegion](#schemapivotvalueregion)]|false|none|The values of each pivot region.|
|values|[string]|false|none|Each value corresponds to each Metric in the request.|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "histogramBuckets": [
    "string"
  ],
  "name": "string"
}
```

[Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histogramBuckets|[string(int64)]|false|none|If non-empty, we place dimension values into buckets after string to int64. Dimension values that are not the string representation of an integral value will be converted to zero. The bucket values have to be in increasing order. Each bucket is closed on the lower end, and open on the upper end. The "first" bucket includes all values less than the first boundary, the "last" bucket includes all values up to infinity. Dimension values that fall in a bucket get transformed to a new dimension value. For example, if one gives a list of "0, 1, 3, 4, 7", then we return the following buckets: - bucket #1: values < 0, dimension value "<0" - bucket #2: values in [0,1), dimension value "0" - bucket #3: values in [1,3), dimension value "1-2" - bucket #4: values in [3,4), dimension value "3" - bucket #5: values in [4,7), dimension value "4-6" - bucket #6: values >= 7, dimension value "7+" NOTE: If you are applying histogram mutation on any dimension, and using that dimension in sort, you will want to use the sort type `HISTOGRAM_BUCKET` for that purpose. Without that the dimension values will be sorted according to dictionary (lexicographic) order. For example the ascending dictionary order is: "<50", "1001+", "121-1000", "50-120" And the ascending `HISTOGRAM_BUCKET` order is: "<50", "50-120", "121-1000", "1001+" The client has to explicitly request `"orderType": "HISTOGRAM_BUCKET"` for a histogram-mutated dimension.|
|name|string|false|none|Name of the dimension to fetch, for example `ga:browser`.|

<h2 id="tocS_DimensionFilter">DimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfilter"></a>
<a id="schema_DimensionFilter"></a>
<a id="tocSdimensionfilter"></a>
<a id="tocsdimensionfilter"></a>

```json
{
  "caseSensitive": true,
  "dimensionName": "string",
  "expressions": [
    "string"
  ],
  "not": true,
  "operator": "OPERATOR_UNSPECIFIED"
}
```

Dimension filter specifies the filtering options on a dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|Should the match be case sensitive? Default is false.|
|dimensionName|string|false|none|The dimension to filter on. A DimensionFilter must contain a dimension.|
|expressions|[string]|false|none|Strings or regular expression to match against. Only the first value of the list is used for comparison unless the operator is `IN_LIST`. If `IN_LIST` operator, then the entire list is used to filter the dimensions as explained in the description of the `IN_LIST` operator.|
|not|boolean|false|none|Logical `NOT` operator. If this boolean is set to true, then the matching dimension values will be excluded in the report. The default is false.|
|operator|string|false|none|How to match the dimension to the expression. The default is REGEXP.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|REGEXP|
|operator|BEGINS_WITH|
|operator|ENDS_WITH|
|operator|PARTIAL|
|operator|EXACT|
|operator|NUMERIC_EQUAL|
|operator|NUMERIC_GREATER_THAN|
|operator|NUMERIC_LESS_THAN|
|operator|IN_LIST|

<h2 id="tocS_DimensionFilterClause">DimensionFilterClause</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfilterclause"></a>
<a id="schema_DimensionFilterClause"></a>
<a id="tocSdimensionfilterclause"></a>
<a id="tocsdimensionfilterclause"></a>

```json
{
  "filters": [
    {
      "caseSensitive": true,
      "dimensionName": "string",
      "expressions": [
        "string"
      ],
      "not": true,
      "operator": "OPERATOR_UNSPECIFIED"
    }
  ],
  "operator": "OPERATOR_UNSPECIFIED"
}
```

A group of dimension filters. Set the operator value to specify how the filters are logically combined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[DimensionFilter](#schemadimensionfilter)]|false|none|The repeated set of filters. They are logically combined based on the operator specified.|
|operator|string|false|none|The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|OR|
|operator|AND|

<h2 id="tocS_DynamicSegment">DynamicSegment</h2>
<!-- backwards compatibility -->
<a id="schemadynamicsegment"></a>
<a id="schema_DynamicSegment"></a>
<a id="tocSdynamicsegment"></a>
<a id="tocsdynamicsegment"></a>

```json
{
  "name": "string",
  "sessionSegment": {
    "segmentFilters": [
      {
        "not": true,
        "sequenceSegment": {
          "firstStepShouldMatchFirstHit": true,
          "segmentSequenceSteps": [
            {
              "matchType": "UNSPECIFIED_MATCH_TYPE",
              "orFiltersForSegment": [
                {
                  "segmentFilterClauses": [
                    {
                      "dimensionFilter": {
                        "caseSensitive": true,
                        "dimensionName": "string",
                        "expressions": [
                          "string"
                        ],
                        "maxComparisonValue": "string",
                        "minComparisonValue": "string",
                        "operator": "OPERATOR_UNSPECIFIED"
                      },
                      "metricFilter": {
                        "comparisonValue": "string",
                        "maxComparisonValue": "string",
                        "metricName": "string",
                        "operator": "UNSPECIFIED_OPERATOR",
                        "scope": "UNSPECIFIED_SCOPE"
                      },
                      "not": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        "simpleSegment": {
          "orFiltersForSegment": [
            {
              "segmentFilterClauses": [
                {
                  "dimensionFilter": {
                    "caseSensitive": true,
                    "dimensionName": "string",
                    "expressions": [
                      "string"
                    ],
                    "maxComparisonValue": "string",
                    "minComparisonValue": "string",
                    "operator": "OPERATOR_UNSPECIFIED"
                  },
                  "metricFilter": {
                    "comparisonValue": "string",
                    "maxComparisonValue": "string",
                    "metricName": "string",
                    "operator": "UNSPECIFIED_OPERATOR",
                    "scope": "UNSPECIFIED_SCOPE"
                  },
                  "not": true
                }
              ]
            }
          ]
        }
      }
    ]
  },
  "userSegment": {
    "segmentFilters": [
      {
        "not": true,
        "sequenceSegment": {
          "firstStepShouldMatchFirstHit": true,
          "segmentSequenceSteps": [
            {
              "matchType": "UNSPECIFIED_MATCH_TYPE",
              "orFiltersForSegment": [
                {
                  "segmentFilterClauses": [
                    {
                      "dimensionFilter": {
                        "caseSensitive": true,
                        "dimensionName": "string",
                        "expressions": [
                          "string"
                        ],
                        "maxComparisonValue": "string",
                        "minComparisonValue": "string",
                        "operator": "OPERATOR_UNSPECIFIED"
                      },
                      "metricFilter": {
                        "comparisonValue": "string",
                        "maxComparisonValue": "string",
                        "metricName": "string",
                        "operator": "UNSPECIFIED_OPERATOR",
                        "scope": "UNSPECIFIED_SCOPE"
                      },
                      "not": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        "simpleSegment": {
          "orFiltersForSegment": [
            {
              "segmentFilterClauses": [
                {
                  "dimensionFilter": {
                    "caseSensitive": true,
                    "dimensionName": "string",
                    "expressions": [
                      "string"
                    ],
                    "maxComparisonValue": "string",
                    "minComparisonValue": "string",
                    "operator": "OPERATOR_UNSPECIFIED"
                  },
                  "metricFilter": {
                    "comparisonValue": "string",
                    "maxComparisonValue": "string",
                    "metricName": "string",
                    "operator": "UNSPECIFIED_OPERATOR",
                    "scope": "UNSPECIFIED_SCOPE"
                  },
                  "not": true
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```

Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the dynamic segment.|
|sessionSegment|[SegmentDefinition](#schemasegmentdefinition)|false|none|Session Segment to select sessions to include in the segment.|
|userSegment|[SegmentDefinition](#schemasegmentdefinition)|false|none|User Segment to select users to include in the segment.|

<h2 id="tocS_EcommerceData">EcommerceData</h2>
<!-- backwards compatibility -->
<a id="schemaecommercedata"></a>
<a id="schema_EcommerceData"></a>
<a id="tocSecommercedata"></a>
<a id="tocsecommercedata"></a>

```json
{
  "actionType": "UNKNOWN",
  "ecommerceType": "ECOMMERCE_TYPE_UNSPECIFIED",
  "products": [
    {
      "itemRevenue": 0,
      "productName": "string",
      "productQuantity": "string",
      "productSku": "string"
    }
  ],
  "transaction": {
    "transactionId": "string",
    "transactionRevenue": 0,
    "transactionShipping": 0,
    "transactionTax": 0
  }
}
```

E-commerce details associated with the user activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|false|none|Action associated with this e-commerce action.|
|ecommerceType|string|false|none|The type of this e-commerce activity.|
|products|[[ProductData](#schemaproductdata)]|false|none|Details of the products in this transaction.|
|transaction|[TransactionData](#schematransactiondata)|false|none|Transaction details of this e-commerce action.|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|UNKNOWN|
|actionType|CLICK|
|actionType|DETAILS_VIEW|
|actionType|ADD_TO_CART|
|actionType|REMOVE_FROM_CART|
|actionType|CHECKOUT|
|actionType|PAYMENT|
|actionType|REFUND|
|actionType|CHECKOUT_OPTION|
|ecommerceType|ECOMMERCE_TYPE_UNSPECIFIED|
|ecommerceType|CLASSIC|
|ecommerceType|ENHANCED|

<h2 id="tocS_EventData">EventData</h2>
<!-- backwards compatibility -->
<a id="schemaeventdata"></a>
<a id="schema_EventData"></a>
<a id="tocSeventdata"></a>
<a id="tocseventdata"></a>

```json
{
  "eventAction": "string",
  "eventCategory": "string",
  "eventCount": "string",
  "eventLabel": "string",
  "eventValue": "string"
}
```

Represents all the details pertaining to an event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventAction|string|false|none|Type of interaction with the object. Eg: 'play'.|
|eventCategory|string|false|none|The object on the page that was interacted with. Eg: 'Video'.|
|eventCount|string(int64)|false|none|Number of such events in this activity.|
|eventLabel|string|false|none|Label attached with the event.|
|eventValue|string(int64)|false|none|Numeric value associated with the event.|

<h2 id="tocS_GetReportsRequest">GetReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreportsrequest"></a>
<a id="schema_GetReportsRequest"></a>
<a id="tocSgetreportsrequest"></a>
<a id="tocsgetreportsrequest"></a>

```json
{
  "reportRequests": [
    {
      "cohortGroup": {
        "cohorts": [
          {
            "dateRange": {
              "endDate": "string",
              "startDate": "string"
            },
            "name": "string",
            "type": "UNSPECIFIED_COHORT_TYPE"
          }
        ],
        "lifetimeValue": true
      },
      "dateRanges": [
        {
          "endDate": "string",
          "startDate": "string"
        }
      ],
      "dimensionFilterClauses": [
        {
          "filters": [
            {
              "caseSensitive": true,
              "dimensionName": "string",
              "expressions": [
                "string"
              ],
              "not": true,
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "dimensions": [
        {
          "histogramBuckets": [
            "string"
          ],
          "name": "string"
        }
      ],
      "filtersExpression": "string",
      "hideTotals": true,
      "hideValueRanges": true,
      "includeEmptyRows": true,
      "metricFilterClauses": [
        {
          "filters": [
            {
              "comparisonValue": "string",
              "metricName": "string",
              "not": true,
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "metrics": [
        {
          "alias": "string",
          "expression": "string",
          "formattingType": "METRIC_TYPE_UNSPECIFIED"
        }
      ],
      "orderBys": [
        {
          "fieldName": "string",
          "orderType": "ORDER_TYPE_UNSPECIFIED",
          "sortOrder": "SORT_ORDER_UNSPECIFIED"
        }
      ],
      "pageSize": 0,
      "pageToken": "string",
      "pivots": [
        {
          "dimensionFilterClauses": [
            {
              "filters": [
                {
                  "caseSensitive": true,
                  "dimensionName": "string",
                  "expressions": [
                    "string"
                  ],
                  "not": true,
                  "operator": "OPERATOR_UNSPECIFIED"
                }
              ],
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "dimensions": [
            {
              "histogramBuckets": [
                "string"
              ],
              "name": "string"
            }
          ],
          "maxGroupCount": 0,
          "metrics": [
            {
              "alias": "string",
              "expression": "string",
              "formattingType": "METRIC_TYPE_UNSPECIFIED"
            }
          ],
          "startGroup": 0
        }
      ],
      "samplingLevel": "SAMPLING_UNSPECIFIED",
      "segments": [
        {
          "dynamicSegment": {
            "name": "string",
            "sessionSegment": {
              "segmentFilters": [
                {
                  "not": true,
                  "sequenceSegment": {
                    "firstStepShouldMatchFirstHit": true,
                    "segmentSequenceSteps": [
                      {
                        "matchType": "UNSPECIFIED_MATCH_TYPE",
                        "orFiltersForSegment": [
                          {
                            "segmentFilterClauses": [
                              {
                                "dimensionFilter": {
                                  "caseSensitive": true,
                                  "dimensionName": "string",
                                  "expressions": [
                                    "string"
                                  ],
                                  "maxComparisonValue": "string",
                                  "minComparisonValue": "string",
                                  "operator": "OPERATOR_UNSPECIFIED"
                                },
                                "metricFilter": {
                                  "comparisonValue": "string",
                                  "maxComparisonValue": "string",
                                  "metricName": "string",
                                  "operator": "UNSPECIFIED_OPERATOR",
                                  "scope": "UNSPECIFIED_SCOPE"
                                },
                                "not": true
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "simpleSegment": {
                    "orFiltersForSegment": [
                      {
                        "segmentFilterClauses": [
                          {
                            "dimensionFilter": {
                              "caseSensitive": true,
                              "dimensionName": "string",
                              "expressions": [
                                "string"
                              ],
                              "maxComparisonValue": "string",
                              "minComparisonValue": "string",
                              "operator": "OPERATOR_UNSPECIFIED"
                            },
                            "metricFilter": {
                              "comparisonValue": "string",
                              "maxComparisonValue": "string",
                              "metricName": "string",
                              "operator": "UNSPECIFIED_OPERATOR",
                              "scope": "UNSPECIFIED_SCOPE"
                            },
                            "not": true
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "userSegment": {
              "segmentFilters": [
                {
                  "not": true,
                  "sequenceSegment": {
                    "firstStepShouldMatchFirstHit": true,
                    "segmentSequenceSteps": [
                      {
                        "matchType": "UNSPECIFIED_MATCH_TYPE",
                        "orFiltersForSegment": [
                          {
                            "segmentFilterClauses": [
                              {
                                "dimensionFilter": {
                                  "caseSensitive": true,
                                  "dimensionName": "string",
                                  "expressions": [
                                    "string"
                                  ],
                                  "maxComparisonValue": "string",
                                  "minComparisonValue": "string",
                                  "operator": "OPERATOR_UNSPECIFIED"
                                },
                                "metricFilter": {
                                  "comparisonValue": "string",
                                  "maxComparisonValue": "string",
                                  "metricName": "string",
                                  "operator": "UNSPECIFIED_OPERATOR",
                                  "scope": "UNSPECIFIED_SCOPE"
                                },
                                "not": true
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "simpleSegment": {
                    "orFiltersForSegment": [
                      {
                        "segmentFilterClauses": [
                          {
                            "dimensionFilter": {
                              "caseSensitive": true,
                              "dimensionName": "string",
                              "expressions": [
                                "string"
                              ],
                              "maxComparisonValue": "string",
                              "minComparisonValue": "string",
                              "operator": "OPERATOR_UNSPECIFIED"
                            },
                            "metricFilter": {
                              "comparisonValue": "string",
                              "maxComparisonValue": "string",
                              "metricName": "string",
                              "operator": "UNSPECIFIED_OPERATOR",
                              "scope": "UNSPECIFIED_SCOPE"
                            },
                            "not": true
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          },
          "segmentId": "string"
        }
      ],
      "viewId": "string"
    }
  ],
  "useResourceQuotas": true
}
```

The batch request containing multiple report request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportRequests|[[ReportRequest](#schemareportrequest)]|false|none|Requests, each request will have a separate response. There can be a maximum of 5 requests. All requests should have the same `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.|
|useResourceQuotas|boolean|false|none|Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to `False`). If this field is set to `True` the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details.|

<h2 id="tocS_GetReportsResponse">GetReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreportsresponse"></a>
<a id="schema_GetReportsResponse"></a>
<a id="tocSgetreportsresponse"></a>
<a id="tocsgetreportsresponse"></a>

```json
{
  "queryCost": 0,
  "reports": [
    {
      "columnHeader": {
        "dimensions": [
          "string"
        ],
        "metricHeader": {
          "metricHeaderEntries": [
            {
              "name": "string",
              "type": "METRIC_TYPE_UNSPECIFIED"
            }
          ],
          "pivotHeaders": [
            {
              "pivotHeaderEntries": [
                {
                  "dimensionNames": [
                    "string"
                  ],
                  "dimensionValues": [
                    "string"
                  ],
                  "metric": {
                    "name": "string",
                    "type": "METRIC_TYPE_UNSPECIFIED"
                  }
                }
              ],
              "totalPivotGroupsCount": 0
            }
          ]
        }
      },
      "data": {
        "dataLastRefreshed": "string",
        "emptyReason": "string",
        "isDataGolden": true,
        "maximums": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ],
        "minimums": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ],
        "rowCount": 0,
        "rows": [
          {
            "dimensions": [
              "string"
            ],
            "metrics": [
              {
                "pivotValueRegions": [
                  {
                    "values": [
                      "string"
                    ]
                  }
                ],
                "values": [
                  "string"
                ]
              }
            ]
          }
        ],
        "samplesReadCounts": [
          "string"
        ],
        "samplingSpaceSizes": [
          "string"
        ],
        "totals": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ]
      },
      "nextPageToken": "string"
    }
  ],
  "resourceQuotasRemaining": {
    "dailyQuotaTokensRemaining": 0,
    "hourlyQuotaTokensRemaining": 0
  }
}
```

The main response class which holds the reports from the Reporting API `batchGet` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryCost|integer(int32)|false|none|The amount of resource quota tokens deducted to execute the query. Includes all responses.|
|reports|[[Report](#schemareport)]|false|none|Responses corresponding to each of the request.|
|resourceQuotasRemaining|[ResourceQuotasRemaining](#schemaresourcequotasremaining)|false|none|The amount of resource quota remaining for the property.|

<h2 id="tocS_GoalData">GoalData</h2>
<!-- backwards compatibility -->
<a id="schemagoaldata"></a>
<a id="schema_GoalData"></a>
<a id="tocSgoaldata"></a>
<a id="tocsgoaldata"></a>

```json
{
  "goalCompletionLocation": "string",
  "goalCompletions": "string",
  "goalIndex": 0,
  "goalName": "string",
  "goalPreviousStep1": "string",
  "goalPreviousStep2": "string",
  "goalPreviousStep3": "string",
  "goalValue": 0
}
```

Represents all the details pertaining to a goal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goalCompletionLocation|string|false|none|URL of the page where this goal was completed.|
|goalCompletions|string(int64)|false|none|Total number of goal completions in this activity.|
|goalIndex|integer(int32)|false|none|This identifies the goal as configured for the profile.|
|goalName|string|false|none|Name of the goal.|
|goalPreviousStep1|string|false|none|URL of the page one step prior to the goal completion.|
|goalPreviousStep2|string|false|none|URL of the page two steps prior to the goal completion.|
|goalPreviousStep3|string|false|none|URL of the page three steps prior to the goal completion.|
|goalValue|number(double)|false|none|Value in this goal.|

<h2 id="tocS_GoalSetData">GoalSetData</h2>
<!-- backwards compatibility -->
<a id="schemagoalsetdata"></a>
<a id="schema_GoalSetData"></a>
<a id="tocSgoalsetdata"></a>
<a id="tocsgoalsetdata"></a>

```json
{
  "goals": [
    {
      "goalCompletionLocation": "string",
      "goalCompletions": "string",
      "goalIndex": 0,
      "goalName": "string",
      "goalPreviousStep1": "string",
      "goalPreviousStep2": "string",
      "goalPreviousStep3": "string",
      "goalValue": 0
    }
  ]
}
```

Represents a set of goals that were reached in an activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goals|[[GoalData](#schemagoaldata)]|false|none|All the goals that were reached in the current activity.|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "alias": "string",
  "expression": "string",
  "formattingType": "METRIC_TYPE_UNSPECIFIED"
}
```

[Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|An alias for the metric expression is an alternate name for the expression. The alias can be used for filtering and sorting. This field is optional and is useful if the expression is not a single metric but a complex expression which cannot be used in filtering and sorting. The alias is also used in the response column header.|
|expression|string|false|none|A metric expression in the request. An expression is constructed from one or more metrics and numbers. Accepted operators include: Plus (+), Minus (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis, Positive cardinal numbers (0-9), can include decimals and is limited to 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the metric expression is just a single metric name like `ga:users`. Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics will result in unexpected results.|
|formattingType|string|false|none|Specifies how the metric expression should be formatted, for example `INTEGER`.|

#### Enumerated Values

|Property|Value|
|---|---|
|formattingType|METRIC_TYPE_UNSPECIFIED|
|formattingType|INTEGER|
|formattingType|FLOAT|
|formattingType|CURRENCY|
|formattingType|PERCENT|
|formattingType|TIME|

<h2 id="tocS_MetricFilter">MetricFilter</h2>
<!-- backwards compatibility -->
<a id="schemametricfilter"></a>
<a id="schema_MetricFilter"></a>
<a id="tocSmetricfilter"></a>
<a id="tocsmetricfilter"></a>

```json
{
  "comparisonValue": "string",
  "metricName": "string",
  "not": true,
  "operator": "OPERATOR_UNSPECIFIED"
}
```

MetricFilter specifies the filter on a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonValue|string|false|none|The value to compare against.|
|metricName|string|false|none|The metric that will be filtered on. A metricFilter must contain a metric name. A metric name can be an alias earlier defined as a metric or it can also be a metric expression.|
|not|boolean|false|none|Logical `NOT` operator. If this boolean is set to true, then the matching metric values will be excluded in the report. The default is false.|
|operator|string|false|none|Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue, the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the metric is missing and would ignore the comparisonValue.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|EQUAL|
|operator|LESS_THAN|
|operator|GREATER_THAN|
|operator|IS_MISSING|

<h2 id="tocS_MetricFilterClause">MetricFilterClause</h2>
<!-- backwards compatibility -->
<a id="schemametricfilterclause"></a>
<a id="schema_MetricFilterClause"></a>
<a id="tocSmetricfilterclause"></a>
<a id="tocsmetricfilterclause"></a>

```json
{
  "filters": [
    {
      "comparisonValue": "string",
      "metricName": "string",
      "not": true,
      "operator": "OPERATOR_UNSPECIFIED"
    }
  ],
  "operator": "OPERATOR_UNSPECIFIED"
}
```

Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[MetricFilter](#schemametricfilter)]|false|none|The repeated set of filters. They are logically combined based on the operator specified.|
|operator|string|false|none|The operator for combining multiple metric filters. If unspecified, it is treated as an `OR`.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|OR|
|operator|AND|

<h2 id="tocS_MetricHeader">MetricHeader</h2>
<!-- backwards compatibility -->
<a id="schemametricheader"></a>
<a id="schema_MetricHeader"></a>
<a id="tocSmetricheader"></a>
<a id="tocsmetricheader"></a>

```json
{
  "metricHeaderEntries": [
    {
      "name": "string",
      "type": "METRIC_TYPE_UNSPECIFIED"
    }
  ],
  "pivotHeaders": [
    {
      "pivotHeaderEntries": [
        {
          "dimensionNames": [
            "string"
          ],
          "dimensionValues": [
            "string"
          ],
          "metric": {
            "name": "string",
            "type": "METRIC_TYPE_UNSPECIFIED"
          }
        }
      ],
      "totalPivotGroupsCount": 0
    }
  ]
}
```

The headers for the metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricHeaderEntries|[[MetricHeaderEntry](#schemametricheaderentry)]|false|none|Headers for the metrics in the response.|
|pivotHeaders|[[PivotHeader](#schemapivotheader)]|false|none|Headers for the pivots in the response.|

<h2 id="tocS_MetricHeaderEntry">MetricHeaderEntry</h2>
<!-- backwards compatibility -->
<a id="schemametricheaderentry"></a>
<a id="schema_MetricHeaderEntry"></a>
<a id="tocSmetricheaderentry"></a>
<a id="tocsmetricheaderentry"></a>

```json
{
  "name": "string",
  "type": "METRIC_TYPE_UNSPECIFIED"
}
```

Header for the metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the header.|
|type|string|false|none|The type of the metric, for example `INTEGER`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|METRIC_TYPE_UNSPECIFIED|
|type|INTEGER|
|type|FLOAT|
|type|CURRENCY|
|type|PERCENT|
|type|TIME|

<h2 id="tocS_OrFiltersForSegment">OrFiltersForSegment</h2>
<!-- backwards compatibility -->
<a id="schemaorfiltersforsegment"></a>
<a id="schema_OrFiltersForSegment"></a>
<a id="tocSorfiltersforsegment"></a>
<a id="tocsorfiltersforsegment"></a>

```json
{
  "segmentFilterClauses": [
    {
      "dimensionFilter": {
        "caseSensitive": true,
        "dimensionName": "string",
        "expressions": [
          "string"
        ],
        "maxComparisonValue": "string",
        "minComparisonValue": "string",
        "operator": "OPERATOR_UNSPECIFIED"
      },
      "metricFilter": {
        "comparisonValue": "string",
        "maxComparisonValue": "string",
        "metricName": "string",
        "operator": "UNSPECIFIED_OPERATOR",
        "scope": "UNSPECIFIED_SCOPE"
      },
      "not": true
    }
  ]
}
```

A list of segment filters in the `OR` group are combined with the logical OR operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segmentFilterClauses|[[SegmentFilterClause](#schemasegmentfilterclause)]|false|none|List of segment filters to be combined with a `OR` operator.|

<h2 id="tocS_OrderBy">OrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaorderby"></a>
<a id="schema_OrderBy"></a>
<a id="tocSorderby"></a>
<a id="tocsorderby"></a>

```json
{
  "fieldName": "string",
  "orderType": "ORDER_TYPE_UNSPECIFIED",
  "sortOrder": "SORT_ORDER_UNSPECIFIED"
}
```

Specifies the sorting options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|The field which to sort by. The default sort order is ascending. Example: `ga:browser`. Note, that you can only specify one field for sort here. For example, `ga:browser, ga:city` is not valid.|
|orderType|string|false|none|The order type. The default orderType is `VALUE`.|
|sortOrder|string|false|none|The sorting order for the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|orderType|ORDER_TYPE_UNSPECIFIED|
|orderType|VALUE|
|orderType|DELTA|
|orderType|SMART|
|orderType|HISTOGRAM_BUCKET|
|orderType|DIMENSION_AS_INTEGER|
|sortOrder|SORT_ORDER_UNSPECIFIED|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|

<h2 id="tocS_PageviewData">PageviewData</h2>
<!-- backwards compatibility -->
<a id="schemapageviewdata"></a>
<a id="schema_PageviewData"></a>
<a id="tocSpageviewdata"></a>
<a id="tocspageviewdata"></a>

```json
{
  "pagePath": "string",
  "pageTitle": "string"
}
```

Represents details collected when the visitor views a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagePath|string|false|none|The URL of the page that the visitor viewed.|
|pageTitle|string|false|none|The title of the page that the visitor viewed.|

<h2 id="tocS_Pivot">Pivot</h2>
<!-- backwards compatibility -->
<a id="schemapivot"></a>
<a id="schema_Pivot"></a>
<a id="tocSpivot"></a>
<a id="tocspivot"></a>

```json
{
  "dimensionFilterClauses": [
    {
      "filters": [
        {
          "caseSensitive": true,
          "dimensionName": "string",
          "expressions": [
            "string"
          ],
          "not": true,
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "operator": "OPERATOR_UNSPECIFIED"
    }
  ],
  "dimensions": [
    {
      "histogramBuckets": [
        "string"
      ],
      "name": "string"
    }
  ],
  "maxGroupCount": 0,
  "metrics": [
    {
      "alias": "string",
      "expression": "string",
      "formattingType": "METRIC_TYPE_UNSPECIFIED"
    }
  ],
  "startGroup": 0
}
```

The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionFilterClauses|[[DimensionFilterClause](#schemadimensionfilterclause)]|false|none|DimensionFilterClauses are logically combined with an `AND` operator: only data that is included by all these DimensionFilterClauses contributes to the values in this pivot region. Dimension filters can be used to restrict the columns shown in the pivot region. For example if you have `ga:browser` as the requested dimension in the pivot region, and you specify key filters to restrict `ga:browser` to only "IE" or "Firefox", then only those two browsers would show up as columns.|
|dimensions|[[Dimension](#schemadimension)]|false|none|A list of dimensions to show as pivot columns. A Pivot can have a maximum of 4 dimensions. Pivot dimensions are part of the restriction on the total number of dimensions allowed in the request.|
|maxGroupCount|integer(int32)|false|none|Specifies the maximum number of groups to return. The default value is 10, also the maximum value is 1,000.|
|metrics|[[Metric](#schemametric)]|false|none|The pivot metrics. Pivot metrics are part of the restriction on total number of metrics allowed in the request.|
|startGroup|integer(int32)|false|none|If k metrics were requested, then the response will contain some data-dependent multiple of k columns in the report. E.g., if you pivoted on the dimension `ga:browser` then you'd get k columns for "Firefox", k columns for "IE", k columns for "Chrome", etc. The ordering of the groups of columns is determined by descending order of "total" for the first of the k values. Ties are broken by lexicographic ordering of the first pivot dimension, then lexicographic ordering of the second pivot dimension, and so on. E.g., if the totals for the first value for Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns would be Chrome, Firefox, IE. The following let you choose which of the groups of k columns are included in the response.|

<h2 id="tocS_PivotHeader">PivotHeader</h2>
<!-- backwards compatibility -->
<a id="schemapivotheader"></a>
<a id="schema_PivotHeader"></a>
<a id="tocSpivotheader"></a>
<a id="tocspivotheader"></a>

```json
{
  "pivotHeaderEntries": [
    {
      "dimensionNames": [
        "string"
      ],
      "dimensionValues": [
        "string"
      ],
      "metric": {
        "name": "string",
        "type": "METRIC_TYPE_UNSPECIFIED"
      }
    }
  ],
  "totalPivotGroupsCount": 0
}
```

The headers for each of the pivot sections defined in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pivotHeaderEntries|[[PivotHeaderEntry](#schemapivotheaderentry)]|false|none|A single pivot section header.|
|totalPivotGroupsCount|integer(int32)|false|none|The total number of groups for this pivot.|

<h2 id="tocS_PivotHeaderEntry">PivotHeaderEntry</h2>
<!-- backwards compatibility -->
<a id="schemapivotheaderentry"></a>
<a id="schema_PivotHeaderEntry"></a>
<a id="tocSpivotheaderentry"></a>
<a id="tocspivotheaderentry"></a>

```json
{
  "dimensionNames": [
    "string"
  ],
  "dimensionValues": [
    "string"
  ],
  "metric": {
    "name": "string",
    "type": "METRIC_TYPE_UNSPECIFIED"
  }
}
```

The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionNames|[string]|false|none|The name of the dimensions in the pivot response.|
|dimensionValues|[string]|false|none|The values for the dimensions in the pivot.|
|metric|[MetricHeaderEntry](#schemametricheaderentry)|false|none|The metric header for the metric in the pivot.|

<h2 id="tocS_PivotValueRegion">PivotValueRegion</h2>
<!-- backwards compatibility -->
<a id="schemapivotvalueregion"></a>
<a id="schema_PivotValueRegion"></a>
<a id="tocSpivotvalueregion"></a>
<a id="tocspivotvalueregion"></a>

```json
{
  "values": [
    "string"
  ]
}
```

The metric values in the pivot region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|The values of the metrics in each of the pivot regions.|

<h2 id="tocS_ProductData">ProductData</h2>
<!-- backwards compatibility -->
<a id="schemaproductdata"></a>
<a id="schema_ProductData"></a>
<a id="tocSproductdata"></a>
<a id="tocsproductdata"></a>

```json
{
  "itemRevenue": 0,
  "productName": "string",
  "productQuantity": "string",
  "productSku": "string"
}
```

Details of the products in an e-commerce transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemRevenue|number(double)|false|none|The total revenue from purchased product items.|
|productName|string|false|none|The product name, supplied by the e-commerce tracking application, for the purchased items.|
|productQuantity|string(int64)|false|none|Total number of this product units in the transaction.|
|productSku|string|false|none|Unique code that represents the product.|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "columnHeader": {
    "dimensions": [
      "string"
    ],
    "metricHeader": {
      "metricHeaderEntries": [
        {
          "name": "string",
          "type": "METRIC_TYPE_UNSPECIFIED"
        }
      ],
      "pivotHeaders": [
        {
          "pivotHeaderEntries": [
            {
              "dimensionNames": [
                "string"
              ],
              "dimensionValues": [
                "string"
              ],
              "metric": {
                "name": "string",
                "type": "METRIC_TYPE_UNSPECIFIED"
              }
            }
          ],
          "totalPivotGroupsCount": 0
        }
      ]
    }
  },
  "data": {
    "dataLastRefreshed": "string",
    "emptyReason": "string",
    "isDataGolden": true,
    "maximums": [
      {
        "pivotValueRegions": [
          {
            "values": [
              "string"
            ]
          }
        ],
        "values": [
          "string"
        ]
      }
    ],
    "minimums": [
      {
        "pivotValueRegions": [
          {
            "values": [
              "string"
            ]
          }
        ],
        "values": [
          "string"
        ]
      }
    ],
    "rowCount": 0,
    "rows": [
      {
        "dimensions": [
          "string"
        ],
        "metrics": [
          {
            "pivotValueRegions": [
              {
                "values": [
                  "string"
                ]
              }
            ],
            "values": [
              "string"
            ]
          }
        ]
      }
    ],
    "samplesReadCounts": [
      "string"
    ],
    "samplingSpaceSizes": [
      "string"
    ],
    "totals": [
      {
        "pivotValueRegions": [
          {
            "values": [
              "string"
            ]
          }
        ],
        "values": [
          "string"
        ]
      }
    ]
  },
  "nextPageToken": "string"
}
```

The data response corresponding to the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnHeader|[ColumnHeader](#schemacolumnheader)|false|none|The column headers.|
|data|[ReportData](#schemareportdata)|false|none|Response data.|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list.|

<h2 id="tocS_ReportData">ReportData</h2>
<!-- backwards compatibility -->
<a id="schemareportdata"></a>
<a id="schema_ReportData"></a>
<a id="tocSreportdata"></a>
<a id="tocsreportdata"></a>

```json
{
  "dataLastRefreshed": "string",
  "emptyReason": "string",
  "isDataGolden": true,
  "maximums": [
    {
      "pivotValueRegions": [
        {
          "values": [
            "string"
          ]
        }
      ],
      "values": [
        "string"
      ]
    }
  ],
  "minimums": [
    {
      "pivotValueRegions": [
        {
          "values": [
            "string"
          ]
        }
      ],
      "values": [
        "string"
      ]
    }
  ],
  "rowCount": 0,
  "rows": [
    {
      "dimensions": [
        "string"
      ],
      "metrics": [
        {
          "pivotValueRegions": [
            {
              "values": [
                "string"
              ]
            }
          ],
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "samplesReadCounts": [
    "string"
  ],
  "samplingSpaceSizes": [
    "string"
  ],
  "totals": [
    {
      "pivotValueRegions": [
        {
          "values": [
            "string"
          ]
        }
      ],
      "values": [
        "string"
      ]
    }
  ]
}
```

The data part of the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataLastRefreshed|string(google-datetime)|false|none|The last time the data in the report was refreshed. All the hits received before this timestamp are included in the calculation of the report.|
|emptyReason|string|false|none|If empty reason is specified, the report is empty for this reason.|
|isDataGolden|boolean|false|none|Indicates if response to this request is golden or not. Data is golden when the exact same request will not produce any new results if asked at a later point in time.|
|maximums|[[DateRangeValues](#schemadaterangevalues)]|false|none|Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero.|
|minimums|[[DateRangeValues](#schemadaterangevalues)]|false|none|Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero.|
|rowCount|integer(int32)|false|none|Total number of matching rows for this query.|
|rows|[[ReportRow](#schemareportrow)]|false|none|There's one ReportRow for every unique combination of dimensions.|
|samplesReadCounts|[string(int64)]|false|none|If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples read, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.|
|samplingSpaceSizes|[string(int64)]|false|none|If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples present, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.|
|totals|[[DateRangeValues](#schemadaterangevalues)]|false|none|For each requested date range, for the set of all rows that match the query, every requested value format gets a total. The total for a value format is computed by first totaling the metrics mentioned in the value format and then evaluating the value format as a scalar expression. E.g., The "totals" for `3 / (ga:sessions + 2)` we compute `3 / ((sum of all relevant ga:sessions) + 2)`. Totals are computed before pagination.|

<h2 id="tocS_ReportRequest">ReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportrequest"></a>
<a id="schema_ReportRequest"></a>
<a id="tocSreportrequest"></a>
<a id="tocsreportrequest"></a>

```json
{
  "cohortGroup": {
    "cohorts": [
      {
        "dateRange": {
          "endDate": "string",
          "startDate": "string"
        },
        "name": "string",
        "type": "UNSPECIFIED_COHORT_TYPE"
      }
    ],
    "lifetimeValue": true
  },
  "dateRanges": [
    {
      "endDate": "string",
      "startDate": "string"
    }
  ],
  "dimensionFilterClauses": [
    {
      "filters": [
        {
          "caseSensitive": true,
          "dimensionName": "string",
          "expressions": [
            "string"
          ],
          "not": true,
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "operator": "OPERATOR_UNSPECIFIED"
    }
  ],
  "dimensions": [
    {
      "histogramBuckets": [
        "string"
      ],
      "name": "string"
    }
  ],
  "filtersExpression": "string",
  "hideTotals": true,
  "hideValueRanges": true,
  "includeEmptyRows": true,
  "metricFilterClauses": [
    {
      "filters": [
        {
          "comparisonValue": "string",
          "metricName": "string",
          "not": true,
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "operator": "OPERATOR_UNSPECIFIED"
    }
  ],
  "metrics": [
    {
      "alias": "string",
      "expression": "string",
      "formattingType": "METRIC_TYPE_UNSPECIFIED"
    }
  ],
  "orderBys": [
    {
      "fieldName": "string",
      "orderType": "ORDER_TYPE_UNSPECIFIED",
      "sortOrder": "SORT_ORDER_UNSPECIFIED"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "pivots": [
    {
      "dimensionFilterClauses": [
        {
          "filters": [
            {
              "caseSensitive": true,
              "dimensionName": "string",
              "expressions": [
                "string"
              ],
              "not": true,
              "operator": "OPERATOR_UNSPECIFIED"
            }
          ],
          "operator": "OPERATOR_UNSPECIFIED"
        }
      ],
      "dimensions": [
        {
          "histogramBuckets": [
            "string"
          ],
          "name": "string"
        }
      ],
      "maxGroupCount": 0,
      "metrics": [
        {
          "alias": "string",
          "expression": "string",
          "formattingType": "METRIC_TYPE_UNSPECIFIED"
        }
      ],
      "startGroup": 0
    }
  ],
  "samplingLevel": "SAMPLING_UNSPECIFIED",
  "segments": [
    {
      "dynamicSegment": {
        "name": "string",
        "sessionSegment": {
          "segmentFilters": [
            {
              "not": true,
              "sequenceSegment": {
                "firstStepShouldMatchFirstHit": true,
                "segmentSequenceSteps": [
                  {
                    "matchType": "UNSPECIFIED_MATCH_TYPE",
                    "orFiltersForSegment": [
                      {
                        "segmentFilterClauses": [
                          {
                            "dimensionFilter": {
                              "caseSensitive": true,
                              "dimensionName": "string",
                              "expressions": [
                                "string"
                              ],
                              "maxComparisonValue": "string",
                              "minComparisonValue": "string",
                              "operator": "OPERATOR_UNSPECIFIED"
                            },
                            "metricFilter": {
                              "comparisonValue": "string",
                              "maxComparisonValue": "string",
                              "metricName": "string",
                              "operator": "UNSPECIFIED_OPERATOR",
                              "scope": "UNSPECIFIED_SCOPE"
                            },
                            "not": true
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "simpleSegment": {
                "orFiltersForSegment": [
                  {
                    "segmentFilterClauses": [
                      {
                        "dimensionFilter": {
                          "caseSensitive": true,
                          "dimensionName": "string",
                          "expressions": [
                            "string"
                          ],
                          "maxComparisonValue": "string",
                          "minComparisonValue": "string",
                          "operator": "OPERATOR_UNSPECIFIED"
                        },
                        "metricFilter": {
                          "comparisonValue": "string",
                          "maxComparisonValue": "string",
                          "metricName": "string",
                          "operator": "UNSPECIFIED_OPERATOR",
                          "scope": "UNSPECIFIED_SCOPE"
                        },
                        "not": true
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "userSegment": {
          "segmentFilters": [
            {
              "not": true,
              "sequenceSegment": {
                "firstStepShouldMatchFirstHit": true,
                "segmentSequenceSteps": [
                  {
                    "matchType": "UNSPECIFIED_MATCH_TYPE",
                    "orFiltersForSegment": [
                      {
                        "segmentFilterClauses": [
                          {
                            "dimensionFilter": {
                              "caseSensitive": true,
                              "dimensionName": "string",
                              "expressions": [
                                "string"
                              ],
                              "maxComparisonValue": "string",
                              "minComparisonValue": "string",
                              "operator": "OPERATOR_UNSPECIFIED"
                            },
                            "metricFilter": {
                              "comparisonValue": "string",
                              "maxComparisonValue": "string",
                              "metricName": "string",
                              "operator": "UNSPECIFIED_OPERATOR",
                              "scope": "UNSPECIFIED_SCOPE"
                            },
                            "not": true
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "simpleSegment": {
                "orFiltersForSegment": [
                  {
                    "segmentFilterClauses": [
                      {
                        "dimensionFilter": {
                          "caseSensitive": true,
                          "dimensionName": "string",
                          "expressions": [
                            "string"
                          ],
                          "maxComparisonValue": "string",
                          "minComparisonValue": "string",
                          "operator": "OPERATOR_UNSPECIFIED"
                        },
                        "metricFilter": {
                          "comparisonValue": "string",
                          "maxComparisonValue": "string",
                          "metricName": "string",
                          "operator": "UNSPECIFIED_OPERATOR",
                          "scope": "UNSPECIFIED_SCOPE"
                        },
                        "not": true
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      "segmentId": "string"
    }
  ],
  "viewId": "string"
}
```

The main request class which specifies the Reporting API request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cohortGroup|[CohortGroup](#schemacohortgroup)|false|none|Cohort group associated with this request. If there is a cohort group in the request the `ga:cohort` dimension must be present. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `cohortGroup` definition.|
|dateRanges|[[DateRange](#schemadaterange)]|false|none|Date ranges in the request. The request can have a maximum of 2 date ranges. The response will contain a set of metric values for each combination of the dimensions for each date range in the request. So, if there are two date ranges, there will be two set of metric values, one for the original date range and one for the second date range. The `reportRequest.dateRanges` field should not be specified for cohorts or Lifetime value requests. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day). Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `dateRanges` definition.|
|dimensionFilterClauses|[[DimensionFilterClause](#schemadimensionfilterclause)]|false|none|The dimension filter clauses for filtering Dimension Values. They are logically combined with the `AND` operator. Note that filtering occurs before any dimensions are aggregated, so that the returned metrics represent the total for only the relevant dimensions.|
|dimensions|[[Dimension](#schemadimension)]|false|none|The dimensions requested. Requests can have a total of 9 dimensions.|
|filtersExpression|string|false|none|Dimension or metric filters that restrict the data returned for your request. To use the `filtersExpression`, supply a dimension or metric on which to filter, followed by the filter expression. For example, the following expression selects `ga:browser` dimension which starts with Firefox; `ga:browser=~^Firefox`. For more information on dimensions and metric filters, see [Filters reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters).|
|hideTotals|boolean|false|none|If set to true, hides the total of all metrics for all the matching rows, for every date range. The default false and will return the totals.|
|hideValueRanges|boolean|false|none|If set to true, hides the minimum and maximum across all matching rows. The default is false and the value ranges are returned.|
|includeEmptyRows|boolean|false|none|If set to false, the response does not include rows if all the retrieved metrics are equal to zero. The default is false which will exclude these rows.|
|metricFilterClauses|[[MetricFilterClause](#schemametricfilterclause)]|false|none|The metric filter clauses. They are logically combined with the `AND` operator. Metric filters look at only the first date range and not the comparing date range. Note that filtering on metrics occurs after the metrics are aggregated.|
|metrics|[[Metric](#schemametric)]|false|none|The metrics requested. Requests must specify at least one metric. Requests can have a total of 10 metrics.|
|orderBys|[[OrderBy](#schemaorderby)]|false|none|Sort order on output rows. To compare two rows, the elements of the following are applied in order until a difference is found. All date ranges in the output get the same row order.|
|pageSize|integer(int32)|false|none|Page size is for paging and specifies the maximum number of returned rows. Page size should be >= 0. A query returns the default of 1,000 rows. The Analytics Core Reporting API returns a maximum of 100,000 rows per request, no matter how many you ask for. It can also return fewer rows than requested, if there aren't as many dimension segments as you expect. For instance, there are fewer than 300 possible values for `ga:country`, so when segmenting only by country, you can't get more than 300 rows, even if you set `pageSize` to a higher value.|
|pageToken|string|false|none|A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the GetReports request.|
|pivots|[[Pivot](#schemapivot)]|false|none|The pivot definitions. Requests can have a maximum of 2 pivots.|
|samplingLevel|string|false|none|The desired report [sample](https://support.google.com/analytics/answer/2637192) size. If the the `samplingLevel` field is unspecified the `DEFAULT` sampling level is used. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `samplingLevel` definition. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.|
|segments|[[Segment](#schemasegment)]|false|none|Segment the data returned for the request. A segment definition helps look at a subset of the segment request. A request can contain up to four segments. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `segments` definition. Requests with segments must have the `ga:segment` dimension.|
|viewId|string|false|none|The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `viewId`.|

#### Enumerated Values

|Property|Value|
|---|---|
|samplingLevel|SAMPLING_UNSPECIFIED|
|samplingLevel|DEFAULT|
|samplingLevel|SMALL|
|samplingLevel|LARGE|

<h2 id="tocS_ReportRow">ReportRow</h2>
<!-- backwards compatibility -->
<a id="schemareportrow"></a>
<a id="schema_ReportRow"></a>
<a id="tocSreportrow"></a>
<a id="tocsreportrow"></a>

```json
{
  "dimensions": [
    "string"
  ],
  "metrics": [
    {
      "pivotValueRegions": [
        {
          "values": [
            "string"
          ]
        }
      ],
      "values": [
        "string"
      ]
    }
  ]
}
```

A row in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[string]|false|none|List of requested dimensions.|
|metrics|[[DateRangeValues](#schemadaterangevalues)]|false|none|List of metrics for each requested DateRange.|

<h2 id="tocS_ResourceQuotasRemaining">ResourceQuotasRemaining</h2>
<!-- backwards compatibility -->
<a id="schemaresourcequotasremaining"></a>
<a id="schema_ResourceQuotasRemaining"></a>
<a id="tocSresourcequotasremaining"></a>
<a id="tocsresourcequotasremaining"></a>

```json
{
  "dailyQuotaTokensRemaining": 0,
  "hourlyQuotaTokensRemaining": 0
}
```

The resource quota tokens remaining for the property after the request is completed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyQuotaTokensRemaining|integer(int32)|false|none|Daily resource quota remaining remaining.|
|hourlyQuotaTokensRemaining|integer(int32)|false|none|Hourly resource quota tokens remaining.|

<h2 id="tocS_ScreenviewData">ScreenviewData</h2>
<!-- backwards compatibility -->
<a id="schemascreenviewdata"></a>
<a id="schema_ScreenviewData"></a>
<a id="tocSscreenviewdata"></a>
<a id="tocsscreenviewdata"></a>

```json
{
  "appName": "string",
  "mobileDeviceBranding": "string",
  "mobileDeviceModel": "string",
  "screenName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appName|string|false|none|The application name.|
|mobileDeviceBranding|string|false|none|Mobile manufacturer or branded name. Eg: "Google", "Apple" etc.|
|mobileDeviceModel|string|false|none|Mobile device model. Eg: "Pixel", "iPhone" etc.|
|screenName|string|false|none|The name of the screen.|

<h2 id="tocS_SearchUserActivityRequest">SearchUserActivityRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchuseractivityrequest"></a>
<a id="schema_SearchUserActivityRequest"></a>
<a id="tocSsearchuseractivityrequest"></a>
<a id="tocssearchuseractivityrequest"></a>

```json
{
  "activityTypes": [
    "ACTIVITY_TYPE_UNSPECIFIED"
  ],
  "dateRange": {
    "endDate": "string",
    "startDate": "string"
  },
  "pageSize": 0,
  "pageToken": "string",
  "user": {
    "type": "USER_ID_TYPE_UNSPECIFIED",
    "userId": "string"
  },
  "viewId": "string"
}
```

The request to fetch User Report from Reporting API `userActivity:get` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityTypes|[string]|false|none|Set of all activity types being requested. Only acvities matching these types will be returned in the response. If empty, all activies will be returned.|
|dateRange|[DateRange](#schemadaterange)|false|none|Date range for which to retrieve the user activity. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day).|
|pageSize|integer(int32)|false|none|Page size is for paging and specifies the maximum number of returned rows. Page size should be > 0. If the value is 0 or if the field isn't specified, the request returns the default of 1000 rows per page.|
|pageToken|string|false|none|A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request.|
|user|[User](#schemauser)|false|none|Required. Unique user Id to query for. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain this field.|
|viewId|string|false|none|Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the `viewId`.|

#### Enumerated Values

|Property|Value|
|---|---|
|activityTypes|ACTIVITY_TYPE_UNSPECIFIED|
|activityTypes|PAGEVIEW|
|activityTypes|SCREENVIEW|
|activityTypes|GOAL|
|activityTypes|ECOMMERCE|
|activityTypes|EVENT|

<h2 id="tocS_SearchUserActivityResponse">SearchUserActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchuseractivityresponse"></a>
<a id="schema_SearchUserActivityResponse"></a>
<a id="tocSsearchuseractivityresponse"></a>
<a id="tocssearchuseractivityresponse"></a>

```json
{
  "nextPageToken": "string",
  "sampleRate": 0,
  "sessions": [
    {
      "activities": [
        {
          "activityTime": "string",
          "activityType": "ACTIVITY_TYPE_UNSPECIFIED",
          "appview": {
            "appName": "string",
            "mobileDeviceBranding": "string",
            "mobileDeviceModel": "string",
            "screenName": "string"
          },
          "campaign": "string",
          "channelGrouping": "string",
          "customDimension": [
            {
              "index": 0,
              "value": "string"
            }
          ],
          "ecommerce": {
            "actionType": "UNKNOWN",
            "ecommerceType": "ECOMMERCE_TYPE_UNSPECIFIED",
            "products": [
              {
                "itemRevenue": 0,
                "productName": "string",
                "productQuantity": "string",
                "productSku": "string"
              }
            ],
            "transaction": {
              "transactionId": "string",
              "transactionRevenue": 0,
              "transactionShipping": 0,
              "transactionTax": 0
            }
          },
          "event": {
            "eventAction": "string",
            "eventCategory": "string",
            "eventCount": "string",
            "eventLabel": "string",
            "eventValue": "string"
          },
          "goals": {
            "goals": [
              {
                "goalCompletionLocation": "string",
                "goalCompletions": "string",
                "goalIndex": 0,
                "goalName": "string",
                "goalPreviousStep1": "string",
                "goalPreviousStep2": "string",
                "goalPreviousStep3": "string",
                "goalValue": 0
              }
            ]
          },
          "hostname": "string",
          "keyword": "string",
          "landingPagePath": "string",
          "medium": "string",
          "pageview": {
            "pagePath": "string",
            "pageTitle": "string"
          },
          "source": "string"
        }
      ],
      "dataSource": "string",
      "deviceCategory": "string",
      "platform": "string",
      "sessionDate": "string",
      "sessionId": "string"
    }
  ],
  "totalRows": 0
}
```

The response from `userActivity:get` call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|This token should be passed to [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the next page.|
|sampleRate|number(double)|false|none|This field represents the [sampling rate](https://support.google.com/analytics/answer/2637192) for the given request and is a number between 0.0 to 1.0. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.|
|sessions|[[UserActivitySession](#schemauseractivitysession)]|false|none|Each record represents a session (device details, duration, etc).|
|totalRows|integer(int32)|false|none|Total rows returned by this query (across different pages).|

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "dynamicSegment": {
    "name": "string",
    "sessionSegment": {
      "segmentFilters": [
        {
          "not": true,
          "sequenceSegment": {
            "firstStepShouldMatchFirstHit": true,
            "segmentSequenceSteps": [
              {
                "matchType": "UNSPECIFIED_MATCH_TYPE",
                "orFiltersForSegment": [
                  {
                    "segmentFilterClauses": [
                      {
                        "dimensionFilter": {
                          "caseSensitive": true,
                          "dimensionName": "string",
                          "expressions": [
                            "string"
                          ],
                          "maxComparisonValue": "string",
                          "minComparisonValue": "string",
                          "operator": "OPERATOR_UNSPECIFIED"
                        },
                        "metricFilter": {
                          "comparisonValue": "string",
                          "maxComparisonValue": "string",
                          "metricName": "string",
                          "operator": "UNSPECIFIED_OPERATOR",
                          "scope": "UNSPECIFIED_SCOPE"
                        },
                        "not": true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "simpleSegment": {
            "orFiltersForSegment": [
              {
                "segmentFilterClauses": [
                  {
                    "dimensionFilter": {
                      "caseSensitive": true,
                      "dimensionName": "string",
                      "expressions": [
                        "string"
                      ],
                      "maxComparisonValue": "string",
                      "minComparisonValue": "string",
                      "operator": "OPERATOR_UNSPECIFIED"
                    },
                    "metricFilter": {
                      "comparisonValue": "string",
                      "maxComparisonValue": "string",
                      "metricName": "string",
                      "operator": "UNSPECIFIED_OPERATOR",
                      "scope": "UNSPECIFIED_SCOPE"
                    },
                    "not": true
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    "userSegment": {
      "segmentFilters": [
        {
          "not": true,
          "sequenceSegment": {
            "firstStepShouldMatchFirstHit": true,
            "segmentSequenceSteps": [
              {
                "matchType": "UNSPECIFIED_MATCH_TYPE",
                "orFiltersForSegment": [
                  {
                    "segmentFilterClauses": [
                      {
                        "dimensionFilter": {
                          "caseSensitive": true,
                          "dimensionName": "string",
                          "expressions": [
                            "string"
                          ],
                          "maxComparisonValue": "string",
                          "minComparisonValue": "string",
                          "operator": "OPERATOR_UNSPECIFIED"
                        },
                        "metricFilter": {
                          "comparisonValue": "string",
                          "maxComparisonValue": "string",
                          "metricName": "string",
                          "operator": "UNSPECIFIED_OPERATOR",
                          "scope": "UNSPECIFIED_SCOPE"
                        },
                        "not": true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "simpleSegment": {
            "orFiltersForSegment": [
              {
                "segmentFilterClauses": [
                  {
                    "dimensionFilter": {
                      "caseSensitive": true,
                      "dimensionName": "string",
                      "expressions": [
                        "string"
                      ],
                      "maxComparisonValue": "string",
                      "minComparisonValue": "string",
                      "operator": "OPERATOR_UNSPECIFIED"
                    },
                    "metricFilter": {
                      "comparisonValue": "string",
                      "maxComparisonValue": "string",
                      "metricName": "string",
                      "operator": "UNSPECIFIED_OPERATOR",
                      "scope": "UNSPECIFIED_SCOPE"
                    },
                    "not": true
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "segmentId": "string"
}
```

The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicSegment|[DynamicSegment](#schemadynamicsegment)|false|none|A dynamic segment definition in the request.|
|segmentId|string|false|none|The segment ID of a built-in or custom segment, for example `gaid::-3`.|

<h2 id="tocS_SegmentDefinition">SegmentDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasegmentdefinition"></a>
<a id="schema_SegmentDefinition"></a>
<a id="tocSsegmentdefinition"></a>
<a id="tocssegmentdefinition"></a>

```json
{
  "segmentFilters": [
    {
      "not": true,
      "sequenceSegment": {
        "firstStepShouldMatchFirstHit": true,
        "segmentSequenceSteps": [
          {
            "matchType": "UNSPECIFIED_MATCH_TYPE",
            "orFiltersForSegment": [
              {
                "segmentFilterClauses": [
                  {
                    "dimensionFilter": {
                      "caseSensitive": true,
                      "dimensionName": "string",
                      "expressions": [
                        "string"
                      ],
                      "maxComparisonValue": "string",
                      "minComparisonValue": "string",
                      "operator": "OPERATOR_UNSPECIFIED"
                    },
                    "metricFilter": {
                      "comparisonValue": "string",
                      "maxComparisonValue": "string",
                      "metricName": "string",
                      "operator": "UNSPECIFIED_OPERATOR",
                      "scope": "UNSPECIFIED_SCOPE"
                    },
                    "not": true
                  }
                ]
              }
            ]
          }
        ]
      },
      "simpleSegment": {
        "orFiltersForSegment": [
          {
            "segmentFilterClauses": [
              {
                "dimensionFilter": {
                  "caseSensitive": true,
                  "dimensionName": "string",
                  "expressions": [
                    "string"
                  ],
                  "maxComparisonValue": "string",
                  "minComparisonValue": "string",
                  "operator": "OPERATOR_UNSPECIFIED"
                },
                "metricFilter": {
                  "comparisonValue": "string",
                  "maxComparisonValue": "string",
                  "metricName": "string",
                  "operator": "UNSPECIFIED_OPERATOR",
                  "scope": "UNSPECIFIED_SCOPE"
                },
                "not": true
              }
            ]
          }
        ]
      }
    }
  ]
}
```

SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segmentFilters|[[SegmentFilter](#schemasegmentfilter)]|false|none|A segment is defined by a set of segment filters which are combined together with a logical `AND` operation.|

<h2 id="tocS_SegmentDimensionFilter">SegmentDimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemasegmentdimensionfilter"></a>
<a id="schema_SegmentDimensionFilter"></a>
<a id="tocSsegmentdimensionfilter"></a>
<a id="tocssegmentdimensionfilter"></a>

```json
{
  "caseSensitive": true,
  "dimensionName": "string",
  "expressions": [
    "string"
  ],
  "maxComparisonValue": "string",
  "minComparisonValue": "string",
  "operator": "OPERATOR_UNSPECIFIED"
}
```

Dimension filter specifies the filtering options on a dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|Should the match be case sensitive, ignored for `IN_LIST` operator.|
|dimensionName|string|false|none|Name of the dimension for which the filter is being applied.|
|expressions|[string]|false|none|The list of expressions, only the first element is used for all operators|
|maxComparisonValue|string|false|none|Maximum comparison values for `BETWEEN` match type.|
|minComparisonValue|string|false|none|Minimum comparison values for `BETWEEN` match type.|
|operator|string|false|none|The operator to use to match the dimension with the expressions.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OPERATOR_UNSPECIFIED|
|operator|REGEXP|
|operator|BEGINS_WITH|
|operator|ENDS_WITH|
|operator|PARTIAL|
|operator|EXACT|
|operator|IN_LIST|
|operator|NUMERIC_LESS_THAN|
|operator|NUMERIC_GREATER_THAN|
|operator|NUMERIC_BETWEEN|

<h2 id="tocS_SegmentFilter">SegmentFilter</h2>
<!-- backwards compatibility -->
<a id="schemasegmentfilter"></a>
<a id="schema_SegmentFilter"></a>
<a id="tocSsegmentfilter"></a>
<a id="tocssegmentfilter"></a>

```json
{
  "not": true,
  "sequenceSegment": {
    "firstStepShouldMatchFirstHit": true,
    "segmentSequenceSteps": [
      {
        "matchType": "UNSPECIFIED_MATCH_TYPE",
        "orFiltersForSegment": [
          {
            "segmentFilterClauses": [
              {
                "dimensionFilter": {
                  "caseSensitive": true,
                  "dimensionName": "string",
                  "expressions": [
                    "string"
                  ],
                  "maxComparisonValue": "string",
                  "minComparisonValue": "string",
                  "operator": "OPERATOR_UNSPECIFIED"
                },
                "metricFilter": {
                  "comparisonValue": "string",
                  "maxComparisonValue": "string",
                  "metricName": "string",
                  "operator": "UNSPECIFIED_OPERATOR",
                  "scope": "UNSPECIFIED_SCOPE"
                },
                "not": true
              }
            ]
          }
        ]
      }
    ]
  },
  "simpleSegment": {
    "orFiltersForSegment": [
      {
        "segmentFilterClauses": [
          {
            "dimensionFilter": {
              "caseSensitive": true,
              "dimensionName": "string",
              "expressions": [
                "string"
              ],
              "maxComparisonValue": "string",
              "minComparisonValue": "string",
              "operator": "OPERATOR_UNSPECIFIED"
            },
            "metricFilter": {
              "comparisonValue": "string",
              "maxComparisonValue": "string",
              "metricName": "string",
              "operator": "UNSPECIFIED_OPERATOR",
              "scope": "UNSPECIFIED_SCOPE"
            },
            "not": true
          }
        ]
      }
    ]
  }
}
```

SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|not|boolean|false|none|If true, match the complement of simple or sequence segment. For example, to match all visits not from "New York", we can define the segment as follows: "sessionSegment": { "segmentFilters": [{ "simpleSegment" :{ "orFiltersForSegment": [{ "segmentFilterClauses":[{ "dimensionFilter": { "dimensionName": "ga:city", "expressions": ["New York"] } }] }] }, "not": "True" }] },|
|sequenceSegment|[SequenceSegment](#schemasequencesegment)|false|none|Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.|
|simpleSegment|[SimpleSegment](#schemasimplesegment)|false|none|A Simple segment conditions consist of one or more dimension/metric conditions that can be combined|

<h2 id="tocS_SegmentFilterClause">SegmentFilterClause</h2>
<!-- backwards compatibility -->
<a id="schemasegmentfilterclause"></a>
<a id="schema_SegmentFilterClause"></a>
<a id="tocSsegmentfilterclause"></a>
<a id="tocssegmentfilterclause"></a>

```json
{
  "dimensionFilter": {
    "caseSensitive": true,
    "dimensionName": "string",
    "expressions": [
      "string"
    ],
    "maxComparisonValue": "string",
    "minComparisonValue": "string",
    "operator": "OPERATOR_UNSPECIFIED"
  },
  "metricFilter": {
    "comparisonValue": "string",
    "maxComparisonValue": "string",
    "metricName": "string",
    "operator": "UNSPECIFIED_OPERATOR",
    "scope": "UNSPECIFIED_SCOPE"
  },
  "not": true
}
```

Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionFilter|[SegmentDimensionFilter](#schemasegmentdimensionfilter)|false|none|Dimension Filter for the segment definition.|
|metricFilter|[SegmentMetricFilter](#schemasegmentmetricfilter)|false|none|Metric Filter for the segment definition.|
|not|boolean|false|none|Matches the complement (`!`) of the filter.|

<h2 id="tocS_SegmentMetricFilter">SegmentMetricFilter</h2>
<!-- backwards compatibility -->
<a id="schemasegmentmetricfilter"></a>
<a id="schema_SegmentMetricFilter"></a>
<a id="tocSsegmentmetricfilter"></a>
<a id="tocssegmentmetricfilter"></a>

```json
{
  "comparisonValue": "string",
  "maxComparisonValue": "string",
  "metricName": "string",
  "operator": "UNSPECIFIED_OPERATOR",
  "scope": "UNSPECIFIED_SCOPE"
}
```

Metric filter to be used in a segment filter clause.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonValue|string|false|none|The value to compare against. If the operator is `BETWEEN`, this value is treated as minimum comparison value.|
|maxComparisonValue|string|false|none|Max comparison value is only used for `BETWEEN` operator.|
|metricName|string|false|none|The metric that will be filtered on. A `metricFilter` must contain a metric name.|
|operator|string|false|none|Specifies is the operation to perform to compare the metric. The default is `EQUAL`.|
|scope|string|false|none|Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|UNSPECIFIED_OPERATOR|
|operator|LESS_THAN|
|operator|GREATER_THAN|
|operator|EQUAL|
|operator|BETWEEN|
|scope|UNSPECIFIED_SCOPE|
|scope|PRODUCT|
|scope|HIT|
|scope|SESSION|
|scope|USER|

<h2 id="tocS_SegmentSequenceStep">SegmentSequenceStep</h2>
<!-- backwards compatibility -->
<a id="schemasegmentsequencestep"></a>
<a id="schema_SegmentSequenceStep"></a>
<a id="tocSsegmentsequencestep"></a>
<a id="tocssegmentsequencestep"></a>

```json
{
  "matchType": "UNSPECIFIED_MATCH_TYPE",
  "orFiltersForSegment": [
    {
      "segmentFilterClauses": [
        {
          "dimensionFilter": {
            "caseSensitive": true,
            "dimensionName": "string",
            "expressions": [
              "string"
            ],
            "maxComparisonValue": "string",
            "minComparisonValue": "string",
            "operator": "OPERATOR_UNSPECIFIED"
          },
          "metricFilter": {
            "comparisonValue": "string",
            "maxComparisonValue": "string",
            "metricName": "string",
            "operator": "UNSPECIFIED_OPERATOR",
            "scope": "UNSPECIFIED_SCOPE"
          },
          "not": true
        }
      ]
    }
  ]
}
```

A segment sequence definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchType|string|false|none|Specifies if the step immediately precedes or can be any time before the next step.|
|orFiltersForSegment|[[OrFiltersForSegment](#schemaorfiltersforsegment)]|false|none|A sequence is specified with a list of Or grouped filters which are combined with `AND` operator.|

#### Enumerated Values

|Property|Value|
|---|---|
|matchType|UNSPECIFIED_MATCH_TYPE|
|matchType|PRECEDES|
|matchType|IMMEDIATELY_PRECEDES|

<h2 id="tocS_SequenceSegment">SequenceSegment</h2>
<!-- backwards compatibility -->
<a id="schemasequencesegment"></a>
<a id="schema_SequenceSegment"></a>
<a id="tocSsequencesegment"></a>
<a id="tocssequencesegment"></a>

```json
{
  "firstStepShouldMatchFirstHit": true,
  "segmentSequenceSteps": [
    {
      "matchType": "UNSPECIFIED_MATCH_TYPE",
      "orFiltersForSegment": [
        {
          "segmentFilterClauses": [
            {
              "dimensionFilter": {
                "caseSensitive": true,
                "dimensionName": "string",
                "expressions": [
                  "string"
                ],
                "maxComparisonValue": "string",
                "minComparisonValue": "string",
                "operator": "OPERATOR_UNSPECIFIED"
              },
              "metricFilter": {
                "comparisonValue": "string",
                "maxComparisonValue": "string",
                "metricName": "string",
                "operator": "UNSPECIFIED_OPERATOR",
                "scope": "UNSPECIFIED_SCOPE"
              },
              "not": true
            }
          ]
        }
      ]
    }
  ]
}
```

Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstStepShouldMatchFirstHit|boolean|false|none|If set, first step condition must match the first hit of the visitor (in the date range).|
|segmentSequenceSteps|[[SegmentSequenceStep](#schemasegmentsequencestep)]|false|none|The list of steps in the sequence.|

<h2 id="tocS_SimpleSegment">SimpleSegment</h2>
<!-- backwards compatibility -->
<a id="schemasimplesegment"></a>
<a id="schema_SimpleSegment"></a>
<a id="tocSsimplesegment"></a>
<a id="tocssimplesegment"></a>

```json
{
  "orFiltersForSegment": [
    {
      "segmentFilterClauses": [
        {
          "dimensionFilter": {
            "caseSensitive": true,
            "dimensionName": "string",
            "expressions": [
              "string"
            ],
            "maxComparisonValue": "string",
            "minComparisonValue": "string",
            "operator": "OPERATOR_UNSPECIFIED"
          },
          "metricFilter": {
            "comparisonValue": "string",
            "maxComparisonValue": "string",
            "metricName": "string",
            "operator": "UNSPECIFIED_OPERATOR",
            "scope": "UNSPECIFIED_SCOPE"
          },
          "not": true
        }
      ]
    }
  ]
}
```

A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orFiltersForSegment|[[OrFiltersForSegment](#schemaorfiltersforsegment)]|false|none|A list of segment filters groups which are combined with logical `AND` operator.|

<h2 id="tocS_TransactionData">TransactionData</h2>
<!-- backwards compatibility -->
<a id="schematransactiondata"></a>
<a id="schema_TransactionData"></a>
<a id="tocStransactiondata"></a>
<a id="tocstransactiondata"></a>

```json
{
  "transactionId": "string",
  "transactionRevenue": 0,
  "transactionShipping": 0,
  "transactionTax": 0
}
```

Represents details collected when the visitor performs a transaction on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|string|false|none|The transaction ID, supplied by the e-commerce tracking method, for the purchase in the shopping cart.|
|transactionRevenue|number(double)|false|none|The total sale revenue (excluding shipping and tax) of the transaction.|
|transactionShipping|number(double)|false|none|Total cost of shipping.|
|transactionTax|number(double)|false|none|Total tax for the transaction.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "type": "USER_ID_TYPE_UNSPECIFIED",
  "userId": "string"
}
```

Contains information to identify a particular user uniquely.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Type of the user in the request. The field `userId` is associated with this type.|
|userId|string|false|none|Unique Id of the user for which the data is being requested.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|USER_ID_TYPE_UNSPECIFIED|
|type|USER_ID|
|type|CLIENT_ID|

<h2 id="tocS_UserActivitySession">UserActivitySession</h2>
<!-- backwards compatibility -->
<a id="schemauseractivitysession"></a>
<a id="schema_UserActivitySession"></a>
<a id="tocSuseractivitysession"></a>
<a id="tocsuseractivitysession"></a>

```json
{
  "activities": [
    {
      "activityTime": "string",
      "activityType": "ACTIVITY_TYPE_UNSPECIFIED",
      "appview": {
        "appName": "string",
        "mobileDeviceBranding": "string",
        "mobileDeviceModel": "string",
        "screenName": "string"
      },
      "campaign": "string",
      "channelGrouping": "string",
      "customDimension": [
        {
          "index": 0,
          "value": "string"
        }
      ],
      "ecommerce": {
        "actionType": "UNKNOWN",
        "ecommerceType": "ECOMMERCE_TYPE_UNSPECIFIED",
        "products": [
          {
            "itemRevenue": 0,
            "productName": "string",
            "productQuantity": "string",
            "productSku": "string"
          }
        ],
        "transaction": {
          "transactionId": "string",
          "transactionRevenue": 0,
          "transactionShipping": 0,
          "transactionTax": 0
        }
      },
      "event": {
        "eventAction": "string",
        "eventCategory": "string",
        "eventCount": "string",
        "eventLabel": "string",
        "eventValue": "string"
      },
      "goals": {
        "goals": [
          {
            "goalCompletionLocation": "string",
            "goalCompletions": "string",
            "goalIndex": 0,
            "goalName": "string",
            "goalPreviousStep1": "string",
            "goalPreviousStep2": "string",
            "goalPreviousStep3": "string",
            "goalValue": 0
          }
        ]
      },
      "hostname": "string",
      "keyword": "string",
      "landingPagePath": "string",
      "medium": "string",
      "pageview": {
        "pagePath": "string",
        "pageTitle": "string"
      },
      "source": "string"
    }
  ],
  "dataSource": "string",
  "deviceCategory": "string",
  "platform": "string",
  "sessionDate": "string",
  "sessionId": "string"
}
```

This represents a user session performed on a specific device at a certain time over a period of time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Activity](#schemaactivity)]|false|none|Represents a detailed view into each of the activity in this session.|
|dataSource|string|false|none|The data source of a hit. By default, hits sent from analytics.js are reported as "web" and hits sent from the mobile SDKs are reported as "app". These values can be overridden in the Measurement Protocol.|
|deviceCategory|string|false|none|The type of device used: "mobile", "tablet" etc.|
|platform|string|false|none|Platform on which the activity happened: "android", "ios" etc.|
|sessionDate|string|false|none|Date of this session in ISO-8601 format.|
|sessionId|string|false|none|Unique ID of the session.|
