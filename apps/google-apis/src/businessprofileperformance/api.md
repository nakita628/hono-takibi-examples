<h1 id="business-profile-performance-api">Business Profile Performance API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Business Profile Performance API allows merchants to fetch performance reports about their business profile on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://businessprofileperformance.googleapis.com/">https://businessprofileperformance.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="business-profile-performance-api-locations">locations</h1>

## businessprofileperformance.locations.fetchMultiDailyMetricsTimeSeries

<a id="opIdbusinessprofileperformance.locations.fetchMultiDailyMetricsTimeSeries"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:fetchMultiDailyMetricsTimeSeries \
  -H 'Accept: application/json'
```

`GET /v1/{location}:fetchMultiDailyMetricsTimeSeries`

 Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

<h3 id="businessprofileperformancelocationsfetchmultidailymetricstimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.|
|dailyMetrics|query|[string]|false|Required. The metrics to retrieve time series for.|
|dailyRange.endDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|dailyRange.endDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|dailyRange.endDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|dailyRange.startDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|dailyRange.startDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|dailyRange.startDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
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
|dailyMetrics|DAILY_METRIC_UNKNOWN|
|dailyMetrics|BUSINESS_IMPRESSIONS_DESKTOP_MAPS|
|dailyMetrics|BUSINESS_IMPRESSIONS_DESKTOP_SEARCH|
|dailyMetrics|BUSINESS_IMPRESSIONS_MOBILE_MAPS|
|dailyMetrics|BUSINESS_IMPRESSIONS_MOBILE_SEARCH|
|dailyMetrics|BUSINESS_CONVERSATIONS|
|dailyMetrics|BUSINESS_DIRECTION_REQUESTS|
|dailyMetrics|CALL_CLICKS|
|dailyMetrics|WEBSITE_CLICKS|
|dailyMetrics|BUSINESS_BOOKINGS|
|dailyMetrics|BUSINESS_FOOD_ORDERS|
|dailyMetrics|BUSINESS_FOOD_MENU_CLICKS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "multiDailyMetricTimeSeries": [
    {
      "dailyMetricTimeSeries": [
        {
          "dailyMetric": "DAILY_METRIC_UNKNOWN",
          "dailySubEntityType": {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "timeOfDay": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "timeSeries": {
            "datedValues": [
              {
                "date": {
                  "day": 0,
                  "month": 0,
                  "year": 0
                },
                "value": "string"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

<h3 id="businessprofileperformancelocationsfetchmultidailymetricstimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FetchMultiDailyMetricsTimeSeriesResponse](#schemafetchmultidailymetricstimeseriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## businessprofileperformance.locations.getDailyMetricsTimeSeries

<a id="opIdbusinessprofileperformance.locations.getDailyMetricsTimeSeries"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getDailyMetricsTimeSeries \
  -H 'Accept: application/json'
```

`GET /v1/{name}:getDailyMetricsTimeSeries`

 Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

<h3 id="businessprofileperformancelocationsgetdailymetricstimeseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.|
|dailyMetric|query|string|false|Required. The metric to retrieve time series.|
|dailyRange.endDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|dailyRange.endDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|dailyRange.endDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|dailyRange.startDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|dailyRange.startDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|dailyRange.startDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|dailySubEntityType.dayOfWeek|query|string|false|Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.|
|dailySubEntityType.timeOfDay.hours|query|integer|false|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|dailySubEntityType.timeOfDay.minutes|query|integer|false|Minutes of hour of day. Must be from 0 to 59.|
|dailySubEntityType.timeOfDay.nanos|query|integer|false|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|dailySubEntityType.timeOfDay.seconds|query|integer|false|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|
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
|dailyMetric|DAILY_METRIC_UNKNOWN|
|dailyMetric|BUSINESS_IMPRESSIONS_DESKTOP_MAPS|
|dailyMetric|BUSINESS_IMPRESSIONS_DESKTOP_SEARCH|
|dailyMetric|BUSINESS_IMPRESSIONS_MOBILE_MAPS|
|dailyMetric|BUSINESS_IMPRESSIONS_MOBILE_SEARCH|
|dailyMetric|BUSINESS_CONVERSATIONS|
|dailyMetric|BUSINESS_DIRECTION_REQUESTS|
|dailyMetric|CALL_CLICKS|
|dailyMetric|WEBSITE_CLICKS|
|dailyMetric|BUSINESS_BOOKINGS|
|dailyMetric|BUSINESS_FOOD_ORDERS|
|dailyMetric|BUSINESS_FOOD_MENU_CLICKS|
|dailySubEntityType.dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dailySubEntityType.dayOfWeek|MONDAY|
|dailySubEntityType.dayOfWeek|TUESDAY|
|dailySubEntityType.dayOfWeek|WEDNESDAY|
|dailySubEntityType.dayOfWeek|THURSDAY|
|dailySubEntityType.dayOfWeek|FRIDAY|
|dailySubEntityType.dayOfWeek|SATURDAY|
|dailySubEntityType.dayOfWeek|SUNDAY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "timeSeries": {
    "datedValues": [
      {
        "date": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "value": "string"
      }
    ]
  }
}
```

<h3 id="businessprofileperformancelocationsgetdailymetricstimeseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetDailyMetricsTimeSeriesResponse](#schemagetdailymetricstimeseriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## businessprofileperformance.locations.searchkeywords.impressions.monthly.list

<a id="opIdbusinessprofileperformance.locations.searchkeywords.impressions.monthly.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/searchkeywords/impressions/monthly \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/searchkeywords/impressions/monthly`

Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

<h3 id="businessprofileperformancelocationssearchkeywordsimpressionsmonthlylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.|
|monthlyRange.endMonth.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|monthlyRange.endMonth.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|monthlyRange.endMonth.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|monthlyRange.startMonth.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|monthlyRange.startMonth.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|monthlyRange.startMonth.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|pageSize|query|integer|false|Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.|
|pageToken|query|string|false|Optional. A token indicating the next paginated result to be returned.|
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
  "searchKeywordsCounts": [
    {
      "insightsValue": {
        "threshold": "string",
        "value": "string"
      },
      "searchKeyword": "string"
    }
  ]
}
```

<h3 id="businessprofileperformancelocationssearchkeywordsimpressionsmonthlylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSearchKeywordImpressionsMonthlyResponse](#schemalistsearchkeywordimpressionsmonthlyresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DailyMetricTimeSeries">DailyMetricTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schemadailymetrictimeseries"></a>
<a id="schema_DailyMetricTimeSeries"></a>
<a id="tocSdailymetrictimeseries"></a>
<a id="tocsdailymetrictimeseries"></a>

```json
{
  "dailyMetric": "DAILY_METRIC_UNKNOWN",
  "dailySubEntityType": {
    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
    "timeOfDay": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "timeSeries": {
    "datedValues": [
      {
        "date": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "value": "string"
      }
    ]
  }
}
```

Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyMetric|string|false|none|The DailyMetric that the TimeSeries represents.|
|dailySubEntityType|[DailySubEntityType](#schemadailysubentitytype)|false|none|The DailySubEntityType that the TimeSeries represents. Will not be present when breakdown does not exist.|
|timeSeries|[TimeSeries](#schematimeseries)|false|none|List of datapoints where each datapoint is a date-value pair.|

#### Enumerated Values

|Property|Value|
|---|---|
|dailyMetric|DAILY_METRIC_UNKNOWN|
|dailyMetric|BUSINESS_IMPRESSIONS_DESKTOP_MAPS|
|dailyMetric|BUSINESS_IMPRESSIONS_DESKTOP_SEARCH|
|dailyMetric|BUSINESS_IMPRESSIONS_MOBILE_MAPS|
|dailyMetric|BUSINESS_IMPRESSIONS_MOBILE_SEARCH|
|dailyMetric|BUSINESS_CONVERSATIONS|
|dailyMetric|BUSINESS_DIRECTION_REQUESTS|
|dailyMetric|CALL_CLICKS|
|dailyMetric|WEBSITE_CLICKS|
|dailyMetric|BUSINESS_BOOKINGS|
|dailyMetric|BUSINESS_FOOD_ORDERS|
|dailyMetric|BUSINESS_FOOD_MENU_CLICKS|

<h2 id="tocS_DailySubEntityType">DailySubEntityType</h2>
<!-- backwards compatibility -->
<a id="schemadailysubentitytype"></a>
<a id="schema_DailySubEntityType"></a>
<a id="tocSdailysubentitytype"></a>
<a id="tocsdailysubentitytype"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
  "timeOfDay": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Represents all possible subentity types that are associated with DailyMetrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.|
|timeOfDay|[TimeOfDay](#schematimeofday)|false|none|Represents the time of the day in 24 hour format. Eg: 13:34:20 Currently supported DailyMetrics = NONE.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

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

<h2 id="tocS_DatedValue">DatedValue</h2>
<!-- backwards compatibility -->
<a id="schemadatedvalue"></a>
<a id="schema_DatedValue"></a>
<a id="tocSdatedvalue"></a>
<a id="tocsdatedvalue"></a>

```json
{
  "date": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "value": "string"
}
```

Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|[Date](#schemadate)|false|none|The date that the datapoint corresponds to. This represents a month value if the day field is not set.|
|value|string(int64)|false|none|The value of the datapoint. This will not be present when the value is zero.|

<h2 id="tocS_FetchMultiDailyMetricsTimeSeriesResponse">FetchMultiDailyMetricsTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafetchmultidailymetricstimeseriesresponse"></a>
<a id="schema_FetchMultiDailyMetricsTimeSeriesResponse"></a>
<a id="tocSfetchmultidailymetricstimeseriesresponse"></a>
<a id="tocsfetchmultidailymetricstimeseriesresponse"></a>

```json
{
  "multiDailyMetricTimeSeries": [
    {
      "dailyMetricTimeSeries": [
        {
          "dailyMetric": "DAILY_METRIC_UNKNOWN",
          "dailySubEntityType": {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "timeOfDay": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "timeSeries": {
            "datedValues": [
              {
                "date": {
                  "day": 0,
                  "month": 0,
                  "year": 0
                },
                "value": "string"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

Represents the response for FetchMultiDailyMetricsTimeSeries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multiDailyMetricTimeSeries|[[MultiDailyMetricTimeSeries](#schemamultidailymetrictimeseries)]|false|none|DailyMetrics and their corresponding time series.|

<h2 id="tocS_GetDailyMetricsTimeSeriesResponse">GetDailyMetricsTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdailymetricstimeseriesresponse"></a>
<a id="schema_GetDailyMetricsTimeSeriesResponse"></a>
<a id="tocSgetdailymetricstimeseriesresponse"></a>
<a id="tocsgetdailymetricstimeseriesresponse"></a>

```json
{
  "timeSeries": {
    "datedValues": [
      {
        "date": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "value": "string"
      }
    ]
  }
}
```

Represents the response for GetDailyMetricsTimeSeries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeSeries|[TimeSeries](#schematimeseries)|false|none|The daily time series.|

<h2 id="tocS_InsightsValue">InsightsValue</h2>
<!-- backwards compatibility -->
<a id="schemainsightsvalue"></a>
<a id="schema_InsightsValue"></a>
<a id="tocSinsightsvalue"></a>
<a id="tocsinsightsvalue"></a>

```json
{
  "threshold": "string",
  "value": "string"
}
```

Represents an insights value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threshold|string(int64)|false|none|Represents the threshold below which the actual value falls.|
|value|string(int64)|false|none|Represents the actual value.|

<h2 id="tocS_ListSearchKeywordImpressionsMonthlyResponse">ListSearchKeywordImpressionsMonthlyResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsearchkeywordimpressionsmonthlyresponse"></a>
<a id="schema_ListSearchKeywordImpressionsMonthlyResponse"></a>
<a id="tocSlistsearchkeywordimpressionsmonthlyresponse"></a>
<a id="tocslistsearchkeywordimpressionsmonthlyresponse"></a>

```json
{
  "nextPageToken": "string",
  "searchKeywordsCounts": [
    {
      "insightsValue": {
        "threshold": "string",
        "value": "string"
      },
      "searchKeyword": "string"
    }
  ]
}
```

Represents the response for ListSearchKeywordImpressionsMonthly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string(byte)|false|none|A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned.|
|searchKeywordsCounts|[[SearchKeywordCount](#schemasearchkeywordcount)]|false|none|Search terms which have been used to find a business.|

<h2 id="tocS_MultiDailyMetricTimeSeries">MultiDailyMetricTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schemamultidailymetrictimeseries"></a>
<a id="schema_MultiDailyMetricTimeSeries"></a>
<a id="tocSmultidailymetrictimeseries"></a>
<a id="tocsmultidailymetrictimeseries"></a>

```json
{
  "dailyMetricTimeSeries": [
    {
      "dailyMetric": "DAILY_METRIC_UNKNOWN",
      "dailySubEntityType": {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "timeOfDay": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "timeSeries": {
        "datedValues": [
          {
            "date": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "value": "string"
          }
        ]
      }
    }
  ]
}
```

Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyMetricTimeSeries|[[DailyMetricTimeSeries](#schemadailymetrictimeseries)]|false|none|List of DailyMetric-TimeSeries pairs.|

<h2 id="tocS_SearchKeywordCount">SearchKeywordCount</h2>
<!-- backwards compatibility -->
<a id="schemasearchkeywordcount"></a>
<a id="schema_SearchKeywordCount"></a>
<a id="tocSsearchkeywordcount"></a>
<a id="tocssearchkeywordcount"></a>

```json
{
  "insightsValue": {
    "threshold": "string",
    "value": "string"
  },
  "searchKeyword": "string"
}
```

Represents a single search keyword and its value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insightsValue|[InsightsValue](#schemainsightsvalue)|false|none|One of either: 1) The sum of the number of unique users that used the keyword in a month, aggregated for each month requested. 2) A threshold that indicates that the actual value is below this threshold.|
|searchKeyword|string|false|none|The lower-cased string that the user entered.|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TimeSeries">TimeSeries</h2>
<!-- backwards compatibility -->
<a id="schematimeseries"></a>
<a id="schema_TimeSeries"></a>
<a id="tocStimeseries"></a>
<a id="tocstimeseries"></a>

```json
{
  "datedValues": [
    {
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "value": "string"
    }
  ]
}
```

Represents a timeseries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datedValues|[[DatedValue](#schemadatedvalue)]|false|none|List of datapoints in the timeseries, where each datapoint is a date-value pair.|
