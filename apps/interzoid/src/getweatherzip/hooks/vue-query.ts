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

export function getGetweatherzipcodeKey() {
  return ['getweatherzipcode'] as const
}

export function getGetweatherzipcodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getweatherzipcode.$get>>,
) {
  return ['getweatherzipcode', '/getweatherzipcode', toValue(args)] as const
}

export function getGetweatherzipcodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getweatherzipcode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetweatherzipcodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getweatherzipcode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetweatherzipcode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getweatherzipcode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>
            >
          >,
          ReturnType<typeof getGetweatherzipcodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetweatherzipcodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetweatherzipcodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getweatherzipcode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
