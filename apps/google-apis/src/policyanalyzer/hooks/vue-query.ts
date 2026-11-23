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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1ParentActivitiesQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/activities:query', toValue(args)] as const
}

export function getV1beta1ParentActivitiesQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentActivitiesQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent']['activities:query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentActivitiesQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentActivitiesQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['activities:query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentActivitiesQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentActivitiesQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent']['activities:query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
