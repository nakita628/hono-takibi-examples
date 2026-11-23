import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1beta1', '/v1beta1/events/corporate-actions', keyArgs] as const
}

export function getV1beta1EventsCorporateActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1EventsCorporateActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.events['corporate-actions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1EventsCorporateActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.events)['corporate-actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1EventsCorporateActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1.events)['corporate-actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1EventsCorporateActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1EventsCorporateActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.events['corporate-actions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1FixedIncomeLatestPricesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>>,
) {
  return ['v1beta1', '/v1beta1/fixed_income/latest/prices', toValue(args)] as const
}

export function getV1beta1FixedIncomeLatestPricesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1FixedIncomeLatestPricesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.fixed_income.latest.prices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1FixedIncomeLatestPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.fixed_income.latest.prices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1FixedIncomeLatestPricesQueryKey>
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
          Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.prices.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1FixedIncomeLatestPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1FixedIncomeLatestPricesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.fixed_income.latest.prices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1FixedIncomeLatestQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>,
) {
  return ['v1beta1', '/v1beta1/fixed_income/latest/quotes', toValue(args)] as const
}

export function getV1beta1FixedIncomeLatestQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1FixedIncomeLatestQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.fixed_income.latest.quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1FixedIncomeLatestQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1FixedIncomeLatestQuotesQueryKey>
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
          Awaited<ReturnType<typeof client.v1beta1.fixed_income.latest.quotes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1FixedIncomeLatestQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1FixedIncomeLatestQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.fixed_income.latest.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1LogosSymbolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/logos/:symbol', toValue(args)] as const
}

export function getV1beta1LogosSymbolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1LogosSymbolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.logos[':symbol'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1LogosSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1LogosSymbolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1.logos)[':symbol']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1LogosSymbolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1LogosSymbolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.logos[':symbol'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1NewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.news.$get>>,
) {
  return ['v1beta1', '/v1beta1/news', toValue(args)] as const
}

export function getV1beta1NewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.news.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.news.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1beta1News<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.news.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>
          >,
          ReturnType<typeof getV1beta1NewsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.news.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1beta1NewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.news.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsBarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.bars.$get>>,
) {
  return ['v1beta1', '/v1beta1/options/bars', toValue(args)] as const
}

export function getV1beta1OptionsBarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.bars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsBars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.bars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>
            >
          >,
          ReturnType<typeof getV1beta1OptionsBarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.bars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsMetaConditionsTicktypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/options/meta/conditions/:ticktype', toValue(args)] as const
}

export function getV1beta1OptionsMetaConditionsTicktypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsMetaConditionsTicktypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.meta.conditions[':ticktype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsMetaConditionsTicktype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1OptionsMetaConditionsTicktypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1.options.meta.conditions)[':ticktype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsMetaConditionsTicktypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsMetaConditionsTicktypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.meta.conditions[':ticktype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsMetaExchangesQueryKey() {
  return ['v1beta1', '/v1beta1/options/meta/exchanges'] as const
}

export function getV1beta1OptionsMetaExchangesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1beta1OptionsMetaExchangesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.meta.exchanges.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsMetaExchanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1OptionsMetaExchangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.meta.exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsMetaExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1beta1OptionsMetaExchangesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.meta.exchanges.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsQuotesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>>,
) {
  return ['v1beta1', '/v1beta1/options/quotes/latest', toValue(args)] as const
}

export function getV1beta1OptionsQuotesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsQuotesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.quotes.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsQuotesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.quotes.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1OptionsQuotesLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.quotes.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsQuotesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsQuotesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.quotes.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.snapshots.$get>>,
) {
  return ['v1beta1', '/v1beta1/options/snapshots', toValue(args)] as const
}

export function getV1beta1OptionsSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.snapshots.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.snapshots.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1OptionsSnapshotsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.snapshots.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/options/snapshots/:underlying_symbol', toValue(args)] as const
}

export function getV1beta1OptionsSnapshotsUnderlyingSymbolQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.snapshots[':underlying_symbol'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsSnapshotsUnderlyingSymbol<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v1beta1.options.snapshots)[':underlying_symbol']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsSnapshotsUnderlyingSymbolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.snapshots[':underlying_symbol'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.trades.$get>>,
) {
  return ['v1beta1', '/v1beta1/options/trades', toValue(args)] as const
}

export function getV1beta1OptionsTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.trades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.trades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
            >
          >,
          ReturnType<typeof getV1beta1OptionsTradesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1OptionsTradesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.trades.latest.$get>>,
) {
  return ['v1beta1', '/v1beta1/options/trades/latest', toValue(args)] as const
}

export function getV1beta1OptionsTradesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.trades.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1OptionsTradesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.options.trades.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1OptionsTradesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta1.options.trades.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>
              >
            >
          >,
          ReturnType<typeof getV1beta1OptionsTradesLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.options.trades.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1OptionsTradesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1OptionsTradesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.options.trades.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ScreenerMarketTypeMoversQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/screener/:market_type/movers', toValue(args)] as const
}

export function getV1beta1ScreenerMarketTypeMoversQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ScreenerMarketTypeMoversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.screener[':market_type'].movers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ScreenerMarketTypeMovers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1ScreenerMarketTypeMoversQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1.screener)[':market_type']['movers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ScreenerMarketTypeMoversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ScreenerMarketTypeMoversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.screener[':market_type'].movers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ScreenerStocksMostActivesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/screener/stocks/most-actives', toValue(args)] as const
}

export function getV1beta1ScreenerStocksMostActivesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ScreenerStocksMostActivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1.screener.stocks['most-actives'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ScreenerStocksMostActives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ScreenerStocksMostActivesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1.screener.stocks)['most-actives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ScreenerStocksMostActivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ScreenerStocksMostActivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1.screener.stocks['most-actives'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocBarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/bars', toValue(args)] as const
}

export function getV1beta3CryptoLocBarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocBarsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocLatestBarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/bars', toValue(args)] as const
}

export function getV1beta3CryptoLocLatestBarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocLatestBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocLatestBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocLatestBarsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocLatestBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].latest.bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocLatestOrderbooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/orderbooks', toValue(args)] as const
}

export function getV1beta3CryptoLocLatestOrderbooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocLatestOrderbooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.orderbooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocLatestOrderbooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocLatestOrderbooksQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['orderbooks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestOrderbooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocLatestOrderbooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].latest.orderbooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocLatestQuotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/quotes', toValue(args)] as const
}

export function getV1beta3CryptoLocLatestQuotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocLatestQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocLatestQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocLatestQuotesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocLatestQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].latest.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocLatestTradesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/latest/trades', toValue(args)] as const
}

export function getV1beta3CryptoLocLatestTradesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocLatestTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].latest.trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocLatestTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocLatestTradesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['latest']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocLatestTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocLatestTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].latest.trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocQuotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/quotes', toValue(args)] as const
}

export function getV1beta3CryptoLocQuotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocQuotesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/snapshots', toValue(args)] as const
}

export function getV1beta3CryptoLocSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta3CryptoLocTradesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>
  >,
) {
  return ['v1beta3', '/v1beta3/crypto/:loc/trades', toValue(args)] as const
}

export function getV1beta3CryptoLocTradesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta3CryptoLocTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta3.crypto[':loc'].trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta3CryptoLocTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta3CryptoLocTradesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta3.crypto)[':loc']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta3CryptoLocTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta3CryptoLocTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta3.crypto[':loc'].trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CorporateActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['corporate-actions']['$get']>>,
) {
  return ['v1', '/v1/corporate-actions', toValue(args)] as const
}

export function getV1CorporateActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['corporate-actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CorporateActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['corporate-actions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CorporateActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['corporate-actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CorporateActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['corporate-actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CorporateActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CorporateActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['corporate-actions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolAuctionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>
  >,
) {
  return ['v2', '/v2/stocks/:symbol/auctions', toValue(args)] as const
}

export function getV2StocksSymbolAuctionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolAuctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].auctions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolAuctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolAuctionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['auctions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolAuctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolAuctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].auctions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolBarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>,
) {
  return ['v2', '/v2/stocks/:symbol/bars', toValue(args)] as const
}

export function getV2StocksSymbolBarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolBarsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolBarsLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>
  >,
) {
  return ['v2', '/v2/stocks/:symbol/bars/latest', toValue(args)] as const
}

export function getV2StocksSymbolBarsLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolBarsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].bars.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolBarsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolBarsLatestQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['bars']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolBarsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolBarsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].bars.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>,
) {
  return ['v2', '/v2/stocks/:symbol/quotes', toValue(args)] as const
}

export function getV2StocksSymbolQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolQuotesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolQuotesLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>
  >,
) {
  return ['v2', '/v2/stocks/:symbol/quotes/latest', toValue(args)] as const
}

export function getV2StocksSymbolQuotesLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolQuotesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].quotes.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolQuotesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolQuotesLatestQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['quotes']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolQuotesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolQuotesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].quotes.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolSnapshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>
  >,
) {
  return ['v2', '/v2/stocks/:symbol/snapshot', toValue(args)] as const
}

export function getV2StocksSymbolSnapshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].snapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolSnapshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolSnapshotQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['snapshot']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>,
) {
  return ['v2', '/v2/stocks/:symbol/trades', toValue(args)] as const
}

export function getV2StocksSymbolTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolTradesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSymbolTradesLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>
  >,
) {
  return ['v2', '/v2/stocks/:symbol/trades/latest', toValue(args)] as const
}

export function getV2StocksSymbolTradesLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSymbolTradesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks[':symbol'].trades.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSymbolTradesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2StocksSymbolTradesLatestQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks)[':symbol']['trades']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSymbolTradesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSymbolTradesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks[':symbol'].trades.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksAuctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.auctions.$get>>,
) {
  return ['v2', '/v2/stocks/auctions', toValue(args)] as const
}

export function getV2StocksAuctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.auctions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksAuctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.auctions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksAuctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.auctions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksAuctionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.auctions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksAuctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksAuctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.auctions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksBarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.bars.$get>>,
) {
  return ['v2', '/v2/stocks/bars', toValue(args)] as const
}

export function getV2StocksBarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.bars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksBars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.bars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
          >,
          ReturnType<typeof getV2StocksBarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksBarsLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.bars.latest.$get>>,
) {
  return ['v2', '/v2/stocks/bars/latest', toValue(args)] as const
}

export function getV2StocksBarsLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.bars.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksBarsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.bars.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksBarsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.bars.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksBarsLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.bars.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksBarsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksBarsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.bars.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksMetaConditionsTicktypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>
  >,
) {
  return ['v2', '/v2/stocks/meta/conditions/:ticktype', toValue(args)] as const
}

export function getV2StocksMetaConditionsTicktypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksMetaConditionsTicktypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.meta.conditions[':ticktype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksMetaConditionsTicktype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2StocksMetaConditionsTicktypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.stocks.meta.conditions)[':ticktype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksMetaConditionsTicktypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksMetaConditionsTicktypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.meta.conditions[':ticktype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksMetaExchangesQueryKey() {
  return ['v2', '/v2/stocks/meta/exchanges'] as const
}

export function getV2StocksMetaExchangesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2StocksMetaExchangesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.meta.exchanges.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksMetaExchanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksMetaExchangesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.meta.exchanges.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksMetaExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2StocksMetaExchangesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.meta.exchanges.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.quotes.$get>>,
) {
  return ['v2', '/v2/stocks/quotes', toValue(args)] as const
}

export function getV2StocksQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksQuotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksQuotesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.quotes.latest.$get>>,
) {
  return ['v2', '/v2/stocks/quotes/latest', toValue(args)] as const
}

export function getV2StocksQuotesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.quotes.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksQuotesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.quotes.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksQuotesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.quotes.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksQuotesLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.quotes.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksQuotesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksQuotesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.quotes.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.snapshots.$get>>,
) {
  return ['v2', '/v2/stocks/snapshots', toValue(args)] as const
}

export function getV2StocksSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.snapshots.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.snapshots.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksSnapshotsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.snapshots.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.trades.$get>>,
) {
  return ['v2', '/v2/stocks/trades', toValue(args)] as const
}

export function getV2StocksTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.trades.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksTrades<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.trades.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksTradesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2StocksTradesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.trades.latest.$get>>,
) {
  return ['v2', '/v2/stocks/trades/latest', toValue(args)] as const
}

export function getV2StocksTradesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.trades.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2StocksTradesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.stocks.trades.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2StocksTradesLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.stocks.trades.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
            >
          >,
          ReturnType<typeof getV2StocksTradesLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.stocks.trades.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2StocksTradesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2StocksTradesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.stocks.trades.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedBarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>,
) {
  return ['v3', '/v3/stocks/:feed/bars', toValue(args)] as const
}

export function getV3StocksFeedBarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedBarsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedLatestBarsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>
  >,
) {
  return ['v3', '/v3/stocks/:feed/latest/bars', toValue(args)] as const
}

export function getV3StocksFeedLatestBarsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedLatestBarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].latest.bars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedLatestBars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedLatestBarsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['bars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedLatestBarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedLatestBarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].latest.bars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedLatestQuotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>
  >,
) {
  return ['v3', '/v3/stocks/:feed/latest/quotes', toValue(args)] as const
}

export function getV3StocksFeedLatestQuotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedLatestQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].latest.quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedLatestQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedLatestQuotesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedLatestQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedLatestQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].latest.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedLatestTradesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>
  >,
) {
  return ['v3', '/v3/stocks/:feed/latest/trades', toValue(args)] as const
}

export function getV3StocksFeedLatestTradesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedLatestTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].latest.trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedLatestTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedLatestTradesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['latest']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedLatestTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedLatestTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].latest.trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>,
) {
  return ['v3', '/v3/stocks/:feed/quotes', toValue(args)] as const
}

export function getV3StocksFeedQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedQuotesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['quotes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>,
) {
  return ['v3', '/v3/stocks/:feed/snapshots', toValue(args)] as const
}

export function getV3StocksFeedSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StocksFeedTradesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>,
) {
  return ['v3', '/v3/stocks/:feed/trades', toValue(args)] as const
}

export function getV3StocksFeedTradesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StocksFeedTradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stocks[':feed'].trades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StocksFeedTrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3StocksFeedTradesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stocks)[':feed']['trades']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StocksFeedTradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StocksFeedTradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stocks[':feed'].trades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
