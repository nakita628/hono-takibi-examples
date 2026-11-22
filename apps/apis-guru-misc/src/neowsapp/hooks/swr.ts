import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRestKey() {
  return ['rest'] as const
}

export function getGetRestV1FeedKey(args: InferRequestType<typeof client.rest.v1.feed.$get>) {
  return ['rest', '/rest/v1/feed', args] as const
}

export function useGetRestV1Feed<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestV1FeedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1Feed<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestV1FeedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestV1FeedTodayKey(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
) {
  return ['rest', '/rest/v1/feed/today', args] as const
}

export function useGetRestV1FeedToday<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1FeedTodayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.feed.today.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1FeedToday<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1FeedTodayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.feed.today.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.feed.today.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestV1NeoBrowseKey(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
) {
  return ['rest', '/rest/v1/neo/browse', args] as const
}

export function useGetRestV1NeoBrowse<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoBrowseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.neo.browse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1NeoBrowse<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoBrowseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.browse.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.neo.browse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestV1NeoSentryKey(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
) {
  return ['rest', '/rest/v1/neo/sentry', args] as const
}

export function useGetRestV1NeoSentry<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoSentryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.neo.sentry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1NeoSentry<TError = unknown>(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoSentryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.neo.sentry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.neo.sentry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestV1NeoSentryAsteroidIdKey(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
) {
  return ['rest', '/rest/v1/neo/sentry/:asteroid_id', args] as const
}

export function useGetRestV1NeoSentryAsteroidId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoSentryAsteroidIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.v1.neo.sentry[':asteroid_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1NeoSentryAsteroidId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoSentryAsteroidIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.v1.neo.sentry[':asteroid_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestV1NeoAsteroidIdKey(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
) {
  return ['rest', '/rest/v1/neo/:asteroid_id', args] as const
}

export function useGetRestV1NeoAsteroidId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoAsteroidIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.neo[':asteroid_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1NeoAsteroidId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestV1NeoAsteroidIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.neo[':asteroid_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestV1StatsKey() {
  return ['rest', '/rest/v1/stats'] as const
}

export function useGetRestV1Stats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestV1StatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestV1Stats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestV1StatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rest.v1.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.v1.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
