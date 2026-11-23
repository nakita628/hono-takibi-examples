import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsKey() {
  return ['settings'] as const
}

export function getPostSettingsCurrencies202609CentralFxRatesAddCurrencyMutationKey() {
  return ['settings', '/settings/currencies/2026-09/central-fx-rates/add-currency', 'POST'] as const
}

export function getPostSettingsCurrencies202609CentralFxRatesAddCurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCurrencies202609CentralFxRatesAddCurrencyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['central-fx-rates']['add-currency'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSettingsCurrencies202609CentralFxRatesAddCurrency<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsCurrencies202609CentralFxRatesAddCurrencyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609CentralFxRatesInformationQueryKey() {
  return ['settings', '/settings/currencies/2026-09/central-fx-rates/information'] as const
}

export function getSettingsCurrencies202609CentralFxRatesInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609CentralFxRatesInformationQueryKey>
  >({
    queryKey: getSettingsCurrencies202609CentralFxRatesInformationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09']['central-fx-rates'].information.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencies202609CentralFxRatesInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CentralFxRatesInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609CentralFxRatesInformationQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609CentralFxRatesInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['central-fx-rates']['information']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CentralFxRatesInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609CentralFxRatesInformationQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryKey() {
  return [
    'settings',
    '/settings/currencies/2026-09/central-fx-rates/unsupported-currencies',
  ] as const
}

export function getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryKey>
  >({
    queryKey: getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09']['central-fx-rates']['unsupported-currencies'].$get(
          undefined,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useSettingsCurrencies202609CentralFxRatesUnsupportedCurrencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609CentralFxRatesUnsupportedCurrencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['central-fx-rates']['unsupported-currencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609CentralFxRatesUnsupportedCurrenciesQueryOptions<TData, TError>(
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609CodesQueryKey() {
  return ['settings', '/settings/currencies/2026-09/codes'] as const
}

export function getSettingsCurrencies202609CodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609CodesQueryKey>
  >({
    queryKey: getSettingsCurrencies202609CodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09'].codes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencies202609Codes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609CodesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609Codes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.currencies)['2026-09']['codes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609CodesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609CompanyCurrencyQueryKey() {
  return ['settings', '/settings/currencies/2026-09/company-currency'] as const
}

export function getSettingsCurrencies202609CompanyCurrencyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609CompanyCurrencyQueryKey>
  >({
    queryKey: getSettingsCurrencies202609CompanyCurrencyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09']['company-currency'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencies202609CompanyCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['company-currency']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CompanyCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609CompanyCurrencyQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609CompanyCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['company-currency']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609CompanyCurrencyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609CompanyCurrencyQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSettingsCurrencies202609CompanyCurrencyMutationKey() {
  return ['settings', '/settings/currencies/2026-09/company-currency', 'PUT'] as const
}

export function getPutSettingsCurrencies202609CompanyCurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['company-currency']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.currencies)['2026-09']['company-currency']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsCurrencies202609CompanyCurrencyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['company-currency']['$put']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['company-currency'].$put(args, options),
      )
    },
  })
}

export function usePutSettingsCurrencies202609CompanyCurrency<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['company-currency']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['company-currency']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsCurrencies202609CompanyCurrencyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609ExchangeRatesQueryKey(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
) {
  return ['settings', '/settings/currencies/2026-09/exchange-rates', args] as const
}

export function getSettingsCurrencies202609ExchangeRatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609ExchangeRatesQueryKey>
  >({
    queryKey: getSettingsCurrencies202609ExchangeRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencies202609ExchangeRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609ExchangeRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609ExchangeRatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609ExchangeRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609ExchangeRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609ExchangeRatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSettingsCurrencies202609ExchangeRatesMutationKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates', 'POST'] as const
}

export function getPostSettingsCurrencies202609ExchangeRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCurrencies202609ExchangeRatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'].$post(args, options),
      )
    },
  })
}

export function usePostSettingsCurrencies202609ExchangeRates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsCurrencies202609ExchangeRatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchCreateMutationKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/batch/create', 'POST'] as const
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCurrencies202609ExchangeRatesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'].batch.create.$post(args, options),
      )
    },
  })
}

export function usePostSettingsCurrencies202609ExchangeRatesBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsCurrencies202609ExchangeRatesBatchCreateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchReadMutationKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/batch/read', 'POST'] as const
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCurrencies202609ExchangeRatesBatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'].batch.read.$post(args, options),
      )
    },
  })
}

export function usePostSettingsCurrencies202609ExchangeRatesBatchRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsCurrencies202609ExchangeRatesBatchReadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchUpdateMutationKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/batch/update', 'POST'] as const
}

export function getPostSettingsCurrencies202609ExchangeRatesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCurrencies202609ExchangeRatesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'].batch.update.$post(args, options),
      )
    },
  })
}

export function usePostSettingsCurrencies202609ExchangeRatesBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsCurrencies202609ExchangeRatesBatchUpdateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609ExchangeRatesCurrentQueryKey() {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/current'] as const
}

export function getSettingsCurrencies202609ExchangeRatesCurrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609ExchangeRatesCurrentQueryKey>
  >({
    queryKey: getSettingsCurrencies202609ExchangeRatesCurrentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'].current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencies202609ExchangeRatesCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609ExchangeRatesCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609ExchangeRatesCurrentQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609ExchangeRatesCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates']['current']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609ExchangeRatesCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609ExchangeRatesCurrentQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSettingsCurrencies202609ExchangeRatesUpdateVisibilityMutationKey() {
  return [
    'settings',
    '/settings/currencies/2026-09/exchange-rates/update-visibility',
    'POST',
  ] as const
}

export function getPostSettingsCurrencies202609ExchangeRatesUpdateVisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCurrencies202609ExchangeRatesUpdateVisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates']['update-visibility'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSettingsCurrencies202609ExchangeRatesUpdateVisibility<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSettingsCurrencies202609ExchangeRatesUpdateVisibilityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryKey(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
) {
  return ['settings', '/settings/currencies/2026-09/exchange-rates/:exchangeRateId', args] as const
}

export function getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryKey>
  >({
    queryKey: getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsCurrencies202609ExchangeRatesExchangeRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsCurrencies202609ExchangeRatesExchangeRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSettingsCurrencies202609ExchangeRatesExchangeRateIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchSettingsCurrencies202609ExchangeRatesExchangeRateIdMutationKey() {
  return [
    'settings',
    '/settings/currencies/2026-09/exchange-rates/:exchangeRateId',
    'PATCH',
  ] as const
}

export function getPatchSettingsCurrencies202609ExchangeRatesExchangeRateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsCurrencies202609ExchangeRatesExchangeRateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
      >,
    ) {
      return parseResponse(
        client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchSettingsCurrencies202609ExchangeRatesExchangeRateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchSettingsCurrencies202609ExchangeRatesExchangeRateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
