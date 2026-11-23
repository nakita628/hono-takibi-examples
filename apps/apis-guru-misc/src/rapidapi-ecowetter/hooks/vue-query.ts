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

export function getPublicKey() {
  return ['public'] as const
}

export function getPublicHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.history.$get>>,
) {
  return ['public', '/public/history', toValue(args)] as const
}

export function getPublicHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
          >,
          ReturnType<typeof getPublicHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPublicHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
