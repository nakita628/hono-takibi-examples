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

export function getGetcitystandardKey() {
  return ['getcitystandard'] as const
}

export function getGetcitystandardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcitystandard.$get>>,
) {
  return ['getcitystandard', '/getcitystandard', toValue(args)] as const
}

export function getGetcitystandardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcitystandard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetcitystandardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getcitystandard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetcitystandard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcitystandard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>
            >
          >,
          ReturnType<typeof getGetcitystandardQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitystandard.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetcitystandardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetcitystandardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getcitystandard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
