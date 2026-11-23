import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConvertcurrencyKey() {
  return ['convertcurrency'] as const
}

export function getGetConvertcurrencyKey(
  args: InferRequestType<typeof client.convertcurrency.$get>,
) {
  return ['convertcurrency', '/convertcurrency', args] as const
}

export function useGetConvertcurrency<TError = unknown>(
  args: InferRequestType<typeof client.convertcurrency.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
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
        ? getGetConvertcurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.convertcurrency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertcurrency<TError = unknown>(
  args: InferRequestType<typeof client.convertcurrency.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
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
        ? getGetConvertcurrencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.convertcurrency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
