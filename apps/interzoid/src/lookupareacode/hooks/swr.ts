import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetareacodeKey() {
  return ['getareacode'] as const
}

export function getGetGetareacodeKey(args: InferRequestType<typeof client.getareacode.$get>) {
  return ['getareacode', '/getareacode', args] as const
}

export function useGetGetareacode<TError = unknown>(
  args: InferRequestType<typeof client.getareacode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetareacodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getareacode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetareacode<TError = unknown>(
  args: InferRequestType<typeof client.getareacode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetareacodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getareacode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
