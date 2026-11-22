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

export function getRestKey() {
  return ['rest'] as const
}

export function getRestV1FeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.feed.$get>>,
) {
  return ['rest', '/rest/v1/feed', toValue(args)] as const
}

export function getRestV1FeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.feed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestV1FeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.feed.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestV1Feed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.feed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
          >,
          ReturnType<typeof getRestV1FeedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRestV1FeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestV1FeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.feed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestV1FeedTodayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.feed.today.$get>>,
) {
  return ['rest', '/rest/v1/feed/today', toValue(args)] as const
}

export function getRestV1FeedTodayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.feed.today.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestV1FeedTodayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.feed.today.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestV1FeedToday<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.feed.today.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>
            >
          >,
          ReturnType<typeof getRestV1FeedTodayQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1FeedTodayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestV1FeedTodayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.feed.today.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestV1NeoBrowseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.neo.browse.$get>>,
) {
  return ['rest', '/rest/v1/neo/browse', toValue(args)] as const
}

export function getRestV1NeoBrowseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.neo.browse.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestV1NeoBrowseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.neo.browse.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestV1NeoBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.neo.browse.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>
            >
          >,
          ReturnType<typeof getRestV1NeoBrowseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1NeoBrowseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestV1NeoBrowseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.neo.browse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestV1NeoSentryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.neo.sentry.$get>>,
) {
  return ['rest', '/rest/v1/neo/sentry', toValue(args)] as const
}

export function getRestV1NeoSentryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.neo.sentry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestV1NeoSentryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.neo.sentry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestV1NeoSentry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rest.v1.neo.sentry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>
            >
          >,
          ReturnType<typeof getRestV1NeoSentryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1NeoSentryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestV1NeoSentryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.neo.sentry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestV1NeoSentryAsteroidIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>
  >,
) {
  return ['rest', '/rest/v1/neo/sentry/:asteroid_id', toValue(args)] as const
}

export function getRestV1NeoSentryAsteroidIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestV1NeoSentryAsteroidIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.neo.sentry[':asteroid_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestV1NeoSentryAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestV1NeoSentryAsteroidIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1NeoSentryAsteroidIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestV1NeoSentryAsteroidIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.neo.sentry[':asteroid_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestV1NeoAsteroidIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>,
) {
  return ['rest', '/rest/v1/neo/:asteroid_id', toValue(args)] as const
}

export function getRestV1NeoAsteroidIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRestV1NeoAsteroidIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.neo[':asteroid_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRestV1NeoAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRestV1NeoAsteroidIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1NeoAsteroidIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRestV1NeoAsteroidIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.neo[':asteroid_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRestV1StatsQueryKey() {
  return ['rest', '/rest/v1/stats'] as const
}

export function getRestV1StatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRestV1StatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rest.v1.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRestV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
          >,
          ReturnType<typeof getRestV1StatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1StatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRestV1StatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rest.v1.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
