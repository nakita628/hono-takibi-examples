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

export function getConvertcurrencyKey() {
  return ['convertcurrency'] as const
}

export function getConvertcurrencyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convertcurrency.$get>>,
) {
  return ['convertcurrency', '/convertcurrency', toValue(args)] as const
}

export function getConvertcurrencyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convertcurrency.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertcurrencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convertcurrency.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertcurrency<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convertcurrency.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>
            >
          >,
          ReturnType<typeof getConvertcurrencyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convertcurrency.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConvertcurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertcurrencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convertcurrency.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
