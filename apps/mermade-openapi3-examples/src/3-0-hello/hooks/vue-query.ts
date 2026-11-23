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

export function getHelloKey() {
  return ['hello'] as const
}

export function getHelloQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hello.$get>>,
) {
  return ['hello', '/hello', toValue(args)] as const
}

export function getHelloQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hello.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelloQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hello.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHello<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hello.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
          ReturnType<typeof getHelloQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hello.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHelloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelloQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hello.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
