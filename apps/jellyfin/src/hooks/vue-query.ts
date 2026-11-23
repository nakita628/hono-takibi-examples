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

export function getAlbumsKey() {
  return ['Albums'] as const
}

export function getArtistsKey() {
  return ['Artists'] as const
}

export function getAudioKey() {
  return ['Audio'] as const
}

export function getAuthKey() {
  return ['Auth'] as const
}

export function getBackupKey() {
  return ['Backup'] as const
}

export function getBrandingKey() {
  return ['Branding'] as const
}

export function getChannelsKey() {
  return ['Channels'] as const
}

export function getClientLogKey() {
  return ['ClientLog'] as const
}

export function getCollectionsKey() {
  return ['Collections'] as const
}

export function getDevicesKey() {
  return ['Devices'] as const
}

export function getDisplayPreferencesKey() {
  return ['DisplayPreferences'] as const
}

export function getEnvironmentKey() {
  return ['Environment'] as const
}

export function getFallbackFontKey() {
  return ['FallbackFont'] as const
}

export function getGenresKey() {
  return ['Genres'] as const
}

export function getGetUtcTimeKey() {
  return ['GetUtcTime'] as const
}

export function getItemsKey() {
  return ['Items'] as const
}

export function getLibrariesKey() {
  return ['Libraries'] as const
}

export function getLibraryKey() {
  return ['Library'] as const
}

export function getLiveStreamsKey() {
  return ['LiveStreams'] as const
}

export function getLiveTvKey() {
  return ['LiveTv'] as const
}

export function getLocalizationKey() {
  return ['Localization'] as const
}

export function getMediaSegmentsKey() {
  return ['MediaSegments'] as const
}

export function getMoviesKey() {
  return ['Movies'] as const
}

export function getMusicGenresKey() {
  return ['MusicGenres'] as const
}

export function getPackagesKey() {
  return ['Packages'] as const
}

export function getPersonsKey() {
  return ['Persons'] as const
}

export function getPlaybackKey() {
  return ['Playback'] as const
}

export function getPlaylistsKey() {
  return ['Playlists'] as const
}

export function getPluginsKey() {
  return ['Plugins'] as const
}

export function getProvidersKey() {
  return ['Providers'] as const
}

export function getQuickConnectKey() {
  return ['QuickConnect'] as const
}

export function getRepositoriesKey() {
  return ['Repositories'] as const
}

export function getScheduledTasksKey() {
  return ['ScheduledTasks'] as const
}

export function getSearchKey() {
  return ['Search'] as const
}

export function getSessionsKey() {
  return ['Sessions'] as const
}

export function getShowsKey() {
  return ['Shows'] as const
}

export function getSongsKey() {
  return ['Songs'] as const
}

export function getStartupKey() {
  return ['Startup'] as const
}

export function getStudiosKey() {
  return ['Studios'] as const
}

export function getSyncPlayKey() {
  return ['SyncPlay'] as const
}

export function getSystemKey() {
  return ['System'] as const
}

export function getTrailersKey() {
  return ['Trailers'] as const
}

export function getUserFavoriteItemsKey() {
  return ['UserFavoriteItems'] as const
}

export function getUserImageKey() {
  return ['UserImage'] as const
}

export function getUserItemsKey() {
  return ['UserItems'] as const
}

export function getUserPlayedItemsKey() {
  return ['UserPlayedItems'] as const
}

export function getUserViewsKey() {
  return ['UserViews'] as const
}

export function getUsersKey() {
  return ['Users'] as const
}

export function getVideosKey() {
  return ['Videos'] as const
}

export function getYearsKey() {
  return ['Years'] as const
}

export function getWebKey() {
  return ['web'] as const
}

export function getSystemActivityLogEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.System.ActivityLog.Entries.$get>>,
) {
  return ['System', '/System/ActivityLog/Entries', toValue(args)] as const
}

export function getSystemActivityLogEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.System.ActivityLog.Entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemActivityLogEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.ActivityLog.Entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemActivityLogEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.System.ActivityLog.Entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>
              >
            >
          >,
          ReturnType<typeof getSystemActivityLogEntriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.System.ActivityLog.Entries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemActivityLogEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemActivityLogEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.System.ActivityLog.Entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthKeysQueryKey() {
  return ['Auth', '/Auth/Keys'] as const
}

export function getAuthKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Auth.Keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>
          >,
          ReturnType<typeof getAuthKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Auth.Keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthKeysMutationKey() {
  return ['Auth', '/Auth/Keys', 'POST'] as const
}

export function getPostAuthKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.Auth.Keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Auth.Keys.$post>) {
      return parseResponse(client.Auth.Keys.$post(args, options))
    },
  })
}

export function usePostAuthKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Keys.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Auth.Keys.$post>,
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
  const mutationDefaults = getPostAuthKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthKeysKeyMutationKey() {
  return ['Auth', '/Auth/Keys/:key', 'DELETE'] as const
}

export function getDeleteAuthKeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Auth.Keys)[':key']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Auth.Keys)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Auth.Keys)[':key']['$delete']>) {
      return parseResponse(client.Auth.Keys[':key'].$delete(args, options))
    },
  })
}

export function useDeleteAuthKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Auth.Keys)[':key']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Auth.Keys)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteAuthKeysKeyMutationOptions<TError, TOnMutateResult>(
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

export function getArtistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Artists.$get>>,
) {
  return ['Artists', '/Artists', toValue(args)] as const
}

export function getArtistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Artists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Artists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Artists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>
          >,
          ReturnType<typeof getArtistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Artists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Artists)[':name']['$get']>>,
) {
  return ['Artists', '/Artists/:name', toValue(args)] as const
}

export function getArtistsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Artists)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Artists[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Artists)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getArtistsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Artists)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Artists[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsAlbumArtistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Artists.AlbumArtists.$get>>,
) {
  return ['Artists', '/Artists/AlbumArtists', toValue(args)] as const
}

export function getArtistsAlbumArtistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Artists.AlbumArtists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsAlbumArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Artists.AlbumArtists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsAlbumArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Artists.AlbumArtists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>
            >
          >,
          ReturnType<typeof getArtistsAlbumArtistsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Artists.AlbumArtists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsAlbumArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsAlbumArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Artists.AlbumArtists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioItemIdStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>>,
) {
  return ['Audio', '/Audio/:itemId/stream', toValue(args)] as const
}

export function getAudioItemIdStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioItemIdStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Audio[':itemId'].stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioItemIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['stream']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioItemIdStreamQueryKey>
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
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioItemIdStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Audio[':itemId'].stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadAudioItemIdStreamMutationKey() {
  return ['Audio', '/Audio/:itemId/stream', 'HEAD'] as const
}

export function getHeadAudioItemIdStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['stream']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadAudioItemIdStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Audio)[':itemId']['stream']['$head']>) {
      return parseResponse(client.Audio[':itemId'].stream.$head(args, options))
    },
  })
}

export function useHeadAudioItemIdStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Audio)[':itemId']['stream']['$head']>,
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
  const mutationDefaults = getHeadAudioItemIdStreamMutationOptions<TError, TOnMutateResult>(
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

export function getAudioItemIdStreamContainerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>
  >,
) {
  return ['Audio', '/Audio/:itemId/stream.:container', toValue(args)] as const
}

export function getAudioItemIdStreamContainerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioItemIdStreamContainerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Audio[':itemId']['stream.:container'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioItemIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioItemIdStreamContainerQueryKey>
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
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdStreamContainerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioItemIdStreamContainerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Audio[':itemId']['stream.:container'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadAudioItemIdStreamContainerMutationKey() {
  return ['Audio', '/Audio/:itemId/stream.:container', 'HEAD'] as const
}

export function getHeadAudioItemIdStreamContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadAudioItemIdStreamContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$head']>,
    ) {
      return parseResponse(client.Audio[':itemId']['stream.:container'].$head(args, options))
    },
  })
}

export function useHeadAudioItemIdStreamContainer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['stream.:container']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Audio)[':itemId']['stream.:container']['$head']>,
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
  const mutationDefaults = getHeadAudioItemIdStreamContainerMutationOptions<
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

export function getBackupQueryKey() {
  return ['Backup', '/Backup'] as const
}

export function getBackupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBackupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Backup.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBackup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
          ReturnType<typeof getBackupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBackupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Backup.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBackupCreateMutationKey() {
  return ['Backup', '/Backup/Create', 'POST'] as const
}

export function getPostBackupCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.Backup.Create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Backup.Create.$post>) {
      return parseResponse(client.Backup.Create.$post(args, options))
    },
  })
}

export function usePostBackupCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Backup.Create.$post>,
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
  const mutationDefaults = getPostBackupCreateMutationOptions<TError, TOnMutateResult>(
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

export function getBackupManifestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Backup.Manifest.$get>>,
) {
  return ['Backup', '/Backup/Manifest', toValue(args)] as const
}

export function getBackupManifestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Backup.Manifest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBackupManifestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Backup.Manifest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBackupManifest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Backup.Manifest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>
            >
          >,
          ReturnType<typeof getBackupManifestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Manifest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBackupManifestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBackupManifestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Backup.Manifest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBackupRestoreMutationKey() {
  return ['Backup', '/Backup/Restore', 'POST'] as const
}

export function getPostBackupRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Restore.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Backup.Restore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupRestoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Backup.Restore.$post>) {
      return parseResponse(client.Backup.Restore.$post(args, options))
    },
  })
}

export function usePostBackupRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Backup.Restore.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Backup.Restore.$post>,
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
  const mutationDefaults = getPostBackupRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getBrandingConfigurationQueryKey() {
  return ['Branding', '/Branding/Configuration'] as const
}

export function getBrandingConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBrandingConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Branding.Configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandingConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
            >
          >,
          ReturnType<typeof getBrandingConfigurationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBrandingConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Branding.Configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrandingCssQueryKey() {
  return ['Branding', '/Branding/Css'] as const
}

export function getBrandingCssQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBrandingCssQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Branding.Css.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBrandingCss<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>
          >,
          ReturnType<typeof getBrandingCssQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Css.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrandingCssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBrandingCssQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Branding.Css.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrandingCssCssQueryKey() {
  return ['Branding', '/Branding/Css.css'] as const
}

export function getBrandingCssCssQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBrandingCssCssQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Branding['Css.css'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandingCssCss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
            >
          >,
          ReturnType<typeof getBrandingCssCssQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Branding)['Css.css']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingCssCssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBrandingCssCssQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Branding['Css.css'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Channels.$get>>,
) {
  return ['Channels', '/Channels', toValue(args)] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>
  >,
) {
  return ['Channels', '/Channels/:channelId/Features', toValue(args)] as const
}

export function getChannelsChannelIdFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Channels[':channelId'].Features.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Channels)[':channelId']['Features']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.Channels)[':channelId']['Features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Channels[':channelId'].Features.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsChannelIdItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>>,
) {
  return ['Channels', '/Channels/:channelId/Items', toValue(args)] as const
}

export function getChannelsChannelIdItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Channels[':channelId'].Items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Channels)[':channelId']['Items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.Channels)[':channelId']['Items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Channels[':channelId'].Items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsFeaturesQueryKey() {
  return ['Channels', '/Channels/Features'] as const
}

export function getChannelsFeaturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChannelsFeaturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Channels.Features.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>
            >
          >,
          ReturnType<typeof getChannelsFeaturesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Features.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChannelsFeaturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Channels.Features.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsItemsLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Channels.Items.Latest.$get>>,
) {
  return ['Channels', '/Channels/Items/Latest', toValue(args)] as const
}

export function getChannelsItemsLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Channels.Items.Latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsItemsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Channels.Items.Latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsItemsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Channels.Items.Latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
            >
          >,
          ReturnType<typeof getChannelsItemsLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Channels.Items.Latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsItemsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsItemsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Channels.Items.Latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClientLogDocumentMutationKey() {
  return ['ClientLog', '/ClientLog/Document', 'POST'] as const
}

export function getPostClientLogDocumentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ClientLog.Document.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ClientLog.Document.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientLogDocumentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ClientLog.Document.$post>) {
      return parseResponse(client.ClientLog.Document.$post(args, options))
    },
  })
}

export function usePostClientLogDocument<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ClientLog.Document.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ClientLog.Document.$post>,
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
  const mutationDefaults = getPostClientLogDocumentMutationOptions<TError, TOnMutateResult>(
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

export function getPostCollectionsMutationKey() {
  return ['Collections', '/Collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.Collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Collections.$post>) {
      return parseResponse(client.Collections.$post(args, options))
    },
  })
}

export function usePostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Collections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Collections.$post>,
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
  const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCollectionsCollectionIdItemsMutationKey() {
  return ['Collections', '/Collections/:collectionId/Items', 'POST'] as const
}

export function getPostCollectionsCollectionIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Collections)[':collectionId']['Items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$post']>,
    ) {
      return parseResponse(client.Collections[':collectionId'].Items.$post(args, options))
    },
  })
}

export function usePostCollectionsCollectionIdItems<
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
                    ReturnType<(typeof client.Collections)[':collectionId']['Items']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$post']>,
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
  const mutationDefaults = getPostCollectionsCollectionIdItemsMutationOptions<
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

export function getDeleteCollectionsCollectionIdItemsMutationKey() {
  return ['Collections', '/Collections/:collectionId/Items', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Collections)[':collectionId']['Items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$delete']>,
    ) {
      return parseResponse(client.Collections[':collectionId'].Items.$delete(args, options))
    },
  })
}

export function useDeleteCollectionsCollectionIdItems<
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
                    ReturnType<(typeof client.Collections)[':collectionId']['Items']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Collections)[':collectionId']['Items']['$delete']>,
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
  const mutationDefaults = getDeleteCollectionsCollectionIdItemsMutationOptions<
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

export function getSystemConfigurationQueryKey() {
  return ['System', '/System/Configuration'] as const
}

export function getSystemConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>
            >
          >,
          ReturnType<typeof getSystemConfigurationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemConfigurationMutationKey() {
  return ['System', '/System/Configuration', 'POST'] as const
}

export function getPostSystemConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.System.Configuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.System.Configuration.$post>) {
      return parseResponse(client.System.Configuration.$post(args, options))
    },
  })
}

export function usePostSystemConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.System.Configuration.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.System.Configuration.$post>,
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
  const mutationDefaults = getPostSystemConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getSystemConfigurationKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.System.Configuration)[':key']['$get']>>,
) {
  return ['System', '/System/Configuration/:key', toValue(args)] as const
}

export function getSystemConfigurationKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.System.Configuration)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemConfigurationKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Configuration[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConfigurationKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.System.Configuration)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemConfigurationKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigurationKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemConfigurationKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Configuration[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemConfigurationKeyMutationKey() {
  return ['System', '/System/Configuration/:key', 'POST'] as const
}

export function getPostSystemConfigurationKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.System.Configuration)[':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConfigurationKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.System.Configuration)[':key']['$post']>,
    ) {
      return parseResponse(client.System.Configuration[':key'].$post(args, options))
    },
  })
}

export function usePostSystemConfigurationKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.System.Configuration)[':key']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.System.Configuration)[':key']['$post']>,
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
  const mutationDefaults = getPostSystemConfigurationKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemConfigurationBrandingMutationKey() {
  return ['System', '/System/Configuration/Branding', 'POST'] as const
}

export function getPostSystemConfigurationBrandingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.System.Configuration.Branding.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.System.Configuration.Branding.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConfigurationBrandingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.System.Configuration.Branding.$post>) {
      return parseResponse(client.System.Configuration.Branding.$post(args, options))
    },
  })
}

export function usePostSystemConfigurationBranding<
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
                  Awaited<ReturnType<typeof client.System.Configuration.Branding.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.System.Configuration.Branding.$post>,
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
  const mutationDefaults = getPostSystemConfigurationBrandingMutationOptions<
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

export function getSystemConfigurationMetadataOptionsDefaultQueryKey() {
  return ['System', '/System/Configuration/MetadataOptions/Default'] as const
}

export function getSystemConfigurationMetadataOptionsDefaultQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getSystemConfigurationMetadataOptionsDefaultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Configuration.MetadataOptions.Default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConfigurationMetadataOptionsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
              >
            >
          >,
          ReturnType<typeof getSystemConfigurationMetadataOptionsDefaultQueryKey>
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
          Awaited<ReturnType<typeof client.System.Configuration.MetadataOptions.Default.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConfigurationMetadataOptionsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConfigurationMetadataOptionsDefaultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Configuration.MetadataOptions.Default.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebConfigurationPageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.web.ConfigurationPage.$get>>,
) {
  return ['web', '/web/ConfigurationPage', toValue(args)] as const
}

export function getWebConfigurationPageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.web.ConfigurationPage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebConfigurationPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.web.ConfigurationPage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebConfigurationPage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.web.ConfigurationPage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
            >
          >,
          ReturnType<typeof getWebConfigurationPageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebConfigurationPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebConfigurationPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.web.ConfigurationPage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebConfigurationPagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.web.ConfigurationPages.$get>>,
) {
  return ['web', '/web/ConfigurationPages', toValue(args)] as const
}

export function getWebConfigurationPagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.web.ConfigurationPages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebConfigurationPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.web.ConfigurationPages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebConfigurationPages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.web.ConfigurationPages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
            >
          >,
          ReturnType<typeof getWebConfigurationPagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.web.ConfigurationPages.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebConfigurationPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebConfigurationPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.web.ConfigurationPages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.$get>>,
) {
  return ['Devices', '/Devices', toValue(args)] as const
}

export function getDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Devices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>
          >,
          ReturnType<typeof getDevicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDevicesMutationKey() {
  return ['Devices', '/Devices', 'DELETE'] as const
}

export function getDeleteDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.Devices.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Devices.$delete>) {
      return parseResponse(client.Devices.$delete(args, options))
    },
  })
}

export function useDeleteDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Devices.$delete>,
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
  const mutationDefaults = getDeleteDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDevicesInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.Info.$get>>,
) {
  return ['Devices', '/Devices/Info', toValue(args)] as const
}

export function getDevicesInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.Info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Devices.Info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDevicesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.Info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>
          >,
          ReturnType<typeof getDevicesInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Devices.Info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.Options.$get>>,
) {
  return ['Devices', '/Devices/Options', toValue(args)] as const
}

export function getDevicesOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.Options.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Devices.Options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Devices.Options.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>
            >
          >,
          ReturnType<typeof getDevicesOptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Devices.Options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDevicesOptionsMutationKey() {
  return ['Devices', '/Devices/Options', 'POST'] as const
}

export function getPostDevicesOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Devices.Options.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesOptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Devices.Options.$post>) {
      return parseResponse(client.Devices.Options.$post(args, options))
    },
  })
}

export function usePostDevicesOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Devices.Options.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Devices.Options.$post>,
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
  const mutationDefaults = getPostDevicesOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getDisplayPreferencesDisplayPreferencesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>
  >,
) {
  return ['DisplayPreferences', '/DisplayPreferences/:displayPreferencesId', toValue(args)] as const
}

export function getDisplayPreferencesDisplayPreferencesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisplayPreferencesDisplayPreferencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.DisplayPreferences[':displayPreferencesId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDisplayPreferencesDisplayPreferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>
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
                  ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDisplayPreferencesDisplayPreferencesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisplayPreferencesDisplayPreferencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisplayPreferencesDisplayPreferencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.DisplayPreferences[':displayPreferencesId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDisplayPreferencesDisplayPreferencesIdMutationKey() {
  return ['DisplayPreferences', '/DisplayPreferences/:displayPreferencesId', 'POST'] as const
}

export function getPostDisplayPreferencesDisplayPreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDisplayPreferencesDisplayPreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>,
    ) {
      return parseResponse(client.DisplayPreferences[':displayPreferencesId'].$post(args, options))
    },
  })
}

export function usePostDisplayPreferencesDisplayPreferencesId<
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
                    ReturnType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.DisplayPreferences)[':displayPreferencesId']['$post']>,
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
  const mutationDefaults = getPostDisplayPreferencesDisplayPreferencesIdMutationOptions<
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

export function getEnvironmentDefaultDirectoryBrowserQueryKey() {
  return ['Environment', '/Environment/DefaultDirectoryBrowser'] as const
}

export function getEnvironmentDefaultDirectoryBrowserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEnvironmentDefaultDirectoryBrowserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Environment.DefaultDirectoryBrowser.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentDefaultDirectoryBrowser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
              >
            >
          >,
          ReturnType<typeof getEnvironmentDefaultDirectoryBrowserQueryKey>
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
          Awaited<ReturnType<typeof client.Environment.DefaultDirectoryBrowser.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentDefaultDirectoryBrowserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEnvironmentDefaultDirectoryBrowserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Environment.DefaultDirectoryBrowser.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnvironmentDirectoryContentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Environment.DirectoryContents.$get>>,
) {
  return ['Environment', '/Environment/DirectoryContents', toValue(args)] as const
}

export function getEnvironmentDirectoryContentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Environment.DirectoryContents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvironmentDirectoryContentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Environment.DirectoryContents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentDirectoryContents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Environment.DirectoryContents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>
              >
            >
          >,
          ReturnType<typeof getEnvironmentDirectoryContentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.DirectoryContents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentDirectoryContentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvironmentDirectoryContentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Environment.DirectoryContents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnvironmentDrivesQueryKey() {
  return ['Environment', '/Environment/Drives'] as const
}

export function getEnvironmentDrivesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEnvironmentDrivesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Environment.Drives.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentDrives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>
            >
          >,
          ReturnType<typeof getEnvironmentDrivesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.Drives.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentDrivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEnvironmentDrivesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Environment.Drives.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnvironmentParentPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Environment.ParentPath.$get>>,
) {
  return ['Environment', '/Environment/ParentPath', toValue(args)] as const
}

export function getEnvironmentParentPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Environment.ParentPath.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnvironmentParentPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Environment.ParentPath.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentParentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Environment.ParentPath.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
            >
          >,
          ReturnType<typeof getEnvironmentParentPathQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ParentPath.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentParentPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnvironmentParentPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Environment.ParentPath.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEnvironmentValidatePathMutationKey() {
  return ['Environment', '/Environment/ValidatePath', 'POST'] as const
}

export function getPostEnvironmentValidatePathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Environment.ValidatePath.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Environment.ValidatePath.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentValidatePathMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Environment.ValidatePath.$post>) {
      return parseResponse(client.Environment.ValidatePath.$post(args, options))
    },
  })
}

export function usePostEnvironmentValidatePath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Environment.ValidatePath.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Environment.ValidatePath.$post>,
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
  const mutationDefaults = getPostEnvironmentValidatePathMutationOptions<TError, TOnMutateResult>(
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

export function getItemsFiltersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Filters.$get>>,
) {
  return ['Items', '/Items/Filters', toValue(args)] as const
}

export function getItemsFiltersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Filters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.Filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsFilters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Filters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
          >,
          ReturnType<typeof getItemsFiltersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.Filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsFilters2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Filters2.$get>>,
) {
  return ['Items', '/Items/Filters2', toValue(args)] as const
}

export function getItemsFilters2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Filters2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsFilters2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.Filters2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsFilters2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Filters2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
          >,
          ReturnType<typeof getItemsFilters2QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Filters2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsFilters2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsFilters2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.Filters2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Genres.$get>>,
) {
  return ['Genres', '/Genres', toValue(args)] as const
}

export function getGenresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Genres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Genres.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenres<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Genres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
          ReturnType<typeof getGenresQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Genres.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresGenreNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Genres)[':genreName']['$get']>>,
) {
  return ['Genres', '/Genres/:genreName', toValue(args)] as const
}

export function getGenresGenreNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Genres)[':genreName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresGenreNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Genres[':genreName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenresGenreName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Genres)[':genreName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenresGenreNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Genres)[':genreName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenresGenreNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresGenreNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Genres[':genreName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsNameImagesImageTypeImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
) {
  return ['Artists', '/Artists/:name/Images/:imageType/:imageIndex', toValue(args)] as const
}

export function getArtistsNameImagesImageTypeImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsNameImagesImageTypeImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Artists[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsNameImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getArtistsNameImagesImageTypeImageIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsNameImagesImageTypeImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsNameImagesImageTypeImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Artists[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadArtistsNameImagesImageTypeImageIndexMutationKey() {
  return ['Artists', '/Artists/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadArtistsNameImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadArtistsNameImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.Artists[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function useHeadArtistsNameImagesImageTypeImageIndex<
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
                    (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Artists)[':name']['Images'][':imageType'][':imageIndex']['$head']
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
  const mutationDefaults = getHeadArtistsNameImagesImageTypeImageIndexMutationOptions<
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

export function getBrandingSplashscreenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Branding.Splashscreen.$get>>,
) {
  return ['Branding', '/Branding/Splashscreen', toValue(args)] as const
}

export function getBrandingSplashscreenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Branding.Splashscreen.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrandingSplashscreenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Branding.Splashscreen.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrandingSplashscreen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Branding.Splashscreen.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>
            >
          >,
          ReturnType<typeof getBrandingSplashscreenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBrandingSplashscreenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrandingSplashscreenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Branding.Splashscreen.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBrandingSplashscreenMutationKey() {
  return ['Branding', '/Branding/Splashscreen', 'POST'] as const
}

export function getPostBrandingSplashscreenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Branding.Splashscreen.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBrandingSplashscreenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Branding.Splashscreen.$post>) {
      return parseResponse(client.Branding.Splashscreen.$post(args, options))
    },
  })
}

export function usePostBrandingSplashscreen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Branding.Splashscreen.$post>,
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
  const mutationDefaults = getPostBrandingSplashscreenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBrandingSplashscreenMutationKey() {
  return ['Branding', '/Branding/Splashscreen', 'DELETE'] as const
}

export function getDeleteBrandingSplashscreenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Branding.Splashscreen.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteBrandingSplashscreenMutationKey(),
    async mutationFn() {
      return parseResponse(client.Branding.Splashscreen.$delete(undefined, options))
    },
  })
}

export function useDeleteBrandingSplashscreen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Branding.Splashscreen.$delete>>
                >
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteBrandingSplashscreenMutationOptions<TError, TOnMutateResult>(
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

export function getGenresNameImagesImageTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>
  >,
) {
  return ['Genres', '/Genres/:name/Images/:imageType', toValue(args)] as const
}

export function getGenresNameImagesImageTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresNameImagesImageTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Genres[':name'].Images[':imageType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenresNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGenresNameImagesImageTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenresNameImagesImageTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresNameImagesImageTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Genres[':name'].Images[':imageType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadGenresNameImagesImageTypeMutationKey() {
  return ['Genres', '/Genres/:name/Images/:imageType', 'HEAD'] as const
}

export function getHeadGenresNameImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadGenresNameImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>,
    ) {
      return parseResponse(client.Genres[':name'].Images[':imageType'].$head(args, options))
    },
  })
}

export function useHeadGenresNameImagesImageType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType']['$head']>,
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
  const mutationDefaults = getHeadGenresNameImagesImageTypeMutationOptions<TError, TOnMutateResult>(
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

export function getGenresNameImagesImageTypeImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']>
  >,
) {
  return ['Genres', '/Genres/:name/Images/:imageType/:imageIndex', toValue(args)] as const
}

export function getGenresNameImagesImageTypeImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresNameImagesImageTypeImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Genres[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenresNameImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGenresNameImagesImageTypeImageIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenresNameImagesImageTypeImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresNameImagesImageTypeImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Genres[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadGenresNameImagesImageTypeImageIndexMutationKey() {
  return ['Genres', '/Genres/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadGenresNameImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadGenresNameImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.Genres[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function useHeadGenresNameImagesImageTypeImageIndex<
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
                    (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Genres)[':name']['Images'][':imageType'][':imageIndex']['$head']
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
  const mutationDefaults = getHeadGenresNameImagesImageTypeImageIndexMutationOptions<
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

export function getItemsItemIdImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>>,
) {
  return ['Items', '/Items/:itemId/Images', toValue(args)] as const
}

export function getItemsItemIdImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Images']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Images']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdImagesImageTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/Images/:imageType', toValue(args)] as const
}

export function getItemsItemIdImagesImageTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdImagesImageTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>
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
                  ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getItemsItemIdImagesImageTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdImagesImageTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdImagesImageTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Images[':imageType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsItemIdImagesImageTypeMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType', 'POST'] as const
}

export function getPostItemsItemIdImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>,
    ) {
      return parseResponse(client.Items[':itemId'].Images[':imageType'].$post(args, options))
    },
  })
}

export function usePostItemsItemIdImagesImageType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$post']>,
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
  const mutationDefaults = getPostItemsItemIdImagesImageTypeMutationOptions<
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

export function getDeleteItemsItemIdImagesImageTypeMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType', 'DELETE'] as const
}

export function getDeleteItemsItemIdImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsItemIdImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>,
    ) {
      return parseResponse(client.Items[':itemId'].Images[':imageType'].$delete(args, options))
    },
  })
}

export function useDeleteItemsItemIdImagesImageType<
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
                    ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$delete']>,
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
  const mutationDefaults = getDeleteItemsItemIdImagesImageTypeMutationOptions<
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

export function getHeadItemsItemIdImagesImageTypeMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType', 'HEAD'] as const
}

export function getHeadItemsItemIdImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadItemsItemIdImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>,
    ) {
      return parseResponse(client.Items[':itemId'].Images[':imageType'].$head(args, options))
    },
  })
}

export function useHeadItemsItemIdImagesImageType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['Images'][':imageType']['$head']>,
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
  const mutationDefaults = getHeadItemsItemIdImagesImageTypeMutationOptions<
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

export function getItemsItemIdImagesImageTypeImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
) {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', toValue(args)] as const
}

export function getItemsItemIdImagesImageTypeImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdImagesImageTypeImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getItemsItemIdImagesImageTypeImageIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdImagesImageTypeImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdImagesImageTypeImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsItemIdImagesImageTypeImageIndexMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', 'POST'] as const
}

export function getPostItemsItemIdImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
      >,
    ) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'].$post(args, options),
      )
    },
  })
}

export function usePostItemsItemIdImagesImageTypeImageIndex<
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
                      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$post']
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
  const mutationDefaults = getPostItemsItemIdImagesImageTypeImageIndexMutationOptions<
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

export function getDeleteItemsItemIdImagesImageTypeImageIndexMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', 'DELETE'] as const
}

export function getDeleteItemsItemIdImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsItemIdImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
      >,
    ) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'].$delete(args, options),
      )
    },
  })
}

export function useDeleteItemsItemIdImagesImageTypeImageIndex<
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
                      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$delete']
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
  const mutationDefaults = getDeleteItemsItemIdImagesImageTypeImageIndexMutationOptions<
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

export function getHeadItemsItemIdImagesImageTypeImageIndexMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadItemsItemIdImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadItemsItemIdImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function useHeadItemsItemIdImagesImageTypeImageIndex<
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
                    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['$head']
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
  const mutationDefaults = getHeadItemsItemIdImagesImageTypeImageIndexMutationOptions<
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

export function getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
    >
  >,
) {
  return [
    'Items',
    '/Items/:itemId/Images/:imageType/:imageIndex/:tag/:format/:maxWidth/:maxHeight/:percentPlayed/:unplayedCount',
    toValue(args),
  ] as const
}

export function getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][
          ':maxHeight'
        ][':percentPlayed'][':unplayedCount'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][
            ':maxWidth'
          ][':maxHeight'][':percentPlayed'][':unplayedCount'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountMutationKey() {
  return [
    'Items',
    '/Items/:itemId/Images/:imageType/:imageIndex/:tag/:format/:maxWidth/:maxHeight/:percentPlayed/:unplayedCount',
    'HEAD',
  ] as const
}

export function getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
      >,
    ) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][
          ':maxHeight'
        ][':percentPlayed'][':unplayedCount'].$head(args, options),
      )
    },
  })
}

export function useHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCount<
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
                    (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex'][':tag'][':format'][':maxWidth'][':maxHeight'][':percentPlayed'][':unplayedCount']['$head']
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
  const mutationDefaults =
    getHeadItemsItemIdImagesImageTypeImageIndexTagFormatMaxWidthMaxHeightPercentPlayedUnplayedCountMutationOptions<
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

export function getPostItemsItemIdImagesImageTypeImageIndexIndexMutationKey() {
  return ['Items', '/Items/:itemId/Images/:imageType/:imageIndex/Index', 'POST'] as const
}

export function getPostItemsItemIdImagesImageTypeImageIndexIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdImagesImageTypeImageIndexIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
      >,
    ) {
      return parseResponse(
        client.Items[':itemId'].Images[':imageType'][':imageIndex'].Index.$post(args, options),
      )
    },
  })
}

export function usePostItemsItemIdImagesImageTypeImageIndexIndex<
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
                      (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.Items)[':itemId']['Images'][':imageType'][':imageIndex']['Index']['$post']
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
  const mutationDefaults = getPostItemsItemIdImagesImageTypeImageIndexIndexMutationOptions<
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

export function getMusicGenresNameImagesImageTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
  >,
) {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType', toValue(args)] as const
}

export function getMusicGenresNameImagesImageTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMusicGenresNameImagesImageTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.MusicGenres[':name'].Images[':imageType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMusicGenresNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
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
                  ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMusicGenresNameImagesImageTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresNameImagesImageTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMusicGenresNameImagesImageTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.MusicGenres[':name'].Images[':imageType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadMusicGenresNameImagesImageTypeMutationKey() {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType', 'HEAD'] as const
}

export function getHeadMusicGenresNameImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadMusicGenresNameImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>,
    ) {
      return parseResponse(client.MusicGenres[':name'].Images[':imageType'].$head(args, options))
    },
  })
}

export function useHeadMusicGenresNameImagesImageType<
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
                  ReturnType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.MusicGenres)[':name']['Images'][':imageType']['$head']>,
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
  const mutationDefaults = getHeadMusicGenresNameImagesImageTypeMutationOptions<
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

export function getMusicGenresNameImagesImageTypeImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
) {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType/:imageIndex', toValue(args)] as const
}

export function getMusicGenresNameImagesImageTypeImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMusicGenresNameImagesImageTypeImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMusicGenresNameImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
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
                  ReturnType<
                    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMusicGenresNameImagesImageTypeImageIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresNameImagesImageTypeImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMusicGenresNameImagesImageTypeImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadMusicGenresNameImagesImageTypeImageIndexMutationKey() {
  return ['MusicGenres', '/MusicGenres/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadMusicGenresNameImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadMusicGenresNameImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.MusicGenres[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function useHeadMusicGenresNameImagesImageTypeImageIndex<
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
                    (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.MusicGenres)[':name']['Images'][':imageType'][':imageIndex']['$head']
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
  const mutationDefaults = getHeadMusicGenresNameImagesImageTypeImageIndexMutationOptions<
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

export function getPersonsNameImagesImageTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>
  >,
) {
  return ['Persons', '/Persons/:name/Images/:imageType', toValue(args)] as const
}

export function getPersonsNameImagesImageTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonsNameImagesImageTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Persons[':name'].Images[':imageType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonsNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>
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
                  ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPersonsNameImagesImageTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonsNameImagesImageTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonsNameImagesImageTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Persons[':name'].Images[':imageType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadPersonsNameImagesImageTypeMutationKey() {
  return ['Persons', '/Persons/:name/Images/:imageType', 'HEAD'] as const
}

export function getHeadPersonsNameImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadPersonsNameImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>,
    ) {
      return parseResponse(client.Persons[':name'].Images[':imageType'].$head(args, options))
    },
  })
}

export function useHeadPersonsNameImagesImageType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Persons)[':name']['Images'][':imageType']['$head']>,
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
  const mutationDefaults = getHeadPersonsNameImagesImageTypeMutationOptions<
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

export function getPersonsNameImagesImageTypeImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
) {
  return ['Persons', '/Persons/:name/Images/:imageType/:imageIndex', toValue(args)] as const
}

export function getPersonsNameImagesImageTypeImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonsNameImagesImageTypeImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Persons[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonsNameImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPersonsNameImagesImageTypeImageIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonsNameImagesImageTypeImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonsNameImagesImageTypeImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Persons[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadPersonsNameImagesImageTypeImageIndexMutationKey() {
  return ['Persons', '/Persons/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadPersonsNameImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadPersonsNameImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.Persons[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function useHeadPersonsNameImagesImageTypeImageIndex<
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
                    (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Persons)[':name']['Images'][':imageType'][':imageIndex']['$head']
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
  const mutationDefaults = getHeadPersonsNameImagesImageTypeImageIndexMutationOptions<
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

export function getStudiosNameImagesImageTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>
  >,
) {
  return ['Studios', '/Studios/:name/Images/:imageType', toValue(args)] as const
}

export function getStudiosNameImagesImageTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiosNameImagesImageTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Studios[':name'].Images[':imageType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiosNameImagesImageType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>
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
                  ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getStudiosNameImagesImageTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiosNameImagesImageTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiosNameImagesImageTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Studios[':name'].Images[':imageType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadStudiosNameImagesImageTypeMutationKey() {
  return ['Studios', '/Studios/:name/Images/:imageType', 'HEAD'] as const
}

export function getHeadStudiosNameImagesImageTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadStudiosNameImagesImageTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>,
    ) {
      return parseResponse(client.Studios[':name'].Images[':imageType'].$head(args, options))
    },
  })
}

export function useHeadStudiosNameImagesImageType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Studios)[':name']['Images'][':imageType']['$head']>,
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
  const mutationDefaults = getHeadStudiosNameImagesImageTypeMutationOptions<
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

export function getStudiosNameImagesImageTypeImageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
) {
  return ['Studios', '/Studios/:name/Images/:imageType/:imageIndex', toValue(args)] as const
}

export function getStudiosNameImagesImageTypeImageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiosNameImagesImageTypeImageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Studios[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiosNameImagesImageTypeImageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStudiosNameImagesImageTypeImageIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiosNameImagesImageTypeImageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiosNameImagesImageTypeImageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Studios[':name'].Images[':imageType'][':imageIndex'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadStudiosNameImagesImageTypeImageIndexMutationKey() {
  return ['Studios', '/Studios/:name/Images/:imageType/:imageIndex', 'HEAD'] as const
}

export function getHeadStudiosNameImagesImageTypeImageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
    >,
    TOnMutateResult
  >({
    mutationKey: getHeadStudiosNameImagesImageTypeImageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
      >,
    ) {
      return parseResponse(
        client.Studios[':name'].Images[':imageType'][':imageIndex'].$head(args, options),
      )
    },
  })
}

export function useHeadStudiosNameImagesImageTypeImageIndex<
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
                    (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Studios)[':name']['Images'][':imageType'][':imageIndex']['$head']
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
  const mutationDefaults = getHeadStudiosNameImagesImageTypeImageIndexMutationOptions<
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

export function getUserImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserImage.$get>>,
) {
  return ['UserImage', '/UserImage', toValue(args)] as const
}

export function getUserImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserImage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.UserImage.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserImage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>
          >,
          ReturnType<typeof getUserImageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.UserImage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserImageMutationKey() {
  return ['UserImage', '/UserImage', 'POST'] as const
}

export function getPostUserImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.UserImage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UserImage.$post>) {
      return parseResponse(client.UserImage.$post(args, options))
    },
  })
}

export function usePostUserImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.UserImage.$post>,
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
  const mutationDefaults = getPostUserImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserImageMutationKey() {
  return ['UserImage', '/UserImage', 'DELETE'] as const
}

export function getDeleteUserImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.UserImage.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UserImage.$delete>) {
      return parseResponse(client.UserImage.$delete(args, options))
    },
  })
}

export function useDeleteUserImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.UserImage.$delete>,
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
  const mutationDefaults = getDeleteUserImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHeadUserImageMutationKey() {
  return ['UserImage', '/UserImage', 'HEAD'] as const
}

export function getHeadUserImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$head>>>>>,
    TError,
    InferRequestType<typeof client.UserImage.$head>,
    TOnMutateResult
  >({
    mutationKey: getHeadUserImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UserImage.$head>) {
      return parseResponse(client.UserImage.$head(args, options))
    },
  })
}

export function useHeadUserImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserImage.$head>>>>
          >,
          TError,
          InferRequestType<typeof client.UserImage.$head>,
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
  const mutationDefaults = getHeadUserImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlbumsItemIdInstantMixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>,
) {
  return ['Albums', '/Albums/:itemId/InstantMix', toValue(args)] as const
}

export function getAlbumsItemIdInstantMixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsItemIdInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Albums[':itemId'].InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlbumsItemIdInstantMixQueryKey>
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
          Awaited<ReturnType<(typeof client.Albums)[':itemId']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsItemIdInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsItemIdInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Albums[':itemId'].InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsItemIdInstantMixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>
  >,
) {
  return ['Artists', '/Artists/:itemId/InstantMix', toValue(args)] as const
}

export function getArtistsItemIdInstantMixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsItemIdInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Artists[':itemId'].InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArtistsItemIdInstantMixQueryKey>
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
          Awaited<ReturnType<(typeof client.Artists)[':itemId']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsItemIdInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsItemIdInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Artists[':itemId'].InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdInstantMixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>,
) {
  return ['Items', '/Items/:itemId/InstantMix', toValue(args)] as const
}

export function getItemsItemIdInstantMixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdInstantMixQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMusicGenresNameInstantMixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>
  >,
) {
  return ['MusicGenres', '/MusicGenres/:name/InstantMix', toValue(args)] as const
}

export function getMusicGenresNameInstantMixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMusicGenresNameInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.MusicGenres[':name'].InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMusicGenresNameInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMusicGenresNameInstantMixQueryKey>
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
          Awaited<ReturnType<(typeof client.MusicGenres)[':name']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresNameInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMusicGenresNameInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.MusicGenres[':name'].InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMusicGenresInstantMixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.MusicGenres.InstantMix.$get>>,
) {
  return ['MusicGenres', '/MusicGenres/InstantMix', toValue(args)] as const
}

export function getMusicGenresInstantMixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.MusicGenres.InstantMix.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMusicGenresInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.MusicGenres.InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMusicGenresInstantMix<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.MusicGenres.InstantMix.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>
            >
          >,
          ReturnType<typeof getMusicGenresInstantMixQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.MusicGenres.InstantMix.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMusicGenresInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.MusicGenres.InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsItemIdInstantMixQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>
  >,
) {
  return ['Playlists', '/Playlists/:itemId/InstantMix', toValue(args)] as const
}

export function getPlaylistsItemIdInstantMixQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsItemIdInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Playlists[':itemId'].InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsItemIdInstantMixQueryKey>
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
          Awaited<ReturnType<(typeof client.Playlists)[':itemId']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsItemIdInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsItemIdInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Playlists[':itemId'].InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSongsItemIdInstantMixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>,
) {
  return ['Songs', '/Songs/:itemId/InstantMix', toValue(args)] as const
}

export function getSongsItemIdInstantMixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSongsItemIdInstantMixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Songs[':itemId'].InstantMix.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSongsItemIdInstantMix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSongsItemIdInstantMixQueryKey>
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
          Awaited<ReturnType<(typeof client.Songs)[':itemId']['InstantMix']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSongsItemIdInstantMixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSongsItemIdInstantMixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Songs[':itemId'].InstantMix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdExternalIdInfosQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/ExternalIdInfos', toValue(args)] as const
}

export function getItemsItemIdExternalIdInfosQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdExternalIdInfosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].ExternalIdInfos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdExternalIdInfos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdExternalIdInfosQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['ExternalIdInfos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdExternalIdInfosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdExternalIdInfosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].ExternalIdInfos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsRemoteSearchApplyItemIdMutationKey() {
  return ['Items', '/Items/RemoteSearch/Apply/:itemId', 'POST'] as const
}

export function getPostItemsRemoteSearchApplyItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchApplyItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>,
    ) {
      return parseResponse(client.Items.RemoteSearch.Apply[':itemId'].$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchApplyItemId<
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
                  Awaited<ReturnType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items.RemoteSearch.Apply)[':itemId']['$post']>,
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
  const mutationDefaults = getPostItemsRemoteSearchApplyItemIdMutationOptions<
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

export function getPostItemsRemoteSearchBookMutationKey() {
  return ['Items', '/Items/RemoteSearch/Book', 'POST'] as const
}

export function getPostItemsRemoteSearchBookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Book.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.Book.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchBookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.Book.$post>) {
      return parseResponse(client.Items.RemoteSearch.Book.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchBook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Book.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.Book.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchBookMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsRemoteSearchBoxSetMutationKey() {
  return ['Items', '/Items/RemoteSearch/BoxSet', 'POST'] as const
}

export function getPostItemsRemoteSearchBoxSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.BoxSet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchBoxSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post>) {
      return parseResponse(client.Items.RemoteSearch.BoxSet.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchBoxSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Items.RemoteSearch.BoxSet.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.BoxSet.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchBoxSetMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsRemoteSearchMovieMutationKey() {
  return ['Items', '/Items/RemoteSearch/Movie', 'POST'] as const
}

export function getPostItemsRemoteSearchMovieMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Movie.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.Movie.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchMovieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.Movie.$post>) {
      return parseResponse(client.Items.RemoteSearch.Movie.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchMovie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Items.RemoteSearch.Movie.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.Movie.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchMovieMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsRemoteSearchMusicAlbumMutationKey() {
  return ['Items', '/Items/RemoteSearch/MusicAlbum', 'POST'] as const
}

export function getPostItemsRemoteSearchMusicAlbumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicAlbum.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.MusicAlbum.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchMusicAlbumMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.MusicAlbum.$post>) {
      return parseResponse(client.Items.RemoteSearch.MusicAlbum.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchMusicAlbum<
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
                Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicAlbum.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.MusicAlbum.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchMusicAlbumMutationOptions<
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

export function getPostItemsRemoteSearchMusicArtistMutationKey() {
  return ['Items', '/Items/RemoteSearch/MusicArtist', 'POST'] as const
}

export function getPostItemsRemoteSearchMusicArtistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicArtist.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.MusicArtist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchMusicArtistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.MusicArtist.$post>) {
      return parseResponse(client.Items.RemoteSearch.MusicArtist.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchMusicArtist<
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
                Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicArtist.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.MusicArtist.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchMusicArtistMutationOptions<
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

export function getPostItemsRemoteSearchMusicVideoMutationKey() {
  return ['Items', '/Items/RemoteSearch/MusicVideo', 'POST'] as const
}

export function getPostItemsRemoteSearchMusicVideoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicVideo.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.MusicVideo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchMusicVideoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.MusicVideo.$post>) {
      return parseResponse(client.Items.RemoteSearch.MusicVideo.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchMusicVideo<
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
                Awaited<ReturnType<typeof client.Items.RemoteSearch.MusicVideo.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.MusicVideo.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchMusicVideoMutationOptions<
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

export function getPostItemsRemoteSearchPersonMutationKey() {
  return ['Items', '/Items/RemoteSearch/Person', 'POST'] as const
}

export function getPostItemsRemoteSearchPersonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Person.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.Person.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchPersonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.Person.$post>) {
      return parseResponse(client.Items.RemoteSearch.Person.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchPerson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Items.RemoteSearch.Person.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.Person.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchPersonMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsRemoteSearchSeriesMutationKey() {
  return ['Items', '/Items/RemoteSearch/Series', 'POST'] as const
}

export function getPostItemsRemoteSearchSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Series.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.Series.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchSeriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.Series.$post>) {
      return parseResponse(client.Items.RemoteSearch.Series.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchSeries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Items.RemoteSearch.Series.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.Series.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchSeriesMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsRemoteSearchTrailerMutationKey() {
  return ['Items', '/Items/RemoteSearch/Trailer', 'POST'] as const
}

export function getPostItemsRemoteSearchTrailerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Items.RemoteSearch.Trailer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Items.RemoteSearch.Trailer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsRemoteSearchTrailerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.RemoteSearch.Trailer.$post>) {
      return parseResponse(client.Items.RemoteSearch.Trailer.$post(args, options))
    },
  })
}

export function usePostItemsRemoteSearchTrailer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Items.RemoteSearch.Trailer.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Items.RemoteSearch.Trailer.$post>,
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
  const mutationDefaults = getPostItemsRemoteSearchTrailerMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsItemIdRefreshMutationKey() {
  return ['Items', '/Items/:itemId/Refresh', 'POST'] as const
}

export function getPostItemsItemIdRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['Refresh']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['Refresh']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdRefreshMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Items)[':itemId']['Refresh']['$post']>) {
      return parseResponse(client.Items[':itemId'].Refresh.$post(args, options))
    },
  })
}

export function usePostItemsItemIdRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Items)[':itemId']['Refresh']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['Refresh']['$post']>,
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
  const mutationDefaults = getPostItemsItemIdRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.$get>>,
) {
  return ['Items', '/Items', toValue(args)] as const
}

export function getItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
          ReturnType<typeof getItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteItemsMutationKey() {
  return ['Items', '/Items', 'DELETE'] as const
}

export function getDeleteItemsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.Items.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Items.$delete>) {
      return parseResponse(client.Items.$delete(args, options))
    },
  })
}

export function useDeleteItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Items.$delete>,
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
  const mutationDefaults = getDeleteItemsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserItemsItemIdUserDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>
  >,
) {
  return ['UserItems', '/UserItems/:itemId/UserData', toValue(args)] as const
}

export function getUserItemsItemIdUserDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserItemsItemIdUserDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.UserItems[':itemId'].UserData.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserItemsItemIdUserData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserItemsItemIdUserDataQueryKey>
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
          Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserItemsItemIdUserDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserItemsItemIdUserDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.UserItems[':itemId'].UserData.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserItemsItemIdUserDataMutationKey() {
  return ['UserItems', '/UserItems/:itemId/UserData', 'POST'] as const
}

export function getPostUserItemsItemIdUserDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserItemsItemIdUserDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$post']>,
    ) {
      return parseResponse(client.UserItems[':itemId'].UserData.$post(args, options))
    },
  })
}

export function usePostUserItemsItemIdUserData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserItems)[':itemId']['UserData']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserItems)[':itemId']['UserData']['$post']>,
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
  const mutationDefaults = getPostUserItemsItemIdUserDataMutationOptions<TError, TOnMutateResult>(
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

export function getUserItemsResumeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserItems.Resume.$get>>,
) {
  return ['UserItems', '/UserItems/Resume', toValue(args)] as const
}

export function getUserItemsResumeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserItems.Resume.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserItemsResumeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.UserItems.Resume.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserItemsResume<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserItems.Resume.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>
            >
          >,
          ReturnType<typeof getUserItemsResumeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserItems.Resume.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserItemsResumeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserItemsResumeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.UserItems.Resume.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['$get']>>,
) {
  return ['Items', '/Items/:itemId', toValue(args)] as const
}

export function getItemsItemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>
            >
          >,
          ReturnType<typeof getItemsItemIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsItemIdMutationKey() {
  return ['Items', '/Items/:itemId', 'POST'] as const
}

export function getPostItemsItemIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Items)[':itemId']['$post']>) {
      return parseResponse(client.Items[':itemId'].$post(args, options))
    },
  })
}

export function usePostItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$post']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['$post']>,
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
  const mutationDefaults = getPostItemsItemIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteItemsItemIdMutationKey() {
  return ['Items', '/Items/:itemId', 'DELETE'] as const
}

export function getDeleteItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemsItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Items)[':itemId']['$delete']>) {
      return parseResponse(client.Items[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Items)[':itemId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['$delete']>,
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
  const mutationDefaults = getDeleteItemsItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemsItemIdContentTypeMutationKey() {
  return ['Items', '/Items/:itemId/ContentType', 'POST'] as const
}

export function getPostItemsItemIdContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Items)[':itemId']['ContentType']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['ContentType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items)[':itemId']['ContentType']['$post']>,
    ) {
      return parseResponse(client.Items[':itemId'].ContentType.$post(args, options))
    },
  })
}

export function usePostItemsItemIdContentType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Items)[':itemId']['ContentType']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['ContentType']['$post']>,
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
  const mutationDefaults = getPostItemsItemIdContentTypeMutationOptions<TError, TOnMutateResult>(
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

export function getItemsItemIdMetadataEditorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/MetadataEditor', toValue(args)] as const
}

export function getItemsItemIdMetadataEditorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdMetadataEditorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].MetadataEditor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdMetadataEditor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdMetadataEditorQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['MetadataEditor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdMetadataEditorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdMetadataEditorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].MetadataEditor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlbumsItemIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>>,
) {
  return ['Albums', '/Albums/:itemId/Similar', toValue(args)] as const
}

export function getAlbumsItemIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlbumsItemIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Albums[':itemId'].Similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlbumsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Albums)[':itemId']['Similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlbumsItemIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.Albums)[':itemId']['Similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlbumsItemIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlbumsItemIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Albums[':itemId'].Similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArtistsItemIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>>,
) {
  return ['Artists', '/Artists/:itemId/Similar', toValue(args)] as const
}

export function getArtistsItemIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArtistsItemIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Artists[':itemId'].Similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArtistsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Artists)[':itemId']['Similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArtistsItemIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.Artists)[':itemId']['Similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArtistsItemIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArtistsItemIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Artists[':itemId'].Similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdAncestorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>,
) {
  return ['Items', '/Items/:itemId/Ancestors', toValue(args)] as const
}

export function getItemsItemIdAncestorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdAncestorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Ancestors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdAncestors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdAncestorsQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Ancestors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdAncestorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdAncestorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Ancestors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>>,
) {
  return ['Items', '/Items/:itemId/Collections', toValue(args)] as const
}

export function getItemsItemIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Collections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>>,
) {
  return ['Items', '/Items/:itemId/Download', toValue(args)] as const
}

export function getItemsItemIdDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdFileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>>,
) {
  return ['Items', '/Items/:itemId/File', toValue(args)] as const
}

export function getItemsItemIdFileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].File.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['File']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdFileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['File']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].File.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>>,
) {
  return ['Items', '/Items/:itemId/Similar', toValue(args)] as const
}

export function getItemsItemIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdThemeMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>,
) {
  return ['Items', '/Items/:itemId/ThemeMedia', toValue(args)] as const
}

export function getItemsItemIdThemeMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdThemeMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].ThemeMedia.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdThemeMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdThemeMediaQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeMedia']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdThemeMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdThemeMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].ThemeMedia.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdThemeSongsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>,
) {
  return ['Items', '/Items/:itemId/ThemeSongs', toValue(args)] as const
}

export function getItemsItemIdThemeSongsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdThemeSongsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].ThemeSongs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdThemeSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdThemeSongsQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeSongs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdThemeSongsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdThemeSongsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].ThemeSongs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdThemeVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>,
) {
  return ['Items', '/Items/:itemId/ThemeVideos', toValue(args)] as const
}

export function getItemsItemIdThemeVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdThemeVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].ThemeVideos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdThemeVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdThemeVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['ThemeVideos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdThemeVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdThemeVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].ThemeVideos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsCountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Counts.$get>>,
) {
  return ['Items', '/Items/Counts', toValue(args)] as const
}

export function getItemsCountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Counts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.Counts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemsCounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Counts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>
          >,
          ReturnType<typeof getItemsCountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Counts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.Counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLibrariesAvailableOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Libraries.AvailableOptions.$get>>,
) {
  return ['Libraries', '/Libraries/AvailableOptions', toValue(args)] as const
}

export function getLibrariesAvailableOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Libraries.AvailableOptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibrariesAvailableOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Libraries.AvailableOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibrariesAvailableOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Libraries.AvailableOptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>
              >
            >
          >,
          ReturnType<typeof getLibrariesAvailableOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Libraries.AvailableOptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibrariesAvailableOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibrariesAvailableOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Libraries.AvailableOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibraryMediaUpdatedMutationKey() {
  return ['Library', '/Library/Media/Updated', 'POST'] as const
}

export function getPostLibraryMediaUpdatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Media.Updated.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.Media.Updated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryMediaUpdatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.Media.Updated.$post>) {
      return parseResponse(client.Library.Media.Updated.$post(args, options))
    },
  })
}

export function usePostLibraryMediaUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Library.Media.Updated.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.Media.Updated.$post>,
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
  const mutationDefaults = getPostLibraryMediaUpdatedMutationOptions<TError, TOnMutateResult>(
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

export function getLibraryMediaFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Library.MediaFolders.$get>>,
) {
  return ['Library', '/Library/MediaFolders', toValue(args)] as const
}

export function getLibraryMediaFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Library.MediaFolders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibraryMediaFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Library.MediaFolders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryMediaFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Library.MediaFolders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>
            >
          >,
          ReturnType<typeof getLibraryMediaFoldersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.MediaFolders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryMediaFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibraryMediaFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Library.MediaFolders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibraryMoviesAddedMutationKey() {
  return ['Library', '/Library/Movies/Added', 'POST'] as const
}

export function getPostLibraryMoviesAddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Movies.Added.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.Movies.Added.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryMoviesAddedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.Movies.Added.$post>) {
      return parseResponse(client.Library.Movies.Added.$post(args, options))
    },
  })
}

export function usePostLibraryMoviesAdded<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Library.Movies.Added.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.Movies.Added.$post>,
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
  const mutationDefaults = getPostLibraryMoviesAddedMutationOptions<TError, TOnMutateResult>(
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

export function getPostLibraryMoviesUpdatedMutationKey() {
  return ['Library', '/Library/Movies/Updated', 'POST'] as const
}

export function getPostLibraryMoviesUpdatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Movies.Updated.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.Movies.Updated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryMoviesUpdatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.Movies.Updated.$post>) {
      return parseResponse(client.Library.Movies.Updated.$post(args, options))
    },
  })
}

export function usePostLibraryMoviesUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Library.Movies.Updated.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.Movies.Updated.$post>,
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
  const mutationDefaults = getPostLibraryMoviesUpdatedMutationOptions<TError, TOnMutateResult>(
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

export function getLibraryPhysicalPathsQueryKey() {
  return ['Library', '/Library/PhysicalPaths'] as const
}

export function getLibraryPhysicalPathsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLibraryPhysicalPathsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Library.PhysicalPaths.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryPhysicalPaths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
            >
          >,
          ReturnType<typeof getLibraryPhysicalPathsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.PhysicalPaths.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryPhysicalPathsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLibraryPhysicalPathsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Library.PhysicalPaths.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibraryRefreshMutationKey() {
  return ['Library', '/Library/Refresh', 'POST'] as const
}

export function getPostLibraryRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.Library.Refresh.$post(undefined, options))
    },
  })
}

export function usePostLibraryRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Library.Refresh.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostLibraryRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostLibrarySeriesAddedMutationKey() {
  return ['Library', '/Library/Series/Added', 'POST'] as const
}

export function getPostLibrarySeriesAddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Series.Added.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.Series.Added.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibrarySeriesAddedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.Series.Added.$post>) {
      return parseResponse(client.Library.Series.Added.$post(args, options))
    },
  })
}

export function usePostLibrarySeriesAdded<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Library.Series.Added.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.Series.Added.$post>,
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
  const mutationDefaults = getPostLibrarySeriesAddedMutationOptions<TError, TOnMutateResult>(
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

export function getPostLibrarySeriesUpdatedMutationKey() {
  return ['Library', '/Library/Series/Updated', 'POST'] as const
}

export function getPostLibrarySeriesUpdatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.Series.Updated.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.Series.Updated.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibrarySeriesUpdatedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.Series.Updated.$post>) {
      return parseResponse(client.Library.Series.Updated.$post(args, options))
    },
  })
}

export function usePostLibrarySeriesUpdated<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Library.Series.Updated.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.Series.Updated.$post>,
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
  const mutationDefaults = getPostLibrarySeriesUpdatedMutationOptions<TError, TOnMutateResult>(
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

export function getMoviesItemIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>>,
) {
  return ['Movies', '/Movies/:itemId/Similar', toValue(args)] as const
}

export function getMoviesItemIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesItemIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Movies[':itemId'].Similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Movies)[':itemId']['Similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesItemIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.Movies)[':itemId']['Similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesItemIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesItemIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Movies[':itemId'].Similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsItemIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>>,
) {
  return ['Shows', '/Shows/:itemId/Similar', toValue(args)] as const
}

export function getShowsItemIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsItemIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shows[':itemId'].Similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':itemId']['Similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsItemIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.Shows)[':itemId']['Similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsItemIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsItemIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shows[':itemId'].Similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrailersItemIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>,
) {
  return ['Trailers', '/Trailers/:itemId/Similar', toValue(args)] as const
}

export function getTrailersItemIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrailersItemIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Trailers[':itemId'].Similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrailersItemIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrailersItemIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.Trailers)[':itemId']['Similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrailersItemIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrailersItemIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Trailers[':itemId'].Similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLibraryVirtualFoldersQueryKey() {
  return ['Library', '/Library/VirtualFolders'] as const
}

export function getLibraryVirtualFoldersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLibraryVirtualFoldersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Library.VirtualFolders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryVirtualFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
            >
          >,
          ReturnType<typeof getLibraryVirtualFoldersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryVirtualFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLibraryVirtualFoldersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Library.VirtualFolders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibraryVirtualFoldersMutationKey() {
  return ['Library', '/Library/VirtualFolders', 'POST'] as const
}

export function getPostLibraryVirtualFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryVirtualFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.VirtualFolders.$post>) {
      return parseResponse(client.Library.VirtualFolders.$post(args, options))
    },
  })
}

export function usePostLibraryVirtualFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.$post>,
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
  const mutationDefaults = getPostLibraryVirtualFoldersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLibraryVirtualFoldersMutationKey() {
  return ['Library', '/Library/VirtualFolders', 'DELETE'] as const
}

export function getDeleteLibraryVirtualFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLibraryVirtualFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.VirtualFolders.$delete>) {
      return parseResponse(client.Library.VirtualFolders.$delete(args, options))
    },
  })
}

export function useDeleteLibraryVirtualFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.$delete>,
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
  const mutationDefaults = getDeleteLibraryVirtualFoldersMutationOptions<TError, TOnMutateResult>(
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

export function getPostLibraryVirtualFoldersLibraryOptionsMutationKey() {
  return ['Library', '/Library/VirtualFolders/LibraryOptions', 'POST'] as const
}

export function getPostLibraryVirtualFoldersLibraryOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.LibraryOptions.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.LibraryOptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryVirtualFoldersLibraryOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Library.VirtualFolders.LibraryOptions.$post>,
    ) {
      return parseResponse(client.Library.VirtualFolders.LibraryOptions.$post(args, options))
    },
  })
}

export function usePostLibraryVirtualFoldersLibraryOptions<
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
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.LibraryOptions.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.LibraryOptions.$post>,
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
  const mutationDefaults = getPostLibraryVirtualFoldersLibraryOptionsMutationOptions<
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

export function getPostLibraryVirtualFoldersNameMutationKey() {
  return ['Library', '/Library/VirtualFolders/Name', 'POST'] as const
}

export function getPostLibraryVirtualFoldersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Library.VirtualFolders.Name.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.Name.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryVirtualFoldersNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.VirtualFolders.Name.$post>) {
      return parseResponse(client.Library.VirtualFolders.Name.$post(args, options))
    },
  })
}

export function usePostLibraryVirtualFoldersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.Name.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.Name.$post>,
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
  const mutationDefaults = getPostLibraryVirtualFoldersNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostLibraryVirtualFoldersPathsMutationKey() {
  return ['Library', '/Library/VirtualFolders/Paths', 'POST'] as const
}

export function getPostLibraryVirtualFoldersPathsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.Paths.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryVirtualFoldersPathsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.VirtualFolders.Paths.$post>) {
      return parseResponse(client.Library.VirtualFolders.Paths.$post(args, options))
    },
  })
}

export function usePostLibraryVirtualFoldersPaths<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.Paths.$post>,
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
  const mutationDefaults = getPostLibraryVirtualFoldersPathsMutationOptions<
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

export function getDeleteLibraryVirtualFoldersPathsMutationKey() {
  return ['Library', '/Library/VirtualFolders/Paths', 'DELETE'] as const
}

export function getDeleteLibraryVirtualFoldersPathsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.Paths.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLibraryVirtualFoldersPathsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Library.VirtualFolders.Paths.$delete>) {
      return parseResponse(client.Library.VirtualFolders.Paths.$delete(args, options))
    },
  })
}

export function useDeleteLibraryVirtualFoldersPaths<
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
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.Paths.$delete>,
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
  const mutationDefaults = getDeleteLibraryVirtualFoldersPathsMutationOptions<
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

export function getPostLibraryVirtualFoldersPathsUpdateMutationKey() {
  return ['Library', '/Library/VirtualFolders/Paths/Update', 'POST'] as const
}

export function getPostLibraryVirtualFoldersPathsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.Update.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Library.VirtualFolders.Paths.Update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryVirtualFoldersPathsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Library.VirtualFolders.Paths.Update.$post>,
    ) {
      return parseResponse(client.Library.VirtualFolders.Paths.Update.$post(args, options))
    },
  })
}

export function usePostLibraryVirtualFoldersPathsUpdate<
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
                  Awaited<ReturnType<typeof client.Library.VirtualFolders.Paths.Update.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Library.VirtualFolders.Paths.Update.$post>,
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
  const mutationDefaults = getPostLibraryVirtualFoldersPathsUpdateMutationOptions<
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

export function getLiveTvChannelMappingOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>>,
) {
  return ['LiveTv', '/LiveTv/ChannelMappingOptions', toValue(args)] as const
}

export function getLiveTvChannelMappingOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvChannelMappingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.ChannelMappingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvChannelMappingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.ChannelMappingOptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>
              >
            >
          >,
          ReturnType<typeof getLiveTvChannelMappingOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappingOptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvChannelMappingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvChannelMappingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.ChannelMappingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvChannelMappingsMutationKey() {
  return ['LiveTv', '/LiveTv/ChannelMappings', 'POST'] as const
}

export function getPostLiveTvChannelMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.LiveTv.ChannelMappings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvChannelMappingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.ChannelMappings.$post>) {
      return parseResponse(client.LiveTv.ChannelMappings.$post(args, options))
    },
  })
}

export function usePostLiveTvChannelMappings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ChannelMappings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LiveTv.ChannelMappings.$post>,
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
  const mutationDefaults = getPostLiveTvChannelMappingsMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Channels.$get>>,
) {
  return ['LiveTv', '/LiveTv/Channels', toValue(args)] as const
}

export function getLiveTvChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvChannelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Channels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvChannelsChannelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>,
) {
  return ['LiveTv', '/LiveTv/Channels/:channelId', toValue(args)] as const
}

export function getLiveTvChannelsChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvChannelsChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Channels[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvChannelsChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveTvChannelsChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.LiveTv.Channels)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvChannelsChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvChannelsChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Channels[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvGuideInfoQueryKey() {
  return ['LiveTv', '/LiveTv/GuideInfo'] as const
}

export function getLiveTvGuideInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLiveTvGuideInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.GuideInfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLiveTvGuideInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvGuideInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.GuideInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvGuideInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveTvGuideInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.GuideInfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvInfoQueryKey() {
  return ['LiveTv', '/LiveTv/Info'] as const
}

export function getLiveTvInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLiveTvInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLiveTvInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>
          >,
          ReturnType<typeof getLiveTvInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiveTvInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveTvInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvListingProvidersMutationKey() {
  return ['LiveTv', '/LiveTv/ListingProviders', 'POST'] as const
}

export function getPostLiveTvListingProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.LiveTv.ListingProviders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvListingProvidersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.ListingProviders.$post>) {
      return parseResponse(client.LiveTv.ListingProviders.$post(args, options))
    },
  })
}

export function usePostLiveTvListingProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LiveTv.ListingProviders.$post>,
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
  const mutationDefaults = getPostLiveTvListingProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLiveTvListingProvidersMutationKey() {
  return ['LiveTv', '/LiveTv/ListingProviders', 'DELETE'] as const
}

export function getDeleteLiveTvListingProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.LiveTv.ListingProviders.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveTvListingProvidersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.ListingProviders.$delete>) {
      return parseResponse(client.LiveTv.ListingProviders.$delete(args, options))
    },
  })
}

export function useDeleteLiveTvListingProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.LiveTv.ListingProviders.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.LiveTv.ListingProviders.$delete>,
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
  const mutationDefaults = getDeleteLiveTvListingProvidersMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvListingProvidersDefaultQueryKey() {
  return ['LiveTv', '/LiveTv/ListingProviders/Default'] as const
}

export function getLiveTvListingProvidersDefaultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLiveTvListingProvidersDefaultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.ListingProviders.Default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvListingProvidersDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
              >
            >
          >,
          ReturnType<typeof getLiveTvListingProvidersDefaultQueryKey>
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
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Default.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvListingProvidersDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveTvListingProvidersDefaultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.ListingProviders.Default.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvListingProvidersLineupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>>,
) {
  return ['LiveTv', '/LiveTv/ListingProviders/Lineups', toValue(args)] as const
}

export function getLiveTvListingProvidersLineupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvListingProvidersLineupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.ListingProviders.Lineups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvListingProvidersLineups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.ListingProviders.Lineups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
              >
            >
          >,
          ReturnType<typeof getLiveTvListingProvidersLineupsQueryKey>
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
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.Lineups.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvListingProvidersLineupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvListingProvidersLineupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.ListingProviders.Lineups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvListingProvidersSchedulesDirectCountriesQueryKey() {
  return ['LiveTv', '/LiveTv/ListingProviders/SchedulesDirect/Countries'] as const
}

export function getLiveTvListingProvidersSchedulesDirectCountriesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getLiveTvListingProvidersSchedulesDirectCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvListingProvidersSchedulesDirectCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>
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
                  ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>
                >
              >
            >
          >,
          ReturnType<typeof getLiveTvListingProvidersSchedulesDirectCountriesQueryKey>
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
          Awaited<ReturnType<typeof client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvListingProvidersSchedulesDirectCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveTvListingProvidersSchedulesDirectCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.ListingProviders.SchedulesDirect.Countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvLiveRecordingsRecordingIdStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
  >,
) {
  return ['LiveTv', '/LiveTv/LiveRecordings/:recordingId/stream', toValue(args)] as const
}

export function getLiveTvLiveRecordingsRecordingIdStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvLiveRecordingsRecordingIdStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.LiveRecordings[':recordingId'].stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvLiveRecordingsRecordingIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']
                  >
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
                  ReturnType<
                    (typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLiveTvLiveRecordingsRecordingIdStreamQueryKey>
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
          Awaited<
            ReturnType<(typeof client.LiveTv.LiveRecordings)[':recordingId']['stream']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvLiveRecordingsRecordingIdStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvLiveRecordingsRecordingIdStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.LiveRecordings[':recordingId'].stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
    >
  >,
) {
  return ['LiveTv', '/LiveTv/LiveStreamFiles/:streamId/stream.:container', toValue(args)] as const
}

export function getLiveTvLiveStreamFilesStreamIdStreamContainerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.LiveStreamFiles[':streamId']['stream.:container'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvLiveStreamFilesStreamIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
                  >
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
                  ReturnType<
                    (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.LiveTv.LiveStreamFiles)[':streamId']['stream.:container']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvLiveStreamFilesStreamIdStreamContainerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.LiveStreamFiles[':streamId']['stream.:container'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvProgramsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Programs.$get>>,
) {
  return ['LiveTv', '/LiveTv/Programs', toValue(args)] as const
}

export function getLiveTvProgramsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Programs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvProgramsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Programs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvPrograms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Programs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvProgramsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvProgramsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Programs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvProgramsMutationKey() {
  return ['LiveTv', '/LiveTv/Programs', 'POST'] as const
}

export function getPostLiveTvProgramsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.LiveTv.Programs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvProgramsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.Programs.$post>) {
      return parseResponse(client.LiveTv.Programs.$post(args, options))
    },
  })
}

export function usePostLiveTvPrograms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LiveTv.Programs.$post>,
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
  const mutationDefaults = getPostLiveTvProgramsMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvProgramsProgramIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>>,
) {
  return ['LiveTv', '/LiveTv/Programs/:programId', toValue(args)] as const
}

export function getLiveTvProgramsProgramIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvProgramsProgramIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Programs[':programId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvProgramsProgramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Programs)[':programId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveTvProgramsProgramIdQueryKey>
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
          Awaited<ReturnType<(typeof client.LiveTv.Programs)[':programId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvProgramsProgramIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvProgramsProgramIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Programs[':programId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvProgramsRecommendedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>>,
) {
  return ['LiveTv', '/LiveTv/Programs/Recommended', toValue(args)] as const
}

export function getLiveTvProgramsRecommendedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvProgramsRecommendedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Programs.Recommended.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvProgramsRecommended<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Programs.Recommended.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>
              >
            >
          >,
          ReturnType<typeof getLiveTvProgramsRecommendedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Programs.Recommended.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvProgramsRecommendedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvProgramsRecommendedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Programs.Recommended.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvRecordingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Recordings.$get>>,
) {
  return ['LiveTv', '/LiveTv/Recordings', toValue(args)] as const
}

export function getLiveTvRecordingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Recordings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvRecordings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Recordings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvRecordingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvRecordingsRecordingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>
  >,
) {
  return ['LiveTv', '/LiveTv/Recordings/:recordingId', toValue(args)] as const
}

export function getLiveTvRecordingsRecordingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvRecordingsRecordingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Recordings[':recordingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvRecordingsRecordingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveTvRecordingsRecordingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsRecordingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvRecordingsRecordingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Recordings[':recordingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLiveTvRecordingsRecordingIdMutationKey() {
  return ['LiveTv', '/LiveTv/Recordings/:recordingId', 'DELETE'] as const
}

export function getDeleteLiveTvRecordingsRecordingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveTvRecordingsRecordingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>,
    ) {
      return parseResponse(client.LiveTv.Recordings[':recordingId'].$delete(args, options))
    },
  })
}

export function useDeleteLiveTvRecordingsRecordingId<
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
                  Awaited<ReturnType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LiveTv.Recordings)[':recordingId']['$delete']>,
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
  const mutationDefaults = getDeleteLiveTvRecordingsRecordingIdMutationOptions<
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

export function getLiveTvRecordingsFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>>,
) {
  return ['LiveTv', '/LiveTv/Recordings/Folders', toValue(args)] as const
}

export function getLiveTvRecordingsFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvRecordingsFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Recordings.Folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvRecordingsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Recordings.Folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>
              >
            >
          >,
          ReturnType<typeof getLiveTvRecordingsFoldersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Recordings.Folders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvRecordingsFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvRecordingsFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Recordings.Folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvSeriesTimersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.SeriesTimers.$get>>,
) {
  return ['LiveTv', '/LiveTv/SeriesTimers', toValue(args)] as const
}

export function getLiveTvSeriesTimersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.SeriesTimers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvSeriesTimersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.SeriesTimers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvSeriesTimers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.SeriesTimers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvSeriesTimersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvSeriesTimersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvSeriesTimersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.SeriesTimers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvSeriesTimersMutationKey() {
  return ['LiveTv', '/LiveTv/SeriesTimers', 'POST'] as const
}

export function getPostLiveTvSeriesTimersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.LiveTv.SeriesTimers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvSeriesTimersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.SeriesTimers.$post>) {
      return parseResponse(client.LiveTv.SeriesTimers.$post(args, options))
    },
  })
}

export function usePostLiveTvSeriesTimers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.SeriesTimers.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.LiveTv.SeriesTimers.$post>,
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
  const mutationDefaults = getPostLiveTvSeriesTimersMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvSeriesTimersTimerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>,
) {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', toValue(args)] as const
}

export function getLiveTvSeriesTimersTimerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvSeriesTimersTimerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.SeriesTimers[':timerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvSeriesTimersTimerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveTvSeriesTimersTimerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvSeriesTimersTimerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvSeriesTimersTimerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.SeriesTimers[':timerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvSeriesTimersTimerIdMutationKey() {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', 'POST'] as const
}

export function getPostLiveTvSeriesTimersTimerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvSeriesTimersTimerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>,
    ) {
      return parseResponse(client.LiveTv.SeriesTimers[':timerId'].$post(args, options))
    },
  })
}

export function usePostLiveTvSeriesTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$post']>,
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
  const mutationDefaults = getPostLiveTvSeriesTimersTimerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLiveTvSeriesTimersTimerIdMutationKey() {
  return ['LiveTv', '/LiveTv/SeriesTimers/:timerId', 'DELETE'] as const
}

export function getDeleteLiveTvSeriesTimersTimerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveTvSeriesTimersTimerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>,
    ) {
      return parseResponse(client.LiveTv.SeriesTimers[':timerId'].$delete(args, options))
    },
  })
}

export function useDeleteLiveTvSeriesTimersTimerId<
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
                  Awaited<ReturnType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LiveTv.SeriesTimers)[':timerId']['$delete']>,
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
  const mutationDefaults = getDeleteLiveTvSeriesTimersTimerIdMutationOptions<
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

export function getLiveTvTimersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Timers.$get>>,
) {
  return ['LiveTv', '/LiveTv/Timers', toValue(args)] as const
}

export function getLiveTvTimersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Timers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvTimersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Timers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvTimers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Timers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
          >,
          ReturnType<typeof getLiveTvTimersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTimersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvTimersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Timers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvTimersMutationKey() {
  return ['LiveTv', '/LiveTv/Timers', 'POST'] as const
}

export function getPostLiveTvTimersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.LiveTv.Timers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvTimersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.Timers.$post>) {
      return parseResponse(client.LiveTv.Timers.$post(args, options))
    },
  })
}

export function usePostLiveTvTimers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.LiveTv.Timers.$post>,
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
  const mutationDefaults = getPostLiveTvTimersMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvTimersTimerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>,
) {
  return ['LiveTv', '/LiveTv/Timers/:timerId', toValue(args)] as const
}

export function getLiveTvTimersTimerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvTimersTimerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Timers[':timerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvTimersTimerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLiveTvTimersTimerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTimersTimerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvTimersTimerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Timers[':timerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvTimersTimerIdMutationKey() {
  return ['LiveTv', '/LiveTv/Timers/:timerId', 'POST'] as const
}

export function getPostLiveTvTimersTimerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvTimersTimerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$post']>) {
      return parseResponse(client.LiveTv.Timers[':timerId'].$post(args, options))
    },
  })
}

export function usePostLiveTvTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$post']>,
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
  const mutationDefaults = getPostLiveTvTimersTimerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLiveTvTimersTimerIdMutationKey() {
  return ['LiveTv', '/LiveTv/Timers/:timerId', 'DELETE'] as const
}

export function getDeleteLiveTvTimersTimerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveTvTimersTimerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>) {
      return parseResponse(client.LiveTv.Timers[':timerId'].$delete(args, options))
    },
  })
}

export function useDeleteLiveTvTimersTimerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LiveTv.Timers)[':timerId']['$delete']>,
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
  const mutationDefaults = getDeleteLiveTvTimersTimerIdMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvTimersDefaultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>>,
) {
  return ['LiveTv', '/LiveTv/Timers/Defaults', toValue(args)] as const
}

export function getLiveTvTimersDefaultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvTimersDefaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Timers.Defaults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvTimersDefaults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Timers.Defaults.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvTimersDefaultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Timers.Defaults.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTimersDefaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvTimersDefaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Timers.Defaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvTunerHostsMutationKey() {
  return ['LiveTv', '/LiveTv/TunerHosts', 'POST'] as const
}

export function getPostLiveTvTunerHostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.LiveTv.TunerHosts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvTunerHostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.TunerHosts.$post>) {
      return parseResponse(client.LiveTv.TunerHosts.$post(args, options))
    },
  })
}

export function usePostLiveTvTunerHosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LiveTv.TunerHosts.$post>,
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
  const mutationDefaults = getPostLiveTvTunerHostsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLiveTvTunerHostsMutationKey() {
  return ['LiveTv', '/LiveTv/TunerHosts', 'DELETE'] as const
}

export function getDeleteLiveTvTunerHostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.LiveTv.TunerHosts.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiveTvTunerHostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveTv.TunerHosts.$delete>) {
      return parseResponse(client.LiveTv.TunerHosts.$delete(args, options))
    },
  })
}

export function useDeleteLiveTvTunerHosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.LiveTv.TunerHosts.$delete>,
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
  const mutationDefaults = getDeleteLiveTvTunerHostsMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvTunerHostsTypesQueryKey() {
  return ['LiveTv', '/LiveTv/TunerHosts/Types'] as const
}

export function getLiveTvTunerHostsTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLiveTvTunerHostsTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.TunerHosts.Types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvTunerHostsTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvTunerHostsTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.TunerHosts.Types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTunerHostsTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLiveTvTunerHostsTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.TunerHosts.Types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiveTvTunersTunerIdResetMutationKey() {
  return ['LiveTv', '/LiveTv/Tuners/:tunerId/Reset', 'POST'] as const
}

export function getPostLiveTvTunersTunerIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveTvTunersTunerIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>,
    ) {
      return parseResponse(client.LiveTv.Tuners[':tunerId'].Reset.$post(args, options))
    },
  })
}

export function usePostLiveTvTunersTunerIdReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.LiveTv.Tuners)[':tunerId']['Reset']['$post']>,
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
  const mutationDefaults = getPostLiveTvTunersTunerIdResetMutationOptions<TError, TOnMutateResult>(
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

export function getLiveTvTunersDiscoverQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>>,
) {
  return ['LiveTv', '/LiveTv/Tuners/Discover', toValue(args)] as const
}

export function getLiveTvTunersDiscoverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvTunersDiscoverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Tuners.Discover.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvTunersDiscover<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Tuners.Discover.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvTunersDiscoverQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discover.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTunersDiscoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvTunersDiscoverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Tuners.Discover.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiveTvTunersDiscvoverQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>>,
) {
  return ['LiveTv', '/LiveTv/Tuners/Discvover', toValue(args)] as const
}

export function getLiveTvTunersDiscvoverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiveTvTunersDiscvoverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.LiveTv.Tuners.Discvover.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiveTvTunersDiscvover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.LiveTv.Tuners.Discvover.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
            >
          >,
          ReturnType<typeof getLiveTvTunersDiscvoverQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.LiveTv.Tuners.Discvover.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLiveTvTunersDiscvoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiveTvTunersDiscvoverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.LiveTv.Tuners.Discvover.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocalizationCountriesQueryKey() {
  return ['Localization', '/Localization/Countries'] as const
}

export function getLocalizationCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocalizationCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Localization.Countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocalizationCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
            >
          >,
          ReturnType<typeof getLocalizationCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocalizationCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Localization.Countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocalizationCulturesQueryKey() {
  return ['Localization', '/Localization/Cultures'] as const
}

export function getLocalizationCulturesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocalizationCulturesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Localization.Cultures.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocalizationCultures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
            >
          >,
          ReturnType<typeof getLocalizationCulturesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Cultures.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationCulturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocalizationCulturesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Localization.Cultures.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocalizationOptionsQueryKey() {
  return ['Localization', '/Localization/Options'] as const
}

export function getLocalizationOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocalizationOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Localization.Options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocalizationOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>
            >
          >,
          ReturnType<typeof getLocalizationOptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Localization.Options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocalizationOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Localization.Options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocalizationParentalRatingsQueryKey() {
  return ['Localization', '/Localization/ParentalRatings'] as const
}

export function getLocalizationParentalRatingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocalizationParentalRatingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Localization.ParentalRatings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocalizationParentalRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>
              >
            >
          >,
          ReturnType<typeof getLocalizationParentalRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Localization.ParentalRatings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocalizationParentalRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocalizationParentalRatingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Localization.ParentalRatings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioItemIdLyricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>,
) {
  return ['Audio', '/Audio/:itemId/Lyrics', toValue(args)] as const
}

export function getAudioItemIdLyricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioItemIdLyricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Audio[':itemId'].Lyrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioItemIdLyrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioItemIdLyricsQueryKey>
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
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdLyricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioItemIdLyricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Audio[':itemId'].Lyrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAudioItemIdLyricsMutationKey() {
  return ['Audio', '/Audio/:itemId/Lyrics', 'POST'] as const
}

export function getPostAudioItemIdLyricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioItemIdLyricsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$post']>) {
      return parseResponse(client.Audio[':itemId'].Lyrics.$post(args, options))
    },
  })
}

export function usePostAudioItemIdLyrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$post']>,
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
  const mutationDefaults = getPostAudioItemIdLyricsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAudioItemIdLyricsMutationKey() {
  return ['Audio', '/Audio/:itemId/Lyrics', 'DELETE'] as const
}

export function getDeleteAudioItemIdLyricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAudioItemIdLyricsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$delete']>,
    ) {
      return parseResponse(client.Audio[':itemId'].Lyrics.$delete(args, options))
    },
  })
}

export function useDeleteAudioItemIdLyrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Audio)[':itemId']['Lyrics']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Audio)[':itemId']['Lyrics']['$delete']>,
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
  const mutationDefaults = getDeleteAudioItemIdLyricsMutationOptions<TError, TOnMutateResult>(
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

export function getAudioItemIdRemoteSearchLyricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>
  >,
) {
  return ['Audio', '/Audio/:itemId/RemoteSearch/Lyrics', toValue(args)] as const
}

export function getAudioItemIdRemoteSearchLyricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioItemIdRemoteSearchLyricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Audio[':itemId'].RemoteSearch.Lyrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioItemIdRemoteSearchLyrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>
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
                  ReturnType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAudioItemIdRemoteSearchLyricsQueryKey>
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
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdRemoteSearchLyricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioItemIdRemoteSearchLyricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Audio[':itemId'].RemoteSearch.Lyrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAudioItemIdRemoteSearchLyricsLyricIdMutationKey() {
  return ['Audio', '/Audio/:itemId/RemoteSearch/Lyrics/:lyricId', 'POST'] as const
}

export function getPostAudioItemIdRemoteSearchLyricsLyricIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics'][':lyricId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics'][':lyricId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAudioItemIdRemoteSearchLyricsLyricIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics'][':lyricId']['$post']
      >,
    ) {
      return parseResponse(
        client.Audio[':itemId'].RemoteSearch.Lyrics[':lyricId'].$post(args, options),
      )
    },
  })
}

export function usePostAudioItemIdRemoteSearchLyricsLyricId<
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
                    (typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics'][':lyricId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.Audio)[':itemId']['RemoteSearch']['Lyrics'][':lyricId']['$post']
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
  const mutationDefaults = getPostAudioItemIdRemoteSearchLyricsLyricIdMutationOptions<
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

export function getProvidersLyricsLyricIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>,
) {
  return ['Providers', '/Providers/Lyrics/:lyricId', toValue(args)] as const
}

export function getProvidersLyricsLyricIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersLyricsLyricIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Providers.Lyrics[':lyricId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersLyricsLyricId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProvidersLyricsLyricIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Providers.Lyrics)[':lyricId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersLyricsLyricIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersLyricsLyricIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Providers.Lyrics[':lyricId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdPlaybackInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/PlaybackInfo', toValue(args)] as const
}

export function getItemsItemIdPlaybackInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdPlaybackInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].PlaybackInfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdPlaybackInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdPlaybackInfoQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdPlaybackInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdPlaybackInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].PlaybackInfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsItemIdPlaybackInfoMutationKey() {
  return ['Items', '/Items/:itemId/PlaybackInfo', 'POST'] as const
}

export function getPostItemsItemIdPlaybackInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdPlaybackInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>,
    ) {
      return parseResponse(client.Items[':itemId'].PlaybackInfo.$post(args, options))
    },
  })
}

export function usePostItemsItemIdPlaybackInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['PlaybackInfo']['$post']>,
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
  const mutationDefaults = getPostItemsItemIdPlaybackInfoMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiveStreamsCloseMutationKey() {
  return ['LiveStreams', '/LiveStreams/Close', 'POST'] as const
}

export function getPostLiveStreamsCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Close.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.LiveStreams.Close.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveStreamsCloseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveStreams.Close.$post>) {
      return parseResponse(client.LiveStreams.Close.$post(args, options))
    },
  })
}

export function usePostLiveStreamsClose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Close.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.LiveStreams.Close.$post>,
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
  const mutationDefaults = getPostLiveStreamsCloseMutationOptions<TError, TOnMutateResult>(
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

export function getPostLiveStreamsOpenMutationKey() {
  return ['LiveStreams', '/LiveStreams/Open', 'POST'] as const
}

export function getPostLiveStreamsOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Open.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.LiveStreams.Open.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiveStreamsOpenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.LiveStreams.Open.$post>) {
      return parseResponse(client.LiveStreams.Open.$post(args, options))
    },
  })
}

export function usePostLiveStreamsOpen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.LiveStreams.Open.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.LiveStreams.Open.$post>,
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
  const mutationDefaults = getPostLiveStreamsOpenMutationOptions<TError, TOnMutateResult>(
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

export function getPlaybackBitrateTestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Playback.BitrateTest.$get>>,
) {
  return ['Playback', '/Playback/BitrateTest', toValue(args)] as const
}

export function getPlaybackBitrateTestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Playback.BitrateTest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaybackBitrateTestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Playback.BitrateTest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaybackBitrateTest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Playback.BitrateTest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>
            >
          >,
          ReturnType<typeof getPlaybackBitrateTestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playback.BitrateTest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlaybackBitrateTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaybackBitrateTestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Playback.BitrateTest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaSegmentsItemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>>,
) {
  return ['MediaSegments', '/MediaSegments/:itemId', toValue(args)] as const
}

export function getMediaSegmentsItemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaSegmentsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.MediaSegments[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaSegmentsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.MediaSegments)[':itemId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMediaSegmentsItemIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.MediaSegments)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaSegmentsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaSegmentsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.MediaSegments[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Movies.Recommendations.$get>>,
) {
  return ['Movies', '/Movies/Recommendations', toValue(args)] as const
}

export function getMoviesRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Movies.Recommendations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Movies.Recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesRecommendations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Movies.Recommendations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
            >
          >,
          ReturnType<typeof getMoviesRecommendationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Movies.Recommendations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Movies.Recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMusicGenresGenreNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>>,
) {
  return ['MusicGenres', '/MusicGenres/:genreName', toValue(args)] as const
}

export function getMusicGenresGenreNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMusicGenresGenreNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.MusicGenres[':genreName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMusicGenresGenreName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.MusicGenres)[':genreName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMusicGenresGenreNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.MusicGenres)[':genreName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMusicGenresGenreNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMusicGenresGenreNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.MusicGenres[':genreName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPackagesQueryKey() {
  return ['Packages', '/Packages'] as const
}

export function getPackagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPackagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Packages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>
          >,
          ReturnType<typeof getPackagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Packages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPackagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Packages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPackagesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Packages)[':name']['$get']>>,
) {
  return ['Packages', '/Packages/:name', toValue(args)] as const
}

export function getPackagesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Packages)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPackagesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Packages[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePackagesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Packages)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getPackagesNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Packages)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPackagesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPackagesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Packages[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPackagesInstalledNameMutationKey() {
  return ['Packages', '/Packages/Installed/:name', 'POST'] as const
}

export function getPostPackagesInstalledNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Packages.Installed)[':name']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Packages.Installed)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPackagesInstalledNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Packages.Installed)[':name']['$post']>) {
      return parseResponse(client.Packages.Installed[':name'].$post(args, options))
    },
  })
}

export function usePostPackagesInstalledName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Packages.Installed)[':name']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Packages.Installed)[':name']['$post']>,
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
  const mutationDefaults = getPostPackagesInstalledNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePackagesInstallingPackageIdMutationKey() {
  return ['Packages', '/Packages/Installing/:packageId', 'DELETE'] as const
}

export function getDeletePackagesInstallingPackageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Packages.Installing)[':packageId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Packages.Installing)[':packageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePackagesInstallingPackageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Packages.Installing)[':packageId']['$delete']>,
    ) {
      return parseResponse(client.Packages.Installing[':packageId'].$delete(args, options))
    },
  })
}

export function useDeletePackagesInstallingPackageId<
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
                  Awaited<ReturnType<(typeof client.Packages.Installing)[':packageId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Packages.Installing)[':packageId']['$delete']>,
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
  const mutationDefaults = getDeletePackagesInstallingPackageIdMutationOptions<
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

export function getRepositoriesQueryKey() {
  return ['Repositories', '/Repositories'] as const
}

export function getRepositoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRepositoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Repositories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>
          >,
          ReturnType<typeof getRepositoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRepositoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Repositories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesMutationKey() {
  return ['Repositories', '/Repositories', 'POST'] as const
}

export function getPostRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Repositories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Repositories.$post>) {
      return parseResponse(client.Repositories.$post(args, options))
    },
  })
}

export function usePostRepositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Repositories.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Repositories.$post>,
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
  const mutationDefaults = getPostRepositoriesMutationOptions<TError, TOnMutateResult>(
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

export function getPersonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Persons.$get>>,
) {
  return ['Persons', '/Persons', toValue(args)] as const
}

export function getPersonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Persons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Persons.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePersons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Persons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>
          >,
          ReturnType<typeof getPersonsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Persons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPersonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Persons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPersonsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Persons)[':name']['$get']>>,
) {
  return ['Persons', '/Persons/:name', toValue(args)] as const
}

export function getPersonsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Persons)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Persons[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Persons)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getPersonsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Persons)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Persons[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlaylistsMutationKey() {
  return ['Playlists', '/Playlists', 'POST'] as const
}

export function getPostPlaylistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playlists.$post>>>>>,
    TError,
    InferRequestType<typeof client.Playlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Playlists.$post>) {
      return parseResponse(client.Playlists.$post(args, options))
    },
  })
}

export function usePostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Playlists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Playlists.$post>,
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
  const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>>,
) {
  return ['Playlists', '/Playlists/:playlistId', toValue(args)] as const
}

export function getPlaylistsPlaylistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Playlists[':playlistId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Playlists)[':playlistId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Playlists[':playlistId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlaylistsPlaylistIdMutationKey() {
  return ['Playlists', '/Playlists/:playlistId', 'POST'] as const
}

export function getPostPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Playlists)[':playlistId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsPlaylistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Playlists)[':playlistId']['$post']>) {
      return parseResponse(client.Playlists[':playlistId'].$post(args, options))
    },
  })
}

export function usePostPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Playlists)[':playlistId']['$post']>,
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
  const mutationDefaults = getPostPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
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

export function getPlaylistsPlaylistIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>
  >,
) {
  return ['Playlists', '/Playlists/:playlistId/Items', toValue(args)] as const
}

export function getPlaylistsPlaylistIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Playlists[':playlistId'].Items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Playlists[':playlistId'].Items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlaylistsPlaylistIdItemsMutationKey() {
  return ['Playlists', '/Playlists/:playlistId/Items', 'POST'] as const
}

export function getPostPlaylistsPlaylistIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsPlaylistIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$post']>,
    ) {
      return parseResponse(client.Playlists[':playlistId'].Items.$post(args, options))
    },
  })
}

export function usePostPlaylistsPlaylistIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$post']>,
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
  const mutationDefaults = getPostPlaylistsPlaylistIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePlaylistsPlaylistIdItemsMutationKey() {
  return ['Playlists', '/Playlists/:playlistId/Items', 'DELETE'] as const
}

export function getDeletePlaylistsPlaylistIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsPlaylistIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>,
    ) {
      return parseResponse(client.Playlists[':playlistId'].Items.$delete(args, options))
    },
  })
}

export function useDeletePlaylistsPlaylistIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Playlists)[':playlistId']['Items']['$delete']>,
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
  const mutationDefaults = getDeletePlaylistsPlaylistIdItemsMutationOptions<
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

export function getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexMutationKey() {
  return ['Playlists', '/Playlists/:playlistId/Items/:itemId/Move/:newIndex', 'POST'] as const
}

export function getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
      >,
    ) {
      return parseResponse(
        client.Playlists[':playlistId'].Items[':itemId'].Move[':newIndex'].$post(args, options),
      )
    },
  })
}

export function usePostPlaylistsPlaylistIdItemsItemIdMoveNewIndex<
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
                      (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.Playlists)[':playlistId']['Items'][':itemId']['Move'][':newIndex']['$post']
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
  const mutationDefaults = getPostPlaylistsPlaylistIdItemsItemIdMoveNewIndexMutationOptions<
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

export function getPlaylistsPlaylistIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>
  >,
) {
  return ['Playlists', '/Playlists/:playlistId/Users', toValue(args)] as const
}

export function getPlaylistsPlaylistIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Playlists[':playlistId'].Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Playlists[':playlistId'].Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>
  >,
) {
  return ['Playlists', '/Playlists/:playlistId/Users/:userId', toValue(args)] as const
}

export function getPlaylistsPlaylistIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Playlists[':playlistId'].Users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>
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
                  ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Playlists[':playlistId'].Users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlaylistsPlaylistIdUsersUserIdMutationKey() {
  return ['Playlists', '/Playlists/:playlistId/Users/:userId', 'POST'] as const
}

export function getPostPlaylistsPlaylistIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsPlaylistIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$post']>,
    ) {
      return parseResponse(client.Playlists[':playlistId'].Users[':userId'].$post(args, options))
    },
  })
}

export function usePostPlaylistsPlaylistIdUsersUserId<
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
                      (typeof client.Playlists)[':playlistId']['Users'][':userId']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$post']>,
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
  const mutationDefaults = getPostPlaylistsPlaylistIdUsersUserIdMutationOptions<
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

export function getDeletePlaylistsPlaylistIdUsersUserIdMutationKey() {
  return ['Playlists', '/Playlists/:playlistId/Users/:userId', 'DELETE'] as const
}

export function getDeletePlaylistsPlaylistIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsPlaylistIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Playlists)[':playlistId']['Users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(client.Playlists[':playlistId'].Users[':userId'].$delete(args, options))
    },
  })
}

export function useDeletePlaylistsPlaylistIdUsersUserId<
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
                      (typeof client.Playlists)[':playlistId']['Users'][':userId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Playlists)[':playlistId']['Users'][':userId']['$delete']>,
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
  const mutationDefaults = getDeletePlaylistsPlaylistIdUsersUserIdMutationOptions<
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

export function getPostSessionsPlayingMutationKey() {
  return ['Sessions', '/Sessions/Playing', 'POST'] as const
}

export function getPostSessionsPlayingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Playing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsPlayingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Playing.$post>) {
      return parseResponse(client.Sessions.Playing.$post(args, options))
    },
  })
}

export function usePostSessionsPlaying<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Playing.$post>,
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
  const mutationDefaults = getPostSessionsPlayingMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsPlayingPingMutationKey() {
  return ['Sessions', '/Sessions/Playing/Ping', 'POST'] as const
}

export function getPostSessionsPlayingPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Ping.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Playing.Ping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsPlayingPingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Playing.Ping.$post>) {
      return parseResponse(client.Sessions.Playing.Ping.$post(args, options))
    },
  })
}

export function usePostSessionsPlayingPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Ping.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Playing.Ping.$post>,
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
  const mutationDefaults = getPostSessionsPlayingPingMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsPlayingProgressMutationKey() {
  return ['Sessions', '/Sessions/Playing/Progress', 'POST'] as const
}

export function getPostSessionsPlayingProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Progress.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Playing.Progress.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsPlayingProgressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Playing.Progress.$post>) {
      return parseResponse(client.Sessions.Playing.Progress.$post(args, options))
    },
  })
}

export function usePostSessionsPlayingProgress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Sessions.Playing.Progress.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Playing.Progress.$post>,
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
  const mutationDefaults = getPostSessionsPlayingProgressMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsPlayingStoppedMutationKey() {
  return ['Sessions', '/Sessions/Playing/Stopped', 'POST'] as const
}

export function getPostSessionsPlayingStoppedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Playing.Stopped.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Playing.Stopped.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsPlayingStoppedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Playing.Stopped.$post>) {
      return parseResponse(client.Sessions.Playing.Stopped.$post(args, options))
    },
  })
}

export function usePostSessionsPlayingStopped<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Sessions.Playing.Stopped.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Playing.Stopped.$post>,
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
  const mutationDefaults = getPostSessionsPlayingStoppedMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserPlayedItemsItemIdMutationKey() {
  return ['UserPlayedItems', '/UserPlayedItems/:itemId', 'POST'] as const
}

export function getPostUserPlayedItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserPlayedItems)[':itemId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserPlayedItemsItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$post']>) {
      return parseResponse(client.UserPlayedItems[':itemId'].$post(args, options))
    },
  })
}

export function usePostUserPlayedItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserPlayedItems)[':itemId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$post']>,
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
  const mutationDefaults = getPostUserPlayedItemsItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserPlayedItemsItemIdMutationKey() {
  return ['UserPlayedItems', '/UserPlayedItems/:itemId', 'DELETE'] as const
}

export function getDeleteUserPlayedItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserPlayedItems)[':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserPlayedItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$delete']>,
    ) {
      return parseResponse(client.UserPlayedItems[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteUserPlayedItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserPlayedItems)[':itemId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserPlayedItems)[':itemId']['$delete']>,
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
  const mutationDefaults = getDeleteUserPlayedItemsItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPluginsQueryKey() {
  return ['Plugins', '/Plugins'] as const
}

export function getPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>
          >,
          ReturnType<typeof getPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Plugins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePluginsPluginIdMutationKey() {
  return ['Plugins', '/Plugins/:pluginId', 'DELETE'] as const
}

export function getDeletePluginsPluginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Plugins)[':pluginId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePluginsPluginIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Plugins)[':pluginId']['$delete']>) {
      return parseResponse(client.Plugins[':pluginId'].$delete(args, options))
    },
  })
}

export function useDeletePluginsPluginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Plugins)[':pluginId']['$delete']>,
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
  const mutationDefaults = getDeletePluginsPluginIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePluginsPluginIdVersionMutationKey() {
  return ['Plugins', '/Plugins/:pluginId/:version', 'DELETE'] as const
}

export function getDeletePluginsPluginIdVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePluginsPluginIdVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>,
    ) {
      return parseResponse(client.Plugins[':pluginId'][':version'].$delete(args, options))
    },
  })
}

export function useDeletePluginsPluginIdVersion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['$delete']>,
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
  const mutationDefaults = getDeletePluginsPluginIdVersionMutationOptions<TError, TOnMutateResult>(
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

export function getPostPluginsPluginIdVersionDisableMutationKey() {
  return ['Plugins', '/Plugins/:pluginId/:version/Disable', 'POST'] as const
}

export function getPostPluginsPluginIdVersionDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsPluginIdVersionDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>,
    ) {
      return parseResponse(client.Plugins[':pluginId'][':version'].Disable.$post(args, options))
    },
  })
}

export function usePostPluginsPluginIdVersionDisable<
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
                    ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Disable']['$post']>,
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
  const mutationDefaults = getPostPluginsPluginIdVersionDisableMutationOptions<
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

export function getPostPluginsPluginIdVersionEnableMutationKey() {
  return ['Plugins', '/Plugins/:pluginId/:version/Enable', 'POST'] as const
}

export function getPostPluginsPluginIdVersionEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsPluginIdVersionEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>,
    ) {
      return parseResponse(client.Plugins[':pluginId'][':version'].Enable.$post(args, options))
    },
  })
}

export function usePostPluginsPluginIdVersionEnable<
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
                    ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Enable']['$post']>,
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
  const mutationDefaults = getPostPluginsPluginIdVersionEnableMutationOptions<
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

export function getPluginsPluginIdVersionImageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>
  >,
) {
  return ['Plugins', '/Plugins/:pluginId/:version/Image', toValue(args)] as const
}

export function getPluginsPluginIdVersionImageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsPluginIdVersionImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Plugins[':pluginId'][':version'].Image.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsPluginIdVersionImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>
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
                  ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPluginsPluginIdVersionImageQueryKey>
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
          Awaited<ReturnType<(typeof client.Plugins)[':pluginId'][':version']['Image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsPluginIdVersionImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsPluginIdVersionImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Plugins[':pluginId'][':version'].Image.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsPluginIdConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>
  >,
) {
  return ['Plugins', '/Plugins/:pluginId/Configuration', toValue(args)] as const
}

export function getPluginsPluginIdConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsPluginIdConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Plugins[':pluginId'].Configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePluginsPluginIdConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPluginsPluginIdConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsPluginIdConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsPluginIdConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Plugins[':pluginId'].Configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPluginsPluginIdConfigurationMutationKey() {
  return ['Plugins', '/Plugins/:pluginId/Configuration', 'POST'] as const
}

export function getPostPluginsPluginIdConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsPluginIdConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>,
    ) {
      return parseResponse(client.Plugins[':pluginId'].Configuration.$post(args, options))
    },
  })
}

export function usePostPluginsPluginIdConfiguration<
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
                    ReturnType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Plugins)[':pluginId']['Configuration']['$post']>,
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
  const mutationDefaults = getPostPluginsPluginIdConfigurationMutationOptions<
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

export function getPostPluginsPluginIdManifestMutationKey() {
  return ['Plugins', '/Plugins/:pluginId/Manifest', 'POST'] as const
}

export function getPostPluginsPluginIdManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsPluginIdManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>,
    ) {
      return parseResponse(client.Plugins[':pluginId'].Manifest.$post(args, options))
    },
  })
}

export function usePostPluginsPluginIdManifest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Plugins)[':pluginId']['Manifest']['$post']>,
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
  const mutationDefaults = getPostPluginsPluginIdManifestMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuickConnectAuthorizeMutationKey() {
  return ['QuickConnect', '/QuickConnect/Authorize', 'POST'] as const
}

export function getPostQuickConnectAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Authorize.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.QuickConnect.Authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.QuickConnect.Authorize.$post>) {
      return parseResponse(client.QuickConnect.Authorize.$post(args, options))
    },
  })
}

export function usePostQuickConnectAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Authorize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.QuickConnect.Authorize.$post>,
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
  const mutationDefaults = getPostQuickConnectAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getQuickConnectConnectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.QuickConnect.Connect.$get>>,
) {
  return ['QuickConnect', '/QuickConnect/Connect', toValue(args)] as const
}

export function getQuickConnectConnectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.QuickConnect.Connect.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuickConnectConnectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.QuickConnect.Connect.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuickConnectConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.QuickConnect.Connect.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>
            >
          >,
          ReturnType<typeof getQuickConnectConnectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Connect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectConnectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuickConnectConnectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.QuickConnect.Connect.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuickConnectEnabledQueryKey() {
  return ['QuickConnect', '/QuickConnect/Enabled'] as const
}

export function getQuickConnectEnabledQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQuickConnectEnabledQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.QuickConnect.Enabled.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuickConnectEnabled<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>
            >
          >,
          ReturnType<typeof getQuickConnectEnabledQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Enabled.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuickConnectEnabledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQuickConnectEnabledQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.QuickConnect.Enabled.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQuickConnectInitiateMutationKey() {
  return ['QuickConnect', '/QuickConnect/Initiate', 'POST'] as const
}

export function getPostQuickConnectInitiateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostQuickConnectInitiateMutationKey(),
    async mutationFn() {
      return parseResponse(client.QuickConnect.Initiate.$post(undefined, options))
    },
  })
}

export function usePostQuickConnectInitiate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.QuickConnect.Initiate.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostQuickConnectInitiateMutationOptions<TError, TOnMutateResult>(
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

export function getItemsItemIdRemoteImagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/RemoteImages', toValue(args)] as const
}

export function getItemsItemIdRemoteImagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdRemoteImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].RemoteImages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdRemoteImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdRemoteImagesQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdRemoteImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdRemoteImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].RemoteImages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsItemIdRemoteImagesDownloadMutationKey() {
  return ['Items', '/Items/:itemId/RemoteImages/Download', 'POST'] as const
}

export function getPostItemsItemIdRemoteImagesDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdRemoteImagesDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']>,
    ) {
      return parseResponse(client.Items[':itemId'].RemoteImages.Download.$post(args, options))
    },
  })
}

export function usePostItemsItemIdRemoteImagesDownload<
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
                      (typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Download']['$post']>,
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
  const mutationDefaults = getPostItemsItemIdRemoteImagesDownloadMutationOptions<
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

export function getItemsItemIdRemoteImagesProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/RemoteImages/Providers', toValue(args)] as const
}

export function getItemsItemIdRemoteImagesProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdRemoteImagesProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].RemoteImages.Providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdRemoteImagesProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
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
                  ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getItemsItemIdRemoteImagesProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['RemoteImages']['Providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdRemoteImagesProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdRemoteImagesProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].RemoteImages.Providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduledTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ScheduledTasks.$get>>,
) {
  return ['ScheduledTasks', '/ScheduledTasks', toValue(args)] as const
}

export function getScheduledTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ScheduledTasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduledTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ScheduledTasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduledTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ScheduledTasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
          >,
          ReturnType<typeof getScheduledTasksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ScheduledTasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getScheduledTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduledTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ScheduledTasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduledTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>>,
) {
  return ['ScheduledTasks', '/ScheduledTasks/:taskId', toValue(args)] as const
}

export function getScheduledTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduledTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ScheduledTasks[':taskId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScheduledTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ScheduledTasks)[':taskId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getScheduledTasksTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduledTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduledTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ScheduledTasks[':taskId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostScheduledTasksTaskIdTriggersMutationKey() {
  return ['ScheduledTasks', '/ScheduledTasks/:taskId/Triggers', 'POST'] as const
}

export function getPostScheduledTasksTaskIdTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduledTasksTaskIdTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>,
    ) {
      return parseResponse(client.ScheduledTasks[':taskId'].Triggers.$post(args, options))
    },
  })
}

export function usePostScheduledTasksTaskIdTriggers<
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
                    ReturnType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ScheduledTasks)[':taskId']['Triggers']['$post']>,
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
  const mutationDefaults = getPostScheduledTasksTaskIdTriggersMutationOptions<
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

export function getPostScheduledTasksRunningTaskIdMutationKey() {
  return ['ScheduledTasks', '/ScheduledTasks/Running/:taskId', 'POST'] as const
}

export function getPostScheduledTasksRunningTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScheduledTasksRunningTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>,
    ) {
      return parseResponse(client.ScheduledTasks.Running[':taskId'].$post(args, options))
    },
  })
}

export function usePostScheduledTasksRunningTaskId<
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
                  Awaited<ReturnType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$post']>,
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
  const mutationDefaults = getPostScheduledTasksRunningTaskIdMutationOptions<
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

export function getDeleteScheduledTasksRunningTaskIdMutationKey() {
  return ['ScheduledTasks', '/ScheduledTasks/Running/:taskId', 'DELETE'] as const
}

export function getDeleteScheduledTasksRunningTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScheduledTasksRunningTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>,
    ) {
      return parseResponse(client.ScheduledTasks.Running[':taskId'].$delete(args, options))
    },
  })
}

export function useDeleteScheduledTasksRunningTaskId<
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
                  Awaited<ReturnType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ScheduledTasks.Running)[':taskId']['$delete']>,
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
  const mutationDefaults = getDeleteScheduledTasksRunningTaskIdMutationOptions<
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

export function getSearchHintsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.Hints.$get>>,
) {
  return ['Search', '/Search/Hints', toValue(args)] as const
}

export function getSearchHintsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.Hints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchHintsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Search.Hints.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearchHints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Search.Hints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>
          >,
          ReturnType<typeof getSearchHintsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Search.Hints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchHintsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchHintsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Search.Hints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthPasswordResetProvidersQueryKey() {
  return ['Auth', '/Auth/PasswordResetProviders'] as const
}

export function getAuthPasswordResetProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthPasswordResetProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Auth.PasswordResetProviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthPasswordResetProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>
              >
            >
          >,
          ReturnType<typeof getAuthPasswordResetProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Auth.PasswordResetProviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthPasswordResetProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthPasswordResetProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Auth.PasswordResetProviders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthProvidersQueryKey() {
  return ['Auth', '/Auth/Providers'] as const
}

export function getAuthProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Auth.Providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
          >,
          ReturnType<typeof getAuthProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Auth.Providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Auth.Providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Sessions.$get>>,
) {
  return ['Sessions', '/Sessions', toValue(args)] as const
}

export function getSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Sessions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Sessions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Sessions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>
          >,
          ReturnType<typeof getSessionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSessionsSessionIdCommandMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/Command', 'POST'] as const
}

export function getPostSessionsSessionIdCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Command']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Command']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['Command']['$post']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].Command.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdCommand<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Command']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['Command']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdCommandMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsSessionIdCommandCommandMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/Command/:command', 'POST'] as const
}

export function getPostSessionsSessionIdCommandCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Sessions)[':sessionId']['Command'][':command']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Command'][':command']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdCommandCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Sessions)[':sessionId']['Command'][':command']['$post']
      >,
    ) {
      return parseResponse(client.Sessions[':sessionId'].Command[':command'].$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdCommandCommand<
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
                      (typeof client.Sessions)[':sessionId']['Command'][':command']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['Command'][':command']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdCommandCommandMutationOptions<
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

export function getPostSessionsSessionIdMessageMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/Message', 'POST'] as const
}

export function getPostSessionsSessionIdMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Message']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['Message']['$post']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].Message.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Message']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['Message']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdMessageMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsSessionIdPlayingMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/Playing', 'POST'] as const
}

export function getPostSessionsSessionIdPlayingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdPlayingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].Playing.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdPlaying<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['Playing']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdPlayingMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsSessionIdPlayingCommandMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/Playing/:command', 'POST'] as const
}

export function getPostSessionsSessionIdPlayingCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdPlayingCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']
      >,
    ) {
      return parseResponse(client.Sessions[':sessionId'].Playing[':command'].$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdPlayingCommand<
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
                      (typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['Playing'][':command']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdPlayingCommandMutationOptions<
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

export function getPostSessionsSessionIdSystemCommandMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/System/:command', 'POST'] as const
}

export function getPostSessionsSessionIdSystemCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Sessions)[':sessionId']['System'][':command']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['System'][':command']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdSystemCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['System'][':command']['$post']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].System[':command'].$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdSystemCommand<
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
                      (typeof client.Sessions)[':sessionId']['System'][':command']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['System'][':command']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdSystemCommandMutationOptions<
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

export function getPostSessionsSessionIdUserUserIdMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/User/:userId', 'POST'] as const
}

export function getPostSessionsSessionIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].User[':userId'].$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdUserUserId<
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
                    ReturnType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdUserUserIdMutationOptions<
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

export function getDeleteSessionsSessionIdUserUserIdMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/User/:userId', 'DELETE'] as const
}

export function getDeleteSessionsSessionIdUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsSessionIdUserUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].User[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteSessionsSessionIdUserUserId<
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
                    ReturnType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['User'][':userId']['$delete']>,
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
  const mutationDefaults = getDeleteSessionsSessionIdUserUserIdMutationOptions<
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

export function getPostSessionsSessionIdViewingMutationKey() {
  return ['Sessions', '/Sessions/:sessionId/Viewing', 'POST'] as const
}

export function getPostSessionsSessionIdViewingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdViewingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>,
    ) {
      return parseResponse(client.Sessions[':sessionId'].Viewing.$post(args, options))
    },
  })
}

export function usePostSessionsSessionIdViewing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Sessions)[':sessionId']['Viewing']['$post']>,
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
  const mutationDefaults = getPostSessionsSessionIdViewingMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsCapabilitiesMutationKey() {
  return ['Sessions', '/Sessions/Capabilities', 'POST'] as const
}

export function getPostSessionsCapabilitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Capabilities.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Capabilities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsCapabilitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Capabilities.$post>) {
      return parseResponse(client.Sessions.Capabilities.$post(args, options))
    },
  })
}

export function usePostSessionsCapabilities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Capabilities.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Capabilities.$post>,
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
  const mutationDefaults = getPostSessionsCapabilitiesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsCapabilitiesFullMutationKey() {
  return ['Sessions', '/Sessions/Capabilities/Full', 'POST'] as const
}

export function getPostSessionsCapabilitiesFullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Capabilities.Full.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Capabilities.Full.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsCapabilitiesFullMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Capabilities.Full.$post>) {
      return parseResponse(client.Sessions.Capabilities.Full.$post(args, options))
    },
  })
}

export function usePostSessionsCapabilitiesFull<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.Sessions.Capabilities.Full.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Capabilities.Full.$post>,
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
  const mutationDefaults = getPostSessionsCapabilitiesFullMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsLogoutMutationKey() {
  return ['Sessions', '/Sessions/Logout', 'POST'] as const
}

export function getPostSessionsLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Logout.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.Sessions.Logout.$post(undefined, options))
    },
  })
}

export function usePostSessionsLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Logout.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSessionsLogoutMutationOptions<TError, TOnMutateResult>(
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

export function getPostSessionsViewingMutationKey() {
  return ['Sessions', '/Sessions/Viewing', 'POST'] as const
}

export function getPostSessionsViewingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Viewing.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Sessions.Viewing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsViewingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Sessions.Viewing.$post>) {
      return parseResponse(client.Sessions.Viewing.$post(args, options))
    },
  })
}

export function usePostSessionsViewing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Sessions.Viewing.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Sessions.Viewing.$post>,
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
  const mutationDefaults = getPostSessionsViewingMutationOptions<TError, TOnMutateResult>(
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

export function getPostStartupCompleteMutationKey() {
  return ['Startup', '/Startup/Complete', 'POST'] as const
}

export function getPostStartupCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Complete.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostStartupCompleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.Startup.Complete.$post(undefined, options))
    },
  })
}

export function usePostStartupComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Complete.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostStartupCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getStartupConfigurationQueryKey() {
  return ['Startup', '/Startup/Configuration'] as const
}

export function getStartupConfigurationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStartupConfigurationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Startup.Configuration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStartupConfiguration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
            >
          >,
          ReturnType<typeof getStartupConfigurationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStartupConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStartupConfigurationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Startup.Configuration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStartupConfigurationMutationKey() {
  return ['Startup', '/Startup/Configuration', 'POST'] as const
}

export function getPostStartupConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Startup.Configuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartupConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Startup.Configuration.$post>) {
      return parseResponse(client.Startup.Configuration.$post(args, options))
    },
  })
}

export function usePostStartupConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Startup.Configuration.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Startup.Configuration.$post>,
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
  const mutationDefaults = getPostStartupConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getStartupFirstUserQueryKey() {
  return ['Startup', '/Startup/FirstUser'] as const
}

export function getStartupFirstUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStartupFirstUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Startup.FirstUser.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStartupFirstUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>
            >
          >,
          ReturnType<typeof getStartupFirstUserQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.FirstUser.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStartupFirstUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStartupFirstUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Startup.FirstUser.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStartupRemoteAccessMutationKey() {
  return ['Startup', '/Startup/RemoteAccess', 'POST'] as const
}

export function getPostStartupRemoteAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Startup.RemoteAccess.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Startup.RemoteAccess.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartupRemoteAccessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Startup.RemoteAccess.$post>) {
      return parseResponse(client.Startup.RemoteAccess.$post(args, options))
    },
  })
}

export function usePostStartupRemoteAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Startup.RemoteAccess.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Startup.RemoteAccess.$post>,
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
  const mutationDefaults = getPostStartupRemoteAccessMutationOptions<TError, TOnMutateResult>(
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

export function getStartupUserQueryKey() {
  return ['Startup', '/Startup/User'] as const
}

export function getStartupUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStartupUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Startup.User.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStartupUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>
          >,
          ReturnType<typeof getStartupUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStartupUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStartupUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Startup.User.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStartupUserMutationKey() {
  return ['Startup', '/Startup/User', 'POST'] as const
}

export function getPostStartupUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Startup.User.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartupUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Startup.User.$post>) {
      return parseResponse(client.Startup.User.$post(args, options))
    },
  })
}

export function usePostStartupUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Startup.User.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Startup.User.$post>,
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
  const mutationDefaults = getPostStartupUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStudiosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Studios.$get>>,
) {
  return ['Studios', '/Studios', toValue(args)] as const
}

export function getStudiosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Studios.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Studios.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStudios<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Studios.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>
          >,
          ReturnType<typeof getStudiosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Studios.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStudiosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Studios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudiosNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Studios)[':name']['$get']>>,
) {
  return ['Studios', '/Studios/:name', toValue(args)] as const
}

export function getStudiosNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Studios)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudiosNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Studios[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudiosName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Studios)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getStudiosNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Studios)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudiosNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudiosNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Studios[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFallbackFontFontsQueryKey() {
  return ['FallbackFont', '/FallbackFont/Fonts'] as const
}

export function getFallbackFontFontsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFallbackFontFontsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FallbackFont.Fonts.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFallbackFontFonts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>
            >
          >,
          ReturnType<typeof getFallbackFontFontsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FallbackFont.Fonts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFallbackFontFontsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFallbackFontFontsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.FallbackFont.Fonts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFallbackFontFontsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>,
) {
  return ['FallbackFont', '/FallbackFont/Fonts/:name', toValue(args)] as const
}

export function getFallbackFontFontsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFallbackFontFontsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FallbackFont.Fonts[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFallbackFontFontsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFallbackFontFontsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.FallbackFont.Fonts)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFallbackFontFontsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFallbackFontFontsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FallbackFont.Fonts[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
    >
  >,
) {
  return ['Items', '/Items/:itemId/RemoteSearch/Subtitles/:language', toValue(args)] as const
}

export function getItemsItemIdRemoteSearchSubtitlesLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].RemoteSearch.Subtitles[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdRemoteSearchSubtitlesLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':language']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdRemoteSearchSubtitlesLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].RemoteSearch.Subtitles[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdMutationKey() {
  return ['Items', '/Items/:itemId/RemoteSearch/Subtitles/:subtitleId', 'POST'] as const
}

export function getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
      >,
    ) {
      return parseResponse(
        client.Items[':itemId'].RemoteSearch.Subtitles[':subtitleId'].$post(args, options),
      )
    },
  })
}

export function usePostItemsItemIdRemoteSearchSubtitlesSubtitleId<
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
                      (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.Items)[':itemId']['RemoteSearch']['Subtitles'][':subtitleId']['$post']
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
  const mutationDefaults = getPostItemsItemIdRemoteSearchSubtitlesSubtitleIdMutationOptions<
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

export function getProvidersSubtitlesSubtitlesSubtitleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>
  >,
) {
  return ['Providers', '/Providers/Subtitles/Subtitles/:subtitleId', toValue(args)] as const
}

export function getProvidersSubtitlesSubtitlesSubtitleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProvidersSubtitlesSubtitlesSubtitleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Providers.Subtitles.Subtitles[':subtitleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersSubtitlesSubtitlesSubtitleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>
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
                  ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProvidersSubtitlesSubtitlesSubtitleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Providers.Subtitles.Subtitles)[':subtitleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersSubtitlesSubtitlesSubtitleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProvidersSubtitlesSubtitlesSubtitleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Providers.Subtitles.Subtitles[':subtitleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
    >
  >,
) {
  return [
    'Videos',
    '/Videos/:itemId/:mediaSourceId/Subtitles/:index/subtitles.m3u8',
    toValue(args),
  ] as const
}

export function getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['subtitles.m3u8'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId'][':mediaSourceId']['Subtitles'][':index']['subtitles.m3u8']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVideosItemIdMediaSourceIdSubtitlesIndexSubtitlesM3u8QueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':itemId'][':mediaSourceId'].Subtitles[':index']['subtitles.m3u8'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostVideosItemIdSubtitlesMutationKey() {
  return ['Videos', '/Videos/:itemId/Subtitles', 'POST'] as const
}

export function getPostVideosItemIdSubtitlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosItemIdSubtitlesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>,
    ) {
      return parseResponse(client.Videos[':itemId'].Subtitles.$post(args, options))
    },
  })
}

export function usePostVideosItemIdSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Videos)[':itemId']['Subtitles']['$post']>,
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
  const mutationDefaults = getPostVideosItemIdSubtitlesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteVideosItemIdSubtitlesIndexMutationKey() {
  return ['Videos', '/Videos/:itemId/Subtitles/:index', 'DELETE'] as const
}

export function getDeleteVideosItemIdSubtitlesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosItemIdSubtitlesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>,
    ) {
      return parseResponse(client.Videos[':itemId'].Subtitles[':index'].$delete(args, options))
    },
  })
}

export function useDeleteVideosItemIdSubtitlesIndex<
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
                    ReturnType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Videos)[':itemId']['Subtitles'][':index']['$delete']>,
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
  const mutationDefaults = getDeleteVideosItemIdSubtitlesIndexMutationOptions<
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

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
    >
  >,
) {
  return [
    'Videos',
    '/Videos/:routeItemId/:routeMediaSourceId/Subtitles/:routeIndex/:routeStartPositionTicks/Stream.:routeFormat',
    toValue(args),
  ] as const
}

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
          ':routeStartPositionTicks'
        ]['Stream.:routeFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex'][':routeStartPositionTicks']['Stream.:routeFormat']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexRouteStartPositionTicksStreamRouteFormatQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
            ':routeStartPositionTicks'
          ]['Stream.:routeFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
    >
  >,
) {
  return [
    'Videos',
    '/Videos/:routeItemId/:routeMediaSourceId/Subtitles/:routeIndex/Stream.:routeFormat',
    toValue(args),
  ] as const
}

export function getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
          'Stream.:routeFormat'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey
          >
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
          Awaited<
            ReturnType<
              (typeof client.Videos)[':routeItemId'][':routeMediaSourceId']['Subtitles'][':routeIndex']['Stream.:routeFormat']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVideosRouteItemIdRouteMediaSourceIdSubtitlesRouteIndexStreamRouteFormatQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':routeItemId'][':routeMediaSourceId'].Subtitles[':routeIndex'][
            'Stream.:routeFormat'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Suggestions.$get>>,
) {
  return ['Items', '/Items/Suggestions', toValue(args)] as const
}

export function getItemsSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.Suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>
            >
          >,
          ReturnType<typeof getItemsSuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.Suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSyncPlayIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SyncPlay)[':id']['$get']>>,
) {
  return ['SyncPlay', '/SyncPlay/:id', toValue(args)] as const
}

export function getSyncPlayIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SyncPlay)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncPlayIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SyncPlay[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSyncPlayId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SyncPlay)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSyncPlayIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SyncPlay)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSyncPlayIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncPlayIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SyncPlay[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSyncPlayBufferingMutationKey() {
  return ['SyncPlay', '/SyncPlay/Buffering', 'POST'] as const
}

export function getPostSyncPlayBufferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Buffering.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.Buffering.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayBufferingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.Buffering.$post>) {
      return parseResponse(client.SyncPlay.Buffering.$post(args, options))
    },
  })
}

export function usePostSyncPlayBuffering<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Buffering.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.Buffering.$post>,
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
  const mutationDefaults = getPostSyncPlayBufferingMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayJoinMutationKey() {
  return ['SyncPlay', '/SyncPlay/Join', 'POST'] as const
}

export function getPostSyncPlayJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Join.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.Join.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayJoinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.Join.$post>) {
      return parseResponse(client.SyncPlay.Join.$post(args, options))
    },
  })
}

export function usePostSyncPlayJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Join.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.Join.$post>,
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
  const mutationDefaults = getPostSyncPlayJoinMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayLeaveMutationKey() {
  return ['SyncPlay', '/SyncPlay/Leave', 'POST'] as const
}

export function getPostSyncPlayLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Leave.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayLeaveMutationKey(),
    async mutationFn() {
      return parseResponse(client.SyncPlay.Leave.$post(undefined, options))
    },
  })
}

export function usePostSyncPlayLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Leave.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSyncPlayLeaveMutationOptions<TError, TOnMutateResult>(
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

export function getSyncPlayListQueryKey() {
  return ['SyncPlay', '/SyncPlay/List'] as const
}

export function getSyncPlayListQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSyncPlayListQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SyncPlay.List.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSyncPlayList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
          >,
          ReturnType<typeof getSyncPlayListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.List.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSyncPlayListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSyncPlayListQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.SyncPlay.List.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSyncPlayMovePlaylistItemMutationKey() {
  return ['SyncPlay', '/SyncPlay/MovePlaylistItem', 'POST'] as const
}

export function getPostSyncPlayMovePlaylistItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.MovePlaylistItem.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.MovePlaylistItem.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayMovePlaylistItemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.MovePlaylistItem.$post>) {
      return parseResponse(client.SyncPlay.MovePlaylistItem.$post(args, options))
    },
  })
}

export function usePostSyncPlayMovePlaylistItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.SyncPlay.MovePlaylistItem.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.MovePlaylistItem.$post>,
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
  const mutationDefaults = getPostSyncPlayMovePlaylistItemMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayNewMutationKey() {
  return ['SyncPlay', '/SyncPlay/New', 'POST'] as const
}

export function getPostSyncPlayNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.New.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.New.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.New.$post>) {
      return parseResponse(client.SyncPlay.New.$post(args, options))
    },
  })
}

export function usePostSyncPlayNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.New.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.New.$post>,
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
  const mutationDefaults = getPostSyncPlayNewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSyncPlayNextItemMutationKey() {
  return ['SyncPlay', '/SyncPlay/NextItem', 'POST'] as const
}

export function getPostSyncPlayNextItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.NextItem.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.NextItem.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayNextItemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.NextItem.$post>) {
      return parseResponse(client.SyncPlay.NextItem.$post(args, options))
    },
  })
}

export function usePostSyncPlayNextItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.NextItem.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.NextItem.$post>,
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
  const mutationDefaults = getPostSyncPlayNextItemMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayPauseMutationKey() {
  return ['SyncPlay', '/SyncPlay/Pause', 'POST'] as const
}

export function getPostSyncPlayPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Pause.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayPauseMutationKey(),
    async mutationFn() {
      return parseResponse(client.SyncPlay.Pause.$post(undefined, options))
    },
  })
}

export function usePostSyncPlayPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Pause.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSyncPlayPauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayPingMutationKey() {
  return ['SyncPlay', '/SyncPlay/Ping', 'POST'] as const
}

export function getPostSyncPlayPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ping.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.Ping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayPingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.Ping.$post>) {
      return parseResponse(client.SyncPlay.Ping.$post(args, options))
    },
  })
}

export function usePostSyncPlayPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ping.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.Ping.$post>,
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
  const mutationDefaults = getPostSyncPlayPingMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayPreviousItemMutationKey() {
  return ['SyncPlay', '/SyncPlay/PreviousItem', 'POST'] as const
}

export function getPostSyncPlayPreviousItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.PreviousItem.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.PreviousItem.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayPreviousItemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.PreviousItem.$post>) {
      return parseResponse(client.SyncPlay.PreviousItem.$post(args, options))
    },
  })
}

export function usePostSyncPlayPreviousItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.PreviousItem.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.PreviousItem.$post>,
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
  const mutationDefaults = getPostSyncPlayPreviousItemMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayQueueMutationKey() {
  return ['SyncPlay', '/SyncPlay/Queue', 'POST'] as const
}

export function getPostSyncPlayQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Queue.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.Queue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayQueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.Queue.$post>) {
      return parseResponse(client.SyncPlay.Queue.$post(args, options))
    },
  })
}

export function usePostSyncPlayQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Queue.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.Queue.$post>,
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
  const mutationDefaults = getPostSyncPlayQueueMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayReadyMutationKey() {
  return ['SyncPlay', '/SyncPlay/Ready', 'POST'] as const
}

export function getPostSyncPlayReadyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ready.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.Ready.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayReadyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.Ready.$post>) {
      return parseResponse(client.SyncPlay.Ready.$post(args, options))
    },
  })
}

export function usePostSyncPlayReady<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Ready.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.Ready.$post>,
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
  const mutationDefaults = getPostSyncPlayReadyMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayRemoveFromPlaylistMutationKey() {
  return ['SyncPlay', '/SyncPlay/RemoveFromPlaylist', 'POST'] as const
}

export function getPostSyncPlayRemoveFromPlaylistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.RemoveFromPlaylist.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.RemoveFromPlaylist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayRemoveFromPlaylistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.RemoveFromPlaylist.$post>) {
      return parseResponse(client.SyncPlay.RemoveFromPlaylist.$post(args, options))
    },
  })
}

export function usePostSyncPlayRemoveFromPlaylist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.SyncPlay.RemoveFromPlaylist.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.RemoveFromPlaylist.$post>,
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
  const mutationDefaults = getPostSyncPlayRemoveFromPlaylistMutationOptions<
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

export function getPostSyncPlaySeekMutationKey() {
  return ['SyncPlay', '/SyncPlay/Seek', 'POST'] as const
}

export function getPostSyncPlaySeekMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Seek.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.Seek.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlaySeekMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.Seek.$post>) {
      return parseResponse(client.SyncPlay.Seek.$post(args, options))
    },
  })
}

export function usePostSyncPlaySeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Seek.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.Seek.$post>,
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
  const mutationDefaults = getPostSyncPlaySeekMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlaySetIgnoreWaitMutationKey() {
  return ['SyncPlay', '/SyncPlay/SetIgnoreWait', 'POST'] as const
}

export function getPostSyncPlaySetIgnoreWaitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetIgnoreWait.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlaySetIgnoreWaitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post>) {
      return parseResponse(client.SyncPlay.SetIgnoreWait.$post(args, options))
    },
  })
}

export function usePostSyncPlaySetIgnoreWait<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.SyncPlay.SetIgnoreWait.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.SetIgnoreWait.$post>,
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
  const mutationDefaults = getPostSyncPlaySetIgnoreWaitMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlaySetNewQueueMutationKey() {
  return ['SyncPlay', '/SyncPlay/SetNewQueue', 'POST'] as const
}

export function getPostSyncPlaySetNewQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetNewQueue.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.SetNewQueue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlaySetNewQueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.SetNewQueue.$post>) {
      return parseResponse(client.SyncPlay.SetNewQueue.$post(args, options))
    },
  })
}

export function usePostSyncPlaySetNewQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetNewQueue.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.SetNewQueue.$post>,
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
  const mutationDefaults = getPostSyncPlaySetNewQueueMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlaySetPlaylistItemMutationKey() {
  return ['SyncPlay', '/SyncPlay/SetPlaylistItem', 'POST'] as const
}

export function getPostSyncPlaySetPlaylistItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetPlaylistItem.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.SetPlaylistItem.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlaySetPlaylistItemMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.SetPlaylistItem.$post>) {
      return parseResponse(client.SyncPlay.SetPlaylistItem.$post(args, options))
    },
  })
}

export function usePostSyncPlaySetPlaylistItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.SyncPlay.SetPlaylistItem.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.SetPlaylistItem.$post>,
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
  const mutationDefaults = getPostSyncPlaySetPlaylistItemMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlaySetRepeatModeMutationKey() {
  return ['SyncPlay', '/SyncPlay/SetRepeatMode', 'POST'] as const
}

export function getPostSyncPlaySetRepeatModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetRepeatMode.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlaySetRepeatModeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post>) {
      return parseResponse(client.SyncPlay.SetRepeatMode.$post(args, options))
    },
  })
}

export function usePostSyncPlaySetRepeatMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.SyncPlay.SetRepeatMode.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.SetRepeatMode.$post>,
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
  const mutationDefaults = getPostSyncPlaySetRepeatModeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlaySetShuffleModeMutationKey() {
  return ['SyncPlay', '/SyncPlay/SetShuffleMode', 'POST'] as const
}

export function getPostSyncPlaySetShuffleModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.SetShuffleMode.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlaySetShuffleModeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post>) {
      return parseResponse(client.SyncPlay.SetShuffleMode.$post(args, options))
    },
  })
}

export function usePostSyncPlaySetShuffleMode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.SyncPlay.SetShuffleMode.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.SyncPlay.SetShuffleMode.$post>,
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
  const mutationDefaults = getPostSyncPlaySetShuffleModeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayStopMutationKey() {
  return ['SyncPlay', '/SyncPlay/Stop', 'POST'] as const
}

export function getPostSyncPlayStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Stop.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayStopMutationKey(),
    async mutationFn() {
      return parseResponse(client.SyncPlay.Stop.$post(undefined, options))
    },
  })
}

export function usePostSyncPlayStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Stop.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSyncPlayStopMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncPlayUnpauseMutationKey() {
  return ['SyncPlay', '/SyncPlay/Unpause', 'POST'] as const
}

export function getPostSyncPlayUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Unpause.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSyncPlayUnpauseMutationKey(),
    async mutationFn() {
      return parseResponse(client.SyncPlay.Unpause.$post(undefined, options))
    },
  })
}

export function usePostSyncPlayUnpause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.SyncPlay.Unpause.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSyncPlayUnpauseMutationOptions<TError, TOnMutateResult>(
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

export function getSystemEndpointQueryKey() {
  return ['System', '/System/Endpoint'] as const
}

export function getSystemEndpointQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemEndpointQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Endpoint.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>
            >
          >,
          ReturnType<typeof getSystemEndpointQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Endpoint.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemEndpointQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Endpoint.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemInfoQueryKey() {
  return ['System', '/System/Info'] as const
}

export function getSystemInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>
          >,
          ReturnType<typeof getSystemInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemInfoPublicQueryKey() {
  return ['System', '/System/Info/Public'] as const
}

export function getSystemInfoPublicQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemInfoPublicQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Info.Public.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemInfoPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>
            >
          >,
          ReturnType<typeof getSystemInfoPublicQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemInfoPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemInfoPublicQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Info.Public.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemInfoStorageQueryKey() {
  return ['System', '/System/Info/Storage'] as const
}

export function getSystemInfoStorageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemInfoStorageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Info.Storage.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemInfoStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>
            >
          >,
          ReturnType<typeof getSystemInfoStorageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Info.Storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemInfoStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemInfoStorageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Info.Storage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemLogsQueryKey() {
  return ['System', '/System/Logs'] as const
}

export function getSystemLogsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemLogsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>
          >,
          ReturnType<typeof getSystemLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemLogsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Logs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemLogsLogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.System.Logs.Log.$get>>,
) {
  return ['System', '/System/Logs/Log', toValue(args)] as const
}

export function getSystemLogsLogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.System.Logs.Log.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemLogsLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Logs.Log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemLogsLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.System.Logs.Log.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>
            >
          >,
          ReturnType<typeof getSystemLogsLogQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Logs.Log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemLogsLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemLogsLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Logs.Log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemPingQueryKey() {
  return ['System', '/System/Ping'] as const
}

export function getSystemPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.System.Ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>
          >,
          ReturnType<typeof getSystemPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.System.Ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemPingMutationKey() {
  return ['System', '/System/Ping', 'POST'] as const
}

export function getPostSystemPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.System.Ping.$post(undefined, options))
    },
  })
}

export function usePostSystemPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Ping.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSystemPingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSystemRestartMutationKey() {
  return ['System', '/System/Restart', 'POST'] as const
}

export function getPostSystemRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Restart.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.System.Restart.$post(undefined, options))
    },
  })
}

export function usePostSystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.System.Restart.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSystemRestartMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemShutdownMutationKey() {
  return ['System', '/System/Shutdown', 'POST'] as const
}

export function getPostSystemShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.System.Shutdown.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.System.Shutdown.$post(undefined, options))
    },
  })
}

export function usePostSystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.System.Shutdown.$post>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostSystemShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getGetUtcTimeQueryKey() {
  return ['GetUtcTime', '/GetUtcTime'] as const
}

export function getGetUtcTimeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetUtcTimeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.GetUtcTime.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetUtcTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>
          >,
          ReturnType<typeof getGetUtcTimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetUtcTime.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetUtcTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetUtcTimeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.GetUtcTime.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrailersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Trailers.$get>>,
) {
  return ['Trailers', '/Trailers', toValue(args)] as const
}

export function getTrailersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Trailers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrailersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Trailers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrailers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Trailers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>
          >,
          ReturnType<typeof getTrailersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Trailers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrailersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrailersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Trailers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosItemIdTrickplayWidthIndexJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']>
  >,
) {
  return ['Videos', '/Videos/:itemId/Trickplay/:width/:index.jpg', toValue(args)] as const
}

export function getVideosItemIdTrickplayWidthIndexJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosItemIdTrickplayWidthIndexJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':itemId'].Trickplay[':width'][':index.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosItemIdTrickplayWidthIndexJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosItemIdTrickplayWidthIndexJpgQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId']['Trickplay'][':width'][':index.jpg']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdTrickplayWidthIndexJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosItemIdTrickplayWidthIndexJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':itemId'].Trickplay[':width'][':index.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosItemIdTrickplayWidthTilesM3u8QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']>
  >,
) {
  return ['Videos', '/Videos/:itemId/Trickplay/:width/tiles.m3u8', toValue(args)] as const
}

export function getVideosItemIdTrickplayWidthTilesM3u8QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosItemIdTrickplayWidthTilesM3u8QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':itemId'].Trickplay[':width']['tiles.m3u8'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosItemIdTrickplayWidthTilesM3u8<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosItemIdTrickplayWidthTilesM3u8QueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Videos)[':itemId']['Trickplay'][':width']['tiles.m3u8']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdTrickplayWidthTilesM3u8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosItemIdTrickplayWidthTilesM3u8QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':itemId'].Trickplay[':width']['tiles.m3u8'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsSeriesIdEpisodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>,
) {
  return ['Shows', '/Shows/:seriesId/Episodes', toValue(args)] as const
}

export function getShowsSeriesIdEpisodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsSeriesIdEpisodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shows[':seriesId'].Episodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsSeriesIdEpisodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsSeriesIdEpisodesQueryKey>
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
          Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Episodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsSeriesIdEpisodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsSeriesIdEpisodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shows[':seriesId'].Episodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsSeriesIdSeasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>,
) {
  return ['Shows', '/Shows/:seriesId/Seasons', toValue(args)] as const
}

export function getShowsSeriesIdSeasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsSeriesIdSeasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shows[':seriesId'].Seasons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsSeriesIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsSeriesIdSeasonsQueryKey>
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
          Awaited<ReturnType<(typeof client.Shows)[':seriesId']['Seasons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsSeriesIdSeasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsSeriesIdSeasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shows[':seriesId'].Seasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsNextUpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Shows.NextUp.$get>>,
) {
  return ['Shows', '/Shows/NextUp', toValue(args)] as const
}

export function getShowsNextUpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Shows.NextUp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsNextUpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shows.NextUp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShowsNextUp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Shows.NextUp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>
          >,
          ReturnType<typeof getShowsNextUpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.NextUp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShowsNextUpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsNextUpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shows.NextUp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Shows.Upcoming.$get>>,
) {
  return ['Shows', '/Shows/Upcoming', toValue(args)] as const
}

export function getShowsUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Shows.Upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shows.Upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Shows.Upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
          >,
          ReturnType<typeof getShowsUpcomingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shows.Upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shows.Upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioItemIdUniversalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>>,
) {
  return ['Audio', '/Audio/:itemId/universal', toValue(args)] as const
}

export function getAudioItemIdUniversalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAudioItemIdUniversalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Audio[':itemId'].universal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAudioItemIdUniversal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Audio)[':itemId']['universal']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAudioItemIdUniversalQueryKey>
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
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAudioItemIdUniversalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAudioItemIdUniversalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Audio[':itemId'].universal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadAudioItemIdUniversalMutationKey() {
  return ['Audio', '/Audio/:itemId/universal', 'HEAD'] as const
}

export function getHeadAudioItemIdUniversalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Audio)[':itemId']['universal']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadAudioItemIdUniversalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Audio)[':itemId']['universal']['$head']>,
    ) {
      return parseResponse(client.Audio[':itemId'].universal.$head(args, options))
    },
  })
}

export function useHeadAudioItemIdUniversal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Audio)[':itemId']['universal']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Audio)[':itemId']['universal']['$head']>,
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
  const mutationDefaults = getHeadAudioItemIdUniversalMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Users.$get>>,
) {
  return ['Users', '/Users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['Users', '/Users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.Users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.$post>) {
      return parseResponse(client.Users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Users)[':userId']['$get']>>,
) {
  return ['Users', '/Users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['Users', '/Users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Users)[':userId']['$delete']>) {
      return parseResponse(client.Users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Users)[':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Users)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdPolicyMutationKey() {
  return ['Users', '/Users/:userId/Policy', 'POST'] as const
}

export function getPostUsersUserIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Users)[':userId']['Policy']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Users)[':userId']['Policy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Users)[':userId']['Policy']['$post']>) {
      return parseResponse(client.Users[':userId'].Policy.$post(args, options))
    },
  })
}

export function usePostUsersUserIdPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Users)[':userId']['Policy']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Users)[':userId']['Policy']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersAuthenticateByNameMutationKey() {
  return ['Users', '/Users/AuthenticateByName', 'POST'] as const
}

export function getPostUsersAuthenticateByNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Users.AuthenticateByName.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Users.AuthenticateByName.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersAuthenticateByNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.AuthenticateByName.$post>) {
      return parseResponse(client.Users.AuthenticateByName.$post(args, options))
    },
  })
}

export function usePostUsersAuthenticateByName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Users.AuthenticateByName.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Users.AuthenticateByName.$post>,
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
  const mutationDefaults = getPostUsersAuthenticateByNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersAuthenticateWithQuickConnectMutationKey() {
  return ['Users', '/Users/AuthenticateWithQuickConnect', 'POST'] as const
}

export function getPostUsersAuthenticateWithQuickConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Users.AuthenticateWithQuickConnect.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.Users.AuthenticateWithQuickConnect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersAuthenticateWithQuickConnectMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.Users.AuthenticateWithQuickConnect.$post>,
    ) {
      return parseResponse(client.Users.AuthenticateWithQuickConnect.$post(args, options))
    },
  })
}

export function usePostUsersAuthenticateWithQuickConnect<
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
                Awaited<ReturnType<typeof client.Users.AuthenticateWithQuickConnect.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Users.AuthenticateWithQuickConnect.$post>,
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
  const mutationDefaults = getPostUsersAuthenticateWithQuickConnectMutationOptions<
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

export function getPostUsersConfigurationMutationKey() {
  return ['Users', '/Users/Configuration', 'POST'] as const
}

export function getPostUsersConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Users.Configuration.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Users.Configuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.Configuration.$post>) {
      return parseResponse(client.Users.Configuration.$post(args, options))
    },
  })
}

export function usePostUsersConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Users.Configuration.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Users.Configuration.$post>,
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
  const mutationDefaults = getPostUsersConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersForgotPasswordMutationKey() {
  return ['Users', '/Users/ForgotPassword', 'POST'] as const
}

export function getPostUsersForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Users.ForgotPassword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersForgotPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.ForgotPassword.$post>) {
      return parseResponse(client.Users.ForgotPassword.$post(args, options))
    },
  })
}

export function usePostUsersForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.Users.ForgotPassword.$post>,
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
  const mutationDefaults = getPostUsersForgotPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersForgotPasswordPinMutationKey() {
  return ['Users', '/Users/ForgotPassword/Pin', 'POST'] as const
}

export function getPostUsersForgotPasswordPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Users.ForgotPassword.Pin.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.Users.ForgotPassword.Pin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersForgotPasswordPinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.ForgotPassword.Pin.$post>) {
      return parseResponse(client.Users.ForgotPassword.Pin.$post(args, options))
    },
  })
}

export function usePostUsersForgotPasswordPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Users.ForgotPassword.Pin.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.Users.ForgotPassword.Pin.$post>,
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
  const mutationDefaults = getPostUsersForgotPasswordPinMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeQueryKey() {
  return ['Users', '/Users/Me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Users.Me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Users.Me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersNewMutationKey() {
  return ['Users', '/Users/New', 'POST'] as const
}

export function getPostUsersNewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.New.$post>>>>>,
    TError,
    InferRequestType<typeof client.Users.New.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersNewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.New.$post>) {
      return parseResponse(client.Users.New.$post(args, options))
    },
  })
}

export function usePostUsersNew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.New.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Users.New.$post>,
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
  const mutationDefaults = getPostUsersNewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersPasswordMutationKey() {
  return ['Users', '/Users/Password', 'POST'] as const
}

export function getPostUsersPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Password.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Users.Password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.Password.$post>) {
      return parseResponse(client.Users.Password.$post(args, options))
    },
  })
}

export function usePostUsersPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Users.Password.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Users.Password.$post>,
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
  const mutationDefaults = getPostUsersPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getUsersPublicQueryKey() {
  return ['Users', '/Users/Public'] as const
}

export function getUsersPublicQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersPublicQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Users.Public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>
          >,
          ReturnType<typeof getUsersPublicQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Public.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersPublicQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Users.Public.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdIntrosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>>,
) {
  return ['Items', '/Items/:itemId/Intros', toValue(args)] as const
}

export function getItemsItemIdIntrosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdIntrosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].Intros.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdIntros<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Items)[':itemId']['Intros']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Items)[':itemId']['Intros']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Intros']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['Intros']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdIntrosQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['Intros']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdIntrosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdIntrosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].Intros.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdLocalTrailersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/LocalTrailers', toValue(args)] as const
}

export function getItemsItemIdLocalTrailersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdLocalTrailersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].LocalTrailers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdLocalTrailers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdLocalTrailersQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['LocalTrailers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdLocalTrailersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdLocalTrailersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].LocalTrailers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdSpecialFeaturesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>
  >,
) {
  return ['Items', '/Items/:itemId/SpecialFeatures', toValue(args)] as const
}

export function getItemsItemIdSpecialFeaturesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdSpecialFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items[':itemId'].SpecialFeatures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdSpecialFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdSpecialFeaturesQueryKey>
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
          Awaited<ReturnType<(typeof client.Items)[':itemId']['SpecialFeatures']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdSpecialFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdSpecialFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items[':itemId'].SpecialFeatures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Latest.$get>>,
) {
  return ['Items', '/Items/Latest', toValue(args)] as const
}

export function getItemsLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.Latest.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>
          >,
          ReturnType<typeof getItemsLatestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Latest.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.Latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsRootQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Root.$get>>,
) {
  return ['Items', '/Items/Root', toValue(args)] as const
}

export function getItemsRootQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Root.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsRootQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Items.Root.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemsRoot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Items.Root.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>
          >,
          ReturnType<typeof getItemsRootQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Items.Root.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsRootQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsRootQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Items.Root.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserFavoriteItemsItemIdMutationKey() {
  return ['UserFavoriteItems', '/UserFavoriteItems/:itemId', 'POST'] as const
}

export function getPostUserFavoriteItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserFavoriteItems)[':itemId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserFavoriteItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$post']>,
    ) {
      return parseResponse(client.UserFavoriteItems[':itemId'].$post(args, options))
    },
  })
}

export function usePostUserFavoriteItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserFavoriteItems)[':itemId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$post']>,
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
  const mutationDefaults = getPostUserFavoriteItemsItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserFavoriteItemsItemIdMutationKey() {
  return ['UserFavoriteItems', '/UserFavoriteItems/:itemId', 'DELETE'] as const
}

export function getDeleteUserFavoriteItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserFavoriteItems)[':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserFavoriteItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$delete']>,
    ) {
      return parseResponse(client.UserFavoriteItems[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteUserFavoriteItemsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserFavoriteItems)[':itemId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserFavoriteItems)[':itemId']['$delete']>,
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
  const mutationDefaults = getDeleteUserFavoriteItemsItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUserItemsItemIdRatingMutationKey() {
  return ['UserItems', '/UserItems/:itemId/Rating', 'POST'] as const
}

export function getPostUserItemsItemIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserItems)[':itemId']['Rating']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserItemsItemIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$post']>,
    ) {
      return parseResponse(client.UserItems[':itemId'].Rating.$post(args, options))
    },
  })
}

export function usePostUserItemsItemIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserItems)[':itemId']['Rating']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$post']>,
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
  const mutationDefaults = getPostUserItemsItemIdRatingMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUserItemsItemIdRatingMutationKey() {
  return ['UserItems', '/UserItems/:itemId/Rating', 'DELETE'] as const
}

export function getDeleteUserItemsItemIdRatingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.UserItems)[':itemId']['Rating']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserItemsItemIdRatingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$delete']>,
    ) {
      return parseResponse(client.UserItems[':itemId'].Rating.$delete(args, options))
    },
  })
}

export function useDeleteUserItemsItemIdRating<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.UserItems)[':itemId']['Rating']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.UserItems)[':itemId']['Rating']['$delete']>,
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
  const mutationDefaults = getDeleteUserItemsItemIdRatingMutationOptions<TError, TOnMutateResult>(
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

export function getUserViewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserViews.$get>>,
) {
  return ['UserViews', '/UserViews', toValue(args)] as const
}

export function getUserViewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserViews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.UserViews.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserViews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserViews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>
          >,
          ReturnType<typeof getUserViewsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.UserViews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserViewsGroupingOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserViews.GroupingOptions.$get>>,
) {
  return ['UserViews', '/UserViews/GroupingOptions', toValue(args)] as const
}

export function getUserViewsGroupingOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserViews.GroupingOptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserViewsGroupingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.UserViews.GroupingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserViewsGroupingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.UserViews.GroupingOptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>
              >
            >
          >,
          ReturnType<typeof getUserViewsGroupingOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.UserViews.GroupingOptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserViewsGroupingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserViewsGroupingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.UserViews.GroupingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
    >
  >,
) {
  return ['Videos', '/Videos/:videoId/:mediaSourceId/Attachments/:index', toValue(args)] as const
}

export function getVideosVideoIdMediaSourceIdAttachmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':videoId'][':mediaSourceId'].Attachments[':index'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosVideoIdMediaSourceIdAttachmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
                  >
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
                  ReturnType<
                    (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.Videos)[':videoId'][':mediaSourceId']['Attachments'][':index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosVideoIdMediaSourceIdAttachmentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':videoId'][':mediaSourceId'].Attachments[':index'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideosItemIdAdditionalPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>
  >,
) {
  return ['Videos', '/Videos/:itemId/AdditionalParts', toValue(args)] as const
}

export function getVideosItemIdAdditionalPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosItemIdAdditionalPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':itemId'].AdditionalParts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosItemIdAdditionalParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosItemIdAdditionalPartsQueryKey>
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
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['AdditionalParts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdAdditionalPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosItemIdAdditionalPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':itemId'].AdditionalParts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVideosItemIdAlternateSourcesMutationKey() {
  return ['Videos', '/Videos/:itemId/AlternateSources', 'DELETE'] as const
}

export function getDeleteVideosItemIdAlternateSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVideosItemIdAlternateSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>,
    ) {
      return parseResponse(client.Videos[':itemId'].AlternateSources.$delete(args, options))
    },
  })
}

export function useDeleteVideosItemIdAlternateSources<
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
                    ReturnType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Videos)[':itemId']['AlternateSources']['$delete']>,
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
  const mutationDefaults = getDeleteVideosItemIdAlternateSourcesMutationOptions<
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

export function getVideosItemIdStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>>,
) {
  return ['Videos', '/Videos/:itemId/stream', toValue(args)] as const
}

export function getVideosItemIdStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosItemIdStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':itemId'].stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosItemIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Videos)[':itemId']['stream']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosItemIdStreamQueryKey>
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
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosItemIdStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':itemId'].stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadVideosItemIdStreamMutationKey() {
  return ['Videos', '/Videos/:itemId/stream', 'HEAD'] as const
}

export function getHeadVideosItemIdStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId']['stream']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadVideosItemIdStreamMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Videos)[':itemId']['stream']['$head']>) {
      return parseResponse(client.Videos[':itemId'].stream.$head(args, options))
    },
  })
}

export function useHeadVideosItemIdStream<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Videos)[':itemId']['stream']['$head']>,
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
  const mutationDefaults = getHeadVideosItemIdStreamMutationOptions<TError, TOnMutateResult>(
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

export function getVideosItemIdStreamContainerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>
  >,
) {
  return ['Videos', '/Videos/:itemId/stream.:container', toValue(args)] as const
}

export function getVideosItemIdStreamContainerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideosItemIdStreamContainerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Videos[':itemId']['stream.:container'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideosItemIdStreamContainer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVideosItemIdStreamContainerQueryKey>
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
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVideosItemIdStreamContainerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideosItemIdStreamContainerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Videos[':itemId']['stream.:container'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadVideosItemIdStreamContainerMutationKey() {
  return ['Videos', '/Videos/:itemId/stream.:container', 'HEAD'] as const
}

export function getHeadVideosItemIdStreamContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadVideosItemIdStreamContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$head']>,
    ) {
      return parseResponse(client.Videos[':itemId']['stream.:container'].$head(args, options))
    },
  })
}

export function useHeadVideosItemIdStreamContainer<
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
                Awaited<ReturnType<(typeof client.Videos)[':itemId']['stream.:container']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.Videos)[':itemId']['stream.:container']['$head']>,
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
  const mutationDefaults = getHeadVideosItemIdStreamContainerMutationOptions<
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

export function getPostVideosMergeVersionsMutationKey() {
  return ['Videos', '/Videos/MergeVersions', 'POST'] as const
}

export function getPostVideosMergeVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Videos.MergeVersions.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.Videos.MergeVersions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideosMergeVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Videos.MergeVersions.$post>) {
      return parseResponse(client.Videos.MergeVersions.$post(args, options))
    },
  })
}

export function usePostVideosMergeVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.Videos.MergeVersions.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.Videos.MergeVersions.$post>,
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
  const mutationDefaults = getPostVideosMergeVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getYearsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Years.$get>>,
) {
  return ['Years', '/Years', toValue(args)] as const
}

export function getYearsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Years.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getYearsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Years.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useYears<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Years.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
          ReturnType<typeof getYearsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Years.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getYearsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getYearsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Years.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getYearsYearQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Years)[':year']['$get']>>,
) {
  return ['Years', '/Years/:year', toValue(args)] as const
}

export function getYearsYearQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Years)[':year']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getYearsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Years[':year'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useYearsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Years)[':year']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>
            >
          >,
          ReturnType<typeof getYearsYearQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Years)[':year']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getYearsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getYearsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Years[':year'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
