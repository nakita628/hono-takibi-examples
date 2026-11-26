type Error = { code: bigint; msg: string }
type Trade = {
  id: bigint
  price: string
  qty: string
  quoteQty: string
  time: bigint
  isBuyerMaker: boolean
  isBestMatch: boolean
}
type AggTrade = {
  a: bigint
  p: string
  q: string
  f: bigint
  l: bigint
  T: boolean
  m: boolean
  M: boolean
}
type Ticker = {
  symbol: string
  priceChange: string
  priceChangePercent: string
  prevClosePrice: string
  lastPrice: string
  bidPrice: string
  bidQty: string
  askPrice: string
  askQty: string
  openPrice: string
  highPrice: string
  lowPrice: string
  volume: string
  quoteVolume: string
  openTime: bigint
  closeTime: bigint
  firstId: bigint
  lastId: bigint
  count: bigint
}
type TickerList = Ticker[]
type DayTicker = {
  symbol: string
  priceChange: string
  priceChangePercent: string
  weightedAvgPrice: string
  openPrice: string
  highPrice: string
  lowPrice: string
  lastPrice: string
  volume: string
  quoteVolume: string
  openTime: bigint
  closeTime: bigint
  firstId: bigint
  lastId: bigint
  count: bigint
}
type DayTickerList = DayTicker[]
type PriceTicker = { symbol: string; price: string }
type PriceTickerList = PriceTicker[]
type BookTicker = {
  symbol: string
  bidPrice: string
  bidQty: string
  askPrice: string
  askQty: string
}
type BookTickerList = BookTicker[]
type OrderDetails = {
  symbol: string
  orderId: bigint
  orderListId: bigint
  clientOrderId: string
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
  stopPrice: string
  icebergQty: string
  time: bigint
  updateTime: bigint
  isWorking: boolean
  workingTime: bigint
  origQuoteOrderQty: string
  selfTradePreventionMode: string
  preventedMatchId?: number | undefined
  preventedQuantity?: string | undefined
}
type OrderResponseAck = {
  symbol: string
  orderId: bigint
  orderListId: bigint
  clientOrderId: string
  transactTime: bigint
}
type OrderResponseResult = {
  symbol: string
  orderId: bigint
  orderListId: bigint
  clientOrderId: string
  transactTime: bigint
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
  strategyId?: bigint | undefined
  strategyType?: bigint | undefined
  workingTime: bigint
  selfTradePreventionMode: string
}
type OrderResponseFull = {
  symbol: string
  orderId: bigint
  orderListId: bigint
  clientOrderId: string
  transactTime: bigint
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
  strategyId?: bigint | undefined
  strategyType?: bigint | undefined
  workingTime: bigint
  selfTradePreventionMode: string
  fills: { price: string; qty: string; commission: string; commissionAsset: string }[]
}
type Order = {
  symbol: string
  origClientOrderId: string
  orderId: bigint
  orderListId: bigint
  clientOrderId: string
  transactTime: bigint
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
  selfTradePreventionMode: string
}
type OcoOrder = {
  orderListId: bigint
  contingencyType: string
  listStatusType: string
  listOrderStatus: string
  listClientOrderId: string
  transactionTime: bigint
  symbol: string
  orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
  orderReports: {
    symbol: string
    origClientOrderId: string
    orderId: bigint
    orderListId: bigint
    clientOrderId: string
    price: string
    origQty: string
    executedQty: string
    cummulativeQuoteQty: string
    status: string
    timeInForce: string
    type: string
    side: string
    stopPrice: string
    selfTradePreventionMode: string
    transactTime: bigint
  }[]
}
type Account = {
  makerCommission: bigint
  takerCommission: bigint
  buyerCommission: bigint
  sellerCommission: bigint
  commissionRates: { maker: string; taker: string; buyer: string; seller: string }
  canTrade: boolean
  canWithdraw: boolean
  canDeposit: boolean
  brokered: boolean
  requireSelfTradePrevention: boolean
  preventSor: boolean
  updateTime: bigint
  accountType: string
  balances: { asset: string; free: string; locked: string }[]
  permissions: string[]
  uid: bigint
}
type MyTrade = {
  symbol: string
  id: bigint
  orderId: bigint
  orderListId: bigint
  price: string
  qty: string
  quoteQty: string
  commission: string
  commissionAsset: string
  time: bigint
  isBuyer: boolean
  isMaker: boolean
  isBestMatch: boolean
}
type MarginOrderDetail = {
  clientOrderId: string
  cummulativeQuoteQty: string
  executedQty: string
  icebergQty: string
  isWorking: boolean
  orderId: bigint
  origQty: string
  price: string
  side: string
  status: string
  stopPrice: string
  symbol: string
  isIsolated: boolean
  time: bigint
  timeInForce: string
  type: string
  updateTime: bigint
  selfTradePreventionMode: string
}
type MarginOrderResponseAck = {
  symbol: string
  orderId: bigint
  clientOrderId: string
  isIsolated: boolean
  transactTime: bigint
}
type MarginOrderResponseResult = {
  symbol: string
  orderId: bigint
  clientOrderId: string
  transactTime: bigint
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  isIsolated: boolean
  side: string
}
type MarginOrderResponseFull = {
  symbol: string
  orderId: bigint
  clientOrderId: string
  transactTime: bigint
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
  marginBuyBorrowAmount: number
  marginBuyBorrowAsset: string
  isIsolated: boolean
  fills: { price: string; qty: string; commission: string; commissionAsset: string }[]
}
type MarginOrder = {
  symbol: string
  orderId: bigint
  origClientOrderId: string
  clientOrderId: string
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
}
type CanceledMarginOrderDetail = {
  symbol: string
  isIsolated: boolean
  origClientOrderId: string
  orderId: bigint
  orderListId: bigint
  clientOrderId: string
  price: string
  origQty: string
  executedQty: string
  cummulativeQuoteQty: string
  status: string
  timeInForce: string
  type: string
  side: string
}
type MarginOcoOrder = {
  orderListId: bigint
  contingencyType: string
  listStatusType: string
  listOrderStatus: string
  listClientOrderId: string
  transactionTime: bigint
  symbol: string
  isIsolated: boolean
  orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
  orderReports: {
    symbol: string
    origClientOrderId: string
    orderId: bigint
    orderListId: bigint
    clientOrderId: string
    price: string
    origQty: string
    executedQty: string
    cummulativeQuoteQty: string
    status: string
    timeInForce: string
    type: string
    side: string
    stopPrice: string
  }[]
}
type MarginTrade = {
  commission: string
  commissionAsset: string
  id: bigint
  isBestMatch: boolean
  isBuyer: boolean
  isMaker: boolean
  orderId: bigint
  price: string
  qty: string
  symbol: string
  isIsolated: boolean
  time: bigint
}
type IsolatedMarginAccountInfo = {
  assets: {
    baseAsset: {
      asset: string
      borrowEnabled: boolean
      borrowed: string
      free: string
      interest: string
      locked: string
      netAsset: string
      netAssetOfBtc: string
      repayEnabled: boolean
      totalAsset: string
    }
    quoteAsset: {
      asset: string
      borrowEnabled: boolean
      borrowed: string
      free: string
      interest: string
      locked: string
      netAsset: string
      netAssetOfBtc: string
      repayEnabled: boolean
      totalAsset: string
    }
    symbol: string
    isolatedCreated: boolean
    enabled: boolean
    marginLevel: string
    marginLevelStatus: string
    marginRatio: string
    indexPrice: string
    liquidatePrice: string
    liquidateRate: string
    tradeEnabled: boolean
  }[]
  totalAssetOfBtc: string
  totalLiabilityOfBtc: string
  totalNetAssetOfBtc: string
}
type BnbBurnStatus = { spotBNBBurn: boolean; interestBNBBurn: boolean }
type SnapshotSpot = {
  code: bigint
  msg: string
  snapshotVos: {
    data: { balances: { asset: string; free: string; locked: string }[]; totalAssetOfBtc: string }
    type: string
    updateTime: bigint
  }[]
}
type SnapshotMargin = {
  code: bigint
  msg: string
  snapshotVos: {
    data: {
      marginLevel: string
      totalAssetOfBtc: string
      totalLiabilityOfBtc: string
      totalNetAssetOfBtc: string
      userAssets: {
        asset: string
        borrowed: string
        free: string
        interest: string
        locked: string
        netAsset: string
      }[]
    }
    type: string
    updateTime: bigint
  }[]
}
type SnapshotFutures = {
  code: bigint
  msg: string
  snapshotVos: {
    data: {
      assets: { asset: string; marginBalance: string; walletBalance: string }[]
      position: {
        entryPrice: string
        markPrice: string
        positionAmt: string
        symbol: string
        unRealizedProfit: string
      }[]
    }
    type: string
    updateTime: bigint
  }[]
}
type SubAccountUSDTFuturesDetails = {
  futureAccountResp: {
    email: string
    assets: {
      asset: string
      initialMargin: string
      maintenanceMargin: string
      marginBalance: string
      maxWithdrawAmount: string
      openOrderInitialMargin: string
      positionInitialMargin: string
      unrealizedProfit: string
      walletBalance: string
    }[]
    canDeposit: boolean
    canTrade: boolean
    canWithdraw: boolean
    feeTier: bigint
    maxWithdrawAmount: string
    totalInitialMargin: string
    totalMaintenanceMargin: string
    totalMarginBalance: string
    totalOpenOrderInitialMargin: string
    totalPositionInitialMargin: string
    totalUnrealizedProfit: string
    totalWalletBalance: string
    updateTime: bigint
  }
}
type SubAccountCOINFuturesDetails = {
  email: string
  assets: {
    asset: string
    initialMargin: string
    maintenanceMargin: string
    marginBalance: string
    maxWithdrawAmount: string
    openOrderInitialMargin: string
    positionInitialMargin: string
    unrealizedProfit: string
    walletBalance: string
  }[]
  canDeposit: boolean
  canTrade: boolean
  canWithdraw: boolean
  feeTier: bigint
  updateTime: bigint
}
type SubAccountUSDTFuturesSummary = {
  futureAccountSummaryResp: {
    totalInitialMargin: string
    totalMaintenanceMargin: string
    totalMarginBalance: string
    totalOpenOrderInitialMargin: string
    totalPositionInitialMargin: string
    totalUnrealizedProfit: string
    totalWalletBalance: string
    asset: string
    subAccountList: {
      email: string
      totalInitialMargin: string
      totalMaintenanceMargin: string
      totalMarginBalance: string
      totalOpenOrderInitialMargin: string
      totalPositionInitialMargin: string
      totalUnrealizedProfit: string
      totalWalletBalance: string
      asset: string
    }[]
  }
}
type SubAccountCOINFuturesSummary = {
  deliveryAccountSummaryResp: {
    totalMarginBalanceOfBTC: string
    totalUnrealizedProfitOfBTC: string
    totalWalletBalanceOfBTC: string
    asset: string
    subAccountList: {
      email: string
      totalMarginBalance: string
      totalUnrealizedProfit: string
      totalWalletBalance: string
      asset: string
    }[]
  }
}
type SubAccountUSDTFuturesPositionRisk = {
  futurePositionRiskVos: {
    entryPrice: string
    leverage: string
    maxNotional: string
    liquidationPrice: string
    markPrice: string
    positionAmount: string
    symbol: string
    unrealizedProfit: string
  }[]
}
type SubAccountCOINFuturesPositionRisk = {
  deliveryPositionRiskVos: {
    entryPrice: string
    markPrice: string
    leverage: string
    isolated: string
    isolatedWallet: string
    isolatedMargin: string
    isAutoAddMargin: string
    positionSide: string
    positionAmount: string
    symbol: string
    unrealizedProfit: string
  }[]
}
type RepaymentInfo = {
  loanCoin: string
  remainingPrincipal: string
  remainingInterest: string
  collateralCoin: string
  remainingCollateral: string
  currentLTV: string
  repayStatus: string
}
type RepaymentInfo2 = { loanCoin: string; collateralCoin: string; repayStatus: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v3/ping': {
      $get: { input: {}; output: { [key: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/time': {
      $get: { input: {}; output: { serverTime: bigint }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/exchangeInfo': {
      $get:
        | {
            input: { query: { symbol?: string; symbols?: string; permissions?: string } }
            output: {
              timezone: string
              serverTime: bigint
              rateLimits: {
                rateLimitType: string
                interval: string
                intervalNum: number
                limit: number
              }[]
              exchangeFilters: { [key: string]: unknown }[]
              symbols: {
                symbol: string
                status: string
                baseAsset: string
                baseAssetPrecision: number
                quoteAsset: string
                quoteAssetPrecision: number
                baseCommissionPrecision: number
                quoteCommissionPrecision: number
                orderTypes: string[]
                icebergAllowed: boolean
                ocoAllowed: boolean
                otoAllowed: boolean
                quoteOrderQtyMarketAllowed: boolean
                allowTrailingStop: boolean
                cancelReplaceAllowed: boolean
                isSpotTradingAllowed: boolean
                isMarginTradingAllowed: boolean
                filters: {
                  filterType: string
                  minPrice: string
                  maxPrice: string
                  tickSize: string
                }[]
                permissions: string[]
                permissionSets: string[][]
                defaultSelfTradePreventionMode: string
                allowedSelfTradePreventionModes: string[]
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol?: string; symbols?: string; permissions?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/depth': {
      $get:
        | {
            input: { query: { symbol: string; limit?: unknown } }
            output: { lastUpdateId: bigint; bids: string[][]; asks: string[][] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol: string; limit?: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/trades': {
      $get:
        | {
            input: { query: { symbol: string; limit?: unknown } }
            output: Trade[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol: string; limit?: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/historicalTrades': {
      $get: {
        input: { query: { symbol: string; limit?: unknown; fromId?: unknown } }
        output: Trade[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/aggTrades': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                fromId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
              }
            }
            output: AggTrade[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                fromId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/klines': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                interval:
                  | '1s'
                  | '1m'
                  | '3m'
                  | '5m'
                  | '15m'
                  | '30m'
                  | '1h'
                  | '2h'
                  | '4h'
                  | '6h'
                  | '8h'
                  | '12h'
                  | '1d'
                  | '3d'
                  | '1w'
                  | '1M'
                startTime?: unknown
                endTime?: unknown
                timeZone?: string
                limit?: unknown
              }
            }
            output: (bigint | string)[][]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                interval:
                  | '1s'
                  | '1m'
                  | '3m'
                  | '5m'
                  | '15m'
                  | '30m'
                  | '1h'
                  | '2h'
                  | '4h'
                  | '6h'
                  | '8h'
                  | '12h'
                  | '1d'
                  | '3d'
                  | '1w'
                  | '1M'
                startTime?: unknown
                endTime?: unknown
                timeZone?: string
                limit?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/uiKlines': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                interval:
                  | '1s'
                  | '1m'
                  | '3m'
                  | '5m'
                  | '15m'
                  | '30m'
                  | '1h'
                  | '2h'
                  | '4h'
                  | '6h'
                  | '8h'
                  | '12h'
                  | '1d'
                  | '3d'
                  | '1w'
                  | '1M'
                startTime?: unknown
                endTime?: unknown
                timeZone?: string
                limit?: unknown
              }
            }
            output: (bigint | string)[][]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                interval:
                  | '1s'
                  | '1m'
                  | '3m'
                  | '5m'
                  | '15m'
                  | '30m'
                  | '1h'
                  | '2h'
                  | '4h'
                  | '6h'
                  | '8h'
                  | '12h'
                  | '1d'
                  | '3d'
                  | '1w'
                  | '1M'
                startTime?: unknown
                endTime?: unknown
                timeZone?: string
                limit?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/avgPrice': {
      $get:
        | {
            input: { query: { symbol: string } }
            output: { mins: bigint; price: string; closeTime: bigint }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { symbol: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/v3/ticker/24hr': {
      $get:
        | {
            input: { query: { symbol?: string; symbols?: string; type?: 'FULL' | 'MINI' } }
            output: Ticker | TickerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol?: string; symbols?: string; type?: 'FULL' | 'MINI' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/ticker/tradingDay': {
      $get:
        | {
            input: {
              query: {
                symbol?: string
                symbols?: string
                timeZone?: string
                type?: 'FULL' | 'MINI'
              }
            }
            output: DayTicker | DayTickerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol?: string
                symbols?: string
                timeZone?: string
                type?: 'FULL' | 'MINI'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/ticker/price': {
      $get:
        | {
            input: { query: { symbol?: string; symbols?: string } }
            output: PriceTicker | PriceTickerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol?: string; symbols?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/ticker/bookTicker': {
      $get:
        | {
            input: { query: { symbol?: string; symbols?: string } }
            output: BookTicker | BookTickerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol?: string; symbols?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/ticker': {
      $get:
        | {
            input: {
              query: { symbol?: string; symbols?: string; windowSize?: string; type?: string }
            }
            output: {
              symbol: string
              priceChange: string
              priceChangePercent: string
              weightedAvgPrice: string
              openPrice: string
              highPrice: string
              lowPrice: string
              lastPrice: string
              volume: string
              quoteVolume: string
              openTime: bigint
              closeTime: bigint
              firstId: bigint
              lastId: bigint
              count: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { symbol?: string; symbols?: string; windowSize?: string; type?: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/order/test': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                recvWindow?: unknown
                computeCommissionRates?: string
                timestamp: unknown
                signature: string
              }
            }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                recvWindow?: unknown
                computeCommissionRates?: string
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                recvWindow?: unknown
                computeCommissionRates?: string
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/order': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: OrderDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: OrderResponseAck | OrderResponseResult | OrderResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                origClientOrderId?: string
                newClientOrderId?: string
                cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                origClientOrderId?: string
                newClientOrderId?: string
                cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                origClientOrderId?: string
                newClientOrderId?: string
                cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/order/cancelReplace': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                cancelReplaceMode: string
                cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                cancelNewClientOrderId?: string
                cancelOrigClientOrderId?: string
                cancelOrderId?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              cancelResult: string
              newOrderResult: string
              cancelResponse: {
                symbol: string
                origClientOrderId: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                selfTradePreventionMode: string
                transactTime?: bigint | undefined
              }
              newOrderResponse: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                workingTime: bigint
                fills: string[]
                selfTradePreventionMode: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                cancelReplaceMode: string
                cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                cancelNewClientOrderId?: string
                cancelOrigClientOrderId?: string
                cancelOrderId?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                cancelReplaceMode: string
                cancelRestrictions?: 'ONLY_NEW' | 'ONLY_PARTIALLY_FILLED'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity?: unknown
                quoteOrderQty?: unknown
                price?: unknown
                cancelNewClientOrderId?: string
                cancelOrigClientOrderId?: string
                cancelOrderId?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                stopPrice?: unknown
                trailingDelta?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/openOrders': {
      $get:
        | {
            input: {
              query: {
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: OrderDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: (Order | OcoOrder)[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/allOrders': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: OrderDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/orderList/oco': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                aboveType: string
                aboveClientOrderId?: string
                aboveIcebergQty?: unknown
                abovePrice?: unknown
                aboveStopPrice?: unknown
                aboveTrailingDelta?: unknown
                aboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                aboveStrategyId?: unknown
                aboveStrategyType?: unknown
                belowType: string
                belowClientOrderId?: string
                belowIcebergQty?: unknown
                belowPrice?: unknown
                belowStopPrice?: unknown
                belowTrailingDelta?: unknown
                belowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                belowStrategyId?: unknown
                belowStrategyType?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
              orderReports: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                stopPrice: string
                workingTime: bigint
                selfTradePreventionMode: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                aboveType: string
                aboveClientOrderId?: string
                aboveIcebergQty?: unknown
                abovePrice?: unknown
                aboveStopPrice?: unknown
                aboveTrailingDelta?: unknown
                aboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                aboveStrategyId?: unknown
                aboveStrategyType?: unknown
                belowType: string
                belowClientOrderId?: string
                belowIcebergQty?: unknown
                belowPrice?: unknown
                belowStopPrice?: unknown
                belowTrailingDelta?: unknown
                belowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                belowStrategyId?: unknown
                belowStrategyType?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                aboveType: string
                aboveClientOrderId?: string
                aboveIcebergQty?: unknown
                abovePrice?: unknown
                aboveStopPrice?: unknown
                aboveTrailingDelta?: unknown
                aboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                aboveStrategyId?: unknown
                aboveStrategyType?: unknown
                belowType: string
                belowClientOrderId?: string
                belowIcebergQty?: unknown
                belowPrice?: unknown
                belowStopPrice?: unknown
                belowTrailingDelta?: unknown
                belowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                belowStrategyId?: unknown
                belowStrategyType?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/orderList/oto': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                workingStrategyId?: unknown
                workingStrategyType?: unknown
                pendingType:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                pendingSide: 'BUY' | 'SELL'
                pendingClientOrderId?: string
                pendingPrice?: unknown
                pendingStopPrice?: unknown
                pendingTrailingDelta?: unknown
                pendingQuantity: unknown
                pendingIcebergQty?: unknown
                pendingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingStrategyId?: unknown
                pendingStrategyType?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
              orderReports: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                workingTime: bigint
                selfTradePreventionMode: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                workingStrategyId?: unknown
                workingStrategyType?: unknown
                pendingType:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                pendingSide: 'BUY' | 'SELL'
                pendingClientOrderId?: string
                pendingPrice?: unknown
                pendingStopPrice?: unknown
                pendingTrailingDelta?: unknown
                pendingQuantity: unknown
                pendingIcebergQty?: unknown
                pendingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingStrategyId?: unknown
                pendingStrategyType?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                workingStrategyId?: unknown
                workingStrategyType?: unknown
                pendingType:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                pendingSide: 'BUY' | 'SELL'
                pendingClientOrderId?: string
                pendingPrice?: unknown
                pendingStopPrice?: unknown
                pendingTrailingDelta?: unknown
                pendingQuantity: unknown
                pendingIcebergQty?: unknown
                pendingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingStrategyId?: unknown
                pendingStrategyType?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/orderList/otoco': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                workingStrategyId?: unknown
                workingStrategyType?: unknown
                pendingSide: 'BUY' | 'SELL'
                pendingQuantity: unknown
                pendingAboveType: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingAboveClientOrderId?: string
                pendingAbovePrice?: unknown
                pendingAboveStopPrice?: unknown
                pendingAboveTrailingDelta?: unknown
                pendingAboveIcebergQty?: unknown
                pendingAboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingAboveStrategyId?: unknown
                pendingAboveStrategyType?: unknown
                pendingBelowType?: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingBelowClientOrderId?: string
                pendingBelowPrice?: unknown
                pendingBelowStopPrice?: unknown
                pendingBelowTrailingDelta?: unknown
                pendingBelowIcebergQty?: unknown
                pendingBelowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingBelowStrategyId?: unknown
                pendingBelowStrategyType?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
              orderReports: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                workingTime: bigint
                selfTradePreventionMode: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                workingStrategyId?: unknown
                workingStrategyType?: unknown
                pendingSide: 'BUY' | 'SELL'
                pendingQuantity: unknown
                pendingAboveType: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingAboveClientOrderId?: string
                pendingAbovePrice?: unknown
                pendingAboveStopPrice?: unknown
                pendingAboveTrailingDelta?: unknown
                pendingAboveIcebergQty?: unknown
                pendingAboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingAboveStrategyId?: unknown
                pendingAboveStrategyType?: unknown
                pendingBelowType?: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingBelowClientOrderId?: string
                pendingBelowPrice?: unknown
                pendingBelowStopPrice?: unknown
                pendingBelowTrailingDelta?: unknown
                pendingBelowIcebergQty?: unknown
                pendingBelowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingBelowStrategyId?: unknown
                pendingBelowStrategyType?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                workingStrategyId?: unknown
                workingStrategyType?: unknown
                pendingSide: 'BUY' | 'SELL'
                pendingQuantity: unknown
                pendingAboveType: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingAboveClientOrderId?: string
                pendingAbovePrice?: unknown
                pendingAboveStopPrice?: unknown
                pendingAboveTrailingDelta?: unknown
                pendingAboveIcebergQty?: unknown
                pendingAboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingAboveStrategyId?: unknown
                pendingAboveStrategyType?: unknown
                pendingBelowType?: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingBelowClientOrderId?: string
                pendingBelowPrice?: unknown
                pendingBelowStopPrice?: unknown
                pendingBelowTrailingDelta?: unknown
                pendingBelowIcebergQty?: unknown
                pendingBelowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingBelowStrategyId?: unknown
                pendingBelowStrategyType?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/orderList': {
      $get:
        | {
            input: {
              query: {
                orderListId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderListId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderListId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: {
                symbol: string
                orderListId?: unknown
                listClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: OcoOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                orderListId?: unknown
                listClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                orderListId?: unknown
                listClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/allOrderList': {
      $get:
        | {
            input: {
              query: {
                fromId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/openOrderList': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/sor/order': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              symbol: string
              orderId: bigint
              orderListId: bigint
              clientOrderId: string
              transactTime: bigint
              price: string
              origQty: string
              executedQty: string
              cummulativeQuoteQty: string
              status: string
              timeInForce: string
              type: string
              side: string
              workingTime: bigint
              fills: {
                matchType: string
                price: string
                qty: string
                commission: string
                commissionAsset: string
                tradeId: bigint
                allocId: bigint
              }[]
              workingFloor: string
              selfTradePreventionMode: string
              usedSor: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/sor/order/test': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                computeCommissionRates?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                computeCommissionRates?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                quantity: unknown
                price?: unknown
                newClientOrderId?: string
                strategyId?: unknown
                strategyType?: unknown
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                computeCommissionRates?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/account': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/myTrades': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MyTrade[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/rateLimit/order': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              rateLimitType: string
              interval: string
              intervalNum: number
              limit: number
              count?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/myPreventedMatches': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                preventedMatchId?: unknown
                orderId?: unknown
                fromPreventedMatchId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              symbol: string
              preventedMatchId: bigint
              takerOrderId: bigint
              makerOrderId: bigint
              tradeGroupId: bigint
              selfTradePreventionMode: string
              price: string
              makerPreventedQuantity: string
              transactTime: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                preventedMatchId?: unknown
                orderId?: unknown
                fromPreventedMatchId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                preventedMatchId?: unknown
                orderId?: unknown
                fromPreventedMatchId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/myAllocations': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                startTime?: unknown
                endTime?: unknown
                fromAllocationId?: unknown
                limit?: unknown
                orderId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              symbol: string
              allocationId: bigint
              allocationType: string
              orderId: bigint
              orderListId: bigint
              price: string
              qty: string
              quoteQty: string
              commission: string
              commissionAsset: string
              time: bigint
              isBuyer: boolean
              isMaker: boolean
              isAllocator: boolean
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                startTime?: unknown
                endTime?: unknown
                fromAllocationId?: unknown
                limit?: unknown
                orderId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                startTime?: unknown
                endTime?: unknown
                fromAllocationId?: unknown
                limit?: unknown
                orderId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/account/commission': {
      $get:
        | {
            input: { query: { symbol: string; timestamp: unknown; signature: string } }
            output: {
              symbol: string
              standardCommission: { maker: string; taker: string; buyer: string; seller: string }
              taxCommission: { maker: string; taker: string; buyer: string; seller: string }
              discount: {
                enabledForAccount?: boolean | undefined
                enabledForSymbol?: boolean | undefined
                discountAsset?: string | undefined
                discount?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbol: string; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { symbol: string; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/borrow-repay': {
      $post:
        | {
            input: {
              query: {
                asset: string
                isIsolated: string
                symbol: string
                amount: unknown
                type: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                isIsolated: string
                symbol: string
                amount: unknown
                type: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                txId?: unknown
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                type: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                isolatedSymbol?: string | undefined
                amount?: string | undefined
                asset: string
                interest?: string | undefined
                principal: string
                status: string
                timestamp: bigint
                txId: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                txId?: unknown
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                type: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sapi/v1/margin/transfer': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                type?: 'ROLL_IN' | 'ROLL_OUT'
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                amount: string
                asset: string
                status: string
                timestamp: bigint
                txId: bigint
                type: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                type?: 'ROLL_IN' | 'ROLL_OUT'
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                type?: 'ROLL_IN' | 'ROLL_OUT'
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/allAssets': {
      $get:
        | {
            input: { query: { asset: string } }
            output: {
              assetFullName: string
              assetName: string
              isBorrowable: boolean
              isMortgageable: boolean
              userMinBorrow: string
              userMinRepay: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { asset: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/margin/allPairs': {
      $get:
        | {
            input: { query: { symbol: string } }
            output: {
              base: string
              id: bigint
              isBuyAllowed: boolean
              isMarginTrade: boolean
              isSellAllowed: boolean
              quote: string
              symbol: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { symbol: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/margin/priceIndex': {
      $get:
        | {
            input: { query: { symbol: string } }
            output: { calcTime: bigint; price: string; symbol: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { symbol: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/margin/order': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginOrderDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                quantity: unknown
                quoteOrderQty?: unknown
                price?: unknown
                stopPrice?: unknown
                newClientOrderId?: string
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                autoRepayAtCancel: string
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginOrderResponseAck | MarginOrderResponseResult | MarginOrderResponseFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                quantity: unknown
                quoteOrderQty?: unknown
                price?: unknown
                stopPrice?: unknown
                newClientOrderId?: string
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                autoRepayAtCancel: string
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                side: 'SELL' | 'BUY'
                type:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                quantity: unknown
                quoteOrderQty?: unknown
                price?: unknown
                stopPrice?: unknown
                newClientOrderId?: string
                icebergQty?: unknown
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY'
                timeInForce?: 'GTC' | 'IOC' | 'FOK'
                autoRepayAtCancel: string
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                origClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                origClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                origClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/interestHistory': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                isolatedSymbol?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                archived?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                isolatedSymbol: string
                asset: string
                interest: string
                interestAccuredTime: bigint
                interestRate: string
                principal: string
                type: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                isolatedSymbol?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                archived?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                isolatedSymbol?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                archived?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/forceLiquidationRec': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                isolatedSymbol?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                avgPrice: string
                executedQty: string
                orderId: bigint
                price: string
                qty: string
                side: string
                symbol: string
                timeInForce: string
                isIsolated: boolean
                updatedTime: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                isolatedSymbol?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                isolatedSymbol?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/account': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              created: boolean
              borrowEnabled: boolean
              marginLevel: string
              collateralMarginLevel: string
              totalAssetOfBtc: string
              totalLiabilityOfBtc: string
              totalNetAssetOfBtc: string
              TotalCollateralValueInUSDT: string
              tradeEnabled: boolean
              transferInEnabled: boolean
              transferOutEnabled: boolean
              accountType: string
              userAssets: {
                asset: string
                borrowed: string
                free: string
                interest: string
                locked: string
                netAsset: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/openOrders': {
      $get:
        | {
            input: {
              query: {
                symbol?: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginOrderDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol?: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol?: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: (CanceledMarginOrderDetail | MarginOcoOrder)[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/allOrders': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginOrderDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderId?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/order/oco': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                listClientOrderId?: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                limitClientOrderId?: string
                price: unknown
                limitIcebergQty?: unknown
                stopClientOrderId?: string
                stopPrice: unknown
                stopLimitPrice?: unknown
                stopIcebergQty?: unknown
                stopLimitTimeInForce?: 'GTC' | 'FOK' | 'IOC'
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              marginBuyBorrowAmount: string
              marginBuyBorrowAsset: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
              orderReports: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                stopPrice: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                listClientOrderId?: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                limitClientOrderId?: string
                price: unknown
                limitIcebergQty?: unknown
                stopClientOrderId?: string
                stopPrice: unknown
                stopLimitPrice?: unknown
                stopIcebergQty?: unknown
                stopLimitTimeInForce?: 'GTC' | 'FOK' | 'IOC'
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                listClientOrderId?: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                limitClientOrderId?: string
                price: unknown
                limitIcebergQty?: unknown
                stopClientOrderId?: string
                stopPrice: unknown
                stopLimitPrice?: unknown
                stopIcebergQty?: unknown
                stopLimitTimeInForce?: 'GTC' | 'FOK' | 'IOC'
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY' | 'AUTO_REPAY'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/orderList': {
      $get:
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                orderListId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                orderListId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                orderListId?: unknown
                origClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderListId?: unknown
                listClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginOcoOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderListId?: unknown
                listClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                orderListId?: unknown
                listClientOrderId?: string
                newClientOrderId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/allOrderList': {
      $get:
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                fromId?: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                fromId?: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                fromId?: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/openOrderList': {
      $get:
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                isIsolated?: 'TRUE' | 'FALSE'
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/myTrades': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: MarginTrade[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/maxBorrowable': {
      $get:
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { amount: string; borrowLimit: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/maxTransferable': {
      $get:
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { amount: string; borrowLimit: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                isolatedSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/tradeCoeff': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              normalBar?: string | undefined
              marginCallBar?: string | undefined
              forceLiquidationBar?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/isolated/account': {
      $get:
        | {
            input: {
              query: {
                symbols?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: IsolatedMarginAccountInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbols?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbols?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { success: boolean; symbol: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { success: boolean; symbol: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/isolated/accountLimit': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { enabledAccount: bigint; maxAccount: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/isolated/allPairs': {
      $get:
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              symbol: string
              base: string
              quote: string
              isMarginTrade: boolean
              isBuyAllowed: boolean
              isSellAllowed: boolean
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { symbol: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/bnbBurn': {
      $post:
        | {
            input: {
              query: {
                spotBNBBurn?: 'true' | 'false'
                interestBNBBurn?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: BnbBurnStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                spotBNBBurn?: 'true' | 'false'
                interestBNBBurn?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                spotBNBBurn?: 'true' | 'false'
                interestBNBBurn?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: BnbBurnStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/interestRateHistory': {
      $get:
        | {
            input: {
              query: {
                asset: string
                vipLevel?: unknown
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              dailyInterestRate: string
              timestamp: bigint
              vipLevel: number
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                vipLevel?: unknown
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                vipLevel?: unknown
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/crossMarginData': {
      $get:
        | {
            input: {
              query: {
                vipLevel?: unknown
                coin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              vipLevel: number
              coin: string
              transferIn: boolean
              borrowable: boolean
              dailyInterest: string
              yearlyInterest: string
              borrowLimit: string
              marginablePairs: string[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                vipLevel?: unknown
                coin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                vipLevel?: unknown
                coin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/isolatedMarginData': {
      $get:
        | {
            input: {
              query: {
                vipLevel?: unknown
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              vipLevel?: number | undefined
              symbol?: string | undefined
              leverage?: string | undefined
              data?:
                | {
                    coin?: string | undefined
                    dailyInterest?: string | undefined
                    borrowLimit?: string | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                vipLevel?: unknown
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                vipLevel?: unknown
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/isolatedMarginTier': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                tier?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              symbol?: string | undefined
              tier?: number | undefined
              effectiveMultiple?: string | undefined
              initialRiskRatio?: string | undefined
              liquidationRiskRatio?: string | undefined
              baseAssetMaxBorrowable?: string | undefined
              quoteAssetMaxBorrowable?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                tier?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                tier?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/rateLimit/order': {
      $get:
        | {
            input: {
              query: {
                isIsolated?: string
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rateLimitType: string
              interval: string
              intervalNum: bigint
              limit: bigint
              count: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                isIsolated?: string
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                isIsolated?: string
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/crossMarginCollateralRatio': {
      $get:
        | {
            input: {}
            output: {
              collaterals: { minUsdValue: string; maxUsdValue: string; discountRate: string }[]
              assetNames: string[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/margin/exchange-small-liability': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              asset: string
              interest: string
              principal: string
              liabilityAsset: string
              liabilityQty: number
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/exchange-small-liability-history': {
      $get:
        | {
            input: {
              query: {
                current?: unknown
                size?: unknown
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                asset: string
                amount: string
                targetAsset: string
                targetAmount: string
                bizType: string
                timestamp: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                current?: unknown
                size?: unknown
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                current?: unknown
                size?: unknown
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/next-hourly-interest-rate': {
      $get:
        | {
            input: {
              query: {
                assets?: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { asset: string; nextHourlyInterestRate: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                assets?: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                assets?: string
                isIsolated?: 'TRUE' | 'FALSE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/capital-flow': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                symbol?: string
                type?:
                  | 'TRANSFER'
                  | 'BORROW'
                  | 'REPAY'
                  | 'BUY_INCOME'
                  | 'BUY_EXPENSE'
                  | 'SELL_INCOME'
                  | 'SELL_EXPENSE'
                  | 'TRADING_COMMISSION'
                  | 'BUY_LIQUIDATION'
                  | 'SELL_LIQUIDATION'
                  | 'REPAY_LIQUIDATION'
                  | 'OTHER_LIQUIDATION'
                  | 'LIQUIDATION_FEE'
                  | 'SMALL_BALANCE_CONVERT'
                  | 'COMMISSION_RETURN'
                  | 'SMALL_CONVERT'
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              id: bigint
              tranId: bigint
              timestamp: bigint
              asset: string
              symbol: string
              type: string
              amount: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                symbol?: string
                type?:
                  | 'TRANSFER'
                  | 'BORROW'
                  | 'REPAY'
                  | 'BUY_INCOME'
                  | 'BUY_EXPENSE'
                  | 'SELL_INCOME'
                  | 'SELL_EXPENSE'
                  | 'TRADING_COMMISSION'
                  | 'BUY_LIQUIDATION'
                  | 'SELL_LIQUIDATION'
                  | 'REPAY_LIQUIDATION'
                  | 'OTHER_LIQUIDATION'
                  | 'LIQUIDATION_FEE'
                  | 'SMALL_BALANCE_CONVERT'
                  | 'COMMISSION_RETURN'
                  | 'SMALL_CONVERT'
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                symbol?: string
                type?:
                  | 'TRANSFER'
                  | 'BORROW'
                  | 'REPAY'
                  | 'BUY_INCOME'
                  | 'BUY_EXPENSE'
                  | 'SELL_INCOME'
                  | 'SELL_EXPENSE'
                  | 'TRADING_COMMISSION'
                  | 'BUY_LIQUIDATION'
                  | 'SELL_LIQUIDATION'
                  | 'REPAY_LIQUIDATION'
                  | 'OTHER_LIQUIDATION'
                  | 'LIQUIDATION_FEE'
                  | 'SMALL_BALANCE_CONVERT'
                  | 'COMMISSION_RETURN'
                  | 'SMALL_CONVERT'
                startTime?: unknown
                endTime?: unknown
                fromId?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/delist-schedule': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              delistTime?: bigint | undefined
              crossMarginAssets?: string[] | undefined
              isolatedMarginSymbols?: string[] | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/available-inventory': {
      $get:
        | {
            input: { query: { type: 'MARGIN' | 'ISOLATED'; timestamp: unknown; signature: string } }
            output: {
              assets: { MATIC: string; STPT: string; TVK: string; SHIB: string }
              updateTime: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: 'MARGIN' | 'ISOLATED'; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { type: 'MARGIN' | 'ISOLATED'; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/manual-liquidation': {
      $post:
        | {
            input: {
              query: {
                type: 'MARGIN' | 'ISOLATED'
                symbol?: string
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              interest: string
              principal: string
              liabilityAsset: string
              liabilityQty: number
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'MARGIN' | 'ISOLATED'
                symbol?: string
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type: 'MARGIN' | 'ISOLATED'
                symbol?: string
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/order/oto': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                autoRepayAtCancel?: string
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingType:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                pendingSide: 'BUY' | 'SELL'
                pendingClientOrderId?: string
                pendingPrice?: unknown
                pendingStopPrice?: unknown
                pendingTrailingDelta?: unknown
                pendingQuantity: unknown
                pendingIcebergQty?: unknown
                pendingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
              orderReports: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                selfTradePreventionMode: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                autoRepayAtCancel?: string
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingType:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                pendingSide: 'BUY' | 'SELL'
                pendingClientOrderId?: string
                pendingPrice?: unknown
                pendingStopPrice?: unknown
                pendingTrailingDelta?: unknown
                pendingQuantity: unknown
                pendingIcebergQty?: unknown
                pendingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                autoRepayAtCancel?: string
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingType:
                  | 'LIMIT'
                  | 'MARKET'
                  | 'STOP_LOSS'
                  | 'STOP_LOSS_LIMIT'
                  | 'TAKE_PROFIT'
                  | 'TAKE_PROFIT_LIMIT'
                  | 'LIMIT_MAKER'
                pendingSide: 'BUY' | 'SELL'
                pendingClientOrderId?: string
                pendingPrice?: unknown
                pendingStopPrice?: unknown
                pendingTrailingDelta?: unknown
                pendingQuantity: unknown
                pendingIcebergQty?: unknown
                pendingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/order/otoco': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY'
                autoRepayAtCancel?: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingSide: 'BUY' | 'SELL'
                pendingQuantity: unknown
                pendingAboveType: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingAboveClientOrderId?: string
                pendingAbovePrice?: unknown
                pendingAboveStopPrice?: unknown
                pendingAboveTrailingDelta?: unknown
                pendingAboveIcebergQty?: unknown
                pendingAboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingBelowType?: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingBelowClientOrderId?: string
                pendingBelowPrice?: unknown
                pendingBelowStopPrice?: unknown
                pendingBelowTrailingDelta?: unknown
                pendingBelowIcebergQty?: unknown
                pendingBelowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderListId: bigint
              contingencyType: string
              listStatusType: string
              listOrderStatus: string
              listClientOrderId: string
              transactionTime: bigint
              symbol: string
              isIsolated: boolean
              orders: { symbol: string; orderId: bigint; clientOrderId: string }[]
              orderReports: {
                symbol: string
                orderId: bigint
                orderListId: bigint
                clientOrderId: string
                transactTime: bigint
                price: string
                origQty: string
                executedQty: string
                cummulativeQuoteQty: string
                status: string
                timeInForce: string
                type: string
                side: string
                selfTradePreventionMode: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY'
                autoRepayAtCancel?: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingSide: 'BUY' | 'SELL'
                pendingQuantity: unknown
                pendingAboveType: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingAboveClientOrderId?: string
                pendingAbovePrice?: unknown
                pendingAboveStopPrice?: unknown
                pendingAboveTrailingDelta?: unknown
                pendingAboveIcebergQty?: unknown
                pendingAboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingBelowType?: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingBelowClientOrderId?: string
                pendingBelowPrice?: unknown
                pendingBelowStopPrice?: unknown
                pendingBelowTrailingDelta?: unknown
                pendingBelowIcebergQty?: unknown
                pendingBelowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                isIsolated?: 'TRUE' | 'FALSE'
                sideEffectType?: 'NO_SIDE_EFFECT' | 'MARGIN_BUY'
                autoRepayAtCancel?: string
                listClientOrderId?: string
                newOrderRespType?: 'ACK' | 'RESULT' | 'FULL'
                selfTradePreventionMode?: 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH' | 'NONE'
                workingType: 'LIMIT' | 'LIMIT_MAKER'
                workingSide: 'BUY' | 'SELL'
                workingClientOrderId?: string
                workingPrice: unknown
                workingQuantity: unknown
                workingIcebergQty: unknown
                workingTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingSide: 'BUY' | 'SELL'
                pendingQuantity: unknown
                pendingAboveType: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingAboveClientOrderId?: string
                pendingAbovePrice?: unknown
                pendingAboveStopPrice?: unknown
                pendingAboveTrailingDelta?: unknown
                pendingAboveIcebergQty?: unknown
                pendingAboveTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                pendingBelowType?: 'LIMIT_MAKER' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT'
                pendingBelowClientOrderId?: string
                pendingBelowPrice?: unknown
                pendingBelowStopPrice?: unknown
                pendingBelowTrailingDelta?: unknown
                pendingBelowIcebergQty?: unknown
                pendingBelowTimeInForce?: 'GTC' | 'IOC' | 'FOK'
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/max-leverage': {
      $post:
        | {
            input: {
              query: {
                maxLeverage: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxLeverage: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                maxLeverage: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/margin/leverageBracket': {
      $get:
        | {
            input: {}
            output: {
              assetNames: string[]
              rank: number
              brackets: {
                leverage?: number | undefined
                maxDebt?: number | undefined
                maintenanceMarginRate?: number | undefined
                initialMarginRate?: number | undefined
                fastNum?: number | undefined
              }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/system/status': {
      $get: {
        input: {}
        output: { status: number; msg: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sapi/v1/capital/config/getall': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              coin: string
              depositAllEnable: boolean
              free: string
              freeze: string
              ipoable: string
              ipoing: string
              isLegalMoney: boolean
              locked: string
              name: string
              networkList: {
                addressRegex: string
                coin: string
                depositDesc: string
                depositEnable: boolean
                isDefault: boolean
                memoRegex: string
                minConfirm: bigint
                name: string
                network: string
                specialTips: string
                unLockConfirm: bigint
                withdrawDesc: string
                withdrawEnable: boolean
                withdrawFee: string
                withdrawIntegerMultiple: string
                withdrawMax: string
                withdrawMin: string
                sameAddress: boolean
              }[]
              storage: string
              trading: boolean
              withdrawAllEnable: boolean
              withdrawing: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/accountSnapshot': {
      $get:
        | {
            input: {
              query: {
                type: 'SPOT' | 'MARGIN' | 'FUTURES'
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: SnapshotSpot | SnapshotMargin | SnapshotFutures
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'SPOT' | 'MARGIN' | 'FUTURES'
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type: 'SPOT' | 'MARGIN' | 'FUTURES'
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/account/disableFastWithdrawSwitch': {
      $post:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/account/enableFastWithdrawSwitch': {
      $post:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/withdraw/apply': {
      $post:
        | {
            input: {
              query: {
                coin: string
                withdrawOrderId?: string
                network?: string
                address: string
                addressTag?: string
                amount: unknown
                transactionFeeFlag?: string
                name?: string
                walletType?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                coin: string
                withdrawOrderId?: string
                network?: string
                address: string
                addressTag?: string
                amount: unknown
                transactionFeeFlag?: string
                name?: string
                walletType?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                coin: string
                withdrawOrderId?: string
                network?: string
                address: string
                addressTag?: string
                amount: unknown
                transactionFeeFlag?: string
                name?: string
                walletType?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/deposit/hisrec': {
      $get:
        | {
            input: {
              query: {
                coin?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                offset?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              amount: string
              coin: string
              network: string
              status: number
              address: string
              addressTag: string
              txId: string
              insertTime: bigint
              transferType: number
              unlockConfirm: string
              confirmTimes: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                coin?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                offset?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                coin?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                offset?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/withdraw/history': {
      $get:
        | {
            input: {
              query: {
                coin?: string
                withdrawOrderId?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                offset?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              address: string
              amount: string
              applyTime: string
              coin: string
              id: string
              withdrawOrderId: string
              network: string
              transferType: number
              status: number
              transactionFee: string
              confirmNo?: number | undefined
              info?: string | undefined
              txId: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                coin?: string
                withdrawOrderId?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                offset?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                coin?: string
                withdrawOrderId?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                offset?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/deposit/address': {
      $get:
        | {
            input: {
              query: {
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { address: string; coin: string; tag: string; url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/account/status': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { data: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/account/apiTradingStatus': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              data: {
                isLocked: boolean
                plannedRecoverTime: bigint
                triggerCondition: { GCR: bigint; IFER: bigint; UFR: bigint }
                indicators: { BTCUSDT: { i: string; c: bigint; v: number; t: number }[] }
                updateTime: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/dribblet': {
      $get:
        | {
            input: {
              query: {
                accountType?: 'SPOT' | 'MARGIN'
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: bigint
              userAssetDribblets: {
                operateTime: bigint
                totalTransferedAmount: string
                totalServiceChargeAmount: string
                transId: bigint
                userAssetDribbletDetails: {
                  transId: bigint
                  serviceChargeAmount: string
                  amount: string
                  operateTime: bigint
                  transferedAmount: string
                  fromAsset: string
                }[]
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountType?: 'SPOT' | 'MARGIN'
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                accountType?: 'SPOT' | 'MARGIN'
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/dust-btc': {
      $post:
        | {
            input: {
              query: {
                accountType?: 'SPOT' | 'MARGIN'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              details: {
                asset: string
                assetFullName: string
                amountFree: string
                toBTC: string
                toBNB: string
                toBNBOffExchange: string
                exchange: string
              }[]
              totalTransferBtc: string
              totalTransferBNB: string
              dribbletPercentage: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountType?: 'SPOT' | 'MARGIN'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                accountType?: 'SPOT' | 'MARGIN'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/dust': {
      $post:
        | {
            input: {
              query: {
                asset: unknown
                accountType?: 'SPOT' | 'MARGIN'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              totalServiceCharge: string
              totalTransfered: string
              transferResult: {
                amount: string
                fromAsset: string
                operateTime: bigint
                serviceChargeAmount: string
                tranId: bigint
                transferedAmount: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: unknown
                accountType?: 'SPOT' | 'MARGIN'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: unknown
                accountType?: 'SPOT' | 'MARGIN'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/assetDividend': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                id: bigint
                amount: string
                asset: string
                divTime: bigint
                enInfo: string
                tranId: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/assetDetail': {
      $get:
        | {
            input: {
              query: { asset?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              CTR: {
                minWithdrawAmount: string
                depositStatus: boolean
                withdrawFee: bigint
                withdrawStatus: boolean
                depositTip: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { asset?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { asset?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/tradeFee': {
      $get:
        | {
            input: {
              query: {
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { symbol: string; makerCommission: string; takerCommission: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/transfer': {
      $get:
        | {
            input: {
              query: {
                type:
                  | 'MAIN_C2C'
                  | 'MAIN_UMFUTURE'
                  | 'MAIN_CMFUTURE'
                  | 'MAIN_MARGIN'
                  | 'MAIN_MINING'
                  | 'C2C_MAIN'
                  | 'C2C_UMFUTURE'
                  | 'C2C_MINING'
                  | 'C2C_MARGIN'
                  | 'UMFUTURE_MAIN'
                  | 'UMFUTURE_C2C'
                  | 'UMFUTURE_MARGIN'
                  | 'CMFUTURE_MAIN'
                  | 'CMFUTURE_MARGIN'
                  | 'MARGIN_MAIN'
                  | 'MARGIN_UMFUTURE'
                  | 'MARGIN_CMFUTURE'
                  | 'MARGIN_MINING'
                  | 'MARGIN_C2C'
                  | 'MINING_MAIN'
                  | 'MINING_UMFUTURE'
                  | 'MINING_C2C'
                  | 'MINING_MARGIN'
                  | 'MAIN_PAY'
                  | 'PAY_MAIN'
                  | 'ISOLATEDMARGIN_MARGIN'
                  | 'MARGIN_ISOLATEDMARGIN'
                  | 'ISOLATEDMARGIN_ISOLATEDMARGIN'
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                fromSymbol?: string
                toSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                asset: string
                amount: string
                type: string
                status: string
                tranId: bigint
                timestamp: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type:
                  | 'MAIN_C2C'
                  | 'MAIN_UMFUTURE'
                  | 'MAIN_CMFUTURE'
                  | 'MAIN_MARGIN'
                  | 'MAIN_MINING'
                  | 'C2C_MAIN'
                  | 'C2C_UMFUTURE'
                  | 'C2C_MINING'
                  | 'C2C_MARGIN'
                  | 'UMFUTURE_MAIN'
                  | 'UMFUTURE_C2C'
                  | 'UMFUTURE_MARGIN'
                  | 'CMFUTURE_MAIN'
                  | 'CMFUTURE_MARGIN'
                  | 'MARGIN_MAIN'
                  | 'MARGIN_UMFUTURE'
                  | 'MARGIN_CMFUTURE'
                  | 'MARGIN_MINING'
                  | 'MARGIN_C2C'
                  | 'MINING_MAIN'
                  | 'MINING_UMFUTURE'
                  | 'MINING_C2C'
                  | 'MINING_MARGIN'
                  | 'MAIN_PAY'
                  | 'PAY_MAIN'
                  | 'ISOLATEDMARGIN_MARGIN'
                  | 'MARGIN_ISOLATEDMARGIN'
                  | 'ISOLATEDMARGIN_ISOLATEDMARGIN'
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                fromSymbol?: string
                toSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type:
                  | 'MAIN_C2C'
                  | 'MAIN_UMFUTURE'
                  | 'MAIN_CMFUTURE'
                  | 'MAIN_MARGIN'
                  | 'MAIN_MINING'
                  | 'C2C_MAIN'
                  | 'C2C_UMFUTURE'
                  | 'C2C_MINING'
                  | 'C2C_MARGIN'
                  | 'UMFUTURE_MAIN'
                  | 'UMFUTURE_C2C'
                  | 'UMFUTURE_MARGIN'
                  | 'CMFUTURE_MAIN'
                  | 'CMFUTURE_MARGIN'
                  | 'MARGIN_MAIN'
                  | 'MARGIN_UMFUTURE'
                  | 'MARGIN_CMFUTURE'
                  | 'MARGIN_MINING'
                  | 'MARGIN_C2C'
                  | 'MINING_MAIN'
                  | 'MINING_UMFUTURE'
                  | 'MINING_C2C'
                  | 'MINING_MARGIN'
                  | 'MAIN_PAY'
                  | 'PAY_MAIN'
                  | 'ISOLATEDMARGIN_MARGIN'
                  | 'MARGIN_ISOLATEDMARGIN'
                  | 'ISOLATEDMARGIN_ISOLATEDMARGIN'
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                fromSymbol?: string
                toSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                type:
                  | 'MAIN_C2C'
                  | 'MAIN_UMFUTURE'
                  | 'MAIN_CMFUTURE'
                  | 'MAIN_MARGIN'
                  | 'MAIN_MINING'
                  | 'C2C_MAIN'
                  | 'C2C_UMFUTURE'
                  | 'C2C_MINING'
                  | 'C2C_MARGIN'
                  | 'UMFUTURE_MAIN'
                  | 'UMFUTURE_C2C'
                  | 'UMFUTURE_MARGIN'
                  | 'CMFUTURE_MAIN'
                  | 'CMFUTURE_MARGIN'
                  | 'MARGIN_MAIN'
                  | 'MARGIN_UMFUTURE'
                  | 'MARGIN_CMFUTURE'
                  | 'MARGIN_MINING'
                  | 'MARGIN_C2C'
                  | 'MINING_MAIN'
                  | 'MINING_UMFUTURE'
                  | 'MINING_C2C'
                  | 'MINING_MARGIN'
                  | 'MAIN_PAY'
                  | 'PAY_MAIN'
                  | 'ISOLATEDMARGIN_MARGIN'
                  | 'MARGIN_ISOLATEDMARGIN'
                  | 'ISOLATEDMARGIN_ISOLATEDMARGIN'
                asset: string
                amount: unknown
                fromSymbol?: string
                toSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type:
                  | 'MAIN_C2C'
                  | 'MAIN_UMFUTURE'
                  | 'MAIN_CMFUTURE'
                  | 'MAIN_MARGIN'
                  | 'MAIN_MINING'
                  | 'C2C_MAIN'
                  | 'C2C_UMFUTURE'
                  | 'C2C_MINING'
                  | 'C2C_MARGIN'
                  | 'UMFUTURE_MAIN'
                  | 'UMFUTURE_C2C'
                  | 'UMFUTURE_MARGIN'
                  | 'CMFUTURE_MAIN'
                  | 'CMFUTURE_MARGIN'
                  | 'MARGIN_MAIN'
                  | 'MARGIN_UMFUTURE'
                  | 'MARGIN_CMFUTURE'
                  | 'MARGIN_MINING'
                  | 'MARGIN_C2C'
                  | 'MINING_MAIN'
                  | 'MINING_UMFUTURE'
                  | 'MINING_C2C'
                  | 'MINING_MARGIN'
                  | 'MAIN_PAY'
                  | 'PAY_MAIN'
                  | 'ISOLATEDMARGIN_MARGIN'
                  | 'MARGIN_ISOLATEDMARGIN'
                  | 'ISOLATEDMARGIN_ISOLATEDMARGIN'
                asset: string
                amount: unknown
                fromSymbol?: string
                toSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type:
                  | 'MAIN_C2C'
                  | 'MAIN_UMFUTURE'
                  | 'MAIN_CMFUTURE'
                  | 'MAIN_MARGIN'
                  | 'MAIN_MINING'
                  | 'C2C_MAIN'
                  | 'C2C_UMFUTURE'
                  | 'C2C_MINING'
                  | 'C2C_MARGIN'
                  | 'UMFUTURE_MAIN'
                  | 'UMFUTURE_C2C'
                  | 'UMFUTURE_MARGIN'
                  | 'CMFUTURE_MAIN'
                  | 'CMFUTURE_MARGIN'
                  | 'MARGIN_MAIN'
                  | 'MARGIN_UMFUTURE'
                  | 'MARGIN_CMFUTURE'
                  | 'MARGIN_MINING'
                  | 'MARGIN_C2C'
                  | 'MINING_MAIN'
                  | 'MINING_UMFUTURE'
                  | 'MINING_C2C'
                  | 'MINING_MARGIN'
                  | 'MAIN_PAY'
                  | 'PAY_MAIN'
                  | 'ISOLATEDMARGIN_MARGIN'
                  | 'MARGIN_ISOLATEDMARGIN'
                  | 'ISOLATEDMARGIN_ISOLATEDMARGIN'
                asset: string
                amount: unknown
                fromSymbol?: string
                toSymbol?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/get-funding-asset': {
      $post:
        | {
            input: {
              query: {
                asset?: string
                needBtcValuation?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              free: string
              locked: string
              freeze: string
              withdrawing: string
              btcValuation: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                needBtcValuation?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                needBtcValuation?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v3/asset/getUserAsset': {
      $post:
        | {
            input: {
              query: {
                asset?: string
                needBtcValuation?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              free: string
              locked: string
              freeze: string
              withdrawing: string
              ipoable: string
              btcValuation: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                needBtcValuation?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                needBtcValuation?: 'true' | 'false'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/convert-transfer': {
      $post:
        | {
            input: {
              query: {
                clientTranId: string
                asset: string
                amount: unknown
                targetAsset: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                clientTranId: string
                asset: string
                amount: unknown
                targetAsset: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                clientTranId: string
                asset: string
                amount: unknown
                targetAsset: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/convert-transfer/queryByPage': {
      $get:
        | {
            input: {
              query: {
                tranId?: unknown
                asset?: string
                startTime: unknown
                endTime: unknown
                accountType?: 'MAIN' | 'CARD'
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                tranId: bigint
                type: bigint
                time: bigint
                deductedAsset: string
                deductedAmount: string
                targetAsset: string
                targetAmount: string
                status: string
                accountType: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tranId?: unknown
                asset?: string
                startTime: unknown
                endTime: unknown
                accountType?: 'MAIN' | 'CARD'
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tranId?: unknown
                asset?: string
                startTime: unknown
                endTime: unknown
                accountType?: 'MAIN' | 'CARD'
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage': {
      $get:
        | {
            input: {
              query: {
                tranId?: unknown
                clientTranId?: string
                asset?: string
                startTime: unknown
                endTime: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                createTime: bigint
                tranId: bigint
                type: bigint
                asset: string
                amount: string
                status: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tranId?: unknown
                clientTranId?: string
                asset?: string
                startTime: unknown
                endTime: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tranId?: unknown
                clientTranId?: string
                asset?: string
                startTime: unknown
                endTime: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/account/apiRestrictions': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              ipRestrict: boolean
              createTime: bigint
              enableInternalTransfer: boolean
              enableFutures: boolean
              enablePortfolioMarginTrading?: boolean | undefined
              enableVanillaOptions: boolean
              permitsUniversalTransfer: boolean
              enableReading: boolean
              enableSpotAndMarginTrading: boolean
              enableWithdrawals: boolean
              enableMargin: boolean
              tradingAuthorityExpirationTime: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/contract/convertible-coins': {
      $get:
        | {
            input: {}
            output: {
              convertEnabled: boolean
              coins: string[]
              exchangeRates: { USDC: string; TUSD: string; USDP: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { query: { coin: string; enable: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { coin: string; enable: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { coin: string; enable: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/virtualSubAccount': {
      $post:
        | {
            input: {
              query: {
                subAccountString: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { email: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                subAccountString: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                subAccountString: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/list': {
      $get:
        | {
            input: {
              query: {
                email?: string
                isFreeze?: 'true' | 'false'
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              subAccounts: {
                email: string
                isFreeze: boolean
                createTime: bigint
                isManagedSubAccount: boolean
                isAssetManagementSubAccount: boolean
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string
                isFreeze?: 'true' | 'false'
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email?: string
                isFreeze?: 'true' | 'false'
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/sub/transfer/history': {
      $get:
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              from: string
              to: string
              asset: string
              qty: string
              status: string
              tranId: bigint
              time: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/futures/internalTransfer': {
      $get:
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              success: boolean
              futuresType: number
              transfers: {
                from: string
                to: string
                asset: string
                qty: string
                tranId: bigint
                time: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                fromEmail: string
                toEmail: string
                futuresType: unknown
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean; txnId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromEmail: string
                toEmail: string
                futuresType: unknown
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromEmail: string
                toEmail: string
                futuresType: unknown
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v3/sub-account/assets': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { balances: { asset: string; free: bigint; locked: bigint }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/spotSummary': {
      $get:
        | {
            input: {
              query: {
                email?: string
                page?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              totalCount: bigint
              masterAccountTotalAsset: string
              spotSubUserAssetBtcVoList: { email: string; totalAsset: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string
                page?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email?: string
                page?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/deposit/subAddress': {
      $get:
        | {
            input: {
              query: {
                email: string
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { address: string; coin: string; tag: string; url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/deposit/subHisrec': {
      $get:
        | {
            input: {
              query: {
                email: string
                coin?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                offset?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              amount: string
              coin: string
              network: string
              status: number
              address: string
              addressTag: string
              txId: string
              insertTime: bigint
              transferType: number
              confirmTimes: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                coin?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                offset?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                coin?: string
                status?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                offset?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/deposit/credit-apply': {
      $post:
        | {
            input: {
              query: {
                depositId?: unknown
                txId?: string
                subAccountId?: unknown
                subUserId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { code: string; message: string; data: boolean; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                depositId?: unknown
                txId?: string
                subAccountId?: unknown
                subUserId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                depositId?: unknown
                txId?: string
                subAccountId?: unknown
                subUserId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/wallet/balance': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { activate: boolean; balance: string; walletName: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/asset/custody/transfer-history': {
      $get:
        | {
            input: {
              query: {
                email: string
                startTime: unknown
                endTime: unknown
                type?: string
                asset: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                clientTranId: string
                transferType: string
                asset: string
                amount: string
                time: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                startTime: unknown
                endTime: unknown
                type?: string
                asset: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                startTime: unknown
                endTime: unknown
                type?: string
                asset: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/deposit/address/list': {
      $get:
        | {
            input: {
              query: {
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { coin: string; address: string; isDefault: number }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/spot/delist-schedule': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { delistTime: bigint; symbol: string[] }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/capital/withdraw/address/list': {
      $get:
        | {
            input: {}
            output: {
              address: string
              addressTag: string
              coin: string
              name: string
              network: string
              origin: string
              originType: string
              whiteStatus: boolean
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/sapi/v1/account/info': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { vipLevel: number; isMarginEnabled: boolean; isFutureEnabled: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/status': {
      $get:
        | {
            input: {
              query: { email?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              email: string
              isSubUserEnabled: boolean
              isUserActive: boolean
              insertTime: bigint
              isMarginEnabled: boolean
              isFutureEnabled: boolean
              mobile: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/margin/enable': {
      $post:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { email: string; isMarginEnabled: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/margin/account': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              email: string
              marginLevel: string
              totalAssetOfBtc: string
              totalLiabilityOfBtc: string
              totalNetAssetOfBtc: string
              marginTradeCoeffVo: {
                forceLiquidationBar: string
                marginCallBar: string
                normalBar: string
              }
              marginUserAssetVoList: {
                asset: string
                borrowed: string
                free: string
                interest: string
                locked: string
                netAsset: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/margin/accountSummary': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              totalAssetOfBtc: string
              totalLiabilityOfBtc: string
              totalNetAssetOfBtc: string
              subAccountList: {
                email: string
                totalAssetOfBtc: string
                totalLiabilityOfBtc: string
                totalNetAssetOfBtc: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/futures/enable': {
      $post:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { email: string; isFuturesEnabled: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/futures/account': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              email: string
              asset: string
              assets: {
                asset: string
                initialMargin: string
                maintenanceMargin: string
                marginBalance: string
                maxWithdrawAmount: string
                openOrderInitialMargin: string
                positionInitialMargin: string
                unrealizedProfit: string
                walletBalance: string
              }[]
              canDeposit: boolean
              canTrade: boolean
              canWithdraw: boolean
              feeTier: bigint
              maxWithdrawAmount: string
              totalInitialMargin: string
              totalMaintenanceMargin: string
              totalMarginBalance: string
              totalOpenOrderInitialMargin: string
              totalPositionInitialMargin: string
              totalUnrealizedProfit: string
              totalWalletBalance: string
              updateTime: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/futures/accountSummary': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              totalInitialMargin: string
              totalMaintenanceMargin: string
              totalMarginBalance: string
              totalOpenOrderInitialMargin: string
              totalPositionInitialMargin: string
              totalUnrealizedProfit: string
              totalWalletBalance: string
              asset: string
              subAccountList: {
                email: string
                totalInitialMargin: string
                totalMaintenanceMargin: string
                totalMarginBalance: string
                totalOpenOrderInitialMargin: string
                totalPositionInitialMargin: string
                totalUnrealizedProfit: string
                totalWalletBalance: string
                asset: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/futures/positionRisk': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              entryPrice: string
              leverage: string
              maxNotional: string
              liquidationPrice: string
              markPrice: string
              positionAmount: string
              symbol: string
              unrealizedProfit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/futures/transfer': {
      $post:
        | {
            input: {
              query: {
                email: string
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { txnId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/margin/transfer': {
      $post:
        | {
            input: {
              query: {
                email: string
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { txnId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/transfer/subToSub': {
      $post:
        | {
            input: {
              query: {
                toEmail: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { txnId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                toEmail: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                toEmail: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/transfer/subToMaster': {
      $post:
        | {
            input: {
              query: {
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { txnId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/transfer/subUserHistory': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                type?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              counterParty: string
              email: string
              type: number
              asset: string
              qty: string
              fromAccountType: string
              toAccountType: string
              status: string
              tranId: bigint
              time: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                type?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                type?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/universalTransfer': {
      $get:
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                clientTranId?: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              tranId: bigint
              fromEmail: string
              toEmail: string
              asset: string
              amount: string
              fromAccountType: string
              toAccountType: string
              status: string
              createTimeStamp: bigint
              clientTranId: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                clientTranId?: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                clientTranId?: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                fromAccountType:
                  | 'SPOT'
                  | 'USDT_FUTURE'
                  | 'COIN_FUTURE'
                  | 'MARGIN'
                  | 'ISOLATED_MARGIN'
                toAccountType: 'SPOT' | 'USDT_FUTURE' | 'COIN_FUTURE' | 'MARGIN' | 'ISOLATED_MARGIN'
                clientTranId?: string
                symbol?: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint; clientTranId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                fromAccountType:
                  | 'SPOT'
                  | 'USDT_FUTURE'
                  | 'COIN_FUTURE'
                  | 'MARGIN'
                  | 'ISOLATED_MARGIN'
                toAccountType: 'SPOT' | 'USDT_FUTURE' | 'COIN_FUTURE' | 'MARGIN' | 'ISOLATED_MARGIN'
                clientTranId?: string
                symbol?: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromEmail?: string
                toEmail?: string
                fromAccountType:
                  | 'SPOT'
                  | 'USDT_FUTURE'
                  | 'COIN_FUTURE'
                  | 'MARGIN'
                  | 'ISOLATED_MARGIN'
                toAccountType: 'SPOT' | 'USDT_FUTURE' | 'COIN_FUTURE' | 'MARGIN' | 'ISOLATED_MARGIN'
                clientTranId?: string
                symbol?: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/sub-account/futures/account': {
      $get:
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: SubAccountUSDTFuturesDetails | SubAccountCOINFuturesDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/sub-account/futures/accountSummary': {
      $get:
        | {
            input: {
              query: {
                futuresType: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: SubAccountUSDTFuturesSummary | SubAccountCOINFuturesSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                futuresType: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                futuresType: unknown
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/sub-account/futures/positionRisk': {
      $get:
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: SubAccountUSDTFuturesPositionRisk | SubAccountCOINFuturesPositionRisk
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                futuresType: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/blvt/enable': {
      $post:
        | {
            input: {
              query: {
                email: string
                enableBlvt: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { email: string; enableBlvt: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                enableBlvt: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                enableBlvt: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/deposit': {
      $post:
        | {
            input: {
              query: {
                toEmail: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                toEmail: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                toEmail: string
                asset: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/asset': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              coin: string
              name: string
              totalBalance: string
              availableBalance: string
              inOrder: string
              btcValue: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/withdraw': {
      $post:
        | {
            input: {
              query: {
                fromEmail: string
                asset: string
                amount: unknown
                transferDate?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromEmail: string
                asset: string
                amount: unknown
                transferDate?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromEmail: string
                asset: string
                amount: unknown
                transferDate?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/accountSnapshot': {
      $get:
        | {
            input: {
              query: {
                email: string
                type: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: number
              msg: string
              snapshotVos: {
                data: {
                  balances: { asset: string; free: string; locked: string }[]
                  totalAssetOfBtc: string
                }
                type: string
                updateTime: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                type: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                type: string
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/queryTransLogForInvestor': {
      $get:
        | {
            input: {
              query: {
                email: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers?: string
                transferFunctionAccountType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              count: number
              managerSubTransferHistoryVos: {
                fromEmail: string
                fromAccountType: string
                toEmail: string
                toAccountType: string
                asset: string
                amount: string
                scheduledData: bigint
                createTime: bigint
                status: string
                tranId: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers?: string
                transferFunctionAccountType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers?: string
                transferFunctionAccountType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/queryTransLogForTradeParent': {
      $get:
        | {
            input: {
              query: {
                email: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers?: string
                transferFunctionAccountType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              count: number
              managerSubTransferHistoryVos: {
                fromEmail: string
                fromAccountType: string
                toEmail: string
                toAccountType: string
                asset: string
                amount: string
                scheduledData: bigint
                createTime: bigint
                status: string
                tranId: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers?: string
                transferFunctionAccountType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers?: string
                transferFunctionAccountType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/fetch-future-asset': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              code: number
              message: string
              snapshotVos: {
                type: string
                updateTime: bigint
                data: {
                  assets: { asset: string; marginBalance: number; walletBalance: number }[]
                  position: {
                    symbol: string
                    entryPrice: number
                    markPrice: number
                    positionAmt: number
                  }[]
                }
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/marginAsset': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              marginLevel: string
              totalAssetOfBtc: string
              totalLiabilityOfBtc: string
              totalNetAssetOfBtc: string
              userAssets: {
                asset: string
                borrowed: string
                free: string
                interest: string
                locked: string
                netAsset: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/info': {
      $get:
        | {
            input: {
              query: {
                email: string
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              managerSubUserInfoVoList: {
                rootUserId: bigint
                managersubUserId: bigint
                bindParentUserId: bigint
                email?: string | undefined
                insertTimeStamp: bigint
                bindParentEmail: string
                isSubUserEnabled: boolean
                isUserActive: boolean
                isMarginEnabled: boolean
                isFutureEnabled: boolean
                isSignedLVTRiskAgreement: boolean
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                page?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/deposit/address': {
      $get:
        | {
            input: {
              query: {
                email: string
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { coin: string; address: string; tag: string; url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                coin: string
                network?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/managed-subaccount/query-trans-log': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers: 'FROM' | 'TO'
                transferFunctionAccountType:
                  | 'SPOT'
                  | 'MARGIN'
                  | 'ISOLATED_MARGIN'
                  | 'USDT_FUTURE'
                  | 'COIN_FUTURE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              count: number
              managerSubTransferHistoryVos: {
                fromEmail: string
                fromAccountType: string
                toEmail: string
                toAccountType: string
                asset: string
                amount: string
                scheduledData: bigint
                createTime: bigint
                status: string
                tranId: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers: 'FROM' | 'TO'
                transferFunctionAccountType:
                  | 'SPOT'
                  | 'MARGIN'
                  | 'ISOLATED_MARGIN'
                  | 'USDT_FUTURE'
                  | 'COIN_FUTURE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                limit?: unknown
                transfers: 'FROM' | 'TO'
                transferFunctionAccountType:
                  | 'SPOT'
                  | 'MARGIN'
                  | 'ISOLATED_MARGIN'
                  | 'USDT_FUTURE'
                  | 'COIN_FUTURE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/subAccountApi/ipRestriction': {
      $get:
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { ipRestrict: string; ipList: string[]; updateTime: bigint; apiKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList': {
      $delete:
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                ipAddress?: string
                thirdPartyName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { ipRestrict: string; ipList: string[]; updateTime: bigint; apiKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                ipAddress?: string
                thirdPartyName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                ipAddress?: string
                thirdPartyName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/transaction-statistics': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: {
              recent30BtcTotal: string
              recent30BtcFuturesTotal: string
              recent30BtcMarginTotal: string
              recent30BusdTotal: string
              recent30BusdFuturesTotal: string
              recent30BusdMarginTotal: string
              tradeInfoVos: {
                userId?: bigint | undefined
                btc?: number | undefined
                btcFutures?: number | undefined
                btcMargin?: number | undefined
                busd?: number | undefined
                busdFutures?: number | undefined
                busdMargin?: number | undefined
                date?: bigint | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/sub-account/eoptions/enable': {
      $post:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { email: string; isEOptionsEnabled: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/sub-account/subAccountApi/ipRestriction': {
      $post:
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                status: string
                thirdPartyName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { status: string; ipList: string[]; updateTime: bigint; apiKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                status: string
                thirdPartyName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email: string
                subAccountApiKey: string
                status: string
                thirdPartyName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v4/sub-account/assets': {
      $get:
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { balances: { asset: string; free: string; locked: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { email: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v3/userDataStream': {
      $post: { input: {}; output: { listenKey: string }; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { query: { listenKey?: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { listenKey?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { listenKey?: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { listenKey?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sapi/v1/userDataStream': {
      $post: { input: {}; output: { listenKey: string }; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { query: { listenKey?: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { listenKey?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { listenKey?: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { listenKey?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sapi/v1/userDataStream/isolated': {
      $post: { input: {}; output: { listenKey: string }; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { query: { listenKey?: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { listenKey?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { query: { listenKey?: string } }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { listenKey?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sapi/v1/fiat/orders': {
      $get:
        | {
            input: {
              query: {
                transactionType: unknown
                beginTime?: unknown
                endTime?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: {
                orderNo: string
                fiatCurrency: string
                indicatedAmount: string
                amount: string
                totalFee: string
                method: string
                status: string
                createTime: bigint
                updateTime: bigint
              }[]
              total: number
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transactionType: unknown
                beginTime?: unknown
                endTime?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transactionType: unknown
                beginTime?: unknown
                endTime?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/fiat/payments': {
      $get:
        | {
            input: {
              query: {
                transactionType: unknown
                beginTime?: unknown
                endTime?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: {
                orderNo: string
                sourceAmount: string
                fiatCurrency: string
                obtainAmount: string
                cryptoCurrency: string
                totalFee: string
                price: string
                status: string
                createTime: bigint
                updateTime: bigint
              }[]
              total: number
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transactionType: unknown
                beginTime?: unknown
                endTime?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transactionType: unknown
                beginTime?: unknown
                endTime?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/project/list': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                type: 'ACTIVITY' | 'CUSTOMIZED_FIXED'
                status?: 'ALL' | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE'
                isSortAsc?: string
                sortBy?: 'START_TIME' | 'LOT_SIZE' | 'INTEREST_RATE' | 'DURATION'
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              displayPriority: bigint
              duration: bigint
              interestPerLot: string
              interestRate: string
              lotSize: string
              lotsLowLimit: bigint
              lotsPurchased: bigint
              lotsUpLimit: bigint
              maxLotsPerUser: bigint
              needKyc: boolean
              projectId: string
              projectName: string
              status: string
              type: string
              withAreaLimitation: boolean
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                type: 'ACTIVITY' | 'CUSTOMIZED_FIXED'
                status?: 'ALL' | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE'
                isSortAsc?: string
                sortBy?: 'START_TIME' | 'LOT_SIZE' | 'INTEREST_RATE' | 'DURATION'
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                type: 'ACTIVITY' | 'CUSTOMIZED_FIXED'
                status?: 'ALL' | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE'
                isSortAsc?: string
                sortBy?: 'START_TIME' | 'LOT_SIZE' | 'INTEREST_RATE' | 'DURATION'
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/customizedFixed/purchase': {
      $post:
        | {
            input: {
              query: {
                projectId: string
                lot: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { purchaseId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId: string
                lot: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectId: string
                lot: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/project/position/list': {
      $get:
        | {
            input: {
              query: {
                asset: string
                projectId?: string
                status?: 'ALL' | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              canTransfer: boolean
              createTimestamp: bigint
              duration: bigint
              endTime: bigint
              interest: string
              interestRate: string
              lot: bigint
              positionId: bigint
              principal: string
              projectId: string
              projectName: string
              purchaseTime: bigint
              redeemDate: string
              startTime: bigint
              status: string
              type: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                projectId?: string
                status?: 'ALL' | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                projectId?: string
                status?: 'ALL' | 'SUBSCRIBABLE' | 'UNSUBSCRIBABLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/positionChanged': {
      $post:
        | {
            input: {
              query: {
                projectId: string
                lot: string
                positionId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { dailyPurchaseId: bigint; success: boolean; time: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId: string
                lot: string
                positionId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectId: string
                lot: string
                positionId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/pub/algoList': {
      $get:
        | {
            input: {}
            output: {
              code: bigint
              msg: string
              data: { algoName: string; algoId: bigint; poolIndex: bigint; unit: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/mining/pub/coinList': {
      $get:
        | {
            input: {}
            output: {
              code: bigint
              msg: string
              data: {
                coinName: string
                coinId: bigint
                poolIndex: bigint
                algoId: bigint
                algoName: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/mining/worker/detail': {
      $get:
        | {
            input: {
              query: {
                algo: string
                userName: string
                workerName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                workerName: string
                type: string
                hashrateDatas: { time: bigint; hashrate: string; reject: bigint }[]
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                workerName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                workerName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/worker/list': {
      $get:
        | {
            input: {
              query: {
                algo: string
                userName: string
                pageIndex?: unknown
                sort?: unknown
                sortColumn?: unknown
                workerStatus?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                workerDatas: {
                  workerId: string
                  workerName: string
                  status: bigint
                  hashRate: bigint
                  dayHashRate: bigint
                  rejectRate: bigint
                  lastShareTime: bigint
                }[]
                totalNum: bigint
                pageSize: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                pageIndex?: unknown
                sort?: unknown
                sortColumn?: unknown
                workerStatus?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                pageIndex?: unknown
                sort?: unknown
                sortColumn?: unknown
                workerStatus?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/payment/list': {
      $get:
        | {
            input: {
              query: {
                algo: string
                userName: string
                coin?: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                accountProfits: {
                  time: bigint
                  type: bigint
                  hashTransfer: number
                  transferAmount: number
                  dayHashRate: bigint
                  profitAmount: number
                  coinName: string
                  status: number
                }[]
                totalNum: bigint
                pageSize: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                coin?: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                coin?: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/payment/other': {
      $get:
        | {
            input: {
              query: {
                algo: string
                userName: string
                coin?: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                otherProfits: {
                  time: bigint
                  coinName: string
                  type: number
                  profitAmount: number
                  status: number
                }[]
                totalNum: bigint
                pageSize: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                coin?: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                coin?: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/hash-transfer/config/details/list': {
      $get:
        | {
            input: {
              query: {
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                configDetails: {
                  configId: bigint
                  poolUsername: string
                  toPoolUsername: string
                  algoName: string
                  hashRate: bigint
                  startDay: bigint
                  endDay: bigint
                  status: number
                }[]
                totalNum: bigint
                pageSize: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/hash-transfer/profit/details': {
      $get:
        | {
            input: {
              query: {
                configId: string
                userName: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                profitTransferDetails: {
                  poolUsername: string
                  toPoolUsername: string
                  algoName: string
                  hashRate: bigint
                  day: bigint
                  amount: number
                  coinName: string
                }[]
                totalNum: bigint
                pageSize: bigint
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                configId: string
                userName: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                configId: string
                userName: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/hash-transfer/config': {
      $post:
        | {
            input: {
              query: {
                userName: string
                algo: string
                startDate?: string
                endDate?: string
                toPoolUser: string
                hashRate: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { code: bigint; msg: string; data: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userName: string
                algo: string
                startDate?: string
                endDate?: string
                toPoolUser: string
                hashRate: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                userName: string
                algo: string
                startDate?: string
                endDate?: string
                toPoolUser: string
                hashRate: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/hash-transfer/config/cancel': {
      $post:
        | {
            input: {
              query: {
                configId: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { code: bigint; msg: string; data: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                configId: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                configId: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/statistics/user/status': {
      $get:
        | {
            input: {
              query: {
                algo: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                fifteenMinHashRate: string
                dayHashRate: string
                validNum: bigint
                invalidNum: bigint
                profitToday: { BTC: string; BSV: string; BCH: string }
                profitYesterday: { BTC: string; BSV: string; BCH: string }
                userName: string
                unit: string
                algo: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/statistics/user/list': {
      $get:
        | {
            input: {
              query: {
                algo: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: bigint
              msg: string
              data: {
                type: string
                userName: string
                list: { time: bigint; hashrate: string; reject: string }[]
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                userName: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/mining/payment/uid': {
      $get:
        | {
            input: {
              query: {
                algo: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: number
              msg: string
              data: {
                accountProfits: {
                  time: bigint
                  coinName: string
                  type: number
                  puid: number
                  subName: string
                  amount: number
                }[]
                totalNum: number
                pageSize: number
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algo: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algo: string
                startDate?: string
                endDate?: string
                pageIndex?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/futures/transfer': {
      $post:
        | {
            input: {
              query: {
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                amount: unknown
                type: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: {
              query: {
                asset: string
                startTime: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                asset: string
                tranId: bigint
                amount: string
                type: string
                timestamp: bigint
                status: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                startTime: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                startTime: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/futures/histDataLink': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                dataType: 'T_DEPTH' | 'S_DEPTH'
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { data: { day: string; url: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                dataType: 'T_DEPTH' | 'S_DEPTH'
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                dataType: 'T_DEPTH' | 'S_DEPTH'
                startTime?: unknown
                endTime?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/futures/newOrderVp': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                positionSide?: 'BOTH' | 'LONG' | 'SHORT'
                quantity: unknown
                urgency: 'LOW' | 'MEDIUM' | 'HIGH'
                clientAlgoId?: string
                reduceOnly?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { clientAlgoId: string; success: boolean; code: bigint; msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                positionSide?: 'BOTH' | 'LONG' | 'SHORT'
                quantity: unknown
                urgency: 'LOW' | 'MEDIUM' | 'HIGH'
                clientAlgoId?: string
                reduceOnly?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                positionSide?: 'BOTH' | 'LONG' | 'SHORT'
                quantity: unknown
                urgency: 'LOW' | 'MEDIUM' | 'HIGH'
                clientAlgoId?: string
                reduceOnly?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/futures/newOrderTwap': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                positionSide?: 'BOTH' | 'LONG' | 'SHORT'
                quantity: unknown
                duration: unknown
                clientAlgoId?: string
                reduceOnly?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { clientAlgoId: string; success: boolean; code: bigint; msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                positionSide?: 'BOTH' | 'LONG' | 'SHORT'
                quantity: unknown
                duration: unknown
                clientAlgoId?: string
                reduceOnly?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                positionSide?: 'BOTH' | 'LONG' | 'SHORT'
                quantity: unknown
                duration: unknown
                clientAlgoId?: string
                reduceOnly?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/futures/order': {
      $delete:
        | {
            input: {
              query: {
                algoId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { algoId: bigint; success: boolean; code: bigint; msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algoId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algoId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/futures/openOrders': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              total: number
              orders?:
                | {
                    algoId: bigint
                    symbol: string
                    side: string
                    positionSide: string
                    totalQty: string
                    executedQty: string
                    executedAmt: string
                    avgPrice: string
                    clientAlgoId: string
                    bookTime: bigint
                    endTime: bigint
                    algoStatus: string
                    algoType: string
                    urgency: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/futures/historicalOrders': {
      $get:
        | {
            input: {
              query: {
                symbol?: string
                side?: 'SELL' | 'BUY'
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              orders: {
                algoId: bigint
                symbol: string
                side: string
                positionSide: string
                totalQty: string
                executedQty: string
                executedAmt: string
                avgPrice: string
                clientAlgoId: string
                bookTime: bigint
                endTime: bigint
                algoStatus: string
                algoType: string
                urgency: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol?: string
                side?: 'SELL' | 'BUY'
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol?: string
                side?: 'SELL' | 'BUY'
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/futures/subOrders': {
      $get:
        | {
            input: {
              query: {
                algoId: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              executedQty: string
              executedAmt: string
              subOrders: {
                algoId: bigint
                orderId: bigint
                orderStatus: string
                executedQty?: string | undefined
                executedAmt: string
                feeAmt: string
                feeAsset: string
                bookTime: bigint
                avgPrice: string
                side: string
                symbol: string
                subId: bigint
                timeInForce: string
                origQty: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algoId: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algoId: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/spot/newOrderTwap': {
      $post:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                duration: unknown
                clientAlgoId?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { clientAlgoId: string; success: boolean; code: number; msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                duration: unknown
                clientAlgoId?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                quantity: unknown
                duration: unknown
                clientAlgoId?: string
                limitPrice?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/spot/order': {
      $delete:
        | {
            input: {
              query: {
                algoId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { algoId: bigint; success: boolean; code: number; msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algoId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algoId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/spot/openOrders': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              total: bigint
              orders: {
                algoId: number
                symbol: string
                side: string
                totalQty: string
                executedQty: string
                executedAmt: string
                avgPrice: string
                clientAlgoId: string
                bookTime: bigint
                endTime: bigint
                algoStatus: string
                algoType: string
                urgency: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/spot/historicalOrders': {
      $get:
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: bigint
              orders: {
                algoId: number
                symbol: string
                side: string
                totalQty: string
                executedQty: string
                executedAmt: string
                avgPrice: string
                clientAlgoId: string
                bookTime: bigint
                endTime: bigint
                algoStatus: string
                algoType: string
                urgency: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                symbol: string
                side: 'SELL' | 'BUY'
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/algo/spot/subOrders': {
      $get:
        | {
            input: {
              query: {
                algoId: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: bigint
              executedQty: string
              executedAmt: string
              subOrders: {
                algoId: number
                orderId: bigint
                orderStatus: string
                executedQty: string
                executedAmt: string
                feeAmt: string
                feeAsset: string
                bookTime: bigint
                avgPrice: string
                side: string
                symbol: string
                subId: number
                timeInForce: string
                origQty: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algoId: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                algoId: unknown
                page?: unknown
                pageSize?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/account': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              uniMMR: string
              accountEquity: string
              actualEquity: string
              accountMaintMargin: string
              accountStatus: string
              accountType: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/collateralRate': {
      $get:
        | {
            input: {}
            output: { asset: string; collateralRate: string }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v2/portfolio/collateralRate': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              asset: string
              collateralInfo: { tierFloor: string; tierCap: string; collateralRate: string }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/pmLoan': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { asset: string; amount: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/repay': {
      $post:
        | {
            input: {
              query: { from?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/interest-history': {
      $get:
        | {
            input: {
              query: {
                asset: string
                startTime?: unknown
                endTime?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              interest: string
              interestAccruedTime: bigint
              interestRate: string
              principal: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset: string
                startTime?: unknown
                endTime?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset: string
                startTime?: unknown
                endTime?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/asset-index-price': {
      $get:
        | {
            input: { query: { asset?: string } }
            output: { asset: string; assetIndexPrice: string; time: bigint }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { asset?: string } }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/sapi/v1/portfolio/auto-collection': {
      $post:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/bnb-transfer': {
      $post:
        | {
            input: {
              query: {
                transferSide: 'TO_UM' | 'FROM_UM'
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { tranId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transferSide: 'TO_UM' | 'FROM_UM'
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transferSide: 'TO_UM' | 'FROM_UM'
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/repay-futures-switch': {
      $post:
        | {
            input: {
              query: {
                autoRepay: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                autoRepay: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                autoRepay: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { autoRepay: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/repay-futures-negative-balance': {
      $post:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/portfolio/margin-asset-leverage': {
      $get:
        | {
            input: {}
            output: { asset?: string | undefined; collateralRate?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/sapi/v1/portfolio/asset-collection': {
      $post:
        | {
            input: {
              query: { asset: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: { msg: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { asset: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { asset: string; recvWindow?: unknown; timestamp: unknown; signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/blvt/tokenInfo': {
      $get:
        | {
            input: { query: { tokenName?: string } }
            output: {
              tokenName: string
              description: string
              underlying: string
              tokenIssued: string
              basket: string
              currentBaskets: { symbol: string; amount: string; notionalValue: string }[]
              nav: string
              realLeverage: string
              fundingRate: string
              dailyManagementFee: string
              purchaseFeePct: string
              dailyPurchaseLimit: string
              redeemFeePct: string
              dailyRedeemLimit: string
              timestamp: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tokenName?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sapi/v1/blvt/subscribe': {
      $post:
        | {
            input: {
              query: {
                tokenName: string
                cost: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              id: bigint
              status: string
              tokenName: string
              amount: string
              cost: string
              timestamp: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tokenName: string
                cost: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tokenName: string
                cost: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/blvt/subscribe/record': {
      $get:
        | {
            input: {
              query: {
                tokenName?: string
                id?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              id: bigint
              tokenName: string
              amount: string
              nav: string
              fee: string
              totalCharge: string
              timestamp: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tokenName?: string
                id?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tokenName?: string
                id?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/blvt/redeem': {
      $post:
        | {
            input: {
              query: {
                tokenName: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              id: bigint
              status: string
              tokenName: string
              redeemAmount: string
              amount: string
              timestamp: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tokenName: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tokenName: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/blvt/redeem/record': {
      $get:
        | {
            input: {
              query: {
                tokenName?: string
                id?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              id: bigint
              tokenName: string
              amount: string
              nav: string
              fee: string
              netProceed: string
              timestamp: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tokenName?: string
                id?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tokenName?: string
                id?: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/blvt/userLimit': {
      $get:
        | {
            input: {
              query: {
                tokenName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              tokenName: string
              userDailyTotalPurchaseLimit: string
              userDailyTotalRedeemLimit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tokenName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tokenName?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/c2c/orderMatch/listUserOrderHistory': {
      $get:
        | {
            input: {
              query: {
                tradeType: 'BUY' | 'SELL'
                startTimestamp?: unknown
                endTimestamp?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: {
                orderNumber: string
                advNo: string
                tradeType: string
                asset: string
                fiat: string
                fiatSymbol: string
                amount: string
                totalPrice: string
                unitPrice: string
                orderStatus: string
                createTime: bigint
                commission: string
                counterPartNickName: string
                advertisementRole: string
              }[]
              total: number
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tradeType: 'BUY' | 'SELL'
                startTimestamp?: unknown
                endTimestamp?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                tradeType: 'BUY' | 'SELL'
                startTimestamp?: unknown
                endTimestamp?: unknown
                page?: unknown
                rows?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/ongoing/orders': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                collateralAccountId?: unknown
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                orderId: bigint
                loanCoin: string
                totalDebt: string
                residualInterest: string
                collateralAccountId: string
                collateralCoin: string
                collateralValue: string
                totalCollateralValueAfterHaircut?: string | undefined
                lockedCollateralValue?: string | undefined
                currentLTV: string
                expirationTime: bigint
                loanDate: string
                loanRate: string
                loanTerm: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                collateralAccountId?: unknown
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                collateralAccountId?: unknown
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/repay': {
      $post:
        | {
            input: {
              query: {
                orderId?: unknown
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanCoin: string
              repayAmount: string
              remainingPrincipal: string
              remainingInterest: string
              collateralCoin: string
              currentLTV: string
              repayStatus: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/repay/history': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                repayAmount: string
                collateralCoin: string
                repayStatus: string
                repayTime: string
                orderId: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/collateral/account': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                collateralAccountId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                collateralAccountId: string
                collateralCoin: string
                collateralValue: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                collateralAccountId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                collateralAccountId?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/borrow': {
      $post:
        | {
            input: {
              query: {
                loanAccountId: unknown
                loanCoin?: string
                loanAmount: unknown
                collateralAccountId: string
                collateralCoin: string
                isFlexibleRate: 'TRUE' | 'FALSE'
                loanTerm?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanAccountId: string
              requestId: string
              loanCoin: string
              isFlexibleRate: string
              loanAmount: string
              collateralAccountId: string
              collateralCoin: string
              loanTerm?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanAccountId: unknown
                loanCoin?: string
                loanAmount: unknown
                collateralAccountId: string
                collateralCoin: string
                isFlexibleRate: 'TRUE' | 'FALSE'
                loanTerm?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanAccountId: unknown
                loanCoin?: string
                loanAmount: unknown
                collateralAccountId: string
                collateralCoin: string
                isFlexibleRate: 'TRUE' | 'FALSE'
                loanTerm?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/loanable/data': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                loanCoin: string
                _flexibleDailyInterestRate: string
                _flexibleYearlyInterestRate: string
                _30dDailyInterestRate: string
                _30dYearlyInterestRate: string
                _60dDailyInterestRate: string
                _60dYearlyInterestRate: string
                minLimit: string
                maxLimit: string
                vipLevel: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/collateral/data': {
      $get:
        | {
            input: {
              query: {
                collateralCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                collateralCoin: string
                _1stCollateralRatio: string
                _1stCollateralRange: string
                _2ndCollateralRatio: string
                _2ndCollateralRange: string
                _3rdCollateralRatio: string
                _3rdCollateralRange: string
                _4thCollateralRatio: string
                _4thCollateralRange: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                collateralCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                collateralCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/request/data': {
      $get:
        | {
            input: {
              query: {
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                loanAccountId: string
                orderId: string
                requestId: string
                loanCoin: string
                loanAmount: string
                collateralAccountId: string
                collateralCoin: string
                loanTerm: number
                status: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/request/interestRate': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              flexibleDailyInterestRate: string
              flexibleYearlyInterestRate: string
              time: bigint
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/vip/renew': {
      $post:
        | {
            input: {
              query: {
                orderId?: unknown
                loanTerm?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanAccountId: string
              loanCoin: string
              loanAmount: string
              collateralAccountId: string
              collateralCoin: string
              loanTerm: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanTerm?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanTerm?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/income': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                type?:
                  | 'borrowIn'
                  | 'collateralSpent'
                  | 'repayAmount'
                  | 'collateralReturn'
                  | 'addCollateral'
                  | 'removeCollateral'
                  | 'collateralReturnAfterLiquidation'
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              asset: string
              type: string
              amount: string
              timestamp: bigint
              tranId: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                type?:
                  | 'borrowIn'
                  | 'collateralSpent'
                  | 'repayAmount'
                  | 'collateralReturn'
                  | 'addCollateral'
                  | 'removeCollateral'
                  | 'collateralReturnAfterLiquidation'
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                type?:
                  | 'borrowIn'
                  | 'collateralSpent'
                  | 'repayAmount'
                  | 'collateralReturn'
                  | 'addCollateral'
                  | 'removeCollateral'
                  | 'collateralReturnAfterLiquidation'
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/borrow': {
      $post:
        | {
            input: {
              query: {
                loanCoin: string
                loanAmount?: unknown
                collateralCoin: string
                collateralAmount?: unknown
                loanTerm: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanCoin: string
              loanAmount: string
              collateralCoin: string
              collateralAmount: string
              hourlyInterestRate: string
              orderId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin: string
                loanAmount?: unknown
                collateralCoin: string
                collateralAmount?: unknown
                loanTerm: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin: string
                loanAmount?: unknown
                collateralCoin: string
                collateralAmount?: unknown
                loanTerm: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/borrow/history': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                orderId: bigint
                loanCoin: string
                initialLoanAmount: string
                hourlyInterestRate: string
                loanTerm: string
                collateralCoin: string
                initialCollateralAmount: string
                borrowTime: bigint
                status: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/ongoing/orders': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                orderId: bigint
                loanCoin: string
                totalDebt: string
                residualInterest: string
                collateralCoin: string
                collateralAmount: string
                currentLTV: string
                expirationTime: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/repay': {
      $post:
        | {
            input: {
              query: {
                orderId: unknown
                amount: unknown
                type?: unknown
                collateralReturn?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: RepaymentInfo | RepaymentInfo2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId: unknown
                amount: unknown
                type?: unknown
                collateralReturn?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId: unknown
                amount: unknown
                type?: unknown
                collateralReturn?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/repay/history': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                repayAmount: string
                collateralCoin: string
                collateralUsed: string
                collateralReturn: string
                repayType: string
                repayStatus: string
                repayTime: bigint
                orderId: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/adjust/ltv': {
      $post:
        | {
            input: {
              query: {
                orderId: unknown
                amount: unknown
                direction: 'ADDITIONAL' | 'REDUCED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanCoin: string
              collateralCoin: string
              direction: string
              amount: string
              currentLTV: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId: unknown
                amount: unknown
                direction: 'ADDITIONAL' | 'REDUCED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId: unknown
                amount: unknown
                direction: 'ADDITIONAL' | 'REDUCED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/ltv/adjustment/history': {
      $get:
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                collateralCoin: string
                direction: string
                amount: string
                preLTV: string
                afterLTV: string
                adjustTime: bigint
                orderId: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/loanable/data': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                _7dHourlyInterestRate: string
                _7dDailyInterestRate: string
                _14dHourlyInterestRate: string
                _14dDailyInterestRate: string
                _30dHourlyInterestRate: string
                _30dDailyInterestRate: string
                _90dHourlyInterestRate: string
                _90dDailyInterestRate: string
                _180dHourlyInterestRate: string
                _180dDailyInterestRate: string
                minLimit: string
                maxLimit: string
                vipLevel: number
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/collateral/data': {
      $get:
        | {
            input: {
              query: {
                collateralCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                collateralCoin: string
                initialLTV: string
                marginCallLTV: string
                liquidationLTV: string
                maxLimit: string
                vipLevel: number
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                collateralCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                collateralCoin?: string
                vipLevel?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/repay/collateral/rate': {
      $get:
        | {
            input: {
              query: {
                loanCoin: string
                collateralCoin: string
                repayAmount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { loanCoin: string; collateralCoin: string; repayAmount: string; rate: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin: string
                collateralCoin: string
                repayAmount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin: string
                collateralCoin: string
                repayAmount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/loan/customize/margin_call': {
      $post:
        | {
            input: {
              query: {
                orderId?: unknown
                collateralCoin?: string
                marginCall: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                orderId: string
                collateralCoin: string
                preMarginCall: string
                afterMarginCall: string
                customizeTime: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: unknown
                collateralCoin?: string
                marginCall: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: unknown
                collateralCoin?: string
                marginCall: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/borrow': {
      $post:
        | {
            input: {
              query: {
                loanCoin?: string
                loanAmount?: unknown
                collateralCoin?: string
                collateralAmount?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanCoin: string
              loanAmount: string
              collateralCoin?: string | undefined
              collateralAmount: string
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                loanAmount?: unknown
                collateralCoin?: string
                collateralAmount?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                loanAmount?: unknown
                collateralCoin?: string
                collateralAmount?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/ongoing/orders': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                loanCoin: string
                totalDebt: string
                collateralCoin: string
                collateralAmount: string
                currentLTV: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/borrow/history': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              rows: {
                loanCoin: string
                initialLoanAmount: string
                collateralCoin: string
                initialCollateralAmount: string
                borrowTime: bigint
                status: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/repay': {
      $post:
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                repayAmount: unknown
                collateralReturn?: string
                fullRepayment?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanCoin: string
              collateralCoin: string
              remainingDebt: string
              remainingCollateral: string
              fullRepayment: boolean
              currentLTV: string
              repayStatus: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                repayAmount: unknown
                collateralReturn?: string
                fullRepayment?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                repayAmount: unknown
                collateralReturn?: string
                fullRepayment?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/repay/history': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                repayAmount: string
                collateralCoin: string
                collateralReturn: string
                repayStatus: string
                repayTime: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/adjust/ltv': {
      $post:
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                adjustmentAmount: unknown
                direction: 'ADDITIONAL' | 'REDUCED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              loanCoin: string
              collateralCoin: string
              direction: string
              adjustmentAmount: string
              currentLTV: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                adjustmentAmount: unknown
                direction: 'ADDITIONAL' | 'REDUCED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                adjustmentAmount: unknown
                direction: 'ADDITIONAL' | 'REDUCED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/ltv/adjustment/history': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                collateralCoin: string
                direction: string
                collateralAmount: string
                preLTV: string
                afterLTV: string
                adjustTime: bigint
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                collateralCoin?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/loanable/data': {
      $get:
        | {
            input: {
              query: {
                loanCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                loanCoin: string
                flexibleInterestRate: string
                flexibleMinLimit: string
                flexibleMaxLimit: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                loanCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                loanCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/loan/flexible/collateral/data': {
      $get:
        | {
            input: {
              query: {
                collateralCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                collateralCoin: string
                initialLTV: string
                marginCallLTV: string
                liquidationLTV: string
                maxLimit: string
              }[]
              total: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                collateralCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                collateralCoin?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/pay/transactions': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: {
                orderType: string
                transactionId: string
                transactionTime: bigint
                amount: string
                currency: string
                walletType: number
                walletTypes: number[]
                fundsDetail: { currency: string; amount: string }[]
                payerInfo: { name: string; type: string; binanceId: string; accountId: string }
                receiverInfo: {
                  name: string
                  type: string
                  email: string
                  binanceId: string
                  accountId: string
                  countryCode: string
                  phoneNumber: string
                  mobileCode: string
                  extend?:
                    | { institutionName: string; cardNumber: string; digitalWalletId: string }[]
                    | undefined
                }
              }[]
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/exchangeInfo': {
      $get:
        | {
            input: { query: { fromAsset?: string; toAsset?: string } }
            output: {
              fromAsset: string
              toAsset: string
              fromAssetMinAmount: string
              fromAssetMaxAmount: string
              toAssetMinAmount: string
              toAssetMaxAmount: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { fromAsset?: string; toAsset?: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { fromAsset?: string; toAsset?: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/assetInfo': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { asset: string; fraction: number }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/getQuote': {
      $post:
        | {
            input: {
              query: {
                fromAsset: string
                toAsset: string
                fromAmount?: unknown
                toAmount?: unknown
                validTime?: string
                walletType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              quoteId: string
              ratio: string
              inverseRatio: string
              validTimestamp: bigint
              toAmount: string
              fromAmount: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fromAsset: string
                toAsset: string
                fromAmount?: unknown
                toAmount?: unknown
                validTime?: string
                walletType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fromAsset: string
                toAsset: string
                fromAmount?: unknown
                toAmount?: unknown
                validTime?: string
                walletType?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/acceptQuote': {
      $post:
        | {
            input: {
              query: {
                quoteId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { orderId: string; createTime: bigint; orderStatus: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                quoteId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                quoteId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/orderStatus': {
      $get:
        | {
            input: {
              query: {
                orderId?: string
                quoteId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              orderId: bigint
              orderStatus: string
              fromAsset: string
              fromAmount: string
              toAsset: string
              toAmount: string
              ratio: string
              inverseRatio: string
              createTime: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId?: string
                quoteId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId?: string
                quoteId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/limit/placeOrder': {
      $post:
        | {
            input: {
              query: {
                baseAsset: string
                quoteAsset: string
                limitPrice: unknown
                baseAmount?: unknown
                quoteAmount?: unknown
                side: 'SELL' | 'BUY'
                walletType?: 'SPOT' | 'FUNDING' | 'SPOT_FUNDING'
                expiredType?: '1_D' | '3_D' | '7_D' | '30_D'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { orderId: bigint; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                baseAsset: string
                quoteAsset: string
                limitPrice: unknown
                baseAmount?: unknown
                quoteAmount?: unknown
                side: 'SELL' | 'BUY'
                walletType?: 'SPOT' | 'FUNDING' | 'SPOT_FUNDING'
                expiredType?: '1_D' | '3_D' | '7_D' | '30_D'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                baseAsset: string
                quoteAsset: string
                limitPrice: unknown
                baseAmount?: unknown
                quoteAmount?: unknown
                side: 'SELL' | 'BUY'
                walletType?: 'SPOT' | 'FUNDING' | 'SPOT_FUNDING'
                expiredType?: '1_D' | '3_D' | '7_D' | '30_D'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/limit/cancelOrder': {
      $post:
        | {
            input: {
              query: {
                orderId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { orderId: bigint; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/limit/queryOpenOrders': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              list: {
                quoteId: string
                orderId: bigint
                orderStatus: string
                fromAsset: string
                fromAmount: string
                toAsset: string
                toAmount: string
                ratio: string
                inverseRatio: string
                createTime: bigint
                expiredTimestamp: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/convert/tradeFlow': {
      $get:
        | {
            input: {
              query: {
                startTime: unknown
                endTime: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              list: {
                quoteId: string
                orderId: bigint
                orderStatus: string
                fromAsset: string
                fromAmount: string
                toAsset: string
                toAmount: string
                ratio: string
                inverseRatio: string
                createTime: bigint
              }[]
              startTime: bigint
              endTime: bigint
              limit: number
              moreData: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime: unknown
                endTime: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime: unknown
                endTime: unknown
                limit?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/rebate/taxQuery': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              status: string
              type: string
              code: string
              data: {
                page: number
                totalRecords: number
                totalPageNum: number
                data: { asset: string; type: number; amount: string; updateTime: bigint }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/nft/history/transactions': {
      $get:
        | {
            input: {
              query: {
                orderType: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              list: {
                orderNo: string
                tokens: { network: string; tokenId: string; contractAddress: string }[]
                tradeTime: bigint
                tradeAmount: string
                tradeCurrency: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                orderType: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                orderType: unknown
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/nft/history/deposit': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              list: {
                network: string
                txID: number | null
                contractAdrress: string
                tokenId: string
                timestamp: bigint
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/nft/history/withdraw': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              list: {
                network: string
                txID: string
                contractAdrress: string
                tokenId: string
                timestamp: bigint
                fee: number
                feeAsset: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/nft/user/getAsset': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: number
              list: { network: string; contractAddress: string; tokenId: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: unknown
                page?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/giftcard/createCode': {
      $post:
        | {
            input: {
              query: {
                token: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: { referenceNo: string; code: string; expiredTime: bigint }
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                token: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/giftcard/redeemCode': {
      $post:
        | {
            input: {
              query: {
                code: string
                externalUid?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: { token: string; amount: string; referenceNo: string; identityNo: string }
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                code: string
                externalUid?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                code: string
                externalUid?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/giftcard/verify': {
      $get:
        | {
            input: {
              query: {
                referenceNo: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: { valid: boolean; token: string; amount: string }
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                referenceNo: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                referenceNo: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/giftcard/cryptography/rsa-public-key': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { code: string; message: string; data: string; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/giftcard/buyCode': {
      $post:
        | {
            input: {
              query: {
                baseToken: string
                faceToken: string
                baseTokenAmount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: { referenceNo: string; code: string; expiredTime: bigint }
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                baseToken: string
                faceToken: string
                baseTokenAmount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                baseToken: string
                faceToken: string
                baseTokenAmount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/giftcard/buyCode/token-limit': {
      $get:
        | {
            input: {
              query: {
                baseToken: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              code: string
              message: string
              data: {
                coin?: string | undefined
                fromMin?: string | undefined
                fromMax?: string | undefined
              }
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                baseToken: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                baseToken: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/target-asset/list': {
      $get:
        | {
            input: {
              query: {
                targetAsset?: string
                size?: unknown
                current?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              targetAssets?: string | undefined
              autoInvestAssetList?:
                | {
                    targetAsset: string
                    roiAndDimensionTypeList: {
                      simulateRoi: string
                      dimensionValue: string
                      dimensionUnit: string
                    }[]
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                targetAsset?: string
                size?: unknown
                current?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                targetAsset?: string
                size?: unknown
                current?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/target-asset/roi/list': {
      $get:
        | {
            input: {
              query: {
                targetAsset: string
                hisRoiType: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { date: string; simulateRoi: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                targetAsset: string
                hisRoiType: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                targetAsset: string
                hisRoiType: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/all/asset': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { targetAssets: string[]; sourceAssets: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/source-asset/list': {
      $get:
        | {
            input: {
              query: {
                targetAsset?: string
                indexId?: unknown
                usageType: string
                flexibleAllowedToUse?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              feeRate: string
              sourceAssets: {
                sourceAsset: string
                assetMinAmount: string
                assetMaxAmount: string
                scale: string
                flexibleAmount: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                targetAsset?: string
                indexId?: unknown
                usageType: string
                flexibleAllowedToUse?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                targetAsset?: string
                indexId?: unknown
                usageType: string
                flexibleAllowedToUse?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/plan/add': {
      $post:
        | {
            input: {
              query: {
                sourceType: 'MAIN_SITE' | 'TR'
                requestId?: string
                planType: 'SINGLE' | 'PORTFOLIO' | 'INDEX'
                IndexId?: unknown
                subscriptionAmount: unknown
                subscriptionCycle:
                  | 'H1'
                  | 'H4'
                  | 'H8'
                  | 'H12'
                  | 'WEEKLY'
                  | 'DAILY'
                  | 'MONTHLY'
                  | 'BI_WEEKLY'
                subscriptionStartDay?: unknown
                subscriptionStartWeekday?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
                subscriptionStartTime: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                details: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { planId: number; nextExecutionDateTime: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceType: 'MAIN_SITE' | 'TR'
                requestId?: string
                planType: 'SINGLE' | 'PORTFOLIO' | 'INDEX'
                IndexId?: unknown
                subscriptionAmount: unknown
                subscriptionCycle:
                  | 'H1'
                  | 'H4'
                  | 'H8'
                  | 'H12'
                  | 'WEEKLY'
                  | 'DAILY'
                  | 'MONTHLY'
                  | 'BI_WEEKLY'
                subscriptionStartDay?: unknown
                subscriptionStartWeekday?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
                subscriptionStartTime: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                details: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceType: 'MAIN_SITE' | 'TR'
                requestId?: string
                planType: 'SINGLE' | 'PORTFOLIO' | 'INDEX'
                IndexId?: unknown
                subscriptionAmount: unknown
                subscriptionCycle:
                  | 'H1'
                  | 'H4'
                  | 'H8'
                  | 'H12'
                  | 'WEEKLY'
                  | 'DAILY'
                  | 'MONTHLY'
                  | 'BI_WEEKLY'
                subscriptionStartDay?: unknown
                subscriptionStartWeekday?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
                subscriptionStartTime: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                details: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/plan/edit': {
      $post:
        | {
            input: {
              query: {
                planId: unknown
                subscriptionAmount: unknown
                subscriptionCycle:
                  | 'H1'
                  | 'H4'
                  | 'H8'
                  | 'H12'
                  | 'WEEKLY'
                  | 'DAILY'
                  | 'MONTHLY'
                  | 'BI_WEEKLY'
                subscriptionStartDay?: unknown
                subscriptionStartWeekday?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
                subscriptionStartTime: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                details?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { planId: number; nextExecutionDateTime: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                planId: unknown
                subscriptionAmount: unknown
                subscriptionCycle:
                  | 'H1'
                  | 'H4'
                  | 'H8'
                  | 'H12'
                  | 'WEEKLY'
                  | 'DAILY'
                  | 'MONTHLY'
                  | 'BI_WEEKLY'
                subscriptionStartDay?: unknown
                subscriptionStartWeekday?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
                subscriptionStartTime: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                details?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                planId: unknown
                subscriptionAmount: unknown
                subscriptionCycle:
                  | 'H1'
                  | 'H4'
                  | 'H8'
                  | 'H12'
                  | 'WEEKLY'
                  | 'DAILY'
                  | 'MONTHLY'
                  | 'BI_WEEKLY'
                subscriptionStartDay?: unknown
                subscriptionStartWeekday?: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'
                subscriptionStartTime: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                details?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/plan/edit-status': {
      $post:
        | {
            input: {
              query: {
                planId: unknown
                status: 'ONGOING' | 'PAUSED' | 'REMOVED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { planId: number; nextExecutionDateTime: bigint; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                planId: unknown
                status: 'ONGOING' | 'PAUSED' | 'REMOVED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                planId: unknown
                status: 'ONGOING' | 'PAUSED' | 'REMOVED'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/plan/list': {
      $get:
        | {
            input: {
              query: {
                planType: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              planValueInUSD: string
              planValueInBTC: string
              pnlInUSD: string
              roi: string
              plan: {
                planId: number
                planType: string
                editAllowed: string
                creationDateTime: bigint
                firstExecutionDateTime: bigint
                nextExecutionDateTime: bigint
                status: string
                lastUpdatedDateTime: bigint
                targetAsset: string
                totalTargetAmount: string
                sourceAsset: string
                totalInvestedInUSD: string
                subscriptionAmount: string
                subscriptionCycle: string
                subscriptionStartDay: string
                subscriptionStartWeekday: string
                subscriptionStartTime: string
                sourceWallet: string
                flexibleAllowedToUse: string
                planValueInUSD: string
                pnlInUSD: string
                roi: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                planType: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                planType: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/plan/id': {
      $get:
        | {
            input: {
              query: {
                planId?: unknown
                requestId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              planValueInUSD?: string | undefined
              planValueInBTC?: string | undefined
              pnlInUSD?: string | undefined
              roi?: string | undefined
              plan?:
                | {
                    planId: number
                    planType: string
                    editAllowed: string
                    flexibleAllowedToUse: string
                    creationDateTime: bigint
                    firstExecutionDateTime: bigint
                    nextExecutionDateTime: bigint
                    status: string
                    targetAsset: string
                    sourceAsset: string
                    totalInvestedInUSD: string
                    planValueInUSD: string
                    pnlInUSD: string
                    roi: string
                    details: {
                      targetAsset: string
                      averagePriceInUSD: string
                      totalInvestedInUSD: string
                      purchasedAmount: string
                      purchasedAmountUnit: string
                      pnlInUSD: string
                      roi: string
                      percentage: string
                      assetStatus: string
                      availableAmount: string
                      availableAmountUnit: string
                      redeemedAmout: string
                      redeemedAmoutUnit: string
                      assetValueInUSD: string
                    }[]
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                planId?: unknown
                requestId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                planId?: unknown
                requestId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/history/list': {
      $get:
        | {
            input: {
              query: {
                planId?: unknown
                startTime?: unknown
                endTime?: unknown
                targetAsset?: unknown
                planType?: 'SINGLE' | 'PORTFOLIO' | 'INDEX' | 'ALL'
                size?: unknown
                current?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              id: bigint
              targetAsset: string
              planType: string
              planName: string
              planId: bigint
              transactionDateTime: bigint
              transactionStatus: string
              failedType: string
              sourceAsset: string
              sourceAssetAmount: string
              targetAssetAmount: string
              sourceWallet: string
              flexibleUsed: string
              transactionFee: string
              transactionFeeUnit: string
              executionPrice: string
              executionType: string
              subscriptionCycle: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                planId?: unknown
                startTime?: unknown
                endTime?: unknown
                targetAsset?: unknown
                planType?: 'SINGLE' | 'PORTFOLIO' | 'INDEX' | 'ALL'
                size?: unknown
                current?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                planId?: unknown
                startTime?: unknown
                endTime?: unknown
                targetAsset?: unknown
                planType?: 'SINGLE' | 'PORTFOLIO' | 'INDEX' | 'ALL'
                size?: unknown
                current?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/index/info': {
      $get:
        | {
            input: {
              query: {
                indexId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              indexId: bigint
              indexName: string
              status: string
              assetAllocation: { targetAsset: string; allocation: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                indexId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/index/user-summary': {
      $get:
        | {
            input: {
              query: {
                indexId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              indexId: bigint
              totalInvestedInUSD: string
              currentInvestedInUSD: string
              pnlInUSD: string
              roi: string
              assetAllocation: { targetAsset: string; allocation: string }[]
              details: {
                targetAsset: string
                averagePriceInUSD: string
                totalInvestedInUSD: string
                currentInvestedInUSD: string
                purchasedAmount: string
                pnlInUSD: string
                roi: string
                percentage: string
                availableAmount: string
                redeemedAmount: string
                assetValueInUSD: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                indexId: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/one-off': {
      $post:
        | {
            input: {
              query: {
                sourceType: string
                requestId?: string
                subscriptionAmount: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                planId?: unknown
                indexId?: unknown
                details?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { transactionId: bigint; waitSecond: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceType: string
                requestId?: string
                subscriptionAmount: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                planId?: unknown
                indexId?: unknown
                details?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceType: string
                requestId?: string
                subscriptionAmount: unknown
                sourceAsset: string
                flexibleAllowedToUse?: string
                planId?: unknown
                indexId?: unknown
                details?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/one-off/status': {
      $get:
        | {
            input: {
              query: {
                transactionId: unknown
                requestId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { transactionId: bigint; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                transactionId: unknown
                requestId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                transactionId: unknown
                requestId?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/redeem': {
      $post:
        | {
            input: {
              query: {
                indexId: unknown
                requestId?: string
                redemptionPercentage: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { redemptionId: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                indexId: unknown
                requestId?: string
                redemptionPercentage: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                indexId: unknown
                requestId?: string
                redemptionPercentage: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/redeem/history': {
      $get:
        | {
            input: {
              query: {
                requestId: unknown
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                asset?: string
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              indexId: bigint
              indexName: string
              redemptionId: bigint
              status: string
              asset: string
              amount: string
              redemptionDateTime: bigint
              transactionFee: string
              transactionFeeUnit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                requestId: unknown
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                asset?: string
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                requestId: unknown
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                asset?: string
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/lending/auto-invest/rebalance/history': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              indexId: bigint
              indexName: string
              rebalanceId: bigint
              status: string
              rebalanceFee: string
              rebalanceFeeUnit: string
              transactionDetails: {
                asset: string
                transactionDateTime: bigint
                rebalanceDirection: string
                rebalanceAmount: string
              }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/eth-staking/eth/stake': {
      $post:
        | {
            input: {
              query: {
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean; wbethAmount: string; conversionRatio: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/redeem': {
      $post:
        | {
            input: {
              query: {
                asset?: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              success: boolean
              arrivalTime: bigint
              ethAmount: string
              conversionRatio: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/history/stakingHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                time: bigint
                asset: string
                amount: string
                status: string
                distributeAmount: string
                conversionRatio: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/history/redemptionHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                time: bigint
                arrivalTime: bigint
                asset: string
                amount: string
                status: string
                distributeAsset: string
                distributeAmount: string
                conversionRatio: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/history/rewardsHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                time: bigint
                asset: string
                holding: string
                amount: string
                annualPercentageRate: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/quota': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { leftStakingPersonalQuota: string; leftRedemptionPersonalQuota: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/history/rateHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: { annualPercentageRate: string; exchangeRate: string; time: bigint }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v2/eth-staking/account': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              holdingInETH: string
              holdings: { wbethAmount: string; bethAmount: string }
              thirtyDaysProfitInETH: string
              profit: { amountFromWBETH: string; amountFromBETH: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/wbeth/wrap': {
      $post:
        | {
            input: {
              query: {
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean; wbethAmount: string; exchangeRate: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/wbeth/history/wrapHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                time: bigint
                fromAsset: string
                fromAmount: string
                toAsset: string
                toAmount: string
                exchangeRate: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/wbeth/history/unwrapHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                time: bigint
                fromAsset: string
                fromAmount: string
                toAsset: string
                toAmount: string
                exchangeRate: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/eth-staking/eth/history/wbethRewardsHistory': {
      $get:
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              estRewardsInETH: string
              rows: {
                time: bigint
                amountInETH: string
                holding: string
                holdingInETH: string
                annualPercentageRate: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/copyTrading/futures/userStatus': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              code: string
              message: string
              data: { isLeadTrader: boolean; time: bigint }
              success: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/copyTrading/futures/leadSymbol': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              code: string
              message: string
              data: { symbol: string; baseAsset: string; quoteAsset: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/list': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                asset: string
                latestAnnualPercentageRate: string
                tierAnnualPercentageRate: { '0-5BTC': number; '5-10BTC': number }
                airDropPercentageRate: string
                canPurchase: boolean
                canRedeem: boolean
                isSoldOut: boolean
                hot: boolean
                minPurchaseAmount: string
                productId: string
                subscriptionStartTime: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/list': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                projectId: string
                detail: {
                  asset: string
                  rewardAsset: string
                  duration: bigint
                  renewable: boolean
                  isSoldOut: boolean
                  apr: string
                  status: string
                  subscriptionStartTime: string
                  extraRewardAsset: string
                  extraRewardAPR: string
                }
                quota: { totalPersonalQuota: string; minimum: string }
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/subscribe': {
      $post:
        | {
            input: {
              query: {
                productId: string
                amount: unknown
                autoSubscribe?: string
                sourceAccount?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { purchaseId: bigint; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId: string
                amount: unknown
                autoSubscribe?: string
                sourceAccount?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId: string
                amount: unknown
                autoSubscribe?: string
                sourceAccount?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/subscribe': {
      $post:
        | {
            input: {
              query: {
                projectId: string
                amount: unknown
                autoSubscribe?: string
                sourceAccount?: string
                redeemTo?: 'SPOT' | 'FLEXIBLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { purchaseId: bigint; positionId: string; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId: string
                amount: unknown
                autoSubscribe?: string
                sourceAccount?: string
                redeemTo?: 'SPOT' | 'FLEXIBLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectId: string
                amount: unknown
                autoSubscribe?: string
                sourceAccount?: string
                redeemTo?: 'SPOT' | 'FLEXIBLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/redeem': {
      $post:
        | {
            input: {
              query: {
                productId: string
                redeemAll?: string
                amount?: unknown
                destAccount?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { redeemId: bigint; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId: string
                redeemAll?: string
                amount?: unknown
                destAccount?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId: string
                redeemAll?: string
                amount?: unknown
                destAccount?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/redeem': {
      $post:
        | {
            input: {
              query: {
                positionId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { redeemId: bigint; success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                positionId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                positionId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/position': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                productId?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                totalAmount: string
                tierAnnualPercentageRate: { '0-5BTC': number; '5-10BTC': number }
                latestAnnualPercentageRate: string
                yesterdayAirdropPercentageRate: string
                asset: string
                airDropAsset: string
                canRedeem: boolean
                collateralAmount: string
                productId: string
                yesterdayRealTimeRewards: string
                cumulativeBonusRewards: string
                cumulativeRealTimeRewards: string
                cumulativeTotalRewards: string
                autoSubscribe: boolean
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                productId?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                productId?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/position': {
      $get:
        | {
            input: {
              query: {
                asset?: string
                positionId?: string
                projectId?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                positionId: string
                parentPositionId: string
                projectId: string
                asset: string
                amount: string
                purchaseTime: string
                duration: string
                accrualDays: string
                rewardAsset: string
                APY: string
                rewardAmt: string
                extraRewardAsset: string
                extraRewardAPR: string
                estExtraRewardAmt: string
                nextPay: string
                nextPayDate: string
                payPeriod: string
                redeemAmountEarly: string
                rewardsEndDate: string
                deliverDate: string
                redeemPeriod: string
                redeemingAmt: string
                redeemTo: string
                partialAmtDeliverDate: string
                canRedeemEarly: boolean
                canFastRedemption: boolean
                autoSubscribe: boolean
                type: string
                status: string
                canReStake: boolean
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string
                positionId?: string
                projectId?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                asset?: string
                positionId?: string
                projectId?: string
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/account': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: {
              totalAmountInBTC: string
              totalAmountInUSDT: string
              totalFlexibleAmountInBTC: string
              totalFlexibleAmountInUSDT: string
              totalLockedInBTC: string
              totalLockedInUSDT: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/history/subscriptionRecord': {
      $get:
        | {
            input: {
              query: {
                productId?: string
                purchaseId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                amount: string
                asset: string
                time: bigint
                purchaseId: bigint
                productId: string
                type: string
                sourceAccount: string
                amtFromSpot: string
                amtFromFunding: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId?: string
                purchaseId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId?: string
                purchaseId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/history/subscriptionRecord': {
      $get:
        | {
            input: {
              query: {
                purchaseId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                positionId: string
                purchaseId: bigint
                projectId: string
                time: bigint
                asset: string
                amount: string
                lockPeriod: string
                type: string
                sourceAccount: string
                amtFromSpot: string
                amtFromFunding: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                purchaseId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                purchaseId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/history/redemptionRecord': {
      $get:
        | {
            input: {
              query: {
                productId?: string
                redeemId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
              }
            }
            output: {
              rows: {
                amount: string
                asset: string
                time: bigint
                projectId: string
                redeemId: bigint
                destAccount: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId?: string
                redeemId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId?: string
                redeemId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/history/redemptionRecord': {
      $get:
        | {
            input: {
              query: {
                positionId?: string
                redeemId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                positionId: string
                redeemId: bigint
                time: bigint
                asset: string
                lockPeriod: string
                amount: string
                originalAmount: string
                type: string
                deliverDate: string
                lossAmount: string
                isComplete: boolean
                rewardAsset: string
                rewardAmt: string
                extraRewardAsset: string
                estExtraRewardAmt: string
                status: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                positionId?: string
                redeemId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                positionId?: string
                redeemId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/history/rewardsRecord': {
      $get:
        | {
            input: {
              query: {
                productId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                type: string
              }
            }
            output: {
              rows: {
                asset: string
                rewards: string
                projectId: string
                type: string
                time: bigint
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                type: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                type: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/history/rewardsRecord': {
      $get:
        | {
            input: {
              query: {
                positionId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                positionId: string
                time: bigint
                asset: string
                lockPeriod: string
                amount: string
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                positionId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                positionId?: string
                asset?: string
                startTime?: unknown
                endTime?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/setAutoSubscribe': {
      $post:
        | {
            input: {
              query: {
                productId: string
                autoSubscribe: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId: string
                autoSubscribe: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId: string
                autoSubscribe: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/setAutoSubscribe': {
      $post:
        | {
            input: {
              query: {
                positionId: string
                autoSubscribe: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                positionId: string
                autoSubscribe: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                positionId: string
                autoSubscribe: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/personalLeftQuota': {
      $get:
        | {
            input: {
              query: {
                productId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { leftPersonalQuota: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/personalLeftQuota': {
      $get:
        | {
            input: {
              query: {
                projectId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { leftPersonalQuota: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectId: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/subscriptionPreview': {
      $get:
        | {
            input: {
              query: {
                productId: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              totalAmount: string
              rewardAsset: string
              airDropAsset: string
              estDailyBonusRewards: string
              estDailyRealTimeRewards: string
              estDailyAirdropRewards: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId: string
                amount: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/subscriptionPreview': {
      $get:
        | {
            input: {
              query: {
                projectId: string
                amount: unknown
                autoSubscribe?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rewardAsset: string
              totalRewardAmt: string
              extraRewardAsset: string
              estTotalExtraRewardAmt: string
              nextPay: string
              nextPayDate: string
              valueDate: string
              rewardsEndDate: string
              deliverDate: string
              nextSubscriptionDate: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectId: string
                amount: unknown
                autoSubscribe?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectId: string
                amount: unknown
                autoSubscribe?: string
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/locked/setRedeemOption': {
      $get:
        | {
            input: {
              query: {
                positionId: string
                redeemTo?: 'SPOT' | 'FLEXIBLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                positionId: string
                redeemTo?: 'SPOT' | 'FLEXIBLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                positionId: string
                redeemTo?: 'SPOT' | 'FLEXIBLE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/history/rateHistory': {
      $get:
        | {
            input: {
              query: {
                productId: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                productId: string
                asset: string
                annualPercentageRate: string
                time: bigint
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/simple-earn/flexible/history/collateralRecord': {
      $get:
        | {
            input: {
              query: {
                productId?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              rows: {
                amount: string
                productId: string
                asset: string
                createTime: bigint
                type: string
                productName: string
                orderId: bigint
              }[]
              total: bigint
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                productId?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                productId?: string
                startTime?: unknown
                endTime?: unknown
                current?: unknown
                size?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/dci/product/list': {
      $get:
        | {
            input: {
              query: {
                optionType: 'CALL' | 'PUT'
                exercisedCoin: string
                investCoin: string
                pageSize?: string
                pageIndex?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: bigint
              list: {
                id: string
                investCoin: string
                exercisedCoin: string
                strikePrice: string
                duration: number
                settleDate: bigint
                purchaseDecimal: number
                purchaseEndTime: bigint
                canPurchase: boolean
                apr: string
                orderId: bigint
                minAmount: string
                maxAmount: string
                createTimestamp: bigint
                optionType: string
                isAutoCompoundEnable: boolean
                autoCompoundPlanList: string[]
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                optionType: 'CALL' | 'PUT'
                exercisedCoin: string
                investCoin: string
                pageSize?: string
                pageIndex?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                optionType: 'CALL' | 'PUT'
                exercisedCoin: string
                investCoin: string
                pageSize?: string
                pageIndex?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/dci/product/subscribe': {
      $post:
        | {
            input: {
              query: {
                id: string
                orderId: string
                depositAmount: unknown
                autoCompoundPlan: 'NONE' | 'STANDARD' | 'ADVANCE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              positionId: bigint
              investCoin: string
              exercisedCoin: string
              subscriptionAmount: string
              duration: number
              autoCompoundPlan: string
              strikePrice: string
              settleDate: bigint
              purchaseStatus: string
              apr: string
              orderId: bigint
              purchaseTime: bigint
              'optionType"'?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id: string
                orderId: string
                depositAmount: unknown
                autoCompoundPlan: 'NONE' | 'STANDARD' | 'ADVANCE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id: string
                orderId: string
                depositAmount: unknown
                autoCompoundPlan: 'NONE' | 'STANDARD' | 'ADVANCE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/dci/product/positions': {
      $get:
        | {
            input: {
              query: {
                status?:
                  | 'PENDING'
                  | 'PURCHASE_SUCCESS'
                  | 'SETTLED'
                  | 'PURCHASE_FAIL'
                  | 'REFUNDING'
                  | 'REFUND_SUCCESS'
                  | 'SETTLING'
                pageSize?: string
                pageIndex?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: {
              total: bigint
              list: {
                id: string
                investCoin: string
                exercisedCoin: string
                subscriptionAmount: string
                strikePrice: string
                duration: number
                settleDate: bigint
                purchaseStatus: string
                apr: string
                orderId: bigint
                purchaseEndTime: bigint
                optionType: string
                autoCompoundPlan: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?:
                  | 'PENDING'
                  | 'PURCHASE_SUCCESS'
                  | 'SETTLED'
                  | 'PURCHASE_FAIL'
                  | 'REFUNDING'
                  | 'REFUND_SUCCESS'
                  | 'SETTLING'
                pageSize?: string
                pageIndex?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?:
                  | 'PENDING'
                  | 'PURCHASE_SUCCESS'
                  | 'SETTLED'
                  | 'PURCHASE_FAIL'
                  | 'REFUNDING'
                  | 'REFUND_SUCCESS'
                  | 'SETTLING'
                pageSize?: string
                pageIndex?: unknown
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/dci/product/accounts': {
      $get:
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: { totalAmountInBTC: string; totalAmountInUSDT: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { recvWindow?: unknown; timestamp: unknown; signature: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/sapi/v1/dci/product/auto_compound/edit-status': {
      $post:
        | {
            input: {
              query: {
                positionId: unknown
                autoCompoundPlan: 'NONE' | 'STANDARD' | 'ADVANCE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: { positionId: string; autoCompoundPlan: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                positionId: unknown
                autoCompoundPlan: 'NONE' | 'STANDARD' | 'ADVANCE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                positionId: unknown
                autoCompoundPlan: 'NONE' | 'STANDARD' | 'ADVANCE'
                recvWindow?: unknown
                timestamp: unknown
                signature: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
