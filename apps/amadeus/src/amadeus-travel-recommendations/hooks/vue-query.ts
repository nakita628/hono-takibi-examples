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

export function getReferenceDataKey() {
  return ['reference-data'] as const
}

export function getReferenceDataRecommendedLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>
  >,
) {
  return ['reference-data', '/reference-data/recommended-locations', toValue(args)] as const
}

export function getReferenceDataRecommendedLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferenceDataRecommendedLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reference-data']['recommended-locations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferenceDataRecommendedLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['reference-data']['recommended-locations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getReferenceDataRecommendedLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['reference-data']['recommended-locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferenceDataRecommendedLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferenceDataRecommendedLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reference-data']['recommended-locations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
