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

export function getGetweatherKey() {
  return ['getweather'] as const
}

export function getGetweatherQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getweather.$get>>,
) {
  return ['getweather', '/getweather', toValue(args)] as const
}

export function getGetweatherQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getweather.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetweatherQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getweather.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetweather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getweather.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
          >,
          ReturnType<typeof getGetweatherQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetweatherQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetweatherQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getweather.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
