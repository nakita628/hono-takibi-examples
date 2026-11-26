<h1 id="binance-public-spot-api">Binance Public Spot API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenAPI Specifications for the Binance Public Spot API

API documents:
  - [https://github.com/binance/binance-spot-api-docs](https://github.com/binance/binance-spot-api-docs)
  - [https://binance-docs.github.io/apidocs/spot/en](https://binance-docs.github.io/apidocs/spot/en)

Base URLs:

* <a href="https://api.binance.com">https://api.binance.com</a>

* <a href="https://testnet.binance.vision">https://testnet.binance.vision</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-MBX-APIKEY**, in: header. Binance Public API Key

<h1 id="binance-public-spot-api-market">Market</h1>

Market Data

## Test Connectivity

> Code samples

```bash
curl https://api.binance.com/api/v3/ping \
  -H 'Accept: application/json'
```

`GET /api/v3/ping`

Test connectivity to the Rest API.

Weight(IP): 1

> Example responses

> 200 Response

```json
{}
```

<h3 id="test-connectivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Check Server Time

> Code samples

```bash
curl https://api.binance.com/api/v3/time \
  -H 'Accept: application/json'
```

`GET /api/v3/time`

Test connectivity to the Rest API and get the current server time.

Weight(IP): 1

> Example responses

> 200 Response

```json
{
  "serverTime": 1499827319559
}
```

<h3 id="check-server-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Binance server UTC timestamp|Inline|

<h3 id="check-server-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverTime|integer(int64)|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Exchange Information

> Code samples

```bash
curl https://api.binance.com/api/v3/exchangeInfo \
  -H 'Accept: application/json'
```

`GET /api/v3/exchangeInfo`

Current exchange trading rules and symbol information

- If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an error.
- All parameters are optional.
- permissions can support single or multiple values (e.g. SPOT, ["MARGIN","LEVERAGED"])
- If permissions parameter not provided, the default values will be ["SPOT","MARGIN","LEVERAGED"].
  - To display all permissions you need to specify them explicitly. (e.g. SPOT, MARGIN,...)

Examples of Symbol Permissions Interpretation from the Response:
- [["A","B"]] means you may place an order if your account has either permission "A" or permission "B".
- [["A"],["B"]] means you can place an order if your account has permission "A" and permission "B".
- [["A"],["B","C"]] means you can place an order if your account has permission "A" and permission "B" or permission "C". (Inclusive or is applied here, not exclusive or, so your account may have both permission "B" and permission "C".)

Weight(IP): 10

<h3 id="exchange-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|symbols|query|string|false|none|
|permissions|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "timezone": "UTC",
  "serverTime": 1592882214236,
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200
    }
  ],
  "exchangeFilters": [
    {}
  ],
  "symbols": [
    {
      "symbol": "ETHBTC",
      "status": "TRADING",
      "baseAsset": "ETH",
      "baseAssetPrecision": 8,
      "quoteAsset": "BTC",
      "quoteAssetPrecision": 8,
      "baseCommissionPrecision": 8,
      "quoteCommissionPrecision": 8,
      "orderTypes": [
        "LIMIT"
      ],
      "icebergAllowed": true,
      "ocoAllowed": true,
      "otoAllowed": false,
      "quoteOrderQtyMarketAllowed": true,
      "allowTrailingStop": false,
      "cancelReplaceAllowed": true,
      "isSpotTradingAllowed": true,
      "isMarginTradingAllowed": true,
      "filters": [
        {
          "filterType": "PRICE_FILTER",
          "minPrice": "0.00000100",
          "maxPrice": "100000.00000000",
          "tickSize": "0.00000100"
        }
      ],
      "permissions": [
        "SPOT"
      ],
      "permissionSets": [
        [
          [
            "SPOT",
            "MARGIN"
          ]
        ]
      ],
      "defaultSelfTradePreventionMode": "NONE",
      "allowedSelfTradePreventionModes": [
        "NONE"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="exchange-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current exchange trading rules and symbol information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="exchange-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezone|string|true|none|none|
|serverTime|integer(int64)|true|none|none|
|rateLimits|[object]|true|none|none|
|» rateLimitType|string|true|none|none|
|» interval|string|true|none|none|
|» intervalNum|integer(int32)|true|none|none|
|» limit|integer(int32)|true|none|none|
|exchangeFilters|[object]|true|none|none|
|symbols|[object]|true|none|none|
|» symbol|string|true|none|none|
|» status|string|true|none|none|
|» baseAsset|string|true|none|none|
|» baseAssetPrecision|integer(int32)|true|none|none|
|» quoteAsset|string|true|none|none|
|» quoteAssetPrecision|integer(int32)|true|none|none|
|» baseCommissionPrecision|integer(int32)|true|none|none|
|» quoteCommissionPrecision|integer(int32)|true|none|none|
|» orderTypes|[string]|true|none|none|
|» icebergAllowed|boolean|true|none|none|
|» ocoAllowed|boolean|true|none|none|
|» otoAllowed|boolean|true|none|none|
|» quoteOrderQtyMarketAllowed|boolean|true|none|none|
|» allowTrailingStop|boolean|true|none|none|
|» cancelReplaceAllowed|boolean|true|none|none|
|» isSpotTradingAllowed|boolean|true|none|none|
|» isMarginTradingAllowed|boolean|true|none|none|
|» filters|[object]|true|none|none|
|» » filterType|string|true|none|none|
|» » minPrice|string|true|none|none|
|» » maxPrice|string|true|none|none|
|» » tickSize|string|true|none|none|
|» permissions|[string]|true|none|none|
|» permissionSets|[[string]]|true|none|none|
|» defaultSelfTradePreventionMode|string|true|none|none|
|» allowedSelfTradePreventionModes|[string]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Order Book

> Code samples

```bash
curl 'https://api.binance.com/api/v3/depth?symbol=BNBUSDT' \
  -H 'Accept: application/json'
```

`GET /api/v3/depth`

| Limit               | Weight(IP)  |
|---------------------|-------------|
| 1-100               | 5           |
| 101-500             | 25          |
| 501-1000            | 50          |
| 1001-5000           | 250         |

<h3 id="order-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|limit|query|integer(int32)|false|If limit > 5000, then the response will truncate to 5000|

> Example responses

> 200 Response

```json
{
  "lastUpdateId": 1027024,
  "bids": [
    [
      "4.00000000",
      "431.00000000"
    ]
  ],
  "asks": [
    [
      "4.00000200",
      "12.00000000"
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="order-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order book|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="order-book-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdateId|integer(int64)|true|none|none|
|bids|[[string]]|true|none|none|
|asks|[[string]]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Recent Trades List

> Code samples

```bash
curl 'https://api.binance.com/api/v3/trades?symbol=BNBUSDT' \
  -H 'Accept: application/json'
```

`GET /api/v3/trades`

Get recent trades.

Weight(IP): 10

<h3 id="recent-trades-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|limit|query|integer(int32)|false|Default 500; max 1000.|

> Example responses

> 200 Response

```json
[
  {
    "id": 345196462,
    "price": "9638.99000000",
    "qty": "0.02077200",
    "quoteQty": "0.02077200",
    "time": 1592887772684,
    "isBuyerMaker": true,
    "isBestMatch": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="recent-trades-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trade list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="recent-trades-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[trade](#schematrade)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Old Trade Lookup

> Code samples

```bash
curl 'https://api.binance.com/api/v3/historicalTrades?symbol=BNBUSDT' \
  -H 'Accept: application/json'
```

`GET /api/v3/historicalTrades`

Get older market trades.

Weight(IP): 10

<h3 id="old-trade-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|fromId|query|integer(int64)|false|Trade id to fetch from. Default gets most recent trades.|

> Example responses

> 200 Response

```json
[
  {
    "id": 345196462,
    "price": "9638.99000000",
    "qty": "0.02077200",
    "quoteQty": "0.02077200",
    "time": 1592887772684,
    "isBuyerMaker": true,
    "isBestMatch": true
  }
]
```

<h3 id="old-trade-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trade list|Inline|

<h3 id="old-trade-lookup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[trade](#schematrade)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Compressed/Aggregate Trades List

> Code samples

```bash
curl 'https://api.binance.com/api/v3/aggTrades?symbol=BNBUSDT' \
  -H 'Accept: application/json'
```

`GET /api/v3/aggTrades`

Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated.
- If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will be returned.
- Note that if a trade has the following values, this was a duplicate aggregate trade and marked as invalid:

  p = '0' // price

  q = '0' // qty

  f = -1 // ﬁrst_trade_id

  l = -1 // last_trade_id

Weight(IP): 2

<h3 id="compressedaggregate-trades-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|fromId|query|integer(int64)|false|Trade id to fetch from. Default gets most recent trades.|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 500; max 1000.|

> Example responses

> 200 Response

```json
[
  {
    "a": 26129,
    "p": "0.01633102",
    "q": "4.70443515",
    "f": 27781,
    "l": 27781,
    "T": 1498793709153,
    "m": true,
    "M": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="compressedaggregate-trades-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trade list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="compressedaggregate-trades-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[aggTrade](#schemaaggtrade)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Kline/Candlestick Data

> Code samples

```bash
curl 'https://api.binance.com/api/v3/klines?symbol=BNBUSDT&interval=%221m%22' \
  -H 'Accept: application/json'
```

`GET /api/v3/klines`

Kline/candlestick bars for a symbol.
Klines are uniquely identified by their open time.

- If `startTime` and `endTime` are not sent, the most recent klines are returned.

Weight(IP): 2

<h3 id="klinecandlestick-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|interval|query|string|true|kline intervals|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|timeZone|query|string|false|Default: 0 (UTC)|
|limit|query|integer(int32)|false|Default 500; max 1000.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|1s|
|interval|1m|
|interval|3m|
|interval|5m|
|interval|15m|
|interval|30m|
|interval|1h|
|interval|2h|
|interval|4h|
|interval|6h|
|interval|8h|
|interval|12h|
|interval|1d|
|interval|3d|
|interval|1w|
|interval|1M|

> Example responses

> 200 Response

```json
[
  [
    1499040000000,
    "0.01634790",
    "0.80000000",
    "0.01575800",
    "0.01577100",
    "148976.11427815",
    1499644799999,
    "2434.19055334",
    308,
    "1756.87402397",
    "28.46694368",
    "17928899.62484339"
  ]
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="klinecandlestick-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Kline data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="klinecandlestick-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[integer(int64) \| string]]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## UIKlines

> Code samples

```bash
curl 'https://api.binance.com/api/v3/uiKlines?symbol=BNBUSDT&interval=%221m%22' \
  -H 'Accept: application/json'
```

`GET /api/v3/uiKlines`

The request is similar to klines having the same parameters and response.

uiKlines return modified kline data, optimized for presentation of candlestick charts.

Weight(IP): 2

<h3 id="uiklines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|interval|query|string|true|kline intervals|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|timeZone|query|string|false|Default: 0 (UTC)|
|limit|query|integer(int32)|false|Default 500; max 1000.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|1s|
|interval|1m|
|interval|3m|
|interval|5m|
|interval|15m|
|interval|30m|
|interval|1h|
|interval|2h|
|interval|4h|
|interval|6h|
|interval|8h|
|interval|12h|
|interval|1d|
|interval|3d|
|interval|1w|
|interval|1M|

> Example responses

> 200 Response

```json
[
  [
    1499040000000,
    "0.01634790",
    "0.80000000",
    "0.01575800",
    "0.01577100",
    "148976.11427815",
    1499644799999,
    "2434.19055334",
    308,
    "1756.87402397",
    "28.46694368",
    "0"
  ]
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="uiklines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|UIKline data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="uiklines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[integer(int64) \| string]]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Current Average Price

> Code samples

```bash
curl 'https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT' \
  -H 'Accept: application/json'
```

`GET /api/v3/avgPrice`

Current average price for a symbol.

Weight(IP): 2

<h3 id="current-average-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|

> Example responses

> 200 Response

```json
{
  "mins": 5,
  "price": "9.35751834",
  "closeTime": 1694061154503
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="current-average-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Average price|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="current-average-price-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mins|integer(int64)|true|none|Average price interval (in minutes)|
|price|string|true|none|Average price|
|closeTime|integer(int64)|true|none|Last trade time|

<aside class="success">
This operation does not require authentication
</aside>

## 24hr Ticker Price Change Statistics

> Code samples

```bash
curl https://api.binance.com/api/v3/ticker/24hr \
  -H 'Accept: application/json'
```

`GET /api/v3/ticker/24hr`

24 hour rolling window price change statistics. Careful when accessing this with no symbol.

- If the symbol is not sent, tickers for all symbols will be returned in an array.

Weight(IP):
- `2` for a single symbol;
- `80` when the symbol parameter is omitted;

<h3 id="24hr-ticker-price-change-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|symbols|query|string|false|none|
|type|query|string|false|Supported values: FULL or MINI.<br>If none provided, the default is FULL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|FULL|
|type|MINI|

> Example responses

> 200 Response

```json
{
  "symbol": "BNBBTC",
  "priceChange": "0.17160000",
  "priceChangePercent": "1.060",
  "prevClosePrice": "16.35920000",
  "lastPrice": "27.84000000",
  "bidPrice": "16.34488284",
  "bidQty": "16.34488284",
  "askPrice": "16.35920000",
  "askQty": "25.06000000",
  "openPrice": "16.18760000",
  "highPrice": "16.55000000",
  "lowPrice": "16.16940000",
  "volume": "1678279.95000000",
  "quoteVolume": "27431289.14792300",
  "openTime": 1592808788637,
  "closeTime": 1592895188637,
  "firstId": 62683296,
  "lastId": 62739253,
  "count": 55958
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="24hr-ticker-price-change-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|24hr ticker|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="24hr-ticker-price-change-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ticker](#schematicker)|false|none|none|
|*oneOf*|[tickerList](#schematickerlist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Trading Day Ticker

> Code samples

```bash
curl https://api.binance.com/api/v3/ticker/tradingDay \
  -H 'Accept: application/json'
```

`GET /api/v3/ticker/tradingDay`

Price change statistics for a trading day.

Notes:
- Supported values for timeZone:
  - Hours and minutes (e.g. -1:00, 05:45)
  - Only hours (e.g. 0, 8, 4)

Weight:
- `4` for each requested symbol.
- The weight for this request will cap at `200` once the number of symbols in the request is more than `50`.

<h3 id="trading-day-ticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|symbols|query|string|false|none|
|timeZone|query|string|false|Default: 0 (UTC)|
|type|query|string|false|Supported values: FULL or MINI.<br>If none provided, the default is FULL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|FULL|
|type|MINI|

> Example responses

> 200 Response

```json
{
  "symbol": "BTCUSDT",
  "priceChange": "-83.13000000",
  "priceChangePercent": "-0.317",
  "weightedAvgPrice": "26234.58803036",
  "openPrice": "26304.80000000",
  "highPrice": "26397.46000000",
  "lowPrice": "26088.34000000",
  "lastPrice": "26221.67000000",
  "volume": "18495.35066000",
  "quoteVolume": "485217905.04210480",
  "openTime": 1695686400000,
  "closeTime": 1695772799999,
  "firstId": 3220151555,
  "lastId": 3220849281,
  "count": 697727
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="trading-day-ticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trading day ticker|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="trading-day-ticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[dayTicker](#schemadayticker)|false|none|none|
|*oneOf*|[dayTickerList](#schemadaytickerlist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Symbol Price Ticker

> Code samples

```bash
curl https://api.binance.com/api/v3/ticker/price \
  -H 'Accept: application/json'
```

`GET /api/v3/ticker/price`

Latest price for a symbol or symbols.

- If the symbol is not sent, prices for all symbols will be returned in an array.

Weight(IP):
- `2` for a single symbol;
- `4` when the symbol parameter is omitted;

<h3 id="symbol-price-ticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|symbols|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "symbol": "BNBBTC",
  "price": "0.17160000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="symbol-price-ticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Price ticker|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="symbol-price-ticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[priceTicker](#schemapriceticker)|false|none|none|
|*oneOf*|[priceTickerList](#schemapricetickerlist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Symbol Order Book Ticker

> Code samples

```bash
curl https://api.binance.com/api/v3/ticker/bookTicker \
  -H 'Accept: application/json'
```

`GET /api/v3/ticker/bookTicker`

Best price/qty on the order book for a symbol or symbols.

- If the symbol is not sent, bookTickers for all symbols will be returned in an array.

Weight(IP):
- `2` for a single symbol;
- `4` when the symbol parameter is omitted;

<h3 id="symbol-order-book-ticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|symbols|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "symbol": "BNBBTC",
  "bidPrice": "16.36240000",
  "bidQty": "256.78000000",
  "askPrice": "16.36450000",
  "askQty": "12.56000000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="symbol-order-book-ticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order book ticker|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="symbol-order-book-ticker-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[bookTicker](#schemabookticker)|false|none|none|
|*oneOf*|[bookTickerList](#schemabooktickerlist)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Rolling window price change statistics

> Code samples

```bash
curl https://api.binance.com/api/v3/ticker \
  -H 'Accept: application/json'
```

`GET /api/v3/ticker`

The window used to compute statistics is typically slightly wider than requested windowSize.

openTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time of the request. As such, the effective window might be up to 1 minute wider than requested.

E.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC)

Weight(IP): 4 for each requested symbol regardless of windowSize.

The weight for this request will cap at 200 once the number of symbols in the request is more than 50.

<h3 id="rolling-window-price-change-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|symbols|query|string|false|none|
|windowSize|query|string|false|Defaults to 1d if no parameter provided.<br>Supported windowSize values:<br>1m,2m....59m for minutes<br>1h, 2h....23h - for hours<br>1d...7d - for days.<br><br>Units cannot be combined (e.g. 1d2h is not allowed)|
|type|query|string|false|Supported values: FULL or MINI.<br>If none provided, the default is FULL|

> Example responses

> 200 Response

```json
{
  "symbol": "BNBBTC",
  "priceChange": "-8.00000000",
  "priceChangePercent": "-88.889",
  "weightedAvgPrice": "2.60427807",
  "openPrice": "9.00000000",
  "highPrice": "9.00000000",
  "lowPrice": "1.00000000",
  "lastPrice": "1.00000000",
  "volume": "187.00000000",
  "quoteVolume": "487.00000000",
  "openTime": 1641859200000,
  "closeTime": 1642031999999,
  "firstId": 0,
  "lastId": 60,
  "count": 61
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="rolling-window-price-change-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rolling price ticker|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="rolling-window-price-change-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|priceChange|string|true|none|none|
|priceChangePercent|string|true|none|none|
|weightedAvgPrice|string|true|none|none|
|openPrice|string|true|none|none|
|highPrice|string|true|none|none|
|lowPrice|string|true|none|none|
|lastPrice|string|true|none|none|
|volume|string|true|none|none|
|quoteVolume|string|true|none|none|
|openTime|integer(int64)|true|none|none|
|closeTime|integer(int64)|true|none|none|
|firstId|integer(int64)|true|none|none|
|lastId|integer(int64)|true|none|none|
|count|integer(int64)|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="binance-public-spot-api-trade">Trade</h1>

Account/Trade

## Test New Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/order/test?symbol=BNBUSDT&side=SELL&type=LIMIT&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/order/test`

Test new order creation and signature/recvWindow long.
Creates and validates a new order but does not send it into the matching engine.

Weight(IP):
  - Without computeCommissionRates: `1`
  - With computeCommissionRates: `20`

<h3 id="test-new-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|type|query|string|true|Order type|
|timeInForce|query|string|false|Order time in force|
|quantity|query|number(double)|false|Order quantity|
|quoteOrderQty|query|number(double)|false|Quote quantity|
|price|query|number(double)|false|Order price|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|strategyId|query|integer(int64)|false|none|
|strategyType|query|integer(int64)|false|The value cannot be less than 1000000.|
|stopPrice|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|trailingDelta|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|icebergQty|query|number(double)|false|Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.|
|newOrderRespType|query|string|false|Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|computeCommissionRates|query|boolean|false|Default: false|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|type|LIMIT|
|type|MARKET|
|type|STOP_LOSS|
|type|STOP_LOSS_LIMIT|
|type|TAKE_PROFIT|
|type|TAKE_PROFIT_LIMIT|
|type|LIMIT_MAKER|
|timeInForce|GTC|
|timeInForce|IOC|
|timeInForce|FOK|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="test-new-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Order (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/order?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/order`

Check an order's status.

- Either `orderId` or `origClientOrderId` must be sent.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.

Weight(IP): 4

<h3 id="query-order-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|orderId|query|integer(int64)|false|Order id|
|origClientOrderId|query|string|false|Order id from client|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "symbol": "LTCBTC",
  "orderId": 1,
  "orderListId": -1,
  "clientOrderId": "myOrder1",
  "price": "0.1",
  "origQty": "1.0",
  "executedQty": "0.0",
  "cummulativeQuoteQty": "0.0",
  "status": "NEW",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "BUY",
  "stopPrice": "0.0",
  "icebergQty": "0.0",
  "time": 1499827319559,
  "updateTime": 1499827319559,
  "isWorking": true,
  "workingTime": 1499827319559,
  "origQuoteOrderQty": "0.00000000",
  "selfTradePreventionMode": "NONE",
  "preventedMatchId": 0,
  "preventedQuantity": "1.200000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-order-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order details|[orderDetails](#schemaorderdetails)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## New Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/order?symbol=BNBUSDT&side=SELL&type=LIMIT&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/order`

Send in a new order.

- `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker.
- `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached.
- Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`.
- Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`.
- `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the market price.
- `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when buying) or receive (when selling) of the quote asset; the correct quantity will be determined based on the market liquidity and `quoteOrderQty`.
- `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will execute a quantity that will have the notional value as close as possible to `quoteOrderQty`.
- same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the order will be rejected.

Trigger order price rules against market price for both `MARKET` and `LIMIT` versions:

- Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL`
- Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY`


Weight(IP): 1

<h3 id="new-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|type|query|string|true|Order type|
|timeInForce|query|string|false|Order time in force|
|quantity|query|number(double)|false|Order quantity|
|quoteOrderQty|query|number(double)|false|Quote quantity|
|price|query|number(double)|false|Order price|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|strategyId|query|integer(int64)|false|none|
|strategyType|query|integer(int64)|false|The value cannot be less than 1000000.|
|stopPrice|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|trailingDelta|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|icebergQty|query|number(double)|false|Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.|
|newOrderRespType|query|string|false|Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|type|LIMIT|
|type|MARKET|
|type|STOP_LOSS|
|type|STOP_LOSS_LIMIT|
|type|TAKE_PROFIT|
|type|TAKE_PROFIT_LIMIT|
|type|LIMIT_MAKER|
|timeInForce|GTC|
|timeInForce|IOC|
|timeInForce|FOK|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "orderListId": -1,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="new-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="new-order-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[orderResponseAck](#schemaorderresponseack)|false|none|none|
|*oneOf*|[orderResponseResult](#schemaorderresponseresult)|false|none|none|
|*oneOf*|[orderResponseFull](#schemaorderresponsefull)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/order?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /api/v3/order`

Cancel an active order.

Either `orderId` or `origClientOrderId` must be sent.

Weight(IP): 1

<h3 id="cancel-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|orderId|query|integer(int64)|false|Order id|
|origClientOrderId|query|string|false|Order id from client|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|cancelRestrictions|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cancelRestrictions|ONLY_NEW|
|cancelRestrictions|ONLY_PARTIALLY_FILLED|

> Example responses

> 200 Response

```json
{
  "symbol": "BNBBTC",
  "origClientOrderId": "msXkySR3u5uYwpvRMFsi3u",
  "orderId": 28,
  "orderListId": -1,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595,
  "price": "1.00000000",
  "origQty": "10.00000000",
  "executedQty": "10.00000000",
  "cummulativeQuoteQty": "10.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "SELL",
  "selfTradePreventionMode": "NONE"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancelled order|[order](#schemaorder)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel an Existing Order and Send a New Order (Trade)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/order/cancelReplace?symbol=BNBUSDT&side=SELL&type=LIMIT&cancelReplaceMode=STOP_ON_FAILURE&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/order/cancelReplace`

Cancels an existing order and places a new order on the same symbol.

Filters and Order Count are evaluated before the processing of the cancellation and order placement occurs.

A new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still increase the order count by 1.

Weight(IP): 1

<h3 id="cancel-an-existing-order-and-send-a-new-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|type|query|string|true|Order type|
|cancelReplaceMode|query|string|true|- `STOP_ON_FAILURE` If the cancel request fails, the new order placement will not be attempted.<br>- `ALLOW_FAILURES` If new order placement will be attempted even if cancel request fails.|
|cancelRestrictions|query|string|false|none|
|timeInForce|query|string|false|Order time in force|
|quantity|query|number(double)|false|Order quantity|
|quoteOrderQty|query|number(double)|false|Quote quantity|
|price|query|number(double)|false|Order price|
|cancelNewClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|cancelOrigClientOrderId|query|string|false|Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.|
|cancelOrderId|query|integer(int64)|false|Either the cancelOrigClientOrderId or cancelOrderId must be provided. If both are provided, cancelOrderId takes precedence.|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|strategyId|query|integer(int64)|false|none|
|strategyType|query|integer(int64)|false|The value cannot be less than 1000000.|
|stopPrice|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|trailingDelta|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|icebergQty|query|number(double)|false|Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.|
|newOrderRespType|query|string|false|Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|type|LIMIT|
|type|MARKET|
|type|STOP_LOSS|
|type|STOP_LOSS_LIMIT|
|type|TAKE_PROFIT|
|type|TAKE_PROFIT_LIMIT|
|type|LIMIT_MAKER|
|cancelRestrictions|ONLY_NEW|
|cancelRestrictions|ONLY_PARTIALLY_FILLED|
|timeInForce|GTC|
|timeInForce|IOC|
|timeInForce|FOK|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{
  "cancelResult": "SUCCESS",
  "newOrderResult": "SUCCESS",
  "cancelResponse": {
    "symbol": "BTCUSDT",
    "origClientOrderId": "DnLo3vTAQcjha43lAZhZ0y",
    "orderId": 9,
    "orderListId": -1,
    "clientOrderId": "osxN3JXAtJvKvCqGeMWMVR",
    "price": "0.01000000",
    "origQty": "0.000100",
    "executedQty": "0.00000000",
    "cummulativeQuoteQty": "0.00000000",
    "status": "CANCELED",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "SELL",
    "selfTradePreventionMode": "NONE",
    "transactTime": 1507725176595
  },
  "newOrderResponse": {
    "symbol": "BTCUSDT",
    "orderId": 10,
    "orderListId": -1,
    "clientOrderId": "wOceeeOzNORyLiQfw7jd8S",
    "transactTime": 1652928801803,
    "price": "0.02000000",
    "origQty": "0.040000",
    "executedQty": "0.00000000",
    "cummulativeQuoteQty": "0.00000000",
    "status": "NEW",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "BUY",
    "workingTime": 1669277163808,
    "fills": [],
    "selfTradePreventionMode": "NONE"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-an-existing-order-and-send-a-new-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="cancel-an-existing-order-and-send-a-new-order-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelResult|string|true|none|none|
|newOrderResult|string|true|none|none|
|cancelResponse|object|true|none|none|
|» symbol|string|true|none|none|
|» origClientOrderId|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» selfTradePreventionMode|string|true|none|none|
|» transactTime|integer(int64)|false|none|none|
|newOrderResponse|object|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» workingTime|integer(int64)|true|none|none|
|» fills|[string]|true|none|none|
|» selfTradePreventionMode|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Current Open Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/openOrders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/openOrders`

Get all open orders on a symbol. Careful when accessing this with no symbol.

Weight(IP):
- `6` for a single symbol;
- `80` when the symbol parameter is omitted;

<h3 id="current-open-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "LTCBTC",
    "orderId": 1,
    "orderListId": -1,
    "clientOrderId": "myOrder1",
    "price": "0.1",
    "origQty": "1.0",
    "executedQty": "0.0",
    "cummulativeQuoteQty": "0.0",
    "status": "NEW",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "BUY",
    "stopPrice": "0.0",
    "icebergQty": "0.0",
    "time": 1499827319559,
    "updateTime": 1499827319559,
    "isWorking": true,
    "workingTime": 1499827319559,
    "origQuoteOrderQty": "0.00000000",
    "selfTradePreventionMode": "NONE",
    "preventedMatchId": 0,
    "preventedQuantity": "1.200000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="current-open-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current open orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="current-open-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[orderDetails](#schemaorderdetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel all Open Orders on a Symbol (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/openOrders?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /api/v3/openOrders`

Cancels all active orders on a symbol.
This includes OCO orders.

Weight(IP): 1

<h3 id="cancel-all-open-orders-on-a-symbol-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BNBBTC",
    "origClientOrderId": "msXkySR3u5uYwpvRMFsi3u",
    "orderId": 28,
    "orderListId": -1,
    "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
    "transactTime": 1507725176595,
    "price": "1.00000000",
    "origQty": "10.00000000",
    "executedQty": "10.00000000",
    "cummulativeQuoteQty": "10.00000000",
    "status": "FILLED",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "SELL",
    "selfTradePreventionMode": "NONE"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-all-open-orders-on-a-symbol-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancelled orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="cancel-all-open-orders-on-a-symbol-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[order](#schemaorder) \| [ocoOrder](#schemaocoorder)]|false|none|none|
|» *anyOf*|[order](#schemaorder)|false|none|none|
|» *anyOf*|[ocoOrder](#schemaocoorder)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## All Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/allOrders?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/allOrders`

Get all account orders; active, canceled, or filled..

- If `orderId` is set, it will get orders >= that `orderId`. Otherwise most recent orders are returned.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.
- If `startTime` and/or `endTime` provided, `orderId` is not required

Weight(IP): 20

<h3 id="all-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|orderId|query|integer(int64)|false|Order id|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "LTCBTC",
    "orderId": 1,
    "orderListId": -1,
    "clientOrderId": "myOrder1",
    "price": "0.1",
    "origQty": "1.0",
    "executedQty": "0.0",
    "cummulativeQuoteQty": "0.0",
    "status": "NEW",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "BUY",
    "stopPrice": "0.0",
    "icebergQty": "0.0",
    "time": 1499827319559,
    "updateTime": 1499827319559,
    "isWorking": true,
    "workingTime": 1499827319559,
    "origQuoteOrderQty": "0.00000000",
    "selfTradePreventionMode": "NONE",
    "preventedMatchId": 0,
    "preventedQuantity": "1.200000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="all-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current open orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="all-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[orderDetails](#schemaorderdetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## New Order list - OCO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/orderList/oco?symbol=BNBUSDT&side=SELL&quantity=1&aboveType=string&belowType=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/orderList/oco`

Send in an one-cancels-the-other (OCO) pair, where activation of one order immediately cancels the other.

- An `OCO` has 2 orders called the above order and below order.
- One of the orders must be a `LIMIT_MAKER` order and the other must be `STOP_LOSS` or`STOP_LOSS_LIMIT` order.
- Price restrictions:
    - If the `OCO` is on the `SELL` side: `LIMIT_MAKER` price > Last Traded Price > stopPrice
    - If the `OCO` is on the `BUY` side: `LIMIT_MAKER` price < Last Traded Price < stopPrice
- OCOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_ORDERS` filter, and the `MAX_NUM_ORDERS` filter.

Weight(IP): 1

<h3 id="new-order-list---oco-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|listClientOrderId|query|string|false|Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `aboveClientOrderId` and the `belowCLientOrderId`.|
|side|query|string|true|none|
|quantity|query|number(double)|true|none|
|aboveType|query|string|true|Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER`|
|aboveClientOrderId|query|string|false|Arbitrary unique ID among open orders for the above order. Automatically generated if not sent|
|aboveIcebergQty|query|number(double)|false|Note that this can only be used if `aboveTimeInForce` is `GTC`.|
|abovePrice|query|number(double)|false|none|
|aboveStopPrice|query|number(double)|false|Can be used if `aboveType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`.<br>Either `aboveStopPrice` or `aboveTrailingDelta` or both, must be specified.|
|aboveTrailingDelta|query|number(double)|false|none|
|aboveTimeInForce|query|string|false|Required if the `aboveType` is `STOP_LOSS_LIMIT`.|
|aboveStrategyId|query|number(double)|false|Arbitrary numeric value identifying the above order within an order strategy.|
|aboveStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the above order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|belowType|query|string|true|Supported values : `STOP_LOSS_LIMIT`, `STOP_LOSS`, `LIMIT_MAKER`|
|belowClientOrderId|query|string|false|Arbitrary unique ID among open orders for the below order. Automatically generated if not sent|
|belowIcebergQty|query|number(double)|false|Note that this can only be used if `belowTimeInForce` is `GTC`.|
|belowPrice|query|number(double)|false|Can be used if `belowType` is `STOP_LOSS_LIMIT` or `LIMIT_MAKER` to specify the limit price.|
|belowStopPrice|query|number(double)|false|Can be used if `belowType` is `STOP_LOSS` or `STOP_LOSS_LIMIT`.<br>Either `belowStopPrice` or `belowTrailingDelta` or both, must be specified.|
|belowTrailingDelta|query|number(double)|false|none|
|belowTimeInForce|query|string|false|Required if the `belowType` is `STOP_LOSS_LIMIT`.|
|belowStrategyId|query|number(double)|false|Arbitrary numeric value identifying the below order within an order strategy.|
|belowStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the below order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|newOrderRespType|query|string|false|Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|aboveTimeInForce|GTC|
|aboveTimeInForce|IOC|
|aboveTimeInForce|FOK|
|belowTimeInForce|GTC|
|belowTimeInForce|IOC|
|belowTimeInForce|FOK|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{
  "orderListId": 1,
  "contingencyType": "OCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "lH1YDkuQKWiXVXHPSKYEIp",
  "transactionTime": 1710485608839,
  "symbol": "LTCBTC",
  "orders": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 10,
        "clientOrderId": "44nZvqpemY7sVYgPYbvPih"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 11,
        "clientOrderId": "NuMp0nVYnciDiFmVqfpBqK"
      }
    ]
  ],
  "orderReports": [
    {
      "symbol": "LTCBTC",
      "orderId": 10,
      "orderListId": 1,
      "clientOrderId": "44nZvqpemY7sVYgPYbvPih",
      "transactTime": 1710485608839,
      "price": "1.000000",
      "origQty": "5.00000000",
      "executedQty": "0.000000",
      "cummulativeQuoteQty": "0.000000",
      "status": "NEW",
      "timeInForce": "GTC",
      "type": "STOP_LOSS_LIMIT",
      "side": "SELL",
      "stopPrice": "1.00000000",
      "workingTime": -1,
      "icebergQty": "1.00000000",
      "selfTradePreventionMode": "NONE"
    },
    {
      "symbol": "LTCBTC",
      "orderId": 11,
      "orderListId": 1,
      "clientOrderId": "NuMp0nVYnciDiFmVqfpBqK",
      "transactTime": 1710485608839,
      "price": "3.00000000",
      "origQty": "5.00000000",
      "executedQty": "0.000000",
      "cummulativeQuoteQty": "0.000000",
      "status": "NEW",
      "timeInForce": "GTC",
      "type": "LIMIT_MAKER",
      "side": "SELL",
      "workingTime": 1710485608839,
      "selfTradePreventionMode": "NONE"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="new-order-list---oco-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New OCO details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="new-order-list---oco-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|orderReports|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» stopPrice|string|true|none|none|
|» workingTime|integer(int64)|true|none|none|
|» selfTradePreventionMode|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## New Order List - OTO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/orderList/oto?symbol=BNBUSDT&workingType=LIMIT&workingSide=BUY&workingPrice=0&workingQuantity=0&workingIcebergQty=0&pendingType=LIMIT&pendingSide=BUY&pendingQuantity=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/orderList/oto`

Places an `OTO`.
- An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders.
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
- The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled.
- If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired.
- When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status.
- OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.

Weight: 1

<h3 id="new-order-list---oto-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|listClientOrderId|query|string|false|Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.|
|newOrderRespType|query|string|false|Set the response JSON.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|workingType|query|string|true|Supported values: LIMIT,LIMIT_MAKER|
|workingSide|query|string|true|BUY,SELL|
|workingClientOrderId|query|string|false|Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.|
|workingPrice|query|number(double)|true|none|
|workingQuantity|query|number(double)|true|Sets the quantity for the working order.|
|workingIcebergQty|query|number(double)|true|This can only be used if workingTimeInForce is GTC.|
|workingTimeInForce|query|string|false|GTC, IOC, FOK|
|workingStrategyId|query|number(double)|false|Arbitrary numeric value identifying the working order within an order strategy.|
|workingStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the working order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|pendingType|query|string|true|Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported.|
|pendingSide|query|string|true|BUY,SELL|
|pendingClientOrderId|query|string|false|Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent.|
|pendingPrice|query|number(double)|false|none|
|pendingStopPrice|query|number(double)|false|none|
|pendingTrailingDelta|query|number(double)|false|none|
|pendingQuantity|query|number(double)|true|Sets the quantity for the pending order.|
|pendingIcebergQty|query|number(double)|false|This can only be used if pendingTimeInForce is GTC.|
|pendingTimeInForce|query|string|false|GTC, IOC, FOK|
|pendingStrategyId|query|number(double)|false|Arbitrary numeric value identifying the pending order within an order strategy.|
|pendingStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the pending order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|
|workingType|LIMIT|
|workingType|LIMIT_MAKER|
|workingSide|BUY|
|workingSide|SELL|
|workingTimeInForce|GTC|
|workingTimeInForce|IOC|
|workingTimeInForce|FOK|
|pendingType|LIMIT|
|pendingType|MARKET|
|pendingType|STOP_LOSS|
|pendingType|STOP_LOSS_LIMIT|
|pendingType|TAKE_PROFIT|
|pendingType|TAKE_PROFIT_LIMIT|
|pendingType|LIMIT_MAKER|
|pendingSide|BUY|
|pendingSide|SELL|
|pendingTimeInForce|GTC|
|pendingTimeInForce|IOC|
|pendingTimeInForce|FOK|

> Example responses

> 200 Response

```json
{
  "orderListId": 0,
  "contingencyType": "OTO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "yl2ERtcar1o25zcWtqVBTC",
  "transactionTime": 1712289389158,
  "symbol": "LTCBTC",
  "orders": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 4,
        "clientOrderId": "Bq17mn9fP6vyCn75Jw1xya"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 5,
        "clientOrderId": "arLFo0zGJVDE69cvGBaU0d"
      }
    ]
  ],
  "orderReports": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 4,
        "orderListId": 0,
        "clientOrderId": "Bq17mn9fP6vyCn75Jw1xya",
        "transactTime": 1712289389158,
        "price": "1.000000",
        "origQty": "1.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "NEW",
        "timeInForce": "GTC",
        "type": "LIMIT",
        "side": "SELL",
        "workingTime": 1712289389158,
        "selfTradePreventionMode": "NONE"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 5,
        "orderListId": 0,
        "clientOrderId": "arLFo0zGJVDE69cvGBaU0d",
        "transactTime": 1712289389158,
        "price": "0.00000000",
        "origQty": "5.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "PENDING_NEW",
        "timeInForce": "GTC",
        "type": "MARKET",
        "side": "BUY",
        "workingTime": -1,
        "selfTradePreventionMode": "NONE"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="new-order-list---oto-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New OTO details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="new-order-list---oto-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|orderReports|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» workingTime|integer(int64)|true|none|none|
|» selfTradePreventionMode|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## New Order List - OTOCO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/orderList/otoco?symbol=BNBUSDT&workingType=LIMIT&workingSide=BUY&workingPrice=0&workingQuantity=0&workingIcebergQty=0&pendingSide=BUY&pendingQuantity=0&pendingAboveType=LIMIT_MAKER&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/orderList/otoco`

Place an `OTOCO`.
- An `OTOCO` (One-Triggers-One-Cancels-the-Other) is an order list comprised of 3 orders.
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
  - The behavior of the working order is the same as the `OTO`.
- `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled.
  - The rules of the pending above and pending below follow the same rules as the Order List `OCO`.
- OTOCOs add 3 orders against the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter, and `MAX_NUM_ORDERS` filter.

Weight: 1

<h3 id="new-order-list---otoco-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|listClientOrderId|query|string|false|Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.|
|newOrderRespType|query|string|false|Set the response JSON.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|workingType|query|string|true|Supported values: LIMIT,LIMIT_MAKER|
|workingSide|query|string|true|BUY,SELL|
|workingClientOrderId|query|string|false|Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.|
|workingPrice|query|number(double)|true|none|
|workingQuantity|query|number(double)|true|Sets the quantity for the working order.|
|workingIcebergQty|query|number(double)|true|This can only be used if workingTimeInForce is GTC.|
|workingTimeInForce|query|string|false|GTC, IOC, FOK|
|workingStrategyId|query|number(double)|false|Arbitrary numeric value identifying the working order within an order strategy.|
|workingStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the working order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|pendingSide|query|string|true|BUY,SELL|
|pendingQuantity|query|number(double)|true|Sets the quantity for the pending order.|
|pendingAboveType|query|string|true|Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT|
|pendingAboveClientOrderId|query|string|false|Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent.|
|pendingAbovePrice|query|number(double)|false|none|
|pendingAboveStopPrice|query|number(double)|false|none|
|pendingAboveTrailingDelta|query|number(double)|false|none|
|pendingAboveIcebergQty|query|number(double)|false|This can only be used if pendingAboveTimeInForce is GTC.|
|pendingAboveTimeInForce|query|string|false|none|
|pendingAboveStrategyId|query|number(double)|false|Arbitrary numeric value identifying the pending above order within an order strategy.|
|pendingAboveStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the pending above order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|pendingBelowType|query|string|false|Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT|
|pendingBelowClientOrderId|query|string|false|Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent.|
|pendingBelowPrice|query|number(double)|false|none|
|pendingBelowStopPrice|query|number(double)|false|none|
|pendingBelowTrailingDelta|query|number(double)|false|none|
|pendingBelowIcebergQty|query|number(double)|false|This can only be used if pendingBelowTimeInForce is GTC.|
|pendingBelowTimeInForce|query|string|false|none|
|pendingBelowStrategyId|query|number(double)|false|Arbitrary numeric value identifying the pending below order within an order strategy.|
|pendingBelowStrategyType|query|integer(int64)|false|Arbitrary numeric value identifying the pending below order strategy.<br>Values smaller than 1000000 are reserved and cannot be used.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|
|workingType|LIMIT|
|workingType|LIMIT_MAKER|
|workingSide|BUY|
|workingSide|SELL|
|workingTimeInForce|GTC|
|workingTimeInForce|IOC|
|workingTimeInForce|FOK|
|pendingSide|BUY|
|pendingSide|SELL|
|pendingAboveType|LIMIT_MAKER|
|pendingAboveType|STOP_LOSS|
|pendingAboveType|STOP_LOSS_LIMIT|
|pendingAboveTimeInForce|GTC|
|pendingAboveTimeInForce|IOC|
|pendingAboveTimeInForce|FOK|
|pendingBelowType|LIMIT_MAKER|
|pendingBelowType|STOP_LOSS|
|pendingBelowType|STOP_LOSS_LIMIT|
|pendingBelowTimeInForce|GTC|
|pendingBelowTimeInForce|IOC|
|pendingBelowTimeInForce|FOK|

> Example responses

> 200 Response

```json
{
  "orderListId": 1,
  "contingencyType": "OTOCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "RumwQpBaDctlUu5jyG5rs0",
  "transactionTime": 1712291372842,
  "symbol": "LTCBTC",
  "orders": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 6,
        "clientOrderId": "fM9Y4m23IFJVCQmIrlUmMK"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 7,
        "clientOrderId": "6pcQbFIzTXGZQ1e2MkGDq4"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 8,
        "clientOrderId": "r4JMv9cwAYYUwwBZfbussx"
      }
    ]
  ],
  "orderReports": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 6,
        "orderListId": 1,
        "clientOrderId": "fM9Y4m23IFJVCQmIrlUmMK",
        "transactTime": 1712291372842,
        "price": "1.000000",
        "origQty": "1.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "NEW",
        "timeInForce": "GTC",
        "type": "LIMIT",
        "side": "SELL",
        "workingTime": 1712291372842,
        "selfTradePreventionMode": "NONE"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 7,
        "orderListId": 1,
        "clientOrderId": "6pcQbFIzTXGZQ1e2MkGDq4",
        "transactTime": 1712291372842,
        "price": "1.00000000",
        "origQty": "5.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "PENDING_NEW",
        "timeInForce": "IOC",
        "type": "STOP_LOSS_LIMIT",
        "side": "BUY",
        "stopPrice": "6.00000000",
        "workingTime": -1,
        "selfTradePreventionMode": "NONE"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 8,
        "orderListId": 1,
        "clientOrderId": "r4JMv9cwAYYUwwBZfbussx",
        "transactTime": 1712291372842,
        "price": "3.00000000",
        "origQty": "5.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "PENDING_NEW",
        "timeInForce": "GTC",
        "type": "LIMIT_MAKER",
        "side": "BUY",
        "workingTime": -1,
        "selfTradePreventionMode": "NONE"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="new-order-list---otoco-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New OTOCO details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="new-order-list---otoco-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|orderReports|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» workingTime|integer(int64)|true|none|none|
|» selfTradePreventionMode|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query OCO (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/orderList?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/orderList`

Retrieves a specific OCO based on provided optional parameters

Weight(IP): 4

<h3 id="query-oco-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderListId|query|integer(int64)|false|Order list id|
|origClientOrderId|query|string|false|Order id from client|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "orderListId": 27,
  "contingencyType": "OCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "h2USkA5YQpaXHPIrkd96xE",
  "transactionTime": 1565245656253,
  "symbol": "LTCBTC",
  "orders": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 4,
        "clientOrderId": "qD1gy3kc3Gx0rihm9Y3xwS"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 5,
        "clientOrderId": "ARzZ9I00CPM8i3NhmU9Ega"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-oco-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OCO details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-oco-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel OCO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/orderList?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /api/v3/orderList`

Cancel an entire Order List

Canceling an individual leg will cancel the entire OCO

Weight(IP): 1

<h3 id="cancel-oco-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|orderListId|query|integer(int64)|false|Order list id|
|listClientOrderId|query|string|false|A unique Id for the entire orderList|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "orderListId": 1929,
  "contingencyType": "OCO",
  "listStatusType": "ALL_DONE",
  "listOrderStatus": "ALL_DONE",
  "listClientOrderId": "C3wyj4WVEktd7u9aVBRXcN",
  "transactionTime": 1574040868128,
  "symbol": "BNBBTC",
  "orders": [
    {
      "symbol": "BNBBTC",
      "orderId": 2,
      "clientOrderId": "pO9ufTiFGg3nw2fOdgeOXa"
    },
    {
      "symbol": "BNBBTC",
      "orderId": 3,
      "clientOrderId": "TXOvglzXuaubXAaENpaRCB"
    }
  ],
  "orderReports": [
    {
      "symbol": "BNBBTC",
      "origClientOrderId": "pO9ufTiFGg3nw2fOdgeOXa",
      "orderId": 2,
      "orderListId": 0,
      "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
      "price": "1.00000000",
      "origQty": "10.00000000",
      "executedQty": "0.00000000",
      "cummulativeQuoteQty": "0.00000000",
      "status": "CANCELED",
      "timeInForce": "GTC",
      "type": "STOP_LOSS_LIMIT",
      "side": "SELL",
      "stopPrice": "1.00000000",
      "transactTime": 1688005070874
    },
    {
      "symbol": "BNBBTC",
      "origClientOrderId": "TXOvglzXuaubXAaENpaRCB",
      "orderId": 3,
      "orderListId": 0,
      "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
      "price": "3.00000000",
      "origQty": "10.00000000",
      "executedQty": "0.00000000",
      "cummulativeQuoteQty": "0.00000000",
      "status": "CANCELED",
      "timeInForce": "GTC",
      "type": "LIMIT_MAKER",
      "side": "SELL",
      "selfTradePreventionMode": "NONE",
      "transactTime": 1688005070874
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-oco-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Report on deleted OCO|[ocoOrder](#schemaocoorder)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query all OCO (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/allOrderList?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/allOrderList`

Retrieves all OCO based on provided optional parameters

Weight(IP): 20

<h3 id="query-all-oco-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromId|query|integer(int64)|false|Trade id to fetch from. Default gets most recent trades.|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "orderListId": 29,
    "contingencyType": "OCO",
    "listStatusType": "EXEC_STARTED",
    "listOrderStatus": "EXECUTING",
    "listClientOrderId": "amEEAXryFzFwYF1FeRpUoZ",
    "transactionTime": 1565245913483,
    "symbol": "LTCBTC",
    "isIsolated": true,
    "orders": [
      [
        {
          "symbol": "LTCBTC",
          "orderId": 4,
          "clientOrderId": "oD7aesZqjEGlZrbtRpy5zB"
        },
        {
          "symbol": "LTCBTC",
          "orderId": 5,
          "clientOrderId": "Jr1h6xirOxgeJOUuYQS7V3"
        }
      ]
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-all-oco-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of OCO orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-all-oco-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» orderListId|integer(int64)|true|none|none|
|» contingencyType|string|true|none|none|
|» listStatusType|string|true|none|none|
|» listOrderStatus|string|true|none|none|
|» listClientOrderId|string|true|none|none|
|» transactionTime|integer(int64)|true|none|none|
|» symbol|string|true|none|none|
|» isIsolated|boolean|true|none|none|
|» orders|[object]|true|none|none|
|» » symbol|string|true|none|none|
|» » orderId|integer(int64)|true|none|none|
|» » clientOrderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Open OCO (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/openOrderList?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/openOrderList`

Weight(IP): 6

<h3 id="query-open-oco-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "orderListId": 31,
    "contingencyType": "OCO",
    "listStatusType": "EXEC_STARTED",
    "listOrderStatus": "EXECUTING",
    "listClientOrderId": "wuB13fmulKj3YjdqWEcsnp",
    "transactionTime": 1565246080644,
    "symbol": "LTCBTC",
    "orders": [
      [
        {
          "symbol": "LTCBTC",
          "orderId": 4,
          "clientOrderId": "r3EH2N76dHfLoSZWIUw1bT"
        },
        {
          "symbol": "LTCBTC",
          "orderId": 5,
          "clientOrderId": "Cv1SnyPD3qhqpbjpYEHbd2"
        }
      ]
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-open-oco-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of OCO orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-open-oco-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» orderListId|integer(int64)|true|none|none|
|» contingencyType|string|true|none|none|
|» listStatusType|string|true|none|none|
|» listOrderStatus|string|true|none|none|
|» listClientOrderId|string|true|none|none|
|» transactionTime|integer(int64)|true|none|none|
|» symbol|string|true|none|none|
|» orders|[object]|true|none|none|
|» » symbol|string|true|none|none|
|» » orderId|integer(int64)|true|none|none|
|» » clientOrderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## New order using SOR (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/sor/order?symbol=BNBUSDT&side=SELL&type=LIMIT&quantity=1&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/sor/order`

Weight(IP): 6

<h3 id="new-order-using-sor-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|type|query|string|true|Order type|
|timeInForce|query|string|false|Order time in force|
|quantity|query|number(double)|true|none|
|price|query|number(double)|false|none|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|strategyId|query|integer(int64)|false|none|
|strategyType|query|integer(int64)|false|The value cannot be less than 1000000.|
|icebergQty|query|number(double)|false|Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.|
|newOrderRespType|query|string|false|Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|type|LIMIT|
|type|MARKET|
|type|STOP_LOSS|
|type|STOP_LOSS_LIMIT|
|type|TAKE_PROFIT|
|type|TAKE_PROFIT_LIMIT|
|type|LIMIT_MAKER|
|timeInForce|GTC|
|timeInForce|IOC|
|timeInForce|FOK|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{
  "symbol": "BTCUSDT",
  "orderId": 2,
  "orderListId": -1,
  "clientOrderId": "sBI1KM6nNtOfj5tccZSKly",
  "transactTime": 1689149087774,
  "price": "31000.00000000",
  "origQty": "0.50000000",
  "executedQty": "0.50000000",
  "cummulativeQuoteQty": "14000.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "BUY",
  "workingTime": 1689149087774,
  "fills": [
    {
      "matchType": "ONE_PARTY_TRADE_REPORT",
      "price": "28000.00000000",
      "qty": "0.50000000",
      "commission": "0.00000000",
      "commissionAsset": "BTC",
      "tradeId": -1,
      "allocId": 0
    }
  ],
  "workingFloor": "SOR",
  "selfTradePreventionMode": "NONE",
  "usedSor": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="new-order-using-sor-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New order details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="new-order-using-sor-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|
|workingTime|integer(int64)|true|none|none|
|fills|[object]|true|none|none|
|» matchType|string|true|none|none|
|» price|string|true|none|none|
|» qty|string|true|none|none|
|» commission|string|true|none|none|
|» commissionAsset|string|true|none|none|
|» tradeId|integer(int64)|true|none|none|
|» allocId|integer(int64)|true|none|none|
|workingFloor|string|true|none|none|
|selfTradePreventionMode|string|true|none|none|
|usedSor|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Test new order using SOR (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/sor/order/test?symbol=BNBUSDT&side=SELL&type=LIMIT&quantity=1&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/sor/order/test`

Test new order creation and signature/recvWindow using smart order routing (SOR).
Creates and validates a new order but does not send it into the matching engine.

Weight(IP):
  - Without computeCommissionRates: `1`
  - With computeCommissionRates: `20`

<h3 id="test-new-order-using-sor-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|type|query|string|true|Order type|
|timeInForce|query|string|false|Order time in force|
|quantity|query|number(double)|true|none|
|price|query|number(double)|false|none|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|strategyId|query|integer(int64)|false|none|
|strategyType|query|integer(int64)|false|The value cannot be less than 1000000.|
|icebergQty|query|number(double)|false|Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.|
|newOrderRespType|query|string|false|Set the response JSON. MARKET and LIMIT order types default to FULL, all other orders default to ACK.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|computeCommissionRates|query|boolean|false|Default: false|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|type|LIMIT|
|type|MARKET|
|type|STOP_LOSS|
|type|STOP_LOSS_LIMIT|
|type|TAKE_PROFIT|
|type|TAKE_PROFIT_LIMIT|
|type|LIMIT_MAKER|
|timeInForce|GTC|
|timeInForce|IOC|
|timeInForce|FOK|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="test-new-order-using-sor-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Test new order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Account Information (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/account`

Get current account information.

Weight(IP): 20

<h3 id="account-information-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "makerCommission": 15,
  "takerCommission": 15,
  "buyerCommission": 0,
  "sellerCommission": 0,
  "commissionRates": {
    "maker": "0.00150000",
    "taker": "0.00150000",
    "buyer": "0.00000000",
    "seller": "0.00000000"
  },
  "canTrade": true,
  "canWithdraw": true,
  "canDeposit": true,
  "brokered": false,
  "requireSelfTradePrevention": false,
  "preventSor": false,
  "updateTime": 123456789,
  "accountType": "SPOT",
  "balances": [
    {
      "asset": "BTC",
      "free": "4723846.89208129",
      "locked": "0.00000000"
    }
  ],
  "permissions": [
    "SPOT"
  ],
  "uid": 354937868
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="account-information-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account details|[account](#schemaaccount)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Account Trade List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/myTrades?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/myTrades`

Get trades for a specific account and symbol.

If `fromId` is set, it will get id >= that `fromId`. Otherwise most recent orders are returned.

The time between startTime and endTime can't be longer than 24 hours.
These are the supported combinations of all parameters:

  symbol

  symbol + orderId

  symbol + startTime

  symbol + endTime

  symbol + fromId

  symbol + startTime + endTime

  symbol+ orderId + fromId

Weight(IP): 20

<h3 id="account-trade-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|orderId|query|integer(int64)|false|This can only be used in combination with symbol.|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|fromId|query|integer(int64)|false|Trade id to fetch from. Default gets most recent trades.|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BNBBTC",
    "id": 28457,
    "orderId": 100234,
    "orderListId": -1,
    "price": "4.00000100",
    "qty": "12.00000000",
    "quoteQty": "48.000012",
    "commission": "10.10000000",
    "commissionAsset": "BNB",
    "time": 1499865549590,
    "isBuyer": false,
    "isMaker": false,
    "isBestMatch": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="account-trade-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of trades|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="account-trade-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[myTrade](#schemamytrade)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Current Order Count Usage (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/rateLimit/order?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/rateLimit/order`

Displays the user's current order count usage for all intervals.

Weight(IP): 40

<h3 id="query-current-order-count-usage-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "rateLimitType": "ORDERS",
    "interval": "SECOND",
    "intervalNum": 10,
    "limit": 10000,
    "count": 0
  },
  {
    "rateLimitType": "ORDERS",
    "interval": "DAY",
    "intervalNum": 1,
    "limit": 20000,
    "count": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-current-order-count-usage-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order rate limits|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-current-order-count-usage-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» rateLimitType|string|true|none|none|
|» interval|string|true|none|none|
|» intervalNum|integer(int32)|true|none|none|
|» limit|integer(int32)|true|none|none|
|» count|integer(int32)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Prevented Matches

> Code samples

```bash
curl 'https://api.binance.com/api/v3/myPreventedMatches?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/myPreventedMatches`

Displays the list of orders that were expired because of STP.

For additional information on what a Prevented match is, as well as Self Trade Prevention (STP), please refer to our STP FAQ page.

These are the combinations supported:

* symbol + preventedMatchId
* symbol + orderId
* symbol + orderId + fromPreventedMatchId (limit will default to 500)
* symbol + orderId + fromPreventedMatchId + limit

Weight(IP):

Case 	                          Weight
If symbol is invalid: 	        2
Querying by preventedMatchId: 	2
Querying by orderId: 	          20

<h3 id="query-prevented-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|preventedMatchId|query|integer(int64)|false|none|
|orderId|query|integer(int64)|false|Order id|
|fromPreventedMatchId|query|integer(int64)|false|none|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BTCUSDT",
    "preventedMatchId": 1,
    "takerOrderId": 5,
    "makerOrderId": 3,
    "tradeGroupId": 1,
    "selfTradePreventionMode": "EXPIRE_MAKER",
    "price": "1.100000",
    "makerPreventedQuantity": "1.300000",
    "transactTime": 1669101687094
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-prevented-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order list that were expired due to STP|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-prevented-matches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» symbol|string|true|none|none|
|» preventedMatchId|integer(int64)|true|none|none|
|» takerOrderId|integer(int64)|true|none|none|
|» makerOrderId|integer(int64)|true|none|none|
|» tradeGroupId|integer(int64)|true|none|none|
|» selfTradePreventionMode|string|true|none|none|
|» price|string|true|none|none|
|» makerPreventedQuantity|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Allocations (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/myAllocations?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/myAllocations`

Retrieves allocations resulting from SOR order placement.

Weight: 20

Supported parameter combinations:
Parameters 	                          Response
symbol 	                              allocations from oldest to newest
symbol + startTime 	                  oldest allocations since startTime
symbol + endTime 	                    newest allocations until endTime
symbol + startTime + endTime 	        allocations within the time range
symbol + fromAllocationId 	          allocations by allocation ID
symbol + orderId 	                    allocations related to an order starting with oldest
symbol + orderId + fromAllocationId 	allocations related to an order by allocation ID

Note: The time between startTime and endTime can't be longer than 24 hours.

<h3 id="query-allocations-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|fromAllocationId|query|integer(int64)|false|none|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|orderId|query|integer(int64)|false|Order id|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BTCUSDT",
    "allocationId": 0,
    "allocationType": "SOR",
    "orderId": 1,
    "orderListId": -1,
    "price": "1.00000000",
    "qty": "5.00000000",
    "quoteQty": "5.00000000",
    "commission": "0.00000000",
    "commissionAsset": "BTC",
    "time": 1687506878118,
    "isBuyer": true,
    "isMaker": false,
    "isAllocator": false
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-allocations-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Allocations resulting from SOR order placement|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-allocations-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» symbol|string|true|none|none|
|» allocationId|integer(int64)|true|none|none|
|» allocationType|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» qty|string|true|none|none|
|» quoteQty|string|true|none|none|
|» commission|string|true|none|none|
|» commissionAsset|string|true|none|none|
|» time|integer(int64)|true|none|none|
|» isBuyer|boolean|true|none|none|
|» isMaker|boolean|true|none|none|
|» isAllocator|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Commission Rates (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/api/v3/account/commission?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /api/v3/account/commission`

Get current account commission rates.

Weight: 20

<h3 id="query-commission-rates-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "symbol": "BTCUSDT",
  "standardCommission": {
    "maker": "0.00000010",
    "taker": "0.00000020",
    "buyer": "0.00000030",
    "seller": "0.00000040"
  },
  "taxCommission": {
    "maker": "0.00000112",
    "taker": "0.00000114",
    "buyer": "0.00000118",
    "seller": "0.00000116"
  },
  "discount": {
    "enabledForAccount": true,
    "enabledForSymbol": true,
    "discountAsset": "BNB",
    "discount": "0.25000000"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-commission-rates-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current account commission rates.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-commission-rates-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|standardCommission|object|true|none|Standard commission rates on trades from the order.|
|» maker|string|true|none|none|
|» taker|string|true|none|none|
|» buyer|string|true|none|none|
|» seller|string|true|none|none|
|taxCommission|object|true|none|Tax commission rates for trades from the order.|
|» maker|string|true|none|none|
|» taker|string|true|none|none|
|» buyer|string|true|none|none|
|» seller|string|true|none|none|
|discount|object|true|none|Discount commission when paying in BNB.|
|» enabledForAccount|boolean|false|none|none|
|» enabledForSymbol|boolean|false|none|none|
|» discountAsset|string|false|none|none|
|» discount|string|false|none|Standard commission is reduced by this rate when paying commission in BNB.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-margin">Margin</h1>

Margin Account/Trade

## Query borrow/repay records in Margin account(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/borrow-repay?asset=BTC&type=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/borrow-repay`

Query borrow/repay records in Margin account

- txId or startTime must be sent. txId takes precedence. Response in descending order
- If an asset is sent, data within 30 days before endTime; If an asset is not sent, data within 7 days before endTime
- If neither startTime nor endTime is sent, the recent 7-day data will be returned.
- startTime set as endTime - 7 days by default, endTime set as current time by default

Weight(IP): 10

<h3 id="query-borrowrepay-records-in-margin-accountuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|isolatedSymbol|query|string|false|Isolated symbol|
|txId|query|integer(int64)|false|tranId in POST /sapi/v1/margin/loan|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|type|query|string|true|BORROW or REPAY|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "isolatedSymbol": "BNBUSDT",
      "amount": "14.00000000",
      "asset": "BNB",
      "interest": "0.01866667",
      "principal": "13.98133333",
      "status": "CONFIRMED",
      "timestamp": 1563438204000,
      "txId": 2970933056
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-borrowrepay-records-in-margin-accountuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin account borrow/repay|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="query-borrowrepay-records-in-margin-accountuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» isolatedSymbol|string|false|none|Isolated symbol, will not be returned for crossed margin|
|» amount|string|false|none|Total amount borrowed/repaid|
|» asset|string|true|none|none|
|» interest|string|false|none|Interest repaid|
|» principal|string|true|none|Principal repaid|
|» status|string|true|none|one of PENDING (pending execution), CONFIRMED (successfully execution), FAILED (execution failed, nothing happened to your account)|
|» timestamp|integer(int64)|true|none|none|
|» txId|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin account borrow/repay(MARGIN)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/borrow-repay?asset=BTC&isIsolated=string&symbol=BNBUSDT&amount=1.01&type=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/borrow-repay`

Margin account borrow/repay(MARGIN)

Weight(UID): 3000

<h3 id="margin-account-borrowrepaymargin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|isIsolated|query|string|true|TRUE for isolated margin, FALSE for crossed margin|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|amount|query|number(double)|true|none|
|type|query|string|true|BORROW or REPAY|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "tranId": 100000001
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-borrowrepaymargin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin account borrow/repay|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="margin-account-borrowrepaymargin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Cross Margin Transfer History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/transfer?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/transfer`

- Response in descending order
- Returns data for last 7 days by default
- Set `archived` to `true` to query data from 6 months ago

Weight(IP): 1

<h3 id="get-cross-margin-transfer-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|type|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|isolatedSymbol|query|string|false|Isolated symbol|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ROLL_IN|
|type|ROLL_OUT|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "amount": "0.10000000",
      "asset": "BNB",
      "status": "CONFIRMED",
      "timestamp": 1566898617,
      "txId": 5240372201,
      "type": "ROLL_IN"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-cross-margin-transfer-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin account transfer history, response in descending order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-cross-margin-transfer-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» amount|string|true|none|none|
|» asset|string|true|none|none|
|» status|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|
|» txId|integer(int64)|true|none|none|
|» type|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get All Margin Assets (MARKET_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/allAssets?asset=BTC' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/allAssets`

Weight(IP): 1

<h3 id="get-all-margin-assets-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "assetFullName": "Binance coin",
    "assetName": "BNB",
    "isBorrowable": true,
    "isMortgageable": true,
    "userMinBorrow": "0.00000000",
    "userMinRepay": "0.00000000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-all-margin-assets-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Assets details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="get-all-margin-assets-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» assetFullName|string|true|none|none|
|» assetName|string|true|none|none|
|» isBorrowable|boolean|true|none|none|
|» isMortgageable|boolean|true|none|none|
|» userMinBorrow|string|true|none|none|
|» userMinRepay|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get All Cross Margin Pairs (MARKET_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/allPairs?symbol=BNBUSDT' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/allPairs`

Weight(IP): 1

<h3 id="get-all-cross-margin-pairs-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|

> Example responses

> 200 Response

```json
[
  {
    "base": "BNB",
    "id": 351637150141315840,
    "isBuyAllowed": true,
    "isMarginTrade": true,
    "isSellAllowed": true,
    "quote": "BTC",
    "symbol": "BNBBTC"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-all-cross-margin-pairs-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin pairs|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="get-all-cross-margin-pairs-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» base|string|true|none|none|
|» id|integer(int64)|true|none|none|
|» isBuyAllowed|boolean|true|none|none|
|» isMarginTrade|boolean|true|none|none|
|» isSellAllowed|boolean|true|none|none|
|» quote|string|true|none|none|
|» symbol|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin PriceIndex (MARKET_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/priceIndex?symbol=BNBUSDT' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/priceIndex`

Weight(IP): 10

<h3 id="query-margin-priceindex-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|

> Example responses

> 200 Response

```json
{
  "calcTime": 1562046418000,
  "price": "0.00333930",
  "symbol": "BNBBTC"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-priceindex-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Price index|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="query-margin-priceindex-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calcTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|symbol|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's Order (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/order?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/order`

- Either `orderId` or `origClientOrderId` must be sent.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.

Weight(IP): 10

<h3 id="query-margin-accounts-order-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|orderId|query|integer(int64)|false|Order id|
|origClientOrderId|query|string|false|Order id from client|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
{
  "clientOrderId": "ZwfQzuDIGpceVhKW5DvCmO",
  "cummulativeQuoteQty": "0.00000000",
  "executedQty": "0.00000000",
  "icebergQty": "0.00000000",
  "isWorking": true,
  "orderId": 213205622,
  "origQty": "0.30000000",
  "price": "0.00493630",
  "side": "SELL",
  "status": "NEW",
  "stopPrice": "0.00000000",
  "symbol": "BNBBTC",
  "isIsolated": true,
  "time": 1562133008725,
  "timeInForce": "GTC",
  "type": "LIMIT",
  "updateTime": 1562133008725,
  "selfTradePreventionMode": "NONE"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-order-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Interest History, response in descending order|[marginOrderDetail](#schemamarginorderdetail)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account New Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/order?symbol=BNBUSDT&side=SELL&type=LIMIT&quantity=1&autoRepayAtCancel=true&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/order`

Post a new order for margin account.

Weight(UID): 6

<h3 id="margin-account-new-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|side|query|string|true|none|
|type|query|string|true|Order type|
|quantity|query|number(double)|true|none|
|quoteOrderQty|query|number(double)|false|Quote quantity|
|price|query|number(double)|false|Order price|
|stopPrice|query|number(double)|false|Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|icebergQty|query|number(double)|false|Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.|
|newOrderRespType|query|string|false|Set the response JSON.|
|sideEffectType|query|string|false|Default `NO_SIDE_EFFECT`|
|timeInForce|query|string|false|Order time in force|
|autoRepayAtCancel|query|boolean|true|none|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|
|side|SELL|
|side|BUY|
|type|LIMIT|
|type|MARKET|
|type|STOP_LOSS|
|type|STOP_LOSS_LIMIT|
|type|TAKE_PROFIT|
|type|TAKE_PROFIT_LIMIT|
|type|LIMIT_MAKER|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|sideEffectType|NO_SIDE_EFFECT|
|sideEffectType|MARGIN_BUY|
|sideEffectType|AUTO_REPAY|
|timeInForce|GTC|
|timeInForce|IOC|
|timeInForce|FOK|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "isIsolated": true,
  "transactTime": 1507725176595
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-new-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin order info|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-account-new-order-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[marginOrderResponseAck](#schemamarginorderresponseack)|false|none|none|
|*oneOf*|[marginOrderResponseResult](#schemamarginorderresponseresult)|false|none|none|
|*oneOf*|[marginOrderResponseFull](#schemamarginorderresponsefull)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account Cancel Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/order?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/margin/order`

Cancel an active order for margin account.

Either `orderId` or `origClientOrderId` must be sent.

Weight(IP): 10

<h3 id="margin-account-cancel-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|orderId|query|integer(int64)|false|Order id|
|origClientOrderId|query|string|false|Order id from client|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
{
  "symbol": "LTCBTC",
  "orderId": 28,
  "origClientOrderId": "msXkySR3u5uYwpvRMFsi3u",
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "price": "1.00000000",
  "origQty": "10.00000000",
  "executedQty": "8.00000000",
  "cummulativeQuoteQty": "8.00000000",
  "status": "CANCELED",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "SELL"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-cancel-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancelled margin order details|[marginOrder](#schemamarginorder)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Interest History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/interestHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/interestHistory`

- Response in descending order
- If `isolatedSymbol` is not sent, crossed margin data will be returned
- Set `archived` to `true` to query data from 6 months ago
- `type` in response has 4 enums:
  - `PERIODIC` interest charged per hour
  - `ON_BORROW` first interest charged on borrow
  - `PERIODIC_CONVERTED` interest charged per hour converted into BNB
  - `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB

Weight(IP): 1

<h3 id="get-interest-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|isolatedSymbol|query|string|false|Isolated symbol|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|archived|query|string|false|Default: false. Set to true for archived data from 6 months ago|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "isolatedSymbol": "BNBUSDT",
      "asset": "BNB",
      "interest": "0.01866667",
      "interestAccuredTime": 1566813600,
      "interestRate": "0.01600000",
      "principal": "36.22000000",
      "type": "ON_BORROW"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-interest-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Interest History, response in descending order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-interest-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» isolatedSymbol|string|true|none|none|
|» asset|string|true|none|none|
|» interest|string|true|none|none|
|» interestAccuredTime|integer(int64)|true|none|none|
|» interestRate|string|true|none|none|
|» principal|string|true|none|none|
|» type|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Force Liquidation Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/forceLiquidationRec?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/forceLiquidationRec`

- Response in descending order

Weight(IP): 1

<h3 id="get-force-liquidation-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|isolatedSymbol|query|string|false|Isolated symbol|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "avgPrice": "0.00388359",
      "executedQty": "31.39000000",
      "orderId": 180015097,
      "price": "0.00388110",
      "qty": "31.39000000",
      "side": "SELL",
      "symbol": "BNBBTC",
      "timeInForce": "GTC",
      "isIsolated": true,
      "updatedTime": 1558941374745
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-force-liquidation-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Force Liquidation History, response in descending order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-force-liquidation-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» avgPrice|string|true|none|none|
|» executedQty|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» qty|string|true|none|none|
|» side|string|true|none|none|
|» symbol|string|true|none|none|
|» timeInForce|string|true|none|none|
|» isIsolated|boolean|true|none|none|
|» updatedTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Cross Margin Account Details (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/account`

Weight(IP): 10

<h3 id="query-cross-margin-account-details-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "created": true,
  "borrowEnabled": true,
  "marginLevel": "11.64405625",
  "collateralMarginLevel": "3.2",
  "totalAssetOfBtc": "6.82728457",
  "totalLiabilityOfBtc": "0.58633215",
  "totalNetAssetOfBtc": "6.24095242",
  "TotalCollateralValueInUSDT": "5.82728457",
  "tradeEnabled": true,
  "transferInEnabled": true,
  "transferOutEnabled": true,
  "accountType": "MARGIN_1",
  "userAssets": [
    {
      "asset": "BTC",
      "borrowed": "0.00000000",
      "free": "0.00499500",
      "interest": "0.00000000",
      "locked": "0.00000000",
      "netAsset": "0.00499500"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-cross-margin-account-details-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin account details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-cross-margin-account-details-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|boolean|true|none|none|
|borrowEnabled|boolean|true|none|none|
|marginLevel|string|true|none|none|
|collateralMarginLevel|string|true|none|none|
|totalAssetOfBtc|string|true|none|none|
|totalLiabilityOfBtc|string|true|none|none|
|totalNetAssetOfBtc|string|true|none|none|
|TotalCollateralValueInUSDT|string|true|none|none|
|tradeEnabled|boolean|true|none|none|
|transferInEnabled|boolean|true|none|none|
|transferOutEnabled|boolean|true|none|none|
|accountType|string|true|none|none|
|userAssets|[object]|true|none|none|
|» asset|string|true|none|none|
|» borrowed|string|true|none|none|
|» free|string|true|none|none|
|» interest|string|true|none|none|
|» locked|string|true|none|none|
|» netAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's Open Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/openOrders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/openOrders`

- If the `symbol` is not sent, orders for all symbols will be returned in an array.
- When all symbols are returned, the number of requests counted against the rate limiter is equal to the number of symbols currently trading on the exchange
- If isIsolated ="TRUE", symbol must be sent.

Weight(IP): 10

<h3 id="query-margin-accounts-open-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "clientOrderId": "ZwfQzuDIGpceVhKW5DvCmO",
    "cummulativeQuoteQty": "0.00000000",
    "executedQty": "0.00000000",
    "icebergQty": "0.00000000",
    "isWorking": true,
    "orderId": 213205622,
    "origQty": "0.30000000",
    "price": "0.00493630",
    "side": "SELL",
    "status": "NEW",
    "stopPrice": "0.00000000",
    "symbol": "BNBBTC",
    "isIsolated": true,
    "time": 1562133008725,
    "timeInForce": "GTC",
    "type": "LIMIT",
    "updateTime": 1562133008725,
    "selfTradePreventionMode": "NONE"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-open-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin open orders list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-accounts-open-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[marginOrderDetail](#schemamarginorderdetail)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account Cancel all Open Orders on a Symbol (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/openOrders?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/margin/openOrders`

- Cancels all active orders on a symbol for margin account.
- This includes OCO orders.

Weight(IP): 1


<h3 id="margin-account-cancel-all-open-orders-on-a-symbol-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BNBUSDT",
    "isIsolated": true,
    "origClientOrderId": "E6APeyTJvkMvLMYMqu1KQ4",
    "orderId": 11,
    "orderListId": -1,
    "clientOrderId": "pXLV6Hz6mprAcVYpVMTGgx",
    "price": "0.089853",
    "origQty": "0.178622",
    "executedQty": "0.000000",
    "cummulativeQuoteQty": "0.000000",
    "status": "CANCELED",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "BUY"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-cancel-all-open-orders-on-a-symbol-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancelled margin orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-account-cancel-all-open-orders-on-a-symbol-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[canceledMarginOrderDetail](#schemacanceledmarginorderdetail) \| [marginOcoOrder](#schemamarginocoorder)]|false|none|none|
|» *anyOf*|[canceledMarginOrderDetail](#schemacanceledmarginorderdetail)|false|none|none|
|» *anyOf*|[marginOcoOrder](#schemamarginocoorder)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's All Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/allOrders?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/allOrders`

- If `orderId` is set, it will get orders >= that orderId. Otherwise most recent orders are returned.
- For some historical orders `cummulativeQuoteQty` will be < 0, meaning the data is not available at this time.

Weight(IP): 200

Request Limit: 60 times/min per IP

<h3 id="query-margin-accounts-all-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|orderId|query|integer(int64)|false|Order id|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "clientOrderId": "ZwfQzuDIGpceVhKW5DvCmO",
    "cummulativeQuoteQty": "0.00000000",
    "executedQty": "0.00000000",
    "icebergQty": "0.00000000",
    "isWorking": true,
    "orderId": 213205622,
    "origQty": "0.30000000",
    "price": "0.00493630",
    "side": "SELL",
    "status": "NEW",
    "stopPrice": "0.00000000",
    "symbol": "BNBBTC",
    "isIsolated": true,
    "time": 1562133008725,
    "timeInForce": "GTC",
    "type": "LIMIT",
    "updateTime": 1562133008725,
    "selfTradePreventionMode": "NONE"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-all-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin order list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-accounts-all-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[marginOrderDetail](#schemamarginorderdetail)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account New OCO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/order/oco?symbol=BNBUSDT&side=SELL&quantity=1&price=218&stopPrice=220&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/order/oco`

Send in a new OCO for a margin account

- Price Restrictions:
  - SELL: Limit Price > Last Price > Stop Price
  - BUY: Limit Price < Last Price < Stop Price
- Quantity Restrictions:
  - Both legs must have the same quantity
  - ICEBERG quantities however do not have to be the same.
- Order Rate Limit
  - OCO counts as 2 orders against the order rate limit.

Weight(UID): 6

<h3 id="margin-account-new-oco-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|listClientOrderId|query|string|false|A unique Id for the entire orderList|
|side|query|string|true|none|
|quantity|query|number(double)|true|none|
|limitClientOrderId|query|string|false|A unique Id for the limit order|
|price|query|number(double)|true|Order price|
|limitIcebergQty|query|number(double)|false|none|
|stopClientOrderId|query|string|false|A unique Id for the stop loss/stop loss limit leg|
|stopPrice|query|number(double)|true|none|
|stopLimitPrice|query|number(double)|false|If provided, stopLimitTimeInForce is required.|
|stopIcebergQty|query|number(double)|false|none|
|stopLimitTimeInForce|query|string|false|none|
|newOrderRespType|query|string|false|Set the response JSON.|
|sideEffectType|query|string|false|Default `NO_SIDE_EFFECT`|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|
|side|SELL|
|side|BUY|
|stopLimitTimeInForce|GTC|
|stopLimitTimeInForce|FOK|
|stopLimitTimeInForce|IOC|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|sideEffectType|NO_SIDE_EFFECT|
|sideEffectType|MARGIN_BUY|
|sideEffectType|AUTO_REPAY|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|

> Example responses

> 200 Response

```json
{
  "orderListId": 0,
  "contingencyType": "OCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "JYVpp3F0f5CAG15DhtrqLp",
  "transactionTime": 1563417480525,
  "symbol": "LTCBTC",
  "marginBuyBorrowAmount": "5",
  "marginBuyBorrowAsset": "BTC",
  "isIsolated": false,
  "orders": [
    {
      "symbol": "LTCBTC",
      "orderId": 2,
      "clientOrderId": "Kk7sqHb9J6mJWTMDVW7Vos"
    },
    {
      "symbol": "LTCBTC",
      "orderId": 3,
      "clientOrderId": "xTXKaGYd4bluPVp78IVRvl"
    }
  ],
  "orderReports": [
    {
      "symbol": "LTCBTC",
      "orderId": 2,
      "orderListId": 0,
      "clientOrderId": "Kk7sqHb9J6mJWTMDVW7Vos",
      "transactTime": 1563417480525,
      "price": "0.000000",
      "origQty": "0.624363",
      "executedQty": "0.000000",
      "cummulativeQuoteQty": "0.000000",
      "status": "NEW",
      "timeInForce": "GTC",
      "type": "STOP_LOSS",
      "side": "BUY",
      "stopPrice": "0.960664"
    },
    {
      "symbol": "LTCBTC",
      "orderId": 3,
      "orderListId": 0,
      "clientOrderId": "xTXKaGYd4bluPVp78IVRvl",
      "transactTime": 1563417480525,
      "price": "0.036435",
      "origQty": "0.624363",
      "executedQty": "0.000000",
      "cummulativeQuoteQty": "0.000000",
      "status": "NEW",
      "timeInForce": "GTC",
      "type": "LIMIT_MAKER",
      "side": "BUY"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-new-oco-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New Margin OCO details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-account-new-oco-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|marginBuyBorrowAmount|string|true|none|will not return if no margin trade happens|
|marginBuyBorrowAsset|string|true|none|will not return if no margin trade happens|
|isIsolated|boolean|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|orderReports|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» stopPrice|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's OCO (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/orderList?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/orderList`

Retrieves a specific OCO based on provided optional parameters

- Either `orderListId` or `origClientOrderId` must be provided

Weight(IP): 10

<h3 id="query-margin-accounts-oco-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|symbol|query|string|false|Mandatory for isolated margin, not supported for cross margin|
|orderListId|query|integer(int64)|false|Order list id|
|origClientOrderId|query|string|false|Order id from client|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
{
  "orderListId": 27,
  "contingencyType": "OCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "h2USkA5YQpaXHPIrkd96xE",
  "transactionTime": 1565245656253,
  "symbol": "LTCBTC",
  "isIsolated": false,
  "orders": [
    [
      {
        "symbol": "LTCBTC",
        "orderId": 4,
        "clientOrderId": "qD1gy3kc3Gx0rihm9Y3xwS"
      },
      {
        "symbol": "LTCBTC",
        "orderId": 5,
        "clientOrderId": "ARzZ9I00CPM8i3NhmU9Ega"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-oco-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin OCO details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-accounts-oco-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account Cancel OCO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/orderList?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/margin/orderList`

Cancel an entire Order List for a margin account

- Canceling an individual leg will cancel the entire OCO
- Either `orderListId` or `listClientOrderId` must be provided

Weight(UID): 1

<h3 id="margin-account-cancel-oco-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|orderListId|query|integer(int64)|false|Order list id|
|listClientOrderId|query|string|false|A unique Id for the entire orderList|
|newClientOrderId|query|string|false|Used to uniquely identify this cancel. Automatically generated by default|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
{
  "orderListId": 0,
  "contingencyType": "OCO",
  "listStatusType": "ALL_DONE",
  "listOrderStatus": "ALL_DONE",
  "listClientOrderId": "C3wyj4WVEktd7u9aVBRXcN",
  "transactionTime": 1574040868128,
  "symbol": "BNBUSDT",
  "isIsolated": false,
  "orders": [
    [
      {
        "symbol": "BNBUSDT",
        "orderId": 2,
        "clientOrderId": "pO9ufTiFGg3nw2fOdgeOXa"
      },
      {
        "symbol": "BNBUSDT",
        "orderId": 3,
        "clientOrderId": "TXOvglzXuaubXAaENpaRCB"
      }
    ]
  ],
  "orderReports": [
    [
      {
        "symbol": "BNBUSDT",
        "origClientOrderId": "pO9ufTiFGg3nw2fOdgeOXa",
        "orderId": 2,
        "orderListId": 0,
        "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
        "price": "1.00000000",
        "origQty": "10.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "CANCELED",
        "timeInForce": "GTC",
        "type": "STOP_LOSS_LIMIT",
        "side": "SELL",
        "stopPrice": "1.00000000"
      },
      {
        "symbol": "BNBUSDT",
        "origClientOrderId": "TXOvglzXuaubXAaENpaRCB",
        "orderId": 3,
        "orderListId": 0,
        "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
        "price": "3.00000000",
        "origQty": "10.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "CANCELED",
        "timeInForce": "GTC",
        "type": "LIMIT_MAKER",
        "side": "SELL"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-cancel-oco-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin OCO details|[marginOcoOrder](#schemamarginocoorder)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's all OCO (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/allOrderList?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/allOrderList`

Retrieves all OCO for a specific margin account based on provided optional parameters

Weight(IP): 200

<h3 id="query-margin-accounts-all-oco-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|symbol|query|string|false|Mandatory for isolated margin, not supported for cross margin|
|fromId|query|string|false|If supplied, neither `startTime` or `endTime` can be provided|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default Value: 500; Max Value: 1000|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "orderListId": 29,
    "contingencyType": "OCO",
    "listStatusType": "EXEC_STARTED",
    "listOrderStatus": "EXECUTING",
    "listClientOrderId": "amEEAXryFzFwYF1FeRpUoZ",
    "transactionTime": 1565245913483,
    "symbol": "LTCBTC",
    "isIsolated": true,
    "orders": [
      [
        {
          "symbol": "LTCBTC",
          "orderId": 4,
          "clientOrderId": "oD7aesZqjEGlZrbtRpy5zB"
        },
        {
          "symbol": "LTCBTC",
          "orderId": 5,
          "clientOrderId": "Jr1h6xirOxgeJOUuYQS7V3"
        }
      ]
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-all-oco-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Margin OCO orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-accounts-all-oco-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» orderListId|integer(int64)|true|none|none|
|» contingencyType|string|true|none|none|
|» listStatusType|string|true|none|none|
|» listOrderStatus|string|true|none|none|
|» listClientOrderId|string|true|none|none|
|» transactionTime|integer(int64)|true|none|none|
|» symbol|string|true|none|none|
|» isIsolated|boolean|true|none|none|
|» orders|[object]|true|none|none|
|» » symbol|string|true|none|none|
|» » orderId|integer(int64)|true|none|none|
|» » clientOrderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's Open OCO (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/openOrderList?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/openOrderList`

Weight(IP): 10

<h3 id="query-margin-accounts-open-oco-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|symbol|query|string|false|Mandatory for isolated margin, not supported for cross margin|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "orderListId": 31,
    "contingencyType": "OCO",
    "listStatusType": "EXEC_STARTED",
    "listOrderStatus": "EXECUTING",
    "listClientOrderId": "wuB13fmulKj3YjdqWEcsnp",
    "transactionTime": 1565246080644,
    "symbol": "LTCBTC",
    "isIsolated": false,
    "orders": [
      [
        {
          "symbol": "LTCBTC",
          "orderId": 4,
          "clientOrderId": "r3EH2N76dHfLoSZWIUw1bT"
        },
        {
          "symbol": "LTCBTC",
          "orderId": 5,
          "clientOrderId": "Cv1SnyPD3qhqpbjpYEHbd2"
        }
      ]
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-open-oco-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Open Margin OCO orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-accounts-open-oco-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» orderListId|integer(int64)|true|none|none|
|» contingencyType|string|true|none|none|
|» listStatusType|string|true|none|none|
|» listOrderStatus|string|true|none|none|
|» listClientOrderId|string|true|none|none|
|» transactionTime|integer(int64)|true|none|none|
|» symbol|string|true|none|none|
|» isIsolated|boolean|true|none|none|
|» orders|[object]|true|none|none|
|» » symbol|string|true|none|none|
|» » orderId|integer(int64)|true|none|none|
|» » clientOrderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Account's Trade List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/myTrades?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/myTrades`

- If `fromId` is set, it will get orders >= that `fromId`. Otherwise most recent trades are returned.

Weight(IP): 10

<h3 id="query-margin-accounts-trade-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|fromId|query|integer(int64)|false|Trade id to fetch from. Default gets most recent trades.|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "commission": "0.00006000",
    "commissionAsset": "BTC",
    "id": 28,
    "isBestMatch": true,
    "isBuyer": true,
    "isMaker": true,
    "orderId": 28,
    "price": "0.02000000",
    "qty": "1.02000000",
    "symbol": "BNBBTC",
    "isIsolated": false,
    "time": 1507725176595
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-accounts-trade-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of margin trades|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-accounts-trade-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[marginTrade](#schemamargintrade)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Max Borrow (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/maxBorrowable?asset=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/maxBorrowable`

- If `isolatedSymbol` is not sent, crossed margin data will be sent.
- `borrowLimit` is also available from https://www.binance.com/en/margin-fee

Weight(IP): 50

<h3 id="query-max-borrow-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|isolatedSymbol|query|string|false|Isolated symbol|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "amount": "1.69248805",
  "borrowLimit": "60"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-max-borrow-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details on max borrow amount|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-max-borrow-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|account's currently max borrowable amount with sufficient system availability|
|borrowLimit|string|true|none|max borrowable amount limited by the account level|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Max Transfer-Out Amount (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/maxTransferable?asset=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/maxTransferable`

- If `isolatedSymbol` is not sent, crossed margin data will be sent.

Weight(IP): 50

<h3 id="query-max-transfer-out-amount-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|isolatedSymbol|query|string|false|Isolated symbol|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "amount": "1.69248805",
  "borrowLimit": "60"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-max-transfer-out-amount-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details on max transferable amount|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-max-transfer-out-amount-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|Account's currently max borrowable amount with sufficient system availability|
|borrowLimit|string|true|none|Max borrowable amount limited by the account level|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Summary of Margin account (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/tradeCoeff?email=me%40email.com&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/tradeCoeff`

Get personal margin level information

Weight(IP): 10

<h3 id="get-summary-of-margin-account-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Email Address|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "normalBar": "1.5",
  "marginCallBar": "1.3",
  "forceLiquidationBar": "1.1"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-summary-of-margin-account-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Summary of Margin Account|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-summary-of-margin-account-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalBar|string|false|none|Account's currently max borrowable amount with sufficient system availability|
|marginCallBar|string|false|none|Max borrowable amount limited by the account level|
|forceLiquidationBar|string|false|none|Liquidation Margin Ratio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Isolated Margin Account Info (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolated/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/isolated/account`

- If "symbols" is not sent, all isolated assets will be returned.
- If "symbols" is sent, only the isolated assets of the sent symbols will be returned.

Weight(IP): 10

<h3 id="query-isolated-margin-account-info-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|false|Max 5 symbols can be sent; separated by ','|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "baseAsset": {
        "asset": "BTC",
        "borrowEnabled": true,
        "borrowed": "0.00000000",
        "free": "0.00000000",
        "interest": "0.00000000",
        "locked": "0.00000000",
        "netAsset": "0.00000000",
        "netAssetOfBtc": "0.00000000",
        "repayEnabled": true,
        "totalAsset": "0.00000000"
      },
      "quoteAsset": {
        "asset": "USDT",
        "borrowEnabled": true,
        "borrowed": "0.00000000",
        "free": "0.00000000",
        "interest": "0.00000000",
        "locked": "0.00000000",
        "netAsset": "0.00000000",
        "netAssetOfBtc": "0.00000000",
        "repayEnabled": true,
        "totalAsset": "0.00000000"
      },
      "symbol": "BTCUSDT",
      "isolatedCreated": true,
      "enabled": true,
      "marginLevel": "0.00000000",
      "marginLevelStatus": "EXCESSIVE",
      "marginRatio": "0.00000000",
      "indexPrice": "10000.00000000",
      "liquidatePrice": "1000.00000000",
      "liquidateRate": "1.00000000",
      "tradeEnabled": true
    }
  ],
  "totalAssetOfBtc": "0.00000000",
  "totalLiabilityOfBtc": "0.00000000",
  "totalNetAssetOfBtc": "0.00000000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-isolated-margin-account-info-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isolated Margin Account Info when "symbols" is not sent|[isolatedMarginAccountInfo](#schemaisolatedmarginaccountinfo)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable Isolated Margin Account (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolated/account?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/isolated/account`

Enable isolated margin account for a specific symbol.

Weight(UID): 300

<h3 id="enable-isolated-margin-account-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "symbol": "BTCUSDT"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="enable-isolated-margin-account-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isolated Margin Account status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="enable-isolated-margin-account-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|symbol|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable Isolated Margin Account (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolated/account?symbol=BNBUSDT&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/margin/isolated/account`

Disable isolated margin account for a specific symbol. Each trading pair can only be deactivated once every 24 hours .

Weight(UID): 300

<h3 id="disable-isolated-margin-account-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "symbol": "BTCUSDT"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="disable-isolated-margin-account-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isolated Margin Account status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="disable-isolated-margin-account-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|symbol|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Enabled Isolated Margin Account Limit (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolated/accountLimit?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/isolated/accountLimit`

Query enabled isolated margin account limit.

Weight(IP): 1

<h3 id="query-enabled-isolated-margin-account-limit-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "enabledAccount": 5,
  "maxAccount": 20
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-enabled-isolated-margin-account-limit-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of enabled Isolated Margin Account and its limit|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-enabled-isolated-margin-account-limit-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledAccount|integer(int64)|true|none|none|
|maxAccount|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get All Isolated Margin Symbol(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolated/allPairs?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/isolated/allPairs`

Weight(IP): 10

<h3 id="get-all-isolated-margin-symboluserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BTCUSDT",
    "base": "BTC",
    "quote": "USDT",
    "isMarginTrade": true,
    "isBuyAllowed": true,
    "isSellAllowed": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-all-isolated-margin-symboluserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All Isolated Margin Symbols|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-all-isolated-margin-symboluserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» symbol|string|true|none|none|
|» base|string|true|none|none|
|» quote|string|true|none|none|
|» isMarginTrade|boolean|true|none|none|
|» isBuyAllowed|boolean|true|none|none|
|» isSellAllowed|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get BNB Burn Status(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/bnbBurn?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/bnbBurn`

Weight(IP): 1

<h3 id="get-bnb-burn-statususerdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "spotBNBBurn": true,
  "interestBNBBurn": false
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-bnb-burn-statususerdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status on BNB to pay for trading fees|[bnbBurnStatus](#schemabnbburnstatus)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Toggle BNB Burn On Spot Trade And Margin Interest (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/bnbBurn?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/bnbBurn`

- "spotBNBBurn" and "interestBNBBurn" should be sent at least one.

Weight(IP): 1

<h3 id="toggle-bnb-burn-on-spot-trade-and-margin-interest-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spotBNBBurn|query|string|false|Determines whether to use BNB to pay for trading fees on SPOT|
|interestBNBBurn|query|string|false|Determines whether to use BNB to pay for margin loan's interest|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|spotBNBBurn|true|
|spotBNBBurn|false|
|interestBNBBurn|true|
|interestBNBBurn|false|

> Example responses

> 200 Response

```json
{
  "spotBNBBurn": true,
  "interestBNBBurn": false
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="toggle-bnb-burn-on-spot-trade-and-margin-interest-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status on BNB to pay for trading fees|[bnbBurnStatus](#schemabnbburnstatus)|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Interest Rate History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/interestRateHistory?asset=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/interestRateHistory`

The max interval between startTime and endTime is 30 days.

Weight(IP): 1

<h3 id="margin-interest-rate-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|vipLevel|query|integer(int32)|false|Defaults to user's vip level|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "asset": "BTC",
    "dailyInterestRate": "0.00025000",
    "timestamp": 1611544731000,
    "vipLevel": 1
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-interest-rate-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin Interest Rate History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-interest-rate-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» dailyInterestRate|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|
|» vipLevel|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Cross Margin Fee Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/crossMarginData?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/crossMarginData`

Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee

Weight(IP): 1 when coin is specified; 5 when the coin parameter is omitted

<h3 id="query-cross-margin-fee-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vipLevel|query|integer(int32)|false|Defaults to user's vip level|
|coin|query|string|false|Coin name|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "vipLevel": 0,
    "coin": "BTC",
    "transferIn": true,
    "borrowable": true,
    "dailyInterest": "0.00026125",
    "yearlyInterest": "0.0953",
    "borrowLimit": "180",
    "marginablePairs": [
      "BNBBTC",
      "TRXBTC",
      "ETHBTC",
      "BTCUSDT"
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-cross-margin-fee-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cross Margin Fee Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-cross-margin-fee-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» vipLevel|integer(int32)|true|none|none|
|» coin|string|true|none|none|
|» transferIn|boolean|true|none|none|
|» borrowable|boolean|true|none|none|
|» dailyInterest|string|true|none|none|
|» yearlyInterest|string|true|none|none|
|» borrowLimit|string|true|none|none|
|» marginablePairs|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Isolated Margin Fee Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolatedMarginData?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/isolatedMarginData`

Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee

Weight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted

<h3 id="query-isolated-margin-fee-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vipLevel|query|integer(int32)|false|Defaults to user's vip level|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "vipLevel": 0,
    "symbol": "BTCUSDT",
    "leverage": "10",
    "data": [
      {
        "coin": "BTC",
        "dailyInterest": "0.00026125",
        "borrowLimit": "270"
      },
      {
        "coin": "USDT",
        "dailyInterest": "0.000475",
        "borrowLimit": "2100000"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-isolated-margin-fee-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isolated Margin Fee Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-isolated-margin-fee-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» vipLevel|integer(int32)|false|none|none|
|» symbol|string|false|none|none|
|» leverage|string|false|none|none|
|» data|[object]|false|none|none|
|» » coin|string|false|none|none|
|» » dailyInterest|string|false|none|none|
|» » borrowLimit|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Isolated Margin Tier Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/isolatedMarginTier?symbol=BNBUSDT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/isolatedMarginTier`

Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data

Weight(IP): 1

<h3 id="query-isolated-margin-tier-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|tier|query|string|false|All margin tier data will be returned if tier is omitted|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "BTCUSDT",
    "tier": 1,
    "effectiveMultiple": "10",
    "initialRiskRatio": "1.111",
    "liquidationRiskRatio": "1.05",
    "baseAssetMaxBorrowable": "9",
    "quoteAssetMaxBorrowable": "70000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-isolated-margin-tier-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isolated Margin Tier Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-isolated-margin-tier-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» symbol|string|false|none|none|
|» tier|integer(int32)|false|none|none|
|» effectiveMultiple|string|false|none|none|
|» initialRiskRatio|string|false|none|none|
|» liquidationRiskRatio|string|false|none|none|
|» baseAssetMaxBorrowable|string|false|none|none|
|» quoteAssetMaxBorrowable|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Current Margin Order Count Usage (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/rateLimit/order?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/rateLimit/order`

Displays the user's current margin order count usage for all intervals.

Weight(IP): 20

<h3 id="query-current-margin-order-count-usage-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|symbol|query|string|false|isolated symbol, mandatory for isolated margin|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "rateLimitType": "ORDERS",
    "interval": "SECOND",
    "intervalNum": 10,
    "limit": 10000,
    "count": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-current-margin-order-count-usage-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Usage.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-current-margin-order-count-usage-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» rateLimitType|string|true|none|none|
|» interval|string|true|none|none|
|» intervalNum|integer(int64)|true|none|none|
|» limit|integer(int64)|true|none|none|
|» count|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cross margin collateral ratio (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/margin/crossMarginCollateralRatio \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/crossMarginCollateralRatio`


Weight(IP): 100

> Example responses

> 200 Response

```json
[
  {
    "collaterals": [
      {
        "minUsdValue": "0",
        "maxUsdValue": "13000000",
        "discountRate": "1"
      }
    ],
    "assetNames": [
      "BNX"
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cross-margin-collateral-ratio-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin collateral ratio|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="cross-margin-collateral-ratio-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» collaterals|[object]|true|none|none|
|» » minUsdValue|string|true|none|none|
|» » maxUsdValue|string|true|none|none|
|» » discountRate|string|true|none|none|
|» assetNames|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Small Liability Exchange Coin List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/exchange-small-liability?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/exchange-small-liability`

Query the coins which can be small liability exchange

Weight(UID): 100

<h3 id="get-small-liability-exchange-coin-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "asset": "ETH",
    "interest": "0.00083334",
    "principal": "0.001",
    "liabilityAsset": "USDT",
    "liabilityQty": 0.3552
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-small-liability-exchange-coin-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|coin list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-small-liability-exchange-coin-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» interest|string|true|none|none|
|» principal|string|true|none|none|
|» liabilityAsset|string|true|none|none|
|» liabilityQty|number(float)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Small Liability Exchange History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/exchange-small-liability-history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/exchange-small-liability-history`

Get Small liability Exchange History

Weight(UID): 100

<h3 id="get-small-liability-exchange-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "asset": "ETH",
      "amount": "0.00083434",
      "targetAsset": "BUSD",
      "targetAmount": "1.37576819",
      "bizType": "EXCHANGE_SMALL_LIABILITY",
      "timestamp": 1672801339253
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-small-liability-exchange-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|coin list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-small-liability-exchange-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|rows|[object]|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» targetAsset|string|true|none|none|
|» targetAmount|string|true|none|none|
|» bizType|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get a future hourly interest rate (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/next-hourly-interest-rate?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/next-hourly-interest-rate`

Get user the next hourly estimate interest

Weight(UID): 100

<h3 id="get-a-future-hourly-interest-rate-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assets|query|string|false|List of assets, separated by commas, up to 20|
|isIsolated|query|string|false|for isolated margin or not, "TRUE", "FALSE"|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|

> Example responses

> 200 Response

```json
[
  {
    "asset": "BTC",
    "nextHourlyInterestRate": "0.00000571"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-a-future-hourly-interest-rate-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|hourly interest|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-a-future-hourly-interest-rate-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» nextHourlyInterestRate|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get cross or isolated margin capital flow(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/capital-flow?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/capital-flow`

Get cross or isolated margin capital flow

Weight(IP): 100

<h3 id="get-cross-or-isolated-margin-capital-flowuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|symbol|query|string|false|Required when querying isolated data|
|type|query|string|false|none|
|startTime|query|integer(int64)|false|Only supports querying the data of the last 90 days|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|fromId|query|integer(int64)|false|If fromId is set, the data with id > fromId will be returned. Otherwise the latest data will be returned|
|limit|query|integer(int64)|false|The number of data items returned each time is limited. Default 500; Max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|TRANSFER|
|type|BORROW|
|type|REPAY|
|type|BUY_INCOME|
|type|BUY_EXPENSE|
|type|SELL_INCOME|
|type|SELL_EXPENSE|
|type|TRADING_COMMISSION|
|type|BUY_LIQUIDATION|
|type|SELL_LIQUIDATION|
|type|REPAY_LIQUIDATION|
|type|OTHER_LIQUIDATION|
|type|LIQUIDATION_FEE|
|type|SMALL_BALANCE_CONVERT|
|type|COMMISSION_RETURN|
|type|SMALL_CONVERT|

> Example responses

> 200 Response

```json
[
  {
    "id": 123456,
    "tranId": 123123,
    "timestamp": 1691116657000,
    "asset": "USDT",
    "symbol": "BTCUSDT",
    "type": "BORROW",
    "amount": "101"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-cross-or-isolated-margin-capital-flowuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin capital flow|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-cross-or-isolated-margin-capital-flowuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer(int64)|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» timestamp|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» symbol|string|true|none|none|
|» type|string|true|none|none|
|» amount|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get tokens or symbols delist schedule for cross margin and isolated margin (MARKET_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/delist-schedule?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/delist-schedule`

Get tokens or symbols delist schedule for cross margin and isolated margin

Weight(IP): 100

<h3 id="get-tokens-or-symbols-delist-schedule-for-cross-margin-and-isolated-margin-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "delistTime": 1686161202000,
    "crossMarginAssets": [
      "BTC"
    ],
    "isolatedMarginSymbols": [
      "BNBUSDT"
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-tokens-or-symbols-delist-schedule-for-cross-margin-and-isolated-margin-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|tokens or symbols delist schedule|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-tokens-or-symbols-delist-schedule-for-cross-margin-and-isolated-margin-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» delistTime|integer(int64)|false|none|none|
|» crossMarginAssets|[string]|false|none|none|
|» isolatedMarginSymbols|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Margin Available Inventory (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/available-inventory?type=MARGIN&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/available-inventory`

Margin available Inventory query

Weight(UID): 50

<h3 id="query-margin-available-inventory-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|MARGIN|
|type|ISOLATED|

> Example responses

> 200 Response

```json
{
  "assets": {
    "MATIC": "100000000",
    "STPT": "100000000",
    "TVK": "100000000",
    "SHIB": "97409653"
  },
  "updateTime": 1699272487
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-margin-available-inventory-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin available Inventory|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-margin-available-inventory-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|object|true|none|none|
|» MATIC|string|true|none|none|
|» STPT|string|true|none|none|
|» TVK|string|true|none|none|
|» SHIB|string|true|none|none|
|updateTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin manual liquidation(MARGIN)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/manual-liquidation?type=MARGIN&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/manual-liquidation`

Margin manual liquidation

Weight(UID): 3000

<h3 id="margin-manual-liquidationmargin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|symbol|query|string|false|none|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|MARGIN|
|type|ISOLATED|

> Example responses

> 200 Response

```json
[
  {
    "asset": "ETH",
    "interest": "0.00083334",
    "principal": "0.001",
    "liabilityAsset": "USDT",
    "liabilityQty": 0.3552
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-manual-liquidationmargin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin manual liquidation|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-manual-liquidationmargin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» interest|string|true|none|none|
|» principal|string|true|none|none|
|» liabilityAsset|string|true|none|none|
|» liabilityQty|number(float)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account New OTO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/order/oto?symbol=BNBUSDT&workingType=LIMIT&workingSide=BUY&workingPrice=0&workingQuantity=0&workingIcebergQty=0&pendingType=LIMIT&pendingSide=BUY&pendingQuantity=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/order/oto`

Post a new `OTO` order for margin account:
- An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
- The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled.
- If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired.
- When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status.
- OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.

Weight(UID): 6

<h3 id="margin-account-new-oto-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|listClientOrderId|query|string|false|Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.|
|newOrderRespType|query|string|false|Set the response JSON.|
|sideEffectType|query|string|false|Default `NO_SIDE_EFFECT`|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|autoRepayAtCancel|query|boolean|false|Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true|
|workingType|query|string|true|Supported values: LIMIT,LIMIT_MAKER|
|workingSide|query|string|true|BUY,SELL|
|workingClientOrderId|query|string|false|Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.|
|workingPrice|query|number(double)|true|none|
|workingQuantity|query|number(double)|true|Sets the quantity for the working order.|
|workingIcebergQty|query|number(double)|true|This can only be used if workingTimeInForce is GTC.|
|workingTimeInForce|query|string|false|GTC, IOC, FOK|
|pendingType|query|string|true|Supported values: Order Types Note that MARKET orders using quoteOrderQty are not supported.|
|pendingSide|query|string|true|BUY,SELL|
|pendingClientOrderId|query|string|false|Arbitrary unique ID among open orders for the pending order. Automatically generated if not sent.|
|pendingPrice|query|number(double)|false|none|
|pendingStopPrice|query|number(double)|false|none|
|pendingTrailingDelta|query|number(double)|false|none|
|pendingQuantity|query|number(double)|true|Sets the quantity for the pending order.|
|pendingIcebergQty|query|number(double)|false|This can only be used if pendingTimeInForce is GTC.|
|pendingTimeInForce|query|string|false|GTC, IOC, FOK|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|sideEffectType|NO_SIDE_EFFECT|
|sideEffectType|MARGIN_BUY|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|
|workingType|LIMIT|
|workingType|LIMIT_MAKER|
|workingSide|BUY|
|workingSide|SELL|
|workingTimeInForce|GTC|
|workingTimeInForce|IOC|
|workingTimeInForce|FOK|
|pendingType|LIMIT|
|pendingType|MARKET|
|pendingType|STOP_LOSS|
|pendingType|STOP_LOSS_LIMIT|
|pendingType|TAKE_PROFIT|
|pendingType|TAKE_PROFIT_LIMIT|
|pendingType|LIMIT_MAKER|
|pendingSide|BUY|
|pendingSide|SELL|
|pendingTimeInForce|GTC|
|pendingTimeInForce|IOC|
|pendingTimeInForce|FOK|

> Example responses

> 200 Response

```json
{
  "orderListId": 13551,
  "contingencyType": "OTO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "JDuOrsu0Ge8GTyvx8J7VTD",
  "transactionTime": 1725521998054,
  "symbol": "BTCUSDT",
  "isIsolated": false,
  "orders": [
    [
      {
        "symbol": "BTCUSDT",
        "orderId": 29896699,
        "clientOrderId": "y8RB6tQEMuHUXybqbtzTxk"
      },
      {
        "symbol": "BTCUSDT",
        "orderId": 29896700,
        "clientOrderId": "dKQEdh5HhXb7Lpp85jz1dQ"
      }
    ]
  ],
  "orderReports": [
    [
      {
        "symbol": "BTCUSDT",
        "orderId": 29896699,
        "orderListId": 13551,
        "clientOrderId": "y8RB6tQEMuHUXybqbtzTxk",
        "transactTime": 1725521998054,
        "price": "80000.00000000",
        "origQty": "0.02000000",
        "executedQty": "0",
        "cummulativeQuoteQty": "0",
        "status": "NEW",
        "timeInForce": "GTC",
        "type": "LIMIT",
        "side": "SELL",
        "selfTradePreventionMode": "NONE"
      },
      {
        "symbol": "BTCUSDT",
        "orderId": 29896700,
        "orderListId": 13551,
        "clientOrderId": "dKQEdh5HhXb7Lpp85jz1dQ",
        "transactTime": 1725521998054,
        "price": "50000.00000000",
        "origQty": "0.02000000",
        "executedQty": "0",
        "cummulativeQuoteQty": "0",
        "status": "PENDING_NEW",
        "timeInForce": "GTC",
        "type": "LIMIT",
        "side": "BUY",
        "selfTradePreventionMode": "NONE"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-new-oto-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OTO order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-account-new-oto-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|orderReports|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» selfTradePreventionMode|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Account New OTOCO (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/order/otoco?symbol=BNBUSDT&workingType=LIMIT&workingSide=BUY&workingPrice=0&workingQuantity=0&workingIcebergQty=0&pendingSide=BUY&pendingQuantity=0&pendingAboveType=LIMIT_MAKER&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/order/otoco`

Post a new `OTOCO` order for margin account:
- An `OTOCO` (One-Triggers-the-Other-Cancel-the-Other) is an order list comprised of 3 orders
- The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book.
  - The behavior of the working order is the same as the `OTO`.
- `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled.
  - The rules of the pending above and pending below follow the same rules as the Order List `OCO`.
- OTOCOs add 3 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter.

Weight(UID): 6

<h3 id="margin-account-new-otoco-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|isIsolated|query|string|false|* `TRUE` - For isolated margin<br>* `FALSE` - Default, not for isolated margin|
|sideEffectType|query|string|false|Default `NO_SIDE_EFFECT`|
|autoRepayAtCancel|query|boolean|false|Only when MARGIN_BUY order takes effect, true means that the debt generated by the order needs to be repay after the order is cancelled. The default is true|
|listClientOrderId|query|string|false|Arbitrary unique ID among open order lists. Automatically generated if not sent.<br>A new order list with the same `listClientOrderId` is accepted only when the previous one is filled or completely expired.<br>`listClientOrderId` is distinct from the `workingClientOrderId` and the `pendingClientOrderId`.|
|newOrderRespType|query|string|false|Set the response JSON.|
|selfTradePreventionMode|query|string|false|The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.|
|workingType|query|string|true|Supported values: LIMIT,LIMIT_MAKER|
|workingSide|query|string|true|BUY,SELL|
|workingClientOrderId|query|string|false|Arbitrary unique ID among open orders for the working order. Automatically generated if not sent.|
|workingPrice|query|number(double)|true|none|
|workingQuantity|query|number(double)|true|Sets the quantity for the working order.|
|workingIcebergQty|query|number(double)|true|This can only be used if workingTimeInForce is GTC.|
|workingTimeInForce|query|string|false|GTC, IOC, FOK|
|pendingSide|query|string|true|BUY,SELL|
|pendingQuantity|query|number(double)|true|Sets the quantity for the pending order.|
|pendingAboveType|query|string|true|Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT|
|pendingAboveClientOrderId|query|string|false|Arbitrary unique ID among open orders for the pending above order. Automatically generated if not sent.|
|pendingAbovePrice|query|number(double)|false|none|
|pendingAboveStopPrice|query|number(double)|false|none|
|pendingAboveTrailingDelta|query|number(double)|false|none|
|pendingAboveIcebergQty|query|number(double)|false|This can only be used if pendingAboveTimeInForce is GTC.|
|pendingAboveTimeInForce|query|string|false|none|
|pendingBelowType|query|string|false|Supported values: LIMIT_MAKER, STOP_LOSS, and STOP_LOSS_LIMIT|
|pendingBelowClientOrderId|query|string|false|Arbitrary unique ID among open orders for the pending below order. Automatically generated if not sent.|
|pendingBelowPrice|query|number(double)|false|none|
|pendingBelowStopPrice|query|number(double)|false|none|
|pendingBelowTrailingDelta|query|number(double)|false|none|
|pendingBelowIcebergQty|query|number(double)|false|This can only be used if pendingBelowTimeInForce is GTC.|
|pendingBelowTimeInForce|query|string|false|none|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isIsolated|TRUE|
|isIsolated|FALSE|
|sideEffectType|NO_SIDE_EFFECT|
|sideEffectType|MARGIN_BUY|
|newOrderRespType|ACK|
|newOrderRespType|RESULT|
|newOrderRespType|FULL|
|selfTradePreventionMode|EXPIRE_TAKER|
|selfTradePreventionMode|EXPIRE_MAKER|
|selfTradePreventionMode|EXPIRE_BOTH|
|selfTradePreventionMode|NONE|
|workingType|LIMIT|
|workingType|LIMIT_MAKER|
|workingSide|BUY|
|workingSide|SELL|
|workingTimeInForce|GTC|
|workingTimeInForce|IOC|
|workingTimeInForce|FOK|
|pendingSide|BUY|
|pendingSide|SELL|
|pendingAboveType|LIMIT_MAKER|
|pendingAboveType|STOP_LOSS|
|pendingAboveType|STOP_LOSS_LIMIT|
|pendingAboveTimeInForce|GTC|
|pendingAboveTimeInForce|IOC|
|pendingAboveTimeInForce|FOK|
|pendingBelowType|LIMIT_MAKER|
|pendingBelowType|STOP_LOSS|
|pendingBelowType|STOP_LOSS_LIMIT|
|pendingBelowTimeInForce|GTC|
|pendingBelowTimeInForce|IOC|
|pendingBelowTimeInForce|FOK|

> Example responses

> 200 Response

```json
{
  "orderListId": 13551,
  "contingencyType": "OTOCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "u2AUo48LLef5qVenRtwJZy",
  "transactionTime": 1725521881300,
  "symbol": "BNBUSDT",
  "isIsolated": false,
  "orders": [
    [
      {
        "symbol": "BNBUSDT",
        "orderId": 28282534,
        "clientOrderId": "IfYDxvrZI4kiyqYpRH13iI"
      },
      {
        "symbol": "BNBUSDT",
        "orderId": 28282535,
        "clientOrderId": "0HCSsPRxVfW8BkTUy9z4np"
      },
      {
        "symbol": "BNBUSDT",
        "orderId": 28282536,
        "clientOrderId": "dypsgdxWnLY75kwT930cbD"
      }
    ]
  ],
  "orderReports": [
    [
      {
        "symbol": "BNBUSDT",
        "orderId": 28282534,
        "orderListId": 13509,
        "clientOrderId": "IfYDxvrZI4kiyqYpRH13iI",
        "transactTime": 1725521881300,
        "price": "300.00000000",
        "origQty": "1.00000000",
        "executedQty": "0",
        "cummulativeQuoteQty": "0",
        "status": "NEW",
        "timeInForce": "GTC",
        "type": "LIMIT",
        "side": "BUY",
        "selfTradePreventionMode": "NONE"
      },
      {
        "symbol": "BNBUSDT",
        "orderId": 28282535,
        "orderListId": 13509,
        "clientOrderId": "0HCSsPRxVfW8BkTUy9z4np",
        "transactTime": 1725521881300,
        "price": "0E-8",
        "origQty": "1.00000000",
        "executedQty": "0",
        "cummulativeQuoteQty": "0",
        "status": "PENDING_NEW",
        "timeInForce": "GTC",
        "type": "STOP_LOSS",
        "side": "SELL",
        "stopPrice": "299.00000000",
        "selfTradePreventionMode": "NONE"
      },
      {
        "symbol": "BNBUSDT",
        "orderId": 28282536,
        "orderListId": 13509,
        "clientOrderId": "dypsgdxWnLY75kwT930cbD",
        "transactTime": 1725521881300,
        "price": "301.00000000",
        "origQty": "1.00000000",
        "executedQty": "0",
        "cummulativeQuoteQty": "0",
        "status": "PENDING_NEW",
        "timeInForce": "GTC",
        "type": "LIMIT_MAKER",
        "side": "SELL",
        "selfTradePreventionMode": "NONE"
      }
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-account-new-otoco-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OTOCO order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-account-new-otoco-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|orders|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|orderReports|[object]|true|none|none|
|» symbol|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderListId|integer(int64)|true|none|none|
|» clientOrderId|string|true|none|none|
|» transactTime|integer(int64)|true|none|none|
|» price|string|true|none|none|
|» origQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» cummulativeQuoteQty|string|true|none|none|
|» status|string|true|none|none|
|» timeInForce|string|true|none|none|
|» type|string|true|none|none|
|» side|string|true|none|none|
|» selfTradePreventionMode|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Adjust cross margin max leverage (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/margin/max-leverage?maxLeverage=3&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/margin/max-leverage`

Adjust cross margin max leverage

Weight(UID): 3000

<h3 id="adjust-cross-margin-max-leverage-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxLeverage|query|integer|true|Can only adjust 3 or 5|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="adjust-cross-margin-max-leverage-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Adjust result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="adjust-cross-margin-max-leverage-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Liability Coin Leverage Bracket in Cross Margin Pro Mode (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/margin/leverageBracket \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/margin/leverageBracket`

Liability Coin Leverage Bracket in Cross Margin Pro Mode

Weight(IP): 1

> Example responses

> 200 Response

```json
[
  {
    "assetNames": [
      "BTC"
    ],
    "rank": 1,
    "brackets": [
      {
        "leverage": 10,
        "maxDebt": 1000000,
        "maintenanceMarginRate": 0.02,
        "initialMarginRate": 0.1112,
        "fastNum": 60000
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-liability-coin-leverage-bracket-in-cross-margin-pro-mode-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Leverage info|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="query-liability-coin-leverage-bracket-in-cross-margin-pro-mode-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» assetNames|[string]|true|none|none|
|» rank|integer|true|none|none|
|» brackets|[object]|true|none|none|
|» » leverage|integer|false|none|none|
|» » maxDebt|number(double)|false|none|none|
|» » maintenanceMarginRate|number(double)|false|none|none|
|» » initialMarginRate|number(double)|false|none|none|
|» » fastNum|number(double)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-wallet">Wallet</h1>

Wallet Endpoints

## System Status (System)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/system/status \
  -H 'Accept: application/json'
```

`GET /sapi/v1/system/status`

Fetch system status.

Weight(IP): 1

> Example responses

> 200 Response

```json
{
  "status": 0,
  "msg": "normal"
}
```

<h3 id="system-status-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="system-status-system-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer(int32)|true|none|0: normal, 1：system maintenance|
|msg|string|true|none|"normal", "system_maintenance"|

<aside class="success">
This operation does not require authentication
</aside>

## All Coins' Information (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/config/getall?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/config/getall`

Get information of coins (available for deposit and withdraw) for user.

Weight(IP): 10

<h3 id="all-coins-information-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "coin": "BTC",
    "depositAllEnable": true,
    "free": "0.00000000",
    "freeze": "0.00000000",
    "ipoable": "0.00000000",
    "ipoing": "0.00000000",
    "isLegalMoney": false,
    "locked": "0.00000000",
    "name": "Bitcoin",
    "networkList": [
      {
        "addressRegex": "^(bnb1)[0-9a-z]{38}$",
        "coin": "BTC",
        "depositDesc": "Wallet Maintenance, Deposit Suspended",
        "depositEnable": false,
        "isDefault": false,
        "memoRegex": "^[0-9A-Za-z\\-_]{1,120}$",
        "minConfirm": 1,
        "name": "BEP2",
        "network": "ETH",
        "specialTips": "Both a MEMO and an Address are required to successfully deposit your BEP2-BTCB tokens to Binance.",
        "unLockConfirm": 0,
        "withdrawDesc": "Wallet Maintenance, Withdrawal Suspended",
        "withdrawEnable": false,
        "withdrawFee": "0.00000220",
        "withdrawIntegerMultiple": "0.00000001",
        "withdrawMax": "9999999999.99999999",
        "withdrawMin": "0.00000440",
        "sameAddress": true
      }
    ],
    "storage": "0.00000000",
    "trading": true,
    "withdrawAllEnable": true,
    "withdrawing": "0.00000000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="all-coins-information-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All coins details information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="all-coins-information-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» coin|string|true|none|none|
|» depositAllEnable|boolean|true|none|none|
|» free|string|true|none|none|
|» freeze|string|true|none|none|
|» ipoable|string|true|none|none|
|» ipoing|string|true|none|none|
|» isLegalMoney|boolean|true|none|none|
|» locked|string|true|none|none|
|» name|string|true|none|none|
|» networkList|[object]|true|none|none|
|» » addressRegex|string|true|none|none|
|» » coin|string|true|none|none|
|» » depositDesc|string|true|none|shown only when "depositEnable" is false.|
|» » depositEnable|boolean|true|none|none|
|» » isDefault|boolean|true|none|none|
|» » memoRegex|string|true|none|none|
|» » minConfirm|integer(int64)|true|none|min number for balance confirmation.|
|» » name|string|true|none|none|
|» » network|string|true|none|none|
|» » specialTips|string|true|none|none|
|» » unLockConfirm|integer(int64)|true|none|confirmation number for balance unlock.|
|» » withdrawDesc|string|true|none|shown only when "withdrawEnable" is false|
|» » withdrawEnable|boolean|true|none|none|
|» » withdrawFee|string|true|none|none|
|» » withdrawIntegerMultiple|string|true|none|none|
|» » withdrawMax|string|true|none|none|
|» » withdrawMin|string|true|none|none|
|» » sameAddress|boolean|true|none|none|
|» storage|string|true|none|none|
|» trading|boolean|true|none|none|
|» withdrawAllEnable|boolean|true|none|none|
|» withdrawing|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Daily Account Snapshot (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/accountSnapshot?type=SPOT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/accountSnapshot`

- The query time period must be less than 30 days
- Support query within the last one month only
- If startTimeand endTime not sent, return records of the last 7 days by default

Weight(IP): 2400

<h3 id="daily-account-snapshot-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|SPOT|
|type|MARGIN|
|type|FUTURES|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "msg": "",
  "snapshotVos": [
    {
      "data": {
        "balances": [
          {
            "asset": "BTC",
            "free": "0.2",
            "locked": "0.001"
          }
        ],
        "totalAssetOfBtc": "0.09905021"
      },
      "type": "spot",
      "updateTime": 1576281599000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="daily-account-snapshot-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Snapshot|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="daily-account-snapshot-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[snapshotSpot](#schemasnapshotspot)|false|none|none|
|*oneOf*|[snapshotMargin](#schemasnapshotmargin)|false|none|none|
|*oneOf*|[snapshotFutures](#schemasnapshotfutures)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Disable Fast Withdraw Switch (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/account/disableFastWithdrawSwitch?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/account/disableFastWithdrawSwitch`

- This request will disable fastwithdraw switch under your account.
- You need to enable "trade" option for the api key which requests this endpoint.

Weight(IP): 1

<h3 id="disable-fast-withdraw-switch-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="disable-fast-withdraw-switch-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable Fast Withdraw Switch (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/account/enableFastWithdrawSwitch?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/account/enableFastWithdrawSwitch`

- This request will enable fastwithdraw switch under your account. You need to enable "trade" option for the api key which requests this endpoint.
- When Fast Withdraw Switch is on, transferring funds to a Binance account will be done instantly. There is no on-chain transaction, no transaction ID and no withdrawal fee.

Weight(IP): 1

<h3 id="enable-fast-withdraw-switch-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="enable-fast-withdraw-switch-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Withdraw (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/withdraw/apply?coin=BNB&address=string&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/capital/withdraw/apply`

Submit a withdraw request.

- If `network` not send, return with default network of the coin.
- You can get `network` and `isDefault` in `networkList` of a coin in the response of `Get /sapi/v1/capital/config/getall (HMAC SHA256)`.

Weight(IP): 1

<h3 id="withdraw-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coin|query|string|true|Coin name|
|withdrawOrderId|query|string|false|Client id for withdraw|
|network|query|string|false|none|
|address|query|string|true|none|
|addressTag|query|string|false|Secondary address identifier for coins like XRP,XMR etc.|
|amount|query|number(double)|true|none|
|transactionFeeFlag|query|boolean|false|When making internal transfer<br>- `true` ->  returning the fee to the destination account;<br>- `false` -> returning the fee back to the departure account.|
|name|query|string|false|none|
|walletType|query|integer(int32)|false|The wallet type for withdraw，0-Spot wallet, 1- Funding wallet. Default is Spot wallet|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "id": "7213fea8e94b4a5593d507237e5a555b"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="withdraw-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transafer Id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="withdraw-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Deposit History(supporting network) (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/deposit/hisrec?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/deposit/hisrec`

Fetch deposit history.

- Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days.
- If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days.

Weight(IP): 1

<h3 id="deposit-historysupporting-network-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coin|query|string|false|Coin name|
|status|query|integer(int32)|false|* `0` - pending<br>* `6` - credited but cannot withdraw<br>* `1` - success|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "amount": "0.00999800",
    "coin": "PAXG",
    "network": "ETH",
    "status": 1,
    "address": "0x788cabe9236ce061e5a892e1a59395a81fc8d62c",
    "addressTag": "",
    "txId": "0xaad4654a3234aa6118af9b4b335f5ae81c360b2394721c019b5d1e75328b09f3",
    "insertTime": 1599621997000,
    "transferType": 0,
    "unlockConfirm": "12/12",
    "confirmTimes": "12/12"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="deposit-historysupporting-network-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of deposits|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="deposit-historysupporting-network-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» amount|string|true|none|none|
|» coin|string|true|none|none|
|» network|string|true|none|none|
|» status|integer(int32)|true|none|none|
|» address|string|true|none|none|
|» addressTag|string|true|none|none|
|» txId|string|true|none|none|
|» insertTime|integer(int64)|true|none|none|
|» transferType|integer(int32)|true|none|none|
|» unlockConfirm|string|true|none|confirm times for unlocking|
|» confirmTimes|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Withdraw History (supporting network) (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/withdraw/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/withdraw/history`

Fetch withdraw history.

This endpoint specifically uses per second UID rate limit, user's total second level IP rate limit is 180000/second. Response from the endpoint contains header key X-SAPI-USED-UID-WEIGHT-1S, which defines weight used by the current IP.

- `network` may not be in the response for old withdraw.
- Please notice the default `startTime` and `endTime` to make sure that time interval is within 0-90 days.
- If both `startTime` and `endTime` are sent, time between `startTime` and `endTime` must be less than 90 days
- If withdrawOrderId is sent, time between startTime and endTime must be less than 7 days.
- If withdrawOrderId is sent, startTime and endTime are not sent, will return last 7 days records by default.

Weight(UID): 18000
Request Limit: 10 requests per second

<h3 id="withdraw-history-supporting-network-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coin|query|string|false|Coin name|
|withdrawOrderId|query|string|false|none|
|status|query|integer(int32)|false|* `0` - Email Sent<br>* `1` - Cancelled<br>* `2` - Awaiting Approval<br>* `3` - Rejected<br>* `4` - Processing<br>* `5` - Failure<br>* `6` - Completed|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "address": "0x94df8b352de7f46f64b01d3666bf6e936e44ce60",
    "amount": "8.91000000",
    "applyTime": "2019-10-12 11:12:02",
    "coin": "USDT",
    "id": "b6ae22b3aa844210a7041aee7589627c",
    "withdrawOrderId": "WITHDRAWtest123",
    "network": "ETH",
    "transferType": 0,
    "status": 6,
    "transactionFee": "0.004",
    "confirmNo": 3,
    "info": "The address is not valid. Please confirm with the recipient",
    "txId": "0xb5ef8c13b968a406cc62a93a8bd80f9e9a906ef1b3fcf20a2e48573c17659268"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="withdraw-history-supporting-network-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of withdraw history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="withdraw-history-supporting-network-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|string|true|none|none|
|» amount|string|true|none|none|
|» applyTime|string|true|none|none|
|» coin|string|true|none|none|
|» id|string|true|none|none|
|» withdrawOrderId|string|true|none|will not be returned if there's no withdrawOrderId for this withdraw.|
|» network|string|true|none|none|
|» transferType|integer(int32)|true|none|1 for internal transfer, 0 for external transfer|
|» status|integer(int32)|true|none|none|
|» transactionFee|string|true|none|none|
|» confirmNo|integer(int32)|false|none|none|
|» info|string|false|none|Reason for withdrawal failure|
|» txId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Deposit Address (supporting network) (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/deposit/address?coin=BNB&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/deposit/address`

Fetch deposit address with network.

- If network is not send, return with default network of the coin.
- You can get network and isDefault in networkList in the response of Get /sapi/v1/capital/config/getall (HMAC SHA256).

Weight(IP): 10

<h3 id="deposit-address-supporting-network-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coin|query|string|true|Coin name|
|network|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "address": "1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv",
  "coin": "BTC",
  "tag": "",
  "url": "https://btc.com/1HPn8Rx2y6nNSfagQBKy27GB99Vbzg89wv"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="deposit-address-supporting-network-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deposit address info|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="deposit-address-supporting-network-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|coin|string|true|none|none|
|tag|string|true|none|none|
|url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Account Status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/account/status?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/account/status`

Fetch account status detail.

Weight(IP): 1

<h3 id="account-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "data": "Normal"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="account-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="account-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Account API Trading Status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/account/apiTradingStatus?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/account/apiTradingStatus`

Fetch account API trading status with details.

Weight(IP): 1

<h3 id="account-api-trading-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "data": {
    "isLocked": false,
    "plannedRecoverTime": 0,
    "triggerCondition": {
      "GCR": 150,
      "IFER": 150,
      "UFR": 300
    },
    "indicators": {
      "BTCUSDT": [
        {
          "i": "UFR",
          "c": 20,
          "v": 0.05,
          "t": 0.99
        }
      ]
    },
    "updateTime": 1547630471725
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="account-api-trading-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account API trading status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="account-api-trading-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» isLocked|boolean|true|none|API trading function is locked or not|
|» plannedRecoverTime|integer(int64)|true|none|If API trading function is locked, this is the planned recover time|
|» triggerCondition|object|true|none|none|
|» » GCR|integer(int64)|true|none|Number of GTC orders|
|» » IFER|integer(int64)|true|none|Number of FOK/IOC orders|
|» » UFR|integer(int64)|true|none|Number of orders|
|» indicators|object|true|none|The indicators updated every 30 seconds|
|» » BTCUSDT|[object]|true|none|none|
|» » » i|string|true|none|Unfilled Ratio (UFR)|
|» » » c|integer(int64)|true|none|Count of all orders|
|» » » v|number(float)|true|none|Current UFR value|
|» » » t|number(float)|true|none|Trigger UFR value|
|» updateTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## DustLog(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/dribblet?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/dribblet`

Weight(IP): 1

<h3 id="dustloguserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountType|query|string|false|SPOT or MARGIN, default SPOT|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountType|SPOT|
|accountType|MARGIN|

> Example responses

> 200 Response

```json
{
  "total": 8,
  "userAssetDribblets": [
    {
      "operateTime": 1615985535000,
      "totalTransferedAmount": "0.00132256",
      "totalServiceChargeAmount": "0.00002699",
      "transId": 45178372831,
      "userAssetDribbletDetails": [
        {
          "transId": 4359321,
          "serviceChargeAmount": "0.000009",
          "amount": "0.0009",
          "operateTime": 1615985535000,
          "transferedAmount": "0.000441",
          "fromAsset": "USDT"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="dustloguserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dust log records|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="dustloguserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|Total counts of exchange|
|userAssetDribblets|[object]|true|none|none|
|» operateTime|integer(int64)|true|none|none|
|» totalTransferedAmount|string|true|none|Total transfered BNB amount for this exchange.|
|» totalServiceChargeAmount|string|true|none|Total service charge amount for this exchange.|
|» transId|integer(int64)|true|none|none|
|» userAssetDribbletDetails|[object]|true|none|none|
|» » transId|integer(int64)|true|none|none|
|» » serviceChargeAmount|string|true|none|none|
|» » amount|string|true|none|none|
|» » operateTime|integer(int64)|true|none|none|
|» » transferedAmount|string|true|none|none|
|» » fromAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Assets That Can Be Converted Into BNB (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/dust-btc?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/asset/dust-btc`

Weight(IP): 1

<h3 id="get-assets-that-can-be-converted-into-bnb-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountType|query|string|false|SPOT or MARGIN, default SPOT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountType|SPOT|
|accountType|MARGIN|

> Example responses

> 200 Response

```json
{
  "details": [
    {
      "asset": "ADA",
      "assetFullName": "ADA",
      "amountFree": "6.21",
      "toBTC": "0.00016848",
      "toBNB": "0.01777302",
      "toBNBOffExchange": "0.01741756",
      "exchange": "0.00035546"
    }
  ],
  "totalTransferBtc": "0.00016848",
  "totalTransferBNB": "0.01777302",
  "dribbletPercentage": "0.02"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-assets-that-can-be-converted-into-bnb-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account assets available to be converted to BNB|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-assets-that-can-be-converted-into-bnb-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|true|none|none|
|» asset|string|true|none|none|
|» assetFullName|string|true|none|none|
|» amountFree|string|true|none|Convertible amount|
|» toBTC|string|true|none|BTC amount|
|» toBNB|string|true|none|BNB amount(Not deducted commission fee|
|» toBNBOffExchange|string|true|none|BNB amount(Deducted commission fee|
|» exchange|string|true|none|Commission fee|
|totalTransferBtc|string|true|none|none|
|totalTransferBNB|string|true|none|none|
|dribbletPercentage|string|true|none|Commission fee|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Dust Transfer (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/dust?asset=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/asset/dust`

Convert dust assets to BNB.

Weight(UID): 10

<h3 id="dust-transfer-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|[string]|true|The asset being converted. For example, asset=BTC&asset=USDT|
|accountType|query|string|false|SPOT or MARGIN, default SPOT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountType|SPOT|
|accountType|MARGIN|

> Example responses

> 200 Response

```json
{
  "totalServiceCharge": "0.02102542",
  "totalTransfered": "1.05127099",
  "transferResult": [
    {
      "amount": "0.03000000",
      "fromAsset": "ETH",
      "operateTime": 1563368549307,
      "serviceChargeAmount": "0.00500000",
      "tranId": 2970932918,
      "transferedAmount": "0.25000000"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="dust-transfer-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dust log records|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="dust-transfer-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalServiceCharge|string|true|none|none|
|totalTransfered|string|true|none|none|
|transferResult|[object]|true|none|none|
|» amount|string|true|none|none|
|» fromAsset|string|true|none|none|
|» operateTime|integer(int64)|true|none|none|
|» serviceChargeAmount|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» transferedAmount|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Asset Dividend Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/assetDividend?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/assetDividend`

Query asset Dividend Record

Weight(IP): 10

<h3 id="asset-dividend-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "id": 242006910,
      "amount": "10.00000000",
      "asset": "BHFT",
      "divTime": 1563189166000,
      "enInfo": "BHFT distribution",
      "tranId": 2968885920
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="asset-dividend-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Records of asset devidend|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="asset-dividend-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» id|integer(int64)|true|none|none|
|» amount|string|true|none|none|
|» asset|string|true|none|none|
|» divTime|integer(int64)|true|none|none|
|» enInfo|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Asset Detail (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/assetDetail?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/assetDetail`

Fetch details of assets supported on Binance.

- Please get network and other deposit or withdraw details from `GET /sapi/v1/capital/config/getall`.

Weight(IP): 1

<h3 id="asset-detail-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "CTR": {
    "minWithdrawAmount": "70.00000000",
    "depositStatus": false,
    "withdrawFee": 35,
    "withdrawStatus": true,
    "depositTip": "Delisted, Deposit Suspended"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="asset-detail-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset detail|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="asset-detail-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CTR|object|true|none|none|
|» minWithdrawAmount|string|true|none|none|
|» depositStatus|boolean|true|none|deposit status (false if ALL of networks' are false)|
|» withdrawFee|integer(int64)|true|none|none|
|» withdrawStatus|boolean|true|none|withdrawStatus status (false if ALL of networks' are false)|
|» depositTip|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Trade Fee (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/tradeFee?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/tradeFee`

Fetch trade fee

Weight(IP): 1

<h3 id="trade-fee-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "ADABNB",
    "makerCommission": "0.001",
    "takerCommission": "0.001"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="trade-fee-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trade fee info per symbol|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="trade-fee-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» symbol|string|true|none|none|
|» makerCommission|string|true|none|none|
|» takerCommission|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query User Universal Transfer History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/transfer?type=MAIN_C2C&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/transfer`

- `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
- `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
- Support query within the last 6 months only
- If `startTime` and `endTime` not sent, return records of the last 7 days by default

Weight(IP): 1

<h3 id="query-user-universal-transfer-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Universal transfer type|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|fromSymbol|query|string|false|Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN|
|toSymbol|query|string|false|Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|MAIN_C2C|
|type|MAIN_UMFUTURE|
|type|MAIN_CMFUTURE|
|type|MAIN_MARGIN|
|type|MAIN_MINING|
|type|C2C_MAIN|
|type|C2C_UMFUTURE|
|type|C2C_MINING|
|type|C2C_MARGIN|
|type|UMFUTURE_MAIN|
|type|UMFUTURE_C2C|
|type|UMFUTURE_MARGIN|
|type|CMFUTURE_MAIN|
|type|CMFUTURE_MARGIN|
|type|MARGIN_MAIN|
|type|MARGIN_UMFUTURE|
|type|MARGIN_CMFUTURE|
|type|MARGIN_MINING|
|type|MARGIN_C2C|
|type|MINING_MAIN|
|type|MINING_UMFUTURE|
|type|MINING_C2C|
|type|MINING_MARGIN|
|type|MAIN_PAY|
|type|PAY_MAIN|
|type|ISOLATEDMARGIN_MARGIN|
|type|MARGIN_ISOLATEDMARGIN|
|type|ISOLATEDMARGIN_ISOLATEDMARGIN|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "asset": "USDT",
      "amount": "1",
      "type": "MAIN_UMFUTUR",
      "status": "CONFIRMED",
      "tranId": 11415955596,
      "timestamp": 1544433328000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-user-universal-transfer-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Universal transfer history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-user-universal-transfer-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|rows|[object]|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» type|string|true|none|none|
|» status|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## User Universal Transfer (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/transfer?type=MAIN_C2C&asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/asset/transfer`

You need to enable `Permits Universal Transfer` option for the api key which requests this endpoint.

- `fromSymbol` must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN
- `toSymbol` must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN

ENUM of transfer types:
  - MAIN_UMFUTURE Spot account transfer to USDⓈ-M Futures account
  - MAIN_CMFUTURE Spot account transfer to COIN-M Futures account
  - MAIN_MARGIN Spot account transfer to Margin(cross)account
  - UMFUTURE_MAIN USDⓈ-M Futures account transfer to Spot account
  - UMFUTURE_MARGIN USDⓈ-M Futures account transfer to Margin(cross)account
  - CMFUTURE_MAIN COIN-M Futures account transfer to Spot account
  - CMFUTURE_MARGIN COIN-M Futures account transfer to Margin(cross) account
  - MARGIN_MAIN Margin(cross)account transfer to Spot account
  - MARGIN_UMFUTURE Margin(cross)account transfer to USDⓈ-M Futures
  - MARGIN_CMFUTURE Margin(cross)account transfer to COIN-M Futures
  - ISOLATEDMARGIN_MARGIN Isolated margin account transfer to Margin(cross) account
  - MARGIN_ISOLATEDMARGIN Margin(cross) account transfer to Isolated margin account
  - ISOLATEDMARGIN_ISOLATEDMARGIN Isolated margin account transfer to Isolated margin account
  - MAIN_FUNDING Spot account transfer to Funding account
  - FUNDING_MAIN Funding account transfer to Spot account
  - FUNDING_UMFUTURE Funding account transfer to UMFUTURE account
  - UMFUTURE_FUNDING UMFUTURE account transfer to Funding account
  - MARGIN_FUNDING MARGIN account transfer to Funding account
  - FUNDING_MARGIN Funding account transfer to Margin account
  - FUNDING_CMFUTURE Funding account transfer to CMFUTURE account
  - CMFUTURE_FUNDING CMFUTURE account transfer to Funding account
  - MAIN_OPTION Spot account transfer to Options account
  - OPTION_MAIN Options account transfer to Spot account
  - UMFUTURE_OPTION USDⓈ-M Futures account transfer to Options account
  - OPTION_UMFUTURE Options account transfer to USDⓈ-M Futures account
  - MARGIN_OPTION Margin(cross)account transfer to Options account
  - OPTION_MARGIN Options account transfer to Margin(cross)account
  - FUNDING_OPTION Funding account transfer to Options account
  - OPTION_FUNDING Options account transfer to Funding account
  - MAIN_PORTFOLIO_MARGIN Spot account transfer to Portfolio Margin account
  - PORTFOLIO_MARGIN_MAIN Portfolio Margin account transfer to Spot account
  - MAIN_ISOLATED_MARGIN Spot account transfer to Isolated margin account
  - ISOLATED_MARGIN_MAIN Isolated margin account transfer to Spot account

Weight(IP): 1

<h3 id="user-universal-transfer-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Universal transfer type|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|fromSymbol|query|string|false|Must be sent when type are ISOLATEDMARGIN_MARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN|
|toSymbol|query|string|false|Must be sent when type are MARGIN_ISOLATEDMARGIN and ISOLATEDMARGIN_ISOLATEDMARGIN|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|MAIN_C2C|
|type|MAIN_UMFUTURE|
|type|MAIN_CMFUTURE|
|type|MAIN_MARGIN|
|type|MAIN_MINING|
|type|C2C_MAIN|
|type|C2C_UMFUTURE|
|type|C2C_MINING|
|type|C2C_MARGIN|
|type|UMFUTURE_MAIN|
|type|UMFUTURE_C2C|
|type|UMFUTURE_MARGIN|
|type|CMFUTURE_MAIN|
|type|CMFUTURE_MARGIN|
|type|MARGIN_MAIN|
|type|MARGIN_UMFUTURE|
|type|MARGIN_CMFUTURE|
|type|MARGIN_MINING|
|type|MARGIN_C2C|
|type|MINING_MAIN|
|type|MINING_UMFUTURE|
|type|MINING_C2C|
|type|MINING_MARGIN|
|type|MAIN_PAY|
|type|PAY_MAIN|
|type|ISOLATEDMARGIN_MARGIN|
|type|MARGIN_ISOLATEDMARGIN|
|type|ISOLATEDMARGIN_ISOLATEDMARGIN|

> Example responses

> 200 Response

```json
{
  "tranId": 13526853623
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="user-universal-transfer-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="user-universal-transfer-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Funding Wallet (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/get-funding-asset?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/asset/get-funding-asset`

- Currently supports querying the following business assets：Binance Pay, Binance Card, Binance Gift Card, Stock Token

Weight(IP): 1

<h3 id="funding-wallet-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|needBtcValuation|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|needBtcValuation|true|
|needBtcValuation|false|

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDT",
    "free": "1",
    "locked": "0",
    "freeze": "0",
    "withdrawing": "0",
    "btcValuation": "0.00000091"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="funding-wallet-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Funding asset detail|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="funding-wallet-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» free|string|true|none|none|
|» locked|string|true|none|none|
|» freeze|string|true|none|none|
|» withdrawing|string|true|none|none|
|» btcValuation|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## User Asset (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v3/asset/getUserAsset?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v3/asset/getUserAsset`

Get user assets, just for positive data.

Weight(IP): 5

<h3 id="user-asset-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|needBtcValuation|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|needBtcValuation|true|
|needBtcValuation|false|

> Example responses

> 200 Response

```json
[
  {
    "asset": "AVAX",
    "free": "1",
    "locked": "0",
    "freeze": "0",
    "withdrawing": "0",
    "ipoable": "0",
    "btcValuation": "0"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="user-asset-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User assets|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="user-asset-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» free|string|true|none|none|
|» locked|string|true|none|none|
|» freeze|string|true|none|none|
|» withdrawing|string|true|none|none|
|» ipoable|string|true|none|none|
|» btcValuation|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Convert Transfer (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/convert-transfer?clientTranId=string&asset=BTC&amount=1.01&targetAsset=BNB&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/asset/convert-transfer`

Convert transfer, convert between BUSD and stablecoins.
If the clientId has been used before, will not do the convert transfer, the original transfer will be returned.

Weight(UID): 5

<h3 id="convert-transfer-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientTranId|query|string|true|The unique flag, the min length is 20|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|targetAsset|query|string|true|Target asset you want to convert|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "tranId": 118263407119,
  "status": "S"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="convert-transfer-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversion Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="convert-transfer-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Convert Transfer (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/convert-transfer/queryByPage?startTime=0&endTime=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/convert-transfer/queryByPage`

Weight(UID): 5

<h3 id="query-convert-transfer-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tranId|query|integer(int64)|false|The transaction id|
|asset|query|string|false|If it is blank, we will match deducted asset and target asset.|
|startTime|query|integer(int64)|true|UTC timestamp in ms|
|endTime|query|integer(int64)|true|UTC timestamp in ms|
|accountType|query|string|false|MAIN: main account. CARD: funding account. If it is blank, we will query spot and card wallet, otherwise, we just query the corresponding wallet|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountType|MAIN|
|accountType|CARD|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "tranId": 118263407119,
      "type": 244,
      "time": 1664442078000,
      "deductedAsset": "BUSD",
      "deductedAmount": "1",
      "targetAsset": "USDC",
      "targetAmount": "1",
      "status": "S",
      "accountType": "MAIN"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-convert-transfer-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Query Convert Transfer|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-convert-transfer-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|rows|[object]|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» type|integer(int64)|true|none|none|
|» time|integer(int64)|true|none|none|
|» deductedAsset|string|true|none|none|
|» deductedAmount|string|true|none|none|
|» targetAsset|string|true|none|none|
|» targetAmount|string|true|none|none|
|» status|string|true|none|none|
|» accountType|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Cloud-Mining payment and refund history (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage?startTime=0&endTime=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage`

The query of Cloud-Mining payment and refund history

Weight(UID): 600

<h3 id="get-cloud-mining-payment-and-refund-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tranId|query|integer(int64)|false|The transaction id|
|clientTranId|query|string|false|The unique flag|
|asset|query|string|false|If it is blank, we will query all assets|
|startTime|query|integer(int64)|true|UTC timestamp in ms|
|endTime|query|integer(int64)|true|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "createTime": 1667880112000,
      "tranId": 121230610120,
      "type": 248,
      "asset": "USDT",
      "amount": "1",
      "status": "S"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-cloud-mining-payment-and-refund-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cloud Mining Payment and Refund History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-cloud-mining-payment-and-refund-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|rows|[object]|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» type|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get API Key Permission (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/account/apiRestrictions?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/account/apiRestrictions`

Weight(IP): 1

<h3 id="get-api-key-permission-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "ipRestrict": false,
  "createTime": 1623840271000,
  "enableInternalTransfer": true,
  "enableFutures": false,
  "enablePortfolioMarginTrading": false,
  "enableVanillaOptions": false,
  "permitsUniversalTransfer": true,
  "enableReading": true,
  "enableSpotAndMarginTrading": false,
  "enableWithdrawals": false,
  "enableMargin": false,
  "tradingAuthorityExpirationTime": 1628985600000
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-api-key-permission-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Key permissions|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-api-key-permission-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipRestrict|boolean|true|none|none|
|createTime|integer(int64)|true|none|none|
|enableInternalTransfer|boolean|true|none|This option authorizes this key to transfer funds between your master account and your sub account instantly|
|enableFutures|boolean|true|none|API Key created before your futures account opened does not support futures API service|
|enablePortfolioMarginTrading|boolean|false|none|API Key created before your activate portfolio margin does not support portfolio margin API service|
|enableVanillaOptions|boolean|true|none|Authorizes this key to Vanilla options trading|
|permitsUniversalTransfer|boolean|true|none|Authorizes this key to be used for a dedicated universal transfer API to transfer multiple supported currencies. Each business's own transfer API rights are not affected by this authorization|
|enableReading|boolean|true|none|none|
|enableSpotAndMarginTrading|boolean|true|none|none|
|enableWithdrawals|boolean|true|none|This option allows you to withdraw via API. You must apply the IP Access Restriction filter in order to enable withdrawals|
|enableMargin|boolean|true|none|This option can be adjusted after the Cross Margin account transfer is completed|
|tradingAuthorityExpirationTime|integer(int64)|true|none|Expiration time for spot and margin trading permission|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query auto-converting stable coins (USER_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/capital/contract/convertible-coins \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/contract/convertible-coins`

Get a user's auto-conversion settings in deposit/withdrawal

Weight(UID): 600'

> Example responses

> 200 Response

```json
{
  "convertEnabled": true,
  "coins": [
    "USDC"
  ],
  "exchangeRates": {
    "USDC": "1",
    "TUSD": "1",
    "USDP": "1"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-auto-converting-stable-coins-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's auto-conversion settings i|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-auto-converting-stable-coins-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convertEnabled|boolean|true|none|none|
|coins|[string]|true|none|none|
|exchangeRates|object|true|none|none|
|» USDC|string|true|none|none|
|» TUSD|string|true|none|none|
|» USDP|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Switch on/off BUSD and stable coins conversion (USER_DATA) (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/contract/convertible-coins?coin=string&enable=true' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/capital/contract/convertible-coins`

User can use it to turn on or turn off the BUSD auto-conversion from/to a specific stable coin.

Weight(UID): 600'

<h3 id="switch-onoff-busd-and-stable-coins-conversion-userdata-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coin|query|string|true|Must be USDC, USDP or TUSD|
|enable|query|boolean|true|true: turn on the auto-conversion. false: turn off the auto-conversion|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="switch-onoff-busd-and-stable-coins-conversion-userdata-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## One click arrival deposit apply (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/deposit/credit-apply?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/capital/deposit/credit-apply`

Apply deposit credit for expired address (One click arrival)

Weight(IP): 1

<h3 id="one-click-arrival-deposit-apply-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|depositId|query|integer(int64)|false|Deposit record Id, priority use|
|txId|query|string|false|Deposit txId, used when depositId is not specified|
|subAccountId|query|integer(int64)|false|none|
|subUserId|query|integer(int64)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": true,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="one-click-arrival-deposit-apply-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deposit result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="one-click-arrival-deposit-apply-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|boolean|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query User Wallet Balance (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/wallet/balance?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/wallet/balance`

Query User Wallet Balance

Weight(IP): 60

<h3 id="query-user-wallet-balance-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "activate": true,
    "balance": "0",
    "walletName": "Spot"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-user-wallet-balance-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|wallet balance|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-user-wallet-balance-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» activate|boolean|true|none|none|
|» balance|string|true|none|none|
|» walletName|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query User Delegation History(For Master Account) (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/asset/custody/transfer-history?email=alice%40test.com&startTime=1695205406000&endTime=1695205396000&asset=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/asset/custody/transfer-history`

Query User Delegation History

Weight(IP): 60

<h3 id="query-user-delegation-historyfor-master-account-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|startTime|query|integer(int64)|true|none|
|endTime|query|integer(int64)|true|none|
|type|query|string|false|none|
|asset|query|string|true|none|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 3316,
  "rows": [
    {
      "clientTranId": "293915932290879488",
      "transferType": "Undelegate",
      "asset": "ETH",
      "amount": "1",
      "time": 1695205406000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-user-delegation-historyfor-master-account-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delegation History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-user-delegation-historyfor-master-account-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|rows|[object]|true|none|none|
|» clientTranId|string|true|none|none|
|» transferType|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fetch deposit address list with network (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/deposit/address/list?coin=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/deposit/address/list`

Fetch deposit address list with network.

Weight(IP): 10

<h3 id="fetch-deposit-address-list-with-network-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|coin|query|string|true|none|
|network|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "coin": "ETH",
    "address": "0xD316E95Fd9E8E237Cb11f8200Babbc5D8D177BA4",
    "isDefault": 1
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fetch-deposit-address-list-with-network-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Coin address|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fetch-deposit-address-list-with-network-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» coin|string|true|none|none|
|» address|string|true|none|none|
|» isDefault|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get symbols delist schedule for spot (MARKET_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/spot/delist-schedule?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/spot/delist-schedule`

Get symbols delist schedule for spot

Weight(IP): 100

<h3 id="get-symbols-delist-schedule-for-spot-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "delistTime": 1686161202000,
    "symbol": [
      "ADAUSDT",
      "BNBUSDT"
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-symbols-delist-schedule-for-spot-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Symbols delist schedule|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-symbols-delist-schedule-for-spot-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» delistTime|integer(int64)|true|none|none|
|» symbol|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fetch withdraw address list (USER_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/capital/withdraw/address/list \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/withdraw/address/list`

Fetch withdraw address list

Weight(IP): 10

> Example responses

> 200 Response

```json
[
  {
    "address": "0xD316E95Fd9E8E237Cb11f8200Babbc5D8D177BA4",
    "addressTag": "101764890",
    "coin": "BNB",
    "name": "",
    "network": "BNB",
    "origin": "",
    "originType": "",
    "whiteStatus": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fetch-withdraw-address-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Withdraw address list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fetch-withdraw-address-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|string|true|none|none|
|» addressTag|string|true|none|none|
|» coin|string|true|none|none|
|» name|string|true|none|none|
|» network|string|true|none|none|
|» origin|string|true|none|none|
|» originType|string|true|none|none|
|» whiteStatus|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Account info (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/account/info?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/account/info`

Fetch account info detail.

Weight(IP): 1

<h3 id="account-info-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "vipLevel": 0,
  "isMarginEnabled": true,
  "isFutureEnabled": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="account-info-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account info detail|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="account-info-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vipLevel|integer(int32)|true|none|none|
|isMarginEnabled|boolean|true|none|true or false for margin.|
|isFutureEnabled|boolean|true|none|true or false for futures.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-sub-account">Sub-Account</h1>

Sub-account Endpoints

## Create a Virtual Sub-account(For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/virtualSubAccount?subAccountString=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/virtualSubAccount`

- This request will generate a virtual sub account under your master account.
- You need to enable "trade" option for the api key which requests this endpoint.

Weight(IP): 1

<h3 id="create-a-virtual-sub-accountfor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subAccountString|query|string|true|Please input a string. We will create a virtual email using that string for you to register|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "addsdd_virtual@aasaixwqnoemail.com"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="create-a-virtual-sub-accountfor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the created virtual email|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="create-a-virtual-sub-accountfor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Sub-account List (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/list?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/list`

Weight(IP): 1

<h3 id="query-sub-account-list-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Sub-account email|
|isFreeze|query|string|false|none|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 1; max 200|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isFreeze|true|
|isFreeze|false|

> Example responses

> 200 Response

```json
{
  "subAccounts": [
    {
      "email": "testsub@gmail.com",
      "isFreeze": false,
      "createTime": 1544433328000,
      "isManagedSubAccount": false,
      "isAssetManagementSubAccount": false
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-sub-account-list-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of sub-accounts|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-sub-account-list-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subAccounts|[object]|true|none|none|
|» email|string|true|none|none|
|» isFreeze|boolean|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» isManagedSubAccount|boolean|true|none|none|
|» isAssetManagementSubAccount|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Spot Asset Transfer History (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/sub/transfer/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/sub/transfer/history`

- fromEmail and toEmail cannot be sent at the same time.
- Return fromEmail equal master account email by default.

Weight(IP): 1

<h3 id="sub-account-spot-asset-transfer-history-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromEmail|query|string|false|Sub-account email|
|toEmail|query|string|false|Sub-account email|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "from": "aaa@test.com",
    "to": "bbb@test.com",
    "asset": "BTC",
    "qty": 10,
    "status": "SUCCESS",
    "tranId": 6489943656,
    "time": 1544433328000
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-spot-asset-transfer-history-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub-account Spot Asset Transfer History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-spot-asset-transfer-history-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» from|string|true|none|none|
|» to|string|true|none|none|
|» asset|string|true|none|none|
|» qty|string|true|none|none|
|» status|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Futures Asset Transfer History (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/internalTransfer?email=string&futuresType=2&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/futures/internalTransfer`

Weight(IP): 1

<h3 id="sub-account-futures-asset-transfer-history-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|futuresType|query|integer(int32)|true|1:USDT-margined Futures, 2: Coin-margined Futures|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default value: 50, Max value: 500|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "futuresType": 2,
  "transfers": [
    {
      "from": "aaa@test.com",
      "to": "bbb@test.com",
      "asset": "BTC",
      "qty": "1",
      "tranId": 11897001102,
      "time": 1544433328000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-futures-asset-transfer-history-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub-account Futures Asset Transfer History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-futures-asset-transfer-history-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|futuresType|integer(int32)|true|none|none|
|transfers|[object]|true|none|none|
|» from|string|true|none|none|
|» to|string|true|none|none|
|» asset|string|true|none|none|
|» qty|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Futures Asset Transfer (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/internalTransfer?fromEmail=string&toEmail=string&futuresType=2&asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/futures/internalTransfer`

- Master account can transfer max 2000 times a minute

Weight(IP): 1

<h3 id="sub-account-futures-asset-transfer-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromEmail|query|string|true|Sender email|
|toEmail|query|string|true|Recipient email|
|futuresType|query|integer(int32)|true|1:USDT-margined Futures,2: Coin-margined Futures|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "txnId": "2934662589"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-futures-asset-transfer-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures Asset Transfer Info|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-futures-asset-transfer-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|txnId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Assets (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v3/sub-account/assets?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v3/sub-account/assets`

Fetch sub-account assets

Weight(IP): 1

<h3 id="sub-account-assets-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "asset": "ADA",
      "free": 10000,
      "locked": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-assets-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of assets balances|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-assets-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[object]|true|none|none|
|» asset|string|true|none|none|
|» free|integer(int64)|true|none|none|
|» locked|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Spot Assets Summary (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/spotSummary?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/spotSummary`

Get BTC valued asset summary of subaccounts.

Weight(IP): 1

<h3 id="sub-account-spot-assets-summary-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Sub-account email|
|page|query|integer(int32)|false|Default 1|
|size|query|integer(int32)|false|Default:10 Max:20|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "totalCount": 1,
  "masterAccountTotalAsset": "0.23231201",
  "spotSubUserAssetBtcVoList": [
    {
      "email": "sub123@test.com",
      "totalAsset": "9999.00000000"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-spot-assets-summary-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Summary of Sub-account Spot Assets|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-spot-assets-summary-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCount|integer(int64)|true|none|none|
|masterAccountTotalAsset|string|true|none|none|
|spotSubUserAssetBtcVoList|[object]|true|none|none|
|» email|string|true|none|none|
|» totalAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Spot Assets Summary (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/deposit/subAddress?email=string&coin=BNB&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/deposit/subAddress`

Fetch sub-account deposit address

Weight(IP): 1

<h3 id="sub-account-spot-assets-summary-for-master-account-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|coin|query|string|true|Coin name|
|network|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "address": "TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV",
  "coin": "USDT",
  "tag": "",
  "url": "https://tronscan.org/#/address/TDunhSa7jkTNuKrusUTU1MUHtqXoBPKETV"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-spot-assets-summary-for-master-account-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deposit address info|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-spot-assets-summary-for-master-account-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|coin|string|true|none|none|
|tag|string|true|none|none|
|url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Deposit History (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/capital/deposit/subHisrec?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/capital/deposit/subHisrec`

Fetch sub-account deposit history

Weight(IP): 1

<h3 id="sub-account-deposit-history-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|coin|query|string|false|Coin name|
|status|query|integer(int32)|false|0(0:pending,6: credited but cannot withdraw, 1:success)|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int64)|false|none|
|offset|query|integer(int32)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "amount": "0.00999800",
    "coin": "PAXG",
    "network": "ETH",
    "status": 1,
    "address": "0x788cabe9236ce061e5a892e1a59395a81fc8d62c",
    "addressTag": "",
    "txId": "0xaad4654a3234aa6118af9b4b335f5ae81c360b2394721c019b5d1e75328b09f3",
    "insertTime": 1599621997000,
    "transferType": 0,
    "confirmTimes": "12/12"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-deposit-history-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub-account deposit history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-deposit-history-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» amount|string|true|none|none|
|» coin|string|true|none|none|
|» network|string|true|none|none|
|» status|integer(int32)|true|none|none|
|» address|string|true|none|none|
|» addressTag|string|true|none|none|
|» txId|string|true|none|none|
|» insertTime|integer(int64)|true|none|none|
|» transferType|integer(int32)|true|none|none|
|» confirmTimes|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account's Status on Margin/Futures (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/status?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/status`

- If no `email` sent, all sub-accounts' information will be returned.

Weight(IP): 10

<h3 id="sub-accounts-status-on-marginfutures-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "email": "123@test.com",
    "isSubUserEnabled": true,
    "isUserActive": true,
    "insertTime": 1570791523523,
    "isMarginEnabled": true,
    "isFutureEnabled": true,
    "mobile": 1570791523523
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-accounts-status-on-marginfutures-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status on Margin/Futures|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-accounts-status-on-marginfutures-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» email|string|true|none|none|
|» isSubUserEnabled|boolean|true|none|none|
|» isUserActive|boolean|true|none|none|
|» insertTime|integer(int64)|true|none|sub account create time|
|» isMarginEnabled|boolean|true|none|none|
|» isFutureEnabled|boolean|true|none|none|
|» mobile|integer(int64)|true|none|user mobile number|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable Margin for Sub-account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/margin/enable?email=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/margin/enable`

Weight(IP): 1

<h3 id="enable-margin-for-sub-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "123@test.com",
  "isMarginEnabled": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="enable-margin-for-sub-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="enable-margin-for-sub-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|isMarginEnabled|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Detail on Sub-account's Margin Account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/margin/account?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/margin/account`

Weight(IP): 10

<h3 id="detail-on-sub-accounts-margin-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "123@test.com",
  "marginLevel": "11.64405625",
  "totalAssetOfBtc": "6.82728457",
  "totalLiabilityOfBtc": "0.58633215",
  "totalNetAssetOfBtc": "6.24095242",
  "marginTradeCoeffVo": {
    "forceLiquidationBar": "1.10000000",
    "marginCallBar": "1.50000000",
    "normalBar": "2.00000000"
  },
  "marginUserAssetVoList": [
    {
      "asset": "BTC",
      "borrowed": "0.00000000",
      "free": "0.00499500",
      "interest": "0.00000000",
      "locked": "0.00000000",
      "netAsset": "0.00499500"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="detail-on-sub-accounts-margin-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin sub-account details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="detail-on-sub-accounts-margin-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|marginLevel|string|true|none|none|
|totalAssetOfBtc|string|true|none|none|
|totalLiabilityOfBtc|string|true|none|none|
|totalNetAssetOfBtc|string|true|none|none|
|marginTradeCoeffVo|object|true|none|none|
|» forceLiquidationBar|string|true|none|Liquidation margin ratio|
|» marginCallBar|string|true|none|Margin call margin ratio|
|» normalBar|string|true|none|Initial margin ratio|
|marginUserAssetVoList|[object]|true|none|none|
|» asset|string|true|none|none|
|» borrowed|string|true|none|none|
|» free|string|true|none|none|
|» interest|string|true|none|none|
|» locked|string|true|none|none|
|» netAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Summary of Sub-account's Margin Account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/margin/accountSummary?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/margin/accountSummary`

Weight(IP): 10

<h3 id="summary-of-sub-accounts-margin-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "totalAssetOfBtc": "4.33333333",
  "totalLiabilityOfBtc": "2.11111112",
  "totalNetAssetOfBtc": "2.22222221",
  "subAccountList": [
    {
      "email": "123@test.com",
      "totalAssetOfBtc": "2.11111111",
      "totalLiabilityOfBtc": "1.11111111",
      "totalNetAssetOfBtc": "1.00000000"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="summary-of-sub-accounts-margin-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin sub-account details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="summary-of-sub-accounts-margin-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalAssetOfBtc|string|true|none|none|
|totalLiabilityOfBtc|string|true|none|none|
|totalNetAssetOfBtc|string|true|none|none|
|subAccountList|[object]|true|none|none|
|» email|string|true|none|none|
|» totalAssetOfBtc|string|true|none|none|
|» totalLiabilityOfBtc|string|true|none|none|
|» totalNetAssetOfBtc|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable Futures for Sub-account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/enable?email=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/futures/enable`

Weight(IP): 1

<h3 id="enable-futures-for-sub-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "123@test.com",
  "isFuturesEnabled": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="enable-futures-for-sub-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="enable-futures-for-sub-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|isFuturesEnabled|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Detail on Sub-account's Futures Account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/account?email=alice%40test.com&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/futures/account`

Weight(IP): 10

<h3 id="detail-on-sub-accounts-futures-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "abc@test.com",
  "asset": "USDT",
  "assets": [
    {
      "asset": "USDT",
      "initialMargin": "0.00000000",
      "maintenanceMargin": "0.00000000",
      "marginBalance": "0.88308000",
      "maxWithdrawAmount": "0.88308000",
      "openOrderInitialMargin": "0.00000000",
      "positionInitialMargin": "0.00000000",
      "unrealizedProfit": "0.00000000",
      "walletBalance": "0.88308000"
    }
  ],
  "canDeposit": true,
  "canTrade": true,
  "canWithdraw": true,
  "feeTier": 2,
  "maxWithdrawAmount": "0.88308000",
  "totalInitialMargin": "0.00000000",
  "totalMaintenanceMargin": "0.00000000",
  "totalMarginBalance": "0.88308000",
  "totalOpenOrderInitialMargin": "0.00000000",
  "totalPositionInitialMargin": "0.00000000",
  "totalUnrealizedProfit": "0.00000000",
  "totalWalletBalance": "0.88308000",
  "updateTime": 1576756674610
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="detail-on-sub-accounts-futures-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures account details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="detail-on-sub-accounts-futures-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|asset|string|true|none|none|
|assets|[object]|true|none|none|
|» asset|string|true|none|none|
|» initialMargin|string|true|none|none|
|» maintenanceMargin|string|true|none|none|
|» marginBalance|string|true|none|none|
|» maxWithdrawAmount|string|true|none|none|
|» openOrderInitialMargin|string|true|none|none|
|» positionInitialMargin|string|true|none|none|
|» unrealizedProfit|string|true|none|none|
|» walletBalance|string|true|none|none|
|canDeposit|boolean|true|none|none|
|canTrade|boolean|true|none|none|
|canWithdraw|boolean|true|none|none|
|feeTier|integer(int64)|true|none|none|
|maxWithdrawAmount|string|true|none|none|
|totalInitialMargin|string|true|none|none|
|totalMaintenanceMargin|string|true|none|none|
|totalMarginBalance|string|true|none|none|
|totalOpenOrderInitialMargin|string|true|none|none|
|totalPositionInitialMargin|string|true|none|none|
|totalUnrealizedProfit|string|true|none|none|
|totalWalletBalance|string|true|none|none|
|updateTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Summary of Sub-account's Futures Account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/accountSummary?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/futures/accountSummary`

Weight(IP): 1

<h3 id="summary-of-sub-accounts-futures-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "totalInitialMargin": "9.83137400",
  "totalMaintenanceMargin": "0.41568700",
  "totalMarginBalance": "23.03235621",
  "totalOpenOrderInitialMargin": "9.00000000",
  "totalPositionInitialMargin": "0.83137400",
  "totalUnrealizedProfit": "0.03219710",
  "totalWalletBalance": "22.15879444",
  "asset": "USD",
  "subAccountList": [
    {
      "email": "123@test.com",
      "totalInitialMargin": "9.00000000",
      "totalMaintenanceMargin": "0.00000000",
      "totalMarginBalance": "22.12659734",
      "totalOpenOrderInitialMargin": "9.00000000",
      "totalPositionInitialMargin": "0.00000000",
      "totalUnrealizedProfit": "0.00000000",
      "totalWalletBalance": "22.12659734",
      "asset": "USD"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="summary-of-sub-accounts-futures-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures account summary|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="summary-of-sub-accounts-futures-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalInitialMargin|string|true|none|none|
|totalMaintenanceMargin|string|true|none|none|
|totalMarginBalance|string|true|none|none|
|totalOpenOrderInitialMargin|string|true|none|none|
|totalPositionInitialMargin|string|true|none|none|
|totalUnrealizedProfit|string|true|none|none|
|totalWalletBalance|string|true|none|none|
|asset|string|true|none|none|
|subAccountList|[object]|true|none|none|
|» email|string|true|none|none|
|» totalInitialMargin|string|true|none|none|
|» totalMaintenanceMargin|string|true|none|none|
|» totalMarginBalance|string|true|none|none|
|» totalOpenOrderInitialMargin|string|true|none|none|
|» totalPositionInitialMargin|string|true|none|none|
|» totalUnrealizedProfit|string|true|none|none|
|» totalWalletBalance|string|true|none|none|
|» asset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Futures Position-Risk of Sub-account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/positionRisk?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/futures/positionRisk`

Weight(IP): 10

<h3 id="futures-position-risk-of-sub-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "entryPrice": "9975.12000",
    "leverage": "50",
    "maxNotional": "1000000",
    "liquidationPrice": "7963.54",
    "markPrice": "9973.50770517",
    "positionAmount": "0.010",
    "symbol": "BTCUSDT",
    "unrealizedProfit": "-0.01612295"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="futures-position-risk-of-sub-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures account summary|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="futures-position-risk-of-sub-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» entryPrice|string|true|none|none|
|» leverage|string|true|none|current initial leverage|
|» maxNotional|string|true|none|notional value limit of current initial leverage|
|» liquidationPrice|string|true|none|none|
|» markPrice|string|true|none|none|
|» positionAmount|string|true|none|none|
|» symbol|string|true|none|none|
|» unrealizedProfit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Transfer for Sub-account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/futures/transfer?email=string&asset=BTC&amount=1.01&type=1&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/futures/transfer`

Weight(IP): 1

<h3 id="transfer-for-sub-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|type|query|integer(int32)|true|* `1` - transfer from subaccount's spot account to its USDT-margined futures account<br>* `2` - transfer from subaccount's USDT-margined futures account to its spot account<br>* `3` - transfer from subaccount's spot account to its COIN-margined futures account<br>* `4` - transfer from subaccount's COIN-margined futures account to its spot account|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "txnId": "2966662589"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="transfer-for-sub-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="transfer-for-sub-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Margin Transfer for Sub-account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/margin/transfer?email=string&asset=BTC&amount=1.01&type=1&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/margin/transfer`

Weight(IP): 1

<h3 id="margin-transfer-for-sub-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|type|query|integer(int32)|true|* `1` - transfer from subaccount's spot account to margin account<br>* `2` - transfer from subaccount's margin account to its spot account|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "txnId": "2966662589"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="margin-transfer-for-sub-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="margin-transfer-for-sub-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Transfer to Sub-account of Same Master (For Sub-account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/transfer/subToSub?toEmail=string&asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/transfer/subToSub`

Weight(IP): 1

<h3 id="transfer-to-sub-account-of-same-master-for-sub-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|toEmail|query|string|true|Recipient email|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "txnId": "2966662589"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="transfer-to-sub-account-of-same-master-for-sub-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="transfer-to-sub-account-of-same-master-for-sub-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Transfer to Master (For Sub-account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/transfer/subToMaster?asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/transfer/subToMaster`

Weight(IP): 1

<h3 id="transfer-to-master-for-sub-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "txnId": "2966662589"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="transfer-to-master-for-sub-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="transfer-to-master-for-sub-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sub-account Transfer History (For Sub-account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/transfer/subUserHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/transfer/subUserHistory`

- If `type` is not sent, the records of type 2: transfer out will be returned by default.
- If `startTime` and `endTime` are not sent, the recent 30-day data will be returned.

Weight(IP): 1

<h3 id="sub-account-transfer-history-for-sub-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|type|query|integer(int32)|false|* `1` - transfer in<br>* `2` - transfer out|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "counterParty": "master",
    "email": "master@test.com",
    "type": 1,
    "asset": "BTC",
    "qty": "1",
    "fromAccountType": "SPOT",
    "toAccountType": "SPOT",
    "status": "SUCCESS",
    "tranId": 11798835829,
    "time": 1544433325000
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="sub-account-transfer-history-for-sub-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="sub-account-transfer-history-for-sub-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» counterParty|string|true|none|none|
|» email|string|true|none|none|
|» type|integer(int32)|true|none|1 for transfer in, 2 for transfer out|
|» asset|string|true|none|none|
|» qty|string|true|none|none|
|» fromAccountType|string|true|none|none|
|» toAccountType|string|true|none|none|
|» status|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Universal Transfer History (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/universalTransfer?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/universalTransfer`

- `fromEmail` and `toEmail` cannot be sent at the same time.
- Return `fromEmail` equal master account email by default.
- The query time period must be less then 30 days.
- If startTime and endTime not sent, return records of the last 30 days by default.

Weight(IP): 1

<h3 id="universal-transfer-history-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromEmail|query|string|false|Sub-account email|
|toEmail|query|string|false|Sub-account email|
|clientTranId|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 500, Max 500|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "tranId": 11945860693,
    "fromEmail": "master@test.com",
    "toEmail": "subaccount1@test.com",
    "asset": "BTC",
    "amount": "0.1",
    "fromAccountType": "SPOT",
    "toAccountType": "COIN_FUTURE",
    "status": "SUCCESS",
    "createTimeStamp": 1544433325000,
    "clientTranId": "11945860694"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="universal-transfer-history-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="universal-transfer-history-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» tranId|integer(int64)|true|none|none|
|» fromEmail|string|true|none|none|
|» toEmail|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» fromAccountType|string|true|none|none|
|» toAccountType|string|true|none|none|
|» status|string|true|none|none|
|» createTimeStamp|integer(int64)|true|none|none|
|» clientTranId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Universal Transfer (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/universalTransfer?fromAccountType=SPOT&toAccountType=SPOT&asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/universalTransfer`

- You need to enable "internal transfer" option for the api key which requests this endpoint.
- Transfer from master account by default if fromEmail is not sent.
- Transfer to master account by default if toEmail is not sent.
- Supported transfer scenarios:
  - Master account SPOT transfer to sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN
  - Sub-account SPOT,USDT_FUTURE,COIN_FUTURE,MARGIN(Cross),ISOLATED_MARGIN transfer to master account SPOT
  - Transfer between two sub-account SPOT accounts

Weight(IP): 1

<h3 id="universal-transfer-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromEmail|query|string|false|Sub-account email|
|toEmail|query|string|false|Sub-account email|
|fromAccountType|query|string|true|none|
|toAccountType|query|string|true|none|
|clientTranId|query|string|false|none|
|symbol|query|string|false|Only supported under ISOLATED_MARGIN type|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fromAccountType|SPOT|
|fromAccountType|USDT_FUTURE|
|fromAccountType|COIN_FUTURE|
|fromAccountType|MARGIN|
|fromAccountType|ISOLATED_MARGIN|
|toAccountType|SPOT|
|toAccountType|USDT_FUTURE|
|toAccountType|COIN_FUTURE|
|toAccountType|MARGIN|
|toAccountType|ISOLATED_MARGIN|

> Example responses

> 200 Response

```json
{
  "tranId": 11945860693,
  "clientTranId": "11945860694"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="universal-transfer-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="universal-transfer-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|
|clientTranId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Detail on Sub-account's Futures Account V2 (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/sub-account/futures/account?email=string&futuresType=1&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/sub-account/futures/account`

Weight(IP): 1

<h3 id="detail-on-sub-accounts-futures-account-v2-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|futuresType|query|integer(int32)|true|* `1` - USDT Margined Futures<br>* `2` - COIN Margined Futures|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "futureAccountResp": {
    "email": "abc@test.com",
    "assets": [
      {
        "asset": "USDT",
        "initialMargin": "0.00000000",
        "maintenanceMargin": "0.00000000",
        "marginBalance": "0.88308000",
        "maxWithdrawAmount": "0.88308000",
        "openOrderInitialMargin": "0.00000000",
        "positionInitialMargin": "0.00000000",
        "unrealizedProfit": "0.00000000",
        "walletBalance": "0.88308000"
      }
    ],
    "canDeposit": true,
    "canTrade": true,
    "canWithdraw": true,
    "feeTier": 2,
    "maxWithdrawAmount": "0.88308000",
    "totalInitialMargin": "0.00000000",
    "totalMaintenanceMargin": "0.00000000",
    "totalMarginBalance": "0.88308000",
    "totalOpenOrderInitialMargin": "0.00000000",
    "totalPositionInitialMargin": "0.00000000",
    "totalUnrealizedProfit": "0.00000000",
    "totalWalletBalance": "0.88308000",
    "updateTime": 1576756674610
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="detail-on-sub-accounts-futures-account-v2-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|USDT or COIN Margined Futures Details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="detail-on-sub-accounts-futures-account-v2-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[subAccountUSDTFuturesDetails](#schemasubaccountusdtfuturesdetails)|false|none|none|
|*oneOf*|[subAccountCOINFuturesDetails](#schemasubaccountcoinfuturesdetails)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Summary of Sub-account's Futures Account V2 (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/sub-account/futures/accountSummary?futuresType=1&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/sub-account/futures/accountSummary`

Weight(IP): 10

<h3 id="summary-of-sub-accounts-futures-account-v2-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|futuresType|query|integer(int32)|true|* `1` - USDT Margined Futures<br>* `2` - COIN Margined Futures|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 10, Max 20|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "futureAccountSummaryResp": {
    "totalInitialMargin": "9.83137400",
    "totalMaintenanceMargin": "0.41568700",
    "totalMarginBalance": "23.03235621",
    "totalOpenOrderInitialMargin": "9.00000000",
    "totalPositionInitialMargin": "0.83137400",
    "totalUnrealizedProfit": "0.03219710",
    "totalWalletBalance": "22.15879444",
    "asset": "USD",
    "subAccountList": [
      {
        "email": "123@test.com",
        "totalInitialMargin": "9.00000000",
        "totalMaintenanceMargin": "0.00000000",
        "totalMarginBalance": "22.12659734",
        "totalOpenOrderInitialMargin": "9.00000000",
        "totalPositionInitialMargin": "0.00000000",
        "totalUnrealizedProfit": "0.00000000",
        "totalWalletBalance": "22.12659734",
        "asset": "USD"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="summary-of-sub-accounts-futures-account-v2-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|USDT or COIN Margined Futures Summary|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="summary-of-sub-accounts-futures-account-v2-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[subAccountUSDTFuturesSummary](#schemasubaccountusdtfuturessummary)|false|none|none|
|*oneOf*|[subAccountCOINFuturesSummary](#schemasubaccountcoinfuturessummary)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Futures Position-Risk of Sub-account V2 (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/sub-account/futures/positionRisk?email=string&futuresType=1&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/sub-account/futures/positionRisk`

Weight(IP): 1

<h3 id="futures-position-risk-of-sub-account-v2-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|futuresType|query|integer(int32)|true|* `1` - USDT Margined Futures<br>* `2` - COIN Margined Futures|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "futurePositionRiskVos": [
    {
      "entryPrice": "9975.12000",
      "leverage": "50",
      "maxNotional": "1000000",
      "liquidationPrice": "7963.54",
      "markPrice": "9973.50770517",
      "positionAmount": "0.010",
      "symbol": "BTCUSDT",
      "unrealizedProfit": "-0.01612295"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="futures-position-risk-of-sub-account-v2-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|USDT or COIN Margined Futures Position Risk|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="futures-position-risk-of-sub-account-v2-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[subAccountUSDTFuturesPositionRisk](#schemasubaccountusdtfuturespositionrisk)|false|none|none|
|*oneOf*|[subAccountCOINFuturesPositionRisk](#schemasubaccountcoinfuturespositionrisk)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable Leverage Token for Sub-account (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/blvt/enable?email=string&enableBlvt=true&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/blvt/enable`

Weight(IP): 1

<h3 id="enable-leverage-token-for-sub-account-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|enableBlvt|query|boolean|true|Only true for now|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "123@test.com",
  "enableBlvt": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="enable-leverage-token-for-sub-account-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|BLVT status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="enable-leverage-token-for-sub-account-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|enableBlvt|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Deposit assets into the managed sub-account(For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/deposit?toEmail=string&asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/managed-subaccount/deposit`

Weight(IP): 1

<h3 id="deposit-assets-into-the-managed-sub-accountfor-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|toEmail|query|string|true|Recipient email|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "tranId": 66157362489
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="deposit-assets-into-the-managed-sub-accountfor-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="deposit-assets-into-the-managed-sub-accountfor-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Managed sub-account asset details(For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/asset?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/asset`

Weight(IP): 1

<h3 id="managed-sub-account-asset-detailsfor-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "coin": "INJ",
    "name": "Injective Protocol",
    "totalBalance": "0",
    "availableBalance": "0",
    "inOrder": "0",
    "btcValue": "0"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="managed-sub-account-asset-detailsfor-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of asset details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="managed-sub-account-asset-detailsfor-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» coin|string|true|none|none|
|» name|string|true|none|none|
|» totalBalance|string|true|none|none|
|» availableBalance|string|true|none|none|
|» inOrder|string|true|none|none|
|» btcValue|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Withdrawl assets from the managed sub-account(For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/withdraw?fromEmail=string&asset=BTC&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/managed-subaccount/withdraw`

Weight(IP): 1

<h3 id="withdrawl-assets-from-the-managed-sub-accountfor-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromEmail|query|string|true|Sender email|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|transferDate|query|integer(int64)|false|Withdrawals is automatically occur on the transfer date(UTC0). If a date is not selected, the withdrawal occurs right now|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "tranId": 66157362489
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="withdrawl-assets-from-the-managed-sub-accountfor-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transfer id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="withdrawl-assets-from-the-managed-sub-accountfor-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Managed sub-account snapshot (For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/accountSnapshot?email=string&type=SPOT&timestamp=0&signature=string' \
  -H 'Accept: application/json'
```

`GET /sapi/v1/managed-subaccount/accountSnapshot`

- The query time period must be less then 30 days
- Support query within the last one month only
- If `startTime` and `endTime` not sent, return records of the last 7 days by default

Weight(IP): 2400

<h3 id="managed-sub-account-snapshot-for-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|type|query|string|true|"SPOT", "MARGIN"(cross), "FUTURES"(UM)|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|min 7, max 30, default 7|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "msg": "",
  "snapshotVos": [
    {
      "data": {
        "balances": [
          {
            "asset": "BTC",
            "free": "0.09905021",
            "locked": "0.00000000"
          }
        ],
        "totalAssetOfBtc": "0.09942700"
      },
      "type": "spot",
      "updateTime": 1576281599000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="managed-sub-account-snapshot-for-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub-account spot snapshot|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="managed-sub-account-snapshot-for-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|msg|string|true|none|none|
|snapshotVos|[object]|true|none|none|
|» data|object|true|none|none|
|» » balances|[object]|true|none|none|
|» » » asset|string|true|none|none|
|» » » free|string|true|none|none|
|» » » locked|string|true|none|none|
|» » totalAssetOfBtc|string|true|none|none|
|» type|string|true|none|none|
|» updateTime|integer(int64)|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Query Managed Sub Account Transfer Log (For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/queryTransLogForInvestor?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/queryTransLogForInvestor`

Investor can use this api to query managed sub account transfer log. This endpoint is available for investor of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team.

Weight(IP): 1

<h3 id="query-managed-sub-account-transfer-log-for-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|transfers|query|string|false|Transfer Direction (FROM/TO)|
|transferFunctionAccountType|query|string|false|Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "managerSubTransferHistoryVos": [
    {
      "fromEmail": "test_0_virtual@kq3kno9imanagedsub.com",
      "fromAccountType": "SPOT",
      "toEmail": "wdywl0lddakh@test.com",
      "toAccountType": "SPOT",
      "asset": "BNB",
      "amount": "0.01",
      "scheduledData": 1626144956000,
      "createTime": 1626144956000,
      "status": "SUCCESS",
      "tranId": 91077779
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-managed-sub-account-transfer-log-for-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Managed sub account transfer logs (for invest account)|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-managed-sub-account-transfer-log-for-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|none|
|managerSubTransferHistoryVos|[object]|true|none|none|
|» fromEmail|string|true|none|none|
|» fromAccountType|string|true|none|none|
|» toEmail|string|true|none|none|
|» toAccountType|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» scheduledData|integer(int64)|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» tranId|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Managed Sub Account Transfer Log (For Trading Team Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/queryTransLogForTradeParent?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/queryTransLogForTradeParent`

Trading team can use this api to query managed sub account transfer log. This endpoint is available for trading team of Managed Sub-Account. A Managed Sub-Account is an account type for investors who value flexibility in asset allocation and account application, while delegating trades to a professional trading team

Weight(IP): 60

<h3 id="query-managed-sub-account-transfer-log-for-trading-team-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|transfers|query|string|false|Transfer Direction (FROM/TO)|
|transferFunctionAccountType|query|string|false|Transfer function account type (SPOT/MARGIN/ISOLATED_MARGIN/USDT_FUTURE/COIN_FUTURE)|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "managerSubTransferHistoryVos": [
    {
      "fromEmail": "test_0_virtual@kq3kno9imanagedsub.com",
      "fromAccountType": "SPOT",
      "toEmail": "wdywl0lddakh@test.com",
      "toAccountType": "SPOT",
      "asset": "BNB",
      "amount": "0.01",
      "scheduledData": 1626144956000,
      "createTime": 1626144956000,
      "status": "SUCCESS",
      "tranId": 91077779
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-managed-sub-account-transfer-log-for-trading-team-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Managed sub account transfer logs (for trading team)|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-managed-sub-account-transfer-log-for-trading-team-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|none|
|managerSubTransferHistoryVos|[object]|true|none|none|
|» fromEmail|string|true|none|none|
|» fromAccountType|string|true|none|none|
|» toEmail|string|true|none|none|
|» toAccountType|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» scheduledData|integer(int64)|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» tranId|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Managed Sub-account Futures Asset Details (For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/fetch-future-asset?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/fetch-future-asset`

Investor can use this api to query managed sub account futures asset details

<h3 id="query-managed-sub-account-futures-asset-details-for-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "message": "OK",
  "snapshotVos": [
    {
      "type": "FUTURES",
      "updateTime": 1626400907000,
      "data": {
        "assets": [
          {
            "asset": "USDT",
            "marginBalance": 100,
            "walletBalance": 100
          }
        ],
        "position": [
          {
            "symbol": "BTCUSDT",
            "entryPrice": 17000,
            "markPrice": 17000,
            "positionAmt": 0.1
          }
        ]
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-managed-sub-account-futures-asset-details-for-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub account futures assset details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-managed-sub-account-futures-asset-details-for-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|
|snapshotVos|[object]|true|none|none|
|» type|string|true|none|none|
|» updateTime|integer(int64)|true|none|none|
|» data|object|true|none|none|
|» » assets|[object]|true|none|none|
|» » » asset|string|true|none|none|
|» » » marginBalance|number(float)|true|none|none|
|» » » walletBalance|number(float)|true|none|none|
|» » position|[object]|true|none|none|
|» » » symbol|string|true|none|none|
|» » » entryPrice|number(float)|true|none|none|
|» » » markPrice|number(float)|true|none|none|
|» » » positionAmt|number(float)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Managed Sub-account Margin Asset Details (For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/marginAsset?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/marginAsset`

Investor can use this api to query managed sub account margin asset details

<h3 id="query-managed-sub-account-margin-asset-details-for-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "marginLevel": "999",
  "totalAssetOfBtc": "0",
  "totalLiabilityOfBtc": "0",
  "totalNetAssetOfBtc": "0",
  "userAssets": [
    {
      "asset": "BTC",
      "borrowed": "0",
      "free": "0",
      "interest": "0",
      "locked": "0",
      "netAsset": "0"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-managed-sub-account-margin-asset-details-for-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub account margin assset details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-managed-sub-account-margin-asset-details-for-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marginLevel|string|true|none|none|
|totalAssetOfBtc|string|true|none|none|
|totalLiabilityOfBtc|string|true|none|none|
|totalNetAssetOfBtc|string|true|none|none|
|userAssets|[object]|true|none|none|
|» asset|string|true|none|none|
|» borrowed|string|true|none|none|
|» free|string|true|none|none|
|» interest|string|true|none|none|
|» locked|string|true|none|none|
|» netAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Managed Sub-account List (For Investor)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/info?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/info`

Get investor's managed sub-account list.

Weight(UID): 60

<h3 id="query-managed-sub-account-list-for-investor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 3,
  "managerSubUserInfoVoList": [
    {
      "rootUserId": 1000138475670,
      "managersubUserId": 1000137842513,
      "bindParentUserId": 1000138475669,
      "email": "test_0_virtual@kq3kno9imanagedsub.com",
      "insertTimeStamp": 1678435149000,
      "bindParentEmail": "wdyw8xsh8pey@test.com",
      "isSubUserEnabled": true,
      "isUserActive": true,
      "isMarginEnabled": true,
      "isFutureEnabled": true,
      "isSignedLVTRiskAgreement": true
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-managed-sub-account-list-for-investor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Managed sub account list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-managed-sub-account-list-for-investor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|managerSubUserInfoVoList|[object]|true|none|none|
|» rootUserId|integer(int64)|true|none|none|
|» managersubUserId|integer(int64)|true|none|none|
|» bindParentUserId|integer(int64)|true|none|none|
|» email|string|false|none|none|
|» insertTimeStamp|integer(int64)|true|none|none|
|» bindParentEmail|string|true|none|none|
|» isSubUserEnabled|boolean|true|none|none|
|» isUserActive|boolean|true|none|none|
|» isMarginEnabled|boolean|true|none|none|
|» isFutureEnabled|boolean|true|none|none|
|» isSignedLVTRiskAgreement|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Managed Sub-account Deposit Address (For Investor Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/deposit/address?email=string&coin=BNB&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/deposit/address`

Get investor's managed sub-account deposit address

Weight(UID): 1

<h3 id="get-managed-sub-account-deposit-address-for-investor-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|coin|query|string|true|Coin name|
|network|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "coin": "USDT",
  "address": "0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d",
  "tag": "string",
  "url": "https://etherscan.io/address/0x206c22d833bb0bb2102da6b7c7d4c3eb14bcf73d"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-managed-sub-account-deposit-address-for-investor-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Managed sub deposit address|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-managed-sub-account-deposit-address-for-investor-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coin|string|true|none|none|
|address|string|true|none|none|
|tag|string|true|none|none|
|url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Managed Sub Account Transfer Log (For Trading Team Sub Account)(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/managed-subaccount/query-trans-log?transfers=FROM&transferFunctionAccountType=SPOT&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/managed-subaccount/query-trans-log`

Query Managed Sub Account Transfer Log (For Trading Team Sub Account)

Weight(UID): 60

<h3 id="query-managed-sub-account-transfer-log-for-trading-team-sub-accountuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|transfers|query|string|true|Transfer Direction|
|transferFunctionAccountType|query|string|true|Transfer function account type|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|transfers|FROM|
|transfers|TO|
|transferFunctionAccountType|SPOT|
|transferFunctionAccountType|MARGIN|
|transferFunctionAccountType|ISOLATED_MARGIN|
|transferFunctionAccountType|USDT_FUTURE|
|transferFunctionAccountType|COIN_FUTURE|

> Example responses

> 200 Response

```json
{
  "count": 2,
  "managerSubTransferHistoryVos": [
    {
      "fromEmail": "test_0_virtual@kq3kno9imanagedsub.com",
      "fromAccountType": "SPOT",
      "toEmail": "wdywl0lddakh@test.com",
      "toAccountType": "SPOT",
      "asset": "BNB",
      "amount": "0.01",
      "scheduledData": 1679416673000,
      "createTime": 1679416673000,
      "status": "SUCCESS",
      "tranId": 91077779
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-managed-sub-account-transfer-log-for-trading-team-sub-accountuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Managed sub deposit address|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-managed-sub-account-transfer-log-for-trading-team-sub-accountuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|managerSubTransferHistoryVos|[object]|true|none|none|
|» fromEmail|string|true|none|none|
|» fromAccountType|string|true|none|none|
|» toEmail|string|true|none|none|
|» toAccountType|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» scheduledData|integer(int64)|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get IP Restriction for a Sub-account API Key (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/subAccountApi/ipRestriction?email=string&subAccountApiKey=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/subAccountApi/ipRestriction`

Weight(UID): 3000

<h3 id="get-ip-restriction-for-a-sub-account-api-key-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|subAccountApiKey|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "ipRestrict": "true",
  "ipList": [
    "69.210.67.14",
    "8.34.21.10"
  ],
  "updateTime": 1636369557189,
  "apiKey": "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-ip-restriction-for-a-sub-account-api-key-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP Restriction information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-ip-restriction-for-a-sub-account-api-key-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipRestrict|string|true|none|none|
|ipList|[string]|true|none|none|
|updateTime|integer(int64)|true|none|none|
|apiKey|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Delete IP List for a Sub-account API Key (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList?email=string&subAccountApiKey=string&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/sub-account/subAccountApi/ipRestriction/ipList`

Weight(UID): 3000

<h3 id="delete-ip-list-for-a-sub-account-api-key-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|subAccountApiKey|query|string|true|none|
|ipAddress|query|string|false|Can be added in batches, separated by commas|
|thirdPartyName|query|string|false|third party IP list name|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "ipRestrict": "true",
  "ipList": [
    "69.210.67.14",
    "thirdPartyName"
  ],
  "updateTime": 1636369557189,
  "apiKey": "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="delete-ip-list-for-a-sub-account-api-key-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete IP information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="delete-ip-list-for-a-sub-account-api-key-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipRestrict|string|true|none|none|
|ipList|[string]|true|none|none|
|updateTime|integer(int64)|true|none|none|
|apiKey|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Sub-account Transaction Statistics (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/transaction-statistics?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/sub-account/transaction-statistics`

Query Sub-account Transaction statistics (For Master Account).

Weight(UID): 60

<h3 id="query-sub-account-transaction-statistics-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "recent30BtcTotal": "0",
  "recent30BtcFuturesTotal": "0",
  "recent30BtcMarginTotal": "0",
  "recent30BusdTotal": "0",
  "recent30BusdFuturesTotal": "0",
  "recent30BusdMarginTotal": "0",
  "tradeInfoVos": [
    {
      "userId": 1000138138384,
      "btc": 0,
      "btcFutures": 0,
      "btcMargin": 0,
      "busd": 0,
      "busdFutures": 0,
      "busdMargin": 0,
      "date": 1676851200000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-sub-account-transaction-statistics-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub account transaction statistics|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-sub-account-transaction-statistics-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recent30BtcTotal|string|true|none|none|
|recent30BtcFuturesTotal|string|true|none|none|
|recent30BtcMarginTotal|string|true|none|none|
|recent30BusdTotal|string|true|none|none|
|recent30BusdFuturesTotal|string|true|none|none|
|recent30BusdMarginTotal|string|true|none|none|
|tradeInfoVos|[object]|true|none|none|
|» userId|integer(int64)|false|none|none|
|» btc|number(float)|false|none|none|
|» btcFutures|number(float)|false|none|none|
|» btcMargin|number(float)|false|none|none|
|» busd|number(float)|false|none|none|
|» busdFutures|number(float)|false|none|none|
|» busdMargin|number(float)|false|none|none|
|» date|integer(int64)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Enable Options for Sub-account (For Master Account)(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/sub-account/eoptions/enable?email=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/sub-account/eoptions/enable`

Enable Options for Sub-account (For Master Account).

Weight(IP): 1

<h3 id="enable-options-for-sub-account-for-master-accountuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "email": "alice@test.com",
  "isEOptionsEnabled": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="enable-options-for-sub-account-for-master-accountuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub account EOptions status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="enable-options-for-sub-account-for-master-accountuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|isEOptionsEnabled|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Update IP Restriction for Sub-Account API key (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/sub-account/subAccountApi/ipRestriction?email=string&subAccountApiKey=string&status=1&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v2/sub-account/subAccountApi/ipRestriction`

Update IP Restriction for Sub-Account API key

Weight(UID): 3000

<h3 id="update-ip-restriction-for-sub-account-api-key-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|Sub-account email|
|subAccountApiKey|query|string|true|none|
|status|query|string|true|IP Restriction status. 1 = IP Unrestricted. 2 = Restrict access to trusted IPs only. 3 = Restrict access to users' trusted third party IPs only|
|thirdPartyName|query|string|false|third party IP list name|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "status": "2",
  "ipList": [
    "69.210.67.14",
    "8.34.21.10",
    "thirdPartyName"
  ],
  "updateTime": 1636369557189,
  "apiKey": "k5V49ldtn4tszj6W3hystegdfvmGbqDzjmkCtpTvC0G74WhK7yd4rfCTo4lShf"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="update-ip-restriction-for-sub-account-api-key-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update IP Restriction|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="update-ip-restriction-for-sub-account-api-key-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|ipList|[string]|true|none|none|
|updateTime|integer(int64)|true|none|none|
|apiKey|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Sub-account Assets (For Master Account)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v4/sub-account/assets?email=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v4/sub-account/assets`

Fetch sub-account assets

Weight(UID): 60

<h3 id="query-sub-account-assets-for-master-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "asset": "BNB",
      "free": "10000",
      "locked": "0"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-sub-account-assets-for-master-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub account balances|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-sub-account-assets-for-master-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[object]|true|none|none|
|» asset|string|true|none|none|
|» free|string|true|none|none|
|» locked|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-stream">Stream</h1>

User Data Stream

## Ping/Keep-alive a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/api/v3/userDataStream \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`PUT /api/v3/userDataStream`

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.

Weight: 2

<h3 id="pingkeep-alive-a-listenkey-userstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listenKey|query|string|false|User websocket listen key|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="pingkeep-alive-a-listenkey-userstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/api/v3/userDataStream \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /api/v3/userDataStream`

Start a new user data stream.
The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

Weight: 2

> Example responses

> 200 Response

```json
{
  "listenKey": "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
}
```

<h3 id="create-a-listenkey-userstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listen key|Inline|

<h3 id="create-a-listenkey-userstream-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listenKey|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Close a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/api/v3/userDataStream \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /api/v3/userDataStream`

Close out a user data stream.

Weight: 2

<h3 id="close-a-listenkey-userstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listenKey|query|string|false|User websocket listen key|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="close-a-listenkey-userstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-margin-stream">Margin Stream</h1>

Margin User Data Stream

## Ping/Keep-alive a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/userDataStream \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`PUT /sapi/v1/userDataStream`

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.

Weight: 1

<h3 id="pingkeep-alive-a-listenkey-userstream-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listenKey|query|string|false|User websocket listen key|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="pingkeep-alive-a-listenkey-userstream-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Create a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/userDataStream \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/userDataStream`

Start a new user data stream.
The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

Weight: 1

> Example responses

> 200 Response

```json
{
  "listenKey": "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"
}
```

<h3 id="create-a-listenkey-userstream-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Margin listen key|Inline|

<h3 id="create-a-listenkey-userstream-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listenKey|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Close a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/userDataStream \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/userDataStream`

Close out a user data stream.

Weight: 1

<h3 id="close-a-listenkey-userstream-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listenKey|query|string|false|User websocket listen key|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="close-a-listenkey-userstream-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-isolated-margin-stream">Isolated Margin Stream</h1>

Isolated User Data Stream

## Ping/Keep-alive a Listen Key (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/userDataStream/isolated \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`PUT /sapi/v1/userDataStream/isolated`

Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes.

Weight: 1

<h3 id="pingkeep-alive-a-listen-key-userstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listenKey|query|string|false|User websocket listen key|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="pingkeep-alive-a-listen-key-userstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Generate a Listen Key (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/userDataStream/isolated \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/userDataStream/isolated`

Start a new user data stream.
The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes.

Weight: 1

> Example responses

> 200 Response

```json
{
  "listenKey": "T3ee22BIYuWqmvne0HNq2A2WsFlEtLhvWCtItw6ffhhdmjifQ2tRbuKkTHhr"
}
```

<h3 id="generate-a-listen-key-userstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isolated margin listen key|Inline|

<h3 id="generate-a-listen-key-userstream-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listenKey|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Close a ListenKey (USER_STREAM)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/userDataStream/isolated \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/userDataStream/isolated`

Close out a user data stream.

Weight: 1

<h3 id="close-a-listenkey-userstream-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listenKey|query|string|false|User websocket listen key|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="close-a-listenkey-userstream-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-savings">Savings</h1>

Savings Endpoints

## Get Fixed/Activity Project List(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/project/list?type=ACTIVITY&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/project/list`

Weight(IP): 1

<h3 id="get-fixedactivity-project-listuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|type|query|string|true|none|
|status|query|string|false|Default `ALL`|
|isSortAsc|query|boolean|false|default "true"|
|sortBy|query|string|false|Default `START_TIME`|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ACTIVITY|
|type|CUSTOMIZED_FIXED|
|status|ALL|
|status|SUBSCRIBABLE|
|status|UNSUBSCRIBABLE|
|sortBy|START_TIME|
|sortBy|LOT_SIZE|
|sortBy|INTEREST_RATE|
|sortBy|DURATION|

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDT",
    "displayPriority": 1,
    "duration": 90,
    "interestPerLot": "1.35810000",
    "interestRate": "0.05510000",
    "lotSize": "100.00000000",
    "lotsLowLimit": 1,
    "lotsPurchased": 74155,
    "lotsUpLimit": 80000,
    "maxLotsPerUser": 2000,
    "needKyc": true,
    "projectId": "CUSDT90DAYSS001",
    "projectName": "USDT",
    "status": "PURCHASING",
    "type": "CUSTOMIZED_FIXED",
    "withAreaLimitation": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-fixedactivity-project-listuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of fixed projects|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-fixedactivity-project-listuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» displayPriority|integer(int64)|true|none|none|
|» duration|integer(int64)|true|none|none|
|» interestPerLot|string|true|none|none|
|» interestRate|string|true|none|none|
|» lotSize|string|true|none|none|
|» lotsLowLimit|integer(int64)|true|none|none|
|» lotsPurchased|integer(int64)|true|none|none|
|» lotsUpLimit|integer(int64)|true|none|none|
|» maxLotsPerUser|integer(int64)|true|none|none|
|» needKyc|boolean|true|none|none|
|» projectId|string|true|none|none|
|» projectName|string|true|none|none|
|» status|string|true|none|none|
|» type|string|true|none|none|
|» withAreaLimitation|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Purchase Fixed/Activity Project (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/customizedFixed/purchase?projectId=string&lot=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/customizedFixed/purchase`

Weight(IP): 1

<h3 id="purchase-fixedactivity-project-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|lot|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "purchaseId": "18356"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="purchase-fixedactivity-project-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated Purchase Id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="purchase-fixedactivity-project-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Fixed/Activity Project Position (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/project/position/list?asset=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/project/position/list`

Weight(IP): 1

<h3 id="get-fixedactivity-project-position-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|projectId|query|string|false|none|
|status|query|string|false|Default `ALL`|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ALL|
|status|SUBSCRIBABLE|
|status|UNSUBSCRIBABLE|

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDT",
    "canTransfer": true,
    "createTimestamp": 1587010770000,
    "duration": 14,
    "endTime": 1588291200000,
    "interest": "0.19950000",
    "interestRate": "0.05201250",
    "lot": 1,
    "positionId": 51724,
    "principal": "100.00000000",
    "projectId": "CUSDT14DAYSS001",
    "projectName": "USDT",
    "purchaseTime": 1587010771000,
    "redeemDate": "2020-05-01",
    "startTime": 1587081600000,
    "status": "HOLDING",
    "type": "CUSTOMIZED_FIXED"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-fixedactivity-project-position-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of fixed project positions|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-fixedactivity-project-position-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» canTransfer|boolean|true|none|none|
|» createTimestamp|integer(int64)|true|none|none|
|» duration|integer(int64)|true|none|none|
|» endTime|integer(int64)|true|none|none|
|» interest|string|true|none|none|
|» interestRate|string|true|none|none|
|» lot|integer(int64)|true|none|none|
|» positionId|integer(int64)|true|none|none|
|» principal|string|true|none|none|
|» projectId|string|true|none|none|
|» projectName|string|true|none|none|
|» purchaseTime|integer(int64)|true|none|none|
|» redeemDate|string(date)|true|none|none|
|» startTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Change Fixed/Activity Position to Daily Position (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/positionChanged?projectId=string&lot=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/positionChanged`

- PositionId is mandatory parameter for fixed position.

Weight(IP): 1

<h3 id="change-fixedactivity-position-to-daily-position-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|lot|query|string|true|none|
|positionId|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "dailyPurchaseId": 862290,
  "success": true,
  "time": 1577233578000
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="change-fixedactivity-position-to-daily-position-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Purchase information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="change-fixedactivity-position-to-daily-position-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyPurchaseId|integer(int64)|true|none|none|
|success|boolean|true|none|none|
|time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-mining">Mining</h1>

Mining Endpoints

## Acquiring Algorithm (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/mining/pub/algoList \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/pub/algoList`

Weight(IP): 1

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "algoName": "sha256",
      "algoId": 1,
      "poolIndex": 0,
      "unit": "h/s"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="acquiring-algorithm-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Algorithm information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="acquiring-algorithm-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|[object]|true|none|none|
|» algoName|string|true|none|none|
|» algoId|integer(int64)|true|none|none|
|» poolIndex|integer(int64)|true|none|none|
|» unit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Acquiring CoinName (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/mining/pub/coinList \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/pub/coinList`

Weight(IP): 1

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "coinName": "BTC",
      "coinId": 1,
      "poolIndex": 0,
      "algoId": 1,
      "algoName": "sha256"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="acquiring-coinname-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Coin information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="acquiring-coinname-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|[object]|true|none|none|
|» coinName|string|true|none|none|
|» coinId|integer(int64)|true|none|none|
|» poolIndex|integer(int64)|true|none|none|
|» algoId|integer(int64)|true|none|none|
|» algoName|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Request for Detail Miner List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/worker/detail?algo=string&userName=string&workerName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/worker/detail`

Weight(IP): 5

<h3 id="request-for-detail-miner-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|userName|query|string|true|Mining Account|
|workerName|query|string|true|Miner’s name|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "workerName": "bhdc1.16A10404B",
      "type": "H_hashrate",
      "hashrateDatas": [
        {
          "time": 1587902400000,
          "hashrate": "0",
          "reject": 0
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="request-for-detail-miner-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of workers' hashrates'|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="request-for-detail-miner-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|[object]|true|none|none|
|» workerName|string|true|none|Mining Account name|
|» type|string|true|none|Type of hourly hashrate|
|» hashrateDatas|[object]|true|none|none|
|» » time|integer(int64)|true|none|none|
|» » hashrate|string|true|none|none|
|» » reject|integer(int64)|true|none|Rejection Rate|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Request for Miner List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/worker/list?algo=string&userName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/worker/list`

Weight(IP): 5

<h3 id="request-for-miner-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|userName|query|string|true|Mining Account|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|sort|query|integer(int32)|false|sort sequence(default=0)0 positive sequence, 1 negative sequence|
|sortColumn|query|integer(int32)|false|Sort by( default 1): 1: miner name, 2: real-time computing power, 3: daily average computing power, 4: real-time rejection rate, 5: last submission time|
|workerStatus|query|integer(int32)|false|miners status(default=0)0 all, 1 valid, 2 invalid, 3 failure|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "workerDatas": [
      {
        "workerId": "1420554439452400131",
        "workerName": "2X73",
        "status": 3,
        "hashRate": 0,
        "dayHashRate": 0,
        "rejectRate": 0,
        "lastShareTime": 1587712919000
      }
    ],
    "totalNum": 18530,
    "pageSize": 20
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="request-for-miner-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of workers|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="request-for-miner-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» workerDatas|[object]|true|none|none|
|» » workerId|string|true|none|none|
|» » workerName|string|true|none|none|
|» » status|integer(int64)|true|none|Status：1 valid, 2 invalid, 3 no longer valid|
|» » hashRate|integer(int64)|true|none|Real-time rate|
|» » dayHashRate|integer(int64)|true|none|24H Hashrate|
|» » rejectRate|integer(int64)|true|none|Real-time Rejection Rate|
|» » lastShareTime|integer(int64)|true|none|Last submission time|
|» totalNum|integer(int64)|true|none|none|
|» pageSize|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Earnings List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/payment/list?algo=string&userName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/payment/list`

Weight(IP): 5

<h3 id="earnings-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|userName|query|string|true|Mining Account|
|coin|query|string|false|Coin name|
|startDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|endDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|pageSize|query|string|false|Number of pages, minimum 10, maximum 200|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "accountProfits": [
      {
        "time": 1586188800000,
        "type": 31,
        "hashTransfer": null,
        "transferAmount": null,
        "dayHashRate": 129129903378244,
        "profitAmount": 8.6083060304,
        "coinName": "BTC",
        "status": 2
      }
    ],
    "totalNum": 3,
    "pageSize": 20
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="earnings-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of earnings|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="earnings-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» accountProfits|[object]|true|none|none|
|» » time|integer(int64)|true|none|Mining date|
|» » type|integer(int64)|true|none|0:Mining Wallet,5:Mining Address,7:Pool Savings,8:Transferred,31:Income Transfer ,32:Hashrate Resale-Mining Wallet 33:Hashrate Resale-Pool Savings|
|» » hashTransfer|integer(nullable)|true|none|Transferred Hashrate|
|» » transferAmount|number(nullable)|true|none|Transferred Income|
|» » dayHashRate|integer(int64)|true|none|Daily Hashrate|
|» » profitAmount|number(double)|true|none|Earnings Amount|
|» » coinName|string|true|none|Coin Type|
|» » status|integer(int32)|true|none|Status：0:Unpaid, 1:Paying  2：Paid|
|» totalNum|integer(int64)|true|none|Total Rows|
|» pageSize|integer(int64)|true|none|Rows per page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Extra Bonus List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/payment/other?algo=string&userName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/payment/other`

Weight(IP): 5

<h3 id="extra-bonus-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|userName|query|string|true|Mining Account|
|coin|query|string|false|Coin name|
|startDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|endDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|pageSize|query|string|false|Number of pages, minimum 10, maximum 200|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "otherProfits": [
      {
        "time": 1607443200000,
        "coinName": "BTC",
        "type": 4,
        "profitAmount": 0.0011859,
        "status": 2
      }
    ],
    "totalNum": 3,
    "pageSize": 20
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="extra-bonus-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of extra bonuses|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="extra-bonus-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» otherProfits|[object]|true|none|none|
|» » time|integer(int64)|true|none|Mining date|
|» » coinName|string|true|none|Coin Name|
|» » type|integer(int32)|true|none|1: Merged Mining, 2: Activity Bonus, 3:Rebate 4:Smart Pool 6:Income Transfer 7:Pool Savings|
|» » profitAmount|number(double)|true|none|none|
|» » status|integer(int32)|true|none|0:Unpaid, 1:Paying  2：Paid|
|» totalNum|integer(int64)|true|none|Total Rows|
|» pageSize|integer(int64)|true|none|Rows per page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Hashrate Resale List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/hash-transfer/config/details/list?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/hash-transfer/config/details/list`

Weight(IP): 5

<h3 id="hashrate-resale-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|pageSize|query|string|false|Number of pages, minimum 10, maximum 200|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "configDetails": [
      {
        "configId": 168,
        "poolUsername": "123",
        "toPoolUsername": "user1",
        "algoName": "Ethash",
        "hashRate": 5000000,
        "startDay": 20201210,
        "endDay": 20210405,
        "status": 1
      }
    ],
    "totalNum": 21,
    "pageSize": 200
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="hashrate-resale-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of hashrate resales|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="hashrate-resale-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» configDetails|[object]|true|none|none|
|» » configId|integer(int64)|true|none|Mining ID|
|» » poolUsername|string|true|none|Transfer out of subaccount|
|» » toPoolUsername|string|true|none|Transfer into subaccount|
|» » algoName|string|true|none|Transfer algorithm|
|» » hashRate|integer(int64)|true|none|Transferred Hashrate quantity|
|» » startDay|integer(int64)|true|none|Start date|
|» » endDay|integer(int64)|true|none|End date|
|» » status|integer(int32)|true|none|0 Processing, 1：Cancelled, 2：Terminated |
|» totalNum|integer(int64)|true|none|none|
|» pageSize|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Hashrate Resale Details (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/hash-transfer/profit/details?configId=string&userName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/hash-transfer/profit/details`

Weight(IP): 5

<h3 id="hashrate-resale-details-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|query|string|true|Mining ID|
|userName|query|string|true|Mining Account|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|pageSize|query|string|false|Number of pages, minimum 10, maximum 200|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "profitTransferDetails": [
      {
        "poolUsername": "test4001",
        "toPoolUsername": "pop",
        "algoName": "sha256",
        "hashRate": 200000000000,
        "day": 20201213,
        "amount": 0.2256872,
        "coinName": "BTC"
      }
    ],
    "totalNum": 8,
    "pageSize": 200
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="hashrate-resale-details-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of hashrate resale details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="hashrate-resale-details-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» profitTransferDetails|[object]|true|none|none|
|» » poolUsername|string|true|none|Transfer out of sub-account|
|» » toPoolUsername|string|true|none|Transfer into subaccount|
|» » algoName|string|true|none|Transfer algorithm|
|» » hashRate|integer(int64)|true|none|Transferred Hashrate quantity|
|» » day|integer(int64)|true|none|Transfer date|
|» » amount|number(double)|true|none|Transfer income|
|» » coinName|string|true|none|none|
|» totalNum|integer(int64)|true|none|none|
|» pageSize|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Hashrate Resale Request (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/hash-transfer/config?userName=string&algo=string&toPoolUser=string&hashRate=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/mining/hash-transfer/config`

Weight(IP): 5

<h3 id="hashrate-resale-request-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userName|query|string|true|Mining Account|
|algo|query|string|true|Algorithm(sha256)|
|startDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|endDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|toPoolUser|query|string|true|Mining Account|
|hashRate|query|string|true|Resale hashrate h/s must be transferred (BTC is greater than 500000000000 ETH is greater than 500000)|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": 171
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="hashrate-resale-request-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mining Account Id|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="hashrate-resale-request-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|integer(int64)|true|none|Mining Account|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel Hashrate Resale configuration (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/hash-transfer/config/cancel?configId=string&userName=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/mining/hash-transfer/config/cancel`

Weight(IP): 5

<h3 id="cancel-hashrate-resale-configuration-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|query|string|true|Mining ID|
|userName|query|string|true|Mining Account|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-hashrate-resale-configuration-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success flag|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="cancel-hashrate-resale-configuration-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Statistic List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/statistics/user/status?algo=string&userName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/statistics/user/status`

Weight(IP): 5

<h3 id="statistic-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|userName|query|string|true|Mining Account|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "fifteenMinHashRate": "457835490067496409.00000000",
    "dayHashRate": "214289268068874127.65000000",
    "validNum": 0,
    "invalidNum": 17562,
    "profitToday": {
      "BTC": "0.00314332",
      "BSV": "56.17055953",
      "BCH": "106.61586001"
    },
    "profitYesterday": {
      "BTC": "0.00314332",
      "BSV": "56.17055953",
      "BCH": "106.61586001"
    },
    "userName": "test",
    "unit": "h/s",
    "algo": "sha256"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="statistic-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mining account statistics|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="statistic-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» fifteenMinHashRate|string|true|none|none|
|» dayHashRate|string|true|none|none|
|» validNum|integer(int64)|true|none|none|
|» invalidNum|integer(int64)|true|none|none|
|» profitToday|object|true|none|none|
|» » BTC|string|true|none|none|
|» » BSV|string|true|none|none|
|» » BCH|string|true|none|none|
|» profitYesterday|object|true|none|none|
|» » BTC|string|true|none|none|
|» » BSV|string|true|none|none|
|» » BCH|string|true|none|none|
|» userName|string|true|none|none|
|» unit|string|true|none|none|
|» algo|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Account List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/statistics/user/list?algo=string&userName=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/statistics/user/list`

Weight(IP): 5

<h3 id="account-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|userName|query|string|true|Mining Account|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": [
    {
      "type": "H_hashrate",
      "userName": "test",
      "list": [
        {
          "time": 1585267200000,
          "hashrate": "0.00000000",
          "reject": "0.00000000"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="account-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of mining accounts|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="account-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|data|[object]|true|none|none|
|» type|string|true|none|none|
|» userName|string|true|none|none|
|» list|[object]|true|none|none|
|» » time|integer(int64)|true|none|none|
|» » hashrate|string|true|none|none|
|» » reject|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Mining Account Earning (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/mining/payment/uid?algo=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/mining/payment/uid`

Weight(IP): 5

<h3 id="mining-account-earning-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algo|query|string|true|Algorithm(sha256)|
|startDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|endDate|query|string|false|Search date, millisecond timestamp, while empty query all|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|pageSize|query|string|false|Number of pages, minimum 10, maximum 200|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": 0,
  "msg": "",
  "data": {
    "accountProfits": [
      {
        "time": 1607443200000,
        "coinName": "BTC",
        "type": 2,
        "puid": 59985472,
        "subName": "vdvaghani",
        "amount": 0.09186957
      }
    ],
    "totalNum": 3,
    "pageSize": 20
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="mining-account-earning-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mining account earnings|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="mining-account-earning-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|msg|string|true|none|none|
|data|object|true|none|none|
|» accountProfits|[object]|true|none|none|
|» » time|integer(int64)|true|none|none|
|» » coinName|string|true|none|none|
|» » type|integer(int32)|true|none|0:Referral 1:Refund 2:Rebate|
|» » puid|integer(int32)|true|none|puid|
|» » subName|string|true|none|Mining account|
|» » amount|number|true|none|none|
|» totalNum|integer(int32)|true|none|none|
|» pageSize|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-futures">Futures</h1>

Futures Endpoints

## Get Future Account Transaction History List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/futures/transfer?asset=BTC&startTime=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/futures/transfer`

Weight(IP): 10

<h3 id="get-future-account-transaction-history-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|startTime|query|integer(int64)|true|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "asset": "USDT",
      "tranId": 100000001,
      "amount": "40.84624400",
      "type": "1",
      "timestamp": 1555056425000,
      "status": "CONFIRMED"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-future-account-transaction-history-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures Transfer Query|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-future-account-transaction-history-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» asset|string|true|none|none|
|» tranId|integer(int64)|true|none|none|
|» amount|string|true|none|none|
|» type|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|
|» status|string|true|none|one of PENDING (pending to execution), CONFIRMED (successfully transfered), FAILED (execution failed, nothing happened to your account);|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## New Future Account Transfer (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/futures/transfer?asset=BTC&amount=1.01&type=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/futures/transfer`

Execute transfer between spot account and futures account.

Weight(IP): 1

<h3 id="new-future-account-transfer-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|amount|query|number(double)|true|none|
|type|query|integer(int64)|true|1: transfer from spot account to USDT-Ⓜ futures account. 2: transfer from USDT-Ⓜ futures account to spot account. 3: transfer from spot account to COIN-Ⓜ futures account. 4: transfer from COIN-Ⓜ futures account to spot account.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "tranId": 100000001
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="new-future-account-transfer-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures Transfer|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="new-future-account-transfer-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Future TickLevel Orderbook Historical Data Download Link (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/futures/histDataLink?symbol=BTCUSDT&dataType=T_DEPTH&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/futures/histDataLink`

Weight(IP): 1

<h3 id="get-future-ticklevel-orderbook-historical-data-download-link-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|none|
|dataType|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataType|T_DEPTH|
|dataType|S_DEPTH|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "day": "2023-06-30",
      "url": "https://bin-prod-user-rebate-bucket.s3.ap-northeast-1.amazonaws.com/xxx"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-future-ticklevel-orderbook-historical-data-download-link-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|data link|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-future-ticklevel-orderbook-historical-data-download-link-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» day|string|true|none|none|
|» url|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-futures-algo">Futures Algo</h1>

Futures Algo Endpoints

## Volume Participation(VP) New Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/futures/newOrderVp?symbol=BNBUSDT&side=SELL&quantity=0&urgency=LOW&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/algo/futures/newOrderVp`

Send in a VP new order. Only support on USDⓈ-M Contracts.

- You need to enable `Futures Trading Permission` for the api key which requests this endpoint.
- Base URL: https://api.binance.com

- Total Algo open orders max allowed: 10 orders.
- Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.
- Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it.

Weight(UID): 3000

<h3 id="volume-participationvp-new-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|positionSide|query|string|false|Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.|
|quantity|query|number(double)|true|Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT|
|urgency|query|string|true|Represent the relative speed of the current execution; ENUM: LOW, MEDIUM, HIGH|
|clientAlgoId|query|string|false|A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value|
|reduceOnly|query|boolean|false|'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position|
|limitPrice|query|number(double)|false|Limit price of the order; If it is not sent, will place order by market price by default|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|positionSide|BOTH|
|positionSide|LONG|
|positionSide|SHORT|
|urgency|LOW|
|urgency|MEDIUM|
|urgency|HIGH|

> Example responses

> 200 Response

```json
{
  "clientAlgoId": "00358ce6a268403398bd34eaa36dffe7",
  "success": true,
  "code": 0,
  "msg": "OK"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="volume-participationvp-new-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Volume Participation(VP) Order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="volume-participationvp-new-order-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientAlgoId|string|true|none|none|
|success|boolean|true|none|none|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Time-Weighted Average Price(Twap) New Order (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/futures/newOrderTwap?symbol=BNBUSDT&side=SELL&quantity=0&duration=300&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/algo/futures/newOrderTwap`

Send in a Twap new order. Only support on USDⓈ-M Contracts.

You need to enable Futures Trading Permission for the api key which requests this endpoint.
Base URL: https://api.binance.com

- Total Algo open orders max allowed: 10 orders.
- Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi.
- Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it.
- quantity * 60 / duration should be larger than minQty
- duration cannot be less than 5 mins or more than 24 hours.
- For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol.

Weight(UID): 3000

<h3 id="time-weighted-average-pricetwap-new-order-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|positionSide|query|string|false|Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.|
|quantity|query|number(double)|true|Quantity of base asset; The notional (quantity * mark price(base asset)) must be more than the equivalent of 10,000 USDT and less than the equivalent of 1,000,000 USDT|
|duration|query|integer(int64)|true|Duration for TWAP orders in seconds. [300, 86400];Less than 5min => defaults to 5 min; Greater than 24h => defaults to 24h|
|clientAlgoId|query|string|false|A unique id among Algo orders (length should be 32 characters)， If it is not sent, we will give default value|
|reduceOnly|query|boolean|false|'true' or 'false'. Default 'false'; Cannot be sent in Hedge Mode; Cannot be sent when you open a position|
|limitPrice|query|number(double)|false|Limit price of the order; If it is not sent, will place order by market price by default|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|positionSide|BOTH|
|positionSide|LONG|
|positionSide|SHORT|

> Example responses

> 200 Response

```json
{
  "clientAlgoId": "00358ce6a268403398bd34eaa36dffe7",
  "success": true,
  "code": 0,
  "msg": "OK"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="time-weighted-average-pricetwap-new-order-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Time-Weighted Average Price(Twap) New Order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="time-weighted-average-pricetwap-new-order-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientAlgoId|string|true|none|none|
|success|boolean|true|none|none|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel Algo Order(TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/futures/order?algoId=0&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/algo/futures/order`

Cancel an active order.
- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

<h3 id="cancel-algo-ordertrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algoId|query|integer(int64)|true|Eg. 14511|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "algoId": 14511,
  "success": true,
  "code": 0,
  "msg": "OK"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-algo-ordertrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancelled order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="cancel-algo-ordertrade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algoId|integer(int64)|true|none|none|
|success|boolean|true|none|none|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Current Algo Open Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/futures/openOrders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/algo/futures/openOrders`

- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

<h3 id="query-current-algo-open-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "orders": [
    {
      "algoId": 14517,
      "symbol": "ETHUSDT",
      "side": "SELL",
      "positionSide": "SHORT",
      "totalQty": "5.00",
      "executedQty": "0.000",
      "executedAmt": "0.00000000",
      "avgPrice": "0.00",
      "clientAlgoId": "d7096549481642f8a0bb69e9e2e31f2e",
      "bookTime": 1649756817004,
      "endTime": 0,
      "algoStatus": "WORKING",
      "algoType": "VP",
      "urgency": "LOW"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-current-algo-open-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Open Algo Orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-current-algo-open-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|orders|[object]|false|none|none|
|» algoId|integer(int64)|true|none|none|
|» symbol|string|true|none|none|
|» side|string|true|none|none|
|» positionSide|string|true|none|none|
|» totalQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» executedAmt|string|true|none|none|
|» avgPrice|string|true|none|none|
|» clientAlgoId|string|true|none|none|
|» bookTime|integer(int64)|true|none|none|
|» endTime|integer(int64)|true|none|none|
|» algoStatus|string|true|none|none|
|» algoType|string|true|none|none|
|» urgency|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Historical Algo Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/futures/historicalOrders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/algo/futures/historicalOrders`

- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

<h3 id="query-historical-algo-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|false|Trading symbol, e.g. BNBUSDT|
|side|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|pageSize|query|string|false|MIN 1, MAX 100; Default 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "orders": [
    {
      "algoId": 14517,
      "symbol": "ETHUSDT",
      "side": "SELL",
      "positionSide": "SHORT",
      "totalQty": "5.00",
      "executedQty": "0.000",
      "executedAmt": "0.00000000",
      "avgPrice": "0.00",
      "clientAlgoId": "d7096549481642f8a0bb69e9e2e31f2e",
      "bookTime": 1649756817004,
      "endTime": 1649757088101,
      "algoStatus": "WORKING",
      "algoType": "VP",
      "urgency": "LOW"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-historical-algo-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Historical Algo Orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-historical-algo-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|orders|[object]|true|none|none|
|» algoId|integer(int64)|true|none|none|
|» symbol|string|true|none|none|
|» side|string|true|none|none|
|» positionSide|string|true|none|none|
|» totalQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» executedAmt|string|true|none|none|
|» avgPrice|string|true|none|none|
|» clientAlgoId|string|true|none|none|
|» bookTime|integer(int64)|true|none|none|
|» endTime|integer(int64)|true|none|none|
|» algoStatus|string|true|none|none|
|» algoType|string|true|none|none|
|» urgency|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Sub Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/futures/subOrders?algoId=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/algo/futures/subOrders`

- You need to enable Futures Trading Permission for the api key which requests this endpoint.
- Base URL: https://api.binance.com

Weight(IP): 1

<h3 id="query-sub-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algoId|query|integer(int64)|true|none|
|page|query|integer(int32)|false|Default 1|
|pageSize|query|string|false|MIN 1, MAX 100; Default 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "executedQty": "1.000",
  "executedAmt": "3229.44000000",
  "subOrders": [
    {
      "algoId": 13723,
      "orderId": 8389765519993909000,
      "orderStatus": "FILLED",
      "executedQty": "1.000",
      "executedAmt": "3229.44000000",
      "feeAmt": "-1.61471999",
      "feeAsset": "USDT",
      "bookTime": 1649756817004,
      "avgPrice": "3229.44",
      "side": "SELL",
      "symbol": "ETHUSDT",
      "subId": 1,
      "timeInForce": "IMMEDIATE_OR_CANCEL",
      "origQty": "1.000"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-sub-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-sub-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|executedQty|string|true|none|none|
|executedAmt|string|true|none|none|
|subOrders|[object]|true|none|none|
|» algoId|integer(int64)|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderStatus|string|true|none|none|
|» executedQty|string|false|none|none|
|» executedAmt|string|true|none|none|
|» feeAmt|string|true|none|none|
|» feeAsset|string|true|none|none|
|» bookTime|integer(int64)|true|none|none|
|» avgPrice|string|true|none|none|
|» side|string|true|none|none|
|» symbol|string|true|none|none|
|» subId|integer(int64)|true|none|none|
|» timeInForce|string|true|none|none|
|» origQty|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-spot-algo">Spot Algo</h1>

Spot Algo Endpoints

## Time-Weighted Average Price (Twap) New Order

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/spot/newOrderTwap?symbol=BNBUSDT&side=SELL&quantity=1&duration=300&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/algo/spot/newOrderTwap`

Place a new spot TWAP order with Algo service.

Weight(UID): 3000

<h3 id="time-weighted-average-price-twap-new-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|quantity|query|number(double)|true|none|
|duration|query|integer(int32)|true|none|
|clientAlgoId|query|string|false|none|
|limitPrice|query|number(float)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|

> Example responses

> 200 Response

```json
{
  "clientAlgoId": "65ce1630101a480b85915d7e11fd5078",
  "success": true,
  "code": 0,
  "msg": "OK"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="time-weighted-average-price-twap-new-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|twap order response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="time-weighted-average-price-twap-new-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientAlgoId|string|true|none|none|
|success|boolean|true|none|none|
|code|integer|true|none|none|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel Algo Order

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/spot/order?algoId=1&timestamp=0&signature=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`DELETE /sapi/v1/algo/spot/order`

Cancel an open TWAP order

Weight(IP): 1

<h3 id="cancel-algo-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algoId|query|integer(int64)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "algoId": 14511,
  "success": true,
  "code": 0,
  "msg": "OK"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-algo-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancelled twap order response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="cancel-algo-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algoId|integer(int64)|true|none|none|
|success|boolean|true|none|none|
|code|integer|true|none|none|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Current Algo Open Orders

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/spot/openOrders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/algo/spot/openOrders`

Get all open SPOT TWAP orders

Weight(IP): 1

<h3 id="query-current-algo-open-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "orders": [
    {
      "algoId": 14517,
      "symbol": "ETHUSDT",
      "side": "SELL",
      "totalQty": "5.000",
      "executedQty": "0.000",
      "executedAmt": "0.000",
      "avgPrice": "0.00",
      "clientAlgoId": "d7096549481642f8a0bb69e9e2e31f2e",
      "bookTime": 1649756817004,
      "endTime": 1649756817004,
      "algoStatus": "WORKING",
      "algoType": "TWAP",
      "urgency": "LOW"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-current-algo-open-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|twap open orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-current-algo-open-orders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|none|
|orders|[object]|true|none|none|
|» algoId|integer|true|none|none|
|» symbol|string|true|none|none|
|» side|string|true|none|none|
|» totalQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» executedAmt|string|true|none|none|
|» avgPrice|string|true|none|none|
|» clientAlgoId|string|true|none|none|
|» bookTime|integer(int64)|true|none|none|
|» endTime|integer(int64)|true|none|none|
|» algoStatus|string|true|none|none|
|» algoType|string|true|none|none|
|» urgency|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Historical Algo Orders

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/spot/historicalOrders?symbol=BNBUSDT&side=SELL&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/algo/spot/historicalOrders`

Get all historical SPOT TWAP orders

Weight(IP): 1

<h3 id="query-historical-algo-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|query|string|true|Trading symbol, e.g. BNBUSDT|
|side|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|pageSize|query|string|false|MIN 1, MAX 100; Default 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "orders": [
    {
      "algoId": 14517,
      "symbol": "ETHUSDT",
      "side": "SELL",
      "totalQty": "5.000",
      "executedQty": "0.000",
      "executedAmt": "0.000",
      "avgPrice": "0.00",
      "clientAlgoId": "d7096549481642f8a0bb69e9e2e31f2e",
      "bookTime": 1649756817004,
      "endTime": 1649756817004,
      "algoStatus": "WORKING",
      "algoType": "VP",
      "urgency": "LOW"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-historical-algo-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|twap historical orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-historical-algo-orders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|none|
|orders|[object]|true|none|none|
|» algoId|integer|true|none|none|
|» symbol|string|true|none|none|
|» side|string|true|none|none|
|» totalQty|string|true|none|none|
|» executedQty|string|true|none|none|
|» executedAmt|string|true|none|none|
|» avgPrice|string|true|none|none|
|» clientAlgoId|string|true|none|none|
|» bookTime|integer(int64)|true|none|none|
|» endTime|integer(int64)|true|none|none|
|» algoStatus|string|true|none|none|
|» algoType|string|true|none|none|
|» urgency|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Sub Orders

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/algo/spot/subOrders?algoId=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/algo/spot/subOrders`

Get respective sub orders for a specified algoId

Weight(IP): 1

<h3 id="query-sub-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|algoId|query|integer(int64)|true|none|
|page|query|integer(int32)|false|Default 1|
|pageSize|query|string|false|MIN 1, MAX 100; Default 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "executedQty": "1.000",
  "executedAmt": "3229.44000000",
  "subOrders": [
    {
      "algoId": 14517,
      "orderId": 8389765519993909000,
      "orderStatus": "FILLED",
      "executedQty": "0.000",
      "executedAmt": "0.000",
      "feeAmt": "-1.61471999",
      "feeAsset": "USDT",
      "bookTime": 1649319001964,
      "avgPrice": "3229.44",
      "side": "SELL",
      "symbol": "ETHUSDT",
      "subId": 1,
      "timeInForce": "IMMEDIATE_OR_CANCEL",
      "origQty": "1.000"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-sub-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|twap sub orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-sub-orders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|none|
|executedQty|string|true|none|none|
|executedAmt|string|true|none|none|
|subOrders|[object]|true|none|none|
|» algoId|integer|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderStatus|string|true|none|none|
|» executedQty|string|true|none|none|
|» executedAmt|string|true|none|none|
|» feeAmt|string|true|none|none|
|» feeAsset|string|true|none|none|
|» bookTime|integer(int64)|true|none|none|
|» avgPrice|string|true|none|none|
|» side|string|true|none|none|
|» symbol|string|true|none|none|
|» subId|integer|true|none|none|
|» timeInForce|string|true|none|none|
|» origQty|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-portfolio-margin">Portfolio Margin</h1>

Portfolio Margin Endpoints

## Portfolio Margin Account (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/portfolio/account`

Get the account info

'Weight(IP): 1'

<h3 id="portfolio-margin-account-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "uniMMR": "1.87987800",
  "accountEquity": "122607.35137903",
  "actualEquity": "142607.35137903",
  "accountMaintMargin": "23.72469206",
  "accountStatus": "NORMAL",
  "accountType": "PM_1"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="portfolio-margin-account-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Portfolio account.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="portfolio-margin-account-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uniMMR|string|true|none|Classic Portfolio margin account maintenance margin rate|
|accountEquity|string|true|none|Account equity, unit is USD|
|actualEquity|string|true|none|Actual equity, unit is USD|
|accountMaintMargin|string|true|none|Classic Portfolio margin account maintenance margin, unit is USD|
|accountStatus|string|true|none|Classic Portfolio margin account status:"NORMAL", "MARGIN_CALL", "SUPPLY_MARGIN", "REDUCE_ONLY", "ACTIVE_LIQUIDATION", "FORCE_LIQUIDATION", "BANKRUPTED"|
|accountType|string|true|none|PM_1 for classic PM, PM_2 for PM|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Portfolio Margin Collateral Rate (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/portfolio/collateralRate \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/portfolio/collateralRate`

Portfolio Margin Collateral Rate.

Weight(IP): 50

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDC",
    "collateralRate": "1.0000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="portfolio-margin-collateral-rate-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Portfolio Margin Collateral Rate.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="portfolio-margin-collateral-rate-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» collateralRate|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/portfolio/collateralRate?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/portfolio/collateralRate`

Portfolio Margin PRO Tiered Collateral Rate

Weight(IP): 50

<h3 id="portfolio-margin-pro-tiered-collateral-rateuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "asset": "BNB",
    "collateralInfo": [
      {
        "tierFloor": "0.0000",
        "tierCap": "1000.0000",
        "collateralRate": "1.0000"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="portfolio-margin-pro-tiered-collateral-rateuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Portfolio Margin Collateral Rate.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="portfolio-margin-pro-tiered-collateral-rateuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» collateralInfo|[object]|true|none|none|
|» » tierFloor|string|true|none|none|
|» » tierCap|string|true|none|none|
|» » collateralRate|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Portfolio Margin Bankruptcy Loan Amount (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/pmLoan?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/portfolio/pmLoan`

Query Portfolio Margin Bankruptcy Loan Amount.

Weight(UID): 500

<h3 id="portfolio-margin-bankruptcy-loan-amount-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "asset": "BUSD",
  "amount": "579.45"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="portfolio-margin-bankruptcy-loan-amount-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Portfolio Margin Bankruptcy Loan Amount.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="portfolio-margin-bankruptcy-loan-amount-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|string|true|none|none|
|amount|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Portfolio Margin Bankruptcy Loan Repay (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/repay?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/portfolio/repay`

Repay Portfolio Margin Bankruptcy Loan.

Weight(UID): 3000

<h3 id="portfolio-margin-bankruptcy-loan-repay-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "tranId": 58203331886213500
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="portfolio-margin-bankruptcy-loan-repay-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transaction.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="portfolio-margin-bankruptcy-loan-repay-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Classic Portfolio Margin Negative Balance Interest History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/interest-history?asset=BTC&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/portfolio/interest-history`

Query interest history of negative balance for portfolio margin.

Weight(IP): 50

<h3 id="query-classic-portfolio-margin-negative-balance-interest-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDT",
    "interest": "24.4440",
    "interestAccruedTime": 1672801339253,
    "interestRate": "0.0001164",
    "principal": "210000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-classic-portfolio-margin-negative-balance-interest-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balance interest history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-classic-portfolio-margin-negative-balance-interest-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» interest|string|true|none|none|
|» interestAccruedTime|integer(int64)|true|none|none|
|» interestRate|string|true|none|none|
|» principal|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Portfolio Margin Asset Index Price (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/portfolio/asset-index-price \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/portfolio/asset-index-price`

Query Portfolio Margin Asset Index Price

Weight(IP):
- 1 if send asset
- 50 if not send asset

<h3 id="query-portfolio-margin-asset-index-price-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDT",
    "assetIndexPrice": "28251.9136906",
    "time": 1683518338121
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-portfolio-margin-asset-index-price-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|asset price index|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="query-portfolio-margin-asset-index-price-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» assetIndexPrice|string|true|none|none|
|» time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fund Auto-collection (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/auto-collection?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/portfolio/auto-collection`

Transfers all assets from Futures Account to Margin account

Weight(IP): 1500

<h3 id="fund-auto-collection-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "msg": "success"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fund-auto-collection-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fund-auto-collection-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## BNB Transfer (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/bnb-transfer?transferSide=TO_UM&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/portfolio/bnb-transfer`

BNB transfer can be between Margin Account and USDM Account

Weight(IP): 1500

<h3 id="bnb-transfer-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transferSide|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|transferSide|TO_UM|
|transferSide|FROM_UM|

> Example responses

> 200 Response

```json
{
  "tranId": 100000001
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="bnb-transfer-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="bnb-transfer-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Auto-repay-futures Status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/repay-futures-switch?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/portfolio/repay-futures-switch`

Query Auto-repay-futures Status

Weight(IP): 30

<h3 id="get-auto-repay-futures-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "autoRepay": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-auto-repay-futures-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-auto-repay-futures-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRepay|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Change Auto-repay-futures Status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/repay-futures-switch?autoRepay=true&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/portfolio/repay-futures-switch`

Change Auto-repay-futures Status

Weight(IP): 1500

<h3 id="change-auto-repay-futures-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|autoRepay|query|boolean|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "msg": "success"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="change-auto-repay-futures-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="change-auto-repay-futures-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Repay futures Negative Balance (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/repay-futures-negative-balance?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/portfolio/repay-futures-negative-balance`

Repay futures Negative Balance

Weight(IP): 1500

<h3 id="repay-futures-negative-balance-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "msg": "success"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="repay-futures-negative-balance-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="repay-futures-negative-balance-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Portfolio Margin Asset Leverage (USER_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/portfolio/margin-asset-leverage \
  -H 'Accept: application/json'
```

`GET /sapi/v1/portfolio/margin-asset-leverage`

Weight(IP): 50

> Example responses

> 200 Response

```json
[
  {
    "asset": "USDC",
    "collateralRate": "1.0000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-portfolio-margin-asset-leverage-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Classic Portfolio Margin Collateral Rate|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-portfolio-margin-asset-leverage-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|false|none|none|
|» collateralRate|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Fund Collection by Asset (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/portfolio/asset-collection?asset=BTC&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/portfolio/asset-collection`

Transfers specific asset from Futures Account to Margin account

Weight(IP): 60

<h3 id="fund-collection-by-asset-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "msg": "success"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fund-collection-by-asset-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fund-collection-by-asset-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-blvt">BLVT</h1>

Binance Leveraged Tokens Endpoints

## BLVT Info (MARKET_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/blvt/tokenInfo \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/blvt/tokenInfo`

Weight(IP): 1

<h3 id="blvt-info-marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenName|query|string|false|BTCDOWN, BTCUP|

> Example responses

> 200 Response

```json
[
  {
    "tokenName": "BTCDOWN",
    "description": "3X Short Bitcoin Token",
    "underlying": "BTC",
    "tokenIssued": "717953.95",
    "basket": "-821.474 BTCUSDT Futures",
    "currentBaskets": [
      {
        "symbol": "BTCUSDT",
        "amount": "-1183.984",
        "notionalValue": "-22871089.96704"
      }
    ],
    "nav": "4.79",
    "realLeverage": "-2.316",
    "fundingRate": "0.001020",
    "dailyManagementFee": "0.0001",
    "purchaseFeePct": "0.0010",
    "dailyPurchaseLimit": "100000.00",
    "redeemFeePct": "0.0010",
    "dailyRedeemLimit": "1000000.00",
    "timestamp": 1583127900000
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="blvt-info-marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of token information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|

<h3 id="blvt-info-marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» tokenName|string|true|none|none|
|» description|string|true|none|none|
|» underlying|string|true|none|none|
|» tokenIssued|string|true|none|none|
|» basket|string|true|none|none|
|» currentBaskets|[object]|true|none|none|
|» » symbol|string|true|none|none|
|» » amount|string|true|none|none|
|» » notionalValue|string|true|none|none|
|» nav|string|true|none|none|
|» realLeverage|string|true|none|none|
|» fundingRate|string|true|none|none|
|» dailyManagementFee|string|true|none|none|
|» purchaseFeePct|string|true|none|none|
|» dailyPurchaseLimit|string|true|none|none|
|» redeemFeePct|string|true|none|none|
|» dailyRedeemLimit|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subscribe BLVT (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/blvt/subscribe?tokenName=string&cost=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/blvt/subscribe`

Weight(IP): 1

<h3 id="subscribe-blvt-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenName|query|string|true|BTCDOWN, BTCUP|
|cost|query|number(double)|true|Spot balance|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "id": 123,
  "status": "S",
  "tokenName": "LINKUP",
  "amount": "0.9559090500",
  "cost": "9.99999995",
  "timestamp": 1600249972899
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="subscribe-blvt-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription Info|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="subscribe-blvt-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|status|string|true|none|S, P, and F for "success", "pending", and "failure"|
|tokenName|string|true|none|none|
|amount|string|true|none|subscribed token amount|
|cost|string|true|none|subscription cost in usdt|
|timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Subscription Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/blvt/subscribe/record?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/blvt/subscribe/record`

- Only the data of the latest 90 days is available

Weight(IP): 1

<h3 id="query-subscription-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenName|query|string|false|BTCDOWN, BTCUP|
|id|query|integer(int64)|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "tokenName": "LINKUP",
  "amount": "0.54216292",
  "nav": "18.42621386",
  "fee": "0.00999000",
  "totalCharge": "9.99999991",
  "timestamp": 1599127217916
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-subscription-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of subscription record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-subscription-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|tokenName|string|true|none|none|
|amount|string|true|none|Subscription amount|
|nav|string|true|none|NAV price of subscription|
|fee|string|true|none|Subscription fee in usdt|
|totalCharge|string|true|none|Subscription cost in usdt|
|timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Redeem BLVT (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/blvt/redeem?tokenName=string&amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/blvt/redeem`

Weight(IP): 1

<h3 id="redeem-blvt-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenName|query|string|true|BTCDOWN, BTCUP|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "id": 123,
  "status": "S",
  "tokenName": "LINKUP",
  "redeemAmount": "0.95590905",
  "amount": "10.05022099",
  "timestamp": 1600250279614
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="redeem-blvt-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redemption record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="redeem-blvt-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|status|string|true|none|S, P, and F for "success", "pending", and "failure"|
|tokenName|string|true|none|none|
|redeemAmount|string|true|none|Redemption token amount|
|amount|string|true|none|Redemption value in usdt|
|timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Redemption Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/blvt/redeem/record?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/blvt/redeem/record`

- Only the data of the latest 90 days is available

Weight(IP): 1

<h3 id="redemption-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenName|query|string|false|BTCDOWN, BTCUP|
|id|query|integer(int64)|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|default 1000, max 1000|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "tokenName": "LINKUP",
    "amount": "0.54216292",
    "nav": "18.36345064",
    "fee": "0.00995598",
    "netProceed": "9.94602604",
    "timestamp": 1599128003050
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="redemption-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of redemption record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="redemption-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer(int64)|true|none|none|
|» tokenName|string|true|none|none|
|» amount|string|true|none|Redemption amount|
|» nav|string|true|none|NAV of redemption|
|» fee|string|true|none|Reemption fee|
|» netProceed|string|true|none|Net redemption value in usdt|
|» timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## BLVT User Limit Info (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/blvt/userLimit?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/blvt/userLimit`

Weight(IP): 1

<h3 id="blvt-user-limit-info-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenName|query|string|false|BTCDOWN, BTCUP|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "tokenName": "LINKUP",
    "userDailyTotalPurchaseLimit": "1000",
    "userDailyTotalRedeemLimit": "1000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="blvt-user-limit-info-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of token limits|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="blvt-user-limit-info-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» tokenName|string|true|none|none|
|» userDailyTotalPurchaseLimit|string|true|none|USDT|
|» userDailyTotalRedeemLimit|string|true|none|USDT|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-fiat">Fiat</h1>

Fiat Endpoints

## Fiat Deposit/Withdraw History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/fiat/orders?transactionType=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/fiat/orders`

- If beginTime and endTime are not sent, the recent 30-day data will be returned.

Weight(UID): 90000

<h3 id="fiat-depositwithdraw-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionType|query|integer(int32)|true|* `0` - deposit<br>* `1` - withdraw|
|beginTime|query|integer(int64)|false|none|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|rows|query|integer(int32)|false|Default 100, max 500|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": [
    {
      "orderNo": "7d76d611-0568-4f43-afb6-24cac7767365",
      "fiatCurrency": "BRL",
      "indicatedAmount": "10.00",
      "amount": "10.00",
      "totalFee": "0.00",
      "method": "BankAccount",
      "status": "Expired",
      "createTime": 1626144956000,
      "updateTime": 1626400907000
    }
  ],
  "total": 1,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fiat-depositwithdraw-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|History of deposit/withdraw orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fiat-depositwithdraw-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|[object]|true|none|none|
|» orderNo|string|true|none|none|
|» fiatCurrency|string|true|none|none|
|» indicatedAmount|string|true|none|none|
|» amount|string|true|none|none|
|» totalFee|string|true|none|none|
|» method|string|true|none|none|
|» status|string|true|none|Processing, Failed, Successful, Finished, Refunding, Refunded, Refund Failed, Order Partial credit Stopped|
|» createTime|integer(int64)|true|none|none|
|» updateTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fiat Payments History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/fiat/payments?transactionType=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/fiat/payments`

- If beginTime and endTime are not sent, the recent 30-day data will be returned.

Weight(IP): 1

<h3 id="fiat-payments-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionType|query|integer(int32)|true|* `0` - deposit<br>* `1` - withdraw|
|beginTime|query|integer(int64)|false|none|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|rows|query|integer(int32)|false|Default 100, max 500|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": [
    {
      "orderNo": "353fca443f06466db0c4dc89f94f027a",
      "sourceAmount": "20.00",
      "fiatCurrency": "EUR",
      "obtainAmount": "4.462",
      "cryptoCurrency": "LUNA",
      "totalFee": "0.2",
      "price": "4.437472",
      "status": "Failed",
      "createTime": 1624529919000,
      "updateTime": 1624529919000
    }
  ],
  "total": 1,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fiat-payments-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|History of fiat payments|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fiat-payments-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|[object]|true|none|none|
|» orderNo|string|true|none|none|
|» sourceAmount|string|true|none|Fiat trade amount|
|» fiatCurrency|string|true|none|Fiat token|
|» obtainAmount|string|true|none|Crypto trade amount|
|» cryptoCurrency|string|true|none|Crypto token|
|» totalFee|string|true|none|Trade fee|
|» price|string|true|none|none|
|» status|string|true|none|Processing, Completed, Failed, Refunded|
|» createTime|integer(int64)|true|none|none|
|» updateTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-c2c">C2C</h1>

Consumer-To-Consumer Endpoints

## Get C2C Trade History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/c2c/orderMatch/listUserOrderHistory?tradeType=BUY&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/c2c/orderMatch/listUserOrderHistory`

- If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned.
- The max interval between startTimestamp and endTimestamp is 30 days.

Weight(IP): 1

<h3 id="get-c2c-trade-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tradeType|query|string|true|none|
|startTimestamp|query|integer(int64)|false|UTC timestamp in ms|
|endTimestamp|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|Default 1|
|rows|query|integer(int32)|false|default 100, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tradeType|BUY|
|tradeType|SELL|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": [
    {
      "orderNumber": "20219644646554779648",
      "advNo": "11218246497340923904",
      "tradeType": "SELL",
      "asset": "BUSD",
      "fiat": "CNY",
      "fiatSymbol": "￥",
      "amount": "5000.00000000",
      "totalPrice": "33400.00000000",
      "unitPrice": "6.68",
      "orderStatus": "COMPLETED",
      "createTime": 1619361369000,
      "commission": "0",
      "counterPartNickName": "ab***",
      "advertisementRole": "TAKER"
    }
  ],
  "total": 1,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-c2c-trade-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trades history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-c2c-trade-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|[object]|true|none|none|
|» orderNumber|string|true|none|none|
|» advNo|string|true|none|none|
|» tradeType|string|true|none|none|
|» asset|string|true|none|none|
|» fiat|string|true|none|none|
|» fiatSymbol|string|true|none|none|
|» amount|string|true|none|Quantity (in Crypto)|
|» totalPrice|string|true|none|none|
|» unitPrice|string|true|none|Unit Price (in Fiat)|
|» orderStatus|string|true|none|PENDING, TRADING, BUYER_PAYED, DISTRIBUTING, COMPLETED, IN_APPEAL, CANCELLED, CANCELLED_BY_SYSTEM|
|» createTime|integer(int64)|true|none|none|
|» commission|string|true|none|Transaction Fee (in Crypto)|
|» counterPartNickName|string|true|none|none|
|» advertisementRole|string|true|none|none|
|total|integer(int32)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-vip-loans">VIP Loans</h1>

VIP Loans Endpoints

## Get VIP Loan Ongoing Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/ongoing/orders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/ongoing/orders`

VIP loan is available for VIP users only.

Weight(IP): 400

<h3 id="get-vip-loan-ongoing-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order id|
|collateralAccountId|query|integer(int64)|false|none|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 10; max 100.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "orderId": 100000001,
      "loanCoin": "BUSD",
      "totalDebt": "10000",
      "residualInterest": "10.27687923",
      "collateralAccountId": "12345678, 23456789",
      "collateralCoin": "BNB,BTC,ETH",
      "collateralValue": "25000.27565492",
      "totalCollateralValueAfterHaircut": "25000.27565492",
      "lockedCollateralValue": "25000.27565492",
      "currentLTV": "0.57",
      "expirationTime": 1575018510000,
      "loanDate": "1676851200000",
      "loanRate": "0.0123",
      "loanTerm": "30days"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-vip-loan-ongoing-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ongoing VIP Loan Orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-vip-loan-ongoing-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» loanCoin|string|true|none|none|
|» totalDebt|string|true|none|none|
|» residualInterest|string|true|none|none|
|» collateralAccountId|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» collateralValue|string|true|none|locked collateral value shown in USD value|
|» totalCollateralValueAfterHaircut|string|false|none|none|
|» lockedCollateralValue|string|false|none|none|
|» currentLTV|string|true|none|none|
|» expirationTime|integer(int64)|true|none|none|
|» loanDate|string|true|none|none|
|» loanRate|string|true|none|none|
|» loanTerm|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## VIP Loan Repay (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/repay?amount=1.01&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/vip/repay`

VIP loan is available for VIP users only.

Weight(UID): 6000

<h3 id="vip-loan-repay-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order id|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "repayAmount": "200.5",
  "remainingPrincipal": "100.5",
  "remainingInterest": "0",
  "collateralCoin": "BNB,BTC,ETH",
  "currentLTV": "0.25",
  "repayStatus": "Repaid"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="vip-loan-repay-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|VIP Loan Repayment|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="vip-loan-repay-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|repayAmount|string|true|none|none|
|remainingPrincipal|string|true|none|none|
|remainingInterest|string|true|none|none|
|collateralCoin|string|true|none|none|
|currentLTV|string|true|none|none|
|repayStatus|string|true|none|Repaid, Repaying, Failed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get VIP Loan Repayment History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/repay/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/repay/history`

VIP loan is available for VIP users only.

Weight(IP): 400

<h3 id="get-vip-loan-repayment-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order id|
|loanCoin|query|string|false|Coin loaned|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 10; max 100.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BUSD",
      "repayAmount": "10000",
      "collateralCoin": "BNB,BTC,ETH",
      "repayStatus": "Repaid",
      "repayTime": "1575018510000",
      "orderId": "756783308056935434"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-vip-loan-repayment-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|VIP Loan Repayment History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-vip-loan-repayment-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» repayAmount|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» repayStatus|string|true|none|Repaid, Repaying, Failed|
|» repayTime|string|true|none|none|
|» orderId|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Check Locked Value of VIP Collateral Account (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/collateral/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/collateral/account`

VIP loan is available for VIP users only.

Weight(IP): 6000

<h3 id="check-locked-value-of-vip-collateral-account-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order id|
|collateralAccountId|query|integer(int64)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "collateralAccountId": "12345678",
      "collateralCoin": "BNB,BTC,ETH",
      "collateralValue": "500.27565492"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="check-locked-value-of-vip-collateral-account-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|VIP Locked Value|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="check-locked-value-of-vip-collateral-account-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» collateralAccountId|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» collateralValue|string|true|none|locked collateral value shown in USD value|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## VIP Loan Borrow

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/borrow?loanAccountId=0&loanAmount=0&collateralAccountId=string&collateralCoin=string&isFlexibleRate=TRUE&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/vip/borrow`

VIP loan is available for VIP users only.

Weight(UID): 6000

<h3 id="vip-loan-borrow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanAccountId|query|integer(int64)|true|none|
|loanCoin|query|string|false|Coin loaned|
|loanAmount|query|number(float)|true|none|
|collateralAccountId|query|string|true|none|
|collateralCoin|query|string|true|none|
|isFlexibleRate|query|string|true|none|
|loanTerm|query|integer|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|isFlexibleRate|TRUE|
|isFlexibleRate|FALSE|

> Example responses

> 200 Response

```json
{
  "loanAccountId": "12345678",
  "requestId": "12345678",
  "loanCoin": "BTC",
  "isFlexibleRate": "No",
  "loanAmount": "100.55",
  "collateralAccountId": "12345678,12345678,12345678",
  "collateralCoin": "BUSD,USDT,ETH",
  "loanTerm": "30"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="vip-loan-borrow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="vip-loan-borrow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanAccountId|string|true|none|none|
|requestId|string|true|none|none|
|loanCoin|string|true|none|none|
|isFlexibleRate|string|true|none|none|
|loanAmount|string|true|none|none|
|collateralAccountId|string|true|none|none|
|collateralCoin|string|true|none|none|
|loanTerm|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Loanable Assets Data

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/loanable/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/loanable/data`

Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.

Weight(IP): 400

<h3 id="get-loanable-assets-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|vipLevel|query|integer(int32)|false|Defaults to user's vip level|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "loanCoin": "BUSD",
      "_flexibleDailyInterestRate": "0.001503",
      "_flexibleYearlyInterestRate": "0.548595",
      "_30dDailyInterestRate": "0.000136",
      "_30dYearlyInterestRate": "0.03450",
      "_60dDailyInterestRate": "0.000145",
      "_60dYearlyInterestRate": "0.04103",
      "minLimit": "100",
      "maxLimit": "1000000",
      "vipLevel": 1
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-loanable-assets-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loanable Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-loanable-assets-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» _flexibleDailyInterestRate|string|true|none|none|
|» _flexibleYearlyInterestRate|string|true|none|none|
|» _30dDailyInterestRate|string|true|none|none|
|» _30dYearlyInterestRate|string|true|none|none|
|» _60dDailyInterestRate|string|true|none|none|
|» _60dYearlyInterestRate|string|true|none|none|
|» minLimit|string|true|none|none|
|» maxLimit|string|true|none|none|
|» vipLevel|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Collateral Asset Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/collateral/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/collateral/data`

Get collateral asset data.

Weight(IP): 400

<h3 id="get-collateral-asset-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collateralCoin|query|string|false|Coin used as collateral|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "collateralCoin": "BUSD",
      "_1stCollateralRatio": "100%",
      "_1stCollateralRange": "1-10000000",
      "_2ndCollateralRatio": "80%",
      "_2ndCollateralRange": "10000000-100000000",
      "_3rdCollateralRatio": "60%",
      "_3rdCollateralRange": "100000000-1000000000",
      "_4thCollateralRatio": "0%",
      "_4thCollateralRange": ">10000000000"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-collateral-asset-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Asset Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-collateral-asset-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» collateralCoin|string|true|none|none|
|» _1stCollateralRatio|string|true|none|none|
|» _1stCollateralRange|string|true|none|none|
|» _2ndCollateralRatio|string|true|none|none|
|» _2ndCollateralRange|string|true|none|none|
|» _3rdCollateralRatio|string|true|none|none|
|» _3rdCollateralRange|string|true|none|none|
|» _4thCollateralRatio|string|true|none|none|
|» _4thCollateralRange|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Application Status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/request/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/request/data`

Get Application Status

Weight(UID): 400

<h3 id="query-application-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "loanAccountId": "12345678",
      "orderId": "12345678",
      "requestId": "12345678",
      "loanCoin": "BTC",
      "loanAmount": "100.5",
      "collateralAccountId": "12345678,12345678,12345678",
      "collateralCoin": "BUSD,USDT,ETH",
      "loanTerm": "30",
      "status": "Repaid"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-application-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Application Status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-application-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|rows|[object]|true|none|none|
|» loanAccountId|string|true|none|none|
|» orderId|string|true|none|none|
|» requestId|string|true|none|none|
|» loanCoin|string|true|none|none|
|» loanAmount|string|true|none|none|
|» collateralAccountId|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» loanTerm|integer|true|none|none|
|» status|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Borrow Interest Rate (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/request/interestRate?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/vip/request/interestRate`

Get borrow interest rate.

Weight(UID): 400

<h3 id="get-borrow-interest-rate-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Max 10 assets, Multiple split by ","|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "asset": "BUSD",
    "flexibleDailyInterestRate": "0.001503",
    "flexibleYearlyInterestRate": "0.548595",
    "time": 1577233578000
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-borrow-interest-rate-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Borrow interest rate|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-borrow-interest-rate-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» flexibleDailyInterestRate|string|true|none|none|
|» flexibleYearlyInterestRate|string|true|none|none|
|» time|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## VIP Loan Renew

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/vip/renew?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/vip/renew`

VIP loan is available for VIP users only.

Weight(UID): 6000

<h3 id="vip-loan-renew-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order id|
|loanTerm|query|integer|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanAccountId": "12345678",
  "loanCoin": "BTC",
  "loanAmount": "100.55",
  "collateralAccountId": "12345677,12345678,12345679",
  "collateralCoin": "BUSD,USDT,ETH",
  "loanTerm": "30"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="vip-loan-renew-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan renew result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="vip-loan-renew-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanAccountId|string|true|none|none|
|loanCoin|string|true|none|none|
|loanAmount|string|true|none|none|
|collateralAccountId|string|true|none|none|
|collateralCoin|string|true|none|none|
|loanTerm|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-crypto-loans">Crypto Loans</h1>

Crypto Loans Endpoints

## Get Crypto Loans Income History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/income?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/income`

- If startTime and endTime are not sent, the recent 7-day data will be returned.
- The max interval between startTime and endTime is 30 days.

Weight(UID): 6000

<h3 id="get-crypto-loans-income-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|type|query|string|false|All types will be returned by default.<br>  * `borrowIn`<br>  * `collateralSpent`<br>  * `repayAmount`<br>  * `collateralReturn` - Collateral return after repayment<br>  * `addCollateral`<br>  * `removeCollateral`<br>  * `collateralReturnAfterLiquidation`|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|default 20, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|borrowIn|
|type|collateralSpent|
|type|repayAmount|
|type|collateralReturn|
|type|addCollateral|
|type|removeCollateral|
|type|collateralReturnAfterLiquidation|

> Example responses

> 200 Response

```json
[
  {
    "asset": "BUSD",
    "type": "borrowIn",
    "amount": "100",
    "timestamp": 1633771139847,
    "tranId": "80423589583"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-crypto-loans-income-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-crypto-loans-income-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» type|string|true|none|none|
|» amount|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|
|» tranId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Crypto Loan Borrow (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/borrow?loanCoin=BUSD&collateralCoin=BNB&loanTerm=30&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/borrow`

Weight(UID): 6000

<h3 id="crypto-loan-borrow-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|true|Coin loaned|
|loanAmount|query|number(float)|false|Loan amount|
|collateralCoin|query|string|true|Coin used as collateral|
|collateralAmount|query|number(float)|false|none|
|loanTerm|query|integer(int32)|true|7/14/30/90/180 days|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "loanAmount": "100.5",
  "collateralCoin": "BNB",
  "collateralAmount": "50.5",
  "hourlyInterestRate": "0.001234",
  "orderId": "100000001"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="crypto-loan-borrow-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Borrow Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="crypto-loan-borrow-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|loanAmount|string|true|none|none|
|collateralCoin|string|true|none|none|
|collateralAmount|string|true|none|none|
|hourlyInterestRate|string|true|none|none|
|orderId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Crypto Loans Borrow History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/borrow/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/borrow/history`

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

<h3 id="get-crypto-loans-borrow-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|orderId in POST /sapi/v1/loan/borrow|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int64)|false|default 10, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "orderId": 100000001,
      "loanCoin": "BUSD",
      "initialLoanAmount": "10000",
      "hourlyInterestRate": "0.000057",
      "loanTerm": "7",
      "collateralCoin": "BNB",
      "initialCollateralAmount": "49.27565492",
      "borrowTime": 1575018510000,
      "status": "Accruing_Interest, Overdue, Liquidating, Repaying, Repaid, Liquidated, Pending, Failed"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-crypto-loans-borrow-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Borrow History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-crypto-loans-borrow-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» loanCoin|string|true|none|none|
|» initialLoanAmount|string|true|none|none|
|» hourlyInterestRate|string|true|none|none|
|» loanTerm|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» initialCollateralAmount|string|true|none|none|
|» borrowTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Loan Ongoing Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/ongoing/orders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/ongoing/orders`

Weight(IP): 300

<h3 id="get-loan-ongoing-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|orderId in POST /sapi/v1/loan/borrow|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|current|query|integer(int32)|false|Current querying page. Start from 1; default:1, max:1000|
|limit|query|integer(int64)|false|default 10, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "orderId": 100000001,
      "loanCoin": "BUSD",
      "totalDebt": "10000",
      "residualInterest": "10.27687923",
      "collateralCoin": "BNB",
      "collateralAmount": "49.27565492",
      "currentLTV": "0.57",
      "expirationTime": 1575018510000
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-loan-ongoing-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ongoing Orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-loan-ongoing-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» loanCoin|string|true|none|none|
|» totalDebt|string|true|none|none|
|» residualInterest|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» collateralAmount|string|true|none|none|
|» currentLTV|string|true|none|none|
|» expirationTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Crypto Loan Repay (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/repay?orderId=123456789&amount=100.5&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/repay`

Weight(UID): 6000

<h3 id="crypto-loan-repay-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|true|Order ID|
|amount|query|number(double)|true|Repayment Amount|
|type|query|integer(int32)|false|Default: 1. 1 for 'repay with borrowed coin'; 2 for 'repay with collateral'.|
|collateralReturn|query|boolean|false|Default: TRUE. TRUE: Return extra collateral to spot account; FALSE: Keep extra collateral in the order.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "remainingPrincipal": "100.5",
  "remainingInterest": "0",
  "collateralCoin": "BNB",
  "remainingCollateral": "5.253",
  "currentLTV": "0.25",
  "repayStatus": "Repaying"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="crypto-loan-repay-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Repayment Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="crypto-loan-repay-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[repaymentInfo](#schemarepaymentinfo)|false|none|none|
|*oneOf*|[repaymentInfo2](#schemarepaymentinfo2)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Loan Repayment History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/repay/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/repay/history`

If startTime and endTime are not sent, the recent 90-day data will be returned.
The max interval between startTime and endTime is 180 days.

Weight(IP): 400

<h3 id="get-loan-repayment-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order ID|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int64)|false|default 10, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BUSD",
      "repayAmount": "10000",
      "collateralCoin": "BNB",
      "collateralUsed": "0",
      "collateralReturn": "49.27565492",
      "repayType": "1",
      "repayStatus": "Repaid",
      "repayTime": 1575018510000,
      "orderId": 756783308056935400
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-loan-repayment-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan Repayment History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-loan-repayment-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» repayAmount|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» collateralUsed|string|true|none|none|
|» collateralReturn|string|true|none|none|
|» repayType|string|true|none|none|
|» repayStatus|string|true|none|'repayType': '1' // 1 for 'repay with borrowed coin', 2 for 'repay with collateral' 'repayStatus': 'Repaid' // Repaid, Repaying, Failed|
|» repayTime|integer(int64)|true|none|none|
|» orderId|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Crypto Loan Adjust LTV (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/adjust/ltv?orderId=123456789&amount=100.5&direction=ADDITIONAL&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/adjust/ltv`

Weight(UID): 6000

<h3 id="crypto-loan-adjust-ltv-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|true|Order ID|
|amount|query|number(double)|true|Amount|
|direction|query|string|true|'ADDITIONAL', 'REDUCED'|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ADDITIONAL|
|direction|REDUCED|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "collateralCoin": "BNB",
  "direction": "ADDITIONAL",
  "amount": "5.235",
  "currentLTV": "0.52"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="crypto-loan-adjust-ltv-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LTV Adjust|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="crypto-loan-adjust-ltv-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|collateralCoin|string|true|none|none|
|direction|string|true|none|none|
|amount|string|true|none|none|
|currentLTV|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Loan LTV Adjustment History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/ltv/adjustment/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/ltv/adjustment/history`

If startTime and endTime are not sent, the recent 90-day data will be returned.
The max interval between startTime and endTime is 180 days.

Weight(IP): 400

<h3 id="get-loan-ltv-adjustment-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Order ID|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int64)|false|default 10, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BUSD",
      "collateralCoin": "BNB",
      "direction": "ADDITIONAL",
      "amount": "5.235",
      "preLTV": "0.78",
      "afterLTV": "0.56",
      "adjustTime": 1575018510000,
      "orderId": 756783308056935400
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-loan-ltv-adjustment-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LTV Adjustment History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-loan-ltv-adjustment-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» direction|string|true|none|none|
|» amount|string|true|none|none|
|» preLTV|string|true|none|none|
|» afterLTV|string|true|none|none|
|» adjustTime|integer(int64)|true|none|none|
|» orderId|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Loanable Assets Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/loanable/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/loanable/data`

Get interest rate and borrow limit of loanable assets. The borrow limit is shown in USD value.

Weight(IP): 400

<h3 id="get-loanable-assets-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|vipLevel|query|integer(int32)|false|Defaults to user's vip level|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BUSD",
      "_7dHourlyInterestRate": "0.00000491",
      "_7dDailyInterestRate": "0.000118",
      "_14dHourlyInterestRate": "0.00000491",
      "_14dDailyInterestRate": "0.000118",
      "_30dHourlyInterestRate": "0.00000567",
      "_30dDailyInterestRate": "0.000136",
      "_90dHourlyInterestRate": "0.00000596",
      "_90dDailyInterestRate": "0.000143",
      "_180dHourlyInterestRate": "0.00000631",
      "_180dDailyInterestRate": "0.000151",
      "minLimit": "100",
      "maxLimit": "1000000",
      "vipLevel": 1
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-loanable-assets-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loanable Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-loanable-assets-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» _7dHourlyInterestRate|string|true|none|none|
|» _7dDailyInterestRate|string|true|none|none|
|» _14dHourlyInterestRate|string|true|none|none|
|» _14dDailyInterestRate|string|true|none|none|
|» _30dHourlyInterestRate|string|true|none|none|
|» _30dDailyInterestRate|string|true|none|none|
|» _90dHourlyInterestRate|string|true|none|none|
|» _90dDailyInterestRate|string|true|none|none|
|» _180dHourlyInterestRate|string|true|none|none|
|» _180dDailyInterestRate|string|true|none|none|
|» minLimit|string|true|none|none|
|» maxLimit|string|true|none|none|
|» vipLevel|integer(int32)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Collateral Assets Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/collateral/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/collateral/data`

Get LTV information and collateral limit of collateral assets. The collateral limit is shown in USD value.

Weight(IP): 400

<h3 id="get-collateral-assets-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collateralCoin|query|string|false|Coin used as collateral|
|vipLevel|query|integer(int32)|false|Defaults to user's vip level|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "collateralCoin": "BNB",
      "initialLTV": "0.65",
      "marginCallLTV": "0.75",
      "liquidationLTV": "0.83",
      "maxLimit": "1000000",
      "vipLevel": 1
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-collateral-assets-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-collateral-assets-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» collateralCoin|string|true|none|none|
|» initialLTV|string|true|none|none|
|» marginCallLTV|string|true|none|none|
|» liquidationLTV|string|true|none|none|
|» maxLimit|string|true|none|none|
|» vipLevel|integer(int32)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Check Collateral Repay Rate (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/repay/collateral/rate?loanCoin=BUSD&collateralCoin=BNB&repayAmount=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/loan/repay/collateral/rate`

Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.

Weight(IP): 6000

<h3 id="check-collateral-repay-rate-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|true|Coin loaned|
|collateralCoin|query|string|true|Coin used as collateral|
|repayAmount|query|number(float)|true|repay amount of loanCoin|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "collateralCoin": "BUSD",
  "repayAmount": "1000",
  "rate": "300.36781234"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="check-collateral-repay-rate-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="check-collateral-repay-rate-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|collateralCoin|string|true|none|none|
|repayAmount|string|true|none|none|
|rate|string|true|none|rate of collateral coin/loan coin|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Crypto Loan Customize Margin Call (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/loan/customize/margin_call?marginCall=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/loan/customize/margin_call`

Customize margin call for ongoing orders only.

Weight(UID): 6000

<h3 id="crypto-loan-customize-margin-call-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|false|Mandatory when collateralCoin is empty. Send either orderId or collateralCoin, if both parameters are sent, take orderId only.|
|collateralCoin|query|string|false|Coin used as collateral|
|marginCall|query|number(float)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "orderId": "100000001",
      "collateralCoin": "BNB",
      "preMarginCall": "0.8",
      "afterMarginCall": "0.7",
      "customizeTime": 1575018510000
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="crypto-loan-customize-margin-call-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="crypto-loan-customize-margin-call-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» orderId|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» preMarginCall|string|true|none|none|
|» afterMarginCall|string|true|none|none|
|» customizeTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Borrow - Flexible Loan Borrow (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/borrow?timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v2/loan/flexible/borrow`

- Only available for master account

Weight(UID): 6000

<h3 id="borrow---flexible-loan-borrow-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|loanAmount|query|number(float)|false|Loan amount|
|collateralCoin|query|string|false|Coin used as collateral|
|collateralAmount|query|number(float)|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "loanAmount": "100.5",
  "collateralCoin": "BNB",
  "collateralAmount": "50.5",
  "status": "Succeeds"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="borrow---flexible-loan-borrow-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="borrow---flexible-loan-borrow-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|loanAmount|string|true|none|none|
|collateralCoin|string|false|none|none|
|collateralAmount|string|true|none|none|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Borrow - Get Flexible Loan Ongoing Orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/ongoing/orders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/loan/flexible/ongoing/orders`


Weight(IP): 300

<h3 id="borrow---get-flexible-loan-ongoing-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "loanCoin": "BUSD",
      "totalDebt": "10000",
      "collateralCoin": "BNB",
      "collateralAmount": "49.27565492",
      "currentLTV": "0.57"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="borrow---get-flexible-loan-ongoing-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Assets Data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="borrow---get-flexible-loan-ongoing-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» totalDebt|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» collateralAmount|string|true|none|none|
|» currentLTV|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Borrow - Get Flexible Loan Borrow History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/borrow/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/loan/flexible/borrow/history`

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

<h3 id="borrow---get-flexible-loan-borrow-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "rows": [
    {
      "loanCoin": "BUSD",
      "initialLoanAmount": "10000",
      "collateralCoin": "BNB",
      "initialCollateralAmount": "49.27565492",
      "borrowTime": 1575018510000,
      "status": "Succeeds"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="borrow---get-flexible-loan-borrow-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan borrow histroy|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="borrow---get-flexible-loan-borrow-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» initialLoanAmount|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» initialCollateralAmount|string|true|none|none|
|» borrowTime|integer(int64)|true|none|none|
|» status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Repay - Flexible Loan Repay (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/repay?repayAmount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v2/loan/flexible/repay`

- repayAmount is mandatory even fullRepayment = FALSE

Weight(IP): 6000

<h3 id="repay---flexible-loan-repay-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|repayAmount|query|number(float)|true|repay amount of loanCoin|
|collateralReturn|query|boolean|false|Default: TRUE.<br>TRUE: Return extra collateral to earn account;<br>FALSE: Keep extra collateral in the order, and lower LTV.|
|fullRepayment|query|boolean|false|Default: FALSE.<br>TRUE: Full repayment;<br>FALSE: Partial repayment, based on loanAmount|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "collateralCoin": "BNB",
  "remainingDebt": "50.5",
  "remainingCollateral": "50.5",
  "fullRepayment": false,
  "currentLTV": "50.5",
  "repayStatus": "Repaid"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="repay---flexible-loan-repay-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan repay|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="repay---flexible-loan-repay-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|collateralCoin|string|true|none|none|
|remainingDebt|string|true|none|none|
|remainingCollateral|string|true|none|none|
|fullRepayment|boolean|true|none|none|
|currentLTV|string|true|none|none|
|repayStatus|string|true|none|Repaid, Repaying, Failed|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Repay - Get Flexible Loan Repayment History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/repay/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/loan/flexible/repay/history`

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

<h3 id="repay---get-flexible-loan-repayment-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BUSD",
      "repayAmount": "10000",
      "collateralCoin": "BNB",
      "collateralReturn": "100",
      "repayStatus": "Repaid",
      "repayTime": 1575018510000
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="repay---get-flexible-loan-repayment-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan repay history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="repay---get-flexible-loan-repayment-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» repayAmount|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» collateralReturn|string|true|none|none|
|» repayStatus|string|true|none|none|
|» repayTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Adjust LTV - Flexible Loan Adjust LTV (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/adjust/ltv?adjustmentAmount=0&direction=ADDITIONAL&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v2/loan/flexible/adjust/ltv`

- API Key needs Spot & Margin Trading permission for this endpoint

Weight(UID): 6000

<h3 id="adjust-ltv---flexible-loan-adjust-ltv-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|adjustmentAmount|query|number(float)|true|none|
|direction|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ADDITIONAL|
|direction|REDUCED|

> Example responses

> 200 Response

```json
{
  "loanCoin": "BUSD",
  "collateralCoin": "BNB",
  "direction": "ADDITIONAL",
  "adjustmentAmount": "5.235",
  "currentLTV": "0.235"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="adjust-ltv---flexible-loan-adjust-ltv-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|adjust LTV result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="adjust-ltv---flexible-loan-adjust-ltv-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|collateralCoin|string|true|none|none|
|direction|string|true|none|none|
|adjustmentAmount|string|true|none|none|
|currentLTV|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Adjust LTV - Get Flexible Loan LTV Adjustment History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/ltv/adjustment/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/loan/flexible/ltv/adjustment/history`

- If startTime and endTime are not sent, the recent 90-day data will be returned.
- The max interval between startTime and endTime is 180 days.

Weight(IP): 400

<h3 id="adjust-ltv---get-flexible-loan-ltv-adjustment-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|collateralCoin|query|string|false|Coin used as collateral|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|limit|query|integer(int32)|false|Default 500; max 1000.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BNB",
      "collateralCoin": "BNB",
      "direction": "ADDITIONAL",
      "collateralAmount": "5.75",
      "preLTV": "0.83",
      "afterLTV": "0.5",
      "adjustTime": 1575018510000
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="adjust-ltv---get-flexible-loan-ltv-adjustment-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|LTV adjustment history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="adjust-ltv---get-flexible-loan-ltv-adjustment-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» collateralCoin|string|true|none|none|
|» direction|string|true|none|none|
|» collateralAmount|string|true|none|none|
|» preLTV|string|true|none|none|
|» afterLTV|string|true|none|none|
|» adjustTime|integer(int64)|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Loan Assets Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/loanable/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/loan/flexible/loanable/data`

Get interest rate and borrow limit of flexible loanable assets. The borrow limit is shown in USD value.

Weight(IP): 400

<h3 id="get-flexible-loan-assets-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loanCoin|query|string|false|Coin loaned|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "loanCoin": "BNB",
      "flexibleInterestRate": "0.01",
      "flexibleMinLimit": "100",
      "flexibleMaxLimit": "1000000"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-loan-assets-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan asset data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-loan-assets-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» loanCoin|string|true|none|none|
|» flexibleInterestRate|string|true|none|none|
|» flexibleMinLimit|string|true|none|none|
|» flexibleMaxLimit|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Loan Collateral Assets Data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/loan/flexible/collateral/data?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/loan/flexible/collateral/data`

Get LTV information and collateral limit of flexible loan's collateral assets. The collateral limit is shown in USD value.

Weight(IP): 400

<h3 id="get-flexible-loan-collateral-assets-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collateralCoin|query|string|false|Coin used as collateral|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "collateralCoin": "BNB",
      "initialLTV": "0.01",
      "marginCallLTV": "0.7",
      "liquidationLTV": "0.8",
      "maxLimit": "1000000"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-loan-collateral-assets-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Loan asset data|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-loan-collateral-assets-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» collateralCoin|string|true|none|none|
|» initialLTV|string|true|none|none|
|» marginCallLTV|string|true|none|none|
|» liquidationLTV|string|true|none|none|
|» maxLimit|string|true|none|none|
|total|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-pay">Pay</h1>

Pay Endpoints

## Get Pay Trade History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/pay/transactions?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/pay/transactions`

- If startTime and endTime are not sent, the recent 90 days' data will be returned.
- The max interval between startTime and endTime is 90 days.
- Support for querying orders within the last 18 months.

Weight(UID): 3000

<h3 id="get-pay-trade-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|default 100, max 100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": [
    {
      "orderType": "C2C",
      "transactionId": "M_P_71505104267788288",
      "transactionTime": 1610090460133,
      "amount": "23.72469206",
      "currency": "BNB",
      "walletType": 1,
      "walletTypes": [
        0
      ],
      "fundsDetail": [
        [
          {
            "currency": "USDT",
            "amount": "1.2"
          },
          {
            "currency": "ETH",
            "amount": "0.0001"
          }
        ]
      ],
      "payerInfo": {
        "name": "Jack",
        "type": "USER",
        "binanceId": "12345678",
        "accountId": "67736251"
      },
      "receiverInfo": {
        "name": "Alan",
        "type": "MERCHANT",
        "email": "alan@test.com",
        "binanceId": "34355667",
        "accountId": "21326891",
        "countryCode": "1",
        "phoneNumber": "8057651210",
        "mobileCode": "US",
        "extend": [
          {
            "institutionName": "string",
            "cardNumber": "string",
            "digitalWalletId": "string"
          }
        ]
      }
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-pay-trade-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pay History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-pay-trade-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|[object]|true|none|none|
|» orderType|string|true|none|Enum：PAY(C2B Merchant Acquiring Payment), PAY_REFUND(C2B Merchant Acquiring Payment,refund), C2C(C2C Transfer Payment),CRYPTO_BOX(Crypto box), CRYPTO_BOX_RF(Crypto Box, refund), C2C_HOLDING(Transfer to new Binance user), C2C_HOLDING_RF(Transfer to new Binance user,refund), PAYOUT(B2C Disbursement Payment)|
|» transactionId|string|true|none|none|
|» transactionTime|integer(int64)|true|none|none|
|» amount|string|true|none|order amount(up to 8 decimal places), positive is income, negative is expenditure|
|» currency|string|true|none|none|
|» walletType|integer|true|none|none|
|» walletTypes|[integer]|true|none|none|
|» fundsDetail|[object]|true|none|none|
|» » currency|string|true|none|none|
|» » amount|string|true|none|none|
|» payerInfo|object|true|none|none|
|» » name|string|true|none|none|
|» » type|string|true|none|none|
|» » binanceId|string|true|none|none|
|» » accountId|string|true|none|none|
|» receiverInfo|object|true|none|none|
|» » name|string|true|none|none|
|» » type|string|true|none|none|
|» » email|string|true|none|none|
|» » binanceId|string|true|none|none|
|» » accountId|string|true|none|none|
|» » countryCode|string|true|none|none|
|» » phoneNumber|string|true|none|none|
|» » mobileCode|string|true|none|none|
|» » extend|[object]|false|none|none|
|» » » institutionName|string|true|none|none|
|» » » cardNumber|string|true|none|none|
|» » » digitalWalletId|string|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-convert">Convert</h1>

Convert Endpoints

## List All Convert Pairs

> Code samples

```bash
curl https://api.binance.com/sapi/v1/convert/exchangeInfo \
  -H 'Accept: application/json'
```

`GET /sapi/v1/convert/exchangeInfo`

Query for all convertible token pairs and the tokens’ respective upper/lower limits

Weight(IP): 3000

<h3 id="list-all-convert-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromAsset|query|string|false|User spends coin|
|toAsset|query|string|false|User receives coin|

> Example responses

> 200 Response

```json
[
  {
    "fromAsset": "BTC",
    "toAsset": "USDT",
    "fromAssetMinAmount": "0.0004",
    "fromAssetMaxAmount": "50",
    "toAssetMinAmount": "20",
    "toAssetMaxAmount": "2500000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="list-all-convert-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Convert Pairs|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="list-all-convert-pairs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» fromAsset|string|true|none|none|
|» toAsset|string|true|none|none|
|» fromAssetMinAmount|string|true|none|none|
|» fromAssetMaxAmount|string|true|none|none|
|» toAssetMinAmount|string|true|none|none|
|» toAssetMaxAmount|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Query order quantity precision per asset (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/assetInfo?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/convert/assetInfo`

Query for supported asset precision information

Weight(IP): 100

<h3 id="query-order-quantity-precision-per-asset-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "asset": "BTC",
    "fraction": 8
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-order-quantity-precision-per-asset-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset Precision Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-order-quantity-precision-per-asset-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» asset|string|true|none|none|
|» fraction|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Send quote request (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/getQuote?fromAsset=BTC&toAsset=USDT&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/convert/getQuote`

Request a quote for the requested token pairs

Weight(UID): 200

<h3 id="send-quote-request-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromAsset|query|string|true|none|
|toAsset|query|string|true|none|
|fromAmount|query|number(float)|false|When specified, it is the amount you will be debited after the conversion|
|toAmount|query|number(float)|false|When specified, it is the amount you will be debited after the conversion|
|validTime|query|string|false|10s, 30s, 1m, 2m, default 10s|
|walletType|query|string|false|SPOT or FUNDING. Default is SPOT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "quoteId": "12415572564",
  "ratio": "38163.7",
  "inverseRatio": "0.0000262",
  "validTimestamp": 1623319461670,
  "toAmount": "3816.37",
  "fromAmount": "0.1"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="send-quote-request-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Quote Request|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="send-quote-request-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quoteId|string|true|none|none|
|ratio|string|true|none|none|
|inverseRatio|string|true|none|none|
|validTimestamp|integer(int64)|true|none|none|
|toAmount|string|true|none|none|
|fromAmount|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Accept Quote (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/acceptQuote?quoteId=1000&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/convert/acceptQuote`

Accept the offered quote by quote ID.

Weight(UID): 500

<h3 id="accept-quote-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "orderId": "933256278426274426",
  "createTime": 1623381330472,
  "orderStatus": "PROCESS"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="accept-quote-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accept Quote|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="accept-quote-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderId|string|true|none|none|
|createTime|integer(int64)|true|none|none|
|orderStatus|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Order status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/orderStatus?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/convert/orderStatus`

Query order status by order ID.

Weight(UID): 100

<h3 id="order-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|string|false|none|
|quoteId|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "orderId": 933256278426274400,
  "orderStatus": "SUCCESS",
  "fromAsset": "BTC",
  "fromAmount": "0.00054414",
  "toAsset": "USDT",
  "toAmount": "20",
  "ratio": "36755",
  "inverseRatio": "0.00002721",
  "createTime": 1623381330472
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="order-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order Status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="order-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderId|integer(int64)|true|none|none|
|orderStatus|string|true|none|none|
|fromAsset|string|true|none|none|
|fromAmount|string|true|none|none|
|toAsset|string|true|none|none|
|toAmount|string|true|none|none|
|ratio|string|true|none|none|
|inverseRatio|string|true|none|none|
|createTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Place limit order (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/limit/placeOrder?baseAsset=BUSD&quoteAsset=USDT&limitPrice=0&side=SELL&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/convert/limit/placeOrder`

Enable users to place a limit order

- baseAsset or quoteAsset can be determined via exchangeInfo endpoint.
- Limit price is defined from baseAsset to quoteAsset.
- Either baseAmount or quoteAmount is used.

Weight(UID): 500

<h3 id="place-limit-order-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseAsset|query|string|true|none|
|quoteAsset|query|string|true|none|
|limitPrice|query|number(double)|true|Symbol limit price (from baseAsset to quoteAsset)|
|baseAmount|query|number(double)|false|Base asset amount. (One of baseAmount or quoteAmount is required)|
|quoteAmount|query|number(double)|false|Quote asset amount. (One of baseAmount or quoteAmount is required)|
|side|query|string|true|none|
|walletType|query|string|false|SPOT or FUNDING or SPOT_FUNDING. It is to use which type of assets. Default is SPOT.|
|expiredType|query|string|false|1_D, 3_D, 7_D, 30_D (D means day)|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|side|SELL|
|side|BUY|
|walletType|SPOT|
|walletType|FUNDING|
|walletType|SPOT_FUNDING|
|expiredType|1_D|
|expiredType|3_D|
|expiredType|7_D|
|expiredType|30_D|

> Example responses

> 200 Response

```json
{
  "orderId": "1603680255057330400",
  "status": "PROCESS"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="place-limit-order-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="place-limit-order-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderId|integer(int64)|true|none|none|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Cancel limit order (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/limit/cancelOrder?orderId=1603680255057330400&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/convert/limit/cancelOrder`

Enable users to cancel a limit order

Weight(UID): 200

<h3 id="cancel-limit-order-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int64)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "orderId": 1603680255057330400,
  "status": "CANCELED"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="cancel-limit-order-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancel Order|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="cancel-limit-order-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderId|integer(int64)|true|none|none|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query limit open orders (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/limit/queryOpenOrders?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/convert/limit/queryOpenOrders`

Enable users to query for all existing limit orders

Weight(UID): 3000

<h3 id="query-limit-open-orders-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "quoteId": "18sdf87kh9df",
      "orderId": "1603680255057330400",
      "orderStatus": "SUCCESS",
      "fromAsset": "BNB",
      "fromAmount": "10",
      "toAsset": "USDT",
      "toAmount": "2317.89",
      "ratio": "231.789",
      "inverseRatio": "0.00431427",
      "createTime": 1614089498000,
      "expiredTimestamp": 1614099498000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-limit-open-orders-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All existing limit orders|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-limit-open-orders-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|true|none|none|
|» quoteId|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderStatus|string|true|none|none|
|» fromAsset|string|true|none|none|
|» fromAmount|string|true|none|none|
|» toAsset|string|true|none|none|
|» toAmount|string|true|none|none|
|» ratio|string|true|none|none|
|» inverseRatio|string|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» expiredTimestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Convert Trade History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/convert/tradeFlow?startTime=1624248872184&endTime=1624248872185&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/convert/tradeFlow`

- The max interval between startTime and endTime is 30 days.

Weight(UID): 3000

<h3 id="get-convert-trade-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|true|UTC timestamp in ms|
|endTime|query|integer(int64)|true|UTC timestamp in ms|
|limit|query|integer(int32)|false|default 100, max 1000|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "quoteId": "f3b91c525b2644c7bc1e1cd31b6e1aa6",
      "orderId": 940708407462087200,
      "orderStatus": "SUCCESS",
      "fromAsset": "USDT",
      "fromAmount": "20",
      "toAsset": "BNB",
      "toAmount": "0.06154036",
      "ratio": "0.00307702",
      "inverseRatio": "324.99",
      "createTime": 1624248872184
    }
  ],
  "startTime": 1623824139000,
  "endTime": 1626416139000,
  "limit": 100,
  "moreData": false
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-convert-trade-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Convert Trade History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-convert-trade-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|true|none|none|
|» quoteId|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» orderStatus|string|true|none|none|
|» fromAsset|string|true|none|none|
|» fromAmount|string|true|none|none|
|» toAsset|string|true|none|none|
|» toAmount|string|true|none|none|
|» ratio|string|true|none|price ratio|
|» inverseRatio|string|true|none|inverse price|
|» createTime|integer(int64)|true|none|none|
|startTime|integer(int64)|true|none|none|
|endTime|integer(int64)|true|none|none|
|limit|integer(int32)|true|none|none|
|moreData|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-rebate">Rebate</h1>

Rebate Endpoints

## Get Spot Rebate History Records (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/rebate/taxQuery?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/rebate/taxQuery`

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.
- The earliest startTime is supported on June 10, 2020

Weight(UID): 3000

<h3 id="get-spot-rebate-history-records-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|page|query|integer(int32)|false|default 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "type": "GENERAL",
  "code": "000000000",
  "data": {
    "page": 1,
    "totalRecords": 2,
    "totalPageNum": 1,
    "data": [
      {
        "asset": "USDT",
        "type": 1,
        "amount": "0.0001126",
        "updateTime": 1637651320000
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-spot-rebate-history-records-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rebate History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-spot-rebate-history-records-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|type|string|true|none|none|
|code|string|true|none|none|
|data|object|true|none|none|
|» page|integer(int32)|true|none|none|
|» totalRecords|integer(int32)|true|none|none|
|» totalPageNum|integer(int32)|true|none|none|
|» data|[object]|true|none|none|
|» » asset|string|true|none|none|
|» » type|integer(int32)|true|none|rebate type：1 is commission rebate，2 is referral kickback|
|» » amount|string|true|none|none|
|» » updateTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-nft">NFT</h1>

NFT Endpoints

## Get NFT Transaction History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/nft/history/transactions?orderType=1&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/nft/history/transactions`

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.

Weight(UID): 3000

<h3 id="get-nft-transaction-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderType|query|integer(int32)|true|0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 50, Max 50|
|page|query|integer(int32)|false|Default 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "list": [
    {
      "orderNo": "1_470502070600699904",
      "tokens": [
        {
          "network": "BSC",
          "tokenId": "216000000496",
          "contractAddress": "MYSTERY_BOX0000087"
        }
      ],
      "tradeTime": 1626941236000,
      "tradeAmount": "19.60000000",
      "tradeCurrency": "BNB"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-nft-transaction-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NFT Transaction History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-nft-transaction-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|list|[object]|true|none|none|
|» orderNo|string|true|none|0: purchase order, 1: sell order, 2: royalty income, 3: primary market order, 4: mint fee|
|» tokens|[object]|true|none|none|
|» » network|string|true|none|none|
|» » tokenId|string|true|none|none|
|» » contractAddress|string|true|none|none|
|» tradeTime|integer(int64)|true|none|none|
|» tradeAmount|string|true|none|none|
|» tradeCurrency|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get NFT Deposit History(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/nft/history/deposit?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/nft/history/deposit`

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.

Weight(UID): 3000

<h3 id="get-nft-deposit-historyuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 50, Max 50|
|page|query|integer(int32)|false|Default 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "list": [
    {
      "network": "ETH",
      "txID": null,
      "contractAdrress": "0xe507c961ee127d4439977a61af39c34eafee0dc6",
      "tokenId": "10014",
      "timestamp": 1629986047000
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-nft-deposit-historyuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NFT Deposit History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-nft-deposit-historyuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|list|[object]|true|none|none|
|» network|string|true|none|none|
|» txID|integer \| null|true|none|none|
|» contractAdrress|string|true|none|none|
|» tokenId|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get NFT Withdraw History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/nft/history/withdraw?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/nft/history/withdraw`

- The max interval between startTime and endTime is 90 days.
- If startTime and endTime are not sent, the recent 7 days' data will be returned.

Weight(UID): 3000

<h3 id="get-nft-withdraw-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|limit|query|integer(int32)|false|Default 50, Max 50|
|page|query|integer(int32)|false|Default 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 178,
  "list": [
    {
      "network": "ETH",
      "txID": "0x2be5eed31d787fdb4880bc631c8e76bdfb6150e137f5cf1732e0416ea206f57f",
      "contractAdrress": "0xe507c961ee127d4439977a61af39c34eafee0dc6",
      "tokenId": "1000001247",
      "timestamp": 1633674433000,
      "fee": 0.1,
      "feeAsset": "ETH"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-nft-withdraw-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NFT Withdraw History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-nft-withdraw-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|list|[object]|true|none|none|
|» network|string|true|none|none|
|» txID|string|true|none|none|
|» contractAdrress|string|true|none|none|
|» tokenId|string|true|none|none|
|» timestamp|integer(int64)|true|none|none|
|» fee|number|true|none|none|
|» feeAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get NFT Asset (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/nft/user/getAsset?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/nft/user/getAsset`

Weight(UID): 3000

<h3 id="get-nft-asset-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Default 50, Max 50|
|page|query|integer(int32)|false|Default 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "total": 347,
  "list": [
    {
      "network": "BSC",
      "contractAddress": "REGULAR11234567891779",
      "tokenId": "100900000017"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-nft-asset-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-nft-asset-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|none|
|list|[object]|true|none|none|
|» network|string|true|none|none|
|» contractAddress|string|true|none|none|
|» tokenId|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-gift-card">Gift Card</h1>

Gift Card Endpoints

## Create a Binance Code (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/giftcard/createCode?token=string&amount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/giftcard/createCode`

This API is for creating a Binance Code. To get started with, please make sure:

- You have a Binance account
- You have passed kyc
- You have a sufficient balance in your Binance funding wallet
- You need Enable Withdrawals for the API Key which requests this endpoint.

Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H

Weight(IP): 1

<h3 id="create-a-binance-code-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The coin type contained in the Binance Code|
|amount|query|number(double)|true|The amount of the coin|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "referenceNo": "0033002327977405",
    "code": "AOGANK3NB4GIT3C6",
    "expiredTime": 1727417154000
  },
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="create-a-binance-code-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Code creation|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="create-a-binance-code-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» referenceNo|string|true|none|none|
|» code|string|true|none|none|
|» expiredTime|integer(int64)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Redeem a Binance Code (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/giftcard/redeemCode?code=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/giftcard/redeemCode`

This API is for redeeming the Binance Code. Once redeemed, the coins will be deposited in your funding wallet.

Please note that if you enter the wrong code 5 times within 24 hours, you will no longer be able to redeem any Binance Code that day.

Weight(IP): 1

<h3 id="redeem-a-binance-code-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|query|string|true|Binance Code|
|externalUid|query|string|false|Each external unique ID represents a unique user on the partner platform. The function helps you to identify the redemption behavior of different users, such as redemption frequency and amount. It also helps risk and limit control of a single account, such as daily limit on redemption volume, frequency, and incorrect number of entries. This will also prevent a single user account reach the partner's daily redemption limits. We strongly recommend you to use this feature and transfer us the User ID of your users if you have different users redeeming Binance codes on your platform. To protect user data privacy, you may choose to transfer the user id in any desired format (max. 400 characters).|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "token": "BNB",
    "amount": "10",
    "referenceNo": "0033002327977405",
    "identityNo": "10316281761814589440"
  },
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="redeem-a-binance-code-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redeemed Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="redeem-a-binance-code-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» token|string|true|none|none|
|» amount|string|true|none|none|
|» referenceNo|string|true|none|none|
|» identityNo|string|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Verify a Binance Code (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/giftcard/verify?referenceNo=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/giftcard/verify`

This API is for verifying whether the Binance Code is valid or not by entering Binance Code or reference number.

Please note that if you enter the wrong binance code 5 times within an hour, you will no longer be able to verify any binance code for that hour.

Weight(IP): 1

<h3 id="verify-a-binance-code-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|referenceNo|query|string|true|reference number|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "valid": true,
    "token": "BNB",
    "amount": "0.00000001"
  },
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="verify-a-binance-code-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Code Verification|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="verify-a-binance-code-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» valid|boolean|true|none|none|
|» token|string|true|none|none|
|» amount|string|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fetch RSA Public Key (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/giftcard/cryptography/rsa-public-key?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/giftcard/cryptography/rsa-public-key`

This API is for fetching the RSA Public Key.
This RSA Public key will be used to encrypt the card code.
Please note that the RSA Public key fetched is valid only for the current day.

Weight(IP): 1

<h3 id="fetch-rsa-public-key-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXBBVKLAc1GQ5FsIFFqOHrPTox5noBONIKr+IAedTR9FkVxq6e65updEbfdhRNkMOeYIO2i0UylrjGC0X8YSoIszmrVHeV0l06Zh1oJuZos1+7N+WLuz9JvlPaawof3GUakTxYWWCa9+8KIbLKsoKMdfS96VT+8iOXO3quMGKUmQIDAQAB",
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fetch-rsa-public-key-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|RSA Public Key.|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fetch-rsa-public-key-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|string|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Buy a Binance Code (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/giftcard/buyCode?baseToken=string&faceToken=string&baseTokenAmount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/giftcard/buyCode`

This API is for buying a fixed-value Binance Code, which means your Binance Code will be redeemable to a token that is different to the token that you are paying in. If the token you’re paying and the redeemable token are the same, please use the Create Binance Code endpoint.
You can use supported crypto currency or fiat token as baseToken to buy Binance Code that is redeemable to your chosen faceToken.
Once successfully purchased, the amount of baseToken would be deducted from your funding wallet.

To get started with, please make sure:
- You have a Binance account
- You have passed kyc
- You have a sufficient balance in your Binance funding wallet
- You need Enable Withdrawals for the API Key which requests this endpoint.

Daily creation volume: 2 BTC / 24H Daily creation times: 200 Codes / 24H

Weight(IP): 1

<h3 id="buy-a-binance-code-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseToken|query|string|true|The token you want to pay, example BUSD|
|faceToken|query|string|true|The token you want to buy, example BNB. If faceToken = baseToken, it's the same as createCode endpoint.|
|baseTokenAmount|query|number(double)|true|The base token asset quantity, example  1.002|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "referenceNo": "0033002327977405",
    "code": "AOGANK3NB4GIT3C6",
    "expiredTime": 1727417154000
  },
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="buy-a-binance-code-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Code creation|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="buy-a-binance-code-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» referenceNo|string|true|none|none|
|» code|string|true|none|none|
|» expiredTime|integer(int64)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fetch Token Limit (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/giftcard/buyCode/token-limit?baseToken=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/giftcard/buyCode/token-limit`

This API is to help you verify which tokens are available for you to purchase fixed-value gift cards as mentioned in section 2 and it's limitation.

Weight(IP): 1

<h3 id="fetch-token-limit-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseToken|query|string|true|The token you want to pay, example BUSD|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "coin": "BNB",
    "fromMin": "0.01",
    "fromMax": "1"
  },
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="fetch-token-limit-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token limit|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="fetch-token-limit-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» coin|string|false|none|none|
|» fromMin|string|false|none|none|
|» fromMax|string|false|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-auto-invest">Auto-Invest</h1>

Auto-Invest Endpoints

## Get target asset list (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/target-asset/list?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/target-asset/list`

Weight(IP): 1

<h3 id="get-target-asset-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetAsset|query|string|false|none|
|size|query|integer(int32)|false|Default:10 Max:100|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "targetAssets": "BTC",
  "autoInvestAssetList": [
    {
      "targetAsset": "BTC",
      "roiAndDimensionTypeList": [
        {
          "simulateRoi": "5.004",
          "dimensionValue": "3",
          "dimensionUnit": "year"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-target-asset-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target asset list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-target-asset-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetAssets|string|false|none|none|
|autoInvestAssetList|[object]|false|none|none|
|» targetAsset|string|true|none|none|
|» roiAndDimensionTypeList|[object]|true|none|none|
|» » simulateRoi|string|true|none|none|
|» » dimensionValue|string|true|none|none|
|» » dimensionUnit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get target asset ROI data (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/target-asset/roi/list?targetAsset=BTC&hisRoiType=FIVE_YEAR&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/target-asset/roi/list`

ROI return list for target asset

Weight(IP): 1

<h3 id="get-target-asset-roi-data-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetAsset|query|string|true|none|
|hisRoiType|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "date": "1648378800000",
    "simulateRoi": "1.75"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-target-asset-roi-data-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target asset list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-target-asset-roi-data-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» date|string|true|none|none|
|» simulateRoi|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query all source asset and target asset (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/all/asset?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/all/asset`

Query all source assets and target assets

Weight(IP): 1

<h3 id="query-all-source-asset-and-target-asset-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "targetAssets": [
    [
      "BTC",
      "BNB"
    ]
  ],
  "sourceAssets": [
    [
      "BTC",
      "BNB"
    ]
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-all-source-asset-and-target-asset-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target asset|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-all-source-asset-and-target-asset-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetAssets|[string]|true|none|none|
|sourceAssets|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query source asset list (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/source-asset/list?usageType=RECURRING&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/source-asset/list`

Query Source Asset to be used for investment

Weight(IP): 1

<h3 id="query-source-asset-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|targetAsset|query|string|false|none|
|indexId|query|integer(int64)|false|none|
|usageType|query|string|true|none|
|flexibleAllowedToUse|query|boolean|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "feeRate": "0.002",
  "sourceAssets": [
    {
      "sourceAsset": "USDT",
      "assetMinAmount": "0.1",
      "assetMaxAmount": "1000000",
      "scale": "2",
      "flexibleAmount": "1111"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-source-asset-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-source-asset-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feeRate|string|true|none|none|
|sourceAssets|[object]|true|none|none|
|» sourceAsset|string|true|none|none|
|» assetMinAmount|string|true|none|none|
|» assetMaxAmount|string|true|none|none|
|» scale|string|true|none|none|
|» flexibleAmount|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Investment plan creation (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/plan/add?sourceType=MAIN_SITE&planType=SINGLE&subscriptionAmount=0&subscriptionCycle=H1&subscriptionStartTime=0&sourceAsset=USDT&details=%7B%22targetAsset%22%3A%22BTC%22%2C%22percentage%22%3A0%7D&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/auto-invest/plan/add`

Post an investment plan creation

Weight(IP): 1

<h3 id="investment-plan-creation-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceType|query|string|true|none|
|requestId|query|string|false|none|
|planType|query|string|true|none|
|IndexId|query|integer(int64)|false|none|
|subscriptionAmount|query|number(float)|true|none|
|subscriptionCycle|query|string|true|none|
|subscriptionStartDay|query|integer|false|none|
|subscriptionStartWeekday|query|string|false|none|
|subscriptionStartTime|query|integer|true|none|
|sourceAsset|query|string|true|none|
|flexibleAllowedToUse|query|boolean|false|none|
|details|query|[object]|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sourceType|MAIN_SITE|
|sourceType|TR|
|planType|SINGLE|
|planType|PORTFOLIO|
|planType|INDEX|
|subscriptionCycle|H1|
|subscriptionCycle|H4|
|subscriptionCycle|H8|
|subscriptionCycle|H12|
|subscriptionCycle|WEEKLY|
|subscriptionCycle|DAILY|
|subscriptionCycle|MONTHLY|
|subscriptionCycle|BI_WEEKLY|
|subscriptionStartWeekday|MON|
|subscriptionStartWeekday|TUE|
|subscriptionStartWeekday|WED|
|subscriptionStartWeekday|THU|
|subscriptionStartWeekday|FRI|
|subscriptionStartWeekday|SAT|
|subscriptionStartWeekday|SUN|

> Example responses

> 200 Response

```json
{
  "planId": 12345,
  "nextExecutionDateTime": 1648378800000
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="investment-plan-creation-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="investment-plan-creation-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planId|integer|true|none|none|
|nextExecutionDateTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Investment plan adjustment

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/plan/edit?planId=0&subscriptionAmount=0&subscriptionCycle=H1&subscriptionStartTime=0&sourceAsset=USDT&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/auto-invest/plan/edit`

Query Source Asset to be used for investment

Weight(IP): 1

<h3 id="investment-plan-adjustment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|integer|true|none|
|subscriptionAmount|query|number(float)|true|none|
|subscriptionCycle|query|string|true|none|
|subscriptionStartDay|query|integer|false|none|
|subscriptionStartWeekday|query|string|false|none|
|subscriptionStartTime|query|integer|true|none|
|sourceAsset|query|string|true|none|
|flexibleAllowedToUse|query|boolean|false|none|
|details|query|[object]|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|subscriptionCycle|H1|
|subscriptionCycle|H4|
|subscriptionCycle|H8|
|subscriptionCycle|H12|
|subscriptionCycle|WEEKLY|
|subscriptionCycle|DAILY|
|subscriptionCycle|MONTHLY|
|subscriptionCycle|BI_WEEKLY|
|subscriptionStartWeekday|MON|
|subscriptionStartWeekday|TUE|
|subscriptionStartWeekday|WED|
|subscriptionStartWeekday|THU|
|subscriptionStartWeekday|FRI|
|subscriptionStartWeekday|SAT|
|subscriptionStartWeekday|SUN|

> Example responses

> 200 Response

```json
{
  "planId": 12345,
  "nextExecutionDateTime": 1648378800000
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="investment-plan-adjustment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="investment-plan-adjustment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planId|integer|true|none|none|
|nextExecutionDateTime|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Change Plan Status

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/plan/edit-status?planId=0&status=ONGOING&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/auto-invest/plan/edit-status`

Change Plan Status

Weight(IP): 1

<h3 id="change-plan-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|integer|true|none|
|status|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ONGOING|
|status|PAUSED|
|status|REMOVED|

> Example responses

> 200 Response

```json
{
  "planId": 12345,
  "nextExecutionDateTime": 1648378800000,
  "status": "ONGOING"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="change-plan-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="change-plan-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planId|integer|true|none|none|
|nextExecutionDateTime|integer(int64)|true|none|none|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get list of plans

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/plan/list?planType=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/plan/list`

Query plan lists

Weight(IP): 1

<h3 id="get-list-of-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planType|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "planValueInUSD": "123",
  "planValueInBTC": "0.1",
  "pnlInUSD": "120",
  "roi": "2.3",
  "plan": [
    {
      "planId": 12345,
      "planType": "SINGLE",
      "editAllowed": "true",
      "creationDateTime": 1648378800000,
      "firstExecutionDateTime": 1648378800000,
      "nextExecutionDateTime": 1648378800000,
      "status": "ONGOING",
      "lastUpdatedDateTime": 1648378800000,
      "targetAsset": "BTC",
      "totalTargetAmount": "0.111",
      "sourceAsset": "BUSD",
      "totalInvestedInUSD": "4.555",
      "subscriptionAmount": "0.1",
      "subscriptionCycle": "WEEKLY",
      "subscriptionStartDay": "1",
      "subscriptionStartWeekday": "MON",
      "subscriptionStartTime": "1",
      "sourceWallet": "SPOT_WALLET",
      "flexibleAllowedToUse": "false",
      "planValueInUSD": "101.2",
      "pnlInUSD": "101.2",
      "roi": "1.02"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-list-of-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-list-of-plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planValueInUSD|string|true|none|none|
|planValueInBTC|string|true|none|none|
|pnlInUSD|string|true|none|none|
|roi|string|true|none|none|
|plan|[object]|true|none|none|
|» planId|integer|true|none|none|
|» planType|string|true|none|none|
|» editAllowed|string|true|none|none|
|» creationDateTime|integer(int64)|true|none|none|
|» firstExecutionDateTime|integer(int64)|true|none|none|
|» nextExecutionDateTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» lastUpdatedDateTime|integer(int64)|true|none|none|
|» targetAsset|string|true|none|none|
|» totalTargetAmount|string|true|none|none|
|» sourceAsset|string|true|none|none|
|» totalInvestedInUSD|string|true|none|none|
|» subscriptionAmount|string|true|none|none|
|» subscriptionCycle|string|true|none|none|
|» subscriptionStartDay|string|true|none|none|
|» subscriptionStartWeekday|string|true|none|none|
|» subscriptionStartTime|string|true|none|none|
|» sourceWallet|string|true|none|none|
|» flexibleAllowedToUse|string|true|none|none|
|» planValueInUSD|string|true|none|none|
|» pnlInUSD|string|true|none|none|
|» roi|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query holding details of the plan

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/plan/id?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/plan/id`

Query holding details of the plan

Weight(IP): 1

<h3 id="query-holding-details-of-the-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|integer(int64)|false|none|
|requestId|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "planValueInUSD": "123",
  "planValueInBTC": "0.1",
  "pnlInUSD": "120",
  "roi": "2.3",
  "plan": [
    {
      "planId": 12345,
      "planType": "SINGLE",
      "editAllowed": "true",
      "flexibleAllowedToUse": "false",
      "creationDateTime": 1648378800000,
      "firstExecutionDateTime": 1648378800000,
      "nextExecutionDateTime": 1648378800000,
      "status": "ONGOING",
      "targetAsset": "BTC",
      "sourceAsset": "BUSD",
      "totalInvestedInUSD": "4.555",
      "planValueInUSD": "101.2",
      "pnlInUSD": "101.2",
      "roi": "1.02",
      "details": [
        {
          "targetAsset": "ADA",
          "averagePriceInUSD": "3.4",
          "totalInvestedInUSD": "222.21",
          "purchasedAmount": "122.12345678",
          "purchasedAmountUnit": "ADA",
          "pnlInUSD": "109.2",
          "roi": "0.1",
          "percentage": "50",
          "assetStatus": "ACTIVE",
          "availableAmount": "122.12345678",
          "availableAmountUnit": "ADA",
          "redeemedAmout": "122.12345678",
          "redeemedAmoutUnit": "ADA",
          "assetValueInUSD": "101.2"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-holding-details-of-the-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-holding-details-of-the-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planValueInUSD|string|false|none|none|
|planValueInBTC|string|false|none|none|
|pnlInUSD|string|false|none|none|
|roi|string|false|none|none|
|plan|[object]|false|none|none|
|» planId|integer|true|none|none|
|» planType|string|true|none|none|
|» editAllowed|string|true|none|none|
|» flexibleAllowedToUse|string|true|none|none|
|» creationDateTime|integer(int64)|true|none|none|
|» firstExecutionDateTime|integer(int64)|true|none|none|
|» nextExecutionDateTime|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» targetAsset|string|true|none|none|
|» sourceAsset|string|true|none|none|
|» totalInvestedInUSD|string|true|none|none|
|» planValueInUSD|string|true|none|none|
|» pnlInUSD|string|true|none|none|
|» roi|string|true|none|none|
|» details|[object]|true|none|none|
|» » targetAsset|string|true|none|none|
|» » averagePriceInUSD|string|true|none|none|
|» » totalInvestedInUSD|string|true|none|none|
|» » purchasedAmount|string|true|none|none|
|» » purchasedAmountUnit|string|true|none|none|
|» » pnlInUSD|string|true|none|none|
|» » roi|string|true|none|none|
|» » percentage|string|true|none|none|
|» » assetStatus|string|true|none|none|
|» » availableAmount|string|true|none|none|
|» » availableAmountUnit|string|true|none|none|
|» » redeemedAmout|string|true|none|none|
|» » redeemedAmoutUnit|string|true|none|none|
|» » assetValueInUSD|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query subscription transaction history

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/history/list?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/history/list`

Query subscription transaction history of a plan

Weight(IP): 1

<h3 id="query-subscription-transaction-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planId|query|integer(int64)|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|targetAsset|query|number(int64)|false|none|
|planType|query|string|false|none|
|size|query|integer(int32)|false|Default:10 Max:100|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|planType|SINGLE|
|planType|PORTFOLIO|
|planType|INDEX|
|planType|ALL|

> Example responses

> 200 Response

```json
[
  {
    "id": 12345,
    "targetAsset": "BTC",
    "planType": "SINGLE",
    "planName": "BTC",
    "planId": 1234,
    "transactionDateTime": 1648378800000,
    "transactionStatus": "SUCCESS",
    "failedType": "INSUFFICIENT_BALANCE",
    "sourceAsset": "BUSD",
    "sourceAssetAmount": "297.12345",
    "targetAssetAmount": "297.12345",
    "sourceWallet": "SPOT_WALLET",
    "flexibleUsed": "false",
    "transactionFee": "0.002",
    "transactionFeeUnit": "BUSD",
    "executionPrice": "2342",
    "executionType": "RECURRING",
    "subscriptionCycle": "WEEKLY"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-subscription-transaction-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-subscription-transaction-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer(int64)|true|none|none|
|» targetAsset|string|true|none|none|
|» planType|string|true|none|none|
|» planName|string|true|none|none|
|» planId|integer(int64)|true|none|none|
|» transactionDateTime|integer(int64)|true|none|none|
|» transactionStatus|string|true|none|none|
|» failedType|string|true|none|none|
|» sourceAsset|string|true|none|none|
|» sourceAssetAmount|string|true|none|none|
|» targetAssetAmount|string|true|none|none|
|» sourceWallet|string|true|none|none|
|» flexibleUsed|string|true|none|none|
|» transactionFee|string|true|none|none|
|» transactionFeeUnit|string|true|none|none|
|» executionPrice|string|true|none|none|
|» executionType|string|true|none|none|
|» subscriptionCycle|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Index Details(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/index/info?indexId=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/index/info`

Query index details

Weight(IP): 1

<h3 id="query-index-detailsuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexId|query|integer(int64)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "indexId": 1,
  "indexName": "BINANCE TOP 10 EW",
  "status": "RUNNING",
  "assetAllocation": [
    {
      "targetAsset": "ADA",
      "allocation": "10"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-index-detailsuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-index-detailsuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexId|integer(int64)|true|none|none|
|indexName|string|true|none|none|
|status|string|true|none|none|
|assetAllocation|[object]|true|none|none|
|» targetAsset|string|true|none|none|
|» allocation|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query Index Linked Plan Position Details(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/index/user-summary?indexId=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/index/user-summary`

Details on users Index-Linked plan position details

Weight(IP): 1

<h3 id="query-index-linked-plan-position-detailsuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexId|query|integer(int64)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "indexId": 1,
  "totalInvestedInUSD": "114.555",
  "currentInvestedInUSD": "101.2",
  "pnlInUSD": "101.2",
  "roi": "1.023",
  "assetAllocation": [
    {
      "targetAsset": "ADA",
      "allocation": "10"
    }
  ],
  "details": [
    {
      "targetAsset": "ADA",
      "averagePriceInUSD": "3.4",
      "totalInvestedInUSD": "222.21",
      "currentInvestedInUSD": "101.2",
      "purchasedAmount": "122.2",
      "pnlInUSD": "109.2",
      "roi": "0.2",
      "percentage": "10",
      "availableAmount": "122.12345678",
      "redeemedAmount": "122",
      "assetValueInUSD": "101"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-index-linked-plan-position-detailsuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Position Details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-index-linked-plan-position-detailsuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexId|integer(int64)|true|none|none|
|totalInvestedInUSD|string|true|none|none|
|currentInvestedInUSD|string|true|none|current invest|
|pnlInUSD|string|true|none|PNL of the plan in USD based on current amount|
|roi|string|true|none|ROI of the plan based on current amount|
|assetAllocation|[object]|true|none|none|
|» targetAsset|string|true|none|for pie chart|
|» allocation|string|true|none|none|
|details|[object]|true|none|none|
|» targetAsset|string|true|none|none|
|» averagePriceInUSD|string|true|none|average price of the asset in USD|
|» totalInvestedInUSD|string|true|none|total source asset invested for this target asset in equivilent of USD|
|» currentInvestedInUSD|string|true|none|current invest|
|» purchasedAmount|string|true|none|purchased amount of target asset|
|» pnlInUSD|string|true|none|PNL denominated in USD|
|» roi|string|true|none|ROI calculated in decimal|
|» percentage|string|true|none|asset allocation in the plan. If it's single plan, then it's 100|
|» availableAmount|string|true|none|none|
|» redeemedAmount|string|true|none|none|
|» assetValueInUSD|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## One Time Transaction(TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/one-off?sourceType=MAIN_SITE&subscriptionAmount=10.1&sourceAsset=USDT&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/auto-invest/one-off`

One time transaction

Weight(IP): 1

<h3 id="one-time-transactiontrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceType|query|string|true|none|
|requestId|query|string|false|none|
|subscriptionAmount|query|number(float)|true|none|
|sourceAsset|query|string|true|none|
|flexibleAllowedToUse|query|boolean|false|none|
|planId|query|integer(int64)|false|none|
|indexId|query|integer(int64)|false|none|
|details|query|[object]|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "transactionId": 12345,
  "waitSecond": 5
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="one-time-transactiontrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transaction result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="one-time-transactiontrade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|integer(int64)|true|none|none|
|waitSecond|integer(int32)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Query One-Time Transaction Status (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/one-off/status?transactionId=12345&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/one-off/status`

Transaction status for one-time transaction

Weight(IP): 1

<h3 id="query-one-time-transaction-status-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|query|integer(int64)|true|none|
|requestId|query|string|false|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "transactionId": 12345,
  "status": "SUCCESS"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="query-one-time-transaction-status-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transaction result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="query-one-time-transaction-status-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|integer(int64)|true|none|none|
|status|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Index Linked Plan Redemption (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/redeem?indexId=123456&redemptionPercentage=10&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/lending/auto-invest/redeem`

To redeem index-Linked plan holdings

Weight(IP): 1

<h3 id="index-linked-plan-redemption-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexId|query|integer(int64)|true|PORTFOLIO plan's Id|
|requestId|query|string|false|sourceType + unique, transactionId and requestId cannot be empty at the same time|
|redemptionPercentage|query|integer|true|user redeem percentage,10/20/100.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "redemptionId": 12345
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="index-linked-plan-redemption-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redemption result|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="index-linked-plan-redemption-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redemptionId|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Index Linked Plan Redemption History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/redeem/history?requestId=12345&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/redeem/history`

Get the history of Index Linked Plan Redemption transactions

Max 30 day difference between startTime and endTime
If no startTime and endTime, default to show past 30 day records

Weight(IP): 1

<h3 id="index-linked-plan-redemption-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|integer(int64)|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|asset|query|string|false|none|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "indexId": 1,
    "indexName": "BINANCE TOP 10 EW",
    "redemptionId": 11,
    "status": "SUCCESS",
    "asset": "BTC",
    "amount": "0.005",
    "redemptionDateTime": 1648378800000,
    "transactionFee": "0",
    "transactionFeeUnit": "USDT"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="index-linked-plan-redemption-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redemption history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="index-linked-plan-redemption-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» indexId|integer(int64)|true|none|none|
|» indexName|string|true|none|none|
|» redemptionId|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» redemptionDateTime|integer(int64)|true|none|none|
|» transactionFee|string|true|none|none|
|» transactionFeeUnit|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Index Linked Plan Rebalance Details (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/lending/auto-invest/rebalance/history?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/lending/auto-invest/rebalance/history`

Get the history of Index Linked Plan Redemption transactions

Max 30 day difference between startTime and endTime
If no startTime and endTime, default to show past 30 day records

Weight(IP): 1

<h3 id="index-linked-plan-rebalance-details-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "indexId": 1,
    "indexName": "BINANCE TOP 10 EW",
    "rebalanceId": 11,
    "status": "SUCCESS",
    "rebalanceFee": "10",
    "rebalanceFeeUnit": "USDT",
    "transactionDetails": [
      {
        "asset": "BTC",
        "transactionDateTime": 1648378800000,
        "rebalanceDirection": "BUY",
        "rebalanceAmount": "0.005"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="index-linked-plan-rebalance-details-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rebalance Details|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="index-linked-plan-rebalance-details-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» indexId|integer(int64)|true|none|none|
|» indexName|string|true|none|none|
|» rebalanceId|integer(int64)|true|none|none|
|» status|string|true|none|none|
|» rebalanceFee|string|true|none|none|
|» rebalanceFeeUnit|string|true|none|none|
|» transactionDetails|[object]|true|none|none|
|» » asset|string|true|none|none|
|» » transactionDateTime|integer(int64)|true|none|none|
|» » rebalanceDirection|string|true|none|none|
|» » rebalanceAmount|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-copy-trading">Copy Trading</h1>

Copy Trading Endpoints

## Get Futures Lead Trader Status(TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/copyTrading/futures/userStatus?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/copyTrading/futures/userStatus`

Get Futures Lead Trader Status

Weight(UID): 20

<h3 id="get-futures-lead-trader-statustrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "isLeadTrader": true,
    "time": 1717382310843
  },
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-futures-lead-trader-statustrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures Lead Trader Status|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-futures-lead-trader-statustrade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» isLeadTrader|boolean|true|none|none|
|» time|integer(int64)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Futures Lead Trading Symbol Whitelist(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/copyTrading/futures/leadSymbol?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/copyTrading/futures/leadSymbol`

Get Futures Lead Trading Symbol Whitelist

Weight(IP): 20

<h3 id="get-futures-lead-trading-symbol-whitelistuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "code": "000000",
  "message": "success",
  "data": {
    "symbol": "BTCUSDT",
    "baseAsset": "BTC",
    "quoteAsset": "USDT"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-futures-lead-trading-symbol-whitelistuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Futures Lead Trading Symbol Whitelist|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-futures-lead-trading-symbol-whitelistuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|data|object|true|none|none|
|» symbol|string|true|none|none|
|» baseAsset|string|true|none|none|
|» quoteAsset|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-simple-earn">Simple Earn</h1>

Simple Earn Endpoints

## Get Simple Earn Flexible Product List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/list?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/list`

Get available Simple Earn flexible product list

Weight(IP): 150

<h3 id="get-simple-earn-flexible-product-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "asset": "BTC",
      "latestAnnualPercentageRate": "0.05000000",
      "tierAnnualPercentageRate": {
        "0-5BTC": 0.05,
        "5-10BTC": 0.03
      },
      "airDropPercentageRate": "0.05000000",
      "canPurchase": true,
      "canRedeem": true,
      "isSoldOut": true,
      "hot": true,
      "minPurchaseAmount": "0.01000000",
      "productId": "BTC001",
      "subscriptionStartTime": "1646182276000",
      "status": "PURCHASING"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-simple-earn-flexible-product-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Earn Flexible Product List|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-simple-earn-flexible-product-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» asset|string|true|none|none|
|» latestAnnualPercentageRate|string|true|none|none|
|» tierAnnualPercentageRate|object|true|none|none|
|» » 0-5BTC|number(double)|true|none|none|
|» » 5-10BTC|number(double)|true|none|none|
|» airDropPercentageRate|string|true|none|none|
|» canPurchase|boolean|true|none|none|
|» canRedeem|boolean|true|none|none|
|» isSoldOut|boolean|true|none|none|
|» hot|boolean|true|none|none|
|» minPurchaseAmount|string|true|none|none|
|» productId|string|true|none|none|
|» subscriptionStartTime|string|true|none|none|
|» status|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Simple Earn Locked Product List (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/list?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/list`

Weight(IP): 150

<h3 id="get-simple-earn-locked-product-list-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "projectId": "BNB",
      "detail": {
        "asset": "AXS",
        "rewardAsset": "AXS",
        "duration": 90,
        "renewable": true,
        "isSoldOut": true,
        "apr": "1.2069",
        "status": "CREATED",
        "subscriptionStartTime": "1646182276000",
        "extraRewardAsset": "BNB",
        "extraRewardAPR": "0.23"
      },
      "quota": {
        "totalPersonalQuota": "2",
        "minimum": "0.001"
      }
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-simple-earn-locked-product-list-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Simple Earn Locked Product List|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-simple-earn-locked-product-list-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» projectId|string|true|none|none|
|» detail|object|true|none|none|
|» » asset|string|true|none|none|
|» » rewardAsset|string|true|none|none|
|» » duration|integer(int64)|true|none|none|
|» » renewable|boolean|true|none|none|
|» » isSoldOut|boolean|true|none|none|
|» » apr|string|true|none|none|
|» » status|string|true|none|none|
|» » subscriptionStartTime|string|true|none|none|
|» » extraRewardAsset|string|true|none|none|
|» » extraRewardAPR|string|true|none|none|
|» quota|object|true|none|none|
|» » totalPersonalQuota|string|true|none|none|
|» » minimum|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subscribe Flexible Product (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/subscribe?productId=string&amount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/simple-earn/flexible/subscribe`

Weight(IP): 1

Rate Limit: 1/3s per account

<h3 id="subscribe-flexible-product-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|true|none|
|amount|query|number(double)|true|none|
|autoSubscribe|query|boolean|false|true or false, default true.|
|sourceAccount|query|string|false|SPOT,FUND,ALL, default SPOT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "purchaseId": 40607,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="subscribe-flexible-product-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Product Subscription Response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="subscribe-flexible-product-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseId|integer(int64)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subscribe Locked Product (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/subscribe?projectId=string&amount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/simple-earn/locked/subscribe`

Weight(IP): 1

Rate Limit: 1/3s per account

<h3 id="subscribe-locked-product-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|amount|query|number(double)|true|none|
|autoSubscribe|query|boolean|false|true or false, default true.|
|sourceAccount|query|string|false|SPOT,FUND,ALL, default SPOT|
|redeemTo|query|string|false|SPOT,FLEXIBLE, default FLEXIBLE|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|redeemTo|SPOT|
|redeemTo|FLEXIBLE|

> Example responses

> 200 Response

```json
{
  "purchaseId": 40607,
  "positionId": "12345",
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="subscribe-locked-product-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Product Subscription Response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="subscribe-locked-product-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseId|integer(int64)|true|none|none|
|positionId|string|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Redeem Flexible Product (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/redeem?productId=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/simple-earn/flexible/redeem`

Weight(IP): 1

Rate Limit: 1/3s per account

<h3 id="redeem-flexible-product-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|true|none|
|redeemAll|query|boolean|false|true or false, default to false|
|amount|query|number(double)|false|if redeemAll is false, amount is mandatory|
|destAccount|query|string|false|SPOT,FUND,ALL, default SPOT|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "redeemId": 40607,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="redeem-flexible-product-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redeem Flexible Product|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="redeem-flexible-product-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redeemId|integer(int64)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Redeem Locked Product (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/redeem?positionId=string&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/simple-earn/locked/redeem`

Weight(IP): 1

Rate Limit: 1/3s per account

<h3 id="redeem-locked-product-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|positionId|query|string|true|1234|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "redeemId": 40607,
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="redeem-locked-product-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Redeem Locked Product|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="redeem-locked-product-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redeemId|integer(int64)|true|none|none|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Product Position (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/position?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/position`

Weight(IP): 150

<h3 id="get-flexible-product-position-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|productId|query|string|false|none|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "totalAmount": "75.46000000",
      "tierAnnualPercentageRate": {
        "0-5BTC": 0.05,
        "5-10BTC": 0.03
      },
      "latestAnnualPercentageRate": "0.02599895",
      "yesterdayAirdropPercentageRate": "0.02599895",
      "asset": "USDT",
      "airDropAsset": "BETH",
      "canRedeem": true,
      "collateralAmount": "232.23123213",
      "productId": "USDT001",
      "yesterdayRealTimeRewards": "0.10293829",
      "cumulativeBonusRewards": "0.22759183",
      "cumulativeRealTimeRewards": "0.22759183",
      "cumulativeTotalRewards": "0.45459183",
      "autoSubscribe": true
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-product-position-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Product Position|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-product-position-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» totalAmount|string|true|none|none|
|» tierAnnualPercentageRate|object|true|none|none|
|» » 0-5BTC|number(double)|true|none|none|
|» » 5-10BTC|number(double)|true|none|none|
|» latestAnnualPercentageRate|string|true|none|none|
|» yesterdayAirdropPercentageRate|string|true|none|none|
|» asset|string|true|none|none|
|» airDropAsset|string|true|none|none|
|» canRedeem|boolean|true|none|none|
|» collateralAmount|string|true|none|none|
|» productId|string|true|none|none|
|» yesterdayRealTimeRewards|string|true|none|none|
|» cumulativeBonusRewards|string|true|none|none|
|» cumulativeRealTimeRewards|string|true|none|none|
|» cumulativeTotalRewards|string|true|none|none|
|» autoSubscribe|boolean|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Locked Product Position (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/position?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/position`

Weight(IP): 150

<h3 id="get-locked-product-position-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|none|
|positionId|query|string|false|none|
|projectId|query|string|false|none|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "positionId": "123123",
      "parentPositionId": "123122",
      "projectId": "Axs*90",
      "asset": "AXS",
      "amount": "122.09202928",
      "purchaseTime": "1646182276000",
      "duration": "60",
      "accrualDays": "4",
      "rewardAsset": "AXS",
      "APY": "0.23",
      "rewardAmt": "5.17181528",
      "extraRewardAsset": "BNB",
      "extraRewardAPR": "0.0203",
      "estExtraRewardAmt": "5.17181528",
      "nextPay": "1.29295383",
      "nextPayDate": "1646697600000",
      "payPeriod": "1",
      "redeemAmountEarly": "2802.24068892",
      "rewardsEndDate": "1651449600000",
      "deliverDate": "1651536000000",
      "redeemPeriod": "1",
      "redeemingAmt": "232.2323",
      "redeemTo": "FLEXIBLE",
      "partialAmtDeliverDate": "1651536000000",
      "canRedeemEarly": true,
      "canFastRedemption": true,
      "autoSubscribe": true,
      "type": "AUTO",
      "status": "HOLDING",
      "canReStake": true
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-locked-product-position-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Product Position|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-locked-product-position-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» positionId|string|true|none|none|
|» parentPositionId|string|true|none|none|
|» projectId|string|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» purchaseTime|string|true|none|none|
|» duration|string|true|none|none|
|» accrualDays|string|true|none|none|
|» rewardAsset|string|true|none|none|
|» APY|string|true|none|none|
|» rewardAmt|string|true|none|Earned amount|
|» extraRewardAsset|string|true|none|Rewards assets of extra staking type|
|» extraRewardAPR|string|true|none|APR of extra staking type|
|» estExtraRewardAmt|string|true|none|Rewards of extra staking type, distribute when order expires|
|» nextPay|string|true|none|Next estimated rewards payment|
|» nextPayDate|string|true|none|Next rewards payment date|
|» payPeriod|string|true|none|Payment cycle|
|» redeemAmountEarly|string|true|none|Early redemption amount|
|» rewardsEndDate|string|true|none|Rewards accrual end date|
|» deliverDate|string|true|none|Redemption arrival time|
|» redeemPeriod|string|true|none|Redemption interval|
|» redeemingAmt|string|true|none|Amount under redemption|
|» redeemTo|string|true|none|Redeem to Flexible product or Spot wallet|
|» partialAmtDeliverDate|string|true|none|Arrival time of partial redemption amount of order|
|» canRedeemEarly|boolean|true|none|When it is true, early redemption can be operated|
|» canFastRedemption|boolean|true|none|When it is true, fast redemption can be operated|
|» autoSubscribe|boolean|true|none|When it is true, auto staking can be operated|
|» type|string|true|none|Order type is auto subscribe or normal|
|» status|string|true|none|none|
|» canReStake|boolean|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Simple Account (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/account`

Weight(IP): 150

<h3 id="simple-account-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "totalAmountInBTC": "0.01067982",
  "totalAmountInUSDT": "77.13289230",
  "totalFlexibleAmountInBTC": "0.00000000",
  "totalFlexibleAmountInUSDT": "0.00000000",
  "totalLockedInBTC": "0.01067982",
  "totalLockedInUSDT": "77.13289230"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="simple-account-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Information|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="simple-account-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalAmountInBTC|string|true|none|none|
|totalAmountInUSDT|string|true|none|none|
|totalFlexibleAmountInBTC|string|true|none|none|
|totalFlexibleAmountInUSDT|string|true|none|none|
|totalLockedInBTC|string|true|none|none|
|totalLockedInUSDT|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Subscription Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/history/subscriptionRecord?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/history/subscriptionRecord`

Weight(IP): 150

<h3 id="get-flexible-subscription-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|false|none|
|purchaseId|query|string|false|none|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "amount": "100.00000000",
      "asset": "USDT",
      "time": 1575018510000,
      "purchaseId": 26055,
      "productId": "USDT001",
      "type": "AUTO",
      "sourceAccount": "SPOT",
      "amtFromSpot": "30",
      "amtFromFunding": "70",
      "status": "SUCCESS"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-subscription-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Product Position|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-subscription-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» amount|string|true|none|none|
|» asset|string|true|none|none|
|» time|integer(int64)|true|none|none|
|» purchaseId|integer(int64)|true|none|none|
|» productId|string|true|none|none|
|» type|string|true|none|AUTO for auto subscribe, NORMAL for normal subscription, CONVERT for Locked to Flexible, LOAN for flexible loan collateral, AI for Auto Invest subscribe, TRANSFER for Locked Savings to Flexible|
|» sourceAccount|string|true|none|SPOT, FUNDING, SPOTANDFUNDING|
|» amtFromSpot|string|true|none|Display if sourceAccount is SPOTANDFUNDING |
|» amtFromFunding|string|true|none|Display if sourceAccount is SPOTANDFUNDING|
|» status|string|true|none|PURCHASING/SUCCESS/FAILED|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Locked Subscription Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/history/subscriptionRecord?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/history/subscriptionRecord`

Weight(IP): 150

<h3 id="get-locked-subscription-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|purchaseId|query|string|false|none|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "positionId": "123123",
      "purchaseId": 26055,
      "projectId": "Axs*90",
      "time": 1575018510000,
      "asset": "BNB",
      "amount": "21312.23223",
      "lockPeriod": "30",
      "type": "AUTO",
      "sourceAccount": "SPOT",
      "amtFromSpot": "30",
      "amtFromFunding": "70",
      "status": "SUCCESS"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-locked-subscription-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Subscription Record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-locked-subscription-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» positionId|string|true|none|none|
|» purchaseId|integer(int64)|true|none|none|
|» projectId|string|true|none|none|
|» time|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» lockPeriod|string|true|none|none|
|» type|string|true|none|NORMAL for normal subscription, AUTO for auto-subscription order, ACTIVITY for activity order, TRIAL for trial fund order, RESTAKE for restake order|
|» sourceAccount|string|true|none|SPOT, FUNDING, SPOTANDFUNDING|
|» amtFromSpot|string|true|none|Display if sourceAccount is SPOTANDFUNDING |
|» amtFromFunding|string|true|none|Display if sourceAccount is SPOTANDFUNDING|
|» status|string|true|none|PURCHASING/SUCCESS/FAILED|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Redemption Record (USER_DATA)

> Code samples

```bash
curl https://api.binance.com/sapi/v1/simple-earn/flexible/history/redemptionRecord \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/history/redemptionRecord`

Weight(IP): 150

<h3 id="get-flexible-redemption-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|false|none|
|redeemId|query|string|false|none|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "amount": "10.54000000",
      "asset": "USDT",
      "time": 1577257222000,
      "projectId": "USDT001",
      "redeemId": 40607,
      "destAccount": "SPOT",
      "status": "PAID"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-redemption-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Redemption Record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-redemption-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» amount|string|true|none|none|
|» asset|string|true|none|none|
|» time|integer(int64)|true|none|none|
|» projectId|string|true|none|none|
|» redeemId|integer(int64)|true|none|none|
|» destAccount|string|true|none|SPOT, FUNDING|
|» status|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Locked Redemption Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/history/redemptionRecord?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/history/redemptionRecord`

Weight(IP): 150

<h3 id="get-locked-redemption-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|positionId|query|string|false|none|
|redeemId|query|string|false|none|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "positionId": "123123",
      "redeemId": 40607,
      "time": 1575018510000,
      "asset": "BNB",
      "lockPeriod": "30",
      "amount": "21312.23223",
      "originalAmount": "21312.23223",
      "type": "MATURE",
      "deliverDate": "1575018510000",
      "lossAmount": "0.00001232",
      "isComplete": "true,",
      "rewardAsset": "AXS",
      "rewardAmt": "5.17181528",
      "extraRewardAsset": "BNB",
      "estExtraRewardAmt": "5.17181528",
      "status": "PAID"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-locked-redemption-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Redemption Record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-locked-redemption-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» positionId|string|true|none|none|
|» redeemId|integer(int64)|true|none|none|
|» time|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» lockPeriod|string|true|none|none|
|» amount|string|true|none|none|
|» originalAmount|string|true|none|none|
|» type|string|true|none|MATURE for redeem to Spot Wallet, NEW_TRANSFERRED for redeem to Flexible product, AHEAD for early redemption|
|» deliverDate|string|true|none|none|
|» lossAmount|string|true|none|Loss of profit on early redemption|
|» isComplete|boolean|true|none|none|
|» rewardAsset|string|true|none|none|
|» rewardAmt|string|true|none|none|
|» extraRewardAsset|string|true|none|none|
|» estExtraRewardAmt|string|true|none|none|
|» status|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Rewards History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/history/rewardsRecord?type=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/history/rewardsRecord`

Weight(IP): 150

<h3 id="get-flexible-rewards-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|false|none|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|type|query|string|true|"BONUS", "REALTIME", "REWARDS"|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "asset": "BUSD",
      "rewards": "0.00006408",
      "projectId": "USDT001",
      "type": "BONUS",
      "time": 1577257222000
    }
  ],
  "total": 2
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-rewards-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Rewards History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-rewards-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» asset|string|true|none|none|
|» rewards|string|true|none|none|
|» projectId|string|true|none|none|
|» type|string|true|none|none|
|» time|integer(int64)|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Locked Rewards History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/history/rewardsRecord?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/history/rewardsRecord`

Weight(IP): 150

<h3 id="get-locked-rewards-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|positionId|query|string|false|none|
|asset|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "positionId": "123123",
      "time": 1577257222000,
      "asset": "BNB",
      "lockPeriod": "30",
      "amount": "21312.23223"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-locked-rewards-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Rewards History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-locked-rewards-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» positionId|string|true|none|none|
|» time|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» lockPeriod|string|true|none|none|
|» amount|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Set Flexible Auto Subscribe (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/setAutoSubscribe?productId=string&autoSubscribe=true&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/simple-earn/flexible/setAutoSubscribe`

Weight(IP): 150

<h3 id="set-flexible-auto-subscribe-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|true|none|
|autoSubscribe|query|boolean|true|true or false|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="set-flexible-auto-subscribe-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Product Subscription Response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="set-flexible-auto-subscribe-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Set Locked Auto Subscribe (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/setAutoSubscribe?positionId=string&autoSubscribe=true&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/simple-earn/locked/setAutoSubscribe`

Weight(IP): 150

<h3 id="set-locked-auto-subscribe-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|positionId|query|string|true|none|
|autoSubscribe|query|boolean|true|true or false|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="set-locked-auto-subscribe-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Auto Subscribe|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="set-locked-auto-subscribe-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Personal Left Quota (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/personalLeftQuota?productId=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/personalLeftQuota`

Weight(IP): 150

<h3 id="get-flexible-personal-left-quota-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "leftPersonalQuota": "1000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-personal-left-quota-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Personal Left Quota|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-personal-left-quota-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leftPersonalQuota|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Locked Personal Left Quota (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/personalLeftQuota?projectId=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/personalLeftQuota`

Weight(IP): 150

<h3 id="get-locked-personal-left-quota-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "leftPersonalQuota": "1000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-locked-personal-left-quota-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Personal Left Quota|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-locked-personal-left-quota-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leftPersonalQuota|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Flexible Subscription Preview (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/subscriptionPreview?productId=string&amount=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/subscriptionPreview`

Weight(IP): 150

<h3 id="get-flexible-subscription-preview-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|true|none|
|amount|query|number(double)|true|none|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "totalAmount": "1232.32230982",
  "rewardAsset": "BUSD",
  "airDropAsset": "BETH",
  "estDailyBonusRewards": "0.22759183",
  "estDailyRealTimeRewards": "0.22759183",
  "estDailyAirdropRewards": "0.22759183"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-flexible-subscription-preview-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flexible Subscription Preview|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-flexible-subscription-preview-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalAmount|string|true|none|none|
|rewardAsset|string|true|none|none|
|airDropAsset|string|true|none|none|
|estDailyBonusRewards|string|true|none|none|
|estDailyRealTimeRewards|string|true|none|none|
|estDailyAirdropRewards|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Locked Subscription Preview (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/subscriptionPreview?projectId=string&amount=0&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/subscriptionPreview`

Weight(IP): 150

<h3 id="get-locked-subscription-preview-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|true|none|
|amount|query|number(double)|true|none|
|autoSubscribe|query|boolean|false|true or false, default true.|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
[
  {
    "rewardAsset": "AXS",
    "totalRewardAmt": "5.17181528",
    "extraRewardAsset": "BNB",
    "estTotalExtraRewardAmt": "5.17181528",
    "nextPay": "1.29295383",
    "nextPayDate": "1646697600000",
    "valueDate": "1646697600000",
    "rewardsEndDate": "1651449600000",
    "deliverDate": "1651536000000",
    "nextSubscriptionDate": "1651536000000"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-locked-subscription-preview-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Product Subscription Response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-locked-subscription-preview-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» rewardAsset|string|true|none|none|
|» totalRewardAmt|string|true|none|none|
|» extraRewardAsset|string|true|none|none|
|» estTotalExtraRewardAmt|string|true|none|none|
|» nextPay|string|true|none|none|
|» nextPayDate|string|true|none|none|
|» valueDate|string|true|none|none|
|» rewardsEndDate|string|true|none|none|
|» deliverDate|string|true|none|none|
|» nextSubscriptionDate|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Set Locked Product Redeem Option(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/locked/setRedeemOption?positionId=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/locked/setRedeemOption`

Set redeem option for Locked product

Weight(IP): 50

<h3 id="set-locked-product-redeem-optionuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|positionId|query|string|true|none|
|redeemTo|query|string|false|SPOT,FLEXIBLE, default FLEXIBLE|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|redeemTo|SPOT|
|redeemTo|FLEXIBLE|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="set-locked-product-redeem-optionuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locked Product Redeem Option|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="set-locked-product-redeem-optionuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Rate History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/history/rateHistory?productId=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/history/rateHistory`

Weight(IP): 150

<h3 id="get-rate-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|true|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "productId": "BUSD001",
      "asset": "BUSD",
      "annualPercentageRate": "0.00006408",
      "time": 1577233578000
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-rate-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rate History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-rate-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» productId|string|true|none|none|
|» asset|string|true|none|none|
|» annualPercentageRate|string|true|none|none|
|» time|integer(int64)|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Collateral Record (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/simple-earn/flexible/history/collateralRecord?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/simple-earn/flexible/history/collateralRecord`

Weight(IP): 150

<h3 id="get-collateral-record-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|query|string|false|none|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "amount": "100.00000000",
      "productId": "BUSD001",
      "asset": "USDT",
      "createTime": 1575018510000,
      "type": "REPAY",
      "productName": "USDT",
      "orderId": 26055
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-collateral-record-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collateral Record|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-collateral-record-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» amount|string|true|none|none|
|» productId|string|true|none|none|
|» asset|string|true|none|none|
|» createTime|integer(int64)|true|none|none|
|» type|string|true|none|none|
|» productName|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-staking">Staking</h1>

## Subscribe ETH Staking V2(TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/eth-staking/eth/stake?amount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v2/eth-staking/eth/stake`

Stake ETH to get WBETH

- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.

Weight(IP): 150

<h3 id="subscribe-eth-staking-v2trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|number(double)|true|Amount in ETH, limit 4 decimals|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "wbethAmount": "0.23092091",
  "conversionRatio": "1.001212342342"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="subscribe-eth-staking-v2trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscribed WBETH|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="subscribe-eth-staking-v2trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|wbethAmount|string|true|none|none|
|conversionRatio|string|true|none|ETH amount per 1 WBETH|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Redeem ETH (TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/redeem?amount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/eth-staking/eth/redeem`

Redeem WBETH or BETH and get ETH

- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.

Weight(IP): 150

<h3 id="redeem-eth-trade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|WBETH or BETH, default to BETH|
|amount|query|number(double)|true|Amount in BETH, limit 8 decimals|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "arrivalTime": 1575018510000,
  "ethAmount": "0.23092091",
  "conversionRatio": "1.00121234"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="redeem-eth-trade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned ETH|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="redeem-eth-trade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|arrivalTime|integer(int64)|true|none|none|
|ethAmount|string|true|none|none|
|conversionRatio|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get ETH staking history (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/history/stakingHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/eth/history/stakingHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-eth-staking-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "time": 1575018510000,
      "asset": "ETH",
      "amount": "21312.23223",
      "status": "SUCCESS",
      "distributeAmount": "21286.42584",
      "conversionRatio": "1.00121234"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-eth-staking-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ETH staking history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-eth-staking-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» time|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» status|string|true|none|PENDING, SUCCESS, FAILED|
|» distributeAmount|string|true|none|none|
|» conversionRatio|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get ETH redemption history (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/history/redemptionHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/eth/history/redemptionHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-eth-redemption-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "time": 1575018510000,
      "arrivalTime": 1575018510000,
      "asset": "BETH",
      "amount": "21312.23223",
      "status": "SUCCESS",
      "distributeAsset": "ETH",
      "distributeAmount": "21338.0699",
      "conversionRatio": "1.00121234"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-eth-redemption-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ETH redemption history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-eth-redemption-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» time|integer(int64)|true|none|none|
|» arrivalTime|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» amount|string|true|none|none|
|» status|string|true|none|PENDING, SUCCESS, FAILED|
|» distributeAsset|string|true|none|none|
|» distributeAmount|string|true|none|none|
|» conversionRatio|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get BETH rewards distribution history(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/history/rewardsHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/eth/history/rewardsHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-beth-rewards-distribution-historyuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "time": 1575018510000,
      "asset": "ETH",
      "holding": "2.3223",
      "amount": "0.23223",
      "annualPercentageRate": "0.5",
      "status": "SUCCESS"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-beth-rewards-distribution-historyuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|BETH rewards distribution history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-beth-rewards-distribution-historyuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» time|integer(int64)|true|none|none|
|» asset|string|true|none|none|
|» holding|string|true|none|BETH holding balance|
|» amount|string|true|none|Distributed rewards|
|» annualPercentageRate|string|true|none|0.5 means 50% here|
|» status|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get current ETH staking quota (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/quota?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/eth/quota`

Weight(IP): 150

<h3 id="get-current-eth-staking-quota-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "leftStakingPersonalQuota": "1000",
  "leftRedemptionPersonalQuota": "1000"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-current-eth-staking-quota-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Eth staking quota|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-current-eth-staking-quota-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leftStakingPersonalQuota|string|true|none|Show min(Daily available limit, total personal staking quota)|
|leftRedemptionPersonalQuota|string|true|none|Show min(Daily personal redeem quota, total redemption limit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get WBETH Rate History (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/history/rateHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/eth/history/rateHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-wbeth-rate-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "annualPercentageRate": "0.5",
      "exchangeRate": "1.00121234",
      "time": 1575018510000
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-wbeth-rate-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|WBETH Rate History|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-wbeth-rate-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» annualPercentageRate|string|true|none|BETH APR|
|» exchangeRate|string|true|none|BETH value per 1 WBETH|
|» time|integer(int64)|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## ETH Staking account V2(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v2/eth-staking/account?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v2/eth-staking/account`

Weight(IP): 150

<h3 id="eth-staking-account-v2userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "holdingInETH": "1.22330928",
  "holdings": {
    "wbethAmount": "1.10928781",
    "bethAmount": "1.90002112"
  },
  "thirtyDaysProfitInETH": "0.22330928",
  "profit": {
    "amountFromWBETH": "0.12330928",
    "amountFromBETH": "0.1"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="eth-staking-account-v2userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ETH Staking account|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="eth-staking-account-v2userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holdingInETH|string|true|none|none|
|holdings|object|true|none|none|
|» wbethAmount|string|true|none|none|
|» bethAmount|string|true|none|none|
|thirtyDaysProfitInETH|string|true|none|none|
|profit|object|true|none|none|
|» amountFromWBETH|string|true|none|none|
|» amountFromBETH|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Wrap BETH(TRADE)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/wbeth/wrap?amount=0&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/eth-staking/wbeth/wrap`

- You need to open Enable Spot & Margin Trading permission for the API Key which requests this endpoint.

Weight(IP): 150

<h3 id="wrap-bethtrade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|amount|query|number(double)|true|Amount in BETH, limit 4 decimals|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "success": true,
  "wbethAmount": "0.22330928",
  "exchangeRate": "1.001212343432"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="wrap-bethtrade-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wrap BETH|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="wrap-bethtrade-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|wbethAmount|string|true|none|none|
|exchangeRate|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get WBETH wrap history (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/wbeth/history/wrapHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/wbeth/history/wrapHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-wbeth-wrap-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "time": 1575018510000,
      "fromAsset": "BETH",
      "fromAmount": "21312.23223",
      "toAsset": "WBETH",
      "toAmount": "21312.23223",
      "exchangeRate": "1.01243253",
      "status": "SUCCESS"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-wbeth-wrap-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|WBETH wrap history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-wbeth-wrap-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» time|integer(int64)|true|none|none|
|» fromAsset|string|true|none|none|
|» fromAmount|string|true|none|none|
|» toAsset|string|true|none|none|
|» toAmount|string|true|none|none|
|» exchangeRate|string|true|none|BETH amount per 1 WBETH|
|» status|string|true|none|PENDING, SUCCESS, FAILED|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get WBETH unwrap history (USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/wbeth/history/unwrapHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/wbeth/history/unwrapHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-wbeth-unwrap-history-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "rows": [
    {
      "time": 1575018510000,
      "fromAsset": "WBETH",
      "fromAmount": "21312.23223",
      "toAsset": "BETH",
      "toAmount": "21312.23223",
      "exchangeRate": "1.01243253",
      "status": "SUCCESS"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-wbeth-unwrap-history-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|WBETH unwrap history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-wbeth-unwrap-history-userdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|» time|integer(int64)|true|none|none|
|» fromAsset|string|true|none|none|
|» fromAmount|string|true|none|none|
|» toAsset|string|true|none|none|
|» toAmount|string|true|none|none|
|» exchangeRate|string|true|none|BETH amount per 1 WBETH|
|» status|string|true|none|PENDING, SUCCESS, FAILED|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get WBETH rewards history(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/eth-staking/eth/history/wbethRewardsHistory?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/eth-staking/eth/history/wbethRewardsHistory`

- The time between startTime and endTime cannot be longer than 3 months.
- If startTime and endTime are both not sent, then the last 30 days' data will be returned.
- If startTime is sent but endTime is not sent, the next 30 days' data beginning from startTime will be returned.
- If endTime is sent but startTime is not sent, the 30 days' data before endTime will be returned.

Weight(IP): 150

<h3 id="get-wbeth-rewards-historyuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startTime|query|integer(int64)|false|UTC timestamp in ms|
|endTime|query|integer(int64)|false|UTC timestamp in ms|
|current|query|integer(int32)|false|Current querying page. Start from 1. Default:1|
|size|query|integer(int32)|false|Default:10 Max:100|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "estRewardsInETH": "1.23230920",
  "rows": [
    {
      "time": 1575018510000,
      "amountInETH": "0.23223",
      "holding": "2.3223",
      "holdingInETH": "2.4231",
      "annualPercentageRate": "0.5"
    }
  ],
  "total": 1
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-wbeth-rewards-historyuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|WBETH rewards history|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-wbeth-rewards-historyuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estRewardsInETH|string|true|none|none|
|rows|[object]|true|none|none|
|» time|integer(int64)|true|none|none|
|» amountInETH|string|true|none|Estimated rewards accrued within WBETH|
|» holding|string|true|none|WBETH holding balance|
|» holdingInETH|string|true|none|none|
|» annualPercentageRate|string|true|none|none|
|total|integer(int64)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="binance-public-spot-api-dual-investment">Dual Investment</h1>

## Get Dual Investment product list(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/dci/product/list?optionType=CALL&exercisedCoin=string&investCoin=string&timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/dci/product/list`

Get Dual Investment product list

Weight(IP): 1

<h3 id="get-dual-investment-product-listuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|optionType|query|string|true|Input CALL or PUT|
|exercisedCoin|query|string|true|Target exercised asset, e.g.:<br>if you subscribe to a high sell product (call option), you should input:<br>  - optionType: CALL,<br>  - exercisedCoin: USDT,<br>  - investCoin: BNB;<br><br>if you subscribe to a low buy product (put option), you should input:<br>  - optionType: PUT,<br>  - exercisedCoin: BNB,<br>  - investCoin: USDT;|
|investCoin|query|string|true|Asset used for subscribing, e.g.:<br>if you subscribe to a high sell product (call option), you should input:<br>  - optionType: CALL,<br>  - exercisedCoin: USDT,<br>  - investCoin: BNB;<br><br>if you subscribe to a low buy product (put option), you should input:<br>  - optionType: PUT,<br>  - exercisedCoin: BNB,<br>  - investCoin: USDT;|
|pageSize|query|string|false|MIN 1, MAX 100; Default 100|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|optionType|CALL|
|optionType|PUT|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "list": [
    {
      "id": "741590",
      "investCoin": "USDT",
      "exercisedCoin": "BNB",
      "strikePrice": "380",
      "duration": 4,
      "settleDate": 1709020800000,
      "purchaseDecimal": 8,
      "purchaseEndTime": 1708934400000,
      "canPurchase": true,
      "apr": "0.6076",
      "orderId": 8257205859,
      "minAmount": "0.1",
      "maxAmount": "25265.7",
      "createTimestamp": 1708560084000,
      "optionType": "PUT",
      "isAutoCompoundEnable": true,
      "autoCompoundPlanList": [
        "STANDARD",
        "ADVANCE"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-dual-investment-product-listuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dual Investment product list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-dual-investment-product-listuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|none|
|list|[object]|true|none|none|
|» id|string|true|none|none|
|» investCoin|string|true|none|none|
|» exercisedCoin|string|true|none|none|
|» strikePrice|string|true|none|none|
|» duration|integer(int32)|true|none|none|
|» settleDate|integer(int64)|true|none|none|
|» purchaseDecimal|integer(int32)|true|none|none|
|» purchaseEndTime|integer(int64)|true|none|none|
|» canPurchase|boolean|true|none|none|
|» apr|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» minAmount|string|true|none|none|
|» maxAmount|string|true|none|none|
|» createTimestamp|integer(int64)|true|none|none|
|» optionType|string|true|none|none|
|» isAutoCompoundEnable|boolean|true|none|none|
|» autoCompoundPlanList|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subscribe Dual Investment products(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/dci/product/subscribe?id=string&orderId=string&depositAmount=0&autoCompoundPlan=NONE&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/dci/product/subscribe`

Subscribe Dual Investment products

- `Products are not available.` means that the APR changes to lower value, or the orders are not available.
- `Failed` is a system or network errors.

Weight(IP): 1

<h3 id="subscribe-dual-investment-productsuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|get id from /sapi/v1/dci/product/list|
|orderId|query|string|true|get orderId from /sapi/v1/dci/product/list|
|depositAmount|query|number(double)|true|none|
|autoCompoundPlan|query|string|true|NONE: switch off the plan,<br>STANDARD: standard plan,<br>ADVANCED: advanced plan;|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|autoCompoundPlan|NONE|
|autoCompoundPlan|STANDARD|
|autoCompoundPlan|ADVANCE|

> Example responses

> 200 Response

```json
{
  "positionId": 10208824,
  "investCoin": "BNB",
  "exercisedCoin": "USDT",
  "subscriptionAmount": "0.002",
  "duration": 4,
  "autoCompoundPlan": "STANDARD",
  "strikePrice": "380",
  "settleDate": 1709020800000,
  "purchaseStatus": "PURCHASE_SUCCESS",
  "apr": "0.7397",
  "orderId": 8259117597,
  "purchaseTime": 1708677583874,
  "optionType\"": "CALL"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="subscribe-dual-investment-productsuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dual Investment product subscription response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="subscribe-dual-investment-productsuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positionId|integer(int64)|true|none|none|
|investCoin|string|true|none|none|
|exercisedCoin|string|true|none|none|
|subscriptionAmount|string|true|none|none|
|duration|integer(int32)|true|none|none|
|autoCompoundPlan|string|true|none|STANDARD, ADVANCED, this field won't display when autocompound is set to None|
|strikePrice|string|true|none|none|
|settleDate|integer(int64)|true|none|none|
|purchaseStatus|string|true|none|none|
|apr|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|purchaseTime|integer(int64)|true|none|none|
|optionType"|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Get Dual Investment positions(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/dci/product/positions?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/dci/product/positions`

Get Dual Investment positions (batch)

Weight(IP): 1

<h3 id="get-dual-investment-positionsuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|- PENDING: Products are purchasing, will give results later;<br>- PURCHASE_SUCCESS: purchase successfully;<br>- SETTLED: Products are finish settling;<br>- PURCHASE_FAIL: fail to purchase;<br>- REFUNDING: refund ongoing;<br>- REFUND_SUCCESS: refund to spot account successfully;<br>- SETTLING: Products are settling.<br>If don't fill this field, will response all the position status.|
|pageSize|query|string|false|MIN 1, MAX 100; Default 100|
|pageIndex|query|integer(int32)|false|Page number, default is first page, start form 1|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|PENDING|
|status|PURCHASE_SUCCESS|
|status|SETTLED|
|status|PURCHASE_FAIL|
|status|REFUNDING|
|status|REFUND_SUCCESS|
|status|SETTLING|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "list": [
    {
      "id": "741590",
      "investCoin": "USDT",
      "exercisedCoin": "BNB",
      "subscriptionAmount": "0.5",
      "strikePrice": "380",
      "duration": 4,
      "settleDate": 1709020800000,
      "purchaseStatus": "PURCHASE_SUCCESS",
      "apr": "0.0365",
      "orderId": 7973677530,
      "purchaseEndTime": 1708329600000,
      "optionType": "PUT",
      "autoCompoundPlan": "STANDARD"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="get-dual-investment-positionsuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dual Investment product list|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="get-dual-investment-positionsuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|none|
|list|[object]|true|none|none|
|» id|string|true|none|none|
|» investCoin|string|true|none|none|
|» exercisedCoin|string|true|none|none|
|» subscriptionAmount|string|true|none|none|
|» strikePrice|string|true|none|none|
|» duration|integer(int32)|true|none|none|
|» settleDate|integer(int64)|true|none|none|
|» purchaseStatus|string|true|none|none|
|» apr|string|true|none|none|
|» orderId|integer(int64)|true|none|none|
|» purchaseEndTime|integer(int64)|true|none|none|
|» optionType|string|true|none|none|
|» autoCompoundPlan|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Check Dual Investment accounts(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/dci/product/accounts?timestamp=0&signature=string' \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`GET /sapi/v1/dci/product/accounts`

Check Dual Investment accounts

Weight(IP): 1

<h3 id="check-dual-investment-accountsuserdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

> Example responses

> 200 Response

```json
{
  "totalAmountInBTC": "0.01067982",
  "totalAmountInUSDT": "77.13289230"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="check-dual-investment-accountsuserdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dual Investment accounts|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="check-dual-investment-accountsuserdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalAmountInBTC|string|true|none|Total BTC amounts in Dual Investment|
|totalAmountInUSDT|string|true|none|Total USDT equivalents in BTC in Dual Investment|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Change Auto-Compound status(USER_DATA)

> Code samples

```bash
curl 'https://api.binance.com/sapi/v1/dci/product/auto_compound/edit-status?positionId=0&autoCompoundPlan=NONE&timestamp=0&signature=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-MBX-APIKEY: ${API_KEY}"
```

`POST /sapi/v1/dci/product/auto_compound/edit-status`

Change Auto-Compound status

- 15:31 ~ 16:00 UTC+8 This function is disabled

Weight(IP): 1

Rate Limit: Maximum 1 time/s per account

<h3 id="change-auto-compound-statususerdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|positionId|query|integer(int64)|true|Get positionId from /sapi/v1/dci/product/positions|
|autoCompoundPlan|query|string|true|NONE: switch off the plan,<br>STANDARD: standard plan,<br>ADVANCED: advanced plan;|
|recvWindow|query|integer(int64)|false|The value cannot be greater than 60000|
|timestamp|query|integer(int64)|true|UTC timestamp in ms|
|signature|query|string|true|Signature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|autoCompoundPlan|NONE|
|autoCompoundPlan|STANDARD|
|autoCompoundPlan|ADVANCE|

> Example responses

> 200 Response

```json
{
  "positionId": 123456789,
  "autoCompoundPlan": "ADVANCED"
}
```

> 400 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

> 401 Response

```json
{
  "code": 0,
  "msg": "error message"
}
```

<h3 id="change-auto-compound-statususerdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change Auto-Compound status response|Inline|
|400|Bad Request|Bad Request|[error](#schemaerror)|
|401|Unauthorized|Unauthorized Request|[error](#schemaerror)|

<h3 id="change-auto-compound-statususerdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positionId|string|true|none|none|
|autoCompoundPlan|string|true|none|NONE, STANDARD, ADVANCED|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_account">account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "makerCommission": 15,
  "takerCommission": 15,
  "buyerCommission": 0,
  "sellerCommission": 0,
  "commissionRates": {
    "maker": "0.00150000",
    "taker": "0.00150000",
    "buyer": "0.00000000",
    "seller": "0.00000000"
  },
  "canTrade": true,
  "canWithdraw": true,
  "canDeposit": true,
  "brokered": false,
  "requireSelfTradePrevention": false,
  "preventSor": false,
  "updateTime": 123456789,
  "accountType": "SPOT",
  "balances": [
    {
      "asset": "BTC",
      "free": "4723846.89208129",
      "locked": "0.00000000"
    }
  ],
  "permissions": [
    "SPOT"
  ],
  "uid": 354937868
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|makerCommission|integer(int64)|true|none|none|
|takerCommission|integer(int64)|true|none|none|
|buyerCommission|integer(int64)|true|none|none|
|sellerCommission|integer(int64)|true|none|none|
|commissionRates|object|true|none|none|
|canTrade|boolean|true|none|none|
|canWithdraw|boolean|true|none|none|
|canDeposit|boolean|true|none|none|
|brokered|boolean|true|none|none|
|requireSelfTradePrevention|boolean|true|none|none|
|preventSor|boolean|true|none|none|
|updateTime|integer(int64)|true|none|none|
|accountType|string|true|none|none|
|balances|[object]|true|none|none|
|permissions|[string]|true|none|none|
|uid|integer(int64)|true|none|none|

<h2 id="tocS_order">order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "symbol": "BNBBTC",
  "origClientOrderId": "msXkySR3u5uYwpvRMFsi3u",
  "orderId": 28,
  "orderListId": -1,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595,
  "price": "1.00000000",
  "origQty": "10.00000000",
  "executedQty": "10.00000000",
  "cummulativeQuoteQty": "10.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "SELL",
  "selfTradePreventionMode": "NONE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|origClientOrderId|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|Unless OCO, value will be -1|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|
|selfTradePreventionMode|string|true|none|none|

<h2 id="tocS_ocoOrder">ocoOrder</h2>
<!-- backwards compatibility -->
<a id="schemaocoorder"></a>
<a id="schema_ocoOrder"></a>
<a id="tocSocoorder"></a>
<a id="tocsocoorder"></a>

```json
{
  "orderListId": 1929,
  "contingencyType": "OCO",
  "listStatusType": "ALL_DONE",
  "listOrderStatus": "ALL_DONE",
  "listClientOrderId": "C3wyj4WVEktd7u9aVBRXcN",
  "transactionTime": 1574040868128,
  "symbol": "BNBBTC",
  "orders": [
    {
      "symbol": "BNBBTC",
      "orderId": 2,
      "clientOrderId": "pO9ufTiFGg3nw2fOdgeOXa"
    },
    {
      "symbol": "BNBBTC",
      "orderId": 3,
      "clientOrderId": "TXOvglzXuaubXAaENpaRCB"
    }
  ],
  "orderReports": [
    {
      "symbol": "BNBBTC",
      "origClientOrderId": "pO9ufTiFGg3nw2fOdgeOXa",
      "orderId": 2,
      "orderListId": 0,
      "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
      "price": "1.00000000",
      "origQty": "10.00000000",
      "executedQty": "0.00000000",
      "cummulativeQuoteQty": "0.00000000",
      "status": "CANCELED",
      "timeInForce": "GTC",
      "type": "STOP_LOSS_LIMIT",
      "side": "SELL",
      "stopPrice": "1.00000000",
      "transactTime": 1688005070874
    },
    {
      "symbol": "BNBBTC",
      "origClientOrderId": "TXOvglzXuaubXAaENpaRCB",
      "orderId": 3,
      "orderListId": 0,
      "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
      "price": "3.00000000",
      "origQty": "10.00000000",
      "executedQty": "0.00000000",
      "cummulativeQuoteQty": "0.00000000",
      "status": "CANCELED",
      "timeInForce": "GTC",
      "type": "LIMIT_MAKER",
      "side": "SELL",
      "selfTradePreventionMode": "NONE",
      "transactTime": 1688005070874
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|orders|[object]|true|none|none|
|orderReports|[object]|true|none|none|

<h2 id="tocS_marginOcoOrder">marginOcoOrder</h2>
<!-- backwards compatibility -->
<a id="schemamarginocoorder"></a>
<a id="schema_marginOcoOrder"></a>
<a id="tocSmarginocoorder"></a>
<a id="tocsmarginocoorder"></a>

```json
{
  "orderListId": 0,
  "contingencyType": "OCO",
  "listStatusType": "ALL_DONE",
  "listOrderStatus": "ALL_DONE",
  "listClientOrderId": "C3wyj4WVEktd7u9aVBRXcN",
  "transactionTime": 1574040868128,
  "symbol": "BNBUSDT",
  "isIsolated": false,
  "orders": [
    [
      {
        "symbol": "BNBUSDT",
        "orderId": 2,
        "clientOrderId": "pO9ufTiFGg3nw2fOdgeOXa"
      },
      {
        "symbol": "BNBUSDT",
        "orderId": 3,
        "clientOrderId": "TXOvglzXuaubXAaENpaRCB"
      }
    ]
  ],
  "orderReports": [
    [
      {
        "symbol": "BNBUSDT",
        "origClientOrderId": "pO9ufTiFGg3nw2fOdgeOXa",
        "orderId": 2,
        "orderListId": 0,
        "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
        "price": "1.00000000",
        "origQty": "10.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "CANCELED",
        "timeInForce": "GTC",
        "type": "STOP_LOSS_LIMIT",
        "side": "SELL",
        "stopPrice": "1.00000000"
      },
      {
        "symbol": "BNBUSDT",
        "origClientOrderId": "TXOvglzXuaubXAaENpaRCB",
        "orderId": 3,
        "orderListId": 0,
        "clientOrderId": "unfWT8ig8i0uj6lPuYLez6",
        "price": "3.00000000",
        "origQty": "10.00000000",
        "executedQty": "0.00000000",
        "cummulativeQuoteQty": "0.00000000",
        "status": "CANCELED",
        "timeInForce": "GTC",
        "type": "LIMIT_MAKER",
        "side": "SELL"
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderListId|integer(int64)|true|none|none|
|contingencyType|string|true|none|none|
|listStatusType|string|true|none|none|
|listOrderStatus|string|true|none|none|
|listClientOrderId|string|true|none|none|
|transactionTime|integer(int64)|true|none|none|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|orders|[object]|true|none|none|
|orderReports|[object]|true|none|none|

<h2 id="tocS_orderDetails">orderDetails</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetails"></a>
<a id="schema_orderDetails"></a>
<a id="tocSorderdetails"></a>
<a id="tocsorderdetails"></a>

```json
{
  "symbol": "LTCBTC",
  "orderId": 1,
  "orderListId": -1,
  "clientOrderId": "myOrder1",
  "price": "0.1",
  "origQty": "1.0",
  "executedQty": "0.0",
  "cummulativeQuoteQty": "0.0",
  "status": "NEW",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "BUY",
  "stopPrice": "0.0",
  "icebergQty": "0.0",
  "time": 1499827319559,
  "updateTime": 1499827319559,
  "isWorking": true,
  "workingTime": 1499827319559,
  "origQuoteOrderQty": "0.00000000",
  "selfTradePreventionMode": "NONE",
  "preventedMatchId": 0,
  "preventedQuantity": "1.200000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|Unless OCO, value will be -1|
|clientOrderId|string|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|
|stopPrice|string|true|none|none|
|icebergQty|string|true|none|none|
|time|integer(int64)|true|none|none|
|updateTime|integer(int64)|true|none|none|
|isWorking|boolean|true|none|none|
|workingTime|integer(int64)|true|none|none|
|origQuoteOrderQty|string|true|none|none|
|selfTradePreventionMode|string|true|none|none|
|preventedMatchId|integer|false|none|none|
|preventedQuantity|string|false|none|none|

<h2 id="tocS_orderResponseAck">orderResponseAck</h2>
<!-- backwards compatibility -->
<a id="schemaorderresponseack"></a>
<a id="schema_orderResponseAck"></a>
<a id="tocSorderresponseack"></a>
<a id="tocsorderresponseack"></a>

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "orderListId": -1,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|

<h2 id="tocS_orderResponseResult">orderResponseResult</h2>
<!-- backwards compatibility -->
<a id="schemaorderresponseresult"></a>
<a id="schema_orderResponseResult"></a>
<a id="tocSorderresponseresult"></a>
<a id="tocsorderresponseresult"></a>

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "orderListId": -1,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595,
  "price": "0.00000000",
  "origQty": "10.00000000",
  "executedQty": "10.00000000",
  "cummulativeQuoteQty": "10.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "MARKET",
  "side": "SELL",
  "strategyId": 1,
  "strategyType": 1000000,
  "workingTime": 1507725176595,
  "selfTradePreventionMode": "NONE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|
|strategyId|integer(int64)|false|none|none|
|strategyType|integer(int64)|false|none|none|
|workingTime|integer(int64)|true|none|none|
|selfTradePreventionMode|string|true|none|none|

<h2 id="tocS_orderResponseFull">orderResponseFull</h2>
<!-- backwards compatibility -->
<a id="schemaorderresponsefull"></a>
<a id="schema_orderResponseFull"></a>
<a id="tocSorderresponsefull"></a>
<a id="tocsorderresponsefull"></a>

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "orderListId": -1,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595,
  "price": "0.00000000",
  "origQty": "10.00000000",
  "executedQty": "10.00000000",
  "cummulativeQuoteQty": "10.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "MARKET",
  "side": "SELL",
  "strategyId": 1,
  "strategyType": 1000000,
  "workingTime": 1507725176595,
  "selfTradePreventionMode": "NONE",
  "fills": [
    {
      "price": "4000.00000000",
      "qty": "1.00000000",
      "commission": "4.00000000",
      "commissionAsset": "USDT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|
|strategyId|integer(int64)|false|none|none|
|strategyType|integer(int64)|false|none|none|
|workingTime|integer(int64)|true|none|none|
|selfTradePreventionMode|string|true|none|none|
|fills|[object]|true|none|none|

<h2 id="tocS_marginOrder">marginOrder</h2>
<!-- backwards compatibility -->
<a id="schemamarginorder"></a>
<a id="schema_marginOrder"></a>
<a id="tocSmarginorder"></a>
<a id="tocsmarginorder"></a>

```json
{
  "symbol": "LTCBTC",
  "orderId": 28,
  "origClientOrderId": "msXkySR3u5uYwpvRMFsi3u",
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "price": "1.00000000",
  "origQty": "10.00000000",
  "executedQty": "8.00000000",
  "cummulativeQuoteQty": "8.00000000",
  "status": "CANCELED",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "SELL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|origClientOrderId|string|true|none|none|
|clientOrderId|string|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|

<h2 id="tocS_marginOrderDetail">marginOrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemamarginorderdetail"></a>
<a id="schema_marginOrderDetail"></a>
<a id="tocSmarginorderdetail"></a>
<a id="tocsmarginorderdetail"></a>

```json
{
  "clientOrderId": "ZwfQzuDIGpceVhKW5DvCmO",
  "cummulativeQuoteQty": "0.00000000",
  "executedQty": "0.00000000",
  "icebergQty": "0.00000000",
  "isWorking": true,
  "orderId": 213205622,
  "origQty": "0.30000000",
  "price": "0.00493630",
  "side": "SELL",
  "status": "NEW",
  "stopPrice": "0.00000000",
  "symbol": "BNBBTC",
  "isIsolated": true,
  "time": 1562133008725,
  "timeInForce": "GTC",
  "type": "LIMIT",
  "updateTime": 1562133008725,
  "selfTradePreventionMode": "NONE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientOrderId|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|executedQty|string|true|none|none|
|icebergQty|string|true|none|none|
|isWorking|boolean|true|none|none|
|orderId|integer(int64)|true|none|none|
|origQty|string|true|none|none|
|price|string|true|none|none|
|side|string|true|none|none|
|status|string|true|none|none|
|stopPrice|string|true|none|none|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|time|integer(int64)|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|updateTime|integer(int64)|true|none|none|
|selfTradePreventionMode|string|true|none|none|

<h2 id="tocS_canceledMarginOrderDetail">canceledMarginOrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemacanceledmarginorderdetail"></a>
<a id="schema_canceledMarginOrderDetail"></a>
<a id="tocScanceledmarginorderdetail"></a>
<a id="tocscanceledmarginorderdetail"></a>

```json
{
  "symbol": "BNBUSDT",
  "isIsolated": true,
  "origClientOrderId": "E6APeyTJvkMvLMYMqu1KQ4",
  "orderId": 11,
  "orderListId": -1,
  "clientOrderId": "pXLV6Hz6mprAcVYpVMTGgx",
  "price": "0.089853",
  "origQty": "0.178622",
  "executedQty": "0.000000",
  "cummulativeQuoteQty": "0.000000",
  "status": "CANCELED",
  "timeInForce": "GTC",
  "type": "LIMIT",
  "side": "BUY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|origClientOrderId|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|

<h2 id="tocS_marginOrderResponseAck">marginOrderResponseAck</h2>
<!-- backwards compatibility -->
<a id="schemamarginorderresponseack"></a>
<a id="schema_marginOrderResponseAck"></a>
<a id="tocSmarginorderresponseack"></a>
<a id="tocsmarginorderresponseack"></a>

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "isIsolated": true,
  "transactTime": 1507725176595
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|isIsolated|boolean|true|none|none|
|transactTime|integer(int64)|true|none|none|

<h2 id="tocS_marginOrderResponseResult">marginOrderResponseResult</h2>
<!-- backwards compatibility -->
<a id="schemamarginorderresponseresult"></a>
<a id="schema_marginOrderResponseResult"></a>
<a id="tocSmarginorderresponseresult"></a>
<a id="tocsmarginorderresponseresult"></a>

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595,
  "price": "1.00000000",
  "origQty": "10.00000000",
  "executedQty": "10.00000000",
  "cummulativeQuoteQty": "10.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "MARKET",
  "isIsolated": true,
  "side": "SELL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|isIsolated|boolean|true|none|none|
|side|string|true|none|none|

<h2 id="tocS_marginOrderResponseFull">marginOrderResponseFull</h2>
<!-- backwards compatibility -->
<a id="schemamarginorderresponsefull"></a>
<a id="schema_marginOrderResponseFull"></a>
<a id="tocSmarginorderresponsefull"></a>
<a id="tocsmarginorderresponsefull"></a>

```json
{
  "symbol": "BTCUSDT",
  "orderId": 28,
  "clientOrderId": "6gCrw2kRUAF9CvJDGP16IP",
  "transactTime": 1507725176595,
  "price": "1.00000000",
  "origQty": "10.00000000",
  "executedQty": "10.00000000",
  "cummulativeQuoteQty": "10.00000000",
  "status": "FILLED",
  "timeInForce": "GTC",
  "type": "MARKET",
  "side": "SELL",
  "marginBuyBorrowAmount": 5,
  "marginBuyBorrowAsset": "BTC",
  "isIsolated": true,
  "fills": [
    {
      "price": "4000.00000000",
      "qty": "1.00000000",
      "commission": "4.00000000",
      "commissionAsset": "USDT"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|orderId|integer(int64)|true|none|none|
|clientOrderId|string|true|none|none|
|transactTime|integer(int64)|true|none|none|
|price|string|true|none|none|
|origQty|string|true|none|none|
|executedQty|string|true|none|none|
|cummulativeQuoteQty|string|true|none|none|
|status|string|true|none|none|
|timeInForce|string|true|none|none|
|type|string|true|none|none|
|side|string|true|none|none|
|marginBuyBorrowAmount|number(double)|true|none|will not return if no margin trade happens|
|marginBuyBorrowAsset|string|true|none|will not return if no margin trade happens|
|isIsolated|boolean|true|none|none|
|fills|[object]|true|none|none|

<h2 id="tocS_marginTrade">marginTrade</h2>
<!-- backwards compatibility -->
<a id="schemamargintrade"></a>
<a id="schema_marginTrade"></a>
<a id="tocSmargintrade"></a>
<a id="tocsmargintrade"></a>

```json
{
  "commission": "0.00006000",
  "commissionAsset": "BTC",
  "id": 28,
  "isBestMatch": true,
  "isBuyer": true,
  "isMaker": true,
  "orderId": 28,
  "price": "0.02000000",
  "qty": "1.02000000",
  "symbol": "BNBBTC",
  "isIsolated": false,
  "time": 1507725176595
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commission|string|true|none|none|
|commissionAsset|string|true|none|none|
|id|integer(int64)|true|none|none|
|isBestMatch|boolean|true|none|none|
|isBuyer|boolean|true|none|none|
|isMaker|boolean|true|none|none|
|orderId|integer(int64)|true|none|none|
|price|string|true|none|none|
|qty|string|true|none|none|
|symbol|string|true|none|none|
|isIsolated|boolean|true|none|none|
|time|integer(int64)|true|none|none|

<h2 id="tocS_marginTransferDetails">marginTransferDetails</h2>
<!-- backwards compatibility -->
<a id="schemamargintransferdetails"></a>
<a id="schema_marginTransferDetails"></a>
<a id="tocSmargintransferdetails"></a>
<a id="tocsmargintransferdetails"></a>

```json
{
  "rows": [
    {
      "amount": "0.10000000",
      "asset": "BNB",
      "status": "CONFIRMED",
      "timestamp": 1566898617000,
      "txId": 5240372201,
      "type": "ROLL_IN",
      "transFrom": "SPOT",
      "transTo": "ISOLATED_MARGIN"
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[object]|true|none|none|
|total|integer(int32)|true|none|none|

<h2 id="tocS_isolatedMarginAccountInfo">isolatedMarginAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaisolatedmarginaccountinfo"></a>
<a id="schema_isolatedMarginAccountInfo"></a>
<a id="tocSisolatedmarginaccountinfo"></a>
<a id="tocsisolatedmarginaccountinfo"></a>

```json
{
  "assets": [
    {
      "baseAsset": {
        "asset": "BTC",
        "borrowEnabled": true,
        "borrowed": "0.00000000",
        "free": "0.00000000",
        "interest": "0.00000000",
        "locked": "0.00000000",
        "netAsset": "0.00000000",
        "netAssetOfBtc": "0.00000000",
        "repayEnabled": true,
        "totalAsset": "0.00000000"
      },
      "quoteAsset": {
        "asset": "USDT",
        "borrowEnabled": true,
        "borrowed": "0.00000000",
        "free": "0.00000000",
        "interest": "0.00000000",
        "locked": "0.00000000",
        "netAsset": "0.00000000",
        "netAssetOfBtc": "0.00000000",
        "repayEnabled": true,
        "totalAsset": "0.00000000"
      },
      "symbol": "BTCUSDT",
      "isolatedCreated": true,
      "enabled": true,
      "marginLevel": "0.00000000",
      "marginLevelStatus": "EXCESSIVE",
      "marginRatio": "0.00000000",
      "indexPrice": "10000.00000000",
      "liquidatePrice": "1000.00000000",
      "liquidateRate": "1.00000000",
      "tradeEnabled": true
    }
  ],
  "totalAssetOfBtc": "0.00000000",
  "totalLiabilityOfBtc": "0.00000000",
  "totalNetAssetOfBtc": "0.00000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|totalAssetOfBtc|string|true|none|none|
|totalLiabilityOfBtc|string|true|none|none|
|totalNetAssetOfBtc|string|true|none|none|

<h2 id="tocS_bookTickerList">bookTickerList</h2>
<!-- backwards compatibility -->
<a id="schemabooktickerlist"></a>
<a id="schema_bookTickerList"></a>
<a id="tocSbooktickerlist"></a>
<a id="tocsbooktickerlist"></a>

```json
[
  {
    "symbol": "BNBBTC",
    "bidPrice": "16.36240000",
    "bidQty": "256.78000000",
    "askPrice": "16.36450000",
    "askQty": "12.56000000"
  }
]
```

<h2 id="tocS_bookTicker">bookTicker</h2>
<!-- backwards compatibility -->
<a id="schemabookticker"></a>
<a id="schema_bookTicker"></a>
<a id="tocSbookticker"></a>
<a id="tocsbookticker"></a>

```json
{
  "symbol": "BNBBTC",
  "bidPrice": "16.36240000",
  "bidQty": "256.78000000",
  "askPrice": "16.36450000",
  "askQty": "12.56000000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|bidPrice|string|true|none|none|
|bidQty|string|true|none|none|
|askPrice|string|true|none|none|
|askQty|string|true|none|none|

<h2 id="tocS_priceTickerList">priceTickerList</h2>
<!-- backwards compatibility -->
<a id="schemapricetickerlist"></a>
<a id="schema_priceTickerList"></a>
<a id="tocSpricetickerlist"></a>
<a id="tocspricetickerlist"></a>

```json
[
  {
    "symbol": "BNBBTC",
    "price": "0.17160000"
  }
]
```

<h2 id="tocS_priceTicker">priceTicker</h2>
<!-- backwards compatibility -->
<a id="schemapriceticker"></a>
<a id="schema_priceTicker"></a>
<a id="tocSpriceticker"></a>
<a id="tocspriceticker"></a>

```json
{
  "symbol": "BNBBTC",
  "price": "0.17160000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|price|string|true|none|none|

<h2 id="tocS_repaymentInfo">repaymentInfo</h2>
<!-- backwards compatibility -->
<a id="schemarepaymentinfo"></a>
<a id="schema_repaymentInfo"></a>
<a id="tocSrepaymentinfo"></a>
<a id="tocsrepaymentinfo"></a>

```json
{
  "loanCoin": "BUSD",
  "remainingPrincipal": "100.5",
  "remainingInterest": "0",
  "collateralCoin": "BNB",
  "remainingCollateral": "5.253",
  "currentLTV": "0.25",
  "repayStatus": "Repaying"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|remainingPrincipal|string|true|none|none|
|remainingInterest|string|true|none|none|
|collateralCoin|string|true|none|none|
|remainingCollateral|string|true|none|none|
|currentLTV|string|true|none|none|
|repayStatus|string|true|none|none|

<h2 id="tocS_repaymentInfo2">repaymentInfo2</h2>
<!-- backwards compatibility -->
<a id="schemarepaymentinfo2"></a>
<a id="schema_repaymentInfo2"></a>
<a id="tocSrepaymentinfo2"></a>
<a id="tocsrepaymentinfo2"></a>

```json
{
  "loanCoin": "BUSD",
  "collateralCoin": "BNB",
  "repayStatus": "Repaying"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loanCoin|string|true|none|none|
|collateralCoin|string|true|none|none|
|repayStatus|string|true|none|none|

<h2 id="tocS_tickerList">tickerList</h2>
<!-- backwards compatibility -->
<a id="schematickerlist"></a>
<a id="schema_tickerList"></a>
<a id="tocStickerlist"></a>
<a id="tocstickerlist"></a>

```json
[
  {
    "symbol": "BNBBTC",
    "priceChange": "0.17160000",
    "priceChangePercent": "1.060",
    "prevClosePrice": "16.35920000",
    "lastPrice": "27.84000000",
    "bidPrice": "16.34488284",
    "bidQty": "16.34488284",
    "askPrice": "16.35920000",
    "askQty": "25.06000000",
    "openPrice": "16.18760000",
    "highPrice": "16.55000000",
    "lowPrice": "16.16940000",
    "volume": "1678279.95000000",
    "quoteVolume": "27431289.14792300",
    "openTime": 1592808788637,
    "closeTime": 1592895188637,
    "firstId": 62683296,
    "lastId": 62739253,
    "count": 55958
  }
]
```

<h2 id="tocS_ticker">ticker</h2>
<!-- backwards compatibility -->
<a id="schematicker"></a>
<a id="schema_ticker"></a>
<a id="tocSticker"></a>
<a id="tocsticker"></a>

```json
{
  "symbol": "BNBBTC",
  "priceChange": "0.17160000",
  "priceChangePercent": "1.060",
  "prevClosePrice": "16.35920000",
  "lastPrice": "27.84000000",
  "bidPrice": "16.34488284",
  "bidQty": "16.34488284",
  "askPrice": "16.35920000",
  "askQty": "25.06000000",
  "openPrice": "16.18760000",
  "highPrice": "16.55000000",
  "lowPrice": "16.16940000",
  "volume": "1678279.95000000",
  "quoteVolume": "27431289.14792300",
  "openTime": 1592808788637,
  "closeTime": 1592895188637,
  "firstId": 62683296,
  "lastId": 62739253,
  "count": 55958
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|priceChange|string|true|none|none|
|priceChangePercent|string|true|none|none|
|prevClosePrice|string|true|none|none|
|lastPrice|string|true|none|none|
|bidPrice|string|true|none|none|
|bidQty|string|true|none|none|
|askPrice|string|true|none|none|
|askQty|string|true|none|none|
|openPrice|string|true|none|none|
|highPrice|string|true|none|none|
|lowPrice|string|true|none|none|
|volume|string|true|none|none|
|quoteVolume|string|true|none|none|
|openTime|integer(int64)|true|none|none|
|closeTime|integer(int64)|true|none|none|
|firstId|integer(int64)|true|none|none|
|lastId|integer(int64)|true|none|none|
|count|integer(int64)|true|none|none|

<h2 id="tocS_dayTickerList">dayTickerList</h2>
<!-- backwards compatibility -->
<a id="schemadaytickerlist"></a>
<a id="schema_dayTickerList"></a>
<a id="tocSdaytickerlist"></a>
<a id="tocsdaytickerlist"></a>

```json
[
  {
    "symbol": "BTCUSDT",
    "priceChange": "-83.13000000",
    "priceChangePercent": "-0.317",
    "weightedAvgPrice": "26234.58803036",
    "openPrice": "26304.80000000",
    "highPrice": "26397.46000000",
    "lowPrice": "26088.34000000",
    "lastPrice": "26221.67000000",
    "volume": "18495.35066000",
    "quoteVolume": "485217905.04210480",
    "openTime": 1695686400000,
    "closeTime": 1695772799999,
    "firstId": 3220151555,
    "lastId": 3220849281,
    "count": 697727
  }
]
```

<h2 id="tocS_dayTicker">dayTicker</h2>
<!-- backwards compatibility -->
<a id="schemadayticker"></a>
<a id="schema_dayTicker"></a>
<a id="tocSdayticker"></a>
<a id="tocsdayticker"></a>

```json
{
  "symbol": "BTCUSDT",
  "priceChange": "-83.13000000",
  "priceChangePercent": "-0.317",
  "weightedAvgPrice": "26234.58803036",
  "openPrice": "26304.80000000",
  "highPrice": "26397.46000000",
  "lowPrice": "26088.34000000",
  "lastPrice": "26221.67000000",
  "volume": "18495.35066000",
  "quoteVolume": "485217905.04210480",
  "openTime": 1695686400000,
  "closeTime": 1695772799999,
  "firstId": 3220151555,
  "lastId": 3220849281,
  "count": 697727
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|priceChange|string|true|none|Absolute price change|
|priceChangePercent|string|true|none|Relative price change in percent|
|weightedAvgPrice|string|true|none|quoteVolume / volume|
|openPrice|string|true|none|none|
|highPrice|string|true|none|none|
|lowPrice|string|true|none|none|
|lastPrice|string|true|none|none|
|volume|string|true|none|Volume in base asset|
|quoteVolume|string|true|none|Volume in quote asset|
|openTime|integer(int64)|true|none|none|
|closeTime|integer(int64)|true|none|none|
|firstId|integer(int64)|true|none|Trade ID of the first trade in the interval|
|lastId|integer(int64)|true|none|Trade ID of the last trade in the interval|
|count|integer(int64)|true|none|Number of trades in the interval|

<h2 id="tocS_myTrade">myTrade</h2>
<!-- backwards compatibility -->
<a id="schemamytrade"></a>
<a id="schema_myTrade"></a>
<a id="tocSmytrade"></a>
<a id="tocsmytrade"></a>

```json
{
  "symbol": "BNBBTC",
  "id": 28457,
  "orderId": 100234,
  "orderListId": -1,
  "price": "4.00000100",
  "qty": "12.00000000",
  "quoteQty": "48.000012",
  "commission": "10.10000000",
  "commissionAsset": "BNB",
  "time": 1499865549590,
  "isBuyer": false,
  "isMaker": false,
  "isBestMatch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|none|
|id|integer(int64)|true|none|Trade id|
|orderId|integer(int64)|true|none|none|
|orderListId|integer(int64)|true|none|none|
|price|string|true|none|Price|
|qty|string|true|none|Amount of base asset|
|quoteQty|string|true|none|Amount of quote asset|
|commission|string|true|none|none|
|commissionAsset|string|true|none|none|
|time|integer(int64)|true|none|Trade timestamp|
|isBuyer|boolean|true|none|none|
|isMaker|boolean|true|none|none|
|isBestMatch|boolean|true|none|none|

<h2 id="tocS_transaction">transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "tranId": 345196462
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tranId|integer(int64)|true|none|transaction id|

<h2 id="tocS_trade">trade</h2>
<!-- backwards compatibility -->
<a id="schematrade"></a>
<a id="schema_trade"></a>
<a id="tocStrade"></a>
<a id="tocstrade"></a>

```json
{
  "id": 345196462,
  "price": "9638.99000000",
  "qty": "0.02077200",
  "quoteQty": "0.02077200",
  "time": 1592887772684,
  "isBuyerMaker": true,
  "isBestMatch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|trade id|
|price|string|true|none|price|
|qty|string|true|none|amount of base asset|
|quoteQty|string|true|none|amount of quote asset|
|time|integer(int64)|true|none|Trade executed timestamp, as same as `T` in the stream|
|isBuyerMaker|boolean|true|none|none|
|isBestMatch|boolean|true|none|none|

<h2 id="tocS_aggTrade">aggTrade</h2>
<!-- backwards compatibility -->
<a id="schemaaggtrade"></a>
<a id="schema_aggTrade"></a>
<a id="tocSaggtrade"></a>
<a id="tocsaggtrade"></a>

```json
{
  "a": 26129,
  "p": "0.01633102",
  "q": "4.70443515",
  "f": 27781,
  "l": 27781,
  "T": 1498793709153,
  "m": true,
  "M": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|integer(int64)|true|none|Aggregate tradeId|
|p|string|true|none|Price|
|q|string|true|none|Quantity|
|f|integer(int64)|true|none|First tradeId|
|l|integer(int64)|true|none|Last tradeId|
|T|boolean|true|none|Timestamp|
|m|boolean|true|none|Was the buyer the maker?|
|M|boolean|true|none|Was the trade the best price match?|

<h2 id="tocS_bnbBurnStatus">bnbBurnStatus</h2>
<!-- backwards compatibility -->
<a id="schemabnbburnstatus"></a>
<a id="schema_bnbBurnStatus"></a>
<a id="tocSbnbburnstatus"></a>
<a id="tocsbnbburnstatus"></a>

```json
{
  "spotBNBBurn": true,
  "interestBNBBurn": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spotBNBBurn|boolean|true|none|none|
|interestBNBBurn|boolean|true|none|none|

<h2 id="tocS_snapshotSpot">snapshotSpot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotspot"></a>
<a id="schema_snapshotSpot"></a>
<a id="tocSsnapshotspot"></a>
<a id="tocssnapshotspot"></a>

```json
{
  "code": 200,
  "msg": "",
  "snapshotVos": [
    {
      "data": {
        "balances": [
          {
            "asset": "BTC",
            "free": "0.2",
            "locked": "0.001"
          }
        ],
        "totalAssetOfBtc": "0.09905021"
      },
      "type": "spot",
      "updateTime": 1576281599000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|snapshotVos|[object]|true|none|none|

<h2 id="tocS_snapshotMargin">snapshotMargin</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotmargin"></a>
<a id="schema_snapshotMargin"></a>
<a id="tocSsnapshotmargin"></a>
<a id="tocssnapshotmargin"></a>

```json
{
  "code": 200,
  "msg": "",
  "snapshotVos": [
    {
      "data": {
        "marginLevel": "2748.02909813",
        "totalAssetOfBtc": "0.00274803",
        "totalLiabilityOfBtc": "0.00000100",
        "totalNetAssetOfBtc": "0.00274750",
        "userAssets": [
          {
            "asset": "XRP",
            "borrowed": "0.00000000",
            "free": "1.00000000",
            "interest": "0.00000000",
            "locked": "0.00000000",
            "netAsset": "1.00000000"
          }
        ]
      },
      "type": "margin",
      "updateTime": 1576281599000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|snapshotVos|[object]|true|none|none|

<h2 id="tocS_snapshotFutures">snapshotFutures</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotfutures"></a>
<a id="schema_snapshotFutures"></a>
<a id="tocSsnapshotfutures"></a>
<a id="tocssnapshotfutures"></a>

```json
{
  "code": 200,
  "msg": "",
  "snapshotVos": [
    {
      "data": {
        "assets": [
          {
            "asset": "USDT",
            "marginBalance": "118.99782335",
            "walletBalance": "120.23811389"
          }
        ],
        "position": [
          {
            "entryPrice": "7130.41000000",
            "markPrice": "7257.66239673",
            "positionAmt": "0.01000000",
            "symbol": "BTCUSDT",
            "unRealizedProfit": "1.24029054"
          }
        ]
      },
      "type": "futures",
      "updateTime": 1576281599000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|none|
|msg|string|true|none|none|
|snapshotVos|[object]|true|none|none|

<h2 id="tocS_subAccountUSDTFuturesDetails">subAccountUSDTFuturesDetails</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountusdtfuturesdetails"></a>
<a id="schema_subAccountUSDTFuturesDetails"></a>
<a id="tocSsubaccountusdtfuturesdetails"></a>
<a id="tocssubaccountusdtfuturesdetails"></a>

```json
{
  "futureAccountResp": {
    "email": "abc@test.com",
    "assets": [
      {
        "asset": "USDT",
        "initialMargin": "0.00000000",
        "maintenanceMargin": "0.00000000",
        "marginBalance": "0.88308000",
        "maxWithdrawAmount": "0.88308000",
        "openOrderInitialMargin": "0.00000000",
        "positionInitialMargin": "0.00000000",
        "unrealizedProfit": "0.00000000",
        "walletBalance": "0.88308000"
      }
    ],
    "canDeposit": true,
    "canTrade": true,
    "canWithdraw": true,
    "feeTier": 2,
    "maxWithdrawAmount": "0.88308000",
    "totalInitialMargin": "0.00000000",
    "totalMaintenanceMargin": "0.00000000",
    "totalMarginBalance": "0.88308000",
    "totalOpenOrderInitialMargin": "0.00000000",
    "totalPositionInitialMargin": "0.00000000",
    "totalUnrealizedProfit": "0.00000000",
    "totalWalletBalance": "0.88308000",
    "updateTime": 1576756674610
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|futureAccountResp|object|true|none|none|

<h2 id="tocS_subAccountCOINFuturesDetails">subAccountCOINFuturesDetails</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountcoinfuturesdetails"></a>
<a id="schema_subAccountCOINFuturesDetails"></a>
<a id="tocSsubaccountcoinfuturesdetails"></a>
<a id="tocssubaccountcoinfuturesdetails"></a>

```json
{
  "email": "abc@test.com",
  "assets": [
    {
      "asset": "BTC",
      "initialMargin": "0.00000000",
      "maintenanceMargin": "0.00000000",
      "marginBalance": "0.88308000",
      "maxWithdrawAmount": "0.88308000",
      "openOrderInitialMargin": "0.00000000",
      "positionInitialMargin": "0.00000000",
      "unrealizedProfit": "0.00000000",
      "walletBalance": "0.88308000"
    }
  ],
  "canDeposit": true,
  "canTrade": true,
  "canWithdraw": true,
  "feeTier": 2,
  "updateTime": 1598959682001
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|assets|[object]|true|none|none|
|canDeposit|boolean|true|none|none|
|canTrade|boolean|true|none|none|
|canWithdraw|boolean|true|none|none|
|feeTier|integer(int64)|true|none|none|
|updateTime|integer(int64)|true|none|none|

<h2 id="tocS_subAccountUSDTFuturesSummary">subAccountUSDTFuturesSummary</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountusdtfuturessummary"></a>
<a id="schema_subAccountUSDTFuturesSummary"></a>
<a id="tocSsubaccountusdtfuturessummary"></a>
<a id="tocssubaccountusdtfuturessummary"></a>

```json
{
  "futureAccountSummaryResp": {
    "totalInitialMargin": "9.83137400",
    "totalMaintenanceMargin": "0.41568700",
    "totalMarginBalance": "23.03235621",
    "totalOpenOrderInitialMargin": "9.00000000",
    "totalPositionInitialMargin": "0.83137400",
    "totalUnrealizedProfit": "0.03219710",
    "totalWalletBalance": "22.15879444",
    "asset": "USD",
    "subAccountList": [
      {
        "email": "123@test.com",
        "totalInitialMargin": "9.00000000",
        "totalMaintenanceMargin": "0.00000000",
        "totalMarginBalance": "22.12659734",
        "totalOpenOrderInitialMargin": "9.00000000",
        "totalPositionInitialMargin": "0.00000000",
        "totalUnrealizedProfit": "0.00000000",
        "totalWalletBalance": "22.12659734",
        "asset": "USD"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|futureAccountSummaryResp|object|true|none|none|

<h2 id="tocS_subAccountCOINFuturesSummary">subAccountCOINFuturesSummary</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountcoinfuturessummary"></a>
<a id="schema_subAccountCOINFuturesSummary"></a>
<a id="tocSsubaccountcoinfuturessummary"></a>
<a id="tocssubaccountcoinfuturessummary"></a>

```json
{
  "deliveryAccountSummaryResp": {
    "totalMarginBalanceOfBTC": 25.03221121,
    "totalUnrealizedProfitOfBTC": 0.1223341,
    "totalWalletBalanceOfBTC": 22.15879444,
    "asset": "BTC",
    "subAccountList": [
      {
        "email": "123@test.com",
        "totalMarginBalance": 22.12659734,
        "totalUnrealizedProfit": 0,
        "totalWalletBalance": 22.12659734,
        "asset": "BTC"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryAccountSummaryResp|object|true|none|none|

<h2 id="tocS_subAccountUSDTFuturesPositionRisk">subAccountUSDTFuturesPositionRisk</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountusdtfuturespositionrisk"></a>
<a id="schema_subAccountUSDTFuturesPositionRisk"></a>
<a id="tocSsubaccountusdtfuturespositionrisk"></a>
<a id="tocssubaccountusdtfuturespositionrisk"></a>

```json
{
  "futurePositionRiskVos": [
    {
      "entryPrice": "9975.12000",
      "leverage": "50",
      "maxNotional": "1000000",
      "liquidationPrice": "7963.54",
      "markPrice": "9973.50770517",
      "positionAmount": "0.010",
      "symbol": "BTCUSDT",
      "unrealizedProfit": "-0.01612295"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|futurePositionRiskVos|[object]|true|none|none|

<h2 id="tocS_subAccountCOINFuturesPositionRisk">subAccountCOINFuturesPositionRisk</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountcoinfuturespositionrisk"></a>
<a id="schema_subAccountCOINFuturesPositionRisk"></a>
<a id="tocSsubaccountcoinfuturespositionrisk"></a>
<a id="tocssubaccountcoinfuturespositionrisk"></a>

```json
{
  "deliveryPositionRiskVos": [
    {
      "entryPrice": "9975.12000",
      "markPrice": "9973.50770517",
      "leverage": "20",
      "isolated": false,
      "isolatedWallet": "9973.50770517",
      "isolatedMargin": "0.00000000",
      "isAutoAddMargin": "false",
      "positionSide": "BOTH",
      "positionAmount": "1.230",
      "symbol": "BTCUSD_201225",
      "unrealizedProfit": "-0.01612295"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryPositionRiskVos|[object]|true|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "msg": "error message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|true|none|Error code|
|msg|string|true|none|Error message|
