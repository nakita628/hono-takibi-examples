import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcurrencyrateKey() {
  return ['getcurrencyrate'] as const
}

export function getGetGetcurrencyrateKey(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
) {
  return ['getcurrencyrate', '/getcurrencyrate', args] as const
}

export function useGetGetcurrencyrate<TError = unknown>(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
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
        ? getGetGetcurrencyrateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcurrencyrate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetcurrencyrate<TError = unknown>(
  args: InferRequestType<typeof client.getcurrencyrate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
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
        ? getGetGetcurrencyrateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcurrencyrate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
