import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBalanceKey() {
  return ['balance'] as const
}

export function getBinKey() {
  return ['{bin}'] as const
}

export function getGetBalanceKey(args: InferRequestType<typeof client.balance.$get>) {
  return ['balance', '/balance', args] as const
}

export function useGetBalance<TError = unknown>(
  args: InferRequestType<typeof client.balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.balance.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBalance<TError = unknown>(
  args: InferRequestType<typeof client.balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.balance.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBinKey(args: InferRequestType<(typeof client)[':bin']['$get']>) {
  return [':bin', '/:bin', args] as const
}

export function useGetBin<TError = unknown>(
  args: InferRequestType<(typeof client)[':bin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':bin'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBin<TError = unknown>(
  args: InferRequestType<(typeof client)[':bin']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBinKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':bin']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':bin'].$get(args, clientOptions)), restSwrOptions),
  }
}
