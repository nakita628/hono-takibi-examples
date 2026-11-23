import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetemailinfoKey() {
  return ['getemailinfo'] as const
}

export function getGetGetemailinfoKey(args: InferRequestType<typeof client.getemailinfo.$get>) {
  return ['getemailinfo', '/getemailinfo', args] as const
}

export function useGetGetemailinfo<TError = unknown>(
  args: InferRequestType<typeof client.getemailinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetemailinfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getemailinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetemailinfo<TError = unknown>(
  args: InferRequestType<typeof client.getemailinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetemailinfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getemailinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
