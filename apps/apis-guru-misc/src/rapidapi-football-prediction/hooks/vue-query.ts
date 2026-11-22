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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2ListFederationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['list-federations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/list-federations', keyArgs] as const
}

export function getApiV2ListFederationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['list-federations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ListFederationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['list-federations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ListFederations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['list-federations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ListFederationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v2)['list-federations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ListFederationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ListFederationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['list-federations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ListMarketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['list-markets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/list-markets', keyArgs] as const
}

export function getApiV2ListMarketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['list-markets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ListMarketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['list-markets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2ListMarkets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['list-markets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2ListMarketsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['list-markets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ListMarketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ListMarketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['list-markets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PerformanceStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/performance-stats', keyArgs] as const
}

export function getApiV2PerformanceStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PerformanceStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2['performance-stats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PerformanceStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2)['performance-stats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PerformanceStatsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v2)['performance-stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PerformanceStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PerformanceStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2['performance-stats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PredictionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.predictions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v2/predictions', keyArgs] as const
}

export function getApiV2PredictionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.predictions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PredictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.predictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Predictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.predictions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>
            >
          >,
          ReturnType<typeof getApiV2PredictionsQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.predictions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PredictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PredictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.predictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2PredictionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>>,
) {
  return ['api', '/api/v2/predictions/:id', toValue(args)] as const
}

export function getApiV2PredictionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2PredictionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.predictions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2PredictionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v2.predictions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV2PredictionsIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v2.predictions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2PredictionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2PredictionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.predictions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
