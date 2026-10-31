<h1 id="-seller-service-metrics-api-"> Seller Service Metrics API  v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The <i>Analytics API</i> provides data and information about a seller and their eBay business.  <br><br>The resources and methods in this API let sellers review information on their listing performance, metrics on their customer service performance, and details on their eBay seller performance rating.  <br><br>The three resources in the Analytics API provide the following data and information: <ul><li><b>Customer Service Metric</b> &ndash; Returns data on a seller's customer service performance as compared to other seller's in the same peer group.</li> <li><b>Traffic Report</b> &ndash; Returns data that shows how buyers are engaging with a seller's listings.</li> <li><b>Seller Standards Profile</b> &ndash; Returns data pertaining to a seller's performance rating.</li></ul> Sellers can use the data and information returned by the various Analytics API methods to determine where they can make improvements to increase sales and how they might improve their seller status as viewed by eBay buyers.  <br><br>For details on using this API, see <a href="/api-docs/sell/static/performance/analyzing-performance.html" title="Selling Integration Guide">Analyzing seller performance</a>.

Base URLs:

* <a href="https://api.ebay.com/sell/analytics/v1">https://api.ebay.com/sell/analytics/v1</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/sell.analytics.readonly|View your selling analytics data, such as performance reports|

<h1 id="-seller-service-metrics-api--customerservicemetric">customer_service_metric</h1>

## getCustomerServiceMetric

<a id="opIdgetCustomerServiceMetric"></a>

> Code samples

```bash
curl 'https://api.ebay.com/customer_service_metric/string/string?evaluation_marketplace_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /customer_service_metric/{customer_service_metric_type}/{evaluation_type}`

Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.

<h3 id="getcustomerservicemetric-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_service_metric_type|path|string|true|Use this path parameter to specify the type of customer service metrics and benchmark data you want returned for the seller. Supported types are: ITEM_NOT_AS_DESCRIBED ITEM_NOT_RECEIVED|
|evaluation_marketplace_id|query|string|true|Use this query parameter to specify the Marketplace ID to evaluate for the customer service metrics and benchmark data. For the list of supported marketplaces, see Analytics API requirements and restrictions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html|
|evaluation_type|path|string|true|Use this path parameter to specify the type of the seller evaluation you want returned, either: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period.|

> Example responses

> 200 Response

```json
{
  "dimensionMetrics": [
    {
      "dimension": {
        "dimensionKey": "string",
        "name": "string",
        "value": "string"
      },
      "metrics": [
        {
          "benchmark": {
            "adjustment": "string",
            "basis": "string",
            "metadata": {
              "average": "string"
            },
            "rating": "string"
          },
          "distributions": [
            {
              "basis": "string",
              "data": [
                {
                  "name": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "metricKey": "string",
          "value": "string"
        }
      ]
    }
  ],
  "evaluationCycle": {
    "endDate": "string",
    "evaluationDate": "string",
    "evaluationType": "string",
    "startDate": "string"
  },
  "marketplaceId": "string"
}
```

<h3 id="getcustomerservicemetric-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomerServiceMetricResponse](#schemagetcustomerservicemetricresponse)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Resource not found. Invalid path parameters. |None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.analytics.readonly )
</aside>

<h1 id="-seller-service-metrics-api--sellerstandardsprofile">seller_standards_profile</h1>

## findSellerStandardsProfiles

<a id="opIdfindSellerStandardsProfiles"></a>

> Code samples

```bash
curl https://api.ebay.com/seller_standards_profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /seller_standards_profile`

This call retrieves all the standards profiles for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller's multiple profiles are distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation or at the time of the request.

> Example responses

> 200 Response

```json
{
  "standardsProfiles": [
    {
      "cycle": {
        "cycleType": "string",
        "evaluationDate": "string",
        "evaluationMonth": "string"
      },
      "defaultProgram": true,
      "evaluationReason": "string",
      "metrics": [
        {
          "benchmark": {
            "adjustment": "string",
            "basis": "string",
            "metadata": {
              "average": "string"
            },
            "rating": "string"
          },
          "distributions": [
            {
              "basis": "string",
              "data": [
                {
                  "name": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "metricKey": "string",
          "value": "string"
        }
      ],
      "program": "string",
      "standardsLevel": "string"
    }
  ]
}
```

<h3 id="findsellerstandardsprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FindSellerStandardsProfilesResponse](#schemafindsellerstandardsprofilesresponse)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.analytics.readonly )
</aside>

## getSellerStandardsProfile

<a id="opIdgetSellerStandardsProfile"></a>

> Code samples

```bash
curl https://api.ebay.com/seller_standards_profile/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /seller_standards_profile/{program}/{cycle}`

This call retrieves a single standards profile for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller can have multiple profiles distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation (CURRENT) or at the time of the request (PROJECTED). Both cycle and a program values are required URI parameters for this method.

<h3 id="getsellerstandardsprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cycle|path|string|true|The period covered by the returned standards profile evaluation. Supply one of two values, CURRENT means the response reflects eBay's most recent monthly standards evaluation and PROJECTED means the response reflect the seller's projected monthly evaluation, as calculated at the time of the request.|
|program|path|string|true|This input value specifies the region used to determine the seller's standards profile. Supply one of the four following values, PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL.|

> Example responses

> 200 Response

```json
{
  "cycle": {
    "cycleType": "string",
    "evaluationDate": "string",
    "evaluationMonth": "string"
  },
  "defaultProgram": true,
  "evaluationReason": "string",
  "metrics": [
    {
      "benchmark": {
        "adjustment": "string",
        "basis": "string",
        "metadata": {
          "average": "string"
        },
        "rating": "string"
      },
      "distributions": [
        {
          "basis": "string",
          "data": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "metricKey": "string",
      "value": "string"
    }
  ],
  "program": "string",
  "standardsLevel": "string"
}
```

<h3 id="getsellerstandardsprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StandardsProfile](#schemastandardsprofile)|
|204|No Content|No content|None|
|400|Bad Request|Bad Request|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.analytics.readonly )
</aside>

<h1 id="-seller-service-metrics-api--trafficreport">traffic_report</h1>

## getTrafficReport

<a id="opIdgetTrafficReport"></a>

> Code samples

```bash
curl https://api.ebay.com/traffic_report \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /traffic_report`

This method returns a report that details the user traffic received by a seller's listings. A traffic report gives sellers the ability to review how often their listings appeared on eBay, how many times their listings are viewed, and how many purchases were made. The report also returns the report's start and end dates, and the date the information was last updated. When using this call: Be sure to URL-encode the values you pass in query parameters, as described in URI parameters. See the request samples below for details. You can only specify a single metric in the sort parameter and the specified metric must be listed in the metric parameter of your request. Parameter names are case sensitive, but metric names are not. For example, the following are correct: sort=LISTING_IMPRESSION_TOTAL sort=lisitng_impression_total metric=lisitng_impression_total However, these are incorrect: SORT=LISTING_IMPRESSION_TOTAL SORT=lisitng_impression_total Metric=lisitng_impression_total For more information, see Traffic report details.

<h3 id="gettrafficreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dimension|query|string|false|This query parameter specifies the dimension, or &quot;attribute,&quot; that is applied to the report metric. Valid values: DAY or LISTING Examples If you specify dimension=DAY and metric=CLICK_THROUGH_RATE, the traffic report contains the number of times an item displayed on a search results page and the buyer clicked through to the View Item page for each day in the date range, as in: 12-06-17: 32, 12-07-17: 54, ... If you specify dimension=LISTING and metric=LISTING_IMPRESSION_STORE, the traffic report contains the number of times that listing appeared on the seller's store during the specified date range. For example, LISTING_IMPRESSION_STORE: 157 means the item appeared 157 times in the store during the date range.|
|filter|query|string|false|This query parameter refines the information returned in the traffic report. Configure the following properties of the filter parameter to tune the traffic report to your needs: date_range Limits the report to the specified range of dates. Format the date range by enclosing the earliest date and end date for the report in brackets (&quot;[ ]&quot;), as follows: [YYYYMMDD..YYYYMMDD] The maximum range between the start and end dates is 90 days, and the earliest start date you can specify is two years prior to the current date, which is defined as 730 days (365 * 2), not accounting for Leap Year. The last date for which traffic data exists is a value called lastUpdatedDate. eBay returns an error if you specify a date range greater than 90 days, or the start date is after the lastUpdatedDate. If the specified end date is beyond the lastUpdatedDate, eBay returns data up to the lastUpdatedDate. Required: Always listing_ids This filter limits the results to only the supplied list of listingId values. You can specify to 200 different listingId values. Enclose the list of IDs with curly braces (&quot;{ }&quot;), and separate multiple values with a pipe character (&quot;\|&quot;). This filter only returns data for listings that have been either active or sold in last 90 days, and any unsold listings in the last 30 days. All listings must be the seller's and they must be listed on the marketplace specified by the marketplace_ids filter argument. marketplace_ids This filter limits the report to seller data related to only the specified marketplace ID (currently the filter allows only a single marketplace ID). Enclose the marketplace ID in curly braces (&quot;{ }&quot;). Valid values: EBAY_AU EBAY_DE EBAY_GB EBAY_US EBAY_MOTORS_US Required if you set the dimension parameter to DAY. traffic_source Limits the report to either Promoted Listings items or non-Promoted Listings (organic) items. Valid values are ORGANIC and PROMOTED_LISTINGS. Enclose the list of values with curly braces (&quot;{ }&quot;), and separate multiple values with a pipe character (&quot;\|&quot;) The default is both values. Example filter parameter The following example shows how to configure the filter parameter with the marketplace_ids and date_range filters: filter=marketplace_ids:{EBAY_US},date_range:[20170601..20170828] Note: You must URL encode all the values you supply in the filter parameter, as described in URL parameters. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/FilterField.html|
|metric|query|string|false|This query parameter specifies the metrics you want covered in the report. Specify a comma-separated list of the metrics you want included in the report. Valid values: CLICK_THROUGH_RATE The number of times an item displays on the search results page divided by the number of times buyers clicked through to its View Item page. Localized name: Click through rate LISTING_IMPRESSION_SEARCH_RESULTS_PAGE The number of times the seller's listings displayed on the search results page. Note, the listing might not have been visible to the buyer due to its position on the page. Localized name: Listing impressions from the search results page LISTING_IMPRESSION_STORE The number of times the seller's listings displayed on the seller's store. Note, the listing might not have been visible to the buyer due to its position on the page. Localized name: Listing impressions from your Store LISTING_IMPRESSION_TOTAL The total number of times the seller's listings displayed on the search results page OR in the seller's store. The item is counted each time it displays on either page. However, the listing might not have been visible to the buyer due to its position on the page. This is a combination of: LISTING_IMPRESSION_SEARCH_RESULTS_PAGE + LISTING_IMPRESSION_STORE. Localized name: Total listing impressions LISTING_VIEWS_SOURCE_DIRECT The number of times a View Item page was directly accessed, such as when a buyer navigates to the page using a bookmark. Localized name: Direct views LISTING_VIEWS_SOURCE_OFF_EBAY The number of times a View Item page was accessed via a site other than eBay, such as when a buyer clicks on a link to the listing from a search engine page. Localized name: Off eBay views LISTING_VIEWS_SOURCE_OTHER_EBAY The number of times a View Item page was accessed from an eBay page that is not either the search results page or the seller's store. Localized name: Views from non-search and non-store pages within eBay LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE The number of times the item displayed on the search results page. Localized name: Views on the search results page LISTING_VIEWS_SOURCE_STORE The number of times a View Item page was accessed via the seller's store. Localized name: Views from your Store LISTING_VIEWS_TOTAL Total number of listings viewed. This number sums: LISTING_VIEWS_SOURCE_DIRECT LISTING_VIEWS_SOURCE_OFF_EBAY LISTING_VIEWS_SOURCE_OTHER_EBAY LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE LISTING_VIEWS_SOURCE_STORE. Localized name: Total views SALES_CONVERSION_RATE The number of completed transactions divided by the number of View Item page views. Equals: TRANSACTION / LISTING_VIEWS_TOTAL Localized name: Sales conversion rate TRANSACTION The total number of completed transactions. Localized name: Transaction count|
|sort|query|string|false|This query parameter sorts the report on the specified metric. The metric you specify must be included in the configuration of the report's metric parameter. Sorting is helpful when you want to review how a specific metric is performing, such as the CLICK_THROUGH_RATE. Reports can be sorted in ascending or descending order. Precede the value of a descending-order request with a minus sign (&quot;-&quot;), for example: sort=-CLICK_THROUGH_RATE. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/SortField.html|

> Example responses

> 200 Response

```json
{
  "dimensionMetadata": [
    {
      "metadataHeader": {
        "key": "string",
        "metadataKeys": [
          {
            "dataType": "string",
            "key": "string",
            "localizedName": "string"
          }
        ]
      },
      "metadataRecords": [
        {
          "metadataValues": [
            {
              "applicable": true,
              "value": {}
            }
          ],
          "value": {
            "applicable": true,
            "value": {}
          }
        }
      ]
    }
  ],
  "endDate": "string",
  "header": {
    "dimensionKeys": [
      {
        "dataType": "string",
        "key": "string",
        "localizedName": "string"
      }
    ],
    "metrics": [
      {
        "dataType": "string",
        "key": "string",
        "localizedName": "string"
      }
    ]
  },
  "lastUpdatedDate": "string",
  "records": [
    {
      "dimensionValues": [
        {
          "applicable": true,
          "value": {}
        }
      ],
      "metricValues": [
        {
          "applicable": true,
          "value": {}
        }
      ]
    }
  ],
  "startDate": "string",
  "warnings": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

<h3 id="gettrafficreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Report](#schemareport)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.analytics.readonly )
</aside>

# Schemas

<h2 id="tocS_BenchmarkMetadata">BenchmarkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabenchmarkmetadata"></a>
<a id="schema_BenchmarkMetadata"></a>
<a id="tocSbenchmarkmetadata"></a>
<a id="tocsbenchmarkmetadata"></a>

```json
{
  "average": "string"
}
```

This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|string|false|none|This field returns the average value for the group, as defined by the specified basis. When the benchmark basis is set to PEER_BENCHMARK, the value returned in this field is the benchmark value to which the seller's metric value is compared to determine the seller's rating for the customer service metric.|

<h2 id="tocS_Cycle">Cycle</h2>
<!-- backwards compatibility -->
<a id="schemacycle"></a>
<a id="schema_Cycle"></a>
<a id="tocScycle"></a>
<a id="tocscycle"></a>

```json
{
  "cycleType": "string",
  "evaluationDate": "string",
  "evaluationMonth": "string"
}
```

A complex type that describes a program cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycleType|string|false|none|The cycle type, either CURRENT or PROJECTED. CURRENT means the profile's metrics values are from the most recent official eBay monthly standards evaluation. PROJECTED means the profile values were determined when the profile was requested. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/CycleTypeEnum.html'>eBay API documentation</a>|
|evaluationDate|string|false|none|The date and time at which the standard compliance values were determined for the profile. The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-04T07:09:00.000Z|
|evaluationMonth|string|false|none|The month in which the currently effective seller level was computed. The value is always formatted as YYYY-MM. If the cycle is CURRENT, this value is the month and year the of the last eBay compliance evaluation. If this is for a PROJECTED cycle, the value is the month and year of the next scheduled evaluation. Because eBay does official evaluations around the 20th of each month, a PROJECTED value may indicate either the current or the next month.|

<h2 id="tocS_Definition">Definition</h2>
<!-- backwards compatibility -->
<a id="schemadefinition"></a>
<a id="schema_Definition"></a>
<a id="tocSdefinition"></a>
<a id="tocsdefinition"></a>

```json
{
  "dataType": "string",
  "key": "string",
  "localizedName": "string"
}
```

A complex type that defines a dimension key and metrics in a traffic report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|Indicates the data type of the returned dimension. For example, if the dimension is day, the data type is DATE. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DataTypeEnum.html'>eBay API documentation</a>|
|key|string|false|none|The value the dimension or metric parameter as submitted in the request.|
|localizedName|string|false|none|The localized name of the metric or dimension (translated into the language specified in the Accept-Language HTTP request header). For example, if Accept-Language is set to de-DE, the value &quot;day&quot; in the dimension container is returned as &quot;tag&quot;, and a metric of TRANSACTION is returned as &quot;Transaktionsanzahl&quot;.|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "dimensionKey": "string",
  "name": "string",
  "value": "string"
}
```

The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionKey|string|false|none|dimensionKey defines the basis against which the seller's customer service metric is measured. The value of this field gets set according to the value of the customer_service_metric_type input parameter. The following input configurations return the responses shown: ITEM_NOT_AS_DESCRIBED &ndash; Returns benchmark ratings based on L1 listing categories, so the result shows metrics where the dimensionKey is set to LISTING_CATEGORY. ITEM_NOT_RECEIVED &ndash; Returns benchmark ratings based on world shipping regions, so the result shows metrics where the dimensionKey is set to SHIPPING_REGION. The shipping region is indicated by the associated value field. For specifics on world shipping regions, see the FAQ section on the following page: Monitor your service metrics For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DimensionTypeEnum.html'>eBay API documentation</a>|
|name|string|false|none|The dimension name returned in this field depends on the dimensionKey: If dimensionKey is set to SHIPPING_REGION, this field is set to one of following values, which represent established shipping corridors: Domestic International: Mature region International: Emerging region If dimensionKey is set to LISTING_CATEGORY, this field is set to the name of the primary (L1) category in which the items being rated were listed.|
|value|string|false|none|The value returned in this field depends on the dimensionKey. If dimensionKey equals LISTING_CATEGORY, the value returned in this field is the category ID of the primary (L1) category in which the items being rated were listed. If dimensionKey equals SHIPPING_REGION, one of the following values is returned: DOMESTIC INTERNATIONAL_MATURED_REGION INTERNATIONAL_EMERGING_REGION|

<h2 id="tocS_DimensionMetric">DimensionMetric</h2>
<!-- backwards compatibility -->
<a id="schemadimensionmetric"></a>
<a id="schema_DimensionMetric"></a>
<a id="tocSdimensionmetric"></a>
<a id="tocsdimensionmetric"></a>

```json
{
  "dimension": {
    "dimensionKey": "string",
    "name": "string",
    "value": "string"
  },
  "metrics": [
    {
      "benchmark": {
        "adjustment": "string",
        "basis": "string",
        "metadata": {
          "average": "string"
        },
        "rating": "string"
      },
      "distributions": [
        {
          "basis": "string",
          "data": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "metricKey": "string",
      "value": "string"
    }
  ]
}
```

This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|[Dimension](#schemadimension)|false|none|This type defines the &quot;dimension,&quot; or attributes, against which the associated customer service metric values and benchmark ratings are based. The dimensionKey value is set according to the customer_service_metric_type request parameter and the values in the associated name/value pairs relate to the dimensionKey that's being used to calculate the benchmark rating.|
|metrics|[[Metric](#schemametric)]|false|none|This is a list of Metric elements where each element contains data and information related to the transactions grouped by the associated dimension.|

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of a distribution in which the seller is active.|
|value|string|false|none|This field contains the number of transactions the seller had in the distribution (identified by the associated name field) during the metric evaluationCycle.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "category": "string",
  "domain": "string",
  "errorId": 0,
  "inputRefIds": [
    "string"
  ],
  "longMessage": "string",
  "message": "string",
  "outputRefIds": [
    "string"
  ],
  "parameters": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "subdomain": "string"
}
```

Type that defines the fields that can be returned in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Identifies whether the error was in the REQUEST or happened when running the APPLICATION.|
|domain|string|false|none|The primary system where the error occurred. This is relevant for application errors. For Analytics errors, it always has the value API_ANALYTICS.|
|errorId|integer(int32)|false|none|A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms. Traffic report error IDs range from 50001 to 50500.|
|inputRefIds|[string]|false|none|Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use JSONPath notation.|
|longMessage|string|false|none|A more detailed explanation of the error than given in the message error field.|
|message|string|false|none|Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.|
|outputRefIds|[string]|false|none|Identifies specific response elements associated with the error, if any. Path format is the same as inputRefId.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|This optional list of name/value pairs that contain context-specific ErrorParameter objects, with each item in the list being a parameter (or input field name) that caused an error condition. Each ErrorParameter object consists of two fields, a name and a value.|
|subdomain|string|false|none|If present, indicates which subsystem in which the error occurred.|

<h2 id="tocS_ErrorParameter">ErrorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaerrorparameter"></a>
<a id="schema_ErrorParameter"></a>
<a id="tocSerrorparameter"></a>
<a id="tocserrorparameter"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

A complex type that defines an error and error message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the entity that threw the error.|
|value|string|false|none|A description of the error.|

<h2 id="tocS_EvaluationCycle">EvaluationCycle</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationcycle"></a>
<a id="schema_EvaluationCycle"></a>
<a id="tocSevaluationcycle"></a>
<a id="tocsevaluationcycle"></a>

```json
{
  "endDate": "string",
  "evaluationDate": "string",
  "evaluationType": "string",
  "startDate": "string"
}
```

This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string|false|none|End date and time of the transaction lookback range. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.|
|evaluationDate|string|false|none|The ISO-8601 date and time at which the seller was evaluated for this customer service metric rating.|
|evaluationType|string|false|none|This field specifies the transaction lookback period used for the evaluation. The evaluation_type value specified in the request is returned in this field. There are two possible values: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/EvaluationTypeEnum.html'>eBay API documentation</a>|
|startDate|string|false|none|The start date and time of the transaction lookback range. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-04T07:09:00.000Z|

<h2 id="tocS_FindSellerStandardsProfilesResponse">FindSellerStandardsProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafindsellerstandardsprofilesresponse"></a>
<a id="schema_FindSellerStandardsProfilesResponse"></a>
<a id="tocSfindsellerstandardsprofilesresponse"></a>
<a id="tocsfindsellerstandardsprofilesresponse"></a>

```json
{
  "standardsProfiles": [
    {
      "cycle": {
        "cycleType": "string",
        "evaluationDate": "string",
        "evaluationMonth": "string"
      },
      "defaultProgram": true,
      "evaluationReason": "string",
      "metrics": [
        {
          "benchmark": {
            "adjustment": "string",
            "basis": "string",
            "metadata": {
              "average": "string"
            },
            "rating": "string"
          },
          "distributions": [
            {
              "basis": "string",
              "data": [
                {
                  "name": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "metricKey": "string",
          "value": "string"
        }
      ],
      "program": "string",
      "standardsLevel": "string"
    }
  ]
}
```

The response container for a list of seller profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|standardsProfiles|[[StandardsProfile](#schemastandardsprofile)]|false|none|A list of the seller's standards profiles. A &quot;standards profile&quot; is a set of eBay seller standards categories and the values related to the associated seller. Profiles are distinguished by a combination of cycle and program values. The &quot;program&quot; value specifies the region to which the data is from. The &quot;cycle&quot; value specifies whether the values were determined just now, or if the values are from the last official eBay seller standards evaluation.|

<h2 id="tocS_GetCustomerServiceMetricResponse">GetCustomerServiceMetricResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomerservicemetricresponse"></a>
<a id="schema_GetCustomerServiceMetricResponse"></a>
<a id="tocSgetcustomerservicemetricresponse"></a>
<a id="tocsgetcustomerservicemetricresponse"></a>

```json
{
  "dimensionMetrics": [
    {
      "dimension": {
        "dimensionKey": "string",
        "name": "string",
        "value": "string"
      },
      "metrics": [
        {
          "benchmark": {
            "adjustment": "string",
            "basis": "string",
            "metadata": {
              "average": "string"
            },
            "rating": "string"
          },
          "distributions": [
            {
              "basis": "string",
              "data": [
                {
                  "name": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "metricKey": "string",
          "value": "string"
        }
      ]
    }
  ],
  "evaluationCycle": {
    "endDate": "string",
    "evaluationDate": "string",
    "evaluationType": "string",
    "startDate": "string"
  },
  "marketplaceId": "string"
}
```

This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionMetrics|[[DimensionMetric](#schemadimensionmetric)]|false|none|This container provides a seller's customer service metric performance for a given dimension. In the getCustomerServiceMetric request, specify values for the following request parameters to control the returned dimension and the associated metric values: customer_service_metric_type evaluation_type evaluation_marketplace_id|
|evaluationCycle|[EvaluationCycle](#schemaevaluationcycle)|false|none|This complex type defines the evaluation type (CURRENT or PROJECTED) and the transaction lookback period used to calculate the seller's customer service metric.|
|marketplaceId|string|false|none|The eBay marketplace ID of the marketplace upon which the customer service metric evaluation is based. The customer_service_metric resource supports a limited set of marketplaces. For a complete list of the supported marketplaces, please see the Service metrics policy page. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html'>eBay API documentation</a>|

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "dimensionKeys": [
    {
      "dataType": "string",
      "key": "string",
      "localizedName": "string"
    }
  ],
  "metrics": [
    {
      "dataType": "string",
      "key": "string",
      "localizedName": "string"
    }
  ]
}
```

Type that defines the headers for the dimension keys and metrics returned in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionKeys|[[Definition](#schemadefinition)]|false|none|A list of the dimension or metric keys returned in the report. The values for each are is returned in the associated key fields.|
|metrics|[[Definition](#schemadefinition)]|false|none|The list of metrics returned in the report. The values for each are is returned in the associated key fields.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "metadataHeader": {
    "key": "string",
    "metadataKeys": [
      {
        "dataType": "string",
        "key": "string",
        "localizedName": "string"
      }
    ]
  },
  "metadataRecords": [
    {
      "metadataValues": [
        {
          "applicable": true,
          "value": {}
        }
      ],
      "value": {
        "applicable": true,
        "value": {}
      }
    }
  ]
}
```

Type the defines the metadata information of the report. This includes the headers and the individual metadata records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataHeader|[MetadataHeader](#schemametadataheader)|false|none|The container that returns the dimensionKeys and metrics headers for the report.|
|metadataRecords|[[MetadataRecord](#schemametadatarecord)]|false|none|A list of the individual report records.|

<h2 id="tocS_MetadataHeader">MetadataHeader</h2>
<!-- backwards compatibility -->
<a id="schemametadataheader"></a>
<a id="schema_MetadataHeader"></a>
<a id="tocSmetadataheader"></a>
<a id="tocsmetadataheader"></a>

```json
{
  "key": "string",
  "metadataKeys": [
    {
      "dataType": "string",
      "key": "string",
      "localizedName": "string"
    }
  ]
}
```

Type that defines the metadata header fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key value used for the report. For example: &quot;key&quot;: &quot;LISTING_ID&quot;|
|metadataKeys|[[Definition](#schemadefinition)]|false|none|The list of dimension key values used for the report header. Each list element contains the key name, its data type, and its localized name. For example: &quot;metadataKeys&quot;: [ &nbsp;&nbsp;&quot;key&quot;: &quot;LISTING_TITLE&quot;, &nbsp;&nbsp;&quot;localizedName&quot;: &quot;Listing title&quot;, &nbsp;&nbsp;&quot;dataType&quot;: &quot;STRING&quot;|

<h2 id="tocS_MetadataRecord">MetadataRecord</h2>
<!-- backwards compatibility -->
<a id="schemametadatarecord"></a>
<a id="schema_MetadataRecord"></a>
<a id="tocSmetadatarecord"></a>
<a id="tocsmetadatarecord"></a>

```json
{
  "metadataValues": [
    {
      "applicable": true,
      "value": {}
    }
  ],
  "value": {
    "applicable": true,
    "value": {}
  }
}
```

A complex type that defines the data records returned in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataValues|[[Value](#schemavalue)]|false|none|A list of data in a row returned in the traffic report. The data in each of the cells match the labels in headers of the report.|
|value|[Value](#schemavalue)|false|none|The value of the key on which the report is based. For example, if the key is the listing ID, the value of this container could be: &quot;value&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;142133954229&quot;, &nbsp;&nbsp;&quot;applicable&quot;: true }|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "benchmark": {
    "adjustment": "string",
    "basis": "string",
    "metadata": {
      "average": "string"
    },
    "rating": "string"
  },
  "distributions": [
    {
      "basis": "string",
      "data": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "metricKey": "string",
  "value": "string"
}
```

This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benchmark|[MetricBenchmark](#schemametricbenchmark)|false|none|This complex type defines a set of benchmark data, which includes the average rating for the group included in the benchmark evaluation and the seller's calculated customer service metric rating for the benchmark. This container is returned only if the associated metricKey value is RATE.|
|distributions|[[MetricDistribution](#schemametricdistribution)]|false|none|Returned when metricKey equals COUNT, this field returns an array of seller data where each set of data is grouped according by an overarching basis. When the seller distribution is returned, the numeric value of the associated value container equals the sum of the transactions where the seller meets the criteria of the customer service metric type for the given dimension during the evaluationCycle.|
|metricKey|string|false|none|This field indicates the customer service metric being returned in the associated metrics container. The field is set as follows: TRANSACTION_COUNT &ndash; When set to this value, the associated value field equals the total number of transactions completed in the seller group for the metric in the given dimension during the associated evaluationCycle. COUNT &ndash; When set to this value, the associated value field is set to the total number of transactions the seller completed that meet the criteria of the customer service metric type for the given dimension that occurred during the evaluationCycle. RATE &ndash; When set to this value, the value of the associated value field is the rate of the customer service metric type in the given dimension during the associated evaluationCycle. Specifically, when metricKey is set to RATE, the associated value field is set to the value of metricKey TRANSACTION_COUNT divided by the value of metricKey COUNT. The returned benchmark.rating for the seller is based on this calculated value.|
|value|string|false|none|This field is set to the seller's numeric rating for the associated metricKey for the given dimension during the evaluationCycle. To determine the seller's rating for this metric, the value of this field is compared to the average metric value of the group.|

<h2 id="tocS_MetricBenchmark">MetricBenchmark</h2>
<!-- backwards compatibility -->
<a id="schemametricbenchmark"></a>
<a id="schema_MetricBenchmark"></a>
<a id="tocSmetricbenchmark"></a>
<a id="tocsmetricbenchmark"></a>

```json
{
  "adjustment": "string",
  "basis": "string",
  "metadata": {
    "average": "string"
  },
  "rating": "string"
}
```

This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|string|false|none|If this field is present, it indicates that the rating given to the seller was &quot;adjusted&quot; for one reason or another. If eBay determines that the normal rating of a seller is impacted by circumstances beyond their control, they can issue an override to adjust the rating given to the seller. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingAdjustmentTypeEnum.html'>eBay API documentation</a>|
|basis|string|false|none|This field returns the &quot;basis&quot; by which the benchmark is calculated for the customer service metric type. Currently, the only supported basis is PEER_BENCHMARK. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/BenchmarkTypeEnum.html'>eBay API documentation</a>|
|metadata|[BenchmarkMetadata](#schemabenchmarkmetadata)|false|none|This field contains the benchmark data.|
|rating|string|false|none|This field returns seller's rating for the customer service metric. The rating is set to a value that equals the relative deviation between the seller's metric value and the benchmark value for the customer service metric. Deviation values range from LOW to VERY HIGH, and the lower the deviation, the better the seller rating. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingTypeEnum.html'>eBay API documentation</a>|

<h2 id="tocS_MetricDistribution">MetricDistribution</h2>
<!-- backwards compatibility -->
<a id="schemametricdistribution"></a>
<a id="schema_MetricDistribution"></a>
<a id="tocSmetricdistribution"></a>
<a id="tocsmetricdistribution"></a>

```json
{
  "basis": "string",
  "data": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

This complex data type describes the metric distribution by basis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basis|string|false|none|This field returns the basis, or the method, by which the metric rating is calculated.|
|data|[[Distribution](#schemadistribution)]|false|none|This field returns a list of name/value pairs, where the name indicates the distribution being rated and the value indicates the count of seller transactions that meet the distribution criteria.|

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "dimensionValues": [
    {
      "applicable": true,
      "value": {}
    }
  ],
  "metricValues": [
    {
      "applicable": true,
      "value": {}
    }
  ]
}
```

Type that defines the fields of the individual record of the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionValues|[[Value](#schemavalue)]|false|none|A list where each element contains either the string DAY (if the dimension is DAY), or the listing ID for which the record's metric data is computed. A second array member, applicable, is always true for dimension values.|
|metricValues|[[Value](#schemavalue)]|false|none|A list where each element contains a value field that indicates the record's value for the metric. Each element also contains an applicable field that indicates the veracity of the computed value. Note that there are no metric names or IDs associated with the values returned in this array. The metadata to which these values relate can be found in the key values . The order of the metric values in this array equals the order of the key values in metadataHeader.|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "dimensionMetadata": [
    {
      "metadataHeader": {
        "key": "string",
        "metadataKeys": [
          {
            "dataType": "string",
            "key": "string",
            "localizedName": "string"
          }
        ]
      },
      "metadataRecords": [
        {
          "metadataValues": [
            {
              "applicable": true,
              "value": {}
            }
          ],
          "value": {
            "applicable": true,
            "value": {}
          }
        }
      ]
    }
  ],
  "endDate": "string",
  "header": {
    "dimensionKeys": [
      {
        "dataType": "string",
        "key": "string",
        "localizedName": "string"
      }
    ],
    "metrics": [
      {
        "dataType": "string",
        "key": "string",
        "localizedName": "string"
      }
    ]
  },
  "lastUpdatedDate": "string",
  "records": [
    {
      "dimensionValues": [
        {
          "applicable": true,
          "value": {}
        }
      ],
      "metricValues": [
        {
          "applicable": true,
          "value": {}
        }
      ]
    }
  ],
  "startDate": "string",
  "warnings": [
    {
      "category": "string",
      "domain": "string",
      "errorId": 0,
      "inputRefIds": [
        "string"
      ],
      "longMessage": "string",
      "message": "string",
      "outputRefIds": [
        "string"
      ],
      "parameters": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "subdomain": "string"
    }
  ]
}
```

The complex type that defines that defines the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionMetadata|[[Metadata](#schemametadata)]|false|none|A complex type containing the header of the report and the type of data containted in the rows of the report.|
|endDate|string|false|none|The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. If you specify an end date that is beyond the lastUpdatedDate value, eBay returns a report that contains data only up to the lastUpdateDate date. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z|
|header|[Header](#schemaheader)|false|none|A complex type containing the header for the report.|
|lastUpdatedDate|string|false|none|The date and time, in ISO 8601 format, that indicates the last time the data returned in the report was updated.|
|records|[[Record](#schemarecord)]|false|none|A complex type containing the individual data records for the traffic report.|
|startDate|string|false|none|The start date of the date range used to calculate the report, in ISO 8601 format.|
|warnings|[[Error](#schemaerror)]|false|none|An array of any process errors or warnings that were generated during the processing of the call processing.|

<h2 id="tocS_StandardsProfile">StandardsProfile</h2>
<!-- backwards compatibility -->
<a id="schemastandardsprofile"></a>
<a id="schema_StandardsProfile"></a>
<a id="tocSstandardsprofile"></a>
<a id="tocsstandardsprofile"></a>

```json
{
  "cycle": {
    "cycleType": "string",
    "evaluationDate": "string",
    "evaluationMonth": "string"
  },
  "defaultProgram": true,
  "evaluationReason": "string",
  "metrics": [
    {
      "benchmark": {
        "adjustment": "string",
        "basis": "string",
        "metadata": {
          "average": "string"
        },
        "rating": "string"
      },
      "distributions": [
        {
          "basis": "string",
          "data": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "metricKey": "string",
      "value": "string"
    }
  ],
  "program": "string",
  "standardsLevel": "string"
}
```

A complex type that defines a seller profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cycle|[Cycle](#schemacycle)|false|none|A complex type that specifies the profile's evaluation cycle (CURRENT or PROJECTED), the date the evaluation was calculated, and the month to which the evaluation pertains. Each program has at least one cycle, but a program can include both cycle types.|
|defaultProgram|boolean|false|none|If set to true, this flag indicates this is the default program for the seller. Except for sellers in China, a seller's default program is the marketplace where they registered with eBay. Seller's in China select their default program when they register.|
|evaluationReason|string|false|none|Specifies how the overall seller level was calculated. In the event of special circumstances (as determined by eBay), eBay may override the calculated seller level. In general, such overrides protect a seller's level. The usual value for both cycle types is &quot;Seller level generated by standards monthly evaluation cycle.&quot;|
|metrics|[[Metric](#schemametric)]|false|none|A list of the metrics upon which a seller's profile is evaluated. Each program's applicable metrics and requirements are listed at eBay Top Rated seller program standards.|
|program|string|false|none|Indicates the program used to generate the profile data. Values can be PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/ProgramEnum.html'>eBay API documentation</a>|
|standardsLevel|string|false|none|The overall standards level of the seller, one of TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/StandardsLevelEnum.html'>eBay API documentation</a>|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "applicable": true,
  "value": {}
}
```

A complex type that contains a value, plus the veracity of that value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicable|boolean|false|none|If set to true, this flag indicates the value in the value field is valid as computed. A value of false indicates one or more of the values used to calculate the value was invalid. The occurrence of this is a rare, however consider this case: suppose a buyer navigates to a View Item page at 11:59 pm (the end of the day) and purchases the item at 12:05am the next day. In this case, the item would have been purchased with 0 views for the day.|
|value|object|false|none|The value of the report data.|
