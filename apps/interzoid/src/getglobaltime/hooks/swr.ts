import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetglobaltimeKey() {
  return ['getglobaltime'] as const
}

export function getGetGetglobaltimeKey(args: InferRequestType<typeof client.getglobaltime.$get>) {
  return ['getglobaltime', '/getglobaltime', args] as const
}

export function useGetGetglobaltime<TError = unknown>(
  args: InferRequestType<typeof client.getglobaltime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetglobaltimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getglobaltime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetglobaltime<TError = unknown>(
  args: InferRequestType<typeof client.getglobaltime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetglobaltimeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getglobaltime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
