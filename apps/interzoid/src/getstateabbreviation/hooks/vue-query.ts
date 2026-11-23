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

export function getGetstateabbreviationKey() {
  return ['getstateabbreviation'] as const
}

export function getGetstateabbreviationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getstateabbreviation.$get>>,
) {
  return ['getstateabbreviation', '/getstateabbreviation', toValue(args)] as const
}

export function getGetstateabbreviationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getstateabbreviation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetstateabbreviationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getstateabbreviation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetstateabbreviation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getstateabbreviation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>
            >
          >,
          ReturnType<typeof getGetstateabbreviationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getstateabbreviation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetstateabbreviationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetstateabbreviationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getstateabbreviation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
