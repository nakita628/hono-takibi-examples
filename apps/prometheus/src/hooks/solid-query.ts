import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getQueryQueryKey(args: InferRequestType<typeof client.query.$get>) {
  return ['query', '/query', args] as const
}

export function getQueryQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryQueryKey>
  >({
    queryKey: getQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQuery<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryQueryKey>
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
    return { ...getQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
          TError,
          InferRequestType<typeof client.query.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryRangeQueryKey(args: InferRequestType<typeof client.query_range.$get>) {
  return ['query_range', '/query_range', args] as const
}

export function getQueryRangeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query_range.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryRangeQueryKey>
  >({
    queryKey: getQueryRangeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query_range.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryRange<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query_range.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getQueryRangeQueryKey>
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
    return { ...getQueryRangeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQueryRange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query_range.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryRangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryCostQueryKey(args: InferRequestType<typeof client.query_cost.$get>) {
  return ['query_cost', '/query_cost', args] as const
}

export function getQueryCostQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query_cost.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryCostQueryKey>
  >({
    queryKey: getQueryCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query_cost.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query_cost.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getQueryCostQueryKey>
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
    return { ...getQueryCostQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQueryCost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_cost.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query_cost.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryCostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryRangeCostQueryKey(
  args: InferRequestType<typeof client.query_range_cost.$get>,
) {
  return ['query_range_cost', '/query_range_cost', args] as const
}

export function getQueryRangeCostQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query_range_cost.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryRangeCostQueryKey>
  >({
    queryKey: getQueryRangeCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query_range_cost.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryRangeCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query_range_cost.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQueryRangeCostQueryKey>
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
    return { ...getQueryRangeCostQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQueryRangeCost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_range_cost.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.query_range_cost.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryRangeCostMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryExemplarsQueryKey(
  args: InferRequestType<typeof client.query_exemplars.$get>,
) {
  return ['query_exemplars', '/query_exemplars', args] as const
}

export function getQueryExemplarsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query_exemplars.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryExemplarsQueryKey>
  >({
    queryKey: getQueryExemplarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query_exemplars.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryExemplars<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query_exemplars.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQueryExemplarsQueryKey>
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
    return { ...getQueryExemplarsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQueryExemplars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_exemplars.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.query_exemplars.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryExemplarsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFormatQueryQueryKey(args: InferRequestType<typeof client.format_query.$get>) {
  return ['format_query', '/format_query', args] as const
}

export function getFormatQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.format_query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormatQueryQueryKey>
  >({
    queryKey: getFormatQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.format_query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.format_query.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFormatQueryQueryKey>
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
    return { ...getFormatQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFormatQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.format_query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.format_query.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFormatQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getParseQueryQueryKey(args: InferRequestType<typeof client.parse_query.$get>) {
  return ['parse_query', '/parse_query', args] as const
}

export function getParseQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.parse_query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getParseQueryQueryKey>
  >({
    queryKey: getParseQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parse_query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createParseQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.parse_query.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getParseQueryQueryKey>
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
    return { ...getParseQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostParseQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse_query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.parse_query.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostParseQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLabelsQueryKey(args: InferRequestType<typeof client.labels.$get>) {
  return ['labels', '/labels', args] as const
}

export function getLabelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsQueryKey>
  >({
    queryKey: getLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLabels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.labels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLabelsQueryKey>
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
    return { ...getLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.labels.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLabelNameValuesQueryKey(
  args: InferRequestType<(typeof client.label)[':name']['values']['$get']>,
) {
  return ['label', '/label/:name/values', args] as const
}

export function getLabelNameValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.label)[':name']['values']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelNameValuesQueryKey>
  >({
    queryKey: getLabelNameValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.label[':name'].values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLabelNameValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.label)[':name']['values']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.label)[':name']['values']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelNameValuesQueryKey>
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
    return { ...getLabelNameValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchMetricNamesQueryKey(
  args: InferRequestType<typeof client.search.metric_names.$get>,
) {
  return ['search', '/search/metric_names', args] as const
}

export function getSearchMetricNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.metric_names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMetricNamesQueryKey>
  >({
    queryKey: getSearchMetricNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.metric_names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchMetricNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.metric_names.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchMetricNamesQueryKey>
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
    return { ...getSearchMetricNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSearchMetricNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.metric_names.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.metric_names.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSearchMetricNamesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchLabelNamesQueryKey(
  args: InferRequestType<typeof client.search.label_names.$get>,
) {
  return ['search', '/search/label_names', args] as const
}

export function getSearchLabelNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.label_names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchLabelNamesQueryKey>
  >({
    queryKey: getSearchLabelNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.label_names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchLabelNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.label_names.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchLabelNamesQueryKey>
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
    return { ...getSearchLabelNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSearchLabelNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_names.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.label_names.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSearchLabelNamesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchLabelValuesQueryKey(
  args: InferRequestType<typeof client.search.label_values.$get>,
) {
  return ['search', '/search/label_values', args] as const
}

export function getSearchLabelValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.label_values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchLabelValuesQueryKey>
  >({
    queryKey: getSearchLabelValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.label_values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearchLabelValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.label_values.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSearchLabelValuesQueryKey>
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
    return { ...getSearchLabelValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSearchLabelValues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.label_values.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.search.label_values.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSearchLabelValuesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSeriesQueryKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function getSeriesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >({
    queryKey: getSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSeriesQueryKey>
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
    return { ...getSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.series.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSeriesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetadataQueryKey(args: InferRequestType<typeof client.metadata.$get>) {
  return ['metadata', '/metadata', args] as const
}

export function getMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metadata.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetadataQueryKey>
  >({
    queryKey: getMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metadata.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataQueryKey>
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
    return { ...getMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getScrapePoolsQueryKey() {
  return ['scrape_pools', '/scrape_pools'] as const
}

export function getScrapePoolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScrapePoolsQueryKey>
  >({
    queryKey: getScrapePoolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.scrape_pools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScrapePools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getScrapePoolsQueryKey>
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
    return { ...getScrapePoolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getScrapePoolsConfigQueryKey(
  args: InferRequestType<typeof client.scrape_pools.config.$get>,
) {
  return ['scrape_pools', '/scrape_pools/config', args] as const
}

export function getScrapePoolsConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scrape_pools.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScrapePoolsConfigQueryKey>
  >({
    queryKey: getScrapePoolsConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrape_pools.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScrapePoolsConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scrape_pools.config.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrape_pools.config.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getScrapePoolsConfigQueryKey>
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
    return { ...getScrapePoolsConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTargetsQueryKey(args: InferRequestType<typeof client.targets.$get>) {
  return ['targets', '/targets', args] as const
}

export function getTargetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.targets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTargetsQueryKey>
  >({
    queryKey: getTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTargets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.targets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTargetsQueryKey>
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
    return { ...getTargetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTargetsMetadataQueryKey(
  args: InferRequestType<typeof client.targets.metadata.$get>,
) {
  return ['targets', '/targets/metadata', args] as const
}

export function getTargetsMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.targets.metadata.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsMetadataQueryKey>
  >({
    queryKey: getTargetsMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.metadata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTargetsMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.targets.metadata.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.metadata.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTargetsMetadataQueryKey>
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
    return { ...getTargetsMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTargetsRelabelStepsQueryKey(
  args: InferRequestType<typeof client.targets.relabel_steps.$get>,
) {
  return ['targets', '/targets/relabel_steps', args] as const
}

export function getTargetsRelabelStepsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.targets.relabel_steps.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTargetsRelabelStepsQueryKey>
  >({
    queryKey: getTargetsRelabelStepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.targets.relabel_steps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTargetsRelabelSteps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.targets.relabel_steps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.targets.relabel_steps.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTargetsRelabelStepsQueryKey>
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
    return { ...getTargetsRelabelStepsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRulesQueryKey(args: InferRequestType<typeof client.rules.$get>) {
  return ['rules', '/rules', args] as const
}

export function getRulesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesQueryKey>
  >({
    queryKey: getRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rules.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getRulesQueryKey>
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
    return { ...getRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAlertsQueryKey() {
  return ['alerts', '/alerts'] as const
}

export function getAlertsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAlertsQueryKey>
  >({
    queryKey: getAlertsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alerts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlerts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alerts.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAlertsQueryKey>
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
    return { ...getAlertsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAlertmanagersQueryKey() {
  return ['alertmanagers', '/alertmanagers'] as const
}

export function getAlertmanagersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAlertmanagersQueryKey>
  >({
    queryKey: getAlertmanagersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.alertmanagers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAlertmanagers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alertmanagers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAlertmanagersQueryKey>
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
    return { ...getAlertmanagersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusConfigQueryKey() {
  return ['status', '/status/config'] as const
}

export function getStatusConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusConfigQueryKey>
  >({
    queryKey: getStatusConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.config.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatusConfigQueryKey>
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
    return { ...getStatusConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusRuntimeinfoQueryKey() {
  return ['status', '/status/runtimeinfo'] as const
}

export function getStatusRuntimeinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusRuntimeinfoQueryKey>
  >({
    queryKey: getStatusRuntimeinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.runtimeinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatusRuntimeinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.runtimeinfo.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatusRuntimeinfoQueryKey>
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
    return { ...getStatusRuntimeinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusBuildinfoQueryKey() {
  return ['status', '/status/buildinfo'] as const
}

export function getStatusBuildinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusBuildinfoQueryKey>
  >({
    queryKey: getStatusBuildinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.buildinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusBuildinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.buildinfo.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatusBuildinfoQueryKey>
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
    return { ...getStatusBuildinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusFlagsQueryKey() {
  return ['status', '/status/flags'] as const
}

export function getStatusFlagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusFlagsQueryKey>
  >({
    queryKey: getStatusFlagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.flags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusFlags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.flags.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatusFlagsQueryKey>
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
    return { ...getStatusFlagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusTsdbQueryKey(args: InferRequestType<typeof client.status.tsdb.$get>) {
  return ['status', '/status/tsdb', args] as const
}

export function getStatusTsdbQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status.tsdb.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusTsdbQueryKey>
  >({
    queryKey: getStatusTsdbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status.tsdb.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusTsdb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.status.tsdb.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatusTsdbQueryKey>
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
    return { ...getStatusTsdbQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatusTsdbBlocksQueryKey() {
  return ['status', '/status/tsdb/blocks'] as const
}

export function getStatusTsdbBlocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusTsdbBlocksQueryKey>
  >({
    queryKey: getStatusTsdbBlocksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.tsdb.blocks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStatusTsdbBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.tsdb.blocks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatusTsdbBlocksQueryKey>
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
    return { ...getStatusTsdbBlocksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusWalreplayQueryKey() {
  return ['status', '/status/walreplay'] as const
}

export function getStatusWalreplayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusWalreplayQueryKey>
  >({
    queryKey: getStatusWalreplayQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.walreplay.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusWalreplay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.walreplay.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatusWalreplayQueryKey>
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
    return { ...getStatusWalreplayQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusSelfMetricsQueryKey(
  args: InferRequestType<typeof client.status.self_metrics.$get>,
) {
  return ['status', '/status/self_metrics', args] as const
}

export function getStatusSelfMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.status.self_metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusSelfMetricsQueryKey>
  >({
    queryKey: getStatusSelfMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status.self_metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusSelfMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.status.self_metrics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.status.self_metrics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatusSelfMetricsQueryKey>
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
    return { ...getStatusSelfMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAdminTsdbDeleteSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.delete_series.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.delete_series.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminTsdbDeleteSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTsdbDeleteSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTsdbDeleteSeriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAdminTsdbCleanTombstones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminTsdbCleanTombstonesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTsdbCleanTombstones<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTsdbCleanTombstonesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAdminTsdbSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.snapshot.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAdminTsdbSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTsdbSnapshot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.tsdb.snapshot.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.tsdb.snapshot.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTsdbSnapshotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.read.$post>>>>>
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWrite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWriteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOtlpV1Metrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.otlp.v1.metrics.$post>>>
              >
            >
          | undefined,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOtlpV1MetricsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNotificationsQueryKey() {
  return ['notifications', '/notifications'] as const
}

export function getNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >({
    queryKey: getNotificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsQueryKey>
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
    return { ...getNotificationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFeaturesQueryKey() {
  return ['features', '/features'] as const
}

export function getFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeaturesQueryKey>
  >({
    queryKey: getFeaturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.features.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFeaturesQueryKey>
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
    return { ...getFeaturesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
