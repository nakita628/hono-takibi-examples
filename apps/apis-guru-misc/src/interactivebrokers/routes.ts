import { createRoute, z } from '@hono/zod-openapi'

const OrderTypeSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({ description: "Market = '1'\nLimit = '2'\nStop = '3'\nStopLimit = '4'\n" })
  .openapi('OrderType')

const OrderStatusSchema = z
  .enum(['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E'])
  .openapi({
    description:
      "Status of the order\nInvalidOrderStatus = '-1'\nNew = '0'\nPartiallyFilled = '1'\nFilled = '2'\nDoneForTheDay = '3'\nCanceled = '4'\nReplaced = '5'\nPendingCancelReplace = '6'\nStopped = '7'\nRejected = '8'\nSuspended = '9'\nPendingNew = 'A'\nCalculated = 'B'\nExpired = 'C'\nAcceptedForBidding = 'D'\nPendingReplace = 'E'\n",
  })
  .openapi('OrderStatus')

const TimeInForceSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(7)])
  .openapi({
    description:
      "Defines order's active lifetime.\nDay = '0'\nGTC (Good till Cancel) = '1'\nIOC (Immediate or Cancel) = '3'\nOpen = '2'\nClose = '7'\n",
  })
  .openapi('TimeInForce')

const OrderStateSchema = z
  .object({
    ContractId: z.number().exactOptional(),
    CustomerOrderId: z.number().exactOptional(),
    FilledQuantity: z.number().exactOptional(),
    ListingExchange: z.string().exactOptional(),
    OrderType: OrderTypeSchema.exactOptional(),
    OutsideRTH: z.string().exactOptional(),
    Price: z.number().exactOptional(),
    RemainingQuantity: z.number().exactOptional(),
    Side: z.union([z.literal(1), z.literal(2)]).exactOptional(),
    Status: OrderStatusSchema.exactOptional(),
    Ticker: z.string().exactOptional(),
    TimeInForce: TimeInForceSchema.exactOptional(),
    TransactionTime: z.string().exactOptional(),
    Warning: z.string().exactOptional(),
  })
  .openapi({
    description: 'An object containing all the properties defining an order',
    required: [],
  })
  .openapi('OrderState')

const CookieAuthSecurityScheme = { in: 'header', name: 'portal', type: 'apiKey' }

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Account & Portfolio'],
  summary: 'Brokerage Accounts',
  description: 'Allows the caller to request a list of accounts associated with the session.',
  request: {
    query: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'query',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of accounts',
      content: {
        'application/json': {
          schema: z
            .object({
              accounts: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Unique account id' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const postAccountsAccountOrderImpactRoute = createRoute({
  method: 'post',
  path: '/accounts/{account}/order_impact',
  tags: ['Order Margin Requirements'],
  summary: 'Return margin impact info',
  description:
    'This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.\nTo specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.\n',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Order Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              'Aux Price': z
                .number()
                .exactOptional()
                .openapi({ description: 'Required price to support Stop and Stop Limit orders' }),
              ContractId: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The internal IB identifier for the trading product specified as an integer (can be obtained in response to /secdef request)',
                }),
              Currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The currency in which the FX pair trades (only for InstrumentType=CASH)',
                }),
              CustomerOrderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The order ID assigned by the customer.' }),
              InstrumentType: z
                .string()
                .exactOptional()
                .openapi({ description: 'The instrument type of the contract' }),
              ListingExchange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The exchange on which the trading product is listed (only for InstrumentType=STK)',
                }),
              'Order Type': OrderTypeSchema.exactOptional(),
              Price: z.number().exactOptional().openapi({ description: 'The order price' }),
              Quantity: z
                .number()
                .exactOptional()
                .openapi({ description: 'The number of units in the order; contracts or shares' }),
              Side: z
                .union([z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({ description: "Buy = '1', Sell = '2'" }),
              Ticker: z
                .string()
                .exactOptional()
                .openapi({ description: 'The symbol that identifies the trading product' }),
              'Time in Force': TimeInForceSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Order impact info',
      content: {
        'application/json': {
          schema: z
            .object({
              Commission: z.number().exactOptional(),
              CommissionsCurrency: z.string().exactOptional(),
              EquityWithLoan: z.number().exactOptional(),
              InitMargin: z.number().exactOptional(),
              InitMarginBefore: z.number().exactOptional(),
              MaintMargin: z.number().exactOptional(),
              MaintMarginBefore: z.number().exactOptional(),
              MarginCurrency: z.string().exactOptional(),
              MaxCommissions: z.number().exactOptional(),
              MinCommissions: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getAccountsAccountOrdersRoute = createRoute({
  method: 'get',
  path: '/accounts/{account}/orders',
  tags: ['Orders'],
  summary: 'Open Orders',
  description: 'Returns a list of orders for the account passed in the URL',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of orders for the indicated account',
      content: { 'application/json': { schema: z.array(OrderStateSchema) } },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const postAccountsAccountOrdersRoute = createRoute({
  method: 'post',
  path: '/accounts/{account}/orders',
  tags: ['Orders'],
  summary: 'Place Order',
  description: 'Places order',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Order Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              'Aux Price': z
                .number()
                .exactOptional()
                .openapi({ description: 'Required Price to support Stop and Stop Limit orders' }),
              ContractId: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The internal IB identifier for the trading product specified as an integer (can be obtained in response to /secdef request)',
                }),
              Currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The currency in which the FX pair trades (only for InstrumentType=CASH)',
                }),
              CustomerOrderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The order ID assigned by the customer.' }),
              GermanHftAlgo: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.',
                }),
              InstrumentType: z
                .string()
                .exactOptional()
                .openapi({ description: 'The instrument type of the contract' }),
              ListingExchange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The exchange on which the trading product is listed (only for InstrumentType=STK)',
                }),
              Mifid2Algo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for investment decisions",
                }),
              Mifid2DecisionMaker: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II short code for decision makers.",
                }),
              Mifid2ExecutionAlgo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for handling/routing of the order.",
                }),
              Mifid2ExecutionTrader: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II person responsible for handling/routing of the order",
                }),
              'Order Type': OrderTypeSchema.exactOptional(),
              OrderRestrictions: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "MultiValueString representing the restrictions associated with\nan order. If more than one restriction is applicable to an\norder, this field can contain multiple instructions separated\nby space. \n'1' Program Trade\n'2' Index Arbitrage \n'3' Non-Index Arbitrage\n",
                }),
              'Outside RTH': z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates if order is active outside regular trading hours, where defined. 0 = no (default), 1 = yes',
                }),
              Price: z.number().exactOptional().openapi({ description: 'The order price' }),
              Quantity: z
                .number()
                .exactOptional()
                .openapi({ description: 'The number of units in the order; contracts or shares' }),
              Side: z
                .union([z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({ description: "Buy = '1', Sell = '2'" }),
              Ticker: z
                .string()
                .exactOptional()
                .openapi({ description: 'The symbol that identifies the trading product' }),
              'Time in Force': TimeInForceSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns order status information',
      content: { 'application/json': { schema: z.array(OrderStateSchema) } },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getAccountsAccountOrdersCustomerOrderIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{account}/orders/{CustomerOrderId}',
  tags: ['Orders'],
  summary: 'Return specific order info',
  description:
    'Returns the order with the referenced Customer Order ID for the account passed in the URL.',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
      CustomerOrderId: z
        .string()
        .openapi({
          param: {
            description: 'Customer Order ID',
            in: 'path',
            name: 'CustomerOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns order status information',
      content: { 'application/json': { schema: z.array(OrderStateSchema) } },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const putAccountsAccountOrdersCustomerOrderIdRoute = createRoute({
  method: 'put',
  path: '/accounts/{account}/orders/{CustomerOrderId}',
  tags: ['Orders'],
  summary: 'Modify Order',
  description:
    'Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
      CustomerOrderId: z
        .string()
        .openapi({
          param: {
            description: 'Customer Order ID',
            in: 'path',
            name: 'CustomerOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Order Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              'Aux Price': z
                .number()
                .exactOptional()
                .openapi({ description: 'Required Price to support Stop and Stop Limit orders' }),
              CustomerOrderId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new order ID assigned by the customer for the modification.',
                }),
              GermanHftAlgo: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'By setting this bool to false the customer attests that the order is not subject to German HFT Act, was not generated using any automated algorithm, and no algorithm determined or changed financial instrument, side, quantity, order type, limit or other price, trading venue or timing of this order. Currently we cannot accept orders where this flag is set to true. Such orders will be rejected.',
                }),
              Mifid2Algo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for investment decisions",
                }),
              Mifid2DecisionMaker: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II short code for decision makers.",
                }),
              Mifid2ExecutionAlgo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II short code for algos that are responsible for handling/routing of the order.",
                }),
              Mifid2ExecutionTrader: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "This field permits specification of the user's preregistered (via account management) MiFID II person responsible for handling/routing of the order",
                }),
              'Order Type': OrderTypeSchema.exactOptional(),
              OrigCustomerOrderId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The order ID assigned by the customer' }),
              'Outside RTH': z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates if order is active outside regular trading hours, where defined. 0 = no (default), 1 = yes',
                }),
              Price: z.number().exactOptional().openapi({ description: 'The order price' }),
              Quantity: z
                .number()
                .exactOptional()
                .openapi({ description: 'The number of units in the order; contracts or shares' }),
              Side: z
                .union([z.literal(1), z.literal(2)])
                .exactOptional()
                .openapi({ description: "Buy = '1', Sell = '2'" }),
              'Time in Force': TimeInForceSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Result of order modification attempt',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                CustomerOrderId: z.string().exactOptional(),
                OrderQty: z.number().exactOptional(),
                OrderType: OrderTypeSchema.exactOptional(),
                Price: z.string().exactOptional(),
                Side: z.union([z.literal(1), z.literal(2)]).exactOptional(),
                Status: OrderStatusSchema.exactOptional(),
                Symbol: z.number().exactOptional(),
                Warning: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const deleteAccountsAccountOrdersCustomerOrderIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{account}/orders/{CustomerOrderId}',
  tags: ['Orders'],
  summary: 'Cancel Order',
  description:
    'Cancels the order with the referenced Customer Order ID for the account passed in the URL.',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
      CustomerOrderId: z
        .string()
        .openapi({
          param: {
            description: 'Customer Order ID',
            in: 'path',
            name: 'CustomerOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns result of cancellation attempt',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                CustomerOrderId: z.string().exactOptional(),
                OrderQty: z.number().exactOptional(),
                OrderType: OrderTypeSchema.exactOptional(),
                Price: z.string().exactOptional(),
                Side: z.union([z.literal(1), z.literal(2)]).exactOptional(),
                Status: OrderStatusSchema.exactOptional(),
                Symbol: z.number().exactOptional(),
                Warning: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getAccountsAccountPositionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{account}/positions',
  tags: ['Account & Portfolio'],
  summary: 'Account Positions',
  description: 'Returns a list of positions for the indicated account. ',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of positions for the indicated account',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                AverageCost: z.number().exactOptional(),
                ContractId: z.number().exactOptional(),
                Position: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getAccountsAccountSummaryRoute = createRoute({
  method: 'get',
  path: '/accounts/{account}/summary',
  tags: ['Account & Portfolio'],
  summary: 'Account Values Summary',
  description:
    'Returns a list of account and margin balances associated with the account passed in the URL',
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns object for account summary with multiple properties. \nA property is sufficed with -c if it provides commodity value, -s if it provides security value, and -c if its UKL segment value. \n"These values correspond to the TWS Account Window: https://www.interactivebrokers.com/en/software/tws/usersguidebook/realtimeactivitymonitoring/account_window.htm"\n',
      content: {
        'application/json': {
          schema: z
            .object({
              Info: z
                .object({
                  AccountCode: z.string().exactOptional(),
                  AccountReady: z.string().exactOptional(),
                  AccountType: z.string().exactOptional(),
                  Cushion: z.string().exactOptional(),
                  DayTradesRemaining: z.string().exactOptional(),
                  DayTradesRemainingT: z.string().exactOptional(),
                  'DayTradesRemainingT+2': z.string().exactOptional(),
                  'DayTradesRemainingT+3': z.string().exactOptional(),
                  'DayTradesRemainingT+4': z.string().exactOptional(),
                  HighestSeverity: z.string().exactOptional(),
                  'Leverage-S': z.string().exactOptional(),
                  LookAheadNextChange: z.string().exactOptional(),
                  'SegmentTitle-C': z.string().exactOptional(),
                  'SegmentTitle-S': z.string().exactOptional(),
                  'TradingType-S': z.string().exactOptional(),
                  WhatIfPMEnabled: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              Ledger: z
                .array(
                  z
                    .object({
                      CashBalance: z.number().exactOptional(),
                      CashBalanceFXSegment: z.number().exactOptional(),
                      CashCumQty: z.number().exactOptional(),
                      ExchangeRate: z.number().exactOptional(),
                      FutureOptionMarketValue: z.number().exactOptional(),
                      FuturePNL: z.number().exactOptional(),
                      NetDividend: z.number().exactOptional(),
                      NetInterest: z.number().exactOptional(),
                      NetLiquidation: z.number().exactOptional(),
                      OptionMarketValue: z.number().exactOptional(),
                      RealizedPNL: z.number().exactOptional(),
                      StockMarketValue: z.number().exactOptional(),
                      TotalCashBalance: z.number().exactOptional(),
                      UnrealizedPNL: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              Summary: z
                .object({
                  AccruedCash: z.number().exactOptional(),
                  'AccruedCash-C': z.number().exactOptional(),
                  'AccruedCash-S': z.number().exactOptional(),
                  AccruedDividend: z.number().exactOptional(),
                  'AccruedDividend-C': z.number().exactOptional(),
                  'AccruedDividend-S': z.number().exactOptional(),
                  AvailableFunds: z.number().exactOptional(),
                  'AvailableFunds-C': z.number().exactOptional(),
                  'AvailableFunds-S': z.number().exactOptional(),
                  Billable: z.number().exactOptional(),
                  'Billable-C': z.number().exactOptional(),
                  'Billable-S': z.number().exactOptional(),
                  BuyingPower: z.number().exactOptional(),
                  EquityWithLoanValue: z.number().exactOptional(),
                  'EquityWithLoanValue-C': z.number().exactOptional(),
                  'EquityWithLoanValue-S': z.number().exactOptional(),
                  ExcessLiquidity: z.number().exactOptional(),
                  'ExcessLiquidity-C': z.number().exactOptional(),
                  'ExcessLiquidity-S': z.number().exactOptional(),
                  FullAvailableFunds: z.number().exactOptional(),
                  'FullAvailableFunds-C': z.number().exactOptional(),
                  'FullAvailableFunds-S': z.number().exactOptional(),
                  FullExcessLiquidity: z.number().exactOptional(),
                  'FullExcessLiquidity-C': z.number().exactOptional(),
                  'FullExcessLiquidity-S': z.number().exactOptional(),
                  FullInitMarginReq: z.number().exactOptional(),
                  'FullInitMarginReq-C': z.number().exactOptional(),
                  'FullInitMarginReq-S': z.number().exactOptional(),
                  FullMaintMarginReq: z.number().exactOptional(),
                  'FullMaintMarginReq-C': z.number().exactOptional(),
                  'FullMaintMarginReq-S': z.number().exactOptional(),
                  GrossPositionValue: z.number().exactOptional(),
                  'GrossPositionValue-C': z.number().exactOptional(),
                  'GrossPositionValue-S': z.number().exactOptional(),
                  IndianStockHaircut: z.number().exactOptional(),
                  'IndianStockHaircut-C': z.number().exactOptional(),
                  'IndianStockHaircut-S': z.number().exactOptional(),
                  InitMarginReq: z.number().exactOptional(),
                  'InitMarginReq-C': z.number().exactOptional(),
                  'InitMarginReq-S': z.number().exactOptional(),
                  InsuredDeposit: z.number().exactOptional(),
                  'InsuredDeposit-C': z.number().exactOptional(),
                  'InsuredDeposit-S': z.number().exactOptional(),
                  LookAheadAvailableFunds: z.number().exactOptional(),
                  'LookAheadAvailableFunds-C': z.number().exactOptional(),
                  'LookAheadAvailableFunds-S': z.number().exactOptional(),
                  LookAheadExcessLiquidity: z.number().exactOptional(),
                  'LookAheadExcessLiquidity-C': z.number().exactOptional(),
                  'LookAheadExcessLiquidity-S': z.number().exactOptional(),
                  LookAheadInitMarginReq: z.number().exactOptional(),
                  'LookAheadInitMarginReq-C': z.number().exactOptional(),
                  'LookAheadInitMarginReq-S': z.number().exactOptional(),
                  LookAheadMaintMarginReq: z.number().exactOptional(),
                  'LookAheadMaintMarginReq-C': z.number().exactOptional(),
                  'LookAheadMaintMarginReq-S': z.number().exactOptional(),
                  MaintMarginReq: z.number().exactOptional(),
                  'MaintMarginReq-C': z.number().exactOptional(),
                  'MaintMarginReq-S': z.number().exactOptional(),
                  NetLiquidation: z.number().exactOptional(),
                  'NetLiquidation-C': z.number().exactOptional(),
                  'NetLiquidation-S': z.number().exactOptional(),
                  NetLiquidationUncertainty: z.number().exactOptional(),
                  PASharesValue: z.number().exactOptional(),
                  'PASharesValue-C': z.number().exactOptional(),
                  'PASharesValue-S': z.number().exactOptional(),
                  PostExpirationExcess: z.number().exactOptional(),
                  'PostExpirationExcess-C': z.number().exactOptional(),
                  'PostExpirationExcess-S': z.number().exactOptional(),
                  PostExpirationMargin: z.number().exactOptional(),
                  'PostExpirationMargin-C': z.number().exactOptional(),
                  'PostExpirationMargin-S': z.number().exactOptional(),
                  RegTEquity: z.number().exactOptional(),
                  'RegTEquity-S': z.number().exactOptional(),
                  RegTMargin: z.number().exactOptional(),
                  'RegTMargin-S': z.number().exactOptional(),
                  SMA: z.number().exactOptional(),
                  'SMA-S': z.number().exactOptional(),
                  TotalCashValue: z.number().exactOptional(),
                  'TotalCashValue-C': z.number().exactOptional(),
                  'TotalCashValue-S': z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getAccountsAccountTradesRoute = createRoute({
  method: 'get',
  path: '/accounts/{account}/trades',
  tags: ['Trades'],
  summary: 'Returns trades in account',
  description:
    "Returns a list of trades for the account starting at the given 'since' date to the current time (now()). Timezone is UTC. Any request with a future since date or going further than one week will result in an HTTP 400 bad request response. Calling /trades without since will return all trades for the past 24 hours.\n",
  request: {
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Account Number',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Start time specified in UTC. Allowed formats are "yyyy-MM-dd" or "yyyy-MM-dd\'T\'HH:mm:ss". Time is optional and is set to midnight if omitted, e.g. "00:00:00 hh:mm:ss".\n',
      content: { 'application/json': { schema: z.string() } },
    },
  },
  responses: {
    200: {
      description: 'List of Trades',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                AvgPrice: z.number().exactOptional(),
                Commission: z.number().exactOptional(),
                CommissionCurrency: z.string().exactOptional(),
                ContractId: z.number().exactOptional(),
                Currency: z.string().exactOptional(),
                CustomerOrderId: z.number().exactOptional(),
                ExecId: z.string().exactOptional(),
                ExecutionTime: z.string().exactOptional(),
                FilledQuantity: z.number().exactOptional(),
                LastMarket: z.string().exactOptional(),
                ListingExchange: z.string().exactOptional(),
                OrderId: z.string().exactOptional(),
                OrderType: OrderTypeSchema.exactOptional(),
                Quantity: z.number().exactOptional(),
                RemainingQuantity: z.number().exactOptional(),
                Side: z.union([z.literal(1), z.literal(2)]).exactOptional(),
                Ticker: z.string().exactOptional(),
                TradePrice: z.number().exactOptional(),
                TradeSize: z.number().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getMarketdataExchangeComponentsRoute = createRoute({
  method: 'get',
  path: '/marketdata/exchange_components',
  tags: ['Market Data'],
  summary: 'Exchange Components',
  description:
    "This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response. ",
  responses: {
    200: {
      description: 'Exchange Components',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                Complete: z.boolean().exactOptional(),
                ConId: z.number().exactOptional(),
                mapping: z
                  .array(
                    z
                      .object({
                        bit: z.number().exactOptional(),
                        code: z.string().exactOptional(),
                        exchange: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getMarketdataSnapshotRoute = createRoute({
  method: 'get',
  path: '/marketdata/snapshot',
  tags: ['Market Data'],
  summary: 'Market Data Snapshot',
  description:
    "This endpoint allows the consumer to request a market data snapshot for one or more trading products. \nConsumers need to provide unique identifiers (conids) for the products in the IB product database (retrievable using the /secdef endpoint). The 'market' values are integers whose bits indicate the exchange(s) making up the quote. \n\nThe mapping of bit to exchange is obtained from the marketdata/exchange_component endpoint. For example, if a bid has a 'market' value of 5 and the exchange_component result has the map \n0 => NYSE, 1 => ISLAND, 2 => ARCA then the exchanges contributing to the bid size are NYSE and ARCA. \n\nSimilarly, if market=2, then only ISLAND is contributing.\n",
  request: {
    body: {
      description:
        'Contract. Allowed combinations are [type and symbol and currency], or [type, symbol, exchange, and currency], or [conid].',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                conid: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The internal IB identifier for the trading product specified as an integer.',
                  }),
                currency: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The currency in which the given pair trades.' }),
                exchange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The exchange on which the trading product is listed (required for type=STK).',
                  }),
                symbol: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The symbol that identifies the trading product.' }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The instrument type of the contract (CASH).' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Financial Instrument Definition',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                Bid: z
                  .object({
                    market: z.number().exactOptional(),
                    price: z.number().exactOptional(),
                    size: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                Closing: z
                  .object({ price: z.number().exactOptional() })
                  .exactOptional()
                  .openapi({ required: [] }),
                Complete: z.boolean().exactOptional(),
                Conid: z.string().exactOptional(),
                Offer: z
                  .object({
                    market: z.number().exactOptional(),
                    price: z.number().exactOptional(),
                    size: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                Temporality: z
                  .union([z.literal(0), z.literal(1)])
                  .exactOptional()
                  .openapi({ description: '0 = Real time data\n1 = Delayed data\n' }),
                Trade: z
                  .object({
                    market: z.number().exactOptional(),
                    price: z.number().exactOptional(),
                    size: z.number().exactOptional(),
                    time: z.number().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const postOauthAccessTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/access_token',
  tags: ['OAuth'],
  summary: 'Obtain a access token',
  description:
    'Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details. \n',
  request: {
    body: {
      description: 'OAuth Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              oauth_consumer_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.',
                }),
              oauth_nonce: z
                .string()
                .exactOptional()
                .openapi({ description: 'A random string uniquely generated for each request.' }),
              oauth_signature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.',
                }),
              oauth_signature_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.",
                }),
              oauth_timestamp: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.',
                }),
              oauth_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'The request token obtained from IB via /request_token.' }),
              oauth_verifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The verification code received from IB after the user has granted authorization.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Access token and token secret',
      content: {
        'application/json': {
          schema: z
            .object({
              oauth_token: z.string().exactOptional(),
              oauth_token_secret: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const postOauthLiveSessionTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/live_session_token',
  tags: ['OAuth'],
  summary: 'Obtain a live session token',
  description:
    'In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.\nNote this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the "OAuth at Interactive Brokers" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf\n',
  request: {
    body: {
      description: 'OAuth Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              diffie_hellman_challenge: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Challenge value calculated using the Diffie-Hellman prime and generated provided during the registration process. See the "OAuth at Interactive Brokers" document for more details. \n',
                }),
              oauth_consumer_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.',
                }),
              oauth_nonce: z
                .string()
                .exactOptional()
                .openapi({ description: 'A random string uniquely generated for each request.' }),
              oauth_signature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.',
                }),
              oauth_signature_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.",
                }),
              oauth_timestamp: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.',
                }),
              oauth_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'The request token obtained from IB via /request_token.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'DH response',
      content: {
        'application/json': {
          schema: z
            .object({
              diffie_hellman_response: z.string().exactOptional(),
              live_session_token_signature: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const postOauthRequestTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/request_token',
  tags: ['OAuth'],
  summary: 'Obtain a request token',
  description:
    'Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1\n\nNote we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication. \n',
  request: {
    body: {
      description: 'OAuth Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              oauth_callback: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "An absolute URL to which IB will redirect the user. This URL is provided by the consumer during registration. This parameter must be set to 'oob'.  ",
                }),
              oauth_consumer_key: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.',
                }),
              oauth_nonce: z
                .string()
                .exactOptional()
                .openapi({ description: 'A random string uniquely generated for each request.' }),
              oauth_signature: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.',
                }),
              oauth_signature_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.",
                }),
              oauth_timestamp: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OAuth token',
      content: {
        'application/json': {
          schema: z.object({ oauth_token: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})

export const getSecdefRoute = createRoute({
  method: 'get',
  path: '/secdef',
  tags: ['Financial Instrument Definitions'],
  summary: 'Get security definition',
  description:
    'Fields that compose security definition. Allowed combinations,\n(1) type and symbol and currency, or\n(2) type, symbol, exchange, and currency, or\n(3) conid\n',
  request: {
    body: {
      description: 'Order Parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              conid: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The internal IB identifier for the trading product specified as an integer.',
                }),
              currency: z
                .string()
                .exactOptional()
                .openapi({ description: 'The currency in which the given pair trades.' }),
              exchange: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The exchange on which the trading product is listed (required for type=STK).',
                }),
              symbol: z
                .string()
                .exactOptional()
                .openapi({ description: 'The symbol that identifies the trading product.' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'The instrument type of the contract (CASH).' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Financial Instrument Definition',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                CompanyName: z.string().exactOptional(),
                ContractId: z.number().exactOptional(),
                Currency: z.string().exactOptional(),
                Exchange: z.string().exactOptional(),
                SecurityType: z.string().exactOptional(),
                Ticker: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    202: { description: 'Unsuccessfull response' },
    204: { description: 'Unsuccessfull response' },
    400: { description: 'Unsuccessfull response' },
    401: { description: 'Unsuccessfull response' },
    403: { description: 'Unsuccessfull response' },
    408: { description: 'Unsuccessfull response' },
  },
})
