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

export function getGetfullnameparsedmatchKey() {
  return ['getfullnameparsedmatch'] as const
}

export function getGetfullnameparsedmatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getfullnameparsedmatch.$get>>,
) {
  return ['getfullnameparsedmatch', '/getfullnameparsedmatch', toValue(args)] as const
}

export function getGetfullnameparsedmatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getfullnameparsedmatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetfullnameparsedmatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getfullnameparsedmatch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetfullnameparsedmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getfullnameparsedmatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
            >
          >,
          ReturnType<typeof getGetfullnameparsedmatchQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetfullnameparsedmatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetfullnameparsedmatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getfullnameparsedmatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
