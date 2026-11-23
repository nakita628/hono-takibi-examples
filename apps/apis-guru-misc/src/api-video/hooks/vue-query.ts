import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsLiveStreamsLiveStreamIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>
  >,
) {
  return ['analytics', '/analytics/live-streams/:liveStreamId', toValue(args)] as const
}

export function getAnalyticsLiveStreamsLiveStreamIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsLiveStreamsLiveStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics['live-streams'][':liveStreamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsLiveStreamsLiveStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsLiveStreamsLiveStreamIdQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics)['live-streams'][':liveStreamId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsLiveStreamsLiveStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsLiveStreamsLiveStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics['live-streams'][':liveStreamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsSessionsSessionIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>
  >,
) {
  return ['analytics', '/analytics/sessions/:sessionId/events', toValue(args)] as const
}

export function getAnalyticsSessionsSessionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsSessionsSessionIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.sessions[':sessionId'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsSessionsSessionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsSessionsSessionIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics.sessions)[':sessionId']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsSessionsSessionIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsSessionsSessionIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.sessions[':sessionId'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>>,
) {
  return ['analytics', '/analytics/videos/:videoId', toValue(args)] as const
}

export function getAnalyticsVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.videos[':videoId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.videos)[':videoId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsVideosVideoIdQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics.videos)[':videoId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.videos[':videoId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['api-key']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.auth)['api-key']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthApiKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.refresh.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthRefreshMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLiveStreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['live-streams']['$get']>>,
) {
  return ['live-streams', '/live-streams', toValue(args)] as const
}

export function getLiveStreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['live-streams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['live-streams'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['live-streams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>
            >
          >,
          ReturnType<typeof getLiveStreamsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['live-streams'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLiveStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['live-streams']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['live-streams']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLiveStreamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLiveStreamsLiveStreamIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>
  >,
) {
  return ['live-streams', '/live-streams/:liveStreamId', toValue(args)] as const
}

export function getLiveStreamsLiveStreamIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveStreamsLiveStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['live-streams'][':liveStreamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveStreamsLiveStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['live-streams'][':liveStreamId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveStreamsLiveStreamIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['live-streams'][':liveStreamId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveStreamsLiveStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveStreamsLiveStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['live-streams'][':liveStreamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteLiveStreamsLiveStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLiveStreamsLiveStreamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchLiveStreamsLiveStreamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLiveStreamsLiveStreamIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostLiveStreamsLiveStreamIdThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLiveStreamsLiveStreamIdThumbnailMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteLiveStreamsLiveStreamIdThumbnail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLiveStreamsLiveStreamIdThumbnailMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.players.$get>>,
) {
  return ['players', '/players', toValue(args)] as const
}

export function getPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.players.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlayers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.players.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>
          >,
          ReturnType<typeof getPlayersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPlayers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.players.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.players.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlayersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlayersPlayerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':playerId']['$get']>>,
) {
  return ['players', '/players/:playerId', toValue(args)] as const
}

export function getPlayersPlayerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':playerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlayersPlayerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.players[':playerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlayersPlayerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.players)[':playerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlayersPlayerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.players)[':playerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlayersPlayerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlayersPlayerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.players[':playerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePlayersPlayerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlayersPlayerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchPlayersPlayerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPlayersPlayerIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPlayersPlayerIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlayersPlayerIdLogoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeletePlayersPlayerIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlayersPlayerIdLogoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.upload.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.upload.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUploadTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['upload-tokens']['$get']>>,
) {
  return ['upload-tokens', '/upload-tokens', toValue(args)] as const
}

export function getUploadTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['upload-tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUploadTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['upload-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUploadTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['upload-tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
            >
          >,
          ReturnType<typeof getUploadTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUploadTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['upload-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUploadTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['upload-tokens']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['upload-tokens']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadTokensMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUploadTokensUploadTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>
  >,
) {
  return ['upload-tokens', '/upload-tokens/:uploadToken', toValue(args)] as const
}

export function getUploadTokensUploadTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUploadTokensUploadTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['upload-tokens'][':uploadToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUploadTokensUploadToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['upload-tokens'][':uploadToken']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUploadTokensUploadTokenQueryKey>
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
          Awaited<ReturnType<(typeof client)['upload-tokens'][':uploadToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUploadTokensUploadTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUploadTokensUploadTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['upload-tokens'][':uploadToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUploadTokensUploadToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUploadTokensUploadTokenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
) {
  return ['videos', '/videos', toValue(args)] as const
}

export function getVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
          ReturnType<typeof getVideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVideos<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videos.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.videos.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVideosVideoIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['$get']>>,
) {
  return ['videos', '/videos/:videoId', toValue(args)] as const
}

export function getVideosVideoIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':videoId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
            >
          >,
          ReturnType<typeof getVideosVideoIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.videos)[':videoId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':videoId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchVideosVideoId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVideosVideoIdCaptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>>,
) {
  return ['videos', '/videos/:videoId/captions', toValue(args)] as const
}

export function getVideosVideoIdCaptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCaptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':videoId'].captions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdCaptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['captions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCaptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCaptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCaptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':videoId'].captions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosVideoIdCaptionsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>
  >,
) {
  return ['videos', '/videos/:videoId/captions/:language', toValue(args)] as const
}

export function getVideosVideoIdCaptionsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdCaptionsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':videoId'].captions[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdCaptionsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdCaptionsLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':videoId']['captions'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdCaptionsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdCaptionsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':videoId'].captions[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVideosVideoIdCaptionsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdCaptionsLanguageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteVideosVideoIdCaptionsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdCaptionsLanguageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchVideosVideoIdCaptionsLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdCaptionsLanguageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVideosVideoIdChaptersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>>,
) {
  return ['videos', '/videos/:videoId/chapters', toValue(args)] as const
}

export function getVideosVideoIdChaptersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdChaptersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':videoId'].chapters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdChapters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['chapters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdChaptersQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdChaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdChaptersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':videoId'].chapters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosVideoIdChaptersLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>
  >,
) {
  return ['videos', '/videos/:videoId/chapters/:language', toValue(args)] as const
}

export function getVideosVideoIdChaptersLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdChaptersLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':videoId'].chapters[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdChaptersLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdChaptersLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':videoId']['chapters'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdChaptersLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdChaptersLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':videoId'].chapters[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVideosVideoIdChaptersLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdChaptersLanguageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteVideosVideoIdChaptersLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVideosVideoIdChaptersLanguageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostVideosVideoIdSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdSourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVideosVideoIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>>,
) {
  return ['videos', '/videos/:videoId/status', toValue(args)] as const
}

export function getVideosVideoIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videos[':videoId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.videos)[':videoId']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.videos)[':videoId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videos[':videoId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVideosVideoIdThumbnail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVideosVideoIdThumbnailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchVideosVideoIdThumbnail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVideosVideoIdThumbnailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhookId', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
