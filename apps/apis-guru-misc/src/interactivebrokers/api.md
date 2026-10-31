<h1 id="ibkr-3rd-party-web-api">IBKR 3rd Party Web API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Interactive Brokers Web API for 3rd Party Companies

Base URLs:

* <a href="https://www.interactivebrokers.com/tradingapi/v1">https://www.interactivebrokers.com/tradingapi/v1</a>

# Authentication

* API Key (cookieAuth)
    - Parameter Name: **portal**, in: header.

<h1 id="ibkr-3rd-party-web-api-account-portfolio">Account &amp; Portfolio</h1>

## Brokerage Accounts

> Code samples

```bash
curl 'https://example.com/accounts?account=string' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`GET /accounts`

Allows the caller to request a list of accounts associated with the session.

<h3 id="brokerage-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|true|Account Number|

> Example responses

> 200 Response

```json
{
  "accounts": [
    "string"
  ]
}
```

<h3 id="brokerage-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of accounts|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="brokerage-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[string]|false|none|Unique account id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Account Positions

> Code samples

```bash
curl https://example.com/accounts/string/positions \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`GET /accounts/{account}/positions`

Returns a list of positions for the indicated account. 

<h3 id="account-positions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|

> Example responses

> 200 Response

```json
[
  {
    "AverageCost": 0,
    "ContractId": 0,
    "Position": 0
  }
]
```

<h3 id="account-positions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of positions for the indicated account|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="account-positions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» AverageCost|number|false|none|none|
|» ContractId|number|false|none|none|
|» Position|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Account Values Summary

> Code samples

```bash
curl https://example.com/accounts/string/summary \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`GET /accounts/{account}/summary`

Returns a list of account and margin balances associated with the account passed in the URL

<h3 id="account-values-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|

> Example responses

> 200 Response

```json
{
  "Info": {
    "AccountCode": "string",
    "AccountReady": "string",
    "AccountType": "string",
    "Cushion": "string",
    "DayTradesRemaining": "string",
    "DayTradesRemainingT": "string",
    "DayTradesRemainingT+2": "string",
    "DayTradesRemainingT+3": "string",
    "DayTradesRemainingT+4": "string",
    "HighestSeverity": "string",
    "Leverage-S": "string",
    "LookAheadNextChange": "string",
    "SegmentTitle-C": "string",
    "SegmentTitle-S": "string",
    "TradingType-S": "string",
    "WhatIfPMEnabled": "string"
  },
  "Ledger": [
    {
      "CashBalance": 0,
      "CashBalanceFXSegment": 0,
      "CashCumQty": 0,
      "ExchangeRate": 0,
      "FutureOptionMarketValue": 0,
      "FuturePNL": 0,
      "NetDividend": 0,
      "NetInterest": 0,
      "NetLiquidation": 0,
      "OptionMarketValue": 0,
      "RealizedPNL": 0,
      "StockMarketValue": 0,
      "TotalCashBalance": 0,
      "UnrealizedPNL": 0
    }
  ],
  "Summary": {
    "AccruedCash": 0,
    "AccruedCash-C": 0,
    "AccruedCash-S": 0,
    "AccruedDividend": 0,
    "AccruedDividend-C": 0,
    "AccruedDividend-S": 0,
    "AvailableFunds": 0,
    "AvailableFunds-C": 0,
    "AvailableFunds-S": 0,
    "Billable": 0,
    "Billable-C": 0,
    "Billable-S": 0,
    "BuyingPower": 0,
    "EquityWithLoanValue": 0,
    "EquityWithLoanValue-C": 0,
    "EquityWithLoanValue-S": 0,
    "ExcessLiquidity": 0,
    "ExcessLiquidity-C": 0,
    "ExcessLiquidity-S": 0,
    "FullAvailableFunds": 0,
    "FullAvailableFunds-C": 0,
    "FullAvailableFunds-S": 0,
    "FullExcessLiquidity": 0,
    "FullExcessLiquidity-C": 0,
    "FullExcessLiquidity-S": 0,
    "FullInitMarginReq": 0,
    "FullInitMarginReq-C": 0,
    "FullInitMarginReq-S": 0,
    "FullMaintMarginReq": 0,
    "FullMaintMarginReq-C": 0,
    "FullMaintMarginReq-S": 0,
    "GrossPositionValue": 0,
    "GrossPositionValue-C": 0,
    "GrossPositionValue-S": 0,
    "IndianStockHaircut": 0,
    "IndianStockHaircut-C": 0,
    "IndianStockHaircut-S": 0,
    "InitMarginReq": 0,
    "InitMarginReq-C": 0,
    "InitMarginReq-S": 0,
    "InsuredDeposit": 0,
    "InsuredDeposit-C": 0,
    "InsuredDeposit-S": 0,
    "LookAheadAvailableFunds": 0,
    "LookAheadAvailableFunds-C": 0,
    "LookAheadAvailableFunds-S": 0,
    "LookAheadExcessLiquidity": 0,
    "LookAheadExcessLiquidity-C": 0,
    "LookAheadExcessLiquidity-S": 0,
    "LookAheadInitMarginReq": 0,
    "LookAheadInitMarginReq-C": 0,
    "LookAheadInitMarginReq-S": 0,
    "LookAheadMaintMarginReq": 0,
    "LookAheadMaintMarginReq-C": 0,
    "LookAheadMaintMarginReq-S": 0,
    "MaintMarginReq": 0,
    "MaintMarginReq-C": 0,
    "MaintMarginReq-S": 0,
    "NetLiquidation": 0,
    "NetLiquidation-C": 0,
    "NetLiquidation-S": 0,
    "NetLiquidationUncertainty": 0,
    "PASharesValue": 0,
    "PASharesValue-C": 0,
    "PASharesValue-S": 0,
    "PostExpirationExcess": 0,
    "PostExpirationExcess-C": 0,
    "PostExpirationExcess-S": 0,
    "PostExpirationMargin": 0,
    "PostExpirationMargin-C": 0,
    "PostExpirationMargin-S": 0,
    "RegTEquity": 0,
    "RegTEquity-S": 0,
    "RegTMargin": 0,
    "RegTMargin-S": 0,
    "SMA": 0,
    "SMA-S": 0,
    "TotalCashValue": 0,
    "TotalCashValue-C": 0,
    "TotalCashValue-S": 0
  }
}
```

<h3 id="account-values-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns object for account summary with multiple properties. <br>A property is sufficed with -c if it provides commodity value, -s if it provides security value, and -c if its UKL segment value. <br>"These values correspond to the TWS Account Window: https://www.interactivebrokers.com/en/software/tws/usersguidebook/realtimeactivitymonitoring/account_window.htm"<br>|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="account-values-summary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Info|object|false|none|none|
|» AccountCode|string|false|none|none|
|» AccountReady|string|false|none|none|
|» AccountType|string|false|none|none|
|» Cushion|string|false|none|none|
|» DayTradesRemaining|string|false|none|none|
|» DayTradesRemainingT|string|false|none|none|
|» DayTradesRemainingT+2|string|false|none|none|
|» DayTradesRemainingT+3|string|false|none|none|
|» DayTradesRemainingT+4|string|false|none|none|
|» HighestSeverity|string|false|none|none|
|» Leverage-S|string|false|none|none|
|» LookAheadNextChange|string|false|none|none|
|» SegmentTitle-C|string|false|none|none|
|» SegmentTitle-S|string|false|none|none|
|» TradingType-S|string|false|none|none|
|» WhatIfPMEnabled|string|false|none|none|
|Ledger|[object]|false|none|none|
|» CashBalance|number|false|none|none|
|» CashBalanceFXSegment|number|false|none|none|
|» CashCumQty|number|false|none|none|
|» ExchangeRate|number|false|none|none|
|» FutureOptionMarketValue|number|false|none|none|
|» FuturePNL|number|false|none|none|
|» NetDividend|number|false|none|none|
|» NetInterest|number|false|none|none|
|» NetLiquidation|number|false|none|none|
|» OptionMarketValue|number|false|none|none|
|» RealizedPNL|number|false|none|none|
|» StockMarketValue|number|false|none|none|
|» TotalCashBalance|number|false|none|none|
|» UnrealizedPNL|number|false|none|none|
|Summary|object|false|none|none|
|» AccruedCash|number|false|none|none|
|» AccruedCash-C|number|false|none|none|
|» AccruedCash-S|number|false|none|none|
|» AccruedDividend|number|false|none|none|
|» AccruedDividend-C|number|false|none|none|
|» AccruedDividend-S|number|false|none|none|
|» AvailableFunds|number|false|none|none|
|» AvailableFunds-C|number|false|none|none|
|» AvailableFunds-S|number|false|none|none|
|» Billable|number|false|none|none|
|» Billable-C|number|false|none|none|
|» Billable-S|number|false|none|none|
|» BuyingPower|number|false|none|none|
|» EquityWithLoanValue|number|false|none|none|
|» EquityWithLoanValue-C|number|false|none|none|
|» EquityWithLoanValue-S|number|false|none|none|
|» ExcessLiquidity|number|false|none|none|
|» ExcessLiquidity-C|number|false|none|none|
|» ExcessLiquidity-S|number|false|none|none|
|» FullAvailableFunds|number|false|none|none|
|» FullAvailableFunds-C|number|false|none|none|
|» FullAvailableFunds-S|number|false|none|none|
|» FullExcessLiquidity|number|false|none|none|
|» FullExcessLiquidity-C|number|false|none|none|
|» FullExcessLiquidity-S|number|false|none|none|
|» FullInitMarginReq|number|false|none|none|
|» FullInitMarginReq-C|number|false|none|none|
|» FullInitMarginReq-S|number|false|none|none|
|» FullMaintMarginReq|number|false|none|none|
|» FullMaintMarginReq-C|number|false|none|none|
|» FullMaintMarginReq-S|number|false|none|none|
|» GrossPositionValue|number|false|none|none|
|» GrossPositionValue-C|number|false|none|none|
|» GrossPositionValue-S|number|false|none|none|
|» IndianStockHaircut|number|false|none|none|
|» IndianStockHaircut-C|number|false|none|none|
|» IndianStockHaircut-S|number|false|none|none|
|» InitMarginReq|number|false|none|none|
|» InitMarginReq-C|number|false|none|none|
|» InitMarginReq-S|number|false|none|none|
|» InsuredDeposit|number|false|none|none|
|» InsuredDeposit-C|number|false|none|none|
|» InsuredDeposit-S|number|false|none|none|
|» LookAheadAvailableFunds|number|false|none|none|
|» LookAheadAvailableFunds-C|number|false|none|none|
|» LookAheadAvailableFunds-S|number|false|none|none|
|» LookAheadExcessLiquidity|number|false|none|none|
|» LookAheadExcessLiquidity-C|number|false|none|none|
|» LookAheadExcessLiquidity-S|number|false|none|none|
|» LookAheadInitMarginReq|number|false|none|none|
|» LookAheadInitMarginReq-C|number|false|none|none|
|» LookAheadInitMarginReq-S|number|false|none|none|
|» LookAheadMaintMarginReq|number|false|none|none|
|» LookAheadMaintMarginReq-C|number|false|none|none|
|» LookAheadMaintMarginReq-S|number|false|none|none|
|» MaintMarginReq|number|false|none|none|
|» MaintMarginReq-C|number|false|none|none|
|» MaintMarginReq-S|number|false|none|none|
|» NetLiquidation|number|false|none|none|
|» NetLiquidation-C|number|false|none|none|
|» NetLiquidation-S|number|false|none|none|
|» NetLiquidationUncertainty|number|false|none|none|
|» PASharesValue|number|false|none|none|
|» PASharesValue-C|number|false|none|none|
|» PASharesValue-S|number|false|none|none|
|» PostExpirationExcess|number|false|none|none|
|» PostExpirationExcess-C|number|false|none|none|
|» PostExpirationExcess-S|number|false|none|none|
|» PostExpirationMargin|number|false|none|none|
|» PostExpirationMargin-C|number|false|none|none|
|» PostExpirationMargin-S|number|false|none|none|
|» RegTEquity|number|false|none|none|
|» RegTEquity-S|number|false|none|none|
|» RegTMargin|number|false|none|none|
|» RegTMargin-S|number|false|none|none|
|» SMA|number|false|none|none|
|» SMA-S|number|false|none|none|
|» TotalCashValue|number|false|none|none|
|» TotalCashValue-C|number|false|none|none|
|» TotalCashValue-S|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="ibkr-3rd-party-web-api-order-margin-requirements">Order Margin Requirements</h1>

## Return margin impact info

> Code samples

```bash
curl https://example.com/accounts/string/order_impact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "Aux Price": 0,
    "ContractId": 0,
    "Currency": "string",
    "CustomerOrderId": "string",
    "InstrumentType": "string",
    "ListingExchange": "string",
    "Order Type": 1,
    "Price": 0,
    "Quantity": 0,
    "Side": 1,
    "Ticker": "string",
    "Time in Force": 0
  }'
```

`POST /accounts/{account}/order_impact`

This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.


> Body parameter

```json
{
  "Aux Price": 0,
  "ContractId": 0,
  "Currency": "string",
  "CustomerOrderId": "string",
  "InstrumentType": "string",
  "ListingExchange": "string",
  "Order Type": 1,
  "Price": 0,
  "Quantity": 0,
  "Side": 1,
  "Ticker": "string",
  "Time in Force": 0
}
```

<h3 id="return-margin-impact-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|
|body|body|object|true|Order Parameters|
|» Aux Price|body|number|false|Required price to support Stop and Stop Limit orders|
|» ContractId|body|number|false|The internal IB identifier for the trading product specified as an integer (can be obtained in response to /secdef request)|
|» Currency|body|string|false|The currency in which the FX pair trades (only for InstrumentType=CASH)|
|» CustomerOrderId|body|string|false|The order ID assigned by the customer.|
|» InstrumentType|body|string|false|The instrument type of the contract|
|» ListingExchange|body|string|false|The exchange on which the trading product is listed (only for InstrumentType=STK)|
|» Order Type|body|[orderType](#schemaordertype)|false|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|» Price|body|number|false|The order price|
|» Quantity|body|number|false|The number of units in the order; contracts or shares|
|» Side|body|number|false|Buy = '1', Sell = '2'|
|» Ticker|body|string|false|The symbol that identifies the trading product|
|» Time in Force|body|[timeInForce](#schematimeinforce)|false|Defines order's active lifetime.<br>Day = '0'<br>GTC (Good till Cancel) = '1'<br>IOC (Immediate or Cancel) = '3'<br>Open = '2'<br>Close = '7'<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Order Type|1|
|» Order Type|2|
|» Order Type|3|
|» Order Type|4|
|» Side|1|
|» Side|2|
|» Time in Force|0|
|» Time in Force|1|
|» Time in Force|2|
|» Time in Force|3|
|» Time in Force|7|

> Example responses

> 200 Response

```json
{
  "Commission": 0,
  "CommissionsCurrency": "string",
  "EquityWithLoan": 0,
  "InitMargin": 0,
  "InitMarginBefore": 0,
  "MaintMargin": 0,
  "MaintMarginBefore": 0,
  "MarginCurrency": "string",
  "MaxCommissions": 0,
  "MinCommissions": 0
}
```

<h3 id="return-margin-impact-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Order impact info|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="return-margin-impact-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Commission|number|false|none|none|
|CommissionsCurrency|string|false|none|none|
|EquityWithLoan|number|false|none|none|
|InitMargin|number|false|none|none|
|InitMarginBefore|number|false|none|none|
|MaintMargin|number|false|none|none|
|MaintMarginBefore|number|false|none|none|
|MarginCurrency|string|false|none|none|
|MaxCommissions|number|false|none|none|
|MinCommissions|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="ibkr-3rd-party-web-api-orders">Orders</h1>

## Open Orders

> Code samples

```bash
curl https://example.com/accounts/string/orders \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`GET /accounts/{account}/orders`

Returns a list of orders for the account passed in the URL

<h3 id="open-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|

> Example responses

> 200 Response

```json
[
  {
    "ContractId": 0,
    "CustomerOrderId": 0,
    "FilledQuantity": 0,
    "ListingExchange": "string",
    "OrderType": 1,
    "OutsideRTH": "string",
    "Price": 0,
    "RemainingQuantity": 0,
    "Side": 1,
    "Status": "-1",
    "Ticker": "string",
    "TimeInForce": 0,
    "TransactionTime": "string",
    "Warning": "string"
  }
]
```

<h3 id="open-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of orders for the indicated account|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="open-orders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[orderState](#schemaorderstate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Place Order

> Code samples

```bash
curl https://example.com/accounts/string/orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "Aux Price": 0,
    "ContractId": 0,
    "Currency": "string",
    "CustomerOrderId": "string",
    "GermanHftAlgo": true,
    "InstrumentType": "string",
    "ListingExchange": "string",
    "Mifid2Algo": "string",
    "Mifid2DecisionMaker": "string",
    "Mifid2ExecutionAlgo": "string",
    "Mifid2ExecutionTrader": "string",
    "Order Type": 1,
    "OrderRestrictions": 0,
    "Outside RTH": 0,
    "Price": 0,
    "Quantity": 0,
    "Side": 1,
    "Ticker": "string",
    "Time in Force": 0
  }'
```

`POST /accounts/{account}/orders`

Places order

> Body parameter

```json
{
  "Aux Price": 0,
  "ContractId": 0,
  "Currency": "string",
  "CustomerOrderId": "string",
  "GermanHftAlgo": true,
  "InstrumentType": "string",
  "ListingExchange": "string",
  "Mifid2Algo": "string",
  "Mifid2DecisionMaker": "string",
  "Mifid2ExecutionAlgo": "string",
  "Mifid2ExecutionTrader": "string",
  "Order Type": 1,
  "OrderRestrictions": 0,
  "Outside RTH": 0,
  "Price": 0,
  "Quantity": 0,
  "Side": 1,
  "Ticker": "string",
  "Time in Force": 0
}
```

<h3 id="place-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|
|body|body|object|true|Order Parameters|
|» Aux Price|body|number|false|Required Price to support Stop and Stop Limit orders|
|» ContractId|body|number|false|The internal IB identifier for the trading product specified as an integer (can be obtained in response to /secdef request)|
|» Currency|body|string|false|The currency in which the FX pair trades (only for InstrumentType=CASH)|
|» CustomerOrderId|body|string|false|The order ID assigned by the customer.|
|» GermanHftAlgo|body|boolean|false|By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.|
|» InstrumentType|body|string|false|The instrument type of the contract|
|» ListingExchange|body|string|false|The exchange on which the trading product is listed (only for InstrumentType=STK)|
|» Mifid2Algo|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for investment decisions|
|» Mifid2DecisionMaker|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II short code for decision makers.|
|» Mifid2ExecutionAlgo|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for handling/routing of the order.|
|» Mifid2ExecutionTrader|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II person responsible for handling/routing of the order|
|» Order Type|body|[orderType](#schemaordertype)|false|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|» OrderRestrictions|body|number|false|MultiValueString representing the restrictions associated with<br>an order. If more than one restriction is applicable to an<br>order, this field can contain multiple instructions separated<br>by space. <br>'1' Program Trade<br>'2' Index Arbitrage <br>'3' Non-Index Arbitrage<br>|
|» Outside RTH|body|number|false|Indicates if order is active outside regular trading hours, where defined. 0 = no (default), 1 = yes|
|» Price|body|number|false|The order price|
|» Quantity|body|number|false|The number of units in the order; contracts or shares|
|» Side|body|number|false|Buy = '1', Sell = '2'|
|» Ticker|body|string|false|The symbol that identifies the trading product|
|» Time in Force|body|[timeInForce](#schematimeinforce)|false|Defines order's active lifetime.<br>Day = '0'<br>GTC (Good till Cancel) = '1'<br>IOC (Immediate or Cancel) = '3'<br>Open = '2'<br>Close = '7'<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Order Type|1|
|» Order Type|2|
|» Order Type|3|
|» Order Type|4|
|» Side|1|
|» Side|2|
|» Time in Force|0|
|» Time in Force|1|
|» Time in Force|2|
|» Time in Force|3|
|» Time in Force|7|

> Example responses

> 200 Response

```json
[
  {
    "ContractId": 0,
    "CustomerOrderId": 0,
    "FilledQuantity": 0,
    "ListingExchange": "string",
    "OrderType": 1,
    "OutsideRTH": "string",
    "Price": 0,
    "RemainingQuantity": 0,
    "Side": 1,
    "Status": "-1",
    "Ticker": "string",
    "TimeInForce": 0,
    "TransactionTime": "string",
    "Warning": "string"
  }
]
```

<h3 id="place-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns order status information|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="place-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[orderState](#schemaorderstate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Return specific order info

> Code samples

```bash
curl https://example.com/accounts/string/orders/string \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`GET /accounts/{account}/orders/{CustomerOrderId}`

Returns the order with the referenced Customer Order ID for the account passed in the URL.

<h3 id="return-specific-order-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|
|CustomerOrderId|path|string|true|Customer Order ID|

> Example responses

> 200 Response

```json
[
  {
    "ContractId": 0,
    "CustomerOrderId": 0,
    "FilledQuantity": 0,
    "ListingExchange": "string",
    "OrderType": 1,
    "OutsideRTH": "string",
    "Price": 0,
    "RemainingQuantity": 0,
    "Side": 1,
    "Status": "-1",
    "Ticker": "string",
    "TimeInForce": 0,
    "TransactionTime": "string",
    "Warning": "string"
  }
]
```

<h3 id="return-specific-order-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns order status information|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="return-specific-order-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[orderState](#schemaorderstate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Modify Order

> Code samples

```bash
curl https://example.com/accounts/string/orders/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "Aux Price": 0,
    "CustomerOrderId": "string",
    "GermanHftAlgo": true,
    "Mifid2Algo": "string",
    "Mifid2DecisionMaker": "string",
    "Mifid2ExecutionAlgo": "string",
    "Mifid2ExecutionTrader": "string",
    "Order Type": 1,
    "OrigCustomerOrderId": "string",
    "Outside RTH": 0,
    "Price": 0,
    "Quantity": 0,
    "Side": 1,
    "Time in Force": 0
  }'
```

`PUT /accounts/{account}/orders/{CustomerOrderId}`

Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.

> Body parameter

```json
{
  "Aux Price": 0,
  "CustomerOrderId": "string",
  "GermanHftAlgo": true,
  "Mifid2Algo": "string",
  "Mifid2DecisionMaker": "string",
  "Mifid2ExecutionAlgo": "string",
  "Mifid2ExecutionTrader": "string",
  "Order Type": 1,
  "OrigCustomerOrderId": "string",
  "Outside RTH": 0,
  "Price": 0,
  "Quantity": 0,
  "Side": 1,
  "Time in Force": 0
}
```

<h3 id="modify-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|
|CustomerOrderId|path|string|true|Customer Order ID|
|body|body|object|true|Order Parameters|
|» Aux Price|body|number|false|Required Price to support Stop and Stop Limit orders|
|» CustomerOrderId|body|string|false|The new order ID assigned by the customer for the modification.|
|» GermanHftAlgo|body|boolean|false|By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.|
|» Mifid2Algo|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for investment decisions|
|» Mifid2DecisionMaker|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II short code for decision makers.|
|» Mifid2ExecutionAlgo|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for handling/routing of the order.|
|» Mifid2ExecutionTrader|body|string|false|This field permits specification of the user's preregistered (via account management) MiFID II person responsible for handling/routing of the order|
|» Order Type|body|[orderType](#schemaordertype)|false|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|» OrigCustomerOrderId|body|string|false|The order ID assigned by the customer|
|» Outside RTH|body|number|false|Indicates if order is active outside regular trading hours, where defined. 0 = no (default), 1 = yes|
|» Price|body|number|false|The order price|
|» Quantity|body|number|false|The number of units in the order; contracts or shares|
|» Side|body|number|false|Buy = '1', Sell = '2'|
|» Time in Force|body|[timeInForce](#schematimeinforce)|false|Defines order's active lifetime.<br>Day = '0'<br>GTC (Good till Cancel) = '1'<br>IOC (Immediate or Cancel) = '3'<br>Open = '2'<br>Close = '7'<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Order Type|1|
|» Order Type|2|
|» Order Type|3|
|» Order Type|4|
|» Side|1|
|» Side|2|
|» Time in Force|0|
|» Time in Force|1|
|» Time in Force|2|
|» Time in Force|3|
|» Time in Force|7|

> Example responses

> 200 Response

```json
[
  {
    "CustomerOrderId": "string",
    "OrderQty": 0,
    "OrderType": 1,
    "Price": "string",
    "Side": 1,
    "Status": "-1",
    "Symbol": 0,
    "Warning": "string"
  }
]
```

<h3 id="modify-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of order modification attempt|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="modify-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» CustomerOrderId|string|false|none|none|
|» OrderQty|number|false|none|none|
|» OrderType|[orderType](#schemaordertype)|false|none|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|» Price|string|false|none|none|
|» Side|number|false|none|none|
|» Status|[orderStatus](#schemaorderstatus)|false|none|Status of the order<br>InvalidOrderStatus = '-1'<br>New = '0'<br>PartiallyFilled = '1'<br>Filled = '2'<br>DoneForTheDay = '3'<br>Canceled = '4'<br>Replaced = '5'<br>PendingCancelReplace = '6'<br>Stopped = '7'<br>Rejected = '8'<br>Suspended = '9'<br>PendingNew = 'A'<br>Calculated = 'B'<br>Expired = 'C'<br>AcceptedForBidding = 'D'<br>PendingReplace = 'E'<br>|
|» Symbol|number|false|none|none|
|» Warning|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» OrderType|1|
|» OrderType|2|
|» OrderType|3|
|» OrderType|4|
|» Side|1|
|» Side|2|
|» Status|-1|
|» Status|0|
|» Status|1|
|» Status|2|
|» Status|3|
|» Status|4|
|» Status|5|
|» Status|6|
|» Status|7|
|» Status|8|
|» Status|9|
|» Status|A|
|» Status|B|
|» Status|C|
|» Status|D|
|» Status|E|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Cancel Order

> Code samples

```bash
curl https://example.com/accounts/string/orders/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`DELETE /accounts/{account}/orders/{CustomerOrderId}`

Cancels the order with the referenced Customer Order ID for the account passed in the URL.

<h3 id="cancel-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|
|CustomerOrderId|path|string|true|Customer Order ID|

> Example responses

> 200 Response

```json
[
  {
    "CustomerOrderId": "string",
    "OrderQty": 0,
    "OrderType": 1,
    "Price": "string",
    "Side": 1,
    "Status": "-1",
    "Symbol": 0,
    "Warning": "string"
  }
]
```

<h3 id="cancel-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns result of cancellation attempt|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="cancel-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» CustomerOrderId|string|false|none|none|
|» OrderQty|number|false|none|none|
|» OrderType|[orderType](#schemaordertype)|false|none|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|» Price|string|false|none|none|
|» Side|number|false|none|none|
|» Status|[orderStatus](#schemaorderstatus)|false|none|Status of the order<br>InvalidOrderStatus = '-1'<br>New = '0'<br>PartiallyFilled = '1'<br>Filled = '2'<br>DoneForTheDay = '3'<br>Canceled = '4'<br>Replaced = '5'<br>PendingCancelReplace = '6'<br>Stopped = '7'<br>Rejected = '8'<br>Suspended = '9'<br>PendingNew = 'A'<br>Calculated = 'B'<br>Expired = 'C'<br>AcceptedForBidding = 'D'<br>PendingReplace = 'E'<br>|
|» Symbol|number|false|none|none|
|» Warning|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» OrderType|1|
|» OrderType|2|
|» OrderType|3|
|» OrderType|4|
|» Side|1|
|» Side|2|
|» Status|-1|
|» Status|0|
|» Status|1|
|» Status|2|
|» Status|3|
|» Status|4|
|» Status|5|
|» Status|6|
|» Status|7|
|» Status|8|
|» Status|9|
|» Status|A|
|» Status|B|
|» Status|C|
|» Status|D|
|» Status|E|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="ibkr-3rd-party-web-api-trades">Trades</h1>

## Returns trades in account

> Code samples

```bash
curl https://example.com/accounts/string/trades \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '"string"'
```

`GET /accounts/{account}/trades`

Returns a list of trades for the account starting at the given 'since' date to the current time (now()). Timezone is UTC. Any request with a future since date or going further than one week will result in an HTTP 400 bad request response. Calling /trades without since will return all trades for the past 24 hours.


> Body parameter

```json
"string"
```

<h3 id="returns-trades-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Account Number|
|body|body|string|false|Start time specified in UTC. Allowed formats are "yyyy-MM-dd" or "yyyy-MM-dd'T'HH:mm:ss". Time is optional and is set to midnight if omitted, e.g. "00:00:00 hh:mm:ss".<br>|

> Example responses

> 200 Response

```json
[
  {
    "AvgPrice": 0,
    "Commission": 0,
    "CommissionCurrency": "string",
    "ContractId": 0,
    "Currency": "string",
    "CustomerOrderId": 0,
    "ExecId": "string",
    "ExecutionTime": "string",
    "FilledQuantity": 0,
    "LastMarket": "string",
    "ListingExchange": "string",
    "OrderId": "string",
    "OrderType": 1,
    "Quantity": 0,
    "RemainingQuantity": 0,
    "Side": 1,
    "Ticker": "string",
    "TradePrice": 0,
    "TradeSize": 0
  }
]
```

<h3 id="returns-trades-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Trades|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="returns-trades-in-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» AvgPrice|number|false|none|none|
|» Commission|number|false|none|none|
|» CommissionCurrency|string|false|none|none|
|» ContractId|number|false|none|none|
|» Currency|string|false|none|none|
|» CustomerOrderId|number|false|none|none|
|» ExecId|string|false|none|none|
|» ExecutionTime|string|false|none|none|
|» FilledQuantity|number|false|none|none|
|» LastMarket|string|false|none|none|
|» ListingExchange|string|false|none|none|
|» OrderId|string|false|none|none|
|» OrderType|[orderType](#schemaordertype)|false|none|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|» Quantity|number|false|none|none|
|» RemainingQuantity|number|false|none|none|
|» Side|string|false|none|none|
|» Ticker|string|false|none|none|
|» TradePrice|number|false|none|none|
|» TradeSize|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» OrderType|1|
|» OrderType|2|
|» OrderType|3|
|» OrderType|4|
|» Side|1|
|» Side|2|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="ibkr-3rd-party-web-api-market-data">Market Data</h1>

## Exchange Components

> Code samples

```bash
curl https://example.com/marketdata/exchange_components \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}"
```

`GET /marketdata/exchange_components`

This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response. 

> Example responses

> 200 Response

```json
[
  {
    "Complete": true,
    "ConId": 0,
    "mapping": [
      {
        "bit": 0,
        "code": "string",
        "exchange": "string"
      }
    ]
  }
]
```

<h3 id="exchange-components-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exchange Components|Inline|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="exchange-components-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Complete|boolean|false|none|none|
|» ConId|number|false|none|none|
|» mapping|[object]|false|none|none|
|» » bit|number|false|none|none|
|» » code|string|false|none|none|
|» » exchange|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Market Data Snapshot

> Code samples

```bash
curl https://example.com/marketdata/snapshot \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '[
    {
      "conid": 0,
      "currency": "string",
      "exchange": "string",
      "symbol": "string",
      "type": "string"
    }
  ]'
```

`GET /marketdata/snapshot`

This endpoint allows the consumer to request a market data snapshot for one or more trading products. 
Consumers need to provide unique identifiers (conids) for the products in the IB product database (retrievable using the /secdef endpoint). The 'market' values are integers whose bits indicate the exchange(s) making up the quote. 

The mapping of bit to exchange is obtained from the marketdata/exchange_component endpoint. For example, if a bid has a 'market' value of 5 and the exchange_component result has the map 
0 => NYSE, 1 => ISLAND, 2 => ARCA then the exchanges contributing to the bid size are NYSE and ARCA. 

Similarly, if market=2, then only ISLAND is contributing.


> Body parameter

```json
[
  {
    "conid": 0,
    "currency": "string",
    "exchange": "string",
    "symbol": "string",
    "type": "string"
  }
]
```

<h3 id="market-data-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|Contract. Allowed combinations are [type and symbol and currency], or [type, symbol, exchange, and currency], or [conid].|
|» conid|body|number|false|The internal IB identifier for the trading product specified as an integer.|
|» currency|body|string|false|The currency in which the given pair trades.|
|» exchange|body|string|false|The exchange on which the trading product is listed (required for type=STK).|
|» symbol|body|string|false|The symbol that identifies the trading product.|
|» type|body|string|false|The instrument type of the contract (CASH).|

> Example responses

> 200 Response

```json
[
  {
    "Bid": {
      "market": 0,
      "price": 0,
      "size": 0
    },
    "Closing": {
      "price": 0
    },
    "Complete": true,
    "Conid": "string",
    "Offer": {
      "market": 0,
      "price": 0,
      "size": 0
    },
    "Temporality": 0,
    "Trade": {
      "market": 0,
      "price": 0,
      "size": 0,
      "time": 0
    }
  }
]
```

<h3 id="market-data-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Financial Instrument Definition|Inline|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="market-data-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» Bid|object|false|none|none|
|» » market|number|false|none|none|
|» » price|number|false|none|none|
|» » size|number|false|none|none|
|» Closing|object|false|none|none|
|» » price|number|false|none|none|
|» Complete|boolean|false|none|none|
|» Conid|string|false|none|none|
|» Offer|object|false|none|none|
|» » market|number|false|none|none|
|» » price|number|false|none|none|
|» » size|number|false|none|none|
|» Temporality|number|false|none|0 = Real time data<br>1 = Delayed data<br>|
|» Trade|object|false|none|none|
|» » market|number|false|none|none|
|» » price|number|false|none|none|
|» » size|number|false|none|none|
|» » time|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» Temporality|0|
|» Temporality|1|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="ibkr-3rd-party-web-api-oauth">OAuth</h1>

## Obtain a access token

> Code samples

```bash
curl https://example.com/oauth/access_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "oauth_consumer_key": "string",
    "oauth_nonce": "string",
    "oauth_signature": "string",
    "oauth_signature_method": "string",
    "oauth_timestamp": "string",
    "oauth_token": "string",
    "oauth_verifier": "string"
  }'
```

`POST /oauth/access_token`

Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details. 


> Body parameter

```json
{
  "oauth_consumer_key": "string",
  "oauth_nonce": "string",
  "oauth_signature": "string",
  "oauth_signature_method": "string",
  "oauth_timestamp": "string",
  "oauth_token": "string",
  "oauth_verifier": "string"
}
```

<h3 id="obtain-a-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|OAuth Parameters|
|» oauth_consumer_key|body|string|false|The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.|
|» oauth_nonce|body|string|false|A random string uniquely generated for each request.|
|» oauth_signature|body|string|false|The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.|
|» oauth_signature_method|body|string|false|The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.|
|» oauth_timestamp|body|string|false|Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.|
|» oauth_token|body|string|false|The request token obtained from IB via /request_token.|
|» oauth_verifier|body|string|false|The verification code received from IB after the user has granted authorization.|

> Example responses

> 200 Response

```json
{
  "oauth_token": "string",
  "oauth_token_secret": "string"
}
```

<h3 id="obtain-a-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Access token and token secret|Inline|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="obtain-a-access-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth_token|string|false|none|none|
|oauth_token_secret|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Obtain a live session token

> Code samples

```bash
curl https://example.com/oauth/live_session_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "diffie_hellman_challenge": "string",
    "oauth_consumer_key": "string",
    "oauth_nonce": "string",
    "oauth_signature": "string",
    "oauth_signature_method": "string",
    "oauth_timestamp": "string",
    "oauth_token": "string"
  }'
```

`POST /oauth/live_session_token`

In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the "OAuth at Interactive Brokers" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf


> Body parameter

```json
{
  "diffie_hellman_challenge": "string",
  "oauth_consumer_key": "string",
  "oauth_nonce": "string",
  "oauth_signature": "string",
  "oauth_signature_method": "string",
  "oauth_timestamp": "string",
  "oauth_token": "string"
}
```

<h3 id="obtain-a-live-session-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|OAuth Parameters|
|» diffie_hellman_challenge|body|string|false|Challenge value calculated using the Diffie-Hellman prime and generated provided during the registration process. See the "OAuth at Interactive Brokers" document for more details. <br>|
|» oauth_consumer_key|body|string|false|The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.|
|» oauth_nonce|body|string|false|A random string uniquely generated for each request.|
|» oauth_signature|body|string|false|The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.|
|» oauth_signature_method|body|string|false|The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.|
|» oauth_timestamp|body|string|false|Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.|
|» oauth_token|body|string|false|The request token obtained from IB via /request_token.|

> Example responses

> 200 Response

```json
{
  "diffie_hellman_response": "string",
  "live_session_token_signature": "string"
}
```

<h3 id="obtain-a-live-session-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|DH response|Inline|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="obtain-a-live-session-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diffie_hellman_response|string|false|none|none|
|live_session_token_signature|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Obtain a request token

> Code samples

```bash
curl https://example.com/oauth/request_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "oauth_callback": "string",
    "oauth_consumer_key": "string",
    "oauth_nonce": "string",
    "oauth_signature": "string",
    "oauth_signature_method": "string",
    "oauth_timestamp": "string"
  }'
```

`POST /oauth/request_token`

Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1

Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication. 


> Body parameter

```json
{
  "oauth_callback": "string",
  "oauth_consumer_key": "string",
  "oauth_nonce": "string",
  "oauth_signature": "string",
  "oauth_signature_method": "string",
  "oauth_timestamp": "string"
}
```

<h3 id="obtain-a-request-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|OAuth Parameters|
|» oauth_callback|body|string|false|An absolute URL to which IB will redirect the user. This URL is provided by the consumer during registration. This parameter must be set to 'oob'.  |
|» oauth_consumer_key|body|string|false|The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.|
|» oauth_nonce|body|string|false|A random string uniquely generated for each request.|
|» oauth_signature|body|string|false|The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.|
|» oauth_signature_method|body|string|false|The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.|
|» oauth_timestamp|body|string|false|Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.|

> Example responses

> 200 Response

```json
{
  "oauth_token": "string"
}
```

<h3 id="obtain-a-request-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth token|Inline|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="obtain-a-request-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth_token|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="ibkr-3rd-party-web-api-financial-instrument-definitions">Financial Instrument Definitions</h1>

## Get security definition

> Code samples

```bash
curl https://example.com/secdef \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "portal: ${API_KEY}" \
  -d '{
    "conid": 0,
    "currency": "string",
    "exchange": "string",
    "symbol": "string",
    "type": "string"
  }'
```

`GET /secdef`

Fields that compose security definition. Allowed combinations,
(1) type and symbol and currency, or
(2) type, symbol, exchange, and currency, or
(3) conid


> Body parameter

```json
{
  "conid": 0,
  "currency": "string",
  "exchange": "string",
  "symbol": "string",
  "type": "string"
}
```

<h3 id="get-security-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Order Parameters|
|» conid|body|number|false|The internal IB identifier for the trading product specified as an integer.|
|» currency|body|string|false|The currency in which the given pair trades.|
|» exchange|body|string|false|The exchange on which the trading product is listed (required for type=STK).|
|» symbol|body|string|false|The symbol that identifies the trading product.|
|» type|body|string|false|The instrument type of the contract (CASH).|

> Example responses

> 200 Response

```json
[
  {
    "CompanyName": "string",
    "ContractId": 0,
    "Currency": "string",
    "Exchange": "string",
    "SecurityType": "string",
    "Ticker": "string"
  }
]
```

<h3 id="get-security-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Financial Instrument Definition|Inline|
|202|Accepted|Unsuccessfull response|None|
|204|No Content|Unsuccessfull response|None|
|400|Bad Request|Unsuccessfull response|None|
|401|Unauthorized|Unsuccessfull response|None|
|403|Forbidden|Unsuccessfull response|None|
|408|Request Timeout|Unsuccessfull response|None|

<h3 id="get-security-definition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» CompanyName|string|false|none|none|
|» ContractId|number|false|none|none|
|» Currency|string|false|none|none|
|» Exchange|string|false|none|none|
|» SecurityType|string|false|none|none|
|» Ticker|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

# Schemas

<h2 id="tocS_orderState">orderState</h2>
<!-- backwards compatibility -->
<a id="schemaorderstate"></a>
<a id="schema_orderState"></a>
<a id="tocSorderstate"></a>
<a id="tocsorderstate"></a>

```json
{
  "ContractId": 0,
  "CustomerOrderId": 0,
  "FilledQuantity": 0,
  "ListingExchange": "string",
  "OrderType": 1,
  "OutsideRTH": "string",
  "Price": 0,
  "RemainingQuantity": 0,
  "Side": 1,
  "Status": "-1",
  "Ticker": "string",
  "TimeInForce": 0,
  "TransactionTime": "string",
  "Warning": "string"
}
```

An object containing all the properties defining an order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContractId|number|false|none|none|
|CustomerOrderId|number|false|none|none|
|FilledQuantity|number|false|none|none|
|ListingExchange|string|false|none|none|
|OrderType|[orderType](#schemaordertype)|false|none|Market = '1'<br>Limit = '2'<br>Stop = '3'<br>StopLimit = '4'<br>|
|OutsideRTH|string|false|none|none|
|Price|number|false|none|none|
|RemainingQuantity|number|false|none|none|
|Side|string|false|none|none|
|Status|[orderStatus](#schemaorderstatus)|false|none|Status of the order<br>InvalidOrderStatus = '-1'<br>New = '0'<br>PartiallyFilled = '1'<br>Filled = '2'<br>DoneForTheDay = '3'<br>Canceled = '4'<br>Replaced = '5'<br>PendingCancelReplace = '6'<br>Stopped = '7'<br>Rejected = '8'<br>Suspended = '9'<br>PendingNew = 'A'<br>Calculated = 'B'<br>Expired = 'C'<br>AcceptedForBidding = 'D'<br>PendingReplace = 'E'<br>|
|Ticker|string|false|none|none|
|TimeInForce|[timeInForce](#schematimeinforce)|false|none|Defines order's active lifetime.<br>Day = '0'<br>GTC (Good till Cancel) = '1'<br>IOC (Immediate or Cancel) = '3'<br>Open = '2'<br>Close = '7'<br>|
|TransactionTime|string|false|none|none|
|Warning|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|OrderType|1|
|OrderType|2|
|OrderType|3|
|OrderType|4|
|Side|1|
|Side|2|
|Status|-1|
|Status|0|
|Status|1|
|Status|2|
|Status|3|
|Status|4|
|Status|5|
|Status|6|
|Status|7|
|Status|8|
|Status|9|
|Status|A|
|Status|B|
|Status|C|
|Status|D|
|Status|E|
|TimeInForce|0|
|TimeInForce|1|
|TimeInForce|2|
|TimeInForce|3|
|TimeInForce|7|

<h2 id="tocS_orderStatus">orderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaorderstatus"></a>
<a id="schema_orderStatus"></a>
<a id="tocSorderstatus"></a>
<a id="tocsorderstatus"></a>

```json
"-1"
```

Status of the order
InvalidOrderStatus = '-1'
New = '0'
PartiallyFilled = '1'
Filled = '2'
DoneForTheDay = '3'
Canceled = '4'
Replaced = '5'
PendingCancelReplace = '6'
Stopped = '7'
Rejected = '8'
Suspended = '9'
PendingNew = 'A'
Calculated = 'B'
Expired = 'C'
AcceptedForBidding = 'D'
PendingReplace = 'E'

<h2 id="tocS_orderType">orderType</h2>
<!-- backwards compatibility -->
<a id="schemaordertype"></a>
<a id="schema_orderType"></a>
<a id="tocSordertype"></a>
<a id="tocsordertype"></a>

```json
1
```

Market = '1'
Limit = '2'
Stop = '3'
StopLimit = '4'

<h2 id="tocS_timeInForce">timeInForce</h2>
<!-- backwards compatibility -->
<a id="schematimeinforce"></a>
<a id="schema_timeInForce"></a>
<a id="tocStimeinforce"></a>
<a id="tocstimeinforce"></a>

```json
0
```

Defines order's active lifetime.
Day = '0'
GTC (Good till Cancel) = '1'
IOC (Immediate or Cancel) = '3'
Open = '2'
Close = '7'
