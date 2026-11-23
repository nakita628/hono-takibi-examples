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

export function getArticlesearchJsonKey() {
  return ['articlesearch.json'] as const
}

export function getArticlesearchJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['articlesearch.json']['$get']>>,
) {
  return ['articlesearch.json', '/articlesearch.json', toValue(args)] as const
}

export function getArticlesearchJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['articlesearch.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArticlesearchJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['articlesearch.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArticlesearchJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['articlesearch.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArticlesearchJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['articlesearch.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArticlesearchJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArticlesearchJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['articlesearch.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
