import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGcrKey() {
  return ['gcr'] as const
}

export function getTrappedKey() {
  return ['trapped'] as const
}

export function getGetGcrFluxDlrKey(args: InferRequestType<typeof client.gcr.flux_dlr.$get>) {
  return ['gcr', '/gcr/flux_dlr', args] as const
}

export function useGetGcrFluxDlr<TError = unknown>(
  args: InferRequestType<typeof client.gcr.flux_dlr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGcrFluxDlrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gcr.flux_dlr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGcrFluxDlr<TError = unknown>(
  args: InferRequestType<typeof client.gcr.flux_dlr.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGcrFluxDlrKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gcr.flux_dlr.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrappedFluxMeanKey(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
) {
  return ['trapped', '/trapped/flux_mean', args] as const
}

export function useGetTrappedFluxMean<TError = unknown>(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
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
        ? getGetTrappedFluxMeanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trapped.flux_mean.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrappedFluxMean<TError = unknown>(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
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
        ? getGetTrappedFluxMeanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trapped.flux_mean.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrappedFluxPercentileKey(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
) {
  return ['trapped', '/trapped/flux_percentile', args] as const
}

export function useGetTrappedFluxPercentile<TError = unknown>(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
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
        ? getGetTrappedFluxPercentileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trapped.flux_percentile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrappedFluxPercentile<TError = unknown>(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
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
        ? getGetTrappedFluxPercentileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.trapped.flux_percentile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
