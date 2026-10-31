<h1 id="trading-api">Trading API v2.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Alpaca's Trading API is a modern platform for algorithmic trading.

Base URLs:

* <a href="https://paper-api.alpaca.markets">https://paper-api.alpaca.markets</a> - Paper

* <a href="https://api.alpaca.markets">https://api.alpaca.markets</a> - Live

<a href="https://s3.amazonaws.com/files.alpaca.markets/disclosures/library/TermsAndConditions.pdf">Terms of service</a>
Email: <a href="mailto:support@alpaca.markets">Alpaca Support</a> 
Web: <a href="https://alpaca.markets/support">Alpaca Support</a> 

# Authentication

* API Key (API_Key)
    - Parameter Name: **APCA-API-KEY-ID**, in: header.

* API Key (API_Secret)
    - Parameter Name: **APCA-API-SECRET-KEY**, in: header.

<h1 id="trading-api-accounts">Accounts</h1>

## Get Account

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/account \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/account`

Returns your account details.

> Example responses

> 200 Response

```json
{
  "account_blocked": false,
  "account_number": "PALPACA_123",
  "accrued_fees": "0",
  "admin_configurations": {},
  "balance_asof": "2023-09-27",
  "buying_power": "245432.61",
  "cash": "122086.5",
  "created_at": "2023-01-01T18:20:20.272275Z",
  "crypto_status": "ACTIVE",
  "crypto_tier": 1,
  "currency": "USD",
  "effective_buying_power": "245432.61",
  "equity": "123346.11",
  "id": "1d9eed04-be39-4e01-9b84-a48ac5bbafcf",
  "initial_margin": "629.8",
  "intraday_adjustments": "0",
  "last_equity": "122011.09751111286868",
  "last_maintenance_margin": "480.73",
  "long_market_value": "1259.61",
  "maintenance_margin": "377.88",
  "multiplier": "2",
  "non_marginable_buying_power": "122086.5",
  "options_buying_power": "122716.305",
  "options_trading_level": 2,
  "pending_reg_taf_fees": "0",
  "pending_transfer_in": "0",
  "portfolio_value": "123346.11",
  "position_market_value": "1259.61",
  "regt_buying_power": "245432.61",
  "short_market_value": "0",
  "shorting_enabled": true,
  "sma": "123369.74",
  "status": "ACTIVE",
  "trade_suspended_by_user": false,
  "trading_blocked": false,
  "transfers_blocked": false,
  "user_configurations": null
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-assets">Assets</h1>

## Get Assets

<a id="opIdget-v2-assets"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/assets \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/assets`

The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol.

<h3 id="get-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|e.g. "active". By default, all statuses are included.|
|asset_class|query|string|false|Defaults to us_equity.|
|exchange|query|string|false|Optional comma-separated exchanges to filter `us_equity` and `us_index` assets by: AMEX, ARCA, BATS, NYSE, NASDAQ, NYSEARCA, OTC, TXSE, or INDEX. `INDEX` requires `asset_class=us_index`.<br>Crypto and crypto perpetual assets are not filtered by exchange; set `asset_class` to exclude them.|
|attributes|query|[[AssetAttribute](#schemaassetattribute)]|false|Comma separated values to query for more than one attribute. Assets which have any of the given attributes will be included.<br><br>Supported values:<br>- `ptp_no_exception`: Asset is a Publicly Traded Partnership (PTP) without a qualified notice; non-U.S. customers may incur 10% withholding on gross proceeds as per IRS guidance, and are blocked from being purchased by default.<br>- `ptp_with_exception`: Users can open positions in these PTPs without general restrictions.<br>- `ipo`: Accepting limit orders only before the stock begins trading on the secondary market.<br>- `has_options`: The underlying equity has listed options available on the platform. Note: if the equity had inactive/expired contracts in the past, this will still show up.<br>- `options_late_close`: Indicates the underlying asset's options contracts close at 4:15pm ET instead of the standard 4:00pm ET.<br>- `fractional_eh_enabled`: Indicates the asset accepts fractional orders during extended hours sessions (pre-market, post-market, and overnight if enabled).<br>- `overnight_tradable`: Asset is eligible for overnight (24x5) trading in supported venues on the platform.<br>- `overnight_halted`: Asset is eligible for overnight trading but is currently halted/blocked for overnight sessions due to risk, corporate action, compliance, or venue constraints.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|attributes|ptp_no_exception|
|attributes|ptp_with_exception|
|attributes|ipo|
|attributes|has_options|
|attributes|options_late_close|
|attributes|fractional_eh_enabled|
|attributes|overnight_tradable|
|attributes|overnight_halted|

> Example responses

> 200 Response

```json
[
  {
    "borrow_status": "easy_to_borrow",
    "class": "us_equity",
    "easy_to_borrow": true,
    "exchange": "NASDAQ",
    "fractionable": true,
    "id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
    "marginable": true,
    "name": "Apple Inc. Common Stock",
    "shortable": true,
    "status": "active",
    "symbol": "AAPL",
    "tradable": true
  }
]
```

<h3 id="get-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of asset objects|Inline|

<h3 id="get-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Assets](#schemaassets)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get an Asset by ID or Symbol

<a id="opIdget-v2-assets-symbol_or_asset_id"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/assets/string \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/assets/{symbol_or_asset_id}`

Get the asset model for a given symbol or asset_id. The symbol or asset_id should be passed in as a path parameter.

**Note**: For crypto, the symbol has to follow old symbology, e.g. BTCUSD.

**Note**: For coin pairs, the symbol should be separated by a slash (/), e.g. BTC/USDT. Since the slash is a special character in HTTP, use the URL encoded version instead, e.g. /v2/assets/BTC%2FUSDT

<h3 id="get-an-asset-by-id-or-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol_or_asset_id|path|string|true|symbol or assetId. CUSIP is also accepted for US equities.|

> Example responses

> 200 Response

```json
{
  "borrow_status": "easy_to_borrow",
  "class": "us_equity",
  "easy_to_borrow": true,
  "exchange": "NASDAQ",
  "fractionable": true,
  "id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "marginable": true,
  "name": "Apple Inc. Common Stock",
  "shortable": true,
  "status": "active",
  "symbol": "AAPL",
  "tradable": true
}
```

<h3 id="get-an-asset-by-id-or-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An Asset object|[Assets](#schemaassets)|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Option Contracts

<a id="opIdget-options-contracts"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/options/contracts \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/options/contracts`

This endpoint allows you to retrieve a list of option contracts based on various filtering criteria.
By default only active contracts that expire before the upcoming weekend are returned.


<h3 id="get-option-contracts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|underlying_symbols|query|string|false|Filter contracts by one or more underlying symbols.|
|show_deliverables|query|boolean|false|Include deliverables array in the response.|
|status|query|string|false|Filter contracts by status (active/inactive). By default only active contracts are returned.|
|expiration_date|query|string(date)|false|Filter contracts by the exact expiration date (format: YYYY-MM-DD).|
|expiration_date_gte|query|string(date)|false|Filter contracts with expiration date greater than or equal to the specified date.|
|expiration_date_lte|query|string(date)|false|Filter contracts with expiration date less than or equal to the specified date. By default this is set to the next weekend.|
|root_symbol|query|string|false|Filter contracts by the root symbol.|
|type|query|[OptionContractType](#schemaoptioncontracttype)|false|Filter contracts by the type (call/put).|
|style|query|[OptionContractStyle](#schemaoptioncontractstyle)|false|Filter contracts by the style (american/european).|
|strike_price_gte|query|number|false|Filter contracts with strike price greater than or equal to the specified value.|
|strike_price_lte|query|number|false|Filter contracts with strike price less than or equal to the specified value.|
|page_token|query|string|false|Used for pagination, this token retrieves the next page of results. It is obtained from the response of the preceding page when additional pages are available.|
|limit|query|integer|false|The number of contracts to limit per page (default=100, max=10000).|
|ppind|query|boolean|false|The ppind (Penny Program Indicator) field indicates whether an option contract is eligible for penny price increments,<br>with `true` meaning it is part of the Penny Program and `false` meaning it is not.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|
|type|call|
|type|put|
|style|american|
|style|european|

> Example responses

> 200 Response

```json
{
  "next_page_token": "MTAwMA==",
  "option_contracts": [
    {
      "expiration_date": "2025-06-20",
      "id": "98359ef7-5124-49f3-85ea-5cf02df6defa",
      "multiplier": "100",
      "name": "AAPL Jun 20 2025 100 Call",
      "ppind": true,
      "root_symbol": "AAPL",
      "size": "100",
      "status": "active",
      "strike_price": "100",
      "style": "american",
      "symbol": "AAPL250620C00100000",
      "tradable": true,
      "type": "call",
      "underlying_asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "underlying_symbol": "AAPL"
    }
  ]
}
```

<h3 id="get-option-contracts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response.|[OptionContractsResponse](#schemaoptioncontractsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get an option contract by ID or Symbol

<a id="opIdget-option-contract-symbol_or_id"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/options/contracts/string \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/options/contracts/{symbol_or_id}`

Get an option contract by symbol or contract ID. The symbol or id should be passed in as a path parameter.

<h3 id="get-an-option-contract-by-id-or-symbol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol_or_id|path|string|true|symbol or contract ID|

> Example responses

> 200 Response

```json
{
  "close_price": "148.38",
  "close_price_date": "2023-12-11",
  "deliverables": [
    {
      "allocation_percentage": "100",
      "amount": "100",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "delayed_settlement": false,
      "settlement_method": "CCC",
      "settlement_type": "T+2",
      "symbol": "AAPL",
      "type": "equity"
    }
  ],
  "expiration_date": "2025-06-20",
  "id": "98359ef7-5124-49f3-85ea-5cf02df6defa",
  "multiplier": "100",
  "name": "AAPL Jun 20 2025 100 Call",
  "open_interest": "237",
  "open_interest_date": "2023-12-11",
  "ppind": true,
  "root_symbol": "AAPL",
  "size": "100",
  "status": "active",
  "strike_price": "100",
  "style": "american",
  "symbol": "AAPL250620C00100000",
  "tradable": true,
  "type": "call",
  "underlying_asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "underlying_symbol": "AAPL"
}
```

> 404 Response

```json
{
  "code": 40410000,
  "message": "option contract TSLA231110C00021000 not found"
}
```

<h3 id="get-an-option-contract-by-id-or-symbol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An option contract|[OptionContract](#schemaoptioncontract)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-corporate-actions">Corporate Actions</h1>

## Retrieve Announcements

<a id="opIdget-v2-corporate_actions-announcements"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/corporate_actions/announcements?ca_types=Dividend&since=string&until=string' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/corporate_actions/announcements`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use [the new corporate actions endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.

<h3 id="retrieve-announcements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ca_types|query|[[CorporateActionCaType](#schemacorporateactioncatype)]|true|A comma-delimited list of corporate action types.|
|since|query|string|true|The start (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.|
|until|query|string|true|The end (inclusive) of the date range when searching corporate action announcements. This should follow the YYYY-MM-DD format. The date range is limited to 90 days.|
|symbol|query|string|false|The symbol of the company initiating the announcement.|
|cusip|query|string|false|The CUSIP of the company initiating the announcement.|
|date_type|query|string|false|Which announcement date `since` and `until` apply to. When omitted, the range applies to payable_date.<br><br>- **declaration_date**: The date of the preliminary announcement details or the date that any subsequent term updates took place.<br>- **ex_date**: The date on which any security purchasing activity will not result in a corporate action entitlement. Any selling activity that takes place on or after this date will result in a corporate action entitlement.<br>- **record_date**: The date the company checks its records to determine who is shareholder in order to allocate entitlements.<br>- **payable_date**: The date that the stock and cash positions will update according to the account positions as of the record date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ca_types|Spinoff|
|ca_types|Merger|
|ca_types|Split|
|ca_types|Reorg|
|ca_types|Dividend|
|date_type|declaration_date|
|date_type|ex_date|
|date_type|record_date|
|date_type|payable_date|

> Example responses

> 200 Response

```json
[
  {
    "ca_sub_type": "DIV",
    "ca_type": "Dividend",
    "cash": "0.018",
    "corporate_actions_id": "F58684224_XY37",
    "declaration_date": "2021-01-05",
    "expiration_date": "2021-01-12",
    "id": "be3c368a-4c7c-4384-808e-f02c9f5a8afe",
    "initiating_original_cusip": "55275E101",
    "initiating_symbol": "MLLAX",
    "new_rate": "1",
    "old_rate": "1",
    "payable_date": "2021-01-14",
    "record_date": "2021-01-13",
    "target_original_cusip": "55275E101",
    "target_symbol": "MLLAX"
  },
  {
    "ca_sub_type": "cash",
    "ca_type": "Dividend",
    "cash": "0.145",
    "corporate_action_id": "48251W104_AD21",
    "declaration_date": "2021-11-01",
    "ex_date": "2021-11-12",
    "initiating_original_cusip": "G52830109",
    "initiating_symbol": "KKR",
    "new_rate": "1",
    "old_rate": "1",
    "payable_date": "2021-11-30",
    "record_date": "2021-11-15",
    "target_original_cusip": "G52830109",
    "target_symbol": "KKR"
  }
]
```

<h3 id="retrieve-announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-announcements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CorporateAnnouncement](#schemacorporateannouncement)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Retrieve a Specific Announcement

<a id="opIdget-v2-corporate_actions-announcements-id"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/corporate_actions/announcements/string \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/corporate_actions/announcements/{id}`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated, please use [the new corporate actions endpoint](https://docs.alpaca.markets/reference/corporateactions-1) instead.

<h3 id="retrieve-a-specific-announcement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The corporate announcement's id|

> Example responses

> 200 Response

```json
{
  "ca_sub_type": "DIV",
  "ca_type": "Dividend",
  "cash": "0.018",
  "corporate_action_id": "F58684224_XY37",
  "declaration_date": "2021-01-05",
  "effective_date": "2021-01-08",
  "ex_date": "2021-01-12",
  "id": "be3c368a-4c7c-4384-808e-f02c9f5a8afe",
  "initiating_original_cusip": "55275E101",
  "initiating_symbol": "MLLAX",
  "new_rate": "1",
  "old_rate": "1",
  "payable_date": "2021-01-14",
  "record_date": "2021-01-13",
  "target_original_cusip": "55275E101",
  "target_symbol": "MLLAX"
}
```

<h3 id="retrieve-a-specific-announcement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CorporateAnnouncement](#schemacorporateannouncement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-orders">Orders</h1>

## Get All Orders

<a id="opIdgetAllOrders"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/orders \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/orders`

Retrieves a list of orders for the account, filtered by the supplied query parameters.

<h3 id="get-all-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Order status to be queried. open, closed or all. Defaults to open.|
|limit|query|integer|false|The maximum number of orders in response. Defaults to 50 and max is 500.|
|after|query|string|false|The response will include only ones submitted after this timestamp (exclusive.)|
|until|query|string|false|The response will include only ones submitted until this timestamp (exclusive.)|
|direction|query|string|false|The chronological order of response based on the submission time. asc or desc. Defaults to desc.|
|nested|query|boolean|false|If true, the result will roll up multi-leg orders under the legs field of primary order.|
|symbols|query|string|false|A comma-separated list of symbols to filter by (ex. "AAPL,TSLA,MSFT"). A currency pair is required for crypto orders (ex. "BTCUSD,BCHUSD,LTCUSD,ETCUSD").|
|side|query|string|false|Filters down to orders that have a matching side field set.|
|asset_class|query|[string]|false|A comma-separated list of asset classes, the response will include only orders in the specified asset classes. By specifying `us_option` as the class, you can query option orders by underlying symbol using the symbols parameter.|
|before_order_id|query|string|false|Return orders submitted before the order with this ID (exclusive).<br>Mutually exclusive with `after_order_id`. Do not combine with `after`/`until`.<br>|
|after_order_id|query|string|false|Return orders submitted after the order with this ID (exclusive).<br>Mutually exclusive with `before_order_id`. Do not combine with `after`/`until`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|open|
|status|closed|
|status|all|
|direction|asc|
|direction|desc|
|asset_class|us_equity|
|asset_class|us_option|
|asset_class|crypto|
|asset_class|crypto_perp|
|asset_class|treasury|
|asset_class|corporate|
|asset_class|global_equity|
|asset_class|us_index|
|asset_class|us_equity_chain|
|asset_class|ipo|
|asset_class|all|

> Example responses

> 200 Response

```json
{
  "asset_class": "crypto",
  "asset_id": "a1733398-6acc-4e92-af24-0d0667f78713",
  "canceled_at": null,
  "client_order_id": "5b5d3d67-06ad-4ffa-af65-a117d0fc5a59",
  "created_at": "2023-12-12T22:36:51.337711497Z",
  "expired_at": null,
  "extended_hours": false,
  "failed_at": null,
  "filled_at": null,
  "filled_avg_price": null,
  "filled_qty": "0",
  "hwm": null,
  "id": "38e482f3-79a8-4f75-a057-f07a1ec6a397",
  "legs": null,
  "limit_price": "2100",
  "notional": null,
  "order_class": "",
  "order_type": "limit",
  "qty": "0.02",
  "replaced_at": null,
  "replaced_by": null,
  "replaces": null,
  "side": "buy",
  "source": null,
  "status": "pending_new",
  "stop_price": null,
  "submitted_at": "2023-12-12T22:36:51.313261061Z",
  "subtag": null,
  "symbol": "ETH/USD",
  "time_in_force": "gtc",
  "trail_percent": null,
  "trail_price": null,
  "type": "limit",
  "updated_at": "2023-12-12T22:36:51.337754768Z"
}
```

<h3 id="get-all-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response<br><br>An array of Order objects|Inline|

<h3 id="get-all-orders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Order](#schemaorder)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Create an Order

<a id="opIdpostOrder"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "limit_price": "2100",
    "qty": "0.02",
    "side": "buy",
    "symbol": "ETH/USD",
    "time_in_force": "gtc",
    "type": "limit"
  }'
```

`POST /v2/orders`

Places a new order for the given account. An order request may be rejected if the account is not authorized for trading, or if the tradable balance is insufficient to fill the order.

> Body parameter

```json
{
  "limit_price": "2100",
  "qty": "0.02",
  "side": "buy",
  "symbol": "ETH/USD",
  "time_in_force": "gtc",
  "type": "limit"
}
```

<h3 id="create-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateOrderRequest](#schemacreateorderrequest)|true|none|
|» advanced_instructions|body|[AdvancedInstructions](#schemaadvancedinstructions)|false|Advanced instructions for Elite Smart Router: https://docs.alpaca.markets/docs/alpaca-elite-smart-router|
|» client_order_id|body|string|false|A unique identifier for the order. Automatically generated if not sent. (<= 128 characters)|
|» extended_hours|body|boolean|false|(default) false. If true, order will be eligible for execution in the pre-market, after-hours, and overnight sessions. Only works with type `limit` and time_in_force set to either `day` or `gtc`|
|» legs|body|[[MLegOrderLeg](#schemamlegorderleg)]|false|list of order legs (<= 4)|
|» limit_price|body|string|false|Required if type is `limit` or `stop_limit`.<br>In case of `mleg`, the limit_price parameter is expressed with the following notation:<br>- A positive value indicates a debit, representing a cost or payment to be made.<br>- A negative value signifies a credit, reflecting an amount to be received.|
|» notional|body|string|false|dollar amount to trade. Cannot work with `qty`. Can only work for market order types and day for time in force.|
|» order_class|body|[OrderClass](#schemaorderclass)|false|The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:<br>  - Equity trading: simple (or ""), oco, oto, bracket.<br>  - Options trading:<br>    - simple (or "")<br>    - mleg (required for multi-leg complex option strategies)<br>  - Crypto trading: simple (or "").|
|» position_intent|body|[PositionIntent](#schemapositionintent)|false|Represents the desired position strategy.|
|» qty|body|string|false|number of shares to trade. Can be fractionable for only market and day order types. Required for `mleg` order class, represents the number of units to trade of this strategy.|
|» side|body|[OrderSide](#schemaorderside)|false|Represents which side this order was on:<br>- buy<br>- sell<br>Required for all order classes except for mleg.|
|» stop_loss|body|object|false|Takes in string/number values for stop_price and limit_price|
|» » limit_price|body|string(decimal)|false|none|
|» » stop_price|body|string(decimal)|false|none|
|» stop_price|body|string|false|required if type is `stop` or `stop_limit`|
|» symbol|body|string|false|symbol, asset ID, or currency pair to identify the asset to trade, required for all order classes except for `mleg`.|
|» take_profit|body|object|false|Takes in a string/number value for limit_price|
|» » limit_price|body|string(decimal)|false|none|
|» time_in_force|body|[TimeInForce](#schematimeinforce)|true|The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:<br>- Equity trading: day, gtc, opg, cls, ioc, fok.<br>- Options trading: day, gtc.<br>- Crypto trading: gtc, ioc.<br><br>Below are the descriptions of each TIF:<br>- day:<br>  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.<br><br>- gtc:<br>  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.<br><br>- opg:<br>  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.<br><br>- cls:<br>  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.<br><br>- ioc:<br>  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.<br><br>- fok:<br>  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.|
|» trail_percent|body|string|false|this or `trail_price` is required if type is `trailing_stop`|
|» trail_price|body|string|false|this or `trail_percent` is required if type is `trailing_stop`|
|» type|body|[OrderType](#schemaordertype)|true|The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:<br> - Equity trading: market, limit, stop, stop_limit, trailing_stop.<br> - Options trading: market, limit, stop, stop_limit.<br> - Multileg Options trading: market, limit.<br> - Crypto trading: market, limit, stop_limit.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_class|simple|
|» order_class|bracket|
|» order_class|oco|
|» order_class|oto|
|» order_class|mleg|
|» order_class|""|
|» position_intent|buy_to_open|
|» position_intent|buy_to_close|
|» position_intent|sell_to_open|
|» position_intent|sell_to_close|
|» side|buy|
|» side|sell|
|» time_in_force|day|
|» time_in_force|gtc|
|» time_in_force|opg|
|» time_in_force|cls|
|» time_in_force|ioc|
|» time_in_force|fok|
|» type|market|
|» type|limit|
|» type|stop|
|» type|stop_limit|
|» type|trailing_stop|

> Example responses

> 200 Response

```json
{
  "asset_class": "us_equity",
  "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "canceled_at": null,
  "client_order_id": "5c2e8f1a-9d4b-4a7e-8c3f-6b1d0e9a2f47",
  "created_at": "2026-09-28T14:30:12.418372Z",
  "expired_at": null,
  "extended_hours": false,
  "failed_at": null,
  "filled_at": null,
  "filled_avg_price": null,
  "filled_qty": "0",
  "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
  "group_role": "entry",
  "hwm": null,
  "id": "b7d0e2c1-6a4f-4d3b-9e8a-2c5f1a7b9d30",
  "legs": [
    {
      "asset_class": "us_equity",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "canceled_at": null,
      "client_order_id": "2d7e9b41-5f3a-4c8e-a1b6-9e0d3c7f2a58",
      "created_at": "2026-09-28T14:30:12.418372Z",
      "expired_at": null,
      "extended_hours": false,
      "failed_at": null,
      "filled_at": null,
      "filled_avg_price": null,
      "filled_qty": "0",
      "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
      "group_role": "take_profit",
      "hwm": null,
      "id": "c4a9f3e8-1b2d-4e6f-8a7c-5d3e2f1b0a96",
      "legs": null,
      "limit_price": "170",
      "notional": null,
      "order_class": "bracket",
      "order_type": "limit",
      "position_intent": "sell_to_close",
      "qty": "10",
      "replaced_at": null,
      "replaced_by": null,
      "replaces": null,
      "side": "sell",
      "source": null,
      "status": "held",
      "stop_price": null,
      "submitted_at": "2026-09-28T14:30:12.402119Z",
      "subtag": null,
      "symbol": "AAPL",
      "time_in_force": "gtc",
      "trail_percent": null,
      "trail_price": null,
      "type": "limit",
      "updated_at": "2026-09-28T14:30:12.418372Z"
    },
    {
      "asset_class": "us_equity",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "canceled_at": null,
      "client_order_id": "8a4c1f6e-3b9d-4e2a-b7c5-1f0e9d8a6b34",
      "created_at": "2026-09-28T14:30:12.418372Z",
      "expired_at": null,
      "extended_hours": false,
      "failed_at": null,
      "filled_at": null,
      "filled_avg_price": null,
      "filled_qty": "0",
      "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
      "group_role": "stop_loss",
      "hwm": null,
      "id": "e2f8b1a6-7c3d-4a5e-9b8f-0d1c6a4e3b72",
      "legs": null,
      "limit_price": null,
      "notional": null,
      "order_class": "bracket",
      "order_type": "stop",
      "position_intent": "sell_to_close",
      "qty": "10",
      "replaced_at": null,
      "replaced_by": null,
      "replaces": null,
      "side": "sell",
      "source": null,
      "status": "held",
      "stop_price": "140",
      "submitted_at": "2026-09-28T14:30:12.402119Z",
      "subtag": null,
      "symbol": "AAPL",
      "time_in_force": "gtc",
      "trail_percent": null,
      "trail_price": null,
      "type": "stop",
      "updated_at": "2026-09-28T14:30:12.418372Z"
    }
  ],
  "limit_price": "150",
  "notional": null,
  "order_class": "bracket",
  "order_type": "limit",
  "position_intent": "buy_to_open",
  "qty": "10",
  "replaced_at": null,
  "replaced_by": null,
  "replaces": null,
  "side": "buy",
  "source": null,
  "status": "accepted",
  "stop_price": null,
  "submitted_at": "2026-09-28T14:30:12.402119Z",
  "subtag": null,
  "symbol": "AAPL",
  "time_in_force": "gtc",
  "trail_percent": null,
  "trail_price": null,
  "type": "limit",
  "updated_at": "2026-09-28T14:30:12.418372Z"
}
```

<h3 id="create-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Order](#schemaorder)|
|403|Forbidden|Forbidden<br><br>Buying power or shares is not sufficient.|None|
|422|Unprocessable Entity|Unprocessable<br><br>Input parameters are not recognized.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Delete All Orders

<a id="opIddeleteAllOrders"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/orders \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/orders`

Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.

> Example responses

> 207 Response

```json
[
  {
    "id": "d56ba3ea-6d04-48ce-8175-817e242ee608",
    "status": 200
  }
]
```

<h3 id="delete-all-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|207|Multi-Status|Multi-Status with body.<br><br>an array of objects that include the order id and http status code for each status request.|Inline|
|500|Internal Server Error|Failed to cancel order.|None|

<h3 id="delete-all-orders-responseschema">Response Schema</h3>

Status Code **207**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CanceledOrderResponse](#schemacanceledorderresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Order by ID

<a id="opIdgetOrderByOrderID"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/orders/{order_id}`

Retrieves a single order for the given order_id.

<h3 id="get-order-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nested|query|boolean|false|If true, the result will roll up multi-leg orders under the legs field of primary order.|
|order_id|path|string(uuid)|true|order id|

> Example responses

> 200 Response

```json
{
  "asset_class": "us_equity",
  "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "canceled_at": null,
  "client_order_id": "5c2e8f1a-9d4b-4a7e-8c3f-6b1d0e9a2f47",
  "created_at": "2026-09-28T14:30:12.418372Z",
  "expired_at": null,
  "extended_hours": false,
  "failed_at": null,
  "filled_at": null,
  "filled_avg_price": null,
  "filled_qty": "0",
  "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
  "group_role": "entry",
  "hwm": null,
  "id": "b7d0e2c1-6a4f-4d3b-9e8a-2c5f1a7b9d30",
  "legs": [
    {
      "asset_class": "us_equity",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "canceled_at": null,
      "client_order_id": "2d7e9b41-5f3a-4c8e-a1b6-9e0d3c7f2a58",
      "created_at": "2026-09-28T14:30:12.418372Z",
      "expired_at": null,
      "extended_hours": false,
      "failed_at": null,
      "filled_at": null,
      "filled_avg_price": null,
      "filled_qty": "0",
      "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
      "group_role": "take_profit",
      "hwm": null,
      "id": "c4a9f3e8-1b2d-4e6f-8a7c-5d3e2f1b0a96",
      "legs": null,
      "limit_price": "170",
      "notional": null,
      "order_class": "bracket",
      "order_type": "limit",
      "position_intent": "sell_to_close",
      "qty": "10",
      "replaced_at": null,
      "replaced_by": null,
      "replaces": null,
      "side": "sell",
      "source": null,
      "status": "held",
      "stop_price": null,
      "submitted_at": "2026-09-28T14:30:12.402119Z",
      "subtag": null,
      "symbol": "AAPL",
      "time_in_force": "gtc",
      "trail_percent": null,
      "trail_price": null,
      "type": "limit",
      "updated_at": "2026-09-28T14:30:12.418372Z"
    },
    {
      "asset_class": "us_equity",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "canceled_at": null,
      "client_order_id": "8a4c1f6e-3b9d-4e2a-b7c5-1f0e9d8a6b34",
      "created_at": "2026-09-28T14:30:12.418372Z",
      "expired_at": null,
      "extended_hours": false,
      "failed_at": null,
      "filled_at": null,
      "filled_avg_price": null,
      "filled_qty": "0",
      "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
      "group_role": "stop_loss",
      "hwm": null,
      "id": "e2f8b1a6-7c3d-4a5e-9b8f-0d1c6a4e3b72",
      "legs": null,
      "limit_price": null,
      "notional": null,
      "order_class": "bracket",
      "order_type": "stop",
      "position_intent": "sell_to_close",
      "qty": "10",
      "replaced_at": null,
      "replaced_by": null,
      "replaces": null,
      "side": "sell",
      "source": null,
      "status": "held",
      "stop_price": "140",
      "submitted_at": "2026-09-28T14:30:12.402119Z",
      "subtag": null,
      "symbol": "AAPL",
      "time_in_force": "gtc",
      "trail_percent": null,
      "trail_price": null,
      "type": "stop",
      "updated_at": "2026-09-28T14:30:12.418372Z"
    }
  ],
  "limit_price": "150",
  "notional": null,
  "order_class": "bracket",
  "order_type": "limit",
  "position_intent": "buy_to_open",
  "qty": "10",
  "replaced_at": null,
  "replaced_by": null,
  "replaces": null,
  "side": "buy",
  "source": null,
  "status": "accepted",
  "stop_price": null,
  "submitted_at": "2026-09-28T14:30:12.402119Z",
  "subtag": null,
  "symbol": "AAPL",
  "time_in_force": "gtc",
  "trail_percent": null,
  "trail_price": null,
  "type": "limit",
  "updated_at": "2026-09-28T14:30:12.418372Z"
}
```

<h3 id="get-order-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Order](#schemaorder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Delete Order by ID

<a id="opIddeleteOrderByOrderID"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/orders/{order_id}`

Attempts to cancel an Open Order. If the order is no longer cancelable, the request will be rejected with status 422; otherwise accepted with return status 204.

<h3 id="delete-order-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string(uuid)|true|order id|

<h3 id="delete-order-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|422|Unprocessable Entity|The order status is not cancelable.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Replace Order by ID

<a id="opIdpatchOrderByOrderId"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "limit_price": "155",
    "qty": "4",
    "time_in_force": "gtc"
  }'
```

`PATCH /v2/orders/{order_id}`

Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order. The other attributes remain the same as the existing order.

A success return code from a replaced order does NOT guarantee the existing open order has been replaced. If the existing open order is filled before the replacing (new) order reaches the execution venue, the replacing (new) order is rejected, and these events are sent in the trade_updates stream channel.

While an order is being replaced, buying power is reduced by the larger of the two orders that have been placed (the old order being replaced, and the newly placed order to replace it). If you are replacing a buy entry order with a higher limit price than the original order, the buying power is calculated based on the newly placed order. If you are replacing it with a lower limit price, the buying power is calculated based on the old order.

Note: Order cannot be replaced when the status is `accepted`, `pending_new`, `pending_cancel` or `pending_replace`.

Note: Notional orders for non-IPO asset classes cannot be replaced. Any attempt to modify a non-IPO notional order via this endpoint will be rejected; cancel it and submit a new one instead.

Note: IPO indications of interest (`asset_class: "ipo"`) **are** notional and **can** be replaced via this endpoint by providing a new `notional` value. `qty` and `notional` are mutually exclusive on a single replace request.


> Body parameter

```json
{
  "limit_price": "155",
  "qty": "4",
  "time_in_force": "gtc"
}
```

<h3 id="replace-order-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string(uuid)|true|order id|
|body|body|[PatchOrderRequest](#schemapatchorderrequest)|true|none|
|» advanced_instructions|body|[AdvancedInstructions](#schemaadvancedinstructions)|false|Advanced instructions for Elite Smart Router: https://docs.alpaca.markets/docs/alpaca-elite-smart-router|
|» client_order_id|body|string|false|A unique identifier for the new order. Automatically generated if not sent. (<= 128 characters)|
|» limit_price|body|string|false|Required if original order's `type` field was `limit` or `stop_limit`.<br>In case of `mleg`, the limit_price parameter is expressed with the following notation:<br>- A positive value indicates a debit, representing a cost or payment to be made.<br>- A negative value signifies a credit, reflecting an amount to be received.|
|» notional|body|string|false|New notional (dollar amount) for the order. Only valid for IPO indications of interest (`asset_class: "ipo"`); will be rejected for any other asset class.<br>Mutually exclusive with `qty` on the same replace request.|
|» qty|body|string|false|number of shares to trade.<br><br>You can only patch full shares for now.<br><br>Qty of equity fractional orders are not allowed to change. Non-IPO notional orders cannot be replaced at all - no fields (qty, limit_price, stop_price, etc.) can be modified; cancel and resubmit instead.|
|» stop_price|body|string|false|required if original order type is limit or stop_limit|
|» time_in_force|body|[TimeInForce](#schematimeinforce)|false|The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:<br>- Equity trading: day, gtc, opg, cls, ioc, fok.<br>- Options trading: day, gtc.<br>- Crypto trading: gtc, ioc.<br><br>Below are the descriptions of each TIF:<br>- day:<br>  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.<br><br>- gtc:<br>  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.<br><br>- opg:<br>  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.<br><br>- cls:<br>  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.<br><br>- ioc:<br>  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.<br><br>- fok:<br>  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.|
|» trail|body|string|false|the new value of the trail_price or trail_percent value (works only for type="trailing_stop")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» time_in_force|day|
|» time_in_force|gtc|
|» time_in_force|opg|
|» time_in_force|cls|
|» time_in_force|ioc|
|» time_in_force|fok|

> Example responses

> 200 Response

```json
{
  "asset_class": "us_equity",
  "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "canceled_at": null,
  "client_order_id": "5680c4bc-9ac1-4a12-a44c-df427ba53032",
  "created_at": "2023-12-12T22:31:24.668464435Z",
  "expired_at": null,
  "extended_hours": false,
  "failed_at": null,
  "filled_at": null,
  "filled_avg_price": null,
  "filled_qty": "0",
  "hwm": null,
  "id": "7b08df51-c1ac-453c-99f9-323a5f075f0d",
  "legs": null,
  "limit_price": "150",
  "notional": null,
  "order_class": "",
  "order_type": "limit",
  "qty": "2",
  "replaced_at": null,
  "replaced_by": null,
  "replaces": null,
  "side": "buy",
  "source": null,
  "status": "accepted",
  "stop_price": null,
  "submitted_at": "2023-12-12T22:31:24.577215743Z",
  "subtag": null,
  "symbol": "AAPL",
  "time_in_force": "gtc",
  "trail_percent": null,
  "trail_price": null,
  "type": "limit",
  "updated_at": "2023-12-12T22:31:24.668464435Z"
}
```

<h3 id="replace-order-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response<br><br>The new Order object with the new order ID.|[Order](#schemaorder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Order by Client Order ID

<a id="opIdgetOrderByClientOrderId"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/orders:by_client_order_id?client_order_id=string' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/orders:by_client_order_id`

Retrieves a single order specified by the client order ID.

<h3 id="get-order-by-client-order-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_order_id|query|string|true|The client-assigned order ID.|

> Example responses

> 200 Response

```json
{
  "asset_class": "us_equity",
  "asset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "canceled_at": "1970-01-01T00:00:00Z",
  "client_order_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expired_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "extended_hours": true,
  "failed_at": "1970-01-01T00:00:00Z",
  "filled_at": "1970-01-01T00:00:00Z",
  "filled_avg_price": "string",
  "filled_qty": "string",
  "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
  "group_role": "take_profit",
  "hwm": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legs": null,
  "limit_price": "string",
  "notional": "string",
  "order_class": "bracket",
  "order_type": "string",
  "position_intent": "buy_to_open",
  "qty": "string",
  "ratio_qty": "string",
  "replaced_at": "1970-01-01T00:00:00Z",
  "replaced_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "replaces": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "side": "buy",
  "status": "new",
  "stop_price": "string",
  "submitted_at": "1970-01-01T00:00:00Z",
  "symbol": "string",
  "time_in_force": "day",
  "trail_percent": "string",
  "trail_price": "string",
  "type": "market",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-order-by-client-order-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the order matching the client_order_id.|[Order](#schemaorder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-positions">Positions</h1>

## All Open Positions

<a id="opIdgetAllOpenPositions"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/positions \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/positions`

The positions API provides information about an account's current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API

Retrieves a list of the account's open positions

> Example responses

> 200 Response

```json
[
  {
    "asset_class": "us_equity",
    "asset_id": "904837e3-3b76-47ec-b432-046db621571b",
    "asset_marginable": true,
    "avg_entry_price": "100.0",
    "change_today": "0.0084",
    "cost_basis": "500.0",
    "current_price": "120.0",
    "exchange": "NASDAQ",
    "lastday_price": "119.0",
    "market_value": "600.0",
    "qty": "5",
    "qty_available": "4",
    "side": "long",
    "symbol": "AAPL",
    "unrealized_intraday_pl": "10.0",
    "unrealized_intraday_plpc": "0.0084",
    "unrealized_pl": "100.0",
    "unrealized_plpc": "0.20"
  }
]
```

<h3 id="all-open-positions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|

<h3 id="all-open-positions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Position](#schemaposition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Close All Positions

<a id="opIddeleteAllOpenPositions"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/positions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/positions`

Closes (liquidates) all of the account's open long and short positions. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.

<h3 id="close-all-positions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cancel_orders|query|boolean|false|If true is specified, cancel all open orders before liquidating all positions.|

> Example responses

> 207 Response

```json
[
  {
    "body": {
      "asset_class": "us_equity",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "canceled_at": null,
      "client_order_id": "52f8574c-96d5-49b6-94c1-2570a268434e",
      "created_at": "2022-02-04T16:53:29.53427917Z",
      "expired_at": null,
      "extended_hours": false,
      "failed_at": null,
      "filled_at": null,
      "filled_avg_price": null,
      "filled_qty": "0",
      "hwm": null,
      "id": "f7f25e89-939a-4587-aaf6-414a6b3c341d",
      "legs": null,
      "limit_price": null,
      "notional": null,
      "order_class": "",
      "order_type": "market",
      "qty": "2",
      "replaced_at": null,
      "replaced_by": null,
      "replaces": null,
      "side": "sell",
      "status": "accepted",
      "stop_price": null,
      "submitted_at": "2022-02-04T16:53:29.533738219Z",
      "symbol": "AAPL",
      "time_in_force": "day",
      "trail_percent": null,
      "trail_price": null,
      "type": "market",
      "updated_at": "2022-02-04T16:53:29.53427917Z"
    },
    "status": 200,
    "symbol": "AAPL"
  }
]
```

<h3 id="close-all-positions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|207|Multi-Status|Multi-Status with body.<br><br>an array of PositionClosed responses|Inline|
|500|Internal Server Error|Failed to liquidate|None|

<h3 id="close-all-positions-responseschema">Response Schema</h3>

Status Code **207**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PositionClosedResponse](#schemapositionclosedresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get an Open Position

<a id="opIdgetOpenPosition"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/positions/string \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/positions/{symbol_or_asset_id}`

Retrieves the account's open position for the given symbol or assetId.

<h3 id="get-an-open-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol_or_asset_id|path|string|true|symbol or assetId|

> Example responses

> 200 Response

```json
{
  "asset_class": "us_equity",
  "asset_id": "904837e3-3b76-47ec-b432-046db621571b",
  "asset_marginable": true,
  "avg_entry_price": "100.0",
  "change_today": "0.0084",
  "cost_basis": "500.0",
  "current_price": "120.0",
  "exchange": "NASDAQ",
  "lastday_price": "119.0",
  "market_value": "600.0",
  "qty": "5",
  "qty_available": "4",
  "side": "long",
  "symbol": "AAPL",
  "unrealized_intraday_pl": "10.0",
  "unrealized_intraday_plpc": "0.0084",
  "unrealized_pl": "100.0",
  "unrealized_plpc": "0.20"
}
```

<h3 id="get-an-open-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Position](#schemaposition)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Close a Position

<a id="opIddeleteOpenPosition"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/positions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/positions/{symbol_or_asset_id}`

Closes (liquidates) the account's open position for the given symbol. Works for both long and short positions.

<h3 id="close-a-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|qty|query|number|false|the number of shares to liquidate. Can accept up to 9 decimal points. Cannot work with percentage|
|percentage|query|number|false|percentage of position to liquidate. Must be between 0 and 100. Would only sell fractional if position is originally fractional. Can accept up to 9 decimal points. Cannot work with qty|
|symbol_or_asset_id|path|string|true|symbol or assetId|

> Example responses

> 200 Response

```json
{
  "asset_class": "us_equity",
  "asset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "canceled_at": "1970-01-01T00:00:00Z",
  "client_order_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expired_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "extended_hours": true,
  "failed_at": "1970-01-01T00:00:00Z",
  "filled_at": "1970-01-01T00:00:00Z",
  "filled_avg_price": "string",
  "filled_qty": "string",
  "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
  "group_role": "take_profit",
  "hwm": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legs": null,
  "limit_price": "string",
  "notional": "string",
  "order_class": "bracket",
  "order_type": "string",
  "position_intent": "buy_to_open",
  "qty": "string",
  "ratio_qty": "string",
  "replaced_at": "1970-01-01T00:00:00Z",
  "replaced_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "replaces": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "side": "buy",
  "status": "new",
  "stop_price": "string",
  "submitted_at": "1970-01-01T00:00:00Z",
  "symbol": "string",
  "time_in_force": "day",
  "trail_percent": "string",
  "trail_price": "string",
  "type": "market",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="close-a-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response<br><br>Returns the order created to close out this position|[Order](#schemaorder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Do Not Exercise an Options Position

<a id="opIdoptionDoNotExercise"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/positions/497f6eca-6276-4993-bfeb-53cbbbba6f08/do-not-exercise \
  -X POST \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`POST /v2/positions/{symbol_or_contract_id}/do-not-exercise`

This endpoint enables users to submit a do-not-exercise (DNE) instruction for a held option contract, preventing automatic exercise at expiry.
By default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry. This endpoint allows users to override that behavior.
To override this behavior and submit an exercise instruction, please contact our support team.

<h3 id="do-not-exercise-an-options-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol_or_contract_id|path|string(uuid)|true|Option contract symbol or ID.|

> Example responses

> 403 Response

```json
{
  "code": 40310000,
  "message": "no available position for the specified contract"
}
```

> 422 Response

```json
{
  "code": 42210000,
  "message": "invalid symbol"
}
```

<h3 id="do-not-exercise-an-options-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response<br><br>Do-not-exercise instruction successfully submitted.|None|
|403|Forbidden|Forbidden<br><br>Available position quantity is not sufficient or no position found.|[Error](#schemaerror)|
|422|Unprocessable Entity|Invalid Parameters.<br><br>One or more parameters provided are invalid.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Exercise an Options Position

<a id="opIdoptionExercise"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/positions/497f6eca-6276-4993-bfeb-53cbbbba6f08/exercise \
  -X POST \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`POST /v2/positions/{symbol_or_contract_id}/exercise`

This endpoint enables users to exercise a held option contract, converting it into the underlying asset based on the specified terms.
All available held shares of this option contract will be exercised.
By default, Alpaca will automatically exercise in-the-money (ITM) contracts at expiry.
Exercise requests will be processed immediately once received. Exercise requests submitted between market close and midnight will be rejected to avoid any confusion about when the exercise will settle.
To cancel an exercise request or to submit a Do-not-exercise (DNE) instruction, you can use the do-not-exercise endpoint or contact our support team.

<h3 id="exercise-an-options-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol_or_contract_id|path|string(uuid)|true|Option contract symbol or ID.|

> Example responses

> 403 Response

```json
{
  "code": 40310000,
  "message": "no available position for the specified contract"
}
```

> 422 Response

```json
{
  "code": 42210000,
  "message": "invalid symbol"
}
```

<h3 id="exercise-an-options-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response<br><br>Exercise instruction successfully submitted.|None|
|403|Forbidden|Forbidden<br><br>Available position quantity is not sufficient.|[Error](#schemaerror)|
|422|Unprocessable Entity|Invalid Parameters.<br><br>One or more parameters provided are invalid.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-portfolio-history">Portfolio History</h1>

## Get Account Portfolio History

<a id="opIdgetAccountPortfolioHistory"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/account/portfolio/history \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/account/portfolio/history`

Returns timeseries data about equity and profit/loss (P/L) of the account in requested timespan.

<h3 id="get-account-portfolio-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|query|string|false|The total duration of history being requested defined as `number` + `unit`.<br>Valid units are: `D`, `W`, `M`, and `A` (annum).<br><br>The following restrictions apply:<br>- MUST NOT be included if both `start` and `end` are provided.<br>- Default value is `1M` when `start` or `end` is omitted.<br>|
|timeframe|query|[PortfolioHistoryTimeframe](#schemaportfoliohistorytimeframe)|false|The resolution of time window. 1Min, 5Min, 15Min, 1H, or 1D. If omitted, 1Min for less than 7 days period,<br>15Min for less than 30 days, or otherwise 1D.<br><br>For queries with longer than 30 days of `period`, the system only accepts 1D as `timeframe`.<br>|
|intraday_reporting|query|string|false|For intraday resolutions (<1D) this specifies which timestamps to return data points for:<br><br>Allowed values are:<br>- **market_hours**<br><br>  Only timestamps for the core equity trading hours are returned (usually 9:30am to 4:00pm, trading days only).<br><br>- **extended_hours**<br><br>  Returns timestamps for the whole session including extended hours (usually 4:00am to 8:00pm, trading days only).<br><br>- **continuous**<br><br>  Returns price data points 24/7 (for off-session times too). To calculate the equity values we are using the following prices:<br><br>  Between 4:00am and 10:00pm on trading days the valuation will be calculated based on the last trade (extended hours and normal hours respectively).<br><br>  After 10:00pm, until the next session open the equities will be valued at their official closing price on the primary exchange.<br>|
|start|query|string|false|The first timestamp of the timeseries.<br><br>Defaults to `end - period`.<br><br>When `timeframe=1D`, if `start` occurs any time on a trading day (including outside of market hours), `start` is set to the closing time of the current trading day. Otherwise, `start` is rolled forward to the closing time of the next available trading day.<br><br>When `timeframe != 1D`, one of the following rules is applied.<br>- When `intraday_reporting=continuous`, `start` is rolled back to the nearest `timeframe` interval.<br>- When both `start` and `end` are omitted, `start` is rolled back to the first market/session open that is encountered.<br>- When `intraday_reporting != continuous` and `start` is a trading day:<br>  - roll forward to the first market/session open if `start` is outside of market/session hours, or<br>  - roll back to the nearest `timeframe` interval if `start` occurs during trading hours.<br>- Roll forward to the next market/session open if `start` does not fall on a trading day.<br><br>`start` may be combined with `end` or `period`, but cannot be combined with both.<br>|
|pnl_reset|query|string|false|`pnl_reset` defines how we are calculating the baseline values for Profit And Loss (pnl) for queries with `timeframe` less than 1D (intraday queries).<br><br>The default behavior for intraday queries is that we reset the pnl value to the previous day's closing equity for each **trading** day.<br><br>In case of crypto (given its continuous nature), this might not be desired: specifying "no_reset" disables this behavior and all pnl values<br>returned will be relative to the closing equity of the previous trading day.<br><br>For 1D resolution all PnL values are calculated relative to the `base_value`, we are not resetting the base value.<br>|
|end|query|string|false|The last timestamp of the timeseries.<br><br>Defaults to `start + period` when `start` is provided.<br><br>When `start` and `end` are omitted, or if `end` is AFTER the request time, `end` defaults to<br>- The most recent session open timestamp if `intraday_reporting=extended_hours`<br>- The most recent market open timestamp if `intraday_reporting=market_hours`<br>- The current timestamp if `intraday_reporting=continuous`<br><br>`end` may be combined with `start` or `period`, but cannot be combined with both.<br>|
|extended_hours|query|string|false|**deprecated**: Users are strongly advised to **rely on the `intraday_reporting` query parameter** for better control<br>of the reporting range.<br><br>If true, include extended hours in the result. This is effective only for timeframe less than 1D.<br>|
|cashflow_types|query|string|false|The cashflow activities to include in the report. One of 'ALL', 'NONE', or a comma-separated list of activity types.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeframe|1D|
|timeframe|1H|
|timeframe|15Min|
|timeframe|5Min|
|timeframe|1Min|
|intraday_reporting|market_hours|
|intraday_reporting|extended_hours|
|intraday_reporting|continuous|
|pnl_reset|no_reset|
|pnl_reset|per_day|

> Example responses

> 200 Response

```json
{
  "base_value": 8413.04,
  "base_value_asof": "2026-04-06",
  "cashflow": {
    "CSD": [
      9.93,
      10.13,
      10.16,
      0
    ],
    "DIV": [
      0,
      0,
      0.63,
      0
    ]
  },
  "equity": [
    8425.21,
    8639.77,
    8766.1,
    8835.31
  ],
  "profit_loss": [
    12.17,
    214.56,
    126.33,
    69.21
  ],
  "profit_loss_pct": [
    0.0014,
    0.0255,
    0.0146,
    0.0079
  ],
  "timeframe": "1D",
  "timestamp": [
    1775606400,
    1775692800,
    1775779200,
    1775865600
  ]
}
```

> 400 Response

```json
{
  "code": 400,
  "message": "invalid timeframe provided: 1Min. Valid timeframe for days > 30 is 1D: bad request"
}
```

> 403 Response

```json
{
  "code": 403,
  "message": "token does not match account type"
}
```

> 404 Response

```json
{
  "code": 404,
  "message": "account not found"
}
```

> 422 Response

```json
{
  "code": 40010001,
  "message": "query: \"timeframe\": invalid value: \"2Min\""
}
```

> 429 Response

```json
{
  "code": 429,
  "message": "rate limit exceeded"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "code": 504,
  "message": "gateway timeout"
}
```

<h3 id="get-account-portfolio-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response.|[PortfolioHistory](#schemaportfoliohistory)|
|400|Bad Request|The request parameters are invalid.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|
|403|Forbidden|Forbidden because the token's account type does not match the deployment.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|
|404|Not Found|Account not found, or invalid or missing credentials.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|
|422|Unprocessable Entity|The request parameters are invalid.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|
|429|Too Many Requests|Rate limit exceeded.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|
|500|Internal Server Error|Unexpected server failure.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|
|504|Gateway Timeout|Gateway timeout.|[PortfolioHistoryError](#schemaportfoliohistoryerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|400|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|403|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|404|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|422|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|429|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|429|Retry-After|integer||Number of seconds to wait before retrying the request.|
|500|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|
|504|Deprecated-Params|string||Present when the request includes one or more deprecated query parameters or deprecated<br>parameter values. Lists every deprecated item the client sent, encoded as an RFC 9651<br>Structured Field List of sf-strings:<br><br>- Whole-parameter deprecation: the bare parameter name (`"deprecatedParam"`).<br>- Value-level deprecation: `<param>=<value>`, with `<value>` in its canonical form (`"sort=legacy"`).<br><br>Omitted when the request carries no deprecated parameters.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-watchlists">Watchlists</h1>

## Get All Watchlists

<a id="opIdgetWatchlists"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/watchlists`

Returns the list of watchlists registered under the account.

> Example responses

> 200 Response

```json
[
  {
    "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
    "created_at": "2022-01-31T21:49:05.14628Z",
    "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
    "name": "Primary Watchlist",
    "updated_at": "2022-01-31T21:49:05.14628Z"
  }
]
```

<h3 id="get-all-watchlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|

<h3 id="get-all-watchlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WatchlistWithoutAsset](#schemawatchlistwithoutasset)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Create Watchlist

<a id="opIdpostWatchlist"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "name": "Tech Stocks",
    "symbols": [
      "AAPL",
      "TSLA"
    ]
  }'
```

`POST /v2/watchlists`

Create a new watchlist with initial set of assets.

> Body parameter

```json
{
  "name": "Tech Stocks",
  "symbols": [
    "AAPL",
    "TSLA"
  ]
}
```

<h3 id="create-watchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWatchlistRequest](#schemacreatewatchlistrequest)|true|none|
|» name|body|string|true|The watchlist name.|
|» symbols|body|[string]|false|List of asset symbols to include in the watchlist.|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="create-watchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Watchlist by ID

<a id="opIdgetWatchlistById"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/watchlists/{watchlist_id}`

Returns a watchlist identified by the ID.

<h3 id="get-watchlist-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|watchlist_id|path|string(uuid)|true|watchlist id|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="get-watchlist-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Update Watchlist By Id

<a id="opIdupdateWatchlistById"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "name": "string",
    "symbols": [
      "string"
    ]
  }'
```

`PUT /v2/watchlists/{watchlist_id}`

Update the name and/or content of watchlist

> Body parameter

```json
{
  "name": "string",
  "symbols": [
    "string"
  ]
}
```

<h3 id="update-watchlist-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|watchlist_id|path|string(uuid)|true|watchlist id|
|body|body|[UpdateWatchlistRequest](#schemaupdatewatchlistrequest)|false|none|
|» name|body|string|false|The new watchlist name.|
|» symbols|body|[string]|false|List of asset symbols to include in the watchlist. The existing assets will be replaced with the new list.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="update-watchlist-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Add Asset to Watchlist

<a id="opIdaddAssetToWatchlist"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "symbol": "AAPL"
  }'
```

`POST /v2/watchlists/{watchlist_id}`

Append an asset for the symbol to the end of watchlist asset list

> Body parameter

```json
{
  "symbol": "AAPL"
}
```

<h3 id="add-asset-to-watchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|watchlist_id|path|string(uuid)|true|watchlist id|
|body|body|[AddAssetToWatchlistRequest](#schemaaddassettowatchlistrequest)|false|none|
|» symbol|body|string|false|the symbol name to add to the watchlist|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="add-asset-to-watchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Delete Watchlist By Id

<a id="opIddeleteWatchlistById"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/watchlists/{watchlist_id}`

Delete a watchlist. This is a permanent deletion.

<h3 id="delete-watchlist-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|watchlist_id|path|string(uuid)|true|watchlist id|

<h3 id="delete-watchlist-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Watchlist not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Delete Symbol from Watchlist

<a id="opIdremoveAssetFromWatchlist"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/watchlists/497f6eca-6276-4993-bfeb-53cbbbba6f08/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/watchlists/{watchlist_id}/{symbol}`

Delete one entry for an asset by symbol name

<h3 id="delete-symbol-from-watchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|watchlist_id|path|string(uuid)|true|Watchlist ID|
|symbol|path|string|true|symbol name to remove from the watchlist content|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="delete-symbol-from-watchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated watchlist|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Watchlist by Name

<a id="opIdgetWatchlistByName"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/watchlists:by_name?name=string' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/watchlists:by_name`

You can also call GET, PUT, POST and DELETE with watchlist name with another endpoint /v2/watchlists:by_name and query parameter name=<watchlist_name>, instead of /v2/watchlists/{watchlist_id} endpoints

Returns a watchlist by name

<h3 id="get-watchlist-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|name of the watchlist|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="get-watchlist-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Update Watchlist By Name

<a id="opIdupdateWatchlistByName"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/watchlists:by_name?name=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "name": "string",
    "symbols": [
      "string"
    ]
  }'
```

`PUT /v2/watchlists:by_name`

Update the name and/or content of watchlist

> Body parameter

```json
{
  "name": "string",
  "symbols": [
    "string"
  ]
}
```

<h3 id="update-watchlist-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|name of the watchlist|
|body|body|[UpdateWatchlistRequest](#schemaupdatewatchlistrequest)|false|none|
|» name|body|string|false|The new watchlist name.|
|» symbols|body|[string]|false|List of asset symbols to include in the watchlist. The existing assets will be replaced with the new list.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="update-watchlist-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Add Asset to Watchlist By Name

<a id="opIdaddAssetToWatchlistByName"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/watchlists:by_name?name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "symbol": "AAPL"
  }'
```

`POST /v2/watchlists:by_name`

Append an asset for the symbol to the end of watchlist asset list

> Body parameter

```json
{
  "symbol": "AAPL"
}
```

<h3 id="add-asset-to-watchlist-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|name of the watchlist|
|body|body|[AddAssetToWatchlistRequest](#schemaaddassettowatchlistrequest)|false|none|
|» symbol|body|string|false|the symbol name to add to the watchlist|

> Example responses

> 200 Response

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

<h3 id="add-asset-to-watchlist-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Watchlist](#schemawatchlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Delete Watchlist By Name

<a id="opIddeleteWatchlistByName"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/watchlists:by_name?name=string' \
  -X DELETE \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/watchlists:by_name`

Delete a watchlist. This is a permanent deletion.

<h3 id="delete-watchlist-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|name of the watchlist|

<h3 id="delete-watchlist-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-account-configurations">Account Configurations</h1>

## Get Account Configurations

<a id="opIdgetAccountConfig"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/account/configurations \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/account/configurations`

gets the current account configuration values

> Example responses

> 200 Response

```json
{
  "disable_overnight_trading": false,
  "fractional_trading": true,
  "max_margin_multiplier": "4",
  "no_shorting": false,
  "suspend_trade": false,
  "trade_confirm_email": "all"
}
```

<h3 id="get-account-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountConfigurations](#schemaaccountconfigurations)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Account Configurations

<a id="opIdpatchAccountConfig"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/account/configurations \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "disable_overnight_trading": false,
    "fractional_trading": true,
    "max_margin_multiplier": "4",
    "no_shorting": false,
    "suspend_trade": false,
    "trade_confirm_email": "all"
  }'
```

`PATCH /v2/account/configurations`

Updates and returns the current account configuration values

> Body parameter

```json
{
  "disable_overnight_trading": false,
  "fractional_trading": true,
  "max_margin_multiplier": "4",
  "no_shorting": false,
  "suspend_trade": false,
  "trade_confirm_email": "all"
}
```

<h3 id="account-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountConfigurations](#schemaaccountconfigurations)|false|none|
|» disable_overnight_trading|body|boolean|false|If true, overnight trading is disabled.|
|» fractional_trading|body|boolean|false|If true, account is able to participate in fractional trading|
|» max_margin_multiplier|body|string|false|Can be "1", "2", or "4"|
|» max_options_trading_level|body|integer|false|The desired maximum options trading level. 0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.|
|» no_shorting|body|boolean|false|If true, account becomes long-only mode.|
|» ptp_no_exception_entry|body|boolean|false|If set to true then Alpaca will accept orders for PTP symbols with no exception. Default is false.|
|» suspend_trade|body|boolean|false|If true, new orders are blocked.|
|» trade_confirm_email|body|string|false|all or none. If none, emails for order fills are not sent.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» max_options_trading_level|0|
|» max_options_trading_level|1|
|» max_options_trading_level|2|
|» max_options_trading_level|3|

> Example responses

> 200 Response

```json
{
  "disable_overnight_trading": false,
  "fractional_trading": true,
  "max_margin_multiplier": "4",
  "no_shorting": false,
  "suspend_trade": false,
  "trade_confirm_email": "all"
}
```

<h3 id="account-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountConfigurations](#schemaaccountconfigurations)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-account-activities">Account Activities</h1>

## Retrieve Account Activities

<a id="opIdgetAccountActivities"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/account/activities \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/account/activities`

Returns a list of activities

Notes:
* Pagination is handled using the `page_token` and `page_size` parameters.
* `page_token` represents the ID of the last item on your current page of results.
   For example, if the ID of the last activity in your first response is `20220203000000000::045b3b8d-c566-4bef-b741-2bf598dd6ae7`, you would pass that value as `page_token` to retrieve the next page of results.

<h3 id="retrieve-account-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activity_types|query|[[ActivityType](#schemaactivitytype)]|false|A comma-separated list of activity types used to filter the results.|
|category|query|string|false|The activity category. Cannot be used with "activity_types" parameter.|
|order_id|query|string(uuid)|false|Filter activities associated with a specific order. Useful for retrieving the fills that make up a completely filled order.|
|date|query|string(date-time)|false|Filter activities by their creation date (created_at), not the activity's settlement date. For non-trade activities such as fees, the creation date is typically the day after the trade date (in UTC). Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.|
|until|query|string(date-time)|false|Get activities created before this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.|
|after|query|string(date-time)|false|Get activities created after this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.|
|direction|query|string|false|The chronological order of response based on the activity datetime.|
|page_size|query|integer|false|The maximum number of entries to return in the response.|
|page_token|query|string|false|Token used for pagination. Provide the ID of the last activity from the last page to retrieve the next set of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|activity_types|FILL|
|activity_types|TRANS|
|activity_types|MISC|
|activity_types|ACATC|
|activity_types|ACATS|
|activity_types|CFEE|
|activity_types|CGD|
|activity_types|CSD|
|activity_types|CSW|
|activity_types|DIV|
|activity_types|DIVCGL|
|activity_types|DIVCGS|
|activity_types|DIVFEE|
|activity_types|DIVFT|
|activity_types|DIVNRA|
|activity_types|DIVROC|
|activity_types|DIVTW|
|activity_types|DIVTXEX|
|activity_types|FEE|
|activity_types|INT|
|activity_types|INTNRA|
|activity_types|INTTW|
|activity_types|JNL|
|activity_types|JNLC|
|activity_types|JNLS|
|activity_types|MA|
|activity_types|NC|
|activity_types|OPASN|
|activity_types|OPCA|
|activity_types|OPCSH|
|activity_types|OPEXC|
|activity_types|OPEXP|
|activity_types|OPTRD|
|activity_types|PTC|
|activity_types|PTR|
|activity_types|REO|
|activity_types|REORG|
|activity_types|SPIN|
|activity_types|SPLIT|
|activity_types|FOPT|
|activity_types|OCT|
|category|trade_activity|
|category|non_trade_activity|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "activity_type": "FILL",
    "cum_qty": "2",
    "id": "20220202135509981::2d7be4ff-d1f3-43e9-856a-0f5cf5c5088e",
    "leaves_qty": "0",
    "order_id": "b5abe576-6a8a-49f3-a353-46b72c1ccae9",
    "order_status": "filled",
    "price": "174.78",
    "qty": "2",
    "side": "buy",
    "symbol": "AAPL",
    "transaction_time": "2022-02-02T18:55:09.981482Z",
    "type": "fill"
  }
]
```

<h3 id="retrieve-account-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns an array of Account activities|Inline|

<h3 id="retrieve-account-activities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TradingActivities](#schematradingactivities) \| [NonTradeActivities](#schemanontradeactivities)]|false|none|none|
|» *anyOf*|[TradingActivities](#schematradingactivities)|false|none|none|
|» *anyOf*|[NonTradeActivities](#schemanontradeactivities)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Retrieve Account Activities of Specific Type

<a id="opIdgetAccountActivitiesByActivityType"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/account/activities/string \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/account/activities/{activity_type}`

Returns account activity entries for a specific type of activity.

<h3 id="retrieve-account-activities-of-specific-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|query|string(uuid)|false|Filter activities associated with a specific order. Useful for retrieving the fills that make up a completely filled order.|
|date|query|string(date-time)|false|Filter activities by their creation date (created_at), not the activity's settlement date. For non-trade activities such as fees, the creation date is typically the day after the trade date (in UTC). Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.|
|until|query|string(date-time)|false|Get activities created before this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.|
|after|query|string(date-time)|false|Get activities created after this date. Both formats YYYY-MM-DD and YYYY-MM-DDTHH:MM:SSZ are supported.|
|direction|query|string|false|The chronological order of response based on the activity datetime.|
|page_size|query|integer|false|The maximum number of entries to return in the response.|
|page_token|query|string|false|Token used for pagination. Provide the ID of the last activity from the last page to retrieve the next set of results.|
|activity_type|path|string|true|The activity type you want to view entries for. A list of valid activity types can be found at the bottom of this page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "activity_type": "FILL",
    "cum_qty": "2",
    "id": "20220202135509981::2d7be4ff-d1f3-43e9-856a-0f5cf5c5088e",
    "leaves_qty": "0",
    "order_id": "b5abe576-6a8a-49f3-a353-46b72c1ccae9",
    "order_status": "filled",
    "price": "174.78",
    "qty": "2",
    "side": "buy",
    "symbol": "AAPL",
    "transaction_time": "2022-02-02T18:55:09.981482Z",
    "type": "fill"
  }
]
```

<h3 id="retrieve-account-activities-of-specific-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns an array of Account activities|Inline|

<h3 id="retrieve-account-activities-of-specific-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TradingActivities](#schematradingactivities) \| [NonTradeActivities](#schemanontradeactivities)]|false|none|none|
|» *oneOf*|[TradingActivities](#schematradingactivities)|false|none|none|
|» *oneOf*|[NonTradeActivities](#schemanontradeactivities)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-calendar">Calendar</h1>

## Get US Market Calendar

<a id="opIdLegacyCalendar"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/calendar \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/calendar`

The calendar API serves the full list of market days from 1970 to 2029. It can also be queried by specifying a start and/or end time to narrow down the results. In addition to the dates, the response also contains the specific open and close times for the market days, taking into account early closures.


<h3 id="get-us-market-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string(date-time)|false|The first date to retrieve data for (inclusive).|
|end|query|string(date-time)|false|The last date to retrieve data for (inclusive).|
|date_type|query|string|false|Indicates what start and end mean. Default: TRADING. If TRADING is specified, returns a calendar whose trading date matches start, end. If SETTLEMENT is specified, returns the calendar whose settlement date matches start and end.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|date_type|TRADING|
|date_type|SETTLEMENT|

> Example responses

> 200 Response

```json
[
  {
    "close": "16:00",
    "date": "2025-01-02",
    "open": "09:30",
    "session_close": "2000",
    "session_open": "0400",
    "settlement_date": "2025-01-03"
  }
]
```

<h3 id="get-us-market-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[legacy_public_calendar_resp](#schemalegacy_public_calendar_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.<br>|None|

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
API_Key & API_Secret
</aside>

## Get Market Calendar

<a id="opIdCalendar"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v3/calendar/BMO \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v3/calendar/{market}`

This endpoint returns the market calendar.

<h3 id="get-market-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|market|path|[market](#schemamarket)|true|The market identifier. MIC, BIC, or acronym.<br><br>Available market codes by region:<br><br>**United States**<br>- `BMO`: Bank of Montreal. US banking calendar (US operations).<br>- `BNYM`: The Bank of New York Mellon. US banking calendar.<br>- `BOATS`: Blue Ocean Alternative Trading System. US overnight trading.<br>- `IEX`: Investors Exchange. US equities.<br>- `IEXG`: Investors Exchange. US equities.<br>- `NASDAQ`: National Association of Securities Dealers Automated Quotations. US equities.<br>- `NYSE`: New York Stock Exchange. US equities.<br>- `OCEA`: BlueOcean ATS. US overnight trading.<br>- `OPRA`: Options Price Reporting Authority. US options.<br>- `OTC`: Over-The-Counter. US OTC equities.<br>- `OTCM`: OTC Markets. US OTC equities.<br>- `SIFMA`: Securities Industry and Financial Markets Association. US bonds.<br>- `XNAS`: NASDAQ. US equities.<br>- `XNYS`: New York Stock Exchange. US equities.<br><br>**Europe**<br>- `CEUX`: Cboe CEUX Europe. European equities (Cboe Netherlands).<br>- `CHIX`: Cboe CHIX Europe. European equities (Cboe UK).<br>- `ISE`: Euronext Dublin. Irish equities.<br>- `LSE`: London Stock Exchange. UK equities.<br>- `MTA`: Euronext Milan. Italian equities.<br>- `MTAA`: Euronext Milan. Italian equities.<br>- `XAMS`: Euronext Amsterdam. Dutch equities.<br>- `XBRU`: Euronext Brussels. Belgian equities.<br>- `XDUB`: Euronext Dublin. Irish equities.<br>- `XETR`: Frankfurt Stock Exchange. German equities.<br>- `XETRA`: Frankfurt Stock Exchange. German equities.<br>- `XLIS`: Euronext Lisbon. Portuguese equities.<br>- `XLON`: London Stock Exchange. UK equities.<br>- `XPAR`: Euronext Paris. French equities.<br><br>**Asia & Middle East**<br>- `HKEX`: Hong Kong Stock Exchange. Hong Kong equities.<br>- `JPX`: Japan Exchange Group. Japanese equities.<br>- `TADAWUL`: Saudi Stock Exchange. Saudi equities.<br>- `XHKG`: Hong Kong Stock Exchange. Hong Kong equities.<br>- `XSAU`: Saudi Stock Exchange. Saudi equities.<br>- `XTKS`: Japan Exchange Group. Japanese equities.<br>|
|start|query|string(date)|false|The first date to retrieve data for (inclusive). Default: today.<br>|
|end|query|string(date)|false|The last date to retrieve data for (inclusive). Default: one week from the start date.<br>|
|timezone|query|string|false|Timezone of the times. Default: the timezone of the market.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|market|BMO|
|market|BNYM|
|market|BOATS|
|market|CEUX|
|market|CHIX|
|market|HKEX|
|market|IEX|
|market|IEXG|
|market|ISE|
|market|LSE|
|market|MTA|
|market|MTAA|
|market|NASDAQ|
|market|NYSE|
|market|OCEA|
|market|OPRA|
|market|OTC|
|market|OTCM|
|market|SIFMA|
|market|TADAWUL|
|market|XAMS|
|market|XBRU|
|market|XDUB|
|market|XETR|
|market|XETRA|
|market|XHKG|
|market|XLIS|
|market|XLON|
|market|XNAS|
|market|XNYS|
|market|XPAR|
|market|XSAU|
|timezone|UTC|

> Example responses

> 200 Response

```json
{
  "calendar": [
    {
      "core_end": "2025-01-02T16:00:00-05:00",
      "core_start": "2025-01-02T09:30:00-05:00",
      "date": "2025-01-02",
      "lunch_end": "1970-01-01T00:00:00Z",
      "lunch_start": "1970-01-01T00:00:00Z",
      "post_end": "2025-01-02T20:00:00-05:00",
      "post_start": "2025-01-02T16:00:00-05:00",
      "pre_end": "2025-01-02T09:30:00-05:00",
      "pre_start": "2025-01-02T04:00:00-05:00",
      "settlement_date": "2025-01-03"
    }
  ],
  "market": {
    "acronym": "NYSE",
    "bic": "IRVTUS3NXXX",
    "mic": "XNYS",
    "name": "New York Stock Exchange",
    "timezone": "America/New_York"
  }
}
```

<h3 id="get-market-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[public_calendar_resp](#schemapublic_calendar_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.<br>|None|

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
API_Key & API_Secret
</aside>

<h1 id="trading-api-clock">Clock</h1>

## Get US Market Clock

<a id="opIdLegacyClock"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/clock \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/clock`

The clock API serves the current market timestamp, whether or not the market is currently open, as well as the times of the next market open and close.


> Example responses

> 200 Response

```json
{
  "is_open": true,
  "next_close": "2025-06-24T16:00:00-04:00",
  "next_open": "2025-06-25T09:30:00-04:00",
  "timestamp": "2025-06-24T14:15:22-04:00"
}
```

<h3 id="get-us-market-clock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[legacy_clock](#schemalegacy_clock)|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|200|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||Request limit per minute remaining.|
|429|X-RateLimit-Reset|integer||The UNIX epoch when the remaining quota changes.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Market Clock

<a id="opIdClock"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v3/clock \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v3/clock`

This API serves information about multiple markets: the current time, if it's a market day, the current phase of the market, etc.


<h3 id="get-market-clock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|markets|query|string|false|Comma-separated list of markets. Available market codes by region:<br><br>**United States**<br>- `BMO`: Bank of Montreal. US banking calendar (US operations).<br>- `BNYM`: The Bank of New York Mellon. US banking calendar.<br>- `BOATS`: Blue Ocean Alternative Trading System. US overnight trading.<br>- `IEX`: Investors Exchange. US equities.<br>- `IEXG`: Investors Exchange. US equities.<br>- `NASDAQ`: National Association of Securities Dealers Automated Quotations. US equities.<br>- `NYSE`: New York Stock Exchange. US equities.<br>- `OCEA`: BlueOcean ATS. US overnight trading.<br>- `OPRA`: Options Price Reporting Authority. US options.<br>- `OTC`: Over-The-Counter. US OTC equities.<br>- `OTCM`: OTC Markets. US OTC equities.<br>- `SIFMA`: Securities Industry and Financial Markets Association. US bonds.<br>- `XNAS`: NASDAQ. US equities.<br>- `XNYS`: New York Stock Exchange. US equities.<br><br>**Europe**<br>- `CEUX`: Cboe CEUX Europe. European equities (Cboe Netherlands).<br>- `CHIX`: Cboe CHIX Europe. European equities (Cboe UK).<br>- `ISE`: Euronext Dublin. Irish equities.<br>- `LSE`: London Stock Exchange. UK equities.<br>- `MTA`: Euronext Milan. Italian equities.<br>- `MTAA`: Euronext Milan. Italian equities.<br>- `XAMS`: Euronext Amsterdam. Dutch equities.<br>- `XBRU`: Euronext Brussels. Belgian equities.<br>- `XDUB`: Euronext Dublin. Irish equities.<br>- `XETR`: Frankfurt Stock Exchange. German equities.<br>- `XETRA`: Frankfurt Stock Exchange. German equities.<br>- `XLIS`: Euronext Lisbon. Portuguese equities.<br>- `XLON`: London Stock Exchange. UK equities.<br>- `XPAR`: Euronext Paris. French equities.<br><br>**Asia & Middle East**<br>- `HKEX`: Hong Kong Stock Exchange. Hong Kong equities.<br>- `JPX`: Japan Exchange Group. Japanese equities.<br>- `TADAWUL`: Saudi Stock Exchange. Saudi equities.<br>- `XHKG`: Hong Kong Stock Exchange. Hong Kong equities.<br>- `XSAU`: Saudi Stock Exchange. Saudi equities.<br>- `XTKS`: Japan Exchange Group. Japanese equities.<br>|
|time|query|string(date-time)|false|Instead of the current time, use this time for the clock.|

> Example responses

> 200 Response

```json
{
  "clocks": [
    {
      "is_market_day": true,
      "market": {
        "acronym": "NYSE",
        "bic": "IRVTUS3NXXX",
        "mic": "XNYS",
        "name": "New York Stock Exchange",
        "timezone": "America/New_York"
      },
      "next_market_close": "1970-01-01T00:00:00Z",
      "next_market_open": "1970-01-01T00:00:00Z",
      "phase": "closed",
      "phase_until": "1970-01-01T00:00:00Z",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-market-clock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[clock_resp](#schemaclock_resp)|
|400|Bad Request|One of the request parameters is invalid. See the returned message for details.<br>|None|
|429|Too Many Requests|Too many requests. You hit the rate limit. Use the X-RateLimit-... response headers to make sure you're under the rate limit.<br>|None|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.<br>|None|

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
API_Key & API_Secret
</aside>

<h1 id="trading-api-crypto-funding">Crypto Funding</h1>

## Retrieve Crypto Funding Wallets

<a id="opIdlistCryptoFundingWallets"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/wallets`

Lists wallets for the account given in the path parameter. If an asset is specified and no wallet for the account and asset pair exists one will be created. If no asset is specified only existing wallets will be listed for the account. An account may have at most one wallet per asset.

<h3 id="retrieve-crypto-funding-wallets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|Filter by crypto asset symbol, e.g. BTC, ETH, USDT. If specified and no wallet exists, one will be created.|
|chain|query|[CryptoChain](#schemacryptochain)|false|Optional chain identifier. Use to request wallets for a specific chain when asset is a multi-chain crypto asset. If not specified, network is considered.|
|network|query|string|false|Deprecated. Use chain instead. Optional network identifier which is used to request wallets for a specific network when asset is a multi-chain crypto asset. When both 'chain' and 'network' are specified, 'chain' will take precedence and 'network' will be ignored. If 'chain' and 'network' are not specified, the default 'network' (ethereum) will be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|chain|SOL|
|chain|ETH|
|chain|BTC|
|chain|XRP|
|chain|ARB|
|network|ethereum|
|network|solana|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="retrieve-crypto-funding-wallets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single wallet object if an asset is specified or an array of wallet objects if no asset is specified|[CryptoWallet](#schemacryptowallet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Returns the estimated gas fee for a proposed transaction.

<a id="opIdgetCryptoTransferEstimate"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/fees/estimate \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/wallets/fees/estimate`

Returns the estimated on-chain network (gas) fee for a proposed crypto withdrawal at current chain conditions. Pass the `asset`, `from_address`, `to_address`, and `amount` you intend to send; the response reports the network fee that would be charged for the corresponding transaction.

<h3 id="returns-the-estimated-gas-fee-for-a-proposed-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset|query|string|false|The asset for the proposed transaction|
|from_address|query|string|false|The originating address of the proposed transaction|
|to_address|query|string|false|The destination address of the proposed transaction|
|amount|query|string|false|The amount, denoted in the specified asset, of the proposed transaction|

> Example responses

> 200 Response

```json
{
  "fee": "0.0505",
  "network_fee": "0.0825"
}
```

<h3 id="returns-the-estimated-gas-fee-for-a-proposed-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WalletFeeEstimateResponse](#schemawalletfeeestimateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Retrieve Crypto Funding Transfers

<a id="opIdlistCryptoFundingTransfers"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/transfers \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/wallets/transfers`

Returns an array of all transfers associated with the given account across all wallets.

> Example responses

> 200 Response

```json
{
  "amount": "string",
  "asset": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "direction": "INCOMING",
  "fees": "string",
  "from_address": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "network_fee": "string",
  "status": "PROCESSING",
  "to_address": "string",
  "tx_hash": "string",
  "usd_value": "string"
}
```

<h3 id="retrieve-crypto-funding-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of transfer objects|[CryptoTransfer](#schemacryptotransfer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Retrieve a Crypto Funding Transfer

<a id="opIdgetCryptoFundingTransfer"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/transfers/string \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/wallets/transfers/{transfer_id}`

Returns a specific wallet transfer by passing into the query the transfer_id.

<h3 id="retrieve-a-crypto-funding-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transfer_id|path|string|true|The crypto transfer to retrieve|

> Example responses

> 200 Response

```json
{
  "amount": "string",
  "asset": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "direction": "INCOMING",
  "fees": "string",
  "from_address": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "network_fee": "string",
  "status": "PROCESSING",
  "to_address": "string",
  "tx_hash": "string",
  "usd_value": "string"
}
```

<h3 id="retrieve-a-crypto-funding-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single crypto transfer object|[CryptoTransfer](#schemacryptotransfer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Search for VASPs

<a id="opIdsearchVASPs"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/travel-rule/vasps \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/wallets/travel-rule/vasps`

Search for Virtual Asset Service Providers, or crypto exchanges, on Notabene's network.
This endpoint can be used to find the VASP DID for your beneficiary's exchange when submitting
travel rule information for your whitelisted wallets. Use the `q` parameter to search for exchanges.

<h3 id="search-for-vasps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|General search query string.|
|emailDomain|query|string|false|Filter by VASP email domain.|
|chainalysisName|query|string|false|Filter by Chainalysis-specific VASP name.|
|fields|query|string|false|Specify which fields to return (comma-separated).|
|page|query|integer|false|The zero-based page number to retrieve.|
|per_page|query|integer|false|Number of items per page.|
|order|query|string|false|Field-based sort expression, such as name:ASC. Multiple expressions may be comma-separated. Defaults to name:ASC.|
|includeSubsidiaryVASPs|query|boolean|false|Whether to include child/subsidiary entities.|

> Example responses

> 200 Response

```json
{
  "page": 1,
  "pages": 1,
  "total": 1,
  "vasps": [
    {
      "country": "US",
      "did": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4",
      "id": "vasp-1",
      "name": "Example Exchange"
    }
  ]
}
```

<h3 id="search-for-vasps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request. `vasps` lists each match and is an empty array when nothing matches.|[SearchVASPsResponse](#schemasearchvaspsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## An array of whitelisted addresses

<a id="opIdlistWhitelistedAddress"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/whitelists \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/wallets/whitelists`

Returns the list of whitelisted withdrawal addresses for your account.

> Example responses

> 200 Response

```json
{
  "address": "string",
  "asset": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "status": "APPROVED",
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

<h3 id="an-array-of-whitelisted-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of whitelisted objects|[WhitelistedAddress](#schemawhitelistedaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Request a new whitelisted address

<a id="opIdcreateWhitelistedAddress"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/whitelists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz",
    "asset": "USDT",
    "chain": "ETH",
    "travel_rule_info": {
      "beneficiary_country_of_residence": "US",
      "beneficiary_entity_name": "Alpaca Crypto LLC",
      "beneficiary_family_name": "Doe",
      "beneficiary_geographic_address_building_number": "1",
      "beneficiary_geographic_address_country": "US",
      "beneficiary_geographic_address_post_code": "10001",
      "beneficiary_geographic_address_street_name": "Main Street",
      "beneficiary_geographic_address_town_name": "New York",
      "beneficiary_given_name": "John",
      "beneficiary_is_self_hosted": true,
      "beneficiary_manual_entry": {
        "vasp_name": "Alpaca",
        "vasp_website": "https://alpaca.markets"
      },
      "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
    }
  }'
```

`POST /v2/wallets/whitelists`

Submits a new whitelisted withdrawal address for your account. The chain is derived from the supplied asset symbol and address, and the same address cannot be whitelisted twice on the same chain.

Where travel rule reporting applies to your account, supply travel rule information for the destination wallet. Use the `Search VASPs` endpoint to find the VASP DID for the destination exchange. For a self-hosted wallet, set `beneficiary_is_self_hosted` to true. If the exchange is not in the directory, provide its information in `beneficiary_manual_entry`.

Note that whitelisted addresses must wait at least 24 hours before they can be used as a withdrawal destination.

> Body parameter

```json
{
  "address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz",
  "asset": "USDT",
  "chain": "ETH",
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

<h3 id="request-a-new-whitelisted-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWhitelistedAddressRequest](#schemacreatewhitelistedaddressrequest)|true|none|
|» address|body|string|false|The address to be whitelisted|
|» asset|body|string|false|Symbol of underlying asset for the whitelisted address|
|» chain|body|[CryptoChain](#schemacryptochain)|false|Chain identifier for multi-chain crypto assets.|
|» travel_rule_info|body|[TravelRuleInfo](#schematravelruleinfo)|false|Travel rule information pertaining to the wallet being whitelisted. Identify the destination by providing beneficiary_vasp_id, setting beneficiary_is_self_hosted to true, or providing beneficiary_manual_entry. Either beneficiary_entity_name (for legal entities) or beneficiary_given_name and beneficiary_family_name (for natural persons) must be provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» chain|SOL|
|» chain|ETH|
|» chain|BTC|
|» chain|XRP|
|» chain|ARB|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "asset": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "status": "APPROVED",
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

> 400 Response

```json
{
  "error_code": "BENEFICIARY_NAME_REQUIRED",
  "message": "Please provide the beneficiary's name. Select one of the following options.",
  "next_actions": [
    {
      "description": "Provide the recipient's first and last name.",
      "name": "supply_beneficiaryName_naturalPerson",
      "required_fields": [
        {
          "description": "The recipient's first name.",
          "field": "beneficiary_given_name",
          "value_type": "string"
        },
        {
          "description": "The recipient's last name.",
          "field": "beneficiary_family_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    },
    {
      "description": "Provide the entity's legal name.",
      "name": "supply_beneficiaryName_legalEntity",
      "required_fields": [
        {
          "description": "The legal name of the receiving entity.",
          "field": "beneficiary_entity_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    }
  ]
}
```

<h3 id="request-a-new-whitelisted-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully requested a whitelisted address|[WhitelistedAddress](#schemawhitelistedaddress)|
|400|Bad Request|The request or travel rule information is invalid.|[TravelRuleErrorResponse](#schematravelruleerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Delete a whitelisted address

<a id="opIddeleteWhitelistedAddress"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/whitelists/string \
  -X DELETE \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`DELETE /v2/wallets/whitelists/{whitelisted_address_id}`

Deletes a whitelisted withdrawal address by ID. Subsequent withdrawals targeting the deleted address will be rejected.

<h3 id="delete-a-whitelisted-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|whitelisted_address_id|path|string|true|The whitelisted address to delete|

<h3 id="delete-a-whitelisted-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted a whitelisted address|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Update travel rule information for a whitelisted wallet

<a id="opIdupdateWhitelistedAddressTravelRuleInfo"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/wallets/whitelists/497f6eca-6276-4993-bfeb-53cbbbba6f08/travel-rule-info \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "travel_rule_info": {
      "beneficiary_country_of_residence": "US",
      "beneficiary_entity_name": "Alpaca Crypto LLC",
      "beneficiary_family_name": "Doe",
      "beneficiary_geographic_address_building_number": "1",
      "beneficiary_geographic_address_country": "US",
      "beneficiary_geographic_address_post_code": "10001",
      "beneficiary_geographic_address_street_name": "Main Street",
      "beneficiary_geographic_address_town_name": "New York",
      "beneficiary_given_name": "John",
      "beneficiary_is_self_hosted": true,
      "beneficiary_manual_entry": {
        "vasp_name": "Alpaca",
        "vasp_website": "https://alpaca.markets"
      },
      "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
    }
  }'
```

`PATCH /v2/wallets/whitelists/{whitelisted_address_id}/travel-rule-info`

You are required to supply travel rule information for the crypto wallets you're withdrawing to.

It is preferred that you use the `Search VASPs` endpoint to find the VASP DID for the exchange you are withdrawing to,
otherwise, if it's a self-hosted wallet, please set `beneficiary_is_self_hosted` to true.

If the exchange cannot be found in our directory, please supply the information manually using the `beneficiary_manual_entry` object.

> Body parameter

```json
{
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

<h3 id="update-travel-rule-information-for-a-whitelisted-wallet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|whitelisted_address_id|path|string(uuid)|true|The whitelisted address update travel rule information for|
|body|body|[UpdateWhitelistedAddressTravelRuleInfoRequest](#schemaupdatewhitelistedaddresstravelruleinforequest)|true|Travel rule information to associate with the whitelisted address.|
|» travel_rule_info|body|[TravelRuleInfo](#schematravelruleinfo)|true|Travel rule information pertaining to the wallet being whitelisted. Identify the destination by providing beneficiary_vasp_id, setting beneficiary_is_self_hosted to true, or providing beneficiary_manual_entry. Either beneficiary_entity_name (for legal entities) or beneficiary_given_name and beneficiary_family_name (for natural persons) must be provided.|

> Example responses

> 400 Response

```json
{
  "error_code": "BENEFICIARY_NAME_REQUIRED",
  "message": "Please provide the beneficiary's name. Select one of the following options.",
  "next_actions": [
    {
      "description": "Provide the recipient's first and last name.",
      "name": "supply_beneficiaryName_naturalPerson",
      "required_fields": [
        {
          "description": "The recipient's first name.",
          "field": "beneficiary_given_name",
          "value_type": "string"
        },
        {
          "description": "The recipient's last name.",
          "field": "beneficiary_family_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    },
    {
      "description": "Provide the entity's legal name.",
      "name": "supply_beneficiaryName_legalEntity",
      "required_fields": [
        {
          "description": "The legal name of the receiving entity.",
          "field": "beneficiary_entity_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    }
  ]
}
```

<h3 id="update-travel-rule-information-for-a-whitelisted-wallet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated travel rule information|None|
|400|Bad Request|The request or travel rule information is invalid.|[TravelRuleErrorResponse](#schematravelruleerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-tokenization">Tokenization</h1>

Request minting of tokenized assets and list tokenization requests on the Instant Tokenization Network (ITN).

## Mint a Tokenized Asset

<a id="opIdpostTokenizationMint"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/tokenization/mint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "issuer": "xstocks",
    "network": "solana",
    "qty": "string",
    "underlying_symbol": "string",
    "wallet_address": "string"
  }'
```

`POST /v2/tokenization/mint`

This endpoint is used by an Authorized Participant to request the minting of a tokenized asset.

**Idempotency**: When the `Idempotency-Key` header is supplied, this endpoint is
idempotent. Multiple requests with the same key and identical request body will
create only one mint request. A subsequent request returns the previously created
request with the same response (no duplicate is created). If the same key is used
with a different request body, the API returns `422 Unprocessable Entity`.

**Recommended for production**: Always supply `Idempotency-Key` when requesting a
mint. This allows safe retries on timeouts, network errors, or 5xx responses
without risking duplicate requests. Use a client-generated unique value (e.g. UUID).

> Body parameter

```json
{
  "issuer": "xstocks",
  "network": "solana",
  "qty": "string",
  "underlying_symbol": "string",
  "wallet_address": "string"
}
```

<h3 id="mint-a-tokenized-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Optional client-generated key for safe retries and duplicate request detection.<br>This endpoint currently accepts keys up to 128 characters. Alpaca is moving toward<br>a 36-character maximum; new implementations should generate a unique UUIDv7 or<br>UUIDv4 value (36 characters including hyphens) for each logical operation. Do not<br>reuse a key across operations.<br>|
|body|body|[TokenizationMintRequest](#schematokenizationmintrequest)|true|none|
|» issuer|body|[TokenizationIssuer](#schematokenizationissuer)|true|The tokenized asset's issuer|
|» network|body|[TokenizationNetwork](#schematokenizationnetwork)|true|The token's blockchain network|
|» qty|body|string|true|The underlying quantity to convert into the tokenized asset. It can be fractional.|
|» underlying_symbol|body|string|true|The underlying asset symbol|
|» wallet_address|body|string|true|The wallet address to receive the tokenized asset|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» issuer|binance|
|» issuer|coinbase|
|» issuer|ondo|
|» issuer|st0x|
|» issuer|xstocks|
|» network|arbitrum|
|» network|base|
|» network|binance|
|» network|cronos|
|» network|ethereum|
|» network|hypercore|
|» network|hyperevm|
|» network|mantle|
|» network|robinhood|
|» network|solana|
|» network|ton|
|» network|tron|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "issuer": "xstocks",
  "network": "solana",
  "qty": "string",
  "status": "completed",
  "token_symbol": "string",
  "tokenization_request_id": "string",
  "underlying_symbol": "string"
}
```

> 400 Response

```json
{
  "code": 40010000,
  "message": "failed to decode request body"
}
```

> 401 Response

```json
{
  "code": 40110000,
  "message": "unauthorized"
}
```

> 403 Response

```json
{
  "code": 40310000,
  "message": "forbidden"
}
```

> 422 Response

```json
{
  "code": 42210001,
  "message": "issuer is required, network is required"
}
```

<h3 id="mint-a-tokenized-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully requested minting of a tokenized asset.|[TokenizationMintResponse](#schematokenizationmintresponse)|
|400|Bad Request|Bad request (e.g. malformed input, insufficient position, or account not authorized to mint). Also returned when the `Idempotency-Key` header is malformed, or when replaying a request that was originally rejected.|[Error](#schemaerror)|
|401|Unauthorized|Authentication credentials are missing or invalid.|[Error](#schemaerror)|
|403|Forbidden|Caller is not authorized to perform this operation.|[Error](#schemaerror)|
|422|Unprocessable Entity|One or more request parameters are missing or invalid, or the same `Idempotency-Key` was reused with a different request body.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## List Tokenization Requests

<a id="opIdgetTokenizationRequests"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/tokenization/requests \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/tokenization/requests`

An Authorized Participant can use this endpoint to list the tokenization requests performed on the Instant Tokenization Network (ITN).

<h3 id="list-tokenization-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[TokenizationRequestType](#schematokenizationrequesttype)|false|Tokenization request type to be queried|
|status|query|[TokenizationRequestStatus](#schematokenizationrequeststatus)|false|Tokenization request status to be queried|
|underlying_symbol|query|string|false|Underlying symbol of the tokenization requests to be queried|
|issuer|query|[TokenizationIssuer](#schematokenizationissuer)|false|Issuer of the tokenization requests to be queried|
|network|query|[TokenizationNetwork](#schematokenizationnetwork)|false|Network of the tokenization requests to be queried|
|after|query|string(date-time)|false|The response will include only requests created after this timestamp (exclusive)|
|before|query|string(date-time)|false|The response will include only requests created before this timestamp (exclusive)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|mint|
|type|redeem|
|status|pending|
|status|rejected|
|status|completed|
|issuer|binance|
|issuer|coinbase|
|issuer|ondo|
|issuer|st0x|
|issuer|xstocks|
|network|arbitrum|
|network|base|
|network|binance|
|network|cronos|
|network|ethereum|
|network|hypercore|
|network|hyperevm|
|network|mantle|
|network|robinhood|
|network|solana|
|network|ton|
|network|tron|

> Example responses

> 200 Response

```json
[
  {
    "client_account_id": "06b9d76e-1733-460c-844e-48d1ae0f10c3",
    "client_external_account_id": "AP-EXT-001",
    "client_request_id": "ap-mint-2026-01-05-001",
    "created_at": "2026-01-02T15:04:05Z",
    "fees": null,
    "issuer": "xstocks",
    "issuer_request_id": null,
    "network": "solana",
    "qty": "10",
    "status": "completed",
    "token_symbol": "AAPLx",
    "tokenization_request_id": "5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a",
    "transfer_status": "completed",
    "tx_hash": null,
    "type": "mint",
    "underlying_symbol": "AAPL",
    "updated_at": null,
    "wallet_address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz"
  }
]
```

> 401 Response

```json
{
  "code": 40110000,
  "message": "unauthorized"
}
```

> 403 Response

```json
{
  "code": 40310000,
  "message": "forbidden"
}
```

> 422 Response

```json
{
  "code": 42210001,
  "message": "failed to parse after"
}
```

<h3 id="list-tokenization-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response<br><br>A list of tokenization requests|Inline|
|401|Unauthorized|Authentication credentials are missing or invalid.|[Error](#schemaerror)|
|403|Forbidden|Caller is not authorized to perform this operation.|[Error](#schemaerror)|
|422|Unprocessable Entity|One or more request parameters are missing or invalid.|[Error](#schemaerror)|

<h3 id="list-tokenization-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TokenizationRequest](#schematokenizationrequest)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Tokenization Request by ID

<a id="opIdgetTokenizationRequest"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2/tokenization/requests/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/tokenization/requests/{tokenization_request_id}`

An Authorized Participant can use this endpoint to retrieve a single tokenization request, mint or redeem, by its `tokenization_request_id`.

<h3 id="get-tokenization-request-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenization_request_id|path|string(uuid)|true|Unique identifier of the tokenization request, as returned by the mint endpoint or the list-requests endpoint.|

> Example responses

> 200 Response

```json
{
  "created_at": "2025-11-04T18:38:01.942282Z",
  "fees": "0.5",
  "issuer": "xstocks",
  "network": "solana",
  "qty": "1.0",
  "status": "completed",
  "token_symbol": "TSLAx",
  "tokenization_request_id": "5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a",
  "transfer_status": "completed",
  "tx_hash": "5J7ZxK4QwR3vH2pY1aB6sN8cM9tD0fA2eXyVwUjL3kPqR4mZcF7nB1tA8sH6dG2pE",
  "type": "mint",
  "underlying_symbol": "TSLA",
  "updated_at": "2025-11-04T18:38:42.117004Z",
  "wallet_address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz"
}
```

> 401 Response

```json
{
  "code": 40110000,
  "message": "unauthorized"
}
```

> 403 Response

```json
{
  "code": 40310000,
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "code": 40410000,
  "message": "tokenization request not found"
}
```

> 422 Response

```json
{
  "code": 42210001,
  "message": "tokenization_request_id is not a valid UUID"
}
```

<h3 id="get-tokenization-request-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TokenizationRequest](#schematokenizationrequest)|
|401|Unauthorized|Authentication credentials are missing or invalid.|[Error](#schemaerror)|
|403|Forbidden|Caller is not authorized to perform this operation.|[Error](#schemaerror)|
|404|Not Found|No tokenization request with the supplied `tokenization_request_id` exists for the calling account.|[Error](#schemaerror)|
|422|Unprocessable Entity|The `tokenization_request_id` path parameter is not a valid UUID.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Tokenization Request by `client_request_id`

<a id="opIdgetTokenizationRequestByClientRequestID"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v2/tokenization/requests:by_client_request_id?client_request_id=ap-request-2025-11-04-001' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2/tokenization/requests:by_client_request_id`

An Authorized Participant can use this endpoint to retrieve a single mint tokenization request by their own `client_request_id` -- the AP-supplied label originally passed on the mint request. If the AP has reused a `client_request_id` across multiple requests, the most recently created request is returned.

<h3 id="get-tokenization-request-by-clientrequestid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_request_id|query|string|true|AP-supplied request identifier originally passed on the mint request, echoed back on the tokenization-request response.|

> Example responses

> 200 Response

```json
{
  "created_at": "2025-11-04T18:38:01.942282Z",
  "fees": "0.5",
  "issuer": "xstocks",
  "network": "solana",
  "qty": "1.0",
  "status": "completed",
  "token_symbol": "TSLAx",
  "tokenization_request_id": "5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a",
  "transfer_status": "completed",
  "tx_hash": "5J7ZxK4QwR3vH2pY1aB6sN8cM9tD0fA2eXyVwUjL3kPqR4mZcF7nB1tA8sH6dG2pE",
  "type": "mint",
  "underlying_symbol": "TSLA",
  "updated_at": "2025-11-04T18:38:42.117004Z",
  "wallet_address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz"
}
```

> 401 Response

```json
{
  "code": 40110000,
  "message": "unauthorized"
}
```

> 403 Response

```json
{
  "code": 40310000,
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "code": 40410000,
  "message": "tokenization request not found"
}
```

> 422 Response

```json
{
  "code": 42210001,
  "message": "client_request_id query parameter is required"
}
```

<h3 id="get-tokenization-request-by-clientrequestid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TokenizationRequest](#schematokenizationrequest)|
|401|Unauthorized|Authentication credentials are missing or invalid.|[Error](#schemaerror)|
|403|Forbidden|Caller is not authorized to perform this operation.|[Error](#schemaerror)|
|404|Not Found|No tokenization request with the supplied `client_request_id` exists for the calling account.|[Error](#schemaerror)|
|422|Unprocessable Entity|The `client_request_id` query parameter is missing.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-locates">Locates</h1>

Endpoints for locate requests and quotes.

## List Locates

<a id="opIdlistLocates"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v1/locates \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1/locates`

Returns locates filtered by status, symbol, or date range. Results are sorted by `created_at` descending, with `id` descending as the tie-breaker. This endpoint is not available in paper trading.

<h3 id="list-locates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_token|query|string|false|Used for pagination, this token retrieves the next page of results. It is obtained from the response of the preceding page when additional pages are available.|
|limit|query|integer|false|Maximum number of results to return.|
|status|query|[LocateStatus](#schemalocatestatus)|false|Filter by locate status.|
|symbol|query|string|false|Filter by stock symbol.|
|start|query|string(date)|false|Filter locates with locate trading date on or after this date. Format: YYYY-MM-DD. The locate trading date uses America/New_York and rolls at 8pm ET.|
|end|query|string(date)|false|Filter locates with locate trading date before this date (exclusive). Format: YYYY-MM-DD. The locate trading date uses America/New_York and rolls at 8pm ET.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|expired|
|status|rejected|

> Example responses

> 200 Response

```json
{
  "locates": [
    {
      "all_or_none": false,
      "created_at": "2026-01-02T15:04:05Z",
      "expires_at": "2026-01-03T01:00:00Z",
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "limit_price": "0.05",
      "located_price": "0.05",
      "located_qty": 100,
      "requested_qty": 100,
      "status": "active",
      "symbol": "TSLA",
      "total_fee": "5.00"
    }
  ],
  "next_page_token": "eyJpZCI6IjU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMCJ9Cg"
}
```

> 400 Response

```json
{
  "code": "invalid_input",
  "message": "invalid input"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Forbidden"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="list-locates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of locates for the account, or an empty list if no locates are found.|[ListLocatesResponse](#schemalistlocatesresponse)|
|400|Bad Request|Invalid locate request.|[LocateError](#schemalocateerror)|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|User has no access to a resource.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Create Locate

<a id="opIdcreateLocates"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v1/locates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}" \
  -d '{
    "all_or_none": false,
    "limit_price": "0.05",
    "qty": 100,
    "symbol": "TSLA"
  }'
```

`POST /v1/locates`

Creates a locate request for a short sale. This endpoint is not available in paper trading.

**Idempotency**: Reusing the same key with the same request returns the original
locate response. Reusing the same key with a different request returns HTTP 422.


> Body parameter

```json
{
  "all_or_none": false,
  "limit_price": "0.05",
  "qty": 100,
  "symbol": "TSLA"
}
```

<h3 id="create-locate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Optional client-generated key for safe retries and duplicate request detection.<br>This endpoint currently accepts keys up to 128 characters. Alpaca is moving toward<br>a 36-character maximum; new implementations should generate a unique UUIDv7 or<br>UUIDv4 value (36 characters including hyphens) for each logical operation. Do not<br>reuse a key across operations.<br>|
|body|body|[CreateLocateRequest](#schemacreatelocaterequest)|true|Locate request details.|
|» all_or_none|body|boolean|false|Reject the locate unless the full requested quantity is available.|
|» limit_price|body|string \| null|false|Maximum acceptable locate fee per share, as a decimal string in USD.<br>If omitted, any quoted fee is accepted.<br>|
|» qty|body|integer(int64)|true|Number of shares to locate. Must be positive and in round lots of 100; invalid quantities return HTTP 400.|
|» symbol|body|string|true|Stock symbol.|

> Example responses

> 201 Response

```json
{
  "all_or_none": false,
  "created_at": "2026-01-02T15:04:05Z",
  "expires_at": "2026-01-03T01:00:00Z",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "limit_price": "0.05",
  "located_price": "0.05",
  "located_qty": 100,
  "requested_qty": 100,
  "status": "active",
  "symbol": "TSLA",
  "total_fee": "5.00"
}
```

> 400 Response

```json
{
  "code": "invalid_input",
  "message": "invalid input: quantity must be in round lots of 100"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Forbidden"
}
```

> 422 Response

```json
{
  "code": "easy_to_borrow",
  "message": "security is easy-to-borrow and does not require a locate"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="create-locate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Locate](#schemalocate)|
|400|Bad Request|Invalid locate request.|[LocateError](#schemalocateerror)|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|User has no access to a resource.|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Cannot complete locate request.|[LocateError](#schemalocateerror)|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Locate

<a id="opIdgetLocate"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v1/locates/550e8400-e29b-41d4-a716-446655440000 \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1/locates/{locate_id}`

Returns a locate by ID. This endpoint is not available in paper trading.

<h3 id="get-locate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locate_id|path|string(uuid)|true|The locate ID.|

> Example responses

> 200 Response

```json
{
  "all_or_none": false,
  "created_at": "2026-01-02T15:04:05Z",
  "expires_at": "2026-01-03T01:00:00Z",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "limit_price": "0.05",
  "located_price": "0.05",
  "located_qty": 100,
  "requested_qty": 100,
  "status": "active",
  "symbol": "TSLA",
  "total_fee": "5.00"
}
```

> 400 Response

```json
{
  "code": "invalid_input",
  "message": "invalid input"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Forbidden"
}
```

> 404 Response

```json
{
  "message": "locate not found"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="get-locate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested locate.|[Locate](#schemalocate)|
|400|Bad Request|Invalid locate request.|[LocateError](#schemalocateerror)|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|User has no access to a resource.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

## Get Locate Quotes

<a id="opIdlistLocateQuotes"></a>

> Code samples

```bash
curl 'https://paper-api.alpaca.markets/v1/locates/quotes?symbols=TSLA%2CAAPL' \
  -H 'Accept: application/json' \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v1/locates/quotes`

Returns locate availability and pricing for one or more symbols. This endpoint is not available in paper trading.

<h3 id="get-locate-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbols|query|string|true|Comma-separated list of stock symbols. Maximum 100 unique symbols.|

> Example responses

> 200 Response

```json
{
  "errors": [
    {
      "code": "symbol_not_found",
      "message": "symbol not found",
      "symbol": "META"
    }
  ],
  "quotes": [
    {
      "available_qty": 1000,
      "price": "0.0123",
      "quoted_at": "2026-01-02T15:04:05Z",
      "symbol": "TSLA"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_symbols",
  "message": "symbols must contain at most 100 unique symbols"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Forbidden"
}
```

> 500 Response

```json
{
  "message": "Internal Server Error"
}
```

<h3 id="get-locate-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns locate quotes for the requested symbols.|[ListLocateQuotesResponse](#schemalistlocatequotesresponse)|
|400|Bad Request|Invalid locate quote request.|[LocateError](#schemalocateerror)|
|401|Unauthorized|Authentication headers are missing or invalid. Make sure you authenticate your request with a valid API key.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|User has no access to a resource.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error. We recommend retrying these later. If the issue persists, please contact us on Slack or on the Community Forum.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

<h1 id="trading-api-events">Events</h1>

## Subscribe to Activity Events (SSE)

<a id="opIdsubscribeToActivitiesSSE"></a>

> Code samples

```bash
curl https://paper-api.alpaca.markets/v2beta1/events/activities \
  -H "APCA-API-KEY-ID: ${API_KEY}" \
  -H "APCA-API-SECRET-KEY: ${API_KEY}"
```

`GET /v2beta1/events/activities`

The Events API sends the real-time events and provides historical queries with SSE (Server Sent Events).

This endpoint streams events on account activities.

Historical events are streamed immediately if queried, and updates are pushed as events occur.

Query parameter rules:
- If `until` is specified, `since` is required.
- If `until_id` is specified, `since_id` is required.
- You cannot use `since` and `since_id` together.
Behavior:
- If `since` or `since_id` is not specified, this will not return any historic data.
- If `until` or `until_id` is specified, stream will end at the specified point with status 200.

---

Warning: Currently, OAS-3 does not fully support responses from an SSE API.

In case the client code is generated from this OAS spec, please do not specify `since` and `until`, as the generated client may hang forever waiting for the response to end.

If you require the streaming capabilities, we recommend not using the generated clients for this specific endpoint until the OAS-3 standards define how to represent this behavior.

---

###  Comment messages
According to the SSE specification, any line that starts with a colon is a comment which does not contain data.  It is typically a free text that does not follow any data schema. A few examples mentioned below for comment messages.

#####  Slow client

The server sends a comment when the client is not consuming messages fast enough. Example: `: you are reading too slowly, dropped 10000 messages`

##### Internal server error

An error message is sent as a comment when the server closes the connection on an internal server error (only sent by the v2 and v2beta1 endpoints). Example: `: internal server error`

---

<h3 id="subscribe-to-activity-events-sse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|string(date-time)|false|Format: RFC3339 or YYYY-MM-DD|
|until|query|string(date-time)|false|Format: RFC3339 or YYYY-MM-DD|
|since_id|query|string(ulid)|false|none|
|until_id|query|string(ulid)|false|none|

<h3 id="subscribe-to-activity-events-sse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connected. Events will now start streaming as long as you keep the connection open.|Inline|

<h3 id="subscribe-to-activity-events-sse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActivityEventV2](#schemaactivityeventv2)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
API_Key & API_Secret
</aside>

# Schemas

<h2 id="tocS_AcatcActivityV2">AcatcActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaacatcactivityv2"></a>
<a id="schema_AcatcActivityV2"></a>
<a id="tocSacatcactivityv2"></a>
<a id="tocsacatcactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "external_id": "string",
  "hold_date": "1970-01-01",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Automated customer account transfer service (cash)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|external_id|string|true|none|The ID that DTCC assigned to this transfer|
|hold_date|string(date)|false|none|Hold date when the transfers settle|
|request_id|string(uuid)|true|none|The ID for original ACATS request|

<h2 id="tocS_AcatsActivityV2">AcatsActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaacatsactivityv2"></a>
<a id="schema_AcatsActivityV2"></a>
<a id="tocSacatsactivityv2"></a>
<a id="tocsacatsactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "external_id": "string",
  "hold_date": "1970-01-01",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "symbol": "string"
}
```

Automated customer account transfer service (stock)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|external_id|string|true|none|The ID that DTCC assigned to this transfer|
|hold_date|string(date)|false|none|Hold date when the transfers settle|
|request_id|string(uuid)|true|none|The ID for original ACATS request|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "account_blocked": false,
  "account_number": "010203ABCD",
  "balance_asof": "2023-09-27",
  "buying_power": "262113.632",
  "cash": "-23140.2",
  "created_at": "2019-06-12T22:47:07.99658Z",
  "currency": "USD",
  "equity": "103820.56",
  "id": "e6fe16f3-64a4-4921-8928-cadf02f92f98",
  "initial_margin": "63480.38",
  "intraday_adjustments": "0",
  "last_equity": "103529.24",
  "last_maintenance_margin": "38000.832",
  "long_market_value": "126960.76",
  "maintenance_margin": "38088.228",
  "multiplier": "4",
  "options_approved_level": 2,
  "options_buying_power": "40340.18",
  "options_trading_level": 1,
  "pending_reg_taf_fees": "0",
  "portfolio_value": "103820.56",
  "regt_buying_power": "80680.36",
  "short_market_value": "0",
  "shorting_enabled": true,
  "sma": "0",
  "status": "ACTIVE",
  "trade_suspended_by_user": false,
  "trading_blocked": false,
  "transfers_blocked": false
}
```

The account API serves important information related to an account, including account status, funds available for trade, funds available for withdrawal, and various flags relevant to an account's ability to trade. An account maybe be blocked for just for trades (trades_blocked flag) or for both trades and transfers (account_blocked flag) if Alpaca identifies the account to engaging in any suspicious activity. Please note that cryptocurrencies are not eligible assets to be used as collateral for margin accounts and will require the asset be traded using cash only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_blocked|boolean|false|none|If true, the account activity by user is prohibited.|
|account_number|string \| null|false|none|Account number.|
|accrued_fees|string|false|none|The fees collected.|
|balance_asof|string|false|none|The date of the snapshot for `last_*` fields|
|buying_power|string|false|none|Current available $ buying power; If multiplier = 4, this is your daytrade buying power which is calculated as (last_equity - (last) maintenance_margin) * 4; If multiplier = 2, buying_power = max(equity - initial_margin,0) * 2; If multiplier = 1, buying_power = cash|
|cash|string|false|none|Cash Balance<br>|
|created_at|string(date-time)|false|none|Timestamp this account was created at<br>|
|crypto_status|[AccountStatus](#schemaaccountstatus)|false|none|An enum representing the various possible account status values.<br><br>Most likely, the account status is ACTIVE unless there is any problem. The account status may get in ACCOUNT_UPDATED when personal information is being updated from the dashboard, in which case you may not be allowed trading for a short period of time until the change is approved.<br><br>- ONBOARDING<br>  The account is onboarding.<br>- SUBMISSION_FAILED<br>  The account application submission failed for some reason.<br>- SUBMITTED<br>  The account application has been submitted for review.<br>- ACCOUNT_UPDATED<br>  The account information is being updated.<br>- APPROVAL_PENDING<br>  The final account approval is pending.<br>- ACTIVE<br>  The account is active for trading.<br>- REJECTED<br>  The account application has been rejected.|
|currency|string|false|none|USD<br>|
|equity|string|false|none|Cash + long_market_value + short_market_value|
|id|string(uuid)|true|none|Account Id.<br>|
|initial_margin|string|false|none|Reg T initial margin requirement (continuously updated value)|
|intraday_adjustments|string|false|none|The intraday adjustment by non_trade_activities such as fund deposit/withdraw.<br>|
|last_equity|string|false|none|Equity as of previous trading day at 16:00:00 ET|
|last_maintenance_margin|string|false|none|Your maintenance margin requirement on the previous trading day|
|long_market_value|string|false|none|Real-time MtM value of all long positions held in the account<br>|
|maintenance_margin|string|false|none|Maintenance margin requirement (continuously updated value)|
|multiplier|string|false|none|Buying power multiplier that represents account margin classification; valid values 1 (standard limited margin account with 1x buying power), 2 (reg T margin account with 2x intraday and overnight buying power; this is the default for all non-PDT accounts with $2,000 or more equity), 4 (PDT account with 4x intraday buying power and 2x reg T overnight buying power)|
|non_marginable_buying_power|string|false|none|Current available non-margin dollar buying power|
|options_approved_level|integer|false|none|The options trading level that was approved for this account.<br>0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.<br>|
|options_buying_power|string|false|none|Your buying power for options trading<br>|
|options_trading_level|integer|false|none|The effective options trading level of the account.<br>This is the minimum between account options_approved_level and account configurations max_options_trading_level.<br>0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.<br>|
|pending_reg_taf_fees|string|false|none|Pending regulatory fees for the account.<br>|
|pending_transfer_in|string|false|none|Cash pending transfer in.|
|pending_transfer_out|string|false|none|Cash pending transfer out.|
|portfolio_value|string|false|none|Total value of cash + holding positions (This field is deprecated. It is equivalent to the equity field.)|
|regt_buying_power|string|false|none|Your buying power under Regulation T (your excess equity - equity minus margin value - times your margin multiplier)<br>|
|short_market_value|string|false|none|Real-time MtM value of all short positions held in the account|
|shorting_enabled|boolean|false|none|Flag to denote whether or not the account is permitted to short|
|sma|string|false|none|Value of special memorandum account (will be used at a later date to provide additional buying_power)|
|status|[AccountStatus](#schemaaccountstatus)|true|none|An enum representing the various possible account status values.<br><br>Most likely, the account status is ACTIVE unless there is any problem. The account status may get in ACCOUNT_UPDATED when personal information is being updated from the dashboard, in which case you may not be allowed trading for a short period of time until the change is approved.<br><br>- ONBOARDING<br>  The account is onboarding.<br>- SUBMISSION_FAILED<br>  The account application submission failed for some reason.<br>- SUBMITTED<br>  The account application has been submitted for review.<br>- ACCOUNT_UPDATED<br>  The account information is being updated.<br>- APPROVAL_PENDING<br>  The final account approval is pending.<br>- ACTIVE<br>  The account is active for trading.<br>- REJECTED<br>  The account application has been rejected.|
|trade_suspended_by_user|boolean|false|none|User setting. If true, the account is not allowed to place orders.|
|trading_blocked|boolean|false|none|If true, the account is not allowed to place orders.<br>|
|transfers_blocked|boolean|false|none|If true, the account is not allowed to request money transfers.|

#### Enumerated Values

|Property|Value|
|---|---|
|crypto_status|INACTIVE|
|crypto_status|PAPER_ONLY|
|crypto_status|ONBOARDING|
|crypto_status|SUBMISSION_FAILED|
|crypto_status|SUBMITTED|
|crypto_status|ACCOUNT_UPDATED|
|crypto_status|APPROVAL_PENDING|
|crypto_status|ACTIVE|
|crypto_status|REJECTED|
|crypto_status|ACCOUNT_CLOSED|
|crypto_status|APPROVED|
|crypto_status|ACCOUNT_CLOSED_PENDING|
|crypto_status|ACTION_REQUIRED|
|crypto_status|LIMITED|
|options_approved_level|0|
|options_approved_level|1|
|options_approved_level|2|
|options_approved_level|3|
|options_trading_level|0|
|options_trading_level|1|
|options_trading_level|2|
|options_trading_level|3|
|status|INACTIVE|
|status|PAPER_ONLY|
|status|ONBOARDING|
|status|SUBMISSION_FAILED|
|status|SUBMITTED|
|status|ACCOUNT_UPDATED|
|status|APPROVAL_PENDING|
|status|ACTIVE|
|status|REJECTED|
|status|ACCOUNT_CLOSED|
|status|APPROVED|
|status|ACCOUNT_CLOSED_PENDING|
|status|ACTION_REQUIRED|
|status|LIMITED|

<h2 id="tocS_AccountConfigurations">AccountConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaaccountconfigurations"></a>
<a id="schema_AccountConfigurations"></a>
<a id="tocSaccountconfigurations"></a>
<a id="tocsaccountconfigurations"></a>

```json
{
  "disable_overnight_trading": false,
  "fractional_trading": true,
  "max_margin_multiplier": "4",
  "no_shorting": false,
  "suspend_trade": false,
  "trade_confirm_email": "all"
}
```

The account configuration API provides custom configurations about your trading account settings. These configurations control various allow you to modify settings to suit your trading needs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable_overnight_trading|boolean|false|none|If true, overnight trading is disabled.|
|fractional_trading|boolean|false|none|If true, account is able to participate in fractional trading|
|max_margin_multiplier|string|false|none|Can be "1", "2", or "4"|
|max_options_trading_level|integer|false|none|The desired maximum options trading level. 0=disabled, 1=Covered Call/Cash-Secured Put, 2=Long Call/Put, 3=Spreads/Straddles.|
|no_shorting|boolean|false|none|If true, account becomes long-only mode.|
|ptp_no_exception_entry|boolean|false|none|If set to true then Alpaca will accept orders for PTP symbols with no exception. Default is false.|
|suspend_trade|boolean|false|none|If true, new orders are blocked.|
|trade_confirm_email|string|false|none|all or none. If none, emails for order fills are not sent.|

#### Enumerated Values

|Property|Value|
|---|---|
|max_options_trading_level|0|
|max_options_trading_level|1|
|max_options_trading_level|2|
|max_options_trading_level|3|

<h2 id="tocS_AccountStatus">AccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_AccountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
"ACTIVE"
```

An enum representing the various possible account status values.

Most likely, the account status is ACTIVE unless there is any problem. The account status may get in ACCOUNT_UPDATED when personal information is being updated from the dashboard, in which case you may not be allowed trading for a short period of time until the change is approved.

- ONBOARDING
  The account is onboarding.
- SUBMISSION_FAILED
  The account application submission failed for some reason.
- SUBMITTED
  The account application has been submitted for review.
- ACCOUNT_UPDATED
  The account information is being updated.
- APPROVAL_PENDING
  The final account approval is pending.
- ACTIVE
  The account is active for trading.
- REJECTED
  The account application has been rejected.

<h2 id="tocS_ActivityEventV2">ActivityEventV2</h2>
<!-- backwards compatibility -->
<a id="schemaactivityeventv2"></a>
<a id="schema_ActivityEventV2"></a>
<a id="tocSactivityeventv2"></a>
<a id="tocsactivityeventv2"></a>

```json
{
  "activity_subtype": "string",
  "activity_type": "string",
  "asset": {
    "cusip": "037833100",
    "id": "790f3f26-4e7c-4f46-93f4-0425a28873da",
    "symbol": "AAPL"
  },
  "at": "1970-01-01T00:00:00Z",
  "currency": "string",
  "event_id": "string",
  "executed_at": "1970-01-01T00:00:00Z",
  "net_amount": "string",
  "previous_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "price": "string",
  "qty": "string",
  "ref_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "settle_date": "1970-01-01",
  "status": "string",
  "swap_fee_bps": "string",
  "swap_rate": "string",
  "details": {
    "asset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "client_order_id": "string",
    "commission": "string",
    "cum_qty": "string",
    "cusip": "string",
    "execution_type": "fill",
    "leaves_qty": "string",
    "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "order_status": "string",
    "settlement_currency": "string",
    "side": "buy",
    "symbol": "string"
  }
}
```

Represents an account activity, sent over the Event Streaming API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_subtype|string|false|none|Sub category for activity type, if any|
|activity_type|string|true|none|The type of the activity, which can be trade or any of the non trade activities|
|asset|[ActivityEventV2Asset](#schemaactivityeventv2asset)|false|none|Instrument for `qty`. For options, the contract. Omitted when `qty` is missing or zero, when no identifier is known, and on activities recorded before this field was introduced.|
|at|string(date-time)|true|none|Timestamp of event|
|currency|string|true|none|Currency code in ISO format|
|event_id|string(ulid)|true|none|Lexically sortable, monotonically increasing character string|
|executed_at|string(date-time)|true|none|Execution time for the activity event|
|net_amount|string(decimal)|false|none|The net amount of money (positive or negative) associated with the activity|
|previous_id|string(uuid)|false|none|Previous ID is presented if this activity corrects or cancels a previous trade or non trade activity. It contains execution_id or trns_id respectively|
|price|string(decimal)|false|none|The price of the security involved with the activity|
|qty|string(decimal)|false|none|The quantity of the security involved with the activity|
|ref_id|string(uuid)|true|none|The unique identifier for the activity. For trades, the execution_id is used, for other activities the trns_id is used.|
|settle_date|string(date)|true|none|Date when the activity settled|
|status|string|true|none|Status of the activity|
|swap_fee_bps|string(decimal)|false|none|Currency conversion fee in basis points charged to the customer on a trade activity. Sent when the order has a fee, including zero. Omitted on other activities.|
|swap_rate|string(decimal)|false|none|Exchange rate from the execution on a trade activity. Sent when the execution has a rate, including zero. Omitted on other activities.|
|details|[ActivityV2DetailTRD](#schemaactivityv2detailtrd) \| [ActivityV2DetailNTA](#schemaactivityv2detailnta)|true|none|none|

<h2 id="tocS_ActivityEventV2Asset">ActivityEventV2Asset</h2>
<!-- backwards compatibility -->
<a id="schemaactivityeventv2asset"></a>
<a id="schema_ActivityEventV2Asset"></a>
<a id="tocSactivityeventv2asset"></a>
<a id="tocsactivityeventv2asset"></a>

```json
{
  "cusip": "037833100",
  "id": "790f3f26-4e7c-4f46-93f4-0425a28873da",
  "symbol": "AAPL"
}
```

Instrument for `qty`. For options, the contract. Omitted when `qty` is missing or zero, when no identifier is known, and on activities recorded before this field was introduced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cusip|string|false|none|CUSIP. Only present for US assets when permitted by licensing.|
|id|string(uuid)|false|none|Asset ID. For options, the contract ID. Only present when `activity_type` is `TRD`.|
|isin|string|false|none|ISIN. Only present when `activity_type` is `TRD`, and when permitted by licensing.|
|symbol|string|false|none|Symbol. For options, the contract symbol.|

<h2 id="tocS_ActivityEventV2CommonFields">ActivityEventV2CommonFields</h2>
<!-- backwards compatibility -->
<a id="schemaactivityeventv2commonfields"></a>
<a id="schema_ActivityEventV2CommonFields"></a>
<a id="tocSactivityeventv2commonfields"></a>
<a id="tocsactivityeventv2commonfields"></a>

```json
{
  "activity_subtype": "string",
  "activity_type": "string",
  "asset": {
    "cusip": "037833100",
    "id": "790f3f26-4e7c-4f46-93f4-0425a28873da",
    "symbol": "AAPL"
  },
  "at": "1970-01-01T00:00:00Z",
  "currency": "string",
  "event_id": "string",
  "executed_at": "1970-01-01T00:00:00Z",
  "net_amount": "string",
  "previous_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "price": "string",
  "qty": "string",
  "ref_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "settle_date": "1970-01-01",
  "status": "string",
  "swap_fee_bps": "string",
  "swap_rate": "string"
}
```

Represents the common fields for all Activity V2 Events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_subtype|string|false|none|Sub category for activity type, if any|
|activity_type|string|true|none|The type of the activity, which can be trade or any of the non trade activities|
|asset|[ActivityEventV2Asset](#schemaactivityeventv2asset)|false|none|Instrument for `qty`. For options, the contract. Omitted when `qty` is missing or zero, when no identifier is known, and on activities recorded before this field was introduced.|
|at|string(date-time)|true|none|Timestamp of event|
|currency|string|true|none|Currency code in ISO format|
|event_id|string(ulid)|true|none|Lexically sortable, monotonically increasing character string|
|executed_at|string(date-time)|true|none|Execution time for the activity event|
|net_amount|string(decimal)|false|none|The net amount of money (positive or negative) associated with the activity|
|previous_id|string(uuid)|false|none|Previous ID is presented if this activity corrects or cancels a previous trade or non trade activity. It contains execution_id or trns_id respectively|
|price|string(decimal)|false|none|The price of the security involved with the activity|
|qty|string(decimal)|false|none|The quantity of the security involved with the activity|
|ref_id|string(uuid)|true|none|The unique identifier for the activity. For trades, the execution_id is used, for other activities the trns_id is used.|
|settle_date|string(date)|true|none|Date when the activity settled|
|status|string|true|none|Status of the activity|
|swap_fee_bps|string(decimal)|false|none|Currency conversion fee in basis points charged to the customer on a trade activity. Sent when the order has a fee, including zero. Omitted on other activities.|
|swap_rate|string(decimal)|false|none|Exchange rate from the execution on a trade activity. Sent when the execution has a rate, including zero. Omitted on other activities.|

<h2 id="tocS_ActivitySubType">ActivitySubType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitysubtype"></a>
<a id="schema_ActivitySubType"></a>
<a id="tocSactivitysubtype"></a>
<a id="tocsactivitysubtype"></a>

```json
"string"
```

Represents a more specific classification to the `activity_type`.
This field is optional and may not always be populated, depending on the activity type and the available data.
Each `activity_type` has a set of valid `activity_sub_type` values.

Full mapping of `activity_type` to `activity_sub_type`:

- **CGD**: Capital Gains Distribution activity sub-types:
  - **LTCG**: Long-Term Capital Gain
  - **STCG**: Short-Term Capital Gain

- **DIV**: Dividend activity sub-types:
  - **CDIV**: Cash Dividend
  - **ROC**: Return of Capital
  - **SDIV**: Stock Dividend
  - **SPD**: Substitute Payment In Lieu Of Dividend

- **FEE**: Fee-related activity sub-types:
  - **REG**: Regulatory Fee
  - **TAF**: Trading Activity Fee
  - **LCT**: Local Currency Trading Fee
  - **ORF**: Options Regulatory Fee
  - **OCC**: Options Clearing Corporation Fee
  - **NRC**: Non-Retail Commission Fee
  - **NRV**: Non-Retail Venue Fee
  - **COM**: Commission
  - **CAT**: Consolidated Audit Trail Fee

- **INT**: Interest-related activity sub-types:
  - **MGN**: Margin Interest
  - **CDT**: Credit Interest
  - **SWP**: Sweep Interest
  - **QII**: Qualified Interest
  - **FI**: Fixed Income Interest (coupon or accrued)

- **MA**: Merger and Acquisition activity sub-types:
  - **CMA**: Cash Merger
  - **SMA**: Stock Merger
  - **SCMA**: Stock & Cash Merger

- **NC**: Name Change activity sub types
  - **SNC**: Symbol Name Change
  - **CNC**: CUSIP Name Change
  - **SCNC**: Symbol & CUSIP Name Change

- **OPCA**: Option Corporate Action activity sub-types:
  - **DIV.CDIV**: Cash Dividend
  - **DIV.ROC**: Return of Capital
  - **DIV.SDIV**: Stock Dividend
  - **MA.CMA**: Cash Merger
  - **MA.SMA**: Stock Merger
  - **MA.SCMA**: Stock & Cash Merger
  - **NC.CNC**: CUSIP Name Change
  - **NC.SNC**: Symbol Name Change
  - **NC.SCNC**: Symbol & CUSIP Name Change
  - **SPIN**: Spin-off
  - **SPLIT.FSPLIT**: Forward Stock Split
  - **SPLIT.RSPLIT**: Reverse Stock Split
  - **SPLIT.USPLIT**: Unit Split

- **REO**: Reorganization activity sub-types
  - **REOS**: Stock only (1 or more stock legs)
  - **REOC**: Cash only (1 cash leg)
  - **REOSC**: Stock and cash

- **REORG**: Activity sub-types:
  - **WRM**: Worthless Removal

- **SPLIT**: Stock Split activity sub-types:
  - **FSPLIT**: Forward Stock Split
  - **RSPLIT**: Reverse Stock Split
  - **USPLIT**: Unit Split

- **VOF**: Voluntary Offering activity sub-types:
  - **VTND**: Tender Offer
  - **VWRT**: Warrant Exercise
  - **VRGT**: Rights Offer
  - **VEXH**: Exchange Offer

- **WH**: Withholding activity sub-types:
  - **SWH**: State Withholding
  - **FWH**: Federal Withholding
  - **SLWH**: Sales Withholding

<h2 id="tocS_ActivityType">ActivityType</h2>
<!-- backwards compatibility -->
<a id="schemaactivitytype"></a>
<a id="schema_ActivityType"></a>
<a id="tocSactivitytype"></a>
<a id="tocsactivitytype"></a>

```json
"FILL"
```

- FILL
  Order fills (both partial and full fills)

- TRANS
  Cash transactions (both CSD and CSW)

- MISC
  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)

- ACATC
  ACATS IN/OUT (Cash)

- ACATS
  ACATS IN/OUT (Securities)

- CFEE
  Crypto fee

- CGD
  Capital gains distribution

- CSD
  Cash deposit(+)

- CSW
  Cash withdrawal(-)

- DIV
  Dividends

- DIVCGL
  Dividend (capital gains long term)

- DIVCGS
  Dividend (capital gains short term)

- DIVFEE
  Dividend fee

- DIVFT
  Dividend adjusted (Foreign Tax Withheld)

- DIVNRA
  Dividend adjusted (NRA Withheld)

- DIVROC
  Dividend return of capital

- DIVTW
  Dividend adjusted (Tefra Withheld)

- DIVTXEX
  Dividend (tax exempt)

- FEE
  Fee denominated in USD

- INT
  Interest (credit/margin)

- INTNRA
  Interest adjusted (NRA Withheld)

- INTTW
  Interest adjusted (Tefra Withheld)

- JNL
  Journal entry

- JNLC
  Journal entry (cash)

- JNLS
  Journal entry (stock)

- MA
  Merger/Acquisition

- NC
  Name change

- OPASN
  Option assignment

- OPCA
  Option corporate action

- OPCSH
  Option cash deliverable for non-standard contracts

- OPEXC
  Option exercise

- OPEXP
  Option expiration

- OPTRD
  Option trade

- PTC
  Pass Thru Charge

- PTR
  Pass Thru Rebate

- REO
  Reorganization

- REORG
  Worthless removal CA

- SPIN
  Stock spinoff

- SPLIT
  Stock split

- FOPT
  Free of Payment Transfers

- OCT
  On chain transactions (blockchain deposits/withdrawals)

<h2 id="tocS_ActivityV2DetailNTA">ActivityV2DetailNTA</h2>
<!-- backwards compatibility -->
<a id="schemaactivityv2detailnta"></a>
<a id="schema_ActivityV2DetailNTA"></a>
<a id="tocSactivityv2detailnta"></a>
<a id="tocsactivityv2detailnta"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cash_payout": "string",
  "cusip": "string",
  "due_bill_off_date": "1970-01-01",
  "due_bill_on_date": "1970-01-01",
  "entitled_qty": "string",
  "ex_date": "1970-01-01",
  "foreign": "false",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "special": "false",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DIVSPDActivityV2](#schemadivspdactivityv2)|false|none|Substitute payment in lieu of dividend|
|*oneOf*|[CDIVActivityV2](#schemacdivactivityv2)|false|none|Cash-dividend related details. Used for both Cash Dividend and Return of Capital.|
|*oneOf*|[SDIVActivityV2](#schemasdivactivityv2)|false|none|Stock dividend|
|*oneOf*|[CGDActivityV2](#schemacgdactivityv2)|false|none|Capital gains distribution. Used for both Long-Term (LTCG) and Short-Term (STCG) sub-types. Each activity represents a single leg; `long_term_rate` and/or `short_term_rate` are populated based on the source event, and `rate` matches the leg's own rate.|
|*oneOf*|[ForwardSplitActivityV2](#schemaforwardsplitactivityv2)|false|none|Forward stock split|
|*oneOf*|[ReverseSplitActivityV2](#schemareversesplitactivityv2)|false|none|Reverse stock split|
|*oneOf*|[UnitSplitActivityV2](#schemaunitsplitactivityv2)|false|none|Unit split|
|*oneOf*|[SpinoffActivityV2](#schemaspinoffactivityv2)|false|none|Spinoff|
|*oneOf*|[MAActivityV2](#schemamaactivityv2)|false|none|Merger and acquisition|
|*oneOf*|[NCActivityV2](#schemancactivityv2)|false|none|Name change|
|*oneOf*|[FixedIncomeRedemptionActivityV2](#schemafixedincomeredemptionactivityv2)|false|none|Redemption|
|*oneOf*|[FixedIncomeInterestActivityV2](#schemafixedincomeinterestactivityv2)|false|none|Fixed income interest (INT/FI)|
|*oneOf*|[REOActivityV2](#schemareoactivityv2)|false|none|Reorganization (REO)|
|*oneOf*|[RightsDistributionActivityV2](#schemarightsdistributionactivityv2)|false|none|Rights distribution|
|*oneOf*|[RightsSubscriptionElectionActivityV2](#schemarightssubscriptionelectionactivityv2)|false|none|none|
|*oneOf*|[TenderOfferActivityV2](#schematenderofferactivityv2)|false|none|none|
|*oneOf*|[ExchangeOfferActivityV2](#schemaexchangeofferactivityv2)|false|none|none|
|*oneOf*|[WarrantExerciseElectionActivityV2](#schemawarrantexerciseelectionactivityv2)|false|none|none|
|*oneOf*|[WRMActivityV2](#schemawrmactivityv2)|false|none|Worthless Removal|
|*oneOf*|[OpcaCDIVActivityV2](#schemaopcacdivactivityv2)|false|none|Options corporate action of cash dividend or return of capital|
|*oneOf*|[OpcaSDIVActivityV2](#schemaopcasdivactivityv2)|false|none|Options corporate action of stock dividend|
|*oneOf*|[OpcaMAActivityV2](#schemaopcamaactivityv2)|false|none|Options corporate action of Mergers & Acquisitions|
|*oneOf*|[OpcaNCActivityV2](#schemaopcancactivityv2)|false|none|Options corporate action of name changes|
|*oneOf*|[OpcaSPINActivityV2](#schemaopcaspinactivityv2)|false|none|Options corporate action of spin-offs|
|*oneOf*|[OpcaFSPLITActivityV2](#schemaopcafsplitactivityv2)|false|none|Options corporate action of forward-splits|
|*oneOf*|[OpcaUSPLITActivityV2](#schemaopcausplitactivityv2)|false|none|Options corporate action of unit-splits|
|*oneOf*|[OpcaRSPLITActivityV2](#schemaopcarsplitactivityv2)|false|none|Options corporate action of reverse-splits|
|*oneOf*|[OPASNActivityV2](#schemaopasnactivityv2)|false|none|Option assignment|
|*oneOf*|[OPEXCActivityV2](#schemaopexcactivityv2)|false|none|Option exercise|
|*oneOf*|[OPEXPActivityV2](#schemaopexpactivityv2)|false|none|Option expiry|
|*oneOf*|[OPTRDActivityV2](#schemaoptrdactivityv2)|false|none|Trading activity that is paired with the assignment/exercise|
|*oneOf*|[OPCSHActivityV2](#schemaopcshactivityv2)|false|none|Option cash deliverable for non-standard contracts|
|*oneOf*|[AcatsActivityV2](#schemaacatsactivityv2)|false|none|Automated customer account transfer service (stock)|
|*oneOf*|[AcatcActivityV2](#schemaacatcactivityv2)|false|none|Automated customer account transfer service (cash)|
|*oneOf*|[FOPTActivityV2](#schemafoptactivityv2)|false|none|Free-of-payment (FOP) transfers|
|*oneOf*|[DIVNRAActivityV2](#schemadivnraactivityv2)|false|none|Dividend withholding for non resident aliens|
|*oneOf*|[DIVWHActivityV2](#schemadivwhactivityv2)|false|none|Dividend tax withholding (e.g. foreign withholding on global securities)|
|*oneOf*|[JNLSActivityV2](#schemajnlsactivityv2)|false|none|Journal entry (stock)|
|*oneOf*|[JNLCActivityV2](#schemajnlcactivityv2)|false|none|Journal entry (cash)|
|*oneOf*|[CSWActivityV2](#schemacswactivityv2)|false|none|Cash withdrawal|
|*oneOf*|[FEEActivityV2](#schemafeeactivityv2)|false|none|Fee|
|*oneOf*|[MEMActivityV2](#schemamemactivityv2)|false|none|Instant funding memopost|
|*oneOf*|[OCTActivityV2](#schemaoctactivityv2)|false|none|On chain transaction (blockchain deposit/withdrawal)|
|*oneOf*|[FXTRDActivityV2](#schemafxtrdactivityv2)|false|none|Currency conversion.|

<h2 id="tocS_ActivityV2DetailTRD">ActivityV2DetailTRD</h2>
<!-- backwards compatibility -->
<a id="schemaactivityv2detailtrd"></a>
<a id="schema_ActivityV2DetailTRD"></a>
<a id="tocSactivityv2detailtrd"></a>
<a id="tocsactivityv2detailtrd"></a>

```json
{
  "asset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "client_order_id": "string",
  "commission": "string",
  "cum_qty": "string",
  "cusip": "string",
  "execution_type": "fill",
  "leaves_qty": "string",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_status": "string",
  "settlement_currency": "string",
  "side": "buy",
  "symbol": "string"
}
```

Activity details for a fill or partial_fill event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string(uuid)|true|none|Asset ID (For options this represents the option contract ID)|
|client_order_id|string|false|none|Order ID provided by the customer|
|commission|string(decimal)|false|none|Commission to collect from the account holder|
|cum_qty|string(decimal)|true|none|Total filled quantity on the order|
|cusip|string|false|none|CUSIP of the security involved with the activity|
|execution_type|string|true|none|The execution type|
|leaves_qty|string(decimal)|true|none|Unfilled quantity on the order, when order is filled value could be 0|
|order_id|string(uuid)|true|none|Order ID generated by Alpaca|
|order_status|string|true|none|Identifies the current status of the order|
|settlement_currency|string|false|none|Settlement currency of the order. Omitted when the order has none.|
|side|string|true|none|Represents what side of the transaction an order was on|
|symbol|string|true|none|The symbol of the security involved with the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|execution_type|fill|
|execution_type|trade_correct|
|execution_type|trade_bust|
|side|buy|
|side|sell|

<h2 id="tocS_AddAssetToWatchlistRequest">AddAssetToWatchlistRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddassettowatchlistrequest"></a>
<a id="schema_AddAssetToWatchlistRequest"></a>
<a id="tocSaddassettowatchlistrequest"></a>
<a id="tocsaddassettowatchlistrequest"></a>

```json
{
  "symbol": "AAPL"
}
```

Request format used for appending an asset to an existing watchlist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|false|none|the symbol name to add to the watchlist|

<h2 id="tocS_AdvancedInstructions">AdvancedInstructions</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedinstructions"></a>
<a id="schema_AdvancedInstructions"></a>
<a id="tocSadvancedinstructions"></a>
<a id="tocsadvancedinstructions"></a>

```json
{
  "algorithm": "DMA",
  "destination": "NYSE",
  "display_qty": "100"
}
```

Advanced instructions for Elite Smart Router: https://docs.alpaca.markets/docs/alpaca-elite-smart-router

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|The advanced routing algorithm to use for the order|
|destination|string|false|none|Target exchange for order execution|
|display_qty|string(decimal)|false|none|Maximum shares/contracts displayed on the exchange at any time. Must be in round lot increments|
|end_time|string(date-time)|false|none|When the algorithm is to be done executing. Must be within current market trading hours|
|max_percentage|string(decimal)|false|none|Maximum percentage of the ticker's period volume this order might participate in. Must be 0 < max_percentage < 1, with up to 3 decimal points precision.|
|start_time|string(date-time)|false|none|When the algorithm is to start executing. Must be within current market trading hours|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|DMA|
|algorithm|TWAP|
|algorithm|VWAP|
|destination|NYSE|
|destination|NASDAQ|
|destination|ARCA|
|destination|IEX|
|destination|MEMX|

<h2 id="tocS_AssetAttribute">AssetAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaassetattribute"></a>
<a id="schema_AssetAttribute"></a>
<a id="tocSassetattribute"></a>
<a id="tocsassetattribute"></a>

```json
"ptp_no_exception"
```

Unique characteristic of an asset. Supported values:
- `ptp_no_exception`: Asset is a Publicly Traded Partnership (PTP) without a qualified notice; non-U.S. customers may incur 10% withholding on gross proceeds as per IRS guidance, and are blocked from being purchased by default.
- `ptp_with_exception`: Users can open positions in these PTPs without general restrictions.
- `ipo`: Accepting limit orders only before the stock begins trading on the secondary market.
- `has_options`: The underlying equity has listed options available on the platform. Note: if the equity had inactive/expired contracts in the past, this will still show up.
- `options_late_close`: Indicates the underlying asset's options contracts close at 4:15pm ET instead of the standard 4:00pm ET.
- `fractional_eh_enabled`: Indicates the asset accepts fractional orders during extended hours sessions (pre-market, post-market, and overnight if enabled).
- `overnight_tradable`: Asset is eligible for overnight (24x5) trading in supported venues on the platform.
- `overnight_halted`: Asset is eligible for overnight trading but is currently halted/blocked for overnight sessions due to risk, corporate action, compliance, or venue constraints.

<h2 id="tocS_AssetClass">AssetClass</h2>
<!-- backwards compatibility -->
<a id="schemaassetclass"></a>
<a id="schema_AssetClass"></a>
<a id="tocSassetclass"></a>
<a id="tocsassetclass"></a>

```json
"us_equity"
```

This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest/orders. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.

<h2 id="tocS_Assets">Assets</h2>
<!-- backwards compatibility -->
<a id="schemaassets"></a>
<a id="schema_Assets"></a>
<a id="tocSassets"></a>
<a id="tocsassets"></a>

```json
{
  "borrow_status": "easy_to_borrow",
  "class": "us_equity",
  "easy_to_borrow": true,
  "exchange": "NASDAQ",
  "fractionable": true,
  "id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "marginable": true,
  "name": "Apple Inc. Common Stock",
  "shortable": true,
  "status": "active",
  "symbol": "AAPL",
  "tradable": true
}
```

The assets API serves as the master list of assets available for trade and data consumption from Alpaca. Assets are sorted by asset class, exchange and symbol. Some assets are only available for data consumption via Polygon, and are not tradable with Alpaca. These assets will be marked with the flag tradable=false.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[AssetAttribute](#schemaassetattribute)]|false|none|none|
|borrow_status|string|false|none|Borrow status for US equity assets. This field is omitted for non-US-equity assets.|
|class|[AssetClass](#schemaassetclass)|true|none|This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest/orders. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.|
|cusip|string \| null|false|none|The CUSIP identifier for the asset (US Equities only).<br>To request a specific CUSIP, please reach out to Alpaca support.<br>|
|exchange|[Exchange](#schemaexchange)|true|none|Represents the current exchanges Alpaca supports. List is currently:<br><br>US equities:<br>- AMEX<br>- ARCA<br>- BATS<br>- NYSE<br>- NASDAQ<br>- NYSEARCA<br>- OTC<br>- TXSE<br><br>Crypto:<br>- CRYPTO<br>- ERSX<br>- CRXL<br><br>Crypto perpetuals:<br>- ASCX<br><br>Index symbols:<br>- INDEX<br><br>INDEX is the artificial exchange for index symbols such as SPX.|
|fractionable|boolean|true|none|Asset is fractionable or not|
|id|string(uuid)|true|none|Asset ID|
|maintenance_margin_requirement|number|false|none|**Deprecated.** **deprecated**: Please use margin_requirement_long or margin_requirement_short instead. Note that these fields are of type string.<br>Shows the margin requirement percentage for the asset (equities only).<br>|
|margin_requirement_long|string(decimal)|false|none|The margin requirement percentage for the asset's long positions (equities only), encoded as a decimal string.|
|margin_requirement_short|string(decimal)|false|none|The margin requirement percentage for the asset's short positions (equities only), encoded as a decimal string.|
|marginable|boolean|true|none|Asset is marginable or not|
|min_order_size|string(decimal)|false|none|Minimum order size. Field available for crypto only.|
|min_trade_increment|string(decimal)|false|none|Amount a trade quantity can be incremented by. Field available for crypto only.|
|name|string|true|none|The official name of the asset|
|price_increment|string(decimal)|false|none|Amount the price can be incremented by. Field available for crypto only.|
|shortable|boolean|true|none|Asset is shortable or not|
|status|string|true|none|active or inactive|
|symbol|string|true|none|The symbol of the asset|
|tradable|boolean|true|none|Asset is tradable on Alpaca or not|

#### Enumerated Values

|Property|Value|
|---|---|
|attributes|ptp_no_exception|
|attributes|ptp_with_exception|
|attributes|ipo|
|attributes|has_options|
|attributes|options_late_close|
|attributes|fractional_eh_enabled|
|attributes|overnight_tradable|
|attributes|overnight_halted|
|borrow_status|easy_to_borrow|
|borrow_status|hard_to_borrow|
|class|us_equity|
|class|us_option|
|class|crypto|
|class|crypto_perp|
|class|treasury|
|class|corporate|
|class|global_equity|
|class|us_index|
|class|us_equity_chain|
|class|ipo|
|exchange|AMEX|
|exchange|ARCA|
|exchange|BATS|
|exchange|NYSE|
|exchange|NASDAQ|
|exchange|NYSEARCA|
|exchange|OTC|
|exchange|CRYPTO|
|exchange|TXSE|
|exchange|ERSX|
|exchange|CRXL|
|exchange|ASCX|
|exchange|INDEX|
|status|active|
|status|inactive|

<h2 id="tocS_CDIVActivityV2">CDIVActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacdivactivityv2"></a>
<a id="schema_CDIVActivityV2"></a>
<a id="tocScdivactivityv2"></a>
<a id="tocscdivactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cusip": "string",
  "due_bill_off_date": "1970-01-01",
  "due_bill_on_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "foreign": "false",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "special": "false",
  "symbol": "string",
  "cash_payout": "string",
  "entitled_qty": "string"
}
```

Cash-dividend related details. Used for both Cash Dividend and Return of Capital.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|due_bill_off_date|string(date)|false|none|When due bills stop applying for this event|
|due_bill_on_date|string(date)|false|none|When due bills begin to apply for this event|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|foreign|string|true|none|Indicates if related to a non-US security. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Dividend rate per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|special|string|true|none|Indicates if this is a special dividend. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|symbol|string|true|none|The symbol of the security involved with the activity|
|cash_payout|string|true|none|Total cash amount paid|
|entitled_qty|string|true|none|Quantity of shares entitled to receive the dividend or return of capital|

#### Enumerated Values

|Property|Value|
|---|---|
|foreign|true|
|foreign|false|
|special|true|
|special|false|

<h2 id="tocS_CGDActivityV2">CGDActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacgdactivityv2"></a>
<a id="schema_CGDActivityV2"></a>
<a id="tocScgdactivityv2"></a>
<a id="tocscgdactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cash_payout": "string",
  "cusip": "string",
  "entitled_qty": "string",
  "ex_date": "1970-01-01",
  "isin": "string",
  "long_term_rate": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "short_term_rate": "string",
  "symbol": "string"
}
```

Capital gains distribution. Used for both Long-Term (LTCG) and Short-Term (STCG) sub-types. Each activity represents a single leg; `long_term_rate` and/or `short_term_rate` are populated based on the source event, and `rate` matches the leg's own rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|cash_payout|string|true|none|Cash amount paid for this leg|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|entitled_qty|string|true|none|Quantity of shares entitled to receive the capital gains distribution|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|isin|string|false|none|The ISIN of the security involved with the activity|
|long_term_rate|string|false|none|Long-term capital gains distribution rate per share, when applicable|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Distribution rate per share for this leg (LTCG or STCG)|
|record_date|string(date)|false|none|The record_date for this corporate action|
|short_term_rate|string|false|none|Short-term capital gains distribution rate per share, when applicable|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_CSWActivityV2">CSWActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacswactivityv2"></a>
<a id="schema_CSWActivityV2"></a>
<a id="tocScswactivityv2"></a>
<a id="tocscswactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "bank_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Cash withdrawal

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|bank_transaction_id|string(uuid)|false|none|The bank transaction's ID|

<h2 id="tocS_CanceledOrderResponse">CanceledOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceledorderresponse"></a>
<a id="schema_CanceledOrderResponse"></a>
<a id="tocScanceledorderresponse"></a>
<a id="tocscanceledorderresponse"></a>

```json
{
  "id": "d56ba3ea-6d04-48ce-8175-817e242ee608",
  "status": 200
}
```

Represents the result of a request to cancel and order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|orderId|
|status|integer|false|none|http response code|

<h2 id="tocS_CommonAcatActivityV2">CommonAcatActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonacatactivityv2"></a>
<a id="schema_CommonAcatActivityV2"></a>
<a id="tocScommonacatactivityv2"></a>
<a id="tocscommonacatactivityv2"></a>

```json
{
  "external_id": "string",
  "hold_date": "1970-01-01",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_id|string|true|none|The ID that DTCC assigned to this transfer|
|hold_date|string(date)|false|none|Hold date when the transfers settle|
|request_id|string(uuid)|true|none|The ID for original ACATS request|

<h2 id="tocS_CommonCDIVActivityV2">CommonCDIVActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommoncdivactivityv2"></a>
<a id="schema_CommonCDIVActivityV2"></a>
<a id="tocScommoncdivactivityv2"></a>
<a id="tocscommoncdivactivityv2"></a>

```json
{
  "cusip": "string",
  "due_bill_off_date": "1970-01-01",
  "due_bill_on_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "foreign": "false",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "special": "false",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|due_bill_off_date|string(date)|false|none|When due bills stop applying for this event|
|due_bill_on_date|string(date)|false|none|When due bills begin to apply for this event|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|foreign|string|true|none|Indicates if related to a non-US security. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Dividend rate per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|special|string|true|none|Indicates if this is a special dividend. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|symbol|string|true|none|The symbol of the security involved with the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|foreign|true|
|foreign|false|
|special|true|
|special|false|

<h2 id="tocS_CommonCaActivityV2">CommonCaActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommoncaactivityv2"></a>
<a id="schema_CommonCaActivityV2"></a>
<a id="tocScommoncaactivityv2"></a>
<a id="tocscommoncaactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|

<h2 id="tocS_CommonFixedIncomeInterestActivityV2">CommonFixedIncomeInterestActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonfixedincomeinterestactivityv2"></a>
<a id="schema_CommonFixedIncomeInterestActivityV2"></a>
<a id="tocScommonfixedincomeinterestactivityv2"></a>
<a id="tocscommonfixedincomeinterestactivityv2"></a>

```json
{
  "accrued_interest_rate": "string",
  "cash_payout": "string",
  "cusip": "string",
  "entitled_qty": "1000",
  "interest_type": "accrued",
  "isin": "string",
  "order_id": "257bf308-a6b7-4777-8cf6-00dc441dc4d3",
  "parent_id": "46aecae1-4629-4bcf-b441-0d8c847a1787",
  "payment_date": "1970-01-01",
  "price": "string",
  "rate": "string",
  "record_date": "1970-01-01"
}
```

Fixed income interest fields (INT/FI). Variants from the same activity type:

- Coupon: `interest_type` is `coupon`. Includes `rate` (no `price` / `accrued_interest_rate`). No `order_id`.
- Accrued interest on call: `interest_type` is `accrued`. Includes `price` and `accrued_interest_rate` (no `rate`). No `order_id`.
- Trade accrued: `interest_type` is `accrued`. Includes `order_id` so the interest NTA can be linked to the fill. `parent_id` is set when a parent trade `ref_id` is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accrued_interest_rate|string(decimal)|false|none|Accrued interest rate (present for accrued-interest-on-call variants)|
|cash_payout|string(decimal)|true|none|The cash payout for this interest activity|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|entitled_qty|string|true|none|The entitled quantity (principal / face amount)|
|interest_type|[FixedIncomeInterestType](#schemafixedincomeinteresttype)|true|none|Distinguishes coupon payments from accrued interest on INT/FI activities.|
|isin|string|false|none|The ISIN of the security involved with the activity|
|order_id|string(uuid)|false|none|The order that generated this accrued interest. Present for trade-accrued INT/FI.|
|parent_id|string(uuid)|false|none|The ref_id of the parent trade this interest is attached to. Present for trade-accrued INT/FI when a parent trade `ref_id` is available.|
|payment_date|string(date)|false|none|The payment date|
|price|string(decimal)|false|none|Call price used for accrued-interest-on-call variants|
|rate|string(decimal)|false|none|Coupon rate amount (present for regular coupon payments)|
|record_date|string(date)|false|none|The record date|

#### Enumerated Values

|Property|Value|
|---|---|
|interest_type|coupon|
|interest_type|accrued|

<h2 id="tocS_CommonJournalActivityV2">CommonJournalActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonjournalactivityv2"></a>
<a id="schema_CommonJournalActivityV2"></a>
<a id="tocScommonjournalactivityv2"></a>
<a id="tocscommonjournalactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "journal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Shared fields for journal non-trade activity records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|journal_id|string(uuid)|false|none|The journal's ID|

<h2 id="tocS_CommonMAActivityV2">CommonMAActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonmaactivityv2"></a>
<a id="schema_CommonMAActivityV2"></a>
<a id="tocScommonmaactivityv2"></a>
<a id="tocscommonmaactivityv2"></a>

```json
{
  "acquiree_cusip": "string",
  "acquiree_isin": "string",
  "acquiree_rate": "string",
  "acquiree_symbol": "string",
  "acquirer_cusip": "string",
  "acquirer_isin": "string",
  "acquirer_rate": "string",
  "acquirer_symbol": "string",
  "effective_date": "1970-01-01",
  "payable_date": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquiree_cusip|string|true|none|CUSIP of the acquiree|
|acquiree_isin|string|false|none|ISIN of the acquiree|
|acquiree_rate|string|false|none|Rate of the acquiree|
|acquiree_symbol|string|true|none|Symbol of the acquiree|
|acquirer_cusip|string|false|none|CUSIP of the acquirer|
|acquirer_isin|string|false|none|ISIN of the acquirer|
|acquirer_rate|string|false|none|Rate of the acquirer|
|acquirer_symbol|string|false|none|Symbol of the acquirer|
|effective_date|string(date)|true|none|When the merger/acquisition becomes effective|
|payable_date|string(date)|true|none|The payable date|

<h2 id="tocS_CommonNCActivityV2">CommonNCActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonncactivityv2"></a>
<a id="schema_CommonNCActivityV2"></a>
<a id="tocScommonncactivityv2"></a>
<a id="tocscommonncactivityv2"></a>

```json
{
  "new_cusip": "string",
  "new_symbol": "string",
  "old_cusip": "string",
  "old_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_cusip|string|true|none|New CUSIP for the name change|
|new_symbol|string|true|none|New symbol for the name change|
|old_cusip|string|true|none|Old CUSIP for the name change|
|old_symbol|string|true|none|Old symbol for the name change|

<h2 id="tocS_CommonNTAActivityV2">CommonNTAActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonntaactivityv2"></a>
<a id="schema_CommonNTAActivityV2"></a>
<a id="tocScommonntaactivityv2"></a>
<a id="tocscommonntaactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

Shared fields for non-trade (NTA) activity records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_CommonOPCAActivityV2">CommonOPCAActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonopcaactivityv2"></a>
<a id="schema_CommonOPCAActivityV2"></a>
<a id="tocScommonopcaactivityv2"></a>
<a id="tocscommonopcaactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|

<h2 id="tocS_CommonOptionsActivityV2">CommonOptionsActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonoptionsactivityv2"></a>
<a id="schema_CommonOptionsActivityV2"></a>
<a id="tocScommonoptionsactivityv2"></a>
<a id="tocscommonoptionsactivityv2"></a>

```json
{
  "contract_symbol": "string",
  "cusip": "string",
  "symbol": "string",
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract_symbol|string|false|none|The contract symbol of the security involved with the activity|
|cusip|string|false|none|The CUSIP of the security involved with the activity|
|symbol|string|false|none|The symbol of the security involved with the activity|
|group_id|string(uuid)|true|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_CommonREOActivityV2">CommonREOActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonreoactivityv2"></a>
<a id="schema_CommonREOActivityV2"></a>
<a id="tocScommonreoactivityv2"></a>
<a id="tocscommonreoactivityv2"></a>

```json
{
  "cash_payout": "string",
  "cash_rate": "string",
  "cusip": "string",
  "effective_date": "1970-01-01",
  "isin": "string",
  "new_rate": "string",
  "payable_date": "1970-01-01",
  "qty": "string",
  "removed_qty": "string",
  "source_cusip": "string",
  "source_isin": "string",
  "source_qty": "string",
  "source_rate": "string",
  "source_symbol": "CEPT",
  "symbol": "SECZ"
}
```

Reorganization (REO) activity sub-types:
- **REOS**: Stock only (1 or more stock legs)
- **REOC**: Cash only (one cash leg)
- **REOSC**: Stock and cash

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cash_payout|string(decimal)|false|none|Cash payout amount|
|cash_rate|string(decimal)|false|none|Cash rate per share|
|cusip|string|false|none|CUSIP received on this stock leg|
|effective_date|string(date)|false|none|Effective date of the reorganization|
|isin|string|false|none|ISIN received on this stock leg|
|new_rate|string(decimal)|false|none|New ratio for this stock leg|
|payable_date|string(date)|true|none|Payable date of the reorganization|
|qty|string(decimal)|false|none|Quantity received on this stock leg|
|removed_qty|string(decimal)|false|none|Positive quantity removed from the source position|
|source_cusip|string|true|none|CUSIP of the source security|
|source_isin|string|false|none|ISIN of the source security|
|source_qty|string(decimal)|false|none|Source position quantity|
|source_rate|string(decimal)|false|none|Source ratio for this stock leg|
|source_symbol|string|true|none|Symbol of the source security|
|symbol|string|false|none|Symbol received on this stock leg|

<h2 id="tocS_CommonSDIVActivityV2">CommonSDIVActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonsdivactivityv2"></a>
<a id="schema_CommonSDIVActivityV2"></a>
<a id="tocScommonsdivactivityv2"></a>
<a id="tocscommonsdivactivityv2"></a>

```json
{
  "cusip": "string",
  "ex_date": "1970-01-01",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Dividend rate per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_CommonSpinoffActivityV2">CommonSpinoffActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonspinoffactivityv2"></a>
<a id="schema_CommonSpinoffActivityV2"></a>
<a id="tocScommonspinoffactivityv2"></a>
<a id="tocscommonspinoffactivityv2"></a>

```json
{
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_price": "string",
  "new_rate": "string",
  "new_symbol": "string",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "source_cusip": "string",
  "source_isin": "string",
  "source_price": "string",
  "source_rate": "string",
  "source_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|due_bill_redemption_date|string(date)|false|none|When due bills related to the spinoff are redeemed|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|new_cusip|string|true|none|CUSIP of the new security|
|new_isin|string|false|none|ISIN of the new security|
|new_price|string|true|none|Market price of new shares after the spinoff|
|new_rate|string|true|none|Ratio of new shares received|
|new_symbol|string|true|none|Symbol of the new security|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|record_date|string(date)|false|none|The record_date for this corporate action|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_isin|string|false|none|ISIN of the parent security|
|source_price|string|true|none|Market price of parent shares before the spinoff|
|source_rate|string|true|none|Ratio of parent shares|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_CommonSplitActivityV2">CommonSplitActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonsplitactivityv2"></a>
<a id="schema_CommonSplitActivityV2"></a>
<a id="tocScommonsplitactivityv2"></a>
<a id="tocscommonsplitactivityv2"></a>

```json
{
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|

<h2 id="tocS_CommonSplitStockActivityV2">CommonSplitStockActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonsplitstockactivityv2"></a>
<a id="schema_CommonSplitStockActivityV2"></a>
<a id="tocScommonsplitstockactivityv2"></a>
<a id="tocscommonsplitstockactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "new_qty": "string",
  "old_qty": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|new_qty|string|true|none|The new quantity after the split|
|old_qty|string|true|none|The old quantity before the split|

<h2 id="tocS_CommonVOFSubtypeActivityV2">CommonVOFSubtypeActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemacommonvofsubtypeactivityv2"></a>
<a id="schema_CommonVOFSubtypeActivityV2"></a>
<a id="tocScommonvofsubtypeactivityv2"></a>
<a id="tocscommonvofsubtypeactivityv2"></a>

```json
{
  "new_cusip": "string",
  "new_symbol": "string",
  "source_cusip": "string",
  "source_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_cusip|string|false|none|CUSIP of the new security|
|new_symbol|string|false|none|Symbol of the new security|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_CorporateActionCaType">CorporateActionCaType</h2>
<!-- backwards compatibility -->
<a id="schemacorporateactioncatype"></a>
<a id="schema_CorporateActionCaType"></a>
<a id="tocScorporateactioncatype"></a>
<a id="tocscorporateactioncatype"></a>

```json
"Dividend"
```

The type of corporate action.

<h2 id="tocS_CorporateAnnouncement">CorporateAnnouncement</h2>
<!-- backwards compatibility -->
<a id="schemacorporateannouncement"></a>
<a id="schema_CorporateAnnouncement"></a>
<a id="tocScorporateannouncement"></a>
<a id="tocscorporateannouncement"></a>

```json
{
  "ca_sub_type": "DIV",
  "ca_type": "Dividend",
  "cash": "0.018",
  "corporate_action_id": "F58684224_XY37",
  "declaration_date": "2021-01-05",
  "effective_date": "2021-01-08",
  "ex_date": "2021-01-12",
  "id": "be3c368a-4c7c-4384-808e-f02c9f5a8afe",
  "initiating_original_cusip": "55275E101",
  "initiating_symbol": "MLLAX",
  "new_rate": "1",
  "old_rate": "1",
  "payable_date": "2021-01-14",
  "record_date": "2021-01-13",
  "target_original_cusip": "55275E101",
  "target_symbol": "MLLAX"
}
```

A corporate action announcement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ca_sub_type|string|false|none|none|
|ca_type|[CorporateActionCaType](#schemacorporateactioncatype)|false|none|The type of corporate action.|
|cash|string(decimal)|false|none|none|
|corporate_action_id|string|false|none|none|
|declaration_date|string(date)|false|none|none|
|effective_date|string(date)|false|none|none|
|ex_date|string(date)|false|none|none|
|id|string|false|none|none|
|initiating_original_cusip|string|false|none|none|
|initiating_symbol|string|false|none|none|
|new_rate|string(decimal)|false|none|none|
|old_rate|string(decimal)|false|none|none|
|payable_date|string(date)|false|none|none|
|record_date|string(date)|false|none|none|
|target_original_cusip|string|false|none|none|
|target_symbol|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ca_type|Spinoff|
|ca_type|Merger|
|ca_type|Split|
|ca_type|Reorg|
|ca_type|Dividend|

<h2 id="tocS_CreateLocateRequest">CreateLocateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocaterequest"></a>
<a id="schema_CreateLocateRequest"></a>
<a id="tocScreatelocaterequest"></a>
<a id="tocscreatelocaterequest"></a>

```json
{
  "all_or_none": false,
  "limit_price": "0.05",
  "qty": 100,
  "symbol": "TSLA"
}
```

Request to locate shares for a short sale.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all_or_none|boolean|false|none|Reject the locate unless the full requested quantity is available.|
|limit_price|string \| null|false|none|Maximum acceptable locate fee per share, as a decimal string in USD.<br>If omitted, any quoted fee is accepted.<br>|
|qty|integer(int64)|true|none|Number of shares to locate. Must be positive and in round lots of 100; invalid quantities return HTTP 400.|
|symbol|string|true|none|Stock symbol.|

<h2 id="tocS_CreateOrderRequest">CreateOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorderrequest"></a>
<a id="schema_CreateOrderRequest"></a>
<a id="tocScreateorderrequest"></a>
<a id="tocscreateorderrequest"></a>

```json
{
  "advanced_instructions": {
    "algorithm": "DMA",
    "destination": "NYSE",
    "display_qty": "100"
  },
  "client_order_id": "5680c4bc-9ac1-4a12-a44c-df427ba53032",
  "extended_hours": false,
  "legs": [
    {
      "position_intent": "buy_to_open",
      "ratio_qty": "3",
      "side": "buy",
      "symbol": "AAPL241213C00250000"
    }
  ],
  "limit_price": "150",
  "notional": "500",
  "order_class": "bracket",
  "position_intent": "buy_to_open",
  "qty": "2",
  "side": "buy",
  "stop_loss": {
    "limit_price": "3.14",
    "stop_price": "3.14"
  },
  "stop_price": "140",
  "symbol": "AAPL",
  "take_profit": {
    "limit_price": "3.14"
  },
  "time_in_force": "day",
  "trail_percent": "1.5",
  "trail_price": "1.00",
  "type": "market"
}
```

Represents a request to create an order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_instructions|[AdvancedInstructions](#schemaadvancedinstructions)|false|none|Advanced instructions for Elite Smart Router: https://docs.alpaca.markets/docs/alpaca-elite-smart-router|
|client_order_id|string|false|none|A unique identifier for the order. Automatically generated if not sent. (<= 128 characters)|
|extended_hours|boolean|false|none|(default) false. If true, order will be eligible for execution in the pre-market, after-hours, and overnight sessions. Only works with type `limit` and time_in_force set to either `day` or `gtc`|
|legs|[[MLegOrderLeg](#schemamlegorderleg)]|false|none|list of order legs (<= 4)|
|limit_price|string|false|none|Required if type is `limit` or `stop_limit`.<br>In case of `mleg`, the limit_price parameter is expressed with the following notation:<br>- A positive value indicates a debit, representing a cost or payment to be made.<br>- A negative value signifies a credit, reflecting an amount to be received.|
|notional|string|false|none|dollar amount to trade. Cannot work with `qty`. Can only work for market order types and day for time in force.|
|order_class|[OrderClass](#schemaorderclass)|false|none|The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:<br>  - Equity trading: simple (or ""), oco, oto, bracket.<br>  - Options trading:<br>    - simple (or "")<br>    - mleg (required for multi-leg complex option strategies)<br>  - Crypto trading: simple (or "").|
|position_intent|[PositionIntent](#schemapositionintent)|false|none|Represents the desired position strategy.|
|qty|string|false|none|number of shares to trade. Can be fractionable for only market and day order types. Required for `mleg` order class, represents the number of units to trade of this strategy.|
|side|[OrderSide](#schemaorderside)|false|none|Represents which side this order was on:<br>- buy<br>- sell<br>Required for all order classes except for mleg.|
|stop_loss|object|false|none|Takes in string/number values for stop_price and limit_price|
|stop_price|string|false|none|required if type is `stop` or `stop_limit`|
|symbol|string|false|none|symbol, asset ID, or currency pair to identify the asset to trade, required for all order classes except for `mleg`.|
|take_profit|object|false|none|Takes in a string/number value for limit_price|
|time_in_force|[TimeInForce](#schematimeinforce)|true|none|The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:<br>- Equity trading: day, gtc, opg, cls, ioc, fok.<br>- Options trading: day, gtc.<br>- Crypto trading: gtc, ioc.<br><br>Below are the descriptions of each TIF:<br>- day:<br>  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.<br><br>- gtc:<br>  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.<br><br>- opg:<br>  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.<br><br>- cls:<br>  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.<br><br>- ioc:<br>  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.<br><br>- fok:<br>  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.|
|trail_percent|string|false|none|this or `trail_price` is required if type is `trailing_stop`|
|trail_price|string|false|none|this or `trail_percent` is required if type is `trailing_stop`|
|type|[OrderType](#schemaordertype)|true|none|The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:<br> - Equity trading: market, limit, stop, stop_limit, trailing_stop.<br> - Options trading: market, limit, stop, stop_limit.<br> - Multileg Options trading: market, limit.<br> - Crypto trading: market, limit, stop_limit.|

#### Enumerated Values

|Property|Value|
|---|---|
|order_class|simple|
|order_class|bracket|
|order_class|oco|
|order_class|oto|
|order_class|mleg|
|order_class|""|
|position_intent|buy_to_open|
|position_intent|buy_to_close|
|position_intent|sell_to_open|
|position_intent|sell_to_close|
|side|buy|
|side|sell|
|time_in_force|day|
|time_in_force|gtc|
|time_in_force|opg|
|time_in_force|cls|
|time_in_force|ioc|
|time_in_force|fok|
|type|market|
|type|limit|
|type|stop|
|type|stop_limit|
|type|trailing_stop|

<h2 id="tocS_CreateWatchlistRequest">CreateWatchlistRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewatchlistrequest"></a>
<a id="schema_CreateWatchlistRequest"></a>
<a id="tocScreatewatchlistrequest"></a>
<a id="tocscreatewatchlistrequest"></a>

```json
{
  "name": "Tech Stocks",
  "symbols": [
    "AAPL",
    "TSLA"
  ]
}
```

Request format used for creating a new watchlist with a set of assets and name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The watchlist name.|
|symbols|[string]|false|none|List of asset symbols to include in the watchlist.|

<h2 id="tocS_CreateWhitelistedAddressRequest">CreateWhitelistedAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewhitelistedaddressrequest"></a>
<a id="schema_CreateWhitelistedAddressRequest"></a>
<a id="tocScreatewhitelistedaddressrequest"></a>
<a id="tocscreatewhitelistedaddressrequest"></a>

```json
{
  "address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz",
  "asset": "USDT",
  "chain": "ETH",
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

Request format used for whitelisting a crypto address for transfers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address to be whitelisted|
|asset|string|false|none|Symbol of underlying asset for the whitelisted address|
|chain|[CryptoChain](#schemacryptochain)|false|none|Chain identifier for multi-chain crypto assets.|
|travel_rule_info|[TravelRuleInfo](#schematravelruleinfo)|false|none|Travel rule information pertaining to the wallet being whitelisted. Identify the destination by providing beneficiary_vasp_id, setting beneficiary_is_self_hosted to true, or providing beneficiary_manual_entry. Either beneficiary_entity_name (for legal entities) or beneficiary_given_name and beneficiary_family_name (for natural persons) must be provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|chain|SOL|
|chain|ETH|
|chain|BTC|
|chain|XRP|
|chain|ARB|

<h2 id="tocS_CryptoChain">CryptoChain</h2>
<!-- backwards compatibility -->
<a id="schemacryptochain"></a>
<a id="schema_CryptoChain"></a>
<a id="tocScryptochain"></a>
<a id="tocscryptochain"></a>

```json
"ETH"
```

Chain identifier for multi-chain crypto assets.

<h2 id="tocS_CryptoTransfer">CryptoTransfer</h2>
<!-- backwards compatibility -->
<a id="schemacryptotransfer"></a>
<a id="schema_CryptoTransfer"></a>
<a id="tocScryptotransfer"></a>
<a id="tocscryptotransfer"></a>

```json
{
  "amount": "string",
  "asset": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "direction": "INCOMING",
  "fees": "string",
  "from_address": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "network_fee": "string",
  "status": "PROCESSING",
  "to_address": "string",
  "tx_hash": "string",
  "usd_value": "string"
}
```

Transfers allow you to transfer assets into your end customer's account (deposits) or out (withdrawal).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|Amount of transfer denominated in the underlying crypto asset|
|asset|string|false|none|Symbol of crypto asset for given transfer (e.g. BTC)|
|chain|string|false|none|Underlying network for given transfer|
|created_at|string(date-time)|false|none|Timestamp when transfer was created|
|direction|[TransferDirection](#schematransferdirection)|false|none|none|
|fees|string|false|none|none|
|from_address|string|false|none|Originating address of the transfer|
|id|string(uuid)|false|none|The crypto transfer ID|
|network_fee|string|false|none|none|
|status|[CryptoTransferStatus](#schemacryptotransferstatus)|false|none|none|
|to_address|string|false|none|Destination address of the transfer|
|tx_hash|string|false|none|On-chain transaction hash (e.g. 0xabc...xyz)|
|usd_value|string|false|none|Equivalent USD value at time of transfer|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|INCOMING|
|direction|OUTGOING|
|status|PROCESSING|
|status|FAILED|
|status|COMPLETE|

<h2 id="tocS_CryptoTransferStatus">CryptoTransferStatus</h2>
<!-- backwards compatibility -->
<a id="schemacryptotransferstatus"></a>
<a id="schema_CryptoTransferStatus"></a>
<a id="tocScryptotransferstatus"></a>
<a id="tocscryptotransferstatus"></a>

```json
"PROCESSING"
```

<h2 id="tocS_CryptoWallet">CryptoWallet</h2>
<!-- backwards compatibility -->
<a id="schemacryptowallet"></a>
<a id="schema_CryptoWallet"></a>
<a id="tocScryptowallet"></a>
<a id="tocscryptowallet"></a>

```json
{
  "address": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|chain|string|false|none|none|
|created_at|string(date-time)|false|none|Timestamp (RFC3339) of account creation.|

<h2 id="tocS_DIVNRAActivityV2">DIVNRAActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemadivnraactivityv2"></a>
<a id="schema_DIVNRAActivityV2"></a>
<a id="tocSdivnraactivityv2"></a>
<a id="tocsdivnraactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "cusip": "string",
  "parent_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "symbol": "string",
  "tax_country": "THA",
  "tax_rate": "0.15"
}
```

Dividend withholding for non resident aliens

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|parent_id|string(uuid)|true|none|The ref_id of the parent dividend|
|symbol|string|true|none|The symbol of the security involved with the activity|
|tax_country|string|false|none|Tax country used as the primary jurisdiction when determining withholding treatment for the dividend. Other factors may affect the final withholding rate.<br>The value is an [ISO 3166-1 alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code.<br>|
|tax_rate|string(decimal)|false|none|The tax withholding rate applied to the dividend, represented as a value between 0 and 1|

<h2 id="tocS_DIVSPDActivityV2">DIVSPDActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemadivspdactivityv2"></a>
<a id="schema_DIVSPDActivityV2"></a>
<a id="tocSdivspdactivityv2"></a>
<a id="tocsdivspdactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cash_payout": "string",
  "cusip": "string",
  "due_bill_off_date": "1970-01-01",
  "due_bill_on_date": "1970-01-01",
  "entitled_qty": "string",
  "ex_date": "1970-01-01",
  "foreign": "false",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "special": "false",
  "symbol": "string"
}
```

Substitute payment in lieu of dividend

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|cash_payout|string|true|none|Total cash amount paid|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|due_bill_off_date|string(date)|false|none|When due bills stop applying for this event|
|due_bill_on_date|string(date)|false|none|When due bills begin to apply for this event|
|entitled_qty|string|true|none|Quantity of shares entitled to receive cash in lieu|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|foreign|string|true|none|Indicates if related to a non-US security. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Cash payout per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|special|string|true|none|Indicates if this is a special dividend. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|symbol|string|true|none|The symbol of the security involved with the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|foreign|true|
|foreign|false|
|special|true|
|special|false|

<h2 id="tocS_DIVWHActivityV2">DIVWHActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemadivwhactivityv2"></a>
<a id="schema_DIVWHActivityV2"></a>
<a id="tocSdivwhactivityv2"></a>
<a id="tocsdivwhactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "cusip": "string",
  "isin": "string",
  "parent_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "symbol": "string"
}
```

Dividend tax withholding (e.g. foreign withholding on global securities)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|isin|string|false|none|The ISIN of the security involved with the activity|
|parent_id|string(uuid)|true|none|The ref_id of the parent dividend|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|number|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "message": "Internal Server Error"
}
```

API error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_Exchange">Exchange</h2>
<!-- backwards compatibility -->
<a id="schemaexchange"></a>
<a id="schema_Exchange"></a>
<a id="tocSexchange"></a>
<a id="tocsexchange"></a>

```json
"NYSE"
```

Represents the current exchanges Alpaca supports. List is currently:

US equities:
- AMEX
- ARCA
- BATS
- NYSE
- NASDAQ
- NYSEARCA
- OTC
- TXSE

Crypto:
- CRYPTO
- ERSX
- CRXL

Crypto perpetuals:
- ASCX

Index symbols:
- INDEX

INDEX is the artificial exchange for index symbols such as SPX.

<h2 id="tocS_ExchangeForPosition">ExchangeForPosition</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeforposition"></a>
<a id="schema_ExchangeForPosition"></a>
<a id="tocSexchangeforposition"></a>
<a id="tocsexchangeforposition"></a>

```json
"NYSE"
```

Represents the current exchanges Alpaca supports. List is currently:

US equities:
- AMEX
- ARCA
- BATS
- NYSE
- NASDAQ
- NYSEARCA
- OTC
- TXSE

Crypto:
- CRYPTO
- ERSX
- CRXL

Crypto perpetuals:
- ASCX

Index symbols:
- INDEX

INDEX is the artificial exchange for index symbols such as SPX.

Can be empty if not applicable (e.g., for options contracts)

<h2 id="tocS_ExchangeOfferActivityV2">ExchangeOfferActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeofferactivityv2"></a>
<a id="schema_ExchangeOfferActivityV2"></a>
<a id="tocSexchangeofferactivityv2"></a>
<a id="tocsexchangeofferactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "new_cusip": "string",
  "new_symbol": "string",
  "source_cusip": "string",
  "source_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|new_cusip|string|false|none|CUSIP of the new security|
|new_symbol|string|false|none|Symbol of the new security|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_FEEActivityV2">FEEActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemafeeactivityv2"></a>
<a id="schema_FEEActivityV2"></a>
<a id="tocSfeeactivityv2"></a>
<a id="tocsfeeactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "execution_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parent_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "swap_rate": "string"
}
```

Fee

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|execution_id|string(uuid)|false|none|Execution ID. Present only for activity subtype FOT, and only when the fee has one.|
|order_id|string(uuid)|false|none|Order ID. Present only for activity subtype FOT, and only when the fee has one.|
|parent_id|string(uuid)|false|none|The parent transaction's ID. Present for fees with a one-to-one relationship to a parent trade (e.g. COM). Omitted for volume-based or bulk fees charged across multiple trades for a period (e.g. REG, TAF, CAT, ORF, NRV, NRC, BSWP) and for LOC fees that are not linked to a parent transaction.|
|swap_rate|string(decimal)|false|none|Exchange rate on the fee. Sent when the fee has a non-zero rate.|

<h2 id="tocS_FOPTActivityV2">FOPTActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemafoptactivityv2"></a>
<a id="schema_FOPTActivityV2"></a>
<a id="tocSfoptactivityv2"></a>
<a id="tocsfoptactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "contra": "string",
  "external_id": "string",
  "symbol": "string"
}
```

Free-of-payment (FOP) transfers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|contra|string|true|none|Contra for the transfer|
|external_id|string|true|none|External ID of the transfer|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_FXTRDActivityV2">FXTRDActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemafxtrdactivityv2"></a>
<a id="schema_FXTRDActivityV2"></a>
<a id="tocSfxtrdactivityv2"></a>
<a id="tocsfxtrdactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "order_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "swap_rate": "string"
}
```

Currency conversion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|order_id|string(uuid)|false|none|Order ID of the conversion, when the activity has one.|
|swap_rate|string(decimal)|false|none|Exchange rate of the conversion. Sent when the activity has a non-zero rate.|

<h2 id="tocS_FixedIncomeInterestActivityV2">FixedIncomeInterestActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemafixedincomeinterestactivityv2"></a>
<a id="schema_FixedIncomeInterestActivityV2"></a>
<a id="tocSfixedincomeinterestactivityv2"></a>
<a id="tocsfixedincomeinterestactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "accrued_interest_rate": "string",
  "cash_payout": "string",
  "cusip": "string",
  "entitled_qty": "1000",
  "interest_type": "accrued",
  "isin": "string",
  "order_id": "257bf308-a6b7-4777-8cf6-00dc441dc4d3",
  "parent_id": "46aecae1-4629-4bcf-b441-0d8c847a1787",
  "payment_date": "1970-01-01",
  "price": "string",
  "rate": "string",
  "record_date": "1970-01-01"
}
```

Fixed income interest (INT/FI)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|accrued_interest_rate|string(decimal)|false|none|Accrued interest rate (present for accrued-interest-on-call variants)|
|cash_payout|string(decimal)|true|none|The cash payout for this interest activity|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|entitled_qty|string|true|none|The entitled quantity (principal / face amount)|
|interest_type|[FixedIncomeInterestType](#schemafixedincomeinteresttype)|true|none|Distinguishes coupon payments from accrued interest on INT/FI activities.|
|isin|string|false|none|The ISIN of the security involved with the activity|
|order_id|string(uuid)|false|none|The order that generated this accrued interest. Present for trade-accrued INT/FI.|
|parent_id|string(uuid)|false|none|The ref_id of the parent trade this interest is attached to. Present for trade-accrued INT/FI when a parent trade `ref_id` is available.|
|payment_date|string(date)|false|none|The payment date|
|price|string(decimal)|false|none|Call price used for accrued-interest-on-call variants|
|rate|string(decimal)|false|none|Coupon rate amount (present for regular coupon payments)|
|record_date|string(date)|false|none|The record date|

#### Enumerated Values

|Property|Value|
|---|---|
|interest_type|coupon|
|interest_type|accrued|

<h2 id="tocS_FixedIncomeInterestType">FixedIncomeInterestType</h2>
<!-- backwards compatibility -->
<a id="schemafixedincomeinteresttype"></a>
<a id="schema_FixedIncomeInterestType"></a>
<a id="tocSfixedincomeinteresttype"></a>
<a id="tocsfixedincomeinteresttype"></a>

```json
"accrued"
```

Distinguishes coupon payments from accrued interest on INT/FI activities.

<h2 id="tocS_FixedIncomeRedemptionActivityV2">FixedIncomeRedemptionActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemafixedincomeredemptionactivityv2"></a>
<a id="schema_FixedIncomeRedemptionActivityV2"></a>
<a id="tocSfixedincomeredemptionactivityv2"></a>
<a id="tocsfixedincomeredemptionactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cash_payout": "string",
  "cusip": "string",
  "payment_date": "1970-01-01",
  "qty": "string"
}
```

Redemption

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|true|none|The unique identifier for this corporate action|
|cash_payout|string|true|none|The cash payout|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|payment_date|string(date)|true|none|The payment date|
|qty|string|true|none|Quantity for the redemption|

<h2 id="tocS_ForwardSplitActivityV2">ForwardSplitActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaforwardsplitactivityv2"></a>
<a id="schema_ForwardSplitActivityV2"></a>
<a id="tocSforwardsplitactivityv2"></a>
<a id="tocsforwardsplitactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "new_qty": "string",
  "old_qty": "string",
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Forward stock split

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|new_qty|string|true|none|The new quantity after the split|
|old_qty|string|true|none|The old quantity before the split|
|due_bill_redemption_date|string(date)|false|none|When due bills related to the split are redeemed|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security being split|

<h2 id="tocS_JNLCActivityV2">JNLCActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemajnlcactivityv2"></a>
<a id="schema_JNLCActivityV2"></a>
<a id="tocSjnlcactivityv2"></a>
<a id="tocsjnlcactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "journal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Journal entry (cash)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|journal_id|string(uuid)|false|none|The journal's ID|

<h2 id="tocS_JNLSActivityV2">JNLSActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemajnlsactivityv2"></a>
<a id="schema_JNLSActivityV2"></a>
<a id="tocSjnlsactivityv2"></a>
<a id="tocsjnlsactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "journal_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "issuer": "xstocks",
  "symbol": "string"
}
```

Journal entry (stock)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|journal_id|string(uuid)|false|none|The journal's ID|
|issuer|string|false|none|Issuer of the tokenized asset, on tokenization mint and redeem journals (`activity_subtype` `ITNJ`). Same value as `issuer` on the related tokenization request. Omitted for other journals and for journals booked before this field was added.|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_ListLocateQuotesResponse">ListLocateQuotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocatequotesresponse"></a>
<a id="schema_ListLocateQuotesResponse"></a>
<a id="tocSlistlocatequotesresponse"></a>
<a id="tocslistlocatequotesresponse"></a>

```json
{
  "errors": [
    {
      "code": "symbol_not_found",
      "message": "symbol not found",
      "symbol": "META"
    }
  ],
  "quotes": [
    {
      "available_qty": 1000,
      "price": "0.0123",
      "quoted_at": "2026-01-02T15:04:05Z",
      "symbol": "TSLA"
    }
  ]
}
```

Response to a successful request for locate quotes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[LocateQuoteError](#schemalocatequoteerror)]|false|none|Symbols that could not be quoted.|
|quotes|[[LocateQuote](#schemalocatequote)]|true|none|Locate quotes returned for requested symbols.|

<h2 id="tocS_ListLocatesResponse">ListLocatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocatesresponse"></a>
<a id="schema_ListLocatesResponse"></a>
<a id="tocSlistlocatesresponse"></a>
<a id="tocslistlocatesresponse"></a>

```json
{
  "locates": [
    {
      "all_or_none": false,
      "created_at": "2026-01-02T15:04:05Z",
      "expires_at": "2026-01-03T01:00:00Z",
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "limit_price": "0.05",
      "located_price": "0.05",
      "located_qty": 100,
      "requested_qty": 100,
      "status": "active",
      "symbol": "TSLA",
      "total_fee": "5.00"
    }
  ],
  "next_page_token": "eyJpZCI6IjU1MGU4NDAwLWUyOWItNDFkNC1hNzE2LTQ0NjY1NTQ0MDAwMCJ9Cg"
}
```

Response to a successful request for a list of locates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locates|[[Locate](#schemalocate)]|true|none|Locates matching the filter criteria.|
|next_page_token|string \| null|true|none|The token to use to retrieve the next page of results. If `null`, there are no more pages.|

<h2 id="tocS_Locate">Locate</h2>
<!-- backwards compatibility -->
<a id="schemalocate"></a>
<a id="schema_Locate"></a>
<a id="tocSlocate"></a>
<a id="tocslocate"></a>

```json
{
  "all_or_none": false,
  "created_at": "2026-01-02T15:04:05Z",
  "expires_at": "2026-01-03T01:00:00Z",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "limit_price": "0.05",
  "located_price": "0.05",
  "located_qty": 100,
  "requested_qty": 100,
  "status": "active",
  "symbol": "TSLA",
  "total_fee": "5.00"
}
```

A locate request and its current lifecycle status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all_or_none|boolean|true|none|Whether the request required the full quantity.|
|created_at|string(date-time)|true|none|Time when the locate was created.|
|expires_at|string \| null(date-time)|false|none|Time when the active locate expires. Omitted when rejected.|
|id|string(uuid)|true|none|Locate ID.|
|limit_price|string \| null|false|none|Maximum acceptable fee per share from the request.|
|located_price|string \| null|false|none|Locate fee per share in USD. Omitted when rejected.|
|located_qty|integer \| null(int64)|false|none|Number of shares located. Omitted when rejected.|
|rejection_reason|string \| null|false|none|Machine-readable rejection reason.|
|requested_qty|integer(int64)|true|none|Number of shares requested.|
|status|[LocateStatus](#schemalocatestatus)|true|none|Locate status.|
|symbol|string|true|none|Stock symbol.|
|total_fee|string \| null|false|none|Total locate fee in USD. Omitted when rejected.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|expired|
|status|rejected|

<h2 id="tocS_LocateError">LocateError</h2>
<!-- backwards compatibility -->
<a id="schemalocateerror"></a>
<a id="schema_LocateError"></a>
<a id="tocSlocateerror"></a>
<a id="tocslocateerror"></a>

```json
{
  "code": "invalid_symbols",
  "message": "symbols must contain at most 100 unique symbols"
}
```

Locates API error response. Locate-specific 400 and create locate 422 errors include a machine-readable `code`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Machine-readable error code. Present on locate-specific 400 and create locate 422 errors.|
|message|string|true|none|Error message.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|invalid_input|
|code|invalid_request_body|
|code|invalid_limit_price|
|code|invalid_symbols|
|code|symbol_not_found|
|code|security_not_found|
|code|insufficient_buying_power|
|code|easy_to_borrow|
|code|threshold_security|
|code|idempotency_key_conflict|
|code|quote_unavailable|

<h2 id="tocS_LocateQuote">LocateQuote</h2>
<!-- backwards compatibility -->
<a id="schemalocatequote"></a>
<a id="schema_LocateQuote"></a>
<a id="tocSlocatequote"></a>
<a id="tocslocatequote"></a>

```json
{
  "available_qty": 1000,
  "price": "0.0123",
  "quoted_at": "2026-01-02T15:04:05Z",
  "symbol": "TSLA"
}
```

Current locate pricing and availability for a symbol.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_qty|integer(int64)|true|none|Available locate quantity.|
|price|string|false|none|Locate fee per share. Omitted when no quantity is available.|
|quoted_at|string(date-time)|true|none|Time when the quote was issued.|
|symbol|string|true|none|Stock symbol.|

<h2 id="tocS_LocateQuoteError">LocateQuoteError</h2>
<!-- backwards compatibility -->
<a id="schemalocatequoteerror"></a>
<a id="schema_LocateQuoteError"></a>
<a id="tocSlocatequoteerror"></a>
<a id="tocslocatequoteerror"></a>

```json
{
  "code": "symbol_not_found",
  "message": "symbol not found",
  "symbol": "META"
}
```

Error returned for a symbol that could not be quoted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Error code.|
|message|string|true|none|Error message.|
|symbol|string|true|none|Requested stock symbol that could not be quoted.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|symbol_not_found|
|code|easy_to_borrow|
|code|threshold_security|
|code|corporate_action|
|code|quote_unavailable|

<h2 id="tocS_LocateStatus">LocateStatus</h2>
<!-- backwards compatibility -->
<a id="schemalocatestatus"></a>
<a id="schema_LocateStatus"></a>
<a id="tocSlocatestatus"></a>
<a id="tocslocatestatus"></a>

```json
"active"
```

Locate status.

<h2 id="tocS_MAActivityV2">MAActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemamaactivityv2"></a>
<a id="schema_MAActivityV2"></a>
<a id="tocSmaactivityv2"></a>
<a id="tocsmaactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "acquiree_cusip": "string",
  "acquiree_isin": "string",
  "acquiree_rate": "string",
  "acquiree_symbol": "string",
  "acquirer_cusip": "string",
  "acquirer_isin": "string",
  "acquirer_rate": "string",
  "acquirer_symbol": "string",
  "effective_date": "1970-01-01",
  "payable_date": "1970-01-01",
  "acquiree_qty": "string",
  "acquirer_qty": "string",
  "cash_payout": "string",
  "cash_rate": "string"
}
```

Merger and acquisition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|acquiree_cusip|string|true|none|CUSIP of the acquiree|
|acquiree_isin|string|false|none|ISIN of the acquiree|
|acquiree_rate|string|false|none|Rate of the acquiree|
|acquiree_symbol|string|true|none|Symbol of the acquiree|
|acquirer_cusip|string|false|none|CUSIP of the acquirer|
|acquirer_isin|string|false|none|ISIN of the acquirer|
|acquirer_rate|string|false|none|Rate of the acquirer|
|acquirer_symbol|string|false|none|Symbol of the acquirer|
|effective_date|string(date)|true|none|When the merger/acquisition becomes effective|
|payable_date|string(date)|true|none|The payable date|
|acquiree_qty|string|true|none|Quantity of the acquiree|
|acquirer_qty|string|false|none|Quantity of the acquirer|
|cash_payout|string|false|none|The cash payout|
|cash_rate|string|false|none|The cash rate|

<h2 id="tocS_MEMActivityV2">MEMActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemamemactivityv2"></a>
<a id="schema_MEMActivityV2"></a>
<a id="tocSmemactivityv2"></a>
<a id="tocsmemactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "transfer_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Instant funding memopost

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|transfer_id|string(uuid)|true|none|The transfer's ID|

<h2 id="tocS_MLegOrderLeg">MLegOrderLeg</h2>
<!-- backwards compatibility -->
<a id="schemamlegorderleg"></a>
<a id="schema_MLegOrderLeg"></a>
<a id="tocSmlegorderleg"></a>
<a id="tocsmlegorderleg"></a>

```json
{
  "position_intent": "buy_to_open",
  "ratio_qty": "string",
  "side": "buy",
  "symbol": "string"
}
```

Represents an individual leg of a multi-leg options order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position_intent|[PositionIntent](#schemapositionintent)|false|none|Represents the desired position strategy.|
|ratio_qty|string|true|none|proportional quantity of this leg in relation to the overall multi-leg order qty|
|side|[OrderSide](#schemaorderside)|false|none|Represents which side this order was on:<br>- buy<br>- sell<br>Required for all order classes except for mleg.|
|symbol|string|true|none|symbol or asset ID to identify the asset to trade|

#### Enumerated Values

|Property|Value|
|---|---|
|position_intent|buy_to_open|
|position_intent|buy_to_close|
|position_intent|sell_to_open|
|position_intent|sell_to_close|
|side|buy|
|side|sell|

<h2 id="tocS_NCActivityV2">NCActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemancactivityv2"></a>
<a id="schema_NCActivityV2"></a>
<a id="tocSncactivityv2"></a>
<a id="tocsncactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_cusip": "string",
  "new_symbol": "string",
  "old_cusip": "string",
  "old_symbol": "string",
  "position_qty": "string"
}
```

Name change

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_cusip|string|true|none|New CUSIP for the name change|
|new_symbol|string|true|none|New symbol for the name change|
|old_cusip|string|true|none|Old CUSIP for the name change|
|old_symbol|string|true|none|Old symbol for the name change|
|position_qty|string|true|none|The position quantity|

<h2 id="tocS_NextPageToken">NextPageToken</h2>
<!-- backwards compatibility -->
<a id="schemanextpagetoken"></a>
<a id="schema_NextPageToken"></a>
<a id="tocSnextpagetoken"></a>
<a id="tocsnextpagetoken"></a>

```json
"MTAwMA=="
```

Use this token in your next API call to paginate through the dataset and retrieve the next page of results. A null token indicates there are no more data to fetch.

<h2 id="tocS_NonTradeActivities">NonTradeActivities</h2>
<!-- backwards compatibility -->
<a id="schemanontradeactivities"></a>
<a id="schema_NonTradeActivities"></a>
<a id="tocSnontradeactivities"></a>
<a id="tocsnontradeactivities"></a>

```json
{
  "activity_sub_type": "SDIV",
  "activity_type": "DIV",
  "created_at": "2021-05-10T14:01:04.650275Z",
  "currency": "USD",
  "date": "2019-08-01",
  "id": "20190801011955195::5f596936-6f23-4cef-bdf1-3806aae57dbf",
  "net_amount": "1.02",
  "per_share_amount": "0.51",
  "qty": "2",
  "status": "executed",
  "symbol": "T"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_sub_type|[ActivitySubType](#schemaactivitysubtype)|false|none|Represents a more specific classification to the `activity_type`.<br>This field is optional and may not always be populated, depending on the activity type and the available data.<br>Each `activity_type` has a set of valid `activity_sub_type` values.<br><br>Full mapping of `activity_type` to `activity_sub_type`:<br><br>- **CGD**: Capital Gains Distribution activity sub-types:<br>  - **LTCG**: Long-Term Capital Gain<br>  - **STCG**: Short-Term Capital Gain<br><br>- **DIV**: Dividend activity sub-types:<br>  - **CDIV**: Cash Dividend<br>  - **ROC**: Return of Capital<br>  - **SDIV**: Stock Dividend<br>  - **SPD**: Substitute Payment In Lieu Of Dividend<br><br>- **FEE**: Fee-related activity sub-types:<br>  - **REG**: Regulatory Fee<br>  - **TAF**: Trading Activity Fee<br>  - **LCT**: Local Currency Trading Fee<br>  - **ORF**: Options Regulatory Fee<br>  - **OCC**: Options Clearing Corporation Fee<br>  - **NRC**: Non-Retail Commission Fee<br>  - **NRV**: Non-Retail Venue Fee<br>  - **COM**: Commission<br>  - **CAT**: Consolidated Audit Trail Fee<br><br>- **INT**: Interest-related activity sub-types:<br>  - **MGN**: Margin Interest<br>  - **CDT**: Credit Interest<br>  - **SWP**: Sweep Interest<br>  - **QII**: Qualified Interest<br>  - **FI**: Fixed Income Interest (coupon or accrued)<br><br>- **MA**: Merger and Acquisition activity sub-types:<br>  - **CMA**: Cash Merger<br>  - **SMA**: Stock Merger<br>  - **SCMA**: Stock & Cash Merger<br><br>- **NC**: Name Change activity sub types<br>  - **SNC**: Symbol Name Change<br>  - **CNC**: CUSIP Name Change<br>  - **SCNC**: Symbol & CUSIP Name Change<br><br>- **OPCA**: Option Corporate Action activity sub-types:<br>  - **DIV.CDIV**: Cash Dividend<br>  - **DIV.ROC**: Return of Capital<br>  - **DIV.SDIV**: Stock Dividend<br>  - **MA.CMA**: Cash Merger<br>  - **MA.SMA**: Stock Merger<br>  - **MA.SCMA**: Stock & Cash Merger<br>  - **NC.CNC**: CUSIP Name Change<br>  - **NC.SNC**: Symbol Name Change<br>  - **NC.SCNC**: Symbol & CUSIP Name Change<br>  - **SPIN**: Spin-off<br>  - **SPLIT.FSPLIT**: Forward Stock Split<br>  - **SPLIT.RSPLIT**: Reverse Stock Split<br>  - **SPLIT.USPLIT**: Unit Split<br><br>- **REO**: Reorganization activity sub-types<br>  - **REOS**: Stock only (1 or more stock legs)<br>  - **REOC**: Cash only (1 cash leg)<br>  - **REOSC**: Stock and cash<br><br>- **REORG**: Activity sub-types:<br>  - **WRM**: Worthless Removal<br><br>- **SPLIT**: Stock Split activity sub-types:<br>  - **FSPLIT**: Forward Stock Split<br>  - **RSPLIT**: Reverse Stock Split<br>  - **USPLIT**: Unit Split<br><br>- **VOF**: Voluntary Offering activity sub-types:<br>  - **VTND**: Tender Offer<br>  - **VWRT**: Warrant Exercise<br>  - **VRGT**: Rights Offer<br>  - **VEXH**: Exchange Offer<br><br>- **WH**: Withholding activity sub-types:<br>  - **SWH**: State Withholding<br>  - **FWH**: Federal Withholding<br>  - **SLWH**: Sales Withholding|
|activity_type|[ActivityType](#schemaactivitytype)|false|none|- FILL<br>  Order fills (both partial and full fills)<br><br>- TRANS<br>  Cash transactions (both CSD and CSW)<br><br>- MISC<br>  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)<br><br>- ACATC<br>  ACATS IN/OUT (Cash)<br><br>- ACATS<br>  ACATS IN/OUT (Securities)<br><br>- CFEE<br>  Crypto fee<br><br>- CGD<br>  Capital gains distribution<br><br>- CSD<br>  Cash deposit(+)<br><br>- CSW<br>  Cash withdrawal(-)<br><br>- DIV<br>  Dividends<br><br>- DIVCGL<br>  Dividend (capital gains long term)<br><br>- DIVCGS<br>  Dividend (capital gains short term)<br><br>- DIVFEE<br>  Dividend fee<br><br>- DIVFT<br>  Dividend adjusted (Foreign Tax Withheld)<br><br>- DIVNRA<br>  Dividend adjusted (NRA Withheld)<br><br>- DIVROC<br>  Dividend return of capital<br><br>- DIVTW<br>  Dividend adjusted (Tefra Withheld)<br><br>- DIVTXEX<br>  Dividend (tax exempt)<br><br>- FEE<br>  Fee denominated in USD<br><br>- INT<br>  Interest (credit/margin)<br><br>- INTNRA<br>  Interest adjusted (NRA Withheld)<br><br>- INTTW<br>  Interest adjusted (Tefra Withheld)<br><br>- JNL<br>  Journal entry<br><br>- JNLC<br>  Journal entry (cash)<br><br>- JNLS<br>  Journal entry (stock)<br><br>- MA<br>  Merger/Acquisition<br><br>- NC<br>  Name change<br><br>- OPASN<br>  Option assignment<br><br>- OPCA<br>  Option corporate action<br><br>- OPCSH<br>  Option cash deliverable for non-standard contracts<br><br>- OPEXC<br>  Option exercise<br><br>- OPEXP<br>  Option expiration<br><br>- OPTRD<br>  Option trade<br><br>- PTC<br>  Pass Thru Charge<br><br>- PTR<br>  Pass Thru Rebate<br><br>- REO<br>  Reorganization<br><br>- REORG<br>  Worthless removal CA<br><br>- SPIN<br>  Stock spinoff<br><br>- SPLIT<br>  Stock split<br><br>- FOPT<br>  Free of Payment Transfers<br><br>- OCT<br>  On chain transactions (blockchain deposits/withdrawals)|
|created_at|string(date-time)|false|none|Valid only for non-trading activity types. Null for trading activities.|
|currency|string|false|none|Currency denomination of the activity (e.g. USD). Included in NTA stream events and activity responses.|
|cusip|string|false|none|The CUSIP of the security involved with the activity. Not present for all activity types.|
|date|string(date-time)|false|none|The date on which the activity occurred or on which the transaction associated with the activity settled.|
|group_id|string|false|none|ID used to link activities who share a sibling relationship.|
|id|string|false|none|An ID for the activity, always in "::" format. Can be sent as page_token in requests to facilitate the paging of results.|
|net_amount|string|false|none|The net amount of money (positive or negative) associated with the activity.|
|per_share_amount|string|false|none|For dividend activities, the average amount paid per share. Not present for other activity types.|
|qty|string|false|none|For dividend activities, the number of shares that contributed to the payment. Not present for other activity types.<br>|
|status|string|false|none|The activity status.|
|symbol|string|false|none|The symbol of the security involved with the activity. Not present for all activity types.|

#### Enumerated Values

|Property|Value|
|---|---|
|activity_type|FILL|
|activity_type|TRANS|
|activity_type|MISC|
|activity_type|ACATC|
|activity_type|ACATS|
|activity_type|CFEE|
|activity_type|CGD|
|activity_type|CSD|
|activity_type|CSW|
|activity_type|DIV|
|activity_type|DIVCGL|
|activity_type|DIVCGS|
|activity_type|DIVFEE|
|activity_type|DIVFT|
|activity_type|DIVNRA|
|activity_type|DIVROC|
|activity_type|DIVTW|
|activity_type|DIVTXEX|
|activity_type|FEE|
|activity_type|INT|
|activity_type|INTNRA|
|activity_type|INTTW|
|activity_type|JNL|
|activity_type|JNLC|
|activity_type|JNLS|
|activity_type|MA|
|activity_type|NC|
|activity_type|OPASN|
|activity_type|OPCA|
|activity_type|OPCSH|
|activity_type|OPEXC|
|activity_type|OPEXP|
|activity_type|OPTRD|
|activity_type|PTC|
|activity_type|PTR|
|activity_type|REO|
|activity_type|REORG|
|activity_type|SPIN|
|activity_type|SPLIT|
|activity_type|FOPT|
|activity_type|OCT|
|status|executed|
|status|correct|
|status|canceled|

<h2 id="tocS_OCTActivityV2">OCTActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaoctactivityv2"></a>
<a id="schema_OCTActivityV2"></a>
<a id="tocSoctactivityv2"></a>
<a id="tocsoctactivityv2"></a>

```json
{
  "symbol": "USDCUSD",
  "system_date": "2026-07-31",
  "transfer_id": "08d7a129-bd3e-4480-94ff-1a7288166845"
}
```

On chain transaction (blockchain deposit/withdrawal)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|symbol|string|true|none|The symbol of the asset involved with the on chain transaction|
|transfer_id|string(uuid)|true|none|The transfer ID of the associated deposit or withdrawal|

<h2 id="tocS_OPASNActivityV2">OPASNActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopasnactivityv2"></a>
<a id="schema_OPASNActivityV2"></a>
<a id="tocSopasnactivityv2"></a>
<a id="tocsopasnactivityv2"></a>

```json
{
  "contract_symbol": "string",
  "cusip": "string",
  "symbol": "string",
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

Option assignment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract_symbol|string|false|none|The contract symbol of the security involved with the activity|
|cusip|string|false|none|The CUSIP of the security involved with the activity|
|symbol|string|false|none|The symbol of the security involved with the activity|
|group_id|string(uuid)|true|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_OPCSHActivityV2">OPCSHActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcshactivityv2"></a>
<a id="schema_OPCSHActivityV2"></a>
<a id="tocSopcshactivityv2"></a>
<a id="tocsopcshactivityv2"></a>

```json
{
  "contract_symbol": "string",
  "cusip": "string",
  "symbol": "string",
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

Option cash deliverable for non-standard contracts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract_symbol|string|false|none|The contract symbol of the security involved with the activity|
|cusip|string|false|none|The CUSIP of the security involved with the activity|
|symbol|string|false|none|The symbol of the security involved with the activity|
|group_id|string(uuid)|true|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_OPEXCActivityV2">OPEXCActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopexcactivityv2"></a>
<a id="schema_OPEXCActivityV2"></a>
<a id="tocSopexcactivityv2"></a>
<a id="tocsopexcactivityv2"></a>

```json
{
  "contract_symbol": "string",
  "cusip": "string",
  "symbol": "string",
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

Option exercise

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract_symbol|string|false|none|The contract symbol of the security involved with the activity|
|cusip|string|false|none|The CUSIP of the security involved with the activity|
|symbol|string|false|none|The symbol of the security involved with the activity|
|group_id|string(uuid)|true|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_OPEXPActivityV2">OPEXPActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopexpactivityv2"></a>
<a id="schema_OPEXPActivityV2"></a>
<a id="tocSopexpactivityv2"></a>
<a id="tocsopexpactivityv2"></a>

```json
{
  "contract_symbol": "string",
  "cusip": "string",
  "symbol": "string",
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

Option expiry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract_symbol|string|false|none|The contract symbol of the security involved with the activity|
|cusip|string|false|none|The CUSIP of the security involved with the activity|
|symbol|string|false|none|The symbol of the security involved with the activity|
|group_id|string(uuid)|true|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_OPTRDActivityV2">OPTRDActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaoptrdactivityv2"></a>
<a id="schema_OPTRDActivityV2"></a>
<a id="tocSoptrdactivityv2"></a>
<a id="tocsoptrdactivityv2"></a>

```json
{
  "contract_symbol": "string",
  "cusip": "string",
  "symbol": "string",
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01"
}
```

Trading activity that is paired with the assignment/exercise

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contract_symbol|string|false|none|The contract symbol of the security involved with the activity|
|cusip|string|false|none|The CUSIP of the security involved with the activity|
|symbol|string|false|none|The symbol of the security involved with the activity|
|group_id|string(uuid)|true|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|

<h2 id="tocS_OpcaCDIVActivityV2">OpcaCDIVActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcacdivactivityv2"></a>
<a id="schema_OpcaCDIVActivityV2"></a>
<a id="tocSopcacdivactivityv2"></a>
<a id="tocsopcacdivactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "cusip": "string",
  "due_bill_off_date": "1970-01-01",
  "due_bill_on_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "foreign": "false",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "special": "false",
  "symbol": "string"
}
```

Options corporate action of cash dividend or return of capital

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|due_bill_off_date|string(date)|false|none|When due bills stop applying for this event|
|due_bill_on_date|string(date)|false|none|When due bills begin to apply for this event|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|foreign|string|true|none|Indicates if related to a non-US security. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Dividend rate per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|special|string|true|none|Indicates if this is a special dividend. Serialized as the JSON strings `"true"` or `"false"`, not a JSON boolean.|
|symbol|string|true|none|The symbol of the security involved with the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|foreign|true|
|foreign|false|
|special|true|
|special|false|

<h2 id="tocS_OpcaFSPLITActivityV2">OpcaFSPLITActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcafsplitactivityv2"></a>
<a id="schema_OpcaFSPLITActivityV2"></a>
<a id="tocSopcafsplitactivityv2"></a>
<a id="tocsopcafsplitactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Options corporate action of forward-splits

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|due_bill_redemption_date|string(date)|false|none|When due bills related to the split are redeemed|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_OpcaMAActivityV2">OpcaMAActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcamaactivityv2"></a>
<a id="schema_OpcaMAActivityV2"></a>
<a id="tocSopcamaactivityv2"></a>
<a id="tocsopcamaactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "acquiree_cusip": "string",
  "acquiree_isin": "string",
  "acquiree_rate": "string",
  "acquiree_symbol": "string",
  "acquirer_cusip": "string",
  "acquirer_isin": "string",
  "acquirer_rate": "string",
  "acquirer_symbol": "string",
  "effective_date": "1970-01-01",
  "payable_date": "1970-01-01"
}
```

Options corporate action of Mergers & Acquisitions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|acquiree_cusip|string|true|none|CUSIP of the acquiree|
|acquiree_isin|string|false|none|ISIN of the acquiree|
|acquiree_rate|string|false|none|Rate of the acquiree|
|acquiree_symbol|string|true|none|Symbol of the acquiree|
|acquirer_cusip|string|false|none|CUSIP of the acquirer|
|acquirer_isin|string|false|none|ISIN of the acquirer|
|acquirer_rate|string|false|none|Rate of the acquirer|
|acquirer_symbol|string|false|none|Symbol of the acquirer|
|effective_date|string(date)|true|none|When the merger/acquisition becomes effective|
|payable_date|string(date)|true|none|The payable date|

<h2 id="tocS_OpcaNCActivityV2">OpcaNCActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcancactivityv2"></a>
<a id="schema_OpcaNCActivityV2"></a>
<a id="tocSopcancactivityv2"></a>
<a id="tocsopcancactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "new_cusip": "string",
  "new_symbol": "string",
  "old_cusip": "string",
  "old_symbol": "string"
}
```

Options corporate action of name changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|new_cusip|string|true|none|New CUSIP for the name change|
|new_symbol|string|true|none|New symbol for the name change|
|old_cusip|string|true|none|Old CUSIP for the name change|
|old_symbol|string|true|none|Old symbol for the name change|

<h2 id="tocS_OpcaRSPLITActivityV2">OpcaRSPLITActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcarsplitactivityv2"></a>
<a id="schema_OpcaRSPLITActivityV2"></a>
<a id="tocSopcarsplitactivityv2"></a>
<a id="tocsopcarsplitactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "new_symbol": "string",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Options corporate action of reverse-splits

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|new_symbol|string|false|none|Symbol of the new security after the split|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_OpcaSDIVActivityV2">OpcaSDIVActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcasdivactivityv2"></a>
<a id="schema_OpcaSDIVActivityV2"></a>
<a id="tocSopcasdivactivityv2"></a>
<a id="tocsopcasdivactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "cusip": "string",
  "ex_date": "1970-01-01",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Options corporate action of stock dividend

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Dividend rate per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_OpcaSPINActivityV2">OpcaSPINActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcaspinactivityv2"></a>
<a id="schema_OpcaSPINActivityV2"></a>
<a id="tocSopcaspinactivityv2"></a>
<a id="tocsopcaspinactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_price": "string",
  "new_rate": "string",
  "new_symbol": "string",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "source_cusip": "string",
  "source_isin": "string",
  "source_price": "string",
  "source_rate": "string",
  "source_symbol": "string"
}
```

Options corporate action of spin-offs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|due_bill_redemption_date|string(date)|false|none|When due bills related to the spinoff are redeemed|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|new_cusip|string|true|none|CUSIP of the new security|
|new_isin|string|false|none|ISIN of the new security|
|new_price|string|true|none|Market price of new shares after the spinoff|
|new_rate|string|true|none|Ratio of new shares received|
|new_symbol|string|true|none|Symbol of the new security|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|record_date|string(date)|false|none|The record_date for this corporate action|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_isin|string|false|none|ISIN of the parent security|
|source_price|string|true|none|Market price of parent shares before the spinoff|
|source_rate|string|true|none|Ratio of parent shares|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_OpcaUSPLITActivityV2">OpcaUSPLITActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaopcausplitactivityv2"></a>
<a id="schema_OpcaUSPLITActivityV2"></a>
<a id="tocSopcausplitactivityv2"></a>
<a id="tocsopcausplitactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_contract_symbol": "string",
  "new_qty": "string",
  "old_contract_symbol": "string",
  "old_qty": "string",
  "qty": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "alternate_cusip": "string",
  "alternate_rate": "string",
  "alternate_symbol": "string",
  "effective_date": "1970-01-01",
  "new_symbol": "string",
  "old_symbol": "string"
}
```

Options corporate action of unit-splits

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_contract_symbol|string|true|none|The new contract symbol|
|new_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|old_contract_symbol|string|true|none|The old contract symbol|
|old_qty|string|false|none|used when the old contract's quantity is not equal to the new contract's quantity. Mutually exclusive with 'qty'.|
|qty|string|false|none|used when the old contract's quantity is equal to the new contract's quantity. Mutually exclusive with 'old_qty' and 'new_qty'|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|alternate_cusip|string|true|none|CUSIP for the alternate security after the split|
|alternate_rate|string|true|none|Ratio of alternate shares received|
|alternate_symbol|string|true|none|Symbol for the alternate security after the split|
|effective_date|string(date)|true|none|When the unit split becomes effective|
|new_symbol|string|true|none|Symbol of the new security after the unit split|
|old_symbol|string|true|none|The old symbol of the security involved with the activity|

<h2 id="tocS_OptionContract">OptionContract</h2>
<!-- backwards compatibility -->
<a id="schemaoptioncontract"></a>
<a id="schema_OptionContract"></a>
<a id="tocSoptioncontract"></a>
<a id="tocsoptioncontract"></a>

```json
{
  "close_price": "148.38",
  "close_price_date": "2023-12-11",
  "deliverables": [
    {
      "allocation_percentage": "100",
      "amount": "100",
      "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "delayed_settlement": false,
      "settlement_method": "CCC",
      "settlement_type": "T+2",
      "symbol": "AAPL",
      "type": "equity"
    }
  ],
  "expiration_date": "2025-06-20",
  "id": "98359ef7-5124-49f3-85ea-5cf02df6defa",
  "multiplier": "100",
  "name": "AAPL Jun 20 2025 100 Call",
  "open_interest": "237",
  "open_interest_date": "2023-12-11",
  "ppind": true,
  "root_symbol": "AAPL",
  "size": "100",
  "status": "active",
  "strike_price": "100",
  "style": "american",
  "symbol": "AAPL250620C00100000",
  "tradable": true,
  "type": "call",
  "underlying_asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "underlying_symbol": "AAPL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close_price|string|false|none|The close price of the option contract.|
|close_price_date|string(date)|false|none|The date of the close price data.|
|deliverables|[[OptionDeliverable](#schemaoptiondeliverable)]|false|none|Represents the deliverables tied to the option contract. While standard contracts entail a single deliverable, non-standard ones can encompass multiple deliverables, each potentially customized with distinct parameters.<br>This array is included in the list contracts response only if the query parameter show_deliverables=true is provided.<br>|
|expiration_date|string(date)|true|none|The expiration date of the option contract.|
|id|string(uuid)|true|none|The unique identifier of the option contract.|
|multiplier|string(decimal)|true|none|The multiplier of the option contract is crucial for calculating both the trade premium and the extended strike price. In standard contracts, the multiplier is always set to 100.<br>For instance, if a contract is traded at $1.50 and the multiplier is 100, the total amount debited when buying the contract would be $150.00.<br>Similarly, when exercising a call contract, the total cost will be equal to the strike price times the multiplier.|
|name|string|true|none|The name of the option contract.|
|open_interest|string|false|none|The open interest of the option contract.|
|open_interest_date|string(date)|false|none|The date of the open interest data.|
|ppind|boolean|true|none|The ppind (Penny Program Indicator) field indicates whether an option contract is eligible for penny price increments,<br>with `true` meaning it is part of the Penny Program and `false` meaning it is not.|
|root_symbol|string|false|none|The root symbol of the option contract.|
|size|string|true|none|Represents the number of underlying shares to be delivered in case the contract is exercised/assigned. For standard contracts, this is always 100.<br>This field should **not** be used as a multiplier, specially for non-standard contracts.|
|status|string|true|none|The status of the option contract.|
|strike_price|string(decimal)|true|none|The strike price of the option contract.|
|style|[OptionContractStyle](#schemaoptioncontractstyle)|true|none|The style of the option contract.|
|symbol|string|true|none|The symbol representing the option contract.|
|tradable|boolean|true|none|Indicates whether the option contract is tradable.|
|type|[OptionContractType](#schemaoptioncontracttype)|true|none|The type of the option contract.|
|underlying_asset_id|string(uuid)|true|none|The unique identifier of the underlying asset.|
|underlying_symbol|string|true|none|The underlying symbol of the option contract.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|style|american|
|style|european|
|type|call|
|type|put|

<h2 id="tocS_OptionContractStyle">OptionContractStyle</h2>
<!-- backwards compatibility -->
<a id="schemaoptioncontractstyle"></a>
<a id="schema_OptionContractStyle"></a>
<a id="tocSoptioncontractstyle"></a>
<a id="tocsoptioncontractstyle"></a>

```json
"american"
```

The style of the option contract.

<h2 id="tocS_OptionContractType">OptionContractType</h2>
<!-- backwards compatibility -->
<a id="schemaoptioncontracttype"></a>
<a id="schema_OptionContractType"></a>
<a id="tocSoptioncontracttype"></a>
<a id="tocsoptioncontracttype"></a>

```json
"call"
```

The type of the option contract.

<h2 id="tocS_OptionContractsResponse">OptionContractsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoptioncontractsresponse"></a>
<a id="schema_OptionContractsResponse"></a>
<a id="tocSoptioncontractsresponse"></a>
<a id="tocsoptioncontractsresponse"></a>

```json
{
  "next_page_token": "MTAwMA==",
  "option_contracts": [
    {
      "expiration_date": "2025-06-20",
      "id": "98359ef7-5124-49f3-85ea-5cf02df6defa",
      "multiplier": "100",
      "name": "AAPL Jun 20 2025 100 Call",
      "ppind": true,
      "root_symbol": "AAPL",
      "size": "100",
      "status": "active",
      "strike_price": "100",
      "style": "american",
      "symbol": "AAPL250620C00100000",
      "tradable": true,
      "type": "call",
      "underlying_asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
      "underlying_symbol": "AAPL"
    }
  ]
}
```

Paginated list of option contracts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|[NextPageToken](#schemanextpagetoken)|false|none|Use this token in your next API call to paginate through the dataset and retrieve the next page of results. A null token indicates there are no more data to fetch.<br>|
|option_contracts|[[OptionContract](#schemaoptioncontract)]|true|none|none|

<h2 id="tocS_OptionDeliverable">OptionDeliverable</h2>
<!-- backwards compatibility -->
<a id="schemaoptiondeliverable"></a>
<a id="schema_OptionDeliverable"></a>
<a id="tocSoptiondeliverable"></a>
<a id="tocsoptiondeliverable"></a>

```json
{
  "allocation_percentage": "100",
  "amount": "100",
  "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
  "delayed_settlement": false,
  "settlement_method": "CCC",
  "settlement_type": "T+2",
  "symbol": "AAPL",
  "type": "equity"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocation_percentage|string|true|none|Cost allocation percentage of the deliverable.<br>This is used to determine the cost basis of the equity shares received from the exercise, specially for non-standard contracts with multiple deliverables.<br>|
|amount|string|true|none|The deliverable amount. For cash deliverables, this is the cash amount.<br>For standard contract, this is always 100.<br>When deliverable settlement is delayed and the amount is not yet determined, this value is "0" and delayed_settlement is true.<br>|
|asset_id|string(uuid)|false|none|Unique identifier of the deliverable asset. For standard contracts, this is equivalent to underlying_asset_id of the contracts.<br>This field is not returned for cash deliverables.<br>|
|delayed_settlement|boolean|true|none|If true, the settlement of the deliverable will be delayed.<br>For instance, in the event of a contract with a delayed deliverable being exercised, both the availability of the deliverable and its settlement may be postponed beyond the typical timeframe.<br>|
|settlement_method|string|true|none|Indicates the settlement method that will be used:<br>- **BTOB**: Broker to Broker<br>- **CADF**: Cash Difference<br>- **CAFX**: Cash Fixed<br>- **CCC**: Correspondent Clearing Corp<br>|
|settlement_type|string|true|none|Indicates when the deliverable will be settled if the contract is exercised/assigned.<br>|
|symbol|string|true|none|Symbol of the deliverable. For standard contracts, this is equivalent to the underlying symbol of the contract.<br>|
|type|string|true|none|Type of deliverable, indicating whether it's cash or equity. For standard contracts, it is always "equity".<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|settlement_method|BTOB|
|settlement_method|CADF|
|settlement_method|CAFX|
|settlement_method|CCC|
|settlement_type|T+0|
|settlement_type|T+1|
|settlement_type|T+2|
|settlement_type|T+3|
|settlement_type|T+4|
|settlement_type|T+5|
|type|cash|
|type|equity|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "asset_class": "us_equity",
  "asset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "canceled_at": "1970-01-01T00:00:00Z",
  "client_order_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expired_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "extended_hours": true,
  "failed_at": "1970-01-01T00:00:00Z",
  "filled_at": "1970-01-01T00:00:00Z",
  "filled_avg_price": "string",
  "filled_qty": "string",
  "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
  "group_role": "take_profit",
  "hwm": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legs": null,
  "limit_price": "string",
  "notional": "string",
  "order_class": "bracket",
  "order_type": "string",
  "position_intent": "buy_to_open",
  "qty": "string",
  "ratio_qty": "string",
  "replaced_at": "1970-01-01T00:00:00Z",
  "replaced_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "replaces": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "side": "buy",
  "status": "new",
  "stop_price": "string",
  "submitted_at": "1970-01-01T00:00:00Z",
  "symbol": "string",
  "time_in_force": "day",
  "trail_percent": "string",
  "trail_price": "string",
  "type": "market",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

The Orders API allows a user to monitor, place and cancel their orders with Alpaca.

Each order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.

Updates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_class|[AssetClass](#schemaassetclass)|false|none|This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest/orders. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.|
|asset_id|string(uuid)|false|none|Asset ID (For options this represents the option contract ID)|
|canceled_at|string \| null(date-time)|false|none|none|
|client_order_id|string|false|none|Client unique order ID|
|created_at|string(date-time)|false|none|none|
|expired_at|string \| null(date-time)|false|none|none|
|expires_at|string(date-time)|false|none|none|
|extended_hours|boolean|false|none|If true, eligible for execution outside regular trading hours.|
|failed_at|string \| null(date-time)|false|none|none|
|filled_at|string \| null(date-time)|false|none|none|
|filled_avg_price|string \| null|false|none|Filled average price|
|filled_qty|string|false|none|Filled quantity|
|group_id|string(uuid)|false|none|Opaque identifier shared by every order in the same `bracket`, `oto`, or `oco` order, including its legs and any replacement orders. Use it to associate related orders received from the `trade_updates` stream, where `legs` is not populated. Omitted for other orders.|
|group_role|[OrderGroupRole](#schemaordergrouprole)|false|none|The role of this order within its `bracket`, `oto`, or `oco` order, identified by `group_id`.<br>- `entry`: The entry order of a `bracket` or `oto` order.<br>- `take_profit`: The take-profit limit order. For an `oco` order, this is the top-level order.<br>- `stop_loss`: The stop-loss stop or stop-limit order.<br><br>Omitted whenever `group_id` is omitted.|
|hwm|string \| null|false|none|The highest (lowest) market price seen since the trailing stop order was submitted.|
|id|string(uuid)|false|none|Order ID|
|legs|[[OrderLeg](#schemaorderleg)]|false|none|When querying non-simple order_class orders in a nested style, an array of Order entities associated with this order. Otherwise, null. Required if order class is `mleg`.|
|limit_price|string \| null|false|none|Limit price|
|notional|string \| null|true|none|Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.|
|order_class|[OrderClass](#schemaorderclass)|false|none|The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:<br>  - Equity trading: simple (or ""), oco, oto, bracket.<br>  - Options trading:<br>    - simple (or "")<br>    - mleg (required for multi-leg complex option strategies)<br>  - Crypto trading: simple (or "").|
|order_type|string|false|none|**Deprecated.** Deprecated in favour of the field "type" |
|position_intent|[PositionIntent](#schemapositionintent)|false|none|Represents the desired position strategy.|
|qty|string \| null|false|none|Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points. Required if order class is `mleg`.|
|ratio_qty|string \| null(decimal)|false|none|The proportional quantity of this leg in relation to the overall multi-leg order quantity.|
|replaced_at|string \| null(date-time)|false|none|none|
|replaced_by|string \| null(uuid)|false|none|The order ID that this order was replaced by|
|replaces|string \| null(uuid)|false|none|The order ID that this order replaces|
|side|[OrderSide](#schemaorderside)|false|none|Represents which side this order was on:<br>- buy<br>- sell<br>Required for all order classes except for mleg.|
|status|[OrderStatus](#schemaorderstatus)|false|none|An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:<br><br>- new<br>  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.<br><br>- partially_filled<br>  The order has been partially filled.<br><br>- filled<br>  The order has been filled, and no further updates will occur for the order.<br><br>- done_for_day<br>  The order is done executing for the day, and will not receive further updates until the next trading day.<br><br>- canceled<br>  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.<br><br>- expired<br>  The order has expired, and no further updates will occur for the order.<br><br>- replaced<br>  The order was replaced by another order, or was updated due to a market event such as corporate action.<br><br>- pending_cancel<br>  The order is waiting to be canceled.<br><br>- pending_replace<br>  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.<br><br>Less common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:<br><br>- accepted<br>  The order has been received by Alpaca, but hasn't yet been routed to the execution venue. This could be seen often out side of trading session hours.<br><br>- pending_new<br>  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.<br><br>- accepted_for_bidding<br>  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.<br><br>- stopped<br>  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.<br><br>- rejected<br>  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.<br><br>- suspended<br>  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.<br><br>- calculated<br>  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.<br><br><br>An order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.|
|stop_price|string \| null|false|none|Stop price|
|submitted_at|string(date-time)|false|none|none|
|symbol|string|false|none|Asset symbol, required for all order classes except for `mleg`|
|time_in_force|[TimeInForce](#schematimeinforce)|true|none|The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:<br>- Equity trading: day, gtc, opg, cls, ioc, fok.<br>- Options trading: day, gtc.<br>- Crypto trading: gtc, ioc.<br><br>Below are the descriptions of each TIF:<br>- day:<br>  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.<br><br>- gtc:<br>  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.<br><br>- opg:<br>  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.<br><br>- cls:<br>  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.<br><br>- ioc:<br>  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.<br><br>- fok:<br>  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.|
|trail_percent|string \| null|false|none|The percent value away from the high water mark for trailing stop orders.|
|trail_price|string \| null|false|none|The dollar value away from the high water mark for trailing stop orders.|
|type|[OrderType](#schemaordertype)|true|none|The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:<br> - Equity trading: market, limit, stop, stop_limit, trailing_stop.<br> - Options trading: market, limit, stop, stop_limit.<br> - Multileg Options trading: market, limit.<br> - Crypto trading: market, limit, stop_limit.|
|updated_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|asset_class|us_equity|
|asset_class|us_option|
|asset_class|crypto|
|asset_class|crypto_perp|
|asset_class|treasury|
|asset_class|corporate|
|asset_class|global_equity|
|asset_class|us_index|
|asset_class|us_equity_chain|
|asset_class|ipo|
|group_role|entry|
|group_role|take_profit|
|group_role|stop_loss|
|order_class|simple|
|order_class|bracket|
|order_class|oco|
|order_class|oto|
|order_class|mleg|
|order_class|""|
|position_intent|buy_to_open|
|position_intent|buy_to_close|
|position_intent|sell_to_open|
|position_intent|sell_to_close|
|side|buy|
|side|sell|
|status|new|
|status|partially_filled|
|status|filled|
|status|done_for_day|
|status|canceled|
|status|expired|
|status|replaced|
|status|pending_cancel|
|status|pending_replace|
|status|accepted|
|status|pending_new|
|status|accepted_for_bidding|
|status|stopped|
|status|rejected|
|status|suspended|
|status|calculated|
|status|held|
|time_in_force|day|
|time_in_force|gtc|
|time_in_force|opg|
|time_in_force|cls|
|time_in_force|ioc|
|time_in_force|fok|
|type|market|
|type|limit|
|type|stop|
|type|stop_limit|
|type|trailing_stop|

<h2 id="tocS_OrderClass">OrderClass</h2>
<!-- backwards compatibility -->
<a id="schemaorderclass"></a>
<a id="schema_OrderClass"></a>
<a id="tocSorderclass"></a>
<a id="tocsorderclass"></a>

```json
"bracket"
```

The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:
  - Equity trading: simple (or ""), oco, oto, bracket.
  - Options trading:
    - simple (or "")
    - mleg (required for multi-leg complex option strategies)
  - Crypto trading: simple (or "").

<h2 id="tocS_OrderGroupRole">OrderGroupRole</h2>
<!-- backwards compatibility -->
<a id="schemaordergrouprole"></a>
<a id="schema_OrderGroupRole"></a>
<a id="tocSordergrouprole"></a>
<a id="tocsordergrouprole"></a>

```json
"take_profit"
```

The role of this order within its `bracket`, `oto`, or `oco` order, identified by `group_id`.
- `entry`: The entry order of a `bracket` or `oto` order.
- `take_profit`: The take-profit limit order. For an `oco` order, this is the top-level order.
- `stop_loss`: The stop-loss stop or stop-limit order.

Omitted whenever `group_id` is omitted.

<h2 id="tocS_OrderLeg">OrderLeg</h2>
<!-- backwards compatibility -->
<a id="schemaorderleg"></a>
<a id="schema_OrderLeg"></a>
<a id="tocSorderleg"></a>
<a id="tocsorderleg"></a>

```json
{
  "asset_class": "us_equity",
  "asset_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "canceled_at": "1970-01-01T00:00:00Z",
  "client_order_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expired_at": "1970-01-01T00:00:00Z",
  "extended_hours": true,
  "failed_at": "1970-01-01T00:00:00Z",
  "filled_at": "1970-01-01T00:00:00Z",
  "filled_avg_price": "string",
  "filled_qty": "string",
  "group_id": "3f1c2b7e-8d4a-4c6e-9f2a-5b7d1e0c9a84",
  "group_role": "take_profit",
  "hwm": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legs": null,
  "limit_price": "string",
  "notional": "string",
  "order_class": "bracket",
  "order_type": "string",
  "position_intent": "buy_to_open",
  "qty": "string",
  "replaced_at": "1970-01-01T00:00:00Z",
  "replaced_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "replaces": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "side": "buy",
  "status": "new",
  "stop_price": "string",
  "submitted_at": "1970-01-01T00:00:00Z",
  "symbol": "string",
  "time_in_force": "day",
  "trail_percent": "string",
  "trail_price": "string",
  "type": "market",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

This is copy of Order response schemas as a workaround of displaying issue of nested Order recursively for legs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_class|[AssetClass](#schemaassetclass)|false|none|This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest/orders. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.|
|asset_id|string(uuid)|false|none|Asset ID (For options this represents the option contract ID)|
|canceled_at|string \| null(date-time)|false|none|none|
|client_order_id|string|false|none|Client unique order ID|
|created_at|string(date-time)|false|none|none|
|expired_at|string \| null(date-time)|false|none|none|
|extended_hours|boolean|false|none|If true, eligible for execution outside regular trading hours.|
|failed_at|string \| null(date-time)|false|none|none|
|filled_at|string \| null(date-time)|false|none|none|
|filled_avg_price|string \| null|false|none|Filled average price|
|filled_qty|string|false|none|Filled quantity|
|group_id|string(uuid)|false|none|Opaque identifier shared by every order in the same `bracket`, `oto`, or `oco` order, including its legs and any replacement orders. Use it to associate related orders received from the `trade_updates` stream, where `legs` is not populated. Omitted for other orders.|
|group_role|[OrderGroupRole](#schemaordergrouprole)|false|none|The role of this order within its `bracket`, `oto`, or `oco` order, identified by `group_id`.<br>- `entry`: The entry order of a `bracket` or `oto` order.<br>- `take_profit`: The take-profit limit order. For an `oco` order, this is the top-level order.<br>- `stop_loss`: The stop-loss stop or stop-limit order.<br><br>Omitted whenever `group_id` is omitted.|
|hwm|string \| null|false|none|The highest (lowest) market price seen since the trailing stop order was submitted.|
|id|string(uuid)|false|none|Order ID|
|legs|[object]|false|none|Always null for an order leg; legs are not nested beyond one level. An empty array is accepted for generated-client compatibility.|
|limit_price|string \| null|false|none|Limit price|
|notional|string \| null|true|none|Ordered notional amount. If entered, qty will be null. Can take up to 9 decimal points.|
|order_class|[OrderClass](#schemaorderclass)|false|none|The order classes supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order classes for each category:<br>  - Equity trading: simple (or ""), oco, oto, bracket.<br>  - Options trading:<br>    - simple (or "")<br>    - mleg (required for multi-leg complex option strategies)<br>  - Crypto trading: simple (or "").|
|order_type|string|false|none|**Deprecated.** Deprecated in favour of the field "type" |
|position_intent|[PositionIntent](#schemapositionintent)|false|none|Represents the desired position strategy.|
|qty|string \| null|true|none|Ordered quantity. If entered, notional will be null. Can take up to 9 decimal points.|
|replaced_at|string \| null(date-time)|false|none|none|
|replaced_by|string \| null(uuid)|false|none|The order ID that this order was replaced by|
|replaces|string \| null(uuid)|false|none|The order ID that this order replaces|
|side|[OrderSide](#schemaorderside)|true|none|Represents which side this order was on:<br>- buy<br>- sell<br>Required for all order classes except for mleg.|
|status|[OrderStatus](#schemaorderstatus)|false|none|An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:<br><br>- new<br>  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.<br><br>- partially_filled<br>  The order has been partially filled.<br><br>- filled<br>  The order has been filled, and no further updates will occur for the order.<br><br>- done_for_day<br>  The order is done executing for the day, and will not receive further updates until the next trading day.<br><br>- canceled<br>  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.<br><br>- expired<br>  The order has expired, and no further updates will occur for the order.<br><br>- replaced<br>  The order was replaced by another order, or was updated due to a market event such as corporate action.<br><br>- pending_cancel<br>  The order is waiting to be canceled.<br><br>- pending_replace<br>  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.<br><br>Less common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:<br><br>- accepted<br>  The order has been received by Alpaca, but hasn't yet been routed to the execution venue. This could be seen often out side of trading session hours.<br><br>- pending_new<br>  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.<br><br>- accepted_for_bidding<br>  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.<br><br>- stopped<br>  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.<br><br>- rejected<br>  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.<br><br>- suspended<br>  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.<br><br>- calculated<br>  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.<br><br><br>An order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.|
|stop_price|string \| null|false|none|Stop price|
|submitted_at|string(date-time)|false|none|none|
|symbol|string|true|none|Asset symbol|
|time_in_force|[TimeInForce](#schematimeinforce)|true|none|The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:<br>- Equity trading: day, gtc, opg, cls, ioc, fok.<br>- Options trading: day, gtc.<br>- Crypto trading: gtc, ioc.<br><br>Below are the descriptions of each TIF:<br>- day:<br>  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.<br><br>- gtc:<br>  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.<br><br>- opg:<br>  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.<br><br>- cls:<br>  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.<br><br>- ioc:<br>  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.<br><br>- fok:<br>  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.|
|trail_percent|string \| null|false|none|The percent value away from the high water mark for trailing stop orders.|
|trail_price|string \| null|false|none|The dollar value away from the high water mark for trailing stop orders.|
|type|[OrderType](#schemaordertype)|true|none|The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:<br> - Equity trading: market, limit, stop, stop_limit, trailing_stop.<br> - Options trading: market, limit, stop, stop_limit.<br> - Multileg Options trading: market, limit.<br> - Crypto trading: market, limit, stop_limit.|
|updated_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|asset_class|us_equity|
|asset_class|us_option|
|asset_class|crypto|
|asset_class|crypto_perp|
|asset_class|treasury|
|asset_class|corporate|
|asset_class|global_equity|
|asset_class|us_index|
|asset_class|us_equity_chain|
|asset_class|ipo|
|group_role|entry|
|group_role|take_profit|
|group_role|stop_loss|
|order_class|simple|
|order_class|bracket|
|order_class|oco|
|order_class|oto|
|order_class|mleg|
|order_class|""|
|position_intent|buy_to_open|
|position_intent|buy_to_close|
|position_intent|sell_to_open|
|position_intent|sell_to_close|
|side|buy|
|side|sell|
|status|new|
|status|partially_filled|
|status|filled|
|status|done_for_day|
|status|canceled|
|status|expired|
|status|replaced|
|status|pending_cancel|
|status|pending_replace|
|status|accepted|
|status|pending_new|
|status|accepted_for_bidding|
|status|stopped|
|status|rejected|
|status|suspended|
|status|calculated|
|status|held|
|time_in_force|day|
|time_in_force|gtc|
|time_in_force|opg|
|time_in_force|cls|
|time_in_force|ioc|
|time_in_force|fok|
|type|market|
|type|limit|
|type|stop|
|type|stop_limit|
|type|trailing_stop|

<h2 id="tocS_OrderSide">OrderSide</h2>
<!-- backwards compatibility -->
<a id="schemaorderside"></a>
<a id="schema_OrderSide"></a>
<a id="tocSorderside"></a>
<a id="tocsorderside"></a>

```json
"buy"
```

Represents which side this order was on:
- buy
- sell
Required for all order classes except for mleg.

<h2 id="tocS_OrderStatus">OrderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorderstatus"></a>
<a id="schema_OrderStatus"></a>
<a id="tocSorderstatus"></a>
<a id="tocsorderstatus"></a>

```json
"new"
```

An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:

- new
  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.

- partially_filled
  The order has been partially filled.

- filled
  The order has been filled, and no further updates will occur for the order.

- done_for_day
  The order is done executing for the day, and will not receive further updates until the next trading day.

- canceled
  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.

- expired
  The order has expired, and no further updates will occur for the order.

- replaced
  The order was replaced by another order, or was updated due to a market event such as corporate action.

- pending_cancel
  The order is waiting to be canceled.

- pending_replace
  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.

Less common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:

- accepted
  The order has been received by Alpaca, but hasn't yet been routed to the execution venue. This could be seen often out side of trading session hours.

- pending_new
  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.

- accepted_for_bidding
  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.

- stopped
  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.

- rejected
  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.

- suspended
  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.

- calculated
  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.


An order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.

<h2 id="tocS_OrderType">OrderType</h2>
<!-- backwards compatibility -->
<a id="schemaordertype"></a>
<a id="schema_OrderType"></a>
<a id="tocSordertype"></a>
<a id="tocsordertype"></a>

```json
"market"
```

The order types supported by Alpaca vary based on the order's security type. The following provides a comprehensive breakdown of the supported order types for each category:
 - Equity trading: market, limit, stop, stop_limit, trailing_stop.
 - Options trading: market, limit, stop, stop_limit.
 - Multileg Options trading: market, limit.
 - Crypto trading: market, limit, stop_limit.

<h2 id="tocS_PatchOrderRequest">PatchOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchorderrequest"></a>
<a id="schema_PatchOrderRequest"></a>
<a id="tocSpatchorderrequest"></a>
<a id="tocspatchorderrequest"></a>

```json
{
  "advanced_instructions": {
    "algorithm": "DMA",
    "destination": "NYSE",
    "display_qty": "100"
  },
  "client_order_id": "string",
  "limit_price": "3.14",
  "notional": "750",
  "qty": "4",
  "stop_price": "3.14",
  "time_in_force": "day",
  "trail": "3.14"
}
```

Represents a request to patch an order.

Note: `qty` and `notional` are mutually exclusive on a single replace request. `notional` is only valid for IPO indications of interest (`asset_class: "ipo"`); non-IPO notional orders cannot be replaced at all.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advanced_instructions|[AdvancedInstructions](#schemaadvancedinstructions)|false|none|Advanced instructions for Elite Smart Router: https://docs.alpaca.markets/docs/alpaca-elite-smart-router|
|client_order_id|string|false|none|A unique identifier for the new order. Automatically generated if not sent. (<= 128 characters)|
|limit_price|string|false|none|Required if original order's `type` field was `limit` or `stop_limit`.<br>In case of `mleg`, the limit_price parameter is expressed with the following notation:<br>- A positive value indicates a debit, representing a cost or payment to be made.<br>- A negative value signifies a credit, reflecting an amount to be received.|
|notional|string|false|none|New notional (dollar amount) for the order. Only valid for IPO indications of interest (`asset_class: "ipo"`); will be rejected for any other asset class.<br>Mutually exclusive with `qty` on the same replace request.|
|qty|string|false|none|number of shares to trade.<br><br>You can only patch full shares for now.<br><br>Qty of equity fractional orders are not allowed to change. Non-IPO notional orders cannot be replaced at all - no fields (qty, limit_price, stop_price, etc.) can be modified; cancel and resubmit instead.|
|stop_price|string|false|none|required if original order type is limit or stop_limit|
|time_in_force|[TimeInForce](#schematimeinforce)|false|none|The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:<br>- Equity trading: day, gtc, opg, cls, ioc, fok.<br>- Options trading: day, gtc.<br>- Crypto trading: gtc, ioc.<br><br>Below are the descriptions of each TIF:<br>- day:<br>  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.<br><br>- gtc:<br>  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.<br><br>- opg:<br>  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.<br><br>- cls:<br>  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.<br><br>- ioc:<br>  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.<br><br>- fok:<br>  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.|
|trail|string|false|none|the new value of the trail_price or trail_percent value (works only for type="trailing_stop")|

#### Enumerated Values

|Property|Value|
|---|---|
|time_in_force|day|
|time_in_force|gtc|
|time_in_force|opg|
|time_in_force|cls|
|time_in_force|ioc|
|time_in_force|fok|

<h2 id="tocS_PortfolioHistory">PortfolioHistory</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliohistory"></a>
<a id="schema_PortfolioHistory"></a>
<a id="tocSportfoliohistory"></a>
<a id="tocsportfoliohistory"></a>

```json
{
  "base_value": 0,
  "base_value_asof": "2023-10-20",
  "cashflow": {
    "property1": [
      0
    ],
    "property2": [
      0
    ]
  },
  "equity": [
    0
  ],
  "profit_loss": [
    0
  ],
  "profit_loss_pct": [
    0.001,
    0.002
  ],
  "timeframe": "15Min",
  "timestamp": [
    0
  ]
}
```

Timeseries data for equity and profit loss information of the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_value|number \| null|true|none|Basis in dollar of the profit loss calculation.|
|base_value_asof|string(date)|false|none|If included, then it indicates that the base_value is the account's closing<br>equity value at this trading date.<br><br>If not specified, then the baseline calculation is done against the earliest returned data item. This could happen for<br>accounts without prior closing balances (e.g. new account) or for queries with 1D timeframes, where the first data point<br>is used as a reference point.<br>|
|cashflow|object|false|none|Accumulated value in dollar amount as of the end of each time window.|
|equity|[number \| null]|true|none|Equity value of the account in dollar amount as of the end of each time window.|
|profit_loss|[number \| null]|true|none|Profit/loss in dollar from the base value.|
|profit_loss_pct|[number \| null]|true|none|Profit/loss in percentage from the base value.|
|timeframe|[PortfolioHistoryTimeframe](#schemaportfoliohistorytimeframe)|true|none|An interval, duration, or window of time.|
|timestamp|[integer(int64)]|true|none|Time of each data element, left-labeled (the beginning of time window).<br><br>The values returned are in [UNIX epoch format](https://en.wikipedia.org/wiki/Unix_time).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|timeframe|1D|
|timeframe|1H|
|timeframe|15Min|
|timeframe|5Min|
|timeframe|1Min|

<h2 id="tocS_PortfolioHistoryError">PortfolioHistoryError</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliohistoryerror"></a>
<a id="schema_PortfolioHistoryError"></a>
<a id="tocSportfoliohistoryerror"></a>
<a id="tocsportfoliohistoryerror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_PortfolioHistoryTimeframe">PortfolioHistoryTimeframe</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliohistorytimeframe"></a>
<a id="schema_PortfolioHistoryTimeframe"></a>
<a id="tocSportfoliohistorytimeframe"></a>
<a id="tocsportfoliohistorytimeframe"></a>

```json
"15Min"
```

An interval, duration, or window of time.

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "asset_class": "us_equity",
  "asset_id": "904837e3-3b76-47ec-b432-046db621571b",
  "asset_marginable": true,
  "avg_entry_price": "100.0",
  "change_today": "0.0084",
  "cost_basis": "500.0",
  "current_price": "120.0",
  "exchange": "NASDAQ",
  "lastday_price": "119.0",
  "market_value": "600.0",
  "qty": "5",
  "qty_available": "4",
  "side": "long",
  "symbol": "AAPL",
  "unrealized_intraday_pl": "10.0",
  "unrealized_intraday_plpc": "0.0084",
  "unrealized_pl": "100.0",
  "unrealized_plpc": "0.20"
}
```

The positions API provides information about an account's current open positions. The response will include information such as cost basis, shares traded, and market value, which will be updated live as price information is updated. Once a position is closed, it will no longer be queryable through this API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_class|[AssetClass](#schemaassetclass)|true|none|This represents the category to which the asset belongs to. It serves to identify the nature of the financial instrument, with options including "us_equity" for U.S. equities, "us_option" for U.S. options, "crypto" for cryptocurrencies, and "ipo" for IPO indications of interest/orders. This `asset_class: ipo` value is distinct from the assets API `attributes: ["ipo"]` flag.|
|asset_id|string(uuid)|true|none|Asset ID (For options this represents the option contract ID)|
|asset_marginable|boolean|true|none|none|
|avg_entry_price|string|true|none|Average entry price of the position|
|avg_entry_swap_rate|string(decimal)|false|none|The weighted-average exchange rate at the time the position was entered.|
|change_today|string|true|none|Percent change from last day price (by a factor of 1)|
|cost_basis|string|true|none|Total cost basis in dollar|
|current_price|string|true|none|Current asset price per share|
|exchange|[ExchangeForPosition](#schemaexchangeforposition)|true|none|Represents the current exchanges Alpaca supports. List is currently:<br><br>US equities:<br>- AMEX<br>- ARCA<br>- BATS<br>- NYSE<br>- NASDAQ<br>- NYSEARCA<br>- OTC<br>- TXSE<br><br>Crypto:<br>- CRYPTO<br>- ERSX<br>- CRXL<br><br>Crypto perpetuals:<br>- ASCX<br><br>Index symbols:<br>- INDEX<br><br>INDEX is the artificial exchange for index symbols such as SPX.<br><br>Can be empty if not applicable (e.g., for options contracts)|
|lastday_price|string|true|none|Last day's asset price per share based on the closing value of the last trading day|
|market_value|string|true|none|Total dollar amount of the position|
|prev_swap_rate|string(decimal)|false|none|The exchange rate as of the previous close (i.e. yesterday's rate)|
|qty|string|true|none|The number of shares|
|qty_available|string|false|none|Total number of shares available minus open orders / locked for options covered call|
|side|string|true|none|long|
|swap_rate|string(decimal)|false|none|The current exchange rate (without mark-up) used to convert local-currency position values into USD. Present only for LCT (Local Currency Trading) accounts|
|symbol|string|true|none|Symbol name of the asset|
|unrealized_intraday_pl|string|true|none|Unrealized profit/loss in dollars for the day|
|unrealized_intraday_plpc|string|true|none|Unrealized profit/loss percent (by a factor of 1)|
|unrealized_pl|string|true|none|Unrealized profit/loss in dollars|
|unrealized_plpc|string|true|none|Unrealized profit/loss percent (by a factor of 1)|
|usd|[USDPositionValues](#schemausdpositionvalues)|false|none|Position values in USD. This is returned for LCT (non-USD) accounts only.|

#### Enumerated Values

|Property|Value|
|---|---|
|asset_class|us_equity|
|asset_class|us_option|
|asset_class|crypto|
|asset_class|crypto_perp|
|asset_class|treasury|
|asset_class|corporate|
|asset_class|global_equity|
|asset_class|us_index|
|asset_class|us_equity_chain|
|asset_class|ipo|
|exchange|AMEX|
|exchange|ARCA|
|exchange|BATS|
|exchange|NYSE|
|exchange|NASDAQ|
|exchange|NYSEARCA|
|exchange|OTC|
|exchange|CRYPTO|
|exchange|TXSE|
|exchange|ERSX|
|exchange|CRXL|
|exchange|ASCX|
|exchange|INDEX|
|exchange|""|
|side|long|
|side|short|

<h2 id="tocS_PositionClosedResponse">PositionClosedResponse</h2>
<!-- backwards compatibility -->
<a id="schemapositionclosedresponse"></a>
<a id="schema_PositionClosedResponse"></a>
<a id="tocSpositionclosedresponse"></a>
<a id="tocspositionclosedresponse"></a>

```json
{
  "body": {
    "asset_class": "us_equity",
    "asset_id": "b0b6dd9d-8b9b-48a9-ba46-b9d54906e415",
    "canceled_at": null,
    "client_order_id": "52f8574c-96d5-49b6-94c1-2570a268434e",
    "created_at": "2022-02-04T16:53:29.53427917Z",
    "expired_at": null,
    "extended_hours": false,
    "failed_at": null,
    "filled_at": null,
    "filled_avg_price": null,
    "filled_qty": "0",
    "hwm": null,
    "id": "f7f25e89-939a-4587-aaf6-414a6b3c341d",
    "legs": null,
    "limit_price": null,
    "notional": null,
    "order_class": "",
    "order_type": "market",
    "qty": "2",
    "replaced_at": null,
    "replaced_by": null,
    "replaces": null,
    "side": "sell",
    "status": "accepted",
    "stop_price": null,
    "submitted_at": "2022-02-04T16:53:29.533738219Z",
    "symbol": "AAPL",
    "time_in_force": "day",
    "trail_percent": null,
    "trail_price": null,
    "type": "market",
    "updated_at": "2022-02-04T16:53:29.53427917Z"
  },
  "status": 200,
  "symbol": "AAPL"
}
```

Represents the result of asking the api to close a position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[Order](#schemaorder)|false|none|The Orders API allows a user to monitor, place and cancel their orders with Alpaca.<br><br>Each order has a unique identifier provided by the client. This client-side unique order ID will be automatically generated by the system if not provided by the client, and will be returned as part of the order object along with the rest of the fields described below. Once an order is placed, it can be queried using the client-side order ID to check the status.<br><br>Updates on open orders at Alpaca will also be sent over the streaming interface, which is the recommended method of maintaining order state.|
|status|integer|true|none|HTTP status code for the attempt to close this position|
|symbol|string|true|none|Symbol name of the asset|

<h2 id="tocS_PositionIntent">PositionIntent</h2>
<!-- backwards compatibility -->
<a id="schemapositionintent"></a>
<a id="schema_PositionIntent"></a>
<a id="tocSpositionintent"></a>
<a id="tocspositionintent"></a>

```json
"buy_to_open"
```

Represents the desired position strategy.

<h2 id="tocS_REOActivityV2">REOActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemareoactivityv2"></a>
<a id="schema_REOActivityV2"></a>
<a id="tocSreoactivityv2"></a>
<a id="tocsreoactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cash_payout": "string",
  "cash_rate": "string",
  "cusip": "string",
  "effective_date": "1970-01-01",
  "isin": "string",
  "new_rate": "string",
  "payable_date": "1970-01-01",
  "qty": "string",
  "removed_qty": "string",
  "source_cusip": "string",
  "source_isin": "string",
  "source_qty": "string",
  "source_rate": "string",
  "source_symbol": "CEPT",
  "symbol": "SECZ"
}
```

Reorganization (REO)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|cash_payout|string(decimal)|false|none|Cash payout amount|
|cash_rate|string(decimal)|false|none|Cash rate per share|
|cusip|string|false|none|CUSIP received on this stock leg|
|effective_date|string(date)|false|none|Effective date of the reorganization|
|isin|string|false|none|ISIN received on this stock leg|
|new_rate|string(decimal)|false|none|New ratio for this stock leg|
|payable_date|string(date)|true|none|Payable date of the reorganization|
|qty|string(decimal)|false|none|Quantity received on this stock leg|
|removed_qty|string(decimal)|false|none|Positive quantity removed from the source position|
|source_cusip|string|true|none|CUSIP of the source security|
|source_isin|string|false|none|ISIN of the source security|
|source_qty|string(decimal)|false|none|Source position quantity|
|source_rate|string(decimal)|false|none|Source ratio for this stock leg|
|source_symbol|string|true|none|Symbol of the source security|
|symbol|string|false|none|Symbol received on this stock leg|

<h2 id="tocS_ReverseSplitActivityV2">ReverseSplitActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemareversesplitactivityv2"></a>
<a id="schema_ReverseSplitActivityV2"></a>
<a id="tocSreversesplitactivityv2"></a>
<a id="tocsreversesplitactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "new_qty": "string",
  "old_qty": "string",
  "ex_date": "1970-01-01",
  "new_symbol": "string",
  "record_date": "1970-01-01",
  "symbol": "string"
}
```

Reverse stock split

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|new_qty|string|true|none|The new quantity after the split|
|old_qty|string|true|none|The old quantity before the split|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|new_symbol|string|false|none|Symbol of the new security after the split|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_RightsDistributionActivityV2">RightsDistributionActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemarightsdistributionactivityv2"></a>
<a id="schema_RightsDistributionActivityV2"></a>
<a id="tocSrightsdistributionactivityv2"></a>
<a id="tocsrightsdistributionactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "ex_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "new_cusip": "string",
  "new_qty": "string",
  "new_symbol": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "source_cusip": "string",
  "source_qty": "string",
  "source_symbol": "string"
}
```

Rights distribution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|expiration_date|string(date)|false|none|The expiration date for the rights distribution|
|new_cusip|string|true|none|The new CUSIP|
|new_qty|string|true|none|The new quantity|
|new_symbol|string|true|none|The new symbol|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|The rate for the rights distribution|
|record_date|string(date)|false|none|The record_date for this corporate action|
|source_cusip|string|true|none|The source CUSIP|
|source_qty|string|true|none|The source quantity|
|source_symbol|string|true|none|The source symbol|

<h2 id="tocS_RightsSubscriptionElectionActivityV2">RightsSubscriptionElectionActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemarightssubscriptionelectionactivityv2"></a>
<a id="schema_RightsSubscriptionElectionActivityV2"></a>
<a id="tocSrightssubscriptionelectionactivityv2"></a>
<a id="tocsrightssubscriptionelectionactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "new_cusip": "string",
  "new_symbol": "string",
  "source_cusip": "string",
  "source_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|new_cusip|string|false|none|CUSIP of the new security|
|new_symbol|string|false|none|Symbol of the new security|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_SDIVActivityV2">SDIVActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemasdivactivityv2"></a>
<a id="schema_SDIVActivityV2"></a>
<a id="tocSsdivactivityv2"></a>
<a id="tocssdivactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cusip": "string",
  "ex_date": "1970-01-01",
  "isin": "string",
  "payable_date": "1970-01-01",
  "rate": "string",
  "record_date": "1970-01-01",
  "symbol": "string",
  "entitled_qty": "string",
  "new_qty": "string",
  "paid_qty": "string"
}
```

Stock dividend

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|isin|string|false|none|The ISIN of the security involved with the activity|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|rate|string|true|none|Dividend rate per share|
|record_date|string(date)|false|none|The record_date for this corporate action|
|symbol|string|true|none|The symbol of the security involved with the activity|
|entitled_qty|string|true|none|Quantity of shares entitled to receive the dividend|
|new_qty|string|true|none|The total number of shares after the dividend|
|paid_qty|string|true|none|The paid quantity|

<h2 id="tocS_SearchVASPsResponse">SearchVASPsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchvaspsresponse"></a>
<a id="schema_SearchVASPsResponse"></a>
<a id="tocSsearchvaspsresponse"></a>
<a id="tocssearchvaspsresponse"></a>

```json
{
  "page": 1,
  "pages": 1,
  "total": 1,
  "vasps": [
    {
      "id": "vasp-1",
      "name": "Example Exchange"
    }
  ]
}
```

Paginated VASP directory search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|none|
|pages|integer|false|none|none|
|total|integer|false|none|Total count of matching records.|
|vasps|[[VASP](#schemavasp)]|true|none|none|

<h2 id="tocS_SpinoffActivityV2">SpinoffActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaspinoffactivityv2"></a>
<a id="schema_SpinoffActivityV2"></a>
<a id="tocSspinoffactivityv2"></a>
<a id="tocsspinoffactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "due_bill_redemption_date": "1970-01-01",
  "ex_date": "1970-01-01",
  "new_cusip": "string",
  "new_isin": "string",
  "new_price": "string",
  "new_rate": "string",
  "new_symbol": "string",
  "payable_date": "1970-01-01",
  "record_date": "1970-01-01",
  "source_cusip": "string",
  "source_isin": "string",
  "source_price": "string",
  "source_rate": "string",
  "source_symbol": "string",
  "new_qty": "string",
  "source_qty": "string"
}
```

Spinoff

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|due_bill_redemption_date|string(date)|false|none|When due bills related to the spinoff are redeemed|
|ex_date|string(date)|false|none|The ex_date for this corporate action|
|new_cusip|string|true|none|CUSIP of the new security|
|new_isin|string|false|none|ISIN of the new security|
|new_price|string|true|none|Market price of new shares after the spinoff|
|new_rate|string|true|none|Ratio of new shares received|
|new_symbol|string|true|none|Symbol of the new security|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|record_date|string(date)|false|none|The record_date for this corporate action|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_isin|string|false|none|ISIN of the parent security|
|source_price|string|true|none|Market price of parent shares before the spinoff|
|source_rate|string|true|none|Ratio of parent shares|
|source_symbol|string|true|none|Symbol of the parent security|
|new_qty|string|true|none|The new quantity|
|source_qty|string|true|none|The source quantity|

<h2 id="tocS_TenderOfferActivityV2">TenderOfferActivityV2</h2>
<!-- backwards compatibility -->
<a id="schematenderofferactivityv2"></a>
<a id="schema_TenderOfferActivityV2"></a>
<a id="tocStenderofferactivityv2"></a>
<a id="tocstenderofferactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "new_cusip": "string",
  "new_symbol": "string",
  "source_cusip": "string",
  "source_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|new_cusip|string|false|none|CUSIP of the new security|
|new_symbol|string|false|none|Symbol of the new security|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_TimeInForce">TimeInForce</h2>
<!-- backwards compatibility -->
<a id="schematimeinforce"></a>
<a id="schema_TimeInForce"></a>
<a id="tocStimeinforce"></a>
<a id="tocstimeinforce"></a>

```json
"day"
```

The Time-In-Force values supported by Alpaca vary based on the order's security type. Here is a breakdown of the supported TIFs for each specific security type:
- Equity trading: day, gtc, opg, cls, ioc, fok.
- Options trading: day, gtc.
- Crypto trading: gtc, ioc.

Below are the descriptions of each TIF:
- day:
  A day order is eligible for execution only on the day it is live. By default, the order is only valid during Regular Trading Hours (9:30am - 4:00pm ET). If unfilled after the closing auction, it is automatically canceled. If submitted after the close, it is queued and submitted the following trading day. However, if marked as eligible for extended hours, the order can also execute during supported extended hours.

- gtc:
  The order is good until canceled. Non-marketable GTC limit orders are subject to price adjustments to offset corporate actions affecting the issue. We do not currently support Do Not Reduce (DNR) orders to opt out of such price adjustments.

- opg:
  Use this TIF with a market/limit order type to submit "market on open" (MOO) and "limit on open" (LOO) orders. This order is eligible to execute only in the market opening auction. Any unfilled orders after the open will be cancelled. OPG orders submitted after 9:28am but before 7:00pm ET will be rejected. OPG orders submitted after 7:00pm will be queued and routed to the following day's opening auction. On open/on close orders are routed to the primary exchange. Such orders do not necessarily execute exactly at 9:30am / 4:00pm ET but execute per the exchange's auction rules.

- cls:
  Use this TIF with a market/limit order type to submit "market on close" (MOC) and "limit on close" (LOC) orders. This order is eligible to execute only in the market closing auction. Any unfilled orders after the close will be cancelled. CLS orders submitted after 3:50pm but before 7:00pm ET will be rejected. CLS orders submitted after 7:00pm will be queued and routed to the following day's closing auction. Only available with API v2.

- ioc:
  An Immediate Or Cancel (IOC) order requires all or part of the order to be executed immediately. Any unfilled portion of the order is canceled. Only available with API v2. Most market makers who receive IOC orders will attempt to fill the order on a principal basis only, and cancel any unfilled balance. On occasion, this can result in the entire order being cancelled if the market maker does not have any existing inventory of the security in question.

- fok:
  A Fill or Kill (FOK) order is only executed if the entire order quantity can be filled, otherwise the order is canceled. Only available with API v2.

<h2 id="tocS_TokenizationIssuer">TokenizationIssuer</h2>
<!-- backwards compatibility -->
<a id="schematokenizationissuer"></a>
<a id="schema_TokenizationIssuer"></a>
<a id="tocStokenizationissuer"></a>
<a id="tocstokenizationissuer"></a>

```json
"xstocks"
```

The tokenized asset's issuer

<h2 id="tocS_TokenizationMintRequest">TokenizationMintRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizationmintrequest"></a>
<a id="schema_TokenizationMintRequest"></a>
<a id="tocStokenizationmintrequest"></a>
<a id="tocstokenizationmintrequest"></a>

```json
{
  "issuer": "xstocks",
  "network": "solana",
  "qty": "string",
  "underlying_symbol": "string",
  "wallet_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|[TokenizationIssuer](#schematokenizationissuer)|true|none|The tokenized asset's issuer|
|network|[TokenizationNetwork](#schematokenizationnetwork)|true|none|The token's blockchain network|
|qty|string|true|none|The underlying quantity to convert into the tokenized asset. It can be fractional.|
|underlying_symbol|string|true|none|The underlying asset symbol|
|wallet_address|string|true|none|The wallet address to receive the tokenized asset|

#### Enumerated Values

|Property|Value|
|---|---|
|issuer|binance|
|issuer|coinbase|
|issuer|ondo|
|issuer|st0x|
|issuer|xstocks|
|network|arbitrum|
|network|base|
|network|binance|
|network|cronos|
|network|ethereum|
|network|hypercore|
|network|hyperevm|
|network|mantle|
|network|robinhood|
|network|solana|
|network|ton|
|network|tron|

<h2 id="tocS_TokenizationMintResponse">TokenizationMintResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenizationmintresponse"></a>
<a id="schema_TokenizationMintResponse"></a>
<a id="tocStokenizationmintresponse"></a>
<a id="tocstokenizationmintresponse"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "issuer": "xstocks",
  "network": "solana",
  "qty": "string",
  "status": "completed",
  "token_symbol": "string",
  "tokenization_request_id": "string",
  "underlying_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|none|
|issuer|[TokenizationIssuer](#schematokenizationissuer)|true|none|The tokenized asset's issuer|
|network|[TokenizationNetwork](#schematokenizationnetwork)|true|none|The token's blockchain network|
|qty|string|true|none|The quantity to convert for this tokenization request. It can be fractional.|
|status|[TokenizationRequestStatus](#schematokenizationrequeststatus)|true|none|Status of the tokenization request|
|token_symbol|string|true|none|The tokenized asset symbol|
|tokenization_request_id|string|true|none|Unique identifier of the tokenization request set by Alpaca|
|underlying_symbol|string|true|none|The underlying asset symbol|

#### Enumerated Values

|Property|Value|
|---|---|
|issuer|binance|
|issuer|coinbase|
|issuer|ondo|
|issuer|st0x|
|issuer|xstocks|
|network|arbitrum|
|network|base|
|network|binance|
|network|cronos|
|network|ethereum|
|network|hypercore|
|network|hyperevm|
|network|mantle|
|network|robinhood|
|network|solana|
|network|ton|
|network|tron|
|status|pending|
|status|rejected|
|status|completed|

<h2 id="tocS_TokenizationNetwork">TokenizationNetwork</h2>
<!-- backwards compatibility -->
<a id="schematokenizationnetwork"></a>
<a id="schema_TokenizationNetwork"></a>
<a id="tocStokenizationnetwork"></a>
<a id="tocstokenizationnetwork"></a>

```json
"solana"
```

The token's blockchain network

<h2 id="tocS_TokenizationRequest">TokenizationRequest</h2>
<!-- backwards compatibility -->
<a id="schematokenizationrequest"></a>
<a id="schema_TokenizationRequest"></a>
<a id="tocStokenizationrequest"></a>
<a id="tocstokenizationrequest"></a>

```json
{
  "client_account_id": "06b9d76e-1733-460c-844e-48d1ae0f10c3",
  "client_external_account_id": "AP-EXT-001",
  "client_request_id": "ap-mint-2026-01-05-001",
  "created_at": "2026-01-02T15:04:05Z",
  "fees": null,
  "issuer": "xstocks",
  "issuer_request_id": null,
  "network": "solana",
  "qty": "10",
  "status": "completed",
  "token_symbol": "AAPLx",
  "tokenization_request_id": "5b1d6a3e-7f0a-4d2c-b8e1-9e6f1c0d2c4a",
  "transfer_status": "completed",
  "tx_hash": null,
  "type": "mint",
  "underlying_symbol": "AAPL",
  "updated_at": null,
  "wallet_address": "5dXY1aH2tQpV3wXmJg6Z7c8B4nKvF9bA1pQrSt2uVwYxXz"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_account_id|string(uuid)|false|none|Alpaca account UUID of the Authorized Participant associated with this tokenization request|
|client_external_account_id|string|false|none|Issuer-side account identifier of the Authorized Participant associated with this tokenization request|
|client_request_id|string|false|none|Authorized Participant-supplied label associated with this tokenization request|
|created_at|string(date-time)|true|none|none|
|fees|string \| null|false|none|Fees charged for this tokenization request|
|issuer|[TokenizationIssuer](#schematokenizationissuer)|true|none|The tokenized asset's issuer|
|issuer_request_id|string \| null|false|none|Unique identifier of the tokenization request set by the issuer|
|network|[TokenizationNetwork](#schematokenizationnetwork)|true|none|The token's blockchain network|
|qty|string|true|none|The quantity to convert for this tokenization request. It can be fractional.|
|status|[TokenizationRequestStatus](#schematokenizationrequeststatus)|true|none|Status of the tokenization request|
|token_symbol|string|true|none|The tokenized asset symbol|
|tokenization_request_id|string|true|none|Unique identifier of the tokenization request set by Alpaca|
|transfer_status|[TokenizationTransferStatus](#schematokenizationtransferstatus)|false|none|Whether Alpaca has moved the underlying shares for this tokenization request. Independent of `status`: `status` can stay `pending` until the issuer completes the on-chain mint or redeem, while `transfer_status` becomes `completed` as soon as the shares move.<br><br>- `pending`: the shares have not moved yet.<br>- `completed`: the shares have moved. Account activities can lag until after end-of-day posting.<br>- `rejected`: the share transfer failed.<br><br>Returned by the list and get tokenization request endpoints. Omitted when Alpaca has no share transfer for the request, for example when the request was rejected during validation.|
|tx_hash|string \| null|false|none|Transaction hash of the completed request on the blockchain|
|type|[TokenizationRequestType](#schematokenizationrequesttype)|true|none|Tokenization request type|
|underlying_symbol|string|true|none|The underlying asset symbol|
|updated_at|string \| null(date-time)|false|none|none|
|wallet_address|string|true|none|The wallet address associated with this tokenization request|

#### Enumerated Values

|Property|Value|
|---|---|
|issuer|binance|
|issuer|coinbase|
|issuer|ondo|
|issuer|st0x|
|issuer|xstocks|
|network|arbitrum|
|network|base|
|network|binance|
|network|cronos|
|network|ethereum|
|network|hypercore|
|network|hyperevm|
|network|mantle|
|network|robinhood|
|network|solana|
|network|ton|
|network|tron|
|status|pending|
|status|rejected|
|status|completed|
|transfer_status|pending|
|transfer_status|completed|
|transfer_status|rejected|
|type|mint|
|type|redeem|

<h2 id="tocS_TokenizationRequestStatus">TokenizationRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schematokenizationrequeststatus"></a>
<a id="schema_TokenizationRequestStatus"></a>
<a id="tocStokenizationrequeststatus"></a>
<a id="tocstokenizationrequeststatus"></a>

```json
"completed"
```

Status of the tokenization request

<h2 id="tocS_TokenizationRequestType">TokenizationRequestType</h2>
<!-- backwards compatibility -->
<a id="schematokenizationrequesttype"></a>
<a id="schema_TokenizationRequestType"></a>
<a id="tocStokenizationrequesttype"></a>
<a id="tocstokenizationrequesttype"></a>

```json
"mint"
```

Tokenization request type

<h2 id="tocS_TokenizationTransferStatus">TokenizationTransferStatus</h2>
<!-- backwards compatibility -->
<a id="schematokenizationtransferstatus"></a>
<a id="schema_TokenizationTransferStatus"></a>
<a id="tocStokenizationtransferstatus"></a>
<a id="tocstokenizationtransferstatus"></a>

```json
"completed"
```

Whether Alpaca has moved the underlying shares for this tokenization request. Independent of `status`: `status` can stay `pending` until the issuer completes the on-chain mint or redeem, while `transfer_status` becomes `completed` as soon as the shares move.

- `pending`: the shares have not moved yet.
- `completed`: the shares have moved. Account activities can lag until after end-of-day posting.
- `rejected`: the share transfer failed.

Returned by the list and get tokenization request endpoints. Omitted when Alpaca has no share transfer for the request, for example when the request was rejected during validation.

<h2 id="tocS_TradingActivities">TradingActivities</h2>
<!-- backwards compatibility -->
<a id="schematradingactivities"></a>
<a id="schema_TradingActivities"></a>
<a id="tocStradingactivities"></a>
<a id="tocstradingactivities"></a>

```json
{
  "activity_type": "FILL",
  "cum_qty": "2",
  "id": "20220202135509981::2d7be4ff-d1f3-43e9-856a-0f5cf5c5088e",
  "leaves_qty": "0",
  "order_id": "b5abe576-6a8a-49f3-a353-46b72c1ccae9",
  "order_status": "filled",
  "price": "174.78",
  "qty": "2",
  "side": "buy",
  "symbol": "AAPL",
  "transaction_time": "2022-02-02T18:55:09.981482Z",
  "type": "fill"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_type|[ActivityType](#schemaactivitytype)|false|none|- FILL<br>  Order fills (both partial and full fills)<br><br>- TRANS<br>  Cash transactions (both CSD and CSW)<br><br>- MISC<br>  Miscellaneous or rarely used activity types (All types except those in TRANS, DIV, or FILL)<br><br>- ACATC<br>  ACATS IN/OUT (Cash)<br><br>- ACATS<br>  ACATS IN/OUT (Securities)<br><br>- CFEE<br>  Crypto fee<br><br>- CGD<br>  Capital gains distribution<br><br>- CSD<br>  Cash deposit(+)<br><br>- CSW<br>  Cash withdrawal(-)<br><br>- DIV<br>  Dividends<br><br>- DIVCGL<br>  Dividend (capital gains long term)<br><br>- DIVCGS<br>  Dividend (capital gains short term)<br><br>- DIVFEE<br>  Dividend fee<br><br>- DIVFT<br>  Dividend adjusted (Foreign Tax Withheld)<br><br>- DIVNRA<br>  Dividend adjusted (NRA Withheld)<br><br>- DIVROC<br>  Dividend return of capital<br><br>- DIVTW<br>  Dividend adjusted (Tefra Withheld)<br><br>- DIVTXEX<br>  Dividend (tax exempt)<br><br>- FEE<br>  Fee denominated in USD<br><br>- INT<br>  Interest (credit/margin)<br><br>- INTNRA<br>  Interest adjusted (NRA Withheld)<br><br>- INTTW<br>  Interest adjusted (Tefra Withheld)<br><br>- JNL<br>  Journal entry<br><br>- JNLC<br>  Journal entry (cash)<br><br>- JNLS<br>  Journal entry (stock)<br><br>- MA<br>  Merger/Acquisition<br><br>- NC<br>  Name change<br><br>- OPASN<br>  Option assignment<br><br>- OPCA<br>  Option corporate action<br><br>- OPCSH<br>  Option cash deliverable for non-standard contracts<br><br>- OPEXC<br>  Option exercise<br><br>- OPEXP<br>  Option expiration<br><br>- OPTRD<br>  Option trade<br><br>- PTC<br>  Pass Thru Charge<br><br>- PTR<br>  Pass Thru Rebate<br><br>- REO<br>  Reorganization<br><br>- REORG<br>  Worthless removal CA<br><br>- SPIN<br>  Stock spinoff<br><br>- SPLIT<br>  Stock split<br><br>- FOPT<br>  Free of Payment Transfers<br><br>- OCT<br>  On chain transactions (blockchain deposits/withdrawals)|
|cum_qty|string|false|none|The cumulative quantity of shares involved in the execution.|
|id|string|false|none|An id for the activity. Always in "::" format. Can be sent as page_token in requests to facilitate the paging of results.|
|leaves_qty|string|false|none|For partially_filled orders, the quantity of shares that are left to be filled.<br>|
|order_id|string(uuid)|false|none|The id for the order that filled.|
|order_status|[OrderStatus](#schemaorderstatus)|false|none|An order executed through Alpaca can experience several status changes during its lifecycle. The most common statuses are described in detail below:<br><br>- new<br>  The order has been received by Alpaca, and routed to exchanges for execution. This is the usual initial state of an order.<br><br>- partially_filled<br>  The order has been partially filled.<br><br>- filled<br>  The order has been filled, and no further updates will occur for the order.<br><br>- done_for_day<br>  The order is done executing for the day, and will not receive further updates until the next trading day.<br><br>- canceled<br>  The order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force.<br><br>- expired<br>  The order has expired, and no further updates will occur for the order.<br><br>- replaced<br>  The order was replaced by another order, or was updated due to a market event such as corporate action.<br><br>- pending_cancel<br>  The order is waiting to be canceled.<br><br>- pending_replace<br>  The order is waiting to be replaced by another order. The order will reject cancel request while in this state.<br><br>Less common states are described below. Note that these states only occur on very rare occasions, and most users will likely never see their orders reach these states:<br><br>- accepted<br>  The order has been received by Alpaca, but hasn't yet been routed to the execution venue. This could be seen often out side of trading session hours.<br><br>- pending_new<br>  The order has been received by Alpaca, and routed to the exchanges, but has not yet been accepted for execution. This state only occurs on rare occasions.<br><br>- accepted_for_bidding<br>  The order has been received by exchanges, and is evaluated for pricing. This state only occurs on rare occasions.<br><br>- stopped<br>  The order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. This state only occurs on rare occasions.<br><br>- rejected<br>  The order has been rejected, and no further updates will occur for the order. This state occurs on rare occasions and may occur based on various conditions decided by the exchanges.<br><br>- suspended<br>  The order has been suspended, and is not eligible for trading. This state only occurs on rare occasions.<br><br>- calculated<br>  The order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. This state only occurs on rare occasions.<br><br><br>An order may be canceled through the API up until the point it reaches a state of either filled, canceled, or expired.|
|price|string|false|none|The per-share price that the trade was executed at.|
|qty|string|false|none|The number of shares involved in the trade execution.|
|side|string|false|none|buy or sell|
|symbol|string|false|none|The symbol of the security being traded.|
|transaction_time|string(date-time)|false|none|The time at which the execution occurred.|
|type|string|false|none|fill or partial_fill|

#### Enumerated Values

|Property|Value|
|---|---|
|activity_type|FILL|
|activity_type|TRANS|
|activity_type|MISC|
|activity_type|ACATC|
|activity_type|ACATS|
|activity_type|CFEE|
|activity_type|CGD|
|activity_type|CSD|
|activity_type|CSW|
|activity_type|DIV|
|activity_type|DIVCGL|
|activity_type|DIVCGS|
|activity_type|DIVFEE|
|activity_type|DIVFT|
|activity_type|DIVNRA|
|activity_type|DIVROC|
|activity_type|DIVTW|
|activity_type|DIVTXEX|
|activity_type|FEE|
|activity_type|INT|
|activity_type|INTNRA|
|activity_type|INTTW|
|activity_type|JNL|
|activity_type|JNLC|
|activity_type|JNLS|
|activity_type|MA|
|activity_type|NC|
|activity_type|OPASN|
|activity_type|OPCA|
|activity_type|OPCSH|
|activity_type|OPEXC|
|activity_type|OPEXP|
|activity_type|OPTRD|
|activity_type|PTC|
|activity_type|PTR|
|activity_type|REO|
|activity_type|REORG|
|activity_type|SPIN|
|activity_type|SPLIT|
|activity_type|FOPT|
|activity_type|OCT|
|order_status|new|
|order_status|partially_filled|
|order_status|filled|
|order_status|done_for_day|
|order_status|canceled|
|order_status|expired|
|order_status|replaced|
|order_status|pending_cancel|
|order_status|pending_replace|
|order_status|accepted|
|order_status|pending_new|
|order_status|accepted_for_bidding|
|order_status|stopped|
|order_status|rejected|
|order_status|suspended|
|order_status|calculated|
|order_status|held|
|type|fill|
|type|partial_fill|

<h2 id="tocS_TransferDirection">TransferDirection</h2>
<!-- backwards compatibility -->
<a id="schematransferdirection"></a>
<a id="schema_TransferDirection"></a>
<a id="tocStransferdirection"></a>
<a id="tocstransferdirection"></a>

```json
"INCOMING"
```

<h2 id="tocS_TravelRuleErrorResponse">TravelRuleErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schematravelruleerrorresponse"></a>
<a id="schema_TravelRuleErrorResponse"></a>
<a id="tocStravelruleerrorresponse"></a>
<a id="tocstravelruleerrorresponse"></a>

```json
{
  "error_code": "BENEFICIARY_NAME_REQUIRED",
  "message": "Please provide the beneficiary's name. Select one of the following options.",
  "next_actions": [
    {
      "description": "Provide the recipient's first and last name.",
      "name": "supply_beneficiaryName_naturalPerson",
      "required_fields": [
        {
          "description": "The recipient's first name.",
          "field": "beneficiary_given_name",
          "value_type": "string"
        },
        {
          "description": "The recipient's last name.",
          "field": "beneficiary_family_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    },
    {
      "description": "Provide the entity's legal name.",
      "name": "supply_beneficiaryName_legalEntity",
      "required_fields": [
        {
          "description": "The legal name of the receiving entity.",
          "field": "beneficiary_entity_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    }
  ]
}
```

A wallet or travel rule validation error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TravelRuleValidationError](#schematravelrulevalidationerror)|false|none|Travel rule validation failure and the actions required to correct it.|
|*oneOf*|[WalletError](#schemawalleterror)|false|none|A wallet error response.|

<h2 id="tocS_TravelRuleFieldOption">TravelRuleFieldOption</h2>
<!-- backwards compatibility -->
<a id="schematravelrulefieldoption"></a>
<a id="schema_TravelRuleFieldOption"></a>
<a id="tocStravelrulefieldoption"></a>
<a id="tocstravelrulefieldoption"></a>

```json
{
  "description": "string",
  "value": "string"
}
```

Allowed value for a travel rule field that accepts a fixed set of choices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_TravelRuleInfo">TravelRuleInfo</h2>
<!-- backwards compatibility -->
<a id="schematravelruleinfo"></a>
<a id="schema_TravelRuleInfo"></a>
<a id="tocStravelruleinfo"></a>
<a id="tocstravelruleinfo"></a>

```json
{
  "beneficiary_country_of_residence": "US",
  "beneficiary_entity_name": "Alpaca Crypto LLC",
  "beneficiary_family_name": "Doe",
  "beneficiary_geographic_address_building_number": "1",
  "beneficiary_geographic_address_country": "US",
  "beneficiary_geographic_address_post_code": "10001",
  "beneficiary_geographic_address_street_name": "Main Street",
  "beneficiary_geographic_address_town_name": "New York",
  "beneficiary_given_name": "John",
  "beneficiary_is_self_hosted": true,
  "beneficiary_manual_entry": {
    "vasp_name": "Alpaca",
    "vasp_website": "https://alpaca.markets"
  },
  "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
}
```

Travel rule information pertaining to the wallet being whitelisted. Identify the destination by providing beneficiary_vasp_id, setting beneficiary_is_self_hosted to true, or providing beneficiary_manual_entry. Either beneficiary_entity_name (for legal entities) or beneficiary_given_name and beneficiary_family_name (for natural persons) must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiary_country_of_residence|string|false|none|ISO 3166-1 country code for the beneficiary's country of residence.|
|beneficiary_entity_name|string|false|none|The beneficiary's legal entity name (required for legal entities)|
|beneficiary_family_name|string|false|none|The beneficiary's last name (required for natural persons)|
|beneficiary_geographic_address_building_number|string|false|none|Building number in the beneficiary's geographic address.|
|beneficiary_geographic_address_country|string|false|none|ISO 3166-1 alpha-2 or alpha-3 country code in the beneficiary's geographic address.|
|beneficiary_geographic_address_post_code|string|false|none|Postal code in the beneficiary's geographic address.|
|beneficiary_geographic_address_street_name|string|false|none|Street name in the beneficiary's geographic address.|
|beneficiary_geographic_address_town_name|string|false|none|Town or city in the beneficiary's geographic address.|
|beneficiary_given_name|string|false|none|The beneficiary's first name (required for natural persons)|
|beneficiary_is_self_hosted|boolean|false|none|Beneficiary is receiving funds to a self-hosted / non-custodial wallet|
|beneficiary_manual_entry|[TravelRuleManualEntry](#schematravelrulemanualentry)|false|none|Information about a beneficiary VASP that is not available in the VASP directory.|
|beneficiary_vasp_id|string|false|none|The W3C Decentralized Identifier (DID) representing the beneficiary's VASP.|

<h2 id="tocS_TravelRuleManualEntry">TravelRuleManualEntry</h2>
<!-- backwards compatibility -->
<a id="schematravelrulemanualentry"></a>
<a id="schema_TravelRuleManualEntry"></a>
<a id="tocStravelrulemanualentry"></a>
<a id="tocstravelrulemanualentry"></a>

```json
{
  "vasp_name": "Alpaca",
  "vasp_website": "https://alpaca.markets"
}
```

Information about a beneficiary VASP that is not available in the VASP directory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vasp_name|string|true|none|The name of the receiving exchange.|
|vasp_website|string(uri)|true|none|The receiving exchange's website.|

<h2 id="tocS_TravelRuleNextAction">TravelRuleNextAction</h2>
<!-- backwards compatibility -->
<a id="schematravelrulenextaction"></a>
<a id="schema_TravelRuleNextAction"></a>
<a id="tocStravelrulenextaction"></a>
<a id="tocstravelrulenextaction"></a>

```json
{
  "description": "string",
  "name": "string",
  "required_fields": [
    {
      "description": "string",
      "field": "string",
      "options": [
        {
          "description": "string",
          "value": "string"
        }
      ],
      "value_type": "string"
    }
  ],
  "type": "REQUIRED"
}
```

Action the client must take to satisfy travel rule requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|name|string|true|none|none|
|required_fields|[[TravelRuleRequiredField](#schematravelrulerequiredfield)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|REQUIRED|
|type|ONE_OF|

<h2 id="tocS_TravelRuleRequiredField">TravelRuleRequiredField</h2>
<!-- backwards compatibility -->
<a id="schematravelrulerequiredfield"></a>
<a id="schema_TravelRuleRequiredField"></a>
<a id="tocStravelrulerequiredfield"></a>
<a id="tocstravelrulerequiredfield"></a>

```json
{
  "description": "string",
  "field": "string",
  "options": [
    {
      "description": "string",
      "value": "string"
    }
  ],
  "value_type": "string"
}
```

Request field required to complete a travel rule action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|field|string|true|none|none|
|options|[[TravelRuleFieldOption](#schematravelrulefieldoption)]|false|none|List of valid choices for 'enum' types. Null for simple strings or booleans.|
|value_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|value_type|string|
|value_type|bool|

<h2 id="tocS_TravelRuleValidationError">TravelRuleValidationError</h2>
<!-- backwards compatibility -->
<a id="schematravelrulevalidationerror"></a>
<a id="schema_TravelRuleValidationError"></a>
<a id="tocStravelrulevalidationerror"></a>
<a id="tocstravelrulevalidationerror"></a>

```json
{
  "error_code": "BENEFICIARY_NAME_REQUIRED",
  "message": "Please provide the beneficiary's name. Select one of the following options.",
  "next_actions": [
    {
      "description": "Provide the recipient's first and last name.",
      "name": "supply_beneficiaryName_naturalPerson",
      "required_fields": [
        {
          "description": "The recipient's first name.",
          "field": "beneficiary_given_name",
          "value_type": "string"
        },
        {
          "description": "The recipient's last name.",
          "field": "beneficiary_family_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    },
    {
      "description": "Provide the entity's legal name.",
      "name": "supply_beneficiaryName_legalEntity",
      "required_fields": [
        {
          "description": "The legal name of the receiving entity.",
          "field": "beneficiary_entity_name",
          "value_type": "string"
        }
      ],
      "type": "ONE_OF"
    }
  ]
}
```

Travel rule validation failure and the actions required to correct it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|[TravelRuleValidationErrorCode](#schematravelrulevalidationerrorcode)|true|none|Machine-readable code identifying the travel rule validation failure.|
|message|string|true|none|none|
|next_actions|[[TravelRuleNextAction](#schematravelrulenextaction)]|true|none|A list of actions to be taken to fulfill information requirements.|

#### Enumerated Values

|Property|Value|
|---|---|
|error_code|INVALID_DATA|
|error_code|UNKNOWN_VASP|
|error_code|ADDRESS_BELONGS_TO_VASP|
|error_code|TRAVEL_RULE_ACTION_REQUIRED|
|error_code|BENEFICIARY_NAME_REQUIRED|

<h2 id="tocS_TravelRuleValidationErrorCode">TravelRuleValidationErrorCode</h2>
<!-- backwards compatibility -->
<a id="schematravelrulevalidationerrorcode"></a>
<a id="schema_TravelRuleValidationErrorCode"></a>
<a id="tocStravelrulevalidationerrorcode"></a>
<a id="tocstravelrulevalidationerrorcode"></a>

```json
"BENEFICIARY_NAME_REQUIRED"
```

Machine-readable code identifying the travel rule validation failure.

<h2 id="tocS_USDPositionValues">USDPositionValues</h2>
<!-- backwards compatibility -->
<a id="schemausdpositionvalues"></a>
<a id="schema_USDPositionValues"></a>
<a id="tocSusdpositionvalues"></a>
<a id="tocsusdpositionvalues"></a>

```json
{
  "avg_entry_price": "71.43",
  "change_today": "0.67",
  "cost_basis": "333.33",
  "current_price": "80.0",
  "lastday_price": "79.33",
  "market_value": "400.00",
  "unrealized_intraday_pl": "6.67",
  "unrealized_intraday_plpc": "0.0084",
  "unrealized_pl": "66.67",
  "unrealized_plpc": "0.2"
}
```

Position values in USD. This is returned for LCT (non-USD) accounts only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_entry_price|string(decimal)|true|none|Average entry price of the position in USD|
|change_today|string(decimal)|false|none|Percent change from last day price (by a factor of 1)|
|cost_basis|string(decimal)|true|none|Total cost basis in USD|
|current_price|string(decimal)|false|none|Current asset price per share in USD|
|lastday_price|string(decimal)|false|none|Last day's asset price per share based on the closing value of the last trading day in USD|
|market_value|string(decimal)|false|none|Total market value of the position in USD|
|unrealized_intraday_pl|string(decimal)|false|none|Unrealized profit/loss in USD for the day|
|unrealized_intraday_plpc|string(decimal)|false|none|Unrealized intraday profit/loss percent (by a factor of 1)|
|unrealized_pl|string(decimal)|false|none|Unrealized profit/loss in USD|
|unrealized_plpc|string(decimal)|false|none|Unrealized profit/loss percent (by a factor of 1)|

<h2 id="tocS_UnitSplitActivityV2">UnitSplitActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemaunitsplitactivityv2"></a>
<a id="schema_UnitSplitActivityV2"></a>
<a id="tocSunitsplitactivityv2"></a>
<a id="tocsunitsplitactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "new_cusip": "string",
  "new_isin": "string",
  "new_rate": "string",
  "old_cusip": "string",
  "old_isin": "string",
  "old_rate": "string",
  "payable_date": "1970-01-01",
  "new_qty": "string",
  "old_qty": "string",
  "alternate_cusip": "string",
  "alternate_isin": "string",
  "alternate_qty": "string",
  "alternate_rate": "string",
  "alternate_symbol": "string",
  "effective_date": "1970-01-01",
  "new_symbol": "string",
  "old_symbol": "string"
}
```

Unit split

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|new_cusip|string|true|none|CUSIP of the new security after the split|
|new_isin|string|false|none|ISIN of the new security after the split|
|new_rate|string|true|none|Ratio of new shares received|
|old_cusip|string|true|none|CUSIP of the old security before the split|
|old_isin|string|false|none|ISIN of the old security before the split|
|old_rate|string|true|none|Ratio of old shares exchanged|
|payable_date|string(date)|false|none|The payable_date for this corporate action|
|new_qty|string|true|none|The new quantity after the split|
|old_qty|string|true|none|The old quantity before the split|
|alternate_cusip|string|true|none|CUSIP for the alternate security after the split|
|alternate_isin|string|false|none|ISIN for the alternate security after the split|
|alternate_qty|string|true|none|Quantity of alternate shares received|
|alternate_rate|string|true|none|Ratio of alternate shares received|
|alternate_symbol|string|true|none|Symbol for the alternate security after the split|
|effective_date|string(date)|true|none|When the unit split becomes effective|
|new_symbol|string|true|none|Symbol of the new security after the split|
|old_symbol|string|true|none|Symbol of the old security before the split|

<h2 id="tocS_UpdateWatchlistRequest">UpdateWatchlistRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewatchlistrequest"></a>
<a id="schema_UpdateWatchlistRequest"></a>
<a id="tocSupdatewatchlistrequest"></a>
<a id="tocsupdatewatchlistrequest"></a>

```json
{
  "name": "string",
  "symbols": [
    "string"
  ]
}
```

Request format used for updating an existing watchlist with a set of assets and/or a name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The new watchlist name.|
|symbols|[string]|false|none|List of asset symbols to include in the watchlist. The existing assets will be replaced with the new list.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

<h2 id="tocS_UpdateWhitelistedAddressTravelRuleInfoRequest">UpdateWhitelistedAddressTravelRuleInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewhitelistedaddresstravelruleinforequest"></a>
<a id="schema_UpdateWhitelistedAddressTravelRuleInfoRequest"></a>
<a id="tocSupdatewhitelistedaddresstravelruleinforequest"></a>
<a id="tocsupdatewhitelistedaddresstravelruleinforequest"></a>

```json
{
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

Travel rule information to associate with a whitelisted address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|travel_rule_info|[TravelRuleInfo](#schematravelruleinfo)|true|none|Travel rule information pertaining to the wallet being whitelisted. Identify the destination by providing beneficiary_vasp_id, setting beneficiary_is_self_hosted to true, or providing beneficiary_manual_entry. Either beneficiary_entity_name (for legal entities) or beneficiary_given_name and beneficiary_family_name (for natural persons) must be provided.|

<h2 id="tocS_VASP">VASP</h2>
<!-- backwards compatibility -->
<a id="schemavasp"></a>
<a id="schema_VASP"></a>
<a id="tocSvasp"></a>
<a id="tocsvasp"></a>

```json
{
  "address": "string",
  "city": "string",
  "country": "US",
  "did": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4",
  "emailDomain": "string",
  "id": "vasp-1",
  "name": "string",
  "postalCode": "string",
  "state": "string",
  "website": "http://example.com"
}
```

Virtual Asset Service Provider returned by the directory search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|ISO 3166-1 alpha-2 country code for the VASP.|
|did|string|false|none|The W3C Decentralized Identifier (DID) representing the VASP.|
|emailDomain|string|false|none|none|
|id|string|true|none|Opaque identifier for the VASP directory record.|
|name|string|true|none|none|
|postalCode|string|false|none|none|
|state|string|false|none|none|
|website|string(uri)|false|none|none|

<h2 id="tocS_WRMActivityV2">WRMActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemawrmactivityv2"></a>
<a id="schema_WRMActivityV2"></a>
<a id="tocSwrmactivityv2"></a>
<a id="tocswrmactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "ca_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "position_date": "1970-01-01",
  "reorg_id": "string",
  "cusip": "string",
  "isin": "string",
  "removed_qty": "string",
  "symbol": "string"
}
```

Worthless Removal

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|ca_id|string(uuid)|false|none|The unique identifier for this corporate action|
|position_date|string(date)|true|none|The position_date for this corporate action|
|reorg_id|string|false|none|The reorg identifier, if present in the source corporate action definition|
|cusip|string|true|none|The CUSIP of the security involved with the activity|
|isin|string|false|none|The ISIN of the security involved with the activity|
|removed_qty|string|true|none|The removed quantity|
|symbol|string|true|none|The symbol of the security involved with the activity|

<h2 id="tocS_WalletError">WalletError</h2>
<!-- backwards compatibility -->
<a id="schemawalleterror"></a>
<a id="schema_WalletError"></a>
<a id="tocSwalleterror"></a>
<a id="tocswalleterror"></a>

```json
{
  "message": "travel_rule_info is missing"
}
```

A wallet error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_WalletFeeEstimateResponse">WalletFeeEstimateResponse</h2>
<!-- backwards compatibility -->
<a id="schemawalletfeeestimateresponse"></a>
<a id="schema_WalletFeeEstimateResponse"></a>
<a id="tocSwalletfeeestimateresponse"></a>
<a id="tocswalletfeeestimateresponse"></a>

```json
{
  "fee": "0.0505",
  "network_fee": "0.0825"
}
```

Estimated on-chain fee breakdown for a proposed crypto withdrawal, including the total fee and the underlying network (gas) fee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fee|string(decimal)|false|none|none|
|network_fee|string(decimal)|false|none|none|

<h2 id="tocS_WarrantExerciseElectionActivityV2">WarrantExerciseElectionActivityV2</h2>
<!-- backwards compatibility -->
<a id="schemawarrantexerciseelectionactivityv2"></a>
<a id="schema_WarrantExerciseElectionActivityV2"></a>
<a id="tocSwarrantexerciseelectionactivityv2"></a>
<a id="tocswarrantexerciseelectionactivityv2"></a>

```json
{
  "group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "system_date": "1970-01-01",
  "new_cusip": "string",
  "new_symbol": "string",
  "source_cusip": "string",
  "source_symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|string(uuid)|false|none|Optional group ID which can help grouping together related activities|
|system_date|string(date)|true|none|The date when the activity was booked|
|new_cusip|string|false|none|CUSIP of the new security|
|new_symbol|string|false|none|Symbol of the new security|
|source_cusip|string|true|none|CUSIP of the parent security|
|source_symbol|string|true|none|Symbol of the parent security|

<h2 id="tocS_Watchlist">Watchlist</h2>
<!-- backwards compatibility -->
<a id="schemawatchlist"></a>
<a id="schema_Watchlist"></a>
<a id="tocSwatchlist"></a>
<a id="tocswatchlist"></a>

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "assets": [
    {
      "class": "us_equity",
      "easy_to_borrow": true,
      "exchange": "NASDAQ",
      "fractionable": true,
      "id": "8ccae427-5dd0-45b3-b5fe-7ba5e422c766",
      "marginable": true,
      "name": "Tesla, Inc. Common Stock",
      "shortable": true,
      "status": "active",
      "symbol": "TSLA",
      "tradable": true
    }
  ],
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

The watchlist API provides CRUD operation for the account's watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name. Each watchlist is an ordered list of assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|account ID|
|assets|[[Assets](#schemaassets)]|false|none|the content of this watchlist, in the order as registered by the client|
|created_at|string(date-time)|true|none|none|
|id|string(uuid)|true|none|watchlist id|
|name|string|true|none|user-defined watchlist name (up to 64 characters)|
|updated_at|string(date-time)|true|none|none|

<h2 id="tocS_WatchlistWithoutAsset">WatchlistWithoutAsset</h2>
<!-- backwards compatibility -->
<a id="schemawatchlistwithoutasset"></a>
<a id="schema_WatchlistWithoutAsset"></a>
<a id="tocSwatchlistwithoutasset"></a>
<a id="tocswatchlistwithoutasset"></a>

```json
{
  "account_id": "abe25343-a7ba-4255-bdeb-f7e013e9ee5d",
  "created_at": "2022-01-31T21:49:05.14628Z",
  "id": "3174d6df-7726-44b4-a5bd-7fda5ae6e009",
  "name": "Primary Watchlist",
  "updated_at": "2022-01-31T21:49:05.14628Z"
}
```

The watchlist API provides CRUD operation for the account's watchlist. An account can have multiple watchlists and each is uniquely identified by id but can also be addressed by user-defined name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|account ID|
|created_at|string(date-time)|true|none|none|
|id|string(uuid)|true|none|watchlist id|
|name|string|true|none|user-defined watchlist name (up to 64 characters)|
|updated_at|string(date-time)|true|none|none|

<h2 id="tocS_WhitelistedAddress">WhitelistedAddress</h2>
<!-- backwards compatibility -->
<a id="schemawhitelistedaddress"></a>
<a id="schema_WhitelistedAddress"></a>
<a id="tocSwhitelistedaddress"></a>
<a id="tocswhitelistedaddress"></a>

```json
{
  "address": "string",
  "asset": "string",
  "chain": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "string",
  "status": "APPROVED",
  "travel_rule_info": {
    "beneficiary_country_of_residence": "US",
    "beneficiary_entity_name": "Alpaca Crypto LLC",
    "beneficiary_family_name": "Doe",
    "beneficiary_geographic_address_building_number": "1",
    "beneficiary_geographic_address_country": "US",
    "beneficiary_geographic_address_post_code": "10001",
    "beneficiary_geographic_address_street_name": "Main Street",
    "beneficiary_geographic_address_town_name": "New York",
    "beneficiary_given_name": "John",
    "beneficiary_is_self_hosted": true,
    "beneficiary_manual_entry": {
      "vasp_name": "Alpaca",
      "vasp_website": "https://alpaca.markets"
    },
    "beneficiary_vasp_id": "did:ethr:0xf1c002f9e7ca88018d6dcf1e86403fb2f5f055f4"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The whitelisted address|
|asset|string|false|none|Symbol of underlying asset for the whitelisted address|
|chain|string|false|none|Underlying network this address represents|
|created_at|string(date-time)|false|none|Timestamp (RFC3339) of account creation.|
|id|string|false|none|Unique ID for whitelisted address|
|status|string|false|none|Status of whitelisted address which is either APPROVED or PENDING. Whitelisted addresses will be subjected to a 24 waiting period. After the waiting period is over the status will become APPROVED.|
|travel_rule_info|object|false|none|Travel rule information associated with the whitelisted address.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|PENDING|

<h2 id="tocS_bic">bic</h2>
<!-- backwards compatibility -->
<a id="schemabic"></a>
<a id="schema_bic"></a>
<a id="tocSbic"></a>
<a id="tocsbic"></a>

```json
"IRVTUS3NXXX"
```

Business Identifier Code (BIC/SWIFT).

<h2 id="tocS_calendar_day">calendar_day</h2>
<!-- backwards compatibility -->
<a id="schemacalendar_day"></a>
<a id="schema_calendar_day"></a>
<a id="tocScalendar_day"></a>
<a id="tocscalendar_day"></a>

```json
{
  "core_end": "2025-01-02T16:00:00-05:00",
  "core_start": "2025-01-02T09:30:00-05:00",
  "date": "2025-01-02",
  "lunch_end": "1970-01-01T00:00:00Z",
  "lunch_start": "1970-01-01T00:00:00Z",
  "post_end": "2025-01-02T20:00:00-05:00",
  "post_start": "2025-01-02T16:00:00-05:00",
  "pre_end": "2025-01-02T09:30:00-05:00",
  "pre_start": "2025-01-02T04:00:00-05:00",
  "settlement_date": "2025-01-03"
}
```

A calendar day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|core_end|string(date-time)|true|none|The end time of the core market session.|
|core_start|string(date-time)|true|none|The start time of the core market session.|
|date|string(date)|true|none|The date of the calendar day.|
|lunch_end|string(date-time)|false|none|The end time of the lunch session.|
|lunch_start|string(date-time)|false|none|The start time of the lunch session.|
|post_end|string(date-time)|false|none|The end time of the after-hours session.|
|post_start|string(date-time)|false|none|The start time of the after-hours session.|
|pre_end|string(date-time)|false|none|The end time of the pre-market session.|
|pre_start|string(date-time)|false|none|The start time of the pre-market session.|
|settlement_date|string(date)|false|none|The settlement date.|

<h2 id="tocS_clock">clock</h2>
<!-- backwards compatibility -->
<a id="schemaclock"></a>
<a id="schema_clock"></a>
<a id="tocSclock"></a>
<a id="tocsclock"></a>

```json
{
  "is_market_day": true,
  "market": {
    "acronym": "NYSE",
    "bic": "IRVTUS3NXXX",
    "mic": "XNYS",
    "name": "New York Stock Exchange",
    "timezone": "America/New_York"
  },
  "next_market_close": "1970-01-01T00:00:00Z",
  "next_market_open": "1970-01-01T00:00:00Z",
  "phase": "closed",
  "phase_until": "1970-01-01T00:00:00Z",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_market_day|boolean|true|none|Whether the clock is on a market day.|
|market|[public_market](#schemapublic_market)|true|none|A market.|
|next_market_close|string(date-time)|true|none|Next market close timestamp|
|next_market_open|string(date-time)|true|none|Next market open timestamp|
|phase|[phase](#schemaphase)|true|none|none|
|phase_until|string(date-time)|true|none|The end of the current phase.|
|timestamp|string(date-time)|true|none|The time on the clock.|

#### Enumerated Values

|Property|Value|
|---|---|
|phase|closed|
|phase|pre|
|phase|core|
|phase|lunch|
|phase|post|

<h2 id="tocS_clock_resp">clock_resp</h2>
<!-- backwards compatibility -->
<a id="schemaclock_resp"></a>
<a id="schema_clock_resp"></a>
<a id="tocSclock_resp"></a>
<a id="tocsclock_resp"></a>

```json
{
  "clocks": [
    {
      "is_market_day": true,
      "market": {
        "acronym": "NYSE",
        "bic": "IRVTUS3NXXX",
        "mic": "XNYS",
        "name": "New York Stock Exchange",
        "timezone": "America/New_York"
      },
      "next_market_close": "1970-01-01T00:00:00Z",
      "next_market_open": "1970-01-01T00:00:00Z",
      "phase": "closed",
      "phase_until": "1970-01-01T00:00:00Z",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Clock response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clocks|[[clock](#schemaclock)]|true|none|none|

<h2 id="tocS_legacy_calendar_day">legacy_calendar_day</h2>
<!-- backwards compatibility -->
<a id="schemalegacy_calendar_day"></a>
<a id="schema_legacy_calendar_day"></a>
<a id="tocSlegacy_calendar_day"></a>
<a id="tocslegacy_calendar_day"></a>

```json
{
  "close": "16:00",
  "date": "2025-01-02",
  "open": "09:30",
  "session_close": "2000",
  "session_open": "0400",
  "settlement_date": "2025-01-03"
}
```

A calendar day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|close|string|true|none|The time the market closes at on this date in HH:MM format.|
|date|string(date)|true|none|Date string in YYYY-MM-DD format.|
|open|string|true|none|The time the market opens at on this date in HH:MM format.|
|session_close|string|true|none|The time the session closes at on this date in HHMM format.|
|session_open|string|true|none|The time the session opens at on this date in HHMM format.|
|settlement_date|string(date)|true|none|Date string in YYYY-MM-DD format. Representing the settlement date for the trade date.|

<h2 id="tocS_legacy_clock">legacy_clock</h2>
<!-- backwards compatibility -->
<a id="schemalegacy_clock"></a>
<a id="schema_legacy_clock"></a>
<a id="tocSlegacy_clock"></a>
<a id="tocslegacy_clock"></a>

```json
{
  "is_open": true,
  "next_close": "2025-06-24T16:00:00-04:00",
  "next_open": "2025-06-25T09:30:00-04:00",
  "timestamp": "2025-06-24T14:15:22-04:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_open|boolean|true|none|Whether or not the market is open.|
|next_close|string(date-time)|true|none|Next market close timestamp.|
|next_open|string(date-time)|true|none|Next market open timestamp.|
|timestamp|string(date-time)|true|none|Current timestamp.|

<h2 id="tocS_legacy_public_calendar_resp">legacy_public_calendar_resp</h2>
<!-- backwards compatibility -->
<a id="schemalegacy_public_calendar_resp"></a>
<a id="schema_legacy_public_calendar_resp"></a>
<a id="tocSlegacy_public_calendar_resp"></a>
<a id="tocslegacy_public_calendar_resp"></a>

```json
[
  {
    "close": "16:00",
    "date": "2025-01-02",
    "open": "09:30",
    "session_close": "2000",
    "session_open": "0400",
    "settlement_date": "2025-01-03"
  }
]
```

<h2 id="tocS_market">market</h2>
<!-- backwards compatibility -->
<a id="schemamarket"></a>
<a id="schema_market"></a>
<a id="tocSmarket"></a>
<a id="tocsmarket"></a>

```json
"BMO"
```

The market identifier (MIC, BIC, or acronym).

<h2 id="tocS_market_acronym">market_acronym</h2>
<!-- backwards compatibility -->
<a id="schemamarket_acronym"></a>
<a id="schema_market_acronym"></a>
<a id="tocSmarket_acronym"></a>
<a id="tocsmarket_acronym"></a>

```json
"NYSE"
```

The acronym of the market.

<h2 id="tocS_market_name">market_name</h2>
<!-- backwards compatibility -->
<a id="schemamarket_name"></a>
<a id="schema_market_name"></a>
<a id="tocSmarket_name"></a>
<a id="tocsmarket_name"></a>

```json
"New York Stock Exchange"
```

The full name of the market.

<h2 id="tocS_market_timezone">market_timezone</h2>
<!-- backwards compatibility -->
<a id="schemamarket_timezone"></a>
<a id="schema_market_timezone"></a>
<a id="tocSmarket_timezone"></a>
<a id="tocsmarket_timezone"></a>

```json
"America/New_York"
```

The timezone of the market.

<h2 id="tocS_mic">mic</h2>
<!-- backwards compatibility -->
<a id="schemamic"></a>
<a id="schema_mic"></a>
<a id="tocSmic"></a>
<a id="tocsmic"></a>

```json
"XNYS"
```

Market identifier code (ISO 10383).

<h2 id="tocS_phase">phase</h2>
<!-- backwards compatibility -->
<a id="schemaphase"></a>
<a id="schema_phase"></a>
<a id="tocSphase"></a>
<a id="tocsphase"></a>

```json
"closed"
```

<h2 id="tocS_public_calendar_resp">public_calendar_resp</h2>
<!-- backwards compatibility -->
<a id="schemapublic_calendar_resp"></a>
<a id="schema_public_calendar_resp"></a>
<a id="tocSpublic_calendar_resp"></a>
<a id="tocspublic_calendar_resp"></a>

```json
{
  "calendar": [
    {
      "core_end": "2025-01-02T16:00:00-05:00",
      "core_start": "2025-01-02T09:30:00-05:00",
      "date": "2025-01-02",
      "lunch_end": "1970-01-01T00:00:00Z",
      "lunch_start": "1970-01-01T00:00:00Z",
      "post_end": "2025-01-02T20:00:00-05:00",
      "post_start": "2025-01-02T16:00:00-05:00",
      "pre_end": "2025-01-02T09:30:00-05:00",
      "pre_start": "2025-01-02T04:00:00-05:00",
      "settlement_date": "2025-01-03"
    }
  ],
  "market": {
    "acronym": "NYSE",
    "bic": "IRVTUS3NXXX",
    "mic": "XNYS",
    "name": "New York Stock Exchange",
    "timezone": "America/New_York"
  }
}
```

Calendar response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendar|[[calendar_day](#schemacalendar_day)]|true|none|The market calendar.|
|market|[public_market](#schemapublic_market)|true|none|A market.|

<h2 id="tocS_public_market">public_market</h2>
<!-- backwards compatibility -->
<a id="schemapublic_market"></a>
<a id="schema_public_market"></a>
<a id="tocSpublic_market"></a>
<a id="tocspublic_market"></a>

```json
{
  "acronym": "NYSE",
  "bic": "IRVTUS3NXXX",
  "mic": "XNYS",
  "name": "New York Stock Exchange",
  "timezone": "America/New_York"
}
```

A market.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|[market_acronym](#schemamarket_acronym)|true|none|The acronym of the market.|
|bic|[bic](#schemabic)|false|none|Business Identifier Code (BIC/SWIFT).|
|mic|[mic](#schemamic)|false|none|Market identifier code (ISO 10383).|
|name|[market_name](#schemamarket_name)|true|none|The full name of the market.|
|timezone|[market_timezone](#schemamarket_timezone)|true|none|The timezone of the market.|
