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

export function getV1EmailDisposableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.disposable.$get>>,
) {
  return ['v1', '/v1/email/disposable', toValue(args)] as const
}

export function getV1EmailDisposableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.disposable.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmailDisposableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.email.disposable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmailDisposable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.email.disposable.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>
            >
          >,
          ReturnType<typeof getV1EmailDisposableQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.disposable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmailDisposableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmailDisposableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.email.disposable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
