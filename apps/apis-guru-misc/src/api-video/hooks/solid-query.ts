import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsLiveStreamsLiveStreamIdQueryKey(
  args: InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
) {
  return ['analytics', '/analytics/live-streams/:liveStreamId', args] as const
}

export function getAnalyticsLiveStreamsLiveStreamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsLiveStreamsLiveStreamIdQueryKey>
  >({
    queryKey: getAnalyticsLiveStreamsLiveStreamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics['live-streams'][':liveStreamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsLiveStreamsLiveStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsLiveStreamsLiveStreamIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsLiveStreamsLiveStreamIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsSessionsSessionIdEventsQueryKey(
  args: InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
) {
  return ['analytics', '/analytics/sessions/:sessionId/events', args] as const
}

export function getAnalyticsSessionsSessionIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsSessionsSessionIdEventsQueryKey>
  >({
    queryKey: getAnalyticsSessionsSessionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.sessions[':sessionId'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsSessionsSessionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsSessionsSessionIdEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsSessionsSessionIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
) {
  return ['analytics', '/analytics/videos/:videoId', args] as const
}

export function getAnalyticsVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsVideosVideoIdQueryKey>
  >({
    queryKey: getAnalyticsVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.videos[':videoId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsVideosVideoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalyticsVideosVideoIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthApiKeyMutationKey() {
  return ['auth', '/auth/api-key', 'POST'] as const
}

export function getPostAuthApiKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['api-key']['$post']>) {
      return parseResponse(client.auth['api-key'].$post(args, options))
    },
  })
}

export function createPostAuthApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.auth)['api-key']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthRefreshMutationKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function getPostAuthRefreshMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.refresh.$post>) {
      return parseResponse(client.auth.refresh.$post(args, options))
    },
  })
}

export function createPostAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.refresh.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveStreamsQueryKey(
  args: InferRequestType<(typeof client)['live-streams']['$get']>,
) {
  return ['live-streams', '/live-streams', args] as const
}

export function getLiveStreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['live-streams']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveStreamsQueryKey>
  >({
    queryKey: getLiveStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['live-streams'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiveStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['live-streams']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLiveStreamsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiveStreamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostLiveStreamsMutationKey() {
  return ['live-streams', '/live-streams', 'POST'] as const
}

export function getPostLiveStreamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['live-streams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveStreamsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['live-streams']['$post']>) {
      return parseResponse(client['live-streams'].$post(args, options))
    },
  })
}

export function createPostLiveStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['live-streams']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveStreamsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiveStreamsLiveStreamIdQueryKey(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
) {
  return ['live-streams', '/live-streams/:liveStreamId', args] as const
}

export function getLiveStreamsLiveStreamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveStreamsLiveStreamIdQueryKey>
  >({
    queryKey: getLiveStreamsLiveStreamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['live-streams'][':liveStreamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLiveStreamsLiveStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLiveStreamsLiveStreamIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLiveStreamsLiveStreamIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteLiveStreamsLiveStreamIdMutationKey() {
  return ['live-streams', '/live-streams/:liveStreamId', 'DELETE'] as const
}

export function getDeleteLiveStreamsLiveStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveStreamsLiveStreamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$delete']>,
    ) {
      return parseResponse(client['live-streams'][':liveStreamId'].$delete(args, options))
    },
  })
}

export function createDeleteLiveStreamsLiveStreamId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveStreamsLiveStreamIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchLiveStreamsLiveStreamIdMutationKey() {
  return ['live-streams', '/live-streams/:liveStreamId', 'PATCH'] as const
}

export function getPatchLiveStreamsLiveStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLiveStreamsLiveStreamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$patch']>,
    ) {
      return parseResponse(client['live-streams'][':liveStreamId'].$patch(args, options))
    },
  })
}

export function createPatchLiveStreamsLiveStreamId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLiveStreamsLiveStreamIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLiveStreamsLiveStreamIdThumbnailMutationKey() {
  return ['live-streams', '/live-streams/:liveStreamId/thumbnail', 'POST'] as const
}

export function getPostLiveStreamsLiveStreamIdThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveStreamsLiveStreamIdThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']
      >,
    ) {
      return parseResponse(client['live-streams'][':liveStreamId'].thumbnail.$post(args, options))
    },
  })
}

export function createPostLiveStreamsLiveStreamIdThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiveStreamsLiveStreamIdThumbnailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLiveStreamsLiveStreamIdThumbnailMutationKey() {
  return ['live-streams', '/live-streams/:liveStreamId/thumbnail', 'DELETE'] as const
}

export function getDeleteLiveStreamsLiveStreamIdThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveStreamsLiveStreamIdThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']
      >,
    ) {
      return parseResponse(client['live-streams'][':liveStreamId'].thumbnail.$delete(args, options))
    },
  })
}

export function createDeleteLiveStreamsLiveStreamIdThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['live-streams'][':liveStreamId']['thumbnail']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLiveStreamsLiveStreamIdThumbnailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlayersQueryKey(args: InferRequestType<typeof client.players.$get>) {
  return ['players', '/players', args] as const
}

export function getPlayersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.players.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayersQueryKey>
  >({
    queryKey: getPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.players.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPlayersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPlayersMutationKey() {
  return ['players', '/players', 'POST'] as const
}

export function getPostPlayersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$post>>>>>,
    TError,
    InferRequestType<typeof client.players.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlayersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.players.$post>) {
      return parseResponse(client.players.$post(args, options))
    },
  })
}

export function createPostPlayers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.players.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlayersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlayersPlayerIdQueryKey(
  args: InferRequestType<(typeof client.players)[':playerId']['$get']>,
) {
  return ['players', '/players/:playerId', args] as const
}

export function getPlayersPlayerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.players)[':playerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersPlayerIdQueryKey>
  >({
    queryKey: getPlayersPlayerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.players[':playerId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlayersPlayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.players)[':playerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPlayersPlayerIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlayersPlayerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePlayersPlayerIdMutationKey() {
  return ['players', '/players/:playerId', 'DELETE'] as const
}

export function getDeletePlayersPlayerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.players)[':playerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlayersPlayerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.players)[':playerId']['$delete']>) {
      return parseResponse(client.players[':playerId'].$delete(args, options))
    },
  })
}

export function createDeletePlayersPlayerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.players)[':playerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.players)[':playerId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlayersPlayerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPlayersPlayerIdMutationKey() {
  return ['players', '/players/:playerId', 'PATCH'] as const
}

export function getPatchPlayersPlayerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.players)[':playerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPlayersPlayerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.players)[':playerId']['$patch']>) {
      return parseResponse(client.players[':playerId'].$patch(args, options))
    },
  })
}

export function createPatchPlayersPlayerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':playerId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.players)[':playerId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPlayersPlayerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPlayersPlayerIdLogoMutationKey() {
  return ['players', '/players/:playerId/logo', 'POST'] as const
}

export function getPostPlayersPlayerIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.players)[':playerId']['logo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.players)[':playerId']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlayersPlayerIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.players)[':playerId']['logo']['$post']>,
    ) {
      return parseResponse(client.players[':playerId'].logo.$post(args, options))
    },
  })
}

export function createPostPlayersPlayerIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':playerId']['logo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.players)[':playerId']['logo']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlayersPlayerIdLogoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePlayersPlayerIdLogoMutationKey() {
  return ['players', '/players/:playerId/logo', 'DELETE'] as const
}

export function getDeletePlayersPlayerIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.players)[':playerId']['logo']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.players)[':playerId']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlayersPlayerIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.players)[':playerId']['logo']['$delete']>,
    ) {
      return parseResponse(client.players[':playerId'].logo.$delete(args, options))
    },
  })
}

export function createDeletePlayersPlayerIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.players)[':playerId']['logo']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.players)[':playerId']['logo']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlayersPlayerIdLogoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUploadMutationKey() {
  return ['upload', '/upload', 'POST'] as const
}

export function getPostUploadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>>,
    TError,
    InferRequestType<typeof client.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.upload.$post>) {
      return parseResponse(client.upload.$post(args, options))
    },
  })
}

export function createPostUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.upload.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUploadTokensQueryKey(
  args: InferRequestType<(typeof client)['upload-tokens']['$get']>,
) {
  return ['upload-tokens', '/upload-tokens', args] as const
}

export function getUploadTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['upload-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadTokensQueryKey>
  >({
    queryKey: getUploadTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['upload-tokens'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUploadTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['upload-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUploadTokensQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUploadTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUploadTokensMutationKey() {
  return ['upload-tokens', '/upload-tokens', 'POST'] as const
}

export function getPostUploadTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['upload-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['upload-tokens']['$post']>) {
      return parseResponse(client['upload-tokens'].$post(args, options))
    },
  })
}

export function createPostUploadTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['upload-tokens']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUploadTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUploadTokensUploadTokenQueryKey(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
) {
  return ['upload-tokens', '/upload-tokens/:uploadToken', args] as const
}

export function getUploadTokensUploadTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadTokensUploadTokenQueryKey>
  >({
    queryKey: getUploadTokensUploadTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['upload-tokens'][':uploadToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUploadTokensUploadToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUploadTokensUploadTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUploadTokensUploadTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUploadTokensUploadTokenMutationKey() {
  return ['upload-tokens', '/upload-tokens/:uploadToken', 'DELETE'] as const
}

export function getDeleteUploadTokensUploadTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUploadTokensUploadTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>,
    ) {
      return parseResponse(client['upload-tokens'][':uploadToken'].$delete(args, options))
    },
  })
}

export function createDeleteUploadTokensUploadToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUploadTokensUploadTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideosQueryKey(args: InferRequestType<typeof client.videos.$get>) {
  return ['videos', '/videos', args] as const
}

export function getVideosQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >({
    queryKey: getVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videos.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostVideosMutationKey() {
  return ['videos', '/videos', 'POST'] as const
}

export function getPostVideosMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>>,
    TError,
    InferRequestType<typeof client.videos.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videos.$post>) {
      return parseResponse(client.videos.$post(args, options))
    },
  })
}

export function createPostVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.videos.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideosVideoIdQueryKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['$get']>,
) {
  return ['videos', '/videos/:videoId', args] as const
}

export function getVideosVideoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':videoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdQueryKey>
  >({
    queryKey: getVideosVideoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':videoId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':videoId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVideosVideoIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosVideoIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteVideosVideoIdMutationKey() {
  return ['videos', '/videos/:videoId', 'DELETE'] as const
}

export function getDeleteVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.videos)[':videoId']['$delete']>) {
      return parseResponse(client.videos[':videoId'].$delete(args, options))
    },
  })
}

export function createDeleteVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.videos)[':videoId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosVideoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchVideosVideoIdMutationKey() {
  return ['videos', '/videos/:videoId', 'PATCH'] as const
}

export function getPatchVideosVideoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.videos)[':videoId']['$patch']>) {
      return parseResponse(client.videos[':videoId'].$patch(args, options))
    },
  })
}

export function createPatchVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVideosVideoIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideosVideoIdCaptionsQueryKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
) {
  return ['videos', '/videos/:videoId/captions', args] as const
}

export function getVideosVideoIdCaptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCaptionsQueryKey>
  >({
    queryKey: getVideosVideoIdCaptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':videoId'].captions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosVideoIdCaptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVideosVideoIdCaptionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosVideoIdCaptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVideosVideoIdCaptionsLanguageQueryKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
) {
  return ['videos', '/videos/:videoId/captions/:language', args] as const
}

export function getVideosVideoIdCaptionsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCaptionsLanguageQueryKey>
  >({
    queryKey: getVideosVideoIdCaptionsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':videoId'].captions[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosVideoIdCaptionsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVideosVideoIdCaptionsLanguageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosVideoIdCaptionsLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostVideosVideoIdCaptionsLanguageMutationKey() {
  return ['videos', '/videos/:videoId/captions/:language', 'POST'] as const
}

export function getPostVideosVideoIdCaptionsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdCaptionsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>,
    ) {
      return parseResponse(client.videos[':videoId'].captions[':language'].$post(args, options))
    },
  })
}

export function createPostVideosVideoIdCaptionsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosVideoIdCaptionsLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteVideosVideoIdCaptionsLanguageMutationKey() {
  return ['videos', '/videos/:videoId/captions/:language', 'DELETE'] as const
}

export function getDeleteVideosVideoIdCaptionsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdCaptionsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':videoId']['captions'][':language']['$delete']
      >,
    ) {
      return parseResponse(client.videos[':videoId'].captions[':language'].$delete(args, options))
    },
  })
}

export function createDeleteVideosVideoIdCaptionsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.videos)[':videoId']['captions'][':language']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosVideoIdCaptionsLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchVideosVideoIdCaptionsLanguageMutationKey() {
  return ['videos', '/videos/:videoId/captions/:language', 'PATCH'] as const
}

export function getPatchVideosVideoIdCaptionsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdCaptionsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>,
    ) {
      return parseResponse(client.videos[':videoId'].captions[':language'].$patch(args, options))
    },
  })
}

export function createPatchVideosVideoIdCaptionsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVideosVideoIdCaptionsLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideosVideoIdChaptersQueryKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
) {
  return ['videos', '/videos/:videoId/chapters', args] as const
}

export function getVideosVideoIdChaptersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdChaptersQueryKey>
  >({
    queryKey: getVideosVideoIdChaptersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':videoId'].chapters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosVideoIdChapters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVideosVideoIdChaptersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosVideoIdChaptersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVideosVideoIdChaptersLanguageQueryKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
) {
  return ['videos', '/videos/:videoId/chapters/:language', args] as const
}

export function getVideosVideoIdChaptersLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdChaptersLanguageQueryKey>
  >({
    queryKey: getVideosVideoIdChaptersLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':videoId'].chapters[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosVideoIdChaptersLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVideosVideoIdChaptersLanguageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVideosVideoIdChaptersLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostVideosVideoIdChaptersLanguageMutationKey() {
  return ['videos', '/videos/:videoId/chapters/:language', 'POST'] as const
}

export function getPostVideosVideoIdChaptersLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdChaptersLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>,
    ) {
      return parseResponse(client.videos[':videoId'].chapters[':language'].$post(args, options))
    },
  })
}

export function createPostVideosVideoIdChaptersLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosVideoIdChaptersLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteVideosVideoIdChaptersLanguageMutationKey() {
  return ['videos', '/videos/:videoId/chapters/:language', 'DELETE'] as const
}

export function getDeleteVideosVideoIdChaptersLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosVideoIdChaptersLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.videos)[':videoId']['chapters'][':language']['$delete']
      >,
    ) {
      return parseResponse(client.videos[':videoId'].chapters[':language'].$delete(args, options))
    },
  })
}

export function createDeleteVideosVideoIdChaptersLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.videos)[':videoId']['chapters'][':language']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVideosVideoIdChaptersLanguageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostVideosVideoIdSourceMutationKey() {
  return ['videos', '/videos/:videoId/source', 'POST'] as const
}

export function getPostVideosVideoIdSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['source']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['source']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':videoId']['source']['$post']>,
    ) {
      return parseResponse(client.videos[':videoId'].source.$post(args, options))
    },
  })
}

export function createPostVideosVideoIdSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['source']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['source']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosVideoIdSourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideosVideoIdStatusQueryKey(
  args: InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
) {
  return ['videos', '/videos/:videoId/status', args] as const
}

export function getVideosVideoIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdStatusQueryKey>
  >({
    queryKey: getVideosVideoIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videos[':videoId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVideosVideoIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVideosVideoIdStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideosVideoIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostVideosVideoIdThumbnailMutationKey() {
  return ['videos', '/videos/:videoId/thumbnail', 'POST'] as const
}

export function getPostVideosVideoIdThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['thumbnail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosVideoIdThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$post']>,
    ) {
      return parseResponse(client.videos[':videoId'].thumbnail.$post(args, options))
    },
  })
}

export function createPostVideosVideoIdThumbnail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['thumbnail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideosVideoIdThumbnailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchVideosVideoIdThumbnailMutationKey() {
  return ['videos', '/videos/:videoId/thumbnail', 'PATCH'] as const
}

export function getPatchVideosVideoIdThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVideosVideoIdThumbnailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>,
    ) {
      return parseResponse(client.videos[':videoId'].thumbnail.$patch(args, options))
    },
  })
}

export function createPatchVideosVideoIdThumbnail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.videos)[':videoId']['thumbnail']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVideosVideoIdThumbnailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  return ['webhooks', '/webhooks', args] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWebhooksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function createPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhookId', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function createDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
