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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1SuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.suggest.$get>>,
) {
  return ['api', '/api/v1/suggest', toValue(args)] as const
}

export function getApiV1SuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.suggest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Suggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
          >,
          ReturnType<typeof getApiV1SuggestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
