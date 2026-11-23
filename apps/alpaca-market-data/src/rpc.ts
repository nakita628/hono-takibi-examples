import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1EventsCorporateActions(
  args: InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.events['corporate-actions'].$get(args, options))
}

export async function getV1beta1FixedIncomeLatestPrices(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.fixed_income.latest.prices.$get(args, options))
}

export async function getV1beta1FixedIncomeLatestQuotes(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.fixed_income.latest.quotes.$get(args, options))
}

export async function getV1beta1LogosSymbol(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.logos[':symbol'].$get(args, options))
}

export async function getV1beta1News(
  args: InferRequestType<typeof client.v1beta1.news.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.news.$get(args, options))
}

export async function getV1beta1OptionsBars(
  args: InferRequestType<typeof client.v1beta1.options.bars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.options.bars.$get(args, options))
}

export async function getV1beta1OptionsMetaConditionsTicktype(
  args: InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.options.meta.conditions[':ticktype'].$get(args, options),
  )
}

export async function getV1beta1OptionsMetaExchanges(options?: ClientRequestOptions) {
  return await parseResponse(client.v1beta1.options.meta.exchanges.$get(undefined, options))
}

export async function getV1beta1OptionsQuotesLatest(
  args: InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.options.quotes.latest.$get(args, options))
}

export async function getV1beta1OptionsSnapshots(
  args: InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.options.snapshots.$get(args, options))
}

export async function getV1beta1OptionsSnapshotsUnderlyingSymbol(
  args: InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.options.snapshots[':underlying_symbol'].$get(args, options),
  )
}

export async function getV1beta1OptionsTrades(
  args: InferRequestType<typeof client.v1beta1.options.trades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.options.trades.$get(args, options))
}

export async function getV1beta1OptionsTradesLatest(
  args: InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.options.trades.latest.$get(args, options))
}

export async function getV1beta1ScreenerMarketTypeMovers(
  args: InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.screener[':market_type'].movers.$get(args, options))
}

export async function getV1beta1ScreenerStocksMostActives(
  args: InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.screener.stocks['most-actives'].$get(args, options))
}

export async function getV1beta3CryptoLocBars(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].bars.$get(args, options))
}

export async function getV1beta3CryptoLocLatestBars(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].latest.bars.$get(args, options))
}

export async function getV1beta3CryptoLocLatestOrderbooks(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].latest.orderbooks.$get(args, options))
}

export async function getV1beta3CryptoLocLatestQuotes(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].latest.quotes.$get(args, options))
}

export async function getV1beta3CryptoLocLatestTrades(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].latest.trades.$get(args, options))
}

export async function getV1beta3CryptoLocQuotes(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].quotes.$get(args, options))
}

export async function getV1beta3CryptoLocSnapshots(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].snapshots.$get(args, options))
}

export async function getV1beta3CryptoLocTrades(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3.crypto[':loc'].trades.$get(args, options))
}

export async function getV1CorporateActions(
  args: InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['corporate-actions'].$get(args, options))
}

export async function getV2StocksSymbolAuctions(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].auctions.$get(args, options))
}

export async function getV2StocksSymbolBars(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].bars.$get(args, options))
}

export async function getV2StocksSymbolBarsLatest(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].bars.latest.$get(args, options))
}

export async function getV2StocksSymbolQuotes(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].quotes.$get(args, options))
}

export async function getV2StocksSymbolQuotesLatest(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].quotes.latest.$get(args, options))
}

export async function getV2StocksSymbolSnapshot(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].snapshot.$get(args, options))
}

export async function getV2StocksSymbolTrades(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].trades.$get(args, options))
}

export async function getV2StocksSymbolTradesLatest(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks[':symbol'].trades.latest.$get(args, options))
}

export async function getV2StocksAuctions(
  args: InferRequestType<typeof client.v2.stocks.auctions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.auctions.$get(args, options))
}

export async function getV2StocksBars(
  args: InferRequestType<typeof client.v2.stocks.bars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.bars.$get(args, options))
}

export async function getV2StocksBarsLatest(
  args: InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.bars.latest.$get(args, options))
}

export async function getV2StocksMetaConditionsTicktype(
  args: InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.meta.conditions[':ticktype'].$get(args, options))
}

export async function getV2StocksMetaExchanges(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.stocks.meta.exchanges.$get(undefined, options))
}

export async function getV2StocksQuotes(
  args: InferRequestType<typeof client.v2.stocks.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.quotes.$get(args, options))
}

export async function getV2StocksQuotesLatest(
  args: InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.quotes.latest.$get(args, options))
}

export async function getV2StocksSnapshots(
  args: InferRequestType<typeof client.v2.stocks.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.snapshots.$get(args, options))
}

export async function getV2StocksTrades(
  args: InferRequestType<typeof client.v2.stocks.trades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.trades.$get(args, options))
}

export async function getV2StocksTradesLatest(
  args: InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.stocks.trades.latest.$get(args, options))
}

export async function getV3StocksFeedBars(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].bars.$get(args, options))
}

export async function getV3StocksFeedLatestBars(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].latest.bars.$get(args, options))
}

export async function getV3StocksFeedLatestQuotes(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].latest.quotes.$get(args, options))
}

export async function getV3StocksFeedLatestTrades(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].latest.trades.$get(args, options))
}

export async function getV3StocksFeedQuotes(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].quotes.$get(args, options))
}

export async function getV3StocksFeedSnapshots(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].snapshots.$get(args, options))
}

export async function getV3StocksFeedTrades(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.stocks[':feed'].trades.$get(args, options))
}
