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

export function getEventsKey() {
  return ['events'] as const
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
