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

export function getGetcountrystandardKey() {
  return ['getcountrystandard'] as const
}

export function getGetcountrystandardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcountrystandard.$get>>,
) {
  return ['getcountrystandard', '/getcountrystandard', toValue(args)] as const
}

export function getGetcountrystandardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcountrystandard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetcountrystandardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getcountrystandard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetcountrystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcountrystandard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>
            >
          >,
          ReturnType<typeof getGetcountrystandardQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcountrystandard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcountrystandardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetcountrystandardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getcountrystandard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
