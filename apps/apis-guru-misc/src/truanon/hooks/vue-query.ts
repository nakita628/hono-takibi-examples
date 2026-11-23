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

export function getApiGetProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.get_profile.$get>>,
) {
  return ['api', '/api/get_profile', toValue(args)] as const
}

export function getApiGetProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.get_profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiGetProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.get_profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiGetProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.get_profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>
            >
          >,
          ReturnType<typeof getApiGetProfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiGetProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiGetProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.get_profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRequestTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.request_token.$get>>,
) {
  return ['api', '/api/request_token', toValue(args)] as const
}

export function getApiRequestTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.request_token.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRequestTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.request_token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRequestToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.request_token.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>
            >
          >,
          ReturnType<typeof getApiRequestTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRequestTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRequestTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.request_token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
