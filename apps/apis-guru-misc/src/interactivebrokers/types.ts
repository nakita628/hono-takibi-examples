type OrderType = 1 | 2 | 3 | 4
type TimeInForce = 0 | 1 | 2 | 3 | 7
type OrderStatus =
  | '-1'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
type OrderState = {
  ContractId?: number | undefined
  CustomerOrderId?: number | undefined
  FilledQuantity?: number | undefined
  ListingExchange?: string | undefined
  OrderType?: OrderType | undefined
  OutsideRTH?: string | undefined
  Price?: number | undefined
  RemainingQuantity?: number | undefined
  Side?: 1 | 2 | undefined
  Status?: OrderStatus | undefined
  Ticker?: string | undefined
  TimeInForce?: TimeInForce | undefined
  TransactionTime?: string | undefined
  Warning?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get:
        | {
            input: { query: { account: string } }
            output: { accounts?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { account: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { query: { account: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { query: { account: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { account: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { account: string } }; output: {}; outputFormat: string; status: 408 }
    }
  } & {
    '/accounts/:account/order_impact': {
      $post:
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {
              Commission?: number | undefined
              CommissionsCurrency?: string | undefined
              EquityWithLoan?: number | undefined
              InitMargin?: number | undefined
              InitMarginBefore?: number | undefined
              MaintMargin?: number | undefined
              MaintMarginBefore?: number | undefined
              MarginCurrency?: string | undefined
              MaxCommissions?: number | undefined
              MinCommissions?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                'Order Type'?: OrderType | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/accounts/:account/orders': {
      $get:
        | {
            input: { param: { account: string } }
            output: OrderState[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 408 }
      $post:
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: OrderState[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string } } & {
              json: {
                'Aux Price'?: number | undefined
                ContractId?: number | undefined
                Currency?: string | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                InstrumentType?: string | undefined
                ListingExchange?: string | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrderRestrictions?: number | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                Ticker?: string | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/accounts/:account/orders/:CustomerOrderId': {
      $delete:
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {
              CustomerOrderId?: string | undefined
              OrderQty?: number | undefined
              OrderType?: OrderType | undefined
              Price?: string | undefined
              Side?: 1 | 2 | undefined
              Status?: OrderStatus | undefined
              Symbol?: number | undefined
              Warning?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 408
          }
      $get:
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: OrderState[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } }
            output: {}
            outputFormat: string
            status: 408
          }
      $put:
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {
              CustomerOrderId?: string | undefined
              OrderQty?: number | undefined
              OrderType?: OrderType | undefined
              Price?: string | undefined
              Side?: 1 | 2 | undefined
              Status?: OrderStatus | undefined
              Symbol?: number | undefined
              Warning?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string; CustomerOrderId: string } } & {
              json: {
                'Aux Price'?: number | undefined
                CustomerOrderId?: string | undefined
                GermanHftAlgo?: boolean | undefined
                Mifid2Algo?: string | undefined
                Mifid2DecisionMaker?: string | undefined
                Mifid2ExecutionAlgo?: string | undefined
                Mifid2ExecutionTrader?: string | undefined
                'Order Type'?: OrderType | undefined
                OrigCustomerOrderId?: string | undefined
                'Outside RTH'?: number | undefined
                Price?: number | undefined
                Quantity?: number | undefined
                Side?: 1 | 2 | undefined
                'Time in Force'?: TimeInForce | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/accounts/:account/positions': {
      $get:
        | {
            input: { param: { account: string } }
            output: {
              AverageCost?: number | undefined
              ContractId?: number | undefined
              Position?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 408 }
    }
  } & {
    '/accounts/:account/summary': {
      $get:
        | {
            input: { param: { account: string } }
            output: {
              Info?:
                | {
                    AccountCode?: string | undefined
                    AccountReady?: string | undefined
                    AccountType?: string | undefined
                    Cushion?: string | undefined
                    DayTradesRemaining?: string | undefined
                    DayTradesRemainingT?: string | undefined
                    'DayTradesRemainingT+2'?: string | undefined
                    'DayTradesRemainingT+3'?: string | undefined
                    'DayTradesRemainingT+4'?: string | undefined
                    HighestSeverity?: string | undefined
                    'Leverage-S'?: string | undefined
                    LookAheadNextChange?: string | undefined
                    'SegmentTitle-C'?: string | undefined
                    'SegmentTitle-S'?: string | undefined
                    'TradingType-S'?: string | undefined
                    WhatIfPMEnabled?: string | undefined
                  }
                | undefined
              Ledger?:
                | {
                    CashBalance?: number | undefined
                    CashBalanceFXSegment?: number | undefined
                    CashCumQty?: number | undefined
                    ExchangeRate?: number | undefined
                    FutureOptionMarketValue?: number | undefined
                    FuturePNL?: number | undefined
                    NetDividend?: number | undefined
                    NetInterest?: number | undefined
                    NetLiquidation?: number | undefined
                    OptionMarketValue?: number | undefined
                    RealizedPNL?: number | undefined
                    StockMarketValue?: number | undefined
                    TotalCashBalance?: number | undefined
                    UnrealizedPNL?: number | undefined
                  }[]
                | undefined
              Summary?:
                | {
                    AccruedCash?: number | undefined
                    'AccruedCash-C'?: number | undefined
                    'AccruedCash-S'?: number | undefined
                    AccruedDividend?: number | undefined
                    'AccruedDividend-C'?: number | undefined
                    'AccruedDividend-S'?: number | undefined
                    AvailableFunds?: number | undefined
                    'AvailableFunds-C'?: number | undefined
                    'AvailableFunds-S'?: number | undefined
                    Billable?: number | undefined
                    'Billable-C'?: number | undefined
                    'Billable-S'?: number | undefined
                    BuyingPower?: number | undefined
                    EquityWithLoanValue?: number | undefined
                    'EquityWithLoanValue-C'?: number | undefined
                    'EquityWithLoanValue-S'?: number | undefined
                    ExcessLiquidity?: number | undefined
                    'ExcessLiquidity-C'?: number | undefined
                    'ExcessLiquidity-S'?: number | undefined
                    FullAvailableFunds?: number | undefined
                    'FullAvailableFunds-C'?: number | undefined
                    'FullAvailableFunds-S'?: number | undefined
                    FullExcessLiquidity?: number | undefined
                    'FullExcessLiquidity-C'?: number | undefined
                    'FullExcessLiquidity-S'?: number | undefined
                    FullInitMarginReq?: number | undefined
                    'FullInitMarginReq-C'?: number | undefined
                    'FullInitMarginReq-S'?: number | undefined
                    FullMaintMarginReq?: number | undefined
                    'FullMaintMarginReq-C'?: number | undefined
                    'FullMaintMarginReq-S'?: number | undefined
                    GrossPositionValue?: number | undefined
                    'GrossPositionValue-C'?: number | undefined
                    'GrossPositionValue-S'?: number | undefined
                    IndianStockHaircut?: number | undefined
                    'IndianStockHaircut-C'?: number | undefined
                    'IndianStockHaircut-S'?: number | undefined
                    InitMarginReq?: number | undefined
                    'InitMarginReq-C'?: number | undefined
                    'InitMarginReq-S'?: number | undefined
                    InsuredDeposit?: number | undefined
                    'InsuredDeposit-C'?: number | undefined
                    'InsuredDeposit-S'?: number | undefined
                    LookAheadAvailableFunds?: number | undefined
                    'LookAheadAvailableFunds-C'?: number | undefined
                    'LookAheadAvailableFunds-S'?: number | undefined
                    LookAheadExcessLiquidity?: number | undefined
                    'LookAheadExcessLiquidity-C'?: number | undefined
                    'LookAheadExcessLiquidity-S'?: number | undefined
                    LookAheadInitMarginReq?: number | undefined
                    'LookAheadInitMarginReq-C'?: number | undefined
                    'LookAheadInitMarginReq-S'?: number | undefined
                    LookAheadMaintMarginReq?: number | undefined
                    'LookAheadMaintMarginReq-C'?: number | undefined
                    'LookAheadMaintMarginReq-S'?: number | undefined
                    MaintMarginReq?: number | undefined
                    'MaintMarginReq-C'?: number | undefined
                    'MaintMarginReq-S'?: number | undefined
                    NetLiquidation?: number | undefined
                    'NetLiquidation-C'?: number | undefined
                    'NetLiquidation-S'?: number | undefined
                    NetLiquidationUncertainty?: number | undefined
                    PASharesValue?: number | undefined
                    'PASharesValue-C'?: number | undefined
                    'PASharesValue-S'?: number | undefined
                    PostExpirationExcess?: number | undefined
                    'PostExpirationExcess-C'?: number | undefined
                    'PostExpirationExcess-S'?: number | undefined
                    PostExpirationMargin?: number | undefined
                    'PostExpirationMargin-C'?: number | undefined
                    'PostExpirationMargin-S'?: number | undefined
                    RegTEquity?: number | undefined
                    'RegTEquity-S'?: number | undefined
                    RegTMargin?: number | undefined
                    'RegTMargin-S'?: number | undefined
                    SMA?: number | undefined
                    'SMA-S'?: number | undefined
                    TotalCashValue?: number | undefined
                    'TotalCashValue-C'?: number | undefined
                    'TotalCashValue-S'?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { account: string } }; output: {}; outputFormat: string; status: 408 }
    }
  } & {
    '/accounts/:account/trades': {
      $get:
        | {
            input: { param: { account: string } } & { json: string }
            output: {
              AvgPrice?: number | undefined
              Commission?: number | undefined
              CommissionCurrency?: string | undefined
              ContractId?: number | undefined
              Currency?: string | undefined
              CustomerOrderId?: number | undefined
              ExecId?: string | undefined
              ExecutionTime?: string | undefined
              FilledQuantity?: number | undefined
              LastMarket?: string | undefined
              ListingExchange?: string | undefined
              OrderId?: string | undefined
              OrderType?: OrderType | undefined
              Quantity?: number | undefined
              RemainingQuantity?: number | undefined
              Side?: 1 | 2 | undefined
              Ticker?: string | undefined
              TradePrice?: number | undefined
              TradeSize?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { account: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/marketdata/exchange_components': {
      $get:
        | {
            input: {}
            output: {
              Complete?: boolean | undefined
              ConId?: number | undefined
              mapping?:
                | {
                    bit?: number | undefined
                    code?: string | undefined
                    exchange?: string | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 408 }
    }
  } & {
    '/marketdata/snapshot': {
      $get:
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }[]
            }
            output: {
              Bid?:
                | {
                    market?: number | undefined
                    price?: number | undefined
                    size?: number | undefined
                  }
                | undefined
              Closing?: { price?: number | undefined } | undefined
              Complete?: boolean | undefined
              Conid?: string | undefined
              Offer?:
                | {
                    market?: number | undefined
                    price?: number | undefined
                    size?: number | undefined
                  }
                | undefined
              Temporality?: 0 | 1 | undefined
              Trade?:
                | {
                    market?: number | undefined
                    price?: number | undefined
                    size?: number | undefined
                    time?: number | undefined
                  }
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }[]
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }[]
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/oauth/access_token': {
      $post:
        | {
            input: {
              json: {
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
                oauth_verifier?: string | undefined
              }
            }
            output: { oauth_token?: string | undefined; oauth_token_secret?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
                oauth_verifier?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
                oauth_verifier?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
                oauth_verifier?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
                oauth_verifier?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/oauth/live_session_token': {
      $post:
        | {
            input: {
              json: {
                diffie_hellman_challenge?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
              }
            }
            output: {
              diffie_hellman_response?: string | undefined
              live_session_token_signature?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                diffie_hellman_challenge?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                diffie_hellman_challenge?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                diffie_hellman_challenge?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                diffie_hellman_challenge?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
                oauth_token?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/oauth/request_token': {
      $post:
        | {
            input: {
              json: {
                oauth_callback?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
              }
            }
            output: { oauth_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                oauth_callback?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                oauth_callback?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                oauth_callback?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                oauth_callback?: string | undefined
                oauth_consumer_key?: string | undefined
                oauth_nonce?: string | undefined
                oauth_signature?: string | undefined
                oauth_signature_method?: string | undefined
                oauth_timestamp?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  } & {
    '/secdef': {
      $get:
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              CompanyName?: string | undefined
              ContractId?: number | undefined
              Currency?: string | undefined
              Exchange?: string | undefined
              SecurityType?: string | undefined
              Ticker?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                conid?: number | undefined
                currency?: string | undefined
                exchange?: string | undefined
                symbol?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 408
          }
    }
  },
  '/'
>
export default routes
