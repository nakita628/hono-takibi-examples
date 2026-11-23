import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOpenaiKey() {
  return ['openai'] as const
}

export function getGetOpenaiDetailsKey(args: InferRequestType<typeof client.openai.details.$get>) {
  return ['openai', '/openai/details', args] as const
}

export function useGetOpenaiDetails<TError = unknown>(
  args: InferRequestType<typeof client.openai.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenaiDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openai.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenaiDetails<TError = unknown>(
  args: InferRequestType<typeof client.openai.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenaiDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openai.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenaiSearchKey(args: InferRequestType<typeof client.openai.search.$get>) {
  return ['openai', '/openai/search', args] as const
}

export function useGetOpenaiSearch<TError = unknown>(
  args: InferRequestType<typeof client.openai.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenaiSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openai.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenaiSearch<TError = unknown>(
  args: InferRequestType<typeof client.openai.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenaiSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openai.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openai.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
