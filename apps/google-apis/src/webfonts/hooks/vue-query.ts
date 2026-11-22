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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1WebfontsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webfonts.$get>>,
) {
  return ['v1', '/v1/webfonts', toValue(args)] as const
}

export function getV1WebfontsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webfonts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebfontsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webfonts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Webfonts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webfonts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>
          >,
          ReturnType<typeof getV1WebfontsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webfonts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebfontsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebfontsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webfonts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
