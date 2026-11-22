import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetAllocationKey(args: InferRequestType<typeof client.allocation.$get>) {
  return ['allocation', '/allocation', args] as const
}

export function useGetAllocation<TError = unknown>(
  args: InferRequestType<typeof client.allocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllocationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAllocation<TError = unknown>(
  args: InferRequestType<typeof client.allocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAllocationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allocation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.allocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsKey(args: InferRequestType<typeof client.assets.$get>) {
  return ['assets', '/assets', args] as const
}

export function useGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCloudCostKey(args: InferRequestType<typeof client.cloudCost.$get>) {
  return ['cloudCost', '/cloudCost', args] as const
}

export function useGetCloudCost<TError = unknown>(
  args: InferRequestType<typeof client.cloudCost.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCloudCostKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudCost.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudCost<TError = unknown>(
  args: InferRequestType<typeof client.cloudCost.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCloudCostKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudCost.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudCost.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInferenceCostTotalKey(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
) {
  return ['inferenceCost', '/inferenceCost/total', args] as const
}

export function useGetInferenceCostTotal<TError = unknown>(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInferenceCostTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inferenceCost.total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInferenceCostTotal<TError = unknown>(
  args: InferRequestType<typeof client.inferenceCost.total.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInferenceCostTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.total.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inferenceCost.total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInferenceCostTimeseriesKey(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
) {
  return ['inferenceCost', '/inferenceCost/timeseries', args] as const
}

export function useGetInferenceCostTimeseries<TError = unknown>(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInferenceCostTimeseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inferenceCost.timeseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInferenceCostTimeseries<TError = unknown>(
  args: InferRequestType<typeof client.inferenceCost.timeseries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInferenceCostTimeseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.inferenceCost.timeseries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inferenceCost.timeseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
