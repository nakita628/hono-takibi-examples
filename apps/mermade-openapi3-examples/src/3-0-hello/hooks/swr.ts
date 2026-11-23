import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHelloKey() {
  return ['hello'] as const
}

export function getGetHelloKey(args: InferRequestType<typeof client.hello.$get>) {
  return ['hello', '/hello', args] as const
}

export function useGetHello<TError = unknown>(
  args: InferRequestType<typeof client.hello.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHelloKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hello.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHello<TError = unknown>(
  args: InferRequestType<typeof client.hello.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHelloKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hello.$get(args, clientOptions)), restSwrOptions),
  }
}
