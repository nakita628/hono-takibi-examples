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

export function getYearKey() {
  return ['{year}'] as const
}

export function getYearMonthJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':year'][':month.json']['$get']>>,
) {
  return [':year', '/:year/:month.json', toValue(args)] as const
}

export function getYearMonthJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':year'][':month.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getYearMonthJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':year'][':month.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useYearMonthJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':year'][':month.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getYearMonthJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':year'][':month.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getYearMonthJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getYearMonthJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':year'][':month.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
