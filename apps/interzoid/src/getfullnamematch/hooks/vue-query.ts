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

export function getGetfullnamematchKey() {
  return ['getfullnamematch'] as const
}

export function getGetfullnamematchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getfullnamematch.$get>>,
) {
  return ['getfullnamematch', '/getfullnamematch', toValue(args)] as const
}

export function getGetfullnamematchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getfullnamematch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetfullnamematchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getfullnamematch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetfullnamematch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getfullnamematch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>
            >
          >,
          ReturnType<typeof getGetfullnamematchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetfullnamematchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetfullnamematchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getfullnamematch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
