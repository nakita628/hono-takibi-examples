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

export function getGetcountrymatchKey() {
  return ['getcountrymatch'] as const
}

export function getGetcountrymatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcountrymatch.$get>>,
) {
  return ['getcountrymatch', '/getcountrymatch', toValue(args)] as const
}

export function getGetcountrymatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcountrymatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetcountrymatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getcountrymatch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetcountrymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcountrymatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>
            >
          >,
          ReturnType<typeof getGetcountrymatchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrymatch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcountrymatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetcountrymatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getcountrymatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
