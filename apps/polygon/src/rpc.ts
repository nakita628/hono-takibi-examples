import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBenzingaV1AnalystInsights(
  args: InferRequestType<(typeof client.benzinga.v1)['analyst-insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1['analyst-insights'].$get(args, options))
}

export async function getBenzingaV1Analysts(
  args: InferRequestType<typeof client.benzinga.v1.analysts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1.analysts.$get(args, options))
}

export async function getBenzingaV1BullsBearsSay(
  args: InferRequestType<(typeof client.benzinga.v1)['bulls-bears-say']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1['bulls-bears-say'].$get(args, options))
}

export async function getBenzingaV1ConsensusRatingsTicker(
  args: InferRequestType<(typeof client.benzinga.v1)['consensus-ratings'][':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1['consensus-ratings'][':ticker'].$get(args, options))
}

export async function getBenzingaV1Earnings(
  args: InferRequestType<typeof client.benzinga.v1.earnings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1.earnings.$get(args, options))
}

export async function getBenzingaV1Firms(
  args: InferRequestType<typeof client.benzinga.v1.firms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1.firms.$get(args, options))
}

export async function getBenzingaV1Guidance(
  args: InferRequestType<typeof client.benzinga.v1.guidance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1.guidance.$get(args, options))
}

export async function getBenzingaV1Ratings(
  args: InferRequestType<typeof client.benzinga.v1.ratings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v1.ratings.$get(args, options))
}

export async function getBenzingaV2News(
  args: InferRequestType<typeof client.benzinga.v2.news.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.benzinga.v2.news.$get(args, options))
}

export async function getConsumerSpendingEuV1MerchantAggregates(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-aggregates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['consumer-spending'].eu.v1['merchant-aggregates'].$get(args, options),
  )
}

export async function getConsumerSpendingEuV1MerchantHierarchy(
  args: InferRequestType<
    (typeof client)['consumer-spending']['eu']['v1']['merchant-hierarchy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['consumer-spending'].eu.v1['merchant-hierarchy'].$get(args, options),
  )
}

export async function getCryptoV1Exchanges(
  args: InferRequestType<typeof client.crypto.v1.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crypto.v1.exchanges.$get(args, options))
}

export async function getEtfGlobalV1Analytics(
  args: InferRequestType<(typeof client)['etf-global']['v1']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['etf-global'].v1.analytics.$get(args, options))
}

export async function getEtfGlobalV1Constituents(
  args: InferRequestType<(typeof client)['etf-global']['v1']['constituents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['etf-global'].v1.constituents.$get(args, options))
}

export async function getEtfGlobalV1FundFlows(
  args: InferRequestType<(typeof client)['etf-global']['v1']['fund-flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['etf-global'].v1['fund-flows'].$get(args, options))
}

export async function getEtfGlobalV1Profiles(
  args: InferRequestType<(typeof client)['etf-global']['v1']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['etf-global'].v1.profiles.$get(args, options))
}

export async function getEtfGlobalV1Taxonomies(
  args: InferRequestType<(typeof client)['etf-global']['v1']['taxonomies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['etf-global'].v1.taxonomies.$get(args, options))
}

export async function getFedV1FundingConditions(
  args: InferRequestType<(typeof client.fed.v1)['funding-conditions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fed.v1['funding-conditions'].$get(args, options))
}

export async function getFedV1Inflation(
  args: InferRequestType<typeof client.fed.v1.inflation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fed.v1.inflation.$get(args, options))
}

export async function getFedV1InflationExpectations(
  args: InferRequestType<(typeof client.fed.v1)['inflation-expectations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fed.v1['inflation-expectations'].$get(args, options))
}

export async function getFedV1LaborMarket(
  args: InferRequestType<(typeof client.fed.v1)['labor-market']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fed.v1['labor-market'].$get(args, options))
}

export async function getFedV1TreasuryYields(
  args: InferRequestType<(typeof client.fed.v1)['treasury-yields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fed.v1['treasury-yields'].$get(args, options))
}

export async function getForexV1Exchanges(
  args: InferRequestType<typeof client.forex.v1.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forex.v1.exchanges.$get(args, options))
}

export async function getFuturesV1AggsTicker(
  args: InferRequestType<(typeof client.futures.v1.aggs)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.aggs[':ticker'].$get(args, options))
}

export async function getFuturesV1Contracts(
  args: InferRequestType<typeof client.futures.v1.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.contracts.$get(args, options))
}

export async function getFuturesV1Exchanges(
  args: InferRequestType<typeof client.futures.v1.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.exchanges.$get(args, options))
}

export async function getFuturesV1MarketStatus(
  args: InferRequestType<(typeof client.futures.v1)['market-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1['market-status'].$get(args, options))
}

export async function getFuturesV1Products(
  args: InferRequestType<typeof client.futures.v1.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.products.$get(args, options))
}

export async function getFuturesV1QuotesTicker(
  args: InferRequestType<(typeof client.futures.v1.quotes)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.quotes[':ticker'].$get(args, options))
}

export async function getFuturesV1Schedules(
  args: InferRequestType<typeof client.futures.v1.schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.schedules.$get(args, options))
}

export async function getFuturesV1Snapshot(
  args: InferRequestType<typeof client.futures.v1.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.snapshot.$get(args, options))
}

export async function getFuturesV1TradesTicker(
  args: InferRequestType<(typeof client.futures.v1.trades)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.futures.v1.trades[':ticker'].$get(args, options))
}

export async function getOptionsV1AdminMessages(
  args: InferRequestType<(typeof client.options.v1)['admin-messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1['admin-messages'].$get(args, options))
}

export async function getOptionsV1Analytics(
  args: InferRequestType<typeof client.options.v1.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1.analytics.$get(args, options))
}

export async function getOptionsV1AnalyticsExpiration(
  args: InferRequestType<typeof client.options.v1.analytics.expiration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1.analytics.expiration.$get(args, options))
}

export async function getOptionsV1AnalyticsStrike(
  args: InferRequestType<typeof client.options.v1.analytics.strike.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1.analytics.strike.$get(args, options))
}

export async function getOptionsV1AnalyticsUnderlying(
  args: InferRequestType<typeof client.options.v1.analytics.underlying.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1.analytics.underlying.$get(args, options))
}

export async function getOptionsV1Exchanges(
  args: InferRequestType<typeof client.options.v1.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1.exchanges.$get(args, options))
}

export async function getOptionsV1OpenInterest(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1['open-interest'].$get(args, options))
}

export async function getOptionsV1OpenInterestUnderlying(
  args: InferRequestType<(typeof client.options.v1)['open-interest']['underlying']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1['open-interest'].underlying.$get(args, options))
}

export async function getOptionsV1UnusualTrades(
  args: InferRequestType<(typeof client.options.v1)['unusual-trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v1['unusual-trades'].$get(args, options))
}

export async function getOptionsV3QuotesTicker(
  args: InferRequestType<(typeof client.options.v3.quotes)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v3.quotes[':ticker'].$get(args, options))
}

export async function getOptionsV3TradesTicker(
  args: InferRequestType<(typeof client.options.v3.trades)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.options.v3.trades[':ticker'].$get(args, options))
}

export async function getStocksDevTradesTicker(
  args: InferRequestType<(typeof client.stocks.dev.trades)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.dev.trades[':ticker'].$get(args, options))
}

export async function getStocksFilings10KVXSections(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings['10-K'].vX.sections.$get(args, options))
}

export async function getStocksFilings10KVX0Sections(
  args: InferRequestType<(typeof client.stocks.filings)['10-K']['vX_0']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings['10-K'].vX_0.sections.$get(args, options))
}

export async function getStocksFilings8KVXDisclosures(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['disclosures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings['8-K'].vX.disclosures.$get(args, options))
}

export async function getStocksFilings8KVXText(
  args: InferRequestType<(typeof client.stocks.filings)['8-K']['vX']['text']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings['8-K'].vX.text.$get(args, options))
}

export async function getStocksFilingsVX13F(
  args: InferRequestType<(typeof client.stocks.filings.vX)['13-F']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings.vX['13-F'].$get(args, options))
}

export async function getStocksFilingsVXForm3(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-3']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings.vX['form-3'].$get(args, options))
}

export async function getStocksFilingsVXForm4(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-4']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings.vX['form-4'].$get(args, options))
}

export async function getStocksFilingsVXForm5(
  args: InferRequestType<(typeof client.stocks.filings.vX)['form-5']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings.vX['form-5'].$get(args, options))
}

export async function getStocksFilingsVXIndex(
  args: InferRequestType<typeof client.stocks.filings.vX.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings.vX.index.$get(args, options))
}

export async function getStocksFilingsVXRiskFactors(
  args: InferRequestType<(typeof client.stocks.filings.vX)['risk-factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.filings.vX['risk-factors'].$get(args, options))
}

export async function getStocksFinancialsV1BalanceSheets(
  args: InferRequestType<(typeof client.stocks.financials.v1)['balance-sheets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.financials.v1['balance-sheets'].$get(args, options))
}

export async function getStocksFinancialsV1CashFlowStatements(
  args: InferRequestType<(typeof client.stocks.financials.v1)['cash-flow-statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stocks.financials.v1['cash-flow-statements'].$get(args, options),
  )
}

export async function getStocksFinancialsV1IncomeStatements(
  args: InferRequestType<(typeof client.stocks.financials.v1)['income-statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.financials.v1['income-statements'].$get(args, options))
}

export async function getStocksFinancialsV1Ratios(
  args: InferRequestType<typeof client.stocks.financials.v1.ratios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.financials.v1.ratios.$get(args, options))
}

export async function getStocksInsidersVXActivity(
  args: InferRequestType<typeof client.stocks.insiders.vX.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.insiders.vX.activity.$get(args, options))
}

export async function getStocksInsidersVXHoldings(
  args: InferRequestType<typeof client.stocks.insiders.vX.holdings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.insiders.vX.holdings.$get(args, options))
}

export async function getStocksTaxonomiesVXDisclosures(
  args: InferRequestType<typeof client.stocks.taxonomies.vX.disclosures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.taxonomies.vX.disclosures.$get(args, options))
}

export async function getStocksTaxonomiesVXRiskFactors(
  args: InferRequestType<(typeof client.stocks.taxonomies.vX)['risk-factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.taxonomies.vX['risk-factors'].$get(args, options))
}

export async function getStocksV1Dividends(
  args: InferRequestType<typeof client.stocks.v1.dividends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.v1.dividends.$get(args, options))
}

export async function getStocksV1Exchanges(
  args: InferRequestType<typeof client.stocks.v1.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.v1.exchanges.$get(args, options))
}

export async function getStocksV1ShortInterest(
  args: InferRequestType<(typeof client.stocks.v1)['short-interest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.v1['short-interest'].$get(args, options))
}

export async function getStocksV1ShortVolume(
  args: InferRequestType<(typeof client.stocks.v1)['short-volume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.v1['short-volume'].$get(args, options))
}

export async function getStocksV1Splits(
  args: InferRequestType<typeof client.stocks.v1.splits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.v1.splits.$get(args, options))
}

export async function getStocksVXFloat(
  args: InferRequestType<typeof client.stocks.vX.float.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.vX.float.$get(args, options))
}

export async function getTmxV1CorporateEvents(
  args: InferRequestType<(typeof client.tmx.v1)['corporate-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tmx.v1['corporate-events'].$get(args, options))
}

export async function getV1ConversionFromTo(
  args: InferRequestType<(typeof client.v1.conversion)[':from'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.conversion[':from'][':to'].$get(args, options))
}

export async function getV1HistoricCryptoFromToDate(
  args: InferRequestType<(typeof client.v1.historic.crypto)[':from'][':to'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.historic.crypto[':from'][':to'][':date'].$get(args, options))
}

export async function getV1HistoricForexFromToDate(
  args: InferRequestType<(typeof client.v1.historic.forex)[':from'][':to'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.historic.forex[':from'][':to'][':date'].$get(args, options))
}

export async function getV1IndicatorsEmaCryptoTicker(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.ema[':cryptoTicker'].$get(args, options))
}

export async function getV1IndicatorsEmaFxTicker(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.ema[':fxTicker'].$get(args, options))
}

export async function getV1IndicatorsEmaIndicesTicker(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.ema[':indicesTicker'].$get(args, options))
}

export async function getV1IndicatorsEmaOptionsTicker(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.ema[':optionsTicker'].$get(args, options))
}

export async function getV1IndicatorsEmaStockTicker(
  args: InferRequestType<(typeof client.v1.indicators.ema)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.ema[':stockTicker'].$get(args, options))
}

export async function getV1IndicatorsMacdCryptoTicker(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.macd[':cryptoTicker'].$get(args, options))
}

export async function getV1IndicatorsMacdFxTicker(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.macd[':fxTicker'].$get(args, options))
}

export async function getV1IndicatorsMacdIndicesTicker(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.macd[':indicesTicker'].$get(args, options))
}

export async function getV1IndicatorsMacdOptionsTicker(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.macd[':optionsTicker'].$get(args, options))
}

export async function getV1IndicatorsMacdStockTicker(
  args: InferRequestType<(typeof client.v1.indicators.macd)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.macd[':stockTicker'].$get(args, options))
}

export async function getV1IndicatorsRsiCryptoTicker(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.rsi[':cryptoTicker'].$get(args, options))
}

export async function getV1IndicatorsRsiFxTicker(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.rsi[':fxTicker'].$get(args, options))
}

export async function getV1IndicatorsRsiIndicesTicker(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.rsi[':indicesTicker'].$get(args, options))
}

export async function getV1IndicatorsRsiOptionsTicker(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.rsi[':optionsTicker'].$get(args, options))
}

export async function getV1IndicatorsRsiStockTicker(
  args: InferRequestType<(typeof client.v1.indicators.rsi)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.rsi[':stockTicker'].$get(args, options))
}

export async function getV1IndicatorsSmaCryptoTicker(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.sma[':cryptoTicker'].$get(args, options))
}

export async function getV1IndicatorsSmaFxTicker(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.sma[':fxTicker'].$get(args, options))
}

export async function getV1IndicatorsSmaIndicesTicker(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':indicesTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.sma[':indicesTicker'].$get(args, options))
}

export async function getV1IndicatorsSmaOptionsTicker(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.sma[':optionsTicker'].$get(args, options))
}

export async function getV1IndicatorsSmaStockTicker(
  args: InferRequestType<(typeof client.v1.indicators.sma)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.indicators.sma[':stockTicker'].$get(args, options))
}

export async function getV1LastCryptoFromTo(
  args: InferRequestType<(typeof client.v1.last.crypto)[':from'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.last.crypto[':from'][':to'].$get(args, options))
}

export async function getV1LastQuoteCurrenciesFromTo(
  args: InferRequestType<(typeof client.v1.last_quote.currencies)[':from'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.last_quote.currencies[':from'][':to'].$get(args, options))
}

export async function getV1MarketstatusNow(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.marketstatus.now.$get(undefined, options))
}

export async function getV1MarketstatusUpcoming(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.marketstatus.upcoming.$get(undefined, options))
}

export async function getV1OpenCloseCryptoFromToDate(
  args: InferRequestType<
    (typeof client.v1)['open-close']['crypto'][':from'][':to'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['open-close'].crypto[':from'][':to'][':date'].$get(args, options),
  )
}

export async function getV1OpenCloseIndicesTickerDate(
  args: InferRequestType<(typeof client.v1)['open-close'][':indicesTicker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['open-close'][':indicesTicker'][':date'].$get(args, options))
}

export async function getV1OpenCloseOptionsTickerDate(
  args: InferRequestType<(typeof client.v1)['open-close'][':optionsTicker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['open-close'][':optionsTicker'][':date'].$get(args, options))
}

export async function getV1OpenCloseStocksTickerDate(
  args: InferRequestType<(typeof client.v1)['open-close'][':stocksTicker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['open-close'][':stocksTicker'][':date'].$get(args, options))
}

export async function getV1ReferenceIpos(
  args: InferRequestType<typeof client.v1.reference.ipos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reference.ipos.$get(args, options))
}

export async function getV1ReferenceSecFilings(
  args: InferRequestType<typeof client.v1.reference.sec.filings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reference.sec.filings.$get(args, options))
}

export async function getV1ReferenceSecFilingsFilingId(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reference.sec.filings[':filing_id'].$get(args, options))
}

export async function getV1ReferenceSecFilingsFilingIdFiles(
  args: InferRequestType<(typeof client.v1.reference.sec.filings)[':filing_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reference.sec.filings[':filing_id'].files.$get(args, options),
  )
}

export async function getV1ReferenceSecFilingsFilingIdFilesFileId(
  args: InferRequestType<
    (typeof client.v1.reference.sec.filings)[':filing_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.reference.sec.filings[':filing_id'].files[':file_id'].$get(args, options),
  )
}

export async function getV1RelatedCompaniesTicker(
  args: InferRequestType<(typeof client.v1)['related-companies'][':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['related-companies'][':ticker'].$get(args, options))
}

export async function getV2AggsGroupedLocaleGlobalMarketCryptoDate(
  args: InferRequestType<
    (typeof client.v2.aggs.grouped.locale.global.market.crypto)[':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.grouped.locale.global.market.crypto[':date'].$get(args, options),
  )
}

export async function getV2AggsGroupedLocaleGlobalMarketFxDate(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.global.market.fx)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.grouped.locale.global.market.fx[':date'].$get(args, options),
  )
}

export async function getV2AggsGroupedLocaleUsMarketStocksDate(
  args: InferRequestType<(typeof client.v2.aggs.grouped.locale.us.market.stocks)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.grouped.locale.us.market.stocks[':date'].$get(args, options),
  )
}

export async function getV2AggsTickerCryptoTickerPrev(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':cryptoTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aggs.ticker[':cryptoTicker'].prev.$get(args, options))
}

export async function getV2AggsTickerCryptoTickerRangeMultiplierTimespanFromTo(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':cryptoTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.ticker[':cryptoTicker'].range[':multiplier'][':timespan'][':from'][':to'].$get(
      args,
      options,
    ),
  )
}

export async function getV2AggsTickerForexTickerPrev(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':forexTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aggs.ticker[':forexTicker'].prev.$get(args, options))
}

export async function getV2AggsTickerForexTickerRangeMultiplierTimespanFromTo(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':forexTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.ticker[':forexTicker'].range[':multiplier'][':timespan'][':from'][':to'].$get(
      args,
      options,
    ),
  )
}

export async function getV2AggsTickerIndicesTickerPrev(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':indicesTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aggs.ticker[':indicesTicker'].prev.$get(args, options))
}

export async function getV2AggsTickerIndicesTickerRangeMultiplierTimespanFromTo(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':indicesTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.ticker[':indicesTicker'].range[':multiplier'][':timespan'][':from'][':to'].$get(
      args,
      options,
    ),
  )
}

export async function getV2AggsTickerOptionsTickerPrev(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':optionsTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aggs.ticker[':optionsTicker'].prev.$get(args, options))
}

export async function getV2AggsTickerOptionsTickerRangeMultiplierTimespanFromTo(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':optionsTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.ticker[':optionsTicker'].range[':multiplier'][':timespan'][':from'][':to'].$get(
      args,
      options,
    ),
  )
}

export async function getV2AggsTickerStocksTickerPrev(
  args: InferRequestType<(typeof client.v2.aggs.ticker)[':stocksTicker']['prev']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.aggs.ticker[':stocksTicker'].prev.$get(args, options))
}

export async function getV2AggsTickerStocksTickerRangeMultiplierTimespanFromTo(
  args: InferRequestType<
    (typeof client.v2.aggs.ticker)[':stocksTicker']['range'][':multiplier'][':timespan'][':from'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.aggs.ticker[':stocksTicker'].range[':multiplier'][':timespan'][':from'][':to'].$get(
      args,
      options,
    ),
  )
}

export async function getV2LastNbboStocksTicker(
  args: InferRequestType<(typeof client.v2.last.nbbo)[':stocksTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.last.nbbo[':stocksTicker'].$get(args, options))
}

export async function getV2LastTradeOptionsTicker(
  args: InferRequestType<(typeof client.v2.last.trade)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.last.trade[':optionsTicker'].$get(args, options))
}

export async function getV2LastTradeStocksTicker(
  args: InferRequestType<(typeof client.v2.last.trade)[':stocksTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.last.trade[':stocksTicker'].$get(args, options))
}

export async function getV2ReferenceNews(
  args: InferRequestType<typeof client.v2.reference.news.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reference.news.$get(args, options))
}

export async function getV2SnapshotLocaleGlobalMarketsCryptoTickers(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.crypto.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.crypto.tickers.$get(args, options),
  )
}

export async function getV2SnapshotLocaleGlobalMarketsCryptoTickersTicker(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].$get(args, options),
  )
}

export async function getV2SnapshotLocaleGlobalMarketsCryptoTickersTickerBook(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto.tickers)[':ticker']['book']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.crypto.tickers[':ticker'].book.$get(args, options),
  )
}

export async function getV2SnapshotLocaleGlobalMarketsCryptoDirection(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.crypto)[':direction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.crypto[':direction'].$get(args, options),
  )
}

export async function getV2SnapshotLocaleGlobalMarketsForexTickers(
  args: InferRequestType<typeof client.v2.snapshot.locale.global.markets.forex.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.forex.tickers.$get(args, options),
  )
}

export async function getV2SnapshotLocaleGlobalMarketsForexTickersTicker(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex.tickers)[':ticker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.forex.tickers[':ticker'].$get(args, options),
  )
}

export async function getV2SnapshotLocaleGlobalMarketsForexDirection(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.global.markets.forex)[':direction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.global.markets.forex[':direction'].$get(args, options),
  )
}

export async function getV2SnapshotLocaleUsMarketsStocksTickers(
  args: InferRequestType<typeof client.v2.snapshot.locale.us.markets.stocks.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.us.markets.stocks.tickers.$get(args, options),
  )
}

export async function getV2SnapshotLocaleUsMarketsStocksTickersStocksTicker(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks.tickers)[':stocksTicker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.us.markets.stocks.tickers[':stocksTicker'].$get(args, options),
  )
}

export async function getV2SnapshotLocaleUsMarketsStocksDirection(
  args: InferRequestType<
    (typeof client.v2.snapshot.locale.us.markets.stocks)[':direction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.snapshot.locale.us.markets.stocks[':direction'].$get(args, options),
  )
}

export async function getV2TicksStocksNbboTickerDate(
  args: InferRequestType<(typeof client.v2.ticks.stocks.nbbo)[':ticker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.ticks.stocks.nbbo[':ticker'][':date'].$get(args, options))
}

export async function getV2TicksStocksTradesTickerDate(
  args: InferRequestType<(typeof client.v2.ticks.stocks.trades)[':ticker'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.ticks.stocks.trades[':ticker'][':date'].$get(args, options))
}

export async function getV3QuotesFxTicker(
  args: InferRequestType<(typeof client.v3.quotes)[':fxTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.quotes[':fxTicker'].$get(args, options))
}

export async function getV3QuotesOptionsTicker(
  args: InferRequestType<(typeof client.v3.quotes)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.quotes[':optionsTicker'].$get(args, options))
}

export async function getV3QuotesStockTicker(
  args: InferRequestType<(typeof client.v3.quotes)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.quotes[':stockTicker'].$get(args, options))
}

export async function getV3ReferenceConditions(
  args: InferRequestType<typeof client.v3.reference.conditions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.conditions.$get(args, options))
}

export async function getV3ReferenceDividends(
  args: InferRequestType<typeof client.v3.reference.dividends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.dividends.$get(args, options))
}

export async function getV3ReferenceExchanges(
  args: InferRequestType<typeof client.v3.reference.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.exchanges.$get(args, options))
}

export async function getV3ReferenceOptionsContracts(
  args: InferRequestType<typeof client.v3.reference.options.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.options.contracts.$get(args, options))
}

export async function getV3ReferenceOptionsContractsOptionsTicker(
  args: InferRequestType<(typeof client.v3.reference.options.contracts)[':options_ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.reference.options.contracts[':options_ticker'].$get(args, options),
  )
}

export async function getV3ReferenceSplits(
  args: InferRequestType<typeof client.v3.reference.splits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.splits.$get(args, options))
}

export async function getV3ReferenceTickers(
  args: InferRequestType<typeof client.v3.reference.tickers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.tickers.$get(args, options))
}

export async function getV3ReferenceTickersTypes(
  args: InferRequestType<typeof client.v3.reference.tickers.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.tickers.types.$get(args, options))
}

export async function getV3ReferenceTickersTicker(
  args: InferRequestType<(typeof client.v3.reference.tickers)[':ticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.reference.tickers[':ticker'].$get(args, options))
}

export async function getV3Snapshot(
  args: InferRequestType<typeof client.v3.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.snapshot.$get(args, options))
}

export async function getV3SnapshotIndices(
  args: InferRequestType<typeof client.v3.snapshot.indices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.snapshot.indices.$get(args, options))
}

export async function getV3SnapshotOptionsUnderlyingAsset(
  args: InferRequestType<(typeof client.v3.snapshot.options)[':underlyingAsset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.snapshot.options[':underlyingAsset'].$get(args, options))
}

export async function getV3SnapshotOptionsUnderlyingAssetOptionContract(
  args: InferRequestType<
    (typeof client.v3.snapshot.options)[':underlyingAsset'][':optionContract']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.snapshot.options[':underlyingAsset'][':optionContract'].$get(args, options),
  )
}

export async function getV3TradesCryptoTicker(
  args: InferRequestType<(typeof client.v3.trades)[':cryptoTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.trades[':cryptoTicker'].$get(args, options))
}

export async function getV3TradesOptionsTicker(
  args: InferRequestType<(typeof client.v3.trades)[':optionsTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.trades[':optionsTicker'].$get(args, options))
}

export async function getV3TradesStockTicker(
  args: InferRequestType<(typeof client.v3.trades)[':stockTicker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.trades[':stockTicker'].$get(args, options))
}

export async function getVXReferenceIpos(
  args: InferRequestType<typeof client.vX.reference.ipos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vX.reference.ipos.$get(args, options))
}

export async function getVXReferenceTickersIdEvents(
  args: InferRequestType<(typeof client.vX.reference.tickers)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vX.reference.tickers[':id'].events.$get(args, options))
}
