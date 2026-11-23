import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRateLimitKey() {
  return ['rate_limit'] as const
}

export function getUserRateLimitKey() {
  return ['user_rate_limit'] as const
}

export function getGetRateLimitIndexKey(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
) {
  return ['rate_limit', '/rate_limit/', args] as const
}

export function useGetRateLimitIndex<TError = unknown>(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRateLimitIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rate_limit.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRateLimitIndex<TError = unknown>(
  args: InferRequestType<typeof client.rate_limit.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRateLimitIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rate_limit.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserRateLimitIndexKey(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
) {
  return ['user_rate_limit', '/user_rate_limit/', args] as const
}

export function useGetUserRateLimitIndex<TError = unknown>(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
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
        ? getGetUserRateLimitIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_rate_limit.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserRateLimitIndex<TError = unknown>(
  args: InferRequestType<typeof client.user_rate_limit.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
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
        ? getGetUserRateLimitIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_rate_limit.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
