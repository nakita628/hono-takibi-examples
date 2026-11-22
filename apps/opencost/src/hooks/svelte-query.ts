import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createAllocation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.allocation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAllocationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.assets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createCloudCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cloudCost.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCloudCostQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createInferenceCostTotal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inferenceCost.total.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInferenceCostTotalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createInferenceCostTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getInferenceCostTimeseriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
