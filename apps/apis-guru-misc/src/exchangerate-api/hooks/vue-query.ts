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

export function getLatestKey() {
  return ['latest'] as const
}

export function getLatestBaseCurrencyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.latest)[':base_currency']['$get']>>,
) {
  return ['latest', '/latest/:base_currency', toValue(args)] as const
}

export function getLatestBaseCurrencyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.latest)[':base_currency']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLatestBaseCurrencyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.latest[':base_currency'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLatestBaseCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.latest)[':base_currency']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLatestBaseCurrencyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.latest)[':base_currency']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLatestBaseCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLatestBaseCurrencyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.latest[':base_currency'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
