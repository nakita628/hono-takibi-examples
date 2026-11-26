import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV3Ping(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.ping.$get(undefined, options))
}

export async function getApiV3Time(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.time.$get(undefined, options))
}

export async function getApiV3ExchangeInfo(
  args: InferRequestType<typeof client.api.v3.exchangeInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.exchangeInfo.$get(args, options))
}

export async function getApiV3Depth(
  args: InferRequestType<typeof client.api.v3.depth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.depth.$get(args, options))
}

export async function getApiV3Trades(
  args: InferRequestType<typeof client.api.v3.trades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.trades.$get(args, options))
}

export async function getApiV3HistoricalTrades(
  args: InferRequestType<typeof client.api.v3.historicalTrades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.historicalTrades.$get(args, options))
}

export async function getApiV3AggTrades(
  args: InferRequestType<typeof client.api.v3.aggTrades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.aggTrades.$get(args, options))
}

export async function getApiV3Klines(
  args: InferRequestType<typeof client.api.v3.klines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.klines.$get(args, options))
}

export async function getApiV3UiKlines(
  args: InferRequestType<typeof client.api.v3.uiKlines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.uiKlines.$get(args, options))
}

export async function getApiV3AvgPrice(
  args: InferRequestType<typeof client.api.v3.avgPrice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.avgPrice.$get(args, options))
}

export async function getApiV3Ticker24hr(
  args: InferRequestType<(typeof client.api.v3.ticker)['24hr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.ticker['24hr'].$get(args, options))
}

export async function getApiV3TickerTradingDay(
  args: InferRequestType<typeof client.api.v3.ticker.tradingDay.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.ticker.tradingDay.$get(args, options))
}

export async function getApiV3TickerPrice(
  args: InferRequestType<typeof client.api.v3.ticker.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.ticker.price.$get(args, options))
}

export async function getApiV3TickerBookTicker(
  args: InferRequestType<typeof client.api.v3.ticker.bookTicker.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.ticker.bookTicker.$get(args, options))
}

export async function getApiV3Ticker(
  args: InferRequestType<typeof client.api.v3.ticker.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.ticker.$get(args, options))
}

export async function postApiV3OrderTest(
  args: InferRequestType<typeof client.api.v3.order.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.order.test.$post(args, options))
}

export async function getApiV3Order(
  args: InferRequestType<typeof client.api.v3.order.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.order.$get(args, options))
}

export async function postApiV3Order(
  args: InferRequestType<typeof client.api.v3.order.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.order.$post(args, options))
}

export async function deleteApiV3Order(
  args: InferRequestType<typeof client.api.v3.order.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.order.$delete(args, options))
}

export async function postApiV3OrderCancelReplace(
  args: InferRequestType<typeof client.api.v3.order.cancelReplace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.order.cancelReplace.$post(args, options))
}

export async function getApiV3OpenOrders(
  args: InferRequestType<typeof client.api.v3.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.openOrders.$get(args, options))
}

export async function deleteApiV3OpenOrders(
  args: InferRequestType<typeof client.api.v3.openOrders.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.openOrders.$delete(args, options))
}

export async function getApiV3AllOrders(
  args: InferRequestType<typeof client.api.v3.allOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.allOrders.$get(args, options))
}

export async function postApiV3OrderListOco(
  args: InferRequestType<typeof client.api.v3.orderList.oco.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.orderList.oco.$post(args, options))
}

export async function postApiV3OrderListOto(
  args: InferRequestType<typeof client.api.v3.orderList.oto.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.orderList.oto.$post(args, options))
}

export async function postApiV3OrderListOtoco(
  args: InferRequestType<typeof client.api.v3.orderList.otoco.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.orderList.otoco.$post(args, options))
}

export async function getApiV3OrderList(
  args: InferRequestType<typeof client.api.v3.orderList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.orderList.$get(args, options))
}

export async function deleteApiV3OrderList(
  args: InferRequestType<typeof client.api.v3.orderList.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.orderList.$delete(args, options))
}

export async function getApiV3AllOrderList(
  args: InferRequestType<typeof client.api.v3.allOrderList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.allOrderList.$get(args, options))
}

export async function getApiV3OpenOrderList(
  args: InferRequestType<typeof client.api.v3.openOrderList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.openOrderList.$get(args, options))
}

export async function postApiV3SorOrder(
  args: InferRequestType<typeof client.api.v3.sor.order.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.sor.order.$post(args, options))
}

export async function postApiV3SorOrderTest(
  args: InferRequestType<typeof client.api.v3.sor.order.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.sor.order.test.$post(args, options))
}

export async function getApiV3Account(
  args: InferRequestType<typeof client.api.v3.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.account.$get(args, options))
}

export async function getApiV3MyTrades(
  args: InferRequestType<typeof client.api.v3.myTrades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.myTrades.$get(args, options))
}

export async function getApiV3RateLimitOrder(
  args: InferRequestType<typeof client.api.v3.rateLimit.order.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.rateLimit.order.$get(args, options))
}

export async function getApiV3MyPreventedMatches(
  args: InferRequestType<typeof client.api.v3.myPreventedMatches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.myPreventedMatches.$get(args, options))
}

export async function getApiV3MyAllocations(
  args: InferRequestType<typeof client.api.v3.myAllocations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.myAllocations.$get(args, options))
}

export async function getApiV3AccountCommission(
  args: InferRequestType<typeof client.api.v3.account.commission.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.account.commission.$get(args, options))
}

export async function getSapiV1MarginBorrowRepay(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['borrow-repay'].$get(args, options))
}

export async function postSapiV1MarginBorrowRepay(
  args: InferRequestType<(typeof client.sapi.v1.margin)['borrow-repay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['borrow-repay'].$post(args, options))
}

export async function getSapiV1MarginTransfer(
  args: InferRequestType<typeof client.sapi.v1.margin.transfer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.transfer.$get(args, options))
}

export async function getSapiV1MarginAllAssets(
  args: InferRequestType<typeof client.sapi.v1.margin.allAssets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.allAssets.$get(args, options))
}

export async function getSapiV1MarginAllPairs(
  args: InferRequestType<typeof client.sapi.v1.margin.allPairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.allPairs.$get(args, options))
}

export async function getSapiV1MarginPriceIndex(
  args: InferRequestType<typeof client.sapi.v1.margin.priceIndex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.priceIndex.$get(args, options))
}

export async function getSapiV1MarginOrder(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.order.$get(args, options))
}

export async function postSapiV1MarginOrder(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.order.$post(args, options))
}

export async function deleteSapiV1MarginOrder(
  args: InferRequestType<typeof client.sapi.v1.margin.order.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.order.$delete(args, options))
}

export async function getSapiV1MarginInterestHistory(
  args: InferRequestType<typeof client.sapi.v1.margin.interestHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.interestHistory.$get(args, options))
}

export async function getSapiV1MarginForceLiquidationRec(
  args: InferRequestType<typeof client.sapi.v1.margin.forceLiquidationRec.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.forceLiquidationRec.$get(args, options))
}

export async function getSapiV1MarginAccount(
  args: InferRequestType<typeof client.sapi.v1.margin.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.account.$get(args, options))
}

export async function getSapiV1MarginOpenOrders(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.openOrders.$get(args, options))
}

export async function deleteSapiV1MarginOpenOrders(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrders.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.openOrders.$delete(args, options))
}

export async function getSapiV1MarginAllOrders(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.allOrders.$get(args, options))
}

export async function postSapiV1MarginOrderOco(
  args: InferRequestType<typeof client.sapi.v1.margin.order.oco.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.order.oco.$post(args, options))
}

export async function getSapiV1MarginOrderList(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.orderList.$get(args, options))
}

export async function deleteSapiV1MarginOrderList(
  args: InferRequestType<typeof client.sapi.v1.margin.orderList.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.orderList.$delete(args, options))
}

export async function getSapiV1MarginAllOrderList(
  args: InferRequestType<typeof client.sapi.v1.margin.allOrderList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.allOrderList.$get(args, options))
}

export async function getSapiV1MarginOpenOrderList(
  args: InferRequestType<typeof client.sapi.v1.margin.openOrderList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.openOrderList.$get(args, options))
}

export async function getSapiV1MarginMyTrades(
  args: InferRequestType<typeof client.sapi.v1.margin.myTrades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.myTrades.$get(args, options))
}

export async function getSapiV1MarginMaxBorrowable(
  args: InferRequestType<typeof client.sapi.v1.margin.maxBorrowable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.maxBorrowable.$get(args, options))
}

export async function getSapiV1MarginMaxTransferable(
  args: InferRequestType<typeof client.sapi.v1.margin.maxTransferable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.maxTransferable.$get(args, options))
}

export async function getSapiV1MarginTradeCoeff(
  args: InferRequestType<typeof client.sapi.v1.margin.tradeCoeff.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.tradeCoeff.$get(args, options))
}

export async function getSapiV1MarginIsolatedAccount(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolated.account.$get(args, options))
}

export async function postSapiV1MarginIsolatedAccount(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolated.account.$post(args, options))
}

export async function deleteSapiV1MarginIsolatedAccount(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.account.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolated.account.$delete(args, options))
}

export async function getSapiV1MarginIsolatedAccountLimit(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.accountLimit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolated.accountLimit.$get(args, options))
}

export async function getSapiV1MarginIsolatedAllPairs(
  args: InferRequestType<typeof client.sapi.v1.margin.isolated.allPairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolated.allPairs.$get(args, options))
}

export async function getSapiV1BnbBurn(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.bnbBurn.$get(args, options))
}

export async function postSapiV1BnbBurn(
  args: InferRequestType<typeof client.sapi.v1.bnbBurn.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.bnbBurn.$post(args, options))
}

export async function getSapiV1MarginInterestRateHistory(
  args: InferRequestType<typeof client.sapi.v1.margin.interestRateHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.interestRateHistory.$get(args, options))
}

export async function getSapiV1MarginCrossMarginData(
  args: InferRequestType<typeof client.sapi.v1.margin.crossMarginData.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.crossMarginData.$get(args, options))
}

export async function getSapiV1MarginIsolatedMarginData(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginData.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolatedMarginData.$get(args, options))
}

export async function getSapiV1MarginIsolatedMarginTier(
  args: InferRequestType<typeof client.sapi.v1.margin.isolatedMarginTier.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.isolatedMarginTier.$get(args, options))
}

export async function getSapiV1MarginRateLimitOrder(
  args: InferRequestType<typeof client.sapi.v1.margin.rateLimit.order.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.rateLimit.order.$get(args, options))
}

export async function getSapiV1MarginCrossMarginCollateralRatio(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sapi.v1.margin.crossMarginCollateralRatio.$get(undefined, options),
  )
}

export async function getSapiV1MarginExchangeSmallLiability(
  args: InferRequestType<(typeof client.sapi.v1.margin)['exchange-small-liability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['exchange-small-liability'].$get(args, options))
}

export async function getSapiV1MarginExchangeSmallLiabilityHistory(
  args: InferRequestType<
    (typeof client.sapi.v1.margin)['exchange-small-liability-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.margin['exchange-small-liability-history'].$get(args, options),
  )
}

export async function getSapiV1MarginNextHourlyInterestRate(
  args: InferRequestType<(typeof client.sapi.v1.margin)['next-hourly-interest-rate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['next-hourly-interest-rate'].$get(args, options))
}

export async function getSapiV1MarginCapitalFlow(
  args: InferRequestType<(typeof client.sapi.v1.margin)['capital-flow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['capital-flow'].$get(args, options))
}

export async function getSapiV1MarginDelistSchedule(
  args: InferRequestType<(typeof client.sapi.v1.margin)['delist-schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['delist-schedule'].$get(args, options))
}

export async function getSapiV1MarginAvailableInventory(
  args: InferRequestType<(typeof client.sapi.v1.margin)['available-inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['available-inventory'].$get(args, options))
}

export async function postSapiV1MarginManualLiquidation(
  args: InferRequestType<(typeof client.sapi.v1.margin)['manual-liquidation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['manual-liquidation'].$post(args, options))
}

export async function postSapiV1MarginOrderOto(
  args: InferRequestType<typeof client.sapi.v1.margin.order.oto.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.order.oto.$post(args, options))
}

export async function postSapiV1MarginOrderOtoco(
  args: InferRequestType<typeof client.sapi.v1.margin.order.otoco.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin.order.otoco.$post(args, options))
}

export async function postSapiV1MarginMaxLeverage(
  args: InferRequestType<(typeof client.sapi.v1.margin)['max-leverage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.margin['max-leverage'].$post(args, options))
}

export async function getSapiV1MarginLeverageBracket(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.margin.leverageBracket.$get(undefined, options))
}

export async function getSapiV1SystemStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.system.status.$get(undefined, options))
}

export async function getSapiV1CapitalConfigGetall(
  args: InferRequestType<typeof client.sapi.v1.capital.config.getall.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.config.getall.$get(args, options))
}

export async function getSapiV1AccountSnapshot(
  args: InferRequestType<typeof client.sapi.v1.accountSnapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.accountSnapshot.$get(args, options))
}

export async function postSapiV1AccountDisableFastWithdrawSwitch(
  args: InferRequestType<typeof client.sapi.v1.account.disableFastWithdrawSwitch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.account.disableFastWithdrawSwitch.$post(args, options))
}

export async function postSapiV1AccountEnableFastWithdrawSwitch(
  args: InferRequestType<typeof client.sapi.v1.account.enableFastWithdrawSwitch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.account.enableFastWithdrawSwitch.$post(args, options))
}

export async function postSapiV1CapitalWithdrawApply(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.apply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.withdraw.apply.$post(args, options))
}

export async function getSapiV1CapitalDepositHisrec(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.hisrec.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.deposit.hisrec.$get(args, options))
}

export async function getSapiV1CapitalWithdrawHistory(
  args: InferRequestType<typeof client.sapi.v1.capital.withdraw.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.withdraw.history.$get(args, options))
}

export async function getSapiV1CapitalDepositAddress(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.deposit.address.$get(args, options))
}

export async function getSapiV1AccountStatus(
  args: InferRequestType<typeof client.sapi.v1.account.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.account.status.$get(args, options))
}

export async function getSapiV1AccountApiTradingStatus(
  args: InferRequestType<typeof client.sapi.v1.account.apiTradingStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.account.apiTradingStatus.$get(args, options))
}

export async function getSapiV1AssetDribblet(
  args: InferRequestType<typeof client.sapi.v1.asset.dribblet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.dribblet.$get(args, options))
}

export async function postSapiV1AssetDustBtc(
  args: InferRequestType<(typeof client.sapi.v1.asset)['dust-btc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset['dust-btc'].$post(args, options))
}

export async function postSapiV1AssetDust(
  args: InferRequestType<typeof client.sapi.v1.asset.dust.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.dust.$post(args, options))
}

export async function getSapiV1AssetAssetDividend(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDividend.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.assetDividend.$get(args, options))
}

export async function getSapiV1AssetAssetDetail(
  args: InferRequestType<typeof client.sapi.v1.asset.assetDetail.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.assetDetail.$get(args, options))
}

export async function getSapiV1AssetTradeFee(
  args: InferRequestType<typeof client.sapi.v1.asset.tradeFee.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.tradeFee.$get(args, options))
}

export async function getSapiV1AssetTransfer(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.transfer.$get(args, options))
}

export async function postSapiV1AssetTransfer(
  args: InferRequestType<typeof client.sapi.v1.asset.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.transfer.$post(args, options))
}

export async function postSapiV1AssetGetFundingAsset(
  args: InferRequestType<(typeof client.sapi.v1.asset)['get-funding-asset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset['get-funding-asset'].$post(args, options))
}

export async function postSapiV3AssetGetUserAsset(
  args: InferRequestType<typeof client.sapi.v3.asset.getUserAsset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v3.asset.getUserAsset.$post(args, options))
}

export async function postSapiV1AssetConvertTransfer(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset['convert-transfer'].$post(args, options))
}

export async function getSapiV1AssetConvertTransferQueryByPage(
  args: InferRequestType<(typeof client.sapi.v1.asset)['convert-transfer']['queryByPage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.asset['convert-transfer'].queryByPage.$get(args, options),
  )
}

export async function getSapiV1AssetLedgerTransferCloudMiningQueryByPage(
  args: InferRequestType<
    (typeof client.sapi.v1.asset)['ledger-transfer']['cloud-mining']['queryByPage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.asset['ledger-transfer']['cloud-mining'].queryByPage.$get(args, options),
  )
}

export async function getSapiV1AccountApiRestrictions(
  args: InferRequestType<typeof client.sapi.v1.account.apiRestrictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.account.apiRestrictions.$get(args, options))
}

export async function getSapiV1CapitalContractConvertibleCoins(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sapi.v1.capital.contract['convertible-coins'].$get(undefined, options),
  )
}

export async function postSapiV1CapitalContractConvertibleCoins(
  args: InferRequestType<(typeof client.sapi.v1.capital.contract)['convertible-coins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.capital.contract['convertible-coins'].$post(args, options),
  )
}

export async function postSapiV1SubAccountVirtualSubAccount(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['virtualSubAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].virtualSubAccount.$post(args, options))
}

export async function getSapiV1SubAccountList(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].list.$get(args, options))
}

export async function getSapiV1SubAccountSubTransferHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['sub']['transfer']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].sub.transfer.history.$get(args, options))
}

export async function getSapiV1SubAccountFuturesInternalTransfer(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].futures.internalTransfer.$get(args, options),
  )
}

export async function postSapiV1SubAccountFuturesInternalTransfer(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['internalTransfer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].futures.internalTransfer.$post(args, options),
  )
}

export async function getSapiV3SubAccountAssets(
  args: InferRequestType<(typeof client.sapi.v3)['sub-account']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v3['sub-account'].assets.$get(args, options))
}

export async function getSapiV1SubAccountSpotSummary(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['spotSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].spotSummary.$get(args, options))
}

export async function getSapiV1CapitalDepositSubAddress(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subAddress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.deposit.subAddress.$get(args, options))
}

export async function getSapiV1CapitalDepositSubHisrec(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.subHisrec.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.deposit.subHisrec.$get(args, options))
}

export async function postSapiV1CapitalDepositCreditApply(
  args: InferRequestType<(typeof client.sapi.v1.capital.deposit)['credit-apply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.deposit['credit-apply'].$post(args, options))
}

export async function getSapiV1AssetWalletBalance(
  args: InferRequestType<typeof client.sapi.v1.asset.wallet.balance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.wallet.balance.$get(args, options))
}

export async function getSapiV1AssetCustodyTransferHistory(
  args: InferRequestType<(typeof client.sapi.v1.asset.custody)['transfer-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.asset.custody['transfer-history'].$get(args, options))
}

export async function getSapiV1CapitalDepositAddressList(
  args: InferRequestType<typeof client.sapi.v1.capital.deposit.address.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.capital.deposit.address.list.$get(args, options))
}

export async function getSapiV1SpotDelistSchedule(
  args: InferRequestType<(typeof client.sapi.v1.spot)['delist-schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.spot['delist-schedule'].$get(args, options))
}

export async function getSapiV1CapitalWithdrawAddressList(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.capital.withdraw.address.list.$get(undefined, options))
}

export async function getSapiV1AccountInfo(
  args: InferRequestType<typeof client.sapi.v1.account.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.account.info.$get(args, options))
}

export async function getSapiV1SubAccountStatus(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].status.$get(args, options))
}

export async function postSapiV1SubAccountMarginEnable(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].margin.enable.$post(args, options))
}

export async function getSapiV1SubAccountMarginAccount(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].margin.account.$get(args, options))
}

export async function getSapiV1SubAccountMarginAccountSummary(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['margin']['accountSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].margin.accountSummary.$get(args, options),
  )
}

export async function postSapiV1SubAccountFuturesEnable(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].futures.enable.$post(args, options))
}

export async function getSapiV1SubAccountFuturesAccount(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].futures.account.$get(args, options))
}

export async function getSapiV1SubAccountFuturesAccountSummary(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].futures.accountSummary.$get(args, options),
  )
}

export async function getSapiV1SubAccountFuturesPositionRisk(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['positionRisk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].futures.positionRisk.$get(args, options))
}

export async function postSapiV1SubAccountFuturesTransfer(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['futures']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].futures.transfer.$post(args, options))
}

export async function postSapiV1SubAccountMarginTransfer(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['margin']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].margin.transfer.$post(args, options))
}

export async function postSapiV1SubAccountTransferSubToSub(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transfer']['subToSub']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].transfer.subToSub.$post(args, options))
}

export async function postSapiV1SubAccountTransferSubToMaster(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subToMaster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].transfer.subToMaster.$post(args, options),
  )
}

export async function getSapiV1SubAccountTransferSubUserHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['transfer']['subUserHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].transfer.subUserHistory.$get(args, options),
  )
}

export async function getSapiV1SubAccountUniversalTransfer(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].universalTransfer.$get(args, options))
}

export async function postSapiV1SubAccountUniversalTransfer(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['universalTransfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].universalTransfer.$post(args, options))
}

export async function getSapiV2SubAccountFuturesAccount(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2['sub-account'].futures.account.$get(args, options))
}

export async function getSapiV2SubAccountFuturesAccountSummary(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['futures']['accountSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v2['sub-account'].futures.accountSummary.$get(args, options),
  )
}

export async function getSapiV2SubAccountFuturesPositionRisk(
  args: InferRequestType<(typeof client.sapi.v2)['sub-account']['futures']['positionRisk']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2['sub-account'].futures.positionRisk.$get(args, options))
}

export async function postSapiV1SubAccountBlvtEnable(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['blvt']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].blvt.enable.$post(args, options))
}

export async function postSapiV1ManagedSubaccountDeposit(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['deposit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['managed-subaccount'].deposit.$post(args, options))
}

export async function getSapiV1ManagedSubaccountAsset(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['managed-subaccount'].asset.$get(args, options))
}

export async function postSapiV1ManagedSubaccountWithdraw(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['managed-subaccount'].withdraw.$post(args, options))
}

export async function getSapiV1ManagedSubaccountAccountSnapshot(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['accountSnapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['managed-subaccount'].accountSnapshot.$get(args, options),
  )
}

export async function getSapiV1ManagedSubaccountQueryTransLogForInvestor(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForInvestor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['managed-subaccount'].queryTransLogForInvestor.$get(args, options),
  )
}

export async function getSapiV1ManagedSubaccountQueryTransLogForTradeParent(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['queryTransLogForTradeParent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['managed-subaccount'].queryTransLogForTradeParent.$get(args, options),
  )
}

export async function getSapiV1ManagedSubaccountFetchFutureAsset(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['fetch-future-asset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['managed-subaccount']['fetch-future-asset'].$get(args, options),
  )
}

export async function getSapiV1ManagedSubaccountMarginAsset(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['marginAsset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['managed-subaccount'].marginAsset.$get(args, options))
}

export async function getSapiV1ManagedSubaccountInfo(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['managed-subaccount'].info.$get(args, options))
}

export async function getSapiV1ManagedSubaccountDepositAddress(
  args: InferRequestType<
    (typeof client.sapi.v1)['managed-subaccount']['deposit']['address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['managed-subaccount'].deposit.address.$get(args, options),
  )
}

export async function getSapiV1ManagedSubaccountQueryTransLog(
  args: InferRequestType<(typeof client.sapi.v1)['managed-subaccount']['query-trans-log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['managed-subaccount']['query-trans-log'].$get(args, options),
  )
}

export async function getSapiV1SubAccountSubAccountApiIpRestriction(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].subAccountApi.ipRestriction.$get(args, options),
  )
}

export async function deleteSapiV1SubAccountSubAccountApiIpRestrictionIpList(
  args: InferRequestType<
    (typeof client.sapi.v1)['sub-account']['subAccountApi']['ipRestriction']['ipList']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account'].subAccountApi.ipRestriction.ipList.$delete(args, options),
  )
}

export async function getSapiV1SubAccountTransactionStatistics(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['transaction-statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['sub-account']['transaction-statistics'].$get(args, options),
  )
}

export async function postSapiV1SubAccountEoptionsEnable(
  args: InferRequestType<(typeof client.sapi.v1)['sub-account']['eoptions']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['sub-account'].eoptions.enable.$post(args, options))
}

export async function postSapiV2SubAccountSubAccountApiIpRestriction(
  args: InferRequestType<
    (typeof client.sapi.v2)['sub-account']['subAccountApi']['ipRestriction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v2['sub-account'].subAccountApi.ipRestriction.$post(args, options),
  )
}

export async function getSapiV4SubAccountAssets(
  args: InferRequestType<(typeof client.sapi.v4)['sub-account']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v4['sub-account'].assets.$get(args, options))
}

export async function putApiV3UserDataStream(
  args: InferRequestType<typeof client.api.v3.userDataStream.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.userDataStream.$put(args, options))
}

export async function postApiV3UserDataStream(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.userDataStream.$post(undefined, options))
}

export async function deleteApiV3UserDataStream(
  args: InferRequestType<typeof client.api.v3.userDataStream.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.userDataStream.$delete(args, options))
}

export async function putSapiV1UserDataStream(
  args: InferRequestType<typeof client.sapi.v1.userDataStream.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.userDataStream.$put(args, options))
}

export async function postSapiV1UserDataStream(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.userDataStream.$post(undefined, options))
}

export async function deleteSapiV1UserDataStream(
  args: InferRequestType<typeof client.sapi.v1.userDataStream.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.userDataStream.$delete(args, options))
}

export async function putSapiV1UserDataStreamIsolated(
  args: InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.userDataStream.isolated.$put(args, options))
}

export async function postSapiV1UserDataStreamIsolated(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.userDataStream.isolated.$post(undefined, options))
}

export async function deleteSapiV1UserDataStreamIsolated(
  args: InferRequestType<typeof client.sapi.v1.userDataStream.isolated.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.userDataStream.isolated.$delete(args, options))
}

export async function getSapiV1FiatOrders(
  args: InferRequestType<typeof client.sapi.v1.fiat.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.fiat.orders.$get(args, options))
}

export async function getSapiV1FiatPayments(
  args: InferRequestType<typeof client.sapi.v1.fiat.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.fiat.payments.$get(args, options))
}

export async function getSapiV1LendingProjectList(
  args: InferRequestType<typeof client.sapi.v1.lending.project.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending.project.list.$get(args, options))
}

export async function postSapiV1LendingCustomizedFixedPurchase(
  args: InferRequestType<typeof client.sapi.v1.lending.customizedFixed.purchase.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending.customizedFixed.purchase.$post(args, options))
}

export async function getSapiV1LendingProjectPositionList(
  args: InferRequestType<typeof client.sapi.v1.lending.project.position.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending.project.position.list.$get(args, options))
}

export async function postSapiV1LendingPositionChanged(
  args: InferRequestType<typeof client.sapi.v1.lending.positionChanged.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending.positionChanged.$post(args, options))
}

export async function getSapiV1MiningPubAlgoList(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.mining.pub.algoList.$get(undefined, options))
}

export async function getSapiV1MiningPubCoinList(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.mining.pub.coinList.$get(undefined, options))
}

export async function getSapiV1MiningWorkerDetail(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.detail.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.worker.detail.$get(args, options))
}

export async function getSapiV1MiningWorkerList(
  args: InferRequestType<typeof client.sapi.v1.mining.worker.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.worker.list.$get(args, options))
}

export async function getSapiV1MiningPaymentList(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.payment.list.$get(args, options))
}

export async function getSapiV1MiningPaymentOther(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.other.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.payment.other.$get(args, options))
}

export async function getSapiV1MiningHashTransferConfigDetailsList(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['details']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.mining['hash-transfer'].config.details.list.$get(args, options),
  )
}

export async function getSapiV1MiningHashTransferProfitDetails(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['profit']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.mining['hash-transfer'].profit.details.$get(args, options),
  )
}

export async function postSapiV1MiningHashTransferConfig(
  args: InferRequestType<(typeof client.sapi.v1.mining)['hash-transfer']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining['hash-transfer'].config.$post(args, options))
}

export async function postSapiV1MiningHashTransferConfigCancel(
  args: InferRequestType<
    (typeof client.sapi.v1.mining)['hash-transfer']['config']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.mining['hash-transfer'].config.cancel.$post(args, options),
  )
}

export async function getSapiV1MiningStatisticsUserStatus(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.statistics.user.status.$get(args, options))
}

export async function getSapiV1MiningStatisticsUserList(
  args: InferRequestType<typeof client.sapi.v1.mining.statistics.user.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.statistics.user.list.$get(args, options))
}

export async function getSapiV1MiningPaymentUid(
  args: InferRequestType<typeof client.sapi.v1.mining.payment.uid.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.mining.payment.uid.$get(args, options))
}

export async function getSapiV1FuturesTransfer(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.futures.transfer.$get(args, options))
}

export async function postSapiV1FuturesTransfer(
  args: InferRequestType<typeof client.sapi.v1.futures.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.futures.transfer.$post(args, options))
}

export async function getSapiV1FuturesHistDataLink(
  args: InferRequestType<typeof client.sapi.v1.futures.histDataLink.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.futures.histDataLink.$get(args, options))
}

export async function postSapiV1AlgoFuturesNewOrderVp(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.newOrderVp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.futures.newOrderVp.$post(args, options))
}

export async function postSapiV1AlgoFuturesNewOrderTwap(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.newOrderTwap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.futures.newOrderTwap.$post(args, options))
}

export async function deleteSapiV1AlgoFuturesOrder(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.order.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.futures.order.$delete(args, options))
}

export async function getSapiV1AlgoFuturesOpenOrders(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.futures.openOrders.$get(args, options))
}

export async function getSapiV1AlgoFuturesHistoricalOrders(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.historicalOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.futures.historicalOrders.$get(args, options))
}

export async function getSapiV1AlgoFuturesSubOrders(
  args: InferRequestType<typeof client.sapi.v1.algo.futures.subOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.futures.subOrders.$get(args, options))
}

export async function postSapiV1AlgoSpotNewOrderTwap(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.newOrderTwap.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.spot.newOrderTwap.$post(args, options))
}

export async function deleteSapiV1AlgoSpotOrder(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.order.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.spot.order.$delete(args, options))
}

export async function getSapiV1AlgoSpotOpenOrders(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.openOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.spot.openOrders.$get(args, options))
}

export async function getSapiV1AlgoSpotHistoricalOrders(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.historicalOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.spot.historicalOrders.$get(args, options))
}

export async function getSapiV1AlgoSpotSubOrders(
  args: InferRequestType<typeof client.sapi.v1.algo.spot.subOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.algo.spot.subOrders.$get(args, options))
}

export async function getSapiV1PortfolioAccount(
  args: InferRequestType<typeof client.sapi.v1.portfolio.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio.account.$get(args, options))
}

export async function getSapiV1PortfolioCollateralRate(options?: ClientRequestOptions) {
  return await parseResponse(client.sapi.v1.portfolio.collateralRate.$get(undefined, options))
}

export async function getSapiV2PortfolioCollateralRate(
  args: InferRequestType<typeof client.sapi.v2.portfolio.collateralRate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.portfolio.collateralRate.$get(args, options))
}

export async function getSapiV1PortfolioPmLoan(
  args: InferRequestType<typeof client.sapi.v1.portfolio.pmLoan.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio.pmLoan.$get(args, options))
}

export async function postSapiV1PortfolioRepay(
  args: InferRequestType<typeof client.sapi.v1.portfolio.repay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio.repay.$post(args, options))
}

export async function getSapiV1PortfolioInterestHistory(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['interest-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['interest-history'].$get(args, options))
}

export async function getSapiV1PortfolioAssetIndexPrice(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-index-price']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['asset-index-price'].$get(args, options))
}

export async function postSapiV1PortfolioAutoCollection(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['auto-collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['auto-collection'].$post(args, options))
}

export async function postSapiV1PortfolioBnbTransfer(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['bnb-transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['bnb-transfer'].$post(args, options))
}

export async function getSapiV1PortfolioRepayFuturesSwitch(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['repay-futures-switch'].$get(args, options))
}

export async function postSapiV1PortfolioRepayFuturesSwitch(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['repay-futures-switch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['repay-futures-switch'].$post(args, options))
}

export async function postSapiV1PortfolioRepayFuturesNegativeBalance(
  args: InferRequestType<
    (typeof client.sapi.v1.portfolio)['repay-futures-negative-balance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.portfolio['repay-futures-negative-balance'].$post(args, options),
  )
}

export async function getSapiV1PortfolioMarginAssetLeverage(options?: ClientRequestOptions) {
  return await parseResponse(
    client.sapi.v1.portfolio['margin-asset-leverage'].$get(undefined, options),
  )
}

export async function postSapiV1PortfolioAssetCollection(
  args: InferRequestType<(typeof client.sapi.v1.portfolio)['asset-collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.portfolio['asset-collection'].$post(args, options))
}

export async function getSapiV1BlvtTokenInfo(
  args: InferRequestType<typeof client.sapi.v1.blvt.tokenInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.blvt.tokenInfo.$get(args, options))
}

export async function postSapiV1BlvtSubscribe(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.blvt.subscribe.$post(args, options))
}

export async function getSapiV1BlvtSubscribeRecord(
  args: InferRequestType<typeof client.sapi.v1.blvt.subscribe.record.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.blvt.subscribe.record.$get(args, options))
}

export async function postSapiV1BlvtRedeem(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.blvt.redeem.$post(args, options))
}

export async function getSapiV1BlvtRedeemRecord(
  args: InferRequestType<typeof client.sapi.v1.blvt.redeem.record.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.blvt.redeem.record.$get(args, options))
}

export async function getSapiV1BlvtUserLimit(
  args: InferRequestType<typeof client.sapi.v1.blvt.userLimit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.blvt.userLimit.$get(args, options))
}

export async function getSapiV1C2cOrderMatchListUserOrderHistory(
  args: InferRequestType<typeof client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.c2c.orderMatch.listUserOrderHistory.$get(args, options))
}

export async function getSapiV1LoanVipOngoingOrders(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.ongoing.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.ongoing.orders.$get(args, options))
}

export async function postSapiV1LoanVipRepay(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.repay.$post(args, options))
}

export async function getSapiV1LoanVipRepayHistory(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.repay.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.repay.history.$get(args, options))
}

export async function getSapiV1LoanVipCollateralAccount(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.collateral.account.$get(args, options))
}

export async function postSapiV1LoanVipBorrow(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.borrow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.borrow.$post(args, options))
}

export async function getSapiV1LoanVipLoanableData(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.loanable.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.loanable.data.$get(args, options))
}

export async function getSapiV1LoanVipCollateralData(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.collateral.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.collateral.data.$get(args, options))
}

export async function getSapiV1LoanVipRequestData(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.request.data.$get(args, options))
}

export async function getSapiV1LoanVipRequestInterestRate(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.request.interestRate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.request.interestRate.$get(args, options))
}

export async function postSapiV1LoanVipRenew(
  args: InferRequestType<typeof client.sapi.v1.loan.vip.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.vip.renew.$post(args, options))
}

export async function getSapiV1LoanIncome(
  args: InferRequestType<typeof client.sapi.v1.loan.income.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.income.$get(args, options))
}

export async function postSapiV1LoanBorrow(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.borrow.$post(args, options))
}

export async function getSapiV1LoanBorrowHistory(
  args: InferRequestType<typeof client.sapi.v1.loan.borrow.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.borrow.history.$get(args, options))
}

export async function getSapiV1LoanOngoingOrders(
  args: InferRequestType<typeof client.sapi.v1.loan.ongoing.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.ongoing.orders.$get(args, options))
}

export async function postSapiV1LoanRepay(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.repay.$post(args, options))
}

export async function getSapiV1LoanRepayHistory(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.repay.history.$get(args, options))
}

export async function postSapiV1LoanAdjustLtv(
  args: InferRequestType<typeof client.sapi.v1.loan.adjust.ltv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.adjust.ltv.$post(args, options))
}

export async function getSapiV1LoanLtvAdjustmentHistory(
  args: InferRequestType<typeof client.sapi.v1.loan.ltv.adjustment.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.ltv.adjustment.history.$get(args, options))
}

export async function getSapiV1LoanLoanableData(
  args: InferRequestType<typeof client.sapi.v1.loan.loanable.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.loanable.data.$get(args, options))
}

export async function getSapiV1LoanCollateralData(
  args: InferRequestType<typeof client.sapi.v1.loan.collateral.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.collateral.data.$get(args, options))
}

export async function getSapiV1LoanRepayCollateralRate(
  args: InferRequestType<typeof client.sapi.v1.loan.repay.collateral.rate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.repay.collateral.rate.$get(args, options))
}

export async function postSapiV1LoanCustomizeMarginCall(
  args: InferRequestType<typeof client.sapi.v1.loan.customize.margin_call.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.loan.customize.margin_call.$post(args, options))
}

export async function postSapiV2LoanFlexibleBorrow(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.borrow.$post(args, options))
}

export async function getSapiV2LoanFlexibleOngoingOrders(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ongoing.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.ongoing.orders.$get(args, options))
}

export async function getSapiV2LoanFlexibleBorrowHistory(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.borrow.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.borrow.history.$get(args, options))
}

export async function postSapiV2LoanFlexibleRepay(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.repay.$post(args, options))
}

export async function getSapiV2LoanFlexibleRepayHistory(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.repay.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.repay.history.$get(args, options))
}

export async function postSapiV2LoanFlexibleAdjustLtv(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.adjust.ltv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.adjust.ltv.$post(args, options))
}

export async function getSapiV2LoanFlexibleLtvAdjustmentHistory(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.ltv.adjustment.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v2.loan.flexible.ltv.adjustment.history.$get(args, options),
  )
}

export async function getSapiV2LoanFlexibleLoanableData(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.loanable.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.loanable.data.$get(args, options))
}

export async function getSapiV2LoanFlexibleCollateralData(
  args: InferRequestType<typeof client.sapi.v2.loan.flexible.collateral.data.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2.loan.flexible.collateral.data.$get(args, options))
}

export async function getSapiV1PayTransactions(
  args: InferRequestType<typeof client.sapi.v1.pay.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.pay.transactions.$get(args, options))
}

export async function getSapiV1ConvertExchangeInfo(
  args: InferRequestType<typeof client.sapi.v1.convert.exchangeInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.exchangeInfo.$get(args, options))
}

export async function getSapiV1ConvertAssetInfo(
  args: InferRequestType<typeof client.sapi.v1.convert.assetInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.assetInfo.$get(args, options))
}

export async function postSapiV1ConvertGetQuote(
  args: InferRequestType<typeof client.sapi.v1.convert.getQuote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.getQuote.$post(args, options))
}

export async function postSapiV1ConvertAcceptQuote(
  args: InferRequestType<typeof client.sapi.v1.convert.acceptQuote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.acceptQuote.$post(args, options))
}

export async function getSapiV1ConvertOrderStatus(
  args: InferRequestType<typeof client.sapi.v1.convert.orderStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.orderStatus.$get(args, options))
}

export async function postSapiV1ConvertLimitPlaceOrder(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.placeOrder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.limit.placeOrder.$post(args, options))
}

export async function postSapiV1ConvertLimitCancelOrder(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.cancelOrder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.limit.cancelOrder.$post(args, options))
}

export async function getSapiV1ConvertLimitQueryOpenOrders(
  args: InferRequestType<typeof client.sapi.v1.convert.limit.queryOpenOrders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.limit.queryOpenOrders.$get(args, options))
}

export async function getSapiV1ConvertTradeFlow(
  args: InferRequestType<typeof client.sapi.v1.convert.tradeFlow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.convert.tradeFlow.$get(args, options))
}

export async function getSapiV1RebateTaxQuery(
  args: InferRequestType<typeof client.sapi.v1.rebate.taxQuery.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.rebate.taxQuery.$get(args, options))
}

export async function getSapiV1NftHistoryTransactions(
  args: InferRequestType<typeof client.sapi.v1.nft.history.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.nft.history.transactions.$get(args, options))
}

export async function getSapiV1NftHistoryDeposit(
  args: InferRequestType<typeof client.sapi.v1.nft.history.deposit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.nft.history.deposit.$get(args, options))
}

export async function getSapiV1NftHistoryWithdraw(
  args: InferRequestType<typeof client.sapi.v1.nft.history.withdraw.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.nft.history.withdraw.$get(args, options))
}

export async function getSapiV1NftUserGetAsset(
  args: InferRequestType<typeof client.sapi.v1.nft.user.getAsset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.nft.user.getAsset.$get(args, options))
}

export async function postSapiV1GiftcardCreateCode(
  args: InferRequestType<typeof client.sapi.v1.giftcard.createCode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.giftcard.createCode.$post(args, options))
}

export async function postSapiV1GiftcardRedeemCode(
  args: InferRequestType<typeof client.sapi.v1.giftcard.redeemCode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.giftcard.redeemCode.$post(args, options))
}

export async function getSapiV1GiftcardVerify(
  args: InferRequestType<typeof client.sapi.v1.giftcard.verify.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.giftcard.verify.$get(args, options))
}

export async function getSapiV1GiftcardCryptographyRsaPublicKey(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.cryptography)['rsa-public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.giftcard.cryptography['rsa-public-key'].$get(args, options),
  )
}

export async function postSapiV1GiftcardBuyCode(
  args: InferRequestType<typeof client.sapi.v1.giftcard.buyCode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.giftcard.buyCode.$post(args, options))
}

export async function getSapiV1GiftcardBuyCodeTokenLimit(
  args: InferRequestType<(typeof client.sapi.v1.giftcard.buyCode)['token-limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.giftcard.buyCode['token-limit'].$get(args, options))
}

export async function getSapiV1LendingAutoInvestTargetAssetList(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest']['target-asset'].list.$get(args, options),
  )
}

export async function getSapiV1LendingAutoInvestTargetAssetRoiList(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['target-asset']['roi']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest']['target-asset'].roi.list.$get(args, options),
  )
}

export async function getSapiV1LendingAutoInvestAllAsset(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['all']['asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].all.asset.$get(args, options))
}

export async function getSapiV1LendingAutoInvestSourceAssetList(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['source-asset']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest']['source-asset'].list.$get(args, options),
  )
}

export async function postSapiV1LendingAutoInvestPlanAdd(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].plan.add.$post(args, options))
}

export async function postSapiV1LendingAutoInvestPlanEdit(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['edit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].plan.edit.$post(args, options))
}

export async function postSapiV1LendingAutoInvestPlanEditStatus(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['plan']['edit-status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest'].plan['edit-status'].$post(args, options),
  )
}

export async function getSapiV1LendingAutoInvestPlanList(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].plan.list.$get(args, options))
}

export async function getSapiV1LendingAutoInvestPlanId(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['plan']['id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].plan.id.$get(args, options))
}

export async function getSapiV1LendingAutoInvestHistoryList(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['history']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].history.list.$get(args, options))
}

export async function getSapiV1LendingAutoInvestIndexInfo(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['index']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].index.info.$get(args, options))
}

export async function getSapiV1LendingAutoInvestIndexUserSummary(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['index']['user-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest'].index['user-summary'].$get(args, options),
  )
}

export async function postSapiV1LendingAutoInvestOneOff(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['one-off']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest']['one-off'].$post(args, options))
}

export async function getSapiV1LendingAutoInvestOneOffStatus(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['one-off']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest']['one-off'].status.$get(args, options),
  )
}

export async function postSapiV1LendingAutoInvestRedeem(
  args: InferRequestType<(typeof client.sapi.v1.lending)['auto-invest']['redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.lending['auto-invest'].redeem.$post(args, options))
}

export async function getSapiV1LendingAutoInvestRedeemHistory(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['redeem']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest'].redeem.history.$get(args, options),
  )
}

export async function getSapiV1LendingAutoInvestRebalanceHistory(
  args: InferRequestType<
    (typeof client.sapi.v1.lending)['auto-invest']['rebalance']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.lending['auto-invest'].rebalance.history.$get(args, options),
  )
}

export async function postSapiV2EthStakingEthStake(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['eth']['stake']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2['eth-staking'].eth.stake.$post(args, options))
}

export async function postSapiV1EthStakingEthRedeem(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['eth-staking'].eth.redeem.$post(args, options))
}

export async function getSapiV1EthStakingEthHistoryStakingHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['stakingHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].eth.history.stakingHistory.$get(args, options),
  )
}

export async function getSapiV1EthStakingEthHistoryRedemptionHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['redemptionHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].eth.history.redemptionHistory.$get(args, options),
  )
}

export async function getSapiV1EthStakingEthHistoryRewardsHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rewardsHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].eth.history.rewardsHistory.$get(args, options),
  )
}

export async function getSapiV1EthStakingEthQuota(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['eth']['quota']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['eth-staking'].eth.quota.$get(args, options))
}

export async function getSapiV1EthStakingEthHistoryRateHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['rateHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].eth.history.rateHistory.$get(args, options),
  )
}

export async function getSapiV2EthStakingAccount(
  args: InferRequestType<(typeof client.sapi.v2)['eth-staking']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v2['eth-staking'].account.$get(args, options))
}

export async function postSapiV1EthStakingWbethWrap(
  args: InferRequestType<(typeof client.sapi.v1)['eth-staking']['wbeth']['wrap']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['eth-staking'].wbeth.wrap.$post(args, options))
}

export async function getSapiV1EthStakingWbethHistoryWrapHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['wrapHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].wbeth.history.wrapHistory.$get(args, options),
  )
}

export async function getSapiV1EthStakingWbethHistoryUnwrapHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['wbeth']['history']['unwrapHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].wbeth.history.unwrapHistory.$get(args, options),
  )
}

export async function getSapiV1EthStakingEthHistoryWbethRewardsHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['eth-staking']['eth']['history']['wbethRewardsHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['eth-staking'].eth.history.wbethRewardsHistory.$get(args, options),
  )
}

export async function getSapiV1CopyTradingFuturesUserStatus(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.userStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.copyTrading.futures.userStatus.$get(args, options))
}

export async function getSapiV1CopyTradingFuturesLeadSymbol(
  args: InferRequestType<typeof client.sapi.v1.copyTrading.futures.leadSymbol.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.copyTrading.futures.leadSymbol.$get(args, options))
}

export async function getSapiV1SimpleEarnFlexibleList(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].flexible.list.$get(args, options))
}

export async function getSapiV1SimpleEarnLockedList(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].locked.list.$get(args, options))
}

export async function postSapiV1SimpleEarnFlexibleSubscribe(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].flexible.subscribe.$post(args, options))
}

export async function postSapiV1SimpleEarnLockedSubscribe(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].locked.subscribe.$post(args, options))
}

export async function postSapiV1SimpleEarnFlexibleRedeem(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].flexible.redeem.$post(args, options))
}

export async function postSapiV1SimpleEarnLockedRedeem(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].locked.redeem.$post(args, options))
}

export async function getSapiV1SimpleEarnFlexiblePosition(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['flexible']['position']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].flexible.position.$get(args, options))
}

export async function getSapiV1SimpleEarnLockedPosition(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['locked']['position']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].locked.position.$get(args, options))
}

export async function getSapiV1SimpleEarnAccount(
  args: InferRequestType<(typeof client.sapi.v1)['simple-earn']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1['simple-earn'].account.$get(args, options))
}

export async function getSapiV1SimpleEarnFlexibleHistorySubscriptionRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['subscriptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.history.subscriptionRecord.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnLockedHistorySubscriptionRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['subscriptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.history.subscriptionRecord.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnFlexibleHistoryRedemptionRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['redemptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.history.redemptionRecord.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnLockedHistoryRedemptionRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['redemptionRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.history.redemptionRecord.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnFlexibleHistoryRewardsRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rewardsRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.history.rewardsRecord.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnLockedHistoryRewardsRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['history']['rewardsRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.history.rewardsRecord.$get(args, options),
  )
}

export async function postSapiV1SimpleEarnFlexibleSetAutoSubscribe(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['setAutoSubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.setAutoSubscribe.$post(args, options),
  )
}

export async function postSapiV1SimpleEarnLockedSetAutoSubscribe(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setAutoSubscribe']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.setAutoSubscribe.$post(args, options),
  )
}

export async function getSapiV1SimpleEarnFlexiblePersonalLeftQuota(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['personalLeftQuota']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.personalLeftQuota.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnLockedPersonalLeftQuota(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['personalLeftQuota']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.personalLeftQuota.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnFlexibleSubscriptionPreview(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['subscriptionPreview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.subscriptionPreview.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnLockedSubscriptionPreview(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['subscriptionPreview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.subscriptionPreview.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnLockedSetRedeemOption(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['locked']['setRedeemOption']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].locked.setRedeemOption.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnFlexibleHistoryRateHistory(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['rateHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.history.rateHistory.$get(args, options),
  )
}

export async function getSapiV1SimpleEarnFlexibleHistoryCollateralRecord(
  args: InferRequestType<
    (typeof client.sapi.v1)['simple-earn']['flexible']['history']['collateralRecord']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1['simple-earn'].flexible.history.collateralRecord.$get(args, options),
  )
}

export async function getSapiV1DciProductList(
  args: InferRequestType<typeof client.sapi.v1.dci.product.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.dci.product.list.$get(args, options))
}

export async function postSapiV1DciProductSubscribe(
  args: InferRequestType<typeof client.sapi.v1.dci.product.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.dci.product.subscribe.$post(args, options))
}

export async function getSapiV1DciProductPositions(
  args: InferRequestType<typeof client.sapi.v1.dci.product.positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.dci.product.positions.$get(args, options))
}

export async function getSapiV1DciProductAccounts(
  args: InferRequestType<typeof client.sapi.v1.dci.product.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sapi.v1.dci.product.accounts.$get(args, options))
}

export async function postSapiV1DciProductAutoCompoundEditStatus(
  args: InferRequestType<(typeof client.sapi.v1.dci.product.auto_compound)['edit-status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sapi.v1.dci.product.auto_compound['edit-status'].$post(args, options),
  )
}
