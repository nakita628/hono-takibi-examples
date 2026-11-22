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

export function getGetcurrencyrateKey() {
  return ['getcurrencyrate'] as const
}

export function getGetcurrencyrateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcurrencyrate.$get>>,
) {
  return ['getcurrencyrate', '/getcurrencyrate', toValue(args)] as const
}

export function getGetcurrencyrateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcurrencyrate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetcurrencyrateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getcurrencyrate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetcurrencyrate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcurrencyrate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>
            >
          >,
          ReturnType<typeof getGetcurrencyrateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcurrencyrate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcurrencyrateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetcurrencyrateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getcurrencyrate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
