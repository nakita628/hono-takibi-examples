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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.numbers.$get>>,
) {
  return ['anything', '/anything/numbers', toValue(args)] as const
}

export function getAnythingNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>
            >
          >,
          ReturnType<typeof getAnythingNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
