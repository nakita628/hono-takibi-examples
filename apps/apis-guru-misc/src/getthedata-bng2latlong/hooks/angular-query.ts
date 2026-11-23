import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBng2latlongKey() {
  return ['bng2latlong'] as const
}

export function getBng2latlongEastingNorthingQueryKey(
  args: InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
) {
  return ['bng2latlong', '/bng2latlong/:easting/:northing', args] as const
}

export function getBng2latlongEastingNorthingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBng2latlongEastingNorthingQueryKey>
  >({
    queryKey: getBng2latlongEastingNorthingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bng2latlong[':easting'][':northing'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBng2latlongEastingNorthing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBng2latlongEastingNorthingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBng2latlongEastingNorthingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
