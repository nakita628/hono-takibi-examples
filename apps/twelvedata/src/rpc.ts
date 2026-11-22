import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAd(
  args: InferRequestType<typeof client.ad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ad.$get(args, options))
}

export async function getAdd(
  args: InferRequestType<typeof client.add.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add.$get(args, options))
}

export async function getAdosc(
  args: InferRequestType<typeof client.adosc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adosc.$get(args, options))
}

export async function getAdx(
  args: InferRequestType<typeof client.adx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adx.$get(args, options))
}

export async function getAdxr(
  args: InferRequestType<typeof client.adxr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adxr.$get(args, options))
}

export async function getAnalystRatingsLight(
  args: InferRequestType<typeof client.analyst_ratings.light.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyst_ratings.light.$get(args, options))
}

export async function getAnalystRatingsUsEquities(
  args: InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analyst_ratings.us_equities.$get(args, options))
}

export async function getApiUsage(
  args: InferRequestType<typeof client.api_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_usage.$get(args, options))
}

export async function getApo(
  args: InferRequestType<typeof client.apo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apo.$get(args, options))
}

export async function getAroon(
  args: InferRequestType<typeof client.aroon.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aroon.$get(args, options))
}

export async function getAroonosc(
  args: InferRequestType<typeof client.aroonosc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aroonosc.$get(args, options))
}

export async function getAtr(
  args: InferRequestType<typeof client.atr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.atr.$get(args, options))
}

export async function getAvg(
  args: InferRequestType<typeof client.avg.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avg.$get(args, options))
}

export async function getAvgprice(
  args: InferRequestType<typeof client.avgprice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avgprice.$get(args, options))
}

export async function getBalanceSheet(
  args: InferRequestType<typeof client.balance_sheet.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balance_sheet.$get(args, options))
}

export async function getBalanceSheetConsolidated(
  args: InferRequestType<typeof client.balance_sheet.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.balance_sheet.consolidated.$get(args, options))
}

export async function postBatch(
  args: InferRequestType<typeof client.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.$post(args, options))
}

export async function getBbands(
  args: InferRequestType<typeof client.bbands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bbands.$get(args, options))
}

export async function getBeta(
  args: InferRequestType<typeof client.beta.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.beta.$get(args, options))
}

export async function getBonds(
  args: InferRequestType<typeof client.bonds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bonds.$get(args, options))
}

export async function getBop(
  args: InferRequestType<typeof client.bop.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bop.$get(args, options))
}

export async function getCashFlow(
  args: InferRequestType<typeof client.cash_flow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cash_flow.$get(args, options))
}

export async function getCashFlowConsolidated(
  args: InferRequestType<typeof client.cash_flow.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cash_flow.consolidated.$get(args, options))
}

export async function getCci(
  args: InferRequestType<typeof client.cci.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cci.$get(args, options))
}

export async function getCeil(
  args: InferRequestType<typeof client.ceil.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ceil.$get(args, options))
}

export async function getCmo(
  args: InferRequestType<typeof client.cmo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cmo.$get(args, options))
}

export async function getCommodities(
  args: InferRequestType<typeof client.commodities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commodities.$get(args, options))
}

export async function getCoppock(
  args: InferRequestType<typeof client.coppock.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coppock.$get(args, options))
}

export async function getCorrel(
  args: InferRequestType<typeof client.correl.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.correl.$get(args, options))
}

export async function getCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.countries.$get(undefined, options))
}

export async function getCrossListings(
  args: InferRequestType<typeof client.cross_listings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cross_listings.$get(args, options))
}

export async function getCrsi(
  args: InferRequestType<typeof client.crsi.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crsi.$get(args, options))
}

export async function getCryptocurrencies(
  args: InferRequestType<typeof client.cryptocurrencies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cryptocurrencies.$get(args, options))
}

export async function getCryptocurrencyExchanges(
  args: InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cryptocurrency_exchanges.$get(args, options))
}

export async function getCurrencyConversion(
  args: InferRequestType<typeof client.currency_conversion.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currency_conversion.$get(args, options))
}

export async function getDema(
  args: InferRequestType<typeof client.dema.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dema.$get(args, options))
}

export async function getDirectHolders(
  args: InferRequestType<typeof client.direct_holders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.direct_holders.$get(args, options))
}

export async function getDiv(
  args: InferRequestType<typeof client.div.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.div.$get(args, options))
}

export async function getDividends(
  args: InferRequestType<typeof client.dividends.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dividends.$get(args, options))
}

export async function getDividendsCalendar(
  args: InferRequestType<typeof client.dividends_calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dividends_calendar.$get(args, options))
}

export async function getDpo(
  args: InferRequestType<typeof client.dpo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpo.$get(args, options))
}

export async function getDx(
  args: InferRequestType<typeof client.dx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dx.$get(args, options))
}

export async function getEarliestTimestamp(
  args: InferRequestType<typeof client.earliest_timestamp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.earliest_timestamp.$get(args, options))
}

export async function getEarnings(
  args: InferRequestType<typeof client.earnings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.earnings.$get(args, options))
}

export async function getEarningsCalendar(
  args: InferRequestType<typeof client.earnings_calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.earnings_calendar.$get(args, options))
}

export async function getEarningsEstimate(
  args: InferRequestType<typeof client.earnings_estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.earnings_estimate.$get(args, options))
}

export async function getEdgarFilingsArchive(
  args: InferRequestType<typeof client.edgar_filings.archive.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edgar_filings.archive.$get(args, options))
}

export async function getEma(
  args: InferRequestType<typeof client.ema.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ema.$get(args, options))
}

export async function getEod(
  args: InferRequestType<typeof client.eod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eod.$get(args, options))
}

export async function getEpsRevisions(
  args: InferRequestType<typeof client.eps_revisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eps_revisions.$get(args, options))
}

export async function getEpsTrend(
  args: InferRequestType<typeof client.eps_trend.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eps_trend.$get(args, options))
}

export async function getEtfs(
  args: InferRequestType<typeof client.etfs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.$get(args, options))
}

export async function getEtfsFamily(
  args: InferRequestType<typeof client.etfs.family.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.family.$get(args, options))
}

export async function getEtfsList(
  args: InferRequestType<typeof client.etfs.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.list.$get(args, options))
}

export async function getEtfsType(
  args: InferRequestType<typeof client.etfs.type.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.type.$get(args, options))
}

export async function getEtfsWorld(
  args: InferRequestType<typeof client.etfs.world.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.world.$get(args, options))
}

export async function getEtfsWorldComposition(
  args: InferRequestType<typeof client.etfs.world.composition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.world.composition.$get(args, options))
}

export async function getEtfsWorldPerformance(
  args: InferRequestType<typeof client.etfs.world.performance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.world.performance.$get(args, options))
}

export async function getEtfsWorldRisk(
  args: InferRequestType<typeof client.etfs.world.risk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.world.risk.$get(args, options))
}

export async function getEtfsWorldSummary(
  args: InferRequestType<typeof client.etfs.world.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etfs.world.summary.$get(args, options))
}

export async function getExchangeRate(
  args: InferRequestType<typeof client.exchange_rate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exchange_rate.$get(args, options))
}

export async function getExchangeSchedule(
  args: InferRequestType<typeof client.exchange_schedule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exchange_schedule.$get(args, options))
}

export async function getExchanges(
  args: InferRequestType<typeof client.exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exchanges.$get(args, options))
}

export async function getExp(
  args: InferRequestType<typeof client.exp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exp.$get(args, options))
}

export async function getFloor(
  args: InferRequestType<typeof client.floor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.floor.$get(args, options))
}

export async function getForexPairs(
  args: InferRequestType<typeof client.forex_pairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forex_pairs.$get(args, options))
}

export async function getFundHolders(
  args: InferRequestType<typeof client.fund_holders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fund_holders.$get(args, options))
}

export async function getFunds(
  args: InferRequestType<typeof client.funds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.funds.$get(args, options))
}

export async function getGrowthEstimates(
  args: InferRequestType<typeof client.growth_estimates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.growth_estimates.$get(args, options))
}

export async function getHeikinashicandles(
  args: InferRequestType<typeof client.heikinashicandles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.heikinashicandles.$get(args, options))
}

export async function getHlc3(
  args: InferRequestType<typeof client.hlc3.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hlc3.$get(args, options))
}

export async function getHtDcperiod(
  args: InferRequestType<typeof client.ht_dcperiod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ht_dcperiod.$get(args, options))
}

export async function getHtDcphase(
  args: InferRequestType<typeof client.ht_dcphase.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ht_dcphase.$get(args, options))
}

export async function getHtPhasor(
  args: InferRequestType<typeof client.ht_phasor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ht_phasor.$get(args, options))
}

export async function getHtSine(
  args: InferRequestType<typeof client.ht_sine.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ht_sine.$get(args, options))
}

export async function getHtTrendline(
  args: InferRequestType<typeof client.ht_trendline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ht_trendline.$get(args, options))
}

export async function getHtTrendmode(
  args: InferRequestType<typeof client.ht_trendmode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ht_trendmode.$get(args, options))
}

export async function getIchimoku(
  args: InferRequestType<typeof client.ichimoku.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ichimoku.$get(args, options))
}

export async function getIncomeStatement(
  args: InferRequestType<typeof client.income_statement.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income_statement.$get(args, options))
}

export async function getIncomeStatementConsolidated(
  args: InferRequestType<typeof client.income_statement.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.income_statement.consolidated.$get(args, options))
}

export async function getInsiderTransactions(
  args: InferRequestType<typeof client.insider_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insider_transactions.$get(args, options))
}

export async function getInstitutionalHolders(
  args: InferRequestType<typeof client.institutional_holders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutional_holders.$get(args, options))
}

export async function getInstrumentType(options?: ClientRequestOptions) {
  return await parseResponse(client.instrument_type.$get(undefined, options))
}

export async function getIntervals(options?: ClientRequestOptions) {
  return await parseResponse(client.intervals.$get(undefined, options))
}

export async function getIpoCalendar(
  args: InferRequestType<typeof client.ipo_calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ipo_calendar.$get(args, options))
}

export async function getKama(
  args: InferRequestType<typeof client.kama.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kama.$get(args, options))
}

export async function getKeltner(
  args: InferRequestType<typeof client.keltner.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keltner.$get(args, options))
}

export async function getKeyExecutives(
  args: InferRequestType<typeof client.key_executives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.key_executives.$get(args, options))
}

export async function getKst(
  args: InferRequestType<typeof client.kst.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kst.$get(args, options))
}

export async function getLastChangeEndpoint(
  args: InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.last_change[':endpoint'].$get(args, options))
}

export async function getLinearreg(
  args: InferRequestType<typeof client.linearreg.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linearreg.$get(args, options))
}

export async function getLinearregangle(
  args: InferRequestType<typeof client.linearregangle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linearregangle.$get(args, options))
}

export async function getLinearregintercept(
  args: InferRequestType<typeof client.linearregintercept.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linearregintercept.$get(args, options))
}

export async function getLinearregslope(
  args: InferRequestType<typeof client.linearregslope.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linearregslope.$get(args, options))
}

export async function getLn(
  args: InferRequestType<typeof client.ln.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ln.$get(args, options))
}

export async function getLog10(
  args: InferRequestType<typeof client.log10.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.log10.$get(args, options))
}

export async function getLogo(
  args: InferRequestType<typeof client.logo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logo.$get(args, options))
}

export async function getMa(
  args: InferRequestType<typeof client.ma.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ma.$get(args, options))
}

export async function getMacd(
  args: InferRequestType<typeof client.macd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macd.$get(args, options))
}

export async function getMacdSlope(
  args: InferRequestType<typeof client.macd_slope.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macd_slope.$get(args, options))
}

export async function getMacdext(
  args: InferRequestType<typeof client.macdext.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macdext.$get(args, options))
}

export async function getMama(
  args: InferRequestType<typeof client.mama.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mama.$get(args, options))
}

export async function getMarketCap(
  args: InferRequestType<typeof client.market_cap.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.market_cap.$get(args, options))
}

export async function getMarketMoversMarket(
  args: InferRequestType<(typeof client.market_movers)[':market']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.market_movers[':market'].$get(args, options))
}

export async function getMarketState(
  args: InferRequestType<typeof client.market_state.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.market_state.$get(args, options))
}

export async function getMax(
  args: InferRequestType<typeof client.max.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.max.$get(args, options))
}

export async function getMaxindex(
  args: InferRequestType<typeof client.maxindex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.maxindex.$get(args, options))
}

export async function getMcginleyDynamic(
  args: InferRequestType<typeof client.mcginley_dynamic.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mcginley_dynamic.$get(args, options))
}

export async function getMedprice(
  args: InferRequestType<typeof client.medprice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.medprice.$get(args, options))
}

export async function getMfi(
  args: InferRequestType<typeof client.mfi.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mfi.$get(args, options))
}

export async function getMidpoint(
  args: InferRequestType<typeof client.midpoint.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.midpoint.$get(args, options))
}

export async function getMidprice(
  args: InferRequestType<typeof client.midprice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.midprice.$get(args, options))
}

export async function getMin(
  args: InferRequestType<typeof client.min.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.min.$get(args, options))
}

export async function getMinindex(
  args: InferRequestType<typeof client.minindex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.minindex.$get(args, options))
}

export async function getMinmax(
  args: InferRequestType<typeof client.minmax.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.minmax.$get(args, options))
}

export async function getMinmaxindex(
  args: InferRequestType<typeof client.minmaxindex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.minmaxindex.$get(args, options))
}

export async function getMinusDi(
  args: InferRequestType<typeof client.minus_di.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.minus_di.$get(args, options))
}

export async function getMinusDm(
  args: InferRequestType<typeof client.minus_dm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.minus_dm.$get(args, options))
}

export async function getMom(
  args: InferRequestType<typeof client.mom.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mom.$get(args, options))
}

export async function getMoneyMarketFundsList(
  args: InferRequestType<typeof client.money_market_funds.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.money_market_funds.list.$get(args, options))
}

export async function getMoneyMarketFundsWorld(
  args: InferRequestType<typeof client.money_market_funds.world.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.money_market_funds.world.$get(args, options))
}

export async function getMult(
  args: InferRequestType<typeof client.mult.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mult.$get(args, options))
}

export async function getMutualFundsFamily(
  args: InferRequestType<typeof client.mutual_funds.family.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.family.$get(args, options))
}

export async function getMutualFundsList(
  args: InferRequestType<typeof client.mutual_funds.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.list.$get(args, options))
}

export async function getMutualFundsType(
  args: InferRequestType<typeof client.mutual_funds.type.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.type.$get(args, options))
}

export async function getMutualFundsWorld(
  args: InferRequestType<typeof client.mutual_funds.world.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.$get(args, options))
}

export async function getMutualFundsWorldComposition(
  args: InferRequestType<typeof client.mutual_funds.world.composition.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.composition.$get(args, options))
}

export async function getMutualFundsWorldPerformance(
  args: InferRequestType<typeof client.mutual_funds.world.performance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.performance.$get(args, options))
}

export async function getMutualFundsWorldPurchaseInfo(
  args: InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.purchase_info.$get(args, options))
}

export async function getMutualFundsWorldRatings(
  args: InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.ratings.$get(args, options))
}

export async function getMutualFundsWorldRisk(
  args: InferRequestType<typeof client.mutual_funds.world.risk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.risk.$get(args, options))
}

export async function getMutualFundsWorldSummary(
  args: InferRequestType<typeof client.mutual_funds.world.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.summary.$get(args, options))
}

export async function getMutualFundsWorldSustainability(
  args: InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mutual_funds.world.sustainability.$get(args, options))
}

export async function getNatr(
  args: InferRequestType<typeof client.natr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.natr.$get(args, options))
}

export async function getObv(
  args: InferRequestType<typeof client.obv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.obv.$get(args, options))
}

export async function getPercentB(
  args: InferRequestType<typeof client.percent_b.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.percent_b.$get(args, options))
}

export async function getPivotPointsHl(
  args: InferRequestType<typeof client.pivot_points_hl.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pivot_points_hl.$get(args, options))
}

export async function getPlusDi(
  args: InferRequestType<typeof client.plus_di.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plus_di.$get(args, options))
}

export async function getPlusDm(
  args: InferRequestType<typeof client.plus_dm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plus_dm.$get(args, options))
}

export async function getPpo(
  args: InferRequestType<typeof client.ppo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ppo.$get(args, options))
}

export async function getPressReleases(
  args: InferRequestType<typeof client.press_releases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.press_releases.$get(args, options))
}

export async function getPrice(
  args: InferRequestType<typeof client.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price.$get(args, options))
}

export async function getPriceTarget(
  args: InferRequestType<typeof client.price_target.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_target.$get(args, options))
}

export async function getProfile(
  args: InferRequestType<typeof client.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.$get(args, options))
}

export async function getQuote(
  args: InferRequestType<typeof client.quote.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote.$get(args, options))
}

export async function getRecommendations(
  args: InferRequestType<typeof client.recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.$get(args, options))
}

export async function getRevenueEstimate(
  args: InferRequestType<typeof client.revenue_estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.revenue_estimate.$get(args, options))
}

export async function getRoc(
  args: InferRequestType<typeof client.roc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roc.$get(args, options))
}

export async function getRocp(
  args: InferRequestType<typeof client.rocp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rocp.$get(args, options))
}

export async function getRocr(
  args: InferRequestType<typeof client.rocr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rocr.$get(args, options))
}

export async function getRocr100(
  args: InferRequestType<typeof client.rocr100.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rocr100.$get(args, options))
}

export async function getRsi(
  args: InferRequestType<typeof client.rsi.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rsi.$get(args, options))
}

export async function getRvol(
  args: InferRequestType<typeof client.rvol.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rvol.$get(args, options))
}

export async function getSanctionsSource(
  args: InferRequestType<(typeof client.sanctions)[':source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sanctions[':source'].$get(args, options))
}

export async function getSar(
  args: InferRequestType<typeof client.sar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sar.$get(args, options))
}

export async function getSarext(
  args: InferRequestType<typeof client.sarext.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sarext.$get(args, options))
}

export async function getSma(
  args: InferRequestType<typeof client.sma.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sma.$get(args, options))
}

export async function getSplits(
  args: InferRequestType<typeof client.splits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.splits.$get(args, options))
}

export async function getSplitsCalendar(
  args: InferRequestType<typeof client.splits_calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.splits_calendar.$get(args, options))
}

export async function getSqrt(
  args: InferRequestType<typeof client.sqrt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sqrt.$get(args, options))
}

export async function getStatistics(
  args: InferRequestType<typeof client.statistics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.$get(args, options))
}

export async function getStddev(
  args: InferRequestType<typeof client.stddev.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stddev.$get(args, options))
}

export async function getStoch(
  args: InferRequestType<typeof client.stoch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stoch.$get(args, options))
}

export async function getStochf(
  args: InferRequestType<typeof client.stochf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stochf.$get(args, options))
}

export async function getStochrsi(
  args: InferRequestType<typeof client.stochrsi.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stochrsi.$get(args, options))
}

export async function getStocks(
  args: InferRequestType<typeof client.stocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stocks.$get(args, options))
}

export async function getSub(
  args: InferRequestType<typeof client.sub.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub.$get(args, options))
}

export async function getSum(
  args: InferRequestType<typeof client.sum.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sum.$get(args, options))
}

export async function getSupertrend(
  args: InferRequestType<typeof client.supertrend.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.supertrend.$get(args, options))
}

export async function getSupertrendHeikinashicandles(
  args: InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.supertrend_heikinashicandles.$get(args, options))
}

export async function getSymbolSearch(
  args: InferRequestType<typeof client.symbol_search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.symbol_search.$get(args, options))
}

export async function getT3ma(
  args: InferRequestType<typeof client.t3ma.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.t3ma.$get(args, options))
}

export async function getTaxInfo(
  args: InferRequestType<typeof client.tax_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tax_info.$get(args, options))
}

export async function getTechnicalIndicators(options?: ClientRequestOptions) {
  return await parseResponse(client.technical_indicators.$get(undefined, options))
}

export async function getTema(
  args: InferRequestType<typeof client.tema.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tema.$get(args, options))
}

export async function getTimeSeries(
  args: InferRequestType<typeof client.time_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_series.$get(args, options))
}

export async function getTimeSeriesCross(
  args: InferRequestType<typeof client.time_series.cross.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_series.cross.$get(args, options))
}

export async function getTrange(
  args: InferRequestType<typeof client.trange.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trange.$get(args, options))
}

export async function getTrima(
  args: InferRequestType<typeof client.trima.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trima.$get(args, options))
}

export async function getTsf(
  args: InferRequestType<typeof client.tsf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tsf.$get(args, options))
}

export async function getTypprice(
  args: InferRequestType<typeof client.typprice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.typprice.$get(args, options))
}

export async function getUltosc(
  args: InferRequestType<typeof client.ultosc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ultosc.$get(args, options))
}

export async function getVar(
  args: InferRequestType<typeof client.var.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.var.$get(args, options))
}

export async function getVwap(
  args: InferRequestType<typeof client.vwap.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vwap.$get(args, options))
}

export async function getWclprice(
  args: InferRequestType<typeof client.wclprice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wclprice.$get(args, options))
}

export async function getWillr(
  args: InferRequestType<typeof client.willr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.willr.$get(args, options))
}

export async function getWma(
  args: InferRequestType<typeof client.wma.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wma.$get(args, options))
}
