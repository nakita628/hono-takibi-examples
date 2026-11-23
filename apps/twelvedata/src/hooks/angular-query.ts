import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdKey() {
  return ['ad'] as const
}

export function getAddKey() {
  return ['add'] as const
}

export function getAdoscKey() {
  return ['adosc'] as const
}

export function getAdxKey() {
  return ['adx'] as const
}

export function getAdxrKey() {
  return ['adxr'] as const
}

export function getAnalystRatingsKey() {
  return ['analyst_ratings'] as const
}

export function getApiUsageKey() {
  return ['api_usage'] as const
}

export function getApoKey() {
  return ['apo'] as const
}

export function getAroonKey() {
  return ['aroon'] as const
}

export function getAroonoscKey() {
  return ['aroonosc'] as const
}

export function getAtrKey() {
  return ['atr'] as const
}

export function getAvgKey() {
  return ['avg'] as const
}

export function getAvgpriceKey() {
  return ['avgprice'] as const
}

export function getBalanceSheetKey() {
  return ['balance_sheet'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBbandsKey() {
  return ['bbands'] as const
}

export function getBetaKey() {
  return ['beta'] as const
}

export function getBondsKey() {
  return ['bonds'] as const
}

export function getBopKey() {
  return ['bop'] as const
}

export function getCashFlowKey() {
  return ['cash_flow'] as const
}

export function getCciKey() {
  return ['cci'] as const
}

export function getCeilKey() {
  return ['ceil'] as const
}

export function getCmoKey() {
  return ['cmo'] as const
}

export function getCommoditiesKey() {
  return ['commodities'] as const
}

export function getCoppockKey() {
  return ['coppock'] as const
}

export function getCorrelKey() {
  return ['correl'] as const
}

export function getCountriesKey() {
  return ['countries'] as const
}

export function getCrossListingsKey() {
  return ['cross_listings'] as const
}

export function getCrsiKey() {
  return ['crsi'] as const
}

export function getCryptocurrenciesKey() {
  return ['cryptocurrencies'] as const
}

export function getCryptocurrencyExchangesKey() {
  return ['cryptocurrency_exchanges'] as const
}

export function getCurrencyConversionKey() {
  return ['currency_conversion'] as const
}

export function getDemaKey() {
  return ['dema'] as const
}

export function getDirectHoldersKey() {
  return ['direct_holders'] as const
}

export function getDivKey() {
  return ['div'] as const
}

export function getDividendsKey() {
  return ['dividends'] as const
}

export function getDividendsCalendarKey() {
  return ['dividends_calendar'] as const
}

export function getDpoKey() {
  return ['dpo'] as const
}

export function getDxKey() {
  return ['dx'] as const
}

export function getEarliestTimestampKey() {
  return ['earliest_timestamp'] as const
}

export function getEarningsKey() {
  return ['earnings'] as const
}

export function getEarningsCalendarKey() {
  return ['earnings_calendar'] as const
}

export function getEarningsEstimateKey() {
  return ['earnings_estimate'] as const
}

export function getEdgarFilingsKey() {
  return ['edgar_filings'] as const
}

export function getEmaKey() {
  return ['ema'] as const
}

export function getEodKey() {
  return ['eod'] as const
}

export function getEpsRevisionsKey() {
  return ['eps_revisions'] as const
}

export function getEpsTrendKey() {
  return ['eps_trend'] as const
}

export function getEtfsKey() {
  return ['etfs'] as const
}

export function getExchangeRateKey() {
  return ['exchange_rate'] as const
}

export function getExchangeScheduleKey() {
  return ['exchange_schedule'] as const
}

export function getExchangesKey() {
  return ['exchanges'] as const
}

export function getExpKey() {
  return ['exp'] as const
}

export function getFloorKey() {
  return ['floor'] as const
}

export function getForexPairsKey() {
  return ['forex_pairs'] as const
}

export function getFundHoldersKey() {
  return ['fund_holders'] as const
}

export function getFundsKey() {
  return ['funds'] as const
}

export function getGrowthEstimatesKey() {
  return ['growth_estimates'] as const
}

export function getHeikinashicandlesKey() {
  return ['heikinashicandles'] as const
}

export function getHlc3Key() {
  return ['hlc3'] as const
}

export function getHtDcperiodKey() {
  return ['ht_dcperiod'] as const
}

export function getHtDcphaseKey() {
  return ['ht_dcphase'] as const
}

export function getHtPhasorKey() {
  return ['ht_phasor'] as const
}

export function getHtSineKey() {
  return ['ht_sine'] as const
}

export function getHtTrendlineKey() {
  return ['ht_trendline'] as const
}

export function getHtTrendmodeKey() {
  return ['ht_trendmode'] as const
}

export function getIchimokuKey() {
  return ['ichimoku'] as const
}

export function getIncomeStatementKey() {
  return ['income_statement'] as const
}

export function getInsiderTransactionsKey() {
  return ['insider_transactions'] as const
}

export function getInstitutionalHoldersKey() {
  return ['institutional_holders'] as const
}

export function getInstrumentTypeKey() {
  return ['instrument_type'] as const
}

export function getIntervalsKey() {
  return ['intervals'] as const
}

export function getIpoCalendarKey() {
  return ['ipo_calendar'] as const
}

export function getKamaKey() {
  return ['kama'] as const
}

export function getKeltnerKey() {
  return ['keltner'] as const
}

export function getKeyExecutivesKey() {
  return ['key_executives'] as const
}

export function getKstKey() {
  return ['kst'] as const
}

export function getLastChangeKey() {
  return ['last_change'] as const
}

export function getLinearregKey() {
  return ['linearreg'] as const
}

export function getLinearregangleKey() {
  return ['linearregangle'] as const
}

export function getLinearreginterceptKey() {
  return ['linearregintercept'] as const
}

export function getLinearregslopeKey() {
  return ['linearregslope'] as const
}

export function getLnKey() {
  return ['ln'] as const
}

export function getLog10Key() {
  return ['log10'] as const
}

export function getLogoKey() {
  return ['logo'] as const
}

export function getMaKey() {
  return ['ma'] as const
}

export function getMacdKey() {
  return ['macd'] as const
}

export function getMacdSlopeKey() {
  return ['macd_slope'] as const
}

export function getMacdextKey() {
  return ['macdext'] as const
}

export function getMamaKey() {
  return ['mama'] as const
}

export function getMarketCapKey() {
  return ['market_cap'] as const
}

export function getMarketMoversKey() {
  return ['market_movers'] as const
}

export function getMarketStateKey() {
  return ['market_state'] as const
}

export function getMaxKey() {
  return ['max'] as const
}

export function getMaxindexKey() {
  return ['maxindex'] as const
}

export function getMcginleyDynamicKey() {
  return ['mcginley_dynamic'] as const
}

export function getMedpriceKey() {
  return ['medprice'] as const
}

export function getMfiKey() {
  return ['mfi'] as const
}

export function getMidpointKey() {
  return ['midpoint'] as const
}

export function getMidpriceKey() {
  return ['midprice'] as const
}

export function getMinKey() {
  return ['min'] as const
}

export function getMinindexKey() {
  return ['minindex'] as const
}

export function getMinmaxKey() {
  return ['minmax'] as const
}

export function getMinmaxindexKey() {
  return ['minmaxindex'] as const
}

export function getMinusDiKey() {
  return ['minus_di'] as const
}

export function getMinusDmKey() {
  return ['minus_dm'] as const
}

export function getMomKey() {
  return ['mom'] as const
}

export function getMoneyMarketFundsKey() {
  return ['money_market_funds'] as const
}

export function getMultKey() {
  return ['mult'] as const
}

export function getMutualFundsKey() {
  return ['mutual_funds'] as const
}

export function getNatrKey() {
  return ['natr'] as const
}

export function getObvKey() {
  return ['obv'] as const
}

export function getPercentBKey() {
  return ['percent_b'] as const
}

export function getPivotPointsHlKey() {
  return ['pivot_points_hl'] as const
}

export function getPlusDiKey() {
  return ['plus_di'] as const
}

export function getPlusDmKey() {
  return ['plus_dm'] as const
}

export function getPpoKey() {
  return ['ppo'] as const
}

export function getPressReleasesKey() {
  return ['press_releases'] as const
}

export function getPriceKey() {
  return ['price'] as const
}

export function getPriceTargetKey() {
  return ['price_target'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getQuoteKey() {
  return ['quote'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getRevenueEstimateKey() {
  return ['revenue_estimate'] as const
}

export function getRocKey() {
  return ['roc'] as const
}

export function getRocpKey() {
  return ['rocp'] as const
}

export function getRocrKey() {
  return ['rocr'] as const
}

export function getRocr100Key() {
  return ['rocr100'] as const
}

export function getRsiKey() {
  return ['rsi'] as const
}

export function getRvolKey() {
  return ['rvol'] as const
}

export function getSanctionsKey() {
  return ['sanctions'] as const
}

export function getSarKey() {
  return ['sar'] as const
}

export function getSarextKey() {
  return ['sarext'] as const
}

export function getSmaKey() {
  return ['sma'] as const
}

export function getSplitsKey() {
  return ['splits'] as const
}

export function getSplitsCalendarKey() {
  return ['splits_calendar'] as const
}

export function getSqrtKey() {
  return ['sqrt'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getStddevKey() {
  return ['stddev'] as const
}

export function getStochKey() {
  return ['stoch'] as const
}

export function getStochfKey() {
  return ['stochf'] as const
}

export function getStochrsiKey() {
  return ['stochrsi'] as const
}

export function getStocksKey() {
  return ['stocks'] as const
}

export function getSubKey() {
  return ['sub'] as const
}

export function getSumKey() {
  return ['sum'] as const
}

export function getSupertrendKey() {
  return ['supertrend'] as const
}

export function getSupertrendHeikinashicandlesKey() {
  return ['supertrend_heikinashicandles'] as const
}

export function getSymbolSearchKey() {
  return ['symbol_search'] as const
}

export function getT3maKey() {
  return ['t3ma'] as const
}

export function getTaxInfoKey() {
  return ['tax_info'] as const
}

export function getTechnicalIndicatorsKey() {
  return ['technical_indicators'] as const
}

export function getTemaKey() {
  return ['tema'] as const
}

export function getTimeSeriesKey() {
  return ['time_series'] as const
}

export function getTrangeKey() {
  return ['trange'] as const
}

export function getTrimaKey() {
  return ['trima'] as const
}

export function getTsfKey() {
  return ['tsf'] as const
}

export function getTyppriceKey() {
  return ['typprice'] as const
}

export function getUltoscKey() {
  return ['ultosc'] as const
}

export function getVarKey() {
  return ['var'] as const
}

export function getVwapKey() {
  return ['vwap'] as const
}

export function getWclpriceKey() {
  return ['wclprice'] as const
}

export function getWillrKey() {
  return ['willr'] as const
}

export function getWmaKey() {
  return ['wma'] as const
}

export function getAdQueryKey(args: InferRequestType<typeof client.ad.$get>) {
  return ['ad', '/ad', args] as const
}

export function getAdQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ad.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdQueryKey>
  >({
    queryKey: getAdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.ad.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function injectAd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ad.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAddQueryKey(args: InferRequestType<typeof client.add.$get>) {
  return ['add', '/add', args] as const
}

export function getAddQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.add.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddQueryKey>
  >({
    queryKey: getAddQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.add.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.add.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAddQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdoscQueryKey(args: InferRequestType<typeof client.adosc.$get>) {
  return ['adosc', '/adosc', args] as const
}

export function getAdoscQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.adosc.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdoscQueryKey>
  >({
    queryKey: getAdoscQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adosc.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdosc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.adosc.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdoscQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdoscQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdxQueryKey(args: InferRequestType<typeof client.adx.$get>) {
  return ['adx', '/adx', args] as const
}

export function getAdxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.adx.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdxQueryKey>
  >({
    queryKey: getAdxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adx.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.adx.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdxrQueryKey(args: InferRequestType<typeof client.adxr.$get>) {
  return ['adxr', '/adxr', args] as const
}

export function getAdxrQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.adxr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdxrQueryKey>
  >({
    queryKey: getAdxrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.adxr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdxr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.adxr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAdxrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdxrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnalystRatingsLightQueryKey(
  args: InferRequestType<typeof client.analyst_ratings.light.$get>,
) {
  return ['analyst_ratings', '/analyst_ratings/light', args] as const
}

export function getAnalystRatingsLightQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.analyst_ratings.light.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalystRatingsLightQueryKey>
  >({
    queryKey: getAnalystRatingsLightQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyst_ratings.light.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnalystRatingsLight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analyst_ratings.light.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalystRatingsLightQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalystRatingsLightQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnalystRatingsUsEquitiesQueryKey(
  args: InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
) {
  return ['analyst_ratings', '/analyst_ratings/us_equities', args] as const
}

export function getAnalystRatingsUsEquitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalystRatingsUsEquitiesQueryKey>
  >({
    queryKey: getAnalystRatingsUsEquitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyst_ratings.us_equities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnalystRatingsUsEquities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalystRatingsUsEquitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalystRatingsUsEquitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiUsageQueryKey(args: InferRequestType<typeof client.api_usage.$get>) {
  return ['api_usage', '/api_usage', args] as const
}

export function getApiUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api_usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsageQueryKey>
  >({
    queryKey: getApiUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api_usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApoQueryKey(args: InferRequestType<typeof client.apo.$get>) {
  return ['apo', '/apo', args] as const
}

export function getApoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApoQueryKey>
  >({
    queryKey: getApoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAroonQueryKey(args: InferRequestType<typeof client.aroon.$get>) {
  return ['aroon', '/aroon', args] as const
}

export function getAroonQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aroon.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAroonQueryKey>
  >({
    queryKey: getAroonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aroon.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAroon<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aroon.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAroonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAroonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAroonoscQueryKey(args: InferRequestType<typeof client.aroonosc.$get>) {
  return ['aroonosc', '/aroonosc', args] as const
}

export function getAroonoscQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aroonosc.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAroonoscQueryKey>
  >({
    queryKey: getAroonoscQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aroonosc.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAroonosc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aroonosc.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAroonoscQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAroonoscQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAtrQueryKey(args: InferRequestType<typeof client.atr.$get>) {
  return ['atr', '/atr', args] as const
}

export function getAtrQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.atr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtrQueryKey>
  >({
    queryKey: getAtrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.atr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAtr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.atr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAtrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAtrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAvgQueryKey(args: InferRequestType<typeof client.avg.$get>) {
  return ['avg', '/avg', args] as const
}

export function getAvgQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.avg.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAvgQueryKey>
  >({
    queryKey: getAvgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avg.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAvg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.avg.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAvgpriceQueryKey(args: InferRequestType<typeof client.avgprice.$get>) {
  return ['avgprice', '/avgprice', args] as const
}

export function getAvgpriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.avgprice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAvgpriceQueryKey>
  >({
    queryKey: getAvgpriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avgprice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAvgprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.avgprice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAvgpriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvgpriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBalanceSheetQueryKey(args: InferRequestType<typeof client.balance_sheet.$get>) {
  return ['balance_sheet', '/balance_sheet', args] as const
}

export function getBalanceSheetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.balance_sheet.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceSheetQueryKey>
  >({
    queryKey: getBalanceSheetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balance_sheet.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBalanceSheet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.balance_sheet.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBalanceSheetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBalanceSheetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBalanceSheetConsolidatedQueryKey(
  args: InferRequestType<typeof client.balance_sheet.consolidated.$get>,
) {
  return ['balance_sheet', '/balance_sheet/consolidated', args] as const
}

export function getBalanceSheetConsolidatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.balance_sheet.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceSheetConsolidatedQueryKey>
  >({
    queryKey: getBalanceSheetConsolidatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balance_sheet.consolidated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBalanceSheetConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.balance_sheet.consolidated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBalanceSheetConsolidatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBalanceSheetConsolidatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostBatchMutationKey() {
  return ['batch', '/batch', 'POST'] as const
}

export function getPostBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batch.$post>) {
      return parseResponse(client.batch.$post(args, options))
    },
  })
}

export function injectPostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
        TError,
        InferRequestType<typeof client.batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getBbandsQueryKey(args: InferRequestType<typeof client.bbands.$get>) {
  return ['bbands', '/bbands', args] as const
}

export function getBbandsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bbands.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBbandsQueryKey>
  >({
    queryKey: getBbandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bbands.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBbands<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bbands.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBbandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBbandsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBetaQueryKey(args: InferRequestType<typeof client.beta.$get>) {
  return ['beta', '/beta', args] as const
}

export function getBetaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.beta.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBetaQueryKey>
  >({
    queryKey: getBetaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.beta.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBeta<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.beta.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBetaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBetaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBondsQueryKey(args: InferRequestType<typeof client.bonds.$get>) {
  return ['bonds', '/bonds', args] as const
}

export function getBondsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bonds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBondsQueryKey>
  >({
    queryKey: getBondsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bonds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBonds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bonds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBondsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBondsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBopQueryKey(args: InferRequestType<typeof client.bop.$get>) {
  return ['bop', '/bop', args] as const
}

export function getBopQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bop.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBopQueryKey>
  >({
    queryKey: getBopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bop.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBop<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bop.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBopQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCashFlowQueryKey(args: InferRequestType<typeof client.cash_flow.$get>) {
  return ['cash_flow', '/cash_flow', args] as const
}

export function getCashFlowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cash_flow.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCashFlowQueryKey>
  >({
    queryKey: getCashFlowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cash_flow.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCashFlow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cash_flow.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCashFlowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCashFlowQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCashFlowConsolidatedQueryKey(
  args: InferRequestType<typeof client.cash_flow.consolidated.$get>,
) {
  return ['cash_flow', '/cash_flow/consolidated', args] as const
}

export function getCashFlowConsolidatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cash_flow.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCashFlowConsolidatedQueryKey>
  >({
    queryKey: getCashFlowConsolidatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cash_flow.consolidated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCashFlowConsolidated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cash_flow.consolidated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCashFlowConsolidatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCashFlowConsolidatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCciQueryKey(args: InferRequestType<typeof client.cci.$get>) {
  return ['cci', '/cci', args] as const
}

export function getCciQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cci.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCciQueryKey>
  >({
    queryKey: getCciQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cci.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCci<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cci.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCciQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCciQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCeilQueryKey(args: InferRequestType<typeof client.ceil.$get>) {
  return ['ceil', '/ceil', args] as const
}

export function getCeilQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ceil.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCeilQueryKey>
  >({
    queryKey: getCeilQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ceil.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCeil<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ceil.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCeilQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCeilQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCmoQueryKey(args: InferRequestType<typeof client.cmo.$get>) {
  return ['cmo', '/cmo', args] as const
}

export function getCmoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cmo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCmoQueryKey>
  >({
    queryKey: getCmoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cmo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCmo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cmo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCmoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCmoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCommoditiesQueryKey(args: InferRequestType<typeof client.commodities.$get>) {
  return ['commodities', '/commodities', args] as const
}

export function getCommoditiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.commodities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommoditiesQueryKey>
  >({
    queryKey: getCommoditiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commodities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCommodities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.commodities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCommoditiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommoditiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCoppockQueryKey(args: InferRequestType<typeof client.coppock.$get>) {
  return ['coppock', '/coppock', args] as const
}

export function getCoppockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.coppock.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCoppockQueryKey>
  >({
    queryKey: getCoppockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.coppock.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCoppock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.coppock.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCoppockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCoppockQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCorrelQueryKey(args: InferRequestType<typeof client.correl.$get>) {
  return ['correl', '/correl', args] as const
}

export function getCorrelQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.correl.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCorrelQueryKey>
  >({
    queryKey: getCorrelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.correl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCorrel<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.correl.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCorrelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCorrelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCountriesQueryKey() {
  return ['countries', '/countries'] as const
}

export function getCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >({
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCrossListingsQueryKey(
  args: InferRequestType<typeof client.cross_listings.$get>,
) {
  return ['cross_listings', '/cross_listings', args] as const
}

export function getCrossListingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cross_listings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrossListingsQueryKey>
  >({
    queryKey: getCrossListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cross_listings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrossListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cross_listings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrossListingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrossListingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCrsiQueryKey(args: InferRequestType<typeof client.crsi.$get>) {
  return ['crsi', '/crsi', args] as const
}

export function getCrsiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.crsi.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrsiQueryKey>
  >({
    queryKey: getCrsiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crsi.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCrsi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.crsi.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCrsiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCrsiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCryptocurrenciesQueryKey(
  args: InferRequestType<typeof client.cryptocurrencies.$get>,
) {
  return ['cryptocurrencies', '/cryptocurrencies', args] as const
}

export function getCryptocurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cryptocurrencies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCryptocurrenciesQueryKey>
  >({
    queryKey: getCryptocurrenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cryptocurrencies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCryptocurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cryptocurrencies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCryptocurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCryptocurrenciesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCryptocurrencyExchangesQueryKey(
  args: InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
) {
  return ['cryptocurrency_exchanges', '/cryptocurrency_exchanges', args] as const
}

export function getCryptocurrencyExchangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCryptocurrencyExchangesQueryKey>
  >({
    queryKey: getCryptocurrencyExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cryptocurrency_exchanges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCryptocurrencyExchanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCryptocurrencyExchangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCryptocurrencyExchangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCurrencyConversionQueryKey(
  args: InferRequestType<typeof client.currency_conversion.$get>,
) {
  return ['currency_conversion', '/currency_conversion', args] as const
}

export function getCurrencyConversionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.currency_conversion.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurrencyConversionQueryKey>
  >({
    queryKey: getCurrencyConversionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.currency_conversion.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCurrencyConversion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.currency_conversion.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCurrencyConversionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCurrencyConversionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDemaQueryKey(args: InferRequestType<typeof client.dema.$get>) {
  return ['dema', '/dema', args] as const
}

export function getDemaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dema.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDemaQueryKey>
  >({
    queryKey: getDemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dema.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDemaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDirectHoldersQueryKey(
  args: InferRequestType<typeof client.direct_holders.$get>,
) {
  return ['direct_holders', '/direct_holders', args] as const
}

export function getDirectHoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.direct_holders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDirectHoldersQueryKey>
  >({
    queryKey: getDirectHoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.direct_holders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDirectHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.direct_holders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectHoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDirectHoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDivQueryKey(args: InferRequestType<typeof client.div.$get>) {
  return ['div', '/div', args] as const
}

export function getDivQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.div.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDivQueryKey>
  >({
    queryKey: getDivQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.div.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.div.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDivQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDivQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDividendsQueryKey(args: InferRequestType<typeof client.dividends.$get>) {
  return ['dividends', '/dividends', args] as const
}

export function getDividendsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dividends.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDividendsQueryKey>
  >({
    queryKey: getDividendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dividends.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDividends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dividends.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDividendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDividendsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDividendsCalendarQueryKey(
  args: InferRequestType<typeof client.dividends_calendar.$get>,
) {
  return ['dividends_calendar', '/dividends_calendar', args] as const
}

export function getDividendsCalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dividends_calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDividendsCalendarQueryKey>
  >({
    queryKey: getDividendsCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dividends_calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDividendsCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dividends_calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDividendsCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDividendsCalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDpoQueryKey(args: InferRequestType<typeof client.dpo.$get>) {
  return ['dpo', '/dpo', args] as const
}

export function getDpoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dpo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDpoQueryKey>
  >({
    queryKey: getDpoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dpo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDpo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dpo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDpoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDpoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDxQueryKey(args: InferRequestType<typeof client.dx.$get>) {
  return ['dx', '/dx', args] as const
}

export function getDxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dx.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDxQueryKey>
  >({
    queryKey: getDxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.dx.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function injectDx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dx.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEarliestTimestampQueryKey(
  args: InferRequestType<typeof client.earliest_timestamp.$get>,
) {
  return ['earliest_timestamp', '/earliest_timestamp', args] as const
}

export function getEarliestTimestampQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.earliest_timestamp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarliestTimestampQueryKey>
  >({
    queryKey: getEarliestTimestampQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.earliest_timestamp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarliestTimestamp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.earliest_timestamp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarliestTimestampQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarliestTimestampQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEarningsQueryKey(args: InferRequestType<typeof client.earnings.$get>) {
  return ['earnings', '/earnings', args] as const
}

export function getEarningsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.earnings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEarningsQueryKey>
  >({
    queryKey: getEarningsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.earnings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.earnings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEarningsCalendarQueryKey(
  args: InferRequestType<typeof client.earnings_calendar.$get>,
) {
  return ['earnings_calendar', '/earnings_calendar', args] as const
}

export function getEarningsCalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.earnings_calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsCalendarQueryKey>
  >({
    queryKey: getEarningsCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.earnings_calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarningsCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.earnings_calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarningsCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsCalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEarningsEstimateQueryKey(
  args: InferRequestType<typeof client.earnings_estimate.$get>,
) {
  return ['earnings_estimate', '/earnings_estimate', args] as const
}

export function getEarningsEstimateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.earnings_estimate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsEstimateQueryKey>
  >({
    queryKey: getEarningsEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.earnings_estimate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEarningsEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.earnings_estimate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEarningsEstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEarningsEstimateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEdgarFilingsArchiveQueryKey(
  args: InferRequestType<typeof client.edgar_filings.archive.$get>,
) {
  return ['edgar_filings', '/edgar_filings/archive', args] as const
}

export function getEdgarFilingsArchiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.edgar_filings.archive.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgarFilingsArchiveQueryKey>
  >({
    queryKey: getEdgarFilingsArchiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.edgar_filings.archive.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEdgarFilingsArchive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.edgar_filings.archive.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgarFilingsArchiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEdgarFilingsArchiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEmaQueryKey(args: InferRequestType<typeof client.ema.$get>) {
  return ['ema', '/ema', args] as const
}

export function getEmaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ema.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmaQueryKey>
  >({
    queryKey: getEmaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ema.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEodQueryKey(args: InferRequestType<typeof client.eod.$get>) {
  return ['eod', '/eod', args] as const
}

export function getEodQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEodQueryKey>
  >({
    queryKey: getEodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eod.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEpsRevisionsQueryKey(args: InferRequestType<typeof client.eps_revisions.$get>) {
  return ['eps_revisions', '/eps_revisions', args] as const
}

export function getEpsRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eps_revisions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpsRevisionsQueryKey>
  >({
    queryKey: getEpsRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eps_revisions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEpsRevisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eps_revisions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEpsRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpsRevisionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEpsTrendQueryKey(args: InferRequestType<typeof client.eps_trend.$get>) {
  return ['eps_trend', '/eps_trend', args] as const
}

export function getEpsTrendQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eps_trend.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpsTrendQueryKey>
  >({
    queryKey: getEpsTrendQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eps_trend.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEpsTrend<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eps_trend.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEpsTrendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpsTrendQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsQueryKey(args: InferRequestType<typeof client.etfs.$get>) {
  return ['etfs', '/etfs', args] as const
}

export function getEtfsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsQueryKey>
  >({
    queryKey: getEtfsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEtfsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsFamilyQueryKey(args: InferRequestType<typeof client.etfs.family.$get>) {
  return ['etfs', '/etfs/family', args] as const
}

export function getEtfsFamilyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.family.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsFamilyQueryKey>
  >({
    queryKey: getEtfsFamilyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.family.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfsFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.family.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsFamilyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsListQueryKey(args: InferRequestType<typeof client.etfs.list.$get>) {
  return ['etfs', '/etfs/list', args] as const
}

export function getEtfsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsListQueryKey>
  >({
    queryKey: getEtfsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsTypeQueryKey(args: InferRequestType<typeof client.etfs.type.$get>) {
  return ['etfs', '/etfs/type', args] as const
}

export function getEtfsTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.type.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsTypeQueryKey>
  >({
    queryKey: getEtfsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.type.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfsType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.type.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsWorldQueryKey(args: InferRequestType<typeof client.etfs.world.$get>) {
  return ['etfs', '/etfs/world', args] as const
}

export function getEtfsWorldQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.world.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldQueryKey>
  >({
    queryKey: getEtfsWorldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.world.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfsWorld<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.world.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsWorldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsWorldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsWorldCompositionQueryKey(
  args: InferRequestType<typeof client.etfs.world.composition.$get>,
) {
  return ['etfs', '/etfs/world/composition', args] as const
}

export function getEtfsWorldCompositionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.etfs.world.composition.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldCompositionQueryKey>
  >({
    queryKey: getEtfsWorldCompositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.world.composition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEtfsWorldComposition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.world.composition.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsWorldCompositionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEtfsWorldCompositionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEtfsWorldPerformanceQueryKey(
  args: InferRequestType<typeof client.etfs.world.performance.$get>,
) {
  return ['etfs', '/etfs/world/performance', args] as const
}

export function getEtfsWorldPerformanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.etfs.world.performance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldPerformanceQueryKey>
  >({
    queryKey: getEtfsWorldPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.world.performance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEtfsWorldPerformance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.world.performance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsWorldPerformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEtfsWorldPerformanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEtfsWorldRiskQueryKey(
  args: InferRequestType<typeof client.etfs.world.risk.$get>,
) {
  return ['etfs', '/etfs/world/risk', args] as const
}

export function getEtfsWorldRiskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.world.risk.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldRiskQueryKey>
  >({
    queryKey: getEtfsWorldRiskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.world.risk.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfsWorldRisk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.world.risk.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsWorldRiskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsWorldRiskQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEtfsWorldSummaryQueryKey(
  args: InferRequestType<typeof client.etfs.world.summary.$get>,
) {
  return ['etfs', '/etfs/world/summary', args] as const
}

export function getEtfsWorldSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.etfs.world.summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldSummaryQueryKey>
  >({
    queryKey: getEtfsWorldSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etfs.world.summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEtfsWorldSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.etfs.world.summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtfsWorldSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtfsWorldSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExchangeRateQueryKey(args: InferRequestType<typeof client.exchange_rate.$get>) {
  return ['exchange_rate', '/exchange_rate', args] as const
}

export function getExchangeRateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exchange_rate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExchangeRateQueryKey>
  >({
    queryKey: getExchangeRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exchange_rate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExchangeRate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.exchange_rate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExchangeRateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExchangeRateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExchangeScheduleQueryKey(
  args: InferRequestType<typeof client.exchange_schedule.$get>,
) {
  return ['exchange_schedule', '/exchange_schedule', args] as const
}

export function getExchangeScheduleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exchange_schedule.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExchangeScheduleQueryKey>
  >({
    queryKey: getExchangeScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exchange_schedule.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExchangeSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.exchange_schedule.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExchangeScheduleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExchangeScheduleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExchangesQueryKey(args: InferRequestType<typeof client.exchanges.$get>) {
  return ['exchanges', '/exchanges', args] as const
}

export function getExchangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exchanges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExchangesQueryKey>
  >({
    queryKey: getExchangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exchanges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.exchanges.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getExchangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExchangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExpQueryKey(args: InferRequestType<typeof client.exp.$get>) {
  return ['exp', '/exp', args] as const
}

export function getExpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExpQueryKey>
  >({
    queryKey: getExpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.exp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFloorQueryKey(args: InferRequestType<typeof client.floor.$get>) {
  return ['floor', '/floor', args] as const
}

export function getFloorQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.floor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFloorQueryKey>
  >({
    queryKey: getFloorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.floor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFloor<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.floor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFloorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFloorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getForexPairsQueryKey(args: InferRequestType<typeof client.forex_pairs.$get>) {
  return ['forex_pairs', '/forex_pairs', args] as const
}

export function getForexPairsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.forex_pairs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getForexPairsQueryKey>
  >({
    queryKey: getForexPairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forex_pairs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectForexPairs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.forex_pairs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getForexPairsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getForexPairsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFundHoldersQueryKey(args: InferRequestType<typeof client.fund_holders.$get>) {
  return ['fund_holders', '/fund_holders', args] as const
}

export function getFundHoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fund_holders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFundHoldersQueryKey>
  >({
    queryKey: getFundHoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fund_holders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFundHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.fund_holders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFundHoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFundHoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFundsQueryKey(args: InferRequestType<typeof client.funds.$get>) {
  return ['funds', '/funds', args] as const
}

export function getFundsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.funds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFundsQueryKey>
  >({
    queryKey: getFundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.funds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFunds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.funds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFundsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGrowthEstimatesQueryKey(
  args: InferRequestType<typeof client.growth_estimates.$get>,
) {
  return ['growth_estimates', '/growth_estimates', args] as const
}

export function getGrowthEstimatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.growth_estimates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGrowthEstimatesQueryKey>
  >({
    queryKey: getGrowthEstimatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.growth_estimates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGrowthEstimates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.growth_estimates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGrowthEstimatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGrowthEstimatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHeikinashicandlesQueryKey(
  args: InferRequestType<typeof client.heikinashicandles.$get>,
) {
  return ['heikinashicandles', '/heikinashicandles', args] as const
}

export function getHeikinashicandlesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.heikinashicandles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHeikinashicandlesQueryKey>
  >({
    queryKey: getHeikinashicandlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.heikinashicandles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHeikinashicandles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.heikinashicandles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHeikinashicandlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHeikinashicandlesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHlc3QueryKey(args: InferRequestType<typeof client.hlc3.$get>) {
  return ['hlc3', '/hlc3', args] as const
}

export function getHlc3QueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hlc3.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHlc3QueryKey>
  >({
    queryKey: getHlc3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hlc3.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHlc3<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hlc3.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHlc3QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHlc3QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHtDcperiodQueryKey(args: InferRequestType<typeof client.ht_dcperiod.$get>) {
  return ['ht_dcperiod', '/ht_dcperiod', args] as const
}

export function getHtDcperiodQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ht_dcperiod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtDcperiodQueryKey>
  >({
    queryKey: getHtDcperiodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ht_dcperiod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHtDcperiod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ht_dcperiod.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHtDcperiodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtDcperiodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHtDcphaseQueryKey(args: InferRequestType<typeof client.ht_dcphase.$get>) {
  return ['ht_dcphase', '/ht_dcphase', args] as const
}

export function getHtDcphaseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ht_dcphase.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtDcphaseQueryKey>
  >({
    queryKey: getHtDcphaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ht_dcphase.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHtDcphase<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ht_dcphase.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHtDcphaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtDcphaseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHtPhasorQueryKey(args: InferRequestType<typeof client.ht_phasor.$get>) {
  return ['ht_phasor', '/ht_phasor', args] as const
}

export function getHtPhasorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ht_phasor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtPhasorQueryKey>
  >({
    queryKey: getHtPhasorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ht_phasor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHtPhasor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ht_phasor.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHtPhasorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtPhasorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHtSineQueryKey(args: InferRequestType<typeof client.ht_sine.$get>) {
  return ['ht_sine', '/ht_sine', args] as const
}

export function getHtSineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ht_sine.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtSineQueryKey>
  >({
    queryKey: getHtSineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ht_sine.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHtSine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ht_sine.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHtSineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtSineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHtTrendlineQueryKey(args: InferRequestType<typeof client.ht_trendline.$get>) {
  return ['ht_trendline', '/ht_trendline', args] as const
}

export function getHtTrendlineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ht_trendline.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtTrendlineQueryKey>
  >({
    queryKey: getHtTrendlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ht_trendline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHtTrendline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ht_trendline.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHtTrendlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtTrendlineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHtTrendmodeQueryKey(args: InferRequestType<typeof client.ht_trendmode.$get>) {
  return ['ht_trendmode', '/ht_trendmode', args] as const
}

export function getHtTrendmodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ht_trendmode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtTrendmodeQueryKey>
  >({
    queryKey: getHtTrendmodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ht_trendmode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHtTrendmode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ht_trendmode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHtTrendmodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtTrendmodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getIchimokuQueryKey(args: InferRequestType<typeof client.ichimoku.$get>) {
  return ['ichimoku', '/ichimoku', args] as const
}

export function getIchimokuQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ichimoku.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIchimokuQueryKey>
  >({
    queryKey: getIchimokuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ichimoku.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIchimoku<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ichimoku.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIchimokuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIchimokuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getIncomeStatementQueryKey(
  args: InferRequestType<typeof client.income_statement.$get>,
) {
  return ['income_statement', '/income_statement', args] as const
}

export function getIncomeStatementQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.income_statement.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIncomeStatementQueryKey>
  >({
    queryKey: getIncomeStatementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.income_statement.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIncomeStatement<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.income_statement.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIncomeStatementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIncomeStatementQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getIncomeStatementConsolidatedQueryKey(
  args: InferRequestType<typeof client.income_statement.consolidated.$get>,
) {
  return ['income_statement', '/income_statement/consolidated', args] as const
}

export function getIncomeStatementConsolidatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.income_statement.consolidated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIncomeStatementConsolidatedQueryKey>
  >({
    queryKey: getIncomeStatementConsolidatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.income_statement.consolidated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIncomeStatementConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.income_statement.consolidated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIncomeStatementConsolidatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIncomeStatementConsolidatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getInsiderTransactionsQueryKey(
  args: InferRequestType<typeof client.insider_transactions.$get>,
) {
  return ['insider_transactions', '/insider_transactions', args] as const
}

export function getInsiderTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.insider_transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInsiderTransactionsQueryKey>
  >({
    queryKey: getInsiderTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insider_transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInsiderTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.insider_transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsiderTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInsiderTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getInstitutionalHoldersQueryKey(
  args: InferRequestType<typeof client.institutional_holders.$get>,
) {
  return ['institutional_holders', '/institutional_holders', args] as const
}

export function getInstitutionalHoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.institutional_holders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionalHoldersQueryKey>
  >({
    queryKey: getInstitutionalHoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.institutional_holders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInstitutionalHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.institutional_holders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstitutionalHoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInstitutionalHoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getInstrumentTypeQueryKey() {
  return ['instrument_type', '/instrument_type'] as const
}

export function getInstrumentTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstrumentTypeQueryKey>
  >({
    queryKey: getInstrumentTypeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.instrument_type.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInstrumentType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInstrumentTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInstrumentTypeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIntervalsQueryKey() {
  return ['intervals', '/intervals'] as const
}

export function getIntervalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntervalsQueryKey>
  >({
    queryKey: getIntervalsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.intervals.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIntervals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntervalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIntervalsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIpoCalendarQueryKey(args: InferRequestType<typeof client.ipo_calendar.$get>) {
  return ['ipo_calendar', '/ipo_calendar', args] as const
}

export function getIpoCalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ipo_calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpoCalendarQueryKey>
  >({
    queryKey: getIpoCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ipo_calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpoCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ipo_calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpoCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpoCalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKamaQueryKey(args: InferRequestType<typeof client.kama.$get>) {
  return ['kama', '/kama', args] as const
}

export function getKamaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kama.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKamaQueryKey>
  >({
    queryKey: getKamaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kama.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKama<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.kama.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKamaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKamaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKeltnerQueryKey(args: InferRequestType<typeof client.keltner.$get>) {
  return ['keltner', '/keltner', args] as const
}

export function getKeltnerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keltner.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeltnerQueryKey>
  >({
    queryKey: getKeltnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keltner.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeltner<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keltner.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeltnerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeltnerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKeyExecutivesQueryKey(
  args: InferRequestType<typeof client.key_executives.$get>,
) {
  return ['key_executives', '/key_executives', args] as const
}

export function getKeyExecutivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.key_executives.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyExecutivesQueryKey>
  >({
    queryKey: getKeyExecutivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.key_executives.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeyExecutives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.key_executives.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKeyExecutivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeyExecutivesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getKstQueryKey(args: InferRequestType<typeof client.kst.$get>) {
  return ['kst', '/kst', args] as const
}

export function getKstQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kst.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKstQueryKey>
  >({
    queryKey: getKstQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kst.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKst<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.kst.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKstQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKstQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLastChangeEndpointQueryKey(
  args: InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
) {
  return ['last_change', '/last_change/:endpoint', args] as const
}

export function getLastChangeEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLastChangeEndpointQueryKey>
  >({
    queryKey: getLastChangeEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.last_change[':endpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLastChangeEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLastChangeEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLastChangeEndpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLinearregQueryKey(args: InferRequestType<typeof client.linearreg.$get>) {
  return ['linearreg', '/linearreg', args] as const
}

export function getLinearregQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linearreg.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinearregQueryKey>
  >({
    queryKey: getLinearregQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linearreg.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinearreg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.linearreg.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinearregQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinearregQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLinearregangleQueryKey(
  args: InferRequestType<typeof client.linearregangle.$get>,
) {
  return ['linearregangle', '/linearregangle', args] as const
}

export function getLinearregangleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linearregangle.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinearregangleQueryKey>
  >({
    queryKey: getLinearregangleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linearregangle.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinearregangle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.linearregangle.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinearregangleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinearregangleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLinearreginterceptQueryKey(
  args: InferRequestType<typeof client.linearregintercept.$get>,
) {
  return ['linearregintercept', '/linearregintercept', args] as const
}

export function getLinearreginterceptQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linearregintercept.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinearreginterceptQueryKey>
  >({
    queryKey: getLinearreginterceptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linearregintercept.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinearregintercept<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.linearregintercept.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinearreginterceptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinearreginterceptQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLinearregslopeQueryKey(
  args: InferRequestType<typeof client.linearregslope.$get>,
) {
  return ['linearregslope', '/linearregslope', args] as const
}

export function getLinearregslopeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.linearregslope.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinearregslopeQueryKey>
  >({
    queryKey: getLinearregslopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.linearregslope.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLinearregslope<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.linearregslope.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLinearregslopeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinearregslopeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLnQueryKey(args: InferRequestType<typeof client.ln.$get>) {
  return ['ln', '/ln', args] as const
}

export function getLnQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ln.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLnQueryKey>
  >({
    queryKey: getLnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.ln.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function injectLn<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ln.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLog10QueryKey(args: InferRequestType<typeof client.log10.$get>) {
  return ['log10', '/log10', args] as const
}

export function getLog10QueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.log10.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLog10QueryKey>
  >({
    queryKey: getLog10QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.log10.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLog10<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.log10.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLog10QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLog10QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLogoQueryKey(args: InferRequestType<typeof client.logo.$get>) {
  return ['logo', '/logo', args] as const
}

export function getLogoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoQueryKey>
  >({
    queryKey: getLogoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.logo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMaQueryKey(args: InferRequestType<typeof client.ma.$get>) {
  return ['ma', '/ma', args] as const
}

export function getMaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ma.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaQueryKey>
  >({
    queryKey: getMaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.ma.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function injectMa<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ma.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMacdQueryKey(args: InferRequestType<typeof client.macd.$get>) {
  return ['macd', '/macd', args] as const
}

export function getMacdQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.macd.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacdQueryKey>
  >({
    queryKey: getMacdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macd.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMacd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.macd.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMacdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMacdSlopeQueryKey(args: InferRequestType<typeof client.macd_slope.$get>) {
  return ['macd_slope', '/macd_slope', args] as const
}

export function getMacdSlopeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.macd_slope.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacdSlopeQueryKey>
  >({
    queryKey: getMacdSlopeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macd_slope.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMacdSlope<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.macd_slope.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMacdSlopeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMacdSlopeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMacdextQueryKey(args: InferRequestType<typeof client.macdext.$get>) {
  return ['macdext', '/macdext', args] as const
}

export function getMacdextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.macdext.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacdextQueryKey>
  >({
    queryKey: getMacdextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macdext.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMacdext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.macdext.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacdextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMacdextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMamaQueryKey(args: InferRequestType<typeof client.mama.$get>) {
  return ['mama', '/mama', args] as const
}

export function getMamaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mama.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMamaQueryKey>
  >({
    queryKey: getMamaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mama.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMama<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mama.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMamaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMamaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMarketCapQueryKey(args: InferRequestType<typeof client.market_cap.$get>) {
  return ['market_cap', '/market_cap', args] as const
}

export function getMarketCapQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.market_cap.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketCapQueryKey>
  >({
    queryKey: getMarketCapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.market_cap.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMarketCap<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.market_cap.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMarketCapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketCapQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMarketMoversMarketQueryKey(
  args: InferRequestType<(typeof client.market_movers)[':market']['$get']>,
) {
  return ['market_movers', '/market_movers/:market', args] as const
}

export function getMarketMoversMarketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.market_movers)[':market']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketMoversMarketQueryKey>
  >({
    queryKey: getMarketMoversMarketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.market_movers[':market'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMarketMoversMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.market_movers)[':market']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMarketMoversMarketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketMoversMarketQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMarketStateQueryKey(args: InferRequestType<typeof client.market_state.$get>) {
  return ['market_state', '/market_state', args] as const
}

export function getMarketStateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.market_state.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketStateQueryKey>
  >({
    queryKey: getMarketStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.market_state.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMarketState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.market_state.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMarketStateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMarketStateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMaxQueryKey(args: InferRequestType<typeof client.max.$get>) {
  return ['max', '/max', args] as const
}

export function getMaxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.max.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaxQueryKey>
  >({
    queryKey: getMaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.max.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMax<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.max.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMaxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMaxindexQueryKey(args: InferRequestType<typeof client.maxindex.$get>) {
  return ['maxindex', '/maxindex', args] as const
}

export function getMaxindexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.maxindex.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaxindexQueryKey>
  >({
    queryKey: getMaxindexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.maxindex.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMaxindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.maxindex.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMaxindexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMaxindexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMcginleyDynamicQueryKey(
  args: InferRequestType<typeof client.mcginley_dynamic.$get>,
) {
  return ['mcginley_dynamic', '/mcginley_dynamic', args] as const
}

export function getMcginleyDynamicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mcginley_dynamic.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMcginleyDynamicQueryKey>
  >({
    queryKey: getMcginleyDynamicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mcginley_dynamic.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMcginleyDynamic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mcginley_dynamic.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMcginleyDynamicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMcginleyDynamicQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMedpriceQueryKey(args: InferRequestType<typeof client.medprice.$get>) {
  return ['medprice', '/medprice', args] as const
}

export function getMedpriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.medprice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMedpriceQueryKey>
  >({
    queryKey: getMedpriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.medprice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMedprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.medprice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMedpriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMedpriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMfiQueryKey(args: InferRequestType<typeof client.mfi.$get>) {
  return ['mfi', '/mfi', args] as const
}

export function getMfiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mfi.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMfiQueryKey>
  >({
    queryKey: getMfiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mfi.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMfi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mfi.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMfiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMfiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMidpointQueryKey(args: InferRequestType<typeof client.midpoint.$get>) {
  return ['midpoint', '/midpoint', args] as const
}

export function getMidpointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.midpoint.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMidpointQueryKey>
  >({
    queryKey: getMidpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.midpoint.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMidpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.midpoint.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMidpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMidpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMidpriceQueryKey(args: InferRequestType<typeof client.midprice.$get>) {
  return ['midprice', '/midprice', args] as const
}

export function getMidpriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.midprice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMidpriceQueryKey>
  >({
    queryKey: getMidpriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.midprice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMidprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.midprice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMidpriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMidpriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMinQueryKey(args: InferRequestType<typeof client.min.$get>) {
  return ['min', '/min', args] as const
}

export function getMinQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.min.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinQueryKey>
  >({
    queryKey: getMinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.min.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.min.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMinQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMinQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMinindexQueryKey(args: InferRequestType<typeof client.minindex.$get>) {
  return ['minindex', '/minindex', args] as const
}

export function getMinindexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.minindex.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinindexQueryKey>
  >({
    queryKey: getMinindexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.minindex.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMinindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.minindex.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMinindexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMinindexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMinmaxQueryKey(args: InferRequestType<typeof client.minmax.$get>) {
  return ['minmax', '/minmax', args] as const
}

export function getMinmaxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.minmax.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinmaxQueryKey>
  >({
    queryKey: getMinmaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.minmax.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMinmax<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.minmax.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMinmaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMinmaxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMinmaxindexQueryKey(args: InferRequestType<typeof client.minmaxindex.$get>) {
  return ['minmaxindex', '/minmaxindex', args] as const
}

export function getMinmaxindexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.minmaxindex.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinmaxindexQueryKey>
  >({
    queryKey: getMinmaxindexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.minmaxindex.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMinmaxindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.minmaxindex.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMinmaxindexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMinmaxindexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMinusDiQueryKey(args: InferRequestType<typeof client.minus_di.$get>) {
  return ['minus_di', '/minus_di', args] as const
}

export function getMinusDiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.minus_di.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinusDiQueryKey>
  >({
    queryKey: getMinusDiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.minus_di.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMinusDi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.minus_di.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMinusDiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMinusDiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMinusDmQueryKey(args: InferRequestType<typeof client.minus_dm.$get>) {
  return ['minus_dm', '/minus_dm', args] as const
}

export function getMinusDmQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.minus_dm.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinusDmQueryKey>
  >({
    queryKey: getMinusDmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.minus_dm.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMinusDm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.minus_dm.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMinusDmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMinusDmQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMomQueryKey(args: InferRequestType<typeof client.mom.$get>) {
  return ['mom', '/mom', args] as const
}

export function getMomQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mom.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMomQueryKey>
  >({
    queryKey: getMomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mom.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMom<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mom.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMomQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMoneyMarketFundsListQueryKey(
  args: InferRequestType<typeof client.money_market_funds.list.$get>,
) {
  return ['money_market_funds', '/money_market_funds/list', args] as const
}

export function getMoneyMarketFundsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.money_market_funds.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoneyMarketFundsListQueryKey>
  >({
    queryKey: getMoneyMarketFundsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.money_market_funds.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMoneyMarketFundsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.money_market_funds.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoneyMarketFundsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoneyMarketFundsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMoneyMarketFundsWorldQueryKey(
  args: InferRequestType<typeof client.money_market_funds.world.$get>,
) {
  return ['money_market_funds', '/money_market_funds/world', args] as const
}

export function getMoneyMarketFundsWorldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.money_market_funds.world.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoneyMarketFundsWorldQueryKey>
  >({
    queryKey: getMoneyMarketFundsWorldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.money_market_funds.world.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMoneyMarketFundsWorld<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.money_market_funds.world.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoneyMarketFundsWorldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoneyMarketFundsWorldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMultQueryKey(args: InferRequestType<typeof client.mult.$get>) {
  return ['mult', '/mult', args] as const
}

export function getMultQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mult.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMultQueryKey>
  >({
    queryKey: getMultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mult.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMult<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mult.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMultQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMutualFundsFamilyQueryKey(
  args: InferRequestType<typeof client.mutual_funds.family.$get>,
) {
  return ['mutual_funds', '/mutual_funds/family', args] as const
}

export function getMutualFundsFamilyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mutual_funds.family.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsFamilyQueryKey>
  >({
    queryKey: getMutualFundsFamilyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.family.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMutualFundsFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.family.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsFamilyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMutualFundsFamilyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMutualFundsListQueryKey(
  args: InferRequestType<typeof client.mutual_funds.list.$get>,
) {
  return ['mutual_funds', '/mutual_funds/list', args] as const
}

export function getMutualFundsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mutual_funds.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsListQueryKey>
  >({
    queryKey: getMutualFundsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMutualFundsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.list.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMutualFundsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMutualFundsTypeQueryKey(
  args: InferRequestType<typeof client.mutual_funds.type.$get>,
) {
  return ['mutual_funds', '/mutual_funds/type', args] as const
}

export function getMutualFundsTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mutual_funds.type.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsTypeQueryKey>
  >({
    queryKey: getMutualFundsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.type.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMutualFundsType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.type.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMutualFundsTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMutualFundsWorldQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world', args] as const
}

export function getMutualFundsWorldQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mutual_funds.world.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldQueryKey>
  >({
    queryKey: getMutualFundsWorldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMutualFundsWorld<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMutualFundsWorldQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMutualFundsWorldCompositionQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.composition.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/composition', args] as const
}

export function getMutualFundsWorldCompositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.composition.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldCompositionQueryKey>
  >({
    queryKey: getMutualFundsWorldCompositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.composition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldComposition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.composition.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldCompositionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldCompositionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMutualFundsWorldPerformanceQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.performance.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/performance', args] as const
}

export function getMutualFundsWorldPerformanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.performance.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldPerformanceQueryKey>
  >({
    queryKey: getMutualFundsWorldPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.performance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.performance.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldPerformanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldPerformanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMutualFundsWorldPurchaseInfoQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/purchase_info', args] as const
}

export function getMutualFundsWorldPurchaseInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldPurchaseInfoQueryKey>
  >({
    queryKey: getMutualFundsWorldPurchaseInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.purchase_info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldPurchaseInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldPurchaseInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldPurchaseInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMutualFundsWorldRatingsQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/ratings', args] as const
}

export function getMutualFundsWorldRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldRatingsQueryKey>
  >({
    queryKey: getMutualFundsWorldRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldRatingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMutualFundsWorldRiskQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.risk.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/risk', args] as const
}

export function getMutualFundsWorldRiskQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.risk.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldRiskQueryKey>
  >({
    queryKey: getMutualFundsWorldRiskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.risk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.risk.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldRiskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldRiskQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMutualFundsWorldSummaryQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.summary.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/summary', args] as const
}

export function getMutualFundsWorldSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldSummaryQueryKey>
  >({
    queryKey: getMutualFundsWorldSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMutualFundsWorldSustainabilityQueryKey(
  args: InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/sustainability', args] as const
}

export function getMutualFundsWorldSustainabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldSustainabilityQueryKey>
  >({
    queryKey: getMutualFundsWorldSustainabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mutual_funds.world.sustainability.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMutualFundsWorldSustainability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMutualFundsWorldSustainabilityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMutualFundsWorldSustainabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNatrQueryKey(args: InferRequestType<typeof client.natr.$get>) {
  return ['natr', '/natr', args] as const
}

export function getNatrQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.natr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNatrQueryKey>
  >({
    queryKey: getNatrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.natr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNatr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.natr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNatrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNatrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getObvQueryKey(args: InferRequestType<typeof client.obv.$get>) {
  return ['obv', '/obv', args] as const
}

export function getObvQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.obv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getObvQueryKey>
  >({
    queryKey: getObvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.obv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectObv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.obv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getObvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getObvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPercentBQueryKey(args: InferRequestType<typeof client.percent_b.$get>) {
  return ['percent_b', '/percent_b', args] as const
}

export function getPercentBQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.percent_b.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPercentBQueryKey>
  >({
    queryKey: getPercentBQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.percent_b.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPercentB<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.percent_b.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPercentBQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPercentBQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPivotPointsHlQueryKey(
  args: InferRequestType<typeof client.pivot_points_hl.$get>,
) {
  return ['pivot_points_hl', '/pivot_points_hl', args] as const
}

export function getPivotPointsHlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pivot_points_hl.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPivotPointsHlQueryKey>
  >({
    queryKey: getPivotPointsHlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pivot_points_hl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPivotPointsHl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pivot_points_hl.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPivotPointsHlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPivotPointsHlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPlusDiQueryKey(args: InferRequestType<typeof client.plus_di.$get>) {
  return ['plus_di', '/plus_di', args] as const
}

export function getPlusDiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plus_di.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlusDiQueryKey>
  >({
    queryKey: getPlusDiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plus_di.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlusDi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plus_di.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlusDiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlusDiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPlusDmQueryKey(args: InferRequestType<typeof client.plus_dm.$get>) {
  return ['plus_dm', '/plus_dm', args] as const
}

export function getPlusDmQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plus_dm.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlusDmQueryKey>
  >({
    queryKey: getPlusDmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plus_dm.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlusDm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plus_dm.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPlusDmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlusDmQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPpoQueryKey(args: InferRequestType<typeof client.ppo.$get>) {
  return ['ppo', '/ppo', args] as const
}

export function getPpoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ppo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPpoQueryKey>
  >({
    queryKey: getPpoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ppo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPpo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ppo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPpoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPpoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPressReleasesQueryKey(
  args: InferRequestType<typeof client.press_releases.$get>,
) {
  return ['press_releases', '/press_releases', args] as const
}

export function getPressReleasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.press_releases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPressReleasesQueryKey>
  >({
    queryKey: getPressReleasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.press_releases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPressReleases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.press_releases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPressReleasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPressReleasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPriceQueryKey(args: InferRequestType<typeof client.price.$get>) {
  return ['price', '/price', args] as const
}

export function getPriceQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPriceQueryKey>
  >({
    queryKey: getPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPrice<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.price.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPriceTargetQueryKey(args: InferRequestType<typeof client.price_target.$get>) {
  return ['price_target', '/price_target', args] as const
}

export function getPriceTargetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.price_target.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPriceTargetQueryKey>
  >({
    queryKey: getPriceTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.price_target.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPriceTarget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.price_target.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPriceTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPriceTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProfileQueryKey(args: InferRequestType<typeof client.profile.$get>) {
  return ['profile', '/profile', args] as const
}

export function getProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >({
    queryKey: getProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.profile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getQuoteQueryKey(args: InferRequestType<typeof client.quote.$get>) {
  return ['quote', '/quote', args] as const
}

export function getQuoteQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteQueryKey>
  >({
    queryKey: getQuoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQuote<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quote.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuoteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRecommendationsQueryKey(
  args: InferRequestType<typeof client.recommendations.$get>,
) {
  return ['recommendations', '/recommendations', args] as const
}

export function getRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recommendations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsQueryKey>
  >({
    queryKey: getRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recommendations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecommendationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRevenueEstimateQueryKey(
  args: InferRequestType<typeof client.revenue_estimate.$get>,
) {
  return ['revenue_estimate', '/revenue_estimate', args] as const
}

export function getRevenueEstimateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.revenue_estimate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRevenueEstimateQueryKey>
  >({
    queryKey: getRevenueEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.revenue_estimate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRevenueEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.revenue_estimate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRevenueEstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRevenueEstimateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRocQueryKey(args: InferRequestType<typeof client.roc.$get>) {
  return ['roc', '/roc', args] as const
}

export function getRocQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roc.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocQueryKey>
  >({
    queryKey: getRocQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roc.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roc.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRocQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRocQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRocpQueryKey(args: InferRequestType<typeof client.rocp.$get>) {
  return ['rocp', '/rocp', args] as const
}

export function getRocpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rocp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocpQueryKey>
  >({
    queryKey: getRocpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rocp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRocp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rocp.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRocpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRocpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRocrQueryKey(args: InferRequestType<typeof client.rocr.$get>) {
  return ['rocr', '/rocr', args] as const
}

export function getRocrQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rocr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocrQueryKey>
  >({
    queryKey: getRocrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rocr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRocr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rocr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRocrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRocrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRocr100QueryKey(args: InferRequestType<typeof client.rocr100.$get>) {
  return ['rocr100', '/rocr100', args] as const
}

export function getRocr100QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rocr100.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocr100QueryKey>
  >({
    queryKey: getRocr100QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rocr100.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRocr100<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rocr100.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRocr100QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRocr100QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRsiQueryKey(args: InferRequestType<typeof client.rsi.$get>) {
  return ['rsi', '/rsi', args] as const
}

export function getRsiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rsi.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRsiQueryKey>
  >({
    queryKey: getRsiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rsi.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRsi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rsi.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRsiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRsiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRvolQueryKey(args: InferRequestType<typeof client.rvol.$get>) {
  return ['rvol', '/rvol', args] as const
}

export function getRvolQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rvol.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRvolQueryKey>
  >({
    queryKey: getRvolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rvol.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRvol<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rvol.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRvolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRvolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSanctionsSourceQueryKey(
  args: InferRequestType<(typeof client.sanctions)[':source']['$get']>,
) {
  return ['sanctions', '/sanctions/:source', args] as const
}

export function getSanctionsSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sanctions)[':source']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSanctionsSourceQueryKey>
  >({
    queryKey: getSanctionsSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sanctions[':source'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSanctionsSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sanctions)[':source']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSanctionsSourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSanctionsSourceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSarQueryKey(args: InferRequestType<typeof client.sar.$get>) {
  return ['sar', '/sar', args] as const
}

export function getSarQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSarQueryKey>
  >({
    queryKey: getSarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSar<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSarextQueryKey(args: InferRequestType<typeof client.sarext.$get>) {
  return ['sarext', '/sarext', args] as const
}

export function getSarextQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sarext.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSarextQueryKey>
  >({
    queryKey: getSarextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sarext.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSarext<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sarext.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSarextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSarextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSmaQueryKey(args: InferRequestType<typeof client.sma.$get>) {
  return ['sma', '/sma', args] as const
}

export function getSmaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sma.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmaQueryKey>
  >({
    queryKey: getSmaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sma.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sma.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSmaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSplitsQueryKey(args: InferRequestType<typeof client.splits.$get>) {
  return ['splits', '/splits', args] as const
}

export function getSplitsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.splits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSplitsQueryKey>
  >({
    queryKey: getSplitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.splits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSplits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.splits.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSplitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSplitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSplitsCalendarQueryKey(
  args: InferRequestType<typeof client.splits_calendar.$get>,
) {
  return ['splits_calendar', '/splits_calendar', args] as const
}

export function getSplitsCalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.splits_calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSplitsCalendarQueryKey>
  >({
    queryKey: getSplitsCalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.splits_calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSplitsCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.splits_calendar.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSplitsCalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSplitsCalendarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSqrtQueryKey(args: InferRequestType<typeof client.sqrt.$get>) {
  return ['sqrt', '/sqrt', args] as const
}

export function getSqrtQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sqrt.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSqrtQueryKey>
  >({
    queryKey: getSqrtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sqrt.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSqrt<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sqrt.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSqrtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSqrtQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStatisticsQueryKey(args: InferRequestType<typeof client.statistics.$get>) {
  return ['statistics', '/statistics', args] as const
}

export function getStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statistics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatisticsQueryKey>
  >({
    queryKey: getStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatisticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStddevQueryKey(args: InferRequestType<typeof client.stddev.$get>) {
  return ['stddev', '/stddev', args] as const
}

export function getStddevQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stddev.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStddevQueryKey>
  >({
    queryKey: getStddevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stddev.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStddev<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stddev.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStddevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStddevQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStochQueryKey(args: InferRequestType<typeof client.stoch.$get>) {
  return ['stoch', '/stoch', args] as const
}

export function getStochQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stoch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStochQueryKey>
  >({
    queryKey: getStochQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stoch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStoch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stoch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStochQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStochQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStochfQueryKey(args: InferRequestType<typeof client.stochf.$get>) {
  return ['stochf', '/stochf', args] as const
}

export function getStochfQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stochf.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStochfQueryKey>
  >({
    queryKey: getStochfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stochf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStochf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stochf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStochfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStochfQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStochrsiQueryKey(args: InferRequestType<typeof client.stochrsi.$get>) {
  return ['stochrsi', '/stochrsi', args] as const
}

export function getStochrsiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stochrsi.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStochrsiQueryKey>
  >({
    queryKey: getStochrsiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stochrsi.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStochrsi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stochrsi.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStochrsiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStochrsiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStocksQueryKey(args: InferRequestType<typeof client.stocks.$get>) {
  return ['stocks', '/stocks', args] as const
}

export function getStocksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStocksQueryKey>
  >({
    queryKey: getStocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStocks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stocks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStocksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSubQueryKey(args: InferRequestType<typeof client.sub.$get>) {
  return ['sub', '/sub', args] as const
}

export function getSubQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sub.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubQueryKey>
  >({
    queryKey: getSubQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sub.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSub<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sub.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSumQueryKey(args: InferRequestType<typeof client.sum.$get>) {
  return ['sum', '/sum', args] as const
}

export function getSumQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sum.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSumQueryKey>
  >({
    queryKey: getSumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sum.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSum<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sum.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSumQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSupertrendQueryKey(args: InferRequestType<typeof client.supertrend.$get>) {
  return ['supertrend', '/supertrend', args] as const
}

export function getSupertrendQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.supertrend.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSupertrendQueryKey>
  >({
    queryKey: getSupertrendQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.supertrend.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSupertrend<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.supertrend.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSupertrendQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSupertrendQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSupertrendHeikinashicandlesQueryKey(
  args: InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
) {
  return ['supertrend_heikinashicandles', '/supertrend_heikinashicandles', args] as const
}

export function getSupertrendHeikinashicandlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupertrendHeikinashicandlesQueryKey>
  >({
    queryKey: getSupertrendHeikinashicandlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.supertrend_heikinashicandles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSupertrendHeikinashicandles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupertrendHeikinashicandlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSupertrendHeikinashicandlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSymbolSearchQueryKey(args: InferRequestType<typeof client.symbol_search.$get>) {
  return ['symbol_search', '/symbol_search', args] as const
}

export function getSymbolSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.symbol_search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSymbolSearchQueryKey>
  >({
    queryKey: getSymbolSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.symbol_search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSymbolSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.symbol_search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSymbolSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSymbolSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getT3maQueryKey(args: InferRequestType<typeof client.t3ma.$get>) {
  return ['t3ma', '/t3ma', args] as const
}

export function getT3maQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.t3ma.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getT3maQueryKey>
  >({
    queryKey: getT3maQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.t3ma.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectT3ma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.t3ma.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getT3maQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getT3maQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTaxInfoQueryKey(args: InferRequestType<typeof client.tax_info.$get>) {
  return ['tax_info', '/tax_info', args] as const
}

export function getTaxInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tax_info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxInfoQueryKey>
  >({
    queryKey: getTaxInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tax_info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTaxInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tax_info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTaxInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTechnicalIndicatorsQueryKey() {
  return ['technical_indicators', '/technical_indicators'] as const
}

export function getTechnicalIndicatorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTechnicalIndicatorsQueryKey>
  >({
    queryKey: getTechnicalIndicatorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.technical_indicators.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTechnicalIndicators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechnicalIndicatorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTechnicalIndicatorsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTemaQueryKey(args: InferRequestType<typeof client.tema.$get>) {
  return ['tema', '/tema', args] as const
}

export function getTemaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tema.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemaQueryKey>
  >({
    queryKey: getTemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tema.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tema.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTimeSeriesQueryKey(args: InferRequestType<typeof client.time_series.$get>) {
  return ['time_series', '/time_series', args] as const
}

export function getTimeSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.time_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimeSeriesQueryKey>
  >({
    queryKey: getTimeSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimeSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.time_series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTimeSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimeSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTimeSeriesCrossQueryKey(
  args: InferRequestType<typeof client.time_series.cross.$get>,
) {
  return ['time_series', '/time_series/cross', args] as const
}

export function getTimeSeriesCrossQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.time_series.cross.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimeSeriesCrossQueryKey>
  >({
    queryKey: getTimeSeriesCrossQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.time_series.cross.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimeSeriesCross<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.time_series.cross.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimeSeriesCrossQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimeSeriesCrossQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTrangeQueryKey(args: InferRequestType<typeof client.trange.$get>) {
  return ['trange', '/trange', args] as const
}

export function getTrangeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.trange.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrangeQueryKey>
  >({
    queryKey: getTrangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trange.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTrange<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trange.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTrangeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrangeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTrimaQueryKey(args: InferRequestType<typeof client.trima.$get>) {
  return ['trima', '/trima', args] as const
}

export function getTrimaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.trima.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrimaQueryKey>
  >({
    queryKey: getTrimaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trima.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTrima<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trima.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTrimaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrimaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTsfQueryKey(args: InferRequestType<typeof client.tsf.$get>) {
  return ['tsf', '/tsf', args] as const
}

export function getTsfQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tsf.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTsfQueryKey>
  >({
    queryKey: getTsfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tsf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTsf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tsf.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTsfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTsfQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTyppriceQueryKey(args: InferRequestType<typeof client.typprice.$get>) {
  return ['typprice', '/typprice', args] as const
}

export function getTyppriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.typprice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTyppriceQueryKey>
  >({
    queryKey: getTyppriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.typprice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTypprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.typprice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTyppriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTyppriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUltoscQueryKey(args: InferRequestType<typeof client.ultosc.$get>) {
  return ['ultosc', '/ultosc', args] as const
}

export function getUltoscQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ultosc.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUltoscQueryKey>
  >({
    queryKey: getUltoscQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ultosc.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUltosc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ultosc.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUltoscQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUltoscQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVarQueryKey(args: InferRequestType<typeof client.var.$get>) {
  return ['var', '/var', args] as const
}

export function getVarQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.var.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarQueryKey>
  >({
    queryKey: getVarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.var.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVar<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.var.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVwapQueryKey(args: InferRequestType<typeof client.vwap.$get>) {
  return ['vwap', '/vwap', args] as const
}

export function getVwapQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vwap.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVwapQueryKey>
  >({
    queryKey: getVwapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vwap.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVwap<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vwap.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVwapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVwapQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWclpriceQueryKey(args: InferRequestType<typeof client.wclprice.$get>) {
  return ['wclprice', '/wclprice', args] as const
}

export function getWclpriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wclprice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWclpriceQueryKey>
  >({
    queryKey: getWclpriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wclprice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWclprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wclprice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWclpriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWclpriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWillrQueryKey(args: InferRequestType<typeof client.willr.$get>) {
  return ['willr', '/willr', args] as const
}

export function getWillrQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.willr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWillrQueryKey>
  >({
    queryKey: getWillrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.willr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWillr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.willr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWillrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWillrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWmaQueryKey(args: InferRequestType<typeof client.wma.$get>) {
  return ['wma', '/wma', args] as const
}

export function getWmaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wma.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWmaQueryKey>
  >({
    queryKey: getWmaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wma.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wma.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWmaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWmaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
