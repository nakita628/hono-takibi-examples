import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActivitiesKey() {
  return ['activities'] as const
}

export function getGetActivitiesKey(args: InferRequestType<typeof client.activities.$get>) {
  return ['activities', '/activities', args] as const
}

export function useGetActivities<TError = unknown>(
  args: InferRequestType<typeof client.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActivitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActivities<TError = unknown>(
  args: InferRequestType<typeof client.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActivitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
