import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAddRoute,
  getAdoscRoute,
  getAdRoute,
  getAdxRoute,
  getAdxrRoute,
  getAnalystRatingsLightRoute,
  getAnalystRatingsUsEquitiesRoute,
  getApiUsageRoute,
  getApoRoute,
  getAroonoscRoute,
  getAroonRoute,
  getAtrRoute,
  getAvgpriceRoute,
  getAvgRoute,
  getBalanceSheetConsolidatedRoute,
  getBalanceSheetRoute,
  getBbandsRoute,
  getBetaRoute,
  getBondsRoute,
  getBopRoute,
  getCashFlowConsolidatedRoute,
  getCashFlowRoute,
  getCciRoute,
  getCeilRoute,
  getCmoRoute,
  getCommoditiesRoute,
  getCoppockRoute,
  getCorrelRoute,
  getCountriesRoute,
  getCrossListingsRoute,
  getCrsiRoute,
  getCryptocurrenciesRoute,
  getCryptocurrencyExchangesRoute,
  getCurrencyConversionRoute,
  getDemaRoute,
  getDirectHoldersRoute,
  getDividendsCalendarRoute,
  getDividendsRoute,
  getDivRoute,
  getDpoRoute,
  getDxRoute,
  getEarliestTimestampRoute,
  getEarningsCalendarRoute,
  getEarningsEstimateRoute,
  getEarningsRoute,
  getEdgarFilingsArchiveRoute,
  getEmaRoute,
  getEodRoute,
  getEpsRevisionsRoute,
  getEpsTrendRoute,
  getEtfsFamilyRoute,
  getEtfsListRoute,
  getEtfsRoute,
  getEtfsTypeRoute,
  getEtfsWorldCompositionRoute,
  getEtfsWorldPerformanceRoute,
  getEtfsWorldRiskRoute,
  getEtfsWorldRoute,
  getEtfsWorldSummaryRoute,
  getExchangeRateRoute,
  getExchangeScheduleRoute,
  getExchangesRoute,
  getExpRoute,
  getFloorRoute,
  getForexPairsRoute,
  getFundHoldersRoute,
  getFundsRoute,
  getGrowthEstimatesRoute,
  getHeikinashicandlesRoute,
  getHlc3Route,
  getHtDcperiodRoute,
  getHtDcphaseRoute,
  getHtPhasorRoute,
  getHtSineRoute,
  getHtTrendlineRoute,
  getHtTrendmodeRoute,
  getIchimokuRoute,
  getIncomeStatementConsolidatedRoute,
  getIncomeStatementRoute,
  getInsiderTransactionsRoute,
  getInstitutionalHoldersRoute,
  getInstrumentTypeRoute,
  getIntervalsRoute,
  getIpoCalendarRoute,
  getKamaRoute,
  getKeltnerRoute,
  getKeyExecutivesRoute,
  getKstRoute,
  getLastChangeEndpointRoute,
  getLinearregangleRoute,
  getLinearreginterceptRoute,
  getLinearregRoute,
  getLinearregslopeRoute,
  getLnRoute,
  getLog10Route,
  getLogoRoute,
  getMacdextRoute,
  getMacdRoute,
  getMacdSlopeRoute,
  getMamaRoute,
  getMarketCapRoute,
  getMarketMoversMarketRoute,
  getMarketStateRoute,
  getMaRoute,
  getMaxindexRoute,
  getMaxRoute,
  getMcginleyDynamicRoute,
  getMedpriceRoute,
  getMfiRoute,
  getMidpointRoute,
  getMidpriceRoute,
  getMinindexRoute,
  getMinmaxindexRoute,
  getMinmaxRoute,
  getMinRoute,
  getMinusDiRoute,
  getMinusDmRoute,
  getMomRoute,
  getMoneyMarketFundsListRoute,
  getMoneyMarketFundsWorldRoute,
  getMultRoute,
  getMutualFundsFamilyRoute,
  getMutualFundsListRoute,
  getMutualFundsTypeRoute,
  getMutualFundsWorldCompositionRoute,
  getMutualFundsWorldPerformanceRoute,
  getMutualFundsWorldPurchaseInfoRoute,
  getMutualFundsWorldRatingsRoute,
  getMutualFundsWorldRiskRoute,
  getMutualFundsWorldRoute,
  getMutualFundsWorldSummaryRoute,
  getMutualFundsWorldSustainabilityRoute,
  getNatrRoute,
  getObvRoute,
  getPercentBRoute,
  getPivotPointsHlRoute,
  getPlusDiRoute,
  getPlusDmRoute,
  getPpoRoute,
  getPressReleasesRoute,
  getPriceRoute,
  getPriceTargetRoute,
  getProfileRoute,
  getQuoteRoute,
  getRecommendationsRoute,
  getRevenueEstimateRoute,
  getRocpRoute,
  getRocr100Route,
  getRocRoute,
  getRocrRoute,
  getRsiRoute,
  getRvolRoute,
  getSanctionsSourceRoute,
  getSarextRoute,
  getSarRoute,
  getSmaRoute,
  getSplitsCalendarRoute,
  getSplitsRoute,
  getSqrtRoute,
  getStatisticsRoute,
  getStddevRoute,
  getStochfRoute,
  getStochRoute,
  getStochrsiRoute,
  getStocksRoute,
  getSubRoute,
  getSumRoute,
  getSupertrendHeikinashicandlesRoute,
  getSupertrendRoute,
  getSymbolSearchRoute,
  getT3maRoute,
  getTaxInfoRoute,
  getTechnicalIndicatorsRoute,
  getTemaRoute,
  getTimeSeriesCrossRoute,
  getTimeSeriesRoute,
  getTrangeRoute,
  getTrimaRoute,
  getTsfRoute,
  getTyppriceRoute,
  getUltoscRoute,
  getVarRoute,
  getVwapRoute,
  getWclpriceRoute,
  getWillrRoute,
  getWmaRoute,
  postBatchRoute,
} from './routes'
import {
  getAddRouteHandler,
  getAdoscRouteHandler,
  getAdRouteHandler,
  getAdxRouteHandler,
  getAdxrRouteHandler,
  getAnalystRatingsLightRouteHandler,
  getAnalystRatingsUsEquitiesRouteHandler,
  getApiUsageRouteHandler,
  getApoRouteHandler,
  getAroonoscRouteHandler,
  getAroonRouteHandler,
  getAtrRouteHandler,
  getAvgpriceRouteHandler,
  getAvgRouteHandler,
  getBalanceSheetConsolidatedRouteHandler,
  getBalanceSheetRouteHandler,
  getBbandsRouteHandler,
  getBetaRouteHandler,
  getBondsRouteHandler,
  getBopRouteHandler,
  getCashFlowConsolidatedRouteHandler,
  getCashFlowRouteHandler,
  getCciRouteHandler,
  getCeilRouteHandler,
  getCmoRouteHandler,
  getCommoditiesRouteHandler,
  getCoppockRouteHandler,
  getCorrelRouteHandler,
  getCountriesRouteHandler,
  getCrossListingsRouteHandler,
  getCrsiRouteHandler,
  getCryptocurrenciesRouteHandler,
  getCryptocurrencyExchangesRouteHandler,
  getCurrencyConversionRouteHandler,
  getDemaRouteHandler,
  getDirectHoldersRouteHandler,
  getDividendsCalendarRouteHandler,
  getDividendsRouteHandler,
  getDivRouteHandler,
  getDpoRouteHandler,
  getDxRouteHandler,
  getEarliestTimestampRouteHandler,
  getEarningsCalendarRouteHandler,
  getEarningsEstimateRouteHandler,
  getEarningsRouteHandler,
  getEdgarFilingsArchiveRouteHandler,
  getEmaRouteHandler,
  getEodRouteHandler,
  getEpsRevisionsRouteHandler,
  getEpsTrendRouteHandler,
  getEtfsFamilyRouteHandler,
  getEtfsListRouteHandler,
  getEtfsRouteHandler,
  getEtfsTypeRouteHandler,
  getEtfsWorldCompositionRouteHandler,
  getEtfsWorldPerformanceRouteHandler,
  getEtfsWorldRiskRouteHandler,
  getEtfsWorldRouteHandler,
  getEtfsWorldSummaryRouteHandler,
  getExchangeRateRouteHandler,
  getExchangeScheduleRouteHandler,
  getExchangesRouteHandler,
  getExpRouteHandler,
  getFloorRouteHandler,
  getForexPairsRouteHandler,
  getFundHoldersRouteHandler,
  getFundsRouteHandler,
  getGrowthEstimatesRouteHandler,
  getHeikinashicandlesRouteHandler,
  getHlc3RouteHandler,
  getHtDcperiodRouteHandler,
  getHtDcphaseRouteHandler,
  getHtPhasorRouteHandler,
  getHtSineRouteHandler,
  getHtTrendlineRouteHandler,
  getHtTrendmodeRouteHandler,
  getIchimokuRouteHandler,
  getIncomeStatementConsolidatedRouteHandler,
  getIncomeStatementRouteHandler,
  getInsiderTransactionsRouteHandler,
  getInstitutionalHoldersRouteHandler,
  getInstrumentTypeRouteHandler,
  getIntervalsRouteHandler,
  getIpoCalendarRouteHandler,
  getKamaRouteHandler,
  getKeltnerRouteHandler,
  getKeyExecutivesRouteHandler,
  getKstRouteHandler,
  getLastChangeEndpointRouteHandler,
  getLinearregangleRouteHandler,
  getLinearreginterceptRouteHandler,
  getLinearregRouteHandler,
  getLinearregslopeRouteHandler,
  getLnRouteHandler,
  getLog10RouteHandler,
  getLogoRouteHandler,
  getMacdextRouteHandler,
  getMacdRouteHandler,
  getMacdSlopeRouteHandler,
  getMamaRouteHandler,
  getMarketCapRouteHandler,
  getMarketMoversMarketRouteHandler,
  getMarketStateRouteHandler,
  getMaRouteHandler,
  getMaxindexRouteHandler,
  getMaxRouteHandler,
  getMcginleyDynamicRouteHandler,
  getMedpriceRouteHandler,
  getMfiRouteHandler,
  getMidpointRouteHandler,
  getMidpriceRouteHandler,
  getMinindexRouteHandler,
  getMinmaxindexRouteHandler,
  getMinmaxRouteHandler,
  getMinRouteHandler,
  getMinusDiRouteHandler,
  getMinusDmRouteHandler,
  getMomRouteHandler,
  getMoneyMarketFundsListRouteHandler,
  getMoneyMarketFundsWorldRouteHandler,
  getMultRouteHandler,
  getMutualFundsFamilyRouteHandler,
  getMutualFundsListRouteHandler,
  getMutualFundsTypeRouteHandler,
  getMutualFundsWorldCompositionRouteHandler,
  getMutualFundsWorldPerformanceRouteHandler,
  getMutualFundsWorldPurchaseInfoRouteHandler,
  getMutualFundsWorldRatingsRouteHandler,
  getMutualFundsWorldRiskRouteHandler,
  getMutualFundsWorldRouteHandler,
  getMutualFundsWorldSummaryRouteHandler,
  getMutualFundsWorldSustainabilityRouteHandler,
  getNatrRouteHandler,
  getObvRouteHandler,
  getPercentBRouteHandler,
  getPivotPointsHlRouteHandler,
  getPlusDiRouteHandler,
  getPlusDmRouteHandler,
  getPpoRouteHandler,
  getPressReleasesRouteHandler,
  getPriceRouteHandler,
  getPriceTargetRouteHandler,
  getProfileRouteHandler,
  getQuoteRouteHandler,
  getRecommendationsRouteHandler,
  getRevenueEstimateRouteHandler,
  getRocpRouteHandler,
  getRocr100RouteHandler,
  getRocRouteHandler,
  getRocrRouteHandler,
  getRsiRouteHandler,
  getRvolRouteHandler,
  getSanctionsSourceRouteHandler,
  getSarextRouteHandler,
  getSarRouteHandler,
  getSmaRouteHandler,
  getSplitsCalendarRouteHandler,
  getSplitsRouteHandler,
  getSqrtRouteHandler,
  getStatisticsRouteHandler,
  getStddevRouteHandler,
  getStochfRouteHandler,
  getStochRouteHandler,
  getStochrsiRouteHandler,
  getStocksRouteHandler,
  getSubRouteHandler,
  getSumRouteHandler,
  getSupertrendHeikinashicandlesRouteHandler,
  getSupertrendRouteHandler,
  getSymbolSearchRouteHandler,
  getT3maRouteHandler,
  getTaxInfoRouteHandler,
  getTechnicalIndicatorsRouteHandler,
  getTemaRouteHandler,
  getTimeSeriesCrossRouteHandler,
  getTimeSeriesRouteHandler,
  getTrangeRouteHandler,
  getTrimaRouteHandler,
  getTsfRouteHandler,
  getTyppriceRouteHandler,
  getUltoscRouteHandler,
  getVarRouteHandler,
  getVwapRouteHandler,
  getWclpriceRouteHandler,
  getWillrRouteHandler,
  getWmaRouteHandler,
  postBatchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdRoute, getAdRouteHandler)
  .openapi(getAddRoute, getAddRouteHandler)
  .openapi(getAdoscRoute, getAdoscRouteHandler)
  .openapi(getAdxRoute, getAdxRouteHandler)
  .openapi(getAdxrRoute, getAdxrRouteHandler)
  .openapi(getAnalystRatingsLightRoute, getAnalystRatingsLightRouteHandler)
  .openapi(getAnalystRatingsUsEquitiesRoute, getAnalystRatingsUsEquitiesRouteHandler)
  .openapi(getApiUsageRoute, getApiUsageRouteHandler)
  .openapi(getApoRoute, getApoRouteHandler)
  .openapi(getAroonRoute, getAroonRouteHandler)
  .openapi(getAroonoscRoute, getAroonoscRouteHandler)
  .openapi(getAtrRoute, getAtrRouteHandler)
  .openapi(getAvgRoute, getAvgRouteHandler)
  .openapi(getAvgpriceRoute, getAvgpriceRouteHandler)
  .openapi(getBalanceSheetRoute, getBalanceSheetRouteHandler)
  .openapi(getBalanceSheetConsolidatedRoute, getBalanceSheetConsolidatedRouteHandler)
  .openapi(postBatchRoute, postBatchRouteHandler)
  .openapi(getBbandsRoute, getBbandsRouteHandler)
  .openapi(getBetaRoute, getBetaRouteHandler)
  .openapi(getBondsRoute, getBondsRouteHandler)
  .openapi(getBopRoute, getBopRouteHandler)
  .openapi(getCashFlowRoute, getCashFlowRouteHandler)
  .openapi(getCashFlowConsolidatedRoute, getCashFlowConsolidatedRouteHandler)
  .openapi(getCciRoute, getCciRouteHandler)
  .openapi(getCeilRoute, getCeilRouteHandler)
  .openapi(getCmoRoute, getCmoRouteHandler)
  .openapi(getCommoditiesRoute, getCommoditiesRouteHandler)
  .openapi(getCoppockRoute, getCoppockRouteHandler)
  .openapi(getCorrelRoute, getCorrelRouteHandler)
  .openapi(getCountriesRoute, getCountriesRouteHandler)
  .openapi(getCrossListingsRoute, getCrossListingsRouteHandler)
  .openapi(getCrsiRoute, getCrsiRouteHandler)
  .openapi(getCryptocurrenciesRoute, getCryptocurrenciesRouteHandler)
  .openapi(getCryptocurrencyExchangesRoute, getCryptocurrencyExchangesRouteHandler)
  .openapi(getCurrencyConversionRoute, getCurrencyConversionRouteHandler)
  .openapi(getDemaRoute, getDemaRouteHandler)
  .openapi(getDirectHoldersRoute, getDirectHoldersRouteHandler)
  .openapi(getDivRoute, getDivRouteHandler)
  .openapi(getDividendsRoute, getDividendsRouteHandler)
  .openapi(getDividendsCalendarRoute, getDividendsCalendarRouteHandler)
  .openapi(getDpoRoute, getDpoRouteHandler)
  .openapi(getDxRoute, getDxRouteHandler)
  .openapi(getEarliestTimestampRoute, getEarliestTimestampRouteHandler)
  .openapi(getEarningsRoute, getEarningsRouteHandler)
  .openapi(getEarningsCalendarRoute, getEarningsCalendarRouteHandler)
  .openapi(getEarningsEstimateRoute, getEarningsEstimateRouteHandler)
  .openapi(getEdgarFilingsArchiveRoute, getEdgarFilingsArchiveRouteHandler)
  .openapi(getEmaRoute, getEmaRouteHandler)
  .openapi(getEodRoute, getEodRouteHandler)
  .openapi(getEpsRevisionsRoute, getEpsRevisionsRouteHandler)
  .openapi(getEpsTrendRoute, getEpsTrendRouteHandler)
  .openapi(getEtfsRoute, getEtfsRouteHandler)
  .openapi(getEtfsFamilyRoute, getEtfsFamilyRouteHandler)
  .openapi(getEtfsListRoute, getEtfsListRouteHandler)
  .openapi(getEtfsTypeRoute, getEtfsTypeRouteHandler)
  .openapi(getEtfsWorldRoute, getEtfsWorldRouteHandler)
  .openapi(getEtfsWorldCompositionRoute, getEtfsWorldCompositionRouteHandler)
  .openapi(getEtfsWorldPerformanceRoute, getEtfsWorldPerformanceRouteHandler)
  .openapi(getEtfsWorldRiskRoute, getEtfsWorldRiskRouteHandler)
  .openapi(getEtfsWorldSummaryRoute, getEtfsWorldSummaryRouteHandler)
  .openapi(getExchangeRateRoute, getExchangeRateRouteHandler)
  .openapi(getExchangeScheduleRoute, getExchangeScheduleRouteHandler)
  .openapi(getExchangesRoute, getExchangesRouteHandler)
  .openapi(getExpRoute, getExpRouteHandler)
  .openapi(getFloorRoute, getFloorRouteHandler)
  .openapi(getForexPairsRoute, getForexPairsRouteHandler)
  .openapi(getFundHoldersRoute, getFundHoldersRouteHandler)
  .openapi(getFundsRoute, getFundsRouteHandler)
  .openapi(getGrowthEstimatesRoute, getGrowthEstimatesRouteHandler)
  .openapi(getHeikinashicandlesRoute, getHeikinashicandlesRouteHandler)
  .openapi(getHlc3Route, getHlc3RouteHandler)
  .openapi(getHtDcperiodRoute, getHtDcperiodRouteHandler)
  .openapi(getHtDcphaseRoute, getHtDcphaseRouteHandler)
  .openapi(getHtPhasorRoute, getHtPhasorRouteHandler)
  .openapi(getHtSineRoute, getHtSineRouteHandler)
  .openapi(getHtTrendlineRoute, getHtTrendlineRouteHandler)
  .openapi(getHtTrendmodeRoute, getHtTrendmodeRouteHandler)
  .openapi(getIchimokuRoute, getIchimokuRouteHandler)
  .openapi(getIncomeStatementRoute, getIncomeStatementRouteHandler)
  .openapi(getIncomeStatementConsolidatedRoute, getIncomeStatementConsolidatedRouteHandler)
  .openapi(getInsiderTransactionsRoute, getInsiderTransactionsRouteHandler)
  .openapi(getInstitutionalHoldersRoute, getInstitutionalHoldersRouteHandler)
  .openapi(getInstrumentTypeRoute, getInstrumentTypeRouteHandler)
  .openapi(getIntervalsRoute, getIntervalsRouteHandler)
  .openapi(getIpoCalendarRoute, getIpoCalendarRouteHandler)
  .openapi(getKamaRoute, getKamaRouteHandler)
  .openapi(getKeltnerRoute, getKeltnerRouteHandler)
  .openapi(getKeyExecutivesRoute, getKeyExecutivesRouteHandler)
  .openapi(getKstRoute, getKstRouteHandler)
  .openapi(getLastChangeEndpointRoute, getLastChangeEndpointRouteHandler)
  .openapi(getLinearregRoute, getLinearregRouteHandler)
  .openapi(getLinearregangleRoute, getLinearregangleRouteHandler)
  .openapi(getLinearreginterceptRoute, getLinearreginterceptRouteHandler)
  .openapi(getLinearregslopeRoute, getLinearregslopeRouteHandler)
  .openapi(getLnRoute, getLnRouteHandler)
  .openapi(getLog10Route, getLog10RouteHandler)
  .openapi(getLogoRoute, getLogoRouteHandler)
  .openapi(getMaRoute, getMaRouteHandler)
  .openapi(getMacdRoute, getMacdRouteHandler)
  .openapi(getMacdSlopeRoute, getMacdSlopeRouteHandler)
  .openapi(getMacdextRoute, getMacdextRouteHandler)
  .openapi(getMamaRoute, getMamaRouteHandler)
  .openapi(getMarketCapRoute, getMarketCapRouteHandler)
  .openapi(getMarketMoversMarketRoute, getMarketMoversMarketRouteHandler)
  .openapi(getMarketStateRoute, getMarketStateRouteHandler)
  .openapi(getMaxRoute, getMaxRouteHandler)
  .openapi(getMaxindexRoute, getMaxindexRouteHandler)
  .openapi(getMcginleyDynamicRoute, getMcginleyDynamicRouteHandler)
  .openapi(getMedpriceRoute, getMedpriceRouteHandler)
  .openapi(getMfiRoute, getMfiRouteHandler)
  .openapi(getMidpointRoute, getMidpointRouteHandler)
  .openapi(getMidpriceRoute, getMidpriceRouteHandler)
  .openapi(getMinRoute, getMinRouteHandler)
  .openapi(getMinindexRoute, getMinindexRouteHandler)
  .openapi(getMinmaxRoute, getMinmaxRouteHandler)
  .openapi(getMinmaxindexRoute, getMinmaxindexRouteHandler)
  .openapi(getMinusDiRoute, getMinusDiRouteHandler)
  .openapi(getMinusDmRoute, getMinusDmRouteHandler)
  .openapi(getMomRoute, getMomRouteHandler)
  .openapi(getMoneyMarketFundsListRoute, getMoneyMarketFundsListRouteHandler)
  .openapi(getMoneyMarketFundsWorldRoute, getMoneyMarketFundsWorldRouteHandler)
  .openapi(getMultRoute, getMultRouteHandler)
  .openapi(getMutualFundsFamilyRoute, getMutualFundsFamilyRouteHandler)
  .openapi(getMutualFundsListRoute, getMutualFundsListRouteHandler)
  .openapi(getMutualFundsTypeRoute, getMutualFundsTypeRouteHandler)
  .openapi(getMutualFundsWorldRoute, getMutualFundsWorldRouteHandler)
  .openapi(getMutualFundsWorldCompositionRoute, getMutualFundsWorldCompositionRouteHandler)
  .openapi(getMutualFundsWorldPerformanceRoute, getMutualFundsWorldPerformanceRouteHandler)
  .openapi(getMutualFundsWorldPurchaseInfoRoute, getMutualFundsWorldPurchaseInfoRouteHandler)
  .openapi(getMutualFundsWorldRatingsRoute, getMutualFundsWorldRatingsRouteHandler)
  .openapi(getMutualFundsWorldRiskRoute, getMutualFundsWorldRiskRouteHandler)
  .openapi(getMutualFundsWorldSummaryRoute, getMutualFundsWorldSummaryRouteHandler)
  .openapi(getMutualFundsWorldSustainabilityRoute, getMutualFundsWorldSustainabilityRouteHandler)
  .openapi(getNatrRoute, getNatrRouteHandler)
  .openapi(getObvRoute, getObvRouteHandler)
  .openapi(getPercentBRoute, getPercentBRouteHandler)
  .openapi(getPivotPointsHlRoute, getPivotPointsHlRouteHandler)
  .openapi(getPlusDiRoute, getPlusDiRouteHandler)
  .openapi(getPlusDmRoute, getPlusDmRouteHandler)
  .openapi(getPpoRoute, getPpoRouteHandler)
  .openapi(getPressReleasesRoute, getPressReleasesRouteHandler)
  .openapi(getPriceRoute, getPriceRouteHandler)
  .openapi(getPriceTargetRoute, getPriceTargetRouteHandler)
  .openapi(getProfileRoute, getProfileRouteHandler)
  .openapi(getQuoteRoute, getQuoteRouteHandler)
  .openapi(getRecommendationsRoute, getRecommendationsRouteHandler)
  .openapi(getRevenueEstimateRoute, getRevenueEstimateRouteHandler)
  .openapi(getRocRoute, getRocRouteHandler)
  .openapi(getRocpRoute, getRocpRouteHandler)
  .openapi(getRocrRoute, getRocrRouteHandler)
  .openapi(getRocr100Route, getRocr100RouteHandler)
  .openapi(getRsiRoute, getRsiRouteHandler)
  .openapi(getRvolRoute, getRvolRouteHandler)
  .openapi(getSanctionsSourceRoute, getSanctionsSourceRouteHandler)
  .openapi(getSarRoute, getSarRouteHandler)
  .openapi(getSarextRoute, getSarextRouteHandler)
  .openapi(getSmaRoute, getSmaRouteHandler)
  .openapi(getSplitsRoute, getSplitsRouteHandler)
  .openapi(getSplitsCalendarRoute, getSplitsCalendarRouteHandler)
  .openapi(getSqrtRoute, getSqrtRouteHandler)
  .openapi(getStatisticsRoute, getStatisticsRouteHandler)
  .openapi(getStddevRoute, getStddevRouteHandler)
  .openapi(getStochRoute, getStochRouteHandler)
  .openapi(getStochfRoute, getStochfRouteHandler)
  .openapi(getStochrsiRoute, getStochrsiRouteHandler)
  .openapi(getStocksRoute, getStocksRouteHandler)
  .openapi(getSubRoute, getSubRouteHandler)
  .openapi(getSumRoute, getSumRouteHandler)
  .openapi(getSupertrendRoute, getSupertrendRouteHandler)
  .openapi(getSupertrendHeikinashicandlesRoute, getSupertrendHeikinashicandlesRouteHandler)
  .openapi(getSymbolSearchRoute, getSymbolSearchRouteHandler)
  .openapi(getT3maRoute, getT3maRouteHandler)
  .openapi(getTaxInfoRoute, getTaxInfoRouteHandler)
  .openapi(getTechnicalIndicatorsRoute, getTechnicalIndicatorsRouteHandler)
  .openapi(getTemaRoute, getTemaRouteHandler)
  .openapi(getTimeSeriesRoute, getTimeSeriesRouteHandler)
  .openapi(getTimeSeriesCrossRoute, getTimeSeriesCrossRouteHandler)
  .openapi(getTrangeRoute, getTrangeRouteHandler)
  .openapi(getTrimaRoute, getTrimaRouteHandler)
  .openapi(getTsfRoute, getTsfRouteHandler)
  .openapi(getTyppriceRoute, getTyppriceRouteHandler)
  .openapi(getUltoscRoute, getUltoscRouteHandler)
  .openapi(getVarRoute, getVarRouteHandler)
  .openapi(getVwapRoute, getVwapRouteHandler)
  .openapi(getWclpriceRoute, getWclpriceRouteHandler)
  .openapi(getWillrRoute, getWillrRouteHandler)
  .openapi(getWmaRoute, getWmaRouteHandler)

export default app
