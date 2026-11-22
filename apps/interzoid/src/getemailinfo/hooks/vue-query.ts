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

export function getGetemailinfoKey() {
  return ['getemailinfo'] as const
}

export function getGetemailinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getemailinfo.$get>>,
) {
  return ['getemailinfo', '/getemailinfo', toValue(args)] as const
}

export function getGetemailinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getemailinfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetemailinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getemailinfo.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetemailinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getemailinfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>
          >,
          ReturnType<typeof getGetemailinfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getemailinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetemailinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetemailinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getemailinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
