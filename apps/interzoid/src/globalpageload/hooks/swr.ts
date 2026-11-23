import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGlobalpageloadKey() {
  return ['globalpageload'] as const
}

export function getGetGlobalpageloadKey(args: InferRequestType<typeof client.globalpageload.$get>) {
  return ['globalpageload', '/globalpageload', args] as const
}

export function useGetGlobalpageload<TError = unknown>(
  args: InferRequestType<typeof client.globalpageload.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGlobalpageloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.globalpageload.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalpageload<TError = unknown>(
  args: InferRequestType<typeof client.globalpageload.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGlobalpageloadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.globalpageload.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
