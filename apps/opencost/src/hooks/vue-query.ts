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

export function getAllocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.allocation.$get>>,
) {
  return ['allocation', '/allocation', toValue(args)] as const
}

export function getAllocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.allocation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAllocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.allocation.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAllocation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.allocation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>
          >,
          ReturnType<typeof getAllocationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAllocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAllocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.allocation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
) {
  return ['assets', '/assets', toValue(args)] as const
}

export function getAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          ReturnType<typeof getAssetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCloudCostQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cloudCost.$get>>,
) {
  return ['cloudCost', '/cloudCost', toValue(args)] as const
}

export function getCloudCostQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cloudCost.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCloudCostQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudCost.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCloudCost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cloudCost.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>
          >,
          ReturnType<typeof getCloudCostQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCloudCostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCloudCostQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudCost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInferenceCostTotalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inferenceCost.total.$get>>,
) {
  return ['inferenceCost', '/inferenceCost/total', toValue(args)] as const
}

export function getInferenceCostTotalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inferenceCost.total.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInferenceCostTotalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inferenceCost.total.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInferenceCostTotal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inferenceCost.total.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
            >
          >,
          ReturnType<typeof getInferenceCostTotalQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInferenceCostTotalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInferenceCostTotalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inferenceCost.total.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInferenceCostTimeseriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inferenceCost.timeseries.$get>>,
) {
  return ['inferenceCost', '/inferenceCost/timeseries', toValue(args)] as const
}

export function getInferenceCostTimeseriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inferenceCost.timeseries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInferenceCostTimeseriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inferenceCost.timeseries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInferenceCostTimeseries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inferenceCost.timeseries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
            >
          >,
          ReturnType<typeof getInferenceCostTimeseriesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInferenceCostTimeseriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInferenceCostTimeseriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inferenceCost.timeseries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
