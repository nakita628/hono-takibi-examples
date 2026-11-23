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

export function getCityKey() {
  return ['city'] as const
}

export function getCityQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.city.$get>>) {
  return ['city', '/city', toValue(args)] as const
}

export function getCityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.city.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.city.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCity<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.city.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
          ReturnType<typeof getCityQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.city.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.city.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
