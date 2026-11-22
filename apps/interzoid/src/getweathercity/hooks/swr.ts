import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetweatherKey() {
  return ['getweather'] as const
}

export function getGetGetweatherKey(args: InferRequestType<typeof client.getweather.$get>) {
  return ['getweather', '/getweather', args] as const
}

export function useGetGetweather<TError = unknown>(
  args: InferRequestType<typeof client.getweather.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetweatherKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getweather.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetweather<TError = unknown>(
  args: InferRequestType<typeof client.getweather.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetweatherKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getweather.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
