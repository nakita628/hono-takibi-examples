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

export function getGetcitymatchKey() {
  return ['getcitymatch'] as const
}

export function getGetcitymatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcitymatch.$get>>,
) {
  return ['getcitymatch', '/getcitymatch', toValue(args)] as const
}

export function getGetcitymatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcitymatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetcitymatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getcitymatch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetcitymatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getcitymatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>
          >,
          ReturnType<typeof getGetcitymatchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getcitymatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetcitymatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetcitymatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getcitymatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
