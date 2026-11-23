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

export function getRateLimitKey() {
  return ['rate_limit'] as const
}

export function getUserRateLimitKey() {
  return ['user_rate_limit'] as const
}

export function getRateLimitIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate_limit.index.$get>>,
) {
  return ['rate_limit', '/rate_limit/', toValue(args)] as const
}

export function getRateLimitIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate_limit.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRateLimitIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rate_limit.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate_limit.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>
            >
          >,
          ReturnType<typeof getRateLimitIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limit.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRateLimitIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRateLimitIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rate_limit.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserRateLimitIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_rate_limit.index.$get>>,
) {
  return ['user_rate_limit', '/user_rate_limit/', toValue(args)] as const
}

export function getUserRateLimitIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_rate_limit.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserRateLimitIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_rate_limit.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserRateLimitIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_rate_limit.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
            >
          >,
          ReturnType<typeof getUserRateLimitIndexQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user_rate_limit.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserRateLimitIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserRateLimitIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_rate_limit.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
