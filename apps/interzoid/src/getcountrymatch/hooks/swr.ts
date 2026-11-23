import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcountrymatchKey() {
  return ['getcountrymatch'] as const
}

export function getGetGetcountrymatchKey(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
) {
  return ['getcountrymatch', '/getcountrymatch', args] as const
}

export function useGetGetcountrymatch<TError = unknown>(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
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
        ? getGetGetcountrymatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcountrymatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetcountrymatch<TError = unknown>(
  args: InferRequestType<typeof client.getcountrymatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
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
        ? getGetGetcountrymatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcountrymatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
