import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta3Key() {
  return ['v1beta3'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV1beta1EventsCorporateActionsQueryKey(
  args: InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1beta1', '/v1beta1/events/corporate-actions', keyArgs] as const
}

export function getV1beta1EventsCorporateActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1EventsCorporateActionsQueryKey>
  >({
    queryKey: getV1beta1EventsCorporateActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.events['corporate-actions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1EventsCorporateActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1EventsCorporateActionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1EventsCorporateActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1FixedIncomeLatestPricesQueryKey(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
) {
  return ['v1beta1', '/v1beta1/fixed_income/latest/prices', args] as const
}

export function getV1beta1FixedIncomeLatestPricesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1FixedIncomeLatestPricesQueryKey>
  >({
    queryKey: getV1beta1FixedIncomeLatestPricesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.fixed_income.latest.prices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1FixedIncomeLatestPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1FixedIncomeLatestPricesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1FixedIncomeLatestPricesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1FixedIncomeLatestQuotesQueryKey(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
) {
  return ['v1beta1', '/v1beta1/fixed_income/latest/quotes', args] as const
}

export function getV1beta1FixedIncomeLatestQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1FixedIncomeLatestQuotesQueryKey>
  >({
    queryKey: getV1beta1FixedIncomeLatestQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.fixed_income.latest.quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1FixedIncomeLatestQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1FixedIncomeLatestQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1FixedIncomeLatestQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1LogosSymbolQueryKey(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
) {
  return ['v1beta1', '/v1beta1/logos/:symbol', args] as const
}

export function getV1beta1LogosSymbolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LogosSymbolQueryKey>
  >({
    queryKey: getV1beta1LogosSymbolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.logos[':symbol'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1LogosSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1LogosSymbolQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1LogosSymbolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1beta1NewsQueryKey(args: InferRequestType<typeof client.v1beta1.news.$get>) {
  return ['v1beta1', '/v1beta1/news', args] as const
}

export function getV1beta1NewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.news.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1beta1NewsQueryKey>
  >({
    queryKey: getV1beta1NewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.news.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1beta1News<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.news.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1NewsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1NewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1beta1OptionsBarsQueryKey(
  args: InferRequestType<typeof client.v1beta1.options.bars.$get>,
) {
  return ['v1beta1', '/v1beta1/options/bars', args] as const
}

export function getV1beta1OptionsBarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1beta1.options.bars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsBarsQueryKey>
  >({
    queryKey: getV1beta1OptionsBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.bars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1beta1OptionsBars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.options.bars.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1OptionsBarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1beta1OptionsMetaConditionsTicktypeQueryKey(
  args: InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>,
) {
  return ['v1beta1', '/v1beta1/options/meta/conditions/:ticktype', args] as const
}

export function getV1beta1OptionsMetaConditionsTicktypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsMetaConditionsTicktypeQueryKey>
  >({
    queryKey: getV1beta1OptionsMetaConditionsTicktypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.meta.conditions[':ticktype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsMetaConditionsTicktype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsMetaConditionsTicktypeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1OptionsMetaConditionsTicktypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1OptionsMetaExchangesQueryKey() {
  return ['v1beta1', '/v1beta1/options/meta/exchanges'] as const
}

export function getV1beta1OptionsMetaExchangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsMetaExchangesQueryKey>
  >({
    queryKey: getV1beta1OptionsMetaExchangesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.meta.exchanges.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsMetaExchanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsMetaExchangesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1beta1OptionsMetaExchangesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1beta1OptionsQuotesLatestQueryKey(
  args: InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
) {
  return ['v1beta1', '/v1beta1/options/quotes/latest', args] as const
}

export function getV1beta1OptionsQuotesLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsQuotesLatestQueryKey>
  >({
    queryKey: getV1beta1OptionsQuotesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.quotes.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsQuotesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsQuotesLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1OptionsQuotesLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1OptionsSnapshotsQueryKey(
  args: InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
) {
  return ['v1beta1', '/v1beta1/options/snapshots', args] as const
}

export function getV1beta1OptionsSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsSnapshotsQueryKey>
  >({
    queryKey: getV1beta1OptionsSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.options.snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1OptionsSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey(
  args: InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>,
) {
  return ['v1beta1', '/v1beta1/options/snapshots/:underlying_symbol', args] as const
}

export function getV1beta1OptionsSnapshotsUnderlyingSymbolQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey>
  >({
    queryKey: getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.snapshots[':underlying_symbol'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsSnapshotsUnderlyingSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1OptionsSnapshotsUnderlyingSymbolQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1OptionsTradesQueryKey(
  args: InferRequestType<typeof client.v1beta1.options.trades.$get>,
) {
  return ['v1beta1', '/v1beta1/options/trades', args] as const
}

export function getV1beta1OptionsTradesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.options.trades.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsTradesQueryKey>
  >({
    queryKey: getV1beta1OptionsTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.options.trades.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1OptionsTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1OptionsTradesLatestQueryKey(
  args: InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
) {
  return ['v1beta1', '/v1beta1/options/trades/latest', args] as const
}

export function getV1beta1OptionsTradesLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsTradesLatestQueryKey>
  >({
    queryKey: getV1beta1OptionsTradesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.options.trades.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1OptionsTradesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1beta1.options.trades.latest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1OptionsTradesLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1OptionsTradesLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1ScreenerMarketTypeMoversQueryKey(
  args: InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
) {
  return ['v1beta1', '/v1beta1/screener/:market_type/movers', args] as const
}

export function getV1beta1ScreenerMarketTypeMoversQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ScreenerMarketTypeMoversQueryKey>
  >({
    queryKey: getV1beta1ScreenerMarketTypeMoversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.screener[':market_type'].movers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1ScreenerMarketTypeMovers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1ScreenerMarketTypeMoversQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1ScreenerMarketTypeMoversQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta1ScreenerStocksMostActivesQueryKey(
  args: InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
) {
  return ['v1beta1', '/v1beta1/screener/stocks/most-actives', args] as const
}

export function getV1beta1ScreenerStocksMostActivesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ScreenerStocksMostActivesQueryKey>
  >({
    queryKey: getV1beta1ScreenerStocksMostActivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1.screener.stocks['most-actives'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta1ScreenerStocksMostActives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta1ScreenerStocksMostActivesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta1ScreenerStocksMostActivesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocBarsQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/bars', args] as const
}

export function getV1beta3CryptoLocBarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocBarsQueryKey>
  >({
    queryKey: getV1beta3CryptoLocBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].bars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocBarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocLatestBarsQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/bars', args] as const
}

export function getV1beta3CryptoLocLatestBarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestBarsQueryKey>
  >({
    queryKey: getV1beta3CryptoLocLatestBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.bars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocLatestBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocLatestBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocLatestBarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocLatestOrderbooksQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/orderbooks', args] as const
}

export function getV1beta3CryptoLocLatestOrderbooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestOrderbooksQueryKey>
  >({
    queryKey: getV1beta3CryptoLocLatestOrderbooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.orderbooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocLatestOrderbooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocLatestOrderbooksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocLatestOrderbooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocLatestQuotesQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/quotes', args] as const
}

export function getV1beta3CryptoLocLatestQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestQuotesQueryKey>
  >({
    queryKey: getV1beta3CryptoLocLatestQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocLatestQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocLatestQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocLatestQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocLatestTradesQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/trades', args] as const
}

export function getV1beta3CryptoLocLatestTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestTradesQueryKey>
  >({
    queryKey: getV1beta3CryptoLocLatestTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocLatestTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocLatestTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocLatestTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocQuotesQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/quotes', args] as const
}

export function getV1beta3CryptoLocQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocQuotesQueryKey>
  >({
    queryKey: getV1beta3CryptoLocQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/snapshots', args] as const
}

export function getV1beta3CryptoLocSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocSnapshotsQueryKey>
  >({
    queryKey: getV1beta3CryptoLocSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1beta3CryptoLocTradesQueryKey(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/trades', args] as const
}

export function getV1beta3CryptoLocTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocTradesQueryKey>
  >({
    queryKey: getV1beta3CryptoLocTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1beta3CryptoLocTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1beta3CryptoLocTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1beta3CryptoLocTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CorporateActionsQueryKey(
  args: InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
) {
  return ['v1', '/v1/corporate-actions', args] as const
}

export function getV1CorporateActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorporateActionsQueryKey>
  >({
    queryKey: getV1CorporateActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['corporate-actions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CorporateActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['corporate-actions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CorporateActionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1CorporateActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksSymbolAuctionsQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/auctions', args] as const
}

export function getV2StocksSymbolAuctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolAuctionsQueryKey>
  >({
    queryKey: getV2StocksSymbolAuctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].auctions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolAuctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolAuctionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolAuctionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSymbolBarsQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/bars', args] as const
}

export function getV2StocksSymbolBarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolBarsQueryKey>
  >({
    queryKey: getV2StocksSymbolBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].bars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksSymbolBarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksSymbolBarsLatestQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/bars/latest', args] as const
}

export function getV2StocksSymbolBarsLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolBarsLatestQueryKey>
  >({
    queryKey: getV2StocksSymbolBarsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].bars.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolBarsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolBarsLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolBarsLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSymbolQuotesQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/quotes', args] as const
}

export function getV2StocksSymbolQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolQuotesQueryKey>
  >({
    queryKey: getV2StocksSymbolQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSymbolQuotesLatestQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/quotes/latest', args] as const
}

export function getV2StocksSymbolQuotesLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolQuotesLatestQueryKey>
  >({
    queryKey: getV2StocksSymbolQuotesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].quotes.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolQuotesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolQuotesLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolQuotesLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSymbolSnapshotQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/snapshot', args] as const
}

export function getV2StocksSymbolSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolSnapshotQueryKey>
  >({
    queryKey: getV2StocksSymbolSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].snapshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolSnapshotQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolSnapshotQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSymbolTradesQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/trades', args] as const
}

export function getV2StocksSymbolTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolTradesQueryKey>
  >({
    queryKey: getV2StocksSymbolTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSymbolTradesLatestQueryKey(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
) {
  return ['v2', '/v2/stocks/:symbol/trades/latest', args] as const
}

export function getV2StocksSymbolTradesLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolTradesLatestQueryKey>
  >({
    queryKey: getV2StocksSymbolTradesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks[':symbol'].trades.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksSymbolTradesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSymbolTradesLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksSymbolTradesLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksAuctionsQueryKey(
  args: InferRequestType<typeof client.v2.stocks.auctions.$get>,
) {
  return ['v2', '/v2/stocks/auctions', args] as const
}

export function getV2StocksAuctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stocks.auctions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksAuctionsQueryKey>
  >({
    queryKey: getV2StocksAuctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.auctions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StocksAuctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.auctions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksAuctionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksAuctionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksBarsQueryKey(args: InferRequestType<typeof client.v2.stocks.bars.$get>) {
  return ['v2', '/v2/stocks/bars', args] as const
}

export function getV2StocksBarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stocks.bars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksBarsQueryKey>
  >({
    queryKey: getV2StocksBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.bars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StocksBars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.bars.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksBarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksBarsLatestQueryKey(
  args: InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
) {
  return ['v2', '/v2/stocks/bars/latest', args] as const
}

export function getV2StocksBarsLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksBarsLatestQueryKey>
  >({
    queryKey: getV2StocksBarsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.bars.latest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StocksBarsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.bars.latest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksBarsLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksBarsLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksMetaConditionsTicktypeQueryKey(
  args: InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
) {
  return ['v2', '/v2/stocks/meta/conditions/:ticktype', args] as const
}

export function getV2StocksMetaConditionsTicktypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksMetaConditionsTicktypeQueryKey>
  >({
    queryKey: getV2StocksMetaConditionsTicktypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.meta.conditions[':ticktype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksMetaConditionsTicktype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksMetaConditionsTicktypeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksMetaConditionsTicktypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksMetaExchangesQueryKey() {
  return ['v2', '/v2/stocks/meta/exchanges'] as const
}

export function getV2StocksMetaExchangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksMetaExchangesQueryKey>
  >({
    queryKey: getV2StocksMetaExchangesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.meta.exchanges.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksMetaExchanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksMetaExchangesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksMetaExchangesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksQuotesQueryKey(
  args: InferRequestType<typeof client.v2.stocks.quotes.$get>,
) {
  return ['v2', '/v2/stocks/quotes', args] as const
}

export function getV2StocksQuotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stocks.quotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksQuotesQueryKey>
  >({
    queryKey: getV2StocksQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.quotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StocksQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.quotes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksQuotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksQuotesLatestQueryKey(
  args: InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
) {
  return ['v2', '/v2/stocks/quotes/latest', args] as const
}

export function getV2StocksQuotesLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksQuotesLatestQueryKey>
  >({
    queryKey: getV2StocksQuotesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.quotes.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksQuotesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.quotes.latest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksQuotesLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksQuotesLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2StocksSnapshotsQueryKey(
  args: InferRequestType<typeof client.v2.stocks.snapshots.$get>,
) {
  return ['v2', '/v2/stocks/snapshots', args] as const
}

export function getV2StocksSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stocks.snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSnapshotsQueryKey>
  >({
    queryKey: getV2StocksSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StocksSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksTradesQueryKey(
  args: InferRequestType<typeof client.v2.stocks.trades.$get>,
) {
  return ['v2', '/v2/stocks/trades', args] as const
}

export function getV2StocksTradesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.stocks.trades.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksTradesQueryKey>
  >({
    queryKey: getV2StocksTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.trades.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2StocksTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.trades.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2StocksTradesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2StocksTradesLatestQueryKey(
  args: InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
) {
  return ['v2', '/v2/stocks/trades/latest', args] as const
}

export function getV2StocksTradesLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksTradesLatestQueryKey>
  >({
    queryKey: getV2StocksTradesLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.stocks.trades.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2StocksTradesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.stocks.trades.latest.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2StocksTradesLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2StocksTradesLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StocksFeedBarsQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/bars', args] as const
}

export function getV3StocksFeedBarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedBarsQueryKey>
  >({
    queryKey: getV3StocksFeedBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].bars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3StocksFeedBarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3StocksFeedLatestBarsQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/latest/bars', args] as const
}

export function getV3StocksFeedLatestBarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedLatestBarsQueryKey>
  >({
    queryKey: getV3StocksFeedLatestBarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].latest.bars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedLatestBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedLatestBarsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3StocksFeedLatestBarsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StocksFeedLatestQuotesQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/latest/quotes', args] as const
}

export function getV3StocksFeedLatestQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedLatestQuotesQueryKey>
  >({
    queryKey: getV3StocksFeedLatestQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].latest.quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedLatestQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedLatestQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3StocksFeedLatestQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StocksFeedLatestTradesQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/latest/trades', args] as const
}

export function getV3StocksFeedLatestTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedLatestTradesQueryKey>
  >({
    queryKey: getV3StocksFeedLatestTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].latest.trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedLatestTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedLatestTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3StocksFeedLatestTradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StocksFeedQuotesQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/quotes', args] as const
}

export function getV3StocksFeedQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedQuotesQueryKey>
  >({
    queryKey: getV3StocksFeedQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedQuotesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3StocksFeedQuotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3StocksFeedSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/snapshots', args] as const
}

export function getV3StocksFeedSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedSnapshotsQueryKey>
  >({
    queryKey: getV3StocksFeedSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3StocksFeedSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StocksFeedTradesQueryKey(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
) {
  return ['v3', '/v3/stocks/:feed/trades', args] as const
}

export function getV3StocksFeedTradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedTradesQueryKey>
  >({
    queryKey: getV3StocksFeedTradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stocks[':feed'].trades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StocksFeedTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StocksFeedTradesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3StocksFeedTradesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
