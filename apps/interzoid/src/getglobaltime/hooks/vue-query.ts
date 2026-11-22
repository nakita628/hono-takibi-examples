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

export function getGetglobaltimeKey() {
  return ['getglobaltime'] as const
}

export function getGetglobaltimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getglobaltime.$get>>,
) {
  return ['getglobaltime', '/getglobaltime', toValue(args)] as const
}

export function getGetglobaltimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getglobaltime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetglobaltimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getglobaltime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetglobaltime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getglobaltime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
          >,
          ReturnType<typeof getGetglobaltimeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobaltime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetglobaltimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetglobaltimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getglobaltime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
