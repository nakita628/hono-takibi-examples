import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRestKey() {
  return ['rest'] as const
}

export function getRestV1FeedQueryKey(args: InferRequestType<typeof client.rest.v1.feed.$get>) {
  return ['rest', '/rest/v1/feed', args] as const
}

export function getRestV1FeedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rest.v1.feed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRestV1FeedQueryKey>
  >({
    queryKey: getRestV1FeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.feed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestV1Feed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.feed.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1FeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestV1FeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestV1Feed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.feed.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1FeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestV1FeedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestV1FeedTodayQueryKey(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
) {
  return ['rest', '/rest/v1/feed/today', args] as const
}

export function getRestV1FeedTodayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rest.v1.feed.today.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1FeedTodayQueryKey>
  >({
    queryKey: getRestV1FeedTodayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.feed.today.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestV1FeedToday<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1FeedTodayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestV1FeedTodayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestV1FeedToday<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1FeedTodayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestV1FeedTodayQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestV1NeoBrowseQueryKey(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
) {
  return ['rest', '/rest/v1/neo/browse', args] as const
}

export function getRestV1NeoBrowseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rest.v1.neo.browse.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1NeoBrowseQueryKey>
  >({
    queryKey: getRestV1NeoBrowseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.neo.browse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestV1NeoBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1NeoBrowseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestV1NeoBrowseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestV1NeoBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1NeoBrowseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestV1NeoBrowseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestV1NeoSentryQueryKey(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
) {
  return ['rest', '/rest/v1/neo/sentry', args] as const
}

export function getRestV1NeoSentryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1NeoSentryQueryKey>
  >({
    queryKey: getRestV1NeoSentryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.neo.sentry.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestV1NeoSentry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1NeoSentryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestV1NeoSentryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestV1NeoSentry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1NeoSentryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestV1NeoSentryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestV1NeoSentryAsteroidIdQueryKey(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
) {
  return ['rest', '/rest/v1/neo/sentry/:asteroid_id', args] as const
}

export function getRestV1NeoSentryAsteroidIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestV1NeoSentryAsteroidIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.neo.sentry[':asteroid_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestV1NeoSentryAsteroidIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRestV1NeoSentryAsteroidIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestV1NeoSentryAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRestV1NeoSentryAsteroidIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestV1NeoAsteroidIdQueryKey(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
) {
  return ['rest', '/rest/v1/neo/:asteroid_id', args] as const
}

export function getRestV1NeoAsteroidIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRestV1NeoAsteroidIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.neo[':asteroid_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestV1NeoAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getRestV1NeoAsteroidIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestV1NeoAsteroidIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestV1NeoAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestV1NeoAsteroidIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestV1StatsQueryKey() {
  return ['rest', '/rest/v1/stats'] as const
}

export function getRestV1StatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRestV1StatsQueryKey>
  >({
    queryKey: getRestV1StatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rest.v1.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1StatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestV1StatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRestV1StatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestV1StatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
