import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2ListFederationsQueryKey(
  args: InferRequestType<(typeof client.api.v2)['list-federations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/list-federations', keyArgs] as const
}

export function getApiV2ListFederationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['list-federations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ListFederationsQueryKey>
  >({
    queryKey: getApiV2ListFederationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['list-federations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ListFederations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['list-federations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ListFederationsQueryKey>
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
      ...getApiV2ListFederationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2ListMarketsQueryKey(
  args: InferRequestType<(typeof client.api.v2)['list-markets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/list-markets', keyArgs] as const
}

export function getApiV2ListMarketsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['list-markets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ListMarketsQueryKey>
  >({
    queryKey: getApiV2ListMarketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['list-markets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2ListMarkets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['list-markets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ListMarketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ListMarketsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PerformanceStatsQueryKey(
  args: InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/performance-stats', keyArgs] as const
}

export function getApiV2PerformanceStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PerformanceStatsQueryKey>
  >({
    queryKey: getApiV2PerformanceStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2['performance-stats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PerformanceStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PerformanceStatsQueryKey>
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
      ...getApiV2PerformanceStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2PredictionsQueryKey(
  args: InferRequestType<typeof client.api.v2.predictions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/predictions', keyArgs] as const
}

export function getApiV2PredictionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.predictions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PredictionsQueryKey>
  >({
    queryKey: getApiV2PredictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.predictions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Predictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.predictions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PredictionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PredictionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2PredictionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>,
) {
  return ['api', '/api/v2/predictions/:id', args] as const
}

export function getApiV2PredictionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PredictionsIdQueryKey>
  >({
    queryKey: getApiV2PredictionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.predictions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2PredictionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2PredictionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2PredictionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
