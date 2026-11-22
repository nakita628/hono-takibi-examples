import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getAdQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ad.$get>>) {
  return ['ad', '/ad', toValue(args)] as const
}

export function getAdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
          ReturnType<typeof getAdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.add.$get>>) {
  return ['add', '/add', toValue(args)] as const
}

export function getAddQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.add.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.add.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.add.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
          ReturnType<typeof getAddQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.add.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdoscQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adosc.$get>>,
) {
  return ['adosc', '/adosc', toValue(args)] as const
}

export function getAdoscQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adosc.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdoscQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adosc.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdosc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adosc.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
          ReturnType<typeof getAdoscQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adosc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdoscQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdoscQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adosc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdxQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.adx.$get>>) {
  return ['adx', '/adx', toValue(args)] as const
}

export function getAdxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adx.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
          ReturnType<typeof getAdxQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdxrQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.adxr.$get>>) {
  return ['adxr', '/adxr', toValue(args)] as const
}

export function getAdxrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adxr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdxrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adxr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdxr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.adxr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
          ReturnType<typeof getAdxrQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adxr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdxrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdxrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adxr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalystRatingsLightQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyst_ratings.light.$get>>,
) {
  return ['analyst_ratings', '/analyst_ratings/light', toValue(args)] as const
}

export function getAnalystRatingsLightQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyst_ratings.light.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalystRatingsLightQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyst_ratings.light.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalystRatingsLight<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyst_ratings.light.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
            >
          >,
          ReturnType<typeof getAnalystRatingsLightQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.light.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalystRatingsLightQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalystRatingsLightQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyst_ratings.light.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalystRatingsUsEquitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyst_ratings.us_equities.$get>>,
) {
  return ['analyst_ratings', '/analyst_ratings/us_equities', toValue(args)] as const
}

export function getAnalystRatingsUsEquitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyst_ratings.us_equities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalystRatingsUsEquitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyst_ratings.us_equities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalystRatingsUsEquities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyst_ratings.us_equities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>
              >
            >
          >,
          ReturnType<typeof getAnalystRatingsUsEquitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analyst_ratings.us_equities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalystRatingsUsEquitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalystRatingsUsEquitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyst_ratings.us_equities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_usage.$get>>,
) {
  return ['api_usage', '/api_usage', toValue(args)] as const
}

export function getApiUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api_usage.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api_usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>
          >,
          ReturnType<typeof getApiUsageQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_usage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api_usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApoQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apo.$get>>) {
  return ['apo', '/apo', toValue(args)] as const
}

export function getApoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
          ReturnType<typeof getApoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAroonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aroon.$get>>,
) {
  return ['aroon', '/aroon', toValue(args)] as const
}

export function getAroonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aroon.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAroonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aroon.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAroon<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aroon.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
          ReturnType<typeof getAroonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroon.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAroonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAroonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aroon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAroonoscQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aroonosc.$get>>,
) {
  return ['aroonosc', '/aroonosc', toValue(args)] as const
}

export function getAroonoscQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aroonosc.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAroonoscQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aroonosc.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAroonosc<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aroonosc.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>
          >,
          ReturnType<typeof getAroonoscQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aroonosc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAroonoscQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAroonoscQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aroonosc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAtrQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.atr.$get>>) {
  return ['atr', '/atr', toValue(args)] as const
}

export function getAtrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.atr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAtrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.atr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAtr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.atr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
          ReturnType<typeof getAtrQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAtrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAtrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.atr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvgQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.avg.$get>>) {
  return ['avg', '/avg', toValue(args)] as const
}

export function getAvgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avg.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avg.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAvg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avg.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
          ReturnType<typeof getAvgQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAvgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avg.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvgpriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avgprice.$get>>,
) {
  return ['avgprice', '/avgprice', toValue(args)] as const
}

export function getAvgpriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avgprice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvgpriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avgprice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAvgprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avgprice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>
          >,
          ReturnType<typeof getAvgpriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avgprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAvgpriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvgpriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avgprice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceSheetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance_sheet.$get>>,
) {
  return ['balance_sheet', '/balance_sheet', toValue(args)] as const
}

export function getBalanceSheetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance_sheet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceSheetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balance_sheet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceSheet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance_sheet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
          >,
          ReturnType<typeof getBalanceSheetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceSheetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceSheetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balance_sheet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBalanceSheetConsolidatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance_sheet.consolidated.$get>>,
) {
  return ['balance_sheet', '/balance_sheet/consolidated', toValue(args)] as const
}

export function getBalanceSheetConsolidatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance_sheet.consolidated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBalanceSheetConsolidatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.balance_sheet.consolidated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBalanceSheetConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.balance_sheet.consolidated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>
              >
            >
          >,
          ReturnType<typeof getBalanceSheetConsolidatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.balance_sheet.consolidated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBalanceSheetConsolidatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBalanceSheetConsolidatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.balance_sheet.consolidated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
          TError,
          InferRequestType<typeof client.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBbandsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bbands.$get>>,
) {
  return ['bbands', '/bbands', toValue(args)] as const
}

export function getBbandsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bbands.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBbandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bbands.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBbands<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bbands.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
          ReturnType<typeof getBbandsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bbands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBbandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBbandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bbands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBetaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.beta.$get>>) {
  return ['beta', '/beta', toValue(args)] as const
}

export function getBetaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.beta.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBetaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.beta.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBeta<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.beta.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
          ReturnType<typeof getBetaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beta.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBetaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBetaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.beta.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBondsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bonds.$get>>,
) {
  return ['bonds', '/bonds', toValue(args)] as const
}

export function getBondsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bonds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBondsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bonds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBonds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bonds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
          ReturnType<typeof getBondsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bonds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBondsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBondsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bonds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBopQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.bop.$get>>) {
  return ['bop', '/bop', toValue(args)] as const
}

export function getBopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bop.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bop.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBop<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bop.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
          ReturnType<typeof getBopQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bop.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bop.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCashFlowQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cash_flow.$get>>,
) {
  return ['cash_flow', '/cash_flow', toValue(args)] as const
}

export function getCashFlowQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cash_flow.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCashFlowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cash_flow.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCashFlow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cash_flow.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>
          >,
          ReturnType<typeof getCashFlowQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCashFlowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCashFlowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cash_flow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCashFlowConsolidatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cash_flow.consolidated.$get>>,
) {
  return ['cash_flow', '/cash_flow/consolidated', toValue(args)] as const
}

export function getCashFlowConsolidatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cash_flow.consolidated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCashFlowConsolidatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cash_flow.consolidated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCashFlowConsolidated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cash_flow.consolidated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
            >
          >,
          ReturnType<typeof getCashFlowConsolidatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cash_flow.consolidated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCashFlowConsolidatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCashFlowConsolidatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cash_flow.consolidated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCciQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.cci.$get>>) {
  return ['cci', '/cci', toValue(args)] as const
}

export function getCciQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cci.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCciQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cci.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCci<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cci.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
          ReturnType<typeof getCciQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cci.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCciQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCciQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cci.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCeilQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ceil.$get>>) {
  return ['ceil', '/ceil', toValue(args)] as const
}

export function getCeilQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ceil.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCeilQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ceil.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCeil<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ceil.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
          ReturnType<typeof getCeilQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ceil.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCeilQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCeilQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ceil.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmoQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.cmo.$get>>) {
  return ['cmo', '/cmo', toValue(args)] as const
}

export function getCmoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cmo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cmo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCmo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cmo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
          ReturnType<typeof getCmoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCmoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cmo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommoditiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commodities.$get>>,
) {
  return ['commodities', '/commodities', toValue(args)] as const
}

export function getCommoditiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commodities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommoditiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commodities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCommodities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.commodities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>
          >,
          ReturnType<typeof getCommoditiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commodities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommoditiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommoditiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.commodities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCoppockQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coppock.$get>>,
) {
  return ['coppock', '/coppock', toValue(args)] as const
}

export function getCoppockQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coppock.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCoppockQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.coppock.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCoppock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coppock.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>
          >,
          ReturnType<typeof getCoppockQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coppock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCoppockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCoppockQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.coppock.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorrelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.correl.$get>>,
) {
  return ['correl', '/correl', toValue(args)] as const
}

export function getCorrelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.correl.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorrelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.correl.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCorrel<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.correl.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
          ReturnType<typeof getCorrelQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.correl.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCorrelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorrelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.correl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountriesQueryKey() {
  return ['countries', '/countries'] as const
}

export function getCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>
          >,
          ReturnType<typeof getCountriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.countries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrossListingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cross_listings.$get>>,
) {
  return ['cross_listings', '/cross_listings', toValue(args)] as const
}

export function getCrossListingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cross_listings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrossListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cross_listings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrossListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cross_listings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
          >,
          ReturnType<typeof getCrossListingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cross_listings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrossListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrossListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cross_listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrsiQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.crsi.$get>>) {
  return ['crsi', '/crsi', toValue(args)] as const
}

export function getCrsiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crsi.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrsiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crsi.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrsi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crsi.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
          ReturnType<typeof getCrsiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crsi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrsiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrsiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crsi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCryptocurrenciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cryptocurrencies.$get>>,
) {
  return ['cryptocurrencies', '/cryptocurrencies', toValue(args)] as const
}

export function getCryptocurrenciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cryptocurrencies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCryptocurrenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cryptocurrencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCryptocurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cryptocurrencies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>
            >
          >,
          ReturnType<typeof getCryptocurrenciesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCryptocurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCryptocurrenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cryptocurrencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCryptocurrencyExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cryptocurrency_exchanges.$get>>,
) {
  return ['cryptocurrency_exchanges', '/cryptocurrency_exchanges', toValue(args)] as const
}

export function getCryptocurrencyExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cryptocurrency_exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCryptocurrencyExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cryptocurrency_exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCryptocurrencyExchanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cryptocurrency_exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
            >
          >,
          ReturnType<typeof getCryptocurrencyExchangesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cryptocurrency_exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCryptocurrencyExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCryptocurrencyExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cryptocurrency_exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCurrencyConversionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.currency_conversion.$get>>,
) {
  return ['currency_conversion', '/currency_conversion', toValue(args)] as const
}

export function getCurrencyConversionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.currency_conversion.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCurrencyConversionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.currency_conversion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCurrencyConversion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.currency_conversion.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>
            >
          >,
          ReturnType<typeof getCurrencyConversionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.currency_conversion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCurrencyConversionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCurrencyConversionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.currency_conversion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDemaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.dema.$get>>) {
  return ['dema', '/dema', toValue(args)] as const
}

export function getDemaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dema.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dema.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dema.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
          ReturnType<typeof getDemaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDirectHoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.direct_holders.$get>>,
) {
  return ['direct_holders', '/direct_holders', toValue(args)] as const
}

export function getDirectHoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.direct_holders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectHoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.direct_holders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.direct_holders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
          >,
          ReturnType<typeof getDirectHoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.direct_holders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDirectHoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectHoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.direct_holders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDivQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.div.$get>>) {
  return ['div', '/div', toValue(args)] as const
}

export function getDivQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.div.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDivQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.div.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDiv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.div.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
          ReturnType<typeof getDivQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.div.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDivQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDivQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.div.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDividendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dividends.$get>>,
) {
  return ['dividends', '/dividends', toValue(args)] as const
}

export function getDividendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dividends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDividendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dividends.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDividends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dividends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>
          >,
          ReturnType<typeof getDividendsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDividendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDividendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dividends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDividendsCalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dividends_calendar.$get>>,
) {
  return ['dividends_calendar', '/dividends_calendar', toValue(args)] as const
}

export function getDividendsCalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dividends_calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDividendsCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dividends_calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDividendsCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dividends_calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>
            >
          >,
          ReturnType<typeof getDividendsCalendarQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dividends_calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDividendsCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDividendsCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dividends_calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDpoQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.dpo.$get>>) {
  return ['dpo', '/dpo', toValue(args)] as const
}

export function getDpoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dpo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDpoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dpo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDpo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dpo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
          ReturnType<typeof getDpoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDpoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDpoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dpo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDxQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.dx.$get>>) {
  return ['dx', '/dx', toValue(args)] as const
}

export function getDxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dx.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
          ReturnType<typeof getDxQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarliestTimestampQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earliest_timestamp.$get>>,
) {
  return ['earliest_timestamp', '/earliest_timestamp', toValue(args)] as const
}

export function getEarliestTimestampQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earliest_timestamp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarliestTimestampQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.earliest_timestamp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarliestTimestamp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earliest_timestamp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>
            >
          >,
          ReturnType<typeof getEarliestTimestampQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earliest_timestamp.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarliestTimestampQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarliestTimestampQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.earliest_timestamp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarningsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings.$get>>,
) {
  return ['earnings', '/earnings', toValue(args)] as const
}

export function getEarningsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.earnings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>
          >,
          ReturnType<typeof getEarningsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.earnings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarningsCalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings_calendar.$get>>,
) {
  return ['earnings_calendar', '/earnings_calendar', toValue(args)] as const
}

export function getEarningsCalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings_calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.earnings_calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarningsCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings_calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>
            >
          >,
          ReturnType<typeof getEarningsCalendarQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.earnings_calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEarningsEstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings_estimate.$get>>,
) {
  return ['earnings_estimate', '/earnings_estimate', toValue(args)] as const
}

export function getEarningsEstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings_estimate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEarningsEstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.earnings_estimate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEarningsEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.earnings_estimate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>
            >
          >,
          ReturnType<typeof getEarningsEstimateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.earnings_estimate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEarningsEstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEarningsEstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.earnings_estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgarFilingsArchiveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.edgar_filings.archive.$get>>,
) {
  return ['edgar_filings', '/edgar_filings/archive', toValue(args)] as const
}

export function getEdgarFilingsArchiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.edgar_filings.archive.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgarFilingsArchiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.edgar_filings.archive.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgarFilingsArchive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.edgar_filings.archive.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
            >
          >,
          ReturnType<typeof getEdgarFilingsArchiveQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.edgar_filings.archive.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgarFilingsArchiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgarFilingsArchiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.edgar_filings.archive.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ema.$get>>) {
  return ['ema', '/ema', toValue(args)] as const
}

export function getEmaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ema.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ema.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ema.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
          ReturnType<typeof getEmaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEodQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.eod.$get>>) {
  return ['eod', '/eod', toValue(args)] as const
}

export function getEodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eod.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eod.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eod.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
          ReturnType<typeof getEodQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpsRevisionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eps_revisions.$get>>,
) {
  return ['eps_revisions', '/eps_revisions', toValue(args)] as const
}

export function getEpsRevisionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eps_revisions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpsRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eps_revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpsRevisions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eps_revisions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
          >,
          ReturnType<typeof getEpsRevisionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_revisions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpsRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpsRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eps_revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpsTrendQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eps_trend.$get>>,
) {
  return ['eps_trend', '/eps_trend', toValue(args)] as const
}

export function getEpsTrendQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eps_trend.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpsTrendQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eps_trend.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEpsTrend<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eps_trend.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>
          >,
          ReturnType<typeof getEpsTrendQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eps_trend.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpsTrendQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpsTrendQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eps_trend.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.$get>>) {
  return ['etfs', '/etfs', toValue(args)] as const
}

export function getEtfsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEtfs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
          ReturnType<typeof getEtfsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsFamilyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.family.$get>>,
) {
  return ['etfs', '/etfs/family', toValue(args)] as const
}

export function getEtfsFamilyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.family.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsFamilyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.family.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEtfsFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.family.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>
          >,
          ReturnType<typeof getEtfsFamilyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.family.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsFamilyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsFamilyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.family.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.list.$get>>,
) {
  return ['etfs', '/etfs/list', toValue(args)] as const
}

export function getEtfsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEtfsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>
          >,
          ReturnType<typeof getEtfsListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.type.$get>>,
) {
  return ['etfs', '/etfs/type', toValue(args)] as const
}

export function getEtfsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.type.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.type.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEtfsType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.type.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>
          >,
          ReturnType<typeof getEtfsTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.type.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.type.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsWorldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.$get>>,
) {
  return ['etfs', '/etfs/world', toValue(args)] as const
}

export function getEtfsWorldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsWorldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.world.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEtfsWorld<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>
          >,
          ReturnType<typeof getEtfsWorldQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsWorldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.world.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsWorldCompositionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.composition.$get>>,
) {
  return ['etfs', '/etfs/world/composition', toValue(args)] as const
}

export function getEtfsWorldCompositionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.composition.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsWorldCompositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.world.composition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfsWorldComposition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.composition.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
            >
          >,
          ReturnType<typeof getEtfsWorldCompositionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.composition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldCompositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsWorldCompositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.world.composition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsWorldPerformanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.performance.$get>>,
) {
  return ['etfs', '/etfs/world/performance', toValue(args)] as const
}

export function getEtfsWorldPerformanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.performance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsWorldPerformanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.world.performance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfsWorldPerformance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.performance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
            >
          >,
          ReturnType<typeof getEtfsWorldPerformanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.performance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldPerformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsWorldPerformanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.world.performance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsWorldRiskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.risk.$get>>,
) {
  return ['etfs', '/etfs/world/risk', toValue(args)] as const
}

export function getEtfsWorldRiskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.risk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsWorldRiskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.world.risk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfsWorldRisk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.risk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>
            >
          >,
          ReturnType<typeof getEtfsWorldRiskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.risk.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldRiskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsWorldRiskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.world.risk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtfsWorldSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.summary.$get>>,
) {
  return ['etfs', '/etfs/world/summary', toValue(args)] as const
}

export function getEtfsWorldSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtfsWorldSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etfs.world.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtfsWorldSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.etfs.world.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>
            >
          >,
          ReturnType<typeof getEtfsWorldSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etfs.world.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEtfsWorldSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtfsWorldSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etfs.world.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExchangeRateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchange_rate.$get>>,
) {
  return ['exchange_rate', '/exchange_rate', toValue(args)] as const
}

export function getExchangeRateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchange_rate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExchangeRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exchange_rate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExchangeRate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchange_rate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
          >,
          ReturnType<typeof getExchangeRateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_rate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExchangeRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExchangeRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exchange_rate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExchangeScheduleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchange_schedule.$get>>,
) {
  return ['exchange_schedule', '/exchange_schedule', toValue(args)] as const
}

export function getExchangeScheduleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchange_schedule.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExchangeScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exchange_schedule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExchangeSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchange_schedule.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>
            >
          >,
          ReturnType<typeof getExchangeScheduleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange_schedule.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExchangeScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExchangeScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exchange_schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchanges.$get>>,
) {
  return ['exchanges', '/exchanges', toValue(args)] as const
}

export function getExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exchanges.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>
          >,
          ReturnType<typeof getExchangesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchanges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExpQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.exp.$get>>) {
  return ['exp', '/exp', toValue(args)] as const
}

export function getExpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
          ReturnType<typeof getExpQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFloorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floor.$get>>,
) {
  return ['floor', '/floor', toValue(args)] as const
}

export function getFloorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floor.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFloor<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
          ReturnType<typeof getFloorQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFloorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForexPairsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forex_pairs.$get>>,
) {
  return ['forex_pairs', '/forex_pairs', toValue(args)] as const
}

export function getForexPairsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forex_pairs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForexPairsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forex_pairs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useForexPairs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forex_pairs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>
          >,
          ReturnType<typeof getForexPairsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forex_pairs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getForexPairsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForexPairsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forex_pairs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFundHoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fund_holders.$get>>,
) {
  return ['fund_holders', '/fund_holders', toValue(args)] as const
}

export function getFundHoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fund_holders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFundHoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fund_holders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFundHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fund_holders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>
          >,
          ReturnType<typeof getFundHoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fund_holders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFundHoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFundHoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fund_holders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFundsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.funds.$get>>,
) {
  return ['funds', '/funds', toValue(args)] as const
}

export function getFundsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.funds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.funds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFunds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.funds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
          ReturnType<typeof getFundsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.funds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.funds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGrowthEstimatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.growth_estimates.$get>>,
) {
  return ['growth_estimates', '/growth_estimates', toValue(args)] as const
}

export function getGrowthEstimatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.growth_estimates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGrowthEstimatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.growth_estimates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGrowthEstimates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.growth_estimates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>
            >
          >,
          ReturnType<typeof getGrowthEstimatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.growth_estimates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGrowthEstimatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGrowthEstimatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.growth_estimates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeikinashicandlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.heikinashicandles.$get>>,
) {
  return ['heikinashicandles', '/heikinashicandles', toValue(args)] as const
}

export function getHeikinashicandlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.heikinashicandles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHeikinashicandlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heikinashicandles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHeikinashicandles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.heikinashicandles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>
            >
          >,
          ReturnType<typeof getHeikinashicandlesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heikinashicandles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHeikinashicandlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHeikinashicandlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.heikinashicandles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHlc3QueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.hlc3.$get>>) {
  return ['hlc3', '/hlc3', toValue(args)] as const
}

export function getHlc3QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hlc3.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHlc3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hlc3.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHlc3<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hlc3.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
          ReturnType<typeof getHlc3QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlc3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHlc3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHlc3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hlc3.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtDcperiodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_dcperiod.$get>>,
) {
  return ['ht_dcperiod', '/ht_dcperiod', toValue(args)] as const
}

export function getHtDcperiodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_dcperiod.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtDcperiodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ht_dcperiod.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtDcperiod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_dcperiod.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>
          >,
          ReturnType<typeof getHtDcperiodQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcperiod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtDcperiodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHtDcperiodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ht_dcperiod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtDcphaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_dcphase.$get>>,
) {
  return ['ht_dcphase', '/ht_dcphase', toValue(args)] as const
}

export function getHtDcphaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_dcphase.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtDcphaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ht_dcphase.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtDcphase<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_dcphase.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>
          >,
          ReturnType<typeof getHtDcphaseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_dcphase.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtDcphaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHtDcphaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ht_dcphase.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtPhasorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_phasor.$get>>,
) {
  return ['ht_phasor', '/ht_phasor', toValue(args)] as const
}

export function getHtPhasorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_phasor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtPhasorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ht_phasor.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtPhasor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_phasor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>
          >,
          ReturnType<typeof getHtPhasorQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_phasor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtPhasorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHtPhasorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ht_phasor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtSineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_sine.$get>>,
) {
  return ['ht_sine', '/ht_sine', toValue(args)] as const
}

export function getHtSineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_sine.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtSineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ht_sine.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtSine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_sine.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>
          >,
          ReturnType<typeof getHtSineQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_sine.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtSineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHtSineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ht_sine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtTrendlineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_trendline.$get>>,
) {
  return ['ht_trendline', '/ht_trendline', toValue(args)] as const
}

export function getHtTrendlineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_trendline.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtTrendlineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ht_trendline.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtTrendline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_trendline.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>
          >,
          ReturnType<typeof getHtTrendlineQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtTrendlineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHtTrendlineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ht_trendline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtTrendmodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_trendmode.$get>>,
) {
  return ['ht_trendmode', '/ht_trendmode', toValue(args)] as const
}

export function getHtTrendmodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_trendmode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtTrendmodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ht_trendmode.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtTrendmode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ht_trendmode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>
          >,
          ReturnType<typeof getHtTrendmodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ht_trendmode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtTrendmodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHtTrendmodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ht_trendmode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIchimokuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ichimoku.$get>>,
) {
  return ['ichimoku', '/ichimoku', toValue(args)] as const
}

export function getIchimokuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ichimoku.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIchimokuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ichimoku.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIchimoku<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ichimoku.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>
          >,
          ReturnType<typeof getIchimokuQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ichimoku.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIchimokuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIchimokuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ichimoku.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIncomeStatementQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.income_statement.$get>>,
) {
  return ['income_statement', '/income_statement', toValue(args)] as const
}

export function getIncomeStatementQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.income_statement.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIncomeStatementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.income_statement.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIncomeStatement<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.income_statement.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>
            >
          >,
          ReturnType<typeof getIncomeStatementQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIncomeStatementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIncomeStatementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.income_statement.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIncomeStatementConsolidatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.income_statement.consolidated.$get>>,
) {
  return ['income_statement', '/income_statement/consolidated', toValue(args)] as const
}

export function getIncomeStatementConsolidatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.income_statement.consolidated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIncomeStatementConsolidatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.income_statement.consolidated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIncomeStatementConsolidated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.income_statement.consolidated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>
              >
            >
          >,
          ReturnType<typeof getIncomeStatementConsolidatedQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.income_statement.consolidated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIncomeStatementConsolidatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIncomeStatementConsolidatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.income_statement.consolidated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsiderTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.insider_transactions.$get>>,
) {
  return ['insider_transactions', '/insider_transactions', toValue(args)] as const
}

export function getInsiderTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.insider_transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsiderTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insider_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsiderTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.insider_transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>
            >
          >,
          ReturnType<typeof getInsiderTransactionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insider_transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInsiderTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsiderTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insider_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstitutionalHoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.institutional_holders.$get>>,
) {
  return ['institutional_holders', '/institutional_holders', toValue(args)] as const
}

export function getInstitutionalHoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.institutional_holders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstitutionalHoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutional_holders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstitutionalHolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.institutional_holders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
            >
          >,
          ReturnType<typeof getInstitutionalHoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.institutional_holders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionalHoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstitutionalHoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.institutional_holders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstrumentTypeQueryKey() {
  return ['instrument_type', '/instrument_type'] as const
}

export function getInstrumentTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstrumentTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.instrument_type.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInstrumentType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>
            >
          >,
          ReturnType<typeof getInstrumentTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instrument_type.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstrumentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstrumentTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.instrument_type.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntervalsQueryKey() {
  return ['intervals', '/intervals'] as const
}

export function getIntervalsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIntervalsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intervals.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIntervals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>
          >,
          ReturnType<typeof getIntervalsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intervals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntervalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIntervalsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.intervals.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpoCalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipo_calendar.$get>>,
) {
  return ['ipo_calendar', '/ipo_calendar', toValue(args)] as const
}

export function getIpoCalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipo_calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpoCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ipo_calendar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpoCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ipo_calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>
          >,
          ReturnType<typeof getIpoCalendarQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ipo_calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpoCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpoCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ipo_calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKamaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.kama.$get>>) {
  return ['kama', '/kama', toValue(args)] as const
}

export function getKamaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kama.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKamaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kama.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKama<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kama.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
          ReturnType<typeof getKamaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kama.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKamaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKamaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kama.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeltnerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keltner.$get>>,
) {
  return ['keltner', '/keltner', toValue(args)] as const
}

export function getKeltnerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keltner.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeltnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keltner.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeltner<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keltner.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>
          >,
          ReturnType<typeof getKeltnerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keltner.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeltnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeltnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keltner.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeyExecutivesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.key_executives.$get>>,
) {
  return ['key_executives', '/key_executives', toValue(args)] as const
}

export function getKeyExecutivesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.key_executives.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyExecutivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.key_executives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeyExecutives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.key_executives.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
          >,
          ReturnType<typeof getKeyExecutivesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.key_executives.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyExecutivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyExecutivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.key_executives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKstQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.kst.$get>>) {
  return ['kst', '/kst', toValue(args)] as const
}

export function getKstQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kst.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKstQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kst.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKst<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kst.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
          ReturnType<typeof getKstQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kst.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKstQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKstQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kst.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLastChangeEndpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.last_change)[':endpoint']['$get']>>,
) {
  return ['last_change', '/last_change/:endpoint', toValue(args)] as const
}

export function getLastChangeEndpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.last_change)[':endpoint']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLastChangeEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.last_change[':endpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLastChangeEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.last_change)[':endpoint']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLastChangeEndpointQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.last_change)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLastChangeEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLastChangeEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.last_change[':endpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinearregQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearreg.$get>>,
) {
  return ['linearreg', '/linearreg', toValue(args)] as const
}

export function getLinearregQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearreg.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinearregQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linearreg.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLinearreg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearreg.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>
          >,
          ReturnType<typeof getLinearregQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearreg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinearregQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinearregQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linearreg.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinearregangleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregangle.$get>>,
) {
  return ['linearregangle', '/linearregangle', toValue(args)] as const
}

export function getLinearregangleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregangle.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinearregangleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linearregangle.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinearregangle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregangle.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
          >,
          ReturnType<typeof getLinearregangleQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregangle.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinearregangleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinearregangleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linearregangle.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinearreginterceptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregintercept.$get>>,
) {
  return ['linearregintercept', '/linearregintercept', toValue(args)] as const
}

export function getLinearreginterceptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregintercept.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinearreginterceptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linearregintercept.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinearregintercept<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregintercept.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>
            >
          >,
          ReturnType<typeof getLinearreginterceptQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregintercept.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinearreginterceptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinearreginterceptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linearregintercept.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinearregslopeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregslope.$get>>,
) {
  return ['linearregslope', '/linearregslope', toValue(args)] as const
}

export function getLinearregslopeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregslope.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinearregslopeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.linearregslope.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinearregslope<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.linearregslope.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
          >,
          ReturnType<typeof getLinearregslopeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.linearregslope.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLinearregslopeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinearregslopeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.linearregslope.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLnQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ln.$get>>) {
  return ['ln', '/ln', toValue(args)] as const
}

export function getLnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ln.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ln.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLn<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ln.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
          ReturnType<typeof getLnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ln.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ln.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLog10QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.log10.$get>>,
) {
  return ['log10', '/log10', toValue(args)] as const
}

export function getLog10QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.log10.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLog10QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.log10.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLog10<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.log10.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
          ReturnType<typeof getLog10QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log10.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLog10QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLog10QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.log10.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogoQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logo.$get>>) {
  return ['logo', '/logo', toValue(args)] as const
}

export function getLogoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
          ReturnType<typeof getLogoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ma.$get>>) {
  return ['ma', '/ma', toValue(args)] as const
}

export function getMaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ma.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ma.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMa<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ma.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
          ReturnType<typeof getMaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ma.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMacdQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.macd.$get>>) {
  return ['macd', '/macd', toValue(args)] as const
}

export function getMacdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macd.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macd.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMacd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macd.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
          ReturnType<typeof getMacdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macd.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMacdSlopeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macd_slope.$get>>,
) {
  return ['macd_slope', '/macd_slope', toValue(args)] as const
}

export function getMacdSlopeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macd_slope.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacdSlopeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macd_slope.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMacdSlope<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macd_slope.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>
          >,
          ReturnType<typeof getMacdSlopeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macd_slope.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacdSlopeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacdSlopeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macd_slope.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMacdextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macdext.$get>>,
) {
  return ['macdext', '/macdext', toValue(args)] as const
}

export function getMacdextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macdext.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacdextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macdext.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMacdext<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macdext.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>
          >,
          ReturnType<typeof getMacdextQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macdext.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacdextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacdextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macdext.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMamaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.mama.$get>>) {
  return ['mama', '/mama', toValue(args)] as const
}

export function getMamaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mama.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMamaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mama.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMama<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mama.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
          ReturnType<typeof getMamaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mama.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMamaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMamaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mama.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketCapQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market_cap.$get>>,
) {
  return ['market_cap', '/market_cap', toValue(args)] as const
}

export function getMarketCapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market_cap.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketCapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.market_cap.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketCap<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market_cap.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>
          >,
          ReturnType<typeof getMarketCapQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_cap.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketCapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketCapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.market_cap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketMoversMarketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.market_movers)[':market']['$get']>>,
) {
  return ['market_movers', '/market_movers/:market', toValue(args)] as const
}

export function getMarketMoversMarketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.market_movers)[':market']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketMoversMarketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.market_movers[':market'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketMoversMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.market_movers)[':market']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMarketMoversMarketQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.market_movers)[':market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketMoversMarketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketMoversMarketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.market_movers[':market'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMarketStateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market_state.$get>>,
) {
  return ['market_state', '/market_state', toValue(args)] as const
}

export function getMarketStateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market_state.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.market_state.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMarketState<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.market_state.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>
          >,
          ReturnType<typeof getMarketStateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.market_state.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMarketStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.market_state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMaxQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.max.$get>>) {
  return ['max', '/max', toValue(args)] as const
}

export function getMaxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.max.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.max.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMax<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.max.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
          ReturnType<typeof getMaxQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.max.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.max.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMaxindexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.maxindex.$get>>,
) {
  return ['maxindex', '/maxindex', toValue(args)] as const
}

export function getMaxindexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.maxindex.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaxindexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.maxindex.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMaxindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.maxindex.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>
          >,
          ReturnType<typeof getMaxindexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maxindex.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaxindexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaxindexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.maxindex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMcginleyDynamicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mcginley_dynamic.$get>>,
) {
  return ['mcginley_dynamic', '/mcginley_dynamic', toValue(args)] as const
}

export function getMcginleyDynamicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mcginley_dynamic.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMcginleyDynamicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mcginley_dynamic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMcginleyDynamic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mcginley_dynamic.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>
            >
          >,
          ReturnType<typeof getMcginleyDynamicQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcginley_dynamic.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMcginleyDynamicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMcginleyDynamicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mcginley_dynamic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMedpriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medprice.$get>>,
) {
  return ['medprice', '/medprice', toValue(args)] as const
}

export function getMedpriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medprice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMedpriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.medprice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMedprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medprice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>
          >,
          ReturnType<typeof getMedpriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMedpriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMedpriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.medprice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMfiQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.mfi.$get>>) {
  return ['mfi', '/mfi', toValue(args)] as const
}

export function getMfiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mfi.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMfiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mfi.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMfi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mfi.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
          ReturnType<typeof getMfiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mfi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMfiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMfiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mfi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMidpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.midpoint.$get>>,
) {
  return ['midpoint', '/midpoint', toValue(args)] as const
}

export function getMidpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.midpoint.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMidpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.midpoint.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMidpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.midpoint.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>
          >,
          ReturnType<typeof getMidpointQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midpoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMidpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMidpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.midpoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMidpriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.midprice.$get>>,
) {
  return ['midprice', '/midprice', toValue(args)] as const
}

export function getMidpriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.midprice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMidpriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.midprice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMidprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.midprice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>
          >,
          ReturnType<typeof getMidpriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.midprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMidpriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMidpriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.midprice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMinQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.min.$get>>) {
  return ['min', '/min', toValue(args)] as const
}

export function getMinQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.min.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.min.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.min.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
          ReturnType<typeof getMinQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.min.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.min.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMinindexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minindex.$get>>,
) {
  return ['minindex', '/minindex', toValue(args)] as const
}

export function getMinindexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minindex.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMinindexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.minindex.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMinindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minindex.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>
          >,
          ReturnType<typeof getMinindexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minindex.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinindexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMinindexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.minindex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMinmaxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minmax.$get>>,
) {
  return ['minmax', '/minmax', toValue(args)] as const
}

export function getMinmaxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minmax.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMinmaxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.minmax.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMinmax<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minmax.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
          ReturnType<typeof getMinmaxQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmax.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinmaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMinmaxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.minmax.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMinmaxindexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minmaxindex.$get>>,
) {
  return ['minmaxindex', '/minmaxindex', toValue(args)] as const
}

export function getMinmaxindexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minmaxindex.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMinmaxindexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.minmaxindex.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMinmaxindex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minmaxindex.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>
          >,
          ReturnType<typeof getMinmaxindexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minmaxindex.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinmaxindexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMinmaxindexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.minmaxindex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMinusDiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minus_di.$get>>,
) {
  return ['minus_di', '/minus_di', toValue(args)] as const
}

export function getMinusDiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minus_di.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMinusDiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.minus_di.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMinusDi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minus_di.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>
          >,
          ReturnType<typeof getMinusDiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_di.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinusDiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMinusDiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.minus_di.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMinusDmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minus_dm.$get>>,
) {
  return ['minus_dm', '/minus_dm', toValue(args)] as const
}

export function getMinusDmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minus_dm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMinusDmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.minus_dm.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMinusDm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.minus_dm.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>
          >,
          ReturnType<typeof getMinusDmQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.minus_dm.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMinusDmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMinusDmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.minus_dm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMomQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.mom.$get>>) {
  return ['mom', '/mom', toValue(args)] as const
}

export function getMomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mom.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mom.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMom<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mom.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
          ReturnType<typeof getMomQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mom.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mom.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoneyMarketFundsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.money_market_funds.list.$get>>,
) {
  return ['money_market_funds', '/money_market_funds/list', toValue(args)] as const
}

export function getMoneyMarketFundsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.money_market_funds.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoneyMarketFundsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.money_market_funds.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoneyMarketFundsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.money_market_funds.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
            >
          >,
          ReturnType<typeof getMoneyMarketFundsListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoneyMarketFundsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoneyMarketFundsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.money_market_funds.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoneyMarketFundsWorldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.money_market_funds.world.$get>>,
) {
  return ['money_market_funds', '/money_market_funds/world', toValue(args)] as const
}

export function getMoneyMarketFundsWorldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.money_market_funds.world.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoneyMarketFundsWorldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.money_market_funds.world.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoneyMarketFundsWorld<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.money_market_funds.world.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
            >
          >,
          ReturnType<typeof getMoneyMarketFundsWorldQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.money_market_funds.world.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoneyMarketFundsWorldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoneyMarketFundsWorldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.money_market_funds.world.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMultQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.mult.$get>>) {
  return ['mult', '/mult', toValue(args)] as const
}

export function getMultQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mult.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mult.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMult<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mult.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
          ReturnType<typeof getMultQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mult.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mult.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsFamilyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.family.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/family', toValue(args)] as const
}

export function getMutualFundsFamilyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.family.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsFamilyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.family.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsFamily<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.family.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>
            >
          >,
          ReturnType<typeof getMutualFundsFamilyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.family.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsFamilyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsFamilyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.family.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.list.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/list', toValue(args)] as const
}

export function getMutualFundsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>
            >
          >,
          ReturnType<typeof getMutualFundsListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.type.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/type', toValue(args)] as const
}

export function getMutualFundsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.type.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.type.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.type.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>
            >
          >,
          ReturnType<typeof getMutualFundsTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.type.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.type.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world', toValue(args)] as const
}

export function getMutualFundsWorldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorld<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>
            >
          >,
          ReturnType<typeof getMutualFundsWorldQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldCompositionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.composition.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/composition', toValue(args)] as const
}

export function getMutualFundsWorldCompositionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.composition.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldCompositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.composition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldComposition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.composition.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>
              >
            >
          >,
          ReturnType<typeof getMutualFundsWorldCompositionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.composition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldCompositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldCompositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.composition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldPerformanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.performance.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/performance', toValue(args)] as const
}

export function getMutualFundsWorldPerformanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.performance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldPerformanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.performance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.performance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>
              >
            >
          >,
          ReturnType<typeof getMutualFundsWorldPerformanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.performance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldPerformanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldPerformanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.performance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldPurchaseInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/purchase_info', toValue(args)] as const
}

export function getMutualFundsWorldPurchaseInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldPurchaseInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.purchase_info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldPurchaseInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.purchase_info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.purchase_info.$get>>
              >
            >
          >,
          ReturnType<typeof getMutualFundsWorldPurchaseInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldPurchaseInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.purchase_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.ratings.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/ratings', toValue(args)] as const
}

export function getMutualFundsWorldRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.ratings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.ratings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>
              >
            >
          >,
          ReturnType<typeof getMutualFundsWorldRatingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.ratings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldRiskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.risk.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/risk', toValue(args)] as const
}

export function getMutualFundsWorldRiskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.risk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldRiskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.risk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldRisk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.risk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
            >
          >,
          ReturnType<typeof getMutualFundsWorldRiskQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.risk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldRiskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldRiskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.risk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.summary.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/summary', toValue(args)] as const
}

export function getMutualFundsWorldSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>
              >
            >
          >,
          ReturnType<typeof getMutualFundsWorldSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mutual_funds.world.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMutualFundsWorldSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMutualFundsWorldSustainabilityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.sustainability.$get>>,
) {
  return ['mutual_funds', '/mutual_funds/world/sustainability', toValue(args)] as const
}

export function getMutualFundsWorldSustainabilityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.sustainability.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMutualFundsWorldSustainabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mutual_funds.world.sustainability.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMutualFundsWorldSustainability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mutual_funds.world.sustainability.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.mutual_funds.world.sustainability.$get>>
              >
            >
          >,
          ReturnType<typeof getMutualFundsWorldSustainabilityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMutualFundsWorldSustainabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mutual_funds.world.sustainability.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNatrQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.natr.$get>>) {
  return ['natr', '/natr', toValue(args)] as const
}

export function getNatrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.natr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNatrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.natr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNatr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.natr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
          ReturnType<typeof getNatrQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.natr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNatrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNatrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.natr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObvQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.obv.$get>>) {
  return ['obv', '/obv', toValue(args)] as const
}

export function getObvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.obv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.obv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useObv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.obv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
          ReturnType<typeof getObvQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getObvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.obv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPercentBQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.percent_b.$get>>,
) {
  return ['percent_b', '/percent_b', toValue(args)] as const
}

export function getPercentBQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.percent_b.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPercentBQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.percent_b.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePercentB<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.percent_b.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>
          >,
          ReturnType<typeof getPercentBQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.percent_b.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPercentBQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPercentBQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.percent_b.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPivotPointsHlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pivot_points_hl.$get>>,
) {
  return ['pivot_points_hl', '/pivot_points_hl', toValue(args)] as const
}

export function getPivotPointsHlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pivot_points_hl.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPivotPointsHlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pivot_points_hl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePivotPointsHl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pivot_points_hl.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>
            >
          >,
          ReturnType<typeof getPivotPointsHlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pivot_points_hl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPivotPointsHlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPivotPointsHlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pivot_points_hl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlusDiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus_di.$get>>,
) {
  return ['plus_di', '/plus_di', toValue(args)] as const
}

export function getPlusDiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus_di.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlusDiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plus_di.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlusDi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus_di.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>
          >,
          ReturnType<typeof getPlusDiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_di.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlusDiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlusDiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plus_di.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlusDmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus_dm.$get>>,
) {
  return ['plus_dm', '/plus_dm', toValue(args)] as const
}

export function getPlusDmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus_dm.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlusDmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plus_dm.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlusDm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus_dm.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>
          >,
          ReturnType<typeof getPlusDmQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus_dm.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlusDmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlusDmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plus_dm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPpoQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ppo.$get>>) {
  return ['ppo', '/ppo', toValue(args)] as const
}

export function getPpoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPpoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ppo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePpo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ppo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
          ReturnType<typeof getPpoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ppo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPpoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPpoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ppo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPressReleasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.press_releases.$get>>,
) {
  return ['press_releases', '/press_releases', toValue(args)] as const
}

export function getPressReleasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.press_releases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPressReleasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.press_releases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePressReleases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.press_releases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
          >,
          ReturnType<typeof getPressReleasesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.press_releases.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPressReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPressReleasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.press_releases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.price.$get>>,
) {
  return ['price', '/price', toValue(args)] as const
}

export function getPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.price.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrice<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
          ReturnType<typeof getPriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPriceTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.price_target.$get>>,
) {
  return ['price_target', '/price_target', toValue(args)] as const
}

export function getPriceTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.price_target.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPriceTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.price_target.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePriceTarget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.price_target.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>
          >,
          ReturnType<typeof getPriceTargetQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.price_target.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPriceTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPriceTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.price_target.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.$get>>,
) {
  return ['profile', '/profile', toValue(args)] as const
}

export function getProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          ReturnType<typeof getProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuoteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.$get>>,
) {
  return ['quote', '/quote', toValue(args)] as const
}

export function getQuoteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuoteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.quote.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQuote<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.quote.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
          ReturnType<typeof getQuoteQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuoteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.quote.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.$get>>,
) {
  return ['recommendations', '/recommendations', toValue(args)] as const
}

export function getRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>
            >
          >,
          ReturnType<typeof getRecommendationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRevenueEstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.revenue_estimate.$get>>,
) {
  return ['revenue_estimate', '/revenue_estimate', toValue(args)] as const
}

export function getRevenueEstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.revenue_estimate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRevenueEstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.revenue_estimate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRevenueEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.revenue_estimate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>
            >
          >,
          ReturnType<typeof getRevenueEstimateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revenue_estimate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRevenueEstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRevenueEstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.revenue_estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRocQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.roc.$get>>) {
  return ['roc', '/roc', toValue(args)] as const
}

export function getRocQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roc.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRocQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roc.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roc.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
          ReturnType<typeof getRocQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRocQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRocpQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.rocp.$get>>) {
  return ['rocp', '/rocp', toValue(args)] as const
}

export function getRocpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRocpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rocp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRocp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
          ReturnType<typeof getRocpQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRocpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rocp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRocrQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.rocr.$get>>) {
  return ['rocr', '/rocr', toValue(args)] as const
}

export function getRocrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRocrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rocr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRocr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
          ReturnType<typeof getRocrQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRocrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rocr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRocr100QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocr100.$get>>,
) {
  return ['rocr100', '/rocr100', toValue(args)] as const
}

export function getRocr100QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocr100.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRocr100QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rocr100.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRocr100<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rocr100.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>
          >,
          ReturnType<typeof getRocr100QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rocr100.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRocr100QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRocr100QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rocr100.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRsiQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.rsi.$get>>) {
  return ['rsi', '/rsi', toValue(args)] as const
}

export function getRsiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rsi.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRsiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rsi.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRsi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rsi.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
          ReturnType<typeof getRsiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRsiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRsiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rsi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRvolQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.rvol.$get>>) {
  return ['rvol', '/rvol', toValue(args)] as const
}

export function getRvolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rvol.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRvolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rvol.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRvol<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rvol.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
          ReturnType<typeof getRvolQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvol.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRvolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRvolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rvol.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSanctionsSourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sanctions)[':source']['$get']>>,
) {
  return ['sanctions', '/sanctions/:source', toValue(args)] as const
}

export function getSanctionsSourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sanctions)[':source']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSanctionsSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sanctions[':source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSanctionsSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sanctions)[':source']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSanctionsSourceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sanctions)[':source']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSanctionsSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSanctionsSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sanctions[':source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSarQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.sar.$get>>) {
  return ['sar', '/sar', toValue(args)] as const
}

export function getSarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSar<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
          ReturnType<typeof getSarQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSarextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sarext.$get>>,
) {
  return ['sarext', '/sarext', toValue(args)] as const
}

export function getSarextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sarext.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSarextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sarext.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSarext<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sarext.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
          ReturnType<typeof getSarextQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sarext.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSarextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSarextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sarext.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.sma.$get>>) {
  return ['sma', '/sma', toValue(args)] as const
}

export function getSmaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sma.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sma.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sma.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
          ReturnType<typeof getSmaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sma.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSplitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.splits.$get>>,
) {
  return ['splits', '/splits', toValue(args)] as const
}

export function getSplitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.splits.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSplitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.splits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSplits<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.splits.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
          ReturnType<typeof getSplitsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSplitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSplitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.splits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSplitsCalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.splits_calendar.$get>>,
) {
  return ['splits_calendar', '/splits_calendar', toValue(args)] as const
}

export function getSplitsCalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.splits_calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSplitsCalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.splits_calendar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSplitsCalendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.splits_calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>
            >
          >,
          ReturnType<typeof getSplitsCalendarQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.splits_calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSplitsCalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSplitsCalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.splits_calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSqrtQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.sqrt.$get>>) {
  return ['sqrt', '/sqrt', toValue(args)] as const
}

export function getSqrtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sqrt.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSqrtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sqrt.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSqrt<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sqrt.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
          ReturnType<typeof getSqrtQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sqrt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSqrtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSqrtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sqrt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.$get>>,
) {
  return ['statistics', '/statistics', toValue(args)] as const
}

export function getStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>
          >,
          ReturnType<typeof getStatisticsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStddevQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stddev.$get>>,
) {
  return ['stddev', '/stddev', toValue(args)] as const
}

export function getStddevQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stddev.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStddevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stddev.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStddev<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stddev.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
          ReturnType<typeof getStddevQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stddev.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStddevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStddevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stddev.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStochQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stoch.$get>>,
) {
  return ['stoch', '/stoch', toValue(args)] as const
}

export function getStochQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stoch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStochQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stoch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStoch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stoch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
          ReturnType<typeof getStochQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stoch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStochQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStochQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stoch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStochfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stochf.$get>>,
) {
  return ['stochf', '/stochf', toValue(args)] as const
}

export function getStochfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stochf.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStochfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stochf.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStochf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stochf.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
          ReturnType<typeof getStochfQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStochfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStochfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stochf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStochrsiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stochrsi.$get>>,
) {
  return ['stochrsi', '/stochrsi', toValue(args)] as const
}

export function getStochrsiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stochrsi.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStochrsiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stochrsi.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStochrsi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stochrsi.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>
          >,
          ReturnType<typeof getStochrsiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stochrsi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStochrsiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStochrsiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stochrsi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.$get>>,
) {
  return ['stocks', '/stocks', toValue(args)] as const
}

export function getStocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stocks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStocks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stocks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
          ReturnType<typeof getStocksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stocks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.sub.$get>>) {
  return ['sub', '/sub', toValue(args)] as const
}

export function getSubQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sub.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sub.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSub<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sub.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
          ReturnType<typeof getSubQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sub.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSumQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.sum.$get>>) {
  return ['sum', '/sum', toValue(args)] as const
}

export function getSumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sum.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sum.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSum<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sum.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
          ReturnType<typeof getSumQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sum.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sum.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupertrendQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supertrend.$get>>,
) {
  return ['supertrend', '/supertrend', toValue(args)] as const
}

export function getSupertrendQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supertrend.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSupertrendQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.supertrend.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSupertrend<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supertrend.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>
          >,
          ReturnType<typeof getSupertrendQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supertrend.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSupertrendQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSupertrendQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.supertrend.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupertrendHeikinashicandlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supertrend_heikinashicandles.$get>>,
) {
  return ['supertrend_heikinashicandles', '/supertrend_heikinashicandles', toValue(args)] as const
}

export function getSupertrendHeikinashicandlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supertrend_heikinashicandles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSupertrendHeikinashicandlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.supertrend_heikinashicandles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupertrendHeikinashicandles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supertrend_heikinashicandles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>
              >
            >
          >,
          ReturnType<typeof getSupertrendHeikinashicandlesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.supertrend_heikinashicandles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupertrendHeikinashicandlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSupertrendHeikinashicandlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.supertrend_heikinashicandles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSymbolSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.symbol_search.$get>>,
) {
  return ['symbol_search', '/symbol_search', toValue(args)] as const
}

export function getSymbolSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.symbol_search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSymbolSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.symbol_search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSymbolSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.symbol_search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
          >,
          ReturnType<typeof getSymbolSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.symbol_search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSymbolSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSymbolSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.symbol_search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getT3maQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.t3ma.$get>>) {
  return ['t3ma', '/t3ma', toValue(args)] as const
}

export function getT3maQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.t3ma.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getT3maQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.t3ma.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useT3ma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.t3ma.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
          ReturnType<typeof getT3maQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.t3ma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getT3maQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getT3maQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.t3ma.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaxInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tax_info.$get>>,
) {
  return ['tax_info', '/tax_info', toValue(args)] as const
}

export function getTaxInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tax_info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tax_info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTaxInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tax_info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>
          >,
          ReturnType<typeof getTaxInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tax_info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tax_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechnicalIndicatorsQueryKey() {
  return ['technical_indicators', '/technical_indicators'] as const
}

export function getTechnicalIndicatorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTechnicalIndicatorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.technical_indicators.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTechnicalIndicators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>
            >
          >,
          ReturnType<typeof getTechnicalIndicatorsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technical_indicators.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTechnicalIndicatorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTechnicalIndicatorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.technical_indicators.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tema.$get>>) {
  return ['tema', '/tema', toValue(args)] as const
}

export function getTemaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tema.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tema.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tema.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
          ReturnType<typeof getTemaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tema.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimeSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_series.$get>>,
) {
  return ['time_series', '/time_series', toValue(args)] as const
}

export function getTimeSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_series.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimeSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>
          >,
          ReturnType<typeof getTimeSeriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimeSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimeSeriesCrossQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_series.cross.$get>>,
) {
  return ['time_series', '/time_series/cross', toValue(args)] as const
}

export function getTimeSeriesCrossQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_series.cross.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeSeriesCrossQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.time_series.cross.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimeSeriesCross<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.time_series.cross.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>
            >
          >,
          ReturnType<typeof getTimeSeriesCrossQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.time_series.cross.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimeSeriesCrossQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeSeriesCrossQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.time_series.cross.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrangeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trange.$get>>,
) {
  return ['trange', '/trange', toValue(args)] as const
}

export function getTrangeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trange.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trange.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrange<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trange.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
          ReturnType<typeof getTrangeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trange.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trange.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrimaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trima.$get>>,
) {
  return ['trima', '/trima', toValue(args)] as const
}

export function getTrimaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trima.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrimaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trima.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrima<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trima.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
          ReturnType<typeof getTrimaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trima.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrimaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrimaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trima.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTsfQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tsf.$get>>) {
  return ['tsf', '/tsf', toValue(args)] as const
}

export function getTsfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tsf.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTsfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tsf.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTsf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tsf.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
          ReturnType<typeof getTsfQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tsf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTsfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTsfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tsf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTyppriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.typprice.$get>>,
) {
  return ['typprice', '/typprice', toValue(args)] as const
}

export function getTyppriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.typprice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTyppriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.typprice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTypprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.typprice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>
          >,
          ReturnType<typeof getTyppriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.typprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTyppriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTyppriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.typprice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUltoscQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ultosc.$get>>,
) {
  return ['ultosc', '/ultosc', toValue(args)] as const
}

export function getUltoscQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ultosc.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUltoscQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ultosc.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUltosc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ultosc.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
          ReturnType<typeof getUltoscQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ultosc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUltoscQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUltoscQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ultosc.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVarQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.var.$get>>) {
  return ['var', '/var', toValue(args)] as const
}

export function getVarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.var.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.var.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVar<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.var.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
          ReturnType<typeof getVarQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.var.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.var.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVwapQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.vwap.$get>>) {
  return ['vwap', '/vwap', toValue(args)] as const
}

export function getVwapQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vwap.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVwapQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vwap.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVwap<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vwap.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
          ReturnType<typeof getVwapQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vwap.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVwapQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVwapQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vwap.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWclpriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wclprice.$get>>,
) {
  return ['wclprice', '/wclprice', toValue(args)] as const
}

export function getWclpriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wclprice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWclpriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wclprice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWclprice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wclprice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>
          >,
          ReturnType<typeof getWclpriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wclprice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWclpriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWclpriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wclprice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWillrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.willr.$get>>,
) {
  return ['willr', '/willr', toValue(args)] as const
}

export function getWillrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.willr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWillrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.willr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWillr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.willr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
          ReturnType<typeof getWillrQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.willr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWillrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWillrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.willr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWmaQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.wma.$get>>) {
  return ['wma', '/wma', toValue(args)] as const
}

export function getWmaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wma.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWmaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wma.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWma<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.wma.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
          ReturnType<typeof getWmaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wma.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWmaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWmaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wma.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
