import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAdKey(args: InferRequestType<typeof client.ad.$get>) {
  return ['ad', '/ad', args] as const
}

export function useGetAd<TError = unknown>(
  args: InferRequestType<typeof client.ad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAd<TError = unknown>(
  args: InferRequestType<typeof client.ad.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ad.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAddKey(args: InferRequestType<typeof client.add.$get>) {
  return ['add', '/add', args] as const
}

export function useGetAdd<TError = unknown>(
  args: InferRequestType<typeof client.add.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.add.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdd<TError = unknown>(
  args: InferRequestType<typeof client.add.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAddKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.add.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAdoscKey(args: InferRequestType<typeof client.adosc.$get>) {
  return ['adosc', '/adosc', args] as const
}

export function useGetAdosc<TError = unknown>(
  args: InferRequestType<typeof client.adosc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdoscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.adosc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdosc<TError = unknown>(
  args: InferRequestType<typeof client.adosc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdoscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.adosc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAdxKey(args: InferRequestType<typeof client.adx.$get>) {
  return ['adx', '/adx', args] as const
}

export function useGetAdx<TError = unknown>(
  args: InferRequestType<typeof client.adx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.adx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdx<TError = unknown>(
  args: InferRequestType<typeof client.adx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.adx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAdxrKey(args: InferRequestType<typeof client.adxr.$get>) {
  return ['adxr', '/adxr', args] as const
}

export function useGetAdxr<TError = unknown>(
  args: InferRequestType<typeof client.adxr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdxrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.adxr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAdxr<TError = unknown>(
  args: InferRequestType<typeof client.adxr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdxrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.adxr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAnalystRatingsLightKey(
  args: InferRequestType<typeof client.analyst_ratings.light.$get>,
) {
  return ['analyst_ratings', '/analyst_ratings/light', args] as const
}

export function useGetAnalystRatingsLight<TError = unknown>(
  args: InferRequestType<typeof client.analyst_ratings.light.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalystRatingsLightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analyst_ratings.light.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalystRatingsLight<TError = unknown>(
  args: InferRequestType<typeof client.analyst_ratings.light.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalystRatingsLightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analyst_ratings.light.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalystRatingsUsEquitiesKey(
  args: InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
) {
  return ['analyst_ratings', '/analyst_ratings/us_equities', args] as const
}

export function useGetAnalystRatingsUsEquities<TError = unknown>(
  args: InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalystRatingsUsEquitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analyst_ratings.us_equities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalystRatingsUsEquities<TError = unknown>(
  args: InferRequestType<typeof client.analyst_ratings.us_equities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalystRatingsUsEquitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analyst_ratings.us_equities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsageKey(args: InferRequestType<typeof client.api_usage.$get>) {
  return ['api_usage', '/api_usage', args] as const
}

export function useGetApiUsage<TError = unknown>(
  args: InferRequestType<typeof client.api_usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsage<TError = unknown>(
  args: InferRequestType<typeof client.api_usage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiUsageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApoKey(args: InferRequestType<typeof client.apo.$get>) {
  return ['apo', '/apo', args] as const
}

export function useGetApo<TError = unknown>(
  args: InferRequestType<typeof client.apo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApo<TError = unknown>(
  args: InferRequestType<typeof client.apo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAroonKey(args: InferRequestType<typeof client.aroon.$get>) {
  return ['aroon', '/aroon', args] as const
}

export function useGetAroon<TError = unknown>(
  args: InferRequestType<typeof client.aroon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAroonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aroon.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAroon<TError = unknown>(
  args: InferRequestType<typeof client.aroon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAroonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aroon.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAroonoscKey(args: InferRequestType<typeof client.aroonosc.$get>) {
  return ['aroonosc', '/aroonosc', args] as const
}

export function useGetAroonosc<TError = unknown>(
  args: InferRequestType<typeof client.aroonosc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAroonoscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aroonosc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAroonosc<TError = unknown>(
  args: InferRequestType<typeof client.aroonosc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAroonoscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aroonosc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAtrKey(args: InferRequestType<typeof client.atr.$get>) {
  return ['atr', '/atr', args] as const
}

export function useGetAtr<TError = unknown>(
  args: InferRequestType<typeof client.atr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.atr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAtr<TError = unknown>(
  args: InferRequestType<typeof client.atr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.atr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAvgKey(args: InferRequestType<typeof client.avg.$get>) {
  return ['avg', '/avg', args] as const
}

export function useGetAvg<TError = unknown>(
  args: InferRequestType<typeof client.avg.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvgKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.avg.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAvg<TError = unknown>(
  args: InferRequestType<typeof client.avg.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvgKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.avg.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAvgpriceKey(args: InferRequestType<typeof client.avgprice.$get>) {
  return ['avgprice', '/avgprice', args] as const
}

export function useGetAvgprice<TError = unknown>(
  args: InferRequestType<typeof client.avgprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvgpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.avgprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAvgprice<TError = unknown>(
  args: InferRequestType<typeof client.avgprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAvgpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.avgprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBalanceSheetKey(args: InferRequestType<typeof client.balance_sheet.$get>) {
  return ['balance_sheet', '/balance_sheet', args] as const
}

export function useGetBalanceSheet<TError = unknown>(
  args: InferRequestType<typeof client.balance_sheet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceSheetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance_sheet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceSheet<TError = unknown>(
  args: InferRequestType<typeof client.balance_sheet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceSheetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance_sheet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceSheetConsolidatedKey(
  args: InferRequestType<typeof client.balance_sheet.consolidated.$get>,
) {
  return ['balance_sheet', '/balance_sheet/consolidated', args] as const
}

export function useGetBalanceSheetConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.balance_sheet.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBalanceSheetConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance_sheet.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalanceSheetConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.balance_sheet.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBalanceSheetConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance_sheet.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBatchKey() {
  return ['batch', '/batch', 'POST'] as const
}

export function usePostBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batch.$post> }) =>
        parseResponse(client.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBbandsKey(args: InferRequestType<typeof client.bbands.$get>) {
  return ['bbands', '/bbands', args] as const
}

export function useGetBbands<TError = unknown>(
  args: InferRequestType<typeof client.bbands.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBbandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bbands.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBbands<TError = unknown>(
  args: InferRequestType<typeof client.bbands.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBbandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bbands.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBetaKey(args: InferRequestType<typeof client.beta.$get>) {
  return ['beta', '/beta', args] as const
}

export function useGetBeta<TError = unknown>(
  args: InferRequestType<typeof client.beta.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBetaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.beta.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBeta<TError = unknown>(
  args: InferRequestType<typeof client.beta.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBetaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.beta.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBondsKey(args: InferRequestType<typeof client.bonds.$get>) {
  return ['bonds', '/bonds', args] as const
}

export function useGetBonds<TError = unknown>(
  args: InferRequestType<typeof client.bonds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBondsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bonds.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBonds<TError = unknown>(
  args: InferRequestType<typeof client.bonds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBondsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bonds.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBopKey(args: InferRequestType<typeof client.bop.$get>) {
  return ['bop', '/bop', args] as const
}

export function useGetBop<TError = unknown>(
  args: InferRequestType<typeof client.bop.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBopKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bop.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBop<TError = unknown>(
  args: InferRequestType<typeof client.bop.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBopKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bop.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCashFlowKey(args: InferRequestType<typeof client.cash_flow.$get>) {
  return ['cash_flow', '/cash_flow', args] as const
}

export function useGetCashFlow<TError = unknown>(
  args: InferRequestType<typeof client.cash_flow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCashFlowKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cash_flow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCashFlow<TError = unknown>(
  args: InferRequestType<typeof client.cash_flow.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCashFlowKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cash_flow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCashFlowConsolidatedKey(
  args: InferRequestType<typeof client.cash_flow.consolidated.$get>,
) {
  return ['cash_flow', '/cash_flow/consolidated', args] as const
}

export function useGetCashFlowConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.cash_flow.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCashFlowConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cash_flow.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCashFlowConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.cash_flow.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCashFlowConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cash_flow.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCciKey(args: InferRequestType<typeof client.cci.$get>) {
  return ['cci', '/cci', args] as const
}

export function useGetCci<TError = unknown>(
  args: InferRequestType<typeof client.cci.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCciKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cci.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCci<TError = unknown>(
  args: InferRequestType<typeof client.cci.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCciKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cci.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCeilKey(args: InferRequestType<typeof client.ceil.$get>) {
  return ['ceil', '/ceil', args] as const
}

export function useGetCeil<TError = unknown>(
  args: InferRequestType<typeof client.ceil.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCeilKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ceil.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCeil<TError = unknown>(
  args: InferRequestType<typeof client.ceil.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCeilKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ceil.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCmoKey(args: InferRequestType<typeof client.cmo.$get>) {
  return ['cmo', '/cmo', args] as const
}

export function useGetCmo<TError = unknown>(
  args: InferRequestType<typeof client.cmo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCmoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cmo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCmo<TError = unknown>(
  args: InferRequestType<typeof client.cmo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCmoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cmo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCommoditiesKey(args: InferRequestType<typeof client.commodities.$get>) {
  return ['commodities', '/commodities', args] as const
}

export function useGetCommodities<TError = unknown>(
  args: InferRequestType<typeof client.commodities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommoditiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commodities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommodities<TError = unknown>(
  args: InferRequestType<typeof client.commodities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCommoditiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.commodities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCoppockKey(args: InferRequestType<typeof client.coppock.$get>) {
  return ['coppock', '/coppock', args] as const
}

export function useGetCoppock<TError = unknown>(
  args: InferRequestType<typeof client.coppock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoppockKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coppock.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCoppock<TError = unknown>(
  args: InferRequestType<typeof client.coppock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoppockKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coppock.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCorrelKey(args: InferRequestType<typeof client.correl.$get>) {
  return ['correl', '/correl', args] as const
}

export function useGetCorrel<TError = unknown>(
  args: InferRequestType<typeof client.correl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorrelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.correl.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCorrel<TError = unknown>(
  args: InferRequestType<typeof client.correl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCorrelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.correl.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCountriesKey() {
  return ['countries', '/countries'] as const
}

export function useGetCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrossListingsKey(args: InferRequestType<typeof client.cross_listings.$get>) {
  return ['cross_listings', '/cross_listings', args] as const
}

export function useGetCrossListings<TError = unknown>(
  args: InferRequestType<typeof client.cross_listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrossListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cross_listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCrossListings<TError = unknown>(
  args: InferRequestType<typeof client.cross_listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrossListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cross_listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCrsiKey(args: InferRequestType<typeof client.crsi.$get>) {
  return ['crsi', '/crsi', args] as const
}

export function useGetCrsi<TError = unknown>(
  args: InferRequestType<typeof client.crsi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrsiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.crsi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCrsi<TError = unknown>(
  args: InferRequestType<typeof client.crsi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCrsiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.crsi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCryptocurrenciesKey(
  args: InferRequestType<typeof client.cryptocurrencies.$get>,
) {
  return ['cryptocurrencies', '/cryptocurrencies', args] as const
}

export function useGetCryptocurrencies<TError = unknown>(
  args: InferRequestType<typeof client.cryptocurrencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCryptocurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cryptocurrencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCryptocurrencies<TError = unknown>(
  args: InferRequestType<typeof client.cryptocurrencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCryptocurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cryptocurrencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCryptocurrencyExchangesKey(
  args: InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
) {
  return ['cryptocurrency_exchanges', '/cryptocurrency_exchanges', args] as const
}

export function useGetCryptocurrencyExchanges<TError = unknown>(
  args: InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCryptocurrencyExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cryptocurrency_exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCryptocurrencyExchanges<TError = unknown>(
  args: InferRequestType<typeof client.cryptocurrency_exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCryptocurrencyExchangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cryptocurrency_exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCurrencyConversionKey(
  args: InferRequestType<typeof client.currency_conversion.$get>,
) {
  return ['currency_conversion', '/currency_conversion', args] as const
}

export function useGetCurrencyConversion<TError = unknown>(
  args: InferRequestType<typeof client.currency_conversion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCurrencyConversionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currency_conversion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCurrencyConversion<TError = unknown>(
  args: InferRequestType<typeof client.currency_conversion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCurrencyConversionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.currency_conversion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDemaKey(args: InferRequestType<typeof client.dema.$get>) {
  return ['dema', '/dema', args] as const
}

export function useGetDema<TError = unknown>(
  args: InferRequestType<typeof client.dema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDemaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dema.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDema<TError = unknown>(
  args: InferRequestType<typeof client.dema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDemaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dema.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDirectHoldersKey(args: InferRequestType<typeof client.direct_holders.$get>) {
  return ['direct_holders', '/direct_holders', args] as const
}

export function useGetDirectHolders<TError = unknown>(
  args: InferRequestType<typeof client.direct_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectHoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.direct_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectHolders<TError = unknown>(
  args: InferRequestType<typeof client.direct_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectHoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.direct_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDivKey(args: InferRequestType<typeof client.div.$get>) {
  return ['div', '/div', args] as const
}

export function useGetDiv<TError = unknown>(
  args: InferRequestType<typeof client.div.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDivKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.div.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDiv<TError = unknown>(
  args: InferRequestType<typeof client.div.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDivKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.div.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDividendsKey(args: InferRequestType<typeof client.dividends.$get>) {
  return ['dividends', '/dividends', args] as const
}

export function useGetDividends<TError = unknown>(
  args: InferRequestType<typeof client.dividends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDividendsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDividends<TError = unknown>(
  args: InferRequestType<typeof client.dividends.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDividendsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dividends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDividendsCalendarKey(
  args: InferRequestType<typeof client.dividends_calendar.$get>,
) {
  return ['dividends_calendar', '/dividends_calendar', args] as const
}

export function useGetDividendsCalendar<TError = unknown>(
  args: InferRequestType<typeof client.dividends_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDividendsCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dividends_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDividendsCalendar<TError = unknown>(
  args: InferRequestType<typeof client.dividends_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDividendsCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dividends_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDpoKey(args: InferRequestType<typeof client.dpo.$get>) {
  return ['dpo', '/dpo', args] as const
}

export function useGetDpo<TError = unknown>(
  args: InferRequestType<typeof client.dpo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDpoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dpo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDpo<TError = unknown>(
  args: InferRequestType<typeof client.dpo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDpoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dpo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDxKey(args: InferRequestType<typeof client.dx.$get>) {
  return ['dx', '/dx', args] as const
}

export function useGetDx<TError = unknown>(
  args: InferRequestType<typeof client.dx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDx<TError = unknown>(
  args: InferRequestType<typeof client.dx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.dx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEarliestTimestampKey(
  args: InferRequestType<typeof client.earliest_timestamp.$get>,
) {
  return ['earliest_timestamp', '/earliest_timestamp', args] as const
}

export function useGetEarliestTimestamp<TError = unknown>(
  args: InferRequestType<typeof client.earliest_timestamp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEarliestTimestampKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earliest_timestamp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarliestTimestamp<TError = unknown>(
  args: InferRequestType<typeof client.earliest_timestamp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEarliestTimestampKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earliest_timestamp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEarningsKey(args: InferRequestType<typeof client.earnings.$get>) {
  return ['earnings', '/earnings', args] as const
}

export function useGetEarnings<TError = unknown>(
  args: InferRequestType<typeof client.earnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEarningsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.earnings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEarnings<TError = unknown>(
  args: InferRequestType<typeof client.earnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEarningsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.earnings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEarningsCalendarKey(
  args: InferRequestType<typeof client.earnings_calendar.$get>,
) {
  return ['earnings_calendar', '/earnings_calendar', args] as const
}

export function useGetEarningsCalendar<TError = unknown>(
  args: InferRequestType<typeof client.earnings_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEarningsCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earnings_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarningsCalendar<TError = unknown>(
  args: InferRequestType<typeof client.earnings_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEarningsCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earnings_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEarningsEstimateKey(
  args: InferRequestType<typeof client.earnings_estimate.$get>,
) {
  return ['earnings_estimate', '/earnings_estimate', args] as const
}

export function useGetEarningsEstimate<TError = unknown>(
  args: InferRequestType<typeof client.earnings_estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEarningsEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earnings_estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEarningsEstimate<TError = unknown>(
  args: InferRequestType<typeof client.earnings_estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEarningsEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.earnings_estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEdgarFilingsArchiveKey(
  args: InferRequestType<typeof client.edgar_filings.archive.$get>,
) {
  return ['edgar_filings', '/edgar_filings/archive', args] as const
}

export function useGetEdgarFilingsArchive<TError = unknown>(
  args: InferRequestType<typeof client.edgar_filings.archive.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgarFilingsArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edgar_filings.archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgarFilingsArchive<TError = unknown>(
  args: InferRequestType<typeof client.edgar_filings.archive.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgarFilingsArchiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.edgar_filings.archive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmaKey(args: InferRequestType<typeof client.ema.$get>) {
  return ['ema', '/ema', args] as const
}

export function useGetEma<TError = unknown>(
  args: InferRequestType<typeof client.ema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ema.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEma<TError = unknown>(
  args: InferRequestType<typeof client.ema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ema.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEodKey(args: InferRequestType<typeof client.eod.$get>) {
  return ['eod', '/eod', args] as const
}

export function useGetEod<TError = unknown>(
  args: InferRequestType<typeof client.eod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.eod.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEod<TError = unknown>(
  args: InferRequestType<typeof client.eod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.eod.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEpsRevisionsKey(args: InferRequestType<typeof client.eps_revisions.$get>) {
  return ['eps_revisions', '/eps_revisions', args] as const
}

export function useGetEpsRevisions<TError = unknown>(
  args: InferRequestType<typeof client.eps_revisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpsRevisionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eps_revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpsRevisions<TError = unknown>(
  args: InferRequestType<typeof client.eps_revisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpsRevisionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eps_revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEpsTrendKey(args: InferRequestType<typeof client.eps_trend.$get>) {
  return ['eps_trend', '/eps_trend', args] as const
}

export function useGetEpsTrend<TError = unknown>(
  args: InferRequestType<typeof client.eps_trend.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpsTrendKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eps_trend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpsTrend<TError = unknown>(
  args: InferRequestType<typeof client.eps_trend.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpsTrendKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eps_trend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsKey(args: InferRequestType<typeof client.etfs.$get>) {
  return ['etfs', '/etfs', args] as const
}

export function useGetEtfs<TError = unknown>(
  args: InferRequestType<typeof client.etfs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.etfs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEtfs<TError = unknown>(
  args: InferRequestType<typeof client.etfs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.etfs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEtfsFamilyKey(args: InferRequestType<typeof client.etfs.family.$get>) {
  return ['etfs', '/etfs/family', args] as const
}

export function useGetEtfsFamily<TError = unknown>(
  args: InferRequestType<typeof client.etfs.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsFamilyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsFamily<TError = unknown>(
  args: InferRequestType<typeof client.etfs.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsFamilyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsListKey(args: InferRequestType<typeof client.etfs.list.$get>) {
  return ['etfs', '/etfs/list', args] as const
}

export function useGetEtfsList<TError = unknown>(
  args: InferRequestType<typeof client.etfs.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsList<TError = unknown>(
  args: InferRequestType<typeof client.etfs.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsTypeKey(args: InferRequestType<typeof client.etfs.type.$get>) {
  return ['etfs', '/etfs/type', args] as const
}

export function useGetEtfsType<TError = unknown>(
  args: InferRequestType<typeof client.etfs.type.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.type.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsType<TError = unknown>(
  args: InferRequestType<typeof client.etfs.type.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.type.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsWorldKey(args: InferRequestType<typeof client.etfs.world.$get>) {
  return ['etfs', '/etfs/world', args] as const
}

export function useGetEtfsWorld<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsWorldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsWorld<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsWorldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsWorldCompositionKey(
  args: InferRequestType<typeof client.etfs.world.composition.$get>,
) {
  return ['etfs', '/etfs/world/composition', args] as const
}

export function useGetEtfsWorldComposition<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.composition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfsWorldCompositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.composition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsWorldComposition<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.composition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfsWorldCompositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.composition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsWorldPerformanceKey(
  args: InferRequestType<typeof client.etfs.world.performance.$get>,
) {
  return ['etfs', '/etfs/world/performance', args] as const
}

export function useGetEtfsWorldPerformance<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.performance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfsWorldPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.performance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsWorldPerformance<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.performance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfsWorldPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.performance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsWorldRiskKey(args: InferRequestType<typeof client.etfs.world.risk.$get>) {
  return ['etfs', '/etfs/world/risk', args] as const
}

export function useGetEtfsWorldRisk<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.risk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsWorldRiskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.risk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsWorldRisk<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.risk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtfsWorldRiskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.risk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtfsWorldSummaryKey(
  args: InferRequestType<typeof client.etfs.world.summary.$get>,
) {
  return ['etfs', '/etfs/world/summary', args] as const
}

export function useGetEtfsWorldSummary<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfsWorldSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtfsWorldSummary<TError = unknown>(
  args: InferRequestType<typeof client.etfs.world.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEtfsWorldSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etfs.world.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExchangeRateKey(args: InferRequestType<typeof client.exchange_rate.$get>) {
  return ['exchange_rate', '/exchange_rate', args] as const
}

export function useGetExchangeRate<TError = unknown>(
  args: InferRequestType<typeof client.exchange_rate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExchangeRateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exchange_rate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExchangeRate<TError = unknown>(
  args: InferRequestType<typeof client.exchange_rate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExchangeRateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exchange_rate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExchangeScheduleKey(
  args: InferRequestType<typeof client.exchange_schedule.$get>,
) {
  return ['exchange_schedule', '/exchange_schedule', args] as const
}

export function useGetExchangeSchedule<TError = unknown>(
  args: InferRequestType<typeof client.exchange_schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExchangeScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exchange_schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExchangeSchedule<TError = unknown>(
  args: InferRequestType<typeof client.exchange_schedule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExchangeScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exchange_schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExchangesKey(args: InferRequestType<typeof client.exchanges.$get>) {
  return ['exchanges', '/exchanges', args] as const
}

export function useGetExchanges<TError = unknown>(
  args: InferRequestType<typeof client.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExchangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExchanges<TError = unknown>(
  args: InferRequestType<typeof client.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExchangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExpKey(args: InferRequestType<typeof client.exp.$get>) {
  return ['exp', '/exp', args] as const
}

export function useGetExp<TError = unknown>(
  args: InferRequestType<typeof client.exp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.exp.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetExp<TError = unknown>(
  args: InferRequestType<typeof client.exp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.exp.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFloorKey(args: InferRequestType<typeof client.floor.$get>) {
  return ['floor', '/floor', args] as const
}

export function useGetFloor<TError = unknown>(
  args: InferRequestType<typeof client.floor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFloorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.floor.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFloor<TError = unknown>(
  args: InferRequestType<typeof client.floor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFloorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.floor.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetForexPairsKey(args: InferRequestType<typeof client.forex_pairs.$get>) {
  return ['forex_pairs', '/forex_pairs', args] as const
}

export function useGetForexPairs<TError = unknown>(
  args: InferRequestType<typeof client.forex_pairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetForexPairsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forex_pairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForexPairs<TError = unknown>(
  args: InferRequestType<typeof client.forex_pairs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetForexPairsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forex_pairs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFundHoldersKey(args: InferRequestType<typeof client.fund_holders.$get>) {
  return ['fund_holders', '/fund_holders', args] as const
}

export function useGetFundHolders<TError = unknown>(
  args: InferRequestType<typeof client.fund_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFundHoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fund_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFundHolders<TError = unknown>(
  args: InferRequestType<typeof client.fund_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFundHoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fund_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFundsKey(args: InferRequestType<typeof client.funds.$get>) {
  return ['funds', '/funds', args] as const
}

export function useGetFunds<TError = unknown>(
  args: InferRequestType<typeof client.funds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.funds.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFunds<TError = unknown>(
  args: InferRequestType<typeof client.funds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.funds.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetGrowthEstimatesKey(
  args: InferRequestType<typeof client.growth_estimates.$get>,
) {
  return ['growth_estimates', '/growth_estimates', args] as const
}

export function useGetGrowthEstimates<TError = unknown>(
  args: InferRequestType<typeof client.growth_estimates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrowthEstimatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.growth_estimates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGrowthEstimates<TError = unknown>(
  args: InferRequestType<typeof client.growth_estimates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGrowthEstimatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.growth_estimates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeikinashicandlesKey(
  args: InferRequestType<typeof client.heikinashicandles.$get>,
) {
  return ['heikinashicandles', '/heikinashicandles', args] as const
}

export function useGetHeikinashicandles<TError = unknown>(
  args: InferRequestType<typeof client.heikinashicandles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHeikinashicandlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heikinashicandles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeikinashicandles<TError = unknown>(
  args: InferRequestType<typeof client.heikinashicandles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHeikinashicandlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.heikinashicandles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHlc3Key(args: InferRequestType<typeof client.hlc3.$get>) {
  return ['hlc3', '/hlc3', args] as const
}

export function useGetHlc3<TError = unknown>(
  args: InferRequestType<typeof client.hlc3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHlc3Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hlc3.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHlc3<TError = unknown>(
  args: InferRequestType<typeof client.hlc3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHlc3Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hlc3.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHtDcperiodKey(args: InferRequestType<typeof client.ht_dcperiod.$get>) {
  return ['ht_dcperiod', '/ht_dcperiod', args] as const
}

export function useGetHtDcperiod<TError = unknown>(
  args: InferRequestType<typeof client.ht_dcperiod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtDcperiodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_dcperiod.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHtDcperiod<TError = unknown>(
  args: InferRequestType<typeof client.ht_dcperiod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtDcperiodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_dcperiod.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHtDcphaseKey(args: InferRequestType<typeof client.ht_dcphase.$get>) {
  return ['ht_dcphase', '/ht_dcphase', args] as const
}

export function useGetHtDcphase<TError = unknown>(
  args: InferRequestType<typeof client.ht_dcphase.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtDcphaseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_dcphase.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHtDcphase<TError = unknown>(
  args: InferRequestType<typeof client.ht_dcphase.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtDcphaseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_dcphase.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHtPhasorKey(args: InferRequestType<typeof client.ht_phasor.$get>) {
  return ['ht_phasor', '/ht_phasor', args] as const
}

export function useGetHtPhasor<TError = unknown>(
  args: InferRequestType<typeof client.ht_phasor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtPhasorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_phasor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHtPhasor<TError = unknown>(
  args: InferRequestType<typeof client.ht_phasor.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtPhasorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_phasor.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHtSineKey(args: InferRequestType<typeof client.ht_sine.$get>) {
  return ['ht_sine', '/ht_sine', args] as const
}

export function useGetHtSine<TError = unknown>(
  args: InferRequestType<typeof client.ht_sine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtSineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ht_sine.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHtSine<TError = unknown>(
  args: InferRequestType<typeof client.ht_sine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtSineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ht_sine.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHtTrendlineKey(args: InferRequestType<typeof client.ht_trendline.$get>) {
  return ['ht_trendline', '/ht_trendline', args] as const
}

export function useGetHtTrendline<TError = unknown>(
  args: InferRequestType<typeof client.ht_trendline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtTrendlineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_trendline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHtTrendline<TError = unknown>(
  args: InferRequestType<typeof client.ht_trendline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtTrendlineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_trendline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHtTrendmodeKey(args: InferRequestType<typeof client.ht_trendmode.$get>) {
  return ['ht_trendmode', '/ht_trendmode', args] as const
}

export function useGetHtTrendmode<TError = unknown>(
  args: InferRequestType<typeof client.ht_trendmode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtTrendmodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_trendmode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHtTrendmode<TError = unknown>(
  args: InferRequestType<typeof client.ht_trendmode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHtTrendmodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ht_trendmode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIchimokuKey(args: InferRequestType<typeof client.ichimoku.$get>) {
  return ['ichimoku', '/ichimoku', args] as const
}

export function useGetIchimoku<TError = unknown>(
  args: InferRequestType<typeof client.ichimoku.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIchimokuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ichimoku.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIchimoku<TError = unknown>(
  args: InferRequestType<typeof client.ichimoku.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIchimokuKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ichimoku.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetIncomeStatementKey(
  args: InferRequestType<typeof client.income_statement.$get>,
) {
  return ['income_statement', '/income_statement', args] as const
}

export function useGetIncomeStatement<TError = unknown>(
  args: InferRequestType<typeof client.income_statement.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncomeStatementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.income_statement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncomeStatement<TError = unknown>(
  args: InferRequestType<typeof client.income_statement.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncomeStatementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.income_statement.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIncomeStatementConsolidatedKey(
  args: InferRequestType<typeof client.income_statement.consolidated.$get>,
) {
  return ['income_statement', '/income_statement/consolidated', args] as const
}

export function useGetIncomeStatementConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.income_statement.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncomeStatementConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.income_statement.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIncomeStatementConsolidated<TError = unknown>(
  args: InferRequestType<typeof client.income_statement.consolidated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIncomeStatementConsolidatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.income_statement.consolidated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsiderTransactionsKey(
  args: InferRequestType<typeof client.insider_transactions.$get>,
) {
  return ['insider_transactions', '/insider_transactions', args] as const
}

export function useGetInsiderTransactions<TError = unknown>(
  args: InferRequestType<typeof client.insider_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInsiderTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insider_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsiderTransactions<TError = unknown>(
  args: InferRequestType<typeof client.insider_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInsiderTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insider_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstitutionalHoldersKey(
  args: InferRequestType<typeof client.institutional_holders.$get>,
) {
  return ['institutional_holders', '/institutional_holders', args] as const
}

export function useGetInstitutionalHolders<TError = unknown>(
  args: InferRequestType<typeof client.institutional_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstitutionalHoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.institutional_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstitutionalHolders<TError = unknown>(
  args: InferRequestType<typeof client.institutional_holders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstitutionalHoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.institutional_holders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstrumentTypeKey() {
  return ['instrument_type', '/instrument_type'] as const
}

export function useGetInstrumentType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstrumentTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instrument_type.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstrumentType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstrumentTypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instrument_type.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntervalsKey() {
  return ['intervals', '/intervals'] as const
}

export function useGetIntervals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntervalsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intervals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntervals<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntervalsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.intervals.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpoCalendarKey(args: InferRequestType<typeof client.ipo_calendar.$get>) {
  return ['ipo_calendar', '/ipo_calendar', args] as const
}

export function useGetIpoCalendar<TError = unknown>(
  args: InferRequestType<typeof client.ipo_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpoCalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipo_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpoCalendar<TError = unknown>(
  args: InferRequestType<typeof client.ipo_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpoCalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ipo_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKamaKey(args: InferRequestType<typeof client.kama.$get>) {
  return ['kama', '/kama', args] as const
}

export function useGetKama<TError = unknown>(
  args: InferRequestType<typeof client.kama.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKamaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.kama.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKama<TError = unknown>(
  args: InferRequestType<typeof client.kama.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKamaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.kama.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetKeltnerKey(args: InferRequestType<typeof client.keltner.$get>) {
  return ['keltner', '/keltner', args] as const
}

export function useGetKeltner<TError = unknown>(
  args: InferRequestType<typeof client.keltner.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeltnerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keltner.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKeltner<TError = unknown>(
  args: InferRequestType<typeof client.keltner.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeltnerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keltner.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetKeyExecutivesKey(args: InferRequestType<typeof client.key_executives.$get>) {
  return ['key_executives', '/key_executives', args] as const
}

export function useGetKeyExecutives<TError = unknown>(
  args: InferRequestType<typeof client.key_executives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyExecutivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.key_executives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeyExecutives<TError = unknown>(
  args: InferRequestType<typeof client.key_executives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeyExecutivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.key_executives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKstKey(args: InferRequestType<typeof client.kst.$get>) {
  return ['kst', '/kst', args] as const
}

export function useGetKst<TError = unknown>(
  args: InferRequestType<typeof client.kst.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKstKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.kst.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKst<TError = unknown>(
  args: InferRequestType<typeof client.kst.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKstKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.kst.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLastChangeEndpointKey(
  args: InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
) {
  return ['last_change', '/last_change/:endpoint', args] as const
}

export function useGetLastChangeEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLastChangeEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.last_change[':endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLastChangeEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.last_change)[':endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLastChangeEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.last_change[':endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinearregKey(args: InferRequestType<typeof client.linearreg.$get>) {
  return ['linearreg', '/linearreg', args] as const
}

export function useGetLinearreg<TError = unknown>(
  args: InferRequestType<typeof client.linearreg.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinearregKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearreg.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinearreg<TError = unknown>(
  args: InferRequestType<typeof client.linearreg.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinearregKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearreg.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinearregangleKey(args: InferRequestType<typeof client.linearregangle.$get>) {
  return ['linearregangle', '/linearregangle', args] as const
}

export function useGetLinearregangle<TError = unknown>(
  args: InferRequestType<typeof client.linearregangle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinearregangleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearregangle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinearregangle<TError = unknown>(
  args: InferRequestType<typeof client.linearregangle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinearregangleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearregangle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinearreginterceptKey(
  args: InferRequestType<typeof client.linearregintercept.$get>,
) {
  return ['linearregintercept', '/linearregintercept', args] as const
}

export function useGetLinearregintercept<TError = unknown>(
  args: InferRequestType<typeof client.linearregintercept.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinearreginterceptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearregintercept.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinearregintercept<TError = unknown>(
  args: InferRequestType<typeof client.linearregintercept.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLinearreginterceptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearregintercept.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinearregslopeKey(args: InferRequestType<typeof client.linearregslope.$get>) {
  return ['linearregslope', '/linearregslope', args] as const
}

export function useGetLinearregslope<TError = unknown>(
  args: InferRequestType<typeof client.linearregslope.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinearregslopeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearregslope.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinearregslope<TError = unknown>(
  args: InferRequestType<typeof client.linearregslope.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLinearregslopeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.linearregslope.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLnKey(args: InferRequestType<typeof client.ln.$get>) {
  return ['ln', '/ln', args] as const
}

export function useGetLn<TError = unknown>(
  args: InferRequestType<typeof client.ln.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ln.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLn<TError = unknown>(
  args: InferRequestType<typeof client.ln.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ln.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLog10Key(args: InferRequestType<typeof client.log10.$get>) {
  return ['log10', '/log10', args] as const
}

export function useGetLog10<TError = unknown>(
  args: InferRequestType<typeof client.log10.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLog10Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.log10.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLog10<TError = unknown>(
  args: InferRequestType<typeof client.log10.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLog10Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.log10.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLogoKey(args: InferRequestType<typeof client.logo.$get>) {
  return ['logo', '/logo', args] as const
}

export function useGetLogo<TError = unknown>(
  args: InferRequestType<typeof client.logo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogo<TError = unknown>(
  args: InferRequestType<typeof client.logo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMaKey(args: InferRequestType<typeof client.ma.$get>) {
  return ['ma', '/ma', args] as const
}

export function useGetMa<TError = unknown>(
  args: InferRequestType<typeof client.ma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMa<TError = unknown>(
  args: InferRequestType<typeof client.ma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMacdKey(args: InferRequestType<typeof client.macd.$get>) {
  return ['macd', '/macd', args] as const
}

export function useGetMacd<TError = unknown>(
  args: InferRequestType<typeof client.macd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macd.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMacd<TError = unknown>(
  args: InferRequestType<typeof client.macd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macd.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMacdSlopeKey(args: InferRequestType<typeof client.macd_slope.$get>) {
  return ['macd_slope', '/macd_slope', args] as const
}

export function useGetMacdSlope<TError = unknown>(
  args: InferRequestType<typeof client.macd_slope.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacdSlopeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.macd_slope.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMacdSlope<TError = unknown>(
  args: InferRequestType<typeof client.macd_slope.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacdSlopeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.macd_slope.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMacdextKey(args: InferRequestType<typeof client.macdext.$get>) {
  return ['macdext', '/macdext', args] as const
}

export function useGetMacdext<TError = unknown>(
  args: InferRequestType<typeof client.macdext.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacdextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macdext.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMacdext<TError = unknown>(
  args: InferRequestType<typeof client.macdext.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacdextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macdext.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMamaKey(args: InferRequestType<typeof client.mama.$get>) {
  return ['mama', '/mama', args] as const
}

export function useGetMama<TError = unknown>(
  args: InferRequestType<typeof client.mama.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMamaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mama.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMama<TError = unknown>(
  args: InferRequestType<typeof client.mama.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMamaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mama.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMarketCapKey(args: InferRequestType<typeof client.market_cap.$get>) {
  return ['market_cap', '/market_cap', args] as const
}

export function useGetMarketCap<TError = unknown>(
  args: InferRequestType<typeof client.market_cap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketCapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.market_cap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketCap<TError = unknown>(
  args: InferRequestType<typeof client.market_cap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketCapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.market_cap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketMoversMarketKey(
  args: InferRequestType<(typeof client.market_movers)[':market']['$get']>,
) {
  return ['market_movers', '/market_movers/:market', args] as const
}

export function useGetMarketMoversMarket<TError = unknown>(
  args: InferRequestType<(typeof client.market_movers)[':market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketMoversMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.market_movers[':market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketMoversMarket<TError = unknown>(
  args: InferRequestType<(typeof client.market_movers)[':market']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketMoversMarketKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.market_movers[':market'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketStateKey(args: InferRequestType<typeof client.market_state.$get>) {
  return ['market_state', '/market_state', args] as const
}

export function useGetMarketState<TError = unknown>(
  args: InferRequestType<typeof client.market_state.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketStateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.market_state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketState<TError = unknown>(
  args: InferRequestType<typeof client.market_state.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarketStateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.market_state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMaxKey(args: InferRequestType<typeof client.max.$get>) {
  return ['max', '/max', args] as const
}

export function useGetMax<TError = unknown>(
  args: InferRequestType<typeof client.max.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.max.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMax<TError = unknown>(
  args: InferRequestType<typeof client.max.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.max.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMaxindexKey(args: InferRequestType<typeof client.maxindex.$get>) {
  return ['maxindex', '/maxindex', args] as const
}

export function useGetMaxindex<TError = unknown>(
  args: InferRequestType<typeof client.maxindex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaxindexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.maxindex.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMaxindex<TError = unknown>(
  args: InferRequestType<typeof client.maxindex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaxindexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.maxindex.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMcginleyDynamicKey(
  args: InferRequestType<typeof client.mcginley_dynamic.$get>,
) {
  return ['mcginley_dynamic', '/mcginley_dynamic', args] as const
}

export function useGetMcginleyDynamic<TError = unknown>(
  args: InferRequestType<typeof client.mcginley_dynamic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMcginleyDynamicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mcginley_dynamic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMcginleyDynamic<TError = unknown>(
  args: InferRequestType<typeof client.mcginley_dynamic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMcginleyDynamicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mcginley_dynamic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMedpriceKey(args: InferRequestType<typeof client.medprice.$get>) {
  return ['medprice', '/medprice', args] as const
}

export function useGetMedprice<TError = unknown>(
  args: InferRequestType<typeof client.medprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMedpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.medprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMedprice<TError = unknown>(
  args: InferRequestType<typeof client.medprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMedpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.medprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMfiKey(args: InferRequestType<typeof client.mfi.$get>) {
  return ['mfi', '/mfi', args] as const
}

export function useGetMfi<TError = unknown>(
  args: InferRequestType<typeof client.mfi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMfiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mfi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMfi<TError = unknown>(
  args: InferRequestType<typeof client.mfi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMfiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mfi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMidpointKey(args: InferRequestType<typeof client.midpoint.$get>) {
  return ['midpoint', '/midpoint', args] as const
}

export function useGetMidpoint<TError = unknown>(
  args: InferRequestType<typeof client.midpoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMidpointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.midpoint.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMidpoint<TError = unknown>(
  args: InferRequestType<typeof client.midpoint.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMidpointKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.midpoint.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMidpriceKey(args: InferRequestType<typeof client.midprice.$get>) {
  return ['midprice', '/midprice', args] as const
}

export function useGetMidprice<TError = unknown>(
  args: InferRequestType<typeof client.midprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMidpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.midprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMidprice<TError = unknown>(
  args: InferRequestType<typeof client.midprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMidpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.midprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMinKey(args: InferRequestType<typeof client.min.$get>) {
  return ['min', '/min', args] as const
}

export function useGetMin<TError = unknown>(
  args: InferRequestType<typeof client.min.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.min.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMin<TError = unknown>(
  args: InferRequestType<typeof client.min.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.min.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMinindexKey(args: InferRequestType<typeof client.minindex.$get>) {
  return ['minindex', '/minindex', args] as const
}

export function useGetMinindex<TError = unknown>(
  args: InferRequestType<typeof client.minindex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinindexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minindex.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMinindex<TError = unknown>(
  args: InferRequestType<typeof client.minindex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinindexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minindex.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMinmaxKey(args: InferRequestType<typeof client.minmax.$get>) {
  return ['minmax', '/minmax', args] as const
}

export function useGetMinmax<TError = unknown>(
  args: InferRequestType<typeof client.minmax.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinmaxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minmax.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMinmax<TError = unknown>(
  args: InferRequestType<typeof client.minmax.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinmaxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minmax.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMinmaxindexKey(args: InferRequestType<typeof client.minmaxindex.$get>) {
  return ['minmaxindex', '/minmaxindex', args] as const
}

export function useGetMinmaxindex<TError = unknown>(
  args: InferRequestType<typeof client.minmaxindex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinmaxindexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.minmaxindex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMinmaxindex<TError = unknown>(
  args: InferRequestType<typeof client.minmaxindex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinmaxindexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.minmaxindex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMinusDiKey(args: InferRequestType<typeof client.minus_di.$get>) {
  return ['minus_di', '/minus_di', args] as const
}

export function useGetMinusDi<TError = unknown>(
  args: InferRequestType<typeof client.minus_di.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinusDiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minus_di.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMinusDi<TError = unknown>(
  args: InferRequestType<typeof client.minus_di.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinusDiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minus_di.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMinusDmKey(args: InferRequestType<typeof client.minus_dm.$get>) {
  return ['minus_dm', '/minus_dm', args] as const
}

export function useGetMinusDm<TError = unknown>(
  args: InferRequestType<typeof client.minus_dm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinusDmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minus_dm.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMinusDm<TError = unknown>(
  args: InferRequestType<typeof client.minus_dm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMinusDmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.minus_dm.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMomKey(args: InferRequestType<typeof client.mom.$get>) {
  return ['mom', '/mom', args] as const
}

export function useGetMom<TError = unknown>(
  args: InferRequestType<typeof client.mom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mom.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMom<TError = unknown>(
  args: InferRequestType<typeof client.mom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mom.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMoneyMarketFundsListKey(
  args: InferRequestType<typeof client.money_market_funds.list.$get>,
) {
  return ['money_market_funds', '/money_market_funds/list', args] as const
}

export function useGetMoneyMarketFundsList<TError = unknown>(
  args: InferRequestType<typeof client.money_market_funds.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMoneyMarketFundsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.money_market_funds.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoneyMarketFundsList<TError = unknown>(
  args: InferRequestType<typeof client.money_market_funds.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMoneyMarketFundsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.money_market_funds.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoneyMarketFundsWorldKey(
  args: InferRequestType<typeof client.money_market_funds.world.$get>,
) {
  return ['money_market_funds', '/money_market_funds/world', args] as const
}

export function useGetMoneyMarketFundsWorld<TError = unknown>(
  args: InferRequestType<typeof client.money_market_funds.world.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMoneyMarketFundsWorldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.money_market_funds.world.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoneyMarketFundsWorld<TError = unknown>(
  args: InferRequestType<typeof client.money_market_funds.world.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMoneyMarketFundsWorldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.money_market_funds.world.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMultKey(args: InferRequestType<typeof client.mult.$get>) {
  return ['mult', '/mult', args] as const
}

export function useGetMult<TError = unknown>(
  args: InferRequestType<typeof client.mult.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMultKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mult.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMult<TError = unknown>(
  args: InferRequestType<typeof client.mult.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMultKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.mult.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMutualFundsFamilyKey(
  args: InferRequestType<typeof client.mutual_funds.family.$get>,
) {
  return ['mutual_funds', '/mutual_funds/family', args] as const
}

export function useGetMutualFundsFamily<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsFamilyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsFamily<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.family.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsFamilyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.family.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsListKey(
  args: InferRequestType<typeof client.mutual_funds.list.$get>,
) {
  return ['mutual_funds', '/mutual_funds/list', args] as const
}

export function useGetMutualFundsList<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsList<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsTypeKey(
  args: InferRequestType<typeof client.mutual_funds.type.$get>,
) {
  return ['mutual_funds', '/mutual_funds/type', args] as const
}

export function useGetMutualFundsType<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.type.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.type.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsType<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.type.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.type.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldKey(
  args: InferRequestType<typeof client.mutual_funds.world.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world', args] as const
}

export function useGetMutualFundsWorld<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorld<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldCompositionKey(
  args: InferRequestType<typeof client.mutual_funds.world.composition.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/composition', args] as const
}

export function useGetMutualFundsWorldComposition<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.composition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldCompositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.composition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldComposition<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.composition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldCompositionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.composition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldPerformanceKey(
  args: InferRequestType<typeof client.mutual_funds.world.performance.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/performance', args] as const
}

export function useGetMutualFundsWorldPerformance<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.performance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.performance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldPerformance<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.performance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldPerformanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.performance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldPurchaseInfoKey(
  args: InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/purchase_info', args] as const
}

export function useGetMutualFundsWorldPurchaseInfo<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldPurchaseInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.purchase_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldPurchaseInfo<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldPurchaseInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.purchase_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldRatingsKey(
  args: InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/ratings', args] as const
}

export function useGetMutualFundsWorldRatings<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldRatings<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.ratings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldRiskKey(
  args: InferRequestType<typeof client.mutual_funds.world.risk.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/risk', args] as const
}

export function useGetMutualFundsWorldRisk<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.risk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.risk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldRisk<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.risk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldRiskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.risk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldSummaryKey(
  args: InferRequestType<typeof client.mutual_funds.world.summary.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/summary', args] as const
}

export function useGetMutualFundsWorldSummary<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldSummary<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMutualFundsWorldSustainabilityKey(
  args: InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
) {
  return ['mutual_funds', '/mutual_funds/world/sustainability', args] as const
}

export function useGetMutualFundsWorldSustainability<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldSustainabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.sustainability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMutualFundsWorldSustainability<TError = unknown>(
  args: InferRequestType<typeof client.mutual_funds.world.sustainability.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMutualFundsWorldSustainabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mutual_funds.world.sustainability.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNatrKey(args: InferRequestType<typeof client.natr.$get>) {
  return ['natr', '/natr', args] as const
}

export function useGetNatr<TError = unknown>(
  args: InferRequestType<typeof client.natr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNatrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.natr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNatr<TError = unknown>(
  args: InferRequestType<typeof client.natr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNatrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.natr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetObvKey(args: InferRequestType<typeof client.obv.$get>) {
  return ['obv', '/obv', args] as const
}

export function useGetObv<TError = unknown>(
  args: InferRequestType<typeof client.obv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.obv.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetObv<TError = unknown>(
  args: InferRequestType<typeof client.obv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetObvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.obv.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPercentBKey(args: InferRequestType<typeof client.percent_b.$get>) {
  return ['percent_b', '/percent_b', args] as const
}

export function useGetPercentB<TError = unknown>(
  args: InferRequestType<typeof client.percent_b.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPercentBKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.percent_b.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPercentB<TError = unknown>(
  args: InferRequestType<typeof client.percent_b.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPercentBKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.percent_b.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPivotPointsHlKey(args: InferRequestType<typeof client.pivot_points_hl.$get>) {
  return ['pivot_points_hl', '/pivot_points_hl', args] as const
}

export function useGetPivotPointsHl<TError = unknown>(
  args: InferRequestType<typeof client.pivot_points_hl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPivotPointsHlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pivot_points_hl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPivotPointsHl<TError = unknown>(
  args: InferRequestType<typeof client.pivot_points_hl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPivotPointsHlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pivot_points_hl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlusDiKey(args: InferRequestType<typeof client.plus_di.$get>) {
  return ['plus_di', '/plus_di', args] as const
}

export function useGetPlusDi<TError = unknown>(
  args: InferRequestType<typeof client.plus_di.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlusDiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plus_di.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlusDi<TError = unknown>(
  args: InferRequestType<typeof client.plus_di.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlusDiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plus_di.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlusDmKey(args: InferRequestType<typeof client.plus_dm.$get>) {
  return ['plus_dm', '/plus_dm', args] as const
}

export function useGetPlusDm<TError = unknown>(
  args: InferRequestType<typeof client.plus_dm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlusDmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plus_dm.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlusDm<TError = unknown>(
  args: InferRequestType<typeof client.plus_dm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlusDmKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plus_dm.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPpoKey(args: InferRequestType<typeof client.ppo.$get>) {
  return ['ppo', '/ppo', args] as const
}

export function useGetPpo<TError = unknown>(
  args: InferRequestType<typeof client.ppo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ppo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPpo<TError = unknown>(
  args: InferRequestType<typeof client.ppo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPpoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ppo.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPressReleasesKey(args: InferRequestType<typeof client.press_releases.$get>) {
  return ['press_releases', '/press_releases', args] as const
}

export function useGetPressReleases<TError = unknown>(
  args: InferRequestType<typeof client.press_releases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPressReleasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.press_releases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPressReleases<TError = unknown>(
  args: InferRequestType<typeof client.press_releases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPressReleasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.press_releases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPriceKey(args: InferRequestType<typeof client.price.$get>) {
  return ['price', '/price', args] as const
}

export function useGetPrice<TError = unknown>(
  args: InferRequestType<typeof client.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.price.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPrice<TError = unknown>(
  args: InferRequestType<typeof client.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.price.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPriceTargetKey(args: InferRequestType<typeof client.price_target.$get>) {
  return ['price_target', '/price_target', args] as const
}

export function useGetPriceTarget<TError = unknown>(
  args: InferRequestType<typeof client.price_target.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceTargetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_target.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceTarget<TError = unknown>(
  args: InferRequestType<typeof client.price_target.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPriceTargetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.price_target.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileKey(args: InferRequestType<typeof client.profile.$get>) {
  return ['profile', '/profile', args] as const
}

export function useGetProfile<TError = unknown>(
  args: InferRequestType<typeof client.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.profile.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProfile<TError = unknown>(
  args: InferRequestType<typeof client.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.profile.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetQuoteKey(args: InferRequestType<typeof client.quote.$get>) {
  return ['quote', '/quote', args] as const
}

export function useGetQuote<TError = unknown>(
  args: InferRequestType<typeof client.quote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quote.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQuote<TError = unknown>(
  args: InferRequestType<typeof client.quote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.quote.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRecommendationsKey(
  args: InferRequestType<typeof client.recommendations.$get>,
) {
  return ['recommendations', '/recommendations', args] as const
}

export function useGetRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecommendations<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRevenueEstimateKey(
  args: InferRequestType<typeof client.revenue_estimate.$get>,
) {
  return ['revenue_estimate', '/revenue_estimate', args] as const
}

export function useGetRevenueEstimate<TError = unknown>(
  args: InferRequestType<typeof client.revenue_estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRevenueEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.revenue_estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRevenueEstimate<TError = unknown>(
  args: InferRequestType<typeof client.revenue_estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRevenueEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.revenue_estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRocKey(args: InferRequestType<typeof client.roc.$get>) {
  return ['roc', '/roc', args] as const
}

export function useGetRoc<TError = unknown>(
  args: InferRequestType<typeof client.roc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoc<TError = unknown>(
  args: InferRequestType<typeof client.roc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRocpKey(args: InferRequestType<typeof client.rocp.$get>) {
  return ['rocp', '/rocp', args] as const
}

export function useGetRocp<TError = unknown>(
  args: InferRequestType<typeof client.rocp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rocp.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRocp<TError = unknown>(
  args: InferRequestType<typeof client.rocp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocpKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rocp.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRocrKey(args: InferRequestType<typeof client.rocr.$get>) {
  return ['rocr', '/rocr', args] as const
}

export function useGetRocr<TError = unknown>(
  args: InferRequestType<typeof client.rocr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rocr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRocr<TError = unknown>(
  args: InferRequestType<typeof client.rocr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rocr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRocr100Key(args: InferRequestType<typeof client.rocr100.$get>) {
  return ['rocr100', '/rocr100', args] as const
}

export function useGetRocr100<TError = unknown>(
  args: InferRequestType<typeof client.rocr100.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocr100Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rocr100.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRocr100<TError = unknown>(
  args: InferRequestType<typeof client.rocr100.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRocr100Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rocr100.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRsiKey(args: InferRequestType<typeof client.rsi.$get>) {
  return ['rsi', '/rsi', args] as const
}

export function useGetRsi<TError = unknown>(
  args: InferRequestType<typeof client.rsi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRsiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rsi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRsi<TError = unknown>(
  args: InferRequestType<typeof client.rsi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRsiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rsi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRvolKey(args: InferRequestType<typeof client.rvol.$get>) {
  return ['rvol', '/rvol', args] as const
}

export function useGetRvol<TError = unknown>(
  args: InferRequestType<typeof client.rvol.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRvolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rvol.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRvol<TError = unknown>(
  args: InferRequestType<typeof client.rvol.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRvolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rvol.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSanctionsSourceKey(
  args: InferRequestType<(typeof client.sanctions)[':source']['$get']>,
) {
  return ['sanctions', '/sanctions/:source', args] as const
}

export function useGetSanctionsSource<TError = unknown>(
  args: InferRequestType<(typeof client.sanctions)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSanctionsSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sanctions[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSanctionsSource<TError = unknown>(
  args: InferRequestType<(typeof client.sanctions)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSanctionsSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sanctions[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSarKey(args: InferRequestType<typeof client.sar.$get>) {
  return ['sar', '/sar', args] as const
}

export function useGetSar<TError = unknown>(
  args: InferRequestType<typeof client.sar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sar.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSar<TError = unknown>(
  args: InferRequestType<typeof client.sar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sar.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSarextKey(args: InferRequestType<typeof client.sarext.$get>) {
  return ['sarext', '/sarext', args] as const
}

export function useGetSarext<TError = unknown>(
  args: InferRequestType<typeof client.sarext.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSarextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sarext.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSarext<TError = unknown>(
  args: InferRequestType<typeof client.sarext.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSarextKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sarext.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSmaKey(args: InferRequestType<typeof client.sma.$get>) {
  return ['sma', '/sma', args] as const
}

export function useGetSma<TError = unknown>(
  args: InferRequestType<typeof client.sma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSma<TError = unknown>(
  args: InferRequestType<typeof client.sma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSmaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSplitsKey(args: InferRequestType<typeof client.splits.$get>) {
  return ['splits', '/splits', args] as const
}

export function useGetSplits<TError = unknown>(
  args: InferRequestType<typeof client.splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSplitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.splits.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSplits<TError = unknown>(
  args: InferRequestType<typeof client.splits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSplitsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.splits.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSplitsCalendarKey(
  args: InferRequestType<typeof client.splits_calendar.$get>,
) {
  return ['splits_calendar', '/splits_calendar', args] as const
}

export function useGetSplitsCalendar<TError = unknown>(
  args: InferRequestType<typeof client.splits_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSplitsCalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.splits_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSplitsCalendar<TError = unknown>(
  args: InferRequestType<typeof client.splits_calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSplitsCalendarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.splits_calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSqrtKey(args: InferRequestType<typeof client.sqrt.$get>) {
  return ['sqrt', '/sqrt', args] as const
}

export function useGetSqrt<TError = unknown>(
  args: InferRequestType<typeof client.sqrt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSqrtKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sqrt.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSqrt<TError = unknown>(
  args: InferRequestType<typeof client.sqrt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSqrtKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sqrt.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStatisticsKey(args: InferRequestType<typeof client.statistics.$get>) {
  return ['statistics', '/statistics', args] as const
}

export function useGetStatistics<TError = unknown>(
  args: InferRequestType<typeof client.statistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatistics<TError = unknown>(
  args: InferRequestType<typeof client.statistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatisticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStddevKey(args: InferRequestType<typeof client.stddev.$get>) {
  return ['stddev', '/stddev', args] as const
}

export function useGetStddev<TError = unknown>(
  args: InferRequestType<typeof client.stddev.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStddevKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stddev.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStddev<TError = unknown>(
  args: InferRequestType<typeof client.stddev.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStddevKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stddev.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStochKey(args: InferRequestType<typeof client.stoch.$get>) {
  return ['stoch', '/stoch', args] as const
}

export function useGetStoch<TError = unknown>(
  args: InferRequestType<typeof client.stoch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStochKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stoch.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStoch<TError = unknown>(
  args: InferRequestType<typeof client.stoch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStochKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stoch.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStochfKey(args: InferRequestType<typeof client.stochf.$get>) {
  return ['stochf', '/stochf', args] as const
}

export function useGetStochf<TError = unknown>(
  args: InferRequestType<typeof client.stochf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStochfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stochf.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStochf<TError = unknown>(
  args: InferRequestType<typeof client.stochf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStochfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stochf.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStochrsiKey(args: InferRequestType<typeof client.stochrsi.$get>) {
  return ['stochrsi', '/stochrsi', args] as const
}

export function useGetStochrsi<TError = unknown>(
  args: InferRequestType<typeof client.stochrsi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStochrsiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stochrsi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStochrsi<TError = unknown>(
  args: InferRequestType<typeof client.stochrsi.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStochrsiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stochrsi.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStocksKey(args: InferRequestType<typeof client.stocks.$get>) {
  return ['stocks', '/stocks', args] as const
}

export function useGetStocks<TError = unknown>(
  args: InferRequestType<typeof client.stocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stocks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStocks<TError = unknown>(
  args: InferRequestType<typeof client.stocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStocksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.stocks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSubKey(args: InferRequestType<typeof client.sub.$get>) {
  return ['sub', '/sub', args] as const
}

export function useGetSub<TError = unknown>(
  args: InferRequestType<typeof client.sub.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sub.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSub<TError = unknown>(
  args: InferRequestType<typeof client.sub.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sub.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSumKey(args: InferRequestType<typeof client.sum.$get>) {
  return ['sum', '/sum', args] as const
}

export function useGetSum<TError = unknown>(
  args: InferRequestType<typeof client.sum.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSumKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sum.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSum<TError = unknown>(
  args: InferRequestType<typeof client.sum.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSumKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sum.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSupertrendKey(args: InferRequestType<typeof client.supertrend.$get>) {
  return ['supertrend', '/supertrend', args] as const
}

export function useGetSupertrend<TError = unknown>(
  args: InferRequestType<typeof client.supertrend.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupertrendKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supertrend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupertrend<TError = unknown>(
  args: InferRequestType<typeof client.supertrend.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSupertrendKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supertrend.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSupertrendHeikinashicandlesKey(
  args: InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
) {
  return ['supertrend_heikinashicandles', '/supertrend_heikinashicandles', args] as const
}

export function useGetSupertrendHeikinashicandles<TError = unknown>(
  args: InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupertrendHeikinashicandlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supertrend_heikinashicandles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupertrendHeikinashicandles<TError = unknown>(
  args: InferRequestType<typeof client.supertrend_heikinashicandles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupertrendHeikinashicandlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supertrend_heikinashicandles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSymbolSearchKey(args: InferRequestType<typeof client.symbol_search.$get>) {
  return ['symbol_search', '/symbol_search', args] as const
}

export function useGetSymbolSearch<TError = unknown>(
  args: InferRequestType<typeof client.symbol_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSymbolSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.symbol_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSymbolSearch<TError = unknown>(
  args: InferRequestType<typeof client.symbol_search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSymbolSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.symbol_search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetT3maKey(args: InferRequestType<typeof client.t3ma.$get>) {
  return ['t3ma', '/t3ma', args] as const
}

export function useGetT3ma<TError = unknown>(
  args: InferRequestType<typeof client.t3ma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetT3maKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.t3ma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetT3ma<TError = unknown>(
  args: InferRequestType<typeof client.t3ma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetT3maKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.t3ma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTaxInfoKey(args: InferRequestType<typeof client.tax_info.$get>) {
  return ['tax_info', '/tax_info', args] as const
}

export function useGetTaxInfo<TError = unknown>(
  args: InferRequestType<typeof client.tax_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tax_info.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTaxInfo<TError = unknown>(
  args: InferRequestType<typeof client.tax_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tax_info.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTechnicalIndicatorsKey() {
  return ['technical_indicators', '/technical_indicators'] as const
}

export function useGetTechnicalIndicators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechnicalIndicatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.technical_indicators.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechnicalIndicators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechnicalIndicatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.technical_indicators.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemaKey(args: InferRequestType<typeof client.tema.$get>) {
  return ['tema', '/tema', args] as const
}

export function useGetTema<TError = unknown>(
  args: InferRequestType<typeof client.tema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tema.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTema<TError = unknown>(
  args: InferRequestType<typeof client.tema.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tema.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTimeSeriesKey(args: InferRequestType<typeof client.time_series.$get>) {
  return ['time_series', '/time_series', args] as const
}

export function useGetTimeSeries<TError = unknown>(
  args: InferRequestType<typeof client.time_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimeSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeSeries<TError = unknown>(
  args: InferRequestType<typeof client.time_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimeSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimeSeriesCrossKey(
  args: InferRequestType<typeof client.time_series.cross.$get>,
) {
  return ['time_series', '/time_series/cross', args] as const
}

export function useGetTimeSeriesCross<TError = unknown>(
  args: InferRequestType<typeof client.time_series.cross.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeSeriesCrossKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_series.cross.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeSeriesCross<TError = unknown>(
  args: InferRequestType<typeof client.time_series.cross.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTimeSeriesCrossKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.time_series.cross.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrangeKey(args: InferRequestType<typeof client.trange.$get>) {
  return ['trange', '/trange', args] as const
}

export function useGetTrange<TError = unknown>(
  args: InferRequestType<typeof client.trange.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrangeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.trange.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTrange<TError = unknown>(
  args: InferRequestType<typeof client.trange.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrangeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.trange.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTrimaKey(args: InferRequestType<typeof client.trima.$get>) {
  return ['trima', '/trima', args] as const
}

export function useGetTrima<TError = unknown>(
  args: InferRequestType<typeof client.trima.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrimaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.trima.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTrima<TError = unknown>(
  args: InferRequestType<typeof client.trima.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrimaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.trima.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTsfKey(args: InferRequestType<typeof client.tsf.$get>) {
  return ['tsf', '/tsf', args] as const
}

export function useGetTsf<TError = unknown>(
  args: InferRequestType<typeof client.tsf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTsfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tsf.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTsf<TError = unknown>(
  args: InferRequestType<typeof client.tsf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTsfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tsf.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTyppriceKey(args: InferRequestType<typeof client.typprice.$get>) {
  return ['typprice', '/typprice', args] as const
}

export function useGetTypprice<TError = unknown>(
  args: InferRequestType<typeof client.typprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTyppriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.typprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTypprice<TError = unknown>(
  args: InferRequestType<typeof client.typprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTyppriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.typprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUltoscKey(args: InferRequestType<typeof client.ultosc.$get>) {
  return ['ultosc', '/ultosc', args] as const
}

export function useGetUltosc<TError = unknown>(
  args: InferRequestType<typeof client.ultosc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUltoscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ultosc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUltosc<TError = unknown>(
  args: InferRequestType<typeof client.ultosc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUltoscKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ultosc.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVarKey(args: InferRequestType<typeof client.var.$get>) {
  return ['var', '/var', args] as const
}

export function useGetVar<TError = unknown>(
  args: InferRequestType<typeof client.var.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.var.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVar<TError = unknown>(
  args: InferRequestType<typeof client.var.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.var.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVwapKey(args: InferRequestType<typeof client.vwap.$get>) {
  return ['vwap', '/vwap', args] as const
}

export function useGetVwap<TError = unknown>(
  args: InferRequestType<typeof client.vwap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVwapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vwap.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVwap<TError = unknown>(
  args: InferRequestType<typeof client.vwap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVwapKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vwap.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetWclpriceKey(args: InferRequestType<typeof client.wclprice.$get>) {
  return ['wclprice', '/wclprice', args] as const
}

export function useGetWclprice<TError = unknown>(
  args: InferRequestType<typeof client.wclprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWclpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.wclprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWclprice<TError = unknown>(
  args: InferRequestType<typeof client.wclprice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWclpriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.wclprice.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetWillrKey(args: InferRequestType<typeof client.willr.$get>) {
  return ['willr', '/willr', args] as const
}

export function useGetWillr<TError = unknown>(
  args: InferRequestType<typeof client.willr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWillrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.willr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWillr<TError = unknown>(
  args: InferRequestType<typeof client.willr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWillrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.willr.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetWmaKey(args: InferRequestType<typeof client.wma.$get>) {
  return ['wma', '/wma', args] as const
}

export function useGetWma<TError = unknown>(
  args: InferRequestType<typeof client.wma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWmaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.wma.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWma<TError = unknown>(
  args: InferRequestType<typeof client.wma.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWmaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.wma.$get(args, clientOptions)), restSwrOptions),
  }
}
