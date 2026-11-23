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

export function getCodeKey() {
  return ['code'] as const
}

export function getCodeCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.code)[':code']['$get']>>,
) {
  return ['code', '/code/:code', toValue(args)] as const
}

export function getCodeCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.code)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCodeCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.code[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCodeCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.code)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>
            >
          >,
          ReturnType<typeof getCodeCodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.code)[':code']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCodeCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCodeCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.code[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
