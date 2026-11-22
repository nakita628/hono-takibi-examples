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

export function getTimestagsKey() {
  return ['timestags'] as const
}

export function getTimestagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timestags.$get>>,
) {
  return ['timestags', '/timestags', toValue(args)] as const
}

export function getTimestagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timestags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimestagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timestags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimestags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timestags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>
          >,
          ReturnType<typeof getTimestagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timestags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimestagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimestagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timestags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
