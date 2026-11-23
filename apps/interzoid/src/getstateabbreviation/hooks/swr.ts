import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetstateabbreviationKey() {
  return ['getstateabbreviation'] as const
}

export function getGetGetstateabbreviationKey(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
) {
  return ['getstateabbreviation', '/getstateabbreviation', args] as const
}

export function useGetGetstateabbreviation<TError = unknown>(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
        >
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
        ? getGetGetstateabbreviationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getstateabbreviation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetstateabbreviation<TError = unknown>(
  args: InferRequestType<typeof client.getstateabbreviation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
        >
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
        ? getGetGetstateabbreviationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getstateabbreviation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
