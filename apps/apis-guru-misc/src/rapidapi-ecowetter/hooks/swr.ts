import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getGetPublicHistoryKey(args: InferRequestType<typeof client.public.history.$get>) {
  return ['public', '/public/history', args] as const
}

export function useGetPublicHistory<TError = unknown>(
  args: InferRequestType<typeof client.public.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicHistory<TError = unknown>(
  args: InferRequestType<typeof client.public.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPublicHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
