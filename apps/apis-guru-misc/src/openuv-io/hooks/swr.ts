import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getForecastKey() {
  return ['forecast'] as const
}

export function getProtectionKey() {
  return ['protection'] as const
}

export function getUvKey() {
  return ['uv'] as const
}

export function getGetForecastKey(args: InferRequestType<typeof client.forecast.$get>) {
  const { header: _, ...keyArgs } = args
  return ['forecast', '/forecast', keyArgs] as const
}

export function useGetForecast<TError = unknown>(
  args: InferRequestType<typeof client.forecast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetForecastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.forecast.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetForecast<TError = unknown>(
  args: InferRequestType<typeof client.forecast.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetForecastKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.forecast.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetProtectionKey(args: InferRequestType<typeof client.protection.$get>) {
  const { header: _, ...keyArgs } = args
  return ['protection', '/protection', keyArgs] as const
}

export function useGetProtection<TError = unknown>(
  args: InferRequestType<typeof client.protection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProtectionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.protection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProtection<TError = unknown>(
  args: InferRequestType<typeof client.protection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProtectionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.protection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUvKey(args: InferRequestType<typeof client.uv.$get>) {
  const { header: _, ...keyArgs } = args
  return ['uv', '/uv', keyArgs] as const
}

export function useGetUv<TError = unknown>(
  args: InferRequestType<typeof client.uv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.uv.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUv<TError = unknown>(
  args: InferRequestType<typeof client.uv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.uv.$get(args, clientOptions)), restSwrOptions),
  }
}
