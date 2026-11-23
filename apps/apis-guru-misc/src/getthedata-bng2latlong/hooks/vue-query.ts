import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBng2latlongKey() {
  return ['bng2latlong'] as const
}

export function getBng2latlongEastingNorthingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>
  >,
) {
  return ['bng2latlong', '/bng2latlong/:easting/:northing', toValue(args)] as const
}

export function getBng2latlongEastingNorthingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBng2latlongEastingNorthingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bng2latlong[':easting'][':northing'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBng2latlongEastingNorthing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bng2latlong)[':easting'][':northing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBng2latlongEastingNorthingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBng2latlongEastingNorthingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bng2latlong[':easting'][':northing'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
