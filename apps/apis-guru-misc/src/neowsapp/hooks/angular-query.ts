import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectRestV1Feed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.v1.feed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestV1FeedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRestV1FeedToday<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.v1.feed.today.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestV1FeedTodayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRestV1NeoBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.v1.neo.browse.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestV1NeoBrowseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRestV1NeoSentry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestV1NeoSentryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRestV1NeoSentryAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRestV1NeoSentryAsteroidIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectRestV1NeoAsteroidId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestV1NeoAsteroidIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRestV1Stats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRestV1StatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
