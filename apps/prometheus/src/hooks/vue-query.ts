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

export function getAdminKey() {
  return ['admin'] as const
}

export function getAlertmanagersKey() {
  return ['alertmanagers'] as const
}

export function getAlertsKey() {
  return ['alerts'] as const
}

export function getFeaturesKey() {
  return ['features'] as const
}

export function getFormatQueryKey() {
  return ['format_query'] as const
}

export function getLabelKey() {
  return ['label'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOtlpKey() {
  return ['otlp'] as const
}

export function getParseQueryKey() {
  return ['parse_query'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueryCostKey() {
  return ['query_cost'] as const
}

export function getQueryExemplarsKey() {
  return ['query_exemplars'] as const
}

export function getQueryRangeKey() {
  return ['query_range'] as const
}

export function getQueryRangeCostKey() {
  return ['query_range_cost'] as const
}

export function getReadKey() {
  return ['read'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getScrapePoolsKey() {
  return ['scrape_pools'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getTargetsKey() {
  return ['targets'] as const
}

export function getWriteKey() {
  return ['write'] as const
}

export function getQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.$get>>,
) {
  return ['query', '/query', toValue(args)] as const
}

export function getQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetQuery<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
          ReturnType<typeof getQueryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryMutationKey() {
  return ['query', '/query', 'POST'] as const
}

export function getPostQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.$post>) {
      return parseResponse(client.query.$post(args, options))
    },
  })
}

export function usePostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
          TError,
          InferRequestType<typeof client.query.$post>,
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
  const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryRangeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_range.$get>>,
) {
  return ['query_range', '/query_range', toValue(args)] as const
}

export function getQueryRangeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_range.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryRangeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query_range.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueryRange<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_range.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
          >,
          ReturnType<typeof getQueryRangeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryRangeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryRangeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query_range.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryRangeMutationKey() {
  return ['query_range', '/query_range', 'POST'] as const
}

export function getPostQueryRangeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$post>>>>>,
    TError,
    InferRequestType<typeof client.query_range.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryRangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query_range.$post>) {
      return parseResponse(client.query_range.$post(args, options))
    },
  })
}

export function usePostQueryRange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query_range.$post>,
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
  const mutationDefaults = getPostQueryRangeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryCostQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_cost.$get>>,
) {
  return ['query_cost', '/query_cost', toValue(args)] as const
}

export function getQueryCostQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_cost.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryCostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query_cost.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueryCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_cost.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>
          >,
          ReturnType<typeof getQueryCostQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryCostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryCostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query_cost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryCostMutationKey() {
  return ['query_cost', '/query_cost', 'POST'] as const
}

export function getPostQueryCostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$post>>>>>,
    TError,
    InferRequestType<typeof client.query_cost.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryCostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query_cost.$post>) {
      return parseResponse(client.query_cost.$post(args, options))
    },
  })
}

export function usePostQueryCost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query_cost.$post>,
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
  const mutationDefaults = getPostQueryCostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryRangeCostQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_range_cost.$get>>,
) {
  return ['query_range_cost', '/query_range_cost', toValue(args)] as const
}

export function getQueryRangeCostQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_range_cost.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryRangeCostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query_range_cost.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryRangeCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_range_cost.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>
            >
          >,
          ReturnType<typeof getQueryRangeCostQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryRangeCostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryRangeCostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query_range_cost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryRangeCostMutationKey() {
  return ['query_range_cost', '/query_range_cost', 'POST'] as const
}

export function getPostQueryRangeCostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.query_range_cost.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryRangeCostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query_range_cost.$post>) {
      return parseResponse(client.query_range_cost.$post(args, options))
    },
  })
}

export function usePostQueryRangeCost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.query_range_cost.$post>,
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
  const mutationDefaults = getPostQueryRangeCostMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryExemplarsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_exemplars.$get>>,
) {
  return ['query_exemplars', '/query_exemplars', toValue(args)] as const
}

export function getQueryExemplarsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_exemplars.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryExemplarsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query_exemplars.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryExemplars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query_exemplars.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>
            >
          >,
          ReturnType<typeof getQueryExemplarsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryExemplarsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryExemplarsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query_exemplars.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryExemplarsMutationKey() {
  return ['query_exemplars', '/query_exemplars', 'POST'] as const
}

export function getPostQueryExemplarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.query_exemplars.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryExemplarsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query_exemplars.$post>) {
      return parseResponse(client.query_exemplars.$post(args, options))
    },
  })
}

export function usePostQueryExemplars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.query_exemplars.$post>,
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
  const mutationDefaults = getPostQueryExemplarsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFormatQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.format_query.$get>>,
) {
  return ['format_query', '/format_query', toValue(args)] as const
}

export function getFormatQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.format_query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.format_query.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFormatQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.format_query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
          >,
          ReturnType<typeof getFormatQueryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormatQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.format_query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFormatQueryMutationKey() {
  return ['format_query', '/format_query', 'POST'] as const
}

export function getPostFormatQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.format_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFormatQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.format_query.$post>) {
      return parseResponse(client.format_query.$post(args, options))
    },
  })
}

export function usePostFormatQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.format_query.$post>,
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
  const mutationDefaults = getPostFormatQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getParseQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parse_query.$get>>,
) {
  return ['parse_query', '/parse_query', toValue(args)] as const
}

export function getParseQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parse_query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParseQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parse_query.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useParseQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.parse_query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
          >,
          ReturnType<typeof getParseQueryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getParseQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParseQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parse_query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostParseQueryMutationKey() {
  return ['parse_query', '/parse_query', 'POST'] as const
}

export function getPostParseQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$post>>>>>,
    TError,
    InferRequestType<typeof client.parse_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostParseQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.parse_query.$post>) {
      return parseResponse(client.parse_query.$post(args, options))
    },
  })
}

export function usePostParseQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.parse_query.$post>,
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
  const mutationDefaults = getPostParseQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
) {
  return ['labels', '/labels', toValue(args)] as const
}

export function getLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLabels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          ReturnType<typeof getLabelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLabelsMutationKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function getPostLabelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    InferRequestType<typeof client.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labels.$post>) {
      return parseResponse(client.labels.$post(args, options))
    },
  })
}

export function usePostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.labels.$post>,
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
  const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelNameValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.label)[':name']['values']['$get']>>,
) {
  return ['label', '/label/:name/values', toValue(args)] as const
}

export function getLabelNameValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.label)[':name']['values']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelNameValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.label[':name'].values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelNameValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.label)[':name']['values']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelNameValuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelNameValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelNameValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.label[':name'].values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchMetricNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.metric_names.$get>>,
) {
  return ['search', '/search/metric_names', toValue(args)] as const
}

export function getSearchMetricNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.metric_names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchMetricNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.metric_names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchMetricNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.metric_names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
            >
          >,
          ReturnType<typeof getSearchMetricNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetricNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchMetricNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.metric_names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchMetricNamesMutationKey() {
  return ['search', '/search/metric_names', 'POST'] as const
}

export function getPostSearchMetricNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.metric_names.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchMetricNamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.metric_names.$post>) {
      return parseResponse(client.search.metric_names.$post(args, options))
    },
  })
}

export function usePostSearchMetricNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.metric_names.$post>,
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
  const mutationDefaults = getPostSearchMetricNamesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchLabelNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.label_names.$get>>,
) {
  return ['search', '/search/label_names', toValue(args)] as const
}

export function getSearchLabelNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.label_names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchLabelNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.label_names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchLabelNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.label_names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>
            >
          >,
          ReturnType<typeof getSearchLabelNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchLabelNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchLabelNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.label_names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchLabelNamesMutationKey() {
  return ['search', '/search/label_names', 'POST'] as const
}

export function getPostSearchLabelNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.label_names.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchLabelNamesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.label_names.$post>) {
      return parseResponse(client.search.label_names.$post(args, options))
    },
  })
}

export function usePostSearchLabelNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.label_names.$post>,
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
  const mutationDefaults = getPostSearchLabelNamesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchLabelValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.label_values.$get>>,
) {
  return ['search', '/search/label_values', toValue(args)] as const
}

export function getSearchLabelValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.label_values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchLabelValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.label_values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchLabelValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.label_values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
            >
          >,
          ReturnType<typeof getSearchLabelValuesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchLabelValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchLabelValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.label_values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchLabelValuesMutationKey() {
  return ['search', '/search/label_values', 'POST'] as const
}

export function getPostSearchLabelValuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.label_values.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchLabelValuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.label_values.$post>) {
      return parseResponse(client.search.label_values.$post(args, options))
    },
  })
}

export function usePostSearchLabelValues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.label_values.$post>,
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
  const mutationDefaults = getPostSearchLabelValuesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
) {
  return ['series', '/series', toValue(args)] as const
}

export function getSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          ReturnType<typeof getSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeriesMutationKey() {
  return ['series', '/series', 'POST'] as const
}

export function getPostSeriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$post>>>>>,
    TError,
    InferRequestType<typeof client.series.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.series.$post>) {
      return parseResponse(client.series.$post(args, options))
    },
  })
}

export function usePostSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.series.$post>,
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
  const mutationDefaults = getPostSeriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.$get>>,
) {
  return ['metadata', '/metadata', toValue(args)] as const
}

export function getMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metadata.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
          >,
          ReturnType<typeof getMetadataQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScrapePoolsQueryKey() {
  return ['scrape_pools', '/scrape_pools'] as const
}

export function getScrapePoolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getScrapePoolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scrape_pools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useScrapePools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
          >,
          ReturnType<typeof getScrapePoolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScrapePoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getScrapePoolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.scrape_pools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScrapePoolsConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scrape_pools.config.$get>>,
) {
  return ['scrape_pools', '/scrape_pools/config', toValue(args)] as const
}

export function getScrapePoolsConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scrape_pools.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScrapePoolsConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scrape_pools.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScrapePoolsConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.scrape_pools.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
            >
          >,
          ReturnType<typeof getScrapePoolsConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScrapePoolsConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScrapePoolsConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scrape_pools.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.$get>>,
) {
  return ['targets', '/targets', toValue(args)] as const
}

export function getTargetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTargets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>
          >,
          ReturnType<typeof getTargetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.metadata.$get>>,
) {
  return ['targets', '/targets/metadata', toValue(args)] as const
}

export function getTargetsMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.metadata.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTargetsMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.metadata.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>
            >
          >,
          ReturnType<typeof getTargetsMetadataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTargetsRelabelStepsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.relabel_steps.$get>>,
) {
  return ['targets', '/targets/relabel_steps', toValue(args)] as const
}

export function getTargetsRelabelStepsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.relabel_steps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTargetsRelabelStepsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.targets.relabel_steps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTargetsRelabelSteps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.targets.relabel_steps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
            >
          >,
          ReturnType<typeof getTargetsRelabelStepsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsRelabelStepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTargetsRelabelStepsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.targets.relabel_steps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.$get>>,
) {
  return ['rules', '/rules', toValue(args)] as const
}

export function getRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          ReturnType<typeof getRulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsQueryKey() {
  return ['alerts', '/alerts'] as const
}

export function getAlertsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlertsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alerts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          ReturnType<typeof getAlertsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlertsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alerts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertmanagersQueryKey() {
  return ['alertmanagers', '/alertmanagers'] as const
}

export function getAlertmanagersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlertmanagersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.alertmanagers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAlertmanagers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
          >,
          ReturnType<typeof getAlertmanagersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertmanagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAlertmanagersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.alertmanagers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusConfigQueryKey() {
  return ['status', '/status/config'] as const
}

export function getStatusConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
          >,
          ReturnType<typeof getStatusConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusRuntimeinfoQueryKey() {
  return ['status', '/status/runtimeinfo'] as const
}

export function getStatusRuntimeinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusRuntimeinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.runtimeinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatusRuntimeinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>
            >
          >,
          ReturnType<typeof getStatusRuntimeinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusRuntimeinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusRuntimeinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.runtimeinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusBuildinfoQueryKey() {
  return ['status', '/status/buildinfo'] as const
}

export function getStatusBuildinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusBuildinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.buildinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusBuildinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>
            >
          >,
          ReturnType<typeof getStatusBuildinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusBuildinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusBuildinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.buildinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusFlagsQueryKey() {
  return ['status', '/status/flags'] as const
}

export function getStatusFlagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusFlagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.flags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusFlags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
          >,
          ReturnType<typeof getStatusFlagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusFlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusFlagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.flags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusTsdbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.tsdb.$get>>,
) {
  return ['status', '/status/tsdb', toValue(args)] as const
}

export function getStatusTsdbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.tsdb.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatusTsdbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.tsdb.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusTsdb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.tsdb.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
          >,
          ReturnType<typeof getStatusTsdbQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusTsdbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatusTsdbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.status.tsdb.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusTsdbBlocksQueryKey() {
  return ['status', '/status/tsdb/blocks'] as const
}

export function getStatusTsdbBlocksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusTsdbBlocksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.tsdb.blocks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatusTsdbBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>
            >
          >,
          ReturnType<typeof getStatusTsdbBlocksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusTsdbBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusTsdbBlocksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.tsdb.blocks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusWalreplayQueryKey() {
  return ['status', '/status/walreplay'] as const
}

export function getStatusWalreplayQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusWalreplayQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.walreplay.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusWalreplay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>
            >
          >,
          ReturnType<typeof getStatusWalreplayQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusWalreplayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusWalreplayQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.walreplay.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusSelfMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.self_metrics.$get>>,
) {
  return ['status', '/status/self_metrics', toValue(args)] as const
}

export function getStatusSelfMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.self_metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatusSelfMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.self_metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatusSelfMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.status.self_metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
            >
          >,
          ReturnType<typeof getStatusSelfMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusSelfMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatusSelfMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.status.self_metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdminTsdbDeleteSeriesMutationKey() {
  return ['admin', '/admin/tsdb/delete_series', 'PUT'] as const
}

export function getPutAdminTsdbDeleteSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.tsdb.delete_series.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminTsdbDeleteSeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.tsdb.delete_series.$put>) {
      return parseResponse(client.admin.tsdb.delete_series.$put(args, options))
    },
  })
}

export function usePutAdminTsdbDeleteSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.delete_series.$put>,
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
  const mutationDefaults = getPutAdminTsdbDeleteSeriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdminTsdbDeleteSeriesMutationKey() {
  return ['admin', '/admin/tsdb/delete_series', 'POST'] as const
}

export function getPostAdminTsdbDeleteSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.tsdb.delete_series.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTsdbDeleteSeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.tsdb.delete_series.$post>) {
      return parseResponse(client.admin.tsdb.delete_series.$post(args, options))
    },
  })
}

export function usePostAdminTsdbDeleteSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.delete_series.$post>,
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
  const mutationDefaults = getPostAdminTsdbDeleteSeriesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAdminTsdbCleanTombstonesMutationKey() {
  return ['admin', '/admin/tsdb/clean_tombstones', 'PUT'] as const
}

export function getPutAdminTsdbCleanTombstonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.clean_tombstones.$put>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAdminTsdbCleanTombstonesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.tsdb.clean_tombstones.$put(undefined, options))
    },
  })
}

export function usePutAdminTsdbCleanTombstones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.tsdb.clean_tombstones.$put>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPutAdminTsdbCleanTombstonesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdminTsdbCleanTombstonesMutationKey() {
  return ['admin', '/admin/tsdb/clean_tombstones', 'POST'] as const
}

export function getPostAdminTsdbCleanTombstonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.clean_tombstones.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTsdbCleanTombstonesMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.tsdb.clean_tombstones.$post(undefined, options))
    },
  })
}

export function usePostAdminTsdbCleanTombstones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.tsdb.clean_tombstones.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminTsdbCleanTombstonesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAdminTsdbSnapshotMutationKey() {
  return ['admin', '/admin/tsdb/snapshot', 'PUT'] as const
}

export function getPutAdminTsdbSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.tsdb.snapshot.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminTsdbSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.tsdb.snapshot.$put>) {
      return parseResponse(client.admin.tsdb.snapshot.$put(args, options))
    },
  })
}

export function usePutAdminTsdbSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.snapshot.$put>,
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
  const mutationDefaults = getPutAdminTsdbSnapshotMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdminTsdbSnapshotMutationKey() {
  return ['admin', '/admin/tsdb/snapshot', 'POST'] as const
}

export function getPostAdminTsdbSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.tsdb.snapshot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTsdbSnapshotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.tsdb.snapshot.$post>) {
      return parseResponse(client.admin.tsdb.snapshot.$post(args, options))
    },
  })
}

export function usePostAdminTsdbSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.snapshot.$post>,
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
  const mutationDefaults = getPostAdminTsdbSnapshotMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReadMutationKey() {
  return ['read', '/read', 'POST'] as const
}

export function getPostReadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.read.$post>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostReadMutationKey(),
    async mutationFn() {
      return parseResponse(client.read.$post(undefined, options))
    },
  })
}

export function usePostRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.read.$post>>>>>
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostReadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWriteMutationKey() {
  return ['write', '/write', 'POST'] as const
}

export function getPostWriteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWriteMutationKey(),
    async mutationFn() {
      return parseResponse(client.write.$post(undefined, options))
    },
  })
}

export function usePostWrite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostWriteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOtlpV1MetricsMutationKey() {
  return ['otlp', '/otlp/v1/metrics', 'POST'] as const
}

export function getPostOtlpV1MetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otlp.v1.metrics.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOtlpV1MetricsMutationKey(),
    async mutationFn() {
      return parseResponse(client.otlp.v1.metrics.$post(undefined, options))
    },
  })
}

export function usePostOtlpV1Metrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.otlp.v1.metrics.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostOtlpV1MetricsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNotificationsQueryKey() {
  return ['notifications', '/notifications'] as const
}

export function getNotificationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          ReturnType<typeof getNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeaturesQueryKey() {
  return ['features', '/features'] as const
}

export function getFeaturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFeaturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.features.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
          >,
          ReturnType<typeof getFeaturesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFeaturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.features.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
