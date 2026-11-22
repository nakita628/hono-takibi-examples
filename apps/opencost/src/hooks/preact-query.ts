import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAllocationKey() {
  return ['allocation'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getCloudCostKey() {
  return ['cloudCost'] as const
}

export function getInferenceCostKey() {
  return ['inferenceCost'] as const
}

export function getAllocationQueryKey(args: InferRequestType<typeof client.allocation.$get>) {
  return ['allocation', '/allocation', args] as const
}

export function getAllocationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.allocation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAllocationQueryKey>
  >({
    queryKey: getAllocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.allocation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAllocation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allocation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAllocationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAllocation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.allocation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAllocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAllocationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAssetsQueryKey(args: InferRequestType<typeof client.assets.$get>) {
  return ['assets', '/assets', args] as const
}

export function getAssetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >({
    queryKey: getAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCloudCostQueryKey(args: InferRequestType<typeof client.cloudCost.$get>) {
  return ['cloudCost', '/cloudCost', args] as const
}

export function getCloudCostQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cloudCost.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCloudCostQueryKey>
  >({
    queryKey: getCloudCostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudCost.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCloudCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cloudCost.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCloudCostQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCloudCostQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCloudCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cloudCost.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCloudCostQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCloudCostQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInferenceCostTotalQueryKey(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
) {
  return ['inferenceCost', '/inferenceCost/total', args] as const
}

export function getInferenceCostTotalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.inferenceCost.total.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInferenceCostTotalQueryKey>
  >({
    queryKey: getInferenceCostTotalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inferenceCost.total.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInferenceCostTotal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInferenceCostTotalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInferenceCostTotalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInferenceCostTotal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInferenceCostTotalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInferenceCostTotalQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInferenceCostTimeseriesQueryKey(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
) {
  return ['inferenceCost', '/inferenceCost/timeseries', args] as const
}

export function getInferenceCostTimeseriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInferenceCostTimeseriesQueryKey>
  >({
    queryKey: getInferenceCostTimeseriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.inferenceCost.timeseries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInferenceCostTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInferenceCostTimeseriesQueryKey>
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
      ...getInferenceCostTimeseriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInferenceCostTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInferenceCostTimeseriesQueryKey>
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
      ...getInferenceCostTimeseriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
