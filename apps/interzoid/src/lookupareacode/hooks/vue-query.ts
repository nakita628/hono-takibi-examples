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

export function getGetareacodeKey() {
  return ['getareacode'] as const
}

export function getGetareacodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getareacode.$get>>,
) {
  return ['getareacode', '/getareacode', toValue(args)] as const
}

export function getGetareacodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getareacode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetareacodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getareacode.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetareacode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getareacode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>
          >,
          ReturnType<typeof getGetareacodeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetareacodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetareacodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getareacode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
