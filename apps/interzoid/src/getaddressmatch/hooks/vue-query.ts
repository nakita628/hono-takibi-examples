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

export function getGetaddressmatchKey() {
  return ['getaddressmatch'] as const
}

export function getGetaddressmatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getaddressmatch.$get>>,
) {
  return ['getaddressmatch', '/getaddressmatch', toValue(args)] as const
}

export function getGetaddressmatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getaddressmatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetaddressmatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getaddressmatch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetaddressmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getaddressmatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>
            >
          >,
          ReturnType<typeof getGetaddressmatchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getaddressmatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetaddressmatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetaddressmatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getaddressmatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
