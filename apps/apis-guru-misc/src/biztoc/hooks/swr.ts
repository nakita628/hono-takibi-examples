import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAiKey() {
  return ['ai'] as const
}

export function getGetAiNewsKey(args: InferRequestType<typeof client.ai.news.$get>) {
  return ['ai', '/ai/news', args] as const
}

export function useGetAiNews<TError = unknown>(
  args: InferRequestType<typeof client.ai.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiNewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ai.news.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAiNews<TError = unknown>(
  args: InferRequestType<typeof client.ai.news.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiNewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ai.news.$get(args, clientOptions)), restSwrOptions),
  }
}
