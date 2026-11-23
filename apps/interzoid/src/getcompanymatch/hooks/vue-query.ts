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

export function getGetcompanymatchKey() {
  return ['getcompanymatch'] as const
}

export function getGetcompanymatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcompanymatch.$get>>,
) {
  return ['getcompanymatch', '/getcompanymatch', toValue(args)] as const
}

export function getGetcompanymatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcompanymatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetcompanymatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getcompanymatch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetcompanymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcompanymatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>
            >
          >,
          ReturnType<typeof getGetcompanymatchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcompanymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcompanymatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetcompanymatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getcompanymatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
