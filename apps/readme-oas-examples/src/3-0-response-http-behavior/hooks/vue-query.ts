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

export function getCacheKey() {
  return ['cache'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getCacheQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cache.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cache', '/cache', keyArgs] as const
}

export function getCacheQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cache.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacheQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cache.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCache<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cache.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
          ReturnType<typeof getCacheQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCacheQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacheQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cache.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus302QueryKey() {
  return ['status', '/status/302'] as const
}

export function getStatus302QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus302QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['302'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus302<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus302QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['302']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus302QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus302QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['302'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatus204QueryKey() {
  return ['status', '/status/204'] as const
}

export function getStatus204QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatus204QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status['204'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus204<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>
            >
          >,
          ReturnType<typeof getStatus204QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)['204']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatus204QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatus204QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status['204'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
