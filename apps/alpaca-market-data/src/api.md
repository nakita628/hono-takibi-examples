<h1 id="market-data-api">Market Data API v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Access real-time and historical market data for US equities, options, crypto, and foreign exchange data through the Alpaca REST and WebSocket APIs. There are APIs for Stock Pricing, Option Pricing, Crypto Pricing, Forex, Logos, Fixed income, Corporate Actions, Screener, and News.

Base URLs:

* <a href="https://data.alpaca.markets">https://data.alpaca.markets</a> - Production

* <a href="https://data.sandbox.alpaca.markets">https://data.sandbox.alpaca.markets</a> - Sandbox

<a href="https://s3.amazonaws.com/files.alpaca.markets/disclosures/library/TermsAndConditions.pdf">Terms of service</a>
Email: <a href="mailto:support@alpaca.markets">Alpaca Support</a> 
Web: <a href="https://alpaca.markets/support">Alpaca Support</a> 
License: <a href="https://spdx.org/licenses/CC-BY-SA-4.0.html">Creative Commons Attribution Share Alike 4.0 International</a>

# Authentication

- HTTP Authentication, scheme: basic

* API Key (apiKey)
    - Parameter Name: **APCA-API-KEY-ID**, in: header.

* API Key (apiSecret)
    - Parameter Name: **APCA-API-SECRET-KEY**, in: header.

<h1 id="market-data-api-stock">Stock</h1>

Endpoints for stocks.

## Historical auctions (single)

<a id="opIdStockAuctionSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/auctions \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/auctions`

The historical auctions endpoint provides auction prices for the given stock symbol between the specified dates.


<h3 id="historical-auctions-single-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_auction_feed](#schemastock_auction_feed)|false|Only `sip` is valid for auctions.|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

> Example responses

> 200 Response

```json
{
  "auctions": [
    {
      "c": [
        {
          "c": "M",
          "p": 221.7,
          "t": "2022-10-13T20:00:00.152902912Z",
          "x": "P"
        }
      ],
      "d": "2022-10-13",
      "o": [
        {
          "c": "Q",
          "p": 208.37,
          "t": "2022-10-13T13:30:00.068034304Z",
          "x": "P"
        },
        {
          "c": "O",
          "p": 208.49,
          "t": "2022-10-13T13:30:01.079567733Z",
          "x": "Q"
        },
        {
          "c": "Q",
          "p": 208.49,
          "t": "2022-10-13T13:30:01.090802222Z",
          "x": "Q"
        }
      ]
    }
  ],
  "next_page_token": "MjAyMi0xMC0xM1QyMDowMDowMC4xNTI5MDI5MTJafFA=",
  "symbol": "TSLA"
}
```

<h3 id="historical-auctions-single-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_auctions_resp_single](#schemastock_auctions_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical bars (single symbol)

<a id="opIdStockBarSingle"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/AAPL/bars?timeframe=1Min' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/bars`

The historical stock bars API provides aggregates for the stock symbol between the specified dates.

<h3 id="historical-bars-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|timeframe|query|string|true|The timeframe represented by each bar in aggregation.<br>You can use any of the following values:<br> - `[1-59]Min` or `[1-59]T`, e.g. `5Min` or `5T` creates 5-minute aggregations<br> - `[1-23]Hour` or `[1-23]H`, e.g. `12Hour` or `12H` creates 12-hour aggregations<br> - `1Day` or `1D` creates 1-day aggregations<br> - `1Week` or `1W` creates 1-week aggregations<br> - `[1,2,3,4,6,12]Month` or `[1,2,3,4,6,12]M`, e.g. `3Month` or `3M` creates 3-month aggregations<br>|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|adjustment|query|string|false|Specifies the adjustments for the bars.<br><br> - `raw`: no adjustments<br> - `split`: adjust price and volume for forward and reverse stock splits<br> - `dividend`: adjust price for cash dividends<br> - `spin-off`: adjust price for spin-offs<br> - `all`: apply all above adjustments<br><br>You can combine multiple adjustments by separating them with a comma, e.g. `split,spin-off`.<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_historical_feed](#schemastock_historical_feed)|false|The source feed of the data.<br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `boats`: Blue Ocean ATS, overnight US trading data<br> - `otc`: over-the-counter exchanges<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|

> Example responses

> 200 Response

```json
{
  "bars": [
    {
      "c": 178.21,
      "h": 178.26,
      "l": 178.21,
      "n": 65,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 1118,
      "vw": 178.235733
    }
  ],
  "next_page_token": "QUFQTHxNfDIwMjItMDEtMDNUMDk6MDA6MDAuMDAwMDAwMDAwWg==",
  "symbol": "AAPL"
}
```

<h3 id="historical-bars-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_bars_resp_single](#schemastock_bars_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest bar (single symbol)

<a id="opIdStockLatestBarSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/bars/latest \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/bars/latest`

The latest bar endpoint returns the latest minute bar for the given ticker symbol.


<h3 id="latest-bar-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "bar": {
    "c": 173,
    "h": 173.04,
    "l": 172.98,
    "n": 49,
    "o": 172.98,
    "t": "2022-08-17T09:07:00Z",
    "v": 2748,
    "vw": 173.007817
  },
  "symbol": "AAPL"
}
```

<h3 id="latest-bar-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_latest_bars_resp_single](#schemastock_latest_bars_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical quotes (single symbol)

<a id="opIdStockQuoteSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/quotes \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/quotes`

The historical stock quotes API provides quote data for a stock symbol between the specified dates.

<h3 id="historical-quotes-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_historical_feed](#schemastock_historical_feed)|false|The source feed of the data.<br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `boats`: Blue Ocean ATS, overnight US trading data<br> - `otc`: over-the-counter exchanges<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjAyODI5NDQ1MVp8MjM3NjQ0Qzg=",
  "quotes": [
    {
      "ap": 0,
      "as": 0,
      "ax": " ",
      "bp": 177.92,
      "bs": 4,
      "bx": "Q",
      "c": [
        "Y"
      ],
      "t": "2022-01-03T09:00:00.028160898Z",
      "z": "C"
    },
    {
      "ap": 178.8,
      "as": 4,
      "ax": "Q",
      "bp": 177.92,
      "bs": 4,
      "bx": "Q",
      "c": [
        "R"
      ],
      "t": "2022-01-03T09:00:00.028294451Z",
      "z": "C"
    }
  ],
  "symbol": "AAPL"
}
```

<h3 id="historical-quotes-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_quotes_resp_single](#schemastock_quotes_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest quote (single symbol)

<a id="opIdStockLatestQuoteSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/quotes/latest \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/quotes/latest`

The latest quote endpoint provides the latest best bid and ask prices for a given ticker symbol.


<h3 id="latest-quote-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "quote": {
    "ap": 172.7,
    "as": 1,
    "ax": "Q",
    "bp": 172.6,
    "bs": 2,
    "bx": "Q",
    "c": [
      "R"
    ],
    "t": "2022-08-17T10:09:34.055031265Z",
    "z": "C"
  },
  "symbol": "AAPL"
}
```

<h3 id="latest-quote-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_latest_quotes_resp_single](#schemastock_latest_quotes_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Snapshot (single symbol)

<a id="opIdStockSnapshotSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/snapshot \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/snapshot`

The snapshot endpoint provides the latest trade, latest quote, minute bar, daily bar, and previous daily bar data for a given ticker symbol.


<h3 id="snapshot-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "dailyBar": {
    "c": 173.03,
    "h": 173.71,
    "l": 171.6618,
    "n": 515139,
    "o": 172.62,
    "t": "2022-08-16T04:00:00Z",
    "v": 56457696,
    "vw": 172.743391
  },
  "latestQuote": {
    "ap": 172.65,
    "as": 1,
    "ax": "Q",
    "bp": 172.51,
    "bs": 1,
    "bx": "P",
    "c": [
      "R"
    ],
    "t": "2022-08-17T10:19:30.805564086Z",
    "z": "C"
  },
  "latestTrade": {
    "c": [
      "@",
      "T"
    ],
    "i": 1040,
    "p": 172.55,
    "s": 229,
    "t": "2022-08-17T10:19:30.735811394Z",
    "x": "Q",
    "z": "C"
  },
  "minuteBar": {
    "c": 172.6,
    "h": 172.65,
    "l": 172.6,
    "n": 57,
    "o": 172.65,
    "t": "2022-08-17T10:18:00Z",
    "v": 3746,
    "vw": 172.618377
  },
  "prevDailyBar": {
    "c": 173.19,
    "h": 173.39,
    "l": 171.345,
    "n": 501626,
    "o": 171.5,
    "t": "2022-08-15T04:00:00Z",
    "v": 54091719,
    "vw": 172.625371
  },
  "symbol": "AAPL"
}
```

<h3 id="snapshot-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_snapshots_resp_single](#schemastock_snapshots_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical trades (single symbol)

<a id="opIdStockTradeSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/trades \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/trades`

The historical stock trades API provides trade data for a stock symbol between the specified dates.

<h3 id="historical-trades-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_historical_feed](#schemastock_historical_feed)|false|The source feed of the data.<br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `boats`: Blue Ocean ATS, overnight US trading data<br> - `otc`: over-the-counter exchanges<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTHwyMDIyLTAxLTAzVDE3OjAwOjAwLjAyOTU5MTQ3Nlp8UXwwOTIyMzM3MjAzNjg1NDg0OTY0Mg==",
  "symbol": "AAPL",
  "trades": [
    {
      "c": [
        "@",
        "I"
      ],
      "i": 73833,
      "p": 181.47,
      "s": 1,
      "t": "2022-01-03T17:00:00.029591476Z",
      "x": "Q",
      "z": "C"
    },
    {
      "c": [
        "@",
        "I"
      ],
      "i": 73834,
      "p": 181.47,
      "s": 1,
      "t": "2022-01-03T17:00:00.029591476Z",
      "x": "Q",
      "z": "C"
    }
  ]
}
```

<h3 id="historical-trades-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_trades_resp_single](#schemastock_trades_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest trade (single symbol)

<a id="opIdStockLatestTradeSingle"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/AAPL/trades/latest \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/{symbol}/trades/latest`

The latest trade endpoint provides the latest trade for the given ticker symbol.

Trades with any conditions that causes them to not update the bar price are excluded. For example a trade with condition `I` (odd lot) will never appear on this endpoint. You can find the complete list of excluded conditions in [this FAQ](https://docs.alpaca.markets/docs/market-data-faq#how-are-bars-aggregated).

<h3 id="latest-trade-single-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|The symbol to query.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "symbol": "AAPL",
  "trade": {
    "c": [
      "@",
      "T"
    ],
    "i": 689,
    "p": 172.6,
    "s": 100,
    "t": "2022-08-17T09:53:16.845580544Z",
    "x": "P",
    "z": "C"
  }
}
```

<h3 id="latest-trade-single-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_latest_trades_resp_single](#schemastock_latest_trades_resp_single)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical auctions

<a id="opIdStockAuctions"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/auctions?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/auctions`

The historical auctions endpoint provides auction prices for a list of stock symbols between the specified dates.


<h3 id="historical-auctions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_auction_feed](#schemastock_auction_feed)|false|Only `sip` is valid for auctions.|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

> Example responses

> 200 Response

```json
{
  "auctions": {
    "AAPL": [
      {
        "c": [
          {
            "c": "6",
            "p": 138.36,
            "t": "2022-10-12T20:00:00.120649216Z",
            "x": "P"
          },
          {
            "c": "M",
            "p": 138.36,
            "t": "2022-10-12T20:00:00.125925888Z",
            "x": "P"
          },
          {
            "c": "6",
            "p": 138.34,
            "t": "2022-10-12T20:00:00.875570864Z",
            "x": "Q"
          },
          {
            "c": "M",
            "p": 138.34,
            "t": "2022-10-12T20:00:00.875603021Z",
            "x": "Q"
          }
        ],
        "d": "2022-10-12",
        "o": [
          {
            "c": "Q",
            "p": 139.12,
            "t": "2022-10-12T13:30:00.188390144Z",
            "x": "P"
          },
          {
            "c": "O",
            "p": 138.99,
            "t": "2022-10-12T13:30:01.474665705Z",
            "x": "Q"
          },
          {
            "c": "Q",
            "p": 138.99,
            "t": "2022-10-12T13:30:01.475216565Z",
            "x": "Q"
          }
        ]
      },
      {
        "c": [
          {
            "c": "M",
            "p": 142.94,
            "t": "2022-10-13T20:00:00.166980864Z",
            "x": "P"
          }
        ],
        "d": "2022-10-13",
        "o": [
          {
            "c": "Q",
            "p": 134.8,
            "t": "2022-10-13T13:30:00.20304384Z",
            "x": "P"
          },
          {
            "c": "O",
            "p": 135,
            "t": "2022-10-13T13:30:01.688322951Z",
            "x": "Q"
          },
          {
            "c": "Q",
            "p": 135,
            "t": "2022-10-13T13:30:01.699259366Z",
            "x": "Q"
          }
        ]
      }
    ],
    "TSLA": [
      {
        "c": [
          {
            "c": "M",
            "p": 217.23,
            "t": "2022-10-12T20:00:00.124164096Z",
            "x": "P"
          },
          {
            "c": "6",
            "p": 217.24,
            "t": "2022-10-12T20:00:00.469874365Z",
            "x": "Q"
          },
          {
            "c": "M",
            "p": 217.24,
            "t": "2022-10-12T20:00:00.469912641Z",
            "x": "Q"
          }
        ],
        "d": "2022-10-12",
        "o": [
          {
            "c": "Q",
            "p": 215.39,
            "t": "2022-10-12T13:30:00.065736192Z",
            "x": "P"
          },
          {
            "c": "O",
            "p": 215.79,
            "t": "2022-10-12T13:30:01.349399539Z",
            "x": "Q"
          },
          {
            "c": "Q",
            "p": 215.79,
            "t": "2022-10-12T13:30:01.349965972Z",
            "x": "Q"
          }
        ]
      },
      {
        "c": [
          {
            "c": "M",
            "p": 221.7,
            "t": "2022-10-13T20:00:00.152902912Z",
            "x": "P"
          }
        ],
        "d": "2022-10-13",
        "o": [
          {
            "c": "Q",
            "p": 208.37,
            "t": "2022-10-13T13:30:00.068034304Z",
            "x": "P"
          },
          {
            "c": "O",
            "p": 208.49,
            "t": "2022-10-13T13:30:01.079567733Z",
            "x": "Q"
          },
          {
            "c": "Q",
            "p": 208.49,
            "t": "2022-10-13T13:30:01.090802222Z",
            "x": "Q"
          }
        ]
      }
    ]
  },
  "next_page_token": "MjAyMi0xMC0xM1QyMDowMDowMC4xNTI5MDI5MTJafFA="
}
```

<h3 id="historical-auctions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_auctions_resp](#schemastock_auctions_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical bars

<a id="opIdStockBars"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/bars?symbols=AAPL%2CTSLA&timeframe=1Min' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/bars`

The historical stock bars API provides aggregates for a list of stock symbols between the specified dates.

The returned results are sorted by symbol first, then by bar timestamp. This means that you are likely to see only one symbol in your first response if there are enough bars for that symbol to hit the limit you requested.

In these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any bars were found for them.

<h3 id="historical-bars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|timeframe|query|string|true|The timeframe represented by each bar in aggregation.<br>You can use any of the following values:<br> - `[1-59]Min` or `[1-59]T`, e.g. `5Min` or `5T` creates 5-minute aggregations<br> - `[1-23]Hour` or `[1-23]H`, e.g. `12Hour` or `12H` creates 12-hour aggregations<br> - `1Day` or `1D` creates 1-day aggregations<br> - `1Week` or `1W` creates 1-week aggregations<br> - `[1,2,3,4,6,12]Month` or `[1,2,3,4,6,12]M`, e.g. `3Month` or `3M` creates 3-month aggregations<br>|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|adjustment|query|string|false|Specifies the adjustments for the bars.<br><br> - `raw`: no adjustments<br> - `split`: adjust price and volume for forward and reverse stock splits<br> - `dividend`: adjust price for cash dividends<br> - `spin-off`: adjust price for spin-offs<br> - `all`: apply all above adjustments<br><br>You can combine multiple adjustments by separating them with a comma, e.g. `split,spin-off`.<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_historical_feed](#schemastock_historical_feed)|false|The source feed of the data.<br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `boats`: Blue Ocean ATS, overnight US trading data<br> - `otc`: over-the-counter exchanges<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|

> Example responses

> 200 Response

```json
{
  "bars": {
    "AAPL": [
      {
        "c": 178.21,
        "h": 178.26,
        "l": 178.21,
        "n": 65,
        "o": 178.26,
        "t": "2022-01-03T09:00:00Z",
        "v": 1118,
        "vw": 178.235733
      }
    ]
  },
  "next_page_token": "QUFQTHxNfDIwMjItMDEtMDNUMDk6MDA6MDAuMDAwMDAwMDAwWg=="
}
```

<h3 id="historical-bars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_bars_resp](#schemastock_bars_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest bars

<a id="opIdStockLatestBars"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/bars/latest?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/bars/latest`

The latest bars endpoint provides the latest minute bar for the given ticker symbols.


<h3 id="latest-bars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "bars": {
    "AAPL": {
      "c": 172.79,
      "h": 172.81,
      "l": 172.78,
      "n": 20,
      "o": 172.81,
      "t": "2022-08-17T08:58:00Z",
      "v": 1002,
      "vw": 172.791417
    },
    "TSLA": {
      "c": 914.3,
      "h": 914.3,
      "l": 914.3,
      "n": 20,
      "o": 914.3,
      "t": "2022-08-17T08:57:00Z",
      "v": 751,
      "vw": 914.294634
    }
  }
}
```

<h3 id="latest-bars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_latest_bars_resp](#schemastock_latest_bars_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Condition codes

<a id="opIdStockMetaConditions"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/meta/conditions/trade?tape=A' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/meta/conditions/{ticktype}`

Returns the mapping between the condition codes and names.

<h3 id="condition-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticktype|path|string|true|The type of ticks.|
|tape|query|string|true|The one character name of the tape.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ticktype|trade|
|ticktype|quote|
|tape|A|
|tape|B|
|tape|C|

> Example responses

> 200 Response

```json
{
  "@": "Regular Sale",
  "A": "Acquisition",
  "B": "Bunched Trade"
}
```

<h3 id="condition-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_conditions](#schemastock_conditions)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Exchange codes

<a id="opIdStockMetaExchanges"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v2/stocks/meta/exchanges \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/meta/exchanges`

Returns the mapping between the stock exchange codes and the corresponding exchange names.


> Example responses

> 200 Response

```json
{
  "N": "New York Stock Exchange",
  "V": "IEX"
}
```

<h3 id="exchange-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_exchanges](#schemastock_exchanges)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical quotes

<a id="opIdStockQuotes"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/quotes?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/quotes`

The historical stock quotes API provides quote data for a list of stock symbols between the specified dates.

The returned results are sorted by symbol first, then by the quote timestamp. This means that you are likely to see only one symbol in your first response if there are enough quotes for that symbol to hit the limit you requested.

In these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any quotes were found for them.

<h3 id="historical-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_historical_feed](#schemastock_historical_feed)|false|The source feed of the data.<br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `boats`: Blue Ocean ATS, overnight US trading data<br> - `otc`: over-the-counter exchanges<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjAyODI5NDQ1MVp8MjM3NjQ0Qzg=",
  "quotes": {
    "AAPL": [
      {
        "ap": 0,
        "as": 0,
        "ax": " ",
        "bp": 177.92,
        "bs": 4,
        "bx": "Q",
        "c": [
          "Y"
        ],
        "t": "2022-01-03T09:00:00.028160898Z",
        "z": "C"
      },
      {
        "ap": 178.8,
        "as": 4,
        "ax": "Q",
        "bp": 177.92,
        "bs": 4,
        "bx": "Q",
        "c": [
          "R"
        ],
        "t": "2022-01-03T09:00:00.028294451Z",
        "z": "C"
      }
    ]
  }
}
```

<h3 id="historical-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_quotes_resp](#schemastock_quotes_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest quotes

<a id="opIdStockLatestQuotes"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/quotes/latest?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/quotes/latest`

The latest quotes endpoint provides the latest best bid and ask prices for the given ticker symbols.


<h3 id="latest-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "quotes": {
    "AAPL": {
      "ap": 172.7,
      "as": 1,
      "ax": "Q",
      "bp": 172.62,
      "bs": 2,
      "bx": "Q",
      "c": [
        "R"
      ],
      "t": "2022-08-17T10:07:40.286587431Z",
      "z": "C"
    },
    "TSLA": {
      "ap": 911.6,
      "as": 1,
      "ax": "Q",
      "bp": 911.3,
      "bs": 1,
      "bx": "K",
      "c": [
        "R"
      ],
      "t": "2022-08-17T10:07:49.387064037Z",
      "z": "C"
    }
  }
}
```

<h3 id="latest-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_latest_quotes_resp](#schemastock_latest_quotes_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Snapshots

<a id="opIdStockSnapshots"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/snapshots?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/snapshots`

The snapshot endpoint for multiple tickers provides the latest trade, latest quote, minute bar, daily bar, and previous daily bar data for each given ticker symbol.


<h3 id="snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "AAPL": {
    "dailyBar": {
      "c": 173.03,
      "h": 173.71,
      "l": 171.6618,
      "n": 515139,
      "o": 172.62,
      "t": "2022-08-16T04:00:00Z",
      "v": 56457696,
      "vw": 172.743391
    },
    "latestQuote": {
      "ap": 172.7,
      "as": 5,
      "ax": "Q",
      "bp": 172.6,
      "bs": 2,
      "bx": "Q",
      "c": [
        "R"
      ],
      "t": "2022-08-17T10:18:27.052763263Z",
      "z": "C"
    },
    "latestTrade": {
      "c": [
        "@",
        "T"
      ],
      "i": 1011,
      "p": 172.61,
      "s": 160,
      "t": "2022-08-17T10:18:24.114694956Z",
      "x": "Q",
      "z": "C"
    },
    "minuteBar": {
      "c": 172.69,
      "h": 172.69,
      "l": 172.69,
      "n": 3,
      "o": 172.69,
      "t": "2022-08-17T10:16:00Z",
      "v": 106,
      "vw": 172.688113
    },
    "prevDailyBar": {
      "c": 173.19,
      "h": 173.39,
      "l": 171.345,
      "n": 501626,
      "o": 171.5,
      "t": "2022-08-15T04:00:00Z",
      "v": 54091719,
      "vw": 172.625371
    }
  },
  "TSLA": {
    "dailyBar": {
      "c": 919.69,
      "h": 944,
      "l": 908.65,
      "n": 805572,
      "o": 935,
      "t": "2022-08-16T04:00:00Z",
      "v": 29378774,
      "vw": 925.215087
    },
    "latestQuote": {
      "ap": 911.75,
      "as": 4,
      "ax": "P",
      "bp": 911.31,
      "bs": 1,
      "bx": "Q",
      "c": [
        "R"
      ],
      "t": "2022-08-17T10:18:23.84717767Z",
      "z": "C"
    },
    "latestTrade": {
      "c": [
        "@",
        "T"
      ],
      "i": 2047,
      "p": 911.99,
      "s": 100,
      "t": "2022-08-17T10:13:12.952851456Z",
      "x": "P",
      "z": "C"
    },
    "minuteBar": {
      "c": 911.99,
      "h": 911.99,
      "l": 911.99,
      "n": 64,
      "o": 911.99,
      "t": "2022-08-17T10:13:00Z",
      "v": 740,
      "vw": 911.780405
    },
    "prevDailyBar": {
      "c": 927.96,
      "h": 939.4,
      "l": 903.69,
      "n": 825109,
      "o": 905.32,
      "t": "2022-08-15T04:00:00Z",
      "v": 29786389,
      "vw": 923.982755
    }
  }
}
```

<h3 id="snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_snapshots_resp](#schemastock_snapshots_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical trades

<a id="opIdStockTrades"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/trades?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/trades`

The historical stock trades API provides trade data for a list of stock symbols between the specified dates.

The returned results are sorted by symbol first then by trade timestamp. This means that you are likely to see only one symbol in your first response if there are enough trades for that symbol to hit the limit you requested.

In these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any trades were found for them.

<h3 id="historical-trades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|asof|query|string|false|The as-of date of the queried stock symbol(s). Format: YYYY-MM-DD. Default: current day.<br><br>This date is used to identify the underlying entity of the provided symbol(s), so that name changes for this entity can be found. Data for past symbol(s) is returned if the query date range spans the name change.<br><br>The special value of "-" means symbol mapping is skipped. Data is returned based on the symbol alone without looking up previous names. The same happens if the queried symbol is not found on the given `asof` date.<br><br>Example: FB was renamed to META in 2022-06-09. Querying META with an `asof` date after 2022-06-09 will also yield FB data. The data for the FB ticker will be labeled as META because they are considered the same underlying entity as of 2022-06-09. Querying FB with an `asof` date after 2022-06-09 will only return data with the FB ticker, not with META. But with an `asof` date before 2022-06-09, META will also be returned (as FB).<br>|
|feed|query|[stock_historical_feed](#schemastock_historical_feed)|false|The source feed of the data.<br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `boats`: Blue Ocean ATS, overnight US trading data<br> - `otc`: over-the-counter exchanges<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjI0NDgzOTY4MFp8UHwwOTIyMzM3MjAzNjg1NDc3NTgxMA==",
  "trades": {
    "AAPL": [
      {
        "c": [
          "@",
          "T"
        ],
        "i": 1,
        "p": 178.26,
        "s": 246,
        "t": "2022-01-03T09:00:00.086175744Z",
        "x": "P",
        "z": "C"
      },
      {
        "c": [
          "@",
          "F",
          "T",
          "I"
        ],
        "i": 2,
        "p": 178.26,
        "s": 1,
        "t": "2022-01-03T09:00:00.24483968Z",
        "x": "P",
        "z": "C"
      }
    ]
  }
}
```

<h3 id="historical-trades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_trades_resp](#schemastock_trades_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest trades

<a id="opIdStockLatestTrades"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v2/stocks/trades/latest?symbols=AAPL%2CTSLA' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/stocks/trades/latest`

The latest trades endpoint provides the latest trades for the given ticker symbols.

Trades with any conditions that causes them to not update the bar price are excluded. For example a trade with condition `I` (odd lot) will never appear on this endpoint. You can find the complete list of excluded conditions in [this FAQ](https://docs.alpaca.markets/docs/market-data-faq#how-are-bars-aggregated).

<h3 id="latest-trades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of stock symbols.|
|feed|query|[stock_latest_feed](#schemastock_latest_feed)|false|The source feed of the data.<br><br> - `sip`: all US exchanges<br> - `iex`: Investors EXchange<br> - `delayed_sip`: SIP with a 15 minute delay<br> - `boats`: Blue Ocean, overnight US trading data<br> - `overnight`: derived overnight US trading data<br> - `otc`: over-the-counter exchanges<br><br>Default: `sip` if the user has the unlimited subscription, otherwise `iex`.<br>|
|currency|query|string|false|The currency of all prices in ISO 4217 format. Default: USD.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|delayed_sip|
|feed|iex|
|feed|otc|
|feed|sip|
|feed|boats|
|feed|overnight|

> Example responses

> 200 Response

```json
{
  "trades": {
    "AAPL": {
      "c": [
        "@",
        "F",
        "T"
      ],
      "i": 826,
      "p": 172.78,
      "s": 100,
      "t": "2022-08-17T09:50:43.361102308Z",
      "x": "Q",
      "z": "C"
    }
  }
}
```

<h3 id="latest-trades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[stock_latest_trades_resp](#schemastock_latest_trades_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-option">Option</h1>

Endpoints for option data.

## Historical bars

<a id="opIdoptionBars"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/options/bars?symbols=AAPL241220C00300000%2CAAPL240315C00225000&timeframe=1Min' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/bars`

The historical option bars API provides aggregates for a list of option symbols between the specified dates.

The returned results are sorted by symbol first, then by bar timestamp.
This means that you are likely to see only one symbol in your first response if there are enough bars for that symbol to hit the limit you requested.

In these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any bars were found for them.

<h3 id="historical-bars-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of contract symbols with a limit of 100.|
|timeframe|query|string|true|The timeframe represented by each bar in aggregation.<br>You can use any of the following values:<br> - `[1-59]Min` or `[1-59]T`, e.g. `5Min` or `5T` creates 5-minute aggregations<br> - `[1-23]Hour` or `[1-23]H`, e.g. `12Hour` or `12H` creates 12-hour aggregations<br> - `1Day` or `1D` creates 1-day aggregations<br> - `1Week` or `1W` creates 1-week aggregations<br> - `[1,2,3,4,6,12]Month` or `[1,2,3,4,6,12]M`, e.g. `3Month` or `3M` creates 3-month aggregations<br>|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

> Example responses

> 200 Response

```json
{
  "bars": {
    "AAPL240419P00140000": [
      {
        "c": 0.34,
        "h": 0.38,
        "l": 0.34,
        "n": 7,
        "o": 0.38,
        "t": "2024-01-18T05:00:00Z",
        "v": 12,
        "vw": 0.3525
      }
    ]
  },
  "next_page_token": "QUFQTHxNfDIwMjItMDEtMDNUMDk6MDA6MDAuMDAwMDAwMDAwWg=="
}
```

<h3 id="historical-bars-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_bars_resp](#schemaoption_bars_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Condition codes

<a id="opIdOptionMetaConditions"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/options/meta/conditions/trade \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/meta/conditions/{ticktype}`

Returns the mapping between the condition codes and names.

<h3 id="condition-codes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticktype|path|string|true|The type of ticks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ticktype|trade|
|ticktype|quote|

> Example responses

> 200 Response

```json
{
  "a": "SLAN - Single Leg Auction Non ISO",
  "e": "SLFT - Single Leg Floor Trade",
  "g": "MLAT - Multi Leg Auction"
}
```

<h3 id="condition-codes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_conditions](#schemaoption_conditions)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Exchange codes

<a id="opIdOptionMetaExchanges"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/options/meta/exchanges \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/meta/exchanges`

Returns the mapping between the option exchange codes and the corresponding exchange names.

> Example responses

> 200 Response

```json
{
  "A": "NYSE American Options",
  "Q": "Nasdaq Options"
}
```

<h3 id="exchange-codes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_exchanges](#schemaoption_exchanges)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest quotes

<a id="opIdOptionLatestQuotes"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/options/quotes/latest?symbols=AAPL241220C00300000%2CAAPL240315C00225000' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/quotes/latest`

The latest multi-quotes endpoint provides the latest bid and ask prices for each given contract symbol.


<h3 id="latest-quotes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of contract symbols with a limit of 100.|
|feed|query|[option_feed](#schemaoption_feed)|false|The source feed of the data. `opra` is the official OPRA feed, `indicative` is a free indicative feed where trades are delayed and quotes are modified. Default: `opra` if the user has a subscription, otherwise `indicative`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|opra|
|feed|indicative|

> Example responses

> 200 Response

```json
{
  "quotes": {
    "AAPL240419P00140000": {
      "ap": 0.16,
      "as": 669,
      "ax": "w",
      "bp": 0.15,
      "bs": 164,
      "bx": "W",
      "c": "A",
      "t": "2024-02-28T15:30:28.046330624Z"
    },
    "AAPL250321C00190000": {
      "ap": 17,
      "as": 622,
      "ax": "X",
      "bp": 16.75,
      "bs": 368,
      "bx": "X",
      "c": " ",
      "t": "2024-02-28T15:47:13.663636224Z"
    }
  }
}
```

<h3 id="latest-quotes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_latest_quotes_resp](#schemaoption_latest_quotes_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Snapshots

<a id="opIdOptionSnapshots"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/options/snapshots?symbols=AAPL241220C00300000%2CAAPL240315C00225000' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/snapshots`

The snapshots endpoint provides the latest trade, latest quote and greeks for each given contract symbol.


<h3 id="snapshots-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of contract symbols with a limit of 100.|
|feed|query|[option_feed](#schemaoption_feed)|false|The source feed of the data. `opra` is the official OPRA feed, `indicative` is a free indicative feed where trades are delayed and quotes are modified. Default: `opra` if the user has a subscription, otherwise `indicative`.<br>|
|updated_since|query|string(date-time)|false|Filter to snapshots that were updated since this timestamp, meaning that the timestamp of the trade or the quote is greater than or equal to this value.<br>Format: RFC-3339 or YYYY-MM-DD. If missing, all values are returned.<br>|
|limit|query|integer|false|Number of maximum snapshots to return in a response.<br>The limit applies to the total number of data points, not the number per symbol!<br>Use `next_page_token` to fetch the next set of responses.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|opra|
|feed|indicative|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTDI0MDYyMTAwMDIyMHwx",
  "snapshots": {
    "AAPL240426C00162500": {
      "greeks": {
        "delta": 0.7521304109871954,
        "gamma": 0.06241426404871288,
        "rho": 0.009910739032549095,
        "theta": -0.2847623059595503,
        "vega": 0.047540520834498785
      },
      "impliedVolatility": 0.3372405712050441,
      "latestQuote": {
        "ap": 4.3,
        "as": 91,
        "ax": "B",
        "bp": 4.15,
        "bs": 16,
        "bx": "C",
        "c": "A",
        "t": "2024-04-22T19:59:59.992734208Z"
      },
      "latestTrade": {
        "c": "I",
        "p": 4.1,
        "s": 1,
        "t": "2024-04-22T19:57:32.589554432Z",
        "x": "A"
      }
    }
  }
}
```

<h3 id="snapshots-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_snapshots_resp](#schemaoption_snapshots_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Option chain

<a id="opIdOptionChain"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/options/snapshots/AAPL \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/snapshots/{underlying_symbol}`

The option chain endpoint provides the latest trade, latest quote, and greeks for each contract symbol of the underlying symbol.


<h3 id="option-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|underlying_symbol|path|string|true|The financial instrument on which an option contract is based or derived.|
|feed|query|[option_feed](#schemaoption_feed)|false|The source feed of the data. `opra` is the official OPRA feed, `indicative` is a free indicative feed where trades are delayed and quotes are modified. Default: `opra` if the user has a subscription, otherwise `indicative`.<br>|
|limit|query|integer|false|Number of maximum snapshots to return in a response.<br>The limit applies to the total number of data points, not the number per symbol!<br>Use `next_page_token` to fetch the next set of responses.<br>|
|updated_since|query|string(date-time)|false|Filter to snapshots that were updated since this timestamp, meaning that the timestamp of the trade or the quote is greater than or equal to this value.<br>Format: RFC-3339 or YYYY-MM-DD. If missing, all values are returned.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|type|query|string|false|Filter contracts by the type (call or put).|
|strike_price_gte|query|number(double)|false|Filter contracts with strike price greater than or equal to the specified value.|
|strike_price_lte|query|number(double)|false|Filter contracts with strike price less than or equal to the specified value.|
|expiration_date|query|string(date)|false|Filter contracts by the exact expiration date (format: YYYY-MM-DD).|
|expiration_date_gte|query|string(date)|false|Filter contracts with expiration date greater than or equal to the specified date.|
|expiration_date_lte|query|string(date)|false|Filter contracts with expiration date less than or equal to the specified date.|
|root_symbol|query|string|false|Filter contracts by the root symbol.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|opra|
|feed|indicative|
|type|call|
|type|put|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTDI0MDYyMTAwMDIyMHwx",
  "snapshots": {
    "AAPL240426C00162500": {
      "greeks": {
        "delta": 0.7521304109871954,
        "gamma": 0.06241426404871288,
        "rho": 0.009910739032549095,
        "theta": -0.2847623059595503,
        "vega": 0.047540520834498785
      },
      "impliedVolatility": 0.3372405712050441,
      "latestQuote": {
        "ap": 4.3,
        "as": 91,
        "ax": "B",
        "bp": 4.15,
        "bs": 16,
        "bx": "C",
        "c": "A",
        "t": "2024-04-22T19:59:59.992734208Z"
      },
      "latestTrade": {
        "c": "I",
        "p": 4.1,
        "s": 1,
        "t": "2024-04-22T19:57:32.589554432Z",
        "x": "A"
      }
    }
  }
}
```

<h3 id="option-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_snapshots_resp](#schemaoption_snapshots_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical trades

<a id="opIdOptionTrades"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/options/trades?symbols=AAPL241220C00300000%2CAAPL240315C00225000' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/trades`

The historical option trades API provides trade data for a list of contract symbols between the specified dates.

The returned results are sorted by symbol first then by trade timestamp.
This means that you are likely to see only one symbol in your first response if there are enough trades for that symbol to hit the limit you requested.

In these situations, if you keep requesting again with the `next_page_token` from the previous response, you will eventually reach the other symbols if any trades were found for them.

<h3 id="historical-trades-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of contract symbols with a limit of 100.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

> Example responses

> 200 Response

```json
{
  "next_page_token": "QUFQTHwyMDIyLTAxLTAzVDA5OjAwOjAwLjI0NDgzOTY4MFp8UHwwOTIyMzM3MjAzNjg1NDc3NTgxMA==",
  "trades": {
    "AAPL240112C00182500": [
      {
        "c": "I",
        "p": 0.37,
        "s": 1,
        "t": "2024-01-18T15:03:44.56339456Z",
        "x": "B"
      },
      {
        "c": "g",
        "p": 0.34,
        "s": 1,
        "t": "2024-01-18T16:02:38.994758144Z",
        "x": "C"
      }
    ]
  }
}
```

<h3 id="historical-trades-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_trades_resp](#schemaoption_trades_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest trades

<a id="opIdOptionLatestTrades"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/options/trades/latest?symbols=AAPL241220C00300000%2CAAPL240315C00225000' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/options/trades/latest`

The latest multi-trades endpoint provides the latest historical trade data for multiple given contract symbols.


<h3 id="latest-trades-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|A comma-separated list of contract symbols with a limit of 100.|
|feed|query|[option_feed](#schemaoption_feed)|false|The source feed of the data. `opra` is the official OPRA feed, `indicative` is a free indicative feed where trades are delayed and quotes are modified. Default: `opra` if the user has a subscription, otherwise `indicative`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|feed|opra|
|feed|indicative|

> Example responses

> 200 Response

```json
{
  "trades": {
    "AAPL250321C00190000": {
      "c": "e",
      "p": 17.15,
      "s": 900,
      "t": "2024-02-28T15:26:12.728701696Z",
      "x": "B"
    }
  }
}
```

<h3 id="latest-trades-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[option_latest_trades_resp](#schemaoption_latest_trades_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-crypto">Crypto</h1>

Endpoints for cryptocurrencies.

## Historical bars

<a id="opIdCryptoBars"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/bars?symbols=BTC%2FUSD%2CLTC%2FUSD&timeframe=1Min' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/bars`

The crypto bars API provides historical aggregates for a list of crypto symbols between the specified dates.


<h3 id="historical-bars-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_historical_loc](#schemacrypto_historical_loc)|true|Crypto location from where the historical market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|
|timeframe|query|string|true|The timeframe represented by each bar in aggregation.<br>You can use any of the following values:<br> - `[1-59]Min` or `[1-59]T`, e.g. `5Min` or `5T` creates 5-minute aggregations<br> - `[1-23]Hour` or `[1-23]H`, e.g. `12Hour` or `12H` creates 12-hour aggregations<br> - `1Day` or `1D` creates 1-day aggregations<br> - `1Week` or `1W` creates 1-week aggregations<br> - `[1,2,3,4,6,12]Month` or `[1,2,3,4,6,12]M`, e.g. `3Month` or `3M` creates 3-month aggregations<br>|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "bars": {
    "BTC/USD": [
      {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      }
    ]
  },
  "next_page_token": "MTY0MDk0ODkyMzAwMDAwMDAwMHwyNDg0MzE3MQ=="
}
```

<h3 id="historical-bars-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_bars_resp](#schemacrypto_bars_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest bars

<a id="opIdCryptoLatestBars"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/latest/bars?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/latest/bars`

The latest multi-bars endpoint returns the latest minute-aggregated historical bar data for each of the crypto symbols provided.


<h3 id="latest-bars-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_latest_loc](#schemacrypto_latest_loc)|true|Crypto location from where the latest market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "bars": {
    "BTC/USD": {
      "c": 29003,
      "h": 29003,
      "l": 28999,
      "n": 4,
      "o": 28999,
      "t": "2022-05-27T10:18:00Z",
      "v": 0.01,
      "vw": 29001
    }
  }
}
```

<h3 id="latest-bars-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_latest_bars_resp](#schemacrypto_latest_bars_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest orderbook

<a id="opIdCryptoLatestOrderbooks"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/latest/orderbooks?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/latest/orderbooks`

The latest orderbook endpoint returns the latest bid and ask orderbook for the crypto symbols provided.


<h3 id="latest-orderbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_latest_loc](#schemacrypto_latest_loc)|true|Crypto location from where the latest market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "orderbooks": {
    "BTC/USD": {
      "a": [
        {
          "p": 20902,
          "s": 0.0097
        },
        {
          "p": 21444,
          "s": 0
        }
      ],
      "b": [
        {
          "p": 20846,
          "s": 0.1902
        },
        {
          "p": 20350,
          "s": 0
        }
      ],
      "t": "2022-06-24T08:00:14.137774336Z"
    }
  }
}
```

<h3 id="latest-orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_latest_orderbooks_resp](#schemacrypto_latest_orderbooks_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest quotes

<a id="opIdCryptoLatestQuotes"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/latest/quotes?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/latest/quotes`

The latest quotes endpoint returns the latest bid and ask prices for the crypto symbols provided.


<h3 id="latest-quotes-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_latest_loc](#schemacrypto_latest_loc)|true|Crypto location from where the latest market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "quotes": {
    "BTC/USD": {
      "ap": 29059,
      "as": 3.252,
      "bp": 29058,
      "bs": 0.3544,
      "t": "2022-05-26T11:47:18.44347136Z"
    },
    "ETH/USD": {
      "ap": 1817.7,
      "as": 6.137,
      "bp": 1817,
      "bs": 4.76,
      "t": "2022-05-26T11:47:18.499478272Z"
    }
  }
}
```

<h3 id="latest-quotes-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_latest_quotes_resp](#schemacrypto_latest_quotes_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest trades

<a id="opIdCryptoLatestTrades"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/latest/trades?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/latest/trades`

The latest trades endpoint returns the latest trade data for the crypto symbols provided.


<h3 id="latest-trades-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_latest_loc](#schemacrypto_latest_loc)|true|Crypto location from where the latest market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "trades": {
    "BTC/USD": {
      "i": 31455289,
      "p": 29791,
      "s": 0.0016,
      "t": "2022-05-18T12:01:00.537052Z",
      "tks": "S"
    },
    "ETH/USD": {
      "i": 31455287,
      "p": 2027.6,
      "s": 0.06,
      "t": "2022-05-18T12:01:00.363547Z",
      "tks": "S"
    }
  }
}
```

<h3 id="latest-trades-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_latest_trades_resp](#schemacrypto_latest_trades_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical quotes

<a id="opIdCryptoQuotes"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/quotes?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/quotes`

The crypto quotes API provides historical quote data for a list of crypto symbols between the specified dates.
The oldest date to retrieve historical quotes of us-1 location is 14th October, 2025 12AM UTC.

<h3 id="historical-quotes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_historical_loc](#schemacrypto_historical_loc)|true|Crypto location from where the historical market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MTY1MzU2NzYzODQ5OTQ3ODI3Mnwx",
  "quotes": {
    "BTC/USD": [
      {
        "ap": 29059,
        "as": 3.252,
        "bp": 29058,
        "bs": 0.3544,
        "t": "2022-05-26T11:47:18.44347136Z"
      }
    ],
    "ETH/USD": [
      {
        "ap": 1817.7,
        "as": 6.137,
        "bp": 1817,
        "bs": 4.76,
        "t": "2022-05-26T11:47:18.499478272Z"
      }
    ]
  }
}
```

<h3 id="historical-quotes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_quotes_resp](#schemacrypto_quotes_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Snapshots

<a id="opIdCryptoSnapshots"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/snapshots?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/snapshots`

The snapshots endpoint returns the latest trade, latest quote, latest minute bar, latest daily bar, and previous daily bar data for crypto symbols.


<h3 id="snapshots-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_latest_loc](#schemacrypto_latest_loc)|true|Crypto location from where the latest market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "snapshots": {
    "BTC/USD": {
      "dailyBar": {
        "c": 31744,
        "h": 31807,
        "l": 31416,
        "n": 438,
        "o": 31660,
        "t": "2022-05-31T05:00:00Z",
        "v": 67.3518,
        "vw": 31582.7034526175
      },
      "latestQuote": {
        "ap": 31742,
        "as": 0.395,
        "bp": 31741,
        "bs": 0.395,
        "t": "2022-05-31T11:55:58.507608832Z"
      },
      "latestTrade": {
        "i": 32396097,
        "p": 31744,
        "s": 0.0543,
        "t": "2022-05-31T11:53:45.027481Z",
        "tks": "B"
      },
      "minuteBar": {
        "c": 31744,
        "h": 31744,
        "l": 31744,
        "n": 2,
        "o": 31744,
        "t": "2022-05-31T11:53:00Z",
        "v": 0.0886,
        "vw": 31744
      },
      "prevDailyBar": {
        "c": 31649,
        "h": 32251,
        "l": 30251,
        "n": 8221,
        "o": 30310,
        "t": "2022-05-30T05:00:00Z",
        "v": 1856.4065,
        "vw": 30877.2751897281
      }
    }
  }
}
```

<h3 id="snapshots-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_snapshots_resp](#schemacrypto_snapshots_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Historical trades

<a id="opIdCryptoTrades"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta3/crypto/us/trades?symbols=BTC%2FUSD%2CLTC%2FUSD' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta3/crypto/{loc}/trades`

The crypto trades API provides historical trade data for a list of crypto symbols between the specified dates.


<h3 id="historical-trades-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loc|path|[crypto_historical_loc](#schemacrypto_historical_loc)|true|Crypto location from where the historical market data is retrieved.<br>- `us`: Alpaca US<br>- `us-1`: Kraken US<br>- `eu-1`: Kraken EU<br>|
|symbols|query|string|true|A comma-separated list of crypto symbols.|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|limit|query|integer|false|The maximum number of data points to return in the response page.<br>The API may return less, even if there are more available data points in the requested interval.<br>Always check the `next_page_token` for more pages.<br>The limit applies to the total number of data points, not per symbol!<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loc|us|
|loc|us-1|
|loc|us-2|
|loc|eu-1|
|loc|bs-1|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MTY1MzA1MDgwMDAwMDAwMDAwMHwzMTQ1NTI4OQ==",
  "trades": {
    "BTC/USD": [
      {
        "i": 31455289,
        "p": 29791,
        "s": 0.0016,
        "t": "2022-05-18T12:01:00.537052Z",
        "tks": "S"
      }
    ],
    "ETH/USD": [
      {
        "i": 31455287,
        "p": 2027.6,
        "s": 0.06,
        "t": "2022-05-18T12:01:00.363547Z",
        "tks": "S"
      },
      {
        "i": 31455288,
        "p": 2027.6,
        "s": 0.136,
        "t": "2022-05-18T12:01:00.363547Z",
        "tks": "S"
      }
    ]
  }
}
```

<h3 id="historical-trades-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[crypto_trades_resp](#schemacrypto_trades_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-fixed-income">Fixed income</h1>

Endpoints for fixed income data.

## Latest prices

<a id="opIdFixedIncomeLatestPrices"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/fixed_income/latest/prices?isins=US912797KJ59%2CUS912797KS58%2CUS912797LB15' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/fixed_income/latest/prices`

This endpoint returns the latest prices for the given fixed income securities.


<h3 id="latest-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isins|query|string|true|A comma-separated list of ISINs with a limit of 1000.|

> Example responses

> 200 Response

```json
{
  "prices": {
    "US912797KJ59": {
      "p": 99.6459,
      "t": "2025-02-14T20:58:00.648Z",
      "ytm": 4.249,
      "ytw": 4.249
    },
    "US912797KS58": {
      "p": 99.3193,
      "t": "2025-02-14T20:58:00.648Z",
      "ytm": 4.2245,
      "ytw": 4.2245
    },
    "US912797LB15": {
      "p": 98.9927,
      "t": "2025-02-14T20:58:00.648Z",
      "ytm": 4.2165,
      "ytw": 4.2165
    }
  }
}
```

<h3 id="latest-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[fixed_income_latest_prices_resp](#schemafixed_income_latest_prices_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Latest quotes

<a id="opIdFixedIncomeLatestQuotes"></a>

> Code samples

```bash
curl 'https://data.alpaca.markets/v1beta1/fixed_income/latest/quotes?isins=US912797SX61%2CUS912810SK51' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/fixed_income/latest/quotes`

This endpoint returns the latest quotes for the given fixed income securities.


<h3 id="latest-quotes-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isins|query|string|true|A comma-separated list of ISINs with a limit of 100.|
|trade_size|query|integer(int32)|false|Filters to best bid/ask where the minimum trade size is less than or equal to the given numeric value. For any negative value the best bid/ask will be returned for the smallest trade size on either side.<br>|

> Example responses

> 200 Response

```json
{
  "quotes": {
    "US912797SX61": {
      "ams": 1000,
      "ap": 99.91958333,
      "as": 1000000,
      "aytm": 2.226923,
      "aytw": 2.226923,
      "bms": 1000,
      "bp": 99.81091667,
      "bs": 1000000,
      "bytm": 5.236154,
      "bytw": 5.236154,
      "t": "2026-05-21T06:56:01.882466873Z"
    },
    "US912810SK51": {
      "ams": 1000,
      "ap": 63.06436526,
      "as": 1000000,
      "aytm": 5.08819,
      "aytw": 5.08819,
      "bms": 1000,
      "bp": 60.60009769,
      "bs": 1000000,
      "bytm": 5.338343,
      "bytw": 5.338343,
      "t": "2026-05-21T07:27:53.683424845Z"
    }
  }
}
```

<h3 id="latest-quotes-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[fixed_income_latest_quotes_resp](#schemafixed_income_latest_quotes_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-logos">Logos</h1>

Endpoints for getting company logo images.

## Logos

<a id="opIdLogos"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/logos/AAPL \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/logos/{symbol}`

Get the image of the company logo for the given symbol.

<h3 id="logos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|A unique series of letters assigned to a security for trading purposes.|
|placeholder|query|boolean|false|If true, returns a placeholder image when no logo is available. Defaults to true.|

<h3 id="logos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-screener">Screener</h1>

Endpoints for most active stocks and top movers.

## Top market movers

<a id="opIdMovers"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/screener/stocks/movers \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/screener/{market_type}/movers`

Returns the top market movers (gainers and losers) based on real time SIP data.
The change for each symbol is calculated from the previous closing price and the latest closing price.

For stocks, the endpoint resets at market open. Until then, it shows the previous market day's movers.
The data is split-adjusted. Only tradable symbols in exchanges are included.

For crypto, the endpoint resets at midnight.

<h3 id="top-market-movers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market_type|path|[market_type](#schemamarket_type)|true|Screen-specific market (stocks or crypto).|
|top|query|integer(int32)|false|Number of top market movers to fetch (gainers and losers). Will return this number of results for each. By default, 10 gainers and 10 losers.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|market_type|stocks|
|market_type|crypto|

> Example responses

> 200 Response

```json
{
  "gainers": [
    {
      "change": 2.46,
      "percent_change": 145.56,
      "price": 4.15,
      "symbol": "AGRI"
    },
    {
      "change": 0.03,
      "percent_change": 85.63,
      "price": 0.0594,
      "symbol": "GRCYW"
    }
  ],
  "last_updated": "2022-03-10T17:53:30.088309839Z",
  "losers": [
    {
      "change": -0.26,
      "percent_change": -63.07,
      "price": 0.1502,
      "symbol": "MTACW"
    },
    {
      "change": -3.61,
      "percent_change": -51.21,
      "price": 3.435,
      "symbol": "TIG"
    }
  ],
  "market_type": "stocks"
}
```

<h3 id="top-market-movers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[movers_resp](#schemamovers_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Most active stocks

<a id="opIdMostActives"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/screener/stocks/most-actives \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/screener/stocks/most-actives`

Returns the most active stocks by volume or trade count based on real time SIP data. By default, returns the top 10 symbols by volume.


<h3 id="most-active-stocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|by|query|string|false|The metric used for ranking the most active stocks.|
|top|query|integer(int32)|false|The number of top most active stocks to fetch per day.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|by|volume|
|by|trades|

> Example responses

> 200 Response

```json
{
  "last_updated": "string",
  "most_actives": [
    {
      "symbol": "AAPL",
      "trade_count": 639626,
      "volume": 122709184
    }
  ]
}
```

<h3 id="most-active-stocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[most_actives_resp](#schemamost_actives_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-news">News</h1>

Endpoints for getting news articles about the stock market.

## News articles

<a id="opIdNews"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/news \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/news`

Returns the latest news articles across stocks and crypto. By default, returns the latest 10 news articles.


<h3 id="news-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|The inclusive start of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the beginning of the current day, but at least 15 minutes ago if the user doesn't have real-time access for the feed.<br>|
|end|query|string(date-time)|false|The inclusive end of the interval. Format: RFC-3339 or YYYY-MM-DD.<br>Default: the current time if the user has a real-time access for the feed, otherwise 15 minutes before the current time.<br>|
|sort|query|string|false|Sort articles by updated date.|
|symbols|query|string|false|A comma-separated list of symbols for which to query news.|
|limit|query|integer|false|Limit of news items to be returned for a result page.|
|include_content|query|boolean|false|Boolean indicator to include content for news articles (if available).|
|exclude_contentless|query|boolean|false|Boolean indicator to exclude news articles that do not contain content.|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|asc|
|sort|desc|

> Example responses

> 200 Response

```json
{
  "news": [
    {
      "author": "Charles Gross",
      "content": "<p>This headline-only article is meant to show you why a stock is moving, the most difficult aspect of stock trading....</p>",
      "created_at": "2021-12-31T11:08:42Z",
      "headline": "Apple Leader in Phone Sales in China for Second Straight Month in November With 23.6% Share, According to Market Research Data",
      "id": 24843171,
      "images": [],
      "source": "benzinga",
      "summary": "This headline-only article is meant to show you why a stock is moving, the most difficult aspect of stock trading",
      "symbols": [
        "AAPL"
      ],
      "updated_at": "2021-12-31T11:08:43Z",
      "url": "https://www.benzinga.com/news/21/12/24843171/apple-leader-in-phone-sales-in-china-for-second-straight-month-in-november-with-23-6-share-according"
    }
  ],
  "next_page_token": "MTY0MDk0ODkyMzAwMDAwMDAwMHwyNDg0MzE3MQ=="
}
```

<h3 id="news-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[news_resp](#schemanews_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

<h1 id="market-data-api-corporate-actions">Corporate actions</h1>

Corporate actions (splits, dividends, etc.).

## Subscribe to Corporate Actions Events (SSE)

<a id="opIdSubscribeToCorporateActionsEventsSSE"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1beta1/events/corporate-actions \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1beta1/events/corporate-actions`

Server-Sent Events (SSE) stream that delivers every corporate-action mutation (`insert` / `update` / `delete`) across all supported CA types on a single long-lived `text/event-stream` connection. When `since`, `since_id`, or the `Last-Event-Id` reconnect header is provided, historical events are replayed first; otherwise only live events are pushed.

Each event carries an `event_type` discriminator that selects the shape of the `ca` payload -- see the [`corporate_action_event`](#/components/schemas/corporate_action_event) schema for the mapping to each per-type schema. The same underlying data is available on demand via [`GET /v1/corporate-actions`](#operation/CorporateActions).


<h3 id="subscribe-to-corporate-actions-events-sse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[[corporate_action_event_type](#schemacorporate_action_event_type)]|false|Filter the stream to a subset of `event_type` values.<br><br>Passed as a comma-separated list in the URL query, e.g.<br>`?type=cash_dividend_corporateaction_event,stock_dividend_corporateaction_event`.<br><br>Only events whose `event_type` is in this list are delivered. An empty or<br>omitted value is treated as "no filter" (deliver every type). Unknown values<br>return `400` with the list of valid values in the error message. The filter<br>applies uniformly to both replayed (historical) and live events.<br><br>See [`corporate_action_event_type`](#/components/schemas/corporate_action_event_type)<br>for the full list of accepted values.<br>|
|region|query|string|false|Which markets to receive events for. Compared against the envelope's `region`<br>field and applied uniformly to historical and live events.<br><br>- `all` (default): every event, regardless of market.<br>- `us`: only events with `region == "us"`.<br>- `non_us`: only events with `region == "non_us"`.<br><br>Unknown values return `400` with the list of valid values in the error<br>message. The value is case-insensitive.<br>|
|since|query|string(date-time)|false|Replay events emitted on or after this RFC-3339 date. Mutually exclusive with<br>`since_id`. Required when `until` is specified.<br>|
|until|query|string(date-time)|false|Close the connection after the last event on this RFC-3339 date (inclusive).<br>Requires `since`; cannot be in the future.<br>|
|since_id|query|[event_id](#schemaevent_id)|false|ULID matching an `event_id`; replay events whose `event_id` is greater than<br>or equal to this value (inclusive -- the event with this id, if it still<br>exists, is redelivered). Mutually exclusive with `since`. Overridden by the<br>`Last-Event-Id` header when both are set.<br>|
|until_id|query|[event_id](#schemaevent_id)|false|ULID matching an `event_id`; close the connection once this id has been<br>delivered (inclusive). Requires `since_id`; cannot be in the future.<br>|
|Last-Event-Id|header|[event_id](#schemaevent_id)|false|Standard SSE reconnect header. ULID matching an `event_id`; replay events<br>whose `event_id` is greater than or equal to this value (inclusive -- the<br>event with this id is redelivered on reconnect, so clients should<br>deduplicate by `event_id` if needed). Overrides `since_id` when both are<br>set.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|capital_gains_distribution_corporateaction_event|
|type|cash_dividend_corporateaction_event|
|type|cash_merger_corporateaction_event|
|type|equity_partial_call_corporateaction_event|
|type|forward_split_corporateaction_event|
|type|name_change_corporateaction_event|
|type|redemption_corporateaction_event|
|type|reorganization_corporateaction_event|
|type|reverse_split_corporateaction_event|
|type|rights_distribution_corporateaction_event|
|type|spin_off_corporateaction_event|
|type|stock_and_cash_merger_corporateaction_event|
|type|stock_dividend_corporateaction_event|
|type|stock_merger_corporateaction_event|
|type|unit_split_corporateaction_event|
|type|worthless_removal_corporateaction_event|
|region|all|
|region|us|
|region|non_us|

> Example responses

> 200 Response

```json
[
  {
    "action": "insert",
    "at": "2026-03-20T18:00:00.000000Z",
    "ca": {
      "currency": "USD",
      "cusip": "36261K509",
      "ex_date": "2025-12-26",
      "id": "98c905a1-08c7-450c-8669-b8e7aee8b44d",
      "isin": "US36261K5090",
      "long_term_rate": "0.45855",
      "payable_date": "2026-01-09",
      "process_date": "2026-01-08",
      "record_date": "2025-12-29",
      "short_term_rate": "0.11019",
      "symbol": "GCAD"
    },
    "event_id": "01KMAGXP2FCJ4NR1TDX8ZWKR6E",
    "event_type": "capital_gains_distribution_corporateaction_event",
    "region": "us"
  }
]
```

<h3 id="subscribe-to-corporate-actions-events-sse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connected. Corporate-action events will now start streaming as long as you keep the connection open.|Inline|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

<h3 id="subscribe-to-corporate-actions-events-sse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[corporate_action_event](#schemacorporate_action_event)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

## Corporate actions

<a id="opIdCorporateActions"></a>

> Code samples

```bash
curl https://data.alpaca.markets/v1/corporate-actions \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1/corporate-actions`

This endpoint provides data about the corporate actions for each given symbol over a specified time period.

By default (`data_quality=complete`), corporate actions that are still incomplete (for example, missing required fields such as ex-date or CUSIP/ISIN) and have not yet been processed are excluded from the response. Pass `data_quality=all` to also receive those early, incomplete records. Already-processed corporate actions are always returned when `data_quality=complete`, even if they would otherwise be considered incomplete.

> ⚠️ Warning
>
> Currently Alpaca has no guarantees on the creation time of corporate actions. There may be delays in receiving corporate actions from our data providers, and there may be delays in processing and making them available via this API. As a result, corporate actions may not be available immediately after they are announced.


<h3 id="corporate-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|false|A comma-separated list of symbols.|
|cusips|query|string|false|A comma-separated list of CUSIPs.|
|types|query|string|false|A comma-separated list of types. If not provided, search all types.<br><br>The following types are supported:<br>  - reverse_split<br>  - forward_split<br>  - unit_split<br>  - cash_dividend<br>  - stock_dividend<br>  - spin_off<br>  - cash_merger<br>  - stock_merger<br>  - stock_and_cash_merger<br>  - redemption<br>  - name_change<br>  - worthless_removal<br>  - rights_distribution<br>  - partial_call<br>  - reorganization<br>  - capital_gains_distribution<br>|
|region|query|[region](#schemaregion)|false|The region to filter corporate actions by.|
|start|query|string(date)|false|The inclusive start of the interval. The corporate actions are sorted by their `process_date`. Format: YYYY-MM-DD. Default: current day.<br>|
|end|query|string(date)|false|The inclusive end of the interval. The corporate actions are sorted by their `process_date`. Format: YYYY-MM-DD. Default: current day.<br>|
|ids|query|string|false|A comma-separated list of corporate action IDs. This parameter is mutually exclusive with all other filters (symbols, types, start, end, region, data_quality).<br>|
|limit|query|integer|false|Maximum number of corporate actions to return in a response.<br>The limit applies to the total number of data points, not the count per symbol!<br>Use `next_page_token` to fetch the next set of corporate actions.<br>|
|data_quality|query|[data_quality](#schemadata_quality)|false|Controls which corporate actions are returned based on data quality.<br>|
|page_token|query|string|false|The pagination token from which to continue. The value to pass here is returned in specific requests when more data is available, usually because of a response result limit.<br>|
|sort|query|object|false|Sort data in ascending or descending order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|region|us|
|region|non_us|
|region|all|
|data_quality|complete|
|data_quality|all|

> Example responses

> 200 Response

```json
{
  "corporate_actions": {
    "capital_gains_distributions": [
      {
        "currency": "USD",
        "cusip": "36261K509",
        "ex_date": "2025-12-26",
        "id": "98c905a1-08c7-450c-8669-b8e7aee8b44d",
        "isin": "US36261K5090",
        "long_term_rate": 0.45855,
        "payable_date": "2026-01-09",
        "process_date": "2026-01-08",
        "record_date": "2025-12-29",
        "short_term_rate": 0.11019,
        "symbol": "GCAD"
      }
    ],
    "cash_dividends": [
      {
        "cusip": "319829107",
        "ex_date": "2023-05-04",
        "foreign": false,
        "id": "11cfd108-292e-4cc6-bfbf-5999cdbc4029",
        "payable_date": "2023-05-19",
        "process_date": "2023-05-19",
        "rate": 0.125,
        "record_date": "2023-05-05",
        "special": false,
        "symbol": "FCF"
      }
    ],
    "cash_mergers": [
      {
        "acquiree_cusip": "Y2687W108",
        "acquiree_symbol": "GLOP",
        "effective_date": "2023-07-17",
        "id": "3772bbd7-4ad5-44d4-9cc0-f69156a2f8f5",
        "payable_date": "2023-07-17",
        "process_date": "2023-07-17",
        "rate": 5.37
      }
    ],
    "forward_splits": [
      {
        "cusip": "816851109",
        "due_bill_redemption_date": "2023-08-23",
        "ex_date": "2023-08-22",
        "id": "189bd849-ab9f-4b4d-aaaa-a6d415fd976d",
        "new_rate": 2,
        "old_rate": 1,
        "payable_date": "2023-08-21",
        "process_date": "2023-08-22",
        "record_date": "2023-08-14",
        "symbol": "SRE"
      }
    ],
    "name_changes": [
      {
        "id": "5a774c35-edec-4532-a812-a56d0bbb623a",
        "new_cusip": "Y9390M103",
        "new_symbol": "VFS",
        "old_cusip": "G11537100",
        "old_symbol": "BSAQ",
        "process_date": "2023-08-15"
      }
    ],
    "partial_calls": [
      {
        "currency": "string",
        "cusip": "string",
        "dividend_rate": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "isin": "string",
        "lottery_date": "1970-01-01",
        "lottery_type": "original",
        "payable_date": "1970-01-01",
        "price": 0,
        "process_date": "1970-01-01",
        "record_date": "1970-01-01",
        "results_publication_date": "1970-01-01",
        "symbol": "string"
      }
    ],
    "redemptions": [
      {
        "cusip": "687305102",
        "id": "395da031-0e57-4918-a6fb-64a7c713aca4",
        "payable_date": "2023-06-13",
        "process_date": "2023-06-13",
        "rate": 0.141134,
        "symbol": "ORPHY"
      }
    ],
    "reorganizations": [
      {
        "cash_rate": 0,
        "currency": "string",
        "cusip": "string",
        "effective_date": "1970-01-01",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "isin": "string",
        "payable_date": "1970-01-01",
        "process_date": "1970-01-01",
        "stock_movements": [
          {
            "cusip": "string",
            "isin": "string",
            "new_rate": 0,
            "source_rate": 0,
            "symbol": "string"
          }
        ],
        "symbol": "string"
      }
    ],
    "reverse_splits": [
      {
        "ex_date": "2023-08-24",
        "id": "913de862-c02c-46dc-a89c-fc8779a50d30",
        "new_cusip": "60879E200",
        "new_rate": 1,
        "old_cusip": "60879E101",
        "old_rate": 50,
        "process_date": "2023-08-24",
        "record_date": "2023-08-24",
        "symbol": "MNTS"
      }
    ],
    "rights_distributions": [
      {
        "ex_date": "2024-04-17",
        "expiration_date": "2024-05-14",
        "id": "69794cfd-0adc-4e11-9211-9210a9cf8932",
        "new_cusip": "454089111",
        "new_symbol": "IFN.RTWI",
        "payable_date": "2024-04-19",
        "process_date": "2024-04-19",
        "rate": 1,
        "record_date": "2024-04-18",
        "source_cusip": "454089103",
        "source_symbol": "IFN"
      }
    ],
    "spin_offs": [
      {
        "ex_date": "2023-08-15",
        "id": "82e602f6-35bc-4651-a5dd-f6d88ff37c55",
        "new_cusip": "85237B101",
        "new_rate": 1,
        "new_symbol": "SRM",
        "process_date": "2023-08-15",
        "record_date": "2023-08-15",
        "source_cusip": "48208F105",
        "source_rate": 19.35,
        "source_symbol": "JUPW"
      }
    ],
    "stock_and_cash_mergers": [
      {
        "acquiree_cusip": "561409103",
        "acquiree_rate": 1,
        "acquiree_symbol": "MLVF",
        "acquirer_cusip": "31931U102",
        "acquirer_rate": 0.7733,
        "acquirer_symbol": "FRBA",
        "cash_rate": 7.8,
        "effective_date": "2023-07-18",
        "id": "e5248356-2c06-42cf-aeb9-1595bd616cdb",
        "payable_date": "2023-07-18",
        "process_date": "2023-07-18"
      }
    ],
    "stock_dividends": [
      {
        "cusip": "605015106",
        "ex_date": "2023-05-19",
        "id": "3ae94c30-2d37-473a-bf29-5f7b4ab6d3ca",
        "payable_date": "2023-05-05",
        "process_date": "2023-05-19",
        "rate": 0.05,
        "record_date": "2023-05-22",
        "symbol": "MSBC"
      }
    ],
    "stock_mergers": [
      {
        "acquiree_cusip": "53223X107",
        "acquiree_rate": 1,
        "acquiree_symbol": "LSI",
        "acquirer_cusip": "30225T102",
        "acquirer_rate": 0.895,
        "acquirer_symbol": "EXR",
        "effective_date": "2023-07-20",
        "id": "728f8cb2-a00e-4bc7-ad14-d15fe82bbcff",
        "payable_date": "2023-07-20",
        "process_date": "2023-07-20"
      }
    ],
    "unit_splits": [
      {
        "alternate_cusip": "G5391L110",
        "alternate_rate": 0.3333,
        "alternate_symbol": "LVROW",
        "effective_date": "2023-03-01",
        "id": "3e68e87e-ae95-4d68-91d1-715d52ef143a",
        "new_cusip": "G5391L102",
        "new_rate": 1,
        "new_symbol": "LVRO",
        "old_cusip": "G8990L119",
        "old_rate": 1,
        "old_symbol": "TPBAU",
        "process_date": "2023-03-01"
      }
    ],
    "worthless_removals": [
      {
        "cusip": "078771300",
        "id": "106c2149-ee04-4d2e-a943-98dbb4d21a3c",
        "process_date": "2024-12-19",
        "symbol": "BLPH"
      }
    ]
  },
  "next_page_token": "string"
}
```

<h3 id="corporate-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[corporate_actions_resp](#schemacorporate_actions_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.<br>|None|
|403|Forbidden|The requested resource is forbidden.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on [Slack](https://alpaca.markets/slack) or on the [Community Forum](https://forum.alpaca.markets/).<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|400|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, BasicAuth
</aside>

# Schemas

<h2 id="tocS_ca_event_base">ca_event_base</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_base"></a>
<a id="schema_ca_event_base"></a>
<a id="tocSca_event_base"></a>
<a id="tocsca_event_base"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01"
}
```

Common fields present on every `ca` payload regardless of `event_type`.
Not meant to be referenced directly by clients -- it exists so each
per-type payload schema (`ca_event_cash_dividend`, `ca_event_forward_split`,
...) can `allOf`-compose it instead of restating `id` and `process_date`.
This makes the "always present" invariant structural (guaranteed by the
schema) rather than emergent from repetition, and matches the "Common `ca`
fields" section of the event-streaming Corporate Actions SSE design doc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|

<h2 id="tocS_ca_event_capital_gains_distribution">ca_event_capital_gains_distribution</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_capital_gains_distribution"></a>
<a id="schema_ca_event_capital_gains_distribution"></a>
<a id="tocSca_event_capital_gains_distribution"></a>
<a id="tocsca_event_capital_gains_distribution"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "ex_date": "1970-01-01",
  "isin": "string",
  "long_term_rate": "1.4372",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "short_term_rate": "0.1051",
  "symbol": "string"
}
```

Capital-gains distribution payload delivered when
`event_type == capital_gains_distribution_corporateaction_event`. Every
decimal field is emitted as a JSON string to preserve precision on the
wire. At least one of `long_term_rate` / `short_term_rate` is present;
combined distributions carry both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the security.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|long_term_rate|string|false|none|Long-term capital-gains payment per share, as a decimal string.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|short_term_rate|string|false|none|Short-term capital-gains payment per share, as a decimal string.|
|symbol|string|true|none|Ticker paying the distribution.|

<h2 id="tocS_ca_event_cash_dividend">ca_event_cash_dividend</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_cash_dividend"></a>
<a id="schema_ca_event_cash_dividend"></a>
<a id="tocSca_event_cash_dividend"></a>
<a id="tocsca_event_cash_dividend"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "due_bill_off_date": "1970-01-01",
  "due_bill_on_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "foreign": true,
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "0.24",
  "record_date": "1970-01-01",
  "special": true,
  "sub_type": "interest",
  "symbol": "string"
}
```

Cash dividend payload delivered when
`event_type == cash_dividend_corporateaction_event`. Corresponds to
`cash_dividends` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the security.|
|due_bill_off_date|string(date)|false|none|End of the due-bill period.|
|due_bill_on_date|string(date)|false|none|Start of the due-bill period.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|foreign|boolean|true|none|`true` if the issuer is not US-based.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|rate|string|true|none|Cash paid per share, as a decimal string.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|special|boolean|true|none|`true` if this is a one-off dividend outside the issuer's regular<br>distribution schedule.<br>|
|sub_type|string|false|none|Optional sub-classification of the dividend.|
|symbol|string|true|none|Ticker paying the dividend.|

#### Enumerated Values

|Property|Value|
|---|---|
|sub_type|interest|
|sub_type|return_of_capital|

<h2 id="tocS_ca_event_cash_merger">ca_event_cash_merger</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_cash_merger"></a>
<a id="schema_ca_event_cash_merger"></a>
<a id="tocSca_event_cash_merger"></a>
<a id="tocsca_event_cash_merger"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "acquiree_cusip": "string",
  "acquiree_isin": "string",
  "acquiree_symbol": "string",
  "acquirer_cusip": "string",
  "acquirer_isin": "string",
  "acquirer_symbol": "string",
  "currency": "string",
  "effective_date": "1970-01-01",
  "payable_date": "1970-01-01",
  "rate": "42.50"
}
```

Cash merger payload delivered when
`event_type == cash_merger_corporateaction_event`. Corresponds to
`cash_mergers` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|acquiree_cusip|string|true|none|CUSIP of the company being bought.|
|acquiree_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquiree_symbol|string|true|none|Ticker being bought (will disappear after the merger).|
|acquirer_cusip|string|false|none|Buyer's CUSIP.|
|acquirer_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquirer_symbol|string|false|none|Buyer's ticker (the surviving company).|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|rate|string|true|none|Cash paid per share of the acquired company, as a decimal string.|

<h2 id="tocS_ca_event_equity_partial_call">ca_event_equity_partial_call</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_equity_partial_call"></a>
<a id="schema_ca_event_equity_partial_call"></a>
<a id="tocSca_event_equity_partial_call"></a>
<a id="tocsca_event_equity_partial_call"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "dividend_rate": "0.05",
  "isin": "string",
  "lottery_date": "1970-01-01",
  "lottery_type": "original",
  "payable_date": "1970-01-01",
  "price": "15.00",
  "record_date": "1970-01-01",
  "results_publication_date": "1970-01-01",
  "symbol": "string"
}
```

Partial redemption of an equity issue where the issuer calls back only a
fraction of outstanding shares -- typically allocated to holders via a
lottery. Delivered when
`event_type == equity_partial_call_corporateaction_event`. Corresponds to
`partial_calls` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|false|none|CUSIP of the security.|
|dividend_rate|string|false|none|Dividend rate associated with the called shares, as a decimal string.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|lottery_date|string(date)|false|none|When the lottery drawing happens.|
|lottery_type|string|false|none|How called shares were allocated among holders.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|price|string|false|none|Price paid per called share, as a decimal string.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|results_publication_date|string(date)|false|none|When the lottery results are published.|
|symbol|string|true|none|Ticker being partially called.|

#### Enumerated Values

|Property|Value|
|---|---|
|lottery_type|original|
|lottery_type|supplemental|

<h2 id="tocS_ca_event_forward_split">ca_event_forward_split</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_forward_split"></a>
<a id="schema_ca_event_forward_split"></a>
<a id="tocSca_event_forward_split"></a>
<a id="tocsca_event_forward_split"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "isin": "string",
  "new_rate": "4",
  "old_rate": "1",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Forward stock split payload delivered when
`event_type == forward_split_corporateaction_event`. Corresponds to
`forward_splits` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the security.|
|due_bill_redemption_date|[due_bill_redemption_date](#schemadue_bill_redemption_date)|false|none|The date when due bill obligations are redeemed.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|string|true|none|Shares after the split, as a decimal string.|
|old_rate|string|true|none|Shares before the split, as a decimal string.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|symbol|string|true|none|Ticker being split.|

<h2 id="tocS_ca_event_name_change">ca_event_name_change</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_name_change"></a>
<a id="schema_ca_event_name_change"></a>
<a id="tocSca_event_name_change"></a>
<a id="tocsca_event_name_change"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_symbol": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_symbol": "string"
}
```

Name/ticker change payload delivered when
`event_type == name_change_corporateaction_event`. Corresponds to
`name_changes` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|new_cusip|string|true|none|CUSIP after the change.|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_symbol|string|true|none|Ticker after the change.|
|old_cusip|string|true|none|CUSIP before the change.|
|old_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|old_symbol|string|true|none|Ticker before the change.|

<h2 id="tocS_ca_event_redemption">ca_event_redemption</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_redemption"></a>
<a id="schema_ca_event_redemption"></a>
<a id="tocSca_event_redemption"></a>
<a id="tocsca_event_redemption"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "25.00",
  "symbol": "string"
}
```

Full redemption payload delivered when
`event_type == redemption_corporateaction_event`. Corresponds to
`redemptions` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the security.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|rate|string|true|none|Cash paid per share, as a decimal string.|
|symbol|string|true|none|Ticker being redeemed.|

<h2 id="tocS_ca_event_reorganization">ca_event_reorganization</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_reorganization"></a>
<a id="schema_ca_event_reorganization"></a>
<a id="tocSca_event_reorganization"></a>
<a id="tocsca_event_reorganization"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "cash_rate": "5.00",
  "currency": "string",
  "cusip": "string",
  "effective_date": "1970-01-01",
  "isin": "string",
  "payable_date": "1970-01-01",
  "stock_movements": [
    {
      "cusip": "string",
      "isin": "string",
      "new_rate": "1",
      "source_rate": "10",
      "symbol": "string"
    }
  ],
  "symbol": "string"
}
```

General-purpose corporate restructuring (e.g. Chapter 11 emergence) where
existing holders receive a mix of cash and/or one or more replacement
securities. Each entry in `stock_movements` describes a separate
share-class distribution. Delivered when
`event_type == reorganization_corporateaction_event`. Corresponds to
`reorganizations` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|cash_rate|string|false|none|Cash paid per source share, as a decimal string.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the original security.|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|stock_movements|[[ca_event_reorganization_stock_movement](#schemaca_event_reorganization_stock_movement)]|false|none|One entry per replacement security delivered to holders.|
|symbol|string|true|none|Ticker undergoing the reorganization.|

<h2 id="tocS_ca_event_reorganization_stock_movement">ca_event_reorganization_stock_movement</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_reorganization_stock_movement"></a>
<a id="schema_ca_event_reorganization_stock_movement"></a>
<a id="tocSca_event_reorganization_stock_movement"></a>
<a id="tocsca_event_reorganization_stock_movement"></a>

```json
{
  "cusip": "string",
  "isin": "string",
  "new_rate": "1",
  "source_rate": "10",
  "symbol": "string"
}
```

A single replacement-security leg of a
[`ca_event_reorganization`](#/components/schemas/ca_event_reorganization)
payload. All decimal fields are emitted as JSON strings to preserve
precision on the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cusip|string|true|none|Replacement CUSIP.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|string|true|none|Replacement shares delivered per `source_rate`, as a decimal string.|
|source_rate|string|true|none|Source shares required for each `new_rate`, as a decimal string.|
|symbol|string|true|none|Replacement ticker.|

<h2 id="tocS_ca_event_reverse_split">ca_event_reverse_split</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_reverse_split"></a>
<a id="schema_ca_event_reverse_split"></a>
<a id="tocSca_event_reverse_split"></a>
<a id="tocsca_event_reverse_split"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "ex_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "1",
  "new_symbol": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "10",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Reverse stock split payload delivered when
`event_type == reverse_split_corporateaction_event`. Corresponds to
`reverse_splits` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|new_cusip|string|true|none|CUSIP after the split.|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|string|true|none|Shares after the split, as a decimal string.|
|new_symbol|string|false|none|Ticker after the split when the issuer also changes symbol (e.g. with<br>a "D" suffix). Omitted when the ticker doesn't change.<br>|
|old_cusip|string|true|none|CUSIP before the split.|
|old_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|old_rate|string|true|none|Shares before the split, as a decimal string.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|symbol|string|true|none|Ticker being split.|

<h2 id="tocS_ca_event_rights_distribution">ca_event_rights_distribution</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_rights_distribution"></a>
<a id="schema_ca_event_rights_distribution"></a>
<a id="tocSca_event_rights_distribution"></a>
<a id="tocsca_event_rights_distribution"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "ex_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_symbol": "string",
  "payable_date": "1970-01-01",
  "rate": "0.25",
  "record_date": "1970-01-01",
  "source_cusip": "string",
  "source_isin": "string",
  "source_symbol": "string"
}
```

Rights distribution payload delivered when
`event_type == rights_distribution_corporateaction_event`. Corresponds to
`rights_distributions` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|expiration_date|[expiration_date](#schemaexpiration_date)|false|none|none|
|new_cusip|string|true|none|CUSIP of the new right.|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_symbol|string|true|none|Ticker of the new right/warrant.|
|payable_date|[payable_date](#schemapayable_date)|true|none|The date when the corporate action benefit is paid or distributed.|
|rate|string|true|none|Rights given per share you own, as a decimal string.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|source_cusip|string|true|none|CUSIP of the underlying ticker.|
|source_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|source_symbol|string|true|none|Ticker whose holders receive the rights.|

<h2 id="tocS_ca_event_spin_off">ca_event_spin_off</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_spin_off"></a>
<a id="schema_ca_event_spin_off"></a>
<a id="tocSca_event_spin_off"></a>
<a id="tocsca_event_spin_off"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "0.5",
  "new_symbol": "string",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "source_cusip": "string",
  "source_isin": "string",
  "source_rate": "1",
  "source_symbol": "string"
}
```

Spin-off payload delivered when
`event_type == spin_off_corporateaction_event`. Corresponds to
`spin_offs` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|due_bill_redemption_date|[due_bill_redemption_date](#schemadue_bill_redemption_date)|false|none|The date when due bill obligations are redeemed.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|new_cusip|string|true|none|CUSIP of the new spin-off company.|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|string|true|none|New-company shares distributed per `source_rate` parent shares, as a decimal string.|
|new_symbol|string|true|none|Ticker of the new spin-off company.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|source_cusip|string|true|none|Parent CUSIP.|
|source_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|source_rate|string|true|none|Parent shares required per ratio unit, as a decimal string.|
|source_symbol|string|true|none|Parent company's ticker.|

<h2 id="tocS_ca_event_stock_and_cash_merger">ca_event_stock_and_cash_merger</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_stock_and_cash_merger"></a>
<a id="schema_ca_event_stock_and_cash_merger"></a>
<a id="tocSca_event_stock_and_cash_merger"></a>
<a id="tocsca_event_stock_and_cash_merger"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "acquiree_cusip": "string",
  "acquiree_isin": "string",
  "acquiree_rate": "1",
  "acquiree_symbol": "string",
  "acquirer_cusip": "string",
  "acquirer_isin": "string",
  "acquirer_rate": "0.5",
  "acquirer_symbol": "string",
  "cash_rate": "10.00",
  "currency": "string",
  "effective_date": "1970-01-01",
  "payable_date": "1970-01-01"
}
```

Merger paying a mix of stock and cash. Delivered when
`event_type == stock_and_cash_merger_corporateaction_event`. Corresponds
to `stock_and_cash_mergers` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|acquiree_cusip|string|true|none|CUSIP of the company being bought.|
|acquiree_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquiree_rate|string|true|none|Bought-side ratio, as a decimal string.|
|acquiree_symbol|string|true|none|Ticker being bought (will disappear).|
|acquirer_cusip|string|true|none|Buyer's CUSIP.|
|acquirer_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquirer_rate|string|true|none|Buyer shares given per unit ratio, as a decimal string.|
|acquirer_symbol|string|true|none|Buyer's ticker (the surviving company).|
|cash_rate|string|true|none|Extra cash paid per share of the acquired company, as a decimal string.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|

<h2 id="tocS_ca_event_stock_dividend">ca_event_stock_dividend</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_stock_dividend"></a>
<a id="schema_ca_event_stock_dividend"></a>
<a id="tocSca_event_stock_dividend"></a>
<a id="tocsca_event_stock_dividend"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "ex_date": "1970-01-01",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "0.05",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Stock dividend payload delivered when
`event_type == stock_dividend_corporateaction_event`. Corresponds to
`stock_dividends` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the security.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|rate|string|true|none|Extra shares received per share held, as a decimal string.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|symbol|string|true|none|Ticker paying the stock dividend.|

<h2 id="tocS_ca_event_stock_merger">ca_event_stock_merger</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_stock_merger"></a>
<a id="schema_ca_event_stock_merger"></a>
<a id="tocSca_event_stock_merger"></a>
<a id="tocsca_event_stock_merger"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "acquiree_cusip": "string",
  "acquiree_isin": "string",
  "acquiree_rate": "1",
  "acquiree_symbol": "string",
  "acquirer_cusip": "string",
  "acquirer_isin": "string",
  "acquirer_rate": "0.75",
  "acquirer_symbol": "string",
  "currency": "string",
  "effective_date": "1970-01-01",
  "payable_date": "1970-01-01"
}
```

All-stock merger payload delivered when
`event_type == stock_merger_corporateaction_event`. Corresponds to
`stock_mergers` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|acquiree_cusip|string|true|none|CUSIP of the company being bought.|
|acquiree_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquiree_rate|string|true|none|Bought-side ratio, as a decimal string.|
|acquiree_symbol|string|true|none|Ticker being bought (will disappear).|
|acquirer_cusip|string|true|none|Buyer's CUSIP.|
|acquirer_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquirer_rate|string|true|none|Buyer-side ratio, as a decimal string.|
|acquirer_symbol|string|true|none|Buyer's ticker (the surviving company).|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|

<h2 id="tocS_ca_event_unit_split">ca_event_unit_split</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_unit_split"></a>
<a id="schema_ca_event_unit_split"></a>
<a id="tocSca_event_unit_split"></a>
<a id="tocsca_event_unit_split"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "alternate_cusip": "string",
  "alternate_isin": "string",
  "alternate_rate": "1",
  "alternate_symbol": "string",
  "currency": "string",
  "effective_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "1",
  "new_symbol": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "1",
  "old_symbol": "string",
  "payable_date": "1970-01-01"
}
```

Unit split payload delivered when
`event_type == unit_split_corporateaction_event`. Corresponds to
`unit_splits` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but
every decimal field is emitted as a JSON string to preserve precision on
the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|alternate_cusip|string|true|none|CUSIP of the secondary leg.|
|alternate_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|alternate_rate|string|true|none|Secondary-leg shares delivered per unit, as a decimal string.|
|alternate_symbol|string|true|none|Ticker of the secondary leg (usually a warrant).|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|new_cusip|string|true|none|CUSIP of the primary leg.|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|string|true|none|Primary-leg shares delivered per unit, as a decimal string.|
|new_symbol|string|true|none|Ticker of the primary leg (usually the common share).|
|old_cusip|string|true|none|CUSIP of the unit.|
|old_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|old_rate|string|true|none|Units per ratio unit, as a decimal string.|
|old_symbol|string|true|none|Ticker of the unit being split.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|

<h2 id="tocS_ca_event_worthless_removal">ca_event_worthless_removal</h2>
<!-- backwards compatibility -->
<a id="schemaca_event_worthless_removal"></a>
<a id="schema_ca_event_worthless_removal"></a>
<a id="tocSca_event_worthless_removal"></a>
<a id="tocsca_event_worthless_removal"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "process_date": "1970-01-01",
  "currency": "string",
  "cusip": "string",
  "isin": "string",
  "symbol": "string"
}
```

Worthless removal payload delivered when
`event_type == worthless_removal_corporateaction_event`. Corresponds to
`worthless_removals` on the REST
[`GET /v1/corporate-actions`](#operation/CorporateActions) response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|CUSIP of the security.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|symbol|string|true|none|Ticker being removed.|

<h2 id="tocS_ca_id">ca_id</h2>
<!-- backwards compatibility -->
<a id="schemaca_id"></a>
<a id="schema_ca_id"></a>
<a id="tocSca_id"></a>
<a id="tocsca_id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

The internal Alpaca identifier of the corporate action.

<h2 id="tocS_capital_gains_distribution">capital_gains_distribution</h2>
<!-- backwards compatibility -->
<a id="schemacapital_gains_distribution"></a>
<a id="schema_capital_gains_distribution"></a>
<a id="tocScapital_gains_distribution"></a>
<a id="tocscapital_gains_distribution"></a>

```json
{
  "currency": "USD",
  "cusip": "36261K509",
  "ex_date": "2025-12-26",
  "id": "98c905a1-08c7-450c-8669-b8e7aee8b44d",
  "isin": "US36261K5090",
  "long_term_rate": 0.45855,
  "payable_date": "2026-01-09",
  "process_date": "2026-01-08",
  "record_date": "2025-12-29",
  "short_term_rate": 0.11019,
  "symbol": "GCAD"
}
```

Capital gains distribution paid by a fund. A single event may carry a long-term
leg (`long_term_rate`), a short-term leg (`short_term_rate`), or both when
combined. At least one of the two rates is always present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|long_term_rate|number(double)|false|none|Long-term capital-gain payment per share.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|short_term_rate|number(double)|false|none|Short-term capital-gain payment per share.|
|symbol|string|true|none|none|

<h2 id="tocS_cash_dividend">cash_dividend</h2>
<!-- backwards compatibility -->
<a id="schemacash_dividend"></a>
<a id="schema_cash_dividend"></a>
<a id="tocScash_dividend"></a>
<a id="tocscash_dividend"></a>

```json
{
  "cusip": "319829107",
  "ex_date": "2023-05-04",
  "foreign": false,
  "id": "11cfd108-292e-4cc6-bfbf-5999cdbc4029",
  "payable_date": "2023-05-19",
  "process_date": "2023-05-19",
  "rate": 0.125,
  "record_date": "2023-05-05",
  "special": false,
  "symbol": "FCF"
}
```

Cash dividend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|due_bill_off_date|string(date)|false|none|none|
|due_bill_on_date|string(date)|false|none|none|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|foreign|boolean|true|none|none|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|rate|number(double)|true|none|none|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|special|boolean|true|none|none|
|sub_type|string|false|none|Sub-type of the cash dividend.|
|symbol|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sub_type|interest|
|sub_type|return_of_capital|

<h2 id="tocS_cash_merger">cash_merger</h2>
<!-- backwards compatibility -->
<a id="schemacash_merger"></a>
<a id="schema_cash_merger"></a>
<a id="tocScash_merger"></a>
<a id="tocscash_merger"></a>

```json
{
  "acquiree_cusip": "Y2687W108",
  "acquiree_symbol": "GLOP",
  "effective_date": "2023-07-17",
  "id": "3772bbd7-4ad5-44d4-9cc0-f69156a2f8f5",
  "payable_date": "2023-07-17",
  "process_date": "2023-07-17",
  "rate": 5.37
}
```

Cash merger.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiree_cusip|string|true|none|none|
|acquiree_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquiree_symbol|string|true|none|none|
|acquirer_cusip|string|false|none|none|
|acquirer_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquirer_symbol|string|false|none|none|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|rate|number(double)|true|none|none|

<h2 id="tocS_corporate_action_event">corporate_action_event</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event"></a>
<a id="schema_corporate_action_event"></a>
<a id="tocScorporate_action_event"></a>
<a id="tocscorporate_action_event"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "ex_date": "1970-01-01",
    "isin": "string",
    "long_term_rate": "1.4372",
    "payable_date": "1970-01-01",
    "record_date": "1970-01-01",
    "short_term_rate": "0.1051",
    "symbol": "string"
  },
  "event_type": "capital_gains_distribution_corporateaction_event"
}
```

A single corporate-action mutation delivered over the
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

Every event uses the same envelope. The `event_type` field selects which of
the 15 per-type schemas populates `ca`; see
[`corporate_action_event_type`](#/components/schemas/corporate_action_event_type)
for the full mapping and follow the link on each row to the per-type `ca`
payload schema.

Optional fields (including `currency` and, on most CA types, `isin`) are
omitted from the JSON when empty; `null` is never emitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[corporate_action_event_capital_gains_distribution](#schemacorporate_action_event_capital_gains_distribution)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>capital_gains_distribution_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_cash_dividend](#schemacorporate_action_event_cash_dividend)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>cash_dividend_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_cash_merger](#schemacorporate_action_event_cash_merger)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>cash_merger_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_equity_partial_call](#schemacorporate_action_event_equity_partial_call)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>equity_partial_call_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_forward_split](#schemacorporate_action_event_forward_split)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>forward_split_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_name_change](#schemacorporate_action_event_name_change)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>name_change_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_redemption](#schemacorporate_action_event_redemption)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>redemption_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_reorganization](#schemacorporate_action_event_reorganization)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>reorganization_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_reverse_split](#schemacorporate_action_event_reverse_split)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>reverse_split_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_rights_distribution](#schemacorporate_action_event_rights_distribution)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>rights_distribution_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_spin_off](#schemacorporate_action_event_spin_off)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>spin_off_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_stock_and_cash_merger](#schemacorporate_action_event_stock_and_cash_merger)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>stock_and_cash_merger_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_stock_dividend](#schemacorporate_action_event_stock_dividend)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>stock_dividend_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_stock_merger](#schemacorporate_action_event_stock_merger)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>stock_merger_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_unit_split](#schemacorporate_action_event_unit_split)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>unit_split_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|
|*oneOf*|[corporate_action_event_worthless_removal](#schemacorporate_action_event_worthless_removal)|false|none|`corporate_action_event` envelope specialized to `event_type ==<br>worthless_removal_corporateaction_event`. Emitted through<br>[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).<br>|

<h2 id="tocS_corporate_action_event_action">corporate_action_event_action</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_action"></a>
<a id="schema_corporate_action_event_action"></a>
<a id="tocScorporate_action_event_action"></a>
<a id="tocscorporate_action_event_action"></a>

```json
"insert"
```

Kind of mutation that produced this event on the upstream corporate actions
store:

- `insert`: a new corporate action was created.
- `update`: an existing corporate action was modified (e.g. a date or rate
  correction). `ca.id` matches the original event.
- `delete`: a previously published corporate action was removed. `ca.id`
  matches the original event; subsequent events for the same id (if any)
  will be new inserts.

<h2 id="tocS_corporate_action_event_base">corporate_action_event_base</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_base"></a>
<a id="schema_corporate_action_event_base"></a>
<a id="tocScorporate_action_event_base"></a>
<a id="tocscorporate_action_event_base"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us"
}
```

Common envelope fields shared by every variant of
[`corporate_action_event`](#/components/schemas/corporate_action_event).
This schema is not meant to be used directly by clients -- it exists so each
per-`event_type` `oneOf` branch can `allOf`-compose the envelope basics
(`event_id`, `at`, `action`, `region`) alongside its narrowed `event_type` /
`ca` pair. Keeping these in one place is what makes the envelope's
`discriminator` play nicely with strict OpenAPI validators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|

<h2 id="tocS_corporate_action_event_capital_gains_distribution">corporate_action_event_capital_gains_distribution</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_capital_gains_distribution"></a>
<a id="schema_corporate_action_event_capital_gains_distribution"></a>
<a id="tocScorporate_action_event_capital_gains_distribution"></a>
<a id="tocscorporate_action_event_capital_gains_distribution"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "ex_date": "1970-01-01",
    "isin": "string",
    "long_term_rate": "1.4372",
    "payable_date": "1970-01-01",
    "record_date": "1970-01-01",
    "short_term_rate": "0.1051",
    "symbol": "string"
  },
  "event_type": "capital_gains_distribution_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
capital_gains_distribution_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_capital_gains_distribution](#schemaca_event_capital_gains_distribution)|true|none|Capital-gains distribution payload delivered when<br>`event_type == capital_gains_distribution_corporateaction_event`. Every<br>decimal field is emitted as a JSON string to preserve precision on the<br>wire. At least one of `long_term_rate` / `short_term_rate` is present;<br>combined distributions carry both.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|capital_gains_distribution_corporateaction_event|

<h2 id="tocS_corporate_action_event_cash_dividend">corporate_action_event_cash_dividend</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_cash_dividend"></a>
<a id="schema_corporate_action_event_cash_dividend"></a>
<a id="tocScorporate_action_event_cash_dividend"></a>
<a id="tocscorporate_action_event_cash_dividend"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "due_bill_off_date": "1970-01-01",
    "due_bill_on_date": "1970-01-01",
    "ex_date": "1970-01-01",
    "foreign": true,
    "isin": "string",
    "payable_date": "1970-01-01",
    "rate": "0.24",
    "record_date": "1970-01-01",
    "special": true,
    "sub_type": "interest",
    "symbol": "string"
  },
  "event_type": "cash_dividend_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
cash_dividend_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_cash_dividend](#schemaca_event_cash_dividend)|true|none|Cash dividend payload delivered when<br>`event_type == cash_dividend_corporateaction_event`. Corresponds to<br>`cash_dividends` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|cash_dividend_corporateaction_event|

<h2 id="tocS_corporate_action_event_cash_merger">corporate_action_event_cash_merger</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_cash_merger"></a>
<a id="schema_corporate_action_event_cash_merger"></a>
<a id="tocScorporate_action_event_cash_merger"></a>
<a id="tocscorporate_action_event_cash_merger"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "acquiree_cusip": "string",
    "acquiree_isin": "string",
    "acquiree_symbol": "string",
    "acquirer_cusip": "string",
    "acquirer_isin": "string",
    "acquirer_symbol": "string",
    "currency": "string",
    "effective_date": "1970-01-01",
    "payable_date": "1970-01-01",
    "rate": "42.50"
  },
  "event_type": "cash_merger_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
cash_merger_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_cash_merger](#schemaca_event_cash_merger)|true|none|Cash merger payload delivered when<br>`event_type == cash_merger_corporateaction_event`. Corresponds to<br>`cash_mergers` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|cash_merger_corporateaction_event|

<h2 id="tocS_corporate_action_event_equity_partial_call">corporate_action_event_equity_partial_call</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_equity_partial_call"></a>
<a id="schema_corporate_action_event_equity_partial_call"></a>
<a id="tocScorporate_action_event_equity_partial_call"></a>
<a id="tocscorporate_action_event_equity_partial_call"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "dividend_rate": "0.05",
    "isin": "string",
    "lottery_date": "1970-01-01",
    "lottery_type": "original",
    "payable_date": "1970-01-01",
    "price": "15.00",
    "record_date": "1970-01-01",
    "results_publication_date": "1970-01-01",
    "symbol": "string"
  },
  "event_type": "equity_partial_call_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
equity_partial_call_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_equity_partial_call](#schemaca_event_equity_partial_call)|true|none|Partial redemption of an equity issue where the issuer calls back only a<br>fraction of outstanding shares -- typically allocated to holders via a<br>lottery. Delivered when<br>`event_type == equity_partial_call_corporateaction_event`. Corresponds to<br>`partial_calls` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|equity_partial_call_corporateaction_event|

<h2 id="tocS_corporate_action_event_forward_split">corporate_action_event_forward_split</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_forward_split"></a>
<a id="schema_corporate_action_event_forward_split"></a>
<a id="tocScorporate_action_event_forward_split"></a>
<a id="tocscorporate_action_event_forward_split"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "due_bill_redemption_date": "1970-01-01",
    "ex_date": "1970-01-01",
    "isin": "string",
    "new_rate": "4",
    "old_rate": "1",
    "payable_date": "1970-01-01",
    "record_date": "1970-01-01",
    "symbol": "string"
  },
  "event_type": "forward_split_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
forward_split_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_forward_split](#schemaca_event_forward_split)|true|none|Forward stock split payload delivered when<br>`event_type == forward_split_corporateaction_event`. Corresponds to<br>`forward_splits` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|forward_split_corporateaction_event|

<h2 id="tocS_corporate_action_event_name_change">corporate_action_event_name_change</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_name_change"></a>
<a id="schema_corporate_action_event_name_change"></a>
<a id="tocScorporate_action_event_name_change"></a>
<a id="tocscorporate_action_event_name_change"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "new_cusip": "string",
    "new_isin": "string",
    "new_symbol": "string",
    "old_cusip": "string",
    "old_isin": "string",
    "old_symbol": "string"
  },
  "event_type": "name_change_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
name_change_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_name_change](#schemaca_event_name_change)|true|none|Name/ticker change payload delivered when<br>`event_type == name_change_corporateaction_event`. Corresponds to<br>`name_changes` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|name_change_corporateaction_event|

<h2 id="tocS_corporate_action_event_redemption">corporate_action_event_redemption</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_redemption"></a>
<a id="schema_corporate_action_event_redemption"></a>
<a id="tocScorporate_action_event_redemption"></a>
<a id="tocscorporate_action_event_redemption"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "isin": "string",
    "payable_date": "1970-01-01",
    "rate": "25.00",
    "symbol": "string"
  },
  "event_type": "redemption_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
redemption_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_redemption](#schemaca_event_redemption)|true|none|Full redemption payload delivered when<br>`event_type == redemption_corporateaction_event`. Corresponds to<br>`redemptions` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|redemption_corporateaction_event|

<h2 id="tocS_corporate_action_event_region">corporate_action_event_region</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_region"></a>
<a id="schema_corporate_action_event_region"></a>
<a id="tocScorporate_action_event_region"></a>
<a id="tocscorporate_action_event_region"></a>

```json
"us"
```

Envelope-level classification derived from `metadata.global` on the upstream
corporate-action record. This is the only field the SSE `region` filter
inspects on each event.

- `us`: US-listed / US-regulated corporate action.
- `non_us`: everything else.

<h2 id="tocS_corporate_action_event_reorganization">corporate_action_event_reorganization</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_reorganization"></a>
<a id="schema_corporate_action_event_reorganization"></a>
<a id="tocScorporate_action_event_reorganization"></a>
<a id="tocscorporate_action_event_reorganization"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "cash_rate": "5.00",
    "currency": "string",
    "cusip": "string",
    "effective_date": "1970-01-01",
    "isin": "string",
    "payable_date": "1970-01-01",
    "stock_movements": [
      {
        "cusip": "string",
        "isin": "string",
        "new_rate": "1",
        "source_rate": "10",
        "symbol": "string"
      }
    ],
    "symbol": "string"
  },
  "event_type": "reorganization_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
reorganization_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_reorganization](#schemaca_event_reorganization)|true|none|General-purpose corporate restructuring (e.g. Chapter 11 emergence) where<br>existing holders receive a mix of cash and/or one or more replacement<br>securities. Each entry in `stock_movements` describes a separate<br>share-class distribution. Delivered when<br>`event_type == reorganization_corporateaction_event`. Corresponds to<br>`reorganizations` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|reorganization_corporateaction_event|

<h2 id="tocS_corporate_action_event_reverse_split">corporate_action_event_reverse_split</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_reverse_split"></a>
<a id="schema_corporate_action_event_reverse_split"></a>
<a id="tocScorporate_action_event_reverse_split"></a>
<a id="tocscorporate_action_event_reverse_split"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "ex_date": "1970-01-01",
    "new_cusip": "string",
    "new_isin": "string",
    "new_rate": "1",
    "new_symbol": "string",
    "old_cusip": "string",
    "old_isin": "string",
    "old_rate": "10",
    "payable_date": "1970-01-01",
    "record_date": "1970-01-01",
    "symbol": "string"
  },
  "event_type": "reverse_split_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
reverse_split_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_reverse_split](#schemaca_event_reverse_split)|true|none|Reverse stock split payload delivered when<br>`event_type == reverse_split_corporateaction_event`. Corresponds to<br>`reverse_splits` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|reverse_split_corporateaction_event|

<h2 id="tocS_corporate_action_event_rights_distribution">corporate_action_event_rights_distribution</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_rights_distribution"></a>
<a id="schema_corporate_action_event_rights_distribution"></a>
<a id="tocScorporate_action_event_rights_distribution"></a>
<a id="tocscorporate_action_event_rights_distribution"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "ex_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "new_cusip": "string",
    "new_isin": "string",
    "new_symbol": "string",
    "payable_date": "1970-01-01",
    "rate": "0.25",
    "record_date": "1970-01-01",
    "source_cusip": "string",
    "source_isin": "string",
    "source_symbol": "string"
  },
  "event_type": "rights_distribution_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
rights_distribution_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_rights_distribution](#schemaca_event_rights_distribution)|true|none|Rights distribution payload delivered when<br>`event_type == rights_distribution_corporateaction_event`. Corresponds to<br>`rights_distributions` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|rights_distribution_corporateaction_event|

<h2 id="tocS_corporate_action_event_spin_off">corporate_action_event_spin_off</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_spin_off"></a>
<a id="schema_corporate_action_event_spin_off"></a>
<a id="tocScorporate_action_event_spin_off"></a>
<a id="tocscorporate_action_event_spin_off"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "due_bill_redemption_date": "1970-01-01",
    "ex_date": "1970-01-01",
    "new_cusip": "string",
    "new_isin": "string",
    "new_rate": "0.5",
    "new_symbol": "string",
    "payable_date": "1970-01-01",
    "record_date": "1970-01-01",
    "source_cusip": "string",
    "source_isin": "string",
    "source_rate": "1",
    "source_symbol": "string"
  },
  "event_type": "spin_off_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
spin_off_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_spin_off](#schemaca_event_spin_off)|true|none|Spin-off payload delivered when<br>`event_type == spin_off_corporateaction_event`. Corresponds to<br>`spin_offs` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|spin_off_corporateaction_event|

<h2 id="tocS_corporate_action_event_stock_and_cash_merger">corporate_action_event_stock_and_cash_merger</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_stock_and_cash_merger"></a>
<a id="schema_corporate_action_event_stock_and_cash_merger"></a>
<a id="tocScorporate_action_event_stock_and_cash_merger"></a>
<a id="tocscorporate_action_event_stock_and_cash_merger"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "acquiree_cusip": "string",
    "acquiree_isin": "string",
    "acquiree_rate": "1",
    "acquiree_symbol": "string",
    "acquirer_cusip": "string",
    "acquirer_isin": "string",
    "acquirer_rate": "0.5",
    "acquirer_symbol": "string",
    "cash_rate": "10.00",
    "currency": "string",
    "effective_date": "1970-01-01",
    "payable_date": "1970-01-01"
  },
  "event_type": "stock_and_cash_merger_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
stock_and_cash_merger_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_stock_and_cash_merger](#schemaca_event_stock_and_cash_merger)|true|none|Merger paying a mix of stock and cash. Delivered when<br>`event_type == stock_and_cash_merger_corporateaction_event`. Corresponds<br>to `stock_and_cash_mergers` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|stock_and_cash_merger_corporateaction_event|

<h2 id="tocS_corporate_action_event_stock_dividend">corporate_action_event_stock_dividend</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_stock_dividend"></a>
<a id="schema_corporate_action_event_stock_dividend"></a>
<a id="tocScorporate_action_event_stock_dividend"></a>
<a id="tocscorporate_action_event_stock_dividend"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "ex_date": "1970-01-01",
    "isin": "string",
    "payable_date": "1970-01-01",
    "rate": "0.05",
    "record_date": "1970-01-01",
    "symbol": "string"
  },
  "event_type": "stock_dividend_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
stock_dividend_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_stock_dividend](#schemaca_event_stock_dividend)|true|none|Stock dividend payload delivered when<br>`event_type == stock_dividend_corporateaction_event`. Corresponds to<br>`stock_dividends` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|stock_dividend_corporateaction_event|

<h2 id="tocS_corporate_action_event_stock_merger">corporate_action_event_stock_merger</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_stock_merger"></a>
<a id="schema_corporate_action_event_stock_merger"></a>
<a id="tocScorporate_action_event_stock_merger"></a>
<a id="tocscorporate_action_event_stock_merger"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "acquiree_cusip": "string",
    "acquiree_isin": "string",
    "acquiree_rate": "1",
    "acquiree_symbol": "string",
    "acquirer_cusip": "string",
    "acquirer_isin": "string",
    "acquirer_rate": "0.75",
    "acquirer_symbol": "string",
    "currency": "string",
    "effective_date": "1970-01-01",
    "payable_date": "1970-01-01"
  },
  "event_type": "stock_merger_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
stock_merger_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_stock_merger](#schemaca_event_stock_merger)|true|none|All-stock merger payload delivered when<br>`event_type == stock_merger_corporateaction_event`. Corresponds to<br>`stock_mergers` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|stock_merger_corporateaction_event|

<h2 id="tocS_corporate_action_event_type">corporate_action_event_type</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_type"></a>
<a id="schema_corporate_action_event_type"></a>
<a id="tocScorporate_action_event_type"></a>
<a id="tocscorporate_action_event_type"></a>

```json
"capital_gains_distribution_corporateaction_event"
```

Discriminator that determines the shape of the `ca` field on a
[`corporate_action_event`](#/components/schemas/corporate_action_event).

Each value corresponds to a per-type payload schema:

| `event_type` | `ca` schema |
| --- | --- |
| `capital_gains_distribution_corporateaction_event` | [`ca_event_capital_gains_distribution`](#/components/schemas/ca_event_capital_gains_distribution) |
| `cash_dividend_corporateaction_event` | [`ca_event_cash_dividend`](#/components/schemas/ca_event_cash_dividend) |
| `cash_merger_corporateaction_event` | [`ca_event_cash_merger`](#/components/schemas/ca_event_cash_merger) |
| `equity_partial_call_corporateaction_event` | [`ca_event_equity_partial_call`](#/components/schemas/ca_event_equity_partial_call) |
| `forward_split_corporateaction_event` | [`ca_event_forward_split`](#/components/schemas/ca_event_forward_split) |
| `name_change_corporateaction_event` | [`ca_event_name_change`](#/components/schemas/ca_event_name_change) |
| `redemption_corporateaction_event` | [`ca_event_redemption`](#/components/schemas/ca_event_redemption) |
| `reorganization_corporateaction_event` | [`ca_event_reorganization`](#/components/schemas/ca_event_reorganization) |
| `reverse_split_corporateaction_event` | [`ca_event_reverse_split`](#/components/schemas/ca_event_reverse_split) |
| `rights_distribution_corporateaction_event` | [`ca_event_rights_distribution`](#/components/schemas/ca_event_rights_distribution) |
| `spin_off_corporateaction_event` | [`ca_event_spin_off`](#/components/schemas/ca_event_spin_off) |
| `stock_and_cash_merger_corporateaction_event` | [`ca_event_stock_and_cash_merger`](#/components/schemas/ca_event_stock_and_cash_merger) |
| `stock_dividend_corporateaction_event` | [`ca_event_stock_dividend`](#/components/schemas/ca_event_stock_dividend) |
| `stock_merger_corporateaction_event` | [`ca_event_stock_merger`](#/components/schemas/ca_event_stock_merger) |
| `unit_split_corporateaction_event` | [`ca_event_unit_split`](#/components/schemas/ca_event_unit_split) |
| `worthless_removal_corporateaction_event` | [`ca_event_worthless_removal`](#/components/schemas/ca_event_worthless_removal) |

<h2 id="tocS_corporate_action_event_unit_split">corporate_action_event_unit_split</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_unit_split"></a>
<a id="schema_corporate_action_event_unit_split"></a>
<a id="tocScorporate_action_event_unit_split"></a>
<a id="tocscorporate_action_event_unit_split"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "alternate_cusip": "string",
    "alternate_isin": "string",
    "alternate_rate": "1",
    "alternate_symbol": "string",
    "currency": "string",
    "effective_date": "1970-01-01",
    "new_cusip": "string",
    "new_isin": "string",
    "new_rate": "1",
    "new_symbol": "string",
    "old_cusip": "string",
    "old_isin": "string",
    "old_rate": "1",
    "old_symbol": "string",
    "payable_date": "1970-01-01"
  },
  "event_type": "unit_split_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
unit_split_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_unit_split](#schemaca_event_unit_split)|true|none|Unit split payload delivered when<br>`event_type == unit_split_corporateaction_event`. Corresponds to<br>`unit_splits` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response, but<br>every decimal field is emitted as a JSON string to preserve precision on<br>the wire.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|unit_split_corporateaction_event|

<h2 id="tocS_corporate_action_event_worthless_removal">corporate_action_event_worthless_removal</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_action_event_worthless_removal"></a>
<a id="schema_corporate_action_event_worthless_removal"></a>
<a id="tocScorporate_action_event_worthless_removal"></a>
<a id="tocscorporate_action_event_worthless_removal"></a>

```json
{
  "action": "insert",
  "at": "2026-03-20T12:24:58.807230Z",
  "event_id": "01J9RPMV5TKB8WX3M4F1KZ7QH2",
  "region": "us",
  "ca": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "process_date": "1970-01-01",
    "currency": "string",
    "cusip": "string",
    "isin": "string",
    "symbol": "string"
  },
  "event_type": "worthless_removal_corporateaction_event"
}
```

`corporate_action_event` envelope specialized to `event_type ==
worthless_removal_corporateaction_event`. Emitted through
[Corporate Actions Events Stream](#operation/SubscribeToCorporateActionsEventsSSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[corporate_action_event_action](#schemacorporate_action_event_action)|true|none|Kind of mutation that produced this event on the upstream corporate actions<br>store:<br><br>- `insert`: a new corporate action was created.<br>- `update`: an existing corporate action was modified (e.g. a date or rate<br>  correction). `ca.id` matches the original event.<br>- `delete`: a previously published corporate action was removed. `ca.id`<br>  matches the original event; subsequent events for the same id (if any)<br>  will be new inserts.<br>|
|at|string(date-time)|true|none|RFC-3339 timestamp when the streaming service emitted this event.|
|event_id|[event_id](#schemaevent_id)|true|none|Lexically sortable, monotonically increasing 26-character<br>[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that<br>identifies a single SSE emission. Unique per message -- an `update` or<br>`delete` for the same underlying corporate action carries a fresh<br>`event_id`. Because ULIDs sort in emission order, they can be used as<br>resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`<br>reconnect header.<br>|
|region|[corporate_action_event_region](#schemacorporate_action_event_region)|true|none|Envelope-level classification derived from `metadata.global` on the upstream<br>corporate-action record. This is the only field the SSE `region` filter<br>inspects on each event.<br><br>- `us`: US-listed / US-regulated corporate action.<br>- `non_us`: everything else.<br>|
|ca|[ca_event_worthless_removal](#schemaca_event_worthless_removal)|true|none|Worthless removal payload delivered when<br>`event_type == worthless_removal_corporateaction_event`. Corresponds to<br>`worthless_removals` on the REST<br>[`GET /v1/corporate-actions`](#operation/CorporateActions) response.<br>|
|event_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|insert|
|action|update|
|action|delete|
|region|us|
|region|non_us|
|event_type|worthless_removal_corporateaction_event|

<h2 id="tocS_corporate_actions">corporate_actions</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_actions"></a>
<a id="schema_corporate_actions"></a>
<a id="tocScorporate_actions"></a>
<a id="tocscorporate_actions"></a>

```json
{
  "capital_gains_distributions": [
    {
      "currency": "USD",
      "cusip": "36261K509",
      "ex_date": "2025-12-26",
      "id": "98c905a1-08c7-450c-8669-b8e7aee8b44d",
      "isin": "US36261K5090",
      "long_term_rate": 0.45855,
      "payable_date": "2026-01-09",
      "process_date": "2026-01-08",
      "record_date": "2025-12-29",
      "short_term_rate": 0.11019,
      "symbol": "GCAD"
    }
  ],
  "cash_dividends": [
    {
      "cusip": "319829107",
      "ex_date": "2023-05-04",
      "foreign": false,
      "id": "11cfd108-292e-4cc6-bfbf-5999cdbc4029",
      "payable_date": "2023-05-19",
      "process_date": "2023-05-19",
      "rate": 0.125,
      "record_date": "2023-05-05",
      "special": false,
      "symbol": "FCF"
    }
  ],
  "cash_mergers": [
    {
      "acquiree_cusip": "Y2687W108",
      "acquiree_symbol": "GLOP",
      "effective_date": "2023-07-17",
      "id": "3772bbd7-4ad5-44d4-9cc0-f69156a2f8f5",
      "payable_date": "2023-07-17",
      "process_date": "2023-07-17",
      "rate": 5.37
    }
  ],
  "forward_splits": [
    {
      "cusip": "816851109",
      "due_bill_redemption_date": "2023-08-23",
      "ex_date": "2023-08-22",
      "id": "189bd849-ab9f-4b4d-aaaa-a6d415fd976d",
      "new_rate": 2,
      "old_rate": 1,
      "payable_date": "2023-08-21",
      "process_date": "2023-08-22",
      "record_date": "2023-08-14",
      "symbol": "SRE"
    }
  ],
  "name_changes": [
    {
      "id": "5a774c35-edec-4532-a812-a56d0bbb623a",
      "new_cusip": "Y9390M103",
      "new_symbol": "VFS",
      "old_cusip": "G11537100",
      "old_symbol": "BSAQ",
      "process_date": "2023-08-15"
    }
  ],
  "partial_calls": [
    {
      "currency": "string",
      "cusip": "string",
      "dividend_rate": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isin": "string",
      "lottery_date": "1970-01-01",
      "lottery_type": "original",
      "payable_date": "1970-01-01",
      "price": 0,
      "process_date": "1970-01-01",
      "record_date": "1970-01-01",
      "results_publication_date": "1970-01-01",
      "symbol": "string"
    }
  ],
  "redemptions": [
    {
      "cusip": "687305102",
      "id": "395da031-0e57-4918-a6fb-64a7c713aca4",
      "payable_date": "2023-06-13",
      "process_date": "2023-06-13",
      "rate": 0.141134,
      "symbol": "ORPHY"
    }
  ],
  "reorganizations": [
    {
      "cash_rate": 0,
      "currency": "string",
      "cusip": "string",
      "effective_date": "1970-01-01",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "isin": "string",
      "payable_date": "1970-01-01",
      "process_date": "1970-01-01",
      "stock_movements": [
        {
          "cusip": "string",
          "isin": "string",
          "new_rate": 0,
          "source_rate": 0,
          "symbol": "string"
        }
      ],
      "symbol": "string"
    }
  ],
  "reverse_splits": [
    {
      "ex_date": "2023-08-24",
      "id": "913de862-c02c-46dc-a89c-fc8779a50d30",
      "new_cusip": "60879E200",
      "new_rate": 1,
      "old_cusip": "60879E101",
      "old_rate": 50,
      "process_date": "2023-08-24",
      "record_date": "2023-08-24",
      "symbol": "MNTS"
    }
  ],
  "rights_distributions": [
    {
      "ex_date": "2024-04-17",
      "expiration_date": "2024-05-14",
      "id": "69794cfd-0adc-4e11-9211-9210a9cf8932",
      "new_cusip": "454089111",
      "new_symbol": "IFN.RTWI",
      "payable_date": "2024-04-19",
      "process_date": "2024-04-19",
      "rate": 1,
      "record_date": "2024-04-18",
      "source_cusip": "454089103",
      "source_symbol": "IFN"
    }
  ],
  "spin_offs": [
    {
      "ex_date": "2023-08-15",
      "id": "82e602f6-35bc-4651-a5dd-f6d88ff37c55",
      "new_cusip": "85237B101",
      "new_rate": 1,
      "new_symbol": "SRM",
      "process_date": "2023-08-15",
      "record_date": "2023-08-15",
      "source_cusip": "48208F105",
      "source_rate": 19.35,
      "source_symbol": "JUPW"
    }
  ],
  "stock_and_cash_mergers": [
    {
      "acquiree_cusip": "561409103",
      "acquiree_rate": 1,
      "acquiree_symbol": "MLVF",
      "acquirer_cusip": "31931U102",
      "acquirer_rate": 0.7733,
      "acquirer_symbol": "FRBA",
      "cash_rate": 7.8,
      "effective_date": "2023-07-18",
      "id": "e5248356-2c06-42cf-aeb9-1595bd616cdb",
      "payable_date": "2023-07-18",
      "process_date": "2023-07-18"
    }
  ],
  "stock_dividends": [
    {
      "cusip": "605015106",
      "ex_date": "2023-05-19",
      "id": "3ae94c30-2d37-473a-bf29-5f7b4ab6d3ca",
      "payable_date": "2023-05-05",
      "process_date": "2023-05-19",
      "rate": 0.05,
      "record_date": "2023-05-22",
      "symbol": "MSBC"
    }
  ],
  "stock_mergers": [
    {
      "acquiree_cusip": "53223X107",
      "acquiree_rate": 1,
      "acquiree_symbol": "LSI",
      "acquirer_cusip": "30225T102",
      "acquirer_rate": 0.895,
      "acquirer_symbol": "EXR",
      "effective_date": "2023-07-20",
      "id": "728f8cb2-a00e-4bc7-ad14-d15fe82bbcff",
      "payable_date": "2023-07-20",
      "process_date": "2023-07-20"
    }
  ],
  "unit_splits": [
    {
      "alternate_cusip": "G5391L110",
      "alternate_rate": 0.3333,
      "alternate_symbol": "LVROW",
      "effective_date": "2023-03-01",
      "id": "3e68e87e-ae95-4d68-91d1-715d52ef143a",
      "new_cusip": "G5391L102",
      "new_rate": 1,
      "new_symbol": "LVRO",
      "old_cusip": "G8990L119",
      "old_rate": 1,
      "old_symbol": "TPBAU",
      "process_date": "2023-03-01"
    }
  ],
  "worthless_removals": [
    {
      "cusip": "078771300",
      "id": "106c2149-ee04-4d2e-a943-98dbb4d21a3c",
      "process_date": "2024-12-19",
      "symbol": "BLPH"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capital_gains_distributions|[[capital_gains_distribution](#schemacapital_gains_distribution)]|false|none|none|
|cash_dividends|[[cash_dividend](#schemacash_dividend)]|false|none|none|
|cash_mergers|[[cash_merger](#schemacash_merger)]|false|none|none|
|forward_splits|[[forward_split](#schemaforward_split)]|false|none|none|
|name_changes|[[name_change](#schemaname_change)]|false|none|none|
|partial_calls|[[partial_call](#schemapartial_call)]|false|none|none|
|redemptions|[[redemption](#schemaredemption)]|false|none|none|
|reorganizations|[[reorganization](#schemareorganization)]|false|none|none|
|reverse_splits|[[reverse_split](#schemareverse_split)]|false|none|none|
|rights_distributions|[[rights_distribution](#schemarights_distribution)]|false|none|none|
|spin_offs|[[spin_off](#schemaspin_off)]|false|none|none|
|stock_and_cash_mergers|[[stock_and_cash_merger](#schemastock_and_cash_merger)]|false|none|none|
|stock_dividends|[[stock_dividend](#schemastock_dividend)]|false|none|none|
|stock_mergers|[[stock_merger](#schemastock_merger)]|false|none|none|
|unit_splits|[[unit_split](#schemaunit_split)]|false|none|none|
|worthless_removals|[[worthless_removal](#schemaworthless_removal)]|false|none|none|

<h2 id="tocS_corporate_actions_resp">corporate_actions_resp</h2>
<!-- backwards compatibility -->
<a id="schemacorporate_actions_resp"></a>
<a id="schema_corporate_actions_resp"></a>
<a id="tocScorporate_actions_resp"></a>
<a id="tocscorporate_actions_resp"></a>

```json
{
  "corporate_actions": {
    "capital_gains_distributions": [
      {
        "currency": "USD",
        "cusip": "36261K509",
        "ex_date": "2025-12-26",
        "id": "98c905a1-08c7-450c-8669-b8e7aee8b44d",
        "isin": "US36261K5090",
        "long_term_rate": 0.45855,
        "payable_date": "2026-01-09",
        "process_date": "2026-01-08",
        "record_date": "2025-12-29",
        "short_term_rate": 0.11019,
        "symbol": "GCAD"
      }
    ],
    "cash_dividends": [
      {
        "cusip": "319829107",
        "ex_date": "2023-05-04",
        "foreign": false,
        "id": "11cfd108-292e-4cc6-bfbf-5999cdbc4029",
        "payable_date": "2023-05-19",
        "process_date": "2023-05-19",
        "rate": 0.125,
        "record_date": "2023-05-05",
        "special": false,
        "symbol": "FCF"
      }
    ],
    "cash_mergers": [
      {
        "acquiree_cusip": "Y2687W108",
        "acquiree_symbol": "GLOP",
        "effective_date": "2023-07-17",
        "id": "3772bbd7-4ad5-44d4-9cc0-f69156a2f8f5",
        "payable_date": "2023-07-17",
        "process_date": "2023-07-17",
        "rate": 5.37
      }
    ],
    "forward_splits": [
      {
        "cusip": "816851109",
        "due_bill_redemption_date": "2023-08-23",
        "ex_date": "2023-08-22",
        "id": "189bd849-ab9f-4b4d-aaaa-a6d415fd976d",
        "new_rate": 2,
        "old_rate": 1,
        "payable_date": "2023-08-21",
        "process_date": "2023-08-22",
        "record_date": "2023-08-14",
        "symbol": "SRE"
      }
    ],
    "name_changes": [
      {
        "id": "5a774c35-edec-4532-a812-a56d0bbb623a",
        "new_cusip": "Y9390M103",
        "new_symbol": "VFS",
        "old_cusip": "G11537100",
        "old_symbol": "BSAQ",
        "process_date": "2023-08-15"
      }
    ],
    "partial_calls": [
      {
        "currency": "string",
        "cusip": "string",
        "dividend_rate": 0,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "isin": "string",
        "lottery_date": "1970-01-01",
        "lottery_type": "original",
        "payable_date": "1970-01-01",
        "price": 0,
        "process_date": "1970-01-01",
        "record_date": "1970-01-01",
        "results_publication_date": "1970-01-01",
        "symbol": "string"
      }
    ],
    "redemptions": [
      {
        "cusip": "687305102",
        "id": "395da031-0e57-4918-a6fb-64a7c713aca4",
        "payable_date": "2023-06-13",
        "process_date": "2023-06-13",
        "rate": 0.141134,
        "symbol": "ORPHY"
      }
    ],
    "reorganizations": [
      {
        "cash_rate": 0,
        "currency": "string",
        "cusip": "string",
        "effective_date": "1970-01-01",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "isin": "string",
        "payable_date": "1970-01-01",
        "process_date": "1970-01-01",
        "stock_movements": [
          {
            "cusip": "string",
            "isin": "string",
            "new_rate": 0,
            "source_rate": 0,
            "symbol": "string"
          }
        ],
        "symbol": "string"
      }
    ],
    "reverse_splits": [
      {
        "ex_date": "2023-08-24",
        "id": "913de862-c02c-46dc-a89c-fc8779a50d30",
        "new_cusip": "60879E200",
        "new_rate": 1,
        "old_cusip": "60879E101",
        "old_rate": 50,
        "process_date": "2023-08-24",
        "record_date": "2023-08-24",
        "symbol": "MNTS"
      }
    ],
    "rights_distributions": [
      {
        "ex_date": "2024-04-17",
        "expiration_date": "2024-05-14",
        "id": "69794cfd-0adc-4e11-9211-9210a9cf8932",
        "new_cusip": "454089111",
        "new_symbol": "IFN.RTWI",
        "payable_date": "2024-04-19",
        "process_date": "2024-04-19",
        "rate": 1,
        "record_date": "2024-04-18",
        "source_cusip": "454089103",
        "source_symbol": "IFN"
      }
    ],
    "spin_offs": [
      {
        "ex_date": "2023-08-15",
        "id": "82e602f6-35bc-4651-a5dd-f6d88ff37c55",
        "new_cusip": "85237B101",
        "new_rate": 1,
        "new_symbol": "SRM",
        "process_date": "2023-08-15",
        "record_date": "2023-08-15",
        "source_cusip": "48208F105",
        "source_rate": 19.35,
        "source_symbol": "JUPW"
      }
    ],
    "stock_and_cash_mergers": [
      {
        "acquiree_cusip": "561409103",
        "acquiree_rate": 1,
        "acquiree_symbol": "MLVF",
        "acquirer_cusip": "31931U102",
        "acquirer_rate": 0.7733,
        "acquirer_symbol": "FRBA",
        "cash_rate": 7.8,
        "effective_date": "2023-07-18",
        "id": "e5248356-2c06-42cf-aeb9-1595bd616cdb",
        "payable_date": "2023-07-18",
        "process_date": "2023-07-18"
      }
    ],
    "stock_dividends": [
      {
        "cusip": "605015106",
        "ex_date": "2023-05-19",
        "id": "3ae94c30-2d37-473a-bf29-5f7b4ab6d3ca",
        "payable_date": "2023-05-05",
        "process_date": "2023-05-19",
        "rate": 0.05,
        "record_date": "2023-05-22",
        "symbol": "MSBC"
      }
    ],
    "stock_mergers": [
      {
        "acquiree_cusip": "53223X107",
        "acquiree_rate": 1,
        "acquiree_symbol": "LSI",
        "acquirer_cusip": "30225T102",
        "acquirer_rate": 0.895,
        "acquirer_symbol": "EXR",
        "effective_date": "2023-07-20",
        "id": "728f8cb2-a00e-4bc7-ad14-d15fe82bbcff",
        "payable_date": "2023-07-20",
        "process_date": "2023-07-20"
      }
    ],
    "unit_splits": [
      {
        "alternate_cusip": "G5391L110",
        "alternate_rate": 0.3333,
        "alternate_symbol": "LVROW",
        "effective_date": "2023-03-01",
        "id": "3e68e87e-ae95-4d68-91d1-715d52ef143a",
        "new_cusip": "G5391L102",
        "new_rate": 1,
        "new_symbol": "LVRO",
        "old_cusip": "G8990L119",
        "old_rate": 1,
        "old_symbol": "TPBAU",
        "process_date": "2023-03-01"
      }
    ],
    "worthless_removals": [
      {
        "cusip": "078771300",
        "id": "106c2149-ee04-4d2e-a943-98dbb4d21a3c",
        "process_date": "2024-12-19",
        "symbol": "BLPH"
      }
    ]
  },
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporate_actions|[corporate_actions](#schemacorporate_actions)|true|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|

<h2 id="tocS_crypto_bar">crypto_bar</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_bar"></a>
<a id="schema_crypto_bar"></a>
<a id="tocScrypto_bar"></a>
<a id="tocscrypto_bar"></a>

```json
{
  "c": 29003,
  "h": 29003,
  "l": 28999,
  "n": 4,
  "o": 28999,
  "t": "2022-05-27T10:18:00Z",
  "v": 0.01,
  "vw": 29001
}
```

OHLC aggregate of all the trades in a given interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|Closing price.|
|h|number(double)|true|none|High price.|
|l|number(double)|true|none|Low price.|
|n|integer(int64)|true|none|Trade count in the bar.|
|o|number(double)|true|none|Opening price.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|v|number(double)|true|none|Bar volume.|
|vw|number(double)|true|none|Volume weighted average price.|

<h2 id="tocS_crypto_bars_resp">crypto_bars_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_bars_resp"></a>
<a id="schema_crypto_bars_resp"></a>
<a id="tocScrypto_bars_resp"></a>
<a id="tocscrypto_bars_resp"></a>

```json
{
  "bars": {
    "property1": [
      {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      }
    ],
    "property2": [
      {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      }
    ]
  },
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|object|true|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|

<h2 id="tocS_crypto_historical_loc">crypto_historical_loc</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_historical_loc"></a>
<a id="schema_crypto_historical_loc"></a>
<a id="tocScrypto_historical_loc"></a>
<a id="tocscrypto_historical_loc"></a>

```json
"us"
```

Crypto location from where the historical market data is retrieved.

<h2 id="tocS_crypto_latest_bars_resp">crypto_latest_bars_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_latest_bars_resp"></a>
<a id="schema_crypto_latest_bars_resp"></a>
<a id="tocScrypto_latest_bars_resp"></a>
<a id="tocscrypto_latest_bars_resp"></a>

```json
{
  "bars": {
    "property1": {
      "c": 29003,
      "h": 29003,
      "l": 28999,
      "n": 4,
      "o": 28999,
      "t": "2022-05-27T10:18:00Z",
      "v": 0.01,
      "vw": 29001
    },
    "property2": {
      "c": 29003,
      "h": 29003,
      "l": 28999,
      "n": 4,
      "o": 28999,
      "t": "2022-05-27T10:18:00Z",
      "v": 0.01,
      "vw": 29001
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|object|true|none|none|

<h2 id="tocS_crypto_latest_loc">crypto_latest_loc</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_latest_loc"></a>
<a id="schema_crypto_latest_loc"></a>
<a id="tocScrypto_latest_loc"></a>
<a id="tocscrypto_latest_loc"></a>

```json
"us"
```

Crypto location from where the latest market data is retrieved.

<h2 id="tocS_crypto_latest_orderbooks_resp">crypto_latest_orderbooks_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_latest_orderbooks_resp"></a>
<a id="schema_crypto_latest_orderbooks_resp"></a>
<a id="tocScrypto_latest_orderbooks_resp"></a>
<a id="tocscrypto_latest_orderbooks_resp"></a>

```json
{
  "orderbooks": {
    "property1": {
      "a": [
        {
          "p": 20902,
          "s": 0.0097
        },
        {
          "p": 21444,
          "s": 0
        }
      ],
      "b": [
        {
          "p": 20846,
          "s": 0.1902
        },
        {
          "p": 20350,
          "s": 0
        }
      ],
      "t": "2022-06-24T08:00:14.137774336Z"
    },
    "property2": {
      "a": [
        {
          "p": 20902,
          "s": 0.0097
        },
        {
          "p": 21444,
          "s": 0
        }
      ],
      "b": [
        {
          "p": 20846,
          "s": 0.1902
        },
        {
          "p": 20350,
          "s": 0
        }
      ],
      "t": "2022-06-24T08:00:14.137774336Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderbooks|object|true|none|none|

<h2 id="tocS_crypto_latest_quotes_resp">crypto_latest_quotes_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_latest_quotes_resp"></a>
<a id="schema_crypto_latest_quotes_resp"></a>
<a id="tocScrypto_latest_quotes_resp"></a>
<a id="tocscrypto_latest_quotes_resp"></a>

```json
{
  "quotes": {
    "property1": {
      "ap": 29059,
      "as": 3.252,
      "bp": 29058,
      "bs": 0.3544,
      "t": "2022-05-26T11:47:18.44347136Z"
    },
    "property2": {
      "ap": 29059,
      "as": 3.252,
      "bp": 29058,
      "bs": 0.3544,
      "t": "2022-05-26T11:47:18.44347136Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotes|object|true|none|none|

<h2 id="tocS_crypto_latest_trades_resp">crypto_latest_trades_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_latest_trades_resp"></a>
<a id="schema_crypto_latest_trades_resp"></a>
<a id="tocScrypto_latest_trades_resp"></a>
<a id="tocscrypto_latest_trades_resp"></a>

```json
{
  "trades": {
    "property1": {
      "i": 31455277,
      "p": 29798,
      "s": 0.1209,
      "t": "2022-05-18T12:00:05.225055Z",
      "tks": "S"
    },
    "property2": {
      "i": 31455277,
      "p": 29798,
      "s": 0.1209,
      "t": "2022-05-18T12:00:05.225055Z",
      "tks": "S"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trades|object|true|none|none|

<h2 id="tocS_crypto_orderbook">crypto_orderbook</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_orderbook"></a>
<a id="schema_crypto_orderbook"></a>
<a id="tocScrypto_orderbook"></a>
<a id="tocscrypto_orderbook"></a>

```json
{
  "a": [
    {
      "p": 20902,
      "s": 0.0097
    },
    {
      "p": 21444,
      "s": 0
    }
  ],
  "b": [
    {
      "p": 20846,
      "s": 0.1902
    },
    {
      "p": 20350,
      "s": 0
    }
  ],
  "t": "2022-06-24T08:00:14.137774336Z"
}
```

Snapshot of the orderbook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|[[crypto_orderbook_entry](#schemacrypto_orderbook_entry)]|true|none|none|
|b|[[crypto_orderbook_entry](#schemacrypto_orderbook_entry)]|true|none|none|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|

<h2 id="tocS_crypto_orderbook_entry">crypto_orderbook_entry</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_orderbook_entry"></a>
<a id="schema_crypto_orderbook_entry"></a>
<a id="tocScrypto_orderbook_entry"></a>
<a id="tocscrypto_orderbook_entry"></a>

```json
{
  "p": 20846,
  "s": 0.1902
}
```

A single entry in a crypto orderbook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|p|number(double)|true|none|Price.|
|s|number(double)|true|none|Size.|

<h2 id="tocS_crypto_quote">crypto_quote</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_quote"></a>
<a id="schema_crypto_quote"></a>
<a id="tocScrypto_quote"></a>
<a id="tocscrypto_quote"></a>

```json
{
  "ap": 29059,
  "as": 3.252,
  "bp": 29058,
  "bs": 0.3544,
  "t": "2022-05-26T11:47:18.44347136Z"
}
```

The best bid and ask information for a given security.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ap|number(double)|true|none|Ask price.|
|as|number(double)|true|none|Ask size.|
|bp|number(double)|true|none|Bid price.|
|bs|number(double)|true|none|Bid size.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|

<h2 id="tocS_crypto_quotes_resp">crypto_quotes_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_quotes_resp"></a>
<a id="schema_crypto_quotes_resp"></a>
<a id="tocScrypto_quotes_resp"></a>
<a id="tocscrypto_quotes_resp"></a>

```json
{
  "next_page_token": "string",
  "quotes": {
    "property1": [
      {
        "ap": 29059,
        "as": 3.252,
        "bp": 29058,
        "bs": 0.3544,
        "t": "2022-05-26T11:47:18.44347136Z"
      }
    ],
    "property2": [
      {
        "ap": 29059,
        "as": 3.252,
        "bp": 29058,
        "bs": 0.3544,
        "t": "2022-05-26T11:47:18.44347136Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|quotes|object|true|none|none|

<h2 id="tocS_crypto_snapshot">crypto_snapshot</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_snapshot"></a>
<a id="schema_crypto_snapshot"></a>
<a id="tocScrypto_snapshot"></a>
<a id="tocscrypto_snapshot"></a>

```json
{
  "dailyBar": {
    "c": 29003,
    "h": 29003,
    "l": 28999,
    "n": 4,
    "o": 28999,
    "t": "2022-05-27T10:18:00Z",
    "v": 0.01,
    "vw": 29001
  },
  "latestQuote": {
    "ap": 29059,
    "as": 3.252,
    "bp": 29058,
    "bs": 0.3544,
    "t": "2022-05-26T11:47:18.44347136Z"
  },
  "latestTrade": {
    "i": 31455277,
    "p": 29798,
    "s": 0.1209,
    "t": "2022-05-18T12:00:05.225055Z",
    "tks": "S"
  },
  "minuteBar": {
    "c": 29003,
    "h": 29003,
    "l": 28999,
    "n": 4,
    "o": 28999,
    "t": "2022-05-27T10:18:00Z",
    "v": 0.01,
    "vw": 29001
  },
  "prevDailyBar": {
    "c": 29003,
    "h": 29003,
    "l": 28999,
    "n": 4,
    "o": 28999,
    "t": "2022-05-27T10:18:00Z",
    "v": 0.01,
    "vw": 29001
  }
}
```

A snapshot provides the latest trade, latest quote, latest minute bar, latest daily bar and previous daily bar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyBar|[crypto_bar](#schemacrypto_bar)|false|none|OHLC aggregate of all the trades in a given interval.|
|latestQuote|[crypto_quote](#schemacrypto_quote)|false|none|The best bid and ask information for a given security.|
|latestTrade|[crypto_trade](#schemacrypto_trade)|false|none|A crypto trade.|
|minuteBar|[crypto_bar](#schemacrypto_bar)|false|none|OHLC aggregate of all the trades in a given interval.|
|prevDailyBar|[crypto_bar](#schemacrypto_bar)|false|none|OHLC aggregate of all the trades in a given interval.|

<h2 id="tocS_crypto_snapshots_resp">crypto_snapshots_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_snapshots_resp"></a>
<a id="schema_crypto_snapshots_resp"></a>
<a id="tocScrypto_snapshots_resp"></a>
<a id="tocscrypto_snapshots_resp"></a>

```json
{
  "snapshots": {
    "property1": {
      "dailyBar": {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      },
      "latestQuote": {
        "ap": 29059,
        "as": 3.252,
        "bp": 29058,
        "bs": 0.3544,
        "t": "2022-05-26T11:47:18.44347136Z"
      },
      "latestTrade": {
        "i": 31455277,
        "p": 29798,
        "s": 0.1209,
        "t": "2022-05-18T12:00:05.225055Z",
        "tks": "S"
      },
      "minuteBar": {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      },
      "prevDailyBar": {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      }
    },
    "property2": {
      "dailyBar": {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      },
      "latestQuote": {
        "ap": 29059,
        "as": 3.252,
        "bp": 29058,
        "bs": 0.3544,
        "t": "2022-05-26T11:47:18.44347136Z"
      },
      "latestTrade": {
        "i": 31455277,
        "p": 29798,
        "s": 0.1209,
        "t": "2022-05-18T12:00:05.225055Z",
        "tks": "S"
      },
      "minuteBar": {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      },
      "prevDailyBar": {
        "c": 29003,
        "h": 29003,
        "l": 28999,
        "n": 4,
        "o": 28999,
        "t": "2022-05-27T10:18:00Z",
        "v": 0.01,
        "vw": 29001
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshots|object|true|none|none|

<h2 id="tocS_crypto_trade">crypto_trade</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_trade"></a>
<a id="schema_crypto_trade"></a>
<a id="tocScrypto_trade"></a>
<a id="tocscrypto_trade"></a>

```json
{
  "i": 31455277,
  "p": 29798,
  "s": 0.1209,
  "t": "2022-05-18T12:00:05.225055Z",
  "tks": "S"
}
```

A crypto trade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|i|integer(int64)|true|none|Trade ID.|
|p|number(double)|true|none|Trade price.|
|s|number(double)|true|none|Trade size.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|tks|string|true|none|Taker side: B for buyer, S for seller<br>|

<h2 id="tocS_crypto_trades_resp">crypto_trades_resp</h2>
<!-- backwards compatibility -->
<a id="schemacrypto_trades_resp"></a>
<a id="schema_crypto_trades_resp"></a>
<a id="tocScrypto_trades_resp"></a>
<a id="tocscrypto_trades_resp"></a>

```json
{
  "next_page_token": "string",
  "trades": {
    "property1": [
      {
        "i": 31455277,
        "p": 29798,
        "s": 0.1209,
        "t": "2022-05-18T12:00:05.225055Z",
        "tks": "S"
      }
    ],
    "property2": [
      {
        "i": 31455277,
        "p": 29798,
        "s": 0.1209,
        "t": "2022-05-18T12:00:05.225055Z",
        "tks": "S"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|trades|object|true|none|none|

<h2 id="tocS_currency">currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"string"
```

The ISO 4217 currency code associated with the corporate action.
Empty value can mean USD, non-applicable (e.g. for name changes) or unknown
(can change later to a valid currency).

<h2 id="tocS_data_quality">data_quality</h2>
<!-- backwards compatibility -->
<a id="schemadata_quality"></a>
<a id="schema_data_quality"></a>
<a id="tocSdata_quality"></a>
<a id="tocsdata_quality"></a>

```json
"complete"
```

Controls which corporate actions are returned based on data quality.

- `complete` (default): exclude corporate actions that are still missing required
  fields (for example, ex-date or CUSIP/ISIN) and have not yet been processed.
  Already-processed corporate actions are always included, even if they would
  otherwise be considered incomplete.
- `all`: return matching corporate actions regardless of field completeness.

<h2 id="tocS_date">date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01"
```

Date in RFC-3339.

<h2 id="tocS_due_bill_redemption_date">due_bill_redemption_date</h2>
<!-- backwards compatibility -->
<a id="schemadue_bill_redemption_date"></a>
<a id="schema_due_bill_redemption_date"></a>
<a id="tocSdue_bill_redemption_date"></a>
<a id="tocsdue_bill_redemption_date"></a>

```json
"1970-01-01"
```

The date when due bill obligations are redeemed.

<h2 id="tocS_effective_date">effective_date</h2>
<!-- backwards compatibility -->
<a id="schemaeffective_date"></a>
<a id="schema_effective_date"></a>
<a id="tocSeffective_date"></a>
<a id="tocseffective_date"></a>

```json
"1970-01-01"
```

The effective date marks the cutoff point for shareholders to be credited.

<h2 id="tocS_event_id">event_id</h2>
<!-- backwards compatibility -->
<a id="schemaevent_id"></a>
<a id="schema_event_id"></a>
<a id="tocSevent_id"></a>
<a id="tocsevent_id"></a>

```json
"01J9RPMV5TKB8WX3M4F1KZ7QH2"
```

Lexically sortable, monotonically increasing 26-character
[ULID](https://github.com/ulid/spec) (Crockford Base32, uppercase) that
identifies a single SSE emission. Unique per message -- an `update` or
`delete` for the same underlying corporate action carries a fresh
`event_id`. Because ULIDs sort in emission order, they can be used as
resume cursors via `since_id`, `until_id`, or the standard `Last-Event-Id`
reconnect header.

<h2 id="tocS_ex_date">ex_date</h2>
<!-- backwards compatibility -->
<a id="schemaex_date"></a>
<a id="schema_ex_date"></a>
<a id="tocSex_date"></a>
<a id="tocsex_date"></a>

```json
"1970-01-01"
```

The ex-date marks the cutoff point for shareholders to be credited.

<h2 id="tocS_expiration_date">expiration_date</h2>
<!-- backwards compatibility -->
<a id="schemaexpiration_date"></a>
<a id="schema_expiration_date"></a>
<a id="tocSexpiration_date"></a>
<a id="tocsexpiration_date"></a>

```json
"1970-01-01"
```

<h2 id="tocS_fixed_income_latest_prices_resp">fixed_income_latest_prices_resp</h2>
<!-- backwards compatibility -->
<a id="schemafixed_income_latest_prices_resp"></a>
<a id="schema_fixed_income_latest_prices_resp"></a>
<a id="tocSfixed_income_latest_prices_resp"></a>
<a id="tocsfixed_income_latest_prices_resp"></a>

```json
{
  "prices": {
    "US912797KJ59": {
      "p": 99.6459,
      "t": "2025-02-14T20:58:00.648Z",
      "ytm": 4.249,
      "ytw": 4.249
    }
  }
}
```

Latest fixed-income prices keyed by ISIN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prices|object|true|none|none|

<h2 id="tocS_fixed_income_latest_quotes_resp">fixed_income_latest_quotes_resp</h2>
<!-- backwards compatibility -->
<a id="schemafixed_income_latest_quotes_resp"></a>
<a id="schema_fixed_income_latest_quotes_resp"></a>
<a id="tocSfixed_income_latest_quotes_resp"></a>
<a id="tocsfixed_income_latest_quotes_resp"></a>

```json
{
  "quotes": {
    "US912797SX61": {
      "ams": 1000,
      "ap": 99.91958333,
      "as": 1000000,
      "aytm": 2.226923,
      "aytw": 2.226923,
      "bms": 1000,
      "bp": 99.81091667,
      "bs": 1000000,
      "bytm": 5.236154,
      "bytw": 5.236154,
      "t": "2026-05-21T06:56:01.882466873Z"
    }
  }
}
```

Latest fixed-income best bid and ask quotes keyed by ISIN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotes|object|true|none|none|

<h2 id="tocS_fixed_income_price">fixed_income_price</h2>
<!-- backwards compatibility -->
<a id="schemafixed_income_price"></a>
<a id="schema_fixed_income_price"></a>
<a id="tocSfixed_income_price"></a>
<a id="tocsfixed_income_price"></a>

```json
{
  "p": 99.6459,
  "t": "2025-02-14T20:58:00.648Z",
  "ytm": 4.249,
  "ytw": 4.249
}
```

The price of the instrument as a percentage of its par value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|p|number(double)|true|none|Price|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|ytm|number(double)|false|none|Yield to maturity.|
|ytw|number(double)|false|none|Yield to worst.|

<h2 id="tocS_fixed_income_quote">fixed_income_quote</h2>
<!-- backwards compatibility -->
<a id="schemafixed_income_quote"></a>
<a id="schema_fixed_income_quote"></a>
<a id="tocSfixed_income_quote"></a>
<a id="tocsfixed_income_quote"></a>

```json
{
  "ams": 1000,
  "ap": 99.91958333,
  "as": 1000000,
  "aytm": 2.226923,
  "aytw": 2.226923,
  "bms": 1000,
  "bp": 99.81091667,
  "bs": 1000000,
  "bytm": 5.236154,
  "bytw": 5.236154,
  "t": "2026-05-21T06:56:01.882466873Z"
}
```

The best bid and ask information for a given fixed income security. A value of 0 means there is no active bid or ask for that field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ams|integer(int64)|true|none|Best ask minimum trade size in par value.|
|ap|number(double)|true|none|Best ask price. 0 means there is no active ask.|
|as|integer(int64)|true|none|Best ask size in par value. 0 means there is no active ask.|
|aytm|number(double)|true|none|Best ask yield to maturity.|
|aytw|number(double)|true|none|Best ask yield to worst.|
|bms|integer(int64)|true|none|Best bid minimum trade size in par value.|
|bp|number(double)|true|none|Best bid price. 0 means there is no active bid.|
|bs|integer(int64)|true|none|Best bid size in par value. 0 means there is no active bid.|
|bytm|number(double)|true|none|Best bid yield to maturity.|
|bytw|number(double)|true|none|Best bid yield to worst.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|

<h2 id="tocS_forward_split">forward_split</h2>
<!-- backwards compatibility -->
<a id="schemaforward_split"></a>
<a id="schema_forward_split"></a>
<a id="tocSforward_split"></a>
<a id="tocsforward_split"></a>

```json
{
  "cusip": "816851109",
  "due_bill_redemption_date": "2023-08-23",
  "ex_date": "2023-08-22",
  "id": "189bd849-ab9f-4b4d-aaaa-a6d415fd976d",
  "new_rate": 2,
  "old_rate": 1,
  "payable_date": "2023-08-21",
  "process_date": "2023-08-22",
  "record_date": "2023-08-14",
  "symbol": "SRE"
}
```

Forward split.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|due_bill_redemption_date|[due_bill_redemption_date](#schemadue_bill_redemption_date)|false|none|The date when due bill obligations are redeemed.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|number(double)|true|none|none|
|old_rate|number(double)|true|none|none|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|symbol|string|true|none|none|

<h2 id="tocS_isin">isin</h2>
<!-- backwards compatibility -->
<a id="schemaisin"></a>
<a id="schema_isin"></a>
<a id="tocSisin"></a>
<a id="tocsisin"></a>

```json
"string"
```

International Securities Identification Number (ISIN) as defined by ISO 6166.
May be empty for US corporate actions.

<h2 id="tocS_market_type">market_type</h2>
<!-- backwards compatibility -->
<a id="schemamarket_type"></a>
<a id="schema_market_type"></a>
<a id="tocSmarket_type"></a>
<a id="tocsmarket_type"></a>

```json
"stocks"
```

Market type (stocks or crypto).

<h2 id="tocS_most_active">most_active</h2>
<!-- backwards compatibility -->
<a id="schemamost_active"></a>
<a id="schema_most_active"></a>
<a id="tocSmost_active"></a>
<a id="tocsmost_active"></a>

```json
{
  "symbol": "AAPL",
  "trade_count": 639626,
  "volume": 122709184
}
```

A stock that is most active by either volume or trade count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|trade_count|integer(int64)|true|none|Cumulative trade count for the current trading day.|
|volume|integer(int64)|true|none|Cumulative volume for the current trading day.|

<h2 id="tocS_most_actives_resp">most_actives_resp</h2>
<!-- backwards compatibility -->
<a id="schemamost_actives_resp"></a>
<a id="schema_most_actives_resp"></a>
<a id="tocSmost_actives_resp"></a>
<a id="tocsmost_actives_resp"></a>

```json
{
  "last_updated": "string",
  "most_actives": [
    {
      "symbol": "AAPL",
      "trade_count": 639626,
      "volume": 122709184
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_updated|string|true|none|Time when the most actives were last computed. Formatted as a RFC-3339 date-time with nanosecond precision.<br>|
|most_actives|[[most_active](#schemamost_active)]|true|none|List of top N most active symbols.|

<h2 id="tocS_mover">mover</h2>
<!-- backwards compatibility -->
<a id="schemamover"></a>
<a id="schema_mover"></a>
<a id="tocSmover"></a>
<a id="tocsmover"></a>

```json
{
  "change": 2.46,
  "percent_change": 145.56,
  "price": 4.15,
  "symbol": "AGRI"
}
```

A symbol whose price moved significantly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change|number(double)|true|none|Difference in change for the day.|
|percent_change|number(double)|true|none|Percentage difference change for the day.|
|price|number(double)|true|none|Current price of market moving asset.|
|symbol|string|true|none|Symbol of market moving asset.|

<h2 id="tocS_movers_resp">movers_resp</h2>
<!-- backwards compatibility -->
<a id="schemamovers_resp"></a>
<a id="schema_movers_resp"></a>
<a id="tocSmovers_resp"></a>
<a id="tocsmovers_resp"></a>

```json
{
  "gainers": [
    {
      "change": 2.46,
      "percent_change": 145.56,
      "price": 4.15,
      "symbol": "AGRI"
    }
  ],
  "last_updated": "string",
  "losers": [
    {
      "change": 2.46,
      "percent_change": 145.56,
      "price": 4.15,
      "symbol": "AGRI"
    }
  ],
  "market_type": "stocks"
}
```

Contains list of market movers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gainers|[[mover](#schemamover)]|true|none|List of top N gainers.|
|last_updated|string|true|none|Time when the movers were last computed. Formatted as a RFC-3339 date-time with nanosecond precision.<br>|
|losers|[[mover](#schemamover)]|true|none|List of top N losers.|
|market_type|[market_type](#schemamarket_type)|true|none|Market type (stocks or crypto).|

#### Enumerated Values

|Property|Value|
|---|---|
|market_type|stocks|
|market_type|crypto|

<h2 id="tocS_name_change">name_change</h2>
<!-- backwards compatibility -->
<a id="schemaname_change"></a>
<a id="schema_name_change"></a>
<a id="tocSname_change"></a>
<a id="tocsname_change"></a>

```json
{
  "id": "5a774c35-edec-4532-a812-a56d0bbb623a",
  "new_cusip": "Y9390M103",
  "new_symbol": "VFS",
  "old_cusip": "G11537100",
  "old_symbol": "BSAQ",
  "process_date": "2023-08-15"
}
```

Name change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|new_cusip|string|true|none|none|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_symbol|string|true|none|none|
|old_cusip|string|true|none|none|
|old_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|old_symbol|string|true|none|none|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|

<h2 id="tocS_news">news</h2>
<!-- backwards compatibility -->
<a id="schemanews"></a>
<a id="schema_news"></a>
<a id="tocSnews"></a>
<a id="tocsnews"></a>

```json
{
  "author": "string",
  "content": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "headline": "string",
  "id": 0,
  "images": [
    {
      "size": "thumb",
      "url": "http://example.com"
    }
  ],
  "source": "string",
  "summary": "string",
  "symbols": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "url": "http://example.com"
}
```

Model representing a news article.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|true|none|Original author of news article.|
|content|string|true|none|Content of the news article (might contain HTML).|
|created_at|string(date-time)|true|none|Date article was created (RFC-3339).|
|headline|string|true|none|Headline or title of the article.|
|id|integer(int64)|true|none|News article ID.|
|images|[[news_image](#schemanews_image)]|true|none|List of images (URLs) related to given article (may be empty).|
|source|string|true|none|Source where the news originated from (e.g. Benzinga).|
|summary|string|true|none|Summary text for the article (may be first sentence of content).|
|symbols|[string]|true|none|List of related or mentioned symbols.|
|updated_at|string(date-time)|true|none|Date article was updated (RFC-3339).|
|url|string \| null(uri)|false|none|URL of article (if applicable).|

<h2 id="tocS_news_image">news_image</h2>
<!-- backwards compatibility -->
<a id="schemanews_image"></a>
<a id="schema_news_image"></a>
<a id="tocSnews_image"></a>
<a id="tocsnews_image"></a>

```json
{
  "size": "thumb",
  "url": "http://example.com"
}
```

A model representing images for a news article. Simply a URL to the image along with a size parameter suggesting the display size of the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|string|true|none|Possible values for size are thumb, small and large.|
|url|string(uri)|true|none|URL to image from news article.|

#### Enumerated Values

|Property|Value|
|---|---|
|size|thumb|
|size|small|
|size|large|

<h2 id="tocS_news_resp">news_resp</h2>
<!-- backwards compatibility -->
<a id="schemanews_resp"></a>
<a id="schema_news_resp"></a>
<a id="tocSnews_resp"></a>
<a id="tocsnews_resp"></a>

```json
{
  "news": [
    {
      "author": "string",
      "content": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "headline": "string",
      "id": 0,
      "images": [
        {
          "size": "thumb",
          "url": "http://example.com"
        }
      ],
      "source": "string",
      "summary": "string",
      "symbols": [
        "string"
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "http://example.com"
    }
  ],
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|news|[[news](#schemanews)]|true|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|

<h2 id="tocS_next_page_token">next_page_token</h2>
<!-- backwards compatibility -->
<a id="schemanext_page_token"></a>
<a id="schema_next_page_token"></a>
<a id="tocSnext_page_token"></a>
<a id="tocsnext_page_token"></a>

```json
"string"
```

Pagination token for the next page.

<h2 id="tocS_option_bar">option_bar</h2>
<!-- backwards compatibility -->
<a id="schemaoption_bar"></a>
<a id="schema_option_bar"></a>
<a id="tocSoption_bar"></a>
<a id="tocsoption_bar"></a>

```json
{
  "c": 0.23,
  "h": 0.28,
  "l": 0.23,
  "n": 26,
  "o": 0.28,
  "t": "2024-01-18T05:00:00Z",
  "v": 224,
  "vw": 0.245045
}
```

OHLC aggregate of all the trades in a given interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|Closing price.|
|h|number(double)|true|none|High price.|
|l|number(double)|true|none|Low price.|
|n|integer(int64)|true|none|Trade count in the bar.|
|o|number(double)|true|none|Opening price.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|v|integer(int64)|true|none|Bar volume.|
|vw|number(double)|true|none|Volume weighted average price.|

<h2 id="tocS_option_bars_resp">option_bars_resp</h2>
<!-- backwards compatibility -->
<a id="schemaoption_bars_resp"></a>
<a id="schema_option_bars_resp"></a>
<a id="tocSoption_bars_resp"></a>
<a id="tocsoption_bars_resp"></a>

```json
{
  "bars": {
    "property1": [
      {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      }
    ],
    "property2": [
      {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      }
    ]
  },
  "currency": "string",
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|object|true|none|none|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|

<h2 id="tocS_option_conditions">option_conditions</h2>
<!-- backwards compatibility -->
<a id="schemaoption_conditions"></a>
<a id="schema_option_conditions"></a>
<a id="tocSoption_conditions"></a>
<a id="tocsoption_conditions"></a>

```json
{
  "a": "SLAN - Single Leg Auction Non ISO",
  "e": "SLFT - Single Leg Floor Trade",
  "g": "MLAT - Multi Leg Auction"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_option_exchanges">option_exchanges</h2>
<!-- backwards compatibility -->
<a id="schemaoption_exchanges"></a>
<a id="schema_option_exchanges"></a>
<a id="tocSoption_exchanges"></a>
<a id="tocsoption_exchanges"></a>

```json
{
  "A": "NYSE American Options",
  "Q": "Nasdaq Options"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_option_feed">option_feed</h2>
<!-- backwards compatibility -->
<a id="schemaoption_feed"></a>
<a id="schema_option_feed"></a>
<a id="tocSoption_feed"></a>
<a id="tocsoption_feed"></a>

```json
"opra"
```

<h2 id="tocS_option_greeks">option_greeks</h2>
<!-- backwards compatibility -->
<a id="schemaoption_greeks"></a>
<a id="schema_option_greeks"></a>
<a id="tocSoption_greeks"></a>
<a id="tocsoption_greeks"></a>

```json
{
  "delta": 0,
  "gamma": 0,
  "rho": 0,
  "theta": 0,
  "vega": 0
}
```

The greeks for the contract calculated using the Black-Scholes model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delta|number(double)|true|none|none|
|gamma|number(double)|true|none|none|
|rho|number(double)|true|none|none|
|theta|number(double)|true|none|none|
|vega|number(double)|true|none|none|

<h2 id="tocS_option_latest_quotes_resp">option_latest_quotes_resp</h2>
<!-- backwards compatibility -->
<a id="schemaoption_latest_quotes_resp"></a>
<a id="schema_option_latest_quotes_resp"></a>
<a id="tocSoption_latest_quotes_resp"></a>
<a id="tocsoption_latest_quotes_resp"></a>

```json
{
  "quotes": {
    "property1": {
      "ap": 0.16,
      "as": 669,
      "ax": "w",
      "bp": 0.15,
      "bs": 164,
      "bx": "W",
      "c": "A",
      "t": "2024-02-28T15:30:28.046330624Z"
    },
    "property2": {
      "ap": 0.16,
      "as": 669,
      "ax": "w",
      "bp": 0.15,
      "bs": 164,
      "bx": "W",
      "c": "A",
      "t": "2024-02-28T15:30:28.046330624Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotes|object|true|none|none|

<h2 id="tocS_option_latest_trades_resp">option_latest_trades_resp</h2>
<!-- backwards compatibility -->
<a id="schemaoption_latest_trades_resp"></a>
<a id="schema_option_latest_trades_resp"></a>
<a id="tocSoption_latest_trades_resp"></a>
<a id="tocsoption_latest_trades_resp"></a>

```json
{
  "trades": {
    "property1": {
      "c": "I",
      "p": 0.37,
      "s": 1,
      "t": "2024-01-18T15:03:44.56339456Z",
      "x": "B"
    },
    "property2": {
      "c": "I",
      "p": 0.37,
      "s": 1,
      "t": "2024-01-18T15:03:44.56339456Z",
      "x": "B"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trades|object|true|none|none|

<h2 id="tocS_option_quote">option_quote</h2>
<!-- backwards compatibility -->
<a id="schemaoption_quote"></a>
<a id="schema_option_quote"></a>
<a id="tocSoption_quote"></a>
<a id="tocsoption_quote"></a>

```json
{
  "ap": 0.16,
  "as": 669,
  "ax": "w",
  "bp": 0.15,
  "bs": 164,
  "bx": "W",
  "c": "A",
  "t": "2024-02-28T15:30:28.046330624Z"
}
```

The best bid and ask information for a given option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ap|number(double)|true|none|Ask price.|
|as|integer(uint32)|true|none|Ask size.|
|ax|string|true|none|Ask exchange.|
|bp|number(double)|true|none|Bid price.|
|bs|integer(uint32)|true|none|Bid size.|
|bx|string|true|none|Bid exchange.|
|c|string|true|none|Quote condition.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|

<h2 id="tocS_option_snapshot">option_snapshot</h2>
<!-- backwards compatibility -->
<a id="schemaoption_snapshot"></a>
<a id="schema_option_snapshot"></a>
<a id="tocSoption_snapshot"></a>
<a id="tocsoption_snapshot"></a>

```json
{
  "dailyBar": {
    "c": 0.23,
    "h": 0.28,
    "l": 0.23,
    "n": 26,
    "o": 0.28,
    "t": "2024-01-18T05:00:00Z",
    "v": 224,
    "vw": 0.245045
  },
  "greeks": {
    "delta": 0,
    "gamma": 0,
    "rho": 0,
    "theta": 0,
    "vega": 0
  },
  "impliedVolatility": 0,
  "latestQuote": {
    "ap": 0.16,
    "as": 669,
    "ax": "w",
    "bp": 0.15,
    "bs": 164,
    "bx": "W",
    "c": "A",
    "t": "2024-02-28T15:30:28.046330624Z"
  },
  "latestTrade": {
    "c": "I",
    "p": 0.37,
    "s": 1,
    "t": "2024-01-18T15:03:44.56339456Z",
    "x": "B"
  },
  "minuteBar": {
    "c": 0.23,
    "h": 0.28,
    "l": 0.23,
    "n": 26,
    "o": 0.28,
    "t": "2024-01-18T05:00:00Z",
    "v": 224,
    "vw": 0.245045
  },
  "prevDailyBar": {
    "c": 0.23,
    "h": 0.28,
    "l": 0.23,
    "n": 26,
    "o": 0.28,
    "t": "2024-01-18T05:00:00Z",
    "v": 224,
    "vw": 0.245045
  }
}
```

A snapshot provides the latest trade and latest quote.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyBar|[option_bar](#schemaoption_bar)|false|none|OHLC aggregate of all the trades in a given interval.|
|greeks|[option_greeks](#schemaoption_greeks)|false|none|The greeks for the contract calculated using the Black-Scholes model.|
|impliedVolatility|number(double)|false|none|Implied volatility calculated using the Black-Scholes model.|
|latestQuote|[option_quote](#schemaoption_quote)|false|none|The best bid and ask information for a given option.<br>|
|latestTrade|[option_trade](#schemaoption_trade)|false|none|An option trade.|
|minuteBar|[option_bar](#schemaoption_bar)|false|none|OHLC aggregate of all the trades in a given interval.|
|prevDailyBar|[option_bar](#schemaoption_bar)|false|none|OHLC aggregate of all the trades in a given interval.|

<h2 id="tocS_option_snapshots_resp">option_snapshots_resp</h2>
<!-- backwards compatibility -->
<a id="schemaoption_snapshots_resp"></a>
<a id="schema_option_snapshots_resp"></a>
<a id="tocSoption_snapshots_resp"></a>
<a id="tocsoption_snapshots_resp"></a>

```json
{
  "next_page_token": "string",
  "snapshots": {
    "property1": {
      "dailyBar": {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      },
      "greeks": {
        "delta": 0,
        "gamma": 0,
        "rho": 0,
        "theta": 0,
        "vega": 0
      },
      "impliedVolatility": 0,
      "latestQuote": {
        "ap": 0.16,
        "as": 669,
        "ax": "w",
        "bp": 0.15,
        "bs": 164,
        "bx": "W",
        "c": "A",
        "t": "2024-02-28T15:30:28.046330624Z"
      },
      "latestTrade": {
        "c": "I",
        "p": 0.37,
        "s": 1,
        "t": "2024-01-18T15:03:44.56339456Z",
        "x": "B"
      },
      "minuteBar": {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      },
      "prevDailyBar": {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      }
    },
    "property2": {
      "dailyBar": {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      },
      "greeks": {
        "delta": 0,
        "gamma": 0,
        "rho": 0,
        "theta": 0,
        "vega": 0
      },
      "impliedVolatility": 0,
      "latestQuote": {
        "ap": 0.16,
        "as": 669,
        "ax": "w",
        "bp": 0.15,
        "bs": 164,
        "bx": "W",
        "c": "A",
        "t": "2024-02-28T15:30:28.046330624Z"
      },
      "latestTrade": {
        "c": "I",
        "p": 0.37,
        "s": 1,
        "t": "2024-01-18T15:03:44.56339456Z",
        "x": "B"
      },
      "minuteBar": {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      },
      "prevDailyBar": {
        "c": 0.23,
        "h": 0.28,
        "l": 0.23,
        "n": 26,
        "o": 0.28,
        "t": "2024-01-18T05:00:00Z",
        "v": 224,
        "vw": 0.245045
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|snapshots|object|true|none|none|

<h2 id="tocS_option_trade">option_trade</h2>
<!-- backwards compatibility -->
<a id="schemaoption_trade"></a>
<a id="schema_option_trade"></a>
<a id="tocSoption_trade"></a>
<a id="tocsoption_trade"></a>

```json
{
  "c": "I",
  "p": 0.37,
  "s": 1,
  "t": "2024-01-18T15:03:44.56339456Z",
  "x": "B"
}
```

An option trade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|string|true|none|Trade condition.|
|p|number(double)|true|none|Trade price.|
|s|integer(uint32)|true|none|Trade size.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|x|string|true|none|none|

<h2 id="tocS_option_trades_resp">option_trades_resp</h2>
<!-- backwards compatibility -->
<a id="schemaoption_trades_resp"></a>
<a id="schema_option_trades_resp"></a>
<a id="tocSoption_trades_resp"></a>
<a id="tocsoption_trades_resp"></a>

```json
{
  "currency": "string",
  "next_page_token": "string",
  "trades": {
    "property1": [
      {
        "c": "I",
        "p": 0.37,
        "s": 1,
        "t": "2024-01-18T15:03:44.56339456Z",
        "x": "B"
      }
    ],
    "property2": [
      {
        "c": "I",
        "p": 0.37,
        "s": 1,
        "t": "2024-01-18T15:03:44.56339456Z",
        "x": "B"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|trades|object|true|none|none|

<h2 id="tocS_partial_call">partial_call</h2>
<!-- backwards compatibility -->
<a id="schemapartial_call"></a>
<a id="schema_partial_call"></a>
<a id="tocSpartial_call"></a>
<a id="tocspartial_call"></a>

```json
{
  "currency": "string",
  "cusip": "string",
  "dividend_rate": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isin": "string",
  "lottery_date": "1970-01-01",
  "lottery_type": "original",
  "payable_date": "1970-01-01",
  "price": 0,
  "process_date": "1970-01-01",
  "record_date": "1970-01-01",
  "results_publication_date": "1970-01-01",
  "symbol": "string"
}
```

Partial call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|false|none|none|
|dividend_rate|number(double)|false|none|none|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|lottery_date|string(date)|false|none|none|
|lottery_type|string|false|none|The type of lottery for the partial call.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|price|number(double)|false|none|none|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|results_publication_date|string(date)|false|none|none|
|symbol|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|lottery_type|original|
|lottery_type|supplemental|

<h2 id="tocS_payable_date">payable_date</h2>
<!-- backwards compatibility -->
<a id="schemapayable_date"></a>
<a id="schema_payable_date"></a>
<a id="tocSpayable_date"></a>
<a id="tocspayable_date"></a>

```json
"1970-01-01"
```

The date when the corporate action benefit is paid or distributed.

<h2 id="tocS_process_date">process_date</h2>
<!-- backwards compatibility -->
<a id="schemaprocess_date"></a>
<a id="schema_process_date"></a>
<a id="tocSprocess_date"></a>
<a id="tocsprocess_date"></a>

```json
"1970-01-01"
```

The date when the corporate action is processed by Alpaca.

<h2 id="tocS_record_date">record_date</h2>
<!-- backwards compatibility -->
<a id="schemarecord_date"></a>
<a id="schema_record_date"></a>
<a id="tocSrecord_date"></a>
<a id="tocsrecord_date"></a>

```json
"1970-01-01"
```

The date shareholders must own shares to receive the benefit.

<h2 id="tocS_redemption">redemption</h2>
<!-- backwards compatibility -->
<a id="schemaredemption"></a>
<a id="schema_redemption"></a>
<a id="tocSredemption"></a>
<a id="tocsredemption"></a>

```json
{
  "cusip": "687305102",
  "id": "395da031-0e57-4918-a6fb-64a7c713aca4",
  "payable_date": "2023-06-13",
  "process_date": "2023-06-13",
  "rate": 0.141134,
  "symbol": "ORPHY"
}
```

Redemption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|rate|number(double)|true|none|none|
|symbol|string|true|none|none|

<h2 id="tocS_region">region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"us"
```

The region to filter corporate actions by.

- `us`: only US corporate actions
- `non_us`: only non-US corporate actions
- `all`: both US and non-US corporate actions

<h2 id="tocS_reorganization">reorganization</h2>
<!-- backwards compatibility -->
<a id="schemareorganization"></a>
<a id="schema_reorganization"></a>
<a id="tocSreorganization"></a>
<a id="tocsreorganization"></a>

```json
{
  "cash_rate": 0,
  "currency": "string",
  "cusip": "string",
  "effective_date": "1970-01-01",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "isin": "string",
  "payable_date": "1970-01-01",
  "process_date": "1970-01-01",
  "stock_movements": [
    {
      "cusip": "string",
      "isin": "string",
      "new_rate": 0,
      "source_rate": 0,
      "symbol": "string"
    }
  ],
  "symbol": "string"
}
```

Reorganization (cash and/or multiple stock allocations).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cash_rate|number(double)|false|none|none|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|string|false|none|none|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|stock_movements|[[reorganization_stock_movement](#schemareorganization_stock_movement)]|false|none|none|
|symbol|string|true|none|none|

<h2 id="tocS_reorganization_stock_movement">reorganization_stock_movement</h2>
<!-- backwards compatibility -->
<a id="schemareorganization_stock_movement"></a>
<a id="schema_reorganization_stock_movement"></a>
<a id="tocSreorganization_stock_movement"></a>
<a id="tocsreorganization_stock_movement"></a>

```json
{
  "cusip": "string",
  "isin": "string",
  "new_rate": 0,
  "source_rate": 0,
  "symbol": "string"
}
```

A stock allocation leg in a reorganization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cusip|string|true|none|none|
|isin|string|false|none|none|
|new_rate|number(double)|true|none|none|
|source_rate|number(double)|true|none|none|
|symbol|string|true|none|none|

<h2 id="tocS_reverse_split">reverse_split</h2>
<!-- backwards compatibility -->
<a id="schemareverse_split"></a>
<a id="schema_reverse_split"></a>
<a id="tocSreverse_split"></a>
<a id="tocsreverse_split"></a>

```json
{
  "ex_date": "2023-08-24",
  "id": "913de862-c02c-46dc-a89c-fc8779a50d30",
  "new_cusip": "60879E200",
  "new_rate": 1,
  "old_cusip": "60879E101",
  "old_rate": 50,
  "process_date": "2023-08-24",
  "record_date": "2023-08-24",
  "symbol": "MNTS"
}
```

Reverse split.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|new_cusip|string|true|none|none|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|number(double)|true|none|none|
|new_symbol|string|false|none|The post-split ticker. Empty when the reverse split does not change the<br>ticker (the most common case); only populated when the issuer assigns a<br>different symbol after the split.<br>|
|old_cusip|string|true|none|none|
|old_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|old_rate|number(double)|true|none|none|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|symbol|string|true|none|none|

<h2 id="tocS_rights_distribution">rights_distribution</h2>
<!-- backwards compatibility -->
<a id="schemarights_distribution"></a>
<a id="schema_rights_distribution"></a>
<a id="tocSrights_distribution"></a>
<a id="tocsrights_distribution"></a>

```json
{
  "ex_date": "2024-04-17",
  "expiration_date": "2024-05-14",
  "id": "69794cfd-0adc-4e11-9211-9210a9cf8932",
  "new_cusip": "454089111",
  "new_symbol": "IFN.RTWI",
  "payable_date": "2024-04-19",
  "process_date": "2024-04-19",
  "rate": 1,
  "record_date": "2024-04-18",
  "source_cusip": "454089103",
  "source_symbol": "IFN"
}
```

Rights distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|expiration_date|[expiration_date](#schemaexpiration_date)|false|none|none|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|new_cusip|string|true|none|none|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_symbol|string|true|none|none|
|payable_date|[payable_date](#schemapayable_date)|true|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|rate|number(double)|true|none|none|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|source_cusip|string|true|none|none|
|source_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|source_symbol|string|true|none|none|

<h2 id="tocS_sort">sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
"asc"
```

Sort data in ascending or descending order.

<h2 id="tocS_spin_off">spin_off</h2>
<!-- backwards compatibility -->
<a id="schemaspin_off"></a>
<a id="schema_spin_off"></a>
<a id="tocSspin_off"></a>
<a id="tocsspin_off"></a>

```json
{
  "ex_date": "2023-08-15",
  "id": "82e602f6-35bc-4651-a5dd-f6d88ff37c55",
  "new_cusip": "85237B101",
  "new_rate": 1,
  "new_symbol": "SRM",
  "process_date": "2023-08-15",
  "record_date": "2023-08-15",
  "source_cusip": "48208F105",
  "source_rate": 19.35,
  "source_symbol": "JUPW"
}
```

Spin-off.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|due_bill_redemption_date|[due_bill_redemption_date](#schemadue_bill_redemption_date)|false|none|The date when due bill obligations are redeemed.|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|new_cusip|string|true|none|none|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|number(double)|true|none|none|
|new_symbol|string|true|none|none|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|source_cusip|string|true|none|none|
|source_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|source_rate|number(double)|true|none|none|
|source_symbol|string|true|none|none|

<h2 id="tocS_stock_and_cash_merger">stock_and_cash_merger</h2>
<!-- backwards compatibility -->
<a id="schemastock_and_cash_merger"></a>
<a id="schema_stock_and_cash_merger"></a>
<a id="tocSstock_and_cash_merger"></a>
<a id="tocsstock_and_cash_merger"></a>

```json
{
  "acquiree_cusip": "561409103",
  "acquiree_rate": 1,
  "acquiree_symbol": "MLVF",
  "acquirer_cusip": "31931U102",
  "acquirer_rate": 0.7733,
  "acquirer_symbol": "FRBA",
  "cash_rate": 7.8,
  "effective_date": "2023-07-18",
  "id": "e5248356-2c06-42cf-aeb9-1595bd616cdb",
  "payable_date": "2023-07-18",
  "process_date": "2023-07-18"
}
```

Stock and cash merger.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiree_cusip|string|true|none|none|
|acquiree_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquiree_rate|number(double)|true|none|none|
|acquiree_symbol|string|true|none|none|
|acquirer_cusip|string|true|none|none|
|acquirer_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquirer_rate|number(double)|true|none|none|
|acquirer_symbol|string|true|none|none|
|cash_rate|number(double)|true|none|none|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|

<h2 id="tocS_stock_auction">stock_auction</h2>
<!-- backwards compatibility -->
<a id="schemastock_auction"></a>
<a id="schema_stock_auction"></a>
<a id="tocSstock_auction"></a>
<a id="tocsstock_auction"></a>

```json
{
  "c": "O",
  "p": 135,
  "t": "2022-10-13T13:30:01.688322951Z",
  "x": "Q"
}
```

An auction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|string|true|none|The condition flag indicating that this is an auction. See `v2/stocks/meta/conditions/trade` for more details.<br>|
|p|number(double)|true|none|Auction price.|
|s|integer(int64)|false|none|Auction trade size.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|x|string|true|none|Exchange code. See `v2/stocks/meta/exchanges` for more details.|

<h2 id="tocS_stock_auction_feed">stock_auction_feed</h2>
<!-- backwards compatibility -->
<a id="schemastock_auction_feed"></a>
<a id="schema_stock_auction_feed"></a>
<a id="tocSstock_auction_feed"></a>
<a id="tocsstock_auction_feed"></a>

```json
"sip"
```

<h2 id="tocS_stock_auctions_resp">stock_auctions_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_auctions_resp"></a>
<a id="schema_stock_auctions_resp"></a>
<a id="tocSstock_auctions_resp"></a>
<a id="tocsstock_auctions_resp"></a>

```json
{
  "auctions": {
    "property1": [
      {
        "c": [
          {
            "c": "O",
            "p": 135,
            "t": "2022-10-13T13:30:01.688322951Z",
            "x": "Q"
          }
        ],
        "d": "1970-01-01",
        "o": [
          {
            "c": "O",
            "p": 135,
            "t": "2022-10-13T13:30:01.688322951Z",
            "x": "Q"
          }
        ]
      }
    ],
    "property2": [
      {
        "c": [
          {
            "c": "O",
            "p": 135,
            "t": "2022-10-13T13:30:01.688322951Z",
            "x": "Q"
          }
        ],
        "d": "1970-01-01",
        "o": [
          {
            "c": "O",
            "p": 135,
            "t": "2022-10-13T13:30:01.688322951Z",
            "x": "Q"
          }
        ]
      }
    ]
  },
  "currency": "string",
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auctions|object|true|none|none|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|

<h2 id="tocS_stock_auctions_resp_single">stock_auctions_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_auctions_resp_single"></a>
<a id="schema_stock_auctions_resp_single"></a>
<a id="tocSstock_auctions_resp_single"></a>
<a id="tocsstock_auctions_resp_single"></a>

```json
{
  "auctions": [
    {
      "c": [
        {
          "c": "O",
          "p": 135,
          "t": "2022-10-13T13:30:01.688322951Z",
          "x": "Q"
        }
      ],
      "d": "1970-01-01",
      "o": [
        {
          "c": "O",
          "p": 135,
          "t": "2022-10-13T13:30:01.688322951Z",
          "x": "Q"
        }
      ]
    }
  ],
  "currency": "string",
  "next_page_token": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auctions|[[stock_daily_auctions](#schemastock_daily_auctions)]|true|none|none|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|symbol|string|true|none|none|

<h2 id="tocS_stock_bar">stock_bar</h2>
<!-- backwards compatibility -->
<a id="schemastock_bar"></a>
<a id="schema_stock_bar"></a>
<a id="tocSstock_bar"></a>
<a id="tocsstock_bar"></a>

```json
{
  "c": 178.08,
  "h": 178.34,
  "l": 177.76,
  "n": 1727,
  "o": 178.26,
  "t": "2022-01-03T09:00:00Z",
  "v": 60937,
  "vw": 177.954244
}
```

OHLC aggregate of all the trades in a given interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|number(double)|true|none|Closing price.|
|h|number(double)|true|none|High price.|
|l|number(double)|true|none|Low price.|
|n|integer(int64)|true|none|Trade count in the bar.|
|o|number(double)|true|none|Opening price.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|v|integer(int64)|true|none|Bar volume.|
|vw|number(double)|true|none|Volume weighted average price.|

<h2 id="tocS_stock_bars_resp">stock_bars_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_bars_resp"></a>
<a id="schema_stock_bars_resp"></a>
<a id="tocSstock_bars_resp"></a>
<a id="tocsstock_bars_resp"></a>

```json
{
  "bars": {
    "property1": [
      {
        "c": 178.08,
        "h": 178.34,
        "l": 177.76,
        "n": 1727,
        "o": 178.26,
        "t": "2022-01-03T09:00:00Z",
        "v": 60937,
        "vw": 177.954244
      }
    ],
    "property2": [
      {
        "c": 178.08,
        "h": 178.34,
        "l": 177.76,
        "n": 1727,
        "o": 178.26,
        "t": "2022-01-03T09:00:00Z",
        "v": 60937,
        "vw": 177.954244
      }
    ]
  },
  "currency": "string",
  "next_page_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|object|true|none|none|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|

<h2 id="tocS_stock_bars_resp_single">stock_bars_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_bars_resp_single"></a>
<a id="schema_stock_bars_resp_single"></a>
<a id="tocSstock_bars_resp_single"></a>
<a id="tocsstock_bars_resp_single"></a>

```json
{
  "bars": [
    {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    }
  ],
  "currency": "string",
  "next_page_token": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|[[stock_bar](#schemastock_bar)]|true|none|none|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|symbol|string|true|none|none|

<h2 id="tocS_stock_conditions">stock_conditions</h2>
<!-- backwards compatibility -->
<a id="schemastock_conditions"></a>
<a id="schema_stock_conditions"></a>
<a id="tocSstock_conditions"></a>
<a id="tocsstock_conditions"></a>

```json
{
  "@": "Regular Sale",
  "A": "Acquisition",
  "B": "Bunched Trade"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_stock_daily_auctions">stock_daily_auctions</h2>
<!-- backwards compatibility -->
<a id="schemastock_daily_auctions"></a>
<a id="schema_stock_daily_auctions"></a>
<a id="tocSstock_daily_auctions"></a>
<a id="tocsstock_daily_auctions"></a>

```json
{
  "c": [
    {
      "c": "O",
      "p": 135,
      "t": "2022-10-13T13:30:01.688322951Z",
      "x": "Q"
    }
  ],
  "d": "1970-01-01",
  "o": [
    {
      "c": "O",
      "p": 135,
      "t": "2022-10-13T13:30:01.688322951Z",
      "x": "Q"
    }
  ]
}
```

Opening and closing auction prices for a given day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|[[stock_auction](#schemastock_auction)]|true|none|Closing auctions. Every price / exchange / condition triplet is only shown once, with its earliest timestamp.|
|d|[date](#schemadate)|true|none|Date in RFC-3339.|
|o|[[stock_auction](#schemastock_auction)]|true|none|Opening auctions.|

<h2 id="tocS_stock_dividend">stock_dividend</h2>
<!-- backwards compatibility -->
<a id="schemastock_dividend"></a>
<a id="schema_stock_dividend"></a>
<a id="tocSstock_dividend"></a>
<a id="tocsstock_dividend"></a>

```json
{
  "cusip": "605015106",
  "ex_date": "2023-05-19",
  "id": "3ae94c30-2d37-473a-bf29-5f7b4ab6d3ca",
  "payable_date": "2023-05-05",
  "process_date": "2023-05-19",
  "rate": 0.05,
  "record_date": "2023-05-22",
  "symbol": "MSBC"
}
```

Stock dividend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|ex_date|[ex_date](#schemaex_date)|true|none|The ex-date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|rate|number(double)|true|none|none|
|record_date|[record_date](#schemarecord_date)|false|none|The date shareholders must own shares to receive the benefit.|
|symbol|string|true|none|none|

<h2 id="tocS_stock_exchanges">stock_exchanges</h2>
<!-- backwards compatibility -->
<a id="schemastock_exchanges"></a>
<a id="schema_stock_exchanges"></a>
<a id="tocSstock_exchanges"></a>
<a id="tocsstock_exchanges"></a>

```json
{
  "N": "New York Stock Exchange",
  "V": "IEX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_stock_historical_feed">stock_historical_feed</h2>
<!-- backwards compatibility -->
<a id="schemastock_historical_feed"></a>
<a id="schema_stock_historical_feed"></a>
<a id="tocSstock_historical_feed"></a>
<a id="tocsstock_historical_feed"></a>

```json
"sip"
```

<h2 id="tocS_stock_latest_bars_resp">stock_latest_bars_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_bars_resp"></a>
<a id="schema_stock_latest_bars_resp"></a>
<a id="tocSstock_latest_bars_resp"></a>
<a id="tocsstock_latest_bars_resp"></a>

```json
{
  "bars": {
    "property1": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    },
    "property2": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    }
  },
  "currency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bars|object|true|none|none|
|currency|string|false|none|none|

<h2 id="tocS_stock_latest_bars_resp_single">stock_latest_bars_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_bars_resp_single"></a>
<a id="schema_stock_latest_bars_resp_single"></a>
<a id="tocSstock_latest_bars_resp_single"></a>
<a id="tocsstock_latest_bars_resp_single"></a>

```json
{
  "bar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  },
  "currency": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bar|[stock_bar](#schemastock_bar)|true|none|OHLC aggregate of all the trades in a given interval.<br>|
|currency|string|false|none|none|
|symbol|string|true|none|none|

<h2 id="tocS_stock_latest_feed">stock_latest_feed</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_feed"></a>
<a id="schema_stock_latest_feed"></a>
<a id="tocSstock_latest_feed"></a>
<a id="tocsstock_latest_feed"></a>

```json
"delayed_sip"
```

<h2 id="tocS_stock_latest_quotes_resp">stock_latest_quotes_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_quotes_resp"></a>
<a id="schema_stock_latest_quotes_resp"></a>
<a id="tocSstock_latest_quotes_resp"></a>
<a id="tocsstock_latest_quotes_resp"></a>

```json
{
  "currency": "string",
  "quotes": {
    "property1": {
      "ap": 387.7,
      "as": 1,
      "ax": "C",
      "bp": 387.67,
      "bs": 1,
      "bx": "N",
      "c": [
        "R"
      ],
      "t": "2021-02-06T13:35:08.946977536Z",
      "z": "C"
    },
    "property2": {
      "ap": 387.7,
      "as": 1,
      "ax": "C",
      "bp": 387.67,
      "bs": 1,
      "bx": "N",
      "c": [
        "R"
      ],
      "t": "2021-02-06T13:35:08.946977536Z",
      "z": "C"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|quotes|object|true|none|none|

<h2 id="tocS_stock_latest_quotes_resp_single">stock_latest_quotes_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_quotes_resp_single"></a>
<a id="schema_stock_latest_quotes_resp_single"></a>
<a id="tocSstock_latest_quotes_resp_single"></a>
<a id="tocsstock_latest_quotes_resp_single"></a>

```json
{
  "currency": "string",
  "quote": {
    "ap": 387.7,
    "as": 1,
    "ax": "C",
    "bp": 387.67,
    "bs": 1,
    "bx": "N",
    "c": [
      "R"
    ],
    "t": "2021-02-06T13:35:08.946977536Z",
    "z": "C"
  },
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|quote|[stock_quote](#schemastock_quote)|true|none|The best bid and ask information for a given security.|
|symbol|string|true|none|none|

<h2 id="tocS_stock_latest_trades_resp">stock_latest_trades_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_trades_resp"></a>
<a id="schema_stock_latest_trades_resp"></a>
<a id="tocSstock_latest_trades_resp"></a>
<a id="tocsstock_latest_trades_resp"></a>

```json
{
  "currency": "string",
  "trades": {
    "property1": {
      "c": [
        "@",
        "T"
      ],
      "i": 1,
      "p": 178.26,
      "s": 246,
      "t": "2022-01-03T09:00:00.086175744Z",
      "x": "P",
      "z": "C"
    },
    "property2": {
      "c": [
        "@",
        "T"
      ],
      "i": 1,
      "p": 178.26,
      "s": 246,
      "t": "2022-01-03T09:00:00.086175744Z",
      "x": "P",
      "z": "C"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|trades|object|true|none|none|

<h2 id="tocS_stock_latest_trades_resp_single">stock_latest_trades_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_latest_trades_resp_single"></a>
<a id="schema_stock_latest_trades_resp_single"></a>
<a id="tocSstock_latest_trades_resp_single"></a>
<a id="tocsstock_latest_trades_resp_single"></a>

```json
{
  "currency": "string",
  "symbol": "string",
  "trade": {
    "c": [
      "@",
      "T"
    ],
    "i": 1,
    "p": 178.26,
    "s": 246,
    "t": "2022-01-03T09:00:00.086175744Z",
    "x": "P",
    "z": "C"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|symbol|string|true|none|none|
|trade|[stock_trade](#schemastock_trade)|true|none|A stock trade.|

<h2 id="tocS_stock_merger">stock_merger</h2>
<!-- backwards compatibility -->
<a id="schemastock_merger"></a>
<a id="schema_stock_merger"></a>
<a id="tocSstock_merger"></a>
<a id="tocsstock_merger"></a>

```json
{
  "acquiree_cusip": "53223X107",
  "acquiree_rate": 1,
  "acquiree_symbol": "LSI",
  "acquirer_cusip": "30225T102",
  "acquirer_rate": 0.895,
  "acquirer_symbol": "EXR",
  "effective_date": "2023-07-20",
  "id": "728f8cb2-a00e-4bc7-ad14-d15fe82bbcff",
  "payable_date": "2023-07-20",
  "process_date": "2023-07-20"
}
```

Stock merger.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiree_cusip|string|true|none|none|
|acquiree_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquiree_rate|number(double)|true|none|none|
|acquiree_symbol|string|true|none|none|
|acquirer_cusip|string|true|none|none|
|acquirer_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|acquirer_rate|number(double)|true|none|none|
|acquirer_symbol|string|true|none|none|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|

<h2 id="tocS_stock_quote">stock_quote</h2>
<!-- backwards compatibility -->
<a id="schemastock_quote"></a>
<a id="schema_stock_quote"></a>
<a id="tocSstock_quote"></a>
<a id="tocsstock_quote"></a>

```json
{
  "ap": 387.7,
  "as": 1,
  "ax": "C",
  "bp": 387.67,
  "bs": 1,
  "bx": "N",
  "c": [
    "R"
  ],
  "t": "2021-02-06T13:35:08.946977536Z",
  "z": "C"
}
```

The best bid and ask information for a given security.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ap|number(double)|true|none|Ask price. 0 means the security has no active ask.|
|as|integer(uint32)|true|none|Ask size in shares (round lots prior to November 3, 2025).|
|ax|string|true|none|Ask exchange. See `v2/stocks/meta/exchanges` for more details.|
|bp|number(double)|true|none|Bid price. 0 means the security has no active bid.|
|bs|integer(uint32)|true|none|Bid size in shares (round lots prior to November 3, 2025).|
|bx|string|true|none|Bid exchange. See `v2/stocks/meta/exchanges` for more details.|
|c|[string]|true|none|Condition flags. See `v2/stocks/meta/conditions/quote` for more details. If the array contains one flag, it applies to both the bid and ask. If the array contains two flags, the first one applies to the bid and the second one to the ask.<br>|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|z|[stock_tape](#schemastock_tape)|true|none|- A: New York Stock Exchange<br>- B: NYSE Arca, Bats, IEX and other regional exchanges<br>- C: NASDAQ<br>- N: Overnight<br>- O: OTC<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|z|A|
|z|B|
|z|C|
|z|N|
|z|O|

<h2 id="tocS_stock_quotes_resp">stock_quotes_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_quotes_resp"></a>
<a id="schema_stock_quotes_resp"></a>
<a id="tocSstock_quotes_resp"></a>
<a id="tocsstock_quotes_resp"></a>

```json
{
  "currency": "string",
  "next_page_token": "string",
  "quotes": {
    "property1": [
      {
        "ap": 387.7,
        "as": 1,
        "ax": "C",
        "bp": 387.67,
        "bs": 1,
        "bx": "N",
        "c": [
          "R"
        ],
        "t": "2021-02-06T13:35:08.946977536Z",
        "z": "C"
      }
    ],
    "property2": [
      {
        "ap": 387.7,
        "as": 1,
        "ax": "C",
        "bp": 387.67,
        "bs": 1,
        "bx": "N",
        "c": [
          "R"
        ],
        "t": "2021-02-06T13:35:08.946977536Z",
        "z": "C"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|quotes|object|true|none|none|

<h2 id="tocS_stock_quotes_resp_single">stock_quotes_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_quotes_resp_single"></a>
<a id="schema_stock_quotes_resp_single"></a>
<a id="tocSstock_quotes_resp_single"></a>
<a id="tocsstock_quotes_resp_single"></a>

```json
{
  "currency": "string",
  "next_page_token": "string",
  "quotes": [
    {
      "ap": 387.7,
      "as": 1,
      "ax": "C",
      "bp": 387.67,
      "bs": 1,
      "bx": "N",
      "c": [
        "R"
      ],
      "t": "2021-02-06T13:35:08.946977536Z",
      "z": "C"
    }
  ],
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|quotes|[[stock_quote](#schemastock_quote)]|true|none|none|
|symbol|string|true|none|none|

<h2 id="tocS_stock_snapshot">stock_snapshot</h2>
<!-- backwards compatibility -->
<a id="schemastock_snapshot"></a>
<a id="schema_stock_snapshot"></a>
<a id="tocSstock_snapshot"></a>
<a id="tocsstock_snapshot"></a>

```json
{
  "dailyBar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  },
  "latestQuote": {
    "ap": 387.7,
    "as": 1,
    "ax": "C",
    "bp": 387.67,
    "bs": 1,
    "bx": "N",
    "c": [
      "R"
    ],
    "t": "2021-02-06T13:35:08.946977536Z",
    "z": "C"
  },
  "latestTrade": {
    "c": [
      "@",
      "T"
    ],
    "i": 1,
    "p": 178.26,
    "s": 246,
    "t": "2022-01-03T09:00:00.086175744Z",
    "x": "P",
    "z": "C"
  },
  "minuteBar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  },
  "prevDailyBar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  }
}
```

A snapshot provides the latest trade, latest quote, latest minute bar, current daily bar and previous daily bar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyBar|[stock_bar](#schemastock_bar)|false|none|OHLC aggregate of all the trades in a given interval.<br>|
|latestQuote|[stock_quote](#schemastock_quote)|false|none|The best bid and ask information for a given security.|
|latestTrade|[stock_trade](#schemastock_trade)|false|none|A stock trade.|
|minuteBar|[stock_bar](#schemastock_bar)|false|none|OHLC aggregate of all the trades in a given interval.<br>|
|prevDailyBar|[stock_bar](#schemastock_bar)|false|none|OHLC aggregate of all the trades in a given interval.<br>|

<h2 id="tocS_stock_snapshots_resp">stock_snapshots_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_snapshots_resp"></a>
<a id="schema_stock_snapshots_resp"></a>
<a id="tocSstock_snapshots_resp"></a>
<a id="tocsstock_snapshots_resp"></a>

```json
{
  "property1": {
    "dailyBar": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    },
    "latestQuote": {
      "ap": 387.7,
      "as": 1,
      "ax": "C",
      "bp": 387.67,
      "bs": 1,
      "bx": "N",
      "c": [
        "R"
      ],
      "t": "2021-02-06T13:35:08.946977536Z",
      "z": "C"
    },
    "latestTrade": {
      "c": [
        "@",
        "T"
      ],
      "i": 1,
      "p": 178.26,
      "s": 246,
      "t": "2022-01-03T09:00:00.086175744Z",
      "x": "P",
      "z": "C"
    },
    "minuteBar": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    },
    "prevDailyBar": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    }
  },
  "property2": {
    "dailyBar": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    },
    "latestQuote": {
      "ap": 387.7,
      "as": 1,
      "ax": "C",
      "bp": 387.67,
      "bs": 1,
      "bx": "N",
      "c": [
        "R"
      ],
      "t": "2021-02-06T13:35:08.946977536Z",
      "z": "C"
    },
    "latestTrade": {
      "c": [
        "@",
        "T"
      ],
      "i": 1,
      "p": 178.26,
      "s": 246,
      "t": "2022-01-03T09:00:00.086175744Z",
      "x": "P",
      "z": "C"
    },
    "minuteBar": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    },
    "prevDailyBar": {
      "c": 178.08,
      "h": 178.34,
      "l": 177.76,
      "n": 1727,
      "o": 178.26,
      "t": "2022-01-03T09:00:00Z",
      "v": 60937,
      "vw": 177.954244
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[stock_snapshot](#schemastock_snapshot)|false|none|A snapshot provides the latest trade, latest quote, latest minute bar, current daily bar and previous daily bar.<br>|

<h2 id="tocS_stock_snapshots_resp_single">stock_snapshots_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_snapshots_resp_single"></a>
<a id="schema_stock_snapshots_resp_single"></a>
<a id="tocSstock_snapshots_resp_single"></a>
<a id="tocsstock_snapshots_resp_single"></a>

```json
{
  "currency": "string",
  "symbol": "string",
  "dailyBar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  },
  "latestQuote": {
    "ap": 387.7,
    "as": 1,
    "ax": "C",
    "bp": 387.67,
    "bs": 1,
    "bx": "N",
    "c": [
      "R"
    ],
    "t": "2021-02-06T13:35:08.946977536Z",
    "z": "C"
  },
  "latestTrade": {
    "c": [
      "@",
      "T"
    ],
    "i": 1,
    "p": 178.26,
    "s": 246,
    "t": "2022-01-03T09:00:00.086175744Z",
    "x": "P",
    "z": "C"
  },
  "minuteBar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  },
  "prevDailyBar": {
    "c": 178.08,
    "h": 178.34,
    "l": 177.76,
    "n": 1727,
    "o": 178.26,
    "t": "2022-01-03T09:00:00Z",
    "v": 60937,
    "vw": 177.954244
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|symbol|string|false|none|none|
|dailyBar|[stock_bar](#schemastock_bar)|false|none|OHLC aggregate of all the trades in a given interval.<br>|
|latestQuote|[stock_quote](#schemastock_quote)|false|none|The best bid and ask information for a given security.|
|latestTrade|[stock_trade](#schemastock_trade)|false|none|A stock trade.|
|minuteBar|[stock_bar](#schemastock_bar)|false|none|OHLC aggregate of all the trades in a given interval.<br>|
|prevDailyBar|[stock_bar](#schemastock_bar)|false|none|OHLC aggregate of all the trades in a given interval.<br>|

<h2 id="tocS_stock_tape">stock_tape</h2>
<!-- backwards compatibility -->
<a id="schemastock_tape"></a>
<a id="schema_stock_tape"></a>
<a id="tocSstock_tape"></a>
<a id="tocsstock_tape"></a>

```json
"A"
```

- A: New York Stock Exchange
- B: NYSE Arca, Bats, IEX and other regional exchanges
- C: NASDAQ
- N: Overnight
- O: OTC

<h2 id="tocS_stock_trade">stock_trade</h2>
<!-- backwards compatibility -->
<a id="schemastock_trade"></a>
<a id="schema_stock_trade"></a>
<a id="tocSstock_trade"></a>
<a id="tocsstock_trade"></a>

```json
{
  "c": [
    "@",
    "T"
  ],
  "i": 1,
  "p": 178.26,
  "s": 246,
  "t": "2022-01-03T09:00:00.086175744Z",
  "x": "P",
  "z": "C"
}
```

A stock trade.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|c|[string]|true|none|Condition flags. See `v2/stocks/meta/conditions/trade` for more details.|
|i|integer(uint64)|true|none|Trade ID sent by the exchange.|
|p|number(double)|true|none|Trade price.|
|s|integer(uint32)|true|none|Trade size.|
|t|[timestamp](#schematimestamp)|true|none|Timestamp in RFC-3339 format with nanosecond precision.|
|u|string|false|none|Update to the trade. This field is optional, if it's missing, the trade is valid. Otherwise, it can have these values:<br> - canceled: indicates that the trade has been canceled<br> - incorrect: indicates that the trade has been corrected and the given trade is no longer valid<br> - corrected: indicates that this trade is the correction of a previous (incorrect) trade<br>|
|x|string|true|none|Exchange code. See `v2/stocks/meta/exchanges` for more details.|
|z|[stock_tape](#schemastock_tape)|true|none|- A: New York Stock Exchange<br>- B: NYSE Arca, Bats, IEX and other regional exchanges<br>- C: NASDAQ<br>- N: Overnight<br>- O: OTC<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|z|A|
|z|B|
|z|C|
|z|N|
|z|O|

<h2 id="tocS_stock_trades_resp">stock_trades_resp</h2>
<!-- backwards compatibility -->
<a id="schemastock_trades_resp"></a>
<a id="schema_stock_trades_resp"></a>
<a id="tocSstock_trades_resp"></a>
<a id="tocsstock_trades_resp"></a>

```json
{
  "currency": "string",
  "next_page_token": "string",
  "trades": {
    "property1": [
      {
        "c": [
          "@",
          "T"
        ],
        "i": 1,
        "p": 178.26,
        "s": 246,
        "t": "2022-01-03T09:00:00.086175744Z",
        "x": "P",
        "z": "C"
      }
    ],
    "property2": [
      {
        "c": [
          "@",
          "T"
        ],
        "i": 1,
        "p": 178.26,
        "s": 246,
        "t": "2022-01-03T09:00:00.086175744Z",
        "x": "P",
        "z": "C"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|trades|object|true|none|none|

<h2 id="tocS_stock_trades_resp_single">stock_trades_resp_single</h2>
<!-- backwards compatibility -->
<a id="schemastock_trades_resp_single"></a>
<a id="schema_stock_trades_resp_single"></a>
<a id="tocSstock_trades_resp_single"></a>
<a id="tocsstock_trades_resp_single"></a>

```json
{
  "currency": "string",
  "next_page_token": "string",
  "symbol": "string",
  "trades": [
    {
      "c": [
        "@",
        "T"
      ],
      "i": 1,
      "p": 178.26,
      "s": 246,
      "t": "2022-01-03T09:00:00.086175744Z",
      "x": "P",
      "z": "C"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|next_page_token|[next_page_token](#schemanext_page_token)|true|none|Pagination token for the next page.|
|symbol|string|true|none|none|
|trades|[[stock_trade](#schemastock_trade)]|true|none|none|

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

Timestamp in RFC-3339 format with nanosecond precision.

<h2 id="tocS_unit_split">unit_split</h2>
<!-- backwards compatibility -->
<a id="schemaunit_split"></a>
<a id="schema_unit_split"></a>
<a id="tocSunit_split"></a>
<a id="tocsunit_split"></a>

```json
{
  "alternate_cusip": "G5391L110",
  "alternate_rate": 0.3333,
  "alternate_symbol": "LVROW",
  "effective_date": "2023-03-01",
  "id": "3e68e87e-ae95-4d68-91d1-715d52ef143a",
  "new_cusip": "G5391L102",
  "new_rate": 1,
  "new_symbol": "LVRO",
  "old_cusip": "G8990L119",
  "old_rate": 1,
  "old_symbol": "TPBAU",
  "process_date": "2023-03-01"
}
```

Unit split.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_cusip|string|true|none|none|
|alternate_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|alternate_rate|number(double)|true|none|none|
|alternate_symbol|string|true|none|none|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|effective_date|[effective_date](#schemaeffective_date)|true|none|The effective date marks the cutoff point for shareholders to be credited.|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|new_cusip|string|true|none|none|
|new_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|new_rate|number(double)|true|none|none|
|new_symbol|string|true|none|none|
|old_cusip|string|true|none|none|
|old_isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|old_rate|number(double)|true|none|none|
|old_symbol|string|true|none|none|
|payable_date|[payable_date](#schemapayable_date)|false|none|The date when the corporate action benefit is paid or distributed.|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|

<h2 id="tocS_worthless_removal">worthless_removal</h2>
<!-- backwards compatibility -->
<a id="schemaworthless_removal"></a>
<a id="schema_worthless_removal"></a>
<a id="tocSworthless_removal"></a>
<a id="tocsworthless_removal"></a>

```json
{
  "cusip": "078771300",
  "id": "106c2149-ee04-4d2e-a943-98dbb4d21a3c",
  "process_date": "2024-12-19",
  "symbol": "BLPH"
}
```

Worthless removal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency](#schemacurrency)|false|none|The ISO 4217 currency code associated with the corporate action.<br>Empty value can mean USD, non-applicable (e.g. for name changes) or unknown<br>(can change later to a valid currency).<br>|
|cusip|string|true|none|none|
|id|[ca_id](#schemaca_id)|true|none|The internal Alpaca identifier of the corporate action.|
|isin|[isin](#schemaisin)|false|none|International Securities Identification Number (ISIN) as defined by ISO 6166.<br>May be empty for US corporate actions.<br>|
|process_date|[process_date](#schemaprocess_date)|true|none|The date when the corporate action is processed by Alpaca.|
|symbol|string|true|none|none|
