import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getYearKey() {
  return ['{year}'] as const
}

export function getGetYearMonthJsonKey(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
) {
  return [':year', '/:year/:month.json', args] as const
}

export function useGetYearMonthJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetYearMonthJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':year'][':month.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetYearMonthJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':year'][':month.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetYearMonthJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':year'][':month.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
