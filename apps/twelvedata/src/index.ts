import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addHandler,
  adHandler,
  adoscHandler,
  adxHandler,
  adxrHandler,
  analystRatingsHandler,
  apiUsageHandler,
  apoHandler,
  aroonHandler,
  aroonoscHandler,
  atrHandler,
  avgHandler,
  avgpriceHandler,
  balanceSheetHandler,
  batchHandler,
  bbandsHandler,
  betaHandler,
  bondsHandler,
  bopHandler,
  cashFlowHandler,
  cciHandler,
  ceilHandler,
  cmoHandler,
  commoditiesHandler,
  coppockHandler,
  correlHandler,
  countriesHandler,
  crossListingsHandler,
  crsiHandler,
  cryptocurrenciesHandler,
  cryptocurrencyExchangesHandler,
  currencyConversionHandler,
  demaHandler,
  directHoldersHandler,
  divHandler,
  dividendsCalendarHandler,
  dividendsHandler,
  dpoHandler,
  dxHandler,
  earliestTimestampHandler,
  earningsCalendarHandler,
  earningsEstimateHandler,
  earningsHandler,
  edgarFilingsHandler,
  emaHandler,
  eodHandler,
  epsRevisionsHandler,
  epsTrendHandler,
  etfsHandler,
  exchangeRateHandler,
  exchangeScheduleHandler,
  exchangesHandler,
  expHandler,
  floorHandler,
  forexPairsHandler,
  fundHoldersHandler,
  fundsHandler,
  growthEstimatesHandler,
  heikinashicandlesHandler,
  hlc3Handler,
  htDcperiodHandler,
  htDcphaseHandler,
  htPhasorHandler,
  htSineHandler,
  htTrendlineHandler,
  htTrendmodeHandler,
  ichimokuHandler,
  incomeStatementHandler,
  insiderTransactionsHandler,
  institutionalHoldersHandler,
  instrumentTypeHandler,
  intervalsHandler,
  ipoCalendarHandler,
  kamaHandler,
  keltnerHandler,
  keyExecutivesHandler,
  kstHandler,
  lastChangeHandler,
  linearregangleHandler,
  linearregHandler,
  linearreginterceptHandler,
  linearregslopeHandler,
  lnHandler,
  log10Handler,
  logoHandler,
  macdextHandler,
  macdHandler,
  macdSlopeHandler,
  maHandler,
  mamaHandler,
  marketCapHandler,
  marketMoversHandler,
  marketStateHandler,
  maxHandler,
  maxindexHandler,
  mcginleyDynamicHandler,
  medpriceHandler,
  mfiHandler,
  midpointHandler,
  midpriceHandler,
  minHandler,
  minindexHandler,
  minmaxHandler,
  minmaxindexHandler,
  minusDiHandler,
  minusDmHandler,
  momHandler,
  moneyMarketFundsHandler,
  multHandler,
  mutualFundsHandler,
  natrHandler,
  obvHandler,
  percentBHandler,
  pivotPointsHlHandler,
  plusDiHandler,
  plusDmHandler,
  ppoHandler,
  pressReleasesHandler,
  priceHandler,
  priceTargetHandler,
  profileHandler,
  quoteHandler,
  recommendationsHandler,
  revenueEstimateHandler,
  rocHandler,
  rocpHandler,
  rocr100Handler,
  rocrHandler,
  rsiHandler,
  rvolHandler,
  sanctionsHandler,
  sarextHandler,
  sarHandler,
  smaHandler,
  splitsCalendarHandler,
  splitsHandler,
  sqrtHandler,
  statisticsHandler,
  stddevHandler,
  stochfHandler,
  stochHandler,
  stochrsiHandler,
  stocksHandler,
  subHandler,
  sumHandler,
  supertrendHandler,
  supertrendHeikinashicandlesHandler,
  symbolSearchHandler,
  t3maHandler,
  taxInfoHandler,
  technicalIndicatorsHandler,
  temaHandler,
  timeSeriesHandler,
  trangeHandler,
  trimaHandler,
  tsfHandler,
  typpriceHandler,
  ultoscHandler,
  varHandler,
  vwapHandler,
  wclpriceHandler,
  willrHandler,
  wmaHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adHandler)
  .route('/', addHandler)
  .route('/', adoscHandler)
  .route('/', adxHandler)
  .route('/', adxrHandler)
  .route('/', analystRatingsHandler)
  .route('/', apiUsageHandler)
  .route('/', apoHandler)
  .route('/', aroonHandler)
  .route('/', aroonoscHandler)
  .route('/', atrHandler)
  .route('/', avgHandler)
  .route('/', avgpriceHandler)
  .route('/', balanceSheetHandler)
  .route('/', batchHandler)
  .route('/', bbandsHandler)
  .route('/', betaHandler)
  .route('/', bondsHandler)
  .route('/', bopHandler)
  .route('/', cashFlowHandler)
  .route('/', cciHandler)
  .route('/', ceilHandler)
  .route('/', cmoHandler)
  .route('/', commoditiesHandler)
  .route('/', coppockHandler)
  .route('/', correlHandler)
  .route('/', countriesHandler)
  .route('/', crossListingsHandler)
  .route('/', crsiHandler)
  .route('/', cryptocurrenciesHandler)
  .route('/', cryptocurrencyExchangesHandler)
  .route('/', currencyConversionHandler)
  .route('/', demaHandler)
  .route('/', directHoldersHandler)
  .route('/', divHandler)
  .route('/', dividendsHandler)
  .route('/', dividendsCalendarHandler)
  .route('/', dpoHandler)
  .route('/', dxHandler)
  .route('/', earliestTimestampHandler)
  .route('/', earningsHandler)
  .route('/', earningsCalendarHandler)
  .route('/', earningsEstimateHandler)
  .route('/', edgarFilingsHandler)
  .route('/', emaHandler)
  .route('/', eodHandler)
  .route('/', epsRevisionsHandler)
  .route('/', epsTrendHandler)
  .route('/', etfsHandler)
  .route('/', exchangeRateHandler)
  .route('/', exchangeScheduleHandler)
  .route('/', exchangesHandler)
  .route('/', expHandler)
  .route('/', floorHandler)
  .route('/', forexPairsHandler)
  .route('/', fundHoldersHandler)
  .route('/', fundsHandler)
  .route('/', growthEstimatesHandler)
  .route('/', heikinashicandlesHandler)
  .route('/', hlc3Handler)
  .route('/', htDcperiodHandler)
  .route('/', htDcphaseHandler)
  .route('/', htPhasorHandler)
  .route('/', htSineHandler)
  .route('/', htTrendlineHandler)
  .route('/', htTrendmodeHandler)
  .route('/', ichimokuHandler)
  .route('/', incomeStatementHandler)
  .route('/', insiderTransactionsHandler)
  .route('/', institutionalHoldersHandler)
  .route('/', instrumentTypeHandler)
  .route('/', intervalsHandler)
  .route('/', ipoCalendarHandler)
  .route('/', kamaHandler)
  .route('/', keltnerHandler)
  .route('/', keyExecutivesHandler)
  .route('/', kstHandler)
  .route('/', lastChangeHandler)
  .route('/', linearregHandler)
  .route('/', linearregangleHandler)
  .route('/', linearreginterceptHandler)
  .route('/', linearregslopeHandler)
  .route('/', lnHandler)
  .route('/', log10Handler)
  .route('/', logoHandler)
  .route('/', maHandler)
  .route('/', macdHandler)
  .route('/', macdSlopeHandler)
  .route('/', macdextHandler)
  .route('/', mamaHandler)
  .route('/', marketCapHandler)
  .route('/', marketMoversHandler)
  .route('/', marketStateHandler)
  .route('/', maxHandler)
  .route('/', maxindexHandler)
  .route('/', mcginleyDynamicHandler)
  .route('/', medpriceHandler)
  .route('/', mfiHandler)
  .route('/', midpointHandler)
  .route('/', midpriceHandler)
  .route('/', minHandler)
  .route('/', minindexHandler)
  .route('/', minmaxHandler)
  .route('/', minmaxindexHandler)
  .route('/', minusDiHandler)
  .route('/', minusDmHandler)
  .route('/', momHandler)
  .route('/', moneyMarketFundsHandler)
  .route('/', multHandler)
  .route('/', mutualFundsHandler)
  .route('/', natrHandler)
  .route('/', obvHandler)
  .route('/', percentBHandler)
  .route('/', pivotPointsHlHandler)
  .route('/', plusDiHandler)
  .route('/', plusDmHandler)
  .route('/', ppoHandler)
  .route('/', pressReleasesHandler)
  .route('/', priceHandler)
  .route('/', priceTargetHandler)
  .route('/', profileHandler)
  .route('/', quoteHandler)
  .route('/', recommendationsHandler)
  .route('/', revenueEstimateHandler)
  .route('/', rocHandler)
  .route('/', rocpHandler)
  .route('/', rocrHandler)
  .route('/', rocr100Handler)
  .route('/', rsiHandler)
  .route('/', rvolHandler)
  .route('/', sanctionsHandler)
  .route('/', sarHandler)
  .route('/', sarextHandler)
  .route('/', smaHandler)
  .route('/', splitsHandler)
  .route('/', splitsCalendarHandler)
  .route('/', sqrtHandler)
  .route('/', statisticsHandler)
  .route('/', stddevHandler)
  .route('/', stochHandler)
  .route('/', stochfHandler)
  .route('/', stochrsiHandler)
  .route('/', stocksHandler)
  .route('/', subHandler)
  .route('/', sumHandler)
  .route('/', supertrendHandler)
  .route('/', supertrendHeikinashicandlesHandler)
  .route('/', symbolSearchHandler)
  .route('/', t3maHandler)
  .route('/', taxInfoHandler)
  .route('/', technicalIndicatorsHandler)
  .route('/', temaHandler)
  .route('/', timeSeriesHandler)
  .route('/', trangeHandler)
  .route('/', trimaHandler)
  .route('/', tsfHandler)
  .route('/', typpriceHandler)
  .route('/', ultoscHandler)
  .route('/', varHandler)
  .route('/', vwapHandler)
  .route('/', wclpriceHandler)
  .route('/', willrHandler)
  .route('/', wmaHandler)

export default app
