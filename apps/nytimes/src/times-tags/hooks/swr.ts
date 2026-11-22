import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTimestagsKey() {
  return ['timestags'] as const
}

export function getGetTimestagsKey(args: InferRequestType<typeof client.timestags.$get>) {
  return ['timestags', '/timestags', args] as const
}

export function useGetTimestags<TError = unknown>(
  args: InferRequestType<typeof client.timestags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimestagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timestags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimestags<TError = unknown>(
  args: InferRequestType<typeof client.timestags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimestagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timestags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
