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

export function getApodKey() {
  return ['apod'] as const
}

export function getApodQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apod.$get>>) {
  return ['apod', '/apod', toValue(args)] as const
}

export function getApodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apod.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apod.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apod.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
          ReturnType<typeof getApodQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apod.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
