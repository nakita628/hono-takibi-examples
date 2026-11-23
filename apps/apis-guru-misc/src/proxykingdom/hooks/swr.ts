import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProxyKey() {
  return ['proxy'] as const
}

export function getGetProxyKey(args: InferRequestType<typeof client.proxy.$get>) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy', keyArgs] as const
}

export function useGetProxy<TError = unknown>(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProxyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.proxy.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProxy<TError = unknown>(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProxyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.proxy.$get(args, clientOptions)), restSwrOptions),
  }
}
