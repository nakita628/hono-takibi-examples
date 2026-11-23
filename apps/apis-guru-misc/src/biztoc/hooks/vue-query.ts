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

export function getAiKey() {
  return ['ai'] as const
}

export function getAiNewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.news.$get>>,
) {
  return ['ai', '/ai/news', toValue(args)] as const
}

export function getAiNewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.news.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAiNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ai.news.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAiNews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ai.news.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>
          >,
          ReturnType<typeof getAiNewsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ai.news.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAiNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAiNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ai.news.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
