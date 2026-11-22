import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getLiveStreamsKey() {
  return ['live-streams'] as const
}

export function getPlayersKey() {
  return ['players'] as const
}

export function getUploadKey() {
  return ['upload'] as const
}

export function getUploadTokensKey() {
  return ['upload-tokens'] as const
}

export function getVideosKey() {
  return ['videos'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetAccountKey() {
  return ['account', '/account'] as const
}

export function useGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsLiveStreamsLiveStreamIdKey(
  args: InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
) {
  return ['analytics', '/analytics/live-streams/:liveStreamId', args] as const
}

export function useGetAnalyticsLiveStreamsLiveStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
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
        ? getGetAnalyticsLiveStreamsLiveStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics['live-streams'][':liveStreamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsLiveStreamsLiveStreamId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
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
        ? getGetAnalyticsLiveStreamsLiveStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics['live-streams'][':liveStreamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsSessionsSessionIdEventsKey(
  args: InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
) {
  return ['analytics', '/analytics/sessions/:sessionId/events', args] as const
}

export function useGetAnalyticsSessionsSessionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
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
        ? getGetAnalyticsSessionsSessionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.sessions[':sessionId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsSessionsSessionIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
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
        ? getGetAnalyticsSessionsSessionIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.sessions[':sessionId'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsVideosVideoIdKey(
  args: InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
) {
  return ['analytics', '/analytics/videos/:videoId', args] as const
}

export function useGetAnalyticsVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
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
        ? getGetAnalyticsVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.videos[':videoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
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
        ? getGetAnalyticsVideosVideoIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.videos[':videoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthApiKeyKey() {
  return ['auth', '/auth/api-key', 'POST'] as const
}

export function usePostAuthApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth)['api-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth)['api-key']['$post']> },
      ) => parseResponse(client.auth['api-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthRefreshKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function usePostAuthRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.refresh.$post> }) =>
        parseResponse(client.auth.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveStreamsKey(
  args: InferRequestType<(typeof client)['live-streams']['$get']>,
) {
  return ['live-streams', '/live-streams', args] as const
}

export function useGetLiveStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['live-streams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLiveStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['live-streams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveStreams<TError = unknown>(
  args: InferRequestType<(typeof client)['live-streams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLiveStreamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['live-streams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiveStreamsKey() {
  return ['live-streams', '/live-streams', 'POST'] as const
}

export function usePostLiveStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['live-streams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['live-streams']['$post']> },
      ) => parseResponse(client['live-streams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiveStreamsLiveStreamIdKey(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
) {
  return ['live-streams', '/live-streams/:liveStreamId', args] as const
}

export function useGetLiveStreamsLiveStreamId<TError = unknown>(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
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
        ? getGetLiveStreamsLiveStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['live-streams'][':liveStreamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiveStreamsLiveStreamId<TError = unknown>(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
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
        ? getGetLiveStreamsLiveStreamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['live-streams'][':liveStreamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLiveStreamsLiveStreamIdKey() {
  return ['live-streams', '/live-streams/:liveStreamId', 'DELETE'] as const
}

export function useDeleteLiveStreamsLiveStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveStreamsLiveStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$delete']> },
      ) => parseResponse(client['live-streams'][':liveStreamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLiveStreamsLiveStreamIdKey() {
  return ['live-streams', '/live-streams/:liveStreamId', 'PATCH'] as const
}

export function usePatchLiveStreamsLiveStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLiveStreamsLiveStreamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$patch']> },
      ) => parseResponse(client['live-streams'][':liveStreamId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLiveStreamsLiveStreamIdThumbnailKey() {
  return ['live-streams', '/live-streams/:liveStreamId/thumbnail', 'POST'] as const
}

export function usePostLiveStreamsLiveStreamIdThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiveStreamsLiveStreamIdThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']
          >
        },
      ) =>
        parseResponse(client['live-streams'][':liveStreamId'].thumbnail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLiveStreamsLiveStreamIdThumbnailKey() {
  return ['live-streams', '/live-streams/:liveStreamId/thumbnail', 'DELETE'] as const
}

export function useDeleteLiveStreamsLiveStreamIdThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiveStreamsLiveStreamIdThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['live-streams'][':liveStreamId'].thumbnail.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPlayersKey(args: InferRequestType<typeof client.players.$get>) {
  return ['players', '/players', args] as const
}

export function useGetPlayers<TError = unknown>(
  args: InferRequestType<typeof client.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.players.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlayers<TError = unknown>(
  args: InferRequestType<typeof client.players.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlayersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.players.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPlayersKey() {
  return ['players', '/players', 'POST'] as const
}

export function usePostPlayers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.players.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlayersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.players.$post> }) =>
        parseResponse(client.players.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlayersPlayerIdKey(
  args: InferRequestType<(typeof client.players)[':playerId']['$get']>,
) {
  return ['players', '/players/:playerId', args] as const
}

export function useGetPlayersPlayerId<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':playerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
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
        ? getGetPlayersPlayerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':playerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlayersPlayerId<TError = unknown>(
  args: InferRequestType<(typeof client.players)[':playerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
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
        ? getGetPlayersPlayerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.players[':playerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePlayersPlayerIdKey() {
  return ['players', '/players/:playerId', 'DELETE'] as const
}

export function useDeletePlayersPlayerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.players)[':playerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlayersPlayerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.players)[':playerId']['$delete']> },
      ) => parseResponse(client.players[':playerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlayersPlayerIdKey() {
  return ['players', '/players/:playerId', 'PATCH'] as const
}

export function usePatchPlayersPlayerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.players)[':playerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlayersPlayerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.players)[':playerId']['$patch']> },
      ) => parseResponse(client.players[':playerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlayersPlayerIdLogoKey() {
  return ['players', '/players/:playerId/logo', 'POST'] as const
}

export function usePostPlayersPlayerIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.players)[':playerId']['logo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.players)[':playerId']['logo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlayersPlayerIdLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.players)[':playerId']['logo']['$post']> },
      ) => parseResponse(client.players[':playerId'].logo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlayersPlayerIdLogoKey() {
  return ['players', '/players/:playerId/logo', 'DELETE'] as const
}

export function useDeletePlayersPlayerIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':playerId']['logo']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.players)[':playerId']['logo']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlayersPlayerIdLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.players)[':playerId']['logo']['$delete']> },
      ) => parseResponse(client.players[':playerId'].logo.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadKey() {
  return ['upload', '/upload', 'POST'] as const
}

export function usePostUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.upload.$post> }) =>
        parseResponse(client.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUploadTokensKey(
  args: InferRequestType<(typeof client)['upload-tokens']['$get']>,
) {
  return ['upload-tokens', '/upload-tokens', args] as const
}

export function useGetUploadTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['upload-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUploadTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['upload-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUploadTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['upload-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUploadTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['upload-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUploadTokensKey() {
  return ['upload-tokens', '/upload-tokens', 'POST'] as const
}

export function usePostUploadTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['upload-tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['upload-tokens']['$post']> },
      ) => parseResponse(client['upload-tokens'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUploadTokensUploadTokenKey(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
) {
  return ['upload-tokens', '/upload-tokens/:uploadToken', args] as const
}

export function useGetUploadTokensUploadToken<TError = unknown>(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
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
        ? getGetUploadTokensUploadTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['upload-tokens'][':uploadToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUploadTokensUploadToken<TError = unknown>(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
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
        ? getGetUploadTokensUploadTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['upload-tokens'][':uploadToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUploadTokensUploadTokenKey() {
  return ['upload-tokens', '/upload-tokens/:uploadToken', 'DELETE'] as const
}

export function useDeleteUploadTokensUploadToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUploadTokensUploadTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$delete']> },
      ) => parseResponse(client['upload-tokens'][':uploadToken'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function useGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVideos<TError = unknown>(
  args: InferRequestType<typeof client.videos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.videos.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVideosKey() {
  return ['videos', '/videos', 'POST'] as const
}

export function usePostVideos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.videos.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videos.$post> }) =>
        parseResponse(client.videos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['$get']>,
) {
  return ['videos', '/videos/:videoId', args] as const
}

export function useGetVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetVideosVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoId<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetVideosVideoIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVideosVideoIdKey() {
  return ['videos', '/videos/:videoId', 'DELETE'] as const
}

export function useDeleteVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':videoId']['$delete']> },
      ) => parseResponse(client.videos[':videoId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdKey() {
  return ['videos', '/videos/:videoId', 'PATCH'] as const
}

export function usePatchVideosVideoId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':videoId']['$patch']> },
      ) => parseResponse(client.videos[':videoId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdCaptionsKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
) {
  return ['videos', '/videos/:videoId/captions', args] as const
}

export function useGetVideosVideoIdCaptions<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
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
        ? getGetVideosVideoIdCaptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].captions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCaptions<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
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
        ? getGetVideosVideoIdCaptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].captions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideosVideoIdCaptionsLanguageKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
) {
  return ['videos', '/videos/:videoId/captions/:language', args] as const
}

export function useGetVideosVideoIdCaptionsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
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
        ? getGetVideosVideoIdCaptionsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':videoId'].captions[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdCaptionsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
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
        ? getGetVideosVideoIdCaptionsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':videoId'].captions[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdCaptionsLanguageKey() {
  return ['videos', '/videos/:videoId/captions/:language', 'POST'] as const
}

export function usePostVideosVideoIdCaptionsLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdCaptionsLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':videoId']['captions'][':language']['$post']
          >
        },
      ) => parseResponse(client.videos[':videoId'].captions[':language'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosVideoIdCaptionsLanguageKey() {
  return ['videos', '/videos/:videoId/captions/:language', 'DELETE'] as const
}

export function useDeleteVideosVideoIdCaptionsLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdCaptionsLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':videoId']['captions'][':language']['$delete']
          >
        },
      ) =>
        parseResponse(client.videos[':videoId'].captions[':language'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdCaptionsLanguageKey() {
  return ['videos', '/videos/:videoId/captions/:language', 'PATCH'] as const
}

export function usePatchVideosVideoIdCaptionsLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdCaptionsLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':videoId']['captions'][':language']['$patch']
          >
        },
      ) =>
        parseResponse(client.videos[':videoId'].captions[':language'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdChaptersKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
) {
  return ['videos', '/videos/:videoId/chapters', args] as const
}

export function useGetVideosVideoIdChapters<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
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
        ? getGetVideosVideoIdChaptersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].chapters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdChapters<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
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
        ? getGetVideosVideoIdChaptersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].chapters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideosVideoIdChaptersLanguageKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
) {
  return ['videos', '/videos/:videoId/chapters/:language', args] as const
}

export function useGetVideosVideoIdChaptersLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
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
        ? getGetVideosVideoIdChaptersLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':videoId'].chapters[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdChaptersLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
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
        ? getGetVideosVideoIdChaptersLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.videos[':videoId'].chapters[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdChaptersLanguageKey() {
  return ['videos', '/videos/:videoId/chapters/:language', 'POST'] as const
}

export function usePostVideosVideoIdChaptersLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdChaptersLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':videoId']['chapters'][':language']['$post']
          >
        },
      ) => parseResponse(client.videos[':videoId'].chapters[':language'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVideosVideoIdChaptersLanguageKey() {
  return ['videos', '/videos/:videoId/chapters/:language', 'DELETE'] as const
}

export function useDeleteVideosVideoIdChaptersLanguage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVideosVideoIdChaptersLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.videos)[':videoId']['chapters'][':language']['$delete']
          >
        },
      ) =>
        parseResponse(client.videos[':videoId'].chapters[':language'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVideosVideoIdSourceKey() {
  return ['videos', '/videos/:videoId/source', 'POST'] as const
}

export function usePostVideosVideoIdSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['source']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['source']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.videos)[':videoId']['source']['$post']> },
      ) => parseResponse(client.videos[':videoId'].source.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideosVideoIdStatusKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
) {
  return ['videos', '/videos/:videoId/status', args] as const
}

export function useGetVideosVideoIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
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
        ? getGetVideosVideoIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideosVideoIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
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
        ? getGetVideosVideoIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videos[':videoId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideosVideoIdThumbnailKey() {
  return ['videos', '/videos/:videoId/thumbnail', 'POST'] as const
}

export function usePostVideosVideoIdThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['thumbnail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideosVideoIdThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$post']> },
      ) => parseResponse(client.videos[':videoId'].thumbnail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVideosVideoIdThumbnailKey() {
  return ['videos', '/videos/:videoId/thumbnail', 'PATCH'] as const
}

export function usePatchVideosVideoIdThumbnail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVideosVideoIdThumbnailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$patch']> },
      ) => parseResponse(client.videos[':videoId'].thumbnail.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function useGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
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
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
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
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']> },
      ) => parseResponse(client.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
