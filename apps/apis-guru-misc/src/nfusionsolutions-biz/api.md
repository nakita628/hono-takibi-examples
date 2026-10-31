<h1 id="nfusion-solutions-market-data-api">nFusion Solutions Market Data API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[nFusion Solutions](https://nfusionsolutions.com) provides [REST APIs](https://nfusionsolutions.com/data-feeds/) that deliver enterprise-grade financial data. Data sets include real-time and historical pricing for Spot prices of precious metals such as Gold, Silver, Platinum, and Palladium, exchange rates for major currency pairs, exchange rates for Crypto Currencies such as BTC, ETH, and LTC. All API access requires authentication. In order to be issued access credentials you must first enter into a service agreement with nFusion Solutions and acquire a commercial license. For information on how to obtain a licence [take a tour of our products](https://nfusionsolutions.com/nfusion-solutions-metals-gold-price-feed-tour/) or email sales@nfusionsolutions.com.

Base URLs:

* <a href="https://api.nfusionsolutions.biz">https://api.nfusionsolutions.biz</a>

Email: <a href="mailto:support@nfusionsolutions.com">nFusion Solutions</a> 
Web: <a href="https://nfusionsolutions.com/contact-us">nFusion Solutions</a> 
License: <a href="https://nfusionsolutions.com/nfusion-solutions-metals-gold-price-feed-quote/">Commercial License</a>

# Authentication

* API Key (token)
    - Parameter Name: **token**, in: query. authorization token

<h1 id="nfusion-solutions-market-data-api-currencies">Currencies</h1>

## Get historical prices for requested currency pairs

<a id="opIdCurrencies_History_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Currencies/history?pairs=string&start=1970-01-01T00%3A00%3A00Z&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Currencies/history`

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

<h3 id="get-historical-prices-for-requested-currency-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pairs|query|string|true|comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD|
|start|query|string(date-time)|true|start date of time period. format is <i>yyyy-mm-dd</i>|
|end|query|string(date-time)|false|end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.|
|interval|query|string|false|aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), <br>followed by a type string which must be one of the following values:<br>y=year,<br>m=month,<br>w=week,<br>d=day,<br>h=hour,<br>mi=minute<br><br>For example, a yearly interval can be specified as "y" and 6 month interval as "6m". <br><br>If not specified the interval parameter default is 1 Day.|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "baseCurrency": "string",
      "intervals": [
        {
          "change": 0,
          "changePercent": 0,
          "end": "1970-01-01T00:00:00Z",
          "high": 0,
          "last": 0,
          "low": 0,
          "open": 0,
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "symbol": "string"
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-historical-prices-for-requested-currency-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-historical-prices-for-requested-currency-pairs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IntervalCollectionResponse](#schemaintervalcollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get list of currency pairs supported by the history endpoint

<a id="opIdCurrencies_SupportedCurrencies_History_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Currencies/history/supported?token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Currencies/history/supported`

Only the currency pairs in the direction noted can be used with the history endpoint.
For example: USD/CAD is not the same as CAD/USD

<h3 id="get-list-of-currency-pairs-supported-by-the-history-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-list-of-currency-pairs-supported-by-the-history-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-list-of-currency-pairs-supported-by-the-history-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get latest mid rate for requested currency pairs

<a id="opIdCurrencies_Rate_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Currencies/rate?pairs=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Currencies/rate`

Current Mid Rate

<h3 id="get-latest-mid-rate-for-requested-currency-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pairs|query|string|true|comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "symbol": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "value": 0
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-latest-mid-rate-for-requested-currency-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-latest-mid-rate-for-requested-currency-pairs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RateResponse](#schemarateresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get list of currencies supported by the rate endpoint

<a id="opIdCurrencies_SupportedCurrencies_Rate_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Currencies/rate/supported?token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Currencies/rate/supported`

Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD

<h3 id="get-list-of-currencies-supported-by-the-rate-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-list-of-currencies-supported-by-the-rate-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-list-of-currencies-supported-by-the-rate-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get latest Summary for requested currency pairs

<a id="opIdCurrencies_Summary_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Currencies/summary?pairs=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Currencies/summary`

Current and daily summary information combined into a single quote

<h3 id="get-latest-summary-for-requested-currency-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pairs|query|string|true|comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "ask": 0,
      "baseCurrency": "string",
      "bid": 0,
      "fiftyTwoWeekHigh": 0,
      "fiftyTwoWeekLow": 0,
      "fiftyTwoWeekPercentChange": 0,
      "fourWeekPercentChange": 0,
      "high": 0,
      "last": 0,
      "low": 0,
      "oneDayChange": 0,
      "oneDayPercentChange": 0,
      "oneDayValue": 0,
      "open": 0,
      "symbol": "string",
      "timeStamp": "1970-01-01T00:00:00Z",
      "twelveWeekPercentChange": 0,
      "yearToDatePercentChange": 0
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-latest-summary-for-requested-currency-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-latest-summary-for-requested-currency-pairs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SummaryResponse](#schemasummaryresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get list of currency pairs supported by the Summary endpoint

<a id="opIdCurrencies_SupportedCurrencies_Summary_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Currencies/summary/supported?token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Currencies/summary/supported`

Only the currency pairs in the direction noted can be used with the Summary endpoint.
For example: USD/CAD is not the same as CAD/USD

<h3 id="get-list-of-currency-pairs-supported-by-the-summary-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-list-of-currency-pairs-supported-by-the-summary-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-list-of-currency-pairs-supported-by-the-summary-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

<h1 id="nfusion-solutions-market-data-api-metals">Metals</h1>

## Get historical benchmark prices for requested metals

<a id="opIdMetals_BenchmarkHistory_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/benchmark/history?metals=string&start=1970-01-01T00%3A00%3A00Z&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/benchmark/history`

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

<h3 id="get-historical-benchmark-prices-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metals|query|string|true|comma separated list of metals|
|start|query|string(date-time)|true|start date of time period. format is <i>yyyy-mm-dd</i>|
|end|query|string(date-time)|false|end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.|
|interval|query|string|false|aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), <br>followed by a type string which must be one of the following values:<br>y=year,<br>m=month,<br>w=week,<br>d=day,<br>h=hour,<br>mi=minute<br><br>For example, a yearly interval can be specified as "y" and 6 month interval as "6m". <br><br>If not specified the interval parameter default is 1 Day.|
|historicalfx|query|boolean|false|if true use historical currency rates otherwise current currency rates. Defaults to true.|
|currency|query|string|false|comma separated list of conversion currencies, defaults to USD|
|unitofmeasure|query|string|false|unit of meaure, defaults to troy ounces. allowed values are:<br>mg=milligram<br>g=gram<br>kg=kilogram<br>gr=grain<br>oz=ounce<br>toz=troy ounce<br>ct=carat<br>dwt=pennyweight|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unitofmeasure|mg|
|unitofmeasure|g|
|unitofmeasure|kg|
|unitofmeasure|gr|
|unitofmeasure|oz|
|unitofmeasure|toz|
|unitofmeasure|ct|
|unitofmeasure|dwt|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "baseCurrency": "string",
      "intervals": [
        {
          "change": 0,
          "changePercent": 0,
          "end": "1970-01-01T00:00:00Z",
          "high": 0,
          "last": 0,
          "low": 0,
          "open": 0,
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "symbol": "string"
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-historical-benchmark-prices-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-historical-benchmark-prices-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IntervalCollectionResponse](#schemaintervalcollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get latest Benchmark prices for requested metals

<a id="opIdMetals_BenchmarkSummary_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/benchmark/summary?metals=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/benchmark/summary`

Benchmark price information

<h3 id="get-latest-benchmark-prices-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metals|query|string|true|comma separated list of metals|
|currency|query|string|false|comma separated list of conversion currencies, defaults to USD|
|unitofmeasure|query|string|false|unit of meaure, defaults to troy ounces. allowed values are:<br>mg=milligram<br>g=gram<br>kg=kilogram<br>gr=grain<br>oz=ounce<br>toz=troy ounce<br>ct=carat<br>dwt=pennyweight|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unitofmeasure|mg|
|unitofmeasure|g|
|unitofmeasure|kg|
|unitofmeasure|gr|
|unitofmeasure|oz|
|unitofmeasure|toz|
|unitofmeasure|ct|
|unitofmeasure|dwt|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "ask": 0,
      "baseCurrency": "string",
      "bid": 0,
      "fiftyTwoWeekHigh": 0,
      "fiftyTwoWeekLow": 0,
      "fiftyTwoWeekPercentChange": 0,
      "fourWeekPercentChange": 0,
      "high": 0,
      "last": 0,
      "low": 0,
      "oneDayChange": 0,
      "oneDayPercentChange": 0,
      "oneDayValue": 0,
      "open": 0,
      "symbol": "string",
      "timeStamp": "1970-01-01T00:00:00Z",
      "twelveWeekPercentChange": 0,
      "yearToDatePercentChange": 0
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-latest-benchmark-prices-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-latest-benchmark-prices-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SummaryResponse](#schemasummaryresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get list of symbols supported by the benchmark endpoints

<a id="opIdMetals_BenchmarkSupportedMetals_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/benchmark/supported?token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/benchmark/supported`

<h3 id="get-list-of-symbols-supported-by-the-benchmark-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-list-of-symbols-supported-by-the-benchmark-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-list-of-symbols-supported-by-the-benchmark-endpoints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get historical Spot prices for requested metals

<a id="opIdMetals_SpotHistory_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/history?metals=string&start=1970-01-01T00%3A00%3A00Z&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/history`

Historical OHLC data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.

<h3 id="get-historical-spot-prices-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metals|query|string|true|comma separated list of metals|
|start|query|string(date-time)|true|start date of time period. format is <i>yyyy-mm-dd</i>|
|end|query|string(date-time)|false|end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.|
|interval|query|string|false|aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), <br>followed by a type string which must be one of the following values:<br>y=year,<br>m=month,<br>w=week,<br>d=day,<br>h=hour,<br>mi=minute<br><br>For example, a yearly interval can be specified as "y" and 6 month interval as "6m". <br><br>If not specified the interval parameter default is 1 Day.|
|historicalfx|query|boolean|false|if true use historical currency rates otherwise current currency rates. Defaults to true.|
|currency|query|string|false|comma separated list of conversion currencies, defaults to USD|
|unitofmeasure|query|string|false|unit of meaure, defaults to troy ounces. allowed values are:<br>mg=milligram<br>g=gram<br>kg=kilogram<br>gr=grain<br>oz=ounce<br>toz=troy ounce<br>ct=carat<br>dwt=pennyweight|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unitofmeasure|mg|
|unitofmeasure|g|
|unitofmeasure|kg|
|unitofmeasure|gr|
|unitofmeasure|oz|
|unitofmeasure|toz|
|unitofmeasure|ct|
|unitofmeasure|dwt|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "baseCurrency": "string",
      "intervals": [
        {
          "change": 0,
          "changePercent": 0,
          "end": "1970-01-01T00:00:00Z",
          "high": 0,
          "last": 0,
          "low": 0,
          "open": 0,
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "symbol": "string"
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-historical-spot-prices-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-historical-spot-prices-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IntervalCollectionResponse](#schemaintervalcollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get Historical Performance for requested metals

<a id="opIdMetals_SpotHistoricalPerformance_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/performance?metals=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/performance`

Historical Performance information

<h3 id="get-historical-performance-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metals|query|string|true|comma separated list of metals|
|currency|query|string|false|comma separated list of conversion currencies, defaults to USD|
|unitofmeasure|query|string|false|unit of meaure, defaults to troy ounces. allowed values are:<br>mg=milligram<br>g=gram<br>kg=kilogram<br>gr=grain<br>oz=ounce<br>toz=troy ounce<br>ct=carat<br>dwt=pennyweight|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unitofmeasure|mg|
|unitofmeasure|g|
|unitofmeasure|kg|
|unitofmeasure|gr|
|unitofmeasure|oz|
|unitofmeasure|toz|
|unitofmeasure|ct|
|unitofmeasure|dwt|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "baseCurrency": "string",
      "intervals": [
        {
          "change": 0,
          "changePercent": 0,
          "end": "1970-01-01T00:00:00Z",
          "high": 0,
          "last": 0,
          "low": 0,
          "open": 0,
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "symbol": "string"
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-historical-performance-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-historical-performance-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IntervalCollectionResponse](#schemaintervalcollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get Historical Annual Performance for requested metals

<a id="opIdMetals_SpotAnnualHistoricalPerformance_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/performance/annual?metals=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/performance/annual`

Annual Historical Performance information

<h3 id="get-historical-annual-performance-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metals|query|string|true|comma separated list of metals|
|currency|query|string|false|comma separated list of conversion currencies, defaults to USD|
|unitofmeasure|query|string|false|unit of meaure, defaults to troy ounces. allowed values are:<br>mg=milligram<br>g=gram<br>kg=kilogram<br>gr=grain<br>oz=ounce<br>toz=troy ounce<br>ct=carat<br>dwt=pennyweight|
|format|query|string|false|to override content negotiation specify a value of json or xml|
|years|query|integer(int32)|false|Number of years of history to return. Defaults to 10.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unitofmeasure|mg|
|unitofmeasure|g|
|unitofmeasure|kg|
|unitofmeasure|gr|
|unitofmeasure|oz|
|unitofmeasure|toz|
|unitofmeasure|ct|
|unitofmeasure|dwt|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "baseCurrency": "string",
      "intervals": [
        {
          "change": 0,
          "changePercent": 0,
          "end": "1970-01-01T00:00:00Z",
          "high": 0,
          "last": 0,
          "low": 0,
          "open": 0,
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "symbol": "string"
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-historical-annual-performance-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-historical-annual-performance-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IntervalCollectionResponse](#schemaintervalcollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get historical Spot Ratio prices for requested metals

<a id="opIdMetals_SpotRatioHistory_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/ratio/history?pairs=string&start=1970-01-01T00%3A00%3A00Z&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/ratio/history`

Historical data for the specified period and interval size

The combination of the interval parameter and start and end dates can result in results
being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.

<h3 id="get-historical-spot-ratio-prices-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pairs|query|string|true|comma separated list of metals|
|start|query|string(date-time)|true|start date of time period. format is <i>yyyy-mm-dd</i>|
|end|query|string(date-time)|false|end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.|
|interval|query|string|false|aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), <br>followed by a type string which must be one of the following values:<br>y=year,<br>m=month,<br>w=week,<br>d=day,<br>h=hour,<br>mi=minute<br><br>For example, a yearly interval can be specified as "y" and 6 month interval as "6m". <br><br>If not specified the interval parameter default is 1 Day.|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "baseCurrency": "string",
      "intervals": [
        {
          "change": 0,
          "changePercent": 0,
          "end": "1970-01-01T00:00:00Z",
          "high": 0,
          "last": 0,
          "low": 0,
          "open": 0,
          "start": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "symbol": "string"
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-historical-spot-ratio-prices-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-historical-spot-ratio-prices-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IntervalCollectionResponse](#schemaintervalcollectionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get latest Spot Summary for requested metal ratios

<a id="opIdMetals_SpotRatioSummary_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/ratio/summary?pairs=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/ratio/summary`

Ratios between prices of two metals

<h3 id="get-latest-spot-summary-for-requested-metal-ratios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pairs|query|string|true|comma separated list of metal pairs. For example: gold/silver,gold/platinum,silver/palladium|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "ask": 0,
      "baseCurrency": "string",
      "bid": 0,
      "fiftyTwoWeekHigh": 0,
      "fiftyTwoWeekLow": 0,
      "fiftyTwoWeekPercentChange": 0,
      "fourWeekPercentChange": 0,
      "high": 0,
      "last": 0,
      "low": 0,
      "oneDayChange": 0,
      "oneDayPercentChange": 0,
      "oneDayValue": 0,
      "open": 0,
      "symbol": "string",
      "timeStamp": "1970-01-01T00:00:00Z",
      "twelveWeekPercentChange": 0,
      "yearToDatePercentChange": 0
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-latest-spot-summary-for-requested-metal-ratios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-latest-spot-summary-for-requested-metal-ratios-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SummaryResponse](#schemasummaryresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get latest Spot Summary for requested metals

<a id="opIdMetals_SpotSummary_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/summary?metals=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/summary`

Current and daily summary information combined into a single quote

<h3 id="get-latest-spot-summary-for-requested-metals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metals|query|string|true|comma separated list of metals|
|currency|query|string|false|comma separated list of conversion currencies, defaults to USD|
|unitofmeasure|query|string|false|unit of meaure, defaults to troy ounces. allowed values are:<br>mg=milligram<br>g=gram<br>kg=kilogram<br>gr=grain<br>oz=ounce<br>toz=troy ounce<br>ct=carat<br>dwt=pennyweight|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|unitofmeasure|mg|
|unitofmeasure|g|
|unitofmeasure|kg|
|unitofmeasure|gr|
|unitofmeasure|oz|
|unitofmeasure|toz|
|unitofmeasure|ct|
|unitofmeasure|dwt|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "data": {
      "ask": 0,
      "baseCurrency": "string",
      "bid": 0,
      "fiftyTwoWeekHigh": 0,
      "fiftyTwoWeekLow": 0,
      "fiftyTwoWeekPercentChange": 0,
      "fourWeekPercentChange": 0,
      "high": 0,
      "last": 0,
      "low": 0,
      "oneDayChange": 0,
      "oneDayPercentChange": 0,
      "oneDayValue": 0,
      "open": 0,
      "symbol": "string",
      "timeStamp": "1970-01-01T00:00:00Z",
      "twelveWeekPercentChange": 0,
      "yearToDatePercentChange": 0
    },
    "error": "string",
    "requestedCurrency": "string",
    "requestedSymbol": "string",
    "requestedUnitOfMeasure": "string",
    "success": true
  }
]
```

<h3 id="get-latest-spot-summary-for-requested-metals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-latest-spot-summary-for-requested-metals-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SummaryResponse](#schemasummaryresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get list of symbols supported by the spot endpoints

<a id="opIdMetals_SpotSupportedMetals_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/spot/supported?token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/spot/supported`

<h3 id="get-list-of-symbols-supported-by-the-spot-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-list-of-symbols-supported-by-the-spot-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-list-of-symbols-supported-by-the-spot-endpoints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

## Get list of currencies supported by metals endpoints for currency conversion

<a id="opIdMetals_SupportedCurrencies_Metals_GET"></a>

> Code samples

```bash
curl "https://example.com/api/v1/Metals/supported/currency?token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /api/v1/Metals/supported/currency`

<h3 id="get-list-of-currencies-supported-by-metals-endpoints-for-currency-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|to override content negotiation specify a value of json or xml|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-list-of-currencies-supported-by-metals-endpoints-for-currency-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="get-list-of-currencies-supported-by-metals-endpoints-for-currency-conversion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
token
</aside>

# Schemas

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
{
  "change": 0,
  "changePercent": 0,
  "end": "1970-01-01T00:00:00Z",
  "high": 0,
  "last": 0,
  "low": 0,
  "open": 0,
  "start": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change|number(double) \| null|false|none|none|
|changePercent|number(double) \| null|false|none|none|
|end|string(date-time)|false|none|none|
|high|number(double) \| null|false|none|none|
|last|number(double) \| null|false|none|none|
|low|number(double) \| null|false|none|none|
|open|number(double) \| null|false|none|none|
|start|string(date-time)|false|none|none|

<h2 id="tocS_IntervalCollection">IntervalCollection</h2>
<!-- backwards compatibility -->
<a id="schemaintervalcollection"></a>
<a id="schema_IntervalCollection"></a>
<a id="tocSintervalcollection"></a>
<a id="tocsintervalcollection"></a>

```json
{
  "baseCurrency": "string",
  "intervals": [
    {
      "change": 0,
      "changePercent": 0,
      "end": "1970-01-01T00:00:00Z",
      "high": 0,
      "last": 0,
      "low": 0,
      "open": 0,
      "start": "1970-01-01T00:00:00Z"
    }
  ],
  "name": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseCurrency|string \| null|false|none|none|
|intervals|[[Interval](#schemainterval)]|false|none|none|
|name|string \| null|false|none|none|
|symbol|string \| null|false|none|none|

<h2 id="tocS_IntervalCollectionResponse">IntervalCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintervalcollectionresponse"></a>
<a id="schema_IntervalCollectionResponse"></a>
<a id="tocSintervalcollectionresponse"></a>
<a id="tocsintervalcollectionresponse"></a>

```json
{
  "data": {
    "baseCurrency": "string",
    "intervals": [
      {
        "change": 0,
        "changePercent": 0,
        "end": "1970-01-01T00:00:00Z",
        "high": 0,
        "last": 0,
        "low": 0,
        "open": 0,
        "start": "1970-01-01T00:00:00Z"
      }
    ],
    "name": "string",
    "symbol": "string"
  },
  "error": "string",
  "requestedCurrency": "string",
  "requestedSymbol": "string",
  "requestedUnitOfMeasure": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[IntervalCollection](#schemaintervalcollection)|false|none|none|
|error|string \| null|false|none|none|
|requestedCurrency|string \| null|false|none|none|
|requestedSymbol|string \| null|false|none|none|
|requestedUnitOfMeasure|string \| null|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Rate">Rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_Rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
{
  "symbol": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string \| null|false|none|none|
|timestamp|string(date-time) \| null|false|none|none|
|value|number(double) \| null|false|none|none|

<h2 id="tocS_RateResponse">RateResponse</h2>
<!-- backwards compatibility -->
<a id="schemarateresponse"></a>
<a id="schema_RateResponse"></a>
<a id="tocSrateresponse"></a>
<a id="tocsrateresponse"></a>

```json
{
  "data": {
    "symbol": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "value": 0
  },
  "error": "string",
  "requestedCurrency": "string",
  "requestedSymbol": "string",
  "requestedUnitOfMeasure": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Rate](#schemarate)|false|none|none|
|error|string \| null|false|none|none|
|requestedCurrency|string \| null|false|none|none|
|requestedSymbol|string \| null|false|none|none|
|requestedUnitOfMeasure|string \| null|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
{
  "ask": 0,
  "baseCurrency": "string",
  "bid": 0,
  "fiftyTwoWeekHigh": 0,
  "fiftyTwoWeekLow": 0,
  "fiftyTwoWeekPercentChange": 0,
  "fourWeekPercentChange": 0,
  "high": 0,
  "last": 0,
  "low": 0,
  "oneDayChange": 0,
  "oneDayPercentChange": 0,
  "oneDayValue": 0,
  "open": 0,
  "symbol": "string",
  "timeStamp": "1970-01-01T00:00:00Z",
  "twelveWeekPercentChange": 0,
  "yearToDatePercentChange": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ask|number(double) \| null|false|none|none|
|baseCurrency|string \| null|false|none|none|
|bid|number(double) \| null|false|none|none|
|fiftyTwoWeekHigh|number(double) \| null|false|none|none|
|fiftyTwoWeekLow|number(double) \| null|false|none|none|
|fiftyTwoWeekPercentChange|number(double) \| null|false|none|none|
|fourWeekPercentChange|number(double) \| null|false|none|none|
|high|number(double) \| null|false|none|none|
|last|number(double) \| null|false|none|none|
|low|number(double) \| null|false|none|none|
|oneDayChange|number(double) \| null|false|none|none|
|oneDayPercentChange|number(double) \| null|false|none|none|
|oneDayValue|number(double) \| null|false|none|none|
|open|number(double) \| null|false|none|none|
|symbol|string \| null|false|none|none|
|timeStamp|string(date-time)|false|none|none|
|twelveWeekPercentChange|number(double) \| null|false|none|none|
|yearToDatePercentChange|number(double) \| null|false|none|none|

<h2 id="tocS_SummaryResponse">SummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasummaryresponse"></a>
<a id="schema_SummaryResponse"></a>
<a id="tocSsummaryresponse"></a>
<a id="tocssummaryresponse"></a>

```json
{
  "data": {
    "ask": 0,
    "baseCurrency": "string",
    "bid": 0,
    "fiftyTwoWeekHigh": 0,
    "fiftyTwoWeekLow": 0,
    "fiftyTwoWeekPercentChange": 0,
    "fourWeekPercentChange": 0,
    "high": 0,
    "last": 0,
    "low": 0,
    "oneDayChange": 0,
    "oneDayPercentChange": 0,
    "oneDayValue": 0,
    "open": 0,
    "symbol": "string",
    "timeStamp": "1970-01-01T00:00:00Z",
    "twelveWeekPercentChange": 0,
    "yearToDatePercentChange": 0
  },
  "error": "string",
  "requestedCurrency": "string",
  "requestedSymbol": "string",
  "requestedUnitOfMeasure": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Summary](#schemasummary)|false|none|none|
|error|string \| null|false|none|none|
|requestedCurrency|string \| null|false|none|none|
|requestedSymbol|string \| null|false|none|none|
|requestedUnitOfMeasure|string \| null|false|none|none|
|success|boolean|false|none|none|
