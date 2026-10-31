<h1 id="my-business-business-calls-api">My Business Business Calls API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Business Calls API manages business calls information of a location on Google and collect insights like the number of missed calls to their location. Additional information about Business calls can be found at https://support.google.com/business/answer/9688285?p=call_history. If the Google Business Profile links to a Google Ads account and call history is turned on, calls that last longer than a specific time, and that can be attributed to an ad interaction, will show in the linked Google Ads account under the "Calls from Ads" conversion. If smart bidding and call conversions are used in the optimization strategy, there could be a change in ad spend. Learn more about smart bidding. To view and perform actions on a location's calls, you need to be a `OWNER`, `CO_OWNER` or `MANAGER` of the location. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinessbusinesscalls.googleapis.com/">https://mybusinessbusinesscalls.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-business-calls-api-locations">locations</h1>

## mybusinessbusinesscalls.locations.getBusinesscallssettings

<a id="opIdmybusinessbusinesscalls.locations.getBusinesscallssettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Returns the Business calls settings resource for the given location.

<h3 id="mybusinessbusinesscallslocationsgetbusinesscallssettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The BusinessCallsSettings to get. The `name` field is used to identify the business call settings to get. Format: locations/{location_id}/businesscallssettings.|
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
  "callsState": "CALLS_STATE_UNSPECIFIED",
  "consentTime": "string",
  "name": "string"
}
```

<h3 id="mybusinessbusinesscallslocationsgetbusinesscallssettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BusinessCallsSettings](#schemabusinesscallssettings)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinesscalls.locations.updateBusinesscallssettings

<a id="opIdmybusinessbusinesscalls.locations.updateBusinesscallssettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "callsState": "CALLS_STATE_UNSPECIFIED",
    "consentTime": "string",
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Updates the Business call settings for the specified location.

> Body parameter

```json
{
  "callsState": "CALLS_STATE_UNSPECIFIED",
  "consentTime": "string",
  "name": "string"
}
```

<h3 id="mybusinessbusinesscallslocationsupdatebusinesscallssettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings|
|updateMask|query|string|false|Required. The list of fields to update.|
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
|body|body|[BusinessCallsSettings](#schemabusinesscallssettings)|false|none|
|» callsState|body|string|false|Required. The state of this location's enrollment in Business calls.|
|» consentTime|body|string(google-datetime)|false|Input only. Time when the end user provided consent to the API user to enable business calls.|
|» name|body|string|false|Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» callsState|CALLS_STATE_UNSPECIFIED|
|» callsState|ENABLED|
|» callsState|DISABLED|

> Example responses

> 200 Response

```json
{
  "callsState": "CALLS_STATE_UNSPECIFIED",
  "consentTime": "string",
  "name": "string"
}
```

<h3 id="mybusinessbusinesscallslocationsupdatebusinesscallssettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BusinessCallsSettings](#schemabusinesscallssettings)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinesscalls.locations.businesscallsinsights.list

<a id="opIdmybusinessbusinesscalls.locations.businesscallsinsights.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/businesscallsinsights \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/businesscallsinsights`

Returns insights for Business calls for a location.

<h3 id="mybusinessbusinesscallslocationsbusinesscallsinsightslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent location to fetch calls insights for. Format: locations/{location_id}|
|filter|query|string|false|Optional. A filter constraining the calls insights to return. The response includes only entries that match the filter. If the MetricType is not provided, AGGREGATE_COUNT is returned. If no end_date is provided, the last date for which data is available is used. If no start_date is provided, we will default to the first date for which data is available, which is currently 6 months. If start_date is before the date when data is available, data is returned starting from the date when it is available. At this time we support following filters. 1. start_date="DATE" where date is in YYYY-MM-DD format. 2. end_date="DATE" where date is in YYYY-MM-DD format. 3. metric_type=XYZ where XYZ is a valid MetricType. 4. Conjunctions(AND) of all of the above. e.g., "start_date=2021-08-01 AND end_date=2021-08-10 AND metric_type=AGGREGATE_COUNT" The AGGREGATE_COUNT metric_type ignores the DD part of the date.|
|pageSize|query|integer|false|Optional. The maximum number of BusinessCallsInsights to return. If unspecified, at most 20 will be returned. Some of the metric_types(e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the page_size is ignored.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListBusinessCallsInsights` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBusinessCallsInsights` must match the call that provided the page token. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the pake_token is ignored.|
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
  "businessCallsInsights": [
    {
      "aggregateMetrics": {
        "answeredCallsCount": 0,
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "hourlyMetrics": [
          {
            "hour": 0,
            "missedCallsCount": 0
          }
        ],
        "missedCallsCount": 0,
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "weekdayMetrics": [
          {
            "day": "DAY_OF_WEEK_UNSPECIFIED",
            "missedCallsCount": 0
          }
        ]
      },
      "metricType": "METRIC_TYPE_UNSPECIFIED",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessbusinesscallslocationsbusinesscallsinsightslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBusinessCallsInsightsResponse](#schemalistbusinesscallsinsightsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AggregateMetrics">AggregateMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatemetrics"></a>
<a id="schema_AggregateMetrics"></a>
<a id="tocSaggregatemetrics"></a>
<a id="tocsaggregatemetrics"></a>

```json
{
  "answeredCallsCount": 0,
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "hourlyMetrics": [
    {
      "hour": 0,
      "missedCallsCount": 0
    }
  ],
  "missedCallsCount": 0,
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "weekdayMetrics": [
    {
      "day": "DAY_OF_WEEK_UNSPECIFIED",
      "missedCallsCount": 0
    }
  ]
}
```

Metrics aggregated over the input time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answeredCallsCount|integer(int32)|false|none|Total count of answered calls.|
|endDate|[Date](#schemadate)|false|none|End date for this metric.|
|hourlyMetrics|[[HourlyMetrics](#schemahourlymetrics)]|false|none|A list of metrics by hour of day.|
|missedCallsCount|integer(int32)|false|none|Total count of missed calls.|
|startDate|[Date](#schemadate)|false|none|Date for this metric. If metric is monthly, only year and month are used.|
|weekdayMetrics|[[WeekDayMetrics](#schemaweekdaymetrics)]|false|none|A list of metrics by day of week.|

<h2 id="tocS_BusinessCallsInsights">BusinessCallsInsights</h2>
<!-- backwards compatibility -->
<a id="schemabusinesscallsinsights"></a>
<a id="schema_BusinessCallsInsights"></a>
<a id="tocSbusinesscallsinsights"></a>
<a id="tocsbusinesscallsinsights"></a>

```json
{
  "aggregateMetrics": {
    "answeredCallsCount": 0,
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "hourlyMetrics": [
      {
        "hour": 0,
        "missedCallsCount": 0
      }
    ],
    "missedCallsCount": 0,
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "weekdayMetrics": [
      {
        "day": "DAY_OF_WEEK_UNSPECIFIED",
        "missedCallsCount": 0
      }
    ]
  },
  "metricType": "METRIC_TYPE_UNSPECIFIED",
  "name": "string"
}
```

Insights for calls made to a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateMetrics|[AggregateMetrics](#schemaaggregatemetrics)|false|none|Metric for the time range based on start_date and end_date.|
|metricType|string|false|none|The metric for which the value applies.|
|name|string|false|none|Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights|

#### Enumerated Values

|Property|Value|
|---|---|
|metricType|METRIC_TYPE_UNSPECIFIED|
|metricType|AGGREGATE_COUNT|

<h2 id="tocS_BusinessCallsSettings">BusinessCallsSettings</h2>
<!-- backwards compatibility -->
<a id="schemabusinesscallssettings"></a>
<a id="schema_BusinessCallsSettings"></a>
<a id="tocSbusinesscallssettings"></a>
<a id="tocsbusinesscallssettings"></a>

```json
{
  "callsState": "CALLS_STATE_UNSPECIFIED",
  "consentTime": "string",
  "name": "string"
}
```

Business calls settings for a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callsState|string|false|none|Required. The state of this location's enrollment in Business calls.|
|consentTime|string(google-datetime)|false|none|Input only. Time when the end user provided consent to the API user to enable business calls.|
|name|string|false|none|Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings|

#### Enumerated Values

|Property|Value|
|---|---|
|callsState|CALLS_STATE_UNSPECIFIED|
|callsState|ENABLED|
|callsState|DISABLED|

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

<h2 id="tocS_HourlyMetrics">HourlyMetrics</h2>
<!-- backwards compatibility -->
<a id="schemahourlymetrics"></a>
<a id="schema_HourlyMetrics"></a>
<a id="tocShourlymetrics"></a>
<a id="tocshourlymetrics"></a>

```json
{
  "hour": 0,
  "missedCallsCount": 0
}
```

Metrics for an hour.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|Hour of the day. Allowed values are 0-23.|
|missedCallsCount|integer(int32)|false|none|Total count of missed calls for this hour.|

<h2 id="tocS_ListBusinessCallsInsightsResponse">ListBusinessCallsInsightsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbusinesscallsinsightsresponse"></a>
<a id="schema_ListBusinessCallsInsightsResponse"></a>
<a id="tocSlistbusinesscallsinsightsresponse"></a>
<a id="tocslistbusinesscallsinsightsresponse"></a>

```json
{
  "businessCallsInsights": [
    {
      "aggregateMetrics": {
        "answeredCallsCount": 0,
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "hourlyMetrics": [
          {
            "hour": 0,
            "missedCallsCount": 0
          }
        ],
        "missedCallsCount": 0,
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "weekdayMetrics": [
          {
            "day": "DAY_OF_WEEK_UNSPECIFIED",
            "missedCallsCount": 0
          }
        ]
      },
      "metricType": "METRIC_TYPE_UNSPECIFIED",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListBusinessCallsInsights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessCallsInsights|[[BusinessCallsInsights](#schemabusinesscallsinsights)]|false|none|A collection of business calls insights for the location.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty.|

<h2 id="tocS_WeekDayMetrics">WeekDayMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaweekdaymetrics"></a>
<a id="schema_WeekDayMetrics"></a>
<a id="tocSweekdaymetrics"></a>
<a id="tocsweekdaymetrics"></a>

```json
{
  "day": "DAY_OF_WEEK_UNSPECIFIED",
  "missedCallsCount": 0
}
```

Metrics for a week day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|Day of the week. Allowed values are Sunday - Saturday.|
|missedCallsCount|integer(int32)|false|none|Total count of missed calls for this hour.|

#### Enumerated Values

|Property|Value|
|---|---|
|day|DAY_OF_WEEK_UNSPECIFIED|
|day|MONDAY|
|day|TUESDAY|
|day|WEDNESDAY|
|day|THURSDAY|
|day|FRIDAY|
|day|SATURDAY|
|day|SUNDAY|
