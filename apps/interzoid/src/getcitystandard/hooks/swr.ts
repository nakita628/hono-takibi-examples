import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcitystandardKey() {
  return ['getcitystandard'] as const
}

export function getGetGetcitystandardKey(
  args: InferRequestType<typeof client.getcitystandard.$get>,
) {
  return ['getcitystandard', '/getcitystandard', args] as const
}

export function useGetGetcitystandard<TError = unknown>(
  args: InferRequestType<typeof client.getcitystandard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
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
        ? getGetGetcitystandardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcitystandard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetcitystandard<TError = unknown>(
  args: InferRequestType<typeof client.getcitystandard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
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
        ? getGetGetcitystandardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcitystandard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
