import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetcompanymatchKey() {
  return ['getcompanymatch'] as const
}

export function getGetGetcompanymatchKey(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
) {
  return ['getcompanymatch', '/getcompanymatch', args] as const
}

export function useGetGetcompanymatch<TError = unknown>(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
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
        ? getGetGetcompanymatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcompanymatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetcompanymatch<TError = unknown>(
  args: InferRequestType<typeof client.getcompanymatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
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
        ? getGetGetcompanymatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getcompanymatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
