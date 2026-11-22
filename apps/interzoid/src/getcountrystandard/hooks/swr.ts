import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcountrystandardKey() {
  return ['getcountrystandard'] as const
}

export function getGetGetcountrystandardKey(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
) {
  return ['getcountrystandard', '/getcountrystandard', args] as const
}

export function useGetGetcountrystandard<TError = unknown>(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetcountrystandardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcountrystandard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetcountrystandard<TError = unknown>(
  args: InferRequestType<typeof client.getcountrystandard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetcountrystandardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcountrystandard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
