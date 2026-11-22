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

export function getGlobalpageloadKey() {
  return ['globalpageload'] as const
}

export function getGlobalpageloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalpageload.$get>>,
) {
  return ['globalpageload', '/globalpageload', toValue(args)] as const
}

export function getGlobalpageloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalpageload.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGlobalpageloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.globalpageload.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGlobalpageload<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalpageload.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
          >,
          ReturnType<typeof getGlobalpageloadQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalpageload.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalpageloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGlobalpageloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.globalpageload.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
