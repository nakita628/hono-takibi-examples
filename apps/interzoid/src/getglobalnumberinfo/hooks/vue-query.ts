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

export function getGetglobalnumberinfoKey() {
  return ['getglobalnumberinfo'] as const
}

export function getGetglobalnumberinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getglobalnumberinfo.$get>>,
) {
  return ['getglobalnumberinfo', '/getglobalnumberinfo', toValue(args)] as const
}

export function getGetglobalnumberinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getglobalnumberinfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetglobalnumberinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getglobalnumberinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetglobalnumberinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getglobalnumberinfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
            >
          >,
          ReturnType<typeof getGetglobalnumberinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetglobalnumberinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetglobalnumberinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getglobalnumberinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
