<h1 id="chrome-ux-report-api">Chrome UX Report API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Chrome UX Report API lets you view real user experience data for millions of websites.

Base URLs:

* <a href="https://chromeuxreport.googleapis.com/">https://chromeuxreport.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/web/tools/chrome-user-experience-report/api/reference">External documentation</a>

<h1 id="chrome-ux-report-api-records">records</h1>

## chromeuxreport.records.queryHistoryRecord

<a id="opIdchromeuxreport.records.queryHistoryRecord"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/records:queryHistoryRecord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "formFactor": "ALL_FORM_FACTORS",
    "metrics": [
      "string"
    ],
    "origin": "string",
    "url": "string"
  }'
```

`POST /v1/records:queryHistoryRecord`

Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.

> Body parameter

```json
{
  "formFactor": "ALL_FORM_FACTORS",
  "metrics": [
    "string"
  ],
  "origin": "string",
  "url": "string"
}
```

<h3 id="chromeuxreportrecordsqueryhistoryrecord-parameters">Parameters</h3>

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
|body|body|[QueryHistoryRequest](#schemaqueryhistoryrequest)|false|none|
|» formFactor|body|string|false|The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.|
|» metrics|body|[string]|false|The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]|
|» origin|body|string|false|The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"|
|» url|body|string|false|The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» formFactor|ALL_FORM_FACTORS|
|» formFactor|PHONE|
|» formFactor|DESKTOP|
|» formFactor|TABLET|

> Example responses

> 200 Response

```json
{
  "record": {
    "collectionPeriods": [
      {
        "firstDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "lastDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ],
    "key": {
      "formFactor": "ALL_FORM_FACTORS",
      "origin": "string",
      "url": "string"
    },
    "metrics": {
      "property1": {
        "histogramTimeseries": [
          {
            "densities": [
              0
            ],
            "end": null,
            "start": null
          }
        ],
        "percentilesTimeseries": {
          "p75s": [
            null
          ]
        }
      },
      "property2": {
        "histogramTimeseries": [
          {
            "densities": [
              0
            ],
            "end": null,
            "start": null
          }
        ],
        "percentilesTimeseries": {
          "p75s": [
            null
          ]
        }
      }
    }
  },
  "urlNormalizationDetails": {
    "normalizedUrl": "string",
    "originalUrl": "string"
  }
}
```

<h3 id="chromeuxreportrecordsqueryhistoryrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryHistoryResponse](#schemaqueryhistoryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## chromeuxreport.records.queryRecord

<a id="opIdchromeuxreport.records.queryRecord"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/records:queryRecord \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "effectiveConnectionType": "string",
    "formFactor": "ALL_FORM_FACTORS",
    "metrics": [
      "string"
    ],
    "origin": "string",
    "url": "string"
  }'
```

`POST /v1/records:queryRecord`

Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

> Body parameter

```json
{
  "effectiveConnectionType": "string",
  "formFactor": "ALL_FORM_FACTORS",
  "metrics": [
    "string"
  ],
  "origin": "string",
  "url": "string"
}
```

<h3 id="chromeuxreportrecordsqueryrecord-parameters">Parameters</h3>

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
|body|body|[QueryRequest](#schemaqueryrequest)|false|none|
|» effectiveConnectionType|body|string|false|The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned.|
|» formFactor|body|string|false|The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.|
|» metrics|body|[string]|false|The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]|
|» origin|body|string|false|The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"|
|» url|body|string|false|The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» formFactor|ALL_FORM_FACTORS|
|» formFactor|PHONE|
|» formFactor|DESKTOP|
|» formFactor|TABLET|

> Example responses

> 200 Response

```json
{
  "record": {
    "collectionPeriod": {
      "firstDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "lastDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "key": {
      "effectiveConnectionType": "string",
      "formFactor": "ALL_FORM_FACTORS",
      "origin": "string",
      "url": "string"
    },
    "metrics": {
      "property1": {
        "histogram": [
          {
            "density": 0,
            "end": null,
            "start": null
          }
        ],
        "percentiles": {
          "p75": null
        }
      },
      "property2": {
        "histogram": [
          {
            "density": 0,
            "end": null,
            "start": null
          }
        ],
        "percentiles": {
          "p75": null
        }
      }
    }
  },
  "urlNormalizationDetails": {
    "normalizedUrl": "string",
    "originalUrl": "string"
  }
}
```

<h3 id="chromeuxreportrecordsqueryrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QueryResponse](#schemaqueryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Bin">Bin</h2>
<!-- backwards compatibility -->
<a id="schemabin"></a>
<a id="schema_Bin"></a>
<a id="tocSbin"></a>
<a id="tocsbin"></a>

```json
{
  "density": 0,
  "end": null,
  "start": null
}
```

A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|density|number(double)|false|none|The proportion of users that experienced this bin's value for the given metric.|
|end|object|false|none|End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf.|
|start|object|false|none|Start is the beginning of the data bin.|

<h2 id="tocS_CollectionPeriod">CollectionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemacollectionperiod"></a>
<a id="schema_CollectionPeriod"></a>
<a id="tocScollectionperiod"></a>
<a id="tocscollectionperiod"></a>

```json
{
  "firstDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "lastDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

The collection period is a date range which includes the `first` and `last` day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstDate|[Date](#schemadate)|false|none|The first day in the collection period, inclusive.|
|lastDate|[Date](#schemadate)|false|none|The last day in the collection period, inclusive.|

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

<h2 id="tocS_HistoryKey">HistoryKey</h2>
<!-- backwards compatibility -->
<a id="schemahistorykey"></a>
<a id="schema_HistoryKey"></a>
<a id="tocShistorykey"></a>
<a id="tocshistorykey"></a>

```json
{
  "formFactor": "ALL_FORM_FACTORS",
  "origin": "string",
  "url": "string"
}
```

Key defines all the dimensions that identify this record as unique.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formFactor|string|false|none|The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.|
|origin|string|false|none|Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.|
|url|string|false|none|Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a "url" only data for that specific url will be aggregated.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|ALL_FORM_FACTORS|
|formFactor|PHONE|
|formFactor|DESKTOP|
|formFactor|TABLET|

<h2 id="tocS_HistoryRecord">HistoryRecord</h2>
<!-- backwards compatibility -->
<a id="schemahistoryrecord"></a>
<a id="schema_HistoryRecord"></a>
<a id="tocShistoryrecord"></a>
<a id="tocshistoryrecord"></a>

```json
{
  "collectionPeriods": [
    {
      "firstDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "lastDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ],
  "key": {
    "formFactor": "ALL_FORM_FACTORS",
    "origin": "string",
    "url": "string"
  },
  "metrics": {
    "property1": {
      "histogramTimeseries": [
        {
          "densities": [
            0
          ],
          "end": null,
          "start": null
        }
      ],
      "percentilesTimeseries": {
        "p75s": [
          null
        ]
      }
    },
    "property2": {
      "histogramTimeseries": [
        {
          "densities": [
            0
          ],
          "end": null,
          "start": null
        }
      ],
      "percentilesTimeseries": {
        "p75s": [
          null
        ]
      }
    }
  }
}
```

HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionPeriods|[[CollectionPeriod](#schemacollectionperiod)]|false|none|The collection periods indicate when each of the data points reflected in the time series data in metrics was collected. Note that all the time series share the same collection periods, and it is enforced in the CrUX pipeline that every time series has the same number of data points.|
|key|[HistoryKey](#schemahistorykey)|false|none|Key defines all of the unique querying parameters needed to look up a user experience history record.|
|metrics|object|false|none|Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "effectiveConnectionType": "string",
  "formFactor": "ALL_FORM_FACTORS",
  "origin": "string",
  "url": "string"
}
```

Key defines all the dimensions that identify this record as unique.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveConnectionType|string|false|none|The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned.|
|formFactor|string|false|none|The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.|
|origin|string|false|none|Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.|
|url|string|false|none|Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated.|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|ALL_FORM_FACTORS|
|formFactor|PHONE|
|formFactor|DESKTOP|
|formFactor|TABLET|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "histogram": [
    {
      "density": 0,
      "end": null,
      "start": null
    }
  ],
  "percentiles": {
    "p75": null
  }
}
```

A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histogram|[[Bin](#schemabin)]|false|none|The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1.|
|percentiles|[Percentiles](#schemapercentiles)|false|none|Commonly useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins.|

<h2 id="tocS_MetricTimeseries">MetricTimeseries</h2>
<!-- backwards compatibility -->
<a id="schemametrictimeseries"></a>
<a id="schema_MetricTimeseries"></a>
<a id="tocSmetrictimeseries"></a>
<a id="tocsmetrictimeseries"></a>

```json
{
  "histogramTimeseries": [
    {
      "densities": [
        0
      ],
      "end": null,
      "start": null
    }
  ],
  "percentilesTimeseries": {
    "p75s": [
      null
    ]
  }
}
```

A `metric timeseries` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histogramTimeseries|[[TimeseriesBin](#schematimeseriesbin)]|false|none|The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1, for each timeseries entry.|
|percentilesTimeseries|[TimeseriesPercentiles](#schematimeseriespercentiles)|false|none|Commonly useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins.|

<h2 id="tocS_Percentiles">Percentiles</h2>
<!-- backwards compatibility -->
<a id="schemapercentiles"></a>
<a id="schema_Percentiles"></a>
<a id="tocSpercentiles"></a>
<a id="tocspercentiles"></a>

```json
{
  "p75": null
}
```

Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|p75|object|false|none|75% of users experienced the given metric at or below this value.|

<h2 id="tocS_QueryHistoryRequest">QueryHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryhistoryrequest"></a>
<a id="schema_QueryHistoryRequest"></a>
<a id="tocSqueryhistoryrequest"></a>
<a id="tocsqueryhistoryrequest"></a>

```json
{
  "formFactor": "ALL_FORM_FACTORS",
  "metrics": [
    "string"
  ],
  "origin": "string",
  "url": "string"
}
```

Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formFactor|string|false|none|The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.|
|metrics|[string]|false|none|The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]|
|origin|string|false|none|The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"|
|url|string|false|none|The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|ALL_FORM_FACTORS|
|formFactor|PHONE|
|formFactor|DESKTOP|
|formFactor|TABLET|

<h2 id="tocS_QueryHistoryResponse">QueryHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryhistoryresponse"></a>
<a id="schema_QueryHistoryResponse"></a>
<a id="tocSqueryhistoryresponse"></a>
<a id="tocsqueryhistoryresponse"></a>

```json
{
  "record": {
    "collectionPeriods": [
      {
        "firstDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "lastDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ],
    "key": {
      "formFactor": "ALL_FORM_FACTORS",
      "origin": "string",
      "url": "string"
    },
    "metrics": {
      "property1": {
        "histogramTimeseries": [
          {
            "densities": [
              0
            ],
            "end": null,
            "start": null
          }
        ],
        "percentilesTimeseries": {
          "p75s": [
            null
          ]
        }
      },
      "property2": {
        "histogramTimeseries": [
          {
            "densities": [
              0
            ],
            "end": null,
            "start": null
          }
        ],
        "percentilesTimeseries": {
          "p75s": [
            null
          ]
        }
      }
    }
  },
  "urlNormalizationDetails": {
    "normalizedUrl": "string",
    "originalUrl": "string"
  }
}
```

Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|record|[HistoryRecord](#schemahistoryrecord)|false|none|The record that was found.|
|urlNormalizationDetails|[UrlNormalization](#schemaurlnormalization)|false|none|These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid.|

<h2 id="tocS_QueryRequest">QueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequest"></a>
<a id="schema_QueryRequest"></a>
<a id="tocSqueryrequest"></a>
<a id="tocsqueryrequest"></a>

```json
{
  "effectiveConnectionType": "string",
  "formFactor": "ALL_FORM_FACTORS",
  "metrics": [
    "string"
  ],
  "origin": "string",
  "url": "string"
}
```

Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effectiveConnectionType|string|false|none|The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned.|
|formFactor|string|false|none|The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.|
|metrics|[string]|false|none|The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]|
|origin|string|false|none|The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"|
|url|string|false|none|The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"|

#### Enumerated Values

|Property|Value|
|---|---|
|formFactor|ALL_FORM_FACTORS|
|formFactor|PHONE|
|formFactor|DESKTOP|
|formFactor|TABLET|

<h2 id="tocS_QueryResponse">QueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresponse"></a>
<a id="schema_QueryResponse"></a>
<a id="tocSqueryresponse"></a>
<a id="tocsqueryresponse"></a>

```json
{
  "record": {
    "collectionPeriod": {
      "firstDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "lastDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "key": {
      "effectiveConnectionType": "string",
      "formFactor": "ALL_FORM_FACTORS",
      "origin": "string",
      "url": "string"
    },
    "metrics": {
      "property1": {
        "histogram": [
          {
            "density": 0,
            "end": null,
            "start": null
          }
        ],
        "percentiles": {
          "p75": null
        }
      },
      "property2": {
        "histogram": [
          {
            "density": 0,
            "end": null,
            "start": null
          }
        ],
        "percentiles": {
          "p75": null
        }
      }
    }
  },
  "urlNormalizationDetails": {
    "normalizedUrl": "string",
    "originalUrl": "string"
  }
}
```

Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|record|[Record](#schemarecord)|false|none|The record that was found.|
|urlNormalizationDetails|[UrlNormalization](#schemaurlnormalization)|false|none|These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid.|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "collectionPeriod": {
    "firstDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "lastDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "key": {
    "effectiveConnectionType": "string",
    "formFactor": "ALL_FORM_FACTORS",
    "origin": "string",
    "url": "string"
  },
  "metrics": {
    "property1": {
      "histogram": [
        {
          "density": 0,
          "end": null,
          "start": null
        }
      ],
      "percentiles": {
        "p75": null
      }
    },
    "property2": {
      "histogram": [
        {
          "density": 0,
          "end": null,
          "start": null
        }
      ],
      "percentiles": {
        "p75": null
      }
    }
  }
}
```

Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionPeriod|[CollectionPeriod](#schemacollectionperiod)|false|none|The collection period indicates when the data reflected in this record was collected.|
|key|[Key](#schemakey)|false|none|Key defines all of the unique querying parameters needed to look up a user experience record.|
|metrics|object|false|none|Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]|

<h2 id="tocS_TimeseriesBin">TimeseriesBin</h2>
<!-- backwards compatibility -->
<a id="schematimeseriesbin"></a>
<a id="schema_TimeseriesBin"></a>
<a id="tocStimeseriesbin"></a>
<a id="tocstimeseriesbin"></a>

```json
{
  "densities": [
    0
  ],
  "end": null,
  "start": null
}
```

A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|densities|[number(double)]|false|none|The proportion of users that experienced this bin's value for the given metric in a given collection period; the index for each of these entries corresponds to an entry in the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. Thus, the length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message.|
|end|object|false|none|End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf.|
|start|object|false|none|Start is the beginning of the data bin.|

<h2 id="tocS_TimeseriesPercentiles">TimeseriesPercentiles</h2>
<!-- backwards compatibility -->
<a id="schematimeseriespercentiles"></a>
<a id="schema_TimeseriesPercentiles"></a>
<a id="tocStimeseriespercentiles"></a>
<a id="tocstimeseriespercentiles"></a>

```json
{
  "p75s": [
    null
  ]
}
```

Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|p75s|[object]|false|none|75% of users experienced the given metric at or below this value. The length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field.|

<h2 id="tocS_UrlNormalization">UrlNormalization</h2>
<!-- backwards compatibility -->
<a id="schemaurlnormalization"></a>
<a id="schema_UrlNormalization"></a>
<a id="tocSurlnormalization"></a>
<a id="tocsurlnormalization"></a>

```json
{
  "normalizedUrl": "string",
  "originalUrl": "string"
}
```

Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedUrl|string|false|none|The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up.|
|originalUrl|string|false|none|The original requested URL prior to any normalization actions.|
